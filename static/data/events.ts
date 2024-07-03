import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';
const events: Event[][] = [
    [
        {
            code: 'TIMERIFT_005',
            type: EventType.TIMERIFT,
            startDate: '2022/05/25',
            endDate: '2022/08/03',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: '【時之裂縫】第五季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【緊急事件！惡兔襲來！】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0049,
            newUnit: []
        },
    ],
    [
        {
            code: '0048',
            type: EventType.STONE,
            startDate: '2022/05/11',
            endDate: '2022/05/25',
            color: EventTypeColor.STONE,
            name: {
                [Locale.tc]: '【魔族朋友】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔境奇遊~LuLu的奇幻旅程~】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【法庭派對】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔獄塔】第八季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【凱薩½】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔王的三個挑戰】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【時之裂縫】第四季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔王被遠征】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【帶來幸福的婚紗】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔王的執念】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【正月祭典】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【正月遊戲】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0038,
            newUnit: []
        },
    ],
    [
        {
            code: '0036',
            type: EventType.SPIRE,
            startDate: '2022/01/26',
            endDate: '2022/04/13',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: '【魔獄塔】第七季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔族的新年祭典-復刻-】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【祭典逆襲-復刻-】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【時之裂縫】第三季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【女僕響叮噹】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【絕倫性誕夜】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【異世界情趣店】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0033,
            newUnit: []
        },
    ],
    [
        {
            code: '0032',
            type: EventType.SPIRE,
            startDate: '2021/12/01',
            endDate: '2022/01/26',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: '【魔獄塔】第六季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0032,
            newUnit: []
        },
    ],
    [
        {
            code: '0031',
            type: EventType.MATERIAL,
            startDate: '2021/11/17',
            endDate: '2021/12/01',
            color: EventTypeColor.MATERIAL,
            name: {
                [Locale.tc]: '【疾速奔馳！人馬娘！】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【萬聖大驚奇】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【無盡搗蛋夜】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0030,
            newUnit: []
        },
    ],
    [
        {
            code: 'TIMERIFT_002',
            type: EventType.TIMERIFT,
            startDate: '2021/10/13',
            endDate: '2021/12/29',
            color: EventTypeColor.TIMERIFT,
            name: {
                [Locale.tc]: '【時之裂縫】第二季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_TIMERIFT,
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
                [Locale.tc]: '【極樂狂宴】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0028,
            newUnit: []
        },
    ],
    [
        {
            code: '0027',
            type: EventType.STONE,
            startDate: '2021/09/29',
            endDate: '2021/10/13',
            color: EventTypeColor.STONE,
            name: {
                [Locale.tc]: '【龍玉之謎-風起雲湧大冒險】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔獄塔】第五季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【月夜的童話】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【狂歡之夜】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0025,
            newUnit: []
        },
    ],
    [
        {
            code: '0023',
            type: EventType.MATERIAL,
            startDate: '2021/08/25',
            endDate: '2021/09/08',
            color: EventTypeColor.MATERIAL,
            name: {
                [Locale.tc]: '【魔王城夜未眠】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【裁縫大搜查線】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【祈願的復仇者】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【時之裂縫】BETA版',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔法少女☆托特拉】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔獄塔】第四季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【集合啦！魔王渡假村】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【第二階段：悠閒的拼圖時間】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【第三階段：挑戰！渡假村評鑑】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0017,
            newUnit: []
        },
    ],
    [
        {
            code: '0014',
            type: EventType.STONE,
            startDate: '2021/05/26',
            endDate: '2021/06/02',
            color: EventTypeColor.STONE,
            name: {
                [Locale.tc]: '【外傳：世界終結之日】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔獄塔】第三季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【復活的「C」】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【復活節蛋蛋大進擊】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【十倍怨念奉還】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0011,
            newUnit: []
        },
    ],
    [
        {
            code: '0009',
            type: EventType.SPIRE,
            startDate: '2021/03/17',
            endDate: '2021/05/19',
            color: EventTypeColor.SPIRE,
            name: {
                [Locale.tc]: '【魔獄塔】第二季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0009,
            newUnit: []
        },
    ],
    [
        {
            code: '0008',
            type: EventType.STONE,
            startDate: '2021/03/17',
            endDate: '2021/03/24',
            color: EventTypeColor.STONE,
            name: {
                [Locale.tc]: '【蛇女戰記】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0008,
            newUnit: []
        },
    ],
    [
        {
            code: '0007',
            type: EventType.MATERIAL,
            startDate: '2021/02/03',
            endDate: '2021/02/24',
            color: EventTypeColor.MATERIAL,
            name: {
                [Locale.tc]: '【狩獵假期】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【外傳：超時空偶像－黑白諾艾莉✰】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔界偶像大騷動】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【天下第一偶像大會】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔獄塔】第一季',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【魔族的新年祭典】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
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
                [Locale.tc]: '【祭典逆襲】',
                [Locale.sc]: '',
                [Locale.en]: '',
                [Locale.jp]: '',
                [Locale.kr]: ''
            },
            image: EventBanner.EVENT_0003,
            newUnit: []
        },
    ],
]

export default events;