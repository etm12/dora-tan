import * as React from 'karet';
import * as U from 'karet.util';

import * as M from './meta';
import Board from './components/board/Board';
import Sidebar from './components/layout/Sidebar';

const Main = ({ store }) => {
  const { cards, current } = U.destructure(store);
  const ghostMode = M.ghostModeIn(store);
  const hasVisibleModals = M.hasVisibleFlagsIn(store);

  return (
    <main className={U.cns(
      'app-main',
      U.when(ghostMode, 'app-main--is-ghost'),
      U.when(hasVisibleModals, 'app-main--is-modal'),
    )}>
      <Board {...{ current, cards }} />
      <Sidebar {...{ store }} />
    </main>
  );
};

export default Main;
