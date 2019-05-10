import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import * as Default from './defaults';

const I = R.identity;

//

const orString = L.define('');
const orList = L.define([]);
const orTuple = L.define(Default.minSize);

// Flags ..............................................................

export const ghostModeIn = U.view(['flags', 'ghost']);
export const visibleFlagsIn = U.view(['flags', 'show']);
export const hasVisibleFlagsIn = U.view(['flags', 'show', L.reread(R.complement(R.isEmpty))]);

export const hasL = id => [
  L.normalize(R.sortBy(I)),
  L.find(R.equals(id)),
  L.is(id),
];

export const hasFlagIn = (id, xs) => U.view(hasL(id), xs);

export const isVisibleIn = id => U.view(['flags', 'show', hasL(id)]);

//

export const cardL = L.pick({
  id: ['id'],
  size: ['size', orTuple],
  position: ['position', orTuple],
  content: ['content', orString],
});

export const cardsL = ['cards', orList, L.array(cardL)];

// Base-level store views .............................................

export const cardIn = U.view(cardL);
export const cardsIn = U.view(cardsL);
export const appendCardIn = U.view([cardsL, L.appendTo]);

//
