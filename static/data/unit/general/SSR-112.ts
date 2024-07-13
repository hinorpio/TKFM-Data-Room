import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10142: Unit = {
    ID: "10142",
    metaCode: "s_chizuru",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "千鶴",
        [Locale.sc]: null,
        [Locale.en]: "Chizuru",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏鶴", "夏千" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "夏天，是玩樂的季節！海灘，是放鬆身心的度假樂園！把握住拜訪大海的機會，生前是烈日國的前公主、現在是不死生物的千鶴，開心出動了～雖然因為凜月會擔心，所以要小心注意不能玩太瘋，但既然都到了海邊，那就不能錯過各種有趣的活動！除了沙灘排球、堆沙堡和打西瓜之外，像衝浪這種刺激的水上活動，貪玩的公主全都想體驗一遍。更棒的是，身為不死生物的她不需要呼吸，所以完全不用怕溺水！這下就算自己是個不會游泳的旱鴨子殭屍，肯定也沒問題了！對吧～\n\n『凜月，和我一起來玩水吧～』",
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
    releaseDate: "2024/06/05",
    essence: UnitEssence[UnitCode.s_chizuru],
    thumbnail: UnitEssence[UnitCode.s_chizuru],
    selection: UnitSelection[UnitCode.s_chizuru],
    clothes: UnitFullImage[UnitCode.s_chizuru],
    tagList: [],
    otherVersion: [ UnitCode.chizuru, UnitCode.w_chizuru ],
    puzzle: [ PuzzleCode.EVENT_2024_SUMMER_1 ],
    skillSet: []
}