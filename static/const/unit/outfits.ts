import { UnitCode } from '@/plugins/utils/enums';

const cdnURL = `https://cdn.tkfmdata.com`

const OUTFIT_10955_LV1 = `${cdnURL}/character/outfit/10955_0-Lv1.png`
const OUTFIT_10955_LV2 = `${cdnURL}/character/outfit/10955_0-Lv2.png`
const OUTFIT_10955_LV3 = `${cdnURL}/character/outfit/10955_0-Lv3.png`
const OUTFIT_20061_LV1 = `${cdnURL}/character/outfit/20061_0-Lv1.png`
const OUTFIT_20061_LV2 = `${cdnURL}/character/outfit/20061_0-Lv2.png`
const OUTFIT_20061_LV3 = `${cdnURL}/character/outfit/20061_0-Lv3.png`
const OUTFIT_21611_LV1 = `${cdnURL}/character/outfit/21611-Lv1.png`
const OUTFIT_21611_LV2 = `${cdnURL}/character/outfit/21611-Lv2.png`
const OUTFIT_21611_LV3 = `${cdnURL}/character/outfit/21611-Lv3.png`
const OUTFIT_21701_LV1 = `${cdnURL}/character/outfit/21701-Lv1.png`
const OUTFIT_21701_LV2 = `${cdnURL}/character/outfit/21701-Lv2.png`
const OUTFIT_21701_LV3 = `${cdnURL}/character/outfit/21701-Lv3.png`

const N = {
    [UnitCode.lori]: [
        [ OUTFIT_10955_LV1 ],
        [ OUTFIT_10955_LV2 ],
        [ OUTFIT_10955_LV3 ],
    ]
}

const R = {
    
}

const SR = {
    
}

const SSR = {
    [UnitCode.zaskia]: [ 
        [ OUTFIT_21611_LV1 ],
        [ OUTFIT_21611_LV2 ],
        [ OUTFIT_21611_LV3 ],
    ],
    [UnitCode.lulu]: [
        [ OUTFIT_20061_LV1 ],
        [ OUTFIT_20061_LV2 ],
        [ OUTFIT_20061_LV3 ],
    ],
    [UnitCode.w_tsubaki]: [
        [ OUTFIT_21701_LV1 ],
        [ OUTFIT_21701_LV2 ],
        [ OUTFIT_21701_LV3 ],
    ]
}

export const Outfits = {
    ...N,
    ...R,
    ...SR,
    ...SSR
}