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

Defined in: [src/socket/client.ts:48](https://github.com/actually-colab/editor/blob/0e7786b/client/src/socket/client.ts#L48)

## Properties

### editCell

• **editCell**: *DebouncedFunc*<(`nb\_id`: *string*, `cell\_id`: *string*, `cellData`: { `contents?`: *string* ; `cursor_pos?`: *null* \| *number* ; `language?`: *python* \| *markdown*  }) => *void*\>

Edits the contents of a cell.

Will fail if cell lock not acquired.

**`param`** Notebook to create cell in

**`param`** Cell to edit

**`param`** Cell data to replace with

Defined in: [src/socket/client.ts:184](https://github.com/actually-colab/editor/blob/0e7786b/client/src/socket/client.ts#L184)

___

### socketClient

• `Private` **socketClient**: *w3cwebsocket*

Defined in: [src/socket/client.ts:48](https://github.com/actually-colab/editor/blob/0e7786b/client/src/socket/client.ts#L48)

___

### prefixed

▪ `Static` **prefixed**: *string* \| *boolean*

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:9

## Methods

### addListener

▸ **addListener**<T\>(`event`: T, `fn`: (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void*, `context?`: *any*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn` | (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void* |
`context?` | *any* |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:45

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

Defined in: [src/socket/client.ts:150](https://github.com/actually-colab/editor/blob/0e7786b/client/src/socket/client.ts#L150)

___

### disconnectAndRemoveAllListeners

▸ **disconnectAndRemoveAllListeners**(): *void*

Aborts all in-flight requests, removes all event listeners,
and closes the connection to the Actually Colab Socket API.

**Returns:** *void*

Defined in: [src/socket/client.ts:124](https://github.com/actually-colab/editor/blob/0e7786b/client/src/socket/client.ts#L124)

___

### emit

▸ **emit**<T\>(`event`: T, ...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]): *boolean*

Calls each of the listeners registered for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`...args` | *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>] |

**Returns:** *boolean*

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): (*connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*)[]

Return an array listing the events for which the emitter has registered
listeners.

**Returns:** (*connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*)[]

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:15

___

### initSocketEventListeners

▸ `Private`**initSocketEventListeners**(): *void*

**Returns:** *void*

Defined in: [src/socket/client.ts:64](https://github.com/actually-colab/editor/blob/0e7786b/client/src/socket/client.ts#L64)

___

### listenerCount

▸ **listenerCount**(`event`: *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*): *number*

Return the number of listeners listening to a given event.

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited* |

**Returns:** *number*

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<T\>(`event`: T): (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void*[]

Return the listeners registered for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |

**Returns:** (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void*[]

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

Defined in: [src/socket/client.ts:160](https://github.com/actually-colab/editor/blob/0e7786b/client/src/socket/client.ts#L160)

___

### off

▸ **off**<T\>(`event`: T, `fn?`: (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void*, `context?`: *any*, `once?`: *boolean*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn?` | (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void* |
`context?` | *any* |
`once?` | *boolean* |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<T\>(`event`: T, `fn`: (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void*, `context?`: *any*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Add a listener for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn` | (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void* |
`context?` | *any* |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<T\>(`event`: T, `fn`: (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void*, `context?`: *any*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Add a one-time listener for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn` | (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void* |
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

Defined in: [src/socket/client.ts:140](https://github.com/actually-colab/editor/blob/0e7786b/client/src/socket/client.ts#L140)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Remove all listeners, or those of the specified event.

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited* |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<T\>(`event`: T, `fn?`: (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void*, `context?`: *any*, `once?`: *boolean*): [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Remove the listeners of a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn?` | (...`args`: *ArgumentMap*<ActuallyColabEventListeners\>[*Extract*<T, *connect* \| *close* \| *error* \| *notebook_opened* \| *cell_created* \| *cell_locked* \| *cell_unlocked* \| *cell_edited*\>]) => *void* |
`context?` | *any* |
`once?` | *boolean* |

**Returns:** [*ActuallyColabSocketClient*](actuallycolabsocketclient.md)

Inherited from: void

Defined in: node_modules/eventemitter3/index.d.ts:63

___

### sendEvent

▸ `Private`**sendEvent**(`action`: *string*, `data`: *Record*<string, unknown\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`action` | *string* |
`data` | *Record*<string, unknown\> |

**Returns:** *void*

Defined in: [src/socket/client.ts:130](https://github.com/actually-colab/editor/blob/0e7786b/client/src/socket/client.ts#L130)

___

### unlockCell

▸ **unlockCell**(`nb_id`: *string*, `cell_id`: *string*): *void*

Releases a cell lock. Must have acquired lock.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nb_id` | *string* | Notebook to create cell in.   |
`cell_id` | *string* | Cell to edit.    |

**Returns:** *void*

Defined in: [src/socket/client.ts:170](https://github.com/actually-colab/editor/blob/0e7786b/client/src/socket/client.ts#L170)
