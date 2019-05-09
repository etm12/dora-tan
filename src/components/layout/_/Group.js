import * as React from 'karet';
import * as U from 'karet.util';

const Group = ({ header, className, id, children }) =>
  <section
    className={U.cns(
      'c--group',
      className,
      U.string`c--group--is-${id}`,
    )}
  >
    {U.when(
      header,
      <header className="c--group__header">
        {header}
      </header>,
    )}
    {children}
  </section>;

export default Group;
