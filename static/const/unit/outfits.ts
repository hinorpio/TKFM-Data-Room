import { UnitCode } from '@/plugins/utils/enums';

import OUTFIT_21611 from "@/assets/character/outfit/21611-Lv1.png"

const N = {
    
}

const R = {
    
}

const SR = {
    
}

const SSR = {
    [UnitCode.zaskia]: [ OUTFIT_21611 ],
}

export const Outfits = {
    ...N,
    ...R,
    ...SR,
    ...SSR
}