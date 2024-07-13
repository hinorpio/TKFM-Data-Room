import Vue from "vue";
import Vuex from "vuex";
import Vuetify from 'vuetify'
import BaseStore from "@/plugins/BaseStore.js";
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
      themeColor: '#5f9df7'
    },
    mutations: {
      // Define your mutations here
    },
    actions: {
      // Define your actions here
    },
    modules: {
      // Define your modules here
    }
})

export default store