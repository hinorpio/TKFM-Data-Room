import { Item } from '@/interface/item';
import { ItemType, ItemCode } from '@/plugins/utils/enums';
import { ItemIcon } from '~/static/const';

const items: Item[] = [
    {
        type: ItemType.GENERAL,
        code: ItemCode.SLIVER_COIN,
        icon: ItemIcon.SLIVER_COIN,
        name: {
            tc: "銀幣",
            sc: "银币",
            en: "Sliver Coin",
            jp: "コイン",
            kr: "실버 코인"
        },
    },
    {
        type: ItemType.GENERAL,
        code: ItemCode.NAMELESS,
        icon: ItemIcon.NAMELESS,
        name: {
            tc: "無名的記憶碎片",
            sc: "无名的记忆碎片",
            en: "Nameless Memory Crystal",
            jp: "名のなき記憶の欠片",
            kr: "이름없는 기억의 파편"
        },
    },
    {
        type: ItemType.GENERAL,
        code: ItemCode.LIBERATE_STONE,
        icon: ItemIcon.LIBERATE_STONE,
        name: {
            tc: "解放晶石",
            sc: "解放晶石",
            en: "Liberation Crystal",
            jp: "解放晶石",
            kr: "해방의 크리스탈"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV1,
        icon: ItemIcon.EVOLVE_FIRE_LV1,
        name: {
            tc: "火焰碎片",
            sc: "火焰碎片",
            en: "Flame Fragment",
            jp: "火焔の欠片",
            kr: "화염의 파편"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV2,
        icon: ItemIcon.EVOLVE_FIRE_LV2,
        name: {
            tc: "火焰之石",
            sc: "火焰之石",
            en: "Flame Stone",
            jp: "火焔の石",
            kr: "화염석"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV3,
        icon: ItemIcon.EVOLVE_FIRE_LV3,
        name: {
            tc: "緋紅結晶",
            sc: "绯红结晶",
            en: "Crimson Crystal",
            jp: "レッドクリスタル",
            kr: "붉은 결정"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV4,
        icon: ItemIcon.EVOLVE_FIRE_LV4,
        name: {
            tc: "緋紅靈魂",
            sc: "绯红灵魂",
            en: "Crimson Soul",
            jp: "レッドソウル",
            kr: "붉은 영혼"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV1,
        icon: ItemIcon.EVOLVE_WATER_LV1,
        name: {
            tc: "洪水碎片",
            sc: "洪水碎片",
            en: "Flood Fragment",
            jp: "洪水の欠片",
            kr: "홍수의 파편"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV2,
        icon: ItemIcon.EVOLVE_WATER_LV2,
        name: {
            tc: "洪水之石",
            sc: "洪水之石",
            en: "Flood Stone",
            jp: "洪水の石",
            kr: "홍수석"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV3,
        icon: ItemIcon.EVOLVE_WATER_LV3,
        name: {
            tc: "蒼藍結晶",
            sc: "苍蓝结晶",
            en: "Deep Blue Crystal",
            jp: "ブルークリスタル",
            kr: "푸른 결정"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV4,
        icon: ItemIcon.EVOLVE_WATER_LV4,
        name: {
            tc: "蒼藍靈魂",
            sc: "苍蓝灵魂",
            en: "Deep Blue Soul",
            jp: "ブルーソウル",
            kr: "푸른 영혼"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV1,
        icon: ItemIcon.EVOLVE_WIND_LV1,
        name: {
            tc: "烈風碎片",
            sc: "烈风碎片",
            en: "Gale Fragment",
            jp: "烈風の欠片",
            kr: "열풍의 파편"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV2,
        icon: ItemIcon.EVOLVE_WIND_LV2,
        name: {
            tc: "烈風之石",
            sc: "烈风之石",
            en: "Gale Stone",
            jp: "烈風の石",
            kr: "열풍석"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV3,
        icon: ItemIcon.EVOLVE_WIND_LV3,
        name: {
            tc: "翠綠結晶",
            sc: "翠绿结晶",
            en: "Emerald Crystal",
            jp: "グリーンクリスタル",
            kr: "청색 결정"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV4,
        icon: ItemIcon.EVOLVE_WIND_LV4,
        name: {
            tc: "翠綠靈魂",
            sc: "翠绿灵魂",
            en: "Emerald Soul",
            jp: "グリーンソウル",
            kr: "청색 영혼"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV1,
        icon: ItemIcon.EVOLVE_LIGHT_LV1,
        name: {
            tc: "光明碎片",
            sc: "光明碎片",
            en: "Light Fragment",
            jp: "光芒の欠片",
            kr: "빛의 파편"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV2,
        icon: ItemIcon.EVOLVE_LIGHT_LV2,
        name: {
            tc: "光明之石",
            sc: "光明之石",
            en: "Light Stone",
            jp: "光芒の石",
            kr: "빛속성"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV3,
        icon: ItemIcon.EVOLVE_LIGHT_LV3,
        name: {
            tc: "雪白結晶",
            sc: "雪白结晶",
            en: "Snow Crystal",
            jp: "ホワイトクリスタル",
            kr: "새하얀 결정"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV4,
        icon: ItemIcon.EVOLVE_LIGHT_LV4,
        name: {
            tc: "雪白靈魂",
            sc: "雪白灵魂",
            en: "Snow Soul",
            jp: "ホワイトソウル",
            kr: "새하얀 영혼"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV1,
        icon: ItemIcon.EVOLVE_DARK_LV1,
        name: {
            tc: "黑暗碎片",
            sc: "黑暗碎片",
            en: "Darkness Fragment",
            jp: "闇夜の欠片",
            kr: "암흑의 파편"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV2,
        icon: ItemIcon.EVOLVE_DARK_LV2,
        name: {
            tc: "黑暗之石",
            sc: "黑暗之石",
            en: "Darkness Stone",
            jp: "闇夜の石",
            kr: "암흑석"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV3,
        icon: ItemIcon.EVOLVE_DARK_LV3,
        name: {
            tc: "靛紫結晶",
            sc: "靛紫结晶",
            en: "Indigo Crystal",
            jp: "パープルクリスタル",
            kr: "자색 결정"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV4,
        icon: ItemIcon.EVOLVE_DARK_LV4,
        name: {
            tc: "靛紫靈魂",
            sc: "靛紫灵魂",
            en: "Indigo Soul",
            jp: "パープルソウル",
            kr: "자색 영혼"
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.FLAWLESS,
        icon: ItemIcon.FLAWLESS,
        name: {
            tc: "無暇魂魄",
            sc: "无暇魂魄",
            en: "Flawless Spirit",
            jp: "傷一つない魂",
            kr: "완벽한 영혼"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.CLAW_LV1,
        icon: ItemIcon.CLAW_LV1,
        name: {
            tc: "野獸之爪",
            sc: "野兽之爪",
            en: "Beast Claw",
            jp: "野獣の爪",
            kr: "야수의 발톱"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.CLAW_LV2,
        icon: ItemIcon.CLAW_LV2,
        name: {
            tc: "巨獸之爪",
            sc: "巨兽之爪",
            en: "Giant Beast Claw",
            jp: "巨獣の爪",
            kr: "괴수의 발톱"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.CLAW_LV3,
        icon: ItemIcon.CLAW_LV3,
        name: {
            tc: "惡魔之爪",
            sc: "恶魔之爪",
            en: "Demon Claw",
            jp: "悪魔の爪",
            kr: "악마의 발톱"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.IRON_LV1,
        icon: ItemIcon.IRON_LV1,
        name: {
            tc: "鐵錠",
            sc: "铁锭",
            en: "Iron",
            jp: "鉄のインゴット",
            kr: "철괴"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.IRON_LV2,
        icon: ItemIcon.IRON_LV2,
        name: {
            tc: "鍛鐵錠",
            sc: "锻铁锭",
            en: "Wrought Iron",
            jp: "鉛のインゴット",
            kr: "강철괴"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.IRON_LV3,
        icon: ItemIcon.IRON_LV3,
        name: {
            tc: "純源鋼錠",
            sc: "纯源钢锭",
            en: "Pure Steel",
            jp: "カタロン鋼のインゴット",
            kr: "순원강철괴"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.WATER_LV1,
        icon: ItemIcon.WATER_LV1,
        name: {
            tc: "純淨水",
            sc: "纯净水",
            en: "Clean Water",
            jp: "純水",
            kr: "정제수"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.WATER_LV2,
        icon: ItemIcon.WATER_LV2,
        name: {
            tc: "月光水",
            sc: "月光水",
            en: "Moonlight Water",
            jp: "月光水",
            kr: "월광수"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.WATER_LV3,
        icon: ItemIcon.WATER_LV3,
        name: {
            tc: "精靈露水",
            sc: "精灵露水",
            en: "Elven Dew",
            jp: "エルフの露",
            kr: "엘프의 이슬"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.MIXTURE_LV1,
        icon: ItemIcon.MIXTURE_LV1,
        name: {
            tc: "史萊姆殘液",
            sc: "史莱姆残液",
            en: "Slime",
            jp: "スライム液",
            kr: "슬라임 잔액"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.MIXTURE_LV2,
        icon: ItemIcon.MIXTURE_LV2,
        name: {
            tc: "高級合劑",
            sc: "高级合剂",
            en: "Quality Mixture",
            jp: "高級接着剤",
            kr: "고급 복합약"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.MIXTURE_LV3,
        icon: ItemIcon.MIXTURE_LV3,
        name: {
            tc: "彩虹合劑",
            sc: "彩虹合剂",
            en: "Rain Mixture",
            jp: "虹の接着剤",
            kr: "무지개 복합약"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.DUST_LV1,
        icon: ItemIcon.DUST_LV1,
        name: {
            tc: "毒之粉",
            sc: "毒之粉",
            en: "Drugs",
            jp: "毒の粉",
            kr: "독 가루"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.DUST_LV2,
        icon: ItemIcon.DUST_LV2,
        name: {
            tc: "星之粉",
            sc: "星之粉",
            en: "Stardust",
            jp: "星の粉",
            kr: "별 가루"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.DUST_LV3,
        icon: ItemIcon.DUST_LV3,
        name: {
            tc: "暗之粉",
            sc: "暗之粉",
            en: "Dark Dust",
            jp: "闇の粉",
            kr: "암흑 가루"
        },
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.HORN_LV1,
        icon: ItemIcon.HORN_LV1,
        name: {
            tc: "堅固之角",
            sc: "坚固之角",
            en: "Sturdy Horn",
            jp: "丈夫な角",
            kr: "견고한 뿔"
        },
        combined: [
            { code: 'CLAW_LV2', quantity: 4 },
            { code: 'DUST_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.HORN_LV2,
        icon: ItemIcon.HORN_LV2,
        name: {
            tc: "狂牛之角",
            sc: "狂牛之角",
            en: "Horny Cow Horn",
            jp: "猛牛の角",
            kr: "날뛰는 소의 뿔"
        },
        combined: [
            { code: 'HORN_LV1', quantity: 2 },
            { code: 'DUST_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.SLIVER_LV1,
        icon: ItemIcon.SLIVER_LV1,
        name: {
            tc: "銀錠",
            sc: "银锭",
            en: "Sliver",
            jp: "銀のインゴット",
            kr: "은괴"
        },
        combined: [
            { code: 'IRON_LV2', quantity: 4 },
            { code: 'WATER_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.SLIVER_LV2,
        icon: ItemIcon.SLIVER_LV2,
        name: {
            tc: "聖銀錠",
            sc: "圣银锭",
            en: "Holy Sliver",
            jp: "聖銀のインゴット",
            kr: "신성한 은괴"
        },
        combined: [
            { code: 'SLIVER_LV1', quantity: 2 },
            { code: 'MIXTURE_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.OIL_LV1,
        icon: ItemIcon.OIL_LV1,
        name: {
            tc: "儀式之油",
            sc: "仪式之油",
            en: "Ceremonial Oil",
            jp: "儀式の油",
            kr: "의식용 기름"
        },
        combined: [
            { code: 'WATER_LV2', quantity: 4 },
            { code: 'MIXTURE_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.OIL_LV2,
        icon: ItemIcon.OIL_LV2,
        name: {
            tc: "聖油",
            sc: "圣油",
            en: "Holy Oil",
            jp: "聖なる油",
            kr: "신성한 기름"
        },
        combined: [
            { code: 'OIL_LV1', quantity: 2 },
            { code: 'DUST_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.CRYSTAL_LV1,
        icon: ItemIcon.CRYSTAL_LV1,
        name: {
            tc: "腐蝕之塵",
            sc: "腐蚀之尘",
            en: "Corrosive Dirt",
            jp: "腐蝕の塵",
            kr: "부식토"
        },
        combined: [
            { code: 'DUST_LV2', quantity: 4 },
            { code: 'CLAW_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.CRYSTAL_LV2,
        icon: ItemIcon.CRYSTAL_LV2,
        name: {
            tc: "暗龍結晶",
            sc: "暗龙结晶",
            en: "Dragon Crystal",
            jp: "ダーククリスタル",
            kr: "암흑룡의 결정"
        },
        combined: [
            { code: 'CRYSTAL_LV1', quantity: 2 },
            { code: 'WATER_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.FANG_LV1,
        icon: ItemIcon.FANG_LV1,
        name: {
            tc: "劇毒蛇牙",
            sc: "剧毒蛇牙",
            en: "Venomous Fang",
            jp: "毒蛇の牙",
            kr: "맹독뱀의 독니"
        },
        combined: [
            { code: 'CLAW_LV2', quantity: 4 },
            { code: 'WATER_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.FANG_LV2,
        icon: ItemIcon.FANG_LV2,
        name: {
            tc: "邪龍毒牙",
            sc: "邪龙毒牙",
            en: "Evil Fang",
            jp: "邪龍の毒牙",
            kr: "사룡의 독니"
        },
        combined: [
            { code: 'FANG_LV1', quantity: 2 },
            { code: 'MIXTURE_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.BEAK_LV1,
        icon: ItemIcon.BEAK_LV1,
        name: {
            tc: "獅鷲之喙",
            sc: "狮鹫之喙",
            en: "Griffin Snout",
            jp: "グリフォンの嘴",
            kr: "그리핀의 부리"
        },
        combined: [
            { code: 'IRON_LV2', quantity: 4 },
            { code: 'DUST_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.BEAK_LV2,
        icon: ItemIcon.BEAK_LV2,
        name: {
            tc: "聖鷲之喙",
            sc: "圣鹫之喙",
            en: "Vulture Beak",
            jp: "ホーリーイーグルの嘴",
            kr: "신성한 그리핀의 부리"
        },
        combined: [
            { code: 'BEAK_LV1', quantity: 2 },
            { code: 'CLAW_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.SKIN_LV1,
        icon: ItemIcon.SKIN_LV1,
        name: {
            tc: "熊皮",
            sc: "熊皮",
            en: "Bear Skin",
            jp: "熊の皮",
            kr: "곰의 가죽"
        },
        combined: [
            { code: 'MIXTURE_LV2', quantity: 4 },
            { code: 'IRON_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.SKIN_LV2,
        icon: ItemIcon.SKIN_LV2,
        name: {
            tc: "巨鹿毛皮",
            sc: "巨鹿毛皮",
            en: "Elk Skin",
            jp: "巨鹿の毛皮",
            kr: "거대 사슴의 모피"
        },
        combined: [
            { code: 'SKIN_LV1', quantity: 2 },
            { code: 'CLAW_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.BOOK_LV1,
        icon: ItemIcon.BOOK_LV1,
        name: {
            tc: "邪語之書",
            sc: "邪语之书",
            en: "Book of Curses",
            jp: "呪詛の書",
            kr: "저주의 책"
        },
        combined: [
            { code: 'DUST_LV2', quantity: 4 },
            { code: 'CLAW_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.BOOK_LV2,
        icon: ItemIcon.BOOK_LV2,
        name: {
            tc: "墮天之書",
            sc: "堕天之书",
            en: "Book of Fallen Angels",
            jp: "堕天使の書",
            kr: "타락의 책"
        },
        combined: [
            { code: 'BOOK_LV1', quantity: 2 },
            { code: 'IRON_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.FEATHER_LV1,
        icon: ItemIcon.FEATHER_LV1,
        name: {
            tc: "精緻尾羽",
            sc: "精致尾羽",
            en: "Exquisite Feather",
            jp: "精緻な尾羽",
            kr: "아름다운 꼬리 깃털"
        },
        combined: [
            { code: 'MIXTURE_LV2', quantity: 4 },
            { code: 'MIXTURE_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.FEATHER_LV2,
        icon: ItemIcon.FEATHER_LV2,
        name: {
            tc: "女妖尾羽",
            sc: "女妖尾羽",
            en: "Banshee Feather",
            jp: "妖女の尾羽",
            kr: "요괴의 꼬리 깃털"
        },
        combined: [
            { code: 'FEATHER_LV1', quantity: 2 },
            { code: 'WATER_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.WEB_LV1,
        icon: ItemIcon.WEB_LV1,
        name: {
            tc: "蟲巢之絲",
            sc: "虫巢之丝",
            en: "Insectoid Thread",
            jp: "蟲の巣糸",
            kr: "벌레굴의 거미줄"
        },
        combined: [
            { code: 'WATER_LV2', quantity: 4 },
            { code: 'IRON_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.WEB_LV2,
        icon: ItemIcon.WEB_LV2,
        name: {
            tc: "蛛后之絲",
            sc: "蛛后之丝",
            en: "Spider Web",
            jp: "スパイダークイーンの糸",
            kr: "거미왕의 거미줄"
        },
        combined: [
            { code: 'WEB_LV1', quantity: 2 },
            { code: 'IRON_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.SKILL_FRAGMENT,
        icon: ItemIcon.SKILL_FRAGMENT,
        name: {
            tc: "技之碎片",
            sc: "技之碎片",
            en: "Skill Fragment",
            jp: "スキルの欠片",
            kr: "스킬 파편"
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.SKILL_STONE,
        icon: ItemIcon.SKILL_STONE,
        name: {
            tc: "技之原石",
            sc: "技之原石",
            en: "Skill Stone",
            jp: "スキルの原石",
            kr: "스킬 원석"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_FIRE_LV1,
        icon: ItemIcon.DISCIPLINE_FIRE_LV1,
        name: {
            tc: "按摩棒",
            sc: "按摩棒",
            en: "Vibrator",
            jp: "マッサージ器",
            kr: "바이브레이터"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_FIRE_LV2,
        icon: ItemIcon.DISCIPLINE_FIRE_LV2,
        name: {
            tc: "觸手",
            sc: "触手",
            en: "Tentacle",
            jp: "触手",
            kr: "촉수"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_FIRE_LV3,
        icon: ItemIcon.DISCIPLINE_FIRE_LV3,
        name: {
            tc: "蠟燭",
            sc: "蜡烛",
            en: "Candle",
            jp: "ろうそく",
            kr: "양초"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WATER_LV1,
        icon: ItemIcon.DISCIPLINE_WATER_LV1,
        name: {
            tc: "冰棒",
            sc: "冰棒",
            en: "Popsicle",
            jp: "アイスキャンディー",
            kr: "아이스 바"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WATER_LV2,
        icon: ItemIcon.DISCIPLINE_WATER_LV2,
        name: {
            tc: "史萊姆",
            sc: "史莱姆",
            en: "Slime",
            jp: "スライム",
            kr: "슬라임"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WATER_LV3,
        icon: ItemIcon.DISCIPLINE_WATER_LV3,
        name: {
            tc: "榨乳器",
            sc: "榨乳器",
            en: "Milker",
            jp: "搾乳器",
            kr: "유축기"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WIND_LV1,
        icon: ItemIcon.DISCIPLINE_WIND_LV1,
        name: {
            tc: "乳頭陰蒂夾",
            sc: "乳头阴蒂夹",
            en: "Nipple Clamp",
            jp: "乳首クリトリス洗濯ばさみ",
            kr: "유두 클립"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WIND_LV2,
        icon: ItemIcon.DISCIPLINE_WIND_LV2,
        name: {
            tc: "藤蔓",
            sc: "藤蔓",
            en: "Vines",
            jp: "藤のツル",
            kr: "덩굴"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WIND_LV3,
        icon: ItemIcon.DISCIPLINE_WIND_LV3,
        name: {
            tc: "皮鞭",
            sc: "皮鞭",
            en: "Whip",
            jp: "革のムチ",
            kr: "채찍"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_LIGHT_LV1,
        icon: ItemIcon.DISCIPLINE_LIGHT_LV1,
        name: {
            tc: "貓尾肛塞",
            sc: "猫尾肛塞",
            en: "Kitty Cass Plug",
            jp: "猫の尻尾型アナルビーズ",
            kr: "캣 테일"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_LIGHT_LV2,
        icon: ItemIcon.DISCIPLINE_LIGHT_LV2,
        name: {
            tc: "八目鰻",
            sc: "八目鳗",
            en: "Lamprey",
            jp: "ヤツメウナギ",
            kr: "칠성장어"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_LIGHT_LV3,
        icon: ItemIcon.DISCIPLINE_LIGHT_LV3,
        name: {
            tc: "電擊棒",
            sc: "电击棒",
            en: "Electric Prod",
            jp: "ビリビリ棒",
            kr: "전기충격기"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_DARK_LV1,
        icon: ItemIcon.DISCIPLINE_DARK_LV1,
        name: {
            tc: "跳蛋",
            sc: "跳蛋",
            en: "Sex Egg",
            jp: "ローター",
            kr: "러브 에그"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_DARK_LV2,
        icon: ItemIcon.DISCIPLINE_DARK_LV2,
        name: {
            tc: "淫魔蟲",
            sc: "淫魔虫",
            en: "Lude Buggers",
            jp: "淫魔蟲",
            kr: "음마충"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_DARK_LV3,
        icon: ItemIcon.DISCIPLINE_DARK_LV3,
        name: {
            tc: "匕首",
            sc: "匕首",
            en: "Dagger",
            jp: "短刀",
            kr: "단검"
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_FRUIT,
        icon: ItemIcon.DISCIPLINE_FRUIT,
        name: {
            tc: "禁忌果實",
            sc: "禁忌果实",
            en: "Forbidden Fruit",
            jp: "禁忌の果実",
            kr: "금기의 열매"
        },
    },
];

export default items;