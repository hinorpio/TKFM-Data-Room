import { UpdateLogs } from '@/interface/updateLogs';
import { Locale, LogGroup, LogType, UnitCode, FanartOwner, PuzzleCode } from '@/plugins/utils/enums';
const events: UpdateLogs[] = [
    {
        version: 'ver.beta-0.7.0',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.LIBERATE,
                unitList: [ UnitCode.c1_nana, UnitCode.o_nana ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0187' ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `角色語音`,
                    [Locale.sc]: `角色语音`,
                    [Locale.en]: `Unit Voice`,
                    [Locale.jp]: `キャラクターボイス`,
                    [Locale.kr]: `캐릭터 보이스`
                }
            },
            {
                type: LogType.NEW,
                group: LogGroup.ART,
                ownerList: [ FanartOwner.DOKGUN ]
            },
            {
                type: LogType.CHANGE,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `外部連結`,
                    [Locale.sc]: `外部连结`,
                    [Locale.en]: `External Website`,
                    [Locale.jp]: `外部リンク`,
                    [Locale.kr]: `외부 링크`
                }
            },
            {
                type: LogType.CHANGE,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `更新日誌`,
                    [Locale.sc]: `更新日志`,
                    [Locale.en]: `Update Logs`,
                    [Locale.jp]: `更新履歴`,
                    [Locale.kr]: `업데이트 일지`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.6.2',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.sky_nanami, UnitCode.sky_baal ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.OUTFIT,
                unitList: [ UnitCode.sky_baal, UnitCode.anna, UnitCode.blaire ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0184', '0185', '0186' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.6.1',
        logs: [
            {
                type: LogType.FIX,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `角色數值計算`,
                    [Locale.sc]: `角色数值计算`,
                    [Locale.en]: `Stat Calculator`,
                    [Locale.jp]: `ステータス計算機`,
                    [Locale.kr]: `스탯 계산자`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.6.0',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `角色數值計算`,
                    [Locale.sc]: `角色数值计算`,
                    [Locale.en]: `Stat Calculator`,
                    [Locale.jp]: `ステータス計算機`,
                    [Locale.kr]: `스탯 계산자`
                }
            },
            {
                type: LogType.NEW,
                group: LogGroup.ART,
                ownerList: [ FanartOwner.VV ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.13',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.ART,
                ownerList: [ FanartOwner.ANNA_PHOENIX ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.12',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.bu_ayane ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0183' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.11',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.ss_iblis, UnitCode.s_evie, UnitCode.s_noma, UnitCode.forneusa ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0182' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.10',
        logs: [
            {
                type: LogType.FIX,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `狂犬 諾蕾蒂, 副手 貝蕾朵 立繪問題`,
                    [Locale.sc]: `狂犬 诺蕾蒂, 副手 贝蕾朵 立绘问题`,
                    [Locale.en]: `Crazed Dog Noma, Deputy Lieutenant Belladonna Image Issue`,
                    [Locale.jp]: `狂犬 ノルディ, 助手 ベレット キャラクター描画の問題`,
                    [Locale.kr]: `광견 놀라이티, 오른팔 벨레트 그림 문제`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.9',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.momDaphne, UnitCode.w_tsubaki ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0178', '0179', '0180', '0181', 'TIMERIFT_021' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.8',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.ART,
                ownerList: [ FanartOwner.XXBM ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.7',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.bedard, UnitCode.c_noel, UnitCode.eunice ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0173', '0174', '0175', '0176', '0177' ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.ART,
                ownerList: [ FanartOwner.DOKGUN ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.6',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.ART,
                ownerList: [ FanartOwner.NOEL, FanartOwner.MIMI_MAOMAO, FanartOwner.MOON_RABBIT ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.5',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.ART,
                ownerList: [ FanartOwner.C ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.4',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.star_mia, UnitCode.star_annee ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0170', '0171' ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.ART,
                ownerList: [ FanartOwner.DOKGUN ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.3',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.ART,
                ownerList: [ FanartOwner.DOKGUN ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.2',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.p_aiko, UnitCode.ni_caesar, UnitCode.f_kana ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0167', '0168', '0169' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.5.1',
        logs: [
            {
                type: LogType.FIX,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `畫作/二創 下載問題`,
                    [Locale.sc]: `画作/二创 下载问题`,
                    [Locale.en]: `Artwork / Fanart download issue`,
                    [Locale.jp]: `アートワーク / 同人のダウンロード`,
                    [Locale.kr]: `아트워크 / 팬 창작 다운로드 문제`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.0',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `CDN`,
                    [Locale.sc]: `CDN`,
                    [Locale.en]: `CDN`,
                    [Locale.jp]: `CDN`,
                    [Locale.kr]: `CDN`
                }
            },
            {
                type: LogType.NEW,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `角色圖像`,
                    [Locale.sc]: `角色图像`,
                    [Locale.en]: `Character Image`,
                    [Locale.jp]: `キャラクターイメージ`,
                    [Locale.kr]: `캐릭터 이미지`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.4.1',
        logs: [
            {
                type: LogType.FIX,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `畫作/二創 複製問題`,
                    [Locale.sc]: `画作/二创 复制问题`,
                    [Locale.en]: `Artwork / Fanart copy issue`,
                    [Locale.jp]: `アートワーク / 同人のコピー`,
                    [Locale.kr]: `아트워크 / 팬 창작 복사 문제`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.4.0',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `畫作/二創`,
                    [Locale.sc]: `画作/二创`,
                    [Locale.en]: `Artwork / Fanart`,
                    [Locale.jp]: `アートワーク / 同人`,
                    [Locale.kr]: `아트워크 / 팬 창작`
                }
            },
            {
                type: LogType.CHANGE,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `「關於本站」更新`,
                    [Locale.sc]: `「关于本站」更新`,
                    [Locale.en]: `"About" Section Update`,
                    [Locale.jp]: `「サイトについて」更新`,
                    [Locale.kr]: `『사이트 정보』 업데이트`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.3.0',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.OUTFIT,
                unitList: [ UnitCode.zaskia ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.ny_fiora, UnitCode.zaskia ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0164', '0165', '0166' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.2.2',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.LIBERATE,
                unitList: [ UnitCode.b_iblis, UnitCode.ichika ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0162', '0163' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.2.1',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.x_baal, UnitCode.x_muila, UnitCode.x_britney, UnitCode.x_ichika ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0160', '0161', 'TIMERIFT_019' ]
            },
            {
                type: LogType.CHANGE,
                group: LogGroup.GENERAL,
                content: {
                    [Locale.tc]: `R18 頁面導向問題`,
                    [Locale.sc]: `R18 页面导向问题`,
                    [Locale.en]: `R18 Page redirect issue`,
                    [Locale.jp]: `R18 ページのナビゲーション`,
                    [Locale.kr]: `R18 페이지 탐색 문제`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.1.5',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.m_nanami, UnitCode.m_ks8 ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0156', '0157', '0158', '0159' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.1.4',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.PUZZLE,
                puzzleList: [ PuzzleCode.HUMAN_MOLLY, PuzzleCode.HUMAN_ANYA ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.susan, UnitCode.h_satan ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0153', '0154', 'TIMERIFT_018', '0155' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.1.3',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.f_baal, UnitCode.noel ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0151', '0152' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.1.2',
        logs: [
            {
                type: LogType.CHANGE,
                group: LogGroup.PUZZLE,
                puzzleList: [ PuzzleCode.EVENT_2023_SUMMER_1, PuzzleCode.EVENT_2023_SUMMER_2, PuzzleCode.EVENT_2023_SUMMER_3, PuzzleCode.EVENT_2023_SUMMER_4 ]
            },
        ]
    },
    {
        version: 'ver.beta-0.1.1',
        logs: [
            {
                type: LogType.CHANGE,
                group: LogGroup.GENERAL,
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
                group: LogGroup.GENERAL,
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
                group: LogGroup.GENERAL,
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
                group: LogGroup.SKILL,
                unitList: [ UnitCode.h_shiro ]
            },
        ]
    },
    {
        version: 'ver.beta-0.0.10',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.UNIT,
                unitList: [ UnitCode.amethystina, UnitCode.bg_ayane, UnitCode.bg_iblis ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0148', '0149', '0150' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.0.9',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0146', '0147' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.0.8',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.GENERAL,
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
                group: LogGroup.GENERAL,
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
                group: LogGroup.GENERAL,
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
                group: LogGroup.UNIT,
                unitList: [ UnitCode.beer_shizuka, UnitCode.tsubaki ]
            },
            {
                type: LogType.NEW,
                group: LogGroup.EVENT,
                eventList: [ '0144', '0145', 'TIMERIFT_017' ]
            },
        ]
    },
    {
        version: 'ver.beta-0.0.6',
        logs: [
            {
                type: LogType.NEW,
                group: LogGroup.GENERAL,
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
                group: LogGroup.GENERAL,
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
                group: LogGroup.GENERAL,
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
                group: LogGroup.GENERAL,
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
                group: LogGroup.GENERAL,
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
                group: LogGroup.GENERAL,
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
                group: LogGroup.GENERAL,
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