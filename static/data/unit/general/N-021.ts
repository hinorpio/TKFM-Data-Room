import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10920: Unit = {
    ID: "10920",
    metaCode: "bliss",
    prefix: {
        [Locale.tc]: "",
        [Locale.sc]: "",
        [Locale.en]: "Angel of",
        [Locale.jp]: "",
        [Locale.kr]: "복음의"
    },
    name: {
        [Locale.tc]: "福音天使",
        [Locale.sc]: "福音天使",
        [Locale.en]: "Bliss",
        [Locale.jp]: "福音天使",
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
        [Locale.tc]: `天界是主神的住所，而天使則是服侍神的僕人。最下級的天使沒有自己的名字，只以職階稱呼。雖然有個體上的性格差異，但大多數天使都只會遵循主神制定的規則行事，少有主見。福音天使主要職務為傳播教義，讓世人知曉主神的福音。在信徒祈禱時，降臨教會的多為福音天使。\n\n『給予爾等主神的祝福。』`,
        [Locale.sc]: `天界是主神的住所，而天使则是服侍神的仆人。最下级的天使没有自己的名字，只以职阶称呼。虽然有个体上的性格差异，但大多数天使都只会遵循主神制定的规则行事，少有主见。福音天使主要职务为传播教义，让世人知晓主神的福音。在信徒祈祷时，降临教会的多为福音天使。\n\n『给予尔等主神的祝福。』`,
        [Locale.en]: `The Heavenly Realm is where the lord resides, with the angels acting as the lord's servants. The low-ranking angels do not have their own names, with others addressing them by their occupational classes instead. Even though the angels have their own individual personalities, the majority of them follow the orders of the lord without a second thought. The main job of the Angel of Bliss is to preach, bestowing the knowledge of the lord's gospel on the world. The Angel of Bliss descends upon churches and chapels whenever believers gather to fervently pray.\n\n"I will grant you divine blessings in the name of the lord."`,
        [Locale.jp]: `天界は主神の住む場所、天使は神に仕える僕だ。階級が一番低い天使は名前が無く、階級で呼ばれている。みな性格の違いはあるが、基本的には主神の定めたルールに従ってことを行い、意見を言う事は無い。福音天使は教義の宣教が主な職務で、世の人に主神の福音を知らせている信徒が祈りを捧げているとき、協会に降臨するのは福音天使である。\n\n『あなたに神の祝福あれ』`,
        [Locale.kr]: `천계는 주신의 성소이자 천사들의 사역 장소. 최하급 천사들은 자신의 이름도 가지지 못한 채 직책으로만 불릴 뿐이다. 각자 성격은 다를 지라도 대부분의 천사들은 주신이 제정한 율법을 군말 없이 따르고 있다. 복음의 천사의 직무는 주신의 교리를 전파하고 주신의 복음을 가르치는 것. 이들 대부분은 신도의 기도에 응답해주기 위해 하계에 강림하곤 한다.\n\n『주신의 이름으로 축복을 내려주겠어요.』`,
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/07/14",
    essence: UnitEssence[UnitCode.bliss],
    thumbnail: UnitEssence[UnitCode.bliss],
    selection: UnitSelection[UnitCode.bliss],
    clothes: UnitFullImage[UnitCode.bliss],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_HEALER, 
        TagID.CLASS_SOLDIER,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.SKY_BLISS, PuzzleCode.SKY_PUNISHMENT ],
    skillSet: []
}