import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { TableStateInterface } from './state';

const getters: GetterTree<TableStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
