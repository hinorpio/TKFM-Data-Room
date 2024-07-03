import { Tag } from '@/interface/tag';
import { TagType } from '@/plugins/utils/enums';
const tags: Tag[] = [
    {
        ID: 1,
        type: TagType.ELEMENT,
        icon: "mdi-fire",
        name: {
            tc: "火屬性",
            sc: "火属性",
            en: "Fire Attr.",
            jp: "火属性",
            kr: "화속성",
        }
    },
    {
        ID: 2,
        type: TagType.ELEMENT,
        icon: "mdi-water-outline",
        name: {
            tc: "水屬性",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 3,
        type: TagType.ELEMENT,
        icon: "mdi-weather-windy",
        name: {
            tc: "風屬性",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 4,
        type: TagType.ELEMENT,
        icon: "mdi-weather-sunny",
        name: {
            tc: "光屬性",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 5,
        type: TagType.ELEMENT,
        icon: "mdi-weather-night",
        name: {
            tc: "闇屬性",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 6,
        type: TagType.POSITION,
        icon: "mdi-sword",
        name: {
            tc: "攻擊者",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 7,
        type: TagType.POSITION,
        icon: "mdi-shield-half-full",
        name: {
            tc: "守護者",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 8,
        type: TagType.POSITION,
        icon: "mdi-heart-outline",
        name: {
            tc: "治療者",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 9,
        type: TagType.POSITION,
        icon: "mdi-tangram",
        name: {
            tc: "妨礙者",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 10,
        type: TagType.POSITION,
        icon: "mdi-magic-staff",
        name: {
            tc: "輔助者",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 11,
        type: TagType.SPECIES,
        icon: "mdi-account",
        name: {
            tc: "人類",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 12,
        type: TagType.SPECIES,
        icon: "mdi-account",
        name: {
            tc: "魔族",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 13,
        type: TagType.SPECIES,
        icon: "mdi-account",
        name: {
            tc: "亞人",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 14,
        type: TagType.BODY,
        icon: "mdi-ruler",
        name: {
            tc: "小體型",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 15,
        type: TagType.BODY,
        icon: "mdi-ruler",
        name: {
            tc: "中體型",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 16,
        type: TagType.BREAST,
        icon: "mdi-record-circle-outline",
        name: {
            tc: "貧乳",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 17,
        type: TagType.BREAST,
        icon: "mdi-record-circle-outline",
        name: {
            tc: "美乳",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 18,
        type: TagType.BREAST,
        icon: "mdi-record-circle-outline",
        name: {
            tc: "巨乳",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 19,
        type: TagType.CLASS,
        icon: "mdi-medal-outline",
        name: {
            tc: "士兵",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 20,
        type: TagType.CLASS,
        icon: "mdi-medal-outline",
        name: {
            tc: "菁英",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 21,
        type: TagType.CLASS,
        icon: "mdi-medal-outline",
        name: {
            tc: "領袖",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 22,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "輸出",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 23,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "保護",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 24,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "防禦",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 25,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "回復",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 26,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "干擾",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 27,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "支援",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 28,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "削弱",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 29,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "爆發力",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 30,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "生存力",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 31,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "越戰越強",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 32,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "群體攻擊",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    },
    {
        ID: 33,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "回擊",
            sc: null,
            en: null,
            jp: null,
            kr: null
        }
    }
]

export default tags;