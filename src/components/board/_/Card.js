import * as React from 'karet';
import * as K from 'kefir';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import { toCssTranslate, toPx } from './helpers';
import Markdown from '../../Markdown';

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
    position.map(([x, y]) => toCssTranslate({ x, y }));

  const cardStyle =
    U.template([elementSize, elementTransform])
     .map(([a, transform]) => Object.assign({}, a, { transform }));

  return (
    <article
      className={U.cns(
        'c--card',
        U.when(isSelected, 'c--card--selected'),
      )}
      onClick={U.doSet(current, id)}
      style={cardStyle}
    >
      <header className="c--card__header">
        <span>{id}</span>
      </header>

      <div className="c--card__body">
        <Markdown>{content}</Markdown>
      </div>

      <aside className="c--card__aside">
        <button
          className="c--button is-danger"
          onClick={U.doRemove(data)}
        >
          Remove
        </button>
        <button
          disabled
          className="c--button is-primary"
        >
          Lock
        </button>
        <button
          disabled
          className="c--button is-primary"
        >
          Outline
        </button>
      </aside>

      <footer className="c--card__footer">
        {size.map(wh => wh.join(' × '))}
      </footer>
    </article>
  );
};

export default Card;
