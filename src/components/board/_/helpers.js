import * as K from 'kefir';
import * as U from 'karet.util';

export const toPx = v => `${v}px`;

export const toCssTranslate = axis => v => `translate${axis.toUpperCase()}(${v})`;
