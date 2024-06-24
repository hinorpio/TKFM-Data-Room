import Vuex from "vuex";
import Cookies from "js-cookie";
class BaseStore extends Vuex.Store {
    constructor(options = {}) {
        BaseStore.initState(options);
        BaseStore.initMutations(options);
        BaseStore.initActions(options);
        BaseStore.initGetters(options);
        super(options);
    }

    static initState(options) {
        if (!options.hasOwnProperty("state")) options.state = {};
        (options.state.navigationBar = {
            isOpen: Cookies.get(options.state.frontEntry + "isNavigationBarOpened") ?
                !!+Cookies.get(options.state.frontEntry + "isNavigationBarOpened") : true
        });
        options.state.locale = Cookies.get(options.state.frontEntry + "locale") || "en";
    }
    static initMutations(options) {
        if (!options.hasOwnProperty("mutations")) options.mutations = {};
        options.mutations.TOGGLE_SIDEBAR = state => {
            state.navigationBar.isOpen = !state.navigationBar.isOpen;
            if (state.navigationBar.isOpen) {
                Cookies.set(options.state.frontEntry + "isNavigationBarOpened", 1);
            } else {
                Cookies.set(options.state.frontEntry + "isNavigationBarOpened", 0);
            }
        };
        options.mutations.SET_LOCALE = (state, locale) => {
            state.locale = locale;
            Cookies.set(options.state.frontEntry + "locale", locale);
        };
    }
    static initActions(options) {
        if (!options.hasOwnProperty("actions")) options.actions = {};
        (options.actions.toggleSideBar = function({ commit }) {
            commit("TOGGLE_SIDEBAR");
        }),
        (options.actions.setLocale = function({ commit }, locale) {
            commit("SET_LOCALE", locale);
        })
    }

    static initGetters(options) {
        if (!options.hasOwnProperty("getters")) options.getters = {};
        options.getters.isNavigationBarOpened = state => {
            return state.navigationBar.isOpen;
        };
        options.getters.locale = state => {
            return state.locale;
        };
    }
}
export default BaseStore;