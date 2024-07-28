import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10003: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.iblis][0],
        name: {
            [Locale.tc]: `後庭開發`,
            [Locale.sc]: `后庭开发`,
            [Locale.en]: `The Back Door`,
            [Locale.jp]: `アナル開発`,
            [Locale.kr]: `항문 개발`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.iblis][1],
        name: {
            [Locale.tc]: `伊布力斯的侍寢`,
            [Locale.sc]: `伊布力斯的侍寝`,
            [Locale.en]: `Iblis the Concubine`,
            [Locale.jp]: `イブリースの夜伽`,
            [Locale.kr]: `이블리스와 동침`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.iblis][2],
        name: {
            [Locale.tc]: `菊穴奴隸伊布力斯`,
            [Locale.sc]: `菊穴奴隶伊布力斯`,
            [Locale.en]: `Iblis the Butt Slave`,
            [Locale.jp]: `ケツ穴奴隷イブリース`,
            [Locale.kr]: `항문 노예 이블리스`
        },
    },
]
