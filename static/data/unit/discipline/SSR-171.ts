import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10200: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.egypt_milae][0],
        name: {
            [Locale.tc]: `千年性器`,
            [Locale.sc]: `千年性器`,
            [Locale.en]: `Millennium Genitalia`,
            [Locale.jp]: `千年性器`,
            [Locale.kr]: `천년 자지`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.egypt_milae][1],
        name: {
            [Locale.tc]: `黑暗決鬥`,
            [Locale.sc]: `黑暗决斗`,
            [Locale.en]: `Shadow Duel`,
            [Locale.jp]: `暗黒のデュエル`,
            [Locale.kr]: `암흑의 듀얼`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.egypt_milae][2],
        name: {
            [Locale.tc]: `性愛神諭佈道`,
            [Locale.sc]: `性爱神谕布道`,
            [Locale.en]: `Sex Oracle's Sermon`,
            [Locale.jp]: `セックスの神の説法`,
            [Locale.kr]: `섹스 신 포교`
        },
    },
]
