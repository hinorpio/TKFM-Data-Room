import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';
import puzzles from '../../puzzle';

export const General_10919: Unit = {
    ID: "10919",
    metaCode: "punishment",
    prefix: {
        [Locale.tc]: "",
        [Locale.sc]: "",
        [Locale.en]: "Angel of",
        [Locale.jp]: "",
        [Locale.kr]: "징벌"
    },
    name: {
        [Locale.tc]: "懲戒天使",
        [Locale.sc]: "惩戒天使",
        [Locale.en]: "Punishment",
        [Locale.jp]: "懲戒天使",
        [Locale.kr]: "천사"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `天界是主神的住所，而天使則是服侍神的僕人。最下級的天使沒有自己的名字，只以職階稱呼。雖然有個體上的性格差異，但大多數天使都只會遵循主神制定的規則行事，少有主見。懲戒主要職務為討伐主神的敵人，守護主神下令庇護的種族。在世人面臨威脅時，降臨並負責作戰的多為懲戒天使。\n\n『給予爾等主神的懲罰。』`,
        [Locale.sc]: `天界是主神的住所，而天使则是服侍神的仆人。最下级的天使没有自己的名字，只以职阶称呼。虽然有个体上的性格差异，但大多数天使都只会遵循主神制定的规则行事，少有主见。惩戒主要职务为讨伐主神的敌人，守护主神下令庇护的种族。在世人面临威胁时，降临并负责作战的多为惩戒天使。\n\n『给予尔等主神的惩罚。』`,
        [Locale.en]: `The Heavenly Realm is where the lord resides, with the angels acting as the lord's servants. The low-ranking angels do not have their own names, with others addressing them by their occupational classes instead. Even though the angels have their own individual personalities, the majority of them follow the orders of the lord without a second thought. The main duty of the Angel of Punishment is to vanquish the lord's enemies and guard the races under the lord's protection. Whenever the world faces extreme danger, the Angel of Punishment descends, ready for battle.\n\n"I will bestow divine punishment upon you in the name of the lord."`,
        [Locale.jp]: `天界は主神の住む場所、天使は神に仕える僕だ。階級が一番低い天使は名前が無く、階級で呼ばれている。みな性格の違いはあるが、基本的には主神の定めたルールに従ってことを行い、意見を言う事は無い。懲戒天使の職務は主神の敵を討伐することだ。脅威に遭遇した際、降臨して作戦を立てるのは大半が懲戒天使だ\n\n『貴方達に神の裁きあれ』`,
        [Locale.kr]: `천계는 주신의 성소이자 천사들의 사역 장소. 최하급 천사들은 자신의 이름도 가지지 못한 채 직책으로만 불릴 뿐이다. 각자 성격은 다를 지라도 대부분의 천사들은 주신이 제정한 율법을 군말 없이 따르고 있다.징벌의 천사의 직무는 주신의 가호를 받고 있는 종족들을 보호하고 적을 토벌하는 것. 이들은 대부분 세상이 위험에 처할 경우 하계에 강림하여 작전을 펼치곤 한다.\n\n『주신의 이름으로 벌을 내려주지.』`
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/07/14",
    essence: UnitEssence[UnitCode.punishment],
    thumbnail: UnitEssence[UnitCode.punishment],
    selection: UnitSelection[UnitCode.punishment],
    clothes: UnitFullImage[UnitCode.punishment],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_PROTECTOR, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    initHP: 2801,
    initATK: 361,
    puzzle: [ PuzzleCode.SKY_PUNISHMENT, PuzzleCode.SKY_BLISS ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.punishment],
    voiceException: [ 
        {
            version: 1,
            exception: [
                VoiceType.DISCIPLINE_1,
                VoiceType.DISCIPLINE_2,
                VoiceType.DISCIPLINE_3,
                VoiceType.ORGASM,
                VoiceType.SEX_MOANS,
                VoiceType.BLOWJOB,
                VoiceType.KISS
            ]
        }
    ],
    skillSet: []
}