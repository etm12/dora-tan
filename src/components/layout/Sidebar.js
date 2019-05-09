import * as React from 'karet';
import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';
import * as R from 'kefir.ramda';

import CardEditor from './_/CardEditor';
import GlobalControls from './_/GlobalControls';
import Group from './_/Group';

const Sidebar = ({ current, cards }) => {
  const currentCard = U.view(L.find(R.whereEq({ id: current })), cards);

  return (
    <aside className="c--sidebar">
      <Group>
        <GlobalControls />
      </Group>
      <Group>
        <CardEditor card={currentCard} />
      </Group>

      <Group>
        <pre><code>{U.stringify(currentCard, null, 2)}</code></pre>
      </Group>
    </aside>
  );
};

export default Sidebar;
