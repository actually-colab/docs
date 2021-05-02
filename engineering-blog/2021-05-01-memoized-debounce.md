---
slug: memoize-debounce
title: Creating a Memoized Debounced Function with Lodash
author: Bailey Tincher
author_title: Backend Dev for Actually Colab
author_url: https://btin.io
author_image_url: https://images.ctfassets.net/a89ba9vew5x3/3w6LDn03YOx8Ymsc2ccr55/c1c283b1bdbfa36f1dfee84e7d29b255/-2884675493317768856.jpg?w=450&fl=progressive&q=100
tags: [Engineering, Performance, TypeScript]
---

## The Problem

Creating a real-time collaborative text editor is a balance between performance and efficiency. We want 
keystrokes to *appear* live to other users, but, practically, what does that actually mean? With some having a 
typing speed in excess of 5 characters per second, it seems unnecessary to send a request every two-tenths of 
a second for each keystroke. To reduce the volume of requests being made we can group a series of edits together 
and send them in chunks. This way, rather than sending 1 character per request, we send groups of 3 or 4 
characters instead.

This approach is often referred to as *[debouncing](https://medium.com/@jamischarles/what-is-debouncing-2505c0648ff1#:~:text=This%20is%20what%20debouncing%20does,performance%20issues%20for%20the%20server.)* requests.

## Initial Approach with Lodash

Common utility libraries in JavaScript exist to debounce such as [Lodash](https://lodash.com/docs/4.17.15#debounce).

```javascript
_.debounce(func, [wait=0], [options={}])
```

Looking at the signature, it accepts the function to debounce and the number of milliseconds to delay as arguments.
This is great and does exactly what it claims. Let's see what this would look like with our text editor.

```javascript
const edit = (id: string, contents: string) => { ... };
const debouncedEdit = _.debounce(edit, 500, { maxWait: 1000 });
```

```javascript

debouncedEdit(someId, '.');
// 300ms later
debouncedEdit(someId, '...');
```

This seems to do the trick. Though two function calls are made that make a request to our server,
only the final one will get executed since it was called before our 500ms debounce window. 
Let's look at another scenario.

```javascript
debouncedEdit(someId, '.');
// 300ms later
debouncedEdit(otherId, '?');
```

In this case, our user is super fast and switches which editor they are working in and types another character 
before our 500ms debounce window. As a result, the first call to update the contents of cell `someId` never gets
triggered. 

This reflects a key shortcoming with Lodash's debounce. It has no regard for the parameters being
passed to the function and instead will simply reset with each call. Unfortunately, none of Lodash's optional 
parameters for debounce can help us get around this. 

## The Memoized Debounce

To create a debounce function that discriminates based on the parameters being passed to it, we'll need a 
custom option. Some ideas were discussed on [this issue thread](https://github.com/lodash/lodash/issues/2403)
that inspired my approach. The thread had some working prototypes, but they were not compatible with TypeScript.

Lodash's TypeScript support is peculiar, but I did my best to work around it.

```typescript
import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

export interface MemoizeDebouncedFunction<F extends AnyFunction>
  extends _.DebouncedFunc<F> {
  (...args: Parameters<F>): ReturnType<F> | undefined;
  flush: (...args: Parameters<F>) => ReturnType<F> | undefined;
  cancel: (...args: Parameters<F>) => void;
}

/**Combines Lodash's _.debounce with _.memoize to allow for debouncing
 * based on parameters passed to the function during runtime.
 *
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @param options Lodash debounce options object.
 * @param resolver The function to resolve the cache key.
 */
export function memoizeDebounce<F extends AnyFunction>(
  func: F,
  wait = 0,
  options: _.DebounceSettings = {},
  resolver?: (...args: Parameters<F>) => unknown
): MemoizeDebouncedFunction<F> {
  const debounceMemo = _.memoize<(...args: Parameters<F>) => _.DebouncedFunc<F>>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (..._args: Parameters<F>) => _.debounce(func, wait, options),
    resolver
  );

  function wrappedFunction(
    this: MemoizeDebouncedFunction<F>,
    ...args: Parameters<F>
  ): ReturnType<F> | undefined {
    return debounceMemo(...args)(...args);
  }

  const flush: MemoizeDebouncedFunction<F>['flush'] = (...args) => {
    return debounceMemo(...args).flush();
  };

  const cancel: MemoizeDebouncedFunction<F>['cancel'] = (...args) => {
    return debounceMemo(...args).cancel();
  };

  wrappedFunction.flush = flush;
  wrappedFunction.cancel = cancel;

  return wrappedFunction;
}
```

Now we can put it to use to solve our original problem.

```javascript

const edit = (id: string, contents: string) => { ... };

// Create a cache key for memoize based on the id
const memoizeDebounceEditResolver = (id: string, _contents: string) => id;

const memoizeDebouncedEdit = memoizeDebounce(edit, 500, { maxWait: 1000 }, memoizeDebounceEditResolver);
```

And then we use it just like a normal function!

```javascript
memoizeDebouncedEdit(someId, '.'); // Won't get sent
// 300ms later
memoizeDebouncedEdit(someId, '...'); // Will get sent

// 300ms later
memoizeDebouncedEdit(otherId, '?'); // Will get sent
```

Unlike the original `debouncedEdit`, in this case both requests to edit `someId` and `otherId` 
will be completed.
