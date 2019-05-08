import * as React from 'karet';
import * as U from 'karet.util';

import Board from './components/board/Board';
import Sidebar from './components/layout/Sidebar';

const Main = ({ store }) => {
  const { cards, current } = U.destructure(store);

  return (
    <main className="app-main">
      <Board {...{ current, cards }} />
      <Sidebar {...{ current, cards }} />
    </main>
  );
};

export default Main;
