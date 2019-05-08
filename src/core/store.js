import * as U from 'karet.util';

/**
 * While this looks like a simple wrapper, it's meant
 * for futureproofing changes to the store, w.r.t.
 * adding localStorage or Undo support.
 *
 * @template T
 * @param {T} initial
 */
export const mkStore = (initial = {}) => U.atom(initial);
