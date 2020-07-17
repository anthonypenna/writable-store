import { WritableStore } from './types';

export function writable<T extends unknown>(state: T): WritableStore<T> {
  let writableState: T | null = state;
  let subscribers: Array<(state: T) => void> | null = [];
  return {
    set(callback) {
      writableState = callback.call(null, writableState as T);
      subscribers!.forEach((subscriber) => subscriber(writableState as T));
    },
    subscribe(callback) {
      subscribers!.push(callback);
      return {
        unsubscribe() {
          subscribers = subscribers ? subscribers.filter((subscriber) => subscriber !== callback) : [];
        },
      };
    },
  };
}
