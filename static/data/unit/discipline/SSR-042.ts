import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10019: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ayane][0],
        name: {
            [Locale.tc]: `性處理委員`,
            [Locale.sc]: `性处理委员`,
            [Locale.en]: `Study Buddy`,
            [Locale.jp]: `性処理委員会`,
            [Locale.kr]: `성욕 처리반 큰일이야`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ayane][1],
        name: {
            [Locale.tc]: `健康教育時間`,
            [Locale.sc]: `健康教育时间`,
            [Locale.en]: `Sex Ed`,
            [Locale.jp]: `保健の授業`,
            [Locale.kr]: `건강 교육 시간`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ayane][2],
        name: {
            [Locale.tc]: `食物的怨念`,
            [Locale.sc]: `食物的怨念`,
            [Locale.en]: `Picky Eater`,
            [Locale.jp]: `食べ物の怨念`,
            [Locale.kr]: `'먹을 것'에 대한 원념`
        },
    },
]
