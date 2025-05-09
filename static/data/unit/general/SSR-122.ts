import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10151: Unit = {
    ID: "10151",
    metaCode: "bg_iblis",
    prefix: {
        [Locale.tc]: "性感兔女郎",
        [Locale.sc]: "性感兔女郎",
        [Locale.en]: "Bunny Croupier",
        [Locale.jp]: "エッチバニー",
        [Locale.kr]: "섹시 바니걸"
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: "伊布力斯",
        [Locale.en]: "Iblis",
        [Locale.jp]: "イブリース",
        [Locale.kr]: "이블리스"
    },
    abbreviation: {
        [Locale.tc]: [ "兔伊", "風伊" ],
        [Locale.sc]: [ "兔伊", "风伊" ],
        [Locale.en]: [ "Bg.Iblis" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "바이블" ]
    },
    background: {
        [Locale.tc]: `為了替魔王城賺入大筆資金，由凱薩掛名的魔界首家豪華娛樂城盛大開幕了。抱著替敗家丈夫還債的心情，伊布力斯不甘情願地前來幫忙，但卻被凱薩趁機換上兔女郎裝，被指名擔任性感荷官，接受玩家們的挑戰。儘管嘴上抱怨個不停，伊布力斯卻還是同意協助凱薩，給予挑戰者們一個欣賞她美麗姿容的機會。然而，如果有人以為，靠運氣就能輕易從魔王手中奪取勝利，那就太天真了。伊布力斯將用結果告訴所有人，在絕對的實力與智慧面前，運氣毫無意義。在這個充滿算計、運氣和爾虞我詐的遊樂場裡，唯有魔王，才是真正的主宰者！\n\n『本魔王就大發慈悲，給你一個挑戰我的機會吧。』`,
        [Locale.sc]: `为了替魔王城赚入大笔资金，由凯萨挂名的魔界首家豪华娱乐城盛大开幕了。抱着替败家丈夫还债的心情，伊布力斯不甘情愿地前来帮忙，但却被凯萨趁机换上兔女郎装，被指名担任性感荷官，接受玩家们的挑战。儘管嘴上抱怨个不停，伊布力斯却还是同意协助凯萨，给予挑战者们一个欣赏她美丽姿容的机会。然而，如果有人以为，靠运气就能轻易从魔王手中夺取胜利，那就太天真了。伊布力斯将用结果告诉所有人，在绝对的实力与智慧面前，运气毫无意义。在这个充满算计、运气和尔虞我诈的游乐场里，唯有魔王，才是真正的主宰者！\n\n『本魔王就大发慈悲，给你一个挑战我的机会吧。』`,
        [Locale.en]: `To generate a large enough sum of revenue for Caesar's Palace, the Demon Realm's first luxury entertainment park is opened under Caesar's name. To help her spendthrift husband pay off his debts, Iblis reluctantly assists in the project, but Caesar unexpectedly dresses her up in a bunny girl outfit and appoints her as a sexy croupier. Now she must ready herself to take on insanely demanding gamblers. Despite constantly complaining, Iblis still agrees to assist Caesar, giving the park visitors a chance to appreciate her beautiful form. However, if anyone thinks they can easily snatch victory from the female Archdemon's hands through sheer luck, they are truly naive. Luck is meaningless in this challenge, for Iblis will use her skill and intelligence to roll her best results. In this playground full of calculations, luck, and intrigues, only an Archdemon can be master of it all!\n\n"I, the merciful Archdemon Iblis, shall grant you one chance to challenge me."`,
        [Locale.jp]: `魔王城の資金を稼ぐために、シーザーの名義で魔界初の豪華なカジノがオープンした。夫の借金を返済する気持ちで、渋々手伝いに来たイブリース。シーザーにバニーガールの衣装に着替えさせられた上に、セクシーなディーラーとして指名され、プレイヤーたちの挑戦を受けることになった。不平不満を言いながらも、イブリースはシーザーに協力し、挑戦者たちに自分の美しい姿を眺めるチャンスを与えた。しかし、運だけで魔王から簡単に勝利を奪えると思っていたら、それは大間違いである。イブリースは、絶対的な強さと知恵の前では、運は無意味だということを全員に教え込む。陰謀や運気、騙し合いが渦巻くカジノでは、魔王だけが真の支配者なのだ！\n\n『私は慈悲深いから、挑戦するチャンスを与えてあげるわ』`,
        [Locale.kr]: `마왕성에 막대한 자금을 모으기 위해, 시저가 이름을 내건 마계 최초의 호화 엔터테인먼트 시티가 성대하게 개장했다. 낭비벽이 심한 남편의 빚을 갚는 마음으로 마지못해 돕기로 한 이블리스, 시저의 꾐에 빠져 바니걸 복장을 입고 섹시한 딜러로 임명되어 플레이어들의 도전을 받게 된다. 불만을 토로하면서도, 이블리스는 시저를 돕기로 하고 도전자들에게 그녀의 아름다운 자태를 감상할 기회를 준다. 그러나 누군가 운만으로 마왕에게서 승리를 거둘 수 있다고 생각한다면, 그것은 너무나도 순진한 생각이다. 이블리스는 절대적인 실력과 지혜 앞에서는 운이 아무런 의미가 없다는 것을 결과로 보여줄 것이다. 음모와 운, 그리고 속임수가 넘치는 이 놀이터에서 진정한 지배자는 오직 마왕뿐!\n\n『이 몸이 자비를 베풀어 내게 도전할 기회를 주도록 하지.』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/09/11",
    essence: UnitEssence[UnitCode.bg_iblis],
    thumbnail: UnitEssence[UnitCode.bg_iblis],
    selection: UnitSelection[UnitCode.bg_iblis],
    clothes: UnitFullImage[UnitCode.bg_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.b_iblis, UnitCode.s_iblis, UnitCode.v_iblis, UnitCode.x_iblis ],
    puzzle: [],
    outfits: [],
    skillSet: []
}