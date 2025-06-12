import { Puzzle } from '@/interface/puzzle';
import { Locale, PuzzleType, PuzzleCode } from '@/plugins/utils/enums';
import { PuzzlePreview, PuzzleImage } from '~/static/const';
const puzzles: Puzzle[] = [
    {
        code: PuzzleCode.EVENT_2021_SUMMER_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_SUMMER_1,
        name: {
            [Locale.tc]: `最刺激的水上活動`,
            [Locale.sc]: `最刺激的水上活动`,
            [Locale.en]: `Extreme Water Sports`,
            [Locale.jp]: `刺激的な水上イベント`,
            [Locale.kr]: `가장 짜릿한 수상 이벤트`
        },
        fullImage: PuzzleImage.EVENT_2021_SUMMER_1,
    },
    {
        code: PuzzleCode.EVENT_2021_SUMMER_1_DMM,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_SUMMER_1_DMM,
        name: {
            [Locale.tc]: `最刺激的水上活動 (DMM)`,
            [Locale.sc]: `最刺激的水上活动 (DMM)`,
            [Locale.en]: `Extreme Water Sports (DMM)`,
            [Locale.jp]: `刺激的な水上イベント (DMM)`,
            [Locale.kr]: `가장 짜릿한 수상 이벤트 (DMM)`
        },
        fullImage: PuzzleImage.EVENT_2021_SUMMER_1_DMM,
    },
    {
        code: PuzzleCode.EVENT_2021_SUMMER_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_SUMMER_2,
        name: {
            [Locale.tc]: `使自身化為甜點`,
            [Locale.sc]: `使自身化为甜点`,
            [Locale.en]: `I'm Sweet Enough!!`,
            [Locale.jp]: `自分がスイーツに`,
            [Locale.kr]: `디저트로 변신`
        },
        fullImage: PuzzleImage.EVENT_2021_SUMMER_2,
    },
    {
        code: PuzzleCode.EVENT_2021_SUMMER_3,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_SUMMER_3,
        name: {
            [Locale.tc]: `水用裝備測試`,
            [Locale.sc]: `水用装备测试`,
            [Locale.en]: `Water Module Test`,
            [Locale.jp]: `水用装備テスト`,
            [Locale.kr]: `해양용 장비 테스트`
        },
        fullImage: PuzzleImage.EVENT_2021_SUMMER_3,
    },
    {
        code: PuzzleCode.EVENT_2021_SUMMER_4,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_SUMMER_4,
        name: {
            [Locale.tc]: `布偶內的秘密`,
            [Locale.sc]: `布偶内的秘密`,
            [Locale.en]: `Costume Coitus`,
            [Locale.jp]: `着ぐるみの秘密`,
            [Locale.kr]: `인형 아래 숨겨진 비밀`
        },
        fullImage: PuzzleImage.EVENT_2021_SUMMER_4,
    },
    {
        code: PuzzleCode.EVENT_2021_XMAS_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_XMAS_1,
        name: {
            [Locale.tc]: `遲來的性誕禮物`,
            [Locale.sc]: `迟来的性诞礼物`,
            [Locale.en]: `Late Sexmas Gifts`,
            [Locale.jp]: `遅れてきたセックスマスプレゼント`,
            [Locale.kr]: `뒤늦은 섹스마스 선물`
        },
        fullImage: PuzzleImage.EVENT_2021_XMAS_1,
    },
    {
        code: PuzzleCode.EVENT_2021_XMAS_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2021_XMAS_2,
        name: {
            [Locale.tc]: `此乃魔王加冕之時`,
            [Locale.sc]: `此乃魔王加冕之时`,
            [Locale.en]: `Archdemon's Coronation`,
            [Locale.jp]: `魔王戴冠式の時`,
            [Locale.kr]: `지금은 마왕이 대관하는 시간`
        },
        fullImage: PuzzleImage.EVENT_2021_XMAS_2,
    },
    {
        code: PuzzleCode.EVENT_2022_SUMMER_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2022_SUMMER_1,
        name: {
            [Locale.tc]: `只屬於大小姐的約會`,
            [Locale.sc]: `只属于大小姐的约会`,
            [Locale.en]: `Date Night`,
            [Locale.jp]: `ワタクシだけのデート`,
            [Locale.kr]: `아가씨와의 데이트`
        },
        fullImage: PuzzleImage.EVENT_2022_SUMMER_1,
    },
    {
        code: PuzzleCode.EVENT_2022_SUMMER_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2022_SUMMER_2,
        name: {
            [Locale.tc]: `創世雞`,
            [Locale.sc]: `创世鸡`,
            [Locale.en]: `The Cum-ation of Man`,
            [Locale.jp]: `創性器`,
            [Locale.kr]: `신화창좆`
        },
        fullImage: PuzzleImage.EVENT_2022_SUMMER_2,
    },
    {
        code: PuzzleCode.EVENT_2022_SUMMER_3,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2022_SUMMER_3,
        name: {
            [Locale.tc]: `泳裝偶像野外露出`,
            [Locale.sc]: `泳装偶像野外露出`,
            [Locale.en]: `Idol Exhibitionist`,
            [Locale.jp]: `水着アイドル野外露出`,
            [Locale.kr]: `비키니 아이돌의 야외 노출`
        },
        fullImage: PuzzleImage.EVENT_2022_SUMMER_3,
    },
    {
        code: PuzzleCode.EVENT_2022_SUMMER_4,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2022_SUMMER_4,
        name: {
            [Locale.tc]: `少女夢貘的奇幻漂流`,
            [Locale.sc]: `少女梦貘的奇幻漂流`,
            [Locale.en]: `Body Surfing`,
            [Locale.jp]: `漂流する夢喰い少女`,
            [Locale.kr]: `라이프 오브 드림이터`
        },
        fullImage: PuzzleImage.EVENT_2022_SUMMER_4,
    },
    {
        code: PuzzleCode.EVENT_2022_XMAS_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2022_XMAS_1,
        name: {
            [Locale.tc]: `雪夜浴泉`,
            [Locale.sc]: `雪夜浴泉`,
            [Locale.en]: `Snow Spring Night`,
            [Locale.jp]: `雪夜の温泉`,
            [Locale.kr]: `설야의 온천욕`
        },
        fullImage: PuzzleImage.EVENT_2022_XMAS_1,
    },
    {
        code: PuzzleCode.EVENT_2023_CNY_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_CNY_1,
        name: {
            [Locale.tc]: `魔王出巡。兔躍新程`,
            [Locale.sc]: `魔王出巡。兔跃新程`,
            [Locale.en]: `The Archdemons Hop To It`,
            [Locale.jp]: `魔王出陣・新旅路へぴょん`,
            [Locale.kr]: `마왕 순찰‧토비맹진`
        },
        fullImage: PuzzleImage.EVENT_2023_CNY_1,
    },
    {
        code: PuzzleCode.EVENT_2023_SUMMER_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_SUMMER_1,
        name: {
            [Locale.tc]: `巴爾的悠哉時光`,
            [Locale.sc]: `巴尔的悠哉时光`,
            [Locale.en]: `Ba'al's Relaxing Getaway`,
            [Locale.jp]: `バルの優雅なひと時`,
            [Locale.kr]: `바알의 여유 시간`
        },
        fullImage: PuzzleImage.EVENT_2023_SUMMER_1,
    },
    {
        code: PuzzleCode.EVENT_2023_SUMMER_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_SUMMER_2,
        name: {
            [Locale.tc]: `凱薩屋的秘密配方`,
            [Locale.sc]: `凯萨屋的秘密配方`,
            [Locale.en]: `Caesar's Secret Recipe`,
            [Locale.jp]: `シーザー屋の味の秘密`,
            [Locale.kr]: `시저의 집 맛의 비밀`
        },
        fullImage: PuzzleImage.EVENT_2023_SUMMER_2,
    },
    {
        code: PuzzleCode.EVENT_2023_SUMMER_3,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_SUMMER_3,
        name: {
            [Locale.tc]: `觸可夢的訓練大師`,
            [Locale.sc]: `触可梦的训练大师`,
            [Locale.en]: `Tenta-Trainer`,
            [Locale.jp]: `触手の育成マスター`,
            [Locale.kr]: `터치드림 트레이너 마스터`
        },
        fullImage: PuzzleImage.EVENT_2023_SUMMER_3,
    },
    {
        code: PuzzleCode.EVENT_2023_SUMMER_4,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_SUMMER_4,
        name: {
            [Locale.tc]: `勇者的防曬措施`,
            [Locale.sc]: `勇者的防晒措施`,
            [Locale.en]: `Warrior's Sun Protection Regime`,
            [Locale.jp]: `勇者の日焼対策`,
            [Locale.kr]: `용자의 자외선 차단`
        },
        fullImage: PuzzleImage.EVENT_2023_SUMMER_4,
    },
    {
        code: PuzzleCode.EVENT_2023_XMAS_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_XMAS_1,
        name: {
            [Locale.tc]: `匿名禮物`,
            [Locale.sc]: `匿名礼物`,
            [Locale.en]: `Anonymous Gift`,
            [Locale.jp]: `匿名のプレゼント`,
            [Locale.kr]: `익명의 선물`
        },
        fullImage: PuzzleImage.EVENT_2023_XMAS_1,
    },
    {
        code: PuzzleCode.EVENT_2023_XMAS_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2023_XMAS_2,
        name: {
            [Locale.tc]: `寧靜的聖誕夜`,
            [Locale.sc]: `宁静的圣诞夜`,
            [Locale.en]: `Tranquil Christmas Night`,
            [Locale.jp]: `静かなクリスマスイブ`,
            [Locale.kr]: `고요한 크리스마스 이브`
        },
        fullImage: PuzzleImage.EVENT_2023_XMAS_2,
    },
    {
        code: PuzzleCode.EVENT_2024_SUMMER_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2024_SUMMER_1,
        name: {
            [Locale.tc]: `不大可靠的遊泳課程`,
            [Locale.sc]: `不大可靠的游泳课程`,
            [Locale.en]: `Unreliable Swimming Lessons`,
            [Locale.jp]: `役立たずな水泳レッスン`,
            [Locale.kr]: `뭔가 아닌 듯한 수영 수업`
        },
        fullImage: PuzzleImage.EVENT_2024_SUMMER_1,
    },
    {
        code: PuzzleCode.EVENT_2024_SUMMER_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2024_SUMMER_2,
        name: {
            [Locale.tc]: `海灘必備色色事件`,
            [Locale.sc]: `海滩必备色色事件`,
            [Locale.en]: `Naughty Beach Fun`,
            [Locale.jp]: `ビーチに欠かせないエッチなイベント`,
            [Locale.kr]: `야릇한 해변의 필수 이벤트`
        },
        fullImage: PuzzleImage.EVENT_2024_SUMMER_2,
    },
    {
        code: PuzzleCode.EVENT_2024_SUMMER_3,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2024_SUMMER_3,
        name: {
            [Locale.tc]: `沒有下半身妨礙思考`,
            [Locale.sc]: `没有下半身妨碍思考`,
            [Locale.en]: `No Lower Body, Distracting`,
            [Locale.jp]: `思考を妨げない下半身`,
            [Locale.kr]: `생각은 머리가 아니라 하체로`
        },
        fullImage: PuzzleImage.EVENT_2024_SUMMER_3,
    },
    {
        code: PuzzleCode.EVENT_2024_SUMMER_4,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2024_SUMMER_4,
        name: {
            [Locale.tc]: `海釣大師，職業是魔王`,
            [Locale.sc]: `海钓大师，职业是魔王`,
            [Locale.en]: `Angler Pro: Archdemon`,
            [Locale.jp]: `フィッシングスーパースター、職業は魔王`,
            [Locale.kr]: `바다 낚시 마스터, 직업은 마왕`
        },
        fullImage: PuzzleImage.EVENT_2024_SUMMER_4,
    },
    {
        code: PuzzleCode.EVENT_2024_XMAS_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2024_XMAS_1,
        name: {
            [Locale.tc]: `與性誕共舞：美尻攝影紀實`,
            [Locale.sc]: `与性诞共舞：美尻摄影纪实`,
            [Locale.en]: `Sexmas Dance: Pelvic Photo Documentary`,
            [Locale.jp]: `セックスマス：美尻ドキュメンタリー`,
            [Locale.kr]: `섹스마스의 몸짓: 아름다운 된장통의 기록`
        },
        fullImage: PuzzleImage.EVENT_2024_XMAS_1,
    },
    {
        code: PuzzleCode.EVENT_2024_XMAS_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2024_XMAS_2,
        name: {
            [Locale.tc]: `人王加冕之時`,
            [Locale.sc]: `人王加冕之时`,
            [Locale.en]: `Human Empress Coronation`,
            [Locale.jp]: `人王戴冠式の時`,
            [Locale.kr]: `인왕의 대관식`
        },
        fullImage: PuzzleImage.EVENT_2024_XMAS_2,
    },
    {
        code: PuzzleCode.EVENT_2025_SUMMER_1,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2025_SUMMER_1,
        name: {
            [Locale.tc]: `純情仲夏夜`,
            [Locale.sc]: `纯情仲夏夜`,
            [Locale.en]: `Pure Love's Midsummer Night`,
            [Locale.jp]: `ピュアな夏の夜の夢`,
            [Locale.kr]: `순정의 여름밤`
        },
        fullImage: PuzzleImage.EVENT_2025_SUMMER_1,
    },
    {
        code: PuzzleCode.EVENT_2025_SUMMER_2,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2025_SUMMER_2,
        name: {
            [Locale.tc]: `飽含「愛」意的秘密材料`,
            [Locale.sc]: `饱含「爱」意的秘密材料`,
            [Locale.en]: `Secret "Love-Laced" Material`,
            [Locale.jp]: `愛」たっぷりの秘密の材料`,
            [Locale.kr]: `「사랑」이 담긴 비밀 재료`
        },
        fullImage: PuzzleImage.EVENT_2025_SUMMER_2,
    },
    {
        code: PuzzleCode.EVENT_2025_SUMMER_3,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2025_SUMMER_3,
        name: {
            [Locale.tc]: `獵犬的格鬥術訓練`,
            [Locale.sc]: `猎犬的格斗术训练`,
            [Locale.en]: `Hound Hunter Martial Arts Training`,
            [Locale.jp]: `猟犬の格闘術訓練`,
            [Locale.kr]: `하운드의 격투술 훈련`
        },
        fullImage: PuzzleImage.EVENT_2025_SUMMER_3,
    },
    {
        code: PuzzleCode.EVENT_2025_SUMMER_4,
        type: PuzzleType.EVENT,
        preview: PuzzlePreview.EVENT_2025_SUMMER_4,
        name: {
            [Locale.tc]: `媽媽鯊的料理廚房`,
            [Locale.sc]: `妈妈鲨的料理厨房`,
            [Locale.en]: `Mama Shark's Kitchen`,
            [Locale.jp]: `ママシャークのキッチン`,
            [Locale.kr]: `엄마 상어의 주방`
        },
        fullImage: PuzzleImage.EVENT_2025_SUMMER_4,
    },
    {
        code: PuzzleCode.HUMAN_SARIA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_SARIA,
        name: {
            [Locale.tc]: `提前退休大作戰！`,
            [Locale.sc]: `提前退休大作战！`,
            [Locale.en]: `Struggle for an Early Retirement`,
            [Locale.jp]: `早期引退大作戦！`,
            [Locale.kr]: `조기 은퇴 대작전!`
        },
        fullImage: PuzzleImage.HUMAN_SARIA,
    },
    {
        code: PuzzleCode.HUMAN_PETRA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_PETRA,
        name: {
            [Locale.tc]: `抱歉了錢錢…！`,
            [Locale.sc]: `抱歉了钱钱…！`,
            [Locale.en]: `So Sorry, Money Dearest…!`,
            [Locale.jp]: `ごめんね……私のお金！`,
            [Locale.kr]: `미안해... 돈아!`
        },
        fullImage: PuzzleImage.HUMAN_PETRA,
    },
    {
        code: PuzzleCode.HUMAN_KIKYOU,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_KIKYOU,
        name: {
            [Locale.tc]: `絕對犬科時間`,
            [Locale.sc]: `绝对犬科时间`,
            [Locale.en]: `Canine Mating Season`,
            [Locale.jp]: `絶対犬神時間`,
            [Locale.kr]: `절대적 이누가미 시간`
        },
        fullImage: PuzzleImage.HUMAN_KIKYOU,
    },
    {
        code: PuzzleCode.HUMAN_KAEDE,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_KAEDE,
        name: {
            [Locale.tc]: `巫女專屬逗貓棒`,
            [Locale.sc]: `巫女专属逗猫棒`,
            [Locale.en]: `The Priestess’ Kitty Teaser`,
            [Locale.jp]: `巫女専属猫じゃらし`,
            [Locale.kr]: `무녀 전용 고양이 깃털 장난감`
        },
        fullImage: PuzzleImage.HUMAN_KAEDE,
    },
    {
        code: PuzzleCode.HUMAN_OLA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_OLA,
        name: {
            [Locale.tc]: `理想的娠活`,
            [Locale.sc]: `理想的娠活`,
            [Locale.en]: `Monster Ambitions`,
            [Locale.jp]: `理想の妊活`,
            [Locale.kr]: `이상적인 임산부 생활`
        },
        fullImage: PuzzleImage.HUMAN_OLA,
    },
    {
        code: PuzzleCode.HUMAN_KANI,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_KANI,
        name: {
            [Locale.tc]: `巨魔的小玩具`,
            [Locale.sc]: `巨魔的小玩具`,
            [Locale.en]: `The Fiend's Friend`,
            [Locale.jp]: `巨大魔物のオモチャ`,
            [Locale.kr]: `거대마물의 장난감`
        },
        fullImage: PuzzleImage.HUMAN_KANI,
    },
    {
        code: PuzzleCode.HUMAN_CHARLENE,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_CHARLENE,
        name: {
            [Locale.tc]: `傭兵團的始末`,
            [Locale.sc]: `佣兵团的始末`,
            [Locale.en]: `A Mercenary's End`,
            [Locale.jp]: `傭兵団の結末`,
            [Locale.kr]: `용병단의 결말`
        },
        fullImage: PuzzleImage.HUMAN_CHARLENE,
    },
    {
        code: PuzzleCode.HUMAN_MARTINA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_MARTINA,
        name: {
            [Locale.tc]: `請不要…發現我…`,
            [Locale.sc]: `请不要…发现我…`,
            [Locale.en]: `Please don't... discover me...`,
            [Locale.jp]: `私を見つけないで……ください……`,
            [Locale.kr]: `제발... 들키지 마…`
        },
        fullImage: PuzzleImage.HUMAN_MARTINA,
    },
    {
        code: PuzzleCode.HUMAN_CLARIE,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_CLARIE,
        name: {
            [Locale.tc]: `對著洞內懺悔吧`,
            [Locale.sc]: `对着洞内忏悔吧`,
            [Locale.en]: `Confess to the hole!`,
            [Locale.jp]: `洞窟に向かって懺悔しろ`,
            [Locale.kr]: `구멍을 향한 고해`
        },
        fullImage: PuzzleImage.HUMAN_CLARIE,
    },
    {
        code: PuzzleCode.HUMAN_ANNA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_ANNA,
        name: {
            [Locale.tc]: `超出職權範圍的工作`,
            [Locale.sc]: `超出职权范围的工作`,
            [Locale.en]: `Above My Paygrade`,
            [Locale.jp]: `職権を超えた仕事`,
            [Locale.kr]: `직권 밖의 업무`
        },
        fullImage: PuzzleImage.HUMAN_ANNA,
    },
    {
        code: PuzzleCode.HUMAN_BLAIRE,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_BLAIRE,
        name: {
            [Locale.tc]: `敬業的兔女郎`,
            [Locale.sc]: `敬业的兔女郎`,
            [Locale.en]: `A Slutty Bunny`,
            [Locale.jp]: `熟練バニーガール`,
            [Locale.kr]: `베테랑 바니걸`
        },
        fullImage: PuzzleImage.HUMAN_BLAIRE,
    },
    {
        code: PuzzleCode.HUMAN_NATASHA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_NATASHA,
        name: {
            [Locale.tc]: `嘴上的抵抗`,
            [Locale.sc]: `嘴上的抵抗`,
            [Locale.en]: `Weak Resistance`,
            [Locale.jp]: `口だけの抵抗`,
            [Locale.kr]: `말뿐인 저항`
        },
        fullImage: PuzzleImage.HUMAN_NATASHA,
    },
    {
        code: PuzzleCode.HUMAN_MOLLY,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_MOLLY,
        name: {
            [Locale.tc]: `獵犬的反審問訓練`,
            [Locale.sc]: `猎犬的反审问训练`,
            [Locale.en]: `Hound Interrogation Training`,
            [Locale.jp]: `ハウンドの反尋問訓練`,
            [Locale.kr]: `하운드의 반심문 훈련`
        },
        fullImage: PuzzleImage.HUMAN_MOLLY,
    },
    {
        code: PuzzleCode.HUMAN_ANYA,
        type: PuzzleType.HUMAN,
        preview: PuzzlePreview.HUMAN_ANYA,
        name: {
            [Locale.tc]: `鋼鐵般的意志`,
            [Locale.sc]: `钢铁般的意志`,
            [Locale.en]: `Iron Will`,
            [Locale.jp]: `鋼のような意志`,
            [Locale.kr]: `강철 같은 의지`
        },
        fullImage: PuzzleImage.HUMAN_ANYA,
    },
    {
        code: PuzzleCode.DEMON_FLAY,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_FLAY,
        name: {
            [Locale.tc]: `讓你嘗嘗何謂羞辱`,
            [Locale.sc]: `让你尝尝何谓羞辱`,
            [Locale.en]: `I'll show you the definition of humiliation.`,
            [Locale.jp]: `屈辱とは何か教えてあげよう`,
            [Locale.kr]: `모욕감이 뭔지 가르쳐줄게`
        },
        fullImage: PuzzleImage.DEMON_FLAY,
    },
    {
        code: PuzzleCode.DEMON_MANUELLA,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_MANUELLA,
        name: {
            [Locale.tc]: `人類也不過如此`,
            [Locale.sc]: `人类也不过如此`,
            [Locale.en]: `Humanity isn't surprising at all.`,
            [Locale.jp]: `人類も大したことない`,
            [Locale.kr]: `인간도 겨우 이 정도밖에`
        },
        fullImage: PuzzleImage.DEMON_MANUELLA,
    },
    {
        code: PuzzleCode.DEMON_LORI,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_LORI,
        name: {
            [Locale.tc]: `史萊姆大量增生`,
            [Locale.sc]: `史莱姆大量增生`,
            [Locale.en]: `Slime Party`,
            [Locale.jp]: `スライム大量発生`,
            [Locale.kr]: `슬라임 대량 증식`
        },
        fullImage: PuzzleImage.DEMON_LORI,
    },
    {
        code: PuzzleCode.DEMON_MINNOW,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_MINNOW,
        name: {
            [Locale.tc]: `擠乳直播秀`,
            [Locale.sc]: `挤乳直播秀`,
            [Locale.en]: `Bovines Before Hoes`,
            [Locale.jp]: `乳しぼりライブショー`,
            [Locale.kr]: `젖짜기 라이브쇼`
        },
        fullImage: PuzzleImage.DEMON_MINNOW,
    },
    {
        code: PuzzleCode.DEMON_LAMIA,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_LAMIA,
        name: {
            [Locale.tc]: `拉米亞的捕食`,
            [Locale.sc]: `拉米亚的捕食`,
            [Locale.en]: `Lamia's Next Meal`,
            [Locale.jp]: `ラミアの捕食`,
            [Locale.kr]: `라미아의 포식`
        },
        fullImage: PuzzleImage.DEMON_LAMIA,
    },
    {
        code: PuzzleCode.DEMON_HARPY,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_HARPY,
        name: {
            [Locale.tc]: `飛不起來的哈比`,
            [Locale.sc]: `飞不起来的哈比`,
            [Locale.en]: `The Flightless Harpy`,
            [Locale.jp]: `飛べないハーピー`,
            [Locale.kr]: `날지 못하는 하피`
        },
        fullImage: PuzzleImage.DEMON_HARPY,
    },
    {
        code: PuzzleCode.DEMON_MAREYL,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_MAREYL,
        name: {
            [Locale.tc]: `面對面NTR`,
            [Locale.sc]: `面对面NTR`,
            [Locale.en]: `Face-to-face NTR`,
            [Locale.jp]: `対面NTR`,
            [Locale.kr]: `대면 NTR`
        },
        fullImage: PuzzleImage.DEMON_MAREYL,
    },
    {
        code: PuzzleCode.DEMON_MUMU,
        type: PuzzleType.DEMON,
        preview: PuzzlePreview.DEMON_MUMU,
        name: {
            [Locale.tc]: `獵食者與被獵食者`,
            [Locale.sc]: `猎食者与被猎食者`,
            [Locale.en]: `Predator & Prey`,
            [Locale.jp]: `捕食者と被捕食者`,
            [Locale.kr]: `사냥꾼과 사냥감`
        },
        fullImage: PuzzleImage.DEMON_MUMU,
    },
    {
        code: PuzzleCode.SKY_PUNISHMENT,
        type: PuzzleType.SKY,
        preview: PuzzlePreview.SKY_PUNISHMENT,
        name: {
            [Locale.tc]: `人類太可惡！`,
            [Locale.sc]: `人类太可恶！`,
            [Locale.en]: `Humanity Is Sick!`,
            [Locale.jp]: `人間なんて最低最悪`,
            [Locale.kr]: `빌어먹을 인간!`
        },
        fullImage: PuzzleImage.SKY_PUNISHMENT,
    },
    {
        code: PuzzleCode.SKY_BLISS,
        type: PuzzleType.SKY,
        preview: PuzzlePreview.SKY_BLISS,
        name: {
            [Locale.tc]: `天使的墮落`,
            [Locale.sc]: `天使的堕落`,
            [Locale.en]: `Angel's Fall`,
            [Locale.jp]: `天使の堕落`,
            [Locale.kr]: `천사의 타락`
        },
        fullImage: PuzzleImage.SKY_BLISS,
    },
]

export default puzzles;