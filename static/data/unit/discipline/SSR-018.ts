import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10032: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_nana][0],
        name: {
            [Locale.tc]: `禁絕搭訕`,
            [Locale.sc]: `禁绝搭讪`,
            [Locale.en]: `Forbidden Lust`,
            [Locale.jp]: `禁断のナンパ`,
            [Locale.kr]: `헌팅 금지`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_nana][1],
        name: {
            [Locale.tc]: `浪漫(？)約會`,
            [Locale.sc]: `浪漫(？)约会`,
            [Locale.en]: `Romantic(?) Date`,
            [Locale.jp]: `ロマンチック（？）なデート`,
            [Locale.kr]: `로맨틱(?) 데이트`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_nana][2],
        name: {
            [Locale.tc]: `精液=貓草？！`,
            [Locale.sc]: `精液=猫草？！`,
            [Locale.en]: `Jizz = Catnip!?`,
            [Locale.jp]: `精液＝猫草！？`,
            [Locale.kr]: `정액＝캣잎?!`
        },
    },
]
