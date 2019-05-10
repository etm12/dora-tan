/**
 * Development environment -related helpers
 */
import * as K from 'kefir';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import * as M from '../meta';

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
}
