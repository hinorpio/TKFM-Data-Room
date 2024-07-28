import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10133: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.nanami][0],
        name: {
            [Locale.tc]: `夜晚的握手會`,
            [Locale.sc]: `夜晚的握手会`,
            [Locale.en]: `Late Night Meet`,
            [Locale.jp]: `夜の握手会`,
            [Locale.kr]: `밤의 악수회`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.nanami][1],
        name: {
            [Locale.tc]: `矛盾大對決`,
            [Locale.sc]: `矛盾大对决`,
            [Locale.en]: `The Grand Showdown`,
            [Locale.jp]: `ほこたて対決`,
            [Locale.kr]: `창과 방패의 대결`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.nanami][2],
        name: {
            [Locale.tc]: `少女偶像的解禁時間`,
            [Locale.sc]: `少女偶像的解禁时间`,
            [Locale.en]: `Little Idol Breaks Free`,
            [Locale.jp]: `少女アイドルの解禁タイム`,
            [Locale.kr]: `소녀 아이돌의 해금 시간`
        },
    },
]
