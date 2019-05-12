import * as U from 'karet.util';

const actions_ = U.serializer(null);

export const pushAction = U.doPush(actions_);

export const actions = U.mapValue(actions_, a => a);
