import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10077: Unit = {
    ID: "10077",
    metaCode: "bayliss",
    prefix: {
        [Locale.tc]: "黑鷹",
        [Locale.sc]: "黑鹰",
        [Locale.en]: "Black Hawk",
        [Locale.jp]: "ブラックホーク",
        [Locale.kr]: "블랙호크"
    },
    name: {
        [Locale.tc]: "貝里絲",
        [Locale.sc]: "贝里丝",
        [Locale.en]: "Bayliss",
        [Locale.jp]: "ベリス",
        [Locale.kr]: "베리스"
    },
    abbreviation: {
        [Locale.tc]: [ "黑鷹" ],
        [Locale.sc]: [ "黑鹰" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `貝里絲是一位經驗豐富的旅行家，也是一位天生的嚮導。對未知充滿好奇心的她，熱衷於到世界各地探險，體驗新奇的經驗。她爬過陡峭如懸崖的高山，橫越過危險四伏的沙漠，探索過漆黑神秘的洞窟，甚至在某個遙遠的部落學習魔法，通過試煉，獲得了「黑鷹」的稱號。儘管有時候她會因為過於旺盛的好奇心，讓自己遭遇危險，但是貝里絲總是能憑藉著不錯的運氣、以及強大的生存技巧逢凶化吉。在她看來，沒有什麼比面對未知的挑戰更令人刺激的事情了！\n\n『對於真正喜歡、熱愛的事情，不需要猶豫，馬上就去做吧！』`,
        [Locale.sc]: `贝里丝是一位经验丰富的旅行家，也是一位天生的向导。对未知充满好奇心的她，热衷于到世界各地探险，体验新奇的经验。她爬过陡峭如悬崖的高山，横越过危险四伏的沙漠，探索过漆黑神秘的洞窟，甚至在某个遥远的部落学习魔法，通过试炼，获得了「黑鹰」的称号。尽管有时候她会因为过于旺盛的好奇心，让自己遭遇危险，但是贝里丝总是能凭借着不错的运气、以及强大的生存技巧逢凶化吉。在她看来，没有什么比面对未知的挑战更令人刺激的事情了！\n\n『对于真正喜欢、热爱的事情，不需要犹豫，马上就去做吧！』`,
        [Locale.en]: `Bayliss is an experienced adventurer and born guide. With an inexhaustible curiosity for the unknown, she's keen to travel the world and experience all it has to offer. She's climbed steep precipices, crossed the deserts, and explored dark and mysterious caves. She's even studied the dark arts with distant tribes, and after passing their rites of initiation, received the nickname "Black Hawk". Though her curious nature sometimes puts her in danger, Bayliss always manages to get away thanks to her strong survival skills and a dash of good luck. In her opinion, nothing could be more exciting than facing the challenges of the unknown!\n\n"True passion waits for nobody, so jump right in!"`,
        [Locale.jp]: `べリスは経験豊富な旅人であり、生まれつきの案内人でもある。未知の物事に好奇心を抱く彼女は、世界のあちこちを冒険し、新鮮な体験を楽しんでいる。険しい崖を登り、危険な砂漠を越え、神秘的な洞窟を探検し、たどり着いた旅先でとある部族から魔法を学び、試練の末に「ブラック・イーグル」という称号を与えられたべリス。好奇心旺盛な性格が災いして危険な目に遭うこともあるが、運とサバイバルスキルを駆使して何とか切り抜けている。彼女曰く、未知の物事への挑戦ほどエキサイティングなものはないという。\n\n『本当に好きなことなら、ためらう必要なんてないよ。今すぐやろう！』`,
        [Locale.kr]: `베리스는 경험이 풍부한 여행가이자 타고난 길 안내자이기도 하다. 미지에 대한 강한 호기심을 지닌 그녀는 세계 곳곳을 탐험하며 신비로운 경험을 하는 일에 열중한다. 절벽처럼 가파른 산을 오르고 위험천만한 사막을 가르지르며 어두운 동굴을 탐험하기도 했다. 심지어 어느 부족에게서 마법을 배우고 시련을 통과하여 블랙호크라는 칭호를 얻기도 했다. 때로는 너무 왕성한 호기심으로 자신을 위험 속으로 내몰기도 하지만, 베리스는 늘 행운이 따랐으며 강력한 생존 기술까지 지니고 있었다. 베리스는 자신에게 있어 미지의 것에 도전하는 것만큼 자극적인 일은 없다고 생각한다.\n\n『진정으로 좋아하고 사랑하는 일이 있다면 망설일 필요 없이 당장 실천에 옮기라구!』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/08/09",
    essence: UnitEssence[UnitCode.bayliss],
    thumbnail: UnitEssence[UnitCode.bayliss],
    selection: UnitSelection[UnitCode.bayliss],
    clothes: UnitFullImage[UnitCode.bayliss],
    tagList: [],
    otherVersion: [],
    initHP: 4934.4,
    initATK: 713.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.bayliss],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}