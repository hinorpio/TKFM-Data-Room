import { Room } from "~/interface/stat/room";
import { Rarity } from "~/plugins/utils/enums";

const rooms: Room[] = [
    { rarity: Rarity.R, room: 1, exp: 10000 },
    { rarity: Rarity.R, room: 2, exp: 40000 },
    { rarity: Rarity.R, room: 3, exp: 80000 },
    { rarity: Rarity.SR, room: 1, exp: 12000 },
    { rarity: Rarity.SR, room: 2, exp: 60000 },
    { rarity: Rarity.SR, room: 3, exp: 200000 },
    { rarity: Rarity.SSR, room: 1, exp: 18000 },
    { rarity: Rarity.SSR, room: 2, exp: 90000 },
    { rarity: Rarity.SSR, room: 3, exp: 300000 },
]

export default rooms