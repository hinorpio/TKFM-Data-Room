import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10007: Unit = {
    ID: "10007",
    metaCode: "milae",
    prefix: {
        [Locale.tc]: "天使長",
        [Locale.sc]: null,
        [Locale.en]: "Archangel Saint",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "聖米勒",
        [Locale.sc]: null,
        [Locale.en]: "Milae",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "普天", "解天", "天使" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "聖米勒是天界的天使長，信仰忠誠驍勇善戰。得知魔族禍亂世界的消息後，為了遵循主神的教誨守護無辜人類，即使儀式不完整，也毅然響應人類的求援，以實力大打折扣為代價降臨人界，投身戰爭之中。以信仰為食的天使不需要補給，只要信仰之力足夠就能長時間作戰，聖米勒的出戰幾乎搗亂了魔族的戰略佈局。聖米勒是凱薩成名以來最強大的敵人，面對只要有信仰，近乎不死不滅的天使，凱薩究竟會如何迎戰？\n\n『以主之名，吾將賜予爾等死亡。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/07/14",
    essence: UnitEssence[UnitCode.milae],
    thumbnail: UnitEssence[UnitCode.milae],
    selection: UnitSelection[UnitCode.milae],
    clothes: UnitFullImage[UnitCode.milae],
    tagList: [
        TagID.ELEMENT_LIGHT,
        TagID.ELEMENT_LIGHT,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [ UnitCode.s_milae ],
    puzzle: [],
    skillSet: []
}