import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10075: Unit = {
    ID: "10075",
    metaCode: "w_chizuru",
    prefix: {
        [Locale.tc]: "夢遊魔境",
        [Locale.sc]: "梦游魔境",
        [Locale.en]: "Wonderland",
        [Locale.jp]: "不思議の国の",
        [Locale.kr]: "이상한 나라의"
    },
    name: {
        [Locale.tc]: "千鶴",
        [Locale.sc]: "千鹤",
        [Locale.en]: "Chizuru",
        [Locale.jp]: "千鶴",
        [Locale.kr]: "치즈루"
    },
    abbreviation: {
        [Locale.tc]: [ "夢鶴", "夢千" ],
        [Locale.sc]: [ "梦鹤", "梦千" ],
        [Locale.en]: [ "W.Chizuru" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "앨즈루" ]
    },
    background: {
        [Locale.tc]: `作為不死生物的千鶴已經習慣了死去的肉體，某天卻產生了突然的變化。不可思議的力量讓她再次感受到手指的觸覺、身體的溫度。然而，她身處的卻不是熟悉的魔王城，而是一個不可思議的國度。露齒笑的貓與紙牌人陸續出現，還有一隻重傷垂危的兔子？！\n\n『我已經不行了…我的使命…懷錶就託付給妳了…！』`,
        [Locale.sc]: `作为不死生物的千鹤已经习惯了死去的肉体，某天却产生了突然的变化。不可思议的力量让她再次感受到手指的触觉、身体的温度。然而，她身处的却不是熟悉的魔王城，而是一个不可思议的国度。露齿笑的猫与纸牌人陆续出现，还有一只重伤垂危的兔子？！\n\n『我已经不行了…我的使命…怀表就托付给妳了…！』`,
        [Locale.en]: `The deceased cannot be resurrected and cannot possess the same senses as living beings, so to speak. Already used to her undead vessel, Chizuru awakens one day to a surprise. She can feel again, she can taste again! But, wait... this isn't Caesar's palace!? She's in some sort of strange, new world! There's Queen of Hearts, marching playing-card guards, and... some kind of very-busy looking bunny? Taking the rabbit's watch, Chizuru steps out on a new mission.\n\n"Why do I suddenly feel like I'm very late... for a very important date?"`,
        [Locale.jp]: `一度死んだ者が生き返ることは無い。そして五感を失う――理論上はそうだ。アンデッドの千鶴もそうであるが、ある日突然変異が起こった。不思議ながらも懐かしいあの力で、彼女は触覚や体温を取り戻したのだ。しかし彼女は魔王城ではなく、不思議な国にいた。ハートの女王や次々と現れるトランプの兵士。千鶴にも、おかしな名前が付けられていた。黒幕に操られた千鶴うさぎの冒険が、今始まる。\n\n『私の錯覚かしら？この異変の裏に、懐かしい何かを感じるのです』`,
        [Locale.kr]: `죽은 자는 살아날 수 없고 산 자와 똑같이 감각을 느낄 수 없다－－－이론상으론 그렇다. 불사의 몸으로 죽은 육체에 길들여진 치즈루에게서 어느 날 갑자기 변화가 일어나기 시작했다. 불가사의하면서도 익숙한 그 힘은 손가락의 촉각, 몸의 체온 등을 다시 느끼게 해 주었다. 하지만 그녀가 있는 곳은 익숙한 마왕성이 하트 여왕과 포커 병사들이 존재하는 어느 이상한 세계. 그곳에서 그녀는 이상한 이름으로 불리고 있었다. 배후의 어느 누군가의 의도적인 조종 아래, 치즈루 토끼의 모험이 시작되었다.\n\n『내 착각인가? 이러한 이변의 배후에서 뭔가 익숙한 기운이 느껴지는 듯한데.』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/04/20",
    essence: UnitEssence[UnitCode.w_chizuru],
    thumbnail: UnitEssence[UnitCode.w_chizuru],
    selection: UnitSelection[UnitCode.w_chizuru],
    clothes: UnitFullImage[UnitCode.w_chizuru],
    tagList: [],
    otherVersion: [ UnitCode.chizuru, UnitCode.s_chizuru ],
    initHP: 3596.7978287604506,
    initATK: 979.1999295886673,
    puzzle: [],
    outfits: [],
    skillSet: []
}