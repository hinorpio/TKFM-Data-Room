import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10050: Unit = {
    ID: "10050",
    metaCode: "f_caesar",
    prefix: {
        [Locale.tc]: "異界",
        [Locale.sc]: null,
        [Locale.en]: "Otherworld",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "凱薩",
        [Locale.sc]: null,
        [Locale.en]: "Caesar",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "女凱", "異凱", "凱薩", "凱" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "侵略、征服，將眼中所見之物通通占為己有。破壞、掠奪，阻擋其稱霸之路者終將迎來毀滅。儘管在征服人間界時碰上了一點小變故，但那通通不要緊。不管發生了什麼事，她的目標都不會改變。她－就是為了征服全世界而生的強者，魔王凱薩。\n\n『余的東西就是余的東西，你的東西也是余的東西，所以少說廢話，快向余俯首稱臣！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/03/30",
    essence: UnitEssence[UnitCode.f_caesar],
    thumbnail: UnitEssence[UnitCode.f_caesar],
    selection: UnitSelection[UnitCode.f_caesar],
    clothes: UnitFullImage[UnitCode.f_caesar],
    tagList: [],
    otherVersion: [],
    puzzle: [ PuzzleCode.EVENT_2023_CNY_1 ],
    skillSet: []
}