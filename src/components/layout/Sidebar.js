import * as React from 'karet';
import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';
import * as R from 'kefir.ramda';

import CardEditor from './_/CardEditor';
import GlobalControls from './_/GlobalControls';
import Group from './_/Group';
import Modal from './Modal';

const Sidebar = ({ store }) => {
  const { current, cards } = U.destructure(store);
  const currentCard = U.view(L.find(R.whereEq({ id: current })), cards);

  return (
    <aside className="c--sidebar">
      <Group>
        <GlobalControls store={store} />
      </Group>

      <Group header="Selected">
        <CardEditor card={currentCard} />
      </Group>

      <Group>
        <pre><code>{U.stringify(currentCard, null, 2)}</code></pre>
      </Group>
    </aside>
  );
};

export default Sidebar;
