import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10170: Unit = {
    ID: "10170",
    metaCode: "w_tsubaki",
    prefix: {
        [Locale.tc]: "美艷少婦",
        [Locale.sc]: "美艳少妇",
        [Locale.en]: "Glamorous Wife",
        [Locale.jp]: "妖艶な人妻",
        [Locale.kr]: "매혹적인 새댁"
    },
    name: {
        [Locale.tc]: "椿",
        [Locale.sc]: "椿",
        [Locale.en]: "Tsubaki",
        [Locale.jp]: "椿",
        [Locale.kr]: "츠바키"
    },
    abbreviation: {
        [Locale.tc]: [ "妻狐" ],
        [Locale.sc]: [ "妻狐" ],
        [Locale.en]: [ "W.Tsubaki" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `自從和女兒重逢後，原本過著隨心所欲生活的椿，開始將生活重心轉移到女兒身上。然而，面對母親過度濃烈的母愛，靜似乎接受的相當不情願，總是處處避著椿。女兒的抗拒令椿感到十分苦惱，卻又不知該如何是好。為了成為一個稱職的妻子與母親，椿決定從零開始，一步步學習該如何建立良好的家庭關係。她聽從另一位媽媽的建議，一改維持千年的風格，以全新的樣貌開始了挑戰。\n\n『呼呼～為了我可愛的寶貝女兒，無論什麼事情我都會去嘗試唷。』`,
        [Locale.sc]: `自从和女儿重逢後，原本过着随心所欲生活的椿，开始将生活重心转移到女儿身上。然而，面对母亲过度浓烈的母爱，静似乎接受的相当不情愿，总是处处避着椿。女儿的抗拒令椿感到十分苦恼，却又不知该如何是好。为了成为一个称职的妻子与母亲，椿决定从零开始，一步步学习该如何建立良好的家庭关系。她听从另一位妈妈的建议，一改维持千年的风格，以全新的样貌开始了挑战。\n\n『呼呼～为了我可爱的宝贝女儿，无论什麽事情我都会去尝试唷。』`,
        [Locale.en]: `Tsubaki once lived a carefree and whimsical life, but ever since reuniting with her daughter, Shizuka, she has chosen to focus entirely on her. However, faced with her mother's overwhelming, almost suffocating love, Shizuka seems reluctant to accept it, constantly dodging Tsubaki's affections. Her daughter's cold shoulder leaves Tsubaki deeply troubled, yet she's at a loss for what to do. Determined to become a devoted wife and mother, Tsubaki resolves to start from scratch, learning step-by-step how to build a strong family bond. Following the advice of another mother, she abandons her millennium-old ways, embracing a fresh new look to take on the challenge.\n\n"Hehe~ I'll try anything for my precious little daughter, no matter what it takes!"`,
        [Locale.jp]: `気ままな生活を送っていた椿だったが、娘と再会してからというもの、娘中心の生活を送るようになった。しかし、静は母の過剰な愛情に嫌気をさし、いつも椿を避けている。娘の抵抗に椿はどうすればいいのかわからず、悩んでしまう。そこで、椿は良妻賢母になるため、良い家庭を築く方法をゼロから学ぶことに決めた。別の母親からのアドバイスを受け、千年続けてきたスタイルを一新し、新しい姿で挑戦を始めたのだった。\n\n『ふふ～愛する娘のためなら、どんなことだってやるわよ』`,
        [Locale.kr]: `딸과 다시 만나게 된 이후, 자유롭게 살아가던 츠바키는 점차 삶의 중심을 딸에게 옮기게 되었다. 하지만 지나치게 뜨거운 모성애를 마주한 딸, 시즈카는 이를 달가워하지 않았고, 항상 츠바키를 피하려 한다. 딸의 거부에 츠바키는 마음이 아프면서도 어떻게 해야 할지 몰라 속을 끓였다. 좋은 아내이자 어머니가 되기 위해, 츠바키는 처음부터 차근차근 배워가기로 결심한다. 다른 엄마의 조언을 듣고는, 천 년 동안 유지해온 스타일을 과감히 바꾸며 새로운 모습에 도전하기 시작한다.\n\n『후후~ 사랑스러운 우리 딸을 위해서라면, 뭐든지 해볼 거야.』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/05/07",
    essence: UnitEssence[UnitCode.w_tsubaki],
    thumbnail: UnitEssence[UnitCode.w_tsubaki],
    selection: UnitSelection[UnitCode.w_tsubaki],
    clothes: UnitFullImage[UnitCode.w_tsubaki],
    tagList: [],
    otherVersion: [ UnitCode.tsubaki ],
    initHP: 0,
    initATK: 0,
    puzzle: [],
    outfits: UnitOutfits[UnitCode.w_tsubaki],
    skillSet: []
}