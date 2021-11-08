import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AuthStateInterface } from './state';

const actions: ActionTree<AuthStateInterface, StateInterface> = {
  login (context, credential: {username:string, password:string}) {
    // server request to API
    if (credential.username == credential.password) {
      context.commit('setActiveUser', credential);
    } else {
      throw new Error('Invalid User');
    }
  }
};

export default actions;
