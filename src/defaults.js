import { v4 as mkUuid } from 'uuid';

export const minSize = [225, 225];

export const storageKey = 'dora-tan:v1-2';

//

/**
 * @type {Array<HexColor}
 */
export const colors = [
  '',
];

/**
 * @type {State}
 */
export const initialState = {
  meta: {
    storageKey,
  },
  flags: {
    ghost: false,
    show: [],
  },
  current: null,
  cards: [
    {
      id: mkUuid(),
      position: [150, 150],
      size: [230, 280],
      content: 'This is also content',
    },
    {
      id: mkUuid(),
      position: [350, 100],
      size: [200, 300],
      content: 'This is content',
    },
    {
      id: mkUuid(),
      position: [75, 75],
      size: [200, 250],
      content: 'Ecommerce',
    },
  ],
};

/**
 * @typedef {object} State
 * @prop {object} flags
 * @prop {Array<String>} show
 * @prop {Uuid} current
 * @prop {Array<Card>} cards
 */

/**
 * @typedef {object} Card
 * @prop {Uuid} id
 * @prop {[number, number]} position
 * @prop {[number, number]} size
 * @prop {string} content
 */

/**
 * @typedef {object} Flags
 */

/**
 * @typedef {string} Uuid
 */

/**
 * @typedef {string} HexColor
 */
