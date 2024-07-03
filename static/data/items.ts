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
            sc: "",
            en: "Sliver Coin",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.GENERAL,
        code: ItemCode.NAMELESS,
        icon: ItemIcon.NAMELESS,
        name: {
            tc: "無名的記憶碎片",
            sc: "",
            en: "Nameless Memory Crystal",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.GENERAL,
        code: ItemCode.LIBERATE_STONE,
        icon: ItemIcon.LIBERATE_STONE,
        name: {
            tc: "解放晶石",
            sc: "",
            en: "Liberation Crystal",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV1,
        icon: ItemIcon.EVOLVE_FIRE_LV1,
        name: {
            tc: "火焰碎片",
            sc: "",
            en: "Flame Fragment",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV2,
        icon: ItemIcon.EVOLVE_FIRE_LV2,
        name: {
            tc: "火焰之石",
            sc: "",
            en: "Flame Stone",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV3,
        icon: ItemIcon.EVOLVE_FIRE_LV3,
        name: {
            tc: "緋紅結晶",
            sc: "",
            en: "Crimson Crystal",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV4,
        icon: ItemIcon.EVOLVE_FIRE_LV4,
        name: {
            tc: "緋紅靈魂",
            sc: "",
            en: "Crimson Soul",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV1,
        icon: ItemIcon.EVOLVE_WATER_LV1,
        name: {
            tc: "洪水碎片",
            sc: "",
            en: "Flood Fragment",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV2,
        icon: ItemIcon.EVOLVE_WATER_LV2,
        name: {
            tc: "洪水之石",
            sc: "",
            en: "Flood Stone",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV3,
        icon: ItemIcon.EVOLVE_WATER_LV3,
        name: {
            tc: "蒼藍結晶",
            sc: "",
            en: "Deep Blue Crystal",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV4,
        icon: ItemIcon.EVOLVE_WATER_LV4,
        name: {
            tc: "蒼藍靈魂",
            sc: "",
            en: "Deep Blue Soul",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV1,
        icon: ItemIcon.EVOLVE_WIND_LV1,
        name: {
            tc: "烈風碎片",
            sc: "",
            en: "Gale Fragment",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV2,
        icon: ItemIcon.EVOLVE_WIND_LV2,
        name: {
            tc: "烈風之石",
            sc: "",
            en: "Gale Stone",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV3,
        icon: ItemIcon.EVOLVE_WIND_LV3,
        name: {
            tc: "翠綠結晶",
            sc: "",
            en: "Emerald Crystal",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV4,
        icon: ItemIcon.EVOLVE_WIND_LV4,
        name: {
            tc: "翠綠靈魂",
            sc: "",
            en: "Emerald Soul",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV1,
        icon: ItemIcon.EVOLVE_LIGHT_LV1,
        name: {
            tc: "光明碎片",
            sc: "",
            en: "Light Fragment",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV2,
        icon: ItemIcon.EVOLVE_LIGHT_LV2,
        name: {
            tc: "光明之石",
            sc: "",
            en: "Light Stone",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV3,
        icon: ItemIcon.EVOLVE_LIGHT_LV3,
        name: {
            tc: "雪白結晶",
            sc: "",
            en: "Snow Crystal",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV4,
        icon: ItemIcon.EVOLVE_LIGHT_LV4,
        name: {
            tc: "雪白靈魂",
            sc: "",
            en: "Snow Soul",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV1,
        icon: ItemIcon.EVOLVE_DARK_LV1,
        name: {
            tc: "黑暗碎片",
            sc: "",
            en: "Darkness Fragment",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV2,
        icon: ItemIcon.EVOLVE_DARK_LV2,
        name: {
            tc: "黑暗之石",
            sc: "",
            en: "Darkness Stone",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV3,
        icon: ItemIcon.EVOLVE_DARK_LV3,
        name: {
            tc: "靛紫結晶",
            sc: "",
            en: "Indigo Crystal",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV4,
        icon: ItemIcon.EVOLVE_DARK_LV4,
        name: {
            tc: "靛紫靈魂",
            sc: "",
            en: "Indigo Soul",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.FLAWLESS,
        icon: ItemIcon.FLAWLESS,
        name: {
            tc: "無暇魂魄",
            sc: "",
            en: "Flawless Spirit",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.CLAW_LV1,
        icon: ItemIcon.CLAW_LV1,
        name: {
            tc: "野獸之爪",
            sc: "",
            en: "Beast Claw",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.CLAW_LV2,
        icon: ItemIcon.CLAW_LV2,
        name: {
            tc: "巨獸之爪",
            sc: "",
            en: "Giant Beast Claw",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.CLAW_LV3,
        icon: ItemIcon.CLAW_LV3,
        name: {
            tc: "惡魔之爪",
            sc: "",
            en: "Demon Claw",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.IRON_LV1,
        icon: ItemIcon.IRON_LV1,
        name: {
            tc: "鐵錠",
            sc: "",
            en: "Iron",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.IRON_LV2,
        icon: ItemIcon.IRON_LV2,
        name: {
            tc: "鍛鐵錠",
            sc: "",
            en: "Wrought Iron",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.IRON_LV3,
        icon: ItemIcon.IRON_LV3,
        name: {
            tc: "純源鋼錠",
            sc: "",
            en: "Pure Steel",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.WATER_LV1,
        icon: ItemIcon.WATER_LV1,
        name: {
            tc: "純淨水",
            sc: "",
            en: "Clean Water",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.WATER_LV2,
        icon: ItemIcon.WATER_LV2,
        name: {
            tc: "月光水",
            sc: "",
            en: "Moonlight Water",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.WATER_LV3,
        icon: ItemIcon.WATER_LV3,
        name: {
            tc: "精靈露水",
            sc: "",
            en: "Elven Dew",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.MIXTURE_LV1,
        icon: ItemIcon.MIXTURE_LV1,
        name: {
            tc: "史萊姆殘液",
            sc: "",
            en: "Slime",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.MIXTURE_LV2,
        icon: ItemIcon.MIXTURE_LV2,
        name: {
            tc: "高級合劑",
            sc: "",
            en: "Quality Mixture",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.MIXTURE_LV3,
        icon: ItemIcon.MIXTURE_LV3,
        name: {
            tc: "彩虹合劑",
            sc: "",
            en: "Rain Mixture",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.DUST_LV1,
        icon: ItemIcon.DUST_LV1,
        name: {
            tc: "毒之粉",
            sc: "",
            en: "Drugs",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.DUST_LV2,
        icon: ItemIcon.DUST_LV2,
        name: {
            tc: "星之粉",
            sc: "",
            en: "Stardust",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.DUST_LV3,
        icon: ItemIcon.DUST_LV3,
        name: {
            tc: "暗之粉",
            sc: "",
            en: "Dark Dust",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.HORN_LV1,
        icon: ItemIcon.HORN_LV1,
        name: {
            tc: "堅固之角",
            sc: "",
            en: "Sturdy Horn",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Horny Cow Horn",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Sliver",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Holy Sliver",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Ceremonial Oil",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Holy Oil",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Corrosive Dirt",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Dragon Crystal",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Venomous Fang",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Evil Fang",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Griffin Snout",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Vulture Beak",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Bear Skin",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Elk Skin",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Book of Curses",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Book of Fallen Angels",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Exquisite Feather",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Banshee Feather",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Insectoid Thread",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Spider Web",
            jp: "",
            kr: ""
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
            sc: "",
            en: "Skill Fragment",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.SKILL_STONE,
        icon: ItemIcon.SKILL_STONE,
        name: {
            tc: "技之原石",
            sc: "",
            en: "Skill Stone",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_FIRE_LV1,
        icon: ItemIcon.DISCIPLINE_FIRE_LV1,
        name: {
            tc: "按摩棒",
            sc: "",
            en: "Vibrator",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_FIRE_LV2,
        icon: ItemIcon.DISCIPLINE_FIRE_LV2,
        name: {
            tc: "觸手",
            sc: "",
            en: "Tentacle",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_FIRE_LV3,
        icon: ItemIcon.DISCIPLINE_FIRE_LV3,
        name: {
            tc: "蠟燭",
            sc: "",
            en: "Candle",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WATER_LV1,
        icon: ItemIcon.DISCIPLINE_WATER_LV1,
        name: {
            tc: "冰棒",
            sc: "",
            en: "Popsicle",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WATER_LV2,
        icon: ItemIcon.DISCIPLINE_WATER_LV2,
        name: {
            tc: "史萊姆",
            sc: "",
            en: "Slime",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WATER_LV3,
        icon: ItemIcon.DISCIPLINE_WATER_LV3,
        name: {
            tc: "榨乳器",
            sc: "",
            en: "Milker",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WIND_LV1,
        icon: ItemIcon.DISCIPLINE_WIND_LV1,
        name: {
            tc: "乳頭陰蒂夾",
            sc: "",
            en: "Nipple Clamp",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WIND_LV2,
        icon: ItemIcon.DISCIPLINE_WIND_LV2,
        name: {
            tc: "藤蔓",
            sc: "",
            en: "Vines",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_WIND_LV3,
        icon: ItemIcon.DISCIPLINE_WIND_LV3,
        name: {
            tc: "皮鞭",
            sc: "",
            en: "Whip",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_LIGHT_LV1,
        icon: ItemIcon.DISCIPLINE_LIGHT_LV1,
        name: {
            tc: "貓尾肛塞",
            sc: "",
            en: "Kitty Cass Plug",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_LIGHT_LV2,
        icon: ItemIcon.DISCIPLINE_LIGHT_LV2,
        name: {
            tc: "八目鰻",
            sc: "",
            en: "Lamprey",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_LIGHT_LV3,
        icon: ItemIcon.DISCIPLINE_LIGHT_LV3,
        name: {
            tc: "電擊棒",
            sc: "",
            en: "Electric Prod",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_DARK_LV1,
        icon: ItemIcon.DISCIPLINE_DARK_LV1,
        name: {
            tc: "跳蛋",
            sc: "",
            en: "Sex Egg",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_DARK_LV2,
        icon: ItemIcon.DISCIPLINE_DARK_LV2,
        name: {
            tc: "淫魔蟲",
            sc: "",
            en: "Lude Buggers",
            jp: "",
            kr: ""
        },
    },
    {
        type: ItemType.DISCIPLINE,
        code: ItemCode.DISCIPLINE_DARK_LV3,
        icon: ItemIcon.DISCIPLINE_DARK_LV3,
        name: {
            tc: "匕首",
            sc: "",
            en: "Dagger",
            jp: "",
            kr: ""
        },
    },
];

export default items;