import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10057: Unit = {
    ID: "10057",
    metaCode: "daphne",
    prefix: {
        [Locale.tc]: "煌星",
        [Locale.sc]: "煌星",
        [Locale.en]: "Queen",
        [Locale.jp]: "煌星",
        [Locale.kr]: "샤이닝스타"
    },
    name: {
        [Locale.tc]: "妲絲艾菲娜",
        [Locale.sc]: "妲丝艾菲娜",
        [Locale.en]: "Daphne Bloom",
        [Locale.jp]: "バンサフィーナ",
        [Locale.kr]: "비앙스 에피나"
    },
    abbreviation: {
        [Locale.tc]: [ "煌星", "煌", "蘇珊", "飛天螺旋麵", "白癡公主" ],
        [Locale.sc]: [ "煌星", "煌", "苏珊", "飞天螺旋面", "白痴公主" ],
        [Locale.en]: [ "Daphne", "Susan" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `妲絲艾菲娜‧布魯恩‧煌星……暫且先這麼稱呼她吧。這是一名經常一個人唸叨著「末日就要到來」、「世界就要毀滅」…渾身散發奇妙氛圍的少女。以詠唱時間過長，誇張的聲光效果宛如滅世禁咒，但實際上卻是治癒效果的魔法聞名。除此之外，在戰鬥時她也會使用「冥界法典」來辨別敵人的資訊，採取對應行動。然而「冥界法典」只是她靠自己的幻想編寫出來的，採取的行動往往只會使情況變得更糟糕。奇異的言行與怪癖，使得妲絲艾菲娜成為了冒險者工會的頭號麻煩份子。不過在這些奇行的背後，似乎有著什麼特別的原因……妲絲艾菲娜深信凱薩就是她命中注定的宿敵，曾經與凱薩短暫的見面成了她離開村子，踏上旅途的契機。已經成為了知名冒險者的她，今天也在追趕著魔王的背影。\n\n『吾之宿敵，吾容許汝稱呼吾之名諱妲絲艾菲娜‧布魯……等等，聽我說完呀！』`,
        [Locale.sc]: `妲丝艾菲娜‧布鲁恩‧煌星……暂且先这么称呼她吧。这是一名经常一个人念叨着「末日就要到来」、「世界就要毁灭」…浑身散发奇妙氛围的少女。以咏唱时间过长，夸张的声光效果宛如灭世禁咒，但实际上却是治愈效果的魔法闻名。除此之外，在战斗时她也会使用「冥界法典」来辨别敌人的资讯，采取对应行动。然而「冥界法典」只是她靠自己的幻想编写出来的，采取的行动往往只会使情况变得更糟糕。奇异的言行与怪癖，使得妲丝艾菲娜成为了冒险者工会的头号麻烦份子。不过在这些奇行的背后，似乎有着什么特别的原因……妲丝艾菲娜深信凯萨就是她命中注定的宿敌，曾经与凯萨短暂的见面成了她离开村子，踏上旅途的契机。已经成为了知名冒险者的她，今天也在追赶着魔王的背影。\n\n『吾之宿敌，吾容许汝称呼吾之名讳妲丝艾菲娜‧布鲁……等等，听我说完呀！』`,
        [Locale.en]: `Introducing Susan—I mean, Daphne Bloom, Queen of the Nether Realm! (that's what she'd like you to call her). She's the kind of conspiracy nut who's always saying 'the end of days is near!!', and 'the apocalypse is coming!!'... that kind of stuff. In battle, she likes to use her own special Nether Destruction Magic to cast spells, with incantations way too wordy for the heat of battle (not to mention they're healing spells, not destruction spells). Most of her actions stem from the fictional world detailed in her 'Treasury of the Nether Realm', a sort of delusional fantasy diary that just seems to make everything worse. With all of this, it's no wonder that she doesn't have many friends, and no one dares accept her 'help' in battle. Then one day, in the middle of a little magic training, she has a fate encounter with Master Caesar. Having it in her head that Caesar is actually her old 'Arch-Nemesis' from a past life, Daphne Bloom starts out down a new path of her life as part of Caesar's harem.\n\n"Arch-Nemesis!! You will not call me Susan, you will call me Daphne Bl-- Eh!? Hey, let me finish!!"`,
        [Locale.jp]: `バンサフィーナ・ブルーム・煌星（シャイニングスター）……まずはこう呼ぶとしよう。一人の奇妙な雰囲気をかもしている少女が「世界の終末がやってくる」、「世界は滅びる」…などとつぶやいている。戦闘時はオリジナルソング歌うが、詠唱時間が長すぎるために実戦には向かない。また、「冥界法典」を使用し、敵の情報を調べてから、行動にうつる。しかし、「冥界法典」は彼女自身の空想から編成されたもので、いつも事態が悪化する行動をとってしまう。そのためか長い間、誰も彼女とバンドを組みたがらない。バンサフィーナ・ブルーム・煌星自身、人に迷惑をかけている自覚はあるが、この癖を直そうか躊躇しているとき、偶然シーザーに遭遇した。シーザーを運命の宿敵だと信じてやまない、今日もバンサフィーナ・ブルーム・煌星は妄想に全力投球している。\n\n『宿敵よ、ワタシはバンサフィーナ・ブルー……ちょっと、最後まで話を聞け！』`,
        [Locale.kr]: `비앙스 에피나‧블룸‧샤이닝스타...... 일단은 이렇게 그녀를 부르도록 하자. 「종말이 곧 온다구」, 「세상이 곧 파멸하게 될 거야」 같은 말을 입에 달고 사는... 이상한 기운이 온몸을 휘감고 있는 소녀. 전투에서 자신의 기술을 발동할 시 매우 거창하게 기술 이름을 읊어대지만, 오버스러울만큼 과장된 빛 효과가 무색해질 만큼 사실 알고 보면 단순한 치유 스킬일뿐. 또한 「명계의 서」를 사용해 적의 정보를 확인하고 그에 맞는 공격 방식을 취한다. 하지만 [명계의 서]는 비앙스가 자신의 환상을 토대로 멋대로 만들어 낸 책에 불과했기 때문에 그녀가 취하는 공격 방식은 오히려 상황을 더욱 혼란스럽게 만들 뿐이다. 그녀이 괴이한 말투와 괴벽 때문인지 비앙스는 모험자 협회에서도 그저 골칫덩이 별종이라는 취급을 받을 뿐이다. 하지만 이런 행동을 일삼는 그녀에게도 나름 특별한 이유가 있어보이는데... 시저를 운명의 숙적이라고 굳게 믿는 비앙스 에피나‧블룸‧샤이닝스타는 오늘도 망상의 길에 빠져 전력을 다하고 있다.\n\n『나의 숙적이여, 네가 비앙스 에비나‧블룸‧샤이닝스타라는 나의 이름을 부르는 것을 허락... 잠깐! 내 말 아직 다 안 끝났다고!』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/05/12",
    essence: UnitEssence[UnitCode.daphne],
    thumbnail: UnitEssence[UnitCode.daphne],
    selection: UnitSelection[UnitCode.daphne],
    clothes: UnitFullImage[UnitCode.daphne],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_SUPPORTER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [ UnitCode.susan ],
    initHP: 0,
    initATK: 0,
    puzzle: [],
    outfits: [],
    skillSet: []
}