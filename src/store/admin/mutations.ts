import { MutationTree } from 'vuex';
import { AdminStateInterface, IAdminInfo } from './state';

const mutation: MutationTree<AdminStateInterface> = {
  addAdmin (state, newAdmin:IAdminInfo) {
    state.admins.push(newAdmin);
  },
  updateAdmin (state, updatedAdmin:IAdminInfo) {
    const index = state.admins.findIndex((s) => {
      return s.idNumber == updatedAdmin.idNumber;
    })
    if (index >= 0) {
      state.admins.splice(index, 1, updatedAdmin);
    }
  },
  removeAdmin (state, targetAdmin:IAdminInfo) {
    const index = state.admins.findIndex((s) => {
      return s.idNumber == targetAdmin.idNumber;
    })
    if (index >= 0) {
      state.admins.splice(index, 1);
    }
  }
};

export default mutation;
