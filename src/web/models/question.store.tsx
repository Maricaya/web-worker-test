import { types, Instance } from 'mobx-state-tree';
export interface IQuestionModel extends Instance<typeof QuestionModel> {}
export type QuestionModelType = typeof QuestionModel.Type;

export const QuestionModel = types
  .model('QuestionModel', {
    qid: types.number,
    uid: types.number,
    title: types.string,
  })
  .views((self) => ({}))
  .actions((self) => ({
    setQid(id: number) {
      self.qid = id;
    },
    setUid(id: number) {
      self.uid = id;
    },
    setTitle(title: string) {
      self.title = title;
    },
  }));
