import { UpdateLogs } from '@/interface/updateLogs';
import { Locale, LogType } from '@/plugins/utils/enums';
const events: UpdateLogs[] = [
    {
        version: 'ver.beta-0.1.4',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `相關拼圖 & 全境徵才: 獵犬小隊 茉莉, 獵犬小隊 安雅`,
                    [Locale.sc]: `相关拼图 & 全境征才: 猎犬小队 茉莉, 猎犬小队 安雅`,
                    [Locale.en]: `Puzzle & Recruitment: Hound Hunter Molly, Hound Hunter Anya`,
                    [Locale.jp]: `パズル & 召集令: ハウンド小隊 ジュリー, ハウンド小隊 アンヤ`,
                    [Locale.kr]: `관련 퍼즐 & 전 지역 모집 필터: 하운드 소대 몰리, 하운드 소대 안야`
                }
            },
            {
                type: LogType.CHANGE,
                content: {
                    [Locale.tc]: `角色: 治癒之星 蘇珊, 純真殺意 撒旦`,
                    [Locale.sc]: `角色: 治愈之星 苏珊, 纯真杀意 撒旦`,
                    [Locale.en]: `Unit: Healing Star Susan, Genuine Murderess Satan`,
                    [Locale.jp]: `キャラ: 治癒のスター スーザン, ピュアな殺意 サタン`,
                    [Locale.kr]: `캐릭터: 치유의 별 수잔, 순수한 살의 사탄`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【驚懼撒旦夜】, 【殺意的行進】, 【時之裂縫】第十八季, 【異世界情趣店-復刻-】`,
                    [Locale.sc]: `活动: 【惊惧撒旦夜】, 【杀意的行进】, 【时之裂缝】第十八季, 【异世界情趣店-复刻-】`,
                    [Locale.en]: `Event: [Fear Satan's Night], [Murderous Path], [Time Rift] Season 18, [Parallel Paradise Toys -Comeback-]`,
                    [Locale.jp]: `イベント: 「恐怖のサタンナイト」, 「殺意の行進」, 「時空の裂け目」第18シーズン, 「異世界アダルトショップ-復刻-」`,
                    [Locale.kr]: `이벤트: 【공포스러운 사탄의 밤】, 【살의의 행진】, 【시공간의 균열】 제18시즌, 【이세계 성인용품점-복각-】`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.1.3',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `解放技能: 「祭典狂歡 巴爾」,「偶像 黑白諾艾莉」`,
                    [Locale.sc]: `解放技能: 「祭典狂欢 巴尔」,「偶像 黑白诺艾莉」`,
                    [Locale.en]: `Liberation: [Festive Ba'al], [Idol Noel]`,
                    [Locale.jp]: `解放スキル: 「祭りの バル」,「モノクロのノエル」`,
                    [Locale.kr]: `해방스킬: 「광란의 페스티벌 바알」, 「아이돌 블랙앤화이트 노엘리」`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【萬聖大驚奇-復刻-】, 【無盡搗蛋夜-復刻-】`,
                    [Locale.sc]: `活动: 【万圣大惊奇-复刻-】, 【无尽捣蛋夜-复刻-】`,
                    [Locale.en]: `Event: [Halloween Surprise -Comeback-], [Never-ending Trick -Comeback-]`,
                    [Locale.jp]: `イベント: 「ハロウィンのサプライズ-復刻-」, 「ハロウィンフィーバー-復刻-」`,
                    [Locale.kr]: `이벤트: 【할로윈 서프라이즈-복각-】, 【무한의 트릭 나잇-복각-】`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.1.2',
        logs: [
            {
                type: LogType.CHANGE,
                content: {
                    [Locale.tc]: `2023 夏日拼圖`,
                    [Locale.sc]: `2023 夏日拼图`,
                    [Locale.en]: `2023 Summer Puzzle`,
                    [Locale.jp]: `2023 夏の日 パズル`,
                    [Locale.kr]: `2023 여름 관련 퍼즐`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.1.1',
        logs: [
            {
                type: LogType.CHANGE,
                content: {
                    [Locale.tc]: `角色 韓文暱稱`,
                    [Locale.sc]: `角色 韩文昵称`,
                    [Locale.en]: `Character Korean Abbreviations`,
                    [Locale.jp]: `キャラ 韓国語 略語`,
                    [Locale.kr]: `한국어 캐릭터 약어`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.1.0',
        logs: [
            {
                type: LogType.CHANGE,
                content: {
                    [Locale.tc]: `UI調整`,
                    [Locale.sc]: `UI调整`,
                    [Locale.en]: `UI Adjustment`,
                    [Locale.jp]: `UIの調整`,
                    [Locale.kr]: `UI 조정`
                }
            },
        ]
    },
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