import { MutationTree } from 'vuex';
import { AuthStateInterface, UserProfile } from './state';

const mutation: MutationTree<AuthStateInterface> = {
  setActibrUser (state, activeUser: UserProfile) {
    state.activeUser = activeUser;
  }
};

export default mutation;
