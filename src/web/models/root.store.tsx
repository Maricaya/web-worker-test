import { types, Instance } from 'mobx-state-tree';
import { QuestionModel, QuestionSimple } from './question.store';
import { observable } from 'mobx';

export interface IRootStoreModel extends Instance<typeof RootStore> {}
export type RootStoreType = typeof RootStore.Type;

export const RootStore = types.model('RootStore', {
  QuestionSimple: types.optional(QuestionSimple, {
    qid: 0,
    uid: 0,
    title: '',
  }),
  QuestionModel: types.optional(QuestionModel, {
    list: [{ qid: 0, uid: 0, title: '' }],
  }),
});

export const createStore = () => RootStore.create({});
