import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10914: Unit = {
    ID: "10914",
    metaCode: "lamia",
    prefix: {
        [Locale.tc]: "蛇女",
        [Locale.sc]: "蛇女",
        [Locale.en]: "Snake-Girl",
        [Locale.jp]: "ナーガ",
        [Locale.kr]: "나가"
    },
    name: {
        [Locale.tc]: "拉米亞",
        [Locale.sc]: "拉米亚",
        [Locale.en]: "Lamia",
        [Locale.jp]: "ラミア",
        [Locale.kr]: "라미아"
    },
    abbreviation: {
        [Locale.tc]: [ "蛇女", "小蛇" ],
        [Locale.sc]: [ "蛇女", "小蛇" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `蛇女族的拉米亞天生就喜歡男人，不只喜歡和他們交合，也喜歡他們身上的金銀財寶。拉米亞會用她的外貌勾引男人，並與他們做愛，由於蛇女的性交時間長達數十小時，往往男人會在過程中昏厥，而等他們醒來時，拉米亞早就把他們搜刮一空，並且溜之大吉了。\n\n『嘻嘻嘻…要來和拉米亞做・愛・嗎？』`,
        [Locale.sc]: `蛇女族的拉米亚天生就喜欢男人，不只喜欢和他们交合，也喜欢他们身上的金银财宝。拉米亚会用她的外貌勾引男人，并与他们做爱，由于蛇女的性交时间长达数十小时，往往男人会在过程中昏厥，而等他们醒来时，拉米亚早就把他们搜刮一空，并且溜之大吉了。\n\n『嘻嘻嘻…要来和拉米亚做・爱・吗？』`,
        [Locale.en]: `Lamia has liked boys for as long as she can remember. She not only enjoys banging them, but also has a thing for their gold and silver—cash money, baby! She uses her sexy, snake-girl appearance to lure in men, and since mating requires several hours, the men usually pass out before it's over. While they're out cold, she cleans 'em dry and pockets all their goods.\n\n"Heehee... So... Who wants to fuck me?"`,
        [Locale.jp]: `ラミアはナーガ族の一人で、生まれつき男が大好き。セックスだけではなく男の持つ金目の物も大好きだ。そんな彼女はその美貌で男を引っかけ、セックスをする。ナーガのセックスは数十時間にも及ぶため、皆失神する。そして目が覚めた時には空っぽ。すべて奪い去られてしまうのだ。\n\n『ふふふっ、ラミアとセックスしよ？』`,
        [Locale.kr]: `나가족의 라미아는 태어날 때부터 남자를 좋아했다. 그들과 몸을 섞는 것만 좋아하는 것이 아니라 남자들이 가지고 있는 재물까지도 좋아한다. 라미아는 그녀의 외모를 이용해 남자들을 유혹한 뒤 그들과 섹스를 한다. 나가족의 섹스 시간은 몇 시간 동안 계속되기 때문에 보통 남자들은 중간에 기절해버리곤 한다. 그들은 정신을 차린 후에야 라미아가 이미 모든 재물을 털어간 것을 발견하게 된다.\n\n『히히히... 라미아하고 섹‧스‧할‧래‧요?』`
    },
    rarity: Rarity.N,
    element: Element.FIRE,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.lamia],
    thumbnail: UnitEssence[UnitCode.lamia],
    selection: UnitSelection[UnitCode.lamia],
    clothes: UnitFullImage[UnitCode.lamia],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_INTERFERENCE,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_LAMIA ],
    skillSet: []
}