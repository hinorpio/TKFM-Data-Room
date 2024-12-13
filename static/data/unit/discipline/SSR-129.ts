import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10158: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.x_britney][0],
        name: {
            [Locale.tc]: `軍師的妙計`,
            [Locale.sc]: `军师的妙计`,
            [Locale.en]: `A Strategist's Plan`,
            [Locale.jp]: `軍師の妙策`,
            [Locale.kr]: `군사의 계략`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_britney][1],
        name: {
            [Locale.tc]: `性誕壁尻驚喜`,
            [Locale.sc]: `性诞壁尻惊喜`,
            [Locale.en]: `Sexy "Wallpaper" Surprise`,
            [Locale.jp]: `壁尻サプライズ`,
            [Locale.kr]: `섹스마스 벽 서프라이즈`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_britney][2],
        name: {
            [Locale.tc]: `計策失敗`,
            [Locale.sc]: `计策失败`,
            [Locale.en]: `Strategy Failed`,
            [Locale.jp]: `作戦失敗`,
            [Locale.kr]: `계략 실패`
        },
    },
]
