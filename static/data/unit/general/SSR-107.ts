import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10137: Unit = {
    ID: "10137",
    metaCode: "w_lillane",
    prefix: {
        [Locale.tc]: "春情白兔",
        [Locale.sc]: "春情白兔",
        [Locale.en]: "Sensual Bunny",
        [Locale.jp]: "発情うさぎ",
        [Locale.kr]: "춘정의 토끼"
    },
    name: {
        [Locale.tc]: "鈴蘭",
        [Locale.sc]: "铃兰",
        [Locale.en]: "Lillane",
        [Locale.jp]: "鈴蘭",
        [Locale.kr]: "스즈란"
    },
    abbreviation: {
        [Locale.tc]: [ "風鈴" ],
        [Locale.sc]: [ "风铃" ],
        [Locale.en]: [ "W.Lillane" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "춘즈란" ]
    },
    background: {
        [Locale.tc]: `在遇見凱薩之後，渴望愛情的清純白兔終於實現夢想，過上了不被性慾困擾的自由生活。為了不讓家人操心，也為了向自己的親朋好友報平安，在魔王城度過一段安穩日子的鈴蘭，打算啟程回到故鄉，跟父母報告自己的近況。在這春暖花開的美好季節，嬌小可愛的清純少女，穿著全新的白色洋裝，在春風的吹拂下漫步啟程，和朋友一同踏上了返鄉之路。\n\n『春天的太陽暖洋洋的，風也很溫柔，要和鈴蘭一起出去外面走走嗎？』`,
        [Locale.sc]: `在遇见凯萨之后，渴望爱情的清纯白兔终于实现梦想，过上了不被性欲困扰的自由生活。为了不让家人操心，也为了向自己的亲朋好友报平安，在魔王城度过一段安稳日子的铃兰，打算启程回到故乡，跟父母报告自己的近况。在这春暖花开的美好季节，娇小可爱的清纯少女，穿着全新的白色洋装，在春风的吹拂下漫步启程，和朋友一同踏上了返乡之路。\n\n『春天的太阳暖洋洋的，风也很温柔，要和铃兰一起出去外面走走吗？』`,
        [Locale.en]: `After encountering Caesar, the innocent rabbit Lillane constantly pining for love finally realizes her dream of living a life that satisfies her troublesome sexual desires. To ease her family's concerns, she plans to return to her hometown and report to her relatives and friends about her safe, stable life in the Archdemon Palace. Spring is blooming once more, and this pure little lady in a new lily-white dress begins her adventurous stroll back home together with her friends.\n\n"The spring sun is warm and the winds gentle. Wanna take a walk outside with me?"`,
        [Locale.jp]: `愛情に飢えていた清純な白うさぎの夢は、シーザーと出会ってから現実なものとなった。彼女は性欲に悩まされることのない、自由な生活を送ることが叶ったのだ。魔王城で穏やかな日々を過ごしてきた鈴蘭は、家族と親しい友人に安否を知らせるため故郷に戻り、自分の近況を報告することにした。この清純な少女は花が咲く春の美しい季節に、新しい白いドレスを着て、春風に吹かれながら友人とともに故郷への旅路にでたのであった。\n\n『春の太陽は暖かくて、風もやわらかい。鈴と一緒にお出かけする？』`,
        [Locale.kr]: `시저를 만난 후 사랑에 목말라하던 청순한 토끼는 마침내 꿈을 이루고 성욕에 사로잡히지 않는 자유로운 삶을 누리게 되었다. 모두가 걱정하지 않도록, 자신이 마왕성에서 평온한 나날을 보내고 있다는 근황을 부모님과 친구들에 알리기 위해 귀향길에 나서게 됐다. 꽃피는 봄날의 아름다운 계절, 새하얀 원피스를 차려입은 깜찍하고 청순한 소녀가 봄바람을 맞으며 친구와 함께 고향으로 발걸음을 옮기게 되었다.\n\n『봄날의 햇살이 엄청 따스하고 바람도 부드럽네요. 저와 함께 밖에 나가보시는 건?』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/03/06",
    essence: UnitEssence[UnitCode.w_lillane],
    thumbnail: UnitEssence[UnitCode.w_lillane],
    selection: UnitSelection[UnitCode.w_lillane],
    clothes: UnitFullImage[UnitCode.w_lillane],
    tagList: [],
    otherVersion: [ UnitCode.lillane ],
    initHP: 3683.2,
    initATK: 956.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.w_lillane],
    skillSet: []
}