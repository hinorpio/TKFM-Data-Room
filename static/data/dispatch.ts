import { Dispatch } from '@/interface/dispatch';
import { DispatchType, ItemCode } from '@/plugins/utils/enums';
import { DispatchImage } from '~/static/const';

const dispatch: Dispatch[] = [
    {
        type: DispatchType.CAESAR_ROOM,
        image: {
            tc: DispatchImage.CAESAR_ROOM.tc,
            sc: DispatchImage.CAESAR_ROOM.sc,
            en: DispatchImage.CAESAR_ROOM.en,
            jp: DispatchImage.CAESAR_ROOM.jp,
            kr: DispatchImage.CAESAR_ROOM.kr,
        },
        name: {
            tc: "魔王寢室",
            sc: "",
            en: "Caesar's Room",
            jp: "",
            kr: "",
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
            tc: DispatchImage.DUNGEON.tc,
            sc: DispatchImage.DUNGEON.sc,
            en: DispatchImage.DUNGEON.en,
            jp: DispatchImage.DUNGEON.jp,
            kr: DispatchImage.DUNGEON.kr,
        },
        name: {
            tc: "地牢",
            sc: "",
            en: "Dungeon",
            jp: "",
            kr: "",
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
            tc: DispatchImage.TRAINING_CENTER.tc,
            sc: DispatchImage.TRAINING_CENTER.sc,
            en: DispatchImage.TRAINING_CENTER.en,
            jp: DispatchImage.TRAINING_CENTER.jp,
            kr: DispatchImage.TRAINING_CENTER.kr,
        },
        name: {
            tc: "訓練所",
            sc: "",
            en: "Training Center",
            jp: "",
            kr: "",
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
            tc: DispatchImage.TREASURE_ROOM.tc,
            sc: DispatchImage.TREASURE_ROOM.sc,
            en: DispatchImage.TREASURE_ROOM.en,
            jp: DispatchImage.TREASURE_ROOM.jp,
            kr: DispatchImage.TREASURE_ROOM.kr,
        },
        name: {
            tc: "寶藏庫",
            sc: "",
            en: "Treasure Room",
            jp: "",
            kr: "",
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
            tc: DispatchImage.SEALED_CHAMBER.tc,
            sc: DispatchImage.SEALED_CHAMBER.sc,
            en: DispatchImage.SEALED_CHAMBER.en,
            jp: DispatchImage.SEALED_CHAMBER.jp,
            kr: DispatchImage.SEALED_CHAMBER.kr,
        },
        name: {
            tc: "封印密室",
            sc: "",
            en: "Sealed Chamber",
            jp: "",
            kr: "",
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