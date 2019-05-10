import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';
import { v4 as mkUuid } from 'uuid';

import * as M from '../../../meta';
import Group from './Group';
import Modal from '../Modal';
import Markdown from '../../Markdown';

const GlobalControls = ({ store }) =>
  <section>
    <Modal
      id="store--export"
      flags={M.visibleFlagsIn(store)}
      header="Export data"
    >
      <Markdown>
        {`Below is your application state in JSON format. Copy this and save it somewhere as a backup.

Use this JSON to initialize your store and you should be able to continue from this exact dialog.`}
      </Markdown>
      <textarea
        readOnly
        className="fullsize c--input--textarea"
        style={{ marginTop: '1rem' }}
        rows={12}
        value={U.stringify(store, null, 2)}
      />
    </Modal>

    <Group>
      <button onClick={() => M.appendCardIn(store).set({ id: mkUuid() })}>
        Create new
      </button>
      <button onClick={() => M.ghostModeIn(store).modify(R.not)}>
        Outline
      </button>
    </Group>

    <Group header="State">
      <button onClick={() => M.isVisibleIn('store--export')(store).set(true)}>
        Export
      </button>
      <button>
        Import
      </button>
      <button onClick={() => {}}>
        Clear
      </button>
    </Group>
  </section>;

export default GlobalControls;
