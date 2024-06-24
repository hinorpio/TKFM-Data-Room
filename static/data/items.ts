import { Item } from '@/interface/global/item';
import { ItemType, ItemCode } from '@/plugins/utils/enums';


const items: Item[] = [
    {
        type: ItemType.GENERAL,
        code: ItemCode.SLIVER_COIN,
        icon: require("@/assets/item/IP00001.png"),
        name: {
            zh: "銀幣",
            cn: "",
            en: "Sliver Coin",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.GENERAL,
        code: ItemCode.NAMELESS,
        icon: require("@/assets/item/IP28002.png"),
        name: {
            zh: "無名的記憶碎片",
            cn: "",
            en: "Nameless Memory Crystal",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.GENERAL,
        code: ItemCode.LIBERATE_STONE,
        icon: require("@/assets/item/IP31903.png"),
        name: {
            zh: "解放晶石",
            cn: "",
            en: "Liberation Crystal",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV1,
        icon: require("@/assets/item/IP31001.png"),
        name: {
            zh: "火焰碎片",
            cn: "",
            en: "Flame Fragment",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV2,
        icon: require("@/assets/item/IP31002.png"),
        name: {
            zh: "火焰之石",
            cn: "",
            en: "Flame Stone",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV3,
        icon: require("@/assets/item/IP31003.png"),
        name: {
            zh: "緋紅結晶",
            cn: "",
            en: "Crimson Crystal",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_FIRE_LV4,
        icon: require("@/assets/item/IP31004.png"),
        name: {
            zh: "緋紅靈魂",
            cn: "",
            en: "Crimson Soul",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV1,
        icon: require("@/assets/item/IP31011.png"),
        name: {
            zh: "洪水碎片",
            cn: "",
            en: "Flood Fragment",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV2,
        icon: require("@/assets/item/IP31012.png"),
        name: {
            zh: "洪水之石",
            cn: "",
            en: "Flood Stone",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV3,
        icon: require("@/assets/item/IP31013.png"),
        name: {
            zh: "蒼藍結晶",
            cn: "",
            en: "Deep Blue Crystal",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WATER_LV4,
        icon: require("@/assets/item/IP31014.png"),
        name: {
            zh: "蒼藍靈魂",
            cn: "",
            en: "Deep Blue Soul",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV1,
        icon: require("@/assets/item/IP31021.png"),
        name: {
            zh: "烈風碎片",
            cn: "",
            en: "Gale Fragment",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV2,
        icon: require("@/assets/item/IP31022.png"),
        name: {
            zh: "烈風之石",
            cn: "",
            en: "Gale Stone",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV3,
        icon: require("@/assets/item/IP31023.png"),
        name: {
            zh: "翠綠結晶",
            cn: "",
            en: "Emerald Crystal",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_WIND_LV4,
        icon: require("@/assets/item/IP31024.png"),
        name: {
            zh: "翠綠靈魂",
            cn: "",
            en: "Emerald Soul",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV1,
        icon: require("@/assets/item/IP31031.png"),
        name: {
            zh: "光明碎片",
            cn: "",
            en: "Light Fragment",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV2,
        icon: require("@/assets/item/IP31032.png"),
        name: {
            zh: "光明之石",
            cn: "",
            en: "Light Stone",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV3,
        icon: require("@/assets/item/IP31033.png"),
        name: {
            zh: "雪白結晶",
            cn: "",
            en: "Snow Crystal",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_LIGHT_LV4,
        icon: require("@/assets/item/IP31034.png"),
        name: {
            zh: "雪白靈魂",
            cn: "",
            en: "Snow Soul",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV1,
        icon: require("@/assets/item/IP31041.png"),
        name: {
            zh: "黑暗碎片",
            cn: "",
            en: "Darkness Fragment",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV2,
        icon: require("@/assets/item/IP31042.png"),
        name: {
            zh: "黑暗之石",
            cn: "",
            en: "Darkness Stone",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV3,
        icon: require("@/assets/item/IP31043.png"),
        name: {
            zh: "靛紫結晶",
            cn: "",
            en: "Indigo Crystal",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.EVOLVE_DARK_LV4,
        icon: require("@/assets/item/IP31044.png"),
        name: {
            zh: "靛紫靈魂",
            cn: "",
            en: "Indigo Soul",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.EVOLVE,
        code: ItemCode.FLAWLESS,
        icon: require("@/assets/item/IP31501.png"),
        name: {
            zh: "無暇魂魄",
            cn: "",
            en: "Flawless Spirit",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.CLAW_LV1,
        icon: require("@/assets/item/IP30001.png"),
        name: {
            zh: "野獸之爪",
            cn: "",
            en: "Beast Claw",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.CLAW_LV2,
        icon: require("@/assets/item/IP30002.png"),
        name: {
            zh: "巨獸之爪",
            cn: "",
            en: "Giant Beast Claw",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.CLAW_LV3,
        icon: require("@/assets/item/IP30003.png"),
        name: {
            zh: "惡魔之爪",
            cn: "",
            en: "Demon Claw",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.IRON_LV1,
        icon: require("@/assets/item/IP30004.png"),
        name: {
            zh: "鐵錠",
            cn: "",
            en: "Iron",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.IRON_LV2,
        icon: require("@/assets/item/IP30005.png"),
        name: {
            zh: "鍛鐵錠",
            cn: "",
            en: "Wrought Iron",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.IRON_LV3,
        icon: require("@/assets/item/IP30006.png"),
        name: {
            zh: "純源鋼錠",
            cn: "",
            en: "Pure Steel",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.WATER_LV1,
        icon: require("@/assets/item/IP30007.png"),
        name: {
            zh: "純淨水",
            cn: "",
            en: "Clean Water",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.WATER_LV2,
        icon: require("@/assets/item/IP30008.png"),
        name: {
            zh: "月光水",
            cn: "",
            en: "Moonlight Water",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.WATER_LV3,
        icon: require("@/assets/item/IP30009.png"),
        name: {
            zh: "精靈露水",
            cn: "",
            en: "Elven Dew",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.MIXTURE_LV1,
        icon: require("@/assets/item/IP30010.png"),
        name: {
            zh: "史萊姆殘液",
            cn: "",
            en: "Slime",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.MIXTURE_LV2,
        icon: require("@/assets/item/IP30011.png"),
        name: {
            zh: "高級合劑",
            cn: "",
            en: "Quality Mixture",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.MIXTURE_LV3,
        icon: require("@/assets/item/IP30012.png"),
        name: {
            zh: "彩虹合劑",
            cn: "",
            en: "Rain Mixture",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.DUST_LV1,
        icon: require("@/assets/item/IP30013.png"),
        name: {
            zh: "毒之粉",
            cn: "",
            en: "Drugs",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.DUST_LV2,
        icon: require("@/assets/item/IP30014.png"),
        name: {
            zh: "星之粉",
            cn: "",
            en: "Stardust",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.DUST_LV3,
        icon: require("@/assets/item/IP30015.png"),
        name: {
            zh: "暗之粉",
            cn: "",
            en: "Dark Dust",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.HORN_LV1,
        icon: require("@/assets/item/IP30016.png"),
        name: {
            zh: "堅固之角",
            cn: "",
            en: "Sturdy Horn",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'CLAW_LV2', quantity: 4 },
            { code: 'DUST_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.HORN_LV2,
        icon: require("@/assets/item/IP30017.png"),
        name: {
            zh: "狂牛之角",
            cn: "",
            en: "Horny Cow Horn",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'HORN_LV1', quantity: 2 },
            { code: 'DUST_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.SLIVER_LV1,
        icon: require("@/assets/item/IP30018.png"),
        name: {
            zh: "銀錠",
            cn: "",
            en: "Sliver",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'IRON_LV2', quantity: 4 },
            { code: 'WATER_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.SLIVER_LV2,
        icon: require("@/assets/item/IP30019.png"),
        name: {
            zh: "聖銀錠",
            cn: "",
            en: "Holy Sliver",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'SLIVER_LV1', quantity: 2 },
            { code: 'MIXTURE_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.OIL_LV1,
        icon: require("@/assets/item/IP30020.png"),
        name: {
            zh: "儀式之油",
            cn: "",
            en: "Ceremonial Oil",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'WATER_LV2', quantity: 4 },
            { code: 'MIXTURE_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.OIL_LV2,
        icon: require("@/assets/item/IP30021.png"),
        name: {
            zh: "聖油",
            cn: "",
            en: "Holy Oil",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'OIL_LV1', quantity: 2 },
            { code: 'DUST_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.CRYSTAL_LV1,
        icon: require("@/assets/item/IP30022.png"),
        name: {
            zh: "腐蝕之塵",
            cn: "",
            en: "Corrosive Dirt",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'DUST_LV2', quantity: 4 },
            { code: 'CLAW_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.CRYSTAL_LV2,
        icon: require("@/assets/item/IP30023.png"),
        name: {
            zh: "暗龍結晶",
            cn: "",
            en: "Dragon Crystal",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'CRYSTAL_LV1', quantity: 2 },
            { code: 'WATER_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.FANG_LV1,
        icon: require("@/assets/item/IP30024.png"),
        name: {
            zh: "劇毒蛇牙",
            cn: "",
            en: "Venomous Fang",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'CLAW_LV2', quantity: 4 },
            { code: 'WATER_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.FANG_LV2,
        icon: require("@/assets/item/IP30025.png"),
        name: {
            zh: "邪龍毒牙",
            cn: "",
            en: "Evil Fang",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'FANG_LV1', quantity: 2 },
            { code: 'MIXTURE_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.BEAK_LV1,
        icon: require("@/assets/item/IP30026.png"),
        name: {
            zh: "獅鷲之喙",
            cn: "",
            en: "Griffin Snout",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'IRON_LV2', quantity: 4 },
            { code: 'DUST_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.BEAK_LV2,
        icon: require("@/assets/item/IP30027.png"),
        name: {
            zh: "聖鷲之喙",
            cn: "",
            en: "Vulture Beak",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'BEAK_LV1', quantity: 2 },
            { code: 'CLAW_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.SKIN_LV1,
        icon: require("@/assets/item/IP30028.png"),
        name: {
            zh: "熊皮",
            cn: "",
            en: "Bear Skin",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'MIXTURE_LV2', quantity: 4 },
            { code: 'IRON_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.SKIN_LV2,
        icon: require("@/assets/item/IP30029.png"),
        name: {
            zh: "巨鹿毛皮",
            cn: "",
            en: "Elk Skin",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'SKIN_LV1', quantity: 2 },
            { code: 'CLAW_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.BOOK_LV1,
        icon: require("@/assets/item/IP30030.png"),
        name: {
            zh: "邪語之書",
            cn: "",
            en: "Book of Curses",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'DUST_LV2', quantity: 4 },
            { code: 'CLAW_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.BOOK_LV2,
        icon: require("@/assets/item/IP30031.png"),
        name: {
            zh: "墮天之書",
            cn: "",
            en: "Book of Fallen Angels",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'BOOK_LV1', quantity: 2 },
            { code: 'IRON_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.FEATHER_LV1,
        icon: require("@/assets/item/IP30032.png"),
        name: {
            zh: "精緻尾羽",
            cn: "",
            en: "Exquisite Feather",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'MIXTURE_LV2', quantity: 4 },
            { code: 'MIXTURE_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.FEATHER_LV2,
        icon: require("@/assets/item/IP30033.png"),
        name: {
            zh: "女妖尾羽",
            cn: "",
            en: "Banshee Feather",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'FEATHER_LV1', quantity: 2 },
            { code: 'WATER_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.WEB_LV1,
        icon: require("@/assets/item/IP30034.png"),
        name: {
            zh: "蟲巢之絲",
            cn: "",
            en: "Insectoid Thread",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'WATER_LV2', quantity: 4 },
            { code: 'IRON_LV1', quantity: 4 }
        ]
    },
    {
        type: ItemType.POTENTIAL_ADVANCED,
        code: ItemCode.WEB_LV2,
        icon: require("@/assets/item/IP30035.png"),
        name: {
            zh: "蛛后之絲",
            cn: "",
            en: "Spider Web",
            jp: "",
            ko: ""
        },
        combined: [
            { code: 'WEB_LV1', quantity: 2 },
            { code: 'IRON_LV2', quantity: 3 }
        ]
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.SKILL_FRAGMENT,
        icon: require("@/assets/item/IP31901.png"),
        name: {
            zh: "技之碎片",
            cn: "",
            en: "Skill Fragment",
            jp: "",
            ko: ""
        },
    },
    {
        type: ItemType.POTENTIAL,
        code: ItemCode.SKILL_STONE,
        icon: require("@/assets/item/IP31902.png"),
        name: {
            zh: "技之原石",
            cn: "",
            en: "Skill Stone",
            jp: "",
            ko: ""
        },
    },
];

export default items;