---
id: "actuallycolabsocketclient"
title: "Class: ActuallyColabSocketClient"
sidebar_label: "ActuallyColabSocketClient"
custom_edit_url: null
hide_title: true
---

# Class: ActuallyColabSocketClient

## Hierarchy

* *EventEmitter*<ActuallyColabEventListeners\>

  ↳ **ActuallyColabSocketClient**

## Constructors

### constructor

\+ **new ActuallyColabSocketClient**(`baseURL`: *string*, `sessionToken`: *string*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Establishes a new client connection to the Actually Colab server.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`baseURL` | *string* | Actually Colab API basename   |
`sessionToken` | *string* | authorization token for Actually Colab    |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Overrides: void

Defined in: [src/socket/client.ts:108](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L108)

## Properties

### editCell

• **editCell**: *MemoizeDebouncedFunction*<(`nb\_id`: *string*, `cell\_id`: *string*, `cellData`: *Required*<Pick<DCell, *language* \| *contents* \| *cursor_col* \| *cursor_row*\>\>) => *void*\>

Edits the contents of a cell.

Will fail if cell lock not acquired.

**`param`** Notebook to create cell in

**`param`** Cell to edit

**`param`** Cell data to replace with

Defined in: [src/socket/client.ts:414](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L414)

___

### socketClient

• `Private` **socketClient**: *w3cwebsocket*

Defined in: [src/socket/client.ts:108](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L108)

___

### updateOutput

• **updateOutput**: *MemoizeDebouncedFunction*<(`nb\_id`: *string*, `cell\_id`: *string*, `output`: *string*) => *void*\>

Sends a compressed output for a cell to be shared with users in the notebook.

**`param`** Notebook to update

**`param`** Cell to update

**`param`** Content to share

Defined in: [src/socket/client.ts:447](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L447)

___

### prefixed

▪ `Static` **prefixed**: *string* \| *boolean*

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:9

## Methods

### addListener

▸ **addListener**<T\>(`event`: T, `fn`: (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void*, `context?`: *any*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | keyof SocketConnectionListeners \| keyof SocketMessageListeners |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn` | (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void* |
`context?` | *any* |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:45

___

### close

▸ **close**(): *void*

Disconnects from server, but does not remove event listeners.

**Returns:** *void*

Defined in: [src/socket/client.ts:276](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L276)

___

### closeNotebook

▸ **closeNotebook**(`nb_id`: *string*): *void*

Closes a connection to a specific notbeook.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nb_id` | *string* | Notebook to disconnect from    |

**Returns:** *void*

Defined in: [src/socket/client.ts:309](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L309)

___

### createCell

▸ **createCell**(`nb_id`: *string*, `language`: *python* \| *markdown*): *void*

Creates a new cell in a notebook.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nb_id` | *string* | Notebook to create cell in.   |
`language` | *python* \| *markdown* | Programming language of cell.    |

**Returns:** *void*

Defined in: [src/socket/client.ts:375](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L375)

___

### deleteCell

▸ **deleteCell**(`nb_id`: *string*, `cell_id`: *string*): *void*

Deletes a specific cell from a specific notebook

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nb_id` | *string* | Notebook containing the cell   |
`cell_id` | *string* | Cell to delete    |

**Returns:** *void*

Defined in: [src/socket/client.ts:436](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L436)

___

### disconnectAndRemoveAllListeners

▸ **disconnectAndRemoveAllListeners**(): *void*

Aborts all in-flight requests, removes all event listeners,
and closes the connection to the Actually Colab Socket API.

**Returns:** *void*

Defined in: [src/socket/client.ts:284](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L284)

___

### emit

▸ **emit**<T\>(`event`: T, ...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]): *boolean*

Calls each of the listeners registered for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | keyof SocketConnectionListeners \| keyof SocketMessageListeners |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`...args` | *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>] |

**Returns:** *boolean*

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): (keyof SocketConnectionListeners \| keyof SocketMessageListeners)[]

Return an array listing the events for which the emitter has registered
listeners.

**Returns:** (keyof SocketConnectionListeners \| keyof SocketMessageListeners)[]

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:15

___

### initSocketEventListeners

▸ `Private`**initSocketEventListeners**(): *void*

**Returns:** *void*

Defined in: [src/socket/client.ts:124](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L124)

___

### listenerCount

▸ **listenerCount**(`event`: keyof SocketConnectionListeners \| keyof SocketMessageListeners): *number*

Return the number of listeners listening to a given event.

#### Parameters:

Name | Type |
:------ | :------ |
`event` | keyof SocketConnectionListeners \| keyof SocketMessageListeners |

**Returns:** *number*

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<T\>(`event`: T): (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void*[]

Return the listeners registered for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | keyof SocketConnectionListeners \| keyof SocketMessageListeners |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |

**Returns:** (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void*[]

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:20

___

### lockCell

▸ **lockCell**(`nb_id`: *string*, `cell_id`: *string*): *void*

Acquires a cell lock for editing.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nb_id` | *string* | Notebook to create cell in.   |
`cell_id` | *string* | Cell to edit.    |

**Returns:** *void*

Defined in: [src/socket/client.ts:385](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L385)

___

### off

▸ **off**<T\>(`event`: T, `fn?`: (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void*, `context?`: *any*, `once?`: *boolean*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | keyof SocketConnectionListeners \| keyof SocketMessageListeners |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn?` | (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void* |
`context?` | *any* |
`once?` | *boolean* |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<T\>(`event`: T, `fn`: (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void*, `context?`: *any*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Add a listener for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | keyof SocketConnectionListeners \| keyof SocketMessageListeners |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn` | (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void* |
`context?` | *any* |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<T\>(`event`: T, `fn`: (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void*, `context?`: *any*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Add a one-time listener for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | keyof SocketConnectionListeners \| keyof SocketMessageListeners |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn` | (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void* |
`context?` | *any* |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:54

___

### openNotebook

▸ **openNotebook**(`nb_id`: *string*): *void*

Connects to a specific notebook.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nb_id` | *string* | Notebook to connect to.    |

**Returns:** *void*

Defined in: [src/socket/client.ts:300](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L300)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: keyof SocketConnectionListeners \| keyof SocketMessageListeners): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Remove all listeners, or those of the specified event.

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | keyof SocketConnectionListeners \| keyof SocketMessageListeners |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<T\>(`event`: T, `fn?`: (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void*, `context?`: *any*, `once?`: *boolean*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Remove the listeners of a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | keyof SocketConnectionListeners \| keyof SocketMessageListeners |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn?` | (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, keyof SocketConnectionListeners \| keyof SocketMessageListeners\>]) => *void* |
`context?` | *any* |
`once?` | *boolean* |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:63

___

### sendChatMessage

▸ **sendChatMessage**(`nb_id`: *string*, `message`: *string*): *void*

Echoes a message into the notebook chat.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nb_id` | *string* | The notebook to broadcast to   |
`message` | *string* | Text to send    |

**Returns:** *void*

Defined in: [src/socket/client.ts:477](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L477)

___

### sendEvent

▸ `Private`**sendEvent**(`action`: *string*, `data`: *Record*<string, unknown\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`action` | *string* |
`data` | *Record*<string, unknown\> |

**Returns:** *void*

Defined in: [src/socket/client.ts:290](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L290)

___

### shareNotebook

▸ **shareNotebook**(`emails`: *string*[], `nb_id`: *undefined* \| *null* \| *string* \| *number* \| *boolean*, `access_level`: NotebookAccessLevelType): *void*

Shares a notebook with another user. The requesting user must have
Full Access to share the notebook.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`emails` | *string*[] | - |
`nb_id` | *undefined* \| *null* \| *string* \| *number* \| *boolean* | id of the notebook to share   |
`access_level` | NotebookAccessLevelType | permissions level for the user that the notebook is being shared with    |

**Returns:** *void*

Defined in: [src/socket/client.ts:321](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L321)

___

### shareWorkshop

▸ **shareWorkshop**(`emails`: *string*[], `ws_id`: *undefined* \| *null* \| *string* \| *number* \| *boolean*, `access_level`: WorkshopAccessLevelType): *void*

Shares a workshop with another user. The requesting user must have
Instructor access to share the notebook.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`emails` | *string*[] | users to share with   |
`ws_id` | *undefined* \| *null* \| *string* \| *number* \| *boolean* | id of the workshop to share   |
`access_level` | WorkshopAccessLevelType | permissions level for the user that the workshop is being shared with    |

**Returns:** *void*

Defined in: [src/socket/client.ts:351](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L351)

___

### startWorkshop

▸ **startWorkshop**(`ws_id`: *undefined* \| *null* \| *string* \| *number* \| *boolean*): *void*

Starts a new workshop. The requesting user must have
Instructor access.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ws_id` | *undefined* \| *null* \| *string* \| *number* \| *boolean* | id of the workshop to share    |

**Returns:** *void*

Defined in: [src/socket/client.ts:365](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L365)

___

### unlockCell

▸ **unlockCell**(`nb_id`: *string*, `cell_id`: *string*, `cellData`: *Required*<Pick<DCell, *language* \| *contents* \| *cursor_col* \| *cursor_row*\>\>): *void*

Releases a cell lock. Must have acquired lock.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nb_id` | *string* | Notebook to create cell in.   |
`cell_id` | *string* | Cell to edit.   |
`cellData` | *Required*<Pick<DCell, *language* \| *contents* \| *cursor_col* \| *cursor_row*\>\> | Cell data to replace with    |

**Returns:** *void*

Defined in: [src/socket/client.ts:396](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L396)

___

### unshareNotebook

▸ **unshareNotebook**(`emails`: *string*[], `nb_id`: *undefined* \| *null* \| *string* \| *number* \| *boolean*): *void*

Revokes notebook access from another user. The requesting user must have
Full Access to share the notebook.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`emails` | *string*[] | users to revoke access from   |
`nb_id` | *undefined* \| *null* \| *string* \| *number* \| *boolean* | id of the notebook    |

**Returns:** *void*

Defined in: [src/socket/client.ts:336](https://github.com/actually-colab/editor/blob/9917bd3/client/src/socket/client.ts#L336)
