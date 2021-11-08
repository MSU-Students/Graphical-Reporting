import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentStateInterface, IStudentInfo } from './state';

const actions: ActionTree<StudentStateInterface, StateInterface> = {
  newStudent (context, newStudent: IStudentInfo) {
    //call server api
    context.commit('addStudent', newStudent);
  },
  editStudent(context, updatedStudent: IStudentInfo) {
    //call server api
    context.commit('updateStudent', updatedStudent);
  },
  deleteStudent(context, targetStudent: IStudentInfo) {
    context.commit('removeStudent', targetStudent);
  }
};

export default actions;
