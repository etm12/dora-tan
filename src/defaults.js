import { v4 as mkUuid } from 'uuid';

export const initialState = {
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
      position: [100, 100],
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
