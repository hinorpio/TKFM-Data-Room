import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10131: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.inase][0],
        name: {
            [Locale.tc]: `被史萊姆襲擊了？！`,
            [Locale.sc]: `被史莱姆袭击了？！`,
            [Locale.en]: `Am I being assaulted by slimes?!`,
            [Locale.jp]: `スライムに襲撃されたの！？`,
            [Locale.kr]: `슬라임의 습격?!`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.inase][1],
        name: {
            [Locale.tc]: `恥辱課堂`,
            [Locale.sc]: `耻辱课堂`,
            [Locale.en]: `Classroom Humiliation`,
            [Locale.jp]: `羞恥の授業`,
            [Locale.kr]: `수치심 수업`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.inase][2],
        name: {
            [Locale.tc]: `羞恥的回憶`,
            [Locale.sc]: `羞耻的回忆`,
            [Locale.en]: `Shameful Memories`,
            [Locale.jp]: `羞恥の記憶`,
            [Locale.kr]: `수치심의 추억`
        },
    },
]
