import Vue from "vue";
import Vuex from "vuex";
import Vuetify from 'vuetify'
import Cookies from 'cookie-universal-nuxt'
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
      themeColor: '#5f9df7',
      version: 'beta-0.7.5'
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