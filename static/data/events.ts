import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';
const events: Event[][] = [
    [
        {
            code: '0140',
            type: EventType.SPIRE,
            startDate: '2023/07/10',
            endDate: '2024/09/18',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: "【魔獄塔】第二十季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【向大洋進發-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【海盜王的祕寶-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第十五季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【混亂的碧海狂潮！】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0136,
            newUnit: []
        },
        {
            code: '0137',
            type: EventType.CHALLENGE,
            startDate: '2024/06/19',
            endDate: '2024/07/03',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【乙姬的怒火】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔族朋友-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第十九季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【怪異村莊調查錄】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0132,
            newUnit: []
        },
        {
            code: '0133',
            type: EventType.GUILDBOSS,
            startDate: '2024/05/15',
            endDate: '2024/05/29',
            color: EventTypeColor.GUILDBOSS,
            name: {
                [Locale.tc]: "【Vkdgrz ri Wkh Vxsuhph Rqh】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第十五季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【傳說中的魔法少女-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【正義、智謀與魔杖-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【露露想要開派對】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0127,
            newUnit: []
        },
        {
            code: '0128',
            type: EventType.CHALLENGE,
            startDate: '2024/04/17',
            endDate: '2024/04/24',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【後宮們的睡衣枕頭戰】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第十八季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【女僕與魔法-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第十四季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【獸耳鄉的傳說】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0124,
            newUnit: []
        },
        {
            code: '0125',
            type: EventType.CHALLENGE,
            startDate: '2024/03/20',
            endDate: '2024/03/27',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【古墓的詛咒】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【悠閒無事的本大爺凱薩邊境城鎮成為冒險者展開緊張刺激大冒險-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【Automaton's Dream！】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0119,
            newUnit: []
        },
        {
            code: '0120',
            type: EventType.CHALLENGE,
            startDate: '2024/02/14',
            endDate: '2024/02/28',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【星光璀璨☆超級偶像大對決～♪】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【啪啪偶像祭】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第十七季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【獵犬小隊派遣中！】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0117,
            newUnit: []
        },
        {
            code: '0118',
            type: EventType.CHALLENGE,
            startDate: '2024/01/31',
            endDate: '2024/02/05',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【槍炮、刺刀&獵犬】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第十三季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【聖誕之約】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0116,
            newUnit: []
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
                [Locale.tc]: "【龍玉之謎-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第十六季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【慾神降臨 異界幻想】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0112,
            newUnit: []
        },
        {
            code: '0113',
            type: EventType.CHALLENGE,
            startDate: '2023/11/22',
            endDate: '2023/12/06',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【黑夜倩影】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【極樂狂宴-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第十二季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【萬聖鹿娘大橫行！】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0109,
            newUnit: []
        },
        {
            code: '0110',
            type: EventType.GUILDBOSS,
            startDate: '2023/10/25',
            endDate: '2023/11/08',
            color: EventTypeColor.GUILDBOSS,
            name: {
                [Locale.tc]: "【萬聖闖關城】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【疾速奔馳！人馬娘！-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第十五季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【遊戲夜驚魂】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0105,
            newUnit: []
        },
        {
            code: '0106',
            type: EventType.CHALLENGE,
            startDate: '2023/09/27',
            endDate: '2023/10/11',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【Vtuber】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【裁縫的大搜查線-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【祈願的復仇者-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第十一季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【Biadlo IX 魔影再臨】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0101,
            newUnit: []
        },
        {
            code: '0102',
            type: EventType.CHALLENGE,
            startDate: '2023/08/16',
            endDate: '2023/08/30',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【Biadlo IX 毀滅之偶】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔法少女☆托特拉】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【向大洋進發】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0097,
            newUnit: []
        },
        {
            code: '0098',
            type: EventType.CHALLENGE,
            startDate: '2023/07/19',
            endDate: '2023/08/02',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【海盜王的祕寶】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第十四季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【外傳：世界終結之日-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【泳裝賽艇大作戰】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0094,
            newUnit: []
        },
        {
            code: '0095',
            type: EventType.CHALLENGE,
            startDate: '2023/06/21',
            endDate: '2023/07/05',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【喬許の野望】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔王城夜未眠-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第十季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【背德心療系】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0091,
            newUnit: []
        },
        {
            code: '0092',
            type: EventType.CHALLENGE,
            startDate: '2023/05/17',
            endDate: '2023/05/31',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【醫療器材錯誤使用法】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【凱薩魔王事件簿】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【事件現場】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第十三季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【傳說中的魔法少女】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0086,
            newUnit: []
        },
        {
            code: '0087',
            type: EventType.CHALLENGE,
            startDate: '2023/04/19',
            endDate: '2023/04/26',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【正義、智謀與魔杖】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔境奇遊~LuLu的奇幻旅程~-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【法庭派對-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【請問要來點獸耳嗎？】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0082,
            newUnit: []
        },
        {
            code: '0083',
            type: EventType.CHALLENGE,
            startDate: '2023/03/15',
            endDate: '2023/03/29',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【全魔族獸耳化計畫】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第九季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【空氣怪獸大戰】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【甜蜜陷阱 巧克力大騷動】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0079,
            newUnit: []
        },
        {
            code: '0080',
            type: EventType.CHALLENGE,
            startDate: '2023/02/15',
            endDate: '2023/03/01',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【巧克力帝國的野心】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第十二季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【風雲！新春大運動會】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0076,
            newUnit: []
        },
        {
            code: '0077',
            type: EventType.CHALLENGE,
            startDate: '2023/01/25',
            endDate: '2023/02/08',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【勝負！風林火山】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【正月祭典-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【正月遊戲-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第八季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【絕對聖誕~靜的秘湯巡禮】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0072,
            newUnit: []
        },
        {
            code: '0073',
            type: EventType.CHALLENGE,
            startDate: '2022/12/28',
            endDate: '2023/01/11',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【雪色聖誕夜】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【復活節蛋蛋大進擊】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【十倍怨念大奉還】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第十一季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【AbysSeducer邊境行商】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0068,
            newUnit: []
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
                [Locale.tc]: "【異世界情趣店-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【鮮血城X少女狂想曲】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0065,
            newUnit: []
        },
        {
            code: '0066',
            type: EventType.CHALLENGE,
            startDate: '2022/11/09',
            endDate: '2022/11/16',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【洛緹亞萬聖塔】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第七季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【悠閒無事的本大爺凱薩邊境城鎮成為冒險者展開緊張刺激大冒險】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0064,
            newUnit: []
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
                [Locale.tc]: "【外傳：超時空偶像-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔界偶像大騷動-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【天下第一偶像大會-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【蛇女戰記】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第十季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【來自星空的妳】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0057,
            newUnit: []
        },
        {
            code: '0058',
            type: EventType.CHALLENGE,
            startDate: '2022/09/21',
            endDate: '2022/09/28',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【朋友與加班】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【女僕&魔法】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0056,
            newUnit: []
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
                [Locale.tc]: "【Pasadena~被七夕分離的兩人】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0054,
            newUnit: []
        },
        {
            code: '0055',
            type: EventType.CHALLENGE,
            startDate: '2022/08/10',
            endDate: '2022/08/24',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【Let's Party All Night！】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第六季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【凱薩魔王事件簿】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0053,
            newUnit: []
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
                [Locale.tc]: "【魔獄塔】第九季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【渡假村改建王】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0050,
            newUnit: []
        },
        {
            code: '0051',
            type: EventType.CHALLENGE,
            startDate: '2022/07/06',
            endDate: '2022/07/13',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【渡假村大改建】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第五季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【緊急事件！惡兔襲來！】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0049,
            newUnit: []
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
                [Locale.tc]: "【魔族朋友】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0048,
            newUnit: []
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
                [Locale.tc]: "【魔境奇遊~LuLu的奇幻旅程~】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0046,
            newUnit: []
        },
        {
            code: '0047',
            type: EventType.CHALLENGE,
            startDate: '2022/05/04',
            endDate: '2022/05/11',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【法庭派對】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第八季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【凱薩½】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0043,
            newUnit: []
        },
        {
            code: '0044',
            type: EventType.CHALLENGE,
            startDate: '2022/04/06',
            endDate: '2022/04/20',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【魔王的三個挑戰】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第四季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔王被遠征】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0042,
            newUnit: []
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
                [Locale.tc]: "【帶來幸福的婚紗】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0039,
            newUnit: []
        },
        {
            code: '0040',
            type: EventType.CHALLENGE,
            startDate: '2022/02/16',
            endDate: '2022/03/09',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【魔王的執念】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【正月祭典】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0037,
            newUnit: []
        },
        {
            code: '0038',
            type: EventType.CHALLENGE,
            startDate: '2022/02/02',
            endDate: '2022/02/16',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【正月遊戲】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第七季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔族的新年祭典-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【祭典逆襲-復刻-】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】第三季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【女僕響叮噹】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0034,
            newUnit: []
        },
        {
            code: '0035',
            type: EventType.CHALLENGE,
            startDate: '2021/12/29',
            endDate: '2021/01/12',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【絕倫性誕夜】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【異世界情趣店】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0033,
            newUnit: []
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
                [Locale.tc]: "【疾速奔馳！人馬娘！】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0031,
            newUnit: []
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
                [Locale.tc]: "【萬聖大驚奇】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0029,
            newUnit: []
        },
        {
            code: '0030',
            type: EventType.CHALLENGE,
            startDate: '2021/11/03',
            endDate: '2021/11/17',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【無盡搗蛋夜】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【極樂狂宴】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0028,
            newUnit: []
        },
        {
            code: 'TIMERIFT_002',
            type: EventType.TIMERIFT,
            startDate: '2021/10/13',
            endDate: '2021/12/29',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: "【時之裂縫】第二季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【龍玉之謎-風起雲湧大冒險】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0027,
            newUnit: []
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
                [Locale.tc]: "【魔獄塔】第五季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【月夜的童話】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0024,
            newUnit: []
        },
        {
            code: '0025',
            type: EventType.CHALLENGE,
            startDate: '2021/09/15',
            endDate: '2021/09/29',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【狂歡之夜】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔王城夜未眠】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0023,
            newUnit: []
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
                [Locale.tc]: "【裁縫大搜查線】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0021,
            newUnit: []
        },
        {
            code: '0022',
            type: EventType.CHALLENGE,
            startDate: '2021/08/11',
            endDate: '2021/08/25',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【祈願的復仇者】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【時之裂縫】BETA版",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔法少女☆托特拉】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0019,
            newUnit: []
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
                [Locale.tc]: "【魔獄塔】第四季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【集合啦！魔王渡假村】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0015,
            newUnit: []
        },
        {
            code: '0016',
            type: EventType.SPECIAL,
            startDate: '2021/06/16',
            endDate: '2021/07/14',
            color: EventTypeColor.SPECIAL,
            name: {
                [Locale.tc]: "【第二階段：悠閒的拼圖時間】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【第三階段：挑戰！渡假村評鑑】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【外傳：世界終結之日】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0014,
            newUnit: []
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
                [Locale.tc]: "【魔獄塔】第三季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【復活的「C」】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0012,
            newUnit: []
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
                [Locale.tc]: "【復活節蛋蛋大進擊】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0010,
            newUnit: [ UnitCode.satan ]
        },
        {
            code: '0011',
            type: EventType.CHALLENGE,
            startDate: '2021/04/14',
            endDate: '2021/04/21',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【十倍怨念奉還】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【蛇女戰記】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0008,
            newUnit: []
        },
        {
            code: '0009',
            type: EventType.SPIRE,
            startDate: '2021/03/17',
            endDate: '2021/05/19',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: "【魔獄塔】第二季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【狩獵假期】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【外傳：超時空偶像－黑白諾艾莉✰】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0005,
            newUnit: [ UnitCode.baal, UnitCode.iblis ]
        },
        {
            code: '0006',
            type: EventType.POINT,
            startDate: '2021/02/08',
            endDate: '2021/02/24',
            color: EventTypeColor.POINT,
            name: {
                [Locale.tc]: "【魔界偶像大騷動】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【天下第一偶像大會】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔獄塔】第一季",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
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
                [Locale.tc]: "【魔族的新年祭典】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0001,
            newUnit: [ UnitCode.baal ]
        },
        {
            code: '0003',
            type: EventType.CHALLENGE,
            startDate: '2021/01/06',
            endDate: '2021/01/13',
            color: EventTypeColor.CHALLENGE,
            name: {
                [Locale.tc]: "【祭典逆襲】",
                [Locale.sc]: "",
                [Locale.en]: "",
                [Locale.jp]: "",
                [Locale.kr]: ""
            },
            image: EventBanner.EVENT_0003,
            newUnit: []
        },
    ],
]

export default events;