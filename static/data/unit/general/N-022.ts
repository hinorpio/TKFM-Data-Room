import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10923: Unit = {
    ID: "10923",
    metaCode: "mareyl",
    prefix: {
        [Locale.tc]: "人馬",
        [Locale.sc]: '人马',
        [Locale.en]: "Centaur Girl",
        [Locale.jp]: "ケンタウロス娘",
        [Locale.kr]: "켄타우로스 소녀"
    },
    name: {
        [Locale.tc]: "賽希",
        [Locale.sc]: "赛希",
        [Locale.en]: "Mareyl",
        [Locale.jp]: "セシル",
        [Locale.kr]: "세실"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `賽希是直率且高傲的人馬騎兵。人馬都是天生的神射手與騎士，而賽希更是其中的佼佼者。她比族內的任何人馬都來得優秀，全力奔跑時的速度更是遠超其他同族。自認在速度方面絕不會輸給任何人的她，今天依然在努力訓練。\n\n『第一名的位置我是不會讓出去的！』`,
        [Locale.sc]: `赛希是直率且高傲的人马骑兵。人马都是天生的神射手与骑士，而赛希更是其中的佼佼者。她比族内的任何人马都来得优秀，全力奔跑时的速度更是远超其他同族。自认在速度方面绝不会输给任何人的她，今天依然在努力训练。\n\n『第一名的位置我是不会让出去的！』`,
        [Locale.en]: `Mareyl is a straight-talking proud centaur warrior. Her kind are natural-born archers and knights, and she is the finest among them. However, her speed exceeds that of any other centaur. Sure of her ability to best any of her kin in a race, Mareyl is training hard today.\n\n"I got to stay No. 1... I can't lose, I can't..."`,
        [Locale.jp]: `セシルは傲り高いケンタウロスの騎兵。ケンタウロスは生まれつき素晴らしい弓術をもった騎士であり、セシルはその中でも群を抜く実力の持ち主だ。それだけではなく、駆け足の速さも同族では一番という優秀なケンタウロスだ。足の速さだけは絶対に負けないと自負している彼女だが、今日も必死に訓練に励むのであった。\n\n『一位の座は絶対に譲らないから！』`,
        [Locale.kr]: `세실은 솔직하고 도도한 켄타우로스이다. 켄타우로스는 천성적으로 기병으로서의 능력과 훌륭한 사격 실력을 지니고 있으며, 세실은 그중에서도 손꼽히는 실력자다. 그녀는 종족 내에서도 두각을 나타내며 전력 질주할 때의 속도는 타의 추종을 불허하는 최고의 스피드를 자랑한다. 스피드만큼은 누구에게도 뒤지지 않는다고 자부하는 그녀는 오늘도 훈련에 열중이다.\n\n『1등 자리는 어느 누구에게도 내어주지 않아!』`
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.mareyl],
    thumbnail: UnitEssence[UnitCode.mareyl],
    selection: UnitSelection[UnitCode.mareyl],
    clothes: UnitFullImage[UnitCode.mareyl],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_GIANT_TITS,
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [],
    initHP: 1757,
    initATK: 576,
    puzzle: [ PuzzleCode.DEMON_MAREYL ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.mareyl],
    skillSet: []
}