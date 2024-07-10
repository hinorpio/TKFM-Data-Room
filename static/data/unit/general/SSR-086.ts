import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10120: Unit = {
    ID: "10120",
    metaCode: "o_lana",
    prefix: {
        [Locale.tc]: "乘風破浪",
        [Locale.sc]: null,
        [Locale.en]: "Go Getter",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "蘭兒",
        [Locale.sc]: null,
        [Locale.en]: "Lana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "風矮", "風蘭" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "一望無際的大海就像是深不見底的礦坑一樣，充滿了令人心跳不已的未知事物。而挖掘未知的事物就是矮人的天性，海洋的一切就像是挖礦一樣先到先得，目標是無人發現過的寶物！儘管這次出航的理由完全意義不明，但矮人依然會在船上盡情喝酒、大聲歌唱。面對眼前蔚藍的挑戰，矮人王…不對，是矮人船長，今天也帶著對航行的憧憬發出號令。\n\n『上啊小的們！我們這次的征途是蔚藍大海！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/07/12",
    essence: UnitEssence[UnitCode.o_lana],
    thumbnail: UnitEssence[UnitCode.o_lana],
    selection: UnitSelection[UnitCode.o_lana],
    clothes: UnitFullImage[UnitCode.o_lana],
    tagList: [],
    otherVersion: [ UnitCode.lana, UnitCode.x_lana, UnitCode.ny_lana ],
    puzzle: [],
    skillSet: []
}