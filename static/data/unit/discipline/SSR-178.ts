import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10207: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.se_noel][0],
        name: {
            [Locale.tc]: `【放送事故】偶像性愛直播實錄`,
            [Locale.sc]: `【放送事故】偶像性爱直播实录`,
            [Locale.en]: `[Stream Mishap] Live Idol Sex`,
            [Locale.jp]: `【放送事故】アイドルエロ実況実録`,
            [Locale.kr]: `【방송 사고】 아이돌 섹스 라이브 박제`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.se_noel][1],
        name: {
            [Locale.tc]: `【代班直播】新人小諾初配信`,
            [Locale.sc]: `【代班直播】新人小诺初配信`,
            [Locale.en]: `[Streamer Substitute] Lil Noe's Debut`,
            [Locale.jp]: `【代打ライブ】新人のんちゃんの初配信`,
            [Locale.kr]: `【대타 라이브】 신입 노리 방송`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.se_noel][2],
        name: {
            [Locale.tc]: `【經紀人限定】新衣裝專屬福利`,
            [Locale.sc]: `【经纪人限定】新衣装专属福利`,
            [Locale.en]: `[Manager Xclusive] New Outfit Reveal`,
            [Locale.jp]: `【マネージャー限定】新衣装の確定ファンサ`,
            [Locale.kr]: `【매니저 한정】 신규 코스튬 전용 서비스`
        },
    },
]
