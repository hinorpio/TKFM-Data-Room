import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10163: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ni_caesar][0],
        name: {
            [Locale.tc]: `色誘之術特訓`,
            [Locale.sc]: `色诱之术特训`,
            [Locale.en]: `Seduction Technique Training`,
            [Locale.jp]: `お色気の術の特訓`,
            [Locale.kr]: `유혹술 특훈`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ni_caesar][1],
        name: {
            [Locale.tc]: `審問抵抗特驗`,
            [Locale.sc]: `审问抵抗特验`,
            [Locale.en]: `Interrogation Resistance Test`,
            [Locale.jp]: `尋問抵抗訓練`,
            [Locale.kr]: `고문 저항 훈련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ni_caesar][2],
        name: {
            [Locale.tc]: `認主儀式`,
            [Locale.sc]: `认主仪式`,
            [Locale.en]: `Fealty Ritual`,
            [Locale.jp]: `ご主人様の認定式`,
            [Locale.kr]: `주군 의식`
        },
    },
]
