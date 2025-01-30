import Vue from 'vue'

import Potential from "./components/Potential";
import Global from "./components/Global";
import UpdateLogs from './components/UpdateLogs';
import Items from "./components/Items";
import Dispatch from "./components/Dispatch";
import Tags from "./components/Tags";
import Puzzles from "./components/Puzzles";
import Events from "./components/Events";
import Units from "./components/Units";
import Arts from "./components/Arts";

const util = {
    ...Global,
    ...UpdateLogs,
    ...Items,
    ...Dispatch,
    ...Potential,
    ...Tags,
    ...Puzzles,
    ...Events,
    ...Units,
    ...Arts,
}


Vue.use({
    install(Vue) {
      Vue.prototype.$util = util;
    }
});

export default util
