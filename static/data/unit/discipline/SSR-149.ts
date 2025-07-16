import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10178: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.sky_baal][0],
        name: {
            [Locale.tc]: `最高標準的安全檢查`,
            [Locale.sc]: `最高标准的安全检查`,
            [Locale.en]: `Strictest Security Check`,
            [Locale.jp]: `最高水準のセキュリティチェック`,
            [Locale.kr]: `최고 수준의 보안 검색`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sky_baal][1],
        name: {
            [Locale.tc]: `性愛能量填充`,
            [Locale.sc]: `性爱能量填充`,
            [Locale.en]: `Lust Energies Charged`,
            [Locale.jp]: `セックスエネルギー充填`,
            [Locale.kr]: `섹스 에너지 보충`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sky_baal][2],
        name: {
            [Locale.tc]: `燃料灌注`,
            [Locale.sc]: `燃料灌注`,
            [Locale.en]: `Fuel Injection`,
            [Locale.jp]: `燃料注入`,
            [Locale.kr]: `연료 주입`
        },
    },
]
