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
import DOKGUN_NANA_STICKER from "./fanart/DOKGUN_NANA_STICKER"
import DOKGUN_OLD_STICKER from "./fanart/DOKGUN_OLD_STICKER"
import LITTLE_PEA_STICKER from "./fanart/LITTLE_PEA_STICKER"
import ANNA_PHOENIX_FANART from "./fanart/ANNA_PHOENIX_FANART"
import C_FANART from "./fanart/C_FANART"
import C_FANART_R18 from "./fanart/C_FANART_R18"

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
    DOKGUN_NANA_STICKER,
    DOKGUN_OLD_STICKER,
    LITTLE_PEA_STICKER,
    ANNA_PHOENIX_FANART,
    C_FANART,
    C_FANART_R18,
]

export default [
    ...fanartData,
    ...officalData
]