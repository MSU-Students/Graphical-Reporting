import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { TableStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const tableModule: Module<TableStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default tableModule;
