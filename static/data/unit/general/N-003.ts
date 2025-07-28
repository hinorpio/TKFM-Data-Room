import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10903: Unit = {
    ID: "10903",
    metaCode: "flay",
    prefix: {
        [Locale.tc]: "魔族戰士",
        [Locale.sc]: "魔族战士",
        [Locale.en]: "Demon Soldier",
        [Locale.jp]: "魔族戦士",
        [Locale.kr]: "마족 전사"
    },
    name: {
        [Locale.tc]: "芙蕾",
        [Locale.sc]: "芙蕾",
        [Locale.en]: "Flay",
        [Locale.jp]: "フレイ",
        [Locale.kr]: "프레이"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `芙蕾是一位天生的魔族戰士。相較於其他智力低下只知道殺戮的魔族，她更知曉虐待人類才能得到更大的快感跟甜美的靈魂。她對於自身的魔族身份充滿自傲，認為魔族是最優秀的種族。\n\n『光殺死他們也未免太仁慈了，呵。』`,
        [Locale.sc]: `芙蕾是一位天生的魔族战士。相较于其他智力低下只知道杀戮的魔族，她更知晓虐待人类才能得到更大的快感跟甜美的灵魂。她对于自身的魔族身份充满自傲，认为魔族是最优秀的种族。\n\n『光杀死他们也未免太仁慈了，呵。』`,
        [Locale.en]: `Flay's a born demon warrior. Unlike most other demons that just want to slaughter humans and bathe in their blood, Flay knows you've got to torture humans first if you want to get the juciest souls. She's really proud to be a demon, and will flaunt it any chance she gets.\n\n"Don't just kill 'em! You've gotta play with 'em, first!"`,
        [Locale.jp]: `フレイは生まれながらの魔族戦士。知能が低く殺戮しか知らない魔族だが、彼女は人類を虐めることで快感と甘い霊魂を得られることに憑りつかれている。自分が魔族であることに誇りを持っており、自分がとても優秀な種族だと思っている。\n\n『ただ皆殺しにするだけじゃ慈悲深すぎるかしら？ふふっ』`,
        [Locale.kr]: `프레이는 타고난 마족 전사이다. 낮은 지력에 그저 살육만 할 줄 아는 다른 마족들과는 다르게 그녀는 어떻게 인간들을 학대해야 더 많은 쾌감과 달콤한 영혼을 얻을 수 있을지 잘 알고 있다. 자신의 마족 신분에 대해 대단히 자랑스러워하며 마족은 가장 우수한 종족이라고 굳게 믿고 있다.\n\n『그들을 죽이는 것만으로는 너무 인자하지. 힛.』`
    },
    rarity: Rarity.N,
    element: Element.LIGHT,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.flay],
    thumbnail: UnitEssence[UnitCode.flay],
    selection: UnitSelection[UnitCode.flay],
    clothes: UnitFullImage[UnitCode.flay],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
    ],
    otherVersion: [],
    initHP: 2778,
    initATK: 364,
    puzzle: [ PuzzleCode.DEMON_FLAY ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.flay],
    skillSet: []
}