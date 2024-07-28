import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10114: Unit = {
    ID: "10114",
    metaCode: "m_juneau",
    prefix: {
        [Locale.tc]: "魔法少女",
        [Locale.sc]: "魔法少女",
        [Locale.en]: "Magical Maiden",
        [Locale.jp]: "魔法少女",
        [Locale.kr]: "마법소녀"
    },
    name: {
        [Locale.tc]: "朱諾安",
        [Locale.sc]: "朱诺安",
        [Locale.en]: "Juneau",
        [Locale.jp]: "ジュノアン",
        [Locale.kr]: "쥬노안"
    },
    abbreviation: {
        [Locale.tc]: [ "魔將" ],
        [Locale.sc]: [ "魔将" ],
        [Locale.en]: [ "M.Juneau" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `威風凜凜、冷豔帥氣的帝國大將軍，卻在一場衝突中失去了自己最重要的『那個東西』。不再是『大』將軍的朱諾安，不只性格變得內向害羞，就連行為舉止也都變得端莊文雅，內心中女性的一面嶄露無遺。在神祕的D之一族幫助下，朱諾安得到傳說中的聖物，成為了魔法少女。為了奪回自己重要的『夥伴』，也為了世界上所有男根的和平，魔法少女朱諾安，華麗登場！\n\n『嗚嗚…變身之後一定得穿著這種暴露的衣服嗎，人家總覺得有點害羞。』`,
        [Locale.sc]: `威风凛凛、冷艳帅气的帝国大将军，却在一场冲突中失去了自己最重要的『那个东西』。不再是『大』将军的朱诺安，不只性格变得内向害羞，就连行为举止也都变得端庄文雅，内心中女性的一面崭露无遗。在神秘的D之一族帮助下，朱诺安得到传说中的圣物，成为了魔法少女。为了夺回自己重要的『伙伴』，也为了世界上所有男根的和平，魔法少女朱诺安，华丽登场！\n\n『呜呜…变身之后一定得穿着这种暴露的衣服吗，人家总觉得有点害羞。』`,
        [Locale.en]: `An icy and majestic general of the Empire has lost the most important "thing" of all. Juneau's no longer the "big" general of old, but has become shy, introverted, and even somewhat elegant and refined, revealing a new feminine side. With the help of the mysterious D Tribe, Juneau acquires a mythical artifact and becomes a Magical Maiden. In order to maintain world peace and, more importantly, to get back that precious "thing", Magical Maiden Juneau's grand entrance has arrived!\n\n"Waah... I only just changed bodies, and now I have to wear something as revealing as this? I'm too shy for this kind of stuff."`,
        [Locale.jp]: `威風堂々、クールな帝国大将軍だが、ある戦いで一番大切な「アレ」を失ってしまった。もう「大」将軍ではなくなってしまったジュノアン。シャイな性格になっただけではなく、女性らしい一面も目立つように。そんな彼女は神秘なるD一族の助けのもと、伝説の神器を手に入れ魔法少女となった。世界平和を守るため、そして大切な「アレ」を取り戻すために……魔法少女ジュノアン、参上！\n\n『うぅ……変身したら必ずこの衣装を着ないといけないの？なんだか恥ずかしい……』`,
        [Locale.kr]: `위풍당당하고 강인한 기개의 제국 대장군은 한 바탕 소동으로 자신의 소중한 『그것』을 상실하고 말았다. 더 이상 『대』장군이 아니게 된 쥬노안. 내성적이고 수줍은 성격은 물론, 행동까지 완전히 여성의 면모로 변해버렸다. 신비한 D의 일족의 도움 아래, 쥬노안은 전설의 성물을 손에 넣어 마법소녀로 다시 태어나게 되는데. 세계의 평화를 지키기 위해, 그리고 자신의 소중한 『파트너』를 되찾기 위해 마법소녀 쥬노안, 화려하게 등장!\n\n『으으... 변신했다고 해서 굳이 이렇게 노출이 심한 옷을 입어야 한다니... 조금 부끄러운데...』`
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