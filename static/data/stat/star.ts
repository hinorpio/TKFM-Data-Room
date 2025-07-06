import { Star } from "~/interface/stat/star";
import { Element, ItemCode, Rarity } from "~/plugins/utils/enums";

const stars: Star[] = [
    {
        star: 1,
        item: {
            [Element.FIRE]: [
                { code: `ESSENCE`, quantity: 20 },
                { code: ItemCode.EVOLVE_FIRE_LV1, quantity: 2 },
            ],
            [Element.WATER]: [
                { code: `ESSENCE`, quantity: 20 },
                { code: ItemCode.EVOLVE_WATER_LV1, quantity: 2 },
            ],
            [Element.WIND]: [
                { code: `ESSENCE`, quantity: 20 },
                { code: ItemCode.EVOLVE_WIND_LV1, quantity: 2 },
            ],
            [Element.LIGHT]: [
                { code: `ESSENCE`, quantity: 20 },
                { code: ItemCode.EVOLVE_LIGHT_LV1, quantity: 2 },
            ],
            [Element.DARK]: [
                { code: `ESSENCE`, quantity: 20 },
                { code: ItemCode.EVOLVE_DARK_LV1, quantity: 2 },
            ],
        },
        sliverCoin: {
            [Rarity.N]: 5000,
            [Rarity.R]: 0,
            [Rarity.SR]: 0,
            [Rarity.SSR]: 0,
        }
    },
    {
        star: 2,
        item: {
            [Element.FIRE]: [
                { code: `ESSENCE`, quantity: 30 },
                { code: ItemCode.EVOLVE_FIRE_LV1, quantity: 5 },
                { code: ItemCode.IRON_LV1, quantity: 2 },
            ],
            [Element.WATER]: [
                { code: `ESSENCE`, quantity: 30 },
                { code: ItemCode.EVOLVE_WATER_LV1, quantity: 5 },
                { code: ItemCode.WATER_LV1, quantity: 2 },
            ],
            [Element.WIND]: [
                { code: `ESSENCE`, quantity: 30 },
                { code: ItemCode.EVOLVE_WIND_LV1, quantity: 5 },
                { code: ItemCode.CLAW_LV1, quantity: 2 },
            ],
            [Element.LIGHT]: [
                { code: `ESSENCE`, quantity: 30 },
                { code: ItemCode.EVOLVE_LIGHT_LV1, quantity: 5 },
                { code: ItemCode.MIXTURE_LV1, quantity: 2 },
            ],
            [Element.DARK]: [
                { code: `ESSENCE`, quantity: 30 },
                { code: ItemCode.EVOLVE_DARK_LV1, quantity: 5 },
                { code: ItemCode.DUST_LV1, quantity: 2 },
            ],
        },
        sliverCoin: {
            [Rarity.N]: 15000,
            [Rarity.R]: 15000,
            [Rarity.SR]: 0,
            [Rarity.SSR]: 0,
        }
    },
    {
        star: 3,
        item: {
            [Element.FIRE]: [
                { code: `ESSENCE`, quantity: 40 },
                { code: ItemCode.EVOLVE_FIRE_LV2, quantity: 8 },
                { code: ItemCode.IRON_LV2, quantity: 3 },
            ],
            [Element.WATER]: [
                { code: `ESSENCE`, quantity: 40 },
                { code: ItemCode.EVOLVE_WATER_LV2, quantity: 8 },
                { code: ItemCode.WATER_LV2, quantity: 3 },
            ],
            [Element.WIND]: [
                { code: `ESSENCE`, quantity: 40 },
                { code: ItemCode.EVOLVE_WIND_LV2, quantity: 8 },
                { code: ItemCode.CLAW_LV2, quantity: 3 },
            ],
            [Element.LIGHT]: [
                { code: `ESSENCE`, quantity: 40 },
                { code: ItemCode.EVOLVE_LIGHT_LV2, quantity: 8 },
                { code: ItemCode.MIXTURE_LV2, quantity: 3 },
            ],
            [Element.DARK]: [
                { code: `ESSENCE`, quantity: 40 },
                { code: ItemCode.EVOLVE_DARK_LV2, quantity: 8 },
                { code: ItemCode.DUST_LV2, quantity: 3 },
            ],
        },
        sliverCoin: {
            [Rarity.N]: 50000,
            [Rarity.R]: 50000,
            [Rarity.SR]: 50000,
            [Rarity.SSR]: 0,
        }
    },
    {
        star: 4,
        item: {
            [Element.FIRE]: [
                { code: `ESSENCE`, quantity: 55 },
                { code: ItemCode.EVOLVE_FIRE_LV3, quantity: 10 },
                { code: ItemCode.IRON_LV3, quantity: 5 },
            ],
            [Element.WATER]: [
                { code: `ESSENCE`, quantity: 55 },
                { code: ItemCode.EVOLVE_WATER_LV3, quantity: 10 },
                { code: ItemCode.WATER_LV3, quantity: 5 },
            ],
            [Element.WIND]: [
                { code: `ESSENCE`, quantity: 55 },
                { code: ItemCode.EVOLVE_WIND_LV3, quantity: 10 },
                { code: ItemCode.CLAW_LV3, quantity: 5 },
            ],
            [Element.LIGHT]: [
                { code: `ESSENCE`, quantity: 55 },
                { code: ItemCode.EVOLVE_LIGHT_LV3, quantity: 10 },
                { code: ItemCode.MIXTURE_LV3, quantity: 5 },
            ],
            [Element.DARK]: [
                { code: `ESSENCE`, quantity: 55 },
                { code: ItemCode.EVOLVE_DARK_LV3, quantity: 10 },
                { code: ItemCode.DUST_LV3, quantity: 5 },
            ],
        },
        sliverCoin: {
            [Rarity.N]: 120000,
            [Rarity.R]: 120000,
            [Rarity.SR]: 150000,
            [Rarity.SSR]: 150000,
        }
    },
    {
        star: 5,
        item: {
            [Element.FIRE]: [
                { code: `ESSENCE`, quantity: 125 },
                { code: ItemCode.EVOLVE_FIRE_LV4, quantity: 5 },
                { code: ItemCode.FLAWLESS, quantity: {
                    [Rarity.N]: 1,
                    [Rarity.R]: 1,
                    [Rarity.SR]: 2,
                    [Rarity.SSR]: 3,
                }},
            ],
            [Element.WATER]: [
                { code: `ESSENCE`, quantity: 125 },
                { code: ItemCode.EVOLVE_WATER_LV4, quantity: 5 },
                { code: ItemCode.FLAWLESS, quantity: {
                    [Rarity.N]: 1,
                    [Rarity.R]: 1,
                    [Rarity.SR]: 2,
                    [Rarity.SSR]: 3,
                }},
            ],
            [Element.WIND]: [
                { code: `ESSENCE`, quantity: 125 },
                { code: ItemCode.EVOLVE_WIND_LV4, quantity: 5 },
                { code: ItemCode.FLAWLESS, quantity: {
                    [Rarity.N]: 1,
                    [Rarity.R]: 1,
                    [Rarity.SR]: 2,
                    [Rarity.SSR]: 3,
                }},
            ],
            [Element.LIGHT]: [
                { code: `ESSENCE`, quantity: 125 },
                { code: ItemCode.EVOLVE_LIGHT_LV4, quantity: 5 },
                { code: ItemCode.FLAWLESS, quantity: {
                    [Rarity.N]: 1,
                    [Rarity.R]: 1,
                    [Rarity.SR]: 2,
                    [Rarity.SSR]: 3,
                }},
            ],
            [Element.DARK]: [
                { code: `ESSENCE`, quantity: 125 },
                { code: ItemCode.EVOLVE_DARK_LV4, quantity: 5 },
                { code: ItemCode.FLAWLESS, quantity: {
                    [Rarity.N]: 1,
                    [Rarity.R]: 1,
                    [Rarity.SR]: 2,
                    [Rarity.SSR]: 3,
                }},
            ],
        },
        sliverCoin: {
            [Rarity.N]: 300000,
            [Rarity.R]: 300000,
            [Rarity.SR]: 400000,
            [Rarity.SSR]: 500000,
        }
    },
]

export default stars