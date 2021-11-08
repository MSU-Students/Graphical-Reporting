import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import {SearchStateInterface } from './state';

const getters: GetterTree<SearchStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
