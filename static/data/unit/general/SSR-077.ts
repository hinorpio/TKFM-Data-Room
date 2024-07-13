import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10114: Unit = {
    ID: "10114",
    metaCode: "m_juneau",
    prefix: {
        [Locale.tc]: "魔法少女",
        [Locale.sc]: null,
        [Locale.en]: "Magical Maiden",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "朱諾安",
        [Locale.sc]: null,
        [Locale.en]: "Juneau",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "魔將" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "威風凜凜、冷豔帥氣的帝國大將軍，卻在一場衝突中失去了自己最重要的『那個東西』。不再是『大』將軍的朱諾安，不只性格變得內向害羞，就連行為舉止也都變得端莊文雅，內心中女性的一面嶄露無遺。在神祕的D之一族幫助下，朱諾安得到傳說中的聖物，成為了魔法少女。為了奪回自己重要的『夥伴』，也為了世界上所有男根的和平，魔法少女朱諾安，華麗登場！\n\n『嗚嗚…變身之後一定得穿著這種暴露的衣服嗎，人家總覺得有點害羞。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/04/07",
    essence: UnitEssence[UnitCode.m_juneau],
    thumbnail: UnitEssence[UnitCode.m_juneau],
    selection: UnitSelection[UnitCode.m_juneau],
    clothes: UnitFullImage[UnitCode.m_juneau],
    tagList: [],
    otherVersion: [ UnitCode.juneau ],
    puzzle: [],
    skillSet: []
}