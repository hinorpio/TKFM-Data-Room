import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10026: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.noel][0],
        name: {
            [Locale.tc]: `登上絕頂的偶像`,
            [Locale.sc]: `登上绝顶的偶像`,
            [Locale.en]: `Be On the Top`,
            [Locale.jp]: `アイドルの頂点`,
            [Locale.kr]: `정상에 오른 아이돌`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.noel][1],
        name: {
            [Locale.tc]: `狹窄的更衣間`,
            [Locale.sc]: `狭窄的更衣间`,
            [Locale.en]: `Narrow Fitting Room`,
            [Locale.jp]: `狭い更衣室`,
            [Locale.kr]: `좁은 탈의실 안`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.noel][2],
        name: {
            [Locale.tc]: `偶像失格？`,
            [Locale.sc]: `偶像失格？`,
            [Locale.en]: `A Fallen Star`,
            [Locale.jp]: `アイドル失格？`,
            [Locale.kr]: `아이돌 실격?`
        },
    },
]
