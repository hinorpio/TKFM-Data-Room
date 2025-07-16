import { UnitCode } from '@/plugins/utils/enums';

const cdnURL = `https://cdn.tkfmdata.com`

const OUTFIT_10943_LV1 = `${cdnURL}/character/outfit/10943-Lv1.png`
const OUTFIT_10943_LV2 = `${cdnURL}/character/outfit/10943-Lv2.png`
const OUTFIT_10943_LV3 = `${cdnURL}/character/outfit/10943-Lv3.png`
const OUTFIT_10944_LV1 = `${cdnURL}/character/outfit/10944-Lv1.png`
const OUTFIT_10944_LV2 = `${cdnURL}/character/outfit/10944-Lv2.png`
const OUTFIT_10944_LV3 = `${cdnURL}/character/outfit/10944-Lv3.png`
const OUTFIT_10945_LV1 = `${cdnURL}/character/outfit/10945-Lv1.png`
const OUTFIT_10945_LV2 = `${cdnURL}/character/outfit/10945-Lv2.png`
const OUTFIT_10945_LV3 = `${cdnURL}/character/outfit/10945-Lv3.png`
const OUTFIT_10946_LV1 = `${cdnURL}/character/outfit/10946-Lv1.png`
const OUTFIT_10946_LV2 = `${cdnURL}/character/outfit/10946-Lv2.png`
const OUTFIT_10946_LV3 = `${cdnURL}/character/outfit/10946-Lv3.png`
const OUTFIT_10955_LV1 = `${cdnURL}/character/outfit/10955-Lv1.png`
const OUTFIT_10955_LV2 = `${cdnURL}/character/outfit/10955-Lv2.png`
const OUTFIT_10955_LV3 = `${cdnURL}/character/outfit/10955-Lv3.png`
const OUTFIT_20061_LV1 = `${cdnURL}/character/outfit/20061-Lv1.png`
const OUTFIT_20061_LV2 = `${cdnURL}/character/outfit/20061-Lv2.png`
const OUTFIT_20061_LV3 = `${cdnURL}/character/outfit/20061-Lv3.png`
const OUTFIT_21611_LV1 = `${cdnURL}/character/outfit/21611-Lv1.png`
const OUTFIT_21611_LV2 = `${cdnURL}/character/outfit/21611-Lv2.png`
const OUTFIT_21611_LV3 = `${cdnURL}/character/outfit/21611-Lv3.png`
const OUTFIT_21701_LV1 = `${cdnURL}/character/outfit/21701-Lv1.png`
const OUTFIT_21701_LV2 = `${cdnURL}/character/outfit/21701-Lv2.png`
const OUTFIT_21701_LV3 = `${cdnURL}/character/outfit/21701-Lv3.png`
const OUTFIT_21711_LV1 = `${cdnURL}/character/outfit/21711-Lv1.png`
const OUTFIT_21711_LV2 = `${cdnURL}/character/outfit/21711-Lv2.png`
const OUTFIT_21711_LV3 = `${cdnURL}/character/outfit/21711-Lv3.png`
const OUTFIT_21781_LV1 = `${cdnURL}/character/outfit/21781-Lv1.png`
const OUTFIT_21781_LV2 = `${cdnURL}/character/outfit/21781-Lv2.png`
const OUTFIT_21781_LV3 = `${cdnURL}/character/outfit/21781-Lv3.png`

const N = {
    [UnitCode.anna]: [
        [ OUTFIT_10943_LV1, OUTFIT_10945_LV1 ],
        [ OUTFIT_10943_LV2, OUTFIT_10945_LV2 ],
        [ OUTFIT_10943_LV3, OUTFIT_10945_LV3 ],
    ],
    [UnitCode.blaire]: [
        [ OUTFIT_10944_LV1, OUTFIT_10946_LV1 ],
        [ OUTFIT_10944_LV2, OUTFIT_10946_LV2 ],
        [ OUTFIT_10944_LV3, OUTFIT_10946_LV3 ],
    ],
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
    ],
    [UnitCode.ss_iblis]: [
        [ OUTFIT_21711_LV1 ],
        [ OUTFIT_21711_LV2 ],
        [ OUTFIT_21711_LV3 ],
    ],
    [UnitCode.sky_baal]: [
        [ OUTFIT_21781_LV1 ],
        [ OUTFIT_21781_LV2 ],
        [ OUTFIT_21781_LV3 ],
    ]
}

export const Outfits = {
    ...N,
    ...R,
    ...SR,
    ...SSR
}