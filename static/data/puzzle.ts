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
            [Locale.tc]: "最刺激的水上活動",
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
]

export default puzzles;