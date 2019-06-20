import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
  coffees: [
    {title: 'Morning Capuccino Brew', ingredients: ['coffee', 'milk'], id: '1'},
    {title: 'Creamy latte', ingredients: ['coffee', 'cream', 'milk'], id: '2'},
    {title: 'Americano', ingredients: ['coffee'], id:'3'}
  ]
};

export default new Vuex.Store ( {
  state,
  mutations,
  actions,
  getters
});