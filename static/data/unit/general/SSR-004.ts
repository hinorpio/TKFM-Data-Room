import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10004: Unit = {
    ID: "10004",
    metaCode: "salucia",
    prefix: {
        [Locale.tc]: "精靈王",
        [Locale.sc]: null,
        [Locale.en]: "Elf Queen",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "賽露西亞",
        [Locale.sc]: null,
        [Locale.en]: "Salucia",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "精靈王", "普精", "解精", "大王", "精", "跳蛋" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "溫柔婉約的賽露西亞是統治精靈族長達3000年之久的精靈女王，她知書達禮，即使是面對敵人也不會惡語相向。不願與人類鬥爭的賽露西亞帶著精靈們隱居在迷霧之森，建立了只屬於精靈的國度，並設置了大型的結界，只有得到精靈認可的人才能踏入森林，成功抵達精靈之國。受到所有子民尊敬與愛戴的賽露西亞從未讓期待她的人失望過，只是在那溫柔笑臉的背後，似乎藏著濃濃的倦意。\n\n『眼前還有更重要的事需要處理，我還不能休息……』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.salucia],
    thumbnail: UnitEssence[UnitCode.salucia],
    selection: UnitSelection[UnitCode.salucia],
    clothes: UnitFullImage[UnitCode.salucia],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_SUPPORTER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_GIANT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_SUPPORT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [ UnitCode.h_salucia, UnitCode.ny_salucia, UnitCode.s_salucia ],
    puzzle: [],
    skillSet: []
}