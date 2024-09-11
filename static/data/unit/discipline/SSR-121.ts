import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10150: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.r_ayane][0],
        name: {
            [Locale.tc]: `兔女郎的特殊服務`,
            [Locale.sc]: `兔女郎的特殊服务`,
            [Locale.en]: `Bunny Croupier VIP Service`,
            [Locale.jp]: `バニーガールの特殊サービス`,
            [Locale.kr]: `바니걸의 스페셜 서비스`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.r_ayane][1],
        name: {
            [Locale.tc]: `發情的兔女郎`,
            [Locale.sc]: `发情的兔女郎`,
            [Locale.en]: `Bunny Croupier's Estrus`,
            [Locale.jp]: `発情したバニーガール`,
            [Locale.kr]: `발정난 바니걸`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.r_ayane][2],
        name: {
            [Locale.tc]: `兔女郎的售後服務`,
            [Locale.sc]: `兔女郎的售后服务`,
            [Locale.en]: `Bunny Croupier's After-Sale Service`,
            [Locale.jp]: `バニーガールのアフターサービス`,
            [Locale.kr]: `바니걸의 애프터 서비스`
        },
    },
]
