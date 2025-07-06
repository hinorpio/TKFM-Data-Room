import Vue from 'vue'

import Global from "./components/Global";
import UpdateLogs from './components/UpdateLogs';
import Items from "./components/Items";
import Dispatch from "./components/Dispatch";
import Tags from "./components/Tags";
import Puzzles from "./components/Puzzles";
import Events from "./components/Events";
import Units from "./components/Units";
import Arts from "./components/Arts";
import StatCal from "./components/StatCal";

const util = {
    ...Global,
    ...UpdateLogs,
    ...Items,
    ...Dispatch,
    ...Tags,
    ...Puzzles,
    ...Events,
    ...Units,
    ...Arts,
    ...StatCal
}


Vue.use({
    install(Vue) {
      Vue.prototype.$util = util;
    }
});

export default util
