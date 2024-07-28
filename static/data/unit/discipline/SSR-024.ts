import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10058: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.fufu][0],
        name: {
            [Locale.tc]: `看不見的表情`,
            [Locale.sc]: `看不见的表情`,
            [Locale.en]: `Hidden Look`,
            [Locale.jp]: `見えない表情`,
            [Locale.kr]: `보이지 않는 표정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fufu][1],
        name: {
            [Locale.tc]: `月圓發情之夜`,
            [Locale.sc]: `月圆发情之夜`,
            [Locale.en]: `Horny Full-Moon Night`,
            [Locale.jp]: `満月の発情`,
            [Locale.kr]: `만월 발정의 밤`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fufu][2],
        name: {
            [Locale.tc]: `害羞個性治療方案`,
            [Locale.sc]: `害羞个性治疗方案`,
            [Locale.en]: `The Cure For Shyness`,
            [Locale.jp]: `内気改善クラス`,
            [Locale.kr]: `대인기피증 치료 프로젝트`
        },
    },
]
