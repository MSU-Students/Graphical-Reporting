import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import {TableStateInterface } from './state';

const actions: ActionTree<TableStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
