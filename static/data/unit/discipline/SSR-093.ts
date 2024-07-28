import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10125: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.h_ayane][0],
        name: {
            [Locale.tc]: `勇者的淫行紀錄（？`,
            [Locale.sc]: `勇者的淫行纪录（？`,
            [Locale.en]: `A Warrior's Sexcapades (?)`,
            [Locale.jp]: `勇者の淫行記録（？`,
            [Locale.kr]: `용자의 음탕 행위 기록(?)`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_ayane][1],
        name: {
            [Locale.tc]: `契約陷阱`,
            [Locale.sc]: `契约陷阱`,
            [Locale.en]: `Entrapped with Contract`,
            [Locale.jp]: `契約の罠`,
            [Locale.kr]: `계약의 함정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_ayane][2],
        name: {
            [Locale.tc]: `拯救糖果大作戰`,
            [Locale.sc]: `拯救糖果大作战`,
            [Locale.en]: `Candy Search & Rescue`,
            [Locale.jp]: `スイーツ救出大作戦`,
            [Locale.kr]: `사탕 구출 대작전`
        },
    },
]
