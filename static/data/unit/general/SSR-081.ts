import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10111: Unit = {
    ID: "10111",
    metaCode: "d_irene",
    prefix: {
        [Locale.tc]: "背德密醫",
        [Locale.sc]: null,
        [Locale.en]: "Corrupt Doctor",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "艾琳",
        [Locale.sc]: null,
        [Locale.en]: "Irene",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "護琳" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "雙蛇軍團解散後，艾琳當上了醫生，並與克里斯加入了冒險者公會，成為魔界的居民。為了讓丈夫活下來，她被凱薩逼迫獻出身體。原本一開始只是為了保住克里斯的性命，後來卻被凱薩徹底征服，逐漸沉迷於背德感帶來的刺激之中，由於克里斯無條件的愛與包容，使艾琳變得越來越大膽，不但衣著與性格變得性感與狂野，連行為也變得越來越放蕩。這樣的她，有一天收到了來自魔王城的委託，要幫魔王的後宮們進行健康檢查，憑藉著她的醫療專業，會給眾後宮們檢查出什麼結果呢？\n\n『你說身體很難受？呵呵呵，真是沒辦法，讓我來幫你『治療』吧～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/05/10",
    essence: UnitEssence[UnitCode.d_irene],
    thumbnail: UnitEssence[UnitCode.d_irene],
    selection: UnitSelection[UnitCode.d_irene],
    clothes: UnitFullImage[UnitCode.d_irene],
    tagList: [],
    otherVersion: [ UnitCode.irene ],
    puzzle: [],
    skillSet: []
}