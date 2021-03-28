---
id: "actuallycolabrestclient"
title: "Class: ActuallyColabRESTClient"
sidebar_label: "ActuallyColabRESTClient"
custom_edit_url: null
hide_title: true
---

# Class: ActuallyColabRESTClient

## Constructors

### constructor

\+ **new ActuallyColabRESTClient**(`baseURL`: *string*): [*ActuallyColabRESTClient*](actuallycolabrestclient.md)

Initializes a new client wrapper for the Actually Colab API.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`baseURL` | *string* | Actually Colab API basename    |

**Returns:** [*ActuallyColabRESTClient*](actuallycolabrestclient.md)

Defined in: [src/REST/client.ts:13](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L13)

## Properties

### axiosInstance

• `Private` **axiosInstance**: AxiosInstance

Defined in: [src/REST/client.ts:13](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L13)

## Methods

### createNotebook

▸ **createNotebook**(`name`: *string*, `language?`: *python*): *Promise*<[*Notebook*](../interfaces/notebook.md)\>

Creates the metadata for a new notebook.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`name` | *string* | - | human-readable name of the notebook   |
`language` | *python* | 'python' | runtime language for the notebook    |

**Returns:** *Promise*<[*Notebook*](../interfaces/notebook.md)\>

Defined in: [src/REST/client.ts:114](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L114)

___

### devLogin

▸ **devLogin**(`email`: *string*, `name?`: *string*): *Promise*<{ `sessionToken`: *string* ; `user`: [*DUser*](../interfaces/duser.md)  }\>

Attempts to login. On success, stores the token.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`email` | *string* | the user's email address   |
`name?` | *string* | optional, sets the name of the user    |

**Returns:** *Promise*<{ `sessionToken`: *string* ; `user`: [*DUser*](../interfaces/duser.md)  }\>

Defined in: [src/REST/client.ts:61](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L61)

___

### getNotebookContents

▸ **getNotebookContents**(`nb_id`: *string*): *Promise*<[*NotebookContents*](../interfaces/notebookcontents.md)\>

Fetches cells and outputs for a specific notebook.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nb_id` | *string* | id of the notebook to fetch    |

**Returns:** *Promise*<[*NotebookContents*](../interfaces/notebookcontents.md)\>

Defined in: [src/REST/client.ts:100](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L100)

___

### getNotebooksForUser

▸ **getNotebooksForUser**(): *Promise*<[*Notebook*](../interfaces/notebook.md)[]\>

Fetches all notebooks that this user has access to.

**Returns:** *Promise*<[*Notebook*](../interfaces/notebook.md)[]\>

Defined in: [src/REST/client.ts:91](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L91)

___

### login

▸ `Private`**login**(`loginData`: [*LoginData*](../modules.md#logindata)): *Promise*<{ `sessionToken`: *string* ; `user`: [*DUser*](../interfaces/duser.md)  }\>

#### Parameters:

Name | Type |
:------ | :------ |
`loginData` | [*LoginData*](../modules.md#logindata) |

**Returns:** *Promise*<{ `sessionToken`: *string* ; `user`: [*DUser*](../interfaces/duser.md)  }\>

Defined in: [src/REST/client.ts:38](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L38)

___

### loginWithGoogleIdToken

▸ **loginWithGoogleIdToken**(`idToken`: *string*): *Promise*<{ `sessionToken`: *string* ; `user`: [*DUser*](../interfaces/duser.md)  }\>

Attempts to login with Google ID Token. On success, stores the token.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`idToken` | *string* | from Google Auth    |

**Returns:** *Promise*<{ `sessionToken`: *string* ; `user`: [*DUser*](../interfaces/duser.md)  }\>

Defined in: [src/REST/client.ts:73](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L73)

___

### refreshSessionToken

▸ **refreshSessionToken**(`sessionToken`: *string*): *Promise*<{ `sessionToken`: *string* ; `user`: [*DUser*](../interfaces/duser.md)  }\>

Attempts to refresh session token. On success, stores the token.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`sessionToken` | *string* | JWT from Actually Colab service    |

**Returns:** *Promise*<{ `sessionToken`: *string* ; `user`: [*DUser*](../interfaces/duser.md)  }\>

Defined in: [src/REST/client.ts:84](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L84)

___

### setSessionToken

▸ **setSessionToken**(`sessionToken`: *string*): *void*

Sets the authorization header for all requests.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`sessionToken` | *string* | the actually colab token for the user    |

**Returns:** *void*

Defined in: [src/REST/client.ts:34](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L34)

___

### shareNotebook

▸ **shareNotebook**(`email`: *string*, `nb_id`: *string*, `access_level`: [*NotebookAccessLevelType*](../modules.md#notebookaccessleveltype)): *Promise*<void\>

Shares a notebook with another user. The requesting user must have
Full Access to share the notebook.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`email` | *string* | user to share with   |
`nb_id` | *string* | id of the notebook to share   |
`access_level` | [*NotebookAccessLevelType*](../modules.md#notebookaccessleveltype) | permissions level for the user that the notebook is being shared with    |

**Returns:** *Promise*<void\>

Defined in: [src/REST/client.ts:131](https://github.com/actually-colab/editor/blob/0e7786b/client/src/REST/client.ts#L131)
