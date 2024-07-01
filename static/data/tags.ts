import { Tag } from '@/interface/global/tag';
import { TagType } from '@/plugins/utils/enums';
const tags: Tag[] = [
    {
        ID: 1,
        type: TagType.ELEMENT,
        icon: "mdi-fire",
        name: {
            zh: "火屬性",
            cn: "火属性",
            en: "Fire Attr.",
            jp: "火属性",
            ko: "화속성",
        }
    },
    {
        ID: 2,
        type: TagType.ELEMENT,
        icon: "mdi-water-outline",
        name: {
            zh: "水屬性",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 3,
        type: TagType.ELEMENT,
        icon: "mdi-weather-windy",
        name: {
            zh: "風屬性",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 4,
        type: TagType.ELEMENT,
        icon: "mdi-weather-sunny",
        name: {
            zh: "光屬性",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 5,
        type: TagType.ELEMENT,
        icon: "mdi-weather-night",
        name: {
            zh: "闇屬性",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 6,
        type: TagType.POSITION,
        icon: "mdi-sword",
        name: {
            zh: "攻擊者",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 7,
        type: TagType.POSITION,
        icon: "mdi-shield-half-full",
        name: {
            zh: "守護者",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 8,
        type: TagType.POSITION,
        icon: "mdi-heart-outline",
        name: {
            zh: "治療者",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 9,
        type: TagType.POSITION,
        icon: "mdi-tangram",
        name: {
            zh: "妨礙者",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 10,
        type: TagType.POSITION,
        icon: "mdi-magic-staff",
        name: {
            zh: "輔助者",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 11,
        type: TagType.SPECIES,
        icon: "mdi-account",
        name: {
            zh: "人類",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 12,
        type: TagType.SPECIES,
        icon: "mdi-account",
        name: {
            zh: "魔族",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 13,
        type: TagType.SPECIES,
        icon: "mdi-account",
        name: {
            zh: "亞人",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 14,
        type: TagType.BODY,
        icon: "mdi-ruler",
        name: {
            zh: "小體型",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 15,
        type: TagType.BODY,
        icon: "mdi-ruler",
        name: {
            zh: "中體型",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 16,
        type: TagType.BREAST,
        icon: "mdi-record-circle-outline",
        name: {
            zh: "貧乳",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 17,
        type: TagType.BREAST,
        icon: "mdi-record-circle-outline",
        name: {
            zh: "美乳",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 18,
        type: TagType.BREAST,
        icon: "mdi-record-circle-outline",
        name: {
            zh: "巨乳",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 19,
        type: TagType.CLASS,
        icon: "mdi-medal-outline",
        name: {
            zh: "士兵",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 20,
        type: TagType.CLASS,
        icon: "mdi-medal-outline",
        name: {
            zh: "菁英",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 21,
        type: TagType.CLASS,
        icon: "mdi-medal-outline",
        name: {
            zh: "領袖",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 22,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "輸出",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 23,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "保護",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 24,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "防禦",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 25,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "回復",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 26,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "干擾",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 27,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "支援",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 28,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "削弱",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 29,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "爆發力",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 30,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "生存力",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 31,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "越戰越強",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 32,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "群體攻擊",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    },
    {
        ID: 33,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            zh: "回擊",
            cn: null,
            en: null,
            jp: null,
            ko: null
        }
    }
]

export default tags;