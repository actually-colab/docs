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

Defined in: [src/REST/client.ts:15](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L15)

## Properties

### axiosInstance

• `Private` **axiosInstance**: AxiosInstance

Defined in: [src/REST/client.ts:15](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L15)

## Methods

### createNotebook

▸ **createNotebook**(`name`: *string*, `language?`: *python*, `cells?`: *Pick*<DCell, *language* \| *contents*\>[]): *Promise*<Notebook\>

Creates the metadata for a new notebook.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`name` | *string* | - | human-readable name of the notebook   |
`language` | *python* | 'python' | runtime language for the notebook    |
`cells?` | *Pick*<DCell, *language* \| *contents*\>[] | - | - |

**Returns:** *Promise*<Notebook\>

Defined in: [src/REST/client.ts:116](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L116)

___

### createWorkshop

▸ **createWorkshop**(`name`: *string*, `description`: *string*, `cells?`: *Pick*<DCell, *language* \| *contents*\>[]): *Promise*<Workshop\>

Creates the metadata for a new workshop.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name` | *string* | human-readable name of the workshop   |
`description` | *string* | human-readable description of the workshop   |
`cells?` | *Pick*<DCell, *language* \| *contents*\>[] | cell contents to pre-insert    |

**Returns:** *Promise*<Workshop\>

Defined in: [src/REST/client.ts:155](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L155)

___

### devLogin

▸ **devLogin**(`email`: *string*, `name?`: *string*): *Promise*<{ `sessionToken`: *string* ; `user`: *DUser*  }\>

Attempts to login. On success, stores the token.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`email` | *string* | the user's email address   |
`name?` | *string* | optional, sets the name of the user    |

**Returns:** *Promise*<{ `sessionToken`: *string* ; `user`: *DUser*  }\>

Defined in: [src/REST/client.ts:63](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L63)

___

### getNotebookContents

▸ **getNotebookContents**(`nb_id`: *string*): *Promise*<NotebookContents\>

Fetches cells and outputs for a specific notebook.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nb_id` | *string* | id of the notebook to fetch    |

**Returns:** *Promise*<NotebookContents\>

Defined in: [src/REST/client.ts:102](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L102)

___

### getNotebooksForUser

▸ **getNotebooksForUser**(): *Promise*<Notebook[]\>

Fetches all notebooks that this user has access to.

**Returns:** *Promise*<Notebook[]\>

Defined in: [src/REST/client.ts:93](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L93)

___

### getWorkshopsForUser

▸ **getWorkshopsForUser**(): *Promise*<Workshop[]\>

Fetches all workshops that this user has access to.

**Returns:** *Promise*<Workshop[]\>

Defined in: [src/REST/client.ts:170](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L170)

___

### login

▸ `Private`**login**(`loginData`: [*LoginData*](../modules.md#logindata)): *Promise*<{ `sessionToken`: *string* ; `user`: *DUser*  }\>

#### Parameters:

Name | Type |
:------ | :------ |
`loginData` | [*LoginData*](../modules.md#logindata) |

**Returns:** *Promise*<{ `sessionToken`: *string* ; `user`: *DUser*  }\>

Defined in: [src/REST/client.ts:40](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L40)

___

### loginWithGoogleIdToken

▸ **loginWithGoogleIdToken**(`idToken`: *string*): *Promise*<{ `sessionToken`: *string* ; `user`: *DUser*  }\>

Attempts to login with Google ID Token. On success, stores the token.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`idToken` | *string* | from Google Auth    |

**Returns:** *Promise*<{ `sessionToken`: *string* ; `user`: *DUser*  }\>

Defined in: [src/REST/client.ts:75](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L75)

___

### refreshSessionToken

▸ **refreshSessionToken**(`sessionToken`: *string*): *Promise*<{ `sessionToken`: *string* ; `user`: *DUser*  }\>

Attempts to refresh session token. On success, stores the token.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`sessionToken` | *string* | JWT from Actually Colab service    |

**Returns:** *Promise*<{ `sessionToken`: *string* ; `user`: *DUser*  }\>

Defined in: [src/REST/client.ts:86](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L86)

___

### setSessionToken

▸ **setSessionToken**(`sessionToken`: *string*): *void*

Sets the authorization header for all requests.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`sessionToken` | *string* | the actually colab token for the user    |

**Returns:** *void*

Defined in: [src/REST/client.ts:36](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L36)

___

### shareNotebook

▸ **shareNotebook**(`email`: *string*, `nb_id`: *string*, `access_level`: NotebookAccessLevelType): *Promise*<Notebook\>

Shares a notebook with another user. The requesting user must have
Full Access to share the notebook.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`email` | *string* | user to share with   |
`nb_id` | *string* | id of the notebook to share   |
`access_level` | NotebookAccessLevelType | permissions level for the user that the notebook is being shared with    |

**Returns:** *Promise*<Notebook\>

Defined in: [src/REST/client.ts:138](https://github.com/actually-colab/editor/blob/27be0e5/client/src/REST/client.ts#L138)
