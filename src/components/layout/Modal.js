import * as React from 'karet';
import * as U from 'karet.util';

import Icon from '../Icon';

const Modal = ({ header, children, scroll, open }) => {
  const modalRef = U.variable();

  const toggleModalVisibility = U.thru(
    U.template([open, modalRef]),
    U.consume(([flag, ref]) => {
      flag ? ref.showModal() : ref.close();
    }),
  );

  return (
    <React.Fragment>
      {U.sink(toggleModalVisibility)}

      <dialog
        ref={U.refTo(modalRef)}
        className={U.cns(
          'c--modal',
        )}
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
          <button
            className="c--button"
            onClick={U.doSet(open, false)}
          >
            Close
          </button>
        </footer>
      </dialog>
    </React.Fragment>
  );
};

export default Modal;
