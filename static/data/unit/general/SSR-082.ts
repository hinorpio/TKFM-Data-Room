import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10116: Unit = {
    ID: "10116",
    metaCode: "s_ayane",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "神田綾音",
        [Locale.sc]: "神田绫音",
        [Locale.en]: "Ayane",
        [Locale.jp]: "神田綾音",
        [Locale.kr]: "칸다 아야네"
    },
    abbreviation: {
        [Locale.tc]: [ "夏勇" ],
        [Locale.sc]: [ "夏勇" ],
        [Locale.en]: [ "S.Ayane" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `說到炎炎夏日最受人們歡迎的活動，那自然是到清涼暢快的海邊肆意玩水！對於失去網路和手機這些現代娛樂的神田綾音來說，到海灘玩水已經可以算得上是難得的娛樂活動了。只不過，因為某些不可張揚的原因，神田綾音來到了巴爾商會擔任志工，腦中裝著『這裡只是普通的渡假村，不會發生什麼奇怪事情』的想法。勇者並不曉得，自己在異世界度過的第一個夏天註定不會平凡；抱持著錯誤期待，努力揮灑甘甜的汗水，神田綾音的夏天，才正要開始！\n\n『請不要小看少女對季節限定甜點的決心！』`,
        [Locale.sc]: `说到炎炎夏日最受人们欢迎的活动，那自然是到清凉畅快的海边肆意玩水！对于失去网路和手机这些现代娱乐的神田绫音来说，到海滩玩水已经可以算得上是难得的娱乐活动了。只不过，因为某些不可张扬的原因，神田绫音来到了巴尔商会担任志工，脑中装着『这里只是普通的渡假村，不会发生什么奇怪事情』的想法。勇者并不晓得，自己在异世界度过的第一个夏天注定不会平凡；抱持着错误期待，努力挥洒甘甜的汗水，神田绫音的夏天，才正要开始！\n\n『请不要小看少女对季节限定甜点的决心！』`,
        [Locale.en]: `When it comes to the most popular summertime activities, nothing beats playing in the water by the seaside! For Ayane, who's lost her modern conveniences such as wifi and smartphones, a trip to the beach is simply an unmissable entertainment. However, for undisclosed reasons, Ayane's working as a volunteer for Ba'al Corp now. "This just an ordinary vacation spot. Nothing strange is going to happen here," she thinks to herself. What Ayane doesn't know is that her first summer vacation in this world is going to be far from ordinary. With mismatched expectations and a sprinkling of sweet sweat, Ayane's summer is only just beginning!\n\n"Don't underestimate my determination to have seasonal desserts!"`,
        [Locale.jp]: `灼熱の夏のイベントといえば、涼しいビーチで水遊び！ネットやスマホと言った現代の娯楽を失った神田綾音にとって、ビーチで水遊びをするのはこの上ない娯楽の一つだ。しかしとある理由で彼女はバル商会のボランティアになる。彼女はずっと「普通の休暇村だから、おかしなことは起こらない」と信じていた。だが異世界で初めて過ごす夏。何も起こらないはずはない！見当違いの期待を胸に、汗水流して努力する神田綾音の夏が間もなく始まる。\n\n『女の子は季節限定のスイーツに目がないんだから！』`,
        [Locale.kr]: `무더운 여름날엔 시원한 바닷가에서 물놀이가 최고! 인터넷과 핸드폰 등 현대의 놀거리를 잃어버린 아야카에게 있어 바닷가 물놀이는 좀처럼 없는 레크레이션이다. 하지만 어떤 이유로 아야네는 바알 상회를 찾아가게 됐고 상회 소속의 자원봉사자가 되었다. 『그냥 평범한 휴양지일 뿐, 별일 없겠지』라는 생각을 품은 아야네. 용자는 자신이 이세계에서 보내는 첫 여름이 결코 평범하지 않을 것이라는 걸 알 리가 없었다. 잘못된 기대를 품은 채 달콤한 땀을 흘리기로 한 아야네의 여름이 이제 막 시작되었다!\n\n『계절 한정 디저트에 대한 소녀의 결심을 얕보지 말라구!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/06/07",
    essence: UnitEssence[UnitCode.s_ayane],
    thumbnail: UnitEssence[UnitCode.s_ayane],
    selection: UnitSelection[UnitCode.s_ayane],
    clothes: UnitFullImage[UnitCode.s_ayane],
    tagList: [],
    otherVersion: [ UnitCode.ayane, UnitCode.h_ayane, UnitCode.r_ayane ],
    puzzle: [],
    skillSet: []
}