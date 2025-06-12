import { UpdateLogs } from '@/interface/updateLogs';
import { Locale, LogType } from '@/plugins/utils/enums';
const events: UpdateLogs[] = [
    {
        version: 'ver.beta-0.5.11',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `角色: 盛暑沁夏 伊布力斯, 夏日 希依, 夏日 諾蕾蒂, 怒濤魔鯊 芙紐絲`,
                    [Locale.sc]: `角色: 盛暑沁夏 伊布力斯, 夏日 希依, 夏日 诺蕾蒂, 怒涛魔鲨 芙纽丝`,
                    [Locale.en]: `Unit: Scalding Summer Iblis, Summer Evie, Summer Noma, Raging Shark Forneusa`,
                    [Locale.jp]: `キャラ: 真夏の清涼 イブリース, 夏の日 リリー, 夏の日 ノルディ, 怒涛の魔鮫 フォルネウス`,
                    [Locale.kr]: `캐릭터: 청량한 여름 이블리스, 여름날 릴리, 여름날 놀라이티, 노도의 마상어 포르네우스`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【深海的逆襲者】`,
                    [Locale.sc]: `活动: 【深海的逆袭者】`,
                    [Locale.en]: `Event: [Sea Counterattacker]`,
                    [Locale.jp]: `イベント: 「深海の逆襲者」`,
                    [Locale.kr]: `이벤트: 【심해의 역습자】`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.10',
        logs: [
            {
                type: LogType.FIX,
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
                content: {
                    [Locale.tc]: `角色: 盛慾嬌妻 達芙妮, 美艷少婦 椿`,
                    [Locale.sc]: `角色: 盛欲娇妻 达芙妮, 美艳少妇 椿`,
                    [Locale.en]: `Unit: Thirsty Wife Daphne, Glamorous Wife Tsubaki`,
                    [Locale.jp]: `キャラ: 溢れる欲 ダフィー, 妖艶な人妻 椿`,
                    [Locale.kr]: `캐릭터: 왕성한 성욕 더피, 매혹적인 새댁 츠바키`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【媽媽咪呀！】, 【人妻共淫時光】, 【集合啦！魔王渡假村-復刻-】, 【挑戰！渡假村評鑑-復刻-】, 【時之裂縫】第二十一季`,
                    [Locale.sc]: `活动: 【妈妈咪呀！】, 【人妻共淫时光】, 【集合啦！魔王渡假村-复刻-】, 【挑战！渡假村评鉴-复刻-】, 【时之裂缝】第二十一季`,
                    [Locale.en]: `Event: [Mommy Mia!], [Wife Kinky Time], [Summer by the Cae-side -Comeback-], [Resort Evaluation! -Comeback-], [Time Rift] Season 21`,
                    [Locale.jp]: `イベント: 「マンマミーア！」, 「人妻との淫らな一時」, 「集まれ！魔王休暇村-復刻-」, 「挑戦！休暇村ジャッジ-復刻-」, 「時空の裂け目」第21シーズン`,
                    [Locale.kr]: `이벤트: 【맘마미아!】, 【유부녀와의 음탕한 시간】, 【집합! 마왕 리조트!-복각-】, 【도전! 리조트 평가-복각-】, 【시공간의 균열】 제21시즌`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.8',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `畫作/二創: XXBM 小小布魔`,
                    [Locale.sc]: `画作/二创: XXBM 小小布魔`,
                    [Locale.en]: `Artwork / Fanart: XXBM 小小布魔`,
                    [Locale.jp]: `アートワーク / 同人: XXBM 小小布魔`,
                    [Locale.kr]: `아트워크 / 팬 창작: XXBM 小小布魔`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.7',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `角色: 甜蜜寶貝 萊爾貝妲, 躍動之星 黑白諾艾莉, 啦啦隊長 尤妮思`,
                    [Locale.sc]: `角色: 甜蜜宝贝 莱尔贝妲, 跃动之星 黑白诺艾莉, 啦啦队长 尤妮思`,
                    [Locale.en]: `Unit: Sweet Baby Lér Bédard, Star of Momentum Noel, Cheerleader Captain Eunice`,
                    [Locale.jp]: `キャラ: スイートベイビー ラベンダー, 躍動のスター ノエル, チアのキャプテン ユニス`,
                    [Locale.kr]: `캐릭터: 스위트 베이비 라벤더, 도약의 별 노엘리, 치어리더장 유니스`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【甜蜜寶貝矯正宣言】, 【舞動奇姬】, 【心之枷鎖】, 【魔獄塔】第二十四季, 【悠閒無事的本大爺凱薩邊境城鎮成為冒險者展開緊張刺激大冒險-復刻-】`,
                    [Locale.sc]: `活动: 【甜蜜宝贝矫正宣言】, 【舞动奇姬】, 【心之枷锁】, 【魔狱塔】第二十四季, 【悠闲无事的本大爷凯萨边境城镇成为冒险者展开紧张刺激大冒险-复刻-】`,
                    [Locale.en]: `Event: [Sweet Baby Correction], [Dancing Queen], [Shackles of the Heart], [The Demon Spire] Season 24, [Caesar's bored... so he joins the Adventurer's Guild! -Comeback-]`,
                    [Locale.jp]: `イベント: 「スイートベイビー矯正宣言」, 「舞い踊る姫」, 「心の枷」, 「魔獄塔」第24シーズン, 「暇で死にそうな俺様シーザー 辺境の村で冒険者になって 刺激満載の大冒險に出かけるとしよう-復刻-」`,
                    [Locale.kr]: `이벤트: 【스위트 베이비 교정 선언】, 【춤추는 공주】, 【마음의 족쇄】, 【마옥탑】 제24시즌, 【무료함을 느끼던 이 몸께서 변경 지대의 모험가가 되어 펼쳐나가는 스펙터클 어드벤처-복각-】`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `畫作/二創: 독군 Dokgun`,
                    [Locale.sc]: `画作/二创: 독군 Dokgun`,
                    [Locale.en]: `Artwork / Fanart: 독군 Dokgun`,
                    [Locale.jp]: `アートワーク / 同人: 독군 Dokgun`,
                    [Locale.kr]: `아트워크 / 팬 창작: 독군 Dokgun`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.6',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `畫作/二創: 黑白好哇塞, 咪咪貓貓, 月兔管理官`,
                    [Locale.sc]: `画作/二创: 黑白好哇塞, 咪咪貓貓, 月兔管理官`,
                    [Locale.en]: `Artwork / Fanart: 黑白好哇塞, 咪咪貓貓, 月兔管理官`,
                    [Locale.jp]: `アートワーク / 同人: 黑白好哇塞, 咪咪貓貓, 月兔管理官`,
                    [Locale.kr]: `아트워크 / 팬 창작: 黑白好哇塞, 咪咪貓貓, 月兔管理官`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.5',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `畫作/二創`,
                    [Locale.sc]: `画作/二创`,
                    [Locale.en]: `Artwork / Fanart`,
                    [Locale.jp]: `アートワーク / 同人`,
                    [Locale.kr]: `아트워크 / 팬 창작`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.4',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `角色: 銀鴞武裝 米婭, 白熊武裝 冬。艾妮`,
                    [Locale.sc]: `角色: 银鸮武装 米娅, 白熊武装 冬。艾妮`,
                    [Locale.en]: `Unit: The Silver Owl Mia, The White Cub Annee Winter`,
                    [Locale.jp]: `キャラ: フクロウ装甲 ミア, シロクマ装甲 アイニー・ウィンター`,
                    [Locale.kr]: `캐릭터: 실버아울 미아, 폴라 베어 애니．윈터`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【星欲機工隊】, 【異星：猛攻】`,
                    [Locale.sc]: `活动: 【星欲机工队】, 【异星：猛攻】`,
                    [Locale.en]: `Event: [Star Lusts Squad], [Alien Planet: Assault]`,
                    [Locale.jp]: `イベント: 「星欲機工隊」, 「異星：猛攻」`,
                    [Locale.kr]: `이벤트: 【스타러스트 기공대】, 【이계 행성: 맹공】`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `畫作/二創: 독군 Dokgun`,
                    [Locale.sc]: `画作/二创: 독군 Dokgun`,
                    [Locale.en]: `Artwork / Fanart: 독군 Dokgun`,
                    [Locale.jp]: `アートワーク / 同人: 독군 Dokgun`,
                    [Locale.kr]: `아트워크 / 팬 창작: 독군 Dokgun`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.3',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `畫作/二創: 독군 Dokgun`,
                    [Locale.sc]: `画作/二创: 독군 Dokgun`,
                    [Locale.en]: `Artwork / Fanart: 독군 Dokgun`,
                    [Locale.jp]: `アートワーク / 同人: 독군 Dokgun`,
                    [Locale.kr]: `아트워크 / 팬 창작: 독군 Dokgun`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.2',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `角色: 虔信神祀 艾可, 夜之影 凱薩, 祭典花韻 香奈`,
                    [Locale.sc]: `角色: 虔信神祀 艾可, 夜之影 凯萨, 祭典花韵 香奈`,
                    [Locale.en]: `Unit: Devout Miko Aiko, Night Shadow Caesar, Festival Blossom Kana`,
                    [Locale.jp]: `キャラ: 敬虔な神祭 アイカ, 夜ノ影 シーザー, 祭りの花 香奈`,
                    [Locale.kr]: `캐릭터: 경신신사 아이카, 밤의 그림자 시저, 제전의 꽃 카나`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【烈日逢妖譚】, 【極悅！春日祭】, 【魔法少女☆托特拉-復刻-】`,
                    [Locale.sc]: `活动: 【烈日逢妖譚】, 【极悦！春日祭】, 【魔法少女☆托特拉-复刻-】`,
                    [Locale.en]: `Event: [Demon Encounters], [Ultimate Joy! Spring Festival], [Knight ☆ Tyrella -Comeback-]`,
                    [Locale.jp]: `イベント: 「妖魔邂逅録」, 「喜極！春祭り」, 「魔法少女☆トトラ-復刻-」`,
                    [Locale.kr]: `이벤트: 【태양과 요물의 만남】, 【극락! 봄맞이 축제】, 【마법소녀☆토타라-복각-】`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.5.1',
        logs: [
            {
                type: LogType.FIX,
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
                content: {
                    [Locale.tc]: `「關於本站」更新`,
                    [Locale.sc]: `画作/二创`,
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
                content: {
                    [Locale.tc]: `簡易造型`,
                    [Locale.sc]: `简易造型`,
                    [Locale.en]: `Simple Outfits`,
                    [Locale.jp]: `簡易スキン`,
                    [Locale.kr]: `간이 스킨`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `角色: 喜迎性春 菲歐菈, 舞焰赤龍 薩夏`,
                    [Locale.sc]: `角色: 喜迎性春 菲欧菈, 舞焰赤龙 萨夏`,
                    [Locale.en]: `Unit: Spring Lust Fiora, Dancing Dragon Zaskia`,
                    [Locale.jp]: `キャラ: 性なる迎春 フィオラ, 炎舞の赤竜 サーシャ`,
                    [Locale.kr]: `캐릭터: 성의 봄맞이 피오라, 춤추는 불꽃의 적룡 사샤`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【精遊記】, 【凱薩大鬧火焰山】, 【魔獄塔】第二十三季`,
                    [Locale.sc]: `活动: 【精游记】, 【凯萨大闹火焰山】, 【魔狱塔】第二十三季`,
                    [Locale.en]: `Event: [Journey to the Jizz], [Caesar's Moutain Hellfire], [The Demon Spire] Season 23`,
                    [Locale.jp]: `イベント: 「精遊記」, 「シーザーが火焔山で大暴れ」, 「魔獄塔」第23シーズン`,
                    [Locale.kr]: `이벤트: 【정유기】, 【시저의 화염산 대소동】, 【마옥탑】 제23시즌`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.2.2',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `解放技能: 「花嫁 伊布力斯」,「雪姬 初華」`,
                    [Locale.sc]: `解放技能: 「花嫁 伊布力斯」,「雪姬 初华」`,
                    [Locale.en]: `Liberation: [Bride Iblis], [Yuki-Hime Ichika]`,
                    [Locale.jp]: `解放スキル: 「花嫁 イブリース」,「雪姫 初華」`,
                    [Locale.kr]: `해방스킬: 「새신부 이블리스」, 「유키히메 이치카」`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【風雲！新春大運動會-復刻-】, 【勝負！風林火山-復刻-】`,
                    [Locale.sc]: `活动: 【风云！新春大运动会-复刻-】, 【胜负！风林火山-复刻-】`,
                    [Locale.en]: `Event: [Field Day -Comeback-], [The Final Battle! -Comeback-]`,
                    [Locale.jp]: `イベント: 「風雲！新春大運動会-復刻-」, 「勝負！風林火山-復刻-」`,
                    [Locale.kr]: `이벤트: 【풍운! 신춘 대운동회-복각-】, 【승부! 풍림화산-복각-】`
                }
            },
        ]
    },
    {
        version: 'ver.beta-0.2.1',
        logs: [
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `角色: 性誕魔王 巴爾, 純真祈願 牧愛菈, 聖夜奇謀 布蘭妮, 翩舞雪花 初華`,
                    [Locale.sc]: `角色: 性诞魔王 巴尔, 纯真祈愿 牧爱菈, 圣夜奇谋 布兰妮, 翩舞雪花 初华`,
                    [Locale.en]: `Unit: Sexmas Demon Ba'al, Pure Prayer Muila, Conspirator Britney, Snowflake Ichika`,
                    [Locale.jp]: `キャラ: セックスマス魔王 バル, 純粋な祈り マイラ, 聖夜の奇策 ブリトニー, 舞い散る雪の花 初華`,
                    [Locale.kr]: `캐릭터: 섹스마스 마왕 바알, 순진한 소원 무엘라, 크리스마스의 기책 브리트니, 춤추는 눈꽃 이치카`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【聖誕的少女想要愛】, 【聖誕無戰事】, 【時之裂縫】第十九季`,
                    [Locale.sc]: `活动: 【圣诞的少女想要爱】, 【圣诞无战事】, 【时之裂缝】第十九季`,
                    [Locale.en]: `Event: [Christmas Love], [No Battle on Christmas], [Time Rift] Season 19`,
                    [Locale.jp]: `イベント: 「クリスマス少女は愛がほしい」, 「クリスマス休戦」, 「時空の裂け目」第19シーズン`,
                    [Locale.kr]: `이벤트: 【크리스마스 소녀는 사랑을 원해】, 【크리스마스의 평화】, 【시공간의 균열】 제19시즌`
                }
            },
            {
                type: LogType.CHANGE,
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
                content: {
                    [Locale.tc]: `角色: 甜蜜女僕 星空奈奈美, 冷淡女僕 KS-Ⅷ`,
                    [Locale.sc]: `角色: 甜蜜女仆 星空奈奈美, 冷淡女仆 KS-Ⅷ`,
                    [Locale.en]: `Unit: Sweet Maid Nanami, Cold Maid KS-Ⅷ`,
                    [Locale.jp]: `キャラ: 甘いメイド 星空ななみ, 冷酷メイド KS-Ⅷ`,
                    [Locale.kr]: `캐릭터: 달콤한 메이드 나나미, 냉담한 메이드 KS-Ⅷ`
                }
            },
            {
                type: LogType.NEW,
                content: {
                    [Locale.tc]: `活動: 【夢幻偶像☆一日女僕】, 【☆星光少女☆】, 【魔獄塔】第二十二季, 【空氣怪獸大戰-復刻-】`,
                    [Locale.sc]: `活动: 【梦幻偶像☆一日女仆】, 【☆星光少女☆】, 【魔狱塔】第二十二季, 【空气怪兽大战-复刻-】`,
                    [Locale.en]: `Event: [Dreamy Idol ☆ Maid], [☆ Starlight Girl ☆], [The Demon Spire] Season 22, [The Battle of Thin Air -Comeback-]`,
                    [Locale.jp]: `イベント: 「夢のアイドル☆1日メイド」, 「☆スターライトガール☆」, 「魔獄塔」第22シーズン, 「空気怪獣ごっこ-復刻-」`,
                    [Locale.kr]: `이벤트: 【꿈의 아이돌☆일일 메이드】, 【☆스타라이트 걸☆】, 【마옥탑】 제22시즌, 【공기 괴수 대전-복각-】`
                }
            },
        ]
    },
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
                type: LogType.NEW,
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