import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10124: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.nyoro][0],
        name: {
            [Locale.tc]: `被魔王抓住了！`,
            [Locale.sc]: `被魔王抓住了！`,
            [Locale.en]: `Ah! Caught by an Archdemon!`,
            [Locale.jp]: `魔王につかまった！`,
            [Locale.kr]: `마왕에게 붙잡히고 말았어!`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.nyoro][1],
        name: {
            [Locale.tc]: `二度挑戰`,
            [Locale.sc]: `二度挑战`,
            [Locale.en]: `Second Challenge`,
            [Locale.jp]: `二度目の挑戦`,
            [Locale.kr]: `2차 도전`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.nyoro][2],
        name: {
            [Locale.tc]: `才沒有覺得舒服呢……`,
            [Locale.sc]: `才没有觉得舒服呢……`,
            [Locale.en]: `This totally doesn't feel good... Not at all...`,
            [Locale.jp]: `気持ちよくなんかない……`,
            [Locale.kr]: `기분 좋아진 거 아니거든...`
        },
    },
]
