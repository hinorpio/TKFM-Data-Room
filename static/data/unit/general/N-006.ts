import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10906: Unit = {
    ID: "10906",
    metaCode: "kaede",
    prefix: {
        [Locale.tc]: "烈日國巫女",
        [Locale.sc]: "烈日国巫女",
        [Locale.en]: "Isori Shaman",
        [Locale.jp]: "烈陽国巫女",
        [Locale.kr]: "태양국 무녀"
    },
    name: {
        [Locale.tc]: "楓",
        [Locale.sc]: "枫",
        [Locale.en]: "Kaede",
        [Locale.jp]: "楓",
        [Locale.kr]: "카에데"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `楓是一位虔誠的巫女，成年後就一直待在神宮裡學習神道和陰陽術。十分喜歡小動物，然而由於巫女的身分，沒法有多餘心力飼養寵物，她最大的夢想就是有朝一日可以買下自己的房子，並且和一堆貓貓狗狗同居。\n\n『貓咪好可愛……』`,
        [Locale.sc]: `枫是一位虔诚的巫女，成年后就一直待在神宫里学习神道和阴阳术。十分喜欢小动物，然而由于巫女的身分，没法有多余心力饲养宠物，她最大的梦想就是有朝一日可以买下自己的房子，并且和一堆猫猫狗狗同居。\n\n『猫咪好可爱……』`,
        [Locale.en]: `Kaede is a devout student of magic, spending all her time at the shrine studying the arts of Shintoism and Onmyoji. She loves tiny critters of all kinds, but her duties as an Onmyoji make it impossible for her to have a pet of her own. Her dream is to one day move into her own house and raise oodles and kaboodles of cute little puppies and kitties.\n\n"Hello you cutie little kitty witty face!"`,
        [Locale.jp]: `烈陽国巫女、楓は信仰心の篤い巫女である。成人を迎えてからずっと神宮で神道と陰陽道を学んでいる。小動物が大好きだが、巫女であることから、猫や犬をお世話する余裕がない。そんな彼女の夢はいつかたくさんの猫と犬と一緒に暮らすことだ。\n\n『猫ちゃん可愛いなぁ……』`,
        [Locale.kr]: `카에데는 신앙이 깊은 무녀이다. 성인이 된 이후로는 계속 신궁에 남아 신도와 음양술을 학습하고 있다. 작은 동물들을 아주 좋아하지만 무녀의 신분 때문에 애완동물을 기를 여력이 없다. 그녀의 가장 큰 꿈은 어느 날 자신만의 집을 산 다음 강아지와 고양이 틈에 싸여 같이 사는 것이다.\n\n『냥이가 너무 귀여워......』`
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.kaede],
    thumbnail: UnitEssence[UnitCode.kaede],
    selection: UnitSelection[UnitCode.kaede],
    clothes: UnitFullImage[UnitCode.kaede],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_KAEDE ],
    skillSet: []
}