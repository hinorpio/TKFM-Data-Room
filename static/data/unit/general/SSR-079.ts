import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10048: Unit = {
    ID: "10048",
    metaCode: "momo",
    prefix: {
        [Locale.tc]: "毒蠍",
        [Locale.sc]: null,
        [Locale.en]: "Poisonous Scorpion",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "莫默",
        [Locale.sc]: null,
        [Locale.en]: "Momo",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "默默", "蠍" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "莫默是隻蠍子，而且是隻有毒的蠍子。這對她來說有些……不、是非常困擾。因為某些特別的原因，莫默無法自由的控制蠍尾。即使不願意，莫默也會在某些情況下失控，傷害到親近的人。最終莫默離開了棲息地，開始了離群索居的生活。雖然寂寞，但這是沒有辦法的，因為與之親近的人都會因她而受傷。儘管如此，莫默心裡仍期待著哪天能夠出現一位既不怕螫也不怕毒的人……\n\n『不…不要靠近莫默！要是你受傷了，莫默會很難過的……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2023/04/26",
    essence: UnitEssence[UnitCode.momo],
    thumbnail: UnitEssence[UnitCode.momo],
    selection: UnitSelection[UnitCode.momo],
    clothes: UnitFullImage[UnitCode.momo],
    tagList: [
        TagID.ELEMENT_WATER,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_DEMON,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}