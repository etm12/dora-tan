import * as React from 'karet';
import * as U from 'karet.util';

const Group = ({ className, id, children }) =>
  <section
    className={U.cns(
      'c--group',
      className,
      U.string`c--group--is-${id}`,
    )}
  >
    {children}
  </section>;

export default Group;
