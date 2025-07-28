import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10026: Unit = {
    ID: "10026",
    metaCode: "noel",
    prefix: {
        [Locale.tc]: "偶像",
        [Locale.sc]: "偶像",
        [Locale.en]: "Idol",
        [Locale.jp]: "",
        [Locale.kr]: '아이돌'
    },
    name: {
        [Locale.tc]: "黑白諾艾莉",
        [Locale.sc]: "黑白诺艾莉",
        [Locale.en]: "Noel",
        [Locale.jp]: "モノクロのノエル",
        [Locale.kr]: "블랙앤화이트 노엘리"
    },
    abbreviation: {
        [Locale.tc]: [ "黑白", "黑" ],
        [Locale.sc]: [ "黑白", "黑" ],
        [Locale.en]: [ "OG.Noel" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `QZ-Ⅻ黑白諾艾莉是古代文明帝國的魔導人偶，正式名稱為QZ型Ⅻ號機。當魔導技術發展到極限時，人類的基礎需求得到滿足，改為追求精神上的富足。偶像文化因應而生。為了開發出歷久不衰的偶像，不會衰老，搭配著情感高級AI與成長功能，如真人般的偶像型魔導人偶誕生了。因為有被他人寵愛著的自覺，諾艾莉個性嬌蠻且行事我行我素。她認為自己作為偶像的使命就是給眾人帶來希望與夢想，因此她必須成為最閃耀的一顆星。從失落的遺跡中醒來，諾艾莉離開後發現世界出現的驚天的變化。但是不管是什麼年代，偶像就是偶像，為了成為他人的中心，並且給眾人帶來愛與夢想。即使只有自己一人，諾艾莉毅然踏上了旅途。\n\n『來一場久違的全國巡演吧~』`,
        [Locale.sc]: `QZ-Ⅻ黑白诺艾莉是古代文明帝国的魔导人偶，正式名称为QZ型Ⅻ号机。当魔导技术发展到极限时，人类的基础需求得到满足，改为追求精神上的富足。偶像文化因应而生。为了开发出历久不衰的偶像，不会衰老，搭配着情感高级AI与成长功能，如真人般的偶像型魔导人偶诞生了。因为有被他人宠爱着的自觉，诺艾莉个性娇蛮且行事我行我素。她认为自己作为偶像的使命就是给众人带来希望与梦想，因此她必须成为最闪耀的一颗星。从失落的遗迹中醒来，诺艾莉离开后发现世界出现的惊天的变化。但是不管是什么年代，偶像就是偶像，为了成为他人的中心，并且给众人带来爱与梦想。即使只有自己一人，诺艾莉毅然踏上了旅途。\n\n『来一场久违的全国巡演吧~』`,
        [Locale.en]: `QZ-Ⅻ Noel is a Magic Automaton from the Ancient Empire, her official title: Model QZ Ⅻ. When automaton technology reached its limits and people had all their basic needs met, they began to seek spiritual satisfaction. The culture of idols was born. In order to create an idol that would never age and span generations, AI and self-growth capabilities were combined to create a life-like Idol Automaton. Equipped with a personality that is absolutely adorable, Noel is loved by all and knows no other way of life. She believes it is her mission as an idol to spread hope and dreams to all beings. Thus, she must become the starriest star that has ever starred. Awakening amid ruins, Noel discovers that the world has changed in astonishing ways. Regardless of the era, an idol is an idol. She must become the sole focus of others' lives in order to bring them hopes and dreams. Alone, she has no choice but to start her journey.\n\n"Get ready for a super-duper world tour!!!"`,
        [Locale.jp]: `QZ-Ⅻモノクロのノエルは古代帝国の魔導人形。正式名称はQZ型Ⅻ号機。魔導技術が極限にまで発達した時代、人類は基本的欲求を満たすところから、精神的欲求を満たす段階へとシフトしていた。その中でアイドル文化が誕生する。どれほど時が経ってもけして老化しないアイドルを開発するため、最高レベルの感情AIと成長システムを備え、実際の人間と寸分たがわぬアイドル魔導人形が生まれた。他人から愛されているという自覚があるため、ノエルはわがままな性格で自分のやり方を貫くタイプだ。彼女は自分のアイドルとしての使命は人々に夢と希望をもたらすことだと考えており、それゆえに最も輝く一番星になろうとしている。ノエルが失われた遺跡の中で目覚め外に出ると、世界が驚くべき変貌を遂げていた事に気付いた。しかしどんな時代だろうと、アイドルはアイドル。人々の話題の中心になって、みんなに愛と夢を届けるのだ。例えたった一人だけだとしても、ノエルは勇敢に旅への一歩を踏み出す。\n\n『久しぶりに全国公演しよ~っと！』`,
        [Locale.kr]: `QZ-Ⅻ 블랙앤화이트 노엘리는 고대 문명 제국의 마도 인형으로, 정식 명칭은 QZ모델 Ⅻ호기입니다. 마도 기술이 극도로 발달하자 인류의 기본적인 욕구가 만족되었고, 인류는 이제 정신적인 욕구를 추구하기 시작합니다. 아이돌 문화는 이러한 배경에 따라 생겨났습니다. 오랫동안 인기가 식지 않고 늙지도 않는 아이돌을 개발하기 위해, 높은 수준의 감정 AI와 성장 기능을 탑재한 아이돌 마도 인형이 탄생했습니다. 다른 사람들에게 사랑받는 느낌을 받기 때문에 노엘리는 건방지고 모든 것을 자기 마음대로 하는 성격을 지니고 있습니다. 그녀는 사람들에게 꿈과 희망을 주는 것이야말로 아이돌의 사명이라고 여겨, 꼭 세상에서 가장 빛나는 스타가 되려고 합니다. 버려진 유적에서 깨어난 이후, 노엘리는 엄청나게 변화한 세상을 발견합니다. 하지만 어떤 시대에 있든 아이돌은 아이돌이죠. 사람들의 한가운데에서 꿈과 희망을 주어야만 합니다. 오랜 잠에서 깨어나 세상에 혼자 남았음에도 노엘리는 당당히 아이돌의 여정을 시작합니다.\n\n『이제 오랫동안 하지 못했던 전국 순회공연을 해볼까~』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2021/02/03",
    essence: UnitEssence[UnitCode.noel],
    thumbnail: UnitEssence[UnitCode.noel],
    selection: UnitSelection[UnitCode.noel],
    clothes: UnitFullImage[UnitCode.noel],
    tagList: [],
    otherVersion: [ UnitCode.s_noel, UnitCode.w_noel, UnitCode.c_noel ],
    initHP: 3539.2,
    initATK: 904,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.noel],
    skillSet: []
}