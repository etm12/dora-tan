import * as R from 'kefir.ramda';
import * as I from 'infestines';

/**
 * @template T
 * @type {Ary1Fn<T, string>}
 */
export const ensureString = R.unless(R.is(String), R.toString);
export const suffix = R.flip(R.concat);

//

export const toUnit = unit => R.pipe(ensureString, suffix(unit));

export const toPx = toUnit('px');
export const toRem = toUnit('rem');
export const toPercent = toUnit('%');
export const toDeg = toUnit('deg');

//

export const surroundWith = I.curry(function surroundWith(a, b, x) {
  return I.seq(x, R.concat(a), R.flip(R.concat)(b));
});

export const bimap = I.curry(function bimap(f, g, xy) {
  return [f(xy[0]), g(xy[1])];
});

// CSS ................................................................

const toTranslate = R.pipe(R.toUpper, R.concat('translate'));

/** @type {Ary1Fn<object, string>} */
export const toCssTranslate = R.pipe(
  R.toPairs,
  R.map(R.pipe(
    bimap(toTranslate, R.pipe(toPx, surroundWith('(', ')'))),
    R.join(''),
  )),
  R.join(' '),
);

/**
 * @callback Ary1Fn
 * @template T0, R
 * @param {T0} a
 * @return {R}
 */
