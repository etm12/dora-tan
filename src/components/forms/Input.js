import * as React from 'karet';
import * as U from 'karet.util';

import BaseInput from './BaseInput';

export const TextInput = ({ value }) =>
  <BaseInput
    type="text"
  />;

export const NumberInput = ({ value, step = 5, min = 0 }) =>
  <BaseInput
    type="number"
    value={value}
    step={step}
    min={min}
  />
