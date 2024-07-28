import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10130: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.salina][0],
        name: {
            [Locale.tc]: `青梅竹馬的百合初體驗`,
            [Locale.sc]: `青梅竹马的百合初体验`,
            [Locale.en]: `Childhood Friends' First Tryst`,
            [Locale.jp]: `幼なじみの百合初体験`,
            [Locale.kr]: `죽마고우와 백합 첫경험`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.salina][1],
        name: {
            [Locale.tc]: `敗北者，處女喪失！`,
            [Locale.sc]: `败北者，处女丧失！`,
            [Locale.en]: `Virginity Lost!`,
            [Locale.jp]: `敗北者、処女を失う！`,
            [Locale.kr]: `패배자, 처녀 상실!`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.salina][2],
        name: {
            [Locale.tc]: `享受性愛吧，小莎！`,
            [Locale.sc]: `享受性爱吧，小莎！`,
            [Locale.en]: `Get Your Freak On, Little Sally!`,
            [Locale.jp]: `サリちゃん、セックスを楽しんで！`,
            [Locale.kr]: `섹스를 누려라, 셀리나!`
        },
    },
]
