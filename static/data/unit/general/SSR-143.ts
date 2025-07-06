import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10171: Unit = {
    ID: "10171",
    metaCode: "ss_iblis",
    prefix: {
        [Locale.tc]: "盛暑沁夏",
        [Locale.sc]: "盛暑沁夏",
        [Locale.en]: "Scalding Summer",
        [Locale.jp]: "真夏の清涼",
        [Locale.kr]: "청량한 여름"
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: "伊布力斯",
        [Locale.en]: "Iblis",
        [Locale.jp]: "イブリース",
        [Locale.kr]: "이블리스"
    },
    abbreviation: {
        [Locale.tc]: [ "暑伊", "夏伊2" ],
        [Locale.sc]: [ "暑伊", "夏伊2" ],
        [Locale.en]: [ "SS.Iblis" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "청이블" ]
    },
    background: {
        [Locale.tc]: `為了享受美好的假期，伊布力斯搭乘豪華郵輪準備到海島渡假村放鬆，沒想到卻被一封突如其來的挑戰書打亂了行程。面對意圖奪取魔王之位的挑戰者，伊布力斯按照傳統設下種種試煉，準備考驗挑戰者是否擁有成為魔王的器量。然而，原先莊嚴肅穆的試煉，卻因為凱薩的加入而變得亂七八糟。除了胡鬧的試煉、如同派對般的熱鬧氛圍、甚至還有莫名其妙的水槍大亂鬥，一切似乎和伊布力斯的設想完全不同。但即使如此，伊布力斯依然會讓所有覬覦王位的挑戰者知道，身為魔王，身為強者擁有的絕對實力！\n\n『身為高貴的伊布力斯，不管挑戰者是誰，本小姐都為以魔王的身分正面迎戰。』`,
        [Locale.sc]: `为了享受美好的假期，伊布力斯搭乘豪华邮轮准备到海岛渡假村放松，没想到却被一封突如其来的挑战书打乱了行程。面对意图夺取魔王之位的挑战者，伊布力斯按照传统设下种种试炼，准备考验挑战者是否拥有成为魔王的器量。然而，原先庄严肃穆的试炼，却因为凯萨的加入而变得乱七八糟。除了胡闹的试炼、如同派对般的热闹氛围、甚至还有莫名其妙的水枪大乱斗，一切似乎和伊布力斯的设想完全不同。但即使如此，伊布力斯依然会让所有觊觎王位的挑战者知道，身为魔王，身为强者拥有的绝对实力！\n\n『身为高贵的伊布力斯，不管挑战者是谁，本小姐都为以魔王的身分正面迎战。』`,
        [Locale.en]: `To enjoy a splendid vacation, Iblis boards a luxurious cruise ship bound for an island resort, ready to unwind. But a sudden letter disrupts her plans, challenging her to a duel. Facing a challenger aiming to seize the Archemon's throne, Iblis, per tradition, sets up a series of trials to test if they have what it takes to claim the title of her lineage. Yet, the once solemn and dignified trials turn into utter chaos with Caesar's involvement. Between ridiculous challenges, a party-like atmosphere, and an inexplicable water gun free-for-all, everything spirals far from Iblis's expectations. Even so, she ensures every throne-craving challenger learns the absolute might of an Archdemon, a true powerhouse!\n\n"As the noble Iblis, no matter who dares challenge me, I shall face them head-on with Archdemonic pride!"`,
        [Locale.jp]: `楽しいバカンスを満喫するため、イブリースはクルーズ船に乗って海の島のリゾートへ。しかし、突如届いた一通の挑戦状によって、その予定が狂わされることとなる。魔王の座を狙う挑戦者を前に、イブリースは古くからの慣習に従い、いくつもの試練を用意してその資質を試すことにした。しかし、威厳ある試練の場がシーザーの乱入によって一転、めちゃくちゃなものへと変貌してしまう。ふざけた内容の試練、パーティのような賑わい、さらには意味不明な水鉄砲バトルまで勃発し、すべてがイブリースの想定から大きく逸れていく。それでもイブリースは王の座を狙うすべての者に、魔王、そして強者とは、絶対なる力を持つ存在だということを知らしめるのであった！\n\n『高貴なるイブリースであるからには、たとえどんな挑戦者が来ようとも、魔王として正面から受けて立つわ』`,
        [Locale.kr]: `즐거운 휴가를 보내기 위해 이블리스는 호화 유람선을 타고 섬 리조트로 떠났다. 하지만 갑작스럽게 날아든 도전장이 그녀의 여정을 뒤흔들었다. 마왕의 자리를 노리는 도전자를 마주한 이블리스는 전통에 따라 다양한 시련을 준비해 도전자의 자격을 시험하려 했다. 그러나 엄숙하고 장엄해야 할 시련은 시저의 개입으로 완전히 엉망진창이 되고 말았다. 터무니없는 시련, 파티 같은 떠들썩한 분위기, 심지어 뜬금없는 물총 대난투까지. 모든 것이 이블리스의 계획과는 전혀 달랐다. 그럼에도 불구하고, 이블리스는 왕좌를 탐내는 모든 도전자들에게 마왕이자 강자로서의 절대적인 힘을 보여줄 것이다!\n\n『고귀한 이블리스인 내가, 어떤 도전자가 나타나든 마왕의 자격으로 당당히 맞서주도록 하지.』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/06/11",
    essence: UnitEssence[UnitCode.ss_iblis],
    thumbnail: UnitEssence[UnitCode.ss_iblis],
    selection: UnitSelection[UnitCode.ss_iblis],
    clothes: UnitFullImage[UnitCode.ss_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.b_iblis, UnitCode.s_iblis, UnitCode.v_iblis, UnitCode.x_iblis, UnitCode.bg_iblis ],
    initHP: 0,
    initATK: 0,
    puzzle: [ PuzzleCode.EVENT_2025_SUMMER_1 ],
    outfits: UnitOutfits[UnitCode.ss_iblis],
    skillSet: []
}