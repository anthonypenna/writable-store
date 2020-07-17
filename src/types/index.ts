type WritableStoreSubscription = {
  unsubscribe(): void;
};

export declare type WritableStore<T extends unknown> = {
  set(callback: (state: T) => T): void;
  subscribe(callback: (state: T) => void): WritableStoreSubscription;
};
