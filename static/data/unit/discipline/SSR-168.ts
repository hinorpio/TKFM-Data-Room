import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10197: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.cos_yanko][0],
        name: {
            [Locale.tc]: `入境隨俗`,
            [Locale.sc]: `入境随俗`,
            [Locale.en]: `When in Rome...`,
            [Locale.jp]: `郷に入らば郷に従え`,
            [Locale.kr]: `로마에 가면 로마 법을 따르라`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.cos_yanko][1],
        name: {
            [Locale.tc]: `小泱的足底服務`,
            [Locale.sc]: `小泱的足底服务`,
            [Locale.en]: `NYanko's Foot Service`,
            [Locale.jp]: `ヤンコの足裏ご奉仕`,
            [Locale.kr]: `얀코의 풋잡 서비스`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.cos_yanko][2],
        name: {
            [Locale.tc]: `發情的母狐狸`,
            [Locale.sc]: `发情的母狐狸`,
            [Locale.en]: `The Vixen in Heat`,
            [Locale.jp]: `発情したメス狐`,
            [Locale.kr]: `발정 난 암여우`
        },
    },
]
