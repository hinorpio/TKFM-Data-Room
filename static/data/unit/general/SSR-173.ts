import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10202: Unit = {
    ID: "10202",
    metaCode: "nali",
    prefix: {
        [Locale.tc]: "邪惡之星",
        [Locale.sc]: "邪恶之星",
        [Locale.en]: "Evil Star",
        [Locale.jp]: "イビルスター",
        [Locale.kr]: "사악한 별"
    },
    name: {
        [Locale.tc]: "娜莉",
        [Locale.sc]: "娜莉",
        [Locale.en]: "Nali",
        [Locale.jp]: "ナリー",
        [Locale.kr]: "나리"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `邪惡之星娜莉是個總是面無表情，看不出來在想什麼的邪惡組織幹部。她有著能夠驅使魔物的惡之王加護，並為了某種目的而持續侵擾著邊境的城市。儘管侵略的腳步屢次被新出現的魔法少女給阻止，她也不曾放棄過自己的目標。唯一一件稱得上被遮掩起來的秘密……大概就是用面罩隱藏真面目的娜莉，似乎也是這座城鎮的居民……\n\n『黑暗之聲，萬物都將服從於我，支配的邪惡之星，在此登場！』`,
        [Locale.sc]: `邪恶之星娜莉是个总是面无表情，看不出来在想什么的邪恶组织干部。她有着能够驱使魔物的恶之王加护，并为了某种目的而持续侵扰着边境的城市。儘管侵略的脚步屡次被新出现的魔法少女给阻止，她也不曾放弃过自己的目标。唯一一件称得上被遮掩起来的秘密……大概就是用面罩隐藏真面目的娜莉，似乎也是这座城镇的居民……\n\n『黑暗之声，万物都将服从于我，支配的邪恶之星，在此登场！』`,
        [Locale.en]: `Evil Star Nali is the executive of the impious organization, Evil Inc. Always sporting a blank expression, it is impossible to decipher what she is truly thinking inside her thick skull. She possesses the protection of the King of Evil, granting her the power to command monsters at will, and for reasons known only to her, she has continued to launch relentless assaults on border settlements. Despite her invasion plans being repeatedly thwarted by the sudden appearance of a new magic knight, she has never once wavered from her ultimate goal. The only secret she keeps hidden... is that behind the mask concealing her true identity, Nali appears to be an ordinary resident of the same village she is assaulting.\n\n"Voice of darkness, all things shall obey me! The Evil Star of Domination, makes its debut!"`,
        [Locale.jp]: `イビルスターナリーは邪悪組織の幹部。常に無表情で何を考えているのか全く読めない。魔物を自在に操る悪の王の加護を持ち、ある目的のために辺境の街への侵攻を続けている。幾度となく新たに現れた魔法少女たちに侵略の歩みを阻まれても、自らの目標を諦めたことは一度もない。唯一、隠している秘密と呼べるものがあるとすれば……仮面で素顔を隠しているナリーは、どうやらこの街の住人でもあるらしいということだろう……\n\n『暗黒の声に、万物は我にひれ伏す。すべてを支配するイビルスター、ここに見参！』`,
        [Locale.kr]: `사악한 별 나리는 늘 포커페이스에 무슨 생각을 하는지 전혀 알 수 없는 악의 조직의 간부이다. 그녀는 마물을 부릴 수 있는 악의 왕의 가호를 지녔으며, 어떤 목적을 위해 변방의 도시를 지속적으로 침략하고 있다. 새로 나타난 마법소녀에게 번번이 침략을 저지당하고 있음에도, 그녀는 자신의 목표를 결코 포기한 적이 없다. 유일하게 드러나지 않은 비밀은... 가면으로 정체를 숨긴 나리가 이 마을의 주민일 수도 있다는 점인데...\n\n『어둠의 목소리여, 만물은 나에게 복종하라. 지배의 사악한 별, 이곳에 등장!』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2026/05/06",
    essence: UnitEssence[UnitCode.nali],
    thumbnail: UnitEssence[UnitCode.nali],
    selection: UnitSelection[UnitCode.nali],
    clothes: UnitFullImage[UnitCode.nali],
    tagList: [],
    otherVersion: [],
    initHP: 5417.6,
    initATK: 681.6,
    puzzle: [],
    outfits: UnitOutfits[UnitCode.nali],
    voiceSet: UnitVoice[UnitCode.nali],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}