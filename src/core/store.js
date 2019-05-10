// eslint-ignore-next-line
import * as K from 'kefir';
import * as U from 'karet.util';
import Stored from 'atom.storage';


/**
 * Wrapper for creating an observable and mutable store
 *
 * @template T
 * @param {T} initial
 * @return {K.Observable<T, never>}
 */
export const mkStore = (initial = {}, key) => Stored({
  key,
  value: initial,
  Atom: U.atom,
  storage: localStorage,
});

/**
 * @typedef {K.Observable<State, any>} Store
 */
