<p align="center">
  <a href="https://www.digitalfortress.dev/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://digitalfortress-s3-bucket-vpcxuhhdwecuj.s3.amazonaws.com/Group+1410083530.svg">
      <img alt="Digital Fortress logo" src="https://digitalfortress-s3-bucket-vpcxuhhdwecuj.s3.amazonaws.com/Group+1410083530.svg">
    </picture>    
  </a>
</p>

# Table of Contents

-   [Auth](#Auth)
-   [Space Policies](#space-policies)
-   [Space Role Users](#space-role-users)
-   [Space Roles](#space-roles)
-   [Spaces](#spaces)
-   [Oauth2](#oauth2)
-   [Dashboards](#dashboards)
-   [Device States](#deviceStates)

# Auth

## Overview

The `Auth` class provides authentication-related methods for user login, registration, OAuth login with Google, and token refresh. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>login</strong></summary>

Authenticate a user with email and password.

**Signature:**

```typescript
login(body: AuthLoginParams, options?: Core.RequestOptions): Core.APIPromise<CustomTokenObtainPair>
```

**Parameters:**

-   `body` _(AuthLoginParams)_: Object containing user credentials.
    -   `email` _(string)_: User's email address.
    -   `password` _(string)_: User's password.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<CustomTokenObtainPair>`

**Example:**

```typescript
const loginResponse = await client.auth.login({
    email: 'user@example.com',
    password: 'example_password',
});
```

</details>

<details>
  <summary><strong>oauth2Google</strong></summary>

Log in a user via Google OAuth2.

**Signature:**

```typescript
oauth2Google(body: AuthOauth2GoogleParams, options?: Core.RequestOptions): Core.APIPromise<OAuthLogin>
```

**Parameters:**

-   `body` _(AuthOauth2GoogleParams)_: Object containing OAuth2 parameters.
    -   `authorization*code` _(string)_: The authorization code obtained from Google.
    -   `code verifier` _(string)_: The code verifier for PKCE.

**Returns:** `Promise<OAuthLogin>`

**Example:**

```typescript
const googleAuthResponse = await client.auth.oauth2Google({
    authorization_code: 'auth_code_from_google',
    code_verifier: 'verifier',
});
```

</details>

<details>
  <summary><strong>refreshToken</strong></summary>

Refresh the access token using a refresh token.

**Signature:**

```typescript
refreshToken(body: AuthRefreshTokenParams, options?: Core.RequestOptions): Core.APIPromise<CustomTokenRefresh>
```

**Parameters:**

-   `body` _(AuthRefreshTokenParams)_: Object containing the refresh token.
    -   `refresh` _(string)_: Refresh token.

**Returns:** `Promise<CustomTokenRefresh>`

**Example:**

```typescript
const refreshResponse = await client.auth.refreshToken({
    refresh: 'refresh_token',
});
```

</details>

<details>
  <summary><strong>register</strong></summary>

Register a new user account.

**Signature:**

```typescript
register(body: AuthRegisterParams, options?: Core.RequestOptions): Core.APIPromise<Registration>
```

**Parameters:**

-   `body` _(AuthRegisterParams)_: Object containing user registration details.
    -   `email` _(string)_: User's email address.
    -   `password` _(string)_: User's chosen password.
    -   `first*name` _(string)_: User's first name (optional).
    -   `last*name` _(string)_: User's last name (optional).

**Returns:** `Promise<Registration>`

**Example:**

```typescript
const registerResponse = await client.auth.register({
    first_name: 'Example',
    last_name: 'Example',
    email: 'user@example.com',
    password: 'example_password',
});
```

</details>

---

# Space Policies

## Overview

The `SpacePolicies` class provides methods for retrieving and listing space policies. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>retrieve</strong></summary>

Retrieve a specific space policy by its ID.

**Signature:**

```typescript
retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SpacePolicy>
```

**Parameters:**

-   `id` _(number)_: The ID of the space policy to retrieve.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpacePolicy>`

**Example:**

```typescript
const spacePolicy = await client.spacePolicies.retrieve(1);
```

</details>

<details>
  <summary><strong>list</strong></summary>

List all space policies or filter them based on query parameters.

**Signature:**

```typescript
list(query?: SpacePolicyListParams, options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse>;
list(options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse>;
list(query: SpacePolicyListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse>
```

**Parameters:**

-   `query` _(SpacePolicyListParams)_: (optional) Filters to apply when listing policies.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpacePolicyListResponse>`

**Example:**

```typescript
const spacePolicies = await client.spacePolicies.list({ page: 1, limit: 10 });
```

</details>

---

# Space Role Users

## Overview

The `SpaceRoleUsers` class provides methods for managing users within specific space roles. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>retrieve</strong></summary>

Retrieve a specific space role user by their ID.

**Signature:**

```typescript
retrieve(id: number, params: SpaceRoleUserRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUser>
```

**Parameters:**

-   `id` _(number)_: The ID of the space role user to retrieve.
-   `params` _(SpaceRoleUserRetrieveParams)_: Parameters containing the space slug.
    -   `X-Space`: _(string)_: Space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceRoleUser>`

**Example:**

```typescript
const spaceRoleUser = await client.spaceRoleUsers.retrieve(1, { 'X-Space': 'example-space' });
```

</details>

<details>
  <summary><strong>list</strong></summary>

List all space role users or filter them based on query parameters.

**Signature:**

```typescript
list(params: SpaceRoleUserListParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUserListResponse>
```

**Parameters:**

-   `params` _(SpaceRoleUserListParams)_: Parameters containing the space slug and any additional filters.
    -   `X-Space`: _(string)_: Header param for space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceRoleUserListResponse>`

**Example:**

```typescript
const spaceRoleUsers = await client.spaceRoleUsers.list({ 'X-Space': 'example-space', page: 1, limit: 10 });
```

</details>

<details>
  <summary><strong>delete</strong></summary>

Delete a specific space role user by their ID.

**Signature:**

```typescript
delete(id: number, params: SpaceRoleUserDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(number)_: The ID of the space role user to delete.
-   `params` _(SpaceRoleUserDeleteParams)_: Parameters containing the space slug.
    -   `X-Space`: _(string)_: Space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.spaceRoleUsers.delete(1, { 'X-Space': 'example-space' });
```

</details>

---

# Space Roles

## Overview

The `SpaceRoles` class provides methods for managing roles within specific spaces. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>create</strong></summary>

Create a new space role.

**Signature:**

```typescript
create(params: SpaceRoleCreateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole>
```

**Parameters:**

-   `params` _(SpaceRoleCreateParams)_: Parameters for creating a new space role.
    -   `name`: _(string)_: The name of the space role.
    -   `policies`: _(Array<number>)_: An array of policy IDs associated with the space role.
    -   `X-Space`: _(string)_: Header param for space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceRole>`

**Example:**

```typescript
const newSpaceRole = await client.spaceRoles.create({
    name: 'Admin',
    policies: [1, 2],
    'X-Space': 'example-space',
});
```

</details>

<details>
  <summary><strong>retrieve</strong></summary>

Retrieve a specific space role by its ID.

**Signature:**

```typescript
retrieve(id: number, params: SpaceRoleRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole>
```

**Parameters:**

-   `id` _(number)_: The ID of the space role to retrieve.
-   `params` _(SpaceRoleRetrieveParams)_: Parameters containing the space slug.
    -   `X-Space`: _(string)_: Space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceRole>`

**Example:**

```typescript
const spaceRole = await client.spaceRoles.retrieve(1, { 'X-Space': 'example-space' });
```

</details>

<details>
  <summary><strong>update</strong></summary>

Update a specific space role by its ID.

**Signature:**

```typescript
update(id: number, params: SpaceRoleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole>
```

**Parameters:**

-   `id` _(number)_: The ID of the space role to update.
-   `params` _(SpaceRoleUpdateParams)_: Parameters for updating the space role.
    -   `name`: _(string)_: The new name of the space role.
    -   `policies`: _(Array<number>)_: An updated array of policy IDs associated with the space role.
    -   `X-Space`: _(string)_: Header param for space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceRole>`

**Example:**

```typescript
const updatedSpaceRole = await client.spaceRoles.update(1, {
    name: 'Super Admin',
    policies: [1, 3],
    'X-Space': 'example-space',
});
```

</details>

<details>
  <summary><strong>list</strong></summary>

List all space roles or filter them based on query parameters.

**Signature:**

```typescript
list(params: SpaceRoleListParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleListResponse>
```

**Parameters:**

-   `params` _(SpaceRoleListParams)_: Parameters containing the space slug and any additional filters.
    -   `X-Space`: _(string)_: Header param for space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceRoleListResponse>`

**Example:**

```typescript
const spaceRoles = await client.spaceRoles.list({ 'X-Space': 'example-space', page: 1, limit: 10 });
```

</details>

<details>
  <summary><strong>delete</strong></summary>

Delete a specific space role by its ID.

**Signature:**

```typescript
delete(id: number, params: SpaceRoleDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(number)_: The ID of the space role to delete.
-   `params` _(SpaceRoleDeleteParams)_: Parameters containing the space slug.
    -   `X-Space`: _(string)_: Space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.spaceRoles.delete(1, { 'X-Space': 'example-space' });
```

</details>

---

# Spaces

## Overview

The `Spaces` class provides methods for managing spaces within an application. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>create</strong></summary>

Create a new space.

**Signature:**

```typescript
create(body: SpaceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Space>
```

**Parameters:**

-   `body` _(SpaceCreateParams)_: Parameters for creating a new space.
    -   `logo`: _(string)_: URL of the space logo.
    -   `name`: _(string)_: The name of the space.
    -   `slug*name`: _(string)_: Slug name for the space.
    -   `is*active` _(boolean)_: (Optional) Whether the space is active.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<Space>`

**Example:**

```typescript
const newSpace = await client.spaces.create({
    logo: 'https://example.com/logo.png',
    name: 'My Space',
    slug_name: 'my-space',
    is_active: true,
});
```

</details>

<details>
  <summary><strong>update</strong></summary>

Update an existing space.

**Signature:**

```typescript
update(params: SpaceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Space>
```

**Parameters:**

-   `params` _(SpaceUpdateParams)_: Parameters for updating the space.
    -   `logo`: _(string)_: URL of the new space logo.
    -   `name`: _(string)_: The new name of the space.
    -   `slug*name`: _(string)_: The new slug name for the space.
    -   `X-Space`: _(string)_: Header param for space slug name.
    -   `is*active` _(boolean)_: (Optional) Whether the space is active.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<Space>`

**Example:**

```typescript
const updatedSpace = await client.spaces.update({
    logo: 'https://example.com/new-logo.png',
    name: 'Updated Space',
    slug_name: 'updated-space',
    'X-Space': 'my-space',
    is_active: true,
});
```

</details>

<details>
  <summary><strong>list</strong></summary>

List all spaces or filter them based on query parameters.

**Signature:**

```typescript
list(params?: SpaceListParams, options?: Core.RequestOptions): Core.APIPromise<SpaceListResponse>
```

**Parameters:**

-   `params` _(SpaceListParams)_: (Optional) Parameters containing the space slug and any additional filters.
    -   `X-Space`: _(string)_: Header param for space slug name (optional).
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceListResponse>`

**Example:**

```typescript
const spaces = await client.spaces.list({ 'X-Space': 'my-space' });
```

</details>

<details>
  <summary><strong>delete</strong></summary>

Delete a specific space.

**Signature:**

```typescript
delete(params: SpaceDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `params` _(SpaceDeleteParams)_: Parameters containing the space slug.
    -   `X-Space`: _(string)_: Space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.spaces.delete({ 'X-Space': 'my-space' });
```

</details>

---

# Oauth2

## Overview

The `OAuth2` class provides methods for handling OAuth2 authorization and token exchange processes within an application.

## Methods

<details>
  <summary><strong>authorize</strong></summary>

Initiates the OAuth2 authorization flow by generating a code challenge and sending the authorization request.

**Signature:**

```typescript
async authorize(body: OAuth2AuthorizeParams, options?: Core.RequestOptions): Promise<OAuth2Authorize>
```

**Parameters:**

-   `body` _(OAuth2AuthorizeParams)_: Parameters required for authorization.
    -   `client_id`: _(string)_: The client ID of the application.
    -   `redirect*uri`: _(string)_: The URI to redirect to after authorization.
    -   `scopes`: _(Array<'organization'>)_: Scopes for the authorization request.
-   `options` _(Core.RequestOptions)_: (Optional) Additional request options.

**Returns:** `Promise<OAuth2Authorize>`

**Example:**

```typescript
const authParams: OAuth2AuthorizeParams = {
    client_id: 'your-client-id',
    redirect_uri: 'https://yourapp.com/callback',
    scopes: ['organization'],
};
const authResponse = await client.oauth2.authorize(authParams);
```

</details>

<details>
  <summary><strong>token</strong></summary>

Exchanges the authorization code for an access token.

**Signature:**

```typescript
token(body: OAuth2Token, options?: Core.RequestOptions): Core.APIPromise<OAuth2Token>
```

**Parameters:**

-   `body` _(OAuth2Token)_: Parameters required to obtain an access token.
    -   `client*id`: _(string)_: The client ID of the application.
    -   `client*secret`: _(string)_: The client secret of the application.
    -   `code`: _(string)_: The authorization code received from the authorization server.
    -   `code*verifier`: _(string)_: The code verifier used in the authorization request.
    -   `scopes`: _(Array<'organization'>)_: (Optional) Scopes for the token request.
    -   `id*token`: _(string)_: (Optional) ID token if available.

**Returns:** `Promise<OAuth2Token>`

**Example:**

```typescript
const tokenParams: OAuth2Token = {
    client_id: 'your-client-id',
    client_secret: 'your-client-secret',
    code: 'authorization-code',
    code_verifier: 'your-code-verifier',
};
const tokenResponse = await oauth2.token(tokenParams);
```

</details>

---

# Dashboards

## Overview

The `Dashboards` class provides methods to manage dashboards and their associated widgets within an application.

## Methods

<details>
  <summary><strong>create</strong></summary>

Creates a new dashboard.

**Signature:**

```typescript
create(params: DashboardCreateParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard>
```

**Parameters:**

-   `params` _(DashboardCreateParams)_: Parameters required for creating a dashboard.
    -   `name`: _(string)_: The name of the dashboard.
    -   `X-Space`: _(string)_: The space slug name.

**Returns:** `Promise<Dashboard>`

**Example:**

```typescript
const dashboardParams: DashboardCreateParams = {
    name: 'New Dashboard',
    'X-Space': 'your-space-slug',
};
const newDashboard = await client.dashboards.create(dashboardParams);
```

</details>

<details>
  <summary><strong>retrieve</strong></summary>

Retrieves a specific dashboard by its ID.

**Signature:**

```typescript
retrieve(id: number, params: DashboardRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard>
```

**Parameters:**

-   `id` _(number)_: The ID of the dashboard to retrieve.
-   `params` _(DashboardRetrieveParams)_: Parameters required for retrieving a dashboard.
    -   `X-Space`: _(string)_: The space slug name.

**Returns:** `Promise<Dashboard>`

**Example:**

```typescript
const dashboardId = 1;
const dashboardDetails = await client.dashboards.retrieve(dashboardId, { 'X-Space': 'your-space-slug' });
```

</details>

<details>
  <summary><strong>update</strong></summary>

Updates an existing dashboard.

**Signature:**

```typescript
update(id: number, params: DashboardUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard>
```

**Parameters:**

-   `id` _(number)_: The ID of the dashboard to update.
-   `params` _(DashboardUpdateParams)_: Parameters required for updating a dashboard.
    -   `name`: _(string)_: The new name of the dashboard.
    -   `X-Space`: _(string)_: The space slug name.

**Returns:** `Promise<Dashboard>`

**Example:**

```typescript
const updateParams: DashboardUpdateParams = {
    name: 'Updated Dashboard',
    'X-Space': 'your-space-slug',
};
const updatedDashboard = await client.dashboards.update(dashboardId, updateParams);
```

</details>

<details>
  <summary><strong>list</strong></summary>

Lists all dashboards within a specific space.

**Signature:**

```typescript
list(params: DashboardListParams, options?: Core.RequestOptions): Core.APIPromise<DashboardListResponse>
```

**Parameters:**

-   `params` _(DashboardListParams)_: Parameters for listing dashboards.
    -   `X-Space`: _(string)_: The space slug name.

**Returns:** `Promise<DashboardListResponse>`

**Example:**

```typescript
const dashboardsList = await client.dashboards.list({ 'X-Space': 'your-space-slug' });
```

</details>

<details>
  <summary><strong>delete</strong></summary>

Deletes a specific dashboard by its ID.

**Signature:**

```typescript
delete(id: number, params: DashboardDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(number)_: The ID of the dashboard to delete.
-   `params` _(DashboardDeleteParams)_: Parameters required for deleting a dashboard.
    -   `X-Space`: _(string)_: The space slug name.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.dashboards.delete(dashboardId, { 'X-Space': 'your-space-slug' });
```

</details>

<details>
  <summary><strong>createWidget</strong></summary>

Creates a new widget in a specified dashboard.

**Signature:**

```typescript
createWidget(dashboardId: string, params: WidgetCreateParams, options?: Core.RequestOptions): Core.APIPromise<Widget>
```

**Parameters:**

-   `dashboardId` _(string)_: The ID of the dashboard to create the widget in.
-   `params` _(WidgetCreateParams)_: Parameters required for creating a widget.
    -   `configuration`: _(any)_: Configuration settings for the widget.
    -   `X-Space`: _(string)_: The space slug name.

**Returns:** `Promise<Widget>`

**Example:**

```typescript
const widgetParams: WidgetCreateParams = {
configuration: { /_ widget configuration _/ },
'X-Space': 'your-space-slug',
};
const newWidget = await client.dashboards.createWidget(dashboardId, widgetParams);
```

</details>

<details>
  <summary><strong>retrieveWidget</strong></summary>

Retrieves a specific widget by its ID from a dashboard.

**Signature:**

```typescript
retrieveWidget(dashboardId: string, id: number, params: WidgetRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Widget>
```

**Parameters:**

-   `dashboardId` _(string)_: The ID of the dashboard containing the widget.
-   `id` _(number)_: The ID of the widget to retrieve.
-   `params` _(WidgetRetrieveParams)_: Parameters required for retrieving a widget.
    -   `X-Space`: _(string)_: The space slug name.

**Returns:** `Promise<Widget>`

**Example:**

```typescript
const widgetDetails = await client.dashboards.retrieveWidget(dashboardId, widgetId, { 'X-Space': 'your-space-slug' });
```

</details>

<details>
  <summary><strong>updateWidget</strong></summary>

Updates an existing widget in a specified dashboard.

**Signature:**

```typescript
updateWidget(dashboardId: string, id: number, params: WidgetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Widget>
```

**Parameters:**

-   `dashboardId` _(string)_: The ID of the dashboard containing the widget.
-   `id` _(number)_: The ID of the widget to update.
-   `params` _(WidgetUpdateParams)_: Parameters required for updating a widget.
    -   `configuration`: _(any)_: New configuration settings for the widget.
    -   `X-Space`: _(string)_: The space slug name.

**Returns:** `Promise<Widget>`

**Example:**

```typescript
const updateWidgetParams: WidgetUpdateParams = {
configuration: { /_ new widget configuration _/ },
'X-Space': 'your-space-slug',
};
const updatedWidget = await client.dashboards.updateWidget(dashboardId, widgetId, updateWidgetParams);
```

</details>

<details>
  <summary><strong>listWidgets</strong></summary>

Lists all widgets within a specific dashboard.

**Signature:**

```typescript
listWidgets(dashboardId: string, params: WidgetListParams, options?: Core.RequestOptions): Core.APIPromise<WidgetListResponse>
```

**Parameters:**

-   `dashboardId` _(string)_: The ID of the dashboard to list widgets from.
-   `params` _(WidgetListParams)_: Parameters for listing widgets.
    -   `X-Space`: _(string)_: The space slug name.
    -   `ordering`: _(string)_: (Optional) Field to use when ordering the results.

**Returns:** `Promise<WidgetListResponse>`

**Example:**

```typescript
const widgetsList = await client.dashboards.listWidgets(dashboardId, { 'X-Space': 'your-space-slug' });
```

</details>

<details>
  <summary><strong>deleteWidget</strong></summary>

Deletes a specific widget by its ID from a dashboard.

**Signature:**

```typescript
deleteWidget(dashboardId: string, id: number, params: WidgetDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `dashboardId` _(string)_: The ID of the dashboard containing the widget.
-   `id` _(number)_: The ID of the widget to delete.
-   `params` _(WidgetDeleteParams)_: Parameters required for deleting a widget.
    -   `X-Space`: _(string)_: The space slug name.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.dashboards.deleteWidget(dashboardId, widgetId, { 'X-Space': 'your-space-slug' });
```

</details>

# Device States

## Overview

The `Device States` class provides methods to retrieve various device state metrics (daily, hourly, minutely, monthly) from an API.

## Methods

<details>
  <summary><strong>retrieveDaily</strong></summary>

Retrieves daily device states.

**Signature:**

```typescript
retrieveDaily(params: DailyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<DailyRetrieveResponse>
```

**Parameters:**

-   `params` _(DailyRetrieveParams)_: Parameters for retrieving daily device states.
    -   `X-Space`: _(string)_: Space slug name.
    -   Other query parameters specific to daily retrieval.

**Returns:** `Promise<DailyRetrieveResponse>`

**Example:**

```typescript
const dailyParams: DailyRetrieveParams = {
    'X-Space': 'your-space-slug',
    // other parameters
};
const dailyData = await client.deviceStates.retrieveDaily(dailyParams);
```

</details>

<details>
  <summary><strong>retrieveHourly</strong></summary>

Retrieves hourly device states.

**Signature:**

```typescript
retrieveHourly(params: HourlyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<HourlyRetrieveResponse>
```

**Parameters:**

-   `params` _(HourlyRetrieveParams)_: Parameters for retrieving hourly device states.
    -   `X-Space`: _(string)_: Space slug name.
    -   Other query parameters specific to hourly retrieval.

**Returns:** `Promise<HourlyRetrieveResponse>`

**Example:**

```typescript
const hourlyParams: HourlyRetrieveParams = {
    'X-Space': 'your-space-slug',
    // other parameters
};
const hourlyData = await client.deviceStates.retrieveHourly(hourlyParams);
```

</details>

<details>
  <summary><strong>retrieveMinutely</strong></summary>

Retrieves minutely device states.

**Signature:**

```typescript
retrieveMinutely(params: MinutelyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<MinutelyRetrieveResponse>
```

**Parameters:**

-   `params` _(MinutelyRetrieveParams)_: Parameters for retrieving minutely device states.
    -   `X-Space`: _(string)_: Space slug name.
    -   Other query parameters specific to minutely retrieval.

**Returns:** `Promise<MinutelyRetrieveResponse>`

**Example:**

```typescript
const minutelyParams: MinutelyRetrieveParams = {
    'X-Space': 'your-space-slug',
    // other parameters
};
const minutelyData = await client.deviceStates.retrieveMinutely(minutelyParams);
```

</details>

<details>
  <summary><strong>retrieveMonthly</strong></summary>

Retrieves monthly device states.

**Signature:**

```typescript
retrieveMonthly(params: MonthlyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<MonthlyRetrieveResponse>
```

**Parameters:**

-   `params` _(MonthlyRetrieveParams)_: Parameters for retrieving monthly device states.
    -   `X-Space`: _(string)_: Space slug name.
    -   Other query parameters specific to monthly retrieval.

**Returns:** `Promise<MonthlyRetrieveResponse>`

**Example:**

```typescript
const monthlyParams: MonthlyRetrieveParams = {
    'X-Space': 'your-space-slug',
    // other parameters
};
const monthlyData = await client.deviceStates.retrieveMonthly(monthlyParams);
```

</details>

---