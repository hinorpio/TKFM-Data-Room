import { UpdateLogs } from '@/interface/updateLogs';
import { Locale, LogType } from '@/plugins/utils/enums';
const events: UpdateLogs[] = [
    {
        version: 'ver.beta-0.0.12',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `한국어 Ver`,
                    [Locale.sc]: `한국어 Ver`,
                    [Locale.en]: `한국어 Ver`,
                    [Locale.jp]: `한국어 Ver`,
                    [Locale.kr]: `한국어 Ver`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.0.11',
        logs: [
            {
                type: LogType.FIX,
                content: {
                    [Locale.tc]: `角色技能: 調皮搗蛋 白`,
                    [Locale.sc]: `角色技能: 调皮捣蛋 白`,
                    [Locale.en]: `Unit Skillset: Naughty Tirxie Shiro`,
                    [Locale.jp]: `キャラスキル: イタズラっ子 ハク`,
                    [Locale.kr]: `캐릭터 스킬: 말썽쟁이 하쿠`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.0.10',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `角色: 占星師 亞美西思特, 勇者兔女郎 神田綾音, 性感兔女郎 伊布力斯`,
                    [Locale.sc]: `角色: 占星师 亚美西思特, 勇者兔女郎 神田綾音, 性感兔女郎 伊布力斯`,
                    [Locale.en]: `Unit: Clairvoyant Amethystina, Bunny Croupier Ayane, Bunny Croupier Amethystina`,
                    [Locale.jp]: `キャラ: 星占い師 アメシスト, 勇者バニー 神田綾音, エッチバニー イブリース`,
                    [Locale.kr]: `캐릭터: 점술사 아메시스트, 용자 바니걸 칸다 아야네, 섹시 바니걸 이블리스`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【本大爺娛樂城】, 【星宿的指引】, 【魔獄塔】第二十一季`,
                    [Locale.sc]: `活动: 【本大爷娱乐城】, 【星宿的指引】, 【魔狱塔】第二十一季`,
                    [Locale.en]: `Event: [Master's Wonderland], [Cosmic Guidance], [The Demon Spire] Season 21`,
                    [Locale.jp]: `イベント: 「俺様のカジノ」, 「星宿の導き」, 「魔獄塔」第21シーズン`,
                    [Locale.kr]: `이벤트: 【이 몸의 카지노】, 【별자리의 안내】, 【마옥탑】 제21시즌`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.0.9',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【來自星空的妳-復刻-】, 【朋友與加班-復刻-】`,
                    [Locale.sc]: `活动: 【来自星空的妳-复刻-】, 【朋友与加班-复刻-】`,
                    [Locale.en]: `Event: [From the Stars -Comeback-], [Friends and Overtime -Comeback-]`,
                    [Locale.jp]: `イベント: 「星から来たあなた-復刻-」, 「友達と残業-復刻-」`,
                    [Locale.kr]: `이벤트: 【별에서 온 그녀-복각-】, 【친구와 야근-복각-】`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.0.8',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `日本語 Ver`,
                    [Locale.sc]: `日本語 Ver`,
                    [Locale.en]: `日本語 Ver`,
                    [Locale.jp]: `日本語 Ver`,
                    [Locale.kr]: `日本語 Ver`
                }
            },
            {
                type: LogType.CHANGE,
                content: {
                    [Locale.tc]: `全境徵才: 依標籤組合 - SR優先排序&外框顏色`,
                    [Locale.sc]: `全境征才: 依标签组合 - SR优先排序&外框颜色`,
                    [Locale.en]: `Recruitment: Filter By Combination - SR Sort & Tag Color`,
                    [Locale.jp]: `召集令: タグの組み合わせ - SRソート & タグカラー`,
                    [Locale.kr]: `전 지역 모집: 태그 조합 - SR 정렬 & 태그 색상`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.0.7',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `更新日誌`,
                    [Locale.sc]: `更新日誌`,
                    [Locale.en]: `Update Logs`,
                    [Locale.jp]: `更新履歴`,
                    [Locale.kr]: `업데이트 일지`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `角色: 酩酊狂歡 靜, 千年靈狐 椿`,
                    [Locale.sc]: `角色: 酩酊狂欢 静, 千年灵狐 椿`,
                    [Locale.en]: `Unit: Drunken Feaster Shizuka, Millennium Fox Tsubaki`,
                    [Locale.jp]: `キャラ: 酔狂の宴 静, 千年の妖狐 椿`,
                    [Locale.kr]: `캐릭터: 곤드레만드레 시즈카, 천년의 영호 츠바키`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【妖狐與她的產地】, 【人妻系列】, 【時之裂縫】第十七季`,
                    [Locale.sc]: `活动: 【妖狐与她的产地】, 【人妻系列】, 【时之裂缝】第十七季`,
                    [Locale.en]: `Event: [Fox & Her Homeland], [Wife Series], [Time Rift] Season 17`,
                    [Locale.jp]: `イベント: 「妖狐とその生息地」, 「人妻シリーズ」, 「時空の裂け目」第17シーズン`,
                    [Locale.kr]: `이벤트: 【요호와 그녀의 생식지】, 【유부녀 시리즈】, 【시공간의 균열】 제17시즌`
                }
            },
        ]
    },
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