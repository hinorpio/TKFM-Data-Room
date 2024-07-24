import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10133: Unit = {
    ID: "10133",
    metaCode: "nanami",
    prefix: {
        [Locale.tc]: "甜心偶像",
        [Locale.sc]: "甜心偶像",
        [Locale.en]: "Sweetheart Idol",
        [Locale.jp]: "甘いアイドル",
        [Locale.kr]: "달콤한 아이돌"
    },
    name: {
        [Locale.tc]: "星空奈奈美",
        [Locale.sc]: "星空奈奈美",
        [Locale.en]: "Nanami",
        [Locale.jp]: "星空ななみ",
        [Locale.kr]: "나나미"
    },
    abbreviation: {
        [Locale.tc]: [ "奈奈美", "773" ],
        [Locale.sc]: [ "奈奈美", "773" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `HS-Ⅲ星空奈奈美是古代魔導文明生產的魔導人偶，正式名稱為HS型Ⅲ號機。她和諾艾莉一樣，是作為娛樂用魔導人偶被開發出來的產品，但與諾艾莉有所不同的是，奈奈美的身上裝載了許多性愛機能，不管是要產乳、潮吹，愛液流出還是控制穴壓，都能夠輕鬆做到。在發現自己身處的世界發生天翻地覆的變化後，奈奈美雖然詫異，但卻並不迷茫。因為她很清楚，自己不管在哪個時代都只有一個目的——她要成為眾人心中最閃耀的那顆星。\n\n『大家～奈奈美最愛你們了唷～』`,
        [Locale.sc]: `HS-Ⅲ星空奈奈美是古代魔导文明生产的魔导人偶，正式名称为HS型Ⅲ号机。她和诺艾莉一样，是作为娱乐用魔导人偶被开发出来的产品，但与诺艾莉有所不同的是，奈奈美的身上装载了许多性爱机能，不管是要产乳、潮吹，爱液流出还是控制穴压，都能够轻松做到。在发现自己身处的世界发生天翻地覆的变化后，奈奈美虽然诧异，但却并不迷茫。因为她很清楚，自己不管在哪个时代都只有一个目的——她要成为众人心中最闪耀的那颗星。\n\n『大家～奈奈美最爱你们了唷～』`,
        [Locale.en]: `HS-III (officially: HS model No. III) Nanami is an automaton created by a long-forgotten ancient civilization. Similar to Noel, she was designed as an entertainment idol, but unlike Noel, Nanami possesses various sexual functions she can employ at will, such as breast milk production, vaginal squirting and fluids, as well as the tightening of vaginal walls. After she realizes the world she once knew has drastically changed and irrevocably changed, Nanami is alarmed but does not despair. Instead, she is clear that her path remains unchanged, regardless what historical era she finds herself in: to become the starlight that burns bright within everyone's heart.\n\n"My dearest fans~ Nanami loves you all so, so much~"`,
        [Locale.jp]: `HS-Ⅲ星空ななみは古代魔導文明の魔導人形であり、正式名称はHS型Ⅲ号機である。ノエルと同じく娯楽用の魔導人形として開発された。しかしノエルと違い、多くの性機能が搭載されている。母乳が出るだけではなく、愛液の分泌や潮吹き、膣圧のコントロールまでできるのだ。自分のいる世界がめっきり変わってしまったことに気付いたななみだったが、決してめげることは無かった。なぜなら彼女の目的はどの時代においてもただ一つ――観衆の心に輝く一番星になることだからだ。\n\n『みんな～ななみ、みんなのこと愛してるよ～』`,
        [Locale.kr]: `HS-Ⅲ 나나미는 고대 마도 문명에서 만들어진 마도 인형으로, 공식 명칭은 HS형 Ⅲ호기다. 그녀는 노엘리와 마찬가지로 엔터테인먼트 용도로 개발된 마도 인형으로 개발된 제품이다. 하지만 노엘리와 다른 점은 나나미의 몸에 탑재된 유축, 시오후키, 애액 배출, 구멍 조절 등의 수많은 성기능을 어렵지 않게 해낼 수 있다. 자신이 속한 세계가 천지개벽이라 할만큼 변했다는 것을 알게 된 나나미는 놀랐지만 당황하지는 않았다. 왜냐하면 그녀는 잘 알고 있었기 때문이다. 자신의 목적은 오직 단 하나——어느 시대에 있든 모두의 마음속에 가장 빛나는 별로 자리 잡는 것이라는 것을.\n\n『여러분~ 나나미는 여러분을 가장 사랑해요~』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/02/05",
    essence: UnitEssence[UnitCode.nanami],
    thumbnail: UnitEssence[UnitCode.nanami],
    selection: UnitSelection[UnitCode.nanami],
    clothes: UnitFullImage[UnitCode.nanami],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}