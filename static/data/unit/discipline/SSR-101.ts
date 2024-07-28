import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10022: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.noma][0],
        name: {
            [Locale.tc]: `狂犬的洗浴時間`,
            [Locale.sc]: `狂犬的洗浴时间`,
            [Locale.en]: `Crazed Dog's Shower Time`,
            [Locale.jp]: `狂犬の入浴タイム`,
            [Locale.kr]: `광견의 목욕시간`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.noma][1],
        name: {
            [Locale.tc]: `賭局的勝利者`,
            [Locale.sc]: `赌局的胜利者`,
            [Locale.en]: `Gambler's Reward`,
            [Locale.jp]: `賭けに勝つ者`,
            [Locale.kr]: `내기 승리자`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.noma][2],
        name: {
            [Locale.tc]: `幼犬屈服`,
            [Locale.sc]: `幼犬屈服`,
            [Locale.en]: `The Pup Surrenders`,
            [Locale.jp]: `子犬の屈服`,
            [Locale.kr]: `강아지 굴복`
        },
    },
]
