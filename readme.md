# Writable Store
Tiny tiny state management package inspired by Svelte stores.

## Installation
```bash
$ npm i writable-store
```

## Setup
Import `writable` and create a writable store with an initial state:
```js
import { writable } from 'writable-store'

export const todoStore = writable([])
```

Import the store inside your component and subscribe to receive updated values:
```js
import { todoStore } from './stores'

const $todos = todoStore.subscribe(todos => /* Do something... */)
```

You can use the value received after subscription to update component props, state etc...

To update the store with a new value:
```js
todoStore.set(todos => /* New value... */)
```

Remember to unsubscribe during cleanup / unmounting:
```js
$todos.unsubscribe()
```