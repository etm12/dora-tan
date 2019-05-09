import * as U from 'karet.util';
import Stored from 'atom.storage';


/**
 * While this looks like a simple wrapper, it's meant
 * for futureproofing changes to the store, w.r.t.
 * adding localStorage or Undo support.
 *
 * @template T
 * @param {T} initial
 */
export const mkStore = (initial = {}, key) => Stored({
  key,
  value: initial,
  Atom: U.atom,
  storage: localStorage,
});
