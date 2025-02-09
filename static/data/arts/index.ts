import Q_STICKER from "./offical/Q_STICKER"
import SHAKE_STICKER from "./offical/SHAKE_STICKER"
import NANA_SUMMER_COMIC from "./offical/NANA_SUMMER_COMIC"

import DOKGUN_STICKER_KR from "./fanart/DOKGUN_STICKER_KR"
import DOKGUN_STICKER_EN from "./fanart/DOKGUN_STICKER_EN"

const officalData = [
    Q_STICKER,
    SHAKE_STICKER,
    NANA_SUMMER_COMIC,
]

const fanartData = [
    DOKGUN_STICKER_KR,
    DOKGUN_STICKER_EN,
]

export default [
    ...fanartData,
    ...officalData
]