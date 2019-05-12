import * as React from 'karet';
import * as U from 'karet.util';

const cb = {
  text: e => e.target.value,
  number: e => +e.target.value,
};

const BaseInput = ({ value, defaultValue, placeholder, disabled, onInput, type = 'text' }) =>
  <input
    className={U.cns(
      'c--input',
      U.string`c--input--${type}`,
    )}
    disabled={disabled}
    placeholder={placeholder}
    defaultValue={defaultValue}
    value={value}
    type={type}
    onInput={U.through(cb[type], U.set(value))}
  />;

export default BaseInput;
