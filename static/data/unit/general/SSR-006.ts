import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10006: Unit = {
    ID: "10006",
    metaCode: "lulu",
    prefix: {
        [Locale.tc]: "法斯公主",
        [Locale.sc]: null,
        [Locale.en]: "Phasi Princess",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "露露",
        [Locale.sc]: null,
        [Locale.en]: "Lulu",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "露露", "普露", "解露", "露" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "法斯帝國是人類勢力的絕對霸主，崇尚武力、並且擁有著全大陸最強盛的軍事實力，就連王室的內部也秉持著弱肉強食的菁英教育，唯有強者才能登上王位。但是在這樣的環境下，帝國公主露露卻是唯一的異類。與法斯帝國的理念相反，露露性格內向、溫吞，討厭爭鬥，更沒有任何野心，只希望自己像個洋娃娃一樣，在王宮裡吃點心，悠悠哉哉過著和平且與世無爭的生活。然而在凱薩率領魔族入侵時，瞧不起魔族的法斯帝國的皇帝卻下令跟溫室花朵沒兩樣的露露擔任帝國禁衛軍的領軍，讓她出征討伐魔族，以此積累名望與功績……\n\n『嗚嗚…父王您真的要派人家上戰場嗎…？』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.lulu],
    thumbnail: UnitEssence[UnitCode.lulu],
    selection: UnitSelection[UnitCode.lulu],
    clothes: UnitFullImage[UnitCode.lulu],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_HEALER,
        TagID.SPECIES_HUMAN,
        TagID.CLASS_LEADER,
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [ UnitCode.s_lulu, UnitCode.w_lulu ],
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_2 ],
    skillSet: []
}