import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10016: Unit = {
    ID: "10016",
    metaCode: "britney",
    prefix: {
        [Locale.tc]: "天才女軍師",
        [Locale.sc]: null,
        [Locale.en]: "Genius Tactician",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "布蘭妮",
        [Locale.sc]: null,
        [Locale.en]: "Britney",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "軍師", "軍" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "自稱為天才的布蘭妮的實力是貨真價實的。雖然個性隨心所欲，給人一種輕浮的感覺，但即使再討厭布蘭妮的人，都得承認她的才能。假使一般的軍師能夠推測得到敵軍未來五步的動向，那麼布蘭妮就是能夠預測敵人未來百步動向的超優秀天才。布蘭妮如同傭兵一樣毫無忠誠，居無定所的她後來被財力雄厚的帝國邀請，定居於法斯帝國，從此為帝國出謀劃策。\n\n『唉呀呀，我又不小心贏了嗎？呵呵。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.LIGHT,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.britney],
    thumbnail: UnitEssence[UnitCode.britney],
    selection: UnitSelection[UnitCode.britney],
    clothes: UnitFullImage[UnitCode.britney],
    tagList: [
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_HUMAN, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_SUPPORT,
        TagID.OTHER_WEAKEN,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_AOE,
    ], 
    otherVersion: [ UnitCode.h_britney, UnitCode.m_britney ],
    puzzle: [],
    skillSet: []
}