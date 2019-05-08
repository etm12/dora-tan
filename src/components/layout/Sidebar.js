import * as React from 'karet';
import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';
import * as R from 'kefir.ramda';

import CardEditor from './_/CardEditor';

const Sidebar = ({ current, cards }) => {
  const currentCard = U.view(L.find(R.whereEq({ id: current })), cards);

  return (
    <aside className="c--sidebar">
      <CardEditor card={currentCard} />

      <pre><code>{U.stringify(currentCard, null, 2)}</code></pre>
    </aside>
  );
};

export default Sidebar;
