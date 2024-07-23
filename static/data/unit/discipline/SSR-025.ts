import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10060: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.hm_fiora][0],
        name: {
            [Locale.tc]: `祭典前的準備`,
            [Locale.sc]: `祭典前的准备`,
            [Locale.en]: `Preparations Before the Festival`,
            [Locale.jp]: `祭りの準備`,
            [Locale.kr]: `제전 준비`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.hm_fiora][1],
        name: {
            [Locale.tc]: `性神的祭司`,
            [Locale.sc]: `性神的祭司`,
            [Locale.en]: `Priest of the God of Sex`,
            [Locale.jp]: `セックスの神の祭司`,
            [Locale.kr]: `섹스의 신의 제사장`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.hm_fiora][2],
        name: {
            [Locale.tc]: `願性神護佑你`,
            [Locale.sc]: `愿性神护佑你`,
            [Locale.en]: `May the God of Sex Bless You`,
            [Locale.jp]: `セックスの神のご加護あれ`,
            [Locale.kr]: `신의 가호가 당신과 함께 하기를`
        },
    },
]
