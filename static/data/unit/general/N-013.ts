import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10913: Unit = {
    ID: "10913",
    metaCode: "minnow",
    prefix: {
        [Locale.tc]: "牛女",
        [Locale.sc]: "牛女",
        [Locale.en]: "Cow-Girl",
        [Locale.jp]: "牛娘",
        [Locale.kr]: "카우걸"
    },
    name: {
        [Locale.tc]: "米諾",
        [Locale.sc]: "米诺",
        [Locale.en]: "Minnow",
        [Locale.jp]: "ミルノ",
        [Locale.kr]: "미르노"
    },
    abbreviation: {
        [Locale.tc]: [ "牛女", "牛" ],
        [Locale.sc]: [ "牛女", "牛" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `米諾是牛人一族，天生就力大無窮。個性溫和的她最喜歡跟大夥一起用餐，只是由於種族原因，認為喝牛奶就像是在喝同族的體液，所以極度厭惡牛奶。\n\n『用餐時間到囉～』`,
        [Locale.sc]: `米诺是牛人一族，天生就力大无穷。个性温和的她最喜欢跟大伙一起用餐，只是由于种族原因，认为喝牛奶就像是在喝同族的体液，所以极度厌恶牛奶。\n\n『用餐时间到啰～』`,
        [Locale.en]: `Minnow is a cow-girl who was born with immense strength. She's got a gentle personality and her favorite pasttime is having a nice, big meal with the gang. GIven that she's half cow, she thinks drinking milk is akin to drinking her relatives' blood. Boy does she hate milk.\n\n"Time to eat!!!!"`,
        [Locale.jp]: `牛娘 ミルノは牛頭人一族。生まれつき強い力の持ち主だ。温厚な性格で、仲間と一緒にご飯を食べるのが大好き。牛頭人にとって牛乳は同族の体液であるため、牛乳が大嫌いである。\n\n『一緒に一杯飲もう！』`,
        [Locale.kr]: `미르노는 켄타우로스족으로 엄청난 괴력을 가지고 태어났다. 온화한 성격의 그녀는 여러 사람들과 함께 식사하는 것을 제일 좋아한다. 다만 종족 문제 때문에 우유를 마시는 것은 동족의 액체를 마시는 것과 동일하다고 생각해 우유 마시는 것만큼은 극도로 혐오한다.\n\n『식사 시간이예요~』`
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.minnow],
    thumbnail: UnitEssence[UnitCode.minnow],
    selection: UnitSelection[UnitCode.minnow],
    clothes: UnitFullImage[UnitCode.minnow],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_INTERFERENCE,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_MINNOW ],
    outfits: [],
    skillSet: []
}