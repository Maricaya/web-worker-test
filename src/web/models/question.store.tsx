import { types, Instance } from 'mobx-state-tree';
export interface IQuestionModel extends Instance<typeof QuestionModel> {}
export type QuestionModelType = typeof QuestionModel.Type;
import axios from 'axios';

export const QuestionSimple = types
  .model('QuestionSimple', {
    qid: types.number,
    uid: types.number,
    title: types.string,
  })
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

export const QuestionModel = types
  .model('QuestionModel', {
    list: types.array(QuestionSimple),
  })
  .views((self) => ({}))
  .actions((self) => ({
    async getAllList(type: string) {
      // let res = await axios.get(`/api/list/:${type}`, {
      //   responseType: 'json',
      // });
      // fetch(`/api/list/:${type}`)
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log(res.list);
      //     self.list.push(...res.list);
      //   });
    },
  }));
