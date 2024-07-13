import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10040: Unit = {
    ID: "10040",
    metaCode: "h_britney",
    prefix: {
        [Locale.tc]: "小惡魔",
        [Locale.sc]: null,
        [Locale.en]: "Little Devil",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "布蘭妮",
        [Locale.sc]: null,
        [Locale.en]: "Britney",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "火軍", "萬軍" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "原本就鬼靈精的布蘭妮，在南瓜仙子的萬聖節魔法的作用下變成了真正的小惡魔。為了阻止同樣因萬聖節魔法而暴走的小賽露西亞而忙碌著。身為天才軍師卻拿四處搗亂惡作劇的小賽露西亞沒轍。新獲得的翅膀很方便但因為運動能力不足無法順利長時間飛行。究竟布蘭妮有沒有辦法阻止小賽露西亞呢？\n\n『不給糖就搗蛋，嘻嘻，果然還是搗蛋吧～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/10/27",
    essence: UnitEssence[UnitCode.h_britney],
    thumbnail: UnitEssence[UnitCode.h_britney],
    selection: UnitSelection[UnitCode.h_britney],
    clothes: UnitFullImage[UnitCode.h_britney],
    tagList: [],
    otherVersion: [ UnitCode.britney, UnitCode.m_britney ],
    puzzle: [],
    skillSet: []
}