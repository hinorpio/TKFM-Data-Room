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
            sc: "水属性",
            en: "Water Attr.",
            jp: "水属性",
            kr: "수속성"
        }
    },
    {
        ID: 3,
        type: TagType.ELEMENT,
        icon: "mdi-weather-windy",
        name: {
            tc: "風屬性",
            sc: "风属性",
            en: "Wind Attr.",
            jp: "風属性",
            kr: "풍속성"
        }
    },
    {
        ID: 4,
        type: TagType.ELEMENT,
        icon: "mdi-weather-sunny",
        name: {
            tc: "光屬性",
            sc: "光属性",
            en: "Light Attr.",
            jp: "光属性",
            kr: "광속성"
        }
    },
    {
        ID: 5,
        type: TagType.ELEMENT,
        icon: "mdi-weather-night",
        name: {
            tc: "闇屬性",
            sc: "暗属性",
            en: "Dark Attr.",
            jp: "闇属性",
            kr: "암속성"
        }
    },
    {
        ID: 6,
        type: TagType.POSITION,
        icon: "mdi-sword",
        name: {
            tc: "攻擊者",
            sc: "攻击者",
            en: "Attacker",
            jp: "アタッカー",
            kr: "딜러"
        }
    },
    {
        ID: 7,
        type: TagType.POSITION,
        icon: "mdi-shield-half-full",
        name: {
            tc: "守護者",
            sc: "守护者",
            en: "Protector",
            jp: "ガーディアン",
            kr: "탱커"
        }
    },
    {
        ID: 8,
        type: TagType.POSITION,
        icon: "mdi-heart-outline",
        name: {
            tc: "治療者",
            sc: "治疗者",
            en: "Healer",
            jp: "ヒーラー",
            kr: "힐러"
        }
    },
    {
        ID: 9,
        type: TagType.POSITION,
        icon: "mdi-tangram",
        name: {
            tc: "妨礙者",
            sc: "妨碍者",
            en: "Obstructer",
            jp: "デバッファー",
            kr: "디스럽터"
        }
    },
    {
        ID: 10,
        type: TagType.POSITION,
        icon: "mdi-magic-staff",
        name: {
            tc: "輔助者",
            sc: "辅助者",
            en: "Supporter",
            jp: "サポーター",
            kr: "서포터"
        }
    },
    {
        ID: 11,
        type: TagType.SPECIES,
        icon: "mdi-account",
        name: {
            tc: "人類",
            sc: "人类",
            en: "Human",
            jp: "人類",
            kr: "인간"
        }
    },
    {
        ID: 12,
        type: TagType.SPECIES,
        icon: "mdi-account",
        name: {
            tc: "魔族",
            sc: "魔族",
            en: "Demon",
            jp: "魔族",
            kr: "마족"
        }
    },
    {
        ID: 13,
        type: TagType.SPECIES,
        icon: "mdi-account",
        name: {
            tc: "亞人",
            sc: "亚人",
            en: "Demihuman",
            jp: "亜人",
            kr: "야인"
        }
    },
    {
        ID: 14,
        type: TagType.BODY,
        icon: "mdi-ruler",
        name: {
            tc: "小體型",
            sc: "小体型",
            en: "Small Sized",
            jp: "小柄",
            kr: "작은 체형"
        }
    },
    {
        ID: 15,
        type: TagType.BODY,
        icon: "mdi-ruler",
        name: {
            tc: "中體型",
            sc: "中体型",
            en: "Medium Sized",
            jp: "中肉中背",
            kr: "표준 체형"
        }
    },
    {
        ID: 16,
        type: TagType.BREAST,
        icon: "mdi-record-circle-outline",
        name: {
            tc: "貧乳",
            sc: "贫乳",
            en: "Flat Tits",
            jp: "貧乳",
            kr: "빈유"
        }
    },
    {
        ID: 17,
        type: TagType.BREAST,
        icon: "mdi-record-circle-outline",
        name: {
            tc: "美乳",
            sc: "美乳",
            en: "Hot Tits",
            jp: "美乳",
            kr: "미유"
        }
    },
    {
        ID: 18,
        type: TagType.BREAST,
        icon: "mdi-record-circle-outline",
        name: {
            tc: "巨乳",
            sc: "巨乳",
            en: "Giant Tits",
            jp: "巨乳",
            kr: "거유"
        }
    },
    {
        ID: 19,
        type: TagType.CLASS,
        icon: "mdi-medal-outline",
        name: {
            tc: "士兵",
            sc: "士兵",
            en: "Soldier",
            jp: "兵士",
            kr: "병사"
        }
    },
    {
        ID: 20,
        type: TagType.CLASS,
        icon: "mdi-medal-outline",
        name: {
            tc: "菁英",
            sc: "菁英",
            en: "Elite",
            jp: "エリート",
            kr: "정예"
        }
    },
    {
        ID: 21,
        type: TagType.CLASS,
        icon: "mdi-medal-outline",
        name: {
            tc: "領袖",
            sc: "领袖",
            en: "Leader",
            jp: "リーダー",
            kr: "리더"
        }
    },
    {
        ID: 22,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "輸出",
            sc: "输出",
            en: "Dmg. Output",
            jp: "出力",
            kr: "데미지"
        }
    },
    {
        ID: 23,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "保護",
            sc: "保护",
            en: "Protection",
            jp: "保護",
            kr: "보호"
        }
    },
    {
        ID: 24,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "防禦",
            sc: "防御",
            en: "Defense",
            jp: "防御",
            kr: "방어"
        }
    },
    {
        ID: 25,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "回復",
            sc: "回复",
            en: "Recovery",
            jp: "回復",
            kr: "회복"
        }
    },
    {
        ID: 26,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "干擾",
            sc: "干扰",
            en: "Interference",
            jp: "干渉",
            kr: "방해"
        }
    },
    {
        ID: 27,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "支援",
            sc: "支援",
            en: "Support",
            jp: "サポート",
            kr: "지원"
        }
    },
    {
        ID: 28,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "削弱",
            sc: "削弱",
            en: "Weaken",
            jp: "弱体化",
            kr: "쇠약"
        }
    },
    {
        ID: 29,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "爆發力",
            sc: "爆发力",
            en: "Explosiveness",
            jp: "爆発力",
            kr: "폭발력"
        }
    },
    {
        ID: 30,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "生存力",
            sc: "生存力",
            en: "Survivability",
            jp: "生存力",
            kr: "생존력"
        }
    },
    {
        ID: 31,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "越戰越強",
            sc: "越战越强",
            en: "More Power",
            jp: "持続強化",
            kr: "전투하면\n할수록 강해진다"
        }
    },
    {
        ID: 32,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "群體攻擊",
            sc: "群体攻击",
            en: "AoE",
            jp: "範囲攻撃",
            kr: "범위 공격"
        }
    },
    {
        ID: 33,
        type: TagType.OTHER,
        icon: "mdi-dots-horizontal",
        name: {
            tc: "回擊",
            sc: "回击",
            en: "Counterstrike",
            jp: "反撃",
            kr: "반격"
        }
    }
]

export default tags;