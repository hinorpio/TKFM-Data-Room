import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10140: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.lelya][0],
        name: {
            [Locale.tc]: `來自深淵的誘惑`,
            [Locale.sc]: `来自深渊的诱惑`,
            [Locale.en]: `Temptation from the Abyss`,
            [Locale.jp]: `深淵からの誘惑`,
            [Locale.kr]: `심연의 유혹으로부터`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lelya][1],
        name: {
            [Locale.tc]: `墮入瘋狂陷阱的小貓咪`,
            [Locale.sc]: `堕入疯狂陷阱的小猫咪`,
            [Locale.en]: `Kitten Fallen into Madness`,
            [Locale.jp]: `狂気の罠にかかった子猫ちゃん`,
            [Locale.kr]: `광기의 함정에 빠진 고양이`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lelya][2],
        name: {
            [Locale.tc]: `這才是世界的真理`,
            [Locale.sc]: `这才是世界的真理`,
            [Locale.en]: `Truth of the World`,
            [Locale.jp]: `これこそが世界の真理`,
            [Locale.kr]: `이것이 바로 세계의 진리`
        },
    },
]
