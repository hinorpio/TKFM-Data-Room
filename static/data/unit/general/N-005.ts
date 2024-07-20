import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10905: Unit = {
    ID: "10905",
    metaCode: "kikyou",
    prefix: {
        [Locale.tc]: "烈日國武士",
        [Locale.sc]: "烈日国武士",
        [Locale.en]: "Isori Warrior",
        [Locale.jp]: "烈陽国武士",
        [Locale.kr]: "태양국 사무라이"
    },
    name: {
        [Locale.tc]: "桔梗",
        [Locale.sc]: "桔梗",
        [Locale.en]: "Kikyou",
        [Locale.jp]: "桔梗",
        [Locale.kr]: "키쿄"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `桔梗從小就修習劍術，並對陰陽術和妖術等十分厭惡，認為會去修習那些的都是邪魔歪道。雖然本身十分喜歡練劍，但是天分有限，即使再怎麼修行，也只是比一般人稍強的水準。\n\n『武士就是要謹守本分！』`,
        [Locale.sc]: `桔梗从小就修习剑术，并对阴阳术和妖术等十分厌恶，认为会去修习那些的都是邪魔歪道。虽然本身十分喜欢练剑，但是天分有限，即使再怎么修行，也只是比一般人稍强的水准。\n\n『武士就是要谨守本分！』`,
        [Locale.en]: `Kikyou has practiced the art of the blade since she was a kid. She's absolutely disgusted by the Onmyoji and magic of any kind, she thinks it's only perverts and rejects who'd willingly choose to go study that crap. Even though she's got quite the attitude, and a passion for blade arts to boot, her skills are only 'okay', and no matter how hard she tries she can't seem to get much better...\n\n"Warriors need to obey the code!"`,
        [Locale.jp]: `桔梗は幼いころから剣術を学び、陰陽術と妖術を学ぶことは邪道であるとして嫌っている。剣術を鍛えるのが大好きだが、生まれつきの才能にも限度があり、多少人より優れる程度にとどまる。\n\n『武士は本分を尽くすべし！』`,
        [Locale.kr]: `키쿄는 어려서부터 검술을 연마했으며 음양술과 요술 같은 것을 매우 싫어한다. 그런 것을 익히는 자들은 모두 사악하다고 믿고 있다. 검술 연마를 매우 좋아하기는 하지만 천부적 재질이 부족해 아무리 수련해도 그저 일반인보다 조금 나은 수준일 뿐이다.\n\n『사무라이는 본분을 지켜야만 해!』`
    },
    rarity: Rarity.N,
    element: Element.FIRE,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.kikyou],
    thumbnail: UnitEssence[UnitCode.kikyou],
    selection: UnitSelection[UnitCode.kikyou],
    clothes: UnitFullImage[UnitCode.kikyou],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_KIKYOU ],
    skillSet: []
}