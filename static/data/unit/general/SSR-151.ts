import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10180: Unit = {
    ID: "10180",
    metaCode: "yuri",
    prefix: {
        [Locale.tc]: "護士",
        [Locale.sc]: "护士",
        [Locale.en]: "Nurse",
        [Locale.jp]: "ナース",
        [Locale.kr]: "간호사"
    },
    name: {
        [Locale.tc]: "優璃",
        [Locale.sc]: "优璃",
        [Locale.en]: "Yuri",
        [Locale.jp]: "ユリ",
        [Locale.kr]: "유리"
    },
    abbreviation: {
        [Locale.tc]: [ "護士", "病嬌" ],
        [Locale.sc]: [ "护士", "病娇" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `優璃是一位經驗豐富、能力優秀的護士。她不僅外表甜美，還總是帶著甜甜的笑容關心別人的健康，因此非常受到病患的喜愛。然而，被許多病患視為夢中情人的她，其實暗自迷戀著某人。為了能讓那位心愛之人愛上自己，優璃默默做了許多努力，並祈求著對方能注意到她。或許是聽見了她的祈禱，某天，命運給予了優璃一個千載難逢的好機會……儘管前方依舊有許多困難，但是為了愛，為了實現她的戀情，不管有多少阻礙，她都無所畏懼。\n\n『如果有任何不舒服的地方，就來找優璃幫忙吧~』`,
        [Locale.sc]: `优璃是一位经验丰富、能力优秀的护士。她不仅外表甜美，还总是带着甜甜的笑容关心别人的健康，因此非常受到病患的喜爱。然而，被许多病患视为梦中情人的她，其实暗自迷恋着某人。为了能让那位心爱之人爱上自己，优璃默默做了许多努力，并祈求着对方能注意到她。或许是听见了她的祈祷，某天，命运给予了优璃一个千载难逢的好机会……尽管前方依旧有许多困难，但是为了爱，为了实现她的恋情，不管有多少阻碍，她都无所畏惧。\n\n『如果有任何不舒服的地方，就来找优璃帮忙吧~』`,
        [Locale.en]: `Yuri is a seasoned and highly skilled nurse. Not only is she positively adorable, her sweet smile and genuine care for others' well-being also make her a favorite among patients. Yet, the one many patients see as their dream girl secretly harbors a crush on someone special. To win the heart of her beloved, Yuri has quietly poured her heart into countless efforts, hoping he'll finally notice her. Perhaps her prayers were heard, because one day, fate hands her a once-in-a-lifetime opportunity... Though challenges still lie ahead, for love—for the chance to make her romance a reality—no obstacle is too great for her to overcome.\n\n"If you're feeling unwell anywhere, just come to Yuri for some tender loving care~"`,
        [Locale.jp]: `ユリは経験豊富で、優秀な看護師である。彼女は外見が美しいだけでなく、いつも甘い笑顔で他人の健康を気遣っているため、患者たちからとても愛されている。しかし、多くの患者から夢の恋人と慕われている彼女は、実は密かに恋焦がれている人がいた。その相手に愛してもらうために、ユリは黙々と多くの努力を重ね、自分に気づいてくれることを願い続けていた。彼女の願いが届いたのか、ある日、運命はユリに千載一遇の好機を与えた……目の前には依然として多くの困難が立ちはだかるが、愛のため、そして恋を実らせるため、どんな困難があろうとも、彼女が恐れることはない。\n\n『もし具合の悪いところがありましたら、ユリがお手伝いしますよ～』`,
        [Locale.kr]: `유리는 경험이 풍부하고 능력이 뛰어난 간호사이다. 그녀는 수려한 외모와 더불어 늘 다정한 미소로 환자의 건강을 염려하였기에, 많은 이들에게 깊은 사랑을 받았다. 수많은 환자들은 심지어 그녀를 꿈에 그리던 이상형으로 꼽을 정도다. 허나 수많은 환자들의 이상형인 그녀는 몰래 흠모하는 상대가 있었으니. 사랑하는 이가 자신을 사랑하게 만들기 위해 유리는 묵묵히 노력을 기울였고, 그가 자신을 알아봐 주기를 간절히 염원했다. 그녀의 기도가 하늘에 닿았던 것일까, 어느 날 운명은 유리에게 다시없을 절호의 기회를 가져다 주는데... 앞길에 비록 수많은 난관이 기다릴지라도, 사랑을 위해서라면 그녀는 어떠한 것도 두려워하지 않을 것이다.\n\n『만약 불편한 곳이 있다면 유리를 찾아주세요~』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2025/08/13",
    essence: UnitEssence[UnitCode.yuri],
    thumbnail: UnitEssence[UnitCode.yuri],
    selection: UnitSelection[UnitCode.yuri],
    clothes: UnitFullImage[UnitCode.yuri],
    tagList: [],
    otherVersion: [],
    initHP: 3619.2,
    initATK: 974.4,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.yuri],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}