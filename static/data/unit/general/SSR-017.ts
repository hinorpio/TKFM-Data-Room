import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10031: Unit = {
    ID: "10031",
    metaCode: "s_ks8",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "KS-VIII",
        [Locale.sc]: null,
        [Locale.en]: "KS-VIII",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏K", "夏機", "泳K", "泳機", "公瑾" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "接受凱薩的命令，在海邊度假期間魔導人偶KS-VIII將負責露露與靜的護衛。為了完成任務，KS-VIII特別更換了水用特殊裝備。最大下潛極限1200米，航速44.7海里，並配有反雷達偵測機能。能夠以最快時間偵測落水目標，展開救援行動與進行急救。安心、安全，最值得信賴的魔導人偶海灘保鑣KS-VIII正式上線。\n\n『紫外線指數分析中…分析完畢，在正午太陽下有曬傷可能，建議塗抹防曬乳。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/05/28",
    essence: UnitEssence[UnitCode.s_ks8],
    thumbnail: UnitEssence[UnitCode.s_ks8],
    selection: UnitSelection[UnitCode.s_ks8],
    clothes: UnitFullImage[UnitCode.s_ks8],
    tagList: [],
    otherVersion: [ UnitCode.ks8 ],
    puzzle: [ PuzzleCode.EVENT_2021_SUMMER_3 ],
    skillSet: []
}