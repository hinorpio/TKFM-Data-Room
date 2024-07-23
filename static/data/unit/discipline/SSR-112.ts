import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10142: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_chizuru][0],
        name: {
            [Locale.tc]: `沙灘侍寢`,
            [Locale.sc]: `沙滩侍寝`,
            [Locale.en]: `Beach Service`,
            [Locale.jp]: `ビーチで夜伽`,
            [Locale.kr]: `해변의 침실봉사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_chizuru][1],
        name: {
            [Locale.tc]: `殭屍公主的自慰教學`,
            [Locale.sc]: `僵尸公主的自慰教学`,
            [Locale.en]: `Undead Princess' Fingering Tutorial`,
            [Locale.jp]: `アンデッド姫のオナニー講座`,
            [Locale.kr]: `언데드 공주의 자위 강좌`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_chizuru][2],
        name: {
            [Locale.tc]: `突襲頒獎`,
            [Locale.sc]: `突袭颁奖`,
            [Locale.en]: `Assault Award`,
            [Locale.jp]: `突撃表彰`,
            [Locale.kr]: `돌격 포상`
        },
    },
]
