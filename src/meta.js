import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import * as Default from './defaults';

//

const orString = L.define('');
const orList = L.define([]);
const orTuple = L.define(Default.minSize);

// Flags ..............................................................

export const ghostModeIn = U.view(['flags', 'ghost']);

//

export const cardL = L.pick({
  id: ['id'],
  size: ['size', orTuple],
  position: ['position', orTuple],
  content: ['content', orString],
});

export const cardsL = ['cards', orList, L.array(cardL)];

//

export const cardIn = U.view(cardL);
export const cardsIn = U.view(cardsL);
export const appendCardIn = U.view([cardsL, L.appendTo]);
