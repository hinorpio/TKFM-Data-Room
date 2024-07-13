import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10023: Unit = {
    ID: "10023",
    metaCode: "belladonna",
    prefix: {
        [Locale.tc]: "副手",
        [Locale.sc]: null,
        [Locale.en]: "Deputy Lieutenant",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "貝蕾朵",
        [Locale.sc]: null,
        [Locale.en]: "Belladonna",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "副手" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "出生自另一大陸的軍人家庭，從小接受嚴苛的菁英教育。在一次任務中湊巧與諾蕾蒂的部隊共同行動，並在第一眼見到諾蕾蒂後就對她一見鍾情。為了能與諾蕾蒂待在一起，排除了萬難，動用了諸多手段終於加入了諾蕾蒂的部隊並且成為了她左右手。在原本所在大陸的戰役結束後，毅然跟隨諾蕾蒂，成為了探索新大陸的成員之一。\n\n『諾蕾蒂大人，前方十一點鐘方向發現敵蹤，請下達判斷。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2024/01/17",
    essence: UnitEssence[UnitCode.belladonna],
    thumbnail: UnitEssence[UnitCode.belladonna],
    selection: UnitSelection[UnitCode.belladonna],
    clothes: UnitFullImage[UnitCode.belladonna],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}