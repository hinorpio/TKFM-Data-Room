import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10039: Unit = {
    ID: "10039",
    metaCode: "lotiya",
    prefix: {
        [Locale.tc]: "千年血族",
        [Locale.sc]: null,
        [Locale.en]: "Well-Respected",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "洛緹亞",
        [Locale.sc]: null,
        [Locale.en]: "Lotiya",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "血族" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "高等血族，用不拗口的話來說就是比一般吸血鬼能夠活更長時間的優良物種。對於活了千年的洛緹亞來說，世俗不斷重演的歷史使她感到厭惡，不願參與攪和並非她愛好和平，只是漠視著一切。洛緹亞體內流淌著傳承數千年的高等血液，即使很長一段時間不攝取也不會有任何影響。比起多數挑嘴的高等血族來說，洛緹亞對血液的需求並不高，對她來說吸血僅是為了維持正常的生理機能。直到她在某次機緣下遇到了魔王凱薩……",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/08/25",
    essence: UnitEssence[UnitCode.lotiya],
    thumbnail: UnitEssence[UnitCode.lotiya],
    selection: UnitSelection[UnitCode.lotiya],
    clothes: UnitFullImage[UnitCode.lotiya],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_DEMON,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_GIANT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}