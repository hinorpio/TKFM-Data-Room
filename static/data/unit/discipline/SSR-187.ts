import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10216: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.aramis][0],
        name: {
            [Locale.tc]: `另類的保養方法`,
            [Locale.sc]: `另类的保养方法`,
            [Locale.en]: `Alternative Maintenance`,
            [Locale.jp]: `変わったお手入れ法`,
            [Locale.kr]: `색다른 관리 방법`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.aramis][1],
        name: {
            [Locale.tc]: `與機械的親密接觸`,
            [Locale.sc]: `与机械的亲密接触`,
            [Locale.en]: `Intimate Contact with a Machine`,
            [Locale.jp]: `機械とのスキンシップ`,
            [Locale.kr]: `기계와의 친밀한 접촉`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.aramis][2],
        name: {
            [Locale.tc]: `槍枝保養服務`,
            [Locale.sc]: `枪枝保养服务`,
            [Locale.en]: `Gun Maintenance Service`,
            [Locale.jp]: `ライフルメンテサービス`,
            [Locale.kr]: `총기 정비 서비스`
        },
    },
]
