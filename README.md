<p align="center">
  <a href="https://www.digitalfortress.dev/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://digitalfortress-s3-bucket-vpcxuhhdwecuj.s3.amazonaws.com/Group+1410083530.svg">
      <img alt="Digital Fortress logo" src="https://digitalfortress-s3-bucket-vpcxuhhdwecuj.s3.amazonaws.com/Group+1410083530.svg">
    </picture>    
  </a>
</p>

---

# SpaceDF SDK for Javascript

The full API of this library can be found in [Document](api.doc.md).

## Table of Contents

-   [Installation](#installation)
-   [Configuration](#configuration)
-   [Usage](#usage)
-   [API Reference](#api-reference)
-   [Error Handling](#error-handling)
-   [Auto Pagination](#auto-pagination)
-   [Advanced-Usage](#advanced-usage)
-   [About](#about)

## Installation

```
npm install spacedf-sdk
```

## Configuration

Customize the SDK with a configuration file. Below are common options:

| Option           | Description                                                        | Default Value |
| ---------------- | ------------------------------------------------------------------ | ------------- |
| `organization`   | Your organization                                                  | None          |
| `baseURL`        | baseURL                                                            | None          |
| `APIKey`         | APIKey                                                             | None          |
| `timeout`        | The maximum amount of time                                         | 1 minute      |
| `httpAgent`      | An HTTP agent used to manage HTTP(S) connections                   | None          |
| `fetch`          | Specify a custom `fetch` function implementation                   | Node fetch    |
| `maxRetries`     | maxRetries                                                         | 2             |
| `defaultHeaders` | Default headers to include with every request to the API           | Default       |
| `defaultQuery`   | Default query parameters to include with every request to the API. | None          |
| `allowMultiOrgs` | Flag use multiple organizations                                    | false         |

Example:

```typescript
const sdk = new SDK({ organization: 'your-organization', APIKey: 'your-API-key' });
```

## Usage

Import and initialize a client.

```typescript
import SpaceDFSDK from 'spacedf-sdk';

const client = new SpaceDFSDK({ organization: 'your-organization', APIKey: 'your-API-key' });

/* or use with your base url */
// const client = new SpaceDFSDK({ baseURL: 'your-url', APIKey: 'your-API-key' });
```

Register new SpaceDF account.

```typescript
const registerResponse = await client.auth.register({
    first_name: 'Example',
    last_name: 'Example',
    email: 'user@example.com',
    password: 'example',
});
```

Authentication

```typescript
client.setAccessToken('your-access-token');
```

### Multiple Organizations

Use multiple organizations

```typescript
import SpaceDFSDK from 'spacedf-sdk';

const client = new SpaceDFSDK({ allowMultiOrgs: true });
```

Register new SpaceDF account.

```typescript
const registerResponse = await client.auth.register(
    {
        first_name: 'Example',
        last_name: 'Example',
        email: 'user@example.com',
        password: 'example',
    },
    {
        organization: 'your-organization',
        APIKey: 'your-API-key',
    },
);

/* Or */

const spacePoliciesResponse = await client.spacePolicies.retrieve(1, {
    organization: 'your-organization',
    APIKey: 'your-API-key',
    accessToken: 'your-access-token',
});
```

## Error Handling

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

```ts
async function main() {
    const job = await client.auth.login({ email: 'user@example.com', password: 'example' }).catch(async (err) => {
        if (err instanceof SpaceDFSDK.APIError) {
            console.log(err.status); // 400
            console.log(err.name); // BadRequestError
            console.log(err.headers); // {server: 'nginx', ...}
        } else {
            throw err;
        }
    });
}

main();
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

```ts
// Configure the default for all requests:
const client = new SpaceDFSDK({
    maxRetries: 0, // default is 2
});

// Or, configure per-request:
await client.auth.login(
    { email: 'user@example.com', password: 'example' },
    {
        maxRetries: 5,
    },
);
```

### Timeouts

Requests time out after 10 minutes by default. You can configure this with a `timeout` option:

```ts
// Configure the default for all requests:
const client = new SpaceDFSDK({
    timeout: 20 * 1000, // 20 seconds (default is 10 minutes)
});

// Override per-request:
await client.auth.login(
    { email: 'user@example.com', password: 'example' },
    {
        timeout: 5 * 1000,
    },
);
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

List methods in the SpaceDFSDK API are paginated.
You can use `for await … of` syntax to iterate through items across all pages:

```ts
async function fetchAllDashboards(params) {
    const allDashboards = [];
    // Automatically fetches more pages as needed.
    for await (const dashBoards of client.dashboards.list({ limit: 20 })) {
        allDashboards.push(dashBoards);
    }
    return allDashboards;
}
```

Alternatively, you can make request a single page at a time:

```ts
let page = await client.dashboards.list({ limit: 20 });
for (const dashBoards of page.data) {
    console.log(dashBoards);
}

// Convenience methods are provided for manually paginating:
while (page.hasNextPage()) {
    page = page.getNextPage();
    // ...
}
```

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.

```ts
const client = new SpaceDFSDK();

const response = await client.auth.login({ email: 'user@example.com', password: 'example' }).asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: login, response: raw } = await client.auth.login({ email: 'user@example.com', password: 'example' }).withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(login);
```

### Making custom/undocumented requests

This library is typed for convenient access to the documented API. If you need to access undocumented
endpoints, params, or response properties, the library can still be used.

#### Undocumented endpoints

To make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.
Options on the client, such as retries, will be respected when making these requests.

```ts
await client.post('/some/path', {
    body: { some_prop: 'foo' },
    query: { some_query_arg: 'bar' },
});
```

#### Undocumented request params

To make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented
parameter. This library doesn't validate at runtime that the request matches the type, so any extra values you
send will be sent as-is.

```ts
client.foo.create({
    foo: 'my_param',
    bar: 12,
    // @ts-expect-error baz is not yet public
    baz: 'undocumented option',
});
```

For requests with the `GET` verb, any extra params will be in the query, all other requests will send the
extra param in the body.

If you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request
options.

#### Undocumented response properties

To access undocumented response properties, you may access the response object with `// @ts-expect-error` on
the response object, or cast the response object to the requisite type. Like the request params, we do not
validate or strip extra properties from the response from the API.

### Customizing the fetch client

By default, this library uses `node-fetch` in Node, and expects a global `fetch` function in other environments.

If you would prefer to use a global, web-standards-compliant `fetch` function even in a Node environment,
(for example, if you are running Node with `--experimental-fetch` or using NextJS which polyfills with `undici`),
add the following import before your first import `from "SpaceDFSDK"`:

```ts
// Tell TypeScript and the package to use the global web fetch instead of node-fetch.
// Note, despite the name, this does not add any polyfills, but expects them to be provided if needed.
import 'spacedf-sdk/shims/web';
import SpaceDFSDK from 'spacedf-sdk';
```

To do the inverse, add `import "spacedf-sdk/shims/node"` (which does import polyfills).
This can also be useful if you are getting the wrong TypeScript types for `Response` ([more details](https://github.com/Space-DF/spacedf-sdk-node/tree/main/src/_shims)).

### Logging and middleware

You may also provide a custom `fetch` function when instantiating the client,
which can be used to inspect or alter the `Request` or `Response` before/after each request:

```ts
import { fetch } from 'undici'; // as one example
import SpaceDFSDK from 'spacedf-sdk';

const client = new SpaceDFSDK({
    fetch: async (url: RequestInfo, init?: RequestInit): Promise<Response> => {
        console.log('About to make a request', url, init);
        const response = await fetch(url, init);
        console.log('Got response', response);
        return response;
    },
});
```

Note that if given a `DEBUG=true` environment variable, this library will log all requests and responses automatically.
This is intended for debugging purposes only and may change in the future without notice.

### Configuring an HTTP(S) Agent (e.g., for proxies)

By default, this library uses a stable agent for all http/https requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.

If you would like to disable or customize this behavior, for example to use the API behind a proxy, you can pass an `httpAgent` which is used for all requests (be they http or https), for example:

```ts
import http from 'http';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Configure the default for all requests:
const client = new SpaceDFSDK({
    httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});

// Override per-request:
await client.dashboards.list({
    httpAgent: new http.Agent({ keepAlive: false }),
});
```

## License

This project is Copyright (c) 2024 and onwards Digital Fortress. It is free software and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

<a href="https://www.digitalfortress.dev/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://digitalfortress-s3-bucket-vpcxuhhdwecuj.s3.amazonaws.com/Group+1410083530.svg">
    <img alt="Digital Fortress logo" src="https://digitalfortress-s3-bucket-vpcxuhhdwecuj.s3.amazonaws.com/Group+1410083530.svg" width="160">
  </picture>
</a>

This project is made and maintained by Digital Fortress.

We are an experienced team in R&D, software, hardware, cross-platform mobile and DevOps.

See more of [our projects][projects] or do you need to complete one?

-> [Let’s connect with us][website]

[projects]: https://github.com/digitalfortress-dev
[website]: https://www.digitalfortress.dev
