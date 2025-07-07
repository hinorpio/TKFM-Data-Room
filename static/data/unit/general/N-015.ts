import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10915: Unit = {
    ID: "10915",
    metaCode: "harpy",
    prefix: {
        [Locale.tc]: "鳥身女妖",
        [Locale.sc]: '鸟身女妖',
        [Locale.en]: "Bird-Girl",
        [Locale.jp]: "妖鳥",
        [Locale.kr]: "날개의 정령"
    },
    name: {
        [Locale.tc]: "哈比",
        [Locale.sc]: "哈比",
        [Locale.en]: "Harpy",
        [Locale.jp]: "ハーピー",
        [Locale.kr]: "하피"
    },
    abbreviation: {
        [Locale.tc]: [ "鳥" ],
        [Locale.sc]: [ "鸟" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `鳥身女妖的哈比是襲擊路過旅客與冒險者的慣犯。但她瞄準的並不是路人的性命，而是他們身上閃亮亮的東西，只要願意乖乖交出亮晶晶的東西，諸如金幣、寶石，她就會心滿意足的離開。因為哈比的腦袋不好，最近旅客們開始隨身攜帶玻璃珠，看是否能以此蒙混過關。\n\n『嘎，亮晶晶的東西通通交出來！』`,
        [Locale.sc]: `鸟身女妖的哈比是袭击路过旅客与冒险者的惯犯。但她瞄准的并不是路人的性命，而是他们身上闪亮亮的东西，只要愿意乖乖交出亮晶晶的东西，诸如金币、宝石，她就会心满意足的离开。因为哈比的脑袋不好，最近旅客们开始随身携带玻璃珠，看是否能以此蒙混过关。\n\n『嘎，亮晶晶的东西通通交出来！』`,
        [Locale.en]: `The bird-girl Harpy has a habit of ambushing passers by. She's not after their lives, just all those shiny goods they've got on them. Coins, gems, jewels... she wants it all. So long as they give it up, Harpy'll let 'em pass. Since she's not exactly a clever bird, tourists have recently been trying to see if glass marbles would work.\n\n"Com' on! Everything shiny... HAND IT OVER!!!"`,
        [Locale.jp]: `妖鳥であるハーピーは旅行者や冒険者を襲撃するのが大好き。しかしそれは旅行者や冒険者の命を奪うのではなく、金品を奪うためだ。キラキラと光るものが大好きで、金貨や宝石など光るものを大人しく渡せば、彼女は満足してその場を去る。ハーピーはおバカなため、最近の旅行者はガラスの球を持ち歩き、ハーピーをだましている。\n\n『うがぁ！金目の物を置いてけぇ！』`,
        [Locale.kr]: `날개의 정령 하피는 지나가는 여행객들과 모험가들을 습격하는 상습범이다. 하지만 그녀는 행인의 생명을 노리는 것이 아니라 그들 몸에서 반짝거리는 것들을 노리곤 한다. 만약 금화, 보석과 같이 반짝거리는 것을 순순히 내놓기만 한다면 하피는 만족하고 그들을 놓아줄 것이다. 하피는 머리가 나빠 요즘 길을 통과하는 여행객들은 몸에 반짝이는 유리구슬을 휴대하고 그녀를 속이려 한다.\n\n『헤헷. 반짝이는 물건을 어서 모두 내놔!』`
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.harpy],
    thumbnail: UnitEssence[UnitCode.harpy],
    selection: UnitSelection[UnitCode.harpy],
    clothes: UnitFullImage[UnitCode.harpy],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_INTERFERENCE,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [],
    initHP: 2054,
    initATK: 492,
    puzzle: [ PuzzleCode.DEMON_HARPY ],
    outfits: [],
    skillSet: []
}