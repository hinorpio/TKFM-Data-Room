import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10089: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.q_asina][0],
        name: {
            [Locale.tc]: `若隱若現的情調`,
            [Locale.sc]: `若隐若现的情调`,
            [Locale.en]: `Looking Forward`,
            [Locale.jp]: `見え隠れする感情`,
            [Locale.kr]: `아른거리는 감정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.q_asina][1],
        name: {
            [Locale.tc]: `偷情的織女`,
            [Locale.sc]: `偷情的织女`,
            [Locale.en]: `A Secret Tryst`,
            [Locale.jp]: `織姫の不倫`,
            [Locale.kr]: `직녀의 불륜`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.q_asina][2],
        name: {
            [Locale.tc]: `小裁縫的下剋上`,
            [Locale.sc]: `小裁缝的下克上`,
            [Locale.en]: `Double Trouble`,
            [Locale.jp]: `裁縫の下克上`,
            [Locale.kr]: `하극상`
        },
    },
]
