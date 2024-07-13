import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10145: Unit = {
    ID: "10145",
    metaCode: "s_satan",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: null,
        [Locale.en]: "Summer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: null,
        [Locale.en]: "Satan",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "夏撒", "夏旦" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "大海上最令人恐懼的掠食者是誰？是鯊魚嗎？是深海魔獸嗎？還是會捲起三層樓高海浪的地獄觸手章魚呢？這幾個答案都很接近，而真正正確的回答是「撒旦」！她帶著恣意的笑容和強大的威壓，以鮮血與恐懼向大海宣告她的到來。魔獸們，顫抖吧，海怪們，快點逃竄吧！因為魔王的狩獵遊戲，即將要開始了。所有值得挑戰的魔獸，最後都會被直接做成禮物獻給凱薩大人。\n\n『強大的海怪到底在哪裡呢？好期待啊，呵呵呵～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2024/06/05",
    essence: UnitEssence[UnitCode.s_satan],
    thumbnail: UnitEssence[UnitCode.s_satan],
    selection: UnitSelection[UnitCode.s_satan],
    clothes: UnitFullImage[UnitCode.s_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.e_satan, UnitCode.b_satan, UnitCode.v_satan ],
    puzzle: [ PuzzleCode.EVENT_2024_SUMMER_4 ],
    skillSet: []
}