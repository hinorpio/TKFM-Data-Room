import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10130: SkillSet[] =  [
    {
        version: 1,
        lastDate: "",
        remark: {
            [Locale.tc]: "",
            [Locale.sc]: "",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
        skill: {
            [Locale.tc]: {
                [SkillType.BASE_STAT]: {
                    name: "完全體數據",
                    description: "HP：3,468,875\nATK：821,877"
                },
                [SkillType.SKILL_S]: {
                    name: "這一棒，貫穿腦門！",
                    description: "使目標受到傷害增加0/0/20/25/25%，以自身攻擊力211/234/256/278/300%對目標造成傷害，並使自身獲得「被攻擊時，觸發『以自身攻擊力156/156/178/178/200%對目標進行反擊(觸發1次後解除)』(3回合)」、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態，CD: 3"
                },
                [SkillType.SKILL_1]: {
                    name: "這一棒，貫穿腦門！",
                    description: "以自身攻擊力211%對目標造成傷害，並使自身獲得『被攻擊時，觸發以自身攻擊力156%對目標進行反擊(觸發1次後解除)』(3回合)、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態, CD: 3"
                },
                [SkillType.SKILL_2]: {
                    name: "這一棒，貫穿腦門！",
                    description: "以自身攻擊力234%對目標造成傷害，並使自身獲得『被攻擊時，觸發以自身攻擊力156%對目標進行反擊(觸發1次後解除)』(3回合)、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態, CD: 3"
                },
                [SkillType.SKILL_3]: {
                    name: "這一棒，貫穿腦門！",
                    description: "使目標受到傷害增加20%，以自身攻擊力256%對目標造成傷害，並使自身獲得『被攻擊時，觸發以自身攻擊力178%對目標進行反擊(觸發1次後解除)』(3回合)、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態, CD: 3"
                },
                [SkillType.SKILL_4]: {
                    name: "這一棒，貫穿腦門！",
                    description: "使目標受到傷害增加25%，以自身攻擊力278%對目標造成傷害，並使自身獲得『被攻擊時，觸發以自身攻擊力178%對目標進行反擊(觸發1次後解除)』(3回合)、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態, CD: 3"
                },
                [SkillType.SKILL_5]: {
                    name: "這一棒，貫穿腦門！",
                    description: "使目標受到傷害增加25%，以自身攻擊力300%對目標造成傷害，並使自身獲得『被攻擊時，觸發以自身攻擊力200%對目標進行反擊(觸發1次後解除)』(3回合)、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態, CD: 3"
                },
                [SkillType.ATTACK]: {
                    name: "跨殺小啦！",
                    description: "以自身攻擊力89%對目標造成傷害，並使自身受到傷害減少17%(1回合)"
                },
                [SkillType.LEADER]: {
                    name: "聖夜的繼承者",
                    description: "我方全體最大HP增加20%\n我方全體免疫嘲諷效果\n我方全體獲得「隊伍中至少有3名守護者時，發動『攻擊力增加140%』」\n我方全體獲得「隊伍中至少有3名守護者時，發動『造成傷害增加100%』」\n我方全體獲得「隊伍中至少有3名守護者時，發動『《江湖在走，球棒要有！》』」\n我方全體獲得「隊伍中至少有3名守護者時，發動『《沒有很可以》』」 \n\n《江湖在走，球棒要有！》\n被攻擊時，觸發「使目標受到觸發技傷害增加20%(最多10層)」\n\n《沒有很可以》\n必殺時，觸發「使自身獲得《但你惹不起！》」\n\n《但你惹不起！》\n被攻擊時，觸發「以自身攻擊力250%對目標進行反擊(觸發1次後解除)」(3回合)"
                },
                [SkillType.PASSIVE_1]: {
                    name: "狼若回頭！",
                    description: "免疫必殺技CD變動效果\n第1回合＆每經過3回合時，觸發「使自身獲得2層《喧嘩上等！》」\n被攻擊時，觸發「使自身獲得1層《喧嘩上等！》」\n\n《喧嘩上等！》\n使自身獲得文字效果《喧嘩上等！》(最多10層)\n使自身攻擊力增加5%(最多10層)"
                },
                [SkillType.PASSIVE_2]: {
                    name: "不是報恩！",
                    description: "當自身《暄曄上等！》層數≧3層時，發動「造成傷害增加5%」\n當自身《喧曄上等！》層數≧6層時，發動「造成傷害增加10%」\n當自身《暄曄上等！》層數≧9層時，發動「造成傷害增加15%」"
                },
                [SkillType.PASSIVE_3]: {
                    name: "就是爆頭！",
                    description: "當自身《喧嘩上等！》層數=10層時，發動「《夜露死苦！》」\n\n《夜露死苦！》\n行動時，觸發「使自身獲得《巴格耶鹿！》」\n\n《巴格耶鹿！》\n被攻擊時，觸發「以自身攻擊力100%對目標進行反擊(被攻擊1次後解除)」(1回合)"
                },
                [SkillType.GENERAL_1]: {
                    name: "傷害+ (6潛)",
                    description: "使自身造成傷害增加7.5%"
                },
                [SkillType.GENERAL_2]: {
                    name: "免疫麻痺 (12潛)",
                    description: "使自身免疫麻痺"
                }
            },
            [Locale.sc]: {
                [SkillType.BASE_STAT]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_S]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_2]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_3]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_4]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_5]: {
                    name: "",
                    description: ""
                },
                [SkillType.ATTACK]: {
                    name: "",
                    description: ""
                },
                [SkillType.LEADER]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_2]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_3]: {
                    name: "",
                    description: ""
                },
                [SkillType.GENERAL_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.GENERAL_2]: {
                    name: "",
                    description: ""
                }
            },
            [Locale.en]: {
                [SkillType.BASE_STAT]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_S]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_2]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_3]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_4]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_5]: {
                    name: "",
                    description: ""
                },
                [SkillType.ATTACK]: {
                    name: "",
                    description: ""
                },
                [SkillType.LEADER]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_2]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_3]: {
                    name: "",
                    description: ""
                },
                [SkillType.GENERAL_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.GENERAL_2]: {
                    name: "",
                    description: ""
                }
            },
            [Locale.jp]: {
                [SkillType.BASE_STAT]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_S]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_2]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_3]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_4]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_5]: {
                    name: "",
                    description: ""
                },
                [SkillType.ATTACK]: {
                    name: "",
                    description: ""
                },
                [SkillType.LEADER]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_2]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_3]: {
                    name: "",
                    description: ""
                },
                [SkillType.GENERAL_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.GENERAL_2]: {
                    name: "",
                    description: ""
                }
            },
            [Locale.kr]: {
                [SkillType.BASE_STAT]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_S]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_2]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_3]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_4]: {
                    name: "",
                    description: ""
                },
                [SkillType.SKILL_5]: {
                    name: "",
                    description: ""
                },
                [SkillType.ATTACK]: {
                    name: "",
                    description: ""
                },
                [SkillType.LEADER]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_2]: {
                    name: "",
                    description: ""
                },
                [SkillType.PASSIVE_3]: {
                    name: "",
                    description: ""
                },
                [SkillType.GENERAL_1]: {
                    name: "",
                    description: ""
                },
                [SkillType.GENERAL_2]: {
                    name: "",
                    description: ""
                }
            }
        }
    },
]