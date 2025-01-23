import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10129: Unit = {
    ID: "10129",
    metaCode: "w_evie",
    prefix: {
        [Locale.tc]: "性誕馴鹿",
        [Locale.sc]: "性诞驯鹿",
        [Locale.en]: "Sexmas",
        [Locale.jp]: "性誕祭のトナカイ",
        [Locale.kr]: "섹스마스 순록"
    },
    name: {
        [Locale.tc]: "希依",
        [Locale.sc]: "希依",
        [Locale.en]: "Evie",
        [Locale.jp]: "リリー",
        [Locale.kr]: "릴리"
    },
    abbreviation: {
        [Locale.tc]: [ "風鹿", "性鹿", "C2" ],
        [Locale.sc]: [ "风鹿", "性鹿", "C2" ],
        [Locale.en]: [ "W.Evie" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신릴리" ]
    },
    background: {
        [Locale.tc]: `自從聖誕節被改造成性誕節之後，希依也跟著接受凱薩的「教育」，成為了一名合格的性誕馴鹿。現在的她，不僅性觀念變得開放，還穿上了隨時能和凱薩做愛的超暴露服裝。清純無知的少女一邊說著純真的話語，一邊露出了渴望做愛的癡態。雖然對外人而言，她的變化可以說是天翻地覆，但對希依來說，自己其實並沒有改變多少。不管外表變成什麼樣子，馴鹿少女期望為他人帶來幸福的心始終不曾改變。\n\n『不論是聖誕節還是性誕節，都是帶來歡樂的美好日子呢～』`,
        [Locale.sc]: `自从圣诞节被改造成性诞节之后，希依也跟着接受凯萨的「教育」，成为了一名合格的性诞驯鹿。现在的她，不仅性观念变得开放，还穿上了随时能和凯萨做爱的超暴露服装。清纯无知的少女一边说着纯真的话语，一边露出了渴望做爱的痴态。虽然对外人而言，她的变化可以说是天翻地覆，但对希依来说，自己其实并没有改变多少。不管外表变成什么样子，驯鹿少女期望为他人带来幸福的心始终不曾改变。\n\n『不论是圣诞节还是性诞节，都是带来欢乐的美好日子呢～』`,
        [Locale.en]: `Since Christmas was snuffed out by Sexmas, Evie also accepted Caesar's "re-education" program and became a "bone-a-fide" Sexmas reindeer. Now, not only does she have a more open sexual mindset, she also wears a highly skimpy outfit that allows her to have sex with Caesar whenever, wherever. The result is an innocent, naive young lady who speaks with sweet words, while also manifesting an insanely high desire for sexual satisfaction. To any onlooker, her changes might seem like day and night, but to Evie, she hasn't really changed much at all. No matter her outward appearance, this reindeer girl's desire to bring happiness to others remains unchanged.\n\n"Whether Christmas or Sexmas, joy reigns in these festive times~"`,
        [Locale.jp]: `クリスマスがセックスマスに変わってから、リリーはシーザーの「教育」を受けて一人前のセックスマスのトナカイになった。今の彼女は性に開放的なだけではなく、シーザーといつでもセックスできる露出の激しい服を身に着けている。清純で無知な少女は、いたって純粋な発言をしながら、セックスに飢えた痴態をさらけ出すのだ。他の人から見れば大きな変化だが、リリーにとってするとそうでもないようだ。なぜならトナカイが望むのは、他人に幸せな気持ちをもたらすことだからだ。\n\n『クリスマスとセックスマス、どちらも楽しい時間を過ごせるステキな日なんですよ～』`,
        [Locale.kr]: `크리스마스가 섹스마스가 된 이후로, 릴리도 마찬가지로 시저의 「교육」을 받아 어엿한 섹스마스 순록이 되었다. 지금의 그녀는 성 관념이 무척 개방적일 뿐만 아니라, 언제라도 시저와 섹스를 할 수 있도록 늘 노출이 심한 옷을 입고 있다. 청순가련했던 소녀가 이제는 순수한 말을 하면서도, 한편으론 욕망에 굶주린 치태를 드러낸다. 다른 누군가의 눈에는 천지개벽급의 변화일 수도 있겠지만, 사실 막상 릴리 본인은 자신이 많이 변했다는 생각은 하지 않는다. 겉모습이 어떻게 변했든 다른 이에게 행복을 주고 싶은 순록 소녀의 마음은 변치 않았으니.\n\n『크리스마스든 섹스마스든, 모두에게 즐거움을 안겨다주는 아름다운 날이야~』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.w_evie],
    thumbnail: UnitEssence[UnitCode.w_evie],
    selection: UnitSelection[UnitCode.w_evie],
    clothes: UnitFullImage[UnitCode.w_evie],
    tagList: [],
    otherVersion: [ UnitCode.evie ],
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_1 ],
    skillSet: []
}