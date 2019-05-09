import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';
import { v4 as mkUuid } from 'uuid';

import * as M from '../../../meta';
import Group from './Group';

const GlobalControls = ({ store }) =>
  <section>
    <Group>
      <button onClick={() => M.appendCardIn(store).set({ id: mkUuid() })}>
        Create new
      </button>
      <button onClick={() => M.ghostModeIn(store).modify(R.not)}>
        Outline
      </button>
    </Group>

    <Group header="State">
      <button>
        Export
      </button>
      <button>
        Import
      </button>
      <button>
        Clear
      </button>
    </Group>
  </section>;

export default GlobalControls;
