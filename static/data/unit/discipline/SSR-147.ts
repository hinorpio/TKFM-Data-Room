import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10160: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.bu_ayane][0],
        name: {
            [Locale.tc]: `強制破處`,
            [Locale.sc]: `强制破处`,
            [Locale.en]: `Forced Deflowering`,
            [Locale.jp]: `強制処女喪失`,
            [Locale.kr]: `강제 아다 뚫기`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.bu_ayane][1],
        name: {
            [Locale.tc]: `恢復體力的秘訣`,
            [Locale.sc]: `恢复体力的秘诀`,
            [Locale.en]: `Secret to Restoring Stamina`,
            [Locale.jp]: `体力回復の秘訣`,
            [Locale.kr]: `체력 회복의 비결`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.bu_ayane][2],
        name: {
            [Locale.tc]: `勇者征服秀`,
            [Locale.sc]: `勇者征服秀`,
            [Locale.en]: `Hero Conquest Show`,
            [Locale.jp]: `勇者征服`,
            [Locale.kr]: `용자 정복 쇼`
        },
    },
]
