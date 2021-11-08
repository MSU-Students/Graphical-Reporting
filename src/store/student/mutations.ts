import { MutationTree } from 'vuex';
import { StudentStateInterface, IStudentInfo } from './state';

const mutation: MutationTree<StudentStateInterface> = {
  addStudent (state, newStudent:IStudentInfo) {
    state.students.push(newStudent);
  },
  updateStudent (state, updatedStudent:IStudentInfo) {
    const index = state.students.findIndex((s) => {
      return s.idNumber == updatedStudent.idNumber;
    })
    if (index >= 0) {
      state.students.splice(index, 1, updatedStudent);
    }
  },
  removeStudent (state, targetStudent:IStudentInfo) {
    const index = state.students.findIndex((s) => {
      return s.idNumber == targetStudent.idNumber;
    })
    if (index >= 0) {
      state.students.splice(index, 1);
    }
  }
};

export default mutation;
