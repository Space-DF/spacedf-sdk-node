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
-   [Credentials](#credentials)
-   [Space Policies](#space-policies)
-   [Space Role Users](#space-role-users)
-   [Space Roles](#space-roles)
-   [Spaces](#spaces)
-   [Oauth2](#oauth2)
-   [Dashboards](#dashboards)
-   [Device States](#deviceStates)
-   [Widgets](#widgets)
-   [Device Spaces](#device-spaces)
-   [Users](#users)
-   [Trip](#trip)
-   [Telemetry](#telemetry)

# Auth

## Overview

The `Auth` class provides authentication-related methods for user login, registration, OAuth login with Google, token refresh, switching spaces, and OAuth login with SpaceDF Console. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>login</strong></summary>

Authenticate a user with email and password.

**Signature:**

```typescript
login(body: AuthLoginParams, options?: Core.RequestOptions): Core.APIPromise<TokenPair>
```

**Parameters:**

-   `body` _(AuthLoginParams)_: Object containing user credentials.
    -   `email` _(string)_: User's email address.
    -   `password` _(string)_: User's password.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<TokenPair>`

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
    -   `authorization_code` _(string)_: The authorization code obtained from Google.
    -   `code_verifier` _(string)_: The code verifier for PKCE.

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
  <summary><strong>googleLogin</strong></summary>

Log in a user via Google using an authorization code.

**Signature:**

```typescript
googleLogin(body: GoogleLogin, options?: Core.RequestOptions): Core.APIPromise<AuthTokenPair>
```

**Parameters:**

-   `body` _(GoogleLogin)_: Object containing the Google authorization code.
    -   `authorization_code` _(string)_: The authorization code received from Google OAuth2.

**Returns:** `Promise<AuthTokenPair>`

**Example:**

```typescript
const tokenPair = await client.auth.googleLogin({
    authorization_code: '4/0Ab_5qllO5QRK6Uct5jTNNfW2fcf2v76Ub9NCH348fOvL0UBts4c7kRjSoUqjCf_wT05VqA',
});
```

</details>

<details>
  <summary><strong>oauthSendOtp</strong></summary>

Send a one-time password (OTP) to the user's email for OAuth login.

**Signature:**

```typescript
oauthSendOtp(body: OAuthSendOtp, options?: Core.RequestOptions): Core.APIPromise<OAuthSendOtp>
```

**Parameters:**

-   `body` _(OAuthSendOtp)_: Object containing user email.
    -   `email` _(string)_: The email address to send the OTP to.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<OAuthSendOtp>`

**Example:**

```typescript
await client.auth.oauthSendOtp({
    email: 'user@example.com',
});
```

</details>

<details>
  <summary><strong>forgetPassword</strong></summary>

Send a password reset request for a user's account using their token and password.

**Signature:**

```typescript
forgetPassword(body: ForgetPasswordParams, options?: Core.RequestOptions): Core.APIPromise<ForgetPasswordParams>
```

**Parameters:**

-   `body` _(ForgetPasswordParams)_: Object containing user credentials.
    -   `token` _(string)_: The token associated with the user's account.
    -   `password` _(string)_: The new password to set for the account.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<ForgetPasswordParams>`

**Example:**

```typescript
await client.auth.forgetPassword({
    token: 'token',
    password: 'newSecurePassword123',
});
```

</details>

<details>
  <summary><strong>sendEmailConfirm</strong></summary>

Send a confirmation email to the user's address to verify ownership.

**Signature:**

```typescript
sendEmailConfirm(body: OAuthSendEmail, options?: Core.RequestOptions): Core.APIPromise<OAuthSendEmail>
```

**Parameters:**

-   `body` _(OAuthSendEmail)_: Object containing user email.
    -   `email` _(string)_: The email address to send the confirmation link to.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<OAuthSendEmail>`

**Example:**

```typescript
await client.auth.sendEmailConfirm({
    email: 'user@example.com',
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
    space_slug_name: 'default-1fa0d173-9c7c-4460-afa0-5a524dfcdff6',
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
    -   `first_name` _(string)_: User's first name (optional).
    -   `last_name` _(string)_: User's last name (optional).
    -   `otp` _(string)_: User's OTP code (optional).

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

<details>
  <summary><strong>oauth2SpaceDF</strong></summary>

Log in a user via SpaceDF Console OAuth2.

**Signature:**

```typescript
oauth2SpaceDF(body: OAuthSpaceDF, options?: Core.RequestOptions): Core.APIPromise<OAuthSpaceDF>
```

**Parameters:**

-   `body` _(OAuthSpaceDF)_: Object containing OAuth2 parameters.
    -   `code_verifier` _(string)_: The code verifier for PKCE.
    -   `code` _(string)_: The authorization code obtained from SpaceDF Console.
    -   `client_id` _(string)_: The client ID of the application.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<OAuthSpaceDF>`

**Example:**

```typescript
const spaceDFAuthResponse = await client.auth.oauth2SpaceDF({
    code_verifier: 'verifier',
    code: 'auth_code_from_spacedf',
    client_id: 'your-client-id',
});
```

</details>

<details>
  <summary><strong>switchSpaces</strong></summary>

Switch the user's active space using a refresh token.

**Signature:**

```typescript
switchSpaces(body: AuthRefreshTokenParams, options?: Core.RequestOptions): Core.APIPromise<CustomTokenRefresh>
```

**Parameters:**

-   `body` _(AuthRefreshTokenParams)_: Object containing the refresh token and target space.
    -   `refresh` _(string)_: Refresh token.
    -   `space` _(string)_: Target space to switch to.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<CustomTokenRefresh>`

**Example:**

```typescript
const switchResponse = await client.auth.switchSpaces({
    refresh: 'refresh_token',
    space: 'target_space',
});
```

</details>

<details>
  <summary><strong>changePassword</strong></summary>

Change the current user password.

**Signature:**

```typescript
changePassword(body: AuthChangePasswordParams, options?: Core.RequestOptions): Core.APIPromise<AuthChangePasswordParams>
```

**Parameters:**

-   `body` _(AuthChangePasswordParams)_: Object containing the current password and new password.
    -   `password` _(string)_: Current password.
    -   `new_password` _(string)_: New password.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<AuthChangePasswordParams>`

**Example:**

```typescript
const switchResponse = await client.auth.switchSpaces({
    password: 'current_password',
    new_password: 'new_password',
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
list(spaceName: string, query?: SpacePolicyListParams, options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse>;
list(spaceName: string, options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse>;
list(spaceName: string, query: SpacePolicyListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse>
```

**Parameters:**

-   `spaceName` _string_: The space slug name.
-   `query` _(SpacePolicyListParams)_: (optional) Filters to apply when listing policies.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpacePolicyListResponse>`

**Example:**

```typescript
const spacePolicies = await client.spacePolicies.list('your-space-slug', { page: 1, limit: 10 });
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
retrieve(id: number, params: SpaceRoleUsersParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUser>
```

**Parameters:**

-   `id` _(number)_: The ID of the space role user to retrieve.
-   `params` _(SpaceRoleUsersParams)_: Parameters containing the space slug.
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
list(spaceName: string, params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUserListResponse>
```

**Parameters:**

-   `spaceName`: _(string)_: Header param for space slug name.
-   `params` _(SpaceRoleUserListParams)_: Parameters containing any additional filters.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceRoleUserListResponse>`

**Example:**

```typescript
const spaceRoleUsers = await client.spaceRoleUsers.list('example-space', { page: 1, limit: 10 });
console.log(spaceRoleUsers);
```

</details>

<details>
  <summary><strong>update</strong></summary>

Update the details of a specific space role user.

**Signature:**

```typescript
update(id: number, params: SpaceRoleParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleParams>
```

**Parameters:**

-   `id` _(number)_: The ID of the space role user to update.
-   `params` _(SpaceRoleParams)_: Parameters containing updated space role details.
    -   `space_role`: _(string)_: The updated space role for the user.
    -   `X-Space`: _(string)_: The space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceRoleParams>`

**Example:**

```typescript
const updatedRole = await client.spaceRoleUsers.update(1, { space_role: 'new-role', 'X-Space': 'your-space-slug' });
console.log(updatedRole);
```

</details>

<details>
  <summary><strong>partialUpdate</strong></summary>

Partially update the details of a specific space role user.

**Signature:**

```typescript
partialUpdate(id: number, params: SpaceRoleParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleParams>
```

**Parameters:**

-   `id` _(number)_: The ID of the space role user to partially update.
-   `params` _(SpaceRoleParams)_: Parameters containing updated space role details.
    -   `space_role`: _(string)_: The updated space role for the user.
    -   `X-Space`: _(string)_: The space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceRoleParams>`

**Example:**

```typescript
const partialUpdatedRole = await client.spaceRoleUsers.partialUpdate(1, { space_role: 'another-role', 'X-Space': 'your-space-slug' });
console.log(partialUpdatedRole);
```

</details>

<details>
  <summary><strong>setSpaceDefault</strong></summary>

Set a specific space role user as the default for their space.

**Signature:**

```typescript
setSpaceDefault(id: String, params: SpaceRoleUsersParams, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(string)_: The ID of the space role user to set as default.
-   `params` _(SpaceRoleUsersParams)_: Parameters containing the space slug.
-   `X-Space`: _(string)_: Space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.spaceRoleUsers.setSpaceDefault('3fa85f64-5717-4562-b3fc ...');
console.log('Space role user has been set as default.');
```

</details>

<details>
  <summary><strong>delete</strong></summary>

Delete a specific space role user by their ID.

**Signature:**

```typescript
delete(id: number, params: SpaceRoleUsersParams, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(number)_: The ID of the space role user to delete.
-   `params` _(SpaceRoleUsersParams)_: Parameters containing the space slug.
    -   `X-Space`: _(string)_: Space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.spaceRoleUsers.delete(1, { 'X-Space': 'example-space' });
```

</details>

---

# Credentials

## Overview

The `Credentials` class provides methods for retrieving OAuth credentials, such as the client ID.

## Methods

<details>
  <summary><strong>retrieve</strong></summary>

Retrieve the OAuth client ID.

**Signature:**

```typescript
retrieve(options?: Core.RequestOptions): Core.APIPromise<OAuthCredentials>
```

**Parameters:**

-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<OAuthCredentials>`

**Example:**

```typescript
const credentials = await client.credentials.retrieve();
console.log(credentials.client_id);
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
retrieve(id: number, params: SpaceRolesParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole>
```

**Parameters:**

-   `id` _(number)_: The ID of the space role to retrieve.
-   `params` _(SpaceRolesParams)_: Parameters containing the space slug.
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
list(spaceName: string, params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleListResponse>
```

**Parameters:**

-   `spaceName`: _(string)_: Header param for space slug name.
-   `params` _(ListParamsResponse)_: Parameters containing the additional filters.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<SpaceRoleListResponse>`

**Example:**

```typescript
const spaceRoles = await client.spaceRoles.list('example-space', { page: 1, limit: 10 });
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
    -   `slug_name`: _(string)_: Slug name for the space.
    -   `is_active` _(boolean)_: (Optional) Whether the space is active.
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
    -   `slug_name`: _(string)_: The new slug name for the space.
    -   `X-Space`: _(string)_: Header param for space slug name.
    -   `is_active` _(boolean)_: (Optional) Whether the space is active.
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
delete(params: SpaceParams, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `params` _(SpaceParams)_: Parameters containing the space slug.
    -   `X-Space`: _(string)_: Space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.spaces.delete({ 'X-Space': 'my-space' });
```

</details>

<details>
  <summary><strong>invitation</strong></summary>

Send an invitation to users to join a space.

**Signature:**

```typescript
invitation(params: OAuthInvitationParams, options?: Core.RequestOptions): Core.APIPromise<OAuthInvitationParams>
```

**Parameters:**

-   `params` _(OAuthInvitationParams)_: Contains a list of receivers with emails and role IDs.
    -   `receiver_list`: _(Receiver[])_: A list of invitation targets.
        -   `email` _(string)_: Email address of the user to invite.
        -   `space_role_id` _(string)_: Role ID assigned to the user in the space.
    -   `X-Space`: _(string)_: The space slug name.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<OAuthInvitationParams>`

**Example:**

```typescript
const invitationResponse = await client.spaces.invitation({
    receiver_list: [
        {
            email: 'user1@example.com',
            space_role_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        },
        {
            email: 'user2@example.com',
            space_role_id: '3fa85f64-5717-4562-b3fc-2c963f66afb3',
        },
    ],
    'X-Space': 'your-space-slug',
});
```

</details>

<details>
  <summary><strong>joinSpace</strong></summary>

Join a space using an invitation token.

**Signature:**

```typescript
joinSpace(token: string, options?: Core.RequestOptions): Core.APIPromise<JoinSpaceResponse>
```

**Parameters:**

-   `token` _(string)_: The unique token received in the invitation link.
-   `options` _(Core.RequestOptions)_: Additional request options (e.g., headers).

**Returns:** `Promise<JoinSpaceResponse>`

Where `JoinSpaceResponse` is:

```typescript
export interface JoinSpaceResponse {
    result?: string;
    error?: string;
}
```

**Example:**

```typescript
const joinResponse = await client.spaces.joinSpace('eyJ0b2tlbiI6ICJ4eXo0NTYiIH0...');

if (joinResponse.error) {
    console.error('Failed to join space:', joinResponse.error);
} else {
    console.log('Joined space successfully!', joinResponse.result);
}
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
    -   `redirect_uri`: _(string)_: The URI to redirect to after authorization.
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
    -   `client_id`: _(string)_: The client ID of the application.
    -   `client_secret`: _(string)_: The client secret of the application.
    -   `code`: _(string)_: The authorization code received from the authorization server.
    -   `code_verifier`: _(string)_: The code verifier used in the authorization request.
    -   `scopes`: _(Array<'organization'>)_: (Optional) Scopes for the token request.
    -   `id_token`: _(string)_: (Optional) ID token if available.

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

# Users

## Overview

The `Users` class provides methods for managing the authenticated user's profile, including retrieving, updating, and deleting their information.

## Methods

<details>
  <summary><strong>getMe</strong></summary>

Retrieve the profile of the authenticated user.

**Signature:**

```typescript
getMe(options?: Core.RequestOptions): Core.APIPromise<Profile>
```

**Parameters:**

-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<Profile>`

**Example:**

```typescript
const userProfile = await client.users.getMe();
console.log(userProfile.first_name);
```

</details>

<details>
  <summary><strong>updateMe</strong></summary>

Update the profile of the authenticated user.

**Signature:**

```typescript
updateMe(body: Profile, options?: Core.RequestOptions): Core.APIPromise<Profile>
```

**Parameters:**

-   `body` _(Profile)_: Object containing updated user profile details.
    -   `first_name` _(string)_: User's first name.
    -   `last_name` _(string)_: User's last name.
    -   `email` _(string)_: User's email address.
    -   `location` _(string)_: User's location.
    -   `avatar` _(string)_: URL of the user's avatar.
    -   `company_name` _(string)_: User's company name.
    -   `title` _(string)_: User's title.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<Profile>`

**Example:**

```typescript
const updatedProfile = await client.users.updateMe({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
});
console.log(updatedProfile);
```

</details>

<details>
  <summary><strong>deleteMe</strong></summary>

Delete the profile of the authenticated user.

**Signature:**

```typescript
deleteMe(options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.users.deleteMe();
console.log('User profile deleted.');
```

</details>

---

# PresignedUrl

## Overview

The `PresignedUrl` class provides a method for retrieving a presigned URL along with the associated file name.

## Methods

<details>
  <summary><strong>get</strong></summary>

Retrieve a presigned URL and its associated file name.

**Signature:**

```typescript
get(options?: Core.RequestOptions): Core.APIPromise<PresignedUrlResponse>
```

**Parameters:**

-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<PresignedUrlResponse>`

**Example:**

```typescript
const response = await client.presignedUrl.get();
console.log(response.presigned_url);
console.log(response.file_name);
```

</details>

# DeviceConnector

## Overview

The `DeviceConnector` class provides methods for retrieving and listing connector. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>create</strong></summary>

Create a new device connector.

**Signature:**

```typescript
create(params: DeviceConnectorParams, options?: Core.RequestOptions): Core.APIPromise<DeviceConnectorParams>
```

**Parameters:**

-   params (DeviceConnectorParams): Parameters for creating a device connector:
    -   network_server (string): The URL or address of the network server.
    -   name (string): The name of the device connector.
    -   connector_type (string): The type of the connector (e.g., mqtt, http).
    -   status? (string): Optional status of the connector.
    -   deviceHttpConfig? (DeviceHttpConfig): Optional HTTP-specific configuration:
        -   api_token (string): Token used to authenticate HTTP requests.
        -   address_url (string): Base URL of the HTTP endpoint.
    -   deviceMqttConfig? (DeviceMqttConfig): Optional MQTT-specific configuration:
        -   mqtt_broker (string): Address of the MQTT broker.
        -   username (string): Username for broker authentication.
        -   password (string): Password for broker authentication.
-   options (Core.RequestOptions): Additional request options.

**Returns:** Promise `<DeviceConnectorParams>`

**Example:**

```typescript
const newMqttConnector = await client.deviceConnector.create({
    network_server: 'poue4567-e89...',
    name: 'MQTT Connector 1',
    connector_type: 'mqtt_broker',
    deviceMqttConfig: {
        mqtt_broker: 'mqtt://broker.example.com',
        username: 'user123',
        password: 'secretpass',
    },
});

const newHttpConnector = await client.deviceConnector.create({
    network_server: 'poue4567-e89...',
    name: 'HTTP Connector 1',
    connector_type: 'http_server',
    deviceHttpConfig: {
        api_token: 'your_api_token_here',
        address_url: 'http://api.example.com/data',
    },
});
```

</details>

<details>
  <summary><strong>testConnectionPreview</strong></summary>

Test connection to a device connector without saving it (preview only).

**Signature:**

```typescript
testConnectionPreview(params: DeviceConnectorParams, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   params (DeviceConnectorParams): Parameters for testing a device connector connection:
    -   network_server (string): The URL or address of the network server.
    -   name (string): The name of the device connector.
    -   connector_type (string): The type of the connector (e.g., mqtt, http).
    -   status? (string): Optional status of the connector.
    -   deviceHttpConfig? (DeviceHttpConfig): Optional HTTP-specific configuration:
        -   api_token (string): Token used to authenticate HTTP requests.
        -   address_url (string): Base URL of the HTTP endpoint.
    -   deviceMqttConfig? (DeviceMqttConfig): Optional MQTT-specific configuration:
        -   mqtt_broker (string): Address of the MQTT broker.
        -   username (string): Username for broker authentication.
        -   password (string): Password for broker authentication.
-   options (Core.RequestOptions): Additional request options.

**Returns:** Promise `<void>`

**Example:**

```typescript
await client.deviceConnector.testConnectionPreview({
    network_server: 'poue4567-e89...',
    name: 'MQTT Connector Preview',
    connector_type: 'mqtt_broker',
    deviceMqttConfig: {
        mqtt_broker: 'mqtt://broker.example.com',
        username: 'testuser',
        password: 'testpass',
    },
});

await client.deviceConnector.testConnectionPreview({
    network_server: 'poue4567-e89...',
    name: 'HTTP Connector Preview',
    connector_type: 'http_server',
    deviceHttpConfig: {
        api_token: 'test_api_token',
        address_url: 'http://api.example.com/data',
    },
});
```

</details>

<details>
  <summary><strong>testConnection</strong></summary>

Test an existing device connector by ID.

**Signature:**

```typescript
testConnection(id: string, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` (string): A UUID string identifying the device connector to test.
-   `options`? (Core.RequestOptions): Additional request options such as custom headers.

**Returns:** `Promise <void>`

**Example:**

```typescript
await client.deviceConnector.testConnection('123e4567-e89b-12d3-a456-426614174000');
```

</details>

---

# DeviceModel

## Overview

The `DeviceModel` class provides methods for retrieving and listing device model. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>create</strong></summary>

Create a new device model.

**Signature:**

```typescript
create(params: DeviceModelParams, options?: Core.RequestOptions): Core.APIPromise<DeviceModelParams>
```

**Parameters:**

-   params (DeviceModelParams): Parameters for creating a device model:
    -   name (string): The name of the device model.
    -   alias (string): The alias of the device model.
    -   image_url (string): The image URL of the device model.
    -   default_config (object): The default configuration object.
    -   manufacture (string): The manufacturer of the device model.
-   options (Core.RequestOptions): Additional request options.

**Returns:** Promise<DeviceModelParams>

**Example:**

```typescript
const newDeviceModel = await client.deviceModel.create({
    name: 'Model X',
    alias: 'model_x',
    image_url: 'http://example.com/image.png',
    default_config: {},
    manufacture: '123e4567-e89...',
});
```

</details>

<details>
  <summary><strong>retrieve</strong></summary>

Retrieve a device model by its ID.

**Signature:**

```typescript
retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DeviceModelParams>
```

**Parameters:**

-   `id` (string): The unique identifier of the device model to retrieve.
-   `options` (Core.RequestOptions): Additional request options.

**Returns:** `Promise<DeviceModelParams>`

**Example:**

```typescript
const deviceModel = await client.deviceModel.retrieve('123e4567-e89b-12d3-a456-426614174000');
console.log(deviceModel.name);
```

</details>

<details>
  <summary><strong>update</strong></summary>

Update an existing device model by its ID.

**Signature:**

```typescript
update(id: string, params: DeviceModelParams, options?: Core.RequestOptions): Core.APIPromise<DeviceModelParams>
```

**Parameters:**

-   `id` (string): The unique identifier of the device model to update.
-   `params` (DeviceModelParams): The data to update the device model with:
    -   `name` (string): The name of the device model.
    -   `alias` (string): The alias of the device model.
    -   `image_url` (string): The image URL of the device model.
    -   `default_config` (object): The default configuration object.
    -   `manufacture` (string): The manufacturer of the device model.
-   `options` (Core.RequestOptions): Additional request options.

**Returns:** `Promise<DeviceModelParams>`

**Example:**

```typescript
const updatedDeviceModel = await client.deviceModel.update('123e4567-e89b-12d3-a456-426614174000', {
    name: 'Model Y',
    alias: 'model_y',
    image_url: 'http://example.com/image2.png',
    default_config: { setting: true },
    manufacture: '123e4567-e89...',
});
console.log(updatedDeviceModel);
```

</details>

<details>
  <summary><strong>list</strong></summary>

Retrieve a list of device models with optional filters.

**Signature:**

```typescript
list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<DeviceModelListResponse>
```

**Parameters:**

-   `params` (ListParamsResponse): Query parameters to filter and paginate the results:
    -   `ordering` (string, optional): Which field to use when ordering the results.
    -   `search` (string, optional): A search term.
    -   `limit` (integer, optional): Number of results to return per page.
    -   `offset` (integer, optional): The initial index from which to return the results.
-   `options` (Core.RequestOptions): Additional request options.

**Returns:** `Promise<DeviceModelListResponse>`

**Example:**

```typescript
const deviceModels = await client.deviceModel.list({
    ordering: 'name',
    search: 'model',
    limit: 10,
    offset: 0,
});
console.log(deviceModels.results);
```

</details>

<details>
<summary><strong>delete</strong></summary>

Delete a device models by its ID.

**Signature:**

```typescript
delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(string)_: A UUID string identifying this device models.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.deviceModel.delete('a557d013-f6...');
```

</details>

---

# Device

## Overview

The `Device` class provides methods for retrieving and listing device. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>create</strong></summary>

Create a new device.

**Signature:**

```typescript
create(params: DeviceParams, options?: Core.RequestOptions): Core.APIPromise<DeviceParams>
```

**Parameters:**

-   `params` _(DeviceParams)_: Parameters for creating a device:
    -   `status` _(string, optional)_: The status of the device.
    -   `device_connector` _(string)_: The connector type or identifier for the device.
    -   `device_model` _(string)_: The model identifier of the device.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<DeviceParams>`

**Example:**

```typescript
const newDevice = await client.devices.create({
    status: 'active',
    device_connector: '123e4567-e89...',
    device_model: 'poye4567-e89...',
});
```

</details>

<details>
  <summary><strong>retrieve</strong></summary>

Retrieve details of a device by its ID.

**Signature:**

```typescript
    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DeviceParams>
```

**Parameters:**

-   `id` _(string)_: The unique identifier of the device to retrieve.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<DeviceParams>`

**Example:**

```typescript
const device = await client.devices.retrieve('1l3e4567-e89...');
console.log(device.device_model);
```

</details>

<details>
  <summary><strong>update</strong></summary>

Update an existing device by its ID.

**Signature:**

```typescript
    update(id: string, params: DeviceParams, options?: Core.RequestOptions): Core.APIPromise<DeviceParams>
```

**Parameters:**

-   `id` _(string)_: The unique identifier of the device to update.
-   `params` _(DeviceParams)_: Parameters to update the device with:
    -   `status` _(string, optional)_: The status of the device.
    -   `device_connector` _(string)_: The connector type or identifier for the device.
    -   `device_model` _(string)_: The model identifier of the device.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<DeviceParams>`

**Example:**

```typescript
const updatedDevice = await client.devices.update('device-id-123', {
    status: 'active',
    device_connector: '123e4567-e89...',
    device_model: 'ks3e4567-e89...',
});
```

</details>

<details>
  <summary><strong>list</strong></summary>

List devices with optional pagination.

**Signature:**

```typescript
    list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<DeviceListResponse>
```

**Parameters:**

-   `params` _(ListParamsResponse)_: Query parameters for listing devices:
    -   `limit` _(integer, optional)_: Number of results to return per page.
    -   `offset` _(integer, optional)_: The initial index from which to return the results.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<DeviceListResponse>`

**Example:**

```typescript
const devices = await client.devices.list({ limit: 10, offset: 0 });
console.log(devices.results);
```

</details>

<details>
  <summary><strong>delete</strong></summary>

Delete a device by its ID.

**Signature:**

```typescript
    delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(number)_: The unique identifier of the device to delete.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.devices.delete('123e4567-e89...');
console.log('Device deleted successfully.');
```

</details>

<details>
  <summary><strong>check claim code</strong></summary>

Check the device by claim code

**Signature:**

```typescript
    checkClaimCode(claim_code: string, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `claim_code` _(string)_: The unique code of the device.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.devices.checkClaimCode('123e4567-e89...');
```

</details>

---

# Manufacturers

## Overview

The `Manufacturers` class provides methods for retrieving and listing manufacturers of device. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>create</strong></summary>

Create a new manufacturer.

**Signature:**

```typescript
    create(params: ManufacturersParams, options?: Core.RequestOptions): Core.APIPromise<ManufacturersParams>
```

**Parameters:**

-   `params` _(ManufacturersParams)_: Parameters for creating a manufacturer:
    -   `name` _(string)_: The name of the manufacturer.
    -   `location` _(string)_: The location of the manufacturer.
    -   `description` _(string)_: A description of the manufacturer.
    -   `portal_url` _(string)_: The portal URL information of the manufacturer.
    -   `national` _(string)_: The nationality or country of the manufacturer.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<ManufacturersParams>`

**Example:**

````typescript
    const newManufacturer = await client.manufacturers.create({
        name: 'Acme Corp',
        location: 'USA',
        description: 'Leading manufacturer of widgets',
        portal_url: 'https://acme.example.com',
        national: 'US',
    });
    ```
</details>

<details>
  <summary><strong>retrieve</strong></summary>

Retrieve details of a manufacturer by its ID.

**Signature:**
```typescript
    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ManufacturersParams>
````

**Parameters:**

-   `id` _(string)_: The unique identifier of the manufacturer to retrieve.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<ManufacturersParams>`

**Example:**

```typescript
const manufacturer = await client.manufacturers.retrieve('123e4567-e89...');
console.log(manufacturer.name);
```

</details>

<details>
  <summary><strong>update</strong></summary>

Update an existing manufacturer by its ID.

**Signature:**

```typescript
    update(id: string, params: ManufacturersParams, options?: Core.RequestOptions): Core.APIPromise<ManufacturersParams>
```

**Parameters:**

-   `id` _(string)_: The unique identifier of the manufacturer to update.
-   `params` _(ManufacturersParams)_: Parameters for updating the manufacturer:
    -   `name` _(string)_: The name of the manufacturer.
    -   `location` _(string)_: The location of the manufacturer.
    -   `description` _(string)_: A description of the manufacturer.
    -   `portal_url` _(string)_: The portal URL information of the manufacturer.
    -   `national` _(string)_: The nationality or country of the manufacturer.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<ManufacturersParams>`

**Example:**

```typescript
const updatedManufacturer = await client.manufacturers.update('123e4567-e89...', {
    name: 'Acme Corp Updated',
    location: 'USA',
    description: 'Updated description',
    portal_url: 'https://acme.example.com',
    national: 'US',
});
```

</details>

<details>
  <summary><strong>list</strong></summary>

List manufacturers with optional filtering, ordering, and pagination.

**Signature:**

```typescript
    list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<ManufacturersListResponse>
```

**Parameters:**

-   `params` _(ListParamsResponse)_: Query parameters for filtering, ordering, and pagination:
    -   `ordering` _(string, optional)_: Which field to use when ordering the results.
    -   `search` _(string, optional)_: A search term to filter results.
    -   `limit` _(integer, optional)_: Number of results to return per page.
    -   `offset` _(integer, optional)_: The initial index from which to return the results.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<ManufacturersListResponse>`

**Response shape:**

-   `count` _(integer)_: Total number of manufacturers matching the query.
-   `next` _(string | null)_: URL to the next page of results, or `null`.
-   `previous` _(string | null)_: URL to the previous page of results, or `null`.
-   `results` _(ManufacturersParams[])_: Array of manufacturer objects.

**Example:**

```typescript
const listResponse = await client.manufacturers.list({
    ordering: 'name',
    search: 'acme',
    limit: 10,
    offset: 0,
});
console.log(listResponse.results);
```

</details>

<details>
  <summary><strong>delete</strong></summary>

Delete a manufacturer by its ID.

**Signature:**

```typescript
    delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(number)_: A UUID string identifying this manufacturer. (Note: Type is `number` in code but described as UUID string)
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>` (No content on success)

**Example:**

```typescript
await client.manufacturers.delete('123e4567-e89...');
```

</details>

---

# NetworkServer

## Overview

The `NetworkServer` class provides methods for retrieving and listing network server. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>create</strong></summary>

Create a new network server.

**Signature:**

```typescript
reate(params: NetworkServerParams, options?: Core.RequestOptions): Core.APIPromise<NetworkServerParams>
```

**Parameters:**

-   `params` _(NetworkServerParams)_: Parameters for creating a new network server.
    -   `name`: _(string)_: The name of the network server.
    -   `logo`: _(string)_: The logo of the network server.
    -   `description`: _(string)_: The description of the network server.
    -   `type_connect`: _(string[])_: An array of connection types supported by the network server.  
        Possible values may include:
    -   `"mqtt_broker"`: The server connects using MQTT protocol.
    -   `"http_server"`: The server exposes HTTP endpoints.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<NetworkServerParams>`

**Example:**

```typescript
const newNetworkServer = await client.networkServer.create({
    name: 'Chirpstack',
    logo: 'logo-url',
    description: 'example-description',
    type_connect: ['mqtt_broker', 'http_server'],
});
```

</details>

<details>
  <summary><strong>retrieve</strong></summary>
Retrieve details of a network server by its ID.

**Signature:**

```typescript
    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<NetworkServerParams>
```

**Parameters:**

-   `id` _(string)_: The unique identifier of the network server to retrieve.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<NetworkServerParams>`

**Example:**

```typescript
const networkServer = await client.networkServer.retrieve('a557d013-f6...');
console.log(networkServer.name);
```

</details>

<details>
  <summary><strong>update</strong></summary>

Update an existing network server by its ID.

**Signature:**

```typescript
update(id: string, params: NetworkServerParams, options?: Core.RequestOptions): Core.APIPromise<NetworkServerParams>
```

**Parameters:**

-   `id` _(string)_: The unique identifier of the network server to update.
-   `params` _(NetworkServerParams)_: Parameters for updating the network server.
    -   `name`: _(string)_: The name of the network server.
    -   `logo`: _(string)_: The logo of the network server.
    -   `description`: _(string)_: The description of the network server.
    -   `type_connect`: _(string[])_: An array of connection types supported by the network server. Possible values include:
        -   `"mqtt_broker"`: The server connects using MQTT protocol.
        -   `"http_server"`: The server exposes HTTP endpoints.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<NetworkServerParams>`

**Example:**

```typescript
const updatedNetworkServer = await client.networkServer.update('a557d013-f6 ...', {
    name: 'Chirpstack Updated',
    logo: 'new-logo-url',
    description: 'updated-description',
    type_connect: ['mqtt_broker'],
});
```

</details>

<details>
<summary><strong>list</strong></summary>

List network servers with optional filtering, ordering, and pagination.

**Signature:**

```typescript
list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<NetworkServerListResponse>
```

**Parameters:**

-   `params` _(ListParamsResponse)_: Query parameters for filtering, ordering, and pagination:
    -   `ordering` _(string, optional)_: Which field to use when ordering the results.
    -   `search` _(string, optional)_: A search term to filter results.
    -   `limit` _(integer, optional)_: Number of results to return per page.
    -   `offset` _(integer, optional)_: The initial index from which to return the results.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<NetworkServerListResponse>`

**Response shape:**

-   `count` _(integer)_: Total number of network servers matching the query.
-   `next` _(string | null)_: URL to the next page of results, or `null`.
-   `previous` _(string | null)_: URL to the previous page of results, or `null`.
-   `results` _(NetworkServer[])_: Array of network server objects.

**Example:**

```typescript
const listResponse = await client.networkServer.list({
    ordering: 'name',
    search: 'chirpstack',
    limit: 10,
    offset: 0,
});
console.log(listResponse.results);
```

</details>

<details>
<summary><strong>delete</strong></summary>

Delete a network server by its ID.

**Signature:**

```typescript
delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(string)_: A UUID string identifying this network server.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.networkServer.delete('a557d013-f6...');
```

</details>

---

# Widgets

## Overview

The `Widgets` class provides methods to manage dashboard widgets, including bulk updating widget configurations. This class allows you to update multiple widgets at once with their respective configurations.

## Methods

<details>
  <summary><strong>updateWidgets</strong></summary>

Updates multiple widgets with their configurations in a single bulk operation.

**Signature:**

```typescript
updateWidgets(params: WidgetsUpdateParams[], options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `params` _(WidgetsUpdateParams[])_: Array of widget update parameters.
    -   `id` _(string)_: The unique identifier of the widget to update.
    -   `configuration` _(any)_: The configuration object for the widget.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:**

-   `Core.APIPromise<void>`: A promise that resolves when the bulk update is complete.

**Example Usage:**

```typescript
import { SpaceDFSDK } from 'spacedf-sdk-node';

const client = new SpaceDFSDK({
    APIKey: 'your-api-key',
    organization: 'your-org-id',
});

// Update multiple widgets
await client.widgets.updateWidgets([
    {
        id: 'widget-1',
        configuration: {
            title: 'Temperature Monitor',
            refreshInterval: 5000,
            chartType: 'line',
        },
    },
    {
        id: 'widget-2',
        configuration: {
            title: 'Device Status',
            showLegend: true,
            colorScheme: 'dark',
        },
    },
]);
```

**Error Handling:**

```typescript
try {
    await client.widgets.updateWidgets(widgetUpdates);
    console.log('Widgets updated successfully');
} catch (error) {
    if (error instanceof SpaceDFSDK.BadRequestError) {
        console.error('Invalid widget configuration:', error.message);
    } else if (error instanceof SpaceDFSDK.NotFoundError) {
        console.error('One or more widgets not found:', error.message);
    } else {
        console.error('Failed to update widgets:', error.message);
    }
}
```

</details>

---

# Device Spaces

## Overview

The `DeviceSpaces` class provides methods for managing device spaces within an application. Device spaces allow for grouping and organizing devices within specific spaces. Below are the details for each method, including parameters, return types, and example usage.

## Methods

<details>
  <summary><strong>create</strong></summary>

Create a new device space.

**Signature:**

```typescript
create(params: DeviceSpacesParams, options?: Core.RequestOptions): Core.APIPromise<DeviceSpacesParams>
```

**Parameters:**

-   `params` _(DeviceSpacesParams)_: Parameters for creating a new device space.
    -   `name` _(string)_: The name of the device space.
    -   `description` _(string)_: A description of the device space.
    -   `dev_eui` _(string)_: A dev_eui of device space.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<DeviceSpacesParams>`

**Example:**

```typescript
const newDeviceSpace = await client.deviceSpaces.create({
    name: 'Sensor Network A',
    description: 'Device space for temperature and humidity sensors',
    dev_eui: '8437687685476895',
});
```

</details>

<details>
  <summary><strong>list</strong></summary>

List device spaces with optional filtering, ordering, and pagination.

**Signature:**

```typescript
list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<DeviceSpacesListResponse>
```

**Parameters:**

-   `params` _(ListParamsResponse)_: Query parameters for filtering, ordering, and pagination:
    -   `ordering` _(string, optional)_: Which field to use when ordering the results.
    -   `search` _(string, optional)_: A search term to filter results.
    -   `limit` _(integer, optional)_: Number of results to return per page.
    -   `offset` _(integer, optional)_: The initial index from which to return the results.
    -   `include_latest_checkpoint` _(boolean, optional)_: Include latest checkpoint
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<DeviceSpacesListResponse>`

**Response shape:**

-   `count` _(integer)_: Total number of device spaces matching the query.
-   `next` _(string | null)_: URL to the next page of results, or `null`.
-   `previous` _(string | null)_: URL to the previous page of results, or `null`.
-   `results` _(DeviceSpacesParams[])_: Array of device space objects.

**Example:**

```typescript
const listResponse = await client.deviceSpaces.list(
    {
        ordering: 'name',
        search: 'sensor',
        limit: 10,
        offset: 0,
    },
    {
        'X-Space': 'space-slug-name',
    },
);
console.log(listResponse.results);
```

</details>

<details>
  <summary><strong>delete</strong></summary>

Delete a device space by its ID.

**Signature:**

```typescript
delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(string)_: A UUID string identifying this device space.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.deviceSpaces.delete('789e0123-e89b-12d3-a456-426614174002');
```

</details>

---

# Trip

## Overview

The `Trip` class provides methods for managing device trips, including creating, retrieving, updating, listing, and deleting trip records. Trips represent journeys or data collection periods for devices. Below are the details for each method, including parameters, return types, and example usage.

## Types

### TripParams

```typescript
interface TripParams {
    space_device: string; // The unique identifier of the device associated with this trip
    start_at: string; // The start timestamp of the trip (ISO 8601 format)
    ended_at: string; // The end timestamp of the trip (ISO 8601 format)
}
```

### TripListParams

```typescript
interface TripListParams extends ListParamsResponse {
    include_checkpoints?: boolean; // Whether to include checkpoints in the response
}
```

This interface extends `ListParamsResponse` which includes:

-   `limit?: number` - Number of results to return per page
-   `offset?: number` - The initial index from which to return the results
-   `ordering?: string` - Which field to use when ordering the results
-   `search?: string` - A search term to filter results

### TripListResponse

```typescript
type TripListResponse = ListResponse<TripParams>;
```

Where `ListResponse<T>` includes:

-   `count: number` - Total number of trips matching the query
-   `results: TripParams[]` - Array of trip objects
-   `next?: string | null` - URL to the next page of results, or null
-   `previous?: string | null` - URL to the previous page of results, or null

<details>
  <summary><strong>create</strong></summary>

Create a new trip record.

**Signature:**

```typescript
create(params: TripParams, options?: Core.RequestOptions): Core.APIPromise<TripParams>
```

**Parameters:**

-   `params` _(TripParams)_: Parameters for creating a new trip.
    -   `space_device`: _(string)_: The unique identifier of the device associated with this trip.
    -   `start_at`: _(string)_: The start timestamp of the trip (ISO 8601 format).
    -   `ended_at`: _(string)_: The end timestamp of the trip (ISO 8601 format).
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<TripParams>`

**Example:**

```typescript
const newTrip = await client.trip.create({
    space_device: 'device-uuid-123',
    start_at: '2024-01-15T08:00:00Z',
    ended_at: '2024-01-15T18:30:00Z',
});
```

</details>

<details>
  <summary><strong>retrieve</strong></summary>

Retrieve details of a trip by its ID.

**Signature:**

```typescript
retrieve(id: string, params: TripListParams, options?: Core.RequestOptions): Core.APIPromise<TripParams>
```

**Parameters:**

-   `id` _(string)_: The unique identifier of the trip to retrieve.
-   `params` _(TripListParams)_: Query parameters for the request.
    -   `include_checkpoints` _(boolean, optional)_: Whether to include checkpoints in the response.
    -   `ordering` _(string, optional)_: Which field to use when ordering the results.
    -   `search` _(string, optional)_: A search term to filter results.
    -   `limit` _(integer, optional)_: Number of results to return per page.
    -   `offset` _(integer, optional)_: The initial index from which to return the results.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<TripParams>`

**Example:**

```typescript
const trip = await client.trip.retrieve('trip-uuid-456', {
    include_checkpoints: true,
});
console.log(trip.space_device);
```

</details>

<details>
  <summary><strong>list</strong></summary>

List trips with optional filtering, ordering, and pagination.

**Signature:**

```typescript
list(params: TripListParams & { space_device__device_id: string }, options?: Core.RequestOptions): Core.APIPromise<TripListResponse>
```

**Parameters:**

-   `params` _(TripListParams & { space_device\_\_device_id: string })_: Query parameters for filtering, ordering, and pagination:
    -   `space_device__device_id` _(string)_: **Required.** The device ID to filter trips by.
    -   `ordering` _(string, optional)_: Which field to use when ordering the results.
    -   `search` _(string, optional)_: A search term to filter results.
    -   `limit` _(integer, optional)_: Number of results to return per page.
    -   `offset` _(integer, optional)_: The initial index from which to return the results.
    -   `include_checkpoints` _(boolean, optional)_: Whether to include checkpoints in the response.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<TripListResponse>`

**Response shape:**

-   `count` _(integer)_: Total number of trips matching the query.
-   `next` _(string | null)_: URL to the next page of results, or `null`.
-   `previous` _(string | null)_: URL to the previous page of results, or `null`.
-   `results` _(TripParams[])_: Array of trip objects.

**Example:**

```typescript
const listResponse = await client.trip.list({
    space_device__device_id: 'device-uuid-123',
    ordering: 'start_at',
    limit: 20,
    offset: 0,
    include_checkpoints: false,
});
console.log(listResponse.results);
```

</details>

<details>
  <summary><strong>update</strong></summary>

Update an existing trip by its ID (full update).

**Signature:**

```typescript
update(id: string, params: TripParams, options?: Core.RequestOptions): Core.APIPromise<TripParams>
```

**Parameters:**

-   `id` _(string)_: The unique identifier of the trip to update.
-   `params` _(TripParams)_: Parameters for updating the trip.
    -   `space_device`: _(string)_: The unique identifier of the device associated with this trip.
    -   `start_at`: _(string)_: The start timestamp of the trip (ISO 8601 format).
    -   `ended_at`: _(string)_: The end timestamp of the trip (ISO 8601 format).
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<TripParams>`

**Example:**

```typescript
const updatedTrip = await client.trip.update('trip-uuid-456', {
    space_device: 'device-uuid-123',
    start_at: '2024-01-15T09:00:00Z',
    ended_at: '2024-01-15T19:00:00Z',
});
```

</details>

<details>
  <summary><strong>partialUpdate</strong></summary>

Partially update an existing trip by its ID.

**Signature:**

```typescript
partialUpdate(id: string, params: Partial<TripParams>, options?: Core.RequestOptions): Core.APIPromise<TripParams>
```

**Parameters:**

-   `id` _(string)_: The unique identifier of the trip to update.
-   `params` _(Partial<TripParams>)_: Parameters for partially updating the trip. Only provided fields will be updated.
    -   `space_device` _(string, optional)_: The unique identifier of the device associated with this trip.
    -   `start_at` _(string, optional)_: The start timestamp of the trip (ISO 8601 format).
    -   `ended_at` _(string, optional)_: The end timestamp of the trip (ISO 8601 format).
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<TripParams>`

**Example:**

```typescript
const partiallyUpdatedTrip = await client.trip.partialUpdate('trip-uuid-456', {
    ended_at: '2024-01-15T20:00:00Z',
});
```

</details>

<details>
  <summary><strong>delete</strong></summary>

Delete a trip by its ID.

**Signature:**

```typescript
delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `id` _(string)_: The unique identifier of the trip to delete.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.trip.delete('trip-uuid-456');
```

</details>

---

# Telemetry

## Overview

The `Telemetry` class provides methods for retrieving telemetry entities and alerts. This class allows you to search and filter telemetry entities by display type and search terms, as well as retrieve alerts.

## Methods

<details>
  <summary><strong>entities.list</strong></summary>

List telemetry entities with optional filtering, ordering, and pagination.

**Signature:**

```typescript
list(params: EntitiesListParams, options?: Core.RequestOptions): Core.APIPromise<EntitiesListResponse>
```

**Parameters:**

-   `params` _(EntitiesListParams)_: Query parameters for filtering, ordering, and pagination:
    -   `display_type` _(string, optional)_: Display type filter (e.g., "chart").
    -   `search` _(string, optional)_: A search term to filter results.
    -   `ordering` _(string, optional)_: Which field to use when ordering the results.
    -   `limit` _(integer, optional)_: Number of results to return per page.
    -   `offset` _(integer, optional)_: The initial index from which to return the results.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<EntitiesListResponse>`

**Response shape:**

-   `count` _(integer)_: Total number of entities matching the query.
-   `next` _(string | null)_: URL to the next page of results, or `null`.
-   `previous` _(string | null)_: URL to the previous page of results, or `null`.
-   `results` _(Entity[])_: Array of entity objects.

**Example:**

```typescript
const entities = await client.telemetry.entities.list({
    display_type: 'chart',
    search: 'Water Depth',
    limit: 10,
    offset: 0,
});
console.log(entities.results);
```

**Example with minimal parameters:**

```typescript
const entities = await client.telemetry.entities.list({
    display_type: 'chart',
    search: 'Water Depth',
});
console.log(entities.count);
```

</details>

<details>
  <summary><strong>alerts.list</strong></summary>

List telemetry alerts with optional filtering, ordering, and pagination.

**Signature:**

```typescript
list(params: AlertsListParams, options?: Core.RequestOptions): Core.APIPromise<AlertsListResponse>
```

**Parameters:**

-   `params` _(AlertsListParams)_: Query parameters for filtering, ordering, and pagination:
    -   `search` _(string, optional)_: A search term to filter results.
    -   `ordering` _(string, optional)_: Which field to use when ordering the results.
    -   `limit` _(integer, optional)_: Number of results to return per page.
    -   `offset` _(integer, optional)_: The initial index from which to return the results.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<AlertsListResponse>`

**Response shape:**

-   `count` _(integer)_: Total number of alerts matching the query.
-   `next` _(string | null)_: URL to the next page of results, or `null`.
-   `previous` _(string | null)_: URL to the previous page of results, or `null`.
-   `results` _(Alert[])_: Array of alert objects.

**Example:**

```typescript
const alerts = await client.telemetry.alerts.list({
    search: 'critical',
    limit: 10,
    offset: 0,
});
console.log(alerts.results);
```

**Example with minimal parameters:**

```typescript
const alerts = await client.telemetry.alerts.list({
    search: 'critical',
});
console.log(alerts.count);
```

</details>

---

# Organizations

## Overview

The `Organizations` class provides methods for managing organizations within an application.

## Methods

<details>
  <summary><strong>checkSlugName</strong></summary>

Check organizations by slug name.

**Signature:**

```typescript
checkSlugName(slugName: string, options?: Core.RequestOptions): Core.APIPromise<void>
```

**Parameters:**

-   `slugName` _(string)_: A slug name string identifying this organization.
-   `options` _(Core.RequestOptions)_: Additional request options.

**Returns:** `Promise<void>`

**Example:**

```typescript
await client.organizations.checkSlugName('danang');
```

</details>
