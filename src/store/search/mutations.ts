import { MutationTree } from 'vuex';
import { SearchStateInterface, ISearchInfo } from './state';

const mutation: MutationTree<SearchStateInterface> = {

  updateSearch (state, updatedSearch:ISearchInfo) {
    const index = state.searchs.findIndex((s) => {
      return s.idNumber == updatedSearch.idNumber;
    })
    if (index >= 0) {
      state.searchs.splice(index, 1, updatedSearch);
    }
  },
  removeSearch (state, targetSearch:ISearchInfo) {
    const index = state.searchs.findIndex((s) => {
      return s.idNumber == targetSearch.idNumber;
    })
    if (index >= 0) {
      state.searchs.splice(index, 1);
    }
  }
};

export default mutation;
