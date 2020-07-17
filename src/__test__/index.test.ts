import { writable } from '../';
import { WritableStore } from '../types';

describe('writable', () => {
  let store: WritableStore<number> | null = null;
  let callback: jest.Mock<any, [number]> | null = null;

  beforeEach(() => {
    store = writable(0);
    callback = jest.fn((_count: number) => void 0);
  });

  it('exposes "subscribe" and "set" functions', () => {
    expect('subscribe' in store!).toBe(true);
    expect('set' in store!).toBe(true);
  });

  describe('subscribe', () => {
    it('exposes an "unsubscribe" method', () => {
      expect('unsubscribe' in store!.subscribe(() => {})).toBe(true);
    });

    it('calls the specified callback when store value updates', () => {
      store!.subscribe(callback!);
      store!.set((count) => count + 1);
      expect(callback).toHaveBeenCalled();
    });
  });

  describe('set', () => {
    it('updates the store value and calls the subscription callback', () => {
      store!.subscribe(callback!);
      store!.set((count) => count + 1);
      expect(callback).toHaveBeenCalled();
    });
  });

  describe('unsubscribe', () => {
    it('removes the current subscription callback', () => {
      store!.subscribe(callback!).unsubscribe();
      store!.set((count) => count + 1);
      expect(callback).not.toHaveBeenCalled();
    });
  });
});
