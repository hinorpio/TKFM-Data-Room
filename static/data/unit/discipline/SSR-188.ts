import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10217: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.herschel][0],
        name: {
            [Locale.tc]: `倒轉壓制的初次體驗`,
            [Locale.sc]: `倒转压制的初次体验`,
            [Locale.en]: `First Time, Pinned Down`,
            [Locale.jp]: `逆転制圧の初体験`,
            [Locale.kr]: `역전 제압의 첫 경험`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.herschel][1],
        name: {
            [Locale.tc]: `偷聽可不是好興趣`,
            [Locale.sc]: `偷听可不是好兴趣`,
            [Locale.en]: `Eavesdropping Is a Bad Habit`,
            [Locale.jp]: `盗み聞きは良い趣味じゃない`,
            [Locale.kr]: `엿듣기는 악취미`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.herschel][2],
        name: {
            [Locale.tc]: `還沒有記取教訓`,
            [Locale.sc]: `还没有记取教训`,
            [Locale.en]: `Still Hasn't Learned Her Lesson`,
            [Locale.jp]: `まだ懲りてない`,
            [Locale.kr]: `아직 정신을 못 차렸어`
        },
    },
]
