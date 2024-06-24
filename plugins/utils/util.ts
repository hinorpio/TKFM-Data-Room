import Vue from 'vue'

import Potential from "./Potential";
import Global from "./Global";
import Items from "./Items";
import Tags from "./Tags";
import Units from "./Units";

const util = {
    ...Global,
    ...Items,
    ...Potential,
    ...Tags,
    ...Units
}


Vue.use({
    install(Vue) {
      Vue.prototype.$util = util;
    }
});

export default util
