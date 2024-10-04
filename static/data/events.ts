import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';
const events: Event[][] = [
    [
        {
            code: '0151',
            type: EventType.POINT,
            startDate: '2024/10/02',
            endDate: '2024/10/16',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【萬聖大驚奇-復刻-】`,
                [Locale.sc]: `【万圣大惊奇-复刻-】`,
                [Locale.en]: `[Halloween Surprise -Comeback-]`,
                [Locale.jp]: `「ハロウィンのサプライズ-復刻-」`,
                [Locale.kr]: `【할로윈 서프라이즈-복각-】`
            },
            image: EventBanner.EVENT_0151,
            newUnit: []
        },
        {
            code: '0152',
            type: EventType.CHALLENGE,
            startDate: '2024/10/09',
            endDate: '2024/10/16',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【無盡搗蛋夜-復刻-】`,
                [Locale.sc]: `【无尽捣蛋夜-复刻-】`,
                [Locale.en]: `[Never-ending Trick -Comeback-]`,
                [Locale.jp]: `「ハロウィンフィーバー-復刻-」`,
                [Locale.kr]: `【무한의 트릭 나잇-복각-】`
            },
            image: EventBanner.EVENT_0152,
            newUnit: []
        },
    ],
    [
        {
            code: '0150',
            type: EventType.SPIRE,
            startDate: '2023/09/18',
            endDate: '2024/11/27',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第二十一季`,
                [Locale.sc]: `【魔狱塔】第二十一季`,
                [Locale.en]: `[The Demon Spire] Season 21`,
                [Locale.jp]: `「魔獄塔」第21シーズン`,
                [Locale.kr]: `【마옥탑】 제21시즌`
            },
            image: EventBanner.EVENT_0150,
            newUnit: []
        },
    ],
    [
        {
            code: '0148',
            type: EventType.POINT,
            startDate: '2024/09/11',
            endDate: '2024/10/12',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【本大爺娛樂城】`,
                [Locale.sc]: `【本大爷娱乐城】`,
                [Locale.en]: `[Master's Wonderland]`,
                [Locale.jp]: `「俺様のカジノ」`,
                [Locale.kr]: `【이 몸의 카지노】`
            },
            image: EventBanner.EVENT_0148,
            newUnit: [ UnitCode.amethystina, UnitCode.bg_ayane, UnitCode.bg_iblis ]
        },
        {
            code: '0149',
            type: EventType.CHALLENGE,
            startDate: '2024/09/25',
            endDate: '2024/10/12',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【星宿的指引】`,
                [Locale.sc]: `【星宿的指引】`,
                [Locale.en]: `[Cosmic Guidance]`,
                [Locale.jp]: `「星宿の導き」`,
                [Locale.kr]: `【별자리의 안내】`
            },
            image: EventBanner.EVENT_0149,
            newUnit: []
        },
    ],
    [
        {
            code: '0146',
            type: EventType.POINT,
            startDate: '2024/08/28',
            endDate: '2024/09/11',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【來自星空的妳-復刻-】`,
                [Locale.sc]: `【来自星空的妳-复刻-】`,
                [Locale.en]: `[From the Stars -Comeback-]`,
                [Locale.jp]: `「星から来たあなた-復刻-」`,
                [Locale.kr]: `【별에서 온 그녀-복각-】`
            },
            image: EventBanner.EVENT_0146,
            newUnit: []
        },
        {
            code: '0147',
            type: EventType.CHALLENGE,
            startDate: '2024/09/04',
            endDate: '2024/09/11',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【朋友與加班-復刻-】`,
                [Locale.sc]: `【朋友与加班-复刻-】`,
                [Locale.en]: `[Friends and Overtime -Comeback-]`,
                [Locale.jp]: `「友達と残業-復刻-」`,
                [Locale.kr]: `【친구와 야근-복각-】`
            },
            image: EventBanner.EVENT_0147,
            newUnit: []
        },
    ],
    [
        {
            code: '0144',
            type: EventType.POINT,
            startDate: '2024/08/14',
            endDate: '2024/09/04',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【妖狐與她的產地】`,
                [Locale.sc]: `【妖狐与她的产地】`,
                [Locale.en]: `[Fox & Her Homeland]`,
                [Locale.jp]: `「妖狐とその生息地」`,
                [Locale.kr]: `【요호와 그녀의 생식지】`
            },
            image: EventBanner.EVENT_0144,
            newUnit: [ UnitCode.beer_shizuka, UnitCode.tsubaki ]
        },
        {
            code: '0145',
            type: EventType.GUILDBOSS,
            startDate: '2024/08/21',
            endDate: '2024/09/04',
            color: EventTypeColor.GUILDBOSS,
            name: {
                [Locale.tc]: `【人妻系列】`,
                [Locale.sc]: `【人妻系列】`,
                [Locale.en]: `[Wife Series]`,
                [Locale.jp]: `「人妻シリーズ」`,
                [Locale.kr]: `【유부녀 시리즈】`
            },
            image: EventBanner.EVENT_0145,
            newUnit: []
        },
        {
            code: 'TIMERIFT_017',
            type: EventType.TIMERIFT,
            startDate: '2024/08/21',
            endDate: '2024/10/23',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第十七季`,
                [Locale.sc]: `【时之裂缝】第十七季`,
                [Locale.en]: `[Time Rift] Season 17`,
                [Locale.jp]: `「時空の裂け目」第17シーズン`,
                [Locale.kr]: `【시공간의 균열】 제17시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0143',
            type: EventType.POTENTIAL,
            startDate: '2024/07/31',
            endDate: '2023/08/14',
            color: EventTypeColor.POTENTIAL,
            name: {
                [Locale.tc]: `【魔王城夜未眠-復刻-】`,
                [Locale.sc]: `【魔王城无眠夜-复刻-】`,
                [Locale.en]: `[Sleepless Palace -Comeback-]`,
                [Locale.jp]: `「魔王城の眠らぬ夜-復刻-」`,
                [Locale.kr]: `【마왕성 잠 못 이루는 밤-복각-】`
            },
            image: EventBanner.EVENT_0143,
            newUnit: []
        },
    ],
    [
        {
            code: '0141',
            type: EventType.POINT,
            startDate: '2024/07/17',
            endDate: '2024/08/07',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【魔界飯】`,
                [Locale.sc]: `【魔界饭】`,
                [Locale.en]: `[Demon Rice]`,
                [Locale.jp]: `「魔界飯」`,
                [Locale.kr]: `【마계밥】`
            },
            image: EventBanner.EVENT_0141,
            newUnit: [ UnitCode.d_minayomi, UnitCode.oniyoiki ]
        },
        {
            code: '0142',
            type: EventType.CHALLENGE,
            startDate: '2024/07/24',
            endDate: '2024/08/07',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【修行之路】`,
                [Locale.sc]: `【修行之路】`,
                [Locale.en]: `[Disciple's Path]`,
                [Locale.jp]: `「修行の道」`,
                [Locale.kr]: `【수행의 길】`
            },
            image: EventBanner.EVENT_0142,
            newUnit: []
        },
    ],
    [
        {
            code: '0140',
            type: EventType.SPIRE,
            startDate: '2023/07/10',
            endDate: '2024/09/18',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第二十季`,
                [Locale.sc]: `【魔狱塔】第二十季`,
                [Locale.en]: `[The Demon Spire] Season 20`,
                [Locale.jp]: `「魔獄塔」第20シーズン`,
                [Locale.kr]: `【마옥탑】 제20시즌`
            },
            image: EventBanner.EVENT_0140,
            newUnit: []
        },
    ],
    [
        {
            code: '0138',
            type: EventType.POINT,
            startDate: '2024/07/03',
            endDate: '2024/07/17',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【向大洋進發-復刻-】`,
                [Locale.sc]: `【向大洋进发-复刻-】`,
                [Locale.en]: `[Sail Across the Ocean -Comeback-]`,
                [Locale.jp]: `「大海原へ進め！-復刻-」`,
                [Locale.kr]: `【대양을 향해 전진-복각-】`
            },
            image: EventBanner.EVENT_0138,
            newUnit: []
        },
        {
            code: '0139',
            type: EventType.CHALLENGE,
            startDate: '2024/07/10',
            endDate: '2024/07/17',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【海盜王的祕寶-復刻-】`,
                [Locale.sc]: `【海盗王的秘宝-复刻-】`,
                [Locale.en]: `[PirateKing's Treasure -Comeback-]`,
                [Locale.jp]: `「海賊王の秘宝-復刻-」`,
                [Locale.kr]: `【해적왕의 비보-복각-】`
            },
            image: EventBanner.EVENT_0139,
            newUnit: []
        },
        {
            code: 'TIMERIFT_016',
            type: EventType.TIMERIFT,
            startDate: '2024/07/03',
            endDate: '2024/08/21',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第十六季`,
                [Locale.sc]: `【时之裂缝】第十六季`,
                [Locale.en]: `[Time Rift] Season 16`,
                [Locale.jp]: `「時空の裂け目」第16シーズン`,
                [Locale.kr]: `【시공간의 균열】 제16시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0136',
            type: EventType.POINT,
            startDate: '2024/06/05',
            endDate: '2024/07/03',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【混亂的碧海狂潮！】`,
                [Locale.sc]: `【混乱的碧海狂潮！】`,
                [Locale.en]: `[Chaos in the Sea!]`,
                [Locale.jp]: `「混乱の青海原！」`,
                [Locale.kr]: `【혼란의 광조】`
            },
            image: EventBanner.EVENT_0136,
            newUnit: [ UnitCode.s_chizuru, UnitCode.s_salucia, UnitCode.s_caesar, UnitCode.s_satan ]
        },
        {
            code: '0137',
            type: EventType.CHALLENGE,
            startDate: '2024/06/19',
            endDate: '2024/07/03',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【乙姬的怒火】`,
                [Locale.sc]: `【乙姬的怒火】`,
                [Locale.en]: `[The Fury of Otohime]`,
                [Locale.jp]: `「乙姫の怒り」`,
                [Locale.kr]: `【오토히메의 분노】`
            },
            image: EventBanner.EVENT_0137,
            newUnit: []
        },
    ],
    [
        {
            code: '0134',
            type: EventType.EVOLVE,
            startDate: '2024/05/22',
            endDate: '2024/06/05',
            color: EventTypeColor.EVOLVE,
            name: {
                [Locale.tc]: `【魔族朋友-復刻-】`,
                [Locale.sc]: `【魔族朋友-复刻-】`,
                [Locale.en]: `[Demon Friends -Comeback-]`,
                [Locale.jp]: `「魔族の友達-復刻-」`,
                [Locale.kr]: `【마족 친구-복각-】`
            },
            image: EventBanner.EVENT_0134,
            newUnit: []
        },
        {
            code: '0135',
            type: EventType.SPIRE,
            startDate: '2023/05/22',
            endDate: '2024/07/10',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第十九季`,
                [Locale.sc]: `【魔狱塔】第十九季`,
                [Locale.en]: `[The Demon Spire] Season 19`,
                [Locale.jp]: `「魔獄塔」第19シーズン`,
                [Locale.kr]: `【마옥탑】 제19시즌`
            },
            image: EventBanner.EVENT_0135,
            newUnit: []
        },
    ],
    [
        {
            code: '0132',
            type: EventType.POINT,
            startDate: '2024/05/08',
            endDate: '2024/05/29',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【怪異村莊調查錄】`,
                [Locale.sc]: `【怪异村庄调查录】`,
                [Locale.en]: `[Bizarre Records]`,
                [Locale.jp]: `「奇妙な村の調査記録」`,
                [Locale.kr]: `【괴이한 마을 조사록】`
            },
            image: EventBanner.EVENT_0132,
            newUnit: [ UnitCode.lelya, UnitCode.a_nana ]
        },
        {
            code: '0133',
            type: EventType.GUILDBOSS,
            startDate: '2024/05/15',
            endDate: '2024/05/29',
            color: EventTypeColor.GUILDBOSS,
            name: {
                [Locale.tc]: `【Vkdgrz ri Wkh Vxsuhph Rqh】`,
                [Locale.sc]: `【Vkdgrz ri Wkh Vxsuhph Rqh】`,
                [Locale.en]: `[Vkdgrz ri Wkh Vxsuhph Rqh]`,
                [Locale.jp]: `「Vkdgrz ri Wkh Vxsuhph Rqh」`,
                [Locale.kr]: `【Vkdgrz ri Wkh Vxsuhph Rqh】`
            },
            image: EventBanner.EVENT_0133,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_015',
            type: EventType.TIMERIFT,
            startDate: '2024/05/01',
            endDate: '2024/07/03',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第十五季`,
                [Locale.sc]: `【时之裂缝】第十五季`,
                [Locale.en]: `[Time Rift] Season 15`,
                [Locale.jp]: `「時空の裂け目」第15シーズン`,
                [Locale.kr]: `【시공간의 균열】 제15시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0130',
            type: EventType.POINT,
            startDate: '2024/04/24',
            endDate: '2024/05/08',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【傳說中的魔法少女-復刻-】`,
                [Locale.sc]: `【传说中的魔法少女-复刻-】`,
                [Locale.en]: `[Legendary Magical Maiden -Comeback-]`,
                [Locale.jp]: `「伝説の魔法少女-復刻-」`,
                [Locale.kr]: `【전설의 마법소녀-복각-】`
            },
            image: EventBanner.EVENT_0130,
            newUnit: []
        },
        {
            code: '0131',
            type: EventType.CHALLENGE,
            startDate: '2024/05/01',
            endDate: '2024/05/08',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【正義、智謀與魔杖-復刻-】`,
                [Locale.sc]: `【正义、智谋与魔杖-复刻-】`,
                [Locale.en]: `[Wise Wand & Justice -Comeback-]`,
                [Locale.jp]: `「正義・知謀・魔法の杖-復刻-」`,
                [Locale.kr]: `【정의, 지략, 마법봉-복각-】`
            },
            image: EventBanner.EVENT_0131,
            newUnit: []
        },
    ],
    [
        {
            code: '0127',
            type: EventType.POINT,
            startDate: '2024/04/02',
            endDate: '2024/04/24',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【露露想要開派對】`,
                [Locale.sc]: `【露露想要开派对】`,
                [Locale.en]: `[Lulu Wants a Party]`,
                [Locale.jp]: `「ルルのパーティー計画」`,
                [Locale.kr]: `【루루는 파티를 열고 싶어】`
            },
            image: EventBanner.EVENT_0127,
            newUnit: [ UnitCode.p_lulu, UnitCode.p_tyrella ]
        },
        {
            code: '0128',
            type: EventType.CHALLENGE,
            startDate: '2024/04/17',
            endDate: '2024/04/24',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【後宮們的睡衣枕頭戰】`,
                [Locale.sc]: `【后宫们的睡衣枕头战】`,
                [Locale.en]: `[Harem's Pillow Fight]`,
                [Locale.jp]: `「後宮枕投げバトル」`,
                [Locale.kr]: `【후궁들의 파자마 베개 싸움】`
            },
            image: EventBanner.EVENT_0128,
            newUnit: []
        },
        {
            code: '0129',
            type: EventType.SPIRE,
            startDate: '2023/04/03',
            endDate: '2024/05/22',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第十八季`,
                [Locale.sc]: `【魔狱塔】第十八季`,
                [Locale.en]: `[The Demon Spire] Season 18`,
                [Locale.jp]: `「魔獄塔」第18シーズン`,
                [Locale.kr]: `【마옥탑】 제18시즌`
            },
            image: EventBanner.EVENT_0129,
            newUnit: []
        },
    ],
    [
        {
            code: '0126',
            type: EventType.DISCIPLINE,
            startDate: '2024/03/20',
            endDate: '2024/04/02',
            color: EventTypeColor.DISCIPLINE,
            name: {
                [Locale.tc]: `【女僕&魔法-復刻-】`,
                [Locale.sc]: `【女仆&魔法-复刻-】`,
                [Locale.en]: `[Magic & Maids -Comeback-]`,
                [Locale.jp]: `「メイド&マジック-復刻-」`,
                [Locale.kr]: `【메이드&마법-복각-】`
            },
            image: EventBanner.EVENT_0126,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_014',
            type: EventType.TIMERIFT,
            startDate: '2024/03/13',
            endDate: '2024/05/01',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第十四季`,
                [Locale.sc]: `【时之裂缝】第十四季`,
                [Locale.en]: `[Time Rift] Season 14`,
                [Locale.jp]: `「時空の裂け目」第14シーズン`,
                [Locale.kr]: `【시공간의 균열】 제14시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0124',
            type: EventType.POINT,
            startDate: '2024/03/06',
            endDate: '2024/03/27',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【獸耳鄉的傳說】`,
                [Locale.sc]: `【兽耳乡的传说】`,
                [Locale.en]: `[Kemomimi Legends]`,
                [Locale.jp]: `「ケモミミ郷の伝説」`,
                [Locale.kr]: `【케모미미촌의 전설】`
            },
            image: EventBanner.EVENT_0124,
            newUnit: [ UnitCode.angelina, UnitCode.w_lillane ]
        },
        {
            code: '0125',
            type: EventType.CHALLENGE,
            startDate: '2024/03/20',
            endDate: '2024/03/27',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【古墓的詛咒】`,
                [Locale.sc]: `【古墓的诅咒】`,
                [Locale.en]: `[Ancient Tomb Curse]`,
                [Locale.jp]: `「古墳の呪い」`,
                [Locale.kr]: `【고묘의 저주】`
            },
            image: EventBanner.EVENT_0125,
            newUnit: []
        },
    ],
    [
        {
            code: '0123',
            type: EventType.POTENTIAL,
            startDate: '2024/02/21',
            endDate: '2024/03/06',
            color: EventTypeColor.POTENTIAL,
            name: {
                [Locale.tc]: `【悠閒無事的本大爺凱薩邊境城鎮成為冒險者展開緊張刺激大冒險-復刻-】`,
                [Locale.sc]: `【悠闲无事的本大爷凯萨边境城镇成为冒险者展开紧张刺激大冒险-复刻-】`,
                [Locale.en]: `[Caesar's bored... so he joins the Adventurer's Guild! -Comeback-]`,
                [Locale.jp]: `「暇で死にそうな俺様シーザー 辺境の村で冒険者になって 刺激満載の大冒險に出かけるとしよう-復刻-」`,
                [Locale.kr]: `【무료함을 느끼던 이 몸께서 변경 지대의 모험가가 되어 펼쳐나가는 스펙터클 어드벤처-복각-】`
            },
            image: EventBanner.EVENT_0123,
            newUnit: []
        },
    ],
    [
        {
            code: '0119',
            type: EventType.POINT,
            startDate: '2024/02/05',
            endDate: '2024/02/28',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【Automaton's Dream！】`,
                [Locale.sc]: `【Automaton's Dream！】`,
                [Locale.en]: `[Automaton's Dream！]`,
                [Locale.jp]: `「Automaton's Dream！」`,
                [Locale.kr]: `【Automaton's Dream！】`
            },
            image: EventBanner.EVENT_0119,
            newUnit: [ UnitCode.nanami, UnitCode.w_noel, UnitCode.w_mesmiia ]
        },
        {
            code: '0120',
            type: EventType.CHALLENGE,
            startDate: '2024/02/14',
            endDate: '2024/02/28',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【星光璀璨☆超級偶像大對決～♪】`,
                [Locale.sc]: `【星光璀璨☆超级偶像大对决～♪】`,
                [Locale.en]: `[Streaming with the Stars☆Idol Showdown~♪]`,
                [Locale.jp]: `「キラキラ☆スーパーアイドル対決」`,
                [Locale.kr]: `【반짝이는 별☆슈퍼아이돌 대결】`
            },
            image: EventBanner.EVENT_0120,
            newUnit: []
        },
        {
            code: '0121',
            type: EventType.SPECIAL,
            startDate: '2024/02/05',
            endDate: '2024/02/28',
            color: EventTypeColor.SPECIAL,
            name: {
                [Locale.tc]: `【啪啪偶像祭】`,
                [Locale.sc]: `【啪啪偶像祭】`,
                [Locale.en]: `[Bang Bang Idol Fest]`,
                [Locale.jp]: `「パンパンアイドルフェス」`,
                [Locale.kr]: `【두근두근 아이돌제】`
            },
            image: EventBanner.EVENT_0121,
            newUnit: []
        },
        {
            code: '0122',
            type: EventType.SPIRE,
            startDate: '2023/02/07',
            endDate: '2024/04/03',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第十七季`,
                [Locale.sc]: `【魔狱塔】第十七季`,
                [Locale.en]: `[The Demon Spire] Season 17`,
                [Locale.jp]: `「魔獄塔」第17シーズン`,
                [Locale.kr]: `【마옥탑】 제17시즌`
            },
            image: EventBanner.EVENT_0122,
            newUnit: []
        },
    ],
    [
        {
            code: '0117',
            type: EventType.POINT,
            startDate: '2024/01/17',
            endDate: '2024/02/05',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【獵犬小隊派遣中！】`,
                [Locale.sc]: `【猎犬小队派遣中！】`,
                [Locale.en]: `[Hunters Dispatched!]`,
                [Locale.jp]: `「ハウンド小隊派遣中！」`,
                [Locale.kr]: `【하운드 소대 파견 중!】`
            },
            image: EventBanner.EVENT_0117,
            newUnit: [ UnitCode.noma, UnitCode.belladonna ]
        },
        {
            code: '0118',
            type: EventType.CHALLENGE,
            startDate: '2024/01/31',
            endDate: '2024/02/05',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【槍炮、刺刀&獵犬】`,
                [Locale.sc]: `【枪炮、刺刀&猎犬】`,
                [Locale.en]: `[Ｗeapons & Hounds]`,
                [Locale.jp]: `「銃砲、銃剣&ハウンド」`,
                [Locale.kr]: `【총포, 총검&하운드】`
            },
            image: EventBanner.EVENT_0118,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_013',
            type: EventType.TIMERIFT,
            startDate: '2024/01/03',
            endDate: '2024/03/13',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第十三季`,
                [Locale.sc]: `【时之裂缝】第十三季`,
                [Locale.en]: `[Time Rift] Season 13`,
                [Locale.jp]: `「時空の裂け目」第13シーズン`,
                [Locale.kr]: `【시공간의 균열】 제13시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0116',
            type: EventType.POINT,
            startDate: '2023/12/13',
            endDate: '2024/01/17',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【聖誕之約】`,
                [Locale.sc]: `【圣诞之约】`,
                [Locale.en]: `[Christmas Vow]`,
                [Locale.jp]: `「クリスマスの約束」`,
                [Locale.kr]: `【크리스마스 약속】`
            },
            image: EventBanner.EVENT_0116,
            newUnit: [ UnitCode.x_aridya, UnitCode.x_iblis, UnitCode.w_evie, UnitCode.salina ]
        },
    ],
    [
        {
            code: '0115',
            type: EventType.EVOLVE,
            startDate: '2023/11/29',
            endDate: '2023/12/13',
            color: EventTypeColor.EVOLVE,
            name: {
                [Locale.tc]: `【龍「玉」之謎-復刻-】`,
                [Locale.sc]: `【龙「玉」之谜-复刻-】`,
                [Locale.en]: `[Last of the Silver Dragons -Comeback-]`,
                [Locale.jp]: `「ドラゴン玉の謎」-復刻-`,
                [Locale.kr]: `【드레곤볼의 비밀】-복각-`
            },
            image: EventBanner.EVENT_0115,
            newUnit: []
        },
        {
            code: '0114',
            type: EventType.SPIRE,
            startDate: '2023/11/29',
            endDate: '2024/02/07',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第十六季`,
                [Locale.sc]: `【魔狱塔】第十六季`,
                [Locale.en]: `[The Demon Spire] Season 16`,
                [Locale.jp]: `「魔獄塔」第16シーズン`,
                [Locale.kr]: `【마옥탑】 제16시즌`
            },
            image: EventBanner.EVENT_0114,
            newUnit: []
        },
    ],
    [
        {
            code: '0112',
            type: EventType.POINT,
            startDate: '2023/11/15',
            endDate: '2023/12/06',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【慾神降臨 異界幻想】`,
                [Locale.sc]: `【欲神降临 异界幻想】`,
                [Locale.en]: `[Rise of Eros]`,
                [Locale.jp]: `「エロスの降臨 異世界幻想」`,
                [Locale.kr]: `【원욕의 신 강림】`
            },
            image: EventBanner.EVENT_0112,
            newUnit: [ UnitCode.inase, UnitCode.cartilla ]
        },
        {
            code: '0113',
            type: EventType.CHALLENGE,
            startDate: '2023/11/22',
            endDate: '2023/12/06',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【黑夜倩影】`,
                [Locale.sc]: `【黑夜倩影】`,
                [Locale.en]: `[Femme Nocturne]`,
                [Locale.jp]: `「闇夜の妖艶」`,
                [Locale.kr]: `【어두운 밤】`
            },
            image: EventBanner.EVENT_0113,
            newUnit: []
        },
    ],
    [
        {
            code: '0111',
            type: EventType.DISCIPLINE,
            startDate: '2023/11/01',
            endDate: '2023/11/15',
            color: EventTypeColor.DISCIPLINE,
            name: {
                [Locale.tc]: `【極樂狂宴-復刻-】`,
                [Locale.sc]: `【极乐狂宴-复刻-】`,
                [Locale.en]: `[Blissful Madness -Comeback-]`,
                [Locale.jp]: `「極楽の宴-復刻-」`,
                [Locale.kr]: `【극락의 향연-복각-】`
            },
            image: EventBanner.EVENT_0111,
            newUnit: []
        },
        {
            code: 'TIMERIFT_012',
            type: EventType.TIMERIFT,
            startDate: '2023/11/01',
            endDate: '2024/01/03',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第十二季`,
                [Locale.sc]: `【时之裂缝】第十二季`,
                [Locale.en]: `[Time Rift] Season 12`,
                [Locale.jp]: `「時空の裂け目」第12シーズン`,
                [Locale.kr]: `【시공간의 균열】 제12시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0109',
            type: EventType.POINT,
            startDate: '2023/10/18',
            endDate: '2023/11/08',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【萬聖鹿娘大橫行！】`,
                [Locale.sc]: `【万圣鹿娘大横行！】`,
                [Locale.en]: `[HW Deer Gal Cometh!]`,
                [Locale.jp]: `「ハロウィン鹿娘大暴走！」`,
                [Locale.kr]: `【할로윈 순록의 대횡포!】`
            },
            image: EventBanner.EVENT_0109,
            newUnit: [ UnitCode.h_ayane, UnitCode.h_shiro ]
        },
        {
            code: '0110',
            type: EventType.GUILDBOSS,
            startDate: '2023/10/25',
            endDate: '2023/11/08',
            color: EventTypeColor.GUILDBOSS,
            name: {
                [Locale.tc]: `【萬聖闖關城】`,
                [Locale.sc]: `【万圣闯关城】`,
                [Locale.en]: `[Evil Spirits' Palace Break-In]`,
                [Locale.jp]: `「ハロウィンクエスト城」`,
                [Locale.kr]: `【할로윈 성 돌파】`
            },
            image: EventBanner.EVENT_0110,
            newUnit: []
        },
    ],
    [
        {
            code: '0107',
            type: EventType.POTENTIAL,
            startDate: '2023/10/04',
            endDate: '2023/10/18',
            color: EventTypeColor.POTENTIAL,
            name: {
                [Locale.tc]: `【疾速奔馳！人馬娘！-復刻-】`,
                [Locale.sc]: `【疾速奔驰！人马娘！-复刻-】`,
                [Locale.en]: `[Dashing Centaur! -Comeback-]`,
                [Locale.jp]: `「走れ！ケンタウロス娘！-復刻-」`,
                [Locale.kr]: `【질주해라 켄타우로스 소녀!-복각-】`
            },
            image: EventBanner.EVENT_0107,
            newUnit: []
        },
    ],
    [
        {
            code: '0108',
            type: EventType.SPIRE,
            startDate: '2023/09/27',
            endDate: '2023/11/29',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第十五季`,
                [Locale.sc]: `【魔狱塔】第十五季`,
                [Locale.en]: `[The Demon Spire] Season 15`,
                [Locale.jp]: `「魔獄塔」第15シーズン`,
                [Locale.kr]: `【마옥탑】 제15시즌`
            },
            image: EventBanner.EVENT_0108,
            newUnit: []
        },
    ],
    [
        {
            code: '0105',
            type: EventType.POINT,
            startDate: '2023/09/13',
            endDate: '2023/10/11',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【遊戲夜驚魂】`,
                [Locale.sc]: `【游戏夜惊魂】`,
                [Locale.en]: `[Game Night of Panic]`,
                [Locale.jp]: `「ゲームナイトパニック」`,
                [Locale.kr]: `【게임 나이트 오브 소울】`
            },
            image: EventBanner.EVENT_0105,
            newUnit: [ UnitCode.a_usagihime, UnitCode.d_miru, UnitCode.nyoro ]
        },
        {
            code: '0106',
            type: EventType.CHALLENGE,
            startDate: '2023/09/27',
            endDate: '2023/10/11',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【Vtuber】`,
                [Locale.sc]: `【Vtuber】`,
                [Locale.en]: `[Vtuber]`,
                [Locale.jp]: `「Vtuber」`,
                [Locale.kr]: `【Vtuber】`
            },
            image: EventBanner.EVENT_0106,
            newUnit: []
        },
    ],
    [
        {
            code: '0103',
            type: EventType.POINT,
            startDate: '2023/08/30',
            endDate: '2023/09/13',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【裁縫的大搜查線-復刻-】`,
                [Locale.sc]: `【裁缝的大搜查线-复刻-】`,
                [Locale.en]: `[Tailors' Investigation -Comeback-]`,
                [Locale.jp]: `「裁縫大捜査線-復刻-」`,
                [Locale.kr]: `【재봉의 대수사선-복각-】`
            },
            image: EventBanner.EVENT_0103,
            newUnit: []
        },
        {
            code: '0104',
            type: EventType.CHALLENGE,
            startDate: '2023/09/06',
            endDate: '2023/09/13',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【祈願的復仇者-復刻-】`,
                [Locale.sc]: `【祈愿的复仇者-复刻-】`,
                [Locale.en]: `[Wishing Avenger -Comeback-]`,
                [Locale.jp]: `「祈りの復讐者-復刻-」`,
                [Locale.kr]: `【기도하는 어벤저-복각-】`
            },
            image: EventBanner.EVENT_0104,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_011',
            type: EventType.TIMERIFT,
            startDate: '2023/08/23',
            endDate: '2023/11/01',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第十一季`,
                [Locale.sc]: `【时之裂缝】第十一季`,
                [Locale.en]: `[Time Rift] Season 11`,
                [Locale.jp]: `「時空の裂け目」第11シーズン`,
                [Locale.kr]: `【시공간의 균열】 제11시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0101',
            type: EventType.POINT,
            startDate: '2023/08/09',
            endDate: '2023/08/30',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【Biadlo IX 魔影再臨】`,
                [Locale.sc]: `【Biadlo IX 魔影再临】`,
                [Locale.en]: `[Biadlo IX Shadow Returns]`,
                [Locale.jp]: `「Biadlo IX 魔影再臨」`,
                [Locale.kr]: `【Biadlo IX 악마의 그림자 재림】`
            },
            image: EventBanner.EVENT_0101,
            newUnit: [ UnitCode.sasha, UnitCode.bayliss ]
        },
        {
            code: '0102',
            type: EventType.CHALLENGE,
            startDate: '2023/08/16',
            endDate: '2023/08/30',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【Biadlo IX 毀滅之偶】`,
                [Locale.sc]: `【Biadlo IX 毁灭之偶】`,
                [Locale.en]: `[Biadlo IX Puppet of Destruction]`,
                [Locale.jp]: `「Biadlo IX 破滅の偶像」`,
                [Locale.kr]: `【Biadlo IX 파멸의 우상】`
            },
            image: EventBanner.EVENT_0102,
            newUnit: []
        },
    ],
    [
        {
            code: '0100',
            type: EventType.DISCIPLINE,
            startDate: '2023/07/26',
            endDate: '2023/08/09',
            color: EventTypeColor.DISCIPLINE,
            name: {
                [Locale.tc]: `【魔法少女☆托特拉-復刻-】`,
                [Locale.sc]: `【魔法少女☆托特拉-复刻-】`,
                [Locale.en]: `[Knight ☆ Tyrella -Comeback-]`,
                [Locale.jp]: `「魔法少女☆トトラ-復刻-」`,
                [Locale.kr]: `【마법소녀☆토타라-복각-】`
            },
            image: EventBanner.EVENT_0100,
            newUnit: []
        },
    ],
    [
        {
            code: '0097',
            type: EventType.POINT,
            startDate: '2023/07/12',
            endDate: '2023/08/02',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【向大洋進發】`,
                [Locale.sc]: `【向大洋进发】`,
                [Locale.en]: `[Sail Across the Ocean]`,
                [Locale.jp]: `「大海原へ進め！」`,
                [Locale.kr]: `【대양을 향해 전진】`
            },
            image: EventBanner.EVENT_0097,
            newUnit: [ UnitCode.o_lana, UnitCode.o_nana ]
        },
        {
            code: '0098',
            type: EventType.CHALLENGE,
            startDate: '2023/07/19',
            endDate: '2023/08/02',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【海盜王的祕寶】`,
                [Locale.sc]: `【海盗王的秘宝】`,
                [Locale.en]: `[PirateKing's Treasure]`,
                [Locale.jp]: `「海賊王の秘宝」`,
                [Locale.kr]: `【해적왕의 비보】`
            },
            image: EventBanner.EVENT_0098,
            newUnit: []
        },
        {
            code: '0099',
            type: EventType.SPIRE,
            startDate: '2023/07/12',
            endDate: '2023/09/27',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第十四季`,
                [Locale.sc]: `【魔狱塔】第十四季`,
                [Locale.en]: `[The Demon Spire] Season 14`,
                [Locale.jp]: `「魔獄塔」第14シーズン`,
                [Locale.kr]: `【마옥탑】 제14시즌`
            },
            image: EventBanner.EVENT_0099,
            newUnit: []
        },
    ],
    [
        {
            code: '0096',
            type: EventType.EVOLVE,
            startDate: '2023/06/28',
            endDate: '2023/07/12',
            color: EventTypeColor.EVOLVE,
            name: {
                [Locale.tc]: `【外傳：世界終結之日-復刻-】`,
                [Locale.sc]: `【外传：世界终结之日-复刻-】`,
                [Locale.en]: `[The Apocalypse -Comeback-]`,
                [Locale.jp]: `「外伝：世界終末の日-復刻-」`,
                [Locale.kr]: `【외전: 세계 종말의 날-복각-】`
            },
            image: EventBanner.EVENT_0096,
            newUnit: []
        },
    ],
    [
        {
            code: '0094',
            type: EventType.POINT,
            startDate: '2023/06/07',
            endDate: '2023/07/05',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【泳裝賽艇大作戰】`,
                [Locale.sc]: `【泳装赛艇大作战】`,
                [Locale.en]: `[Swimsuits & Rowing]`,
                [Locale.jp]: `「水着競艇大作戦」`,
                [Locale.kr]: `【수영복 카누 대작전】`
            },
            image: EventBanner.EVENT_0094,
            newUnit: [ UnitCode.s_ayane, UnitCode.s_baal, UnitCode.s_fiora, UnitCode.s_aiko ]
        },
        {
            code: '0095',
            type: EventType.CHALLENGE,
            startDate: '2023/06/21',
            endDate: '2023/07/05',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【喬許の野望】`,
                [Locale.sc]: `【乔许の野望】`,
                [Locale.en]: `[Josh's Wild Dream]`,
                [Locale.jp]: `「ジョシュの野望」`,
                [Locale.kr]: `【죠쉬의 야망】`
            },
            image: EventBanner.EVENT_0095,
            newUnit: []
        },
    ],
    [
        {
            code: '0093',
            type: EventType.POTENTIAL,
            startDate: '2023/05/24',
            endDate: '2023/06/07',
            color: EventTypeColor.POTENTIAL,
            name: {
                [Locale.tc]: `【魔王城夜未眠-復刻-】`,
                [Locale.sc]: `【魔王城无眠夜-复刻-】`,
                [Locale.en]: `[Sleepless Palace -Comeback-]`,
                [Locale.jp]: `「魔王城の眠らぬ夜-復刻-」`,
                [Locale.kr]: `【마왕성 잠 못 이루는 밤-복각-】`
            },
            image: EventBanner.EVENT_0093,
            newUnit: []
        },
        {
            code: 'TIMERIFT_010',
            type: EventType.TIMERIFT,
            startDate: '2023/05/24',
            endDate: '2023/08/23',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第十季`,
                [Locale.sc]: `【时之裂缝】第十季`,
                [Locale.en]: `[Time Rift] Season 10`,
                [Locale.jp]: `「時空の裂け目」第10シーズン`,
                [Locale.kr]: `【시공간의 균열】 제10시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0091',
            type: EventType.POINT,
            startDate: '2023/05/10',
            endDate: '2023/05/31',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【背德心療系】`,
                [Locale.sc]: `【背德心疗系】`,
                [Locale.en]: `[Corrupt Therapy]`,
                [Locale.jp]: `「背徳心療内科」`,
                [Locale.kr]: `【배덕심 요법】`
            },
            image: EventBanner.EVENT_0091,
            newUnit: [ UnitCode.n_caesar, UnitCode.d_irene ]
        },
        {
            code: '0092',
            type: EventType.CHALLENGE,
            startDate: '2023/05/17',
            endDate: '2023/05/31',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【醫療器材錯誤使用法】`,
                [Locale.sc]: `【医疗器材的错误使用法】`,
                [Locale.en]: `[Misuse]`,
                [Locale.jp]: `「医療機器の誤った使い方」`,
                [Locale.kr]: `【의료기기의 잘못된 사용법】`
            },
            image: EventBanner.EVENT_0092,
            newUnit: []
        },
    ],
        [
        {
            code: '0088',
            type: EventType.POINT,
            startDate: '2023/04/26',
            endDate: '2023/05/10',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【凱薩魔王事件簿-復刻-】`,
                [Locale.sc]: `【凯萨魔王事件簿-复刻-】`,
                [Locale.en]: `[Detective Caesar -Comeback-]`,
                [Locale.jp]: `「魔王シーザーの事件簿-復刻-」`,
                [Locale.kr]: `【마왕 시저의 사건부-복각-】`
            },
            image: EventBanner.EVENT_0088,
            newUnit: []
        },
        {
            code: '0089',
            type: EventType.CHALLENGE,
            startDate: '2023/05/03',
            endDate: '2023/05/10',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【事件現場-復刻-】`,
                [Locale.sc]: `【事件现场-复刻-】`,
                [Locale.en]: `[Scene of the Crime -Comeback-]`,
                [Locale.jp]: `「事件現場-復刻-」`,
                [Locale.kr]: `【사건 현장-복각-】`
            },
            image: EventBanner.EVENT_0089,
            newUnit: []
        },
        {
            code: '0090',
            type: EventType.SPIRE,
            startDate: '2023/04/26',
            endDate: '2023/07/12',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第十三季`,
                [Locale.sc]: `【魔狱塔】第十三季`,
                [Locale.en]: `[The Demon Spire] Season 13`,
                [Locale.jp]: `「魔獄塔」第13シーズン`,
                [Locale.kr]: `【마옥탑】 제13시즌`
            },
            image: EventBanner.EVENT_0090,
            newUnit: []
        },
    ],
    [
        {
            code: '0086',
            type: EventType.POINT,
            startDate: '2023/04/07',
            endDate: '2023/04/26',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【傳說中的魔法少女】`,
                [Locale.sc]: `【传说中的魔法少女】`,
                [Locale.en]: `[Legendary Magical Maiden]`,
                [Locale.jp]: `「伝説の魔法少女」`,
                [Locale.kr]: `【전설의 마법소녀】`
            },
            image: EventBanner.EVENT_0086,
            newUnit: [ UnitCode.juneau, UnitCode.britney ]
        },
        {
            code: '0087',
            type: EventType.CHALLENGE,
            startDate: '2023/04/19',
            endDate: '2023/04/26',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【正義、智謀與魔杖】`,
                [Locale.sc]: `【正义、智谋与魔杖】`,
                [Locale.en]: `[Wise Wand & Justice]`,
                [Locale.jp]: `「正義・知謀・魔法の杖」`,
                [Locale.kr]: `【정의, 지략, 마법봉】`
            },
            image: EventBanner.EVENT_0087,
            newUnit: []
        },
    ],
    [
        {
            code: '0084',
            type: EventType.POINT,
            startDate: '2023/03/22',
            endDate: '2023/04/07',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【魔境奇遊~LuLu的奇幻旅程~-復刻-】`,
                [Locale.sc]: `【魔境奇游~LuLu的奇幻旅程~-复刻-】`,
                [Locale.en]: `[Lulu in Wonderland -Comeback-]`,
                [Locale.jp]: `「不思議の旅-復刻-」`,
                [Locale.kr]: `【기묘한 여정-복각-】`
            },
            image: EventBanner.EVENT_0084,
            newUnit: []
        },
        {
            code: '0085',
            type: EventType.CHALLENGE,
            startDate: '2023/03/29',
            endDate: '2023/04/07',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【法庭派對-復刻-】`,
                [Locale.sc]: `【法庭派对-复刻-】`,
                [Locale.en]: `[Court Party -Comeback-]`,
                [Locale.jp]: `「法廷パーティー-復刻-」`,
                [Locale.kr]: `【법정 파티-복각-】`
            },
            image: EventBanner.EVENT_0085,
            newUnit: []
        },
    ],
    [
        {
            code: '0082',
            type: EventType.POINT,
            startDate: '2023/03/08',
            endDate: '2023/03/29',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【請問要來點獸耳嗎？】`,
                [Locale.sc]: `【请问要来点兽耳吗？】`,
                [Locale.en]: `[Do you want some animal ears?]`,
                [Locale.jp]: `「ご注文はケモ耳ですか？」`,
                [Locale.kr]: `【동물귀 주문하시겠어요?】`
            },
            image: EventBanner.EVENT_0082,
            newUnit: [ UnitCode.lillane, UnitCode.c_lulu ]
        },
        {
            code: '0083',
            type: EventType.CHALLENGE,
            startDate: '2023/03/15',
            endDate: '2023/03/29',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【全魔族獸耳化計畫】`,
                [Locale.sc]: `【全魔族兽耳化计画】`,
                [Locale.en]: `[The Animal-Ear Plan]`,
                [Locale.jp]: `「魔族ALL獣耳化計画」`,
                [Locale.kr]: `【전마족 동물귀화 계획】`
            },
            image: EventBanner.EVENT_0083,
            newUnit: []
        },
        {
            code: 'TIMERIFT_009',
            type: EventType.TIMERIFT,
            startDate: '2023/03/08',
            endDate: '2023/05/24',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第九季`,
                [Locale.sc]: `【时之裂缝】第九季`,
                [Locale.en]: `[Time Rift] Season 9`,
                [Locale.jp]: `「時空の裂け目」第9シーズン`,
                [Locale.kr]: `【시공간의 균열】 제9시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0081',
            type: EventType.EVOLVE,
            startDate: '2023/02/22',
            endDate: '2023/03/08',
            color: EventTypeColor.EVOLVE,
            name: {
                [Locale.tc]: `【空氣怪獸大戰】`,
                [Locale.sc]: `【空气怪兽大战】`,
                [Locale.en]: `[The Battle of Thin Air]`,
                [Locale.jp]: `「空気怪獣ごっこ」`,
                [Locale.kr]: `【공기 괴수 대전】`
            },
            image: EventBanner.EVENT_0081,
            newUnit: []
        },
    ],
    [
        {
            code: '0079',
            type: EventType.POINT,
            startDate: '2023/02/08',
            endDate: '2023/03/01',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【甜蜜陷阱 巧克力大騷動】`,
                [Locale.sc]: `【甜蜜陷阱 巧克力大骚动】`,
                [Locale.en]: `[Chocolate Frenzy]`,
                [Locale.jp]: `「チョコレート大騒動」`,
                [Locale.kr]: `【초콜릿 대소동】`
            },
            image: EventBanner.EVENT_0079,
            newUnit: [ UnitCode.v_baal, UnitCode.v_iblis, UnitCode.v_satan ]
        },
        {
            code: '0080',
            type: EventType.CHALLENGE,
            startDate: '2023/02/15',
            endDate: '2023/03/01',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【巧克力帝國的野心】`,
                [Locale.sc]: `【巧克力帝国的野心】`,
                [Locale.en]: `[Chocolate Ambitions]`,
                [Locale.jp]: `「チョコレート帝国の野心」`,
                [Locale.kr]: `【초콜릿 제국의 야심】`
            },
            image: EventBanner.EVENT_0080,
            newUnit: []
        },
    ],
    [
        {
            code: '0078',
            type: EventType.SPIRE,
            startDate: '2023/02/01',
            endDate: '2023/04/26',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第十二季`,
                [Locale.sc]: `【魔狱塔】第十二季`,
                [Locale.en]: `[The Demon Spire] Season 12`,
                [Locale.jp]: `「魔獄塔」第12シーズン`,
                [Locale.kr]: `【마옥탑】 제12시즌`
            },
            image: EventBanner.EVENT_0078,
            newUnit: []
        },
    ],
    [
        {
            code: '0076',
            type: EventType.POINT,
            startDate: '2023/01/18',
            endDate: '2023/02/08',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【風雲！新春大運動會】`,
                [Locale.sc]: `【风云！新春大运动会】`,
                [Locale.en]: `[Field Day]`,
                [Locale.jp]: `「風雲！新春大運動会」`,
                [Locale.kr]: `【풍운! 신춘 대운동회】`
            },
            image: EventBanner.EVENT_0076,
            newUnit: [ UnitCode.ny_salucia, UnitCode.ny_lana ]
        },
        {
            code: '0077',
            type: EventType.CHALLENGE,
            startDate: '2023/01/25',
            endDate: '2023/02/08',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【勝負！風林火山】`,
                [Locale.sc]: `【胜负！风林火山】`,
                [Locale.en]: `[The Final Battle!]`,
                [Locale.jp]: `「勝負！風林火山」`,
                [Locale.kr]: `【승부! 풍림화산】`
            },
            image: EventBanner.EVENT_0077,
            newUnit: []
        },
    ],
    [
        {
            code: '0074',
            type: EventType.POINT,
            startDate: '2023/01/04',
            endDate: '2023/01/18',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【正月祭典-復刻-】`,
                [Locale.sc]: `【正月祭典-复刻-】`,
                [Locale.en]: `[True Moon Festival -Comeback-]`,
                [Locale.jp]: `「正月の祭典-復刻-」`,
                [Locale.kr]: `【정월 축제-복각-】`
            },
            image: EventBanner.EVENT_0074,
            newUnit: []
        },
        {
            code: '0075',
            type: EventType.CHALLENGE,
            startDate: '2023/01/11',
            endDate: '2023/01/18',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【正月遊戲-復刻-】`,
                [Locale.sc]: `【正月游戏-复刻-】`,
                [Locale.en]: `[True Moon Game -Comeback-]`,
                [Locale.jp]: `「正月お遊戯-復刻-」`,
                [Locale.kr]: `【정월 놀이-복각-】`
            },
            image: EventBanner.EVENT_0075,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_008',
            type: EventType.TIMERIFT,
            startDate: '2022/12/21',
            endDate: '2023/03/08',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第八季`,
                [Locale.sc]: `【时之裂缝】第八季`,
                [Locale.en]: `[Time Rift] Season 8`,
                [Locale.jp]: `「時空の裂け目」第8シーズン`,
                [Locale.kr]: `【시공간의 균열】 제8시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0072',
            type: EventType.POINT,
            startDate: '2022/12/14',
            endDate: '2023/01/11',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【絕對聖誕~靜的秘湯巡禮】`,
                [Locale.sc]: `【绝对圣诞~静的秘汤巡礼】`,
                [Locale.en]: `[Shizuka's Pilgrimage]`,
                [Locale.jp]: `「静の秘湯巡り」`,
                [Locale.kr]: `【시즈카의 온천 순례】`
            },
            image: EventBanner.EVENT_0072,
            newUnit: [ UnitCode.xx_aiko, UnitCode.x_shizuka ]
        },
        {
            code: '0073',
            type: EventType.CHALLENGE,
            startDate: '2022/12/28',
            endDate: '2023/01/11',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【雪色聖誕夜】`,
                [Locale.sc]: `【雪色圣诞夜】`,
                [Locale.en]: `[White Christmas]`,
                [Locale.jp]: `「雪色のクリスマス・イヴ」`,
                [Locale.kr]: `【화이트 크리스마스】`
            },
            image: EventBanner.EVENT_0073,
            newUnit: []
        },
    ],
    [
        {
            code: '0070',
            type: EventType.POINT,
            startDate: '2022/11/30',
            endDate: '2022/12/14',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【復活節蛋蛋大進擊-復刻-】`,
                [Locale.sc]: `【复活节蛋蛋大进击-复刻-】`,
                [Locale.en]: `[Easter Egg Attack -Comeback-]`,
                [Locale.jp]: `「イースターエッグの進撃-復刻-」`,
                [Locale.kr]: `【부활절 달걀의 진격-복각-】`
            },
            image: EventBanner.EVENT_0070,
            newUnit: []
        },
        {
            code: '0071',
            type: EventType.CHALLENGE,
            startDate: '2022/12/07',
            endDate: '2022/12/14',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【十倍怨念大奉還-復刻-】`,
                [Locale.sc]: `【十倍怨念奉还-复刻-】`,
                [Locale.en]: `[Tenfold Payback -Comeback-]`,
                [Locale.jp]: `「怨念を十倍にして晴らせ-復刻-」`,
                [Locale.kr]: `【10배로 되갚아준 원념-복각-】`
            },
            image: EventBanner.EVENT_0071,
            newUnit: []
        },
    ],
    [
        {
            code: '0069',
            type: EventType.SPIRE,
            startDate: '2022/11/23',
            endDate: '2023/02/01',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第十一季`,
                [Locale.sc]: `【魔狱塔】第十一季`,
                [Locale.en]: `[The Demon Spire] Season 11`,
                [Locale.jp]: `「魔獄塔」第11シーズン`,
                [Locale.kr]: `【마옥탑】 제11시즌`
            },
            image: EventBanner.EVENT_0069,
            newUnit: []
        },
    ],
    [
        {
            code: '0068',
            type: EventType.SLIVER,
            startDate: '2022/11/16',
            endDate: '2022/11/30',
            color: EventTypeColor.SLIVER,
            name: {
                [Locale.tc]: `【AbysSeducer邊境行商】`,
                [Locale.sc]: `【AbysSeducer边境行商】`,
                [Locale.en]: `[AbysSeducer]`,
                [Locale.jp]: `「AbysSeducer」`,
                [Locale.kr]: `【AbysSeducer】`
            },
            image: EventBanner.EVENT_0068,
            newUnit: [ UnitCode.sherana, UnitCode.iyan ]
        },
    ],
    [
        {
            code: '0067',
            type: EventType.DISCIPLINE,
            startDate: '2022/11/09',
            endDate: '2022/11/23',
            color: EventTypeColor.DISCIPLINE,
            name: {
                [Locale.tc]: `【異世界情趣店-復刻-】`,
                [Locale.sc]: `【异世界情趣店-复刻-】`,
                [Locale.en]: `[Parallel Paradise Toys -Comeback-]`,
                [Locale.jp]: `「異世界アダルトショップ-復刻-」`,
                [Locale.kr]: `【이세계 성인용품점-복각-】`
            },
            image: EventBanner.EVENT_0067,
            newUnit: []
        },
    ],
    [
        {
            code: '0065',
            type: EventType.POINT,
            startDate: '2022/10/26',
            endDate: '2022/11/16',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【鮮血城 X 少女狂想曲】`,
                [Locale.sc]: `【鲜血城 X 少女狂想曲】`,
                [Locale.en]: `[City of Blood X]`,
                [Locale.jp]: `「鮮血の城 X 少女狂想曲」`,
                [Locale.kr]: `【선혈의 성 X 소녀의 광상곡】`
            },
            image: EventBanner.EVENT_0065,
            newUnit: [ UnitCode.h_leona, UnitCode.h_lotiya ]
        },
        {
            code: '0066',
            type: EventType.CHALLENGE,
            startDate: '2022/11/09',
            endDate: '2022/11/16',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【洛緹亞萬聖塔】`,
                [Locale.sc]: `【洛缇亚万圣塔】`,
                [Locale.en]: `[Halloween Tower]`,
                [Locale.jp]: `「ラティヤハロウィンタワー」`,
                [Locale.kr]: `【로티아 할로윈 탑】`
            },
            image: EventBanner.EVENT_0066,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_007',
            type: EventType.TIMERIFT,
            startDate: '2022/10/19',
            endDate: '2022/12/21',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第七季`,
                [Locale.sc]: `【时之裂缝】第七季`,
                [Locale.en]: `[Time Rift] Season 7`,
                [Locale.jp]: `「時空の裂け目」第7シーズン`,
                [Locale.kr]: `【시공간의 균열】 제7시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0064',
            type: EventType.POTENTIAL,
            startDate: '2022/10/12',
            endDate: '2022/10/26',
            color: EventTypeColor.POTENTIAL,
            name: {
                [Locale.tc]: `【悠閒無事的本大爺凱薩邊境城鎮成為冒險者展開緊張刺激大冒險】`,
                [Locale.sc]: `【悠闲无事的本大爷凯萨边境城镇成为冒险者展开紧张刺激大冒险】`,
                [Locale.en]: `[Caesar's bored... so he joins the Adventurer's Guild!]`,
                [Locale.jp]: `「暇で死にそうな俺様シーザー 辺境の村で冒険者になって 刺激満載の大冒險に出かけるとしよう」`,
                [Locale.kr]: `【무료함을 느끼던 이 몸께서 변경 지대의 모험가가 되어 펼쳐나가는 스펙터클 어드벤처】`
            },
            image: EventBanner.EVENT_0064,
            newUnit: [ UnitCode.didi, UnitCode.yingying ]
        },
    ],
    [
        {
            code: '0061',
            type: EventType.SIDESTORY,
            startDate: '2022/09/28',
            endDate: '2022/10/12',
            color: EventTypeColor.SIDESTORY,
            name: {
                [Locale.tc]: `【外傳：超時空偶像-復刻-】`,
                [Locale.sc]: `【外传：超时空偶像-复刻-】`,
                [Locale.en]: `[Time-Traveling Idol -Comeback-]`,
                [Locale.jp]: `「外伝：超時空アイドル-復刻-」`,
                [Locale.kr]: `【외전: 시공초월 아이돌-복각-】`
            },
            image: EventBanner.EVENT_0061,
            newUnit: []
        },
        {
            code: '0062',
            type: EventType.POINT,
            startDate: '2022/09/28',
            endDate: '2022/10/12',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【魔界偶像大騷動-復刻-】`,
                [Locale.sc]: `【魔界偶像大骚动-复刻-】`,
                [Locale.en]: `[Demon Realm's Top Idol -Comeback-]`,
                [Locale.jp]: `「魔界アイドル大騒動-復刻-」`,
                [Locale.kr]: `【마계 아이돌 대소동-복각-】`
            },
            image: EventBanner.EVENT_0062,
            newUnit: []
        },
        {
            code: '0063',
            type: EventType.CHALLENGE,
            startDate: '2021/10/05',
            endDate: '2021/10/12',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【天下第一偶像大會-復刻-】`,
                [Locale.sc]: `【天下第一偶像大会-复刻-】`,
                [Locale.en]: `[The Idol Smashdown -Comeback-]`,
                [Locale.jp]: `「天下一アイドル大会-復刻-」`,
                [Locale.kr]: `【천하제일 아이돌 대회-복각-】`
            },
            image: EventBanner.EVENT_0063,
            newUnit: []
        },
    ],
    [
        {
            code: '0060',
            type: EventType.EVOLVE,
            startDate: '2022/09/21',
            endDate: '2022/10/05',
            color: EventTypeColor.EVOLVE,
            name: {
                [Locale.tc]: `【蛇女戰記-復刻-】`,
                [Locale.sc]: `【蛇女战记-复刻-】`,
                [Locale.en]: `[Mes-merized -Comeback-]`,
                [Locale.jp]: `【ナーガ戦記-復刻-】`,
                [Locale.kr]: `【나가 전기-복각-】`
            },
            image: EventBanner.EVENT_0060,
            newUnit: []
        },
    ],
    [
        {
            code: '0059',
            type: EventType.SPIRE,
            startDate: '2022/09/14',
            endDate: '2022/12/01',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第十季`,
                [Locale.sc]: `【魔狱塔】第十季`,
                [Locale.en]: `[The Demon Spire] Season 10`,
                [Locale.jp]: `「魔獄塔」第10シーズン`,
                [Locale.kr]: `【마옥탑】 제10시즌`
            },
            image: EventBanner.EVENT_0059,
            newUnit: []
        },
    ],
    [
        {
            code: '0057',
            type: EventType.POINT,
            startDate: '2022/09/07',
            endDate: '2022/09/28',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【來自星空的妳】`,
                [Locale.sc]: `【来自星空的妳】`,
                [Locale.en]: `[From the Stars]`,
                [Locale.jp]: `「星から来たあなた」`,
                [Locale.kr]: `【별에서 온 그녀】`
            },
            image: EventBanner.EVENT_0057,
            newUnit: [ UnitCode.c1_nana, UnitCode.geneva ]
        },
        {
            code: '0058',
            type: EventType.CHALLENGE,
            startDate: '2022/09/21',
            endDate: '2022/09/28',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【朋友與加班】`,
                [Locale.sc]: `【朋友与加班】`,
                [Locale.en]: `[Friends and Overtime]`,
                [Locale.jp]: `「友達と残業」`,
                [Locale.kr]: `【친구와 야근】`
            },
            image: EventBanner.EVENT_0058,
            newUnit: []
        },
    ],
    [
        {
            code: '0056',
            type: EventType.DISCIPLINE,
            startDate: '2022/08/24',
            endDate: '2022/09/07',
            color: EventTypeColor.DISCIPLINE,
            name: {
                [Locale.tc]: `【女僕&魔法】`,
                [Locale.sc]: `【女仆&魔法】`,
                [Locale.en]: `[Magic & Maids]`,
                [Locale.jp]: `「メイド&マジック」`,
                [Locale.kr]: `【메이드&마법】`
            },
            image: EventBanner.EVENT_0056,
            newUnit: [ UnitCode.emily, UnitCode.anjelica ]
        },
    ],
    [
        {
            code: '0054',
            type: EventType.POINT,
            startDate: '2022/08/03',
            endDate: '2022/08/24',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【Pasadena~被七夕分離的兩人】`,
                [Locale.sc]: `【Pasadena~被七夕分离的两人】`,
                [Locale.en]: `[Pasadena]`,
                [Locale.jp]: `「Pasadena」`,
                [Locale.kr]: `【Pasadena】`
            },
            image: EventBanner.EVENT_0054,
            newUnit: [ UnitCode.q_asida, UnitCode.asina ]
        },
        {
            code: '0055',
            type: EventType.CHALLENGE,
            startDate: '2022/08/10',
            endDate: '2022/08/24',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【Let's Party All Night！】`,
                [Locale.sc]: `【Let's Party All Night！】`,
                [Locale.en]: `[Let's Party All Night！]`,
                [Locale.jp]: `「Let's Party All Night！」`,
                [Locale.kr]: `【Let's Party All Night！】`
            },
            image: EventBanner.EVENT_0055,
            newUnit: []
        },
        {
            code: 'TIMERIFT_006',
            type: EventType.TIMERIFT,
            startDate: '2022/08/03',
            endDate: '2022/10/19',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第六季`,
                [Locale.sc]: `【时之裂缝】第六季`,
                [Locale.en]: `[Time Rift] Season 6`,
                [Locale.jp]: `「時空の裂け目」第6シーズン`,
                [Locale.kr]: `【시공간의 균열】 제6시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0053',
            type: EventType.POINT,
            startDate: '2022/07/13',
            endDate: '2022/08/03',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【凱薩魔王事件簿】`,
                [Locale.sc]: `【凯萨魔王事件簿】`,
                [Locale.en]: `[Detective Caesar]`,
                [Locale.jp]: `「魔王シーザーの事件簿」`,
                [Locale.kr]: `【마왕 시저의 사건부】`
            },
            image: EventBanner.EVENT_0053,
            newUnit: [ UnitCode.ichika, UnitCode.kana ]
        },
    ],
    [
        {
            code: '0052',
            type: EventType.SPIRE,
            startDate: '2022/06/29',
            endDate: '2022/08/31',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第九季`,
                [Locale.sc]: `【魔狱塔】第九季`,
                [Locale.en]: `[The Demon Spire] Season 9`,
                [Locale.jp]: `「魔獄塔」第9シーズン`,
                [Locale.kr]: `【마옥탑】 제9시즌`
            },
            image: EventBanner.EVENT_0052,
            newUnit: []
        },
    ],
    [
        {
            code: '0050',
            type: EventType.POINT,
            startDate: '2022/06/08',
            endDate: '2022/07/13',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【渡假村改建王！】`,
                [Locale.sc]: `【渡假村改建王！】`,
                [Locale.en]: `[Queen of the Beach]`,
                [Locale.jp]: `「休暇村改築王！」`,
                [Locale.kr]: `【리모델링의 왕!】`
            },
            image: EventBanner.EVENT_0050,
            newUnit: [ UnitCode.s_iblis, UnitCode.s_milae, UnitCode.s_noel, UnitCode.s_aridya ]
        },
        {
            code: '0051',
            type: EventType.CHALLENGE,
            startDate: '2022/07/06',
            endDate: '2022/07/13',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【渡假村大改建】`,
                [Locale.sc]: `【渡假村大改建】`,
                [Locale.en]: `[Resort Remodel]`,
                [Locale.jp]: `「大改造！休暇村」`,
                [Locale.kr]: `【리조트 개조!】`
            },
            image: EventBanner.EVENT_0051,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_005',
            type: EventType.TIMERIFT,
            startDate: '2022/05/25',
            endDate: '2022/08/03',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第五季`,
                [Locale.sc]: `【时之裂缝】第五季`,
                [Locale.en]: `[Time Rift] Season 5`,
                [Locale.jp]: `「時空の裂け目」第5シーズン`,
                [Locale.kr]: `【시공간의 균열】 제5시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0049',
            type: EventType.POINT,
            startDate: '2022/05/25',
            endDate: '2022/06/08',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【緊急！惡兔襲來！】`,
                [Locale.sc]: `【紧急！恶兔袭来】`,
                [Locale.en]: `[Alert! Usagi Incoming!]`,
                [Locale.jp]: `「緊急！悪兎襲来」`,
                [Locale.kr]: `【긴급! 악토끼 내습!】`
            },
            image: EventBanner.EVENT_0049,
            newUnit: [ UnitCode.usagihime ]
        },
    ],
    [
        {
            code: '0048',
            type: EventType.EVOLVE,
            startDate: '2022/05/11',
            endDate: '2022/05/25',
            color: EventTypeColor.EVOLVE,
            name: {
                [Locale.tc]: `【魔族朋友】`,
                [Locale.sc]: `【魔族朋友】`,
                [Locale.en]: `[Demon Friends]`,
                [Locale.jp]: `「魔族の友達」`,
                [Locale.kr]: `【마족 친구】`
            },
            image: EventBanner.EVENT_0048,
            newUnit: [ UnitCode.faya, UnitCode.tanocia ]
        },
    ],
    [
        {
            code: '0046',
            type: EventType.POINT,
            startDate: '2022/04/20',
            endDate: '2022/05/11',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【魔境奇遊~LuLu的奇幻旅程~】`,
                [Locale.sc]: `【魔境奇游~LuLu的奇幻旅程~】`,
                [Locale.en]: `[Lulu in Wonderland]`,
                [Locale.jp]: `「不思議の旅」`,
                [Locale.kr]: `【기묘한 여정】`
            },
            image: EventBanner.EVENT_0046,
            newUnit: [ UnitCode.w_chizuru, UnitCode.w_lulu ]
        },
        {
            code: '0047',
            type: EventType.CHALLENGE,
            startDate: '2022/05/04',
            endDate: '2022/05/11',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【法庭派對】`,
                [Locale.sc]: `【法庭派对】`,
                [Locale.en]: `[Court Party]`,
                [Locale.jp]: `「法廷パーティー」`,
                [Locale.kr]: `【법정 파티】`
            },
            image: EventBanner.EVENT_0047,
            newUnit: []
        },
    ],
    [
        {
            code: '0045',
            type: EventType.SPIRE,
            startDate: '2022/04/13',
            endDate: '2022/06/29',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第八季`,
                [Locale.sc]: `【魔狱塔】第八季`,
                [Locale.en]: `[The Demon Spire] Season 8`,
                [Locale.jp]: `「魔獄塔」第8シーズン`,
                [Locale.kr]: `【마옥탑】 제8시즌`
            },
            image: EventBanner.EVENT_0045,
            newUnit: []
        },
    ],
    [
        {
            code: '0043',
            type: EventType.POINT,
            startDate: '2022/03/30',
            endDate: '2022/04/20',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【凱薩½】`,
                [Locale.sc]: `【凯萨½】`,
                [Locale.en]: `[Caesar½]`,
                [Locale.jp]: `「シーザー½」`,
                [Locale.kr]: `【시저½】`
            },
            image: EventBanner.EVENT_0043,
            newUnit: [ UnitCode.f_caesar ]
        },
        {
            code: '0044',
            type: EventType.CHALLENGE,
            startDate: '2022/04/06',
            endDate: '2022/04/20',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【魔王的三個挑戰】`,
                [Locale.sc]: `【魔王的三个挑战】`,
                [Locale.en]: `[Three Challenges]`,
                [Locale.jp]: `「魔王の3つの挑戦」`,
                [Locale.kr]: `【마왕의 세 가지 도전】`
            },
            image: EventBanner.EVENT_0044,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_004',
            type: EventType.TIMERIFT,
            startDate: '2022/03/16',
            endDate: '2022/05/25',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第四季`,
                [Locale.sc]: `【时之裂缝】第四季`,
                [Locale.en]: `[Time Rift] Season 4`,
                [Locale.jp]: `「時空の裂け目」第4シーズン`,
                [Locale.kr]: `【시공간의 균열】 제4시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0042',
            type: EventType.POINT,
            startDate: '2022/03/09',
            endDate: '2022/03/30',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【魔王被遠征】`,
                [Locale.sc]: `【魔王被远征】`,
                [Locale.en]: `[Demon Destroyers]`,
                [Locale.jp]: `「征伐される魔王」`,
                [Locale.kr]: `【켠 김에 마왕까지】`
            },
            image: EventBanner.EVENT_0042,
            newUnit: [ UnitCode.miru, UnitCode.uruta, UnitCode.ayane, UnitCode.muila ]
        },
    ],
    [
        {
            code: '0039',
            type: EventType.POINT,
            startDate: '2022/02/16',
            endDate: '2022/03/09',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【帶來幸福的婚紗】`,
                [Locale.sc]: `【带来幸福的婚纱】`,
                [Locale.en]: `[A Match Made in Hell]`,
                [Locale.jp]: `「幸せのウェディング」`,
                [Locale.kr]: `【행복의 웨딩드레스】`
            },
            image: EventBanner.EVENT_0039,
            newUnit: [ UnitCode.b_baal, UnitCode.b_iblis, UnitCode.b_satan ]
        },
        {
            code: '0040',
            type: EventType.CHALLENGE,
            startDate: '2022/02/16',
            endDate: '2022/03/09',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【魔王的執念】`,
                [Locale.sc]: `【魔王的执念】`,
                [Locale.en]: `[Archdemon's Obsession]`,
                [Locale.jp]: `「魔王の執念」`,
                [Locale.kr]: `【마왕의 집념】`
            },
            image: EventBanner.EVENT_0040,
            newUnit: []
        },
    ],
    [
        {
            code: '0037',
            type: EventType.POINT,
            startDate: '2022/01/26',
            endDate: '2022/02/16',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【正月祭典】`,
                [Locale.sc]: `【正月祭典】`,
                [Locale.en]: `[True Moon Festival]`,
                [Locale.jp]: `「正月の祭典」`,
                [Locale.kr]: `【정월 축제】`
            },
            image: EventBanner.EVENT_0037,
            newUnit: [ UnitCode.tm_minayomi, UnitCode.tm_ritsuki ]
        },
        {
            code: '0038',
            type: EventType.CHALLENGE,
            startDate: '2022/02/02',
            endDate: '2022/02/16',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【正月遊戲】`,
                [Locale.sc]: `【正月游戏】`,
                [Locale.en]: `[True Moon Game]`,
                [Locale.jp]: `「正月お遊戯」`,
                [Locale.kr]: `【정월 놀이】`
            },
            image: EventBanner.EVENT_0038,
            newUnit: []
        },
        {
            code: '0036',
            type: EventType.SPIRE,
            startDate: '2022/01/26',
            endDate: '2022/04/13',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第七季`,
                [Locale.sc]: `【魔狱塔】第七季`,
                [Locale.en]: `[The Demon Spire] Season 7`,
                [Locale.jp]: `「魔獄塔」第7シーズン`,
                [Locale.kr]: `【마옥탑】 제7시즌`
            },
            image: EventBanner.EVENT_0036,
            newUnit: []
        },
    ],
    [
        {
            code: '0001_RETURN',
            type: EventType.POINT,
            startDate: '2022/01/12',
            endDate: '2022/01/26',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【魔族的新年祭典-復刻-】`,
                [Locale.sc]: `【魔族的新年祭典-复刻-】`,
                [Locale.en]: `[DEMON'S New Year Party -Comeback-]`,
                [Locale.jp]: `「魔族の新年祭り-復刻-」`,
                [Locale.kr]: `【마족의 신년 축제-복각-】`
            },
            image: EventBanner.EVENT_0001_RETURN,
            newUnit: []
        },
        {
            code: '0003_RETURN',
            type: EventType.CHALLENGE,
            startDate: '2022/01/19',
            endDate: '2022/01/26',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【祭典逆襲-復刻-】`,
                [Locale.sc]: `【庆典反击-复刻-】`,
                [Locale.en]: `[Crash the Party!! -Comeback-]`,
                [Locale.jp]: `【祭りの逆襲-復刻-】`,
                [Locale.kr]: `【Crash the Party!!-복각-】`
            },
            image: EventBanner.EVENT_0003_RETURN,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_003',
            type: EventType.TIMERIFT,
            startDate: '2021/12/29',
            endDate: '2022/03/16',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第三季`,
                [Locale.sc]: `【时之裂缝】第三季`,
                [Locale.en]: `[Time Rift] Season 3`,
                [Locale.jp]: `「時空の裂け目」第3シーズン`,
                [Locale.kr]: `【시공간의 균열】 제3시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0034',
            type: EventType.POINT,
            startDate: '2021/12/15',
            endDate: '2022/01/12',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【女僕響叮噹】`,
                [Locale.sc]: `【女仆响叮当】`,
                [Locale.en]: `[Maid's Bell]`,
                [Locale.jp]: `「メイドがベルを鳴らす」`,
                [Locale.kr]: `【메이드의 종소리】`
            },
            image: EventBanner.EVENT_0034,
            newUnit: [ UnitCode.x_aiko, UnitCode.x_lana, UnitCode.evie ]
        },
        {
            code: '0035',
            type: EventType.CHALLENGE,
            startDate: '2021/12/29',
            endDate: '2021/01/12',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【絕倫性誕夜】`,
                [Locale.sc]: `【绝伦性诞夜】`,
                [Locale.en]: `[Sexmas Eve]`,
                [Locale.jp]: `「絶倫セックスマス」`,
                [Locale.kr]: `【황당한 섹스마스 이브】`
            },
            image: EventBanner.EVENT_0035,
            newUnit: []
        },
    ],
    [
        {
            code: '0033',
            type: EventType.DISCIPLINE,
            startDate: '2021/12/01',
            endDate: '2021/12/15',
            color: EventTypeColor.DISCIPLINE,
            name: {
                [Locale.tc]: `【異世界情趣店】`,
                [Locale.sc]: `【异世界情趣店】`,
                [Locale.en]: `[Parallel Paradise Toys]`,
                [Locale.jp]: `「異世界アダルトショップ」`,
                [Locale.kr]: `【이세계 성인용품점】`
            },
            image: EventBanner.EVENT_0033,
            newUnit: [ UnitCode.sakuya ]
        },
        
    ],
    [
        {
            code: '0031',
            type: EventType.POTENTIAL,
            startDate: '2021/11/17',
            endDate: '2021/12/01',
            color: EventTypeColor.POTENTIAL,
            name: {
                [Locale.tc]: `【疾速奔馳！人馬娘！】`,
                [Locale.sc]: `【疾速奔驰！人马娘！】`,
                [Locale.en]: `[Dashing Centaur!]`,
                [Locale.jp]: `「走れ！ケンタウロス娘！」`,
                [Locale.kr]: `【질주해라 켄타우로스 소녀!】`
            },
            image: EventBanner.EVENT_0031,
            newUnit: [ UnitCode.inori ]
        },
    ],
    [
        {
            code: '0029',
            type: EventType.POINT,
            startDate: '2021/10/27',
            endDate: '2021/11/17',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【萬聖大驚奇】`,
                [Locale.sc]: `【万圣大惊奇】`,
                [Locale.en]: `[Halloween Surprise]`,
                [Locale.jp]: `「ハロウィンのサプライズ」`,
                [Locale.kr]: `【할로윈 서프라이즈】`
            },
            image: EventBanner.EVENT_0029,
            newUnit: [ UnitCode.h_britney, UnitCode.h_salucia ]
        },
        {
            code: '0030',
            type: EventType.CHALLENGE,
            startDate: '2021/11/03',
            endDate: '2021/11/17',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【無盡搗蛋夜】`,
                [Locale.sc]: `【无尽捣蛋夜】`,
                [Locale.en]: `[Never-ending Trick]`,
                [Locale.jp]: `「ハロウィンフィーバー」`,
                [Locale.kr]: `【무한의 트릭 나잇】`
            },
            image: EventBanner.EVENT_0030,
            newUnit: []
        },
    ],
    [
        {
            code: '0028',
            type: EventType.DISCIPLINE,
            startDate: '2021/10/13',
            endDate: '2021/10/27',
            color: EventTypeColor.DISCIPLINE,
            name: {
                [Locale.tc]: `【極樂狂宴】`,
                [Locale.sc]: `【极乐狂宴】`,
                [Locale.en]: `[Blissful Madness]`,
                [Locale.jp]: `「極楽の宴」`,
                [Locale.kr]: `【극락의 향연】`
            },
            image: EventBanner.EVENT_0028,
            newUnit: [ UnitCode.ibuki ]
        },
        {
            code: 'TIMERIFT_002',
            type: EventType.TIMERIFT,
            startDate: '2021/10/13',
            endDate: '2021/12/29',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】第二季`,
                [Locale.sc]: `【时之裂缝】第二季`,
                [Locale.en]: `[Time Rift] Season 2`,
                [Locale.jp]: `「時空の裂け目」第2シーズン`,
                [Locale.kr]: `【시공간의 균열】 제2시즌`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0027',
            type: EventType.EVOLVE,
            startDate: '2021/09/29',
            endDate: '2021/10/13',
            color: EventTypeColor.EVOLVE,
            name: {
                [Locale.tc]: `【龍「玉」之謎】`,
                [Locale.sc]: `【龙「玉」之谜】`,
                [Locale.en]: `[Last of the Silver Dragons]`,
                [Locale.jp]: `「ドラゴン玉の謎」`,
                [Locale.kr]: `【드레곤볼의 비밀】`
            },
            image: EventBanner.EVENT_0027,
            newUnit: [ UnitCode.karina ]
        },
    ],
    [
        {
            code: '0026',
            type: EventType.SPIRE,
            startDate: '2021/09/22',
            endDate: '2021/12/01',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第五季`,
                [Locale.sc]: `【魔狱塔】第五季`,
                [Locale.en]: `[The Demon Spire] Season 5`,
                [Locale.jp]: `「魔獄塔」第5シーズン`,
                [Locale.kr]: `【마옥탑】 제5시즌`
            },
            image: EventBanner.EVENT_0026,
            newUnit: []
        },
    ],
    [
        {
            code: '0024',
            type: EventType.POINT,
            startDate: '2021/09/08',
            endDate: '2021/09/29',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【月夜的童話】`,
                [Locale.sc]: `【月夜的童话】`,
                [Locale.en]: `[Moonlit Fairy Tale]`,
                [Locale.jp]: `「月夜の童話」`,
                [Locale.kr]: `【월야의 동화】`
            },
            image: EventBanner.EVENT_0024,
            newUnit: [ UnitCode.hm_fiora, UnitCode.fufu, UnitCode.teresa ]
        },
        {
            code: '0025',
            type: EventType.CHALLENGE,
            startDate: '2021/09/15',
            endDate: '2021/09/29',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【狂歡之夜】`,
                [Locale.sc]: `【狂欢之夜】`,
                [Locale.en]: `[Festival Prep Pts]`,
                [Locale.jp]: `「狂喜の夜」`,
                [Locale.kr]: `【환락의 밤】`
            },
            image: EventBanner.EVENT_0025,
            newUnit: []
        },
    ],
    [
        {
            code: '0023',
            type: EventType.POTENTIAL,
            startDate: '2021/08/25',
            endDate: '2021/09/08',
            color: EventTypeColor.POTENTIAL,
            name: {
                [Locale.tc]: `【魔王城夜未眠】`,
                [Locale.sc]: `【魔王城无眠夜】`,
                [Locale.en]: `[Sleepless Palace]`,
                [Locale.jp]: `「魔王城の眠らぬ夜」`,
                [Locale.kr]: `【마왕성 잠 못 이루는 밤】`
            },
            image: EventBanner.EVENT_0023,
            newUnit: [ UnitCode.aridya, UnitCode.lotiya ]
        },
    ],
    [
        {
            code: '0021',
            type: EventType.POINT,
            startDate: '2021/08/04',
            endDate: '2021/08/25',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【裁縫的大搜查線】`,
                [Locale.sc]: `【裁缝的大搜查线】`,
                [Locale.en]: `[Tailors' Investigation]`,
                [Locale.jp]: `「裁縫大捜査線」`,
                [Locale.kr]: `【재봉의 대수사선】`
            },
            image: EventBanner.EVENT_0021,
            newUnit: [ UnitCode.asida, UnitCode.asina ]
        },
        {
            code: '0022',
            type: EventType.CHALLENGE,
            startDate: '2021/08/11',
            endDate: '2021/08/25',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【祈願的復仇者】`,
                [Locale.sc]: `【祈愿的复仇者】`,
                [Locale.en]: `[Wishing Avenger]`,
                [Locale.jp]: `「祈りの復讐者」`,
                [Locale.kr]: `【기도하는 어벤저】`
            },
            image: EventBanner.EVENT_0022,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_001',
            type: EventType.TIMERIFT,
            startDate: '2021/07/28',
            endDate: '2021/10/13',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: `【時之裂縫】BETA版`,
                [Locale.sc]: `【时之裂缝】BETA版`,
                [Locale.en]: `[Time Rift] Beta`,
                [Locale.jp]: `「時空の裂け目」Beta`,
                [Locale.kr]: `【시공간의 균열】 Beta`
            },
            image: EventBanner.EVENT_TIMERIFT,
            newUnit: []
        },
    ],
    [
        {
            code: '0019',
            type: EventType.DISCIPLINE,
            startDate: '2021/07/21',
            endDate: '2021/07/28',
            color: EventTypeColor.DISCIPLINE,
            name: {
                [Locale.tc]: `【魔法少女☆托特拉】`,
                [Locale.sc]: `【魔法少女☆托特拉】`,
                [Locale.en]: `[Knight ☆ Tyrella]`,
                [Locale.jp]: `「魔法少女☆トトラ」`,
                [Locale.kr]: `【마법소녀☆토타라】`
            },
            image: EventBanner.EVENT_0019,
            newUnit: [ UnitCode.tyrella ]
        },
    ],
    [
        {
            code: '0018',
            type: EventType.SPIRE,
            startDate: '2021/07/14',
            endDate: '2021/09/22',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第四季`,
                [Locale.sc]: `【魔狱塔】第四季`,
                [Locale.en]: `[The Demon Spire] Season 4`,
                [Locale.jp]: `「魔獄塔」第4シーズン`,
                [Locale.kr]: `【마옥탑】 제4시즌`
            },
            image: EventBanner.EVENT_0018,
            newUnit: []
        },
    ],
    [
        {
            code: '0015',
            type: EventType.POINT,
            startDate: '2021/06/02',
            endDate: '2021/07/14',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【集合啦！魔王渡假村】`,
                [Locale.sc]: `【集合啦！魔王渡假村】`,
                [Locale.en]: `[Summer By the Cae-side]`,
                [Locale.jp]: `「集まれ！魔王休暇村」`,
                [Locale.kr]: `【집합! 마왕 리조트】`
            },
            image: EventBanner.EVENT_0015,
            newUnit: [ UnitCode.s_shizuka, UnitCode.s_lulu, UnitCode.s_ks8, UnitCode.s_nana ]
        },
        {
            code: '0016',
            type: EventType.SPECIAL,
            startDate: '2021/06/16',
            endDate: '2021/07/14',
            color: EventTypeColor.SPECIAL,
            name: {
                [Locale.tc]: `【第二階段：悠閒的拼圖時間】`,
                [Locale.sc]: `【第二阶段：悠闲的拼图时间】`,
                [Locale.en]: `[Second Wave～Relaxing Puzzle Time]`,
                [Locale.jp]: `「ステージ2～ゆったりパズルタイム」`,
                [Locale.kr]: `【제2탄～느긋한 퍼즐 시간】`
            },
            image: EventBanner.EVENT_0016,
            newUnit: []
        },
        {
            code: '0017',
            type: EventType.CHALLENGE,
            startDate: '2021/06/30',
            endDate: '2021/07/14',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【第三階段：挑戰！渡假村評鑑】`,
                [Locale.sc]: `【第三阶段：挑战！渡假村评鉴】`,
                [Locale.en]: `[Third Wave～Resort Evaluation!]`,
                [Locale.jp]: `「ステージ3～挑戦！休暇村ジャッジ」`,
                [Locale.kr]: `【제3탄~도전! 리조트 평가】`
            },
            image: EventBanner.EVENT_0017,
            newUnit: []
        },
    ],
    [
        {
            code: '0014',
            type: EventType.EVOLVE,
            startDate: '2021/05/26',
            endDate: '2021/06/02',
            color: EventTypeColor.EVOLVE,
            name: {
                [Locale.tc]: `【外傳：世界終結之日】`,
                [Locale.sc]: `【外传：世界终结之日】`,
                [Locale.en]: `[The Apocalypse]`,
                [Locale.jp]: `「外伝：世界終末の日」`,
                [Locale.kr]: `【외전: 세계 종말의 날】`
            },
            image: EventBanner.EVENT_0014,
            newUnit: [ UnitCode.daphne ]
        },
    ],
    [
        {
            code: '0013',
            type: EventType.SPIRE,
            startDate: '2021/05/19',
            endDate: '2021/07/14',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第三季`,
                [Locale.sc]: `【魔狱塔】第三季`,
                [Locale.en]: `[The Demon Spire] Season 3`,
                [Locale.jp]: `「魔獄塔」第3シーズン`,
                [Locale.kr]: `【마옥탑】 제3시즌`
            },
            image: EventBanner.EVENT_0013,
            newUnit: []
        },
    ],
    [
        {
            code: '0012',
            type: EventType.SPECIAL,
            startDate: '2021/05/05',
            endDate: '2021/05/19',
            color: EventTypeColor.SPECIAL,
            name: {
                [Locale.tc]: `【復活的「C」】`,
                [Locale.sc]: `【复活的「C」】`,
                [Locale.en]: `[Resurrected "C"]`,
                [Locale.jp]: `「復活した「C」」`,
                [Locale.kr]: `【부활한 [C]】`
            },
            image: EventBanner.EVENT_0012,
            newUnit: [ UnitCode.chizuru ]
        },
    ],
    [
        {
            code: '0010',
            type: EventType.POINT,
            startDate: '2021/03/31',
            endDate: '2021/04/21',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【復活節蛋蛋大進擊】`,
                [Locale.sc]: `【复活节蛋蛋大进击】`,
                [Locale.en]: `[Easter Egg Attack]`,
                [Locale.jp]: `「イースターエッグの進撃」`,
                [Locale.kr]: `【부활절 달걀의 진격】`
            },
            image: EventBanner.EVENT_0010,
            newUnit: [ UnitCode.e_satan ]
        },
        {
            code: '0011',
            type: EventType.CHALLENGE,
            startDate: '2021/04/14',
            endDate: '2021/04/21',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【十倍怨念奉還】`,
                [Locale.sc]: `【十倍怨念奉还】`,
                [Locale.en]: `[Tenfold Payback]`,
                [Locale.jp]: `「怨念を十倍にして晴らせ」`,
                [Locale.kr]: `【10배로 되갚아준 원념】`
            },
            image: EventBanner.EVENT_0011,
            newUnit: []
        },
    ],
    [
        {
            code: '0008',
            type: EventType.EVOLVE,
            startDate: '2021/03/17',
            endDate: '2021/03/24',
            color: EventTypeColor.EVOLVE,
            name: {
                [Locale.tc]: `【蛇女戰記】`,
                [Locale.sc]: `【蛇女战记】`,
                [Locale.en]: `[Mes-merized]`,
                [Locale.jp]: `「ナーガ戦記」`,
                [Locale.kr]: `【나가 전기】`
            },
            image: EventBanner.EVENT_0008,
            newUnit: [ UnitCode.mesmiia ]
        },
        {
            code: '0009',
            type: EventType.SPIRE,
            startDate: '2021/03/17',
            endDate: '2021/05/19',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第二季`,
                [Locale.sc]: `【魔狱塔】第二季`,
                [Locale.en]: `[The Demon Spire] Season 2`,
                [Locale.jp]: `「魔獄塔」第2シーズン`,
                [Locale.kr]: `【마옥탑】 제2시즌`
            },
            image: EventBanner.EVENT_0009,
            newUnit: []
        },
    ],
    [
        {
            code: '0007',
            type: EventType.POTENTIAL,
            startDate: '2021/02/03',
            endDate: '2021/02/24',
            color: EventTypeColor.POTENTIAL,
            name: {
                [Locale.tc]: `【狩獵假期】`,
                [Locale.sc]: `【狩猎假期】`,
                [Locale.en]: `[Hunting Season]`,
                [Locale.jp]: `「狩猟休暇」`,
                [Locale.kr]: `【사냥 휴가】`
            },
            image: EventBanner.EVENT_0007,
            newUnit: []
        },
    ],
    [
        {
            code: '0005',
            type: EventType.SIDESTORY,
            startDate: '2021/02/03',
            endDate: '2021/02/24',
            color: EventTypeColor.SIDESTORY,
            name: {
                [Locale.tc]: `【外傳：超時空偶像】`,
                [Locale.sc]: `【外传：超时空偶像】`,
                [Locale.en]: `[Time-Traveling Idol]`,
                [Locale.jp]: `「外伝：超時空アイドル」`,
                [Locale.kr]: `【외전: 시공초월 아이돌】`
            },
            image: EventBanner.EVENT_0005,
            newUnit: [ UnitCode.noel, UnitCode.i_iblis ]
        },
        {
            code: '0006',
            type: EventType.POINT,
            startDate: '2021/02/08',
            endDate: '2021/02/24',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【魔界偶像大騷動】`,
                [Locale.sc]: `【魔界偶像大骚动】`,
                [Locale.en]: `[Demon Realm's Top Idol]`,
                [Locale.jp]: `「魔界アイドル大騒動」`,
                [Locale.kr]: `【마계 아이돌 대소동】`
            },
            image: EventBanner.EVENT_0006,
            newUnit: []
        },
        {
            code: '0006_CHALLENGE',
            type: EventType.CHALLENGE,
            startDate: '2021/02/17',
            endDate: '2021/02/24',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【天下第一偶像大會】`,
                [Locale.sc]: `【天下第一偶像大会】`,
                [Locale.en]: `[The Idol Smashdown]`,
                [Locale.jp]: `「天下一アイドル大会」`,
                [Locale.kr]: `【천하제일 아이돌 대회】`
            },
            image: EventBanner.EVENT_0006_CHALLENGE,
            newUnit: []
        },
    ],
    [
        {
            code: '0002',
            type: EventType.SPIRE,
            startDate: '2021/01/20',
            endDate: '2021/03/17',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: `【魔獄塔】第一季`,
                [Locale.sc]: `【魔狱塔】第一季`,
                [Locale.en]: `[The Demon Spire] Season 1`,
                [Locale.jp]: `「魔獄塔」第1シーズン`,
                [Locale.kr]: `【마옥탑】 제1시즌`
            },
            image: EventBanner.EVENT_0002,
            newUnit: []
        },
    ],
    [
        {
            code: '0001',
            type: EventType.POINT,
            startDate: '2020/12/30',
            endDate: '2021/01/13',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: `【魔族的新年祭典】`,
                [Locale.sc]: `【魔族的新年祭典】`,
                [Locale.en]: `[DEMON'S New Year Party]`,
                [Locale.jp]: `「魔族の新年祭り」`,
                [Locale.kr]: `【마족의 신년 축제】`
            },
            image: EventBanner.EVENT_0001,
            newUnit: [ UnitCode.f_baal ]
        },
        {
            code: '0003',
            type: EventType.CHALLENGE,
            startDate: '2021/01/06',
            endDate: '2021/01/13',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: `【祭典逆襲】`,
                [Locale.sc]: `【庆典反击】`,
                [Locale.en]: `[Crash the Party!!]`,
                [Locale.jp]: `【祭りの逆襲】`,
                [Locale.kr]: `【Crash the Party!!】`
            },
            image: EventBanner.EVENT_0003,
            newUnit: []
        },
    ],
]

export default events;