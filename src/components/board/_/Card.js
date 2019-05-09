import * as React from 'karet';
import * as K from 'kefir';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import { toCssTranslate, toPx } from './helpers';

const Card = ({ current, data }) => {
  const {
    id,
    position,
    size,
    content,
  } = U.destructure(data);

  const isSelected = K.combine([current, id], R.equals);

  const elementSize =
    size.map(R.zipObj(['width', 'height']));

  const elementTransform =
    position.map(xy => xy.map(toPx))
            .map(([x, y]) => [toCssTranslate('x')(x), toCssTranslate('y')(y)].join(' '));

  return (
    <article
      className={U.cns(
        'c--card',
        U.when(isSelected, 'c--card--selected'),
      )}
      onClick={U.doSet(current, id)}
      style={U.template([elementSize, elementTransform])
        .map(([a, transform]) => Object.assign({}, a, { transform }))}
    >
      <header className="c--card__header">
        <span>{id}</span>
      </header>

      <div className="c--card__body">
        {content}
      </div>

      <footer className="c--card__footer">
        {size.map(wh => wh.join(' × '))}
      </footer>
    </article>
  );
};

export default Card;
