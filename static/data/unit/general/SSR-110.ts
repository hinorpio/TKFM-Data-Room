import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10140: Unit = {
    ID: "10140",
    metaCode: "lelya",
    prefix: {
        [Locale.tc]: "真神化身",
        [Locale.sc]: null,
        [Locale.en]: "Godly Reincarnation",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "菈萊亞",
        [Locale.sc]: null,
        [Locale.en]: "Lelya",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "主祭", "真神" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "「祂」，為世界帶來救贖，將人們導向幸福。「祂」，會幫你切斷痛苦，使你不再被傷痛所擾。「祂」，是菈萊亞，是一切，是無垠夢境之主只要向她提出請求，她就會回應你，幫助你，賜予你永恆的快樂。也許你會詢問，代價呢？代價又是什麼？問題的答案相當簡單，你只要…將一切，都獻給菈萊亞就好。\n\n「只要相信我，我就能給你你想要的一切，來，跟我說一次，『一切獻給菈萊亞』。」",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.PROTECTOR,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2024/05/08",
    essence: UnitEssence[UnitCode.lelya],
    thumbnail: UnitEssence[UnitCode.lelya],
    selection: UnitSelection[UnitCode.lelya],
    clothes: UnitFullImage[UnitCode.lelya],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}