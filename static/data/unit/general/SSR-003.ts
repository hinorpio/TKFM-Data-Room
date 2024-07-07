import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10003: Unit = {
    ID: "10003",
    metaCode: "iblis",
    prefix: {
        [Locale.tc]: "魔王",
        [Locale.sc]: null,
        [Locale.en]: "Archdemon",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: null,
        [Locale.en]: "Iblis",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "伊布", "普伊", "魔伊", "解伊", "伊", "屁眼" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "伊布力斯出生自魔族名門，在繼任家主以及代代傳承的魔王之位的同時，她也捨棄了過去的名字，以家族之名伊布力斯自稱。伊布力斯魔力龐大且精純，嚴以律己，是天生的領導者，她也對自身的血脈以及高貴的身份自豪，隨時維持著高貴的姿態。伊布力斯看不慣任性妄為，毫無領導者模樣卻與她同為魔王的凱薩，一直等待著合適對凱薩發難的機會，藉此宣言伊布力斯的威名。\n\n『凱薩，像你這種不知禮數的野狗，怎麼可能戰勝偉大的伊布力斯。』",
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
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.iblis],
    thumbnail: UnitEssence[UnitCode.iblis],
    selection: UnitSelection[UnitCode.iblis],
    clothes: UnitFullImage[UnitCode.iblis],
    tagList: [ 4, 6, 12, 15, 21, 22, 30, 32 ],
    otherVersion: [ UnitCode.i_iblis ],
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_2, PuzzleCode.EVENT_2022_XMAS_1, PuzzleCode.EVENT_2023_CNY_1 ],
    skillSet: []
}