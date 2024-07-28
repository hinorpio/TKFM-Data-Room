import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10091: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_noel][0],
        name: {
            [Locale.tc]: `海邊x舞台x插入小穴`,
            [Locale.sc]: `海边x舞台x插入小穴`,
            [Locale.en]: `BeachxStagexBang`,
            [Locale.jp]: `ビーチ×ステージ×挿入`,
            [Locale.kr]: `해변x무대x피스톤`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_noel][1],
        name: {
            [Locale.tc]: `夜晚的性侍奉`,
            [Locale.sc]: `夜晚的性侍奉`,
            [Locale.en]: `Nightly Serenade`,
            [Locale.jp]: `夜のご奉仕`,
            [Locale.kr]: `늦은 밤의 봉사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_noel][2],
        name: {
            [Locale.tc]: `偶像人偶性愛live`,
            [Locale.sc]: `偶像人偶性爱live`,
            [Locale.en]: `Live and In Person`,
            [Locale.jp]: `アイドル人形セックスLIVE`,
            [Locale.kr]: `아이돌 인형의 섹스 라이브`
        },
    },
]
