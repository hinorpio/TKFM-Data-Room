import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10138: Unit = {
    ID: "10138",
    metaCode: "p_lulu",
    prefix: {
        [Locale.tc]: "迷情薄紗",
        [Locale.sc]: "迷情薄纱",
        [Locale.en]: "Lingerie Lolita",
        [Locale.jp]: "溺愛のベール",
        [Locale.kr]: "익애의 베일"
    },
    name: {
        [Locale.tc]: "露露",
        [Locale.sc]: "露露",
        [Locale.en]: "Lulu",
        [Locale.jp]: "ルル",
        [Locale.kr]: "루루"
    },
    abbreviation: {
        [Locale.tc]: [ "睡露" ],
        [Locale.sc]: [ "睡露" ],
        [Locale.en]: [ 'P.Lulu' ],
        [Locale.jp]: [],
        [Locale.kr]: [ "익루루" ]
    },
    background: {
        [Locale.tc]: `某天，偶然鼓起幹勁的露露，下定決心要在自己的房間舉辦一場睡衣派對。要舉辦一場睡衣派對，除了要有好玩的活動、美味的點心、軟綿綿的枕頭之外，當然，還要穿著可愛的睡衣吧！為了順利舉行派對，露露製作了邀請函、規劃了有趣的行程，和好朋友們一起邀請凱薩的後宮們來參加。然而，當歡樂的派對開始後，露露總覺得事情的發展…好像和她想的不太一樣…？\n\n『嗯，那個…今晚要不要來人家的房間一起睡覺？』`,
        [Locale.sc]: `某天，偶然鼓起干劲的露露，下定决心要在自己的房间举办一场睡衣派对。要举办一场睡衣派对，除了要有好玩的活动、美味的点心、软绵绵的枕头之外，当然，还要穿着可爱的睡衣吧！为了顺利举行派对，露露制作了邀请函、规划了有趣的行程，和好朋友们一起邀请凯萨的后宫们来参加。然而，当欢乐的派对开始后，露露总觉得事情的发展…好像和她想的不太一样…？\n\n『嗯，那个…今晚要不要来人家的房间一起睡觉？』`,
        [Locale.en]: `On a day like any other, Lulu has a sudden spark of inspiration to throw a grand pajama party in her room. She plans a delightful evening of games, snacks, the softest of pillows, and, naturally, the cutest of pajama outfits. Moreover, to ensure the night goes smoothly, she is sending out formal invites and makes an entire itinerary to entice Caesar's harem to partake. Once the party starts, however, she notices things aren't going according to plan... Something is off, but why...?\n\n"Hey, um... Wanna come and have a sleepover in my room?"`,
        [Locale.jp]: `ある日、ひょんなことからやる気を出したルルは、自分の部屋でパジャマパーティーを開くことにした。パジャマパーティを開くには、楽しいイベント、おいしいおやつ、ふかふかの枕、そしてもちろん可愛いパジャマが必要になる！パーティーを順調に進めるため、ルルは招待状を作り、面白いスケジュールを計画し、シーザーの後宮メンバーたちを招待した。しかし、楽しいパーティーが始まると、ルルは自分の思っていたのと違うのを感じ…？\n\n『えっと、その…今晩、私の部屋で一緒に寝ませんか？』`,
        [Locale.kr]: `어느 날, 엉뚱한 일로 의욕을 얻게 된 루루는 자신의 방에서 파자마 파티를 열기로 한다. 파자마 파티를 열려면 재밌는 이벤트 이외에도 맛있는 디저트, 부드러운 베개, 귀여운 파자마도 절대 빼놓을 수 없다! 순조로운 파티 진행을 위해 루루는 초대장을 만들고 일정을 세운 후, 자신의 친한 친구들과 함께 시저의 후궁들을 초대하기에 이른다. 하지만 즐거운 파티가 시작되자마자 루루는 일이 뭔가 묘하게... 자신이 생각했던 것과는 사뭇 다르게 흘러가는 것을 느끼게 되는데...\n\n『음, 저기... 오늘 밤 내 방에서 같이 잘래요?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/04/02",
    essence: UnitEssence[UnitCode.p_lulu],
    thumbnail: UnitEssence[UnitCode.p_lulu],
    selection: UnitSelection[UnitCode.p_lulu],
    clothes: UnitFullImage[UnitCode.p_lulu],
    tagList: [],
    otherVersion: [ UnitCode.lulu, UnitCode.s_lulu, UnitCode.w_lulu, UnitCode.c_lulu ],
    initHP: 3939.1984416743135,
    initATK: 894.3990856399549,
    puzzle: [],
    outfits: [],
    skillSet: []
}