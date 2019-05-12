import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
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
    <Modal
      id="store--import"
      flags={M.visibleFlagsIn(store)}
      header="Import data"
      scroll="y"
    >
      <Markdown>
        {`Write or paste JSON into the text area below to import it into the application state.

## Beware

_This will overwrite the application state in its entirety, and no assertions are done on the validity or correctness of the JSON data.
The state is persisted into \`localStorage\`, so if you need to reset the application, you can do so from your browser's development tools._`}
      </Markdown>
      <textarea
        readOnly
        className="fullsize c--input--textarea"
        style={{ marginTop: '1rem' }}
        rows={12}
        value={''}
      />
    </Modal>

    <Group>
      <button
        className="c--button is-primary"
        onClick={() => M.appendCardIn(store).set({ id: mkUuid() })}
      >
        Create new
      </button>
      <button
        className="c--button is-primary"
        onClick={() => M.ghostModeIn(store).modify(R.not)}
      >
        Outline
      </button>
    </Group>

    <Group header="State">
      <button
        className="c--button is-primary"
        onClick={() => M.isVisibleIn('store--export')(store).set(true)}
      >
        Export
      </button>
      <button
        className="c--button is-primary"
        onClick={() => M.isVisibleIn('store--import')(store).set(true)}
      >
        Import
      </button>
      <button
        className="c--button is-primary"
        onClick={() => {}}
        disabled
      >
        Clear
      </button>
    </Group>
  </section>;

export default GlobalControls;
