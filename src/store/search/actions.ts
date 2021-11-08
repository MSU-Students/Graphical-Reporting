import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SearchStateInterface, ISearchInfo } from './state';

const actions: ActionTree<SearchStateInterface, StateInterface> = {

  editSearch(context, updatedSearch: ISearchInfo) {
    //call server api
    context.commit('updateSearch', updatedSearch);
  },
  deleteSearch(context, targetSSearch: ISearchInfo) {
    context.commit('removeSearch', targetSSearch);
  }
};

export default actions;
