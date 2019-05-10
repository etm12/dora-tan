import * as React from 'karet';
import * as U from 'karet.util';

import * as M from '../../meta';

const Modal = ({ id, flags, header, children, scroll }) => {
  const modalRef = U.variable();
  const open = U.view(M.hasL(id), flags);

  open.log('open');

  const toggleModalVisibility = U.thru(
    U.template([open, modalRef]),
    U.consume(([flag, ref]) => flag ? ref.showModal() : ref.close()),
  );

  return (
    <React.Fragment>
      {U.sink(toggleModalVisibility)}

      <dialog
        ref={U.refTo(modalRef)}
        className="c--modal"
        style={{ display: U.ifElse(open, 'block', 'none') }}
      >
        <header className="c--modal__header">
          {header}
        </header>

        <div className={U.cns(
          'c--modal__body',
          U.when(scroll, U.string`scrollable--${scroll}`),
        )}>
          {children}
        </div>

        <footer className="c--modal__footer">
          <button className="c--button is-primary"
                  onClick={U.doSet(open, false)}>
            Close
          </button>
        </footer>
      </dialog>
    </React.Fragment>
  );
};

export default Modal;
