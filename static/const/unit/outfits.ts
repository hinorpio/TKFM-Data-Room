import { UnitCode } from '@/plugins/utils/enums';

const cdnURL = `https://cdn.tkfmdata.com`

function getUnitOutfitPath(id: string[]): string[][]{
    var result: string[][] = []
    for (let i = 1; i <= 3; i++) {
        result.push([])
        for (let j = 0; j < id.length ; j++) {
            result[i-1].push(`${cdnURL}/character/outfit/${id[j]}-Lv${i}.png`);
        }
    }
    return result;
}

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