import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10805: Unit = {
    ID: "10805",
    metaCode: "sable",
    prefix: {
        [Locale.tc]: "魅魔",
        [Locale.sc]: null,
        [Locale.en]: "Succubus",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "撒芭絲",
        [Locale.sc]: null,
        [Locale.en]: "Sable",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "魅魔" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "撒芭絲是為了做愛而活的魅魔，她每天都在人間界遊走，吸取男性精氣。她喜歡裝成楚楚可憐的樣子，以英雄救美的戲碼引誘男人上鉤，這麼一來她就能藉口獻身來吸取男人精氣，等被視作獵物的男性沉溺於肉慾不可自拔後，撒芭絲就會露出真面目，將對方的一切，包括親情、金錢，甚至是生命都榨乾後才會離去。對撒芭絲而言，男性就只是獵物，柔情蜜意都是裝出來的，畢竟誰會和食物談戀愛呢？\n\n『這次的獵物該選誰才好呢，嘻嘻。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.R,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.sable],
    thumbnail: UnitEssence[UnitCode.sable],
    selection: UnitSelection[UnitCode.sable],
    clothes: UnitFullImage[UnitCode.sable],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.OTHER_INTERFERENCE,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}