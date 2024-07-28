import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10071: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.sasha][0],
        name: {
            [Locale.tc]: `強制辱侵`,
            [Locale.sc]: `强制辱侵`,
            [Locale.en]: `Forced Humiliation`,
            [Locale.jp]: `強制凌辱`,
            [Locale.kr]: `강제 모욕`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sasha][1],
        name: {
            [Locale.tc]: `讓凱薩師幫你改運`,
            [Locale.sc]: `让凯萨师帮你改运`,
            [Locale.en]: `Let Caesar Change Your Luck`,
            [Locale.jp]: `シーザーが運気を変える`,
            [Locale.kr]: `바뀌는 운세`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sasha][2],
        name: {
            [Locale.tc]: `賜予的幸福`,
            [Locale.sc]: `赐予的幸福`,
            [Locale.en]: `Gifted Happiness`,
            [Locale.jp]: `幸福の賜物`,
            [Locale.kr]: `주어진 행복`
        },
    },
]
