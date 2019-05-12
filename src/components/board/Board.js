import * as React from 'karet';
import * as U from 'karet.util';

import Card from './_/Card';

const Board = ({ current, cards }) => {
  return (
    <section
      className="c--board"
      onClickCapture={U.doSet(current, null)}
    >
      {U.thru(
        cards,
        U.mapElems((card, ix) =>
          <Card {...{ key: ix, data: card, current }} />)
      )}
    </section>
  );
};

export default Board;
