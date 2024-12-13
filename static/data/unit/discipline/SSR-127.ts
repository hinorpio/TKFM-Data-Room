import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10156: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.x_baal][0],
        name: {
            [Locale.tc]: `觸手懲罰`,
            [Locale.sc]: `触手惩罚`,
            [Locale.en]: `Tentacle Punishment`,
            [Locale.jp]: `触手のお仕置き`,
            [Locale.kr]: `촉수 처벌`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_baal][1],
        name: {
            [Locale.tc]: `駕駛雪橇`,
            [Locale.sc]: `驾驶雪橇`,
            [Locale.en]: `Sled Driving`,
            [Locale.jp]: `ソリの操作`,
            [Locale.kr]: `썰매 운전`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_baal][2],
        name: {
            [Locale.tc]: `陷阱測試員`,
            [Locale.sc]: `陷阱测试员`,
            [Locale.en]: `Trap Tester`,
            [Locale.jp]: `罠のテスター`,
            [Locale.kr]: `함정 테스터`
        },
    },
]
