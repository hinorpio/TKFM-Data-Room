import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10912: Unit = {
    ID: "10912",
    metaCode: "lori",
    prefix: {
        [Locale.tc]: "史萊姆娘",
        [Locale.sc]: '史莱姆娘',
        [Locale.en]: "Slime-Girl",
        [Locale.jp]: "スライム少女",
        [Locale.kr]: "슬라임 소녀"
    },
    name: {
        [Locale.tc]: "蘿爾",
        [Locale.sc]: "萝尔",
        [Locale.en]: "Lori",
        [Locale.jp]: "ローラ",
        [Locale.kr]: "로라"
    },
    abbreviation: {
        [Locale.tc]: [ "萊姆", "母雞" ],
        [Locale.sc]: [ "萊姆" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `蘿爾雖然是有智慧的高等史萊姆，但她卻非常討厭思考。每天都是發呆的過整天，對她來說沒有甚麼事比發呆更棒了。由於擁有不錯的美貌，冒險者路過通常也不忍對她下手。今天也是和平的一天。\n\n『嗯……』`,
        [Locale.sc]: `萝尔虽然是有智慧的高等史莱姆，但她却非常讨厌思考。每天都是发呆的过整天，对她来说没有什么事比发呆更棒了。由于拥有不错的美貌，冒险者路过通常也不忍对她下手。今天也是和平的一天。\n\n『嗯……』`,
        [Locale.en]: `Lori is an exceptionally intelligent slime... she just hates thinking. There's nothing she likes more than spending her days oozing around for hours on end. Since she's pretty hot, lots of adventurers passing by can't help themselves from putting their hands on her. Today is another great day to not think about anything.\n\n"Yup......."`,
        [Locale.jp]: `ローラは知能を持つスライム。しかし考えることが大嫌いである。毎日ボーっとして一日を過ごし、ボーっとすることほど好きな事は無いようだ。見た目が可愛いため、冒険者たちは彼女に手出しする事は無い。\n\n『うん……』`,
        [Locale.kr]: `로라는 지능이 있는 고등 슬라임 걸이지만 생각하는 것을 매우 싫어해 매일 하루 종일 멍하니 있는 것을 좋아한다. 그녀에게 있어 멍하니 시간을 보내는 것은 이 세상 무엇보다도 멋진 일이며 예쁜 외모를 가지고 있어 길을 통과하는 모험가들은 차마 그녀에게 나쁜 짓을 하지 못한다. 오늘도 평화로운 하루이다.\n\n『음......』`
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.lori],
    thumbnail: UnitEssence[UnitCode.lori],
    selection: UnitSelection[UnitCode.lori],
    clothes: UnitFullImage[UnitCode.lori],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_WEAKEN,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    initHP: 2800.996478094647,
    initATK: 360.99877866378733,
    puzzle: [ PuzzleCode.DEMON_LORI ],
    outfits: UnitOutfits[UnitCode.lori],
    skillSet: []
}