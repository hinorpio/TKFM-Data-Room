import Vue from "vue";
import Vuex from "vuex";
import Vuetify from 'vuetify'
import BaseStore from "@/plugins/BaseStore.js";
Vue.use(Vuex);

let store
const initStore = () => {
    return (
        store ||
        (store = new BaseStore({
            state: {
                themeColor: "#5f9df7",
            },
        }))
    );
};

export default initStore;