import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10008: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ks8][0],
        name: {
            [Locale.tc]: `執行侍寢任務`,
            [Locale.sc]: `执行侍寝任务`,
            [Locale.en]: `Concubinal Duties`,
            [Locale.jp]: `夜伽任務遂行`,
            [Locale.kr]: `섹스 미션 개시`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ks8][1],
        name: {
            [Locale.tc]: `情感模組`,
            [Locale.sc]: `情感模组`,
            [Locale.en]: `Emotion Module`,
            [Locale.jp]: `感情システム`,
            [Locale.kr]: `감정 모듈`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ks8][2],
        name: {
            [Locale.tc]: `人偶之心`,
            [Locale.sc]: `人偶之心`,
            [Locale.en]: `A Robot's Heart`,
            [Locale.jp]: `人形の心`,
            [Locale.kr]: `인형의 마음`
        },
    },
]
