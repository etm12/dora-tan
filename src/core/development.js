/**
 * Development environment -related helpers
 */
import * as K from 'kefir';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';
import { detailedDiff } from 'deep-object-diff';

import * as M from '../meta';

/**
 * @template T
 * @param {K.Observable<T, never>} store
 */
export const storeDiff = store => store
  .skipDuplicates(R.equals)
  .scan((prev, next) => [prev, next], [undefined, undefined])
  .map(R.apply(detailedDiff))
  .log('store diff');

export default store => {
  Object.assign(
    window,
    {
      __APP: {
        store,
        M,
      },
      K, U, R, L,
    }
  );

  storeDiff(store);
}
