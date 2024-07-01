import { Puzzle } from '@/interface/global/puzzle';
import { Locale, PuzzleType, PuzzleCode } from '@/plugins/utils/enums';
import { PuzzlePreview, PuzzleImage } from '@/static/data/ImageSrc';
const puzzles: Puzzle[] = [
    {
        code: PuzzleCode.EVENT_2023_CNY_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_CNY_1,
        name: {
            [Locale.zh]: "魔王出巡。兔躍新程",
            [Locale.cn]: null,
            [Locale.en]: null,
            [Locale.jp]: null,
            [Locale.ko]: null
        },
        fullImage: PuzzleImage.EVENT_2023_CNY_1,
    },
    {
        code: PuzzleCode.EVENT_2023_SUMMER_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_SUMMER_1,
        name: {
            [Locale.zh]: "巴爾的悠哉時光",
            [Locale.cn]: null,
            [Locale.en]: null,
            [Locale.jp]: null,
            [Locale.ko]: null
        },
        fullImage: PuzzleImage.EVENT_2023_SUMMER_1,
    },
]

export default puzzles;