import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: null,
  },
  getters: {
    getLocations: (state) => state.locations,
  },
  mutations: {
    setLocations: (state, locations) => {
      state.locations = locations;
    },
  },
  actions: {
    setLocations: ({commit}) => {
      let locations: any = [];

      db.collection('locations').onSnapshot((snapshot) => {
        locations = [];
        snapshot.forEach((doc) => {
          locations.push({id: doc.id, title: doc.data().name});
        });

        commit('setLocations', locations);
      });

    },
  },
});
