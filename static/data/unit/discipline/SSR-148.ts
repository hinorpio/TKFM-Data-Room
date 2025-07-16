import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10177: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.sky_nanami][0],
        name: {
            [Locale.tc]: `緩解疲勞的特殊服務`,
            [Locale.sc]: `缓解疲劳的特殊服务`,
            [Locale.en]: `VIP Soothing Service`,
            [Locale.jp]: `疲れを癒す特別サービス`,
            [Locale.kr]: `피로 해소를 위한 특별 서비스`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sky_nanami][1],
        name: {
            [Locale.tc]: `空服員的口交侍奉`,
            [Locale.sc]: `空服员的口交侍奉`,
            [Locale.en]: `In-Flight Oral Service`,
            [Locale.jp]: `CAのご奉仕フェラ`,
            [Locale.kr]: `승무원의 펠라 봉사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sky_nanami][2],
        name: {
            [Locale.tc]: `魔王的紓壓秘訣`,
            [Locale.sc]: `魔王的纾压秘诀`,
            [Locale.en]: `Demon's Stress-Relief`,
            [Locale.jp]: `魔王のストレス解消法`,
            [Locale.kr]: `마왕의 스트레스 해소법`
        },
    },
]
