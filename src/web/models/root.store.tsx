import { types, Instance } from 'mobx-state-tree';
import { QuestionModel } from './question.store';

import { observable } from 'mobx';

export interface IRootStoreModel extends Instance<typeof RootStore> {}
export type RootStoreType = typeof RootStore.Type;

export const RootStore = types.model('RootStore', {
  QuestionModel: types.optional(QuestionModel, {
    qid: 0,
    uid: 0,
    title: '',
  }),
});

export const createStore = () => RootStore.create({});
