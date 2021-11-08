import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AdminStateInterface } from './state';

const getters: GetterTree<AdminStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
