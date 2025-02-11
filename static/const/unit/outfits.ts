import { UnitCode } from '@/plugins/utils/enums';

const cdnURL = `https://cdn.tkfmdata.com`

const OUTFIT_2161_LV1 = `${cdnURL}/character/outfit/21611-Lv1.png`
const OUTFIT_2161_LV2 = `${cdnURL}/character/outfit/21611-Lv2.png`
const OUTFIT_2161_LV3 = `${cdnURL}/character/outfit/21611-Lv3.png`

const N = {
    
}

const R = {
    
}

const SR = {
    
}

const SSR = {
    [UnitCode.zaskia]: [ 
        [ OUTFIT_2161_LV1 ],
        [ OUTFIT_2161_LV2 ],
        [ OUTFIT_2161_LV3 ],
    ],
}

export const Outfits = {
    ...N,
    ...R,
    ...SR,
    ...SSR
}