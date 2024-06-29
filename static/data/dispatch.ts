import { Dispatch } from '@/interface/global/dispatch';
import { DispatchType, ItemCode } from '@/plugins/utils/enums';
import { DispatchImage } from '~/static/data/ImageSrc';

const dispatch: Dispatch[] = [
    {
        type: DispatchType.CAESAR_ROOM,
        image: {
            zh: DispatchImage.CAESAR_ROOM.zh,
            cn: DispatchImage.CAESAR_ROOM.cn,
            en: DispatchImage.CAESAR_ROOM.en,
            jp: DispatchImage.CAESAR_ROOM.jp,
            ko: DispatchImage.CAESAR_ROOM.ko,
        },
        name: {
            zh: "魔王寢室",
            cn: "",
            en: "Caesar's Room",
            jp: "",
            ko: "",
        },
        item: [
            ItemCode.IRON_LV1,
            ItemCode.IRON_LV2,
            ItemCode.IRON_LV3,
            ItemCode.DISCIPLINE_FIRE_LV1,
            ItemCode.DISCIPLINE_FIRE_LV2,
        ]
    },
    {
        type: DispatchType.DUNGEON,
        image: {
            zh: DispatchImage.DUNGEON.zh,
            cn: DispatchImage.DUNGEON.cn,
            en: DispatchImage.DUNGEON.en,
            jp: DispatchImage.DUNGEON.jp,
            ko: DispatchImage.DUNGEON.ko,
        },
        name: {
            zh: "地牢",
            cn: "",
            en: "Dungeon",
            jp: "",
            ko: "",
        },
        item: [
            ItemCode.WATER_LV1,
            ItemCode.WATER_LV2,
            ItemCode.WATER_LV3,
            ItemCode.DISCIPLINE_WATER_LV1,
            ItemCode.DISCIPLINE_WATER_LV2,
        ]
    },
    {
        type: DispatchType.TRAINING_CENTER,
        image: {
            zh: DispatchImage.TRAINING_CENTER.zh,
            cn: DispatchImage.TRAINING_CENTER.cn,
            en: DispatchImage.TRAINING_CENTER.en,
            jp: DispatchImage.TRAINING_CENTER.jp,
            ko: DispatchImage.TRAINING_CENTER.ko,
        },
        name: {
            zh: "訓練所",
            cn: "",
            en: "Training Center",
            jp: "",
            ko: "",
        },
        item: [
            ItemCode.CLAW_LV1,
            ItemCode.CLAW_LV2,
            ItemCode.CLAW_LV3,
            ItemCode.DISCIPLINE_WIND_LV1,
            ItemCode.DISCIPLINE_WIND_LV2,
        ]
    },
    {
        type: DispatchType.TREASURE_ROOM,
        image: {
            zh: DispatchImage.TREASURE_ROOM.zh,
            cn: DispatchImage.TREASURE_ROOM.cn,
            en: DispatchImage.TREASURE_ROOM.en,
            jp: DispatchImage.TREASURE_ROOM.jp,
            ko: DispatchImage.TREASURE_ROOM.ko,
        },
        name: {
            zh: "寶藏庫",
            cn: "",
            en: "Treasure Room",
            jp: "",
            ko: "",
        },
        item: [
            ItemCode.MIXTURE_LV1,
            ItemCode.MIXTURE_LV2,
            ItemCode.MIXTURE_LV3,
            ItemCode.DISCIPLINE_LIGHT_LV1,
            ItemCode.DISCIPLINE_LIGHT_LV2,
        ]
    },
    {
        type: DispatchType.SEALED_CHAMBER,
        image: {
            zh: DispatchImage.SEALED_CHAMBER.zh,
            cn: DispatchImage.SEALED_CHAMBER.cn,
            en: DispatchImage.SEALED_CHAMBER.en,
            jp: DispatchImage.SEALED_CHAMBER.jp,
            ko: DispatchImage.SEALED_CHAMBER.ko,
        },
        name: {
            zh: "封印密室",
            cn: "",
            en: "Sealed Chamber",
            jp: "",
            ko: "",
        },
        item: [
            ItemCode.DUST_LV1,
            ItemCode.DUST_LV2,
            ItemCode.DUST_LV3,
            ItemCode.DISCIPLINE_DARK_LV1,
            ItemCode.DISCIPLINE_DARK_LV2,
        ]
    },
]

export default dispatch;