import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import Remarkable from 'remarkable';

const md = new Remarkable();

const Markdown = ({ children }) =>
  <div
    className="c--markdown"
    dangerouslySetInnerHTML={{
      __html: U.thru(
        children,
        U.mapValue(R.pipe(
          R.unless(R.is(Array), R.of),
          R.map(c => md.render(c)),
        ))
      )
    }}
  />;

export default Markdown;
