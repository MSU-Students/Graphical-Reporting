import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AdminStateInterface, IAdminInfo } from './state';

const actions: ActionTree<AdminStateInterface, StateInterface> = {
  newAdmin (context, newAdmin: IAdminInfo) {
    //call server api
    context.commit('addAdmin', newAdmin);
  },
  editAdmin(context, updatedAdmin: IAdminInfo) {
    //call server api
    context.commit('updateAdmin', updatedAdmin);
  },
  deleteAdmin(context, targetAdmin: IAdminInfo) {
    context.commit('removeAdmin', targetAdmin);
  }
};

export default actions;
