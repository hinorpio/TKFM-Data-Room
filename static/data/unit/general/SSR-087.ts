import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10121: Unit = {
    ID: "10121",
    metaCode: "o_nana",
    prefix: {
        [Locale.tc]: "碧波白喵",
        [Locale.sc]: "碧波白喵",
        [Locale.en]: "Salty Sea Cat",
        [Locale.jp]: "さざ波の猫",
        [Locale.kr]: "푸른 물결의 고양이"
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: "娜娜",
        [Locale.en]: "Nana",
        [Locale.jp]: "ナナ",
        [Locale.kr]: "나나"
    },
    abbreviation: {
        [Locale.tc]: [ "白娜", "白貓", "畫娜", "畫貓" ],
        [Locale.sc]: [ "白娜", "白猫", "画娜", "画猫" ],
        [Locale.en]: [ "O.Nana" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "해나나" ]
    },
    background: {
        [Locale.tc]: `結束突如其來的夏日打工，身為魔王城政務核心的娜娜正要投身回茫茫的工作大海。然而，突如其來的意外，卻又將她捲入了莫名其妙的航海之旅。儘管置身於美麗湛藍的廣闊大海，娜娜卻依然沒有任何玩樂和欣賞美景的餘裕。因為就算轉戰到海上，她的職業依舊是負責所有船務的水手役。為了讓船能夠順利航行，抵達終點，一人攬下所有船務工作的水手娜娜，今天又是過勞的一天。\n\n『一望無際的大海，看不見盡頭，感覺就和本喵回去後要面對的工作一樣呢，喵哈哈哈……』`,
        [Locale.sc]: `结束突如其来的夏日打工，身为魔王城政务核心的娜娜正要投身回茫茫的工作大海。然而，突如其来的意外，却又将她卷入了莫名其妙的航海之旅。尽管置身于美丽湛蓝的广阔大海，娜娜却依然没有任何玩乐和欣赏美景的余裕。因为就算转战到海上，她的职业依旧是负责所有船务的水手役。为了让船能够顺利航行，抵达终点，一人揽下所有船务工作的水手娜娜，今天又是过劳的一天。\n\n『一望无际的大海，看不见尽头，感觉就和本喵回去后要面对的工作一样呢，喵哈哈哈……』`,
        [Locale.en]: `With the summer's sudden run of odd jobs now behind her, Nana, the administrative core of Caesar's Palace, is about to plunge back into the endless ocean of work she has to do. However, a sudden accident sweeps her up and out to sea. Though she finds herself in the middle of the beautiful blue ocean, Nana hardly has the time to enjoy the beautiful views and have herself some fun. Because even out at sea, it's still her duty to take charge of all the ship's affairs. To keep things sailing along smoothly and get the ship to its final destination, Nana's taken responsibility for everything that happens on board, and today is one more exhausting day following the last.\n\n"The boundless ocean stretches without end, just like the boundless pile of work I'll have to face once I get back, meowhaha..."`,
        [Locale.jp]: `夏のバイトが終わり魔王城に戻ったナナは仕事に溺れる毎日を送っていた。しかしとある出来事がきっかけで、おかしな海の旅へと巻き込まれることに。美しい大海原にいながらも、ナナには遊んだり景色を楽しんだりする暇などなかった。理由は単純、場所は変われど結局は仕事漬けの運命だからだ。全ての作業をこなして船を無事に目的地に到着させるため、乗組員であるナナは今日もあくせく働くのであった。\n\n『果ての見えない大海原…まるで帰ったら待ってる仕事だにゃ……みゃはは……』`,
        [Locale.kr]: `마왕성의 정무를 담당하는 나나는 여름 아르바이트가 끝나자마자 곧바로 업무 투입을 위해 망망대해로 향하게 된다. 하지만 갑작스런 이변으로 엉뚱한 항해의 여정에 휘말리게 되는데. 광활하고 푸른 바다에 몸을 담그거나 경치를 감상할 여유조차 없다. 바다 위에서도 그녀는 배의 모든 업무를 담당해야 하기 때문이다. 배가 순조롭게 종착지에 닿을 수 있도록 혼자서 모든 일을 도맡아야 하는 선원 나나, 오늘도 과로는 피할 수 없을 것 같다.\n\n『끝이 보이지 않는 바다... 곧 돌아가서 감당해야 할 나의 업무 같은 거랄까... 냐하하하......』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/07/12",
    essence: UnitEssence[UnitCode.o_nana],
    thumbnail: UnitEssence[UnitCode.o_nana],
    selection: UnitSelection[UnitCode.o_nana],
    clothes: UnitFullImage[UnitCode.o_nana],
    tagList: [],
    otherVersion: [ UnitCode.nana, UnitCode.s_nana, UnitCode.c1_nana, UnitCode.a_nana ],
    puzzle: [],
    skillSet: []
}