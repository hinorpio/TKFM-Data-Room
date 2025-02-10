import Q_STICKER from "./offical/Q_STICKER"
import Q_COMIC from "./offical/Q_COMIC"
import Q_PAINTING from "./offical/Q_PAINTING"
import SHAKE_STICKER from "./offical/SHAKE_STICKER"
import CONGRAT from "./offical/CONGRAT"
import VOTE from "./offical/VOTE"
import DATA_AS_OF_2024 from "./offical/DATA_AS_OF_2024"
import NANA_SUMMER_COMIC from "./offical/NANA_SUMMER_COMIC"
import NANA_IBLIS_ARGUE from "./offical/NANA_IBLIS_ARGUE"
import FB_PAINTING from "./offical/FB_PAINTING"
import FB_COMIC from "./offical/FB_COMIC"

import DOKGUN_STICKER_KR from "./fanart/DOKGUN_STICKER_KR"
import DOKGUN_STICKER_EN from "./fanart/DOKGUN_STICKER_EN"
import LITTLE_PEA_STICKER from "./fanart/LITTLE_PEA_STICKER"

const officalData = [
    Q_STICKER,
    Q_COMIC,
    Q_PAINTING,
    SHAKE_STICKER,
    CONGRAT,
    VOTE,
    DATA_AS_OF_2024,
    NANA_SUMMER_COMIC,
    NANA_IBLIS_ARGUE,
    FB_PAINTING,
    FB_COMIC,
]

const fanartData = [
    DOKGUN_STICKER_KR,
    DOKGUN_STICKER_EN,
    LITTLE_PEA_STICKER,
]

export default [
    ...fanartData,
    ...officalData
]