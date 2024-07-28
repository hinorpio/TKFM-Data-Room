import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10083: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.sakuya][0],
        name: {
            [Locale.tc]: `恭喜中獎`,
            [Locale.sc]: `恭喜中奖`,
            [Locale.en]: `Prize Winner`,
            [Locale.jp]: `当選おめでとうございます`,
            [Locale.kr]: `당첨을 축하드립니다`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sakuya][1],
        name: {
            [Locale.tc]: `情趣用品測試員`,
            [Locale.sc]: `情趣用品测试员`,
            [Locale.en]: `Sex Toy Guinea Pig`,
            [Locale.jp]: `アダルトグッズの試験者`,
            [Locale.kr]: `성인용품 테스터`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sakuya][2],
        name: {
            [Locale.tc]: `相親相愛～員工慰勞大亂交`,
            [Locale.sc]: `相亲相爱～员工慰劳大乱交`,
            [Locale.en]: `Bonus = Orgy`,
            [Locale.jp]: `打ち上げ大乱交`,
            [Locale.kr]: `서로 아끼고 사랑하세요~ 위로의 대난교`
        },
    },
]
