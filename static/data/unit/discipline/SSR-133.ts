import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10162: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.p_aiko][0],
        name: {
            [Locale.tc]: `儀式前的準備`,
            [Locale.sc]: `仪式前的准备`,
            [Locale.en]: `Pre-Ritual Preparations`,
            [Locale.jp]: `儀式前の準備`,
            [Locale.kr]: `의식 준비`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.p_aiko][1],
        name: {
            [Locale.tc]: `祈福之舞`,
            [Locale.sc]: `祈福之舞`,
            [Locale.en]: `Dance of Prayer`,
            [Locale.jp]: `祝福の舞`,
            [Locale.kr]: `기원의 춤사위`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.p_aiko][2],
        name: {
            [Locale.tc]: `拔除汙穢！`,
            [Locale.sc]: `拔除污秽！`,
            [Locale.en]: `Filth Be Gone!`,
            [Locale.jp]: `穢れの祓！`,
            [Locale.kr]: `정화!`
        },
    },
]
