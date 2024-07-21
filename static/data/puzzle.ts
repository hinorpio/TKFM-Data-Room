import { Puzzle } from '@/interface/puzzle';
import { Locale, PuzzleType, PuzzleCode } from '@/plugins/utils/enums';
import { PuzzlePreview, PuzzleImage } from '~/static/const';
const puzzles: Puzzle[] = [
    {
        code: PuzzleCode.EVENT_2021_SUMMER_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_SUMMER_1,
        name: {
            [Locale.tc]: "最刺激的水上活動",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2021_SUMMER_1,
    },
    {
        code: PuzzleCode.EVENT_2021_SUMMER_1_DMM,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_SUMMER_1_DMM,
        name: {
            [Locale.tc]: "最刺激的水上活動 (DMM)",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2021_SUMMER_1_DMM,
    },
    {
        code: PuzzleCode.EVENT_2021_SUMMER_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_SUMMER_2,
        name: {
            [Locale.tc]: "使自身化為甜點",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2021_SUMMER_2,
    },
    {
        code: PuzzleCode.EVENT_2021_SUMMER_3,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_SUMMER_3,
        name: {
            [Locale.tc]: "水用裝備測試",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2021_SUMMER_3,
    },
    {
        code: PuzzleCode.EVENT_2021_SUMMER_4,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_SUMMER_4,
        name: {
            [Locale.tc]: "布偶內的秘密",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2021_SUMMER_4,
    },
    {
        code: PuzzleCode.EVENT_2021_XMAS_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_XMAS_1,
        name: {
            [Locale.tc]: "遲來的性誕禮物",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2021_XMAS_1,
    },
    {
        code: PuzzleCode.EVENT_2021_XMAS_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_XMAS_2,
        name: {
            [Locale.tc]: "此乃魔王加冕之時",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2021_XMAS_2,
    },
    {
        code: PuzzleCode.EVENT_2022_SUMMER_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2022_SUMMER_1,
        name: {
            [Locale.tc]: "只屬於大小姐的約會",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2022_SUMMER_1,
    },
    {
        code: PuzzleCode.EVENT_2022_SUMMER_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2022_SUMMER_2,
        name: {
            [Locale.tc]: "創世雞",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2022_SUMMER_2,
    },
    {
        code: PuzzleCode.EVENT_2022_SUMMER_3,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2022_SUMMER_3,
        name: {
            [Locale.tc]: "泳裝偶像野外露出",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2022_SUMMER_3,
    },
    {
        code: PuzzleCode.EVENT_2022_SUMMER_4,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2022_SUMMER_4,
        name: {
            [Locale.tc]: "少女夢貘的奇幻漂流",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2022_SUMMER_4,
    },
    {
        code: PuzzleCode.EVENT_2022_XMAS_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2022_XMAS_1,
        name: {
            [Locale.tc]: "雪夜浴泉",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2022_XMAS_1,
    },
    {
        code: PuzzleCode.EVENT_2023_CNY_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_CNY_1,
        name: {
            [Locale.tc]: "魔王出巡。兔躍新程",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2023_CNY_1,
    },
    {
        code: PuzzleCode.EVENT_2023_SUMMER_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_SUMMER_1,
        name: {
            [Locale.tc]: "巴爾的悠哉時光",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2023_SUMMER_1,
    },
    {
        code: PuzzleCode.EVENT_2023_SUMMER_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_SUMMER_2,
        name: {
            [Locale.tc]: "凱薩屋的秘密配方",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2023_SUMMER_2,
    },
    {
        code: PuzzleCode.EVENT_2023_SUMMER_3,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_SUMMER_3,
        name: {
            [Locale.tc]: "觸可夢的訓練大師",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2023_SUMMER_3,
    },
    {
        code: PuzzleCode.EVENT_2023_SUMMER_4,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_SUMMER_4,
        name: {
            [Locale.tc]: "勇者的防曬措施",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2023_SUMMER_4,
    },
    {
        code: PuzzleCode.EVENT_2023_XMAS_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_XMAS_1,
        name: {
            [Locale.tc]: "匿名禮物",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2023_XMAS_1,
    },
    {
        code: PuzzleCode.EVENT_2023_XMAS_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_XMAS_2,
        name: {
            [Locale.tc]: "寧靜的聖誕夜",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2023_XMAS_2,
    },
    {
        code: PuzzleCode.EVENT_2024_SUMMER_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2024_SUMMER_1,
        name: {
            [Locale.tc]: "不大可靠的遊泳課程",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2024_SUMMER_1,
    },
    {
        code: PuzzleCode.EVENT_2024_SUMMER_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2024_SUMMER_2,
        name: {
            [Locale.tc]: "海灘必備色色事件",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2024_SUMMER_2,
    },
    {
        code: PuzzleCode.EVENT_2024_SUMMER_3,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2024_SUMMER_3,
        name: {
            [Locale.tc]: "沒有下半身妨礙思考",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2024_SUMMER_3,
    },
    {
        code: PuzzleCode.EVENT_2024_SUMMER_4,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2024_SUMMER_4,
        name: {
            [Locale.tc]: "海釣大師，職業是魔王",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.EVENT_2024_SUMMER_4,
    },
    {
        code: PuzzleCode.HUMAN_SARIA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_SARIA,
        name: {
            [Locale.tc]: "提前退休大作戰！",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_SARIA,
    },
    {
        code: PuzzleCode.HUMAN_PETRA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_PETRA,
        name: {
            [Locale.tc]: "抱歉了錢錢…！",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_PETRA,
    },
    {
        code: PuzzleCode.HUMAN_KIKYOU,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_KIKYOU,
        name: {
            [Locale.tc]: "絕對犬科時間",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_KIKYOU,
    },
    {
        code: PuzzleCode.HUMAN_KAEDE,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_KAEDE,
        name: {
            [Locale.tc]: "巫女專屬逗貓棒",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_KAEDE,
    },
    {
        code: PuzzleCode.HUMAN_OLA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_OLA,
        name: {
            [Locale.tc]: "理想的娠活",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_OLA,
    },
    {
        code: PuzzleCode.HUMAN_KANI,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_KANI,
        name: {
            [Locale.tc]: "巨魔的小玩具",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_KANI,
    },
    {
        code: PuzzleCode.HUMAN_CHARLENE,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_CHARLENE,
        name: {
            [Locale.tc]: "傭兵團的始末",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_CHARLENE,
    },
    {
        code: PuzzleCode.HUMAN_MARTINA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_MARTINA,
        name: {
            [Locale.tc]: "請不要…發現我…",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_MARTINA,
    },
    {
        code: PuzzleCode.HUMAN_CLARIE,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_CLARIE,
        name: {
            [Locale.tc]: "對著洞內懺悔吧",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_CLARIE,
    },
    {
        code: PuzzleCode.HUMAN_ANNA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_ANNA,
        name: {
            [Locale.tc]: "超出職權範圍的工作",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_ANNA,
    },
    {
        code: PuzzleCode.HUMAN_BLAIRE,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_BLAIRE,
        name: {
            [Locale.tc]: "敬業的兔女郎",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_BLAIRE,
    },
    {
        code: PuzzleCode.HUMAN_NATASHA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_NATASHA,
        name: {
            [Locale.tc]: "嘴上的抵抗",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.HUMAN_NATASHA,
    },
    {
        code: PuzzleCode.DEMON_FLAY,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_FLAY,
        name: {
            [Locale.tc]: "讓你嘗嘗何謂羞辱",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.DEMON_FLAY,
    },
    {
        code: PuzzleCode.DEMON_MANUELLA,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_MANUELLA,
        name: {
            [Locale.tc]: "人類也不過如此",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.DEMON_MANUELLA,
    },
    {
        code: PuzzleCode.DEMON_LORI,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_LORI,
        name: {
            [Locale.tc]: "史萊姆大量增生",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.DEMON_LORI,
    },
    {
        code: PuzzleCode.DEMON_MINNOW,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_MINNOW,
        name: {
            [Locale.tc]: "擠乳直播秀",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.DEMON_MINNOW,
    },
    {
        code: PuzzleCode.DEMON_LAMIA,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_LAMIA,
        name: {
            [Locale.tc]: "拉米亞的捕食",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.DEMON_LAMIA,
    },
    {
        code: PuzzleCode.DEMON_HARPY,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_HARPY,
        name: {
            [Locale.tc]: "飛不起來的哈比",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.DEMON_HARPY,
    },
    {
        code: PuzzleCode.DEMON_MAREYL,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_MAREYL,
        name: {
            [Locale.tc]: "面對面NTR",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.DEMON_MAREYL,
    },
    {
        code: PuzzleCode.DEMON_MUMU,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_MUMU,
        name: {
            [Locale.tc]: "獵食者與被獵食者",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.DEMON_MUMU,
    },
    {
        code: PuzzleCode.SKY_PUNISHMENT,
        type: PuzzleType.SKY,
        preview: PuzzlePreview.SKY_PUNISHMENT,
        name: {
            [Locale.tc]: "人類太可惡！",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.SKY_PUNISHMENT,
    },
    {
        code: PuzzleCode.SKY_BLISS,
        type: PuzzleType.SKY,
        preview: PuzzlePreview.SKY_BLISS,
        name: {
            [Locale.tc]: "天使的墮落",
            [Locale.sc]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.kr]: ''
        },
        fullImage: PuzzleImage.SKY_BLISS,
    },
]

export default puzzles;