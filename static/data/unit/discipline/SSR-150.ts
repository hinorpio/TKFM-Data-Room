import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10179: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.n_lulu][0],
        name: {
            [Locale.tc]: `小穴健檢`,
            [Locale.sc]: `小穴健检`,
            [Locale.en]: `Pussy Health Check`,
            [Locale.jp]: `アソコの健康診断`,
            [Locale.kr]: `보지 검사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.n_lulu][1],
        name: {
            [Locale.tc]: `專業舒緩療程`,
            [Locale.sc]: `专业舒缓疗程`,
            [Locale.en]: `Professional Soothing Treatment`,
            [Locale.jp]: `プロのリラクゼーション`,
            [Locale.kr]: `전문 스트레칭 코스`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.n_lulu][2],
        name: {
            [Locale.tc]: `絕症的治療手段`,
            [Locale.sc]: `绝症的治疗手段`,
            [Locale.en]: `Cure for a Terminal Condition`,
            [Locale.jp]: `不治の病の治療法`,
            [Locale.kr]: `불치병 치료법`
        },
    },
]
