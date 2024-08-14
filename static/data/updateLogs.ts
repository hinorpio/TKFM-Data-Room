import { UpdateLogs } from '@/interface/updateLogs';
import { Locale, LogType } from '@/plugins/utils/enums';
const events: UpdateLogs[] = [
    {
        version: 'ver.beta-0.0.6',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `全境徵才: 依標籤組合`,
                    [Locale.sc]: `全境征才: 依标签组合`,
                    [Locale.en]: `Recruitment: Filter By Combination`,
                    [Locale.jp]: `召集令: タグの組み合わせ`,
                    [Locale.kr]: `전 지역 모집: 태그 조합`
                }
            }
        ]
    },
    {
        version: 'ver.beta-0.0.5',
        logs: [
            {
                type: LogType.CHANGE,
                content: {
                    [Locale.tc]: `解放技能: 絆數資料`,
                    [Locale.sc]: `解放技能: 绊数资料`,
                    [Locale.en]: `Liberation: Bond Data`,
                    [Locale.jp]: `解放スキル: 絆データ`,
                    [Locale.kr]: `해방스킬: 구속력 데이터`
                }
            }
        ]
    },
    {
        version: 'ver.beta-0.0.4',
        logs: [
            {
                type: LogType.FIX,
                content: {
                    [Locale.tc]: `R18 頁面導向問題`,
                    [Locale.sc]: `R18 页面导向问题`,
                    [Locale.en]: `R18 Page redirect issue`,
                    [Locale.jp]: `R18 ページのナビゲーション`,
                    [Locale.kr]: `R18 페이지 탐색 문제`
                }
            },
            {
                type: LogType.CHANGE,
                content: {
                    [Locale.tc]: `解放技能: 简中版, English Ver`,
                    [Locale.sc]: `解放技能: 简中版, English Ver`,
                    [Locale.en]: `Liberation: 简中版, English Ver`,
                    [Locale.jp]: `解放スキル: 简中版, English Ver`,
                    [Locale.kr]: `해방스킬: 简中版, English Ver`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.0.3',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `简中版, English Ver`,
                    [Locale.sc]: `简中版, English Ver`,
                    [Locale.en]: `简中版, English Ver`,
                    [Locale.jp]: `简中版, English Ver`,
                    [Locale.kr]: `简中版, English Ver`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.0.2',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `R18 頁面`,
                    [Locale.sc]: `R18 页面`,
                    [Locale.en]: `R18 Page`,
                    [Locale.jp]: `R18 ページ`,
                    [Locale.kr]: `R18 페이지`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.0.1',
        logs: [
            {
                type: LogType.OTHER,
                content: {
                    [Locale.tc]: `網站設置`,
                    [Locale.sc]: `网站设置`,
                    [Locale.en]: `Website published`,
                    [Locale.jp]: `サイト開設`,
                    [Locale.kr]: `사이트 개설`
                }
            },
        ]
    },
]

export default events;