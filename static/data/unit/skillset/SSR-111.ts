import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10141: SkillSet[] =  [
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
                    description: "HP：3,071,610\nATK：928,392"
                },
                [SkillType.SKILL_S]: {
                    name: "彈無虛發喵！",
                    description: "以自身攻擊力20/23.3%對目標造成傷害6次，再使我方全體造成觸發技效果增加60/70%(6回合)，並使目標受到風屬性傷害增加10/15%(6回合)，CD:6\n\n3絆+：使我方全體造成觸發技效果增加80/90/100%(6回合)，再使目標受到風屬性傷害增加20/25/30%(6回合)，並以自身攻擊力26.6/30/33.3%對目標造成傷害6次，CD:6"
                },
                [SkillType.SKILL_1]: {
                    name: "彈無虛發喵！",
                    description: "以自身攻擊力20%對目標造成傷害6次，再使我方全體造成觸發技效果增加60%(6回合)，並使目標受到風屬性傷害增加10%(6回合)，CD:6"
                },
                [SkillType.SKILL_2]: {
                    name: "彈無虛發喵！",
                    description: "以自身攻擊力23.3%對目標造成傷害6次，再使我方全體造成觸發技效果增加70%(6回合)，並使目標受到風屬性傷害增加15%(6回合)，CD:6"
                },
                [SkillType.SKILL_3]: {
                    name: "彈無虛發喵！",
                    description: "使我方全體造成觸發技效果增加80%(6回合)，再使目標受到風屬性傷害增加20%(6回合)，並以自身攻擊力26.6%對目標造成傷害6次，CD:6"
                },
                [SkillType.SKILL_4]: {
                    name: "彈無虛發喵！",
                    description: "使我方全體造成觸發技效果增加90%(6回合)，再使目標受到風屬性傷害增加25%(6回合)，並以自身攻擊力30%對目標造成傷害6次，CD:6"
                },
                [SkillType.SKILL_5]: {
                    name: "彈無虛發喵！",
                    description: "使我方全體造成觸發技效果增加100%(6回合)，再使目標受到風屬性傷害增加30%(6回合)，並以自身攻擊力33.3%對目標造成傷害6次，CD:6"
                },
                [SkillType.ATTACK]: {
                    name: "調查喵射擊",
                    description: "以自身攻擊力33.3%對目標造成傷害3次"
                },
                [SkillType.LEADER]: {
                    name: "與深淵同行",
                    description: "我方全體最大HP增加20%\n我方全體攻擊力增加50%\n自身獲得《調查真相》\n\n《調查真相》\n第1回合時，觸發「使自身當前必殺技CD減少3回合」\n攻擊力增加40%\n造成傷害增加50%\n攻擊時，觸發「以自身攻擊力100%對目標造成傷害」\n必殺時，觸發「使目標受到風屬性傷害增加30%(6回合)」\n當前HP≦99%時，發動「《瀕臨崩潰》」\n防御時，觸發「使自身不受《瀕臨崩潰》效果影響(1回合)」\n\n《瀕臨崩潰》\n被攻擊時，觸發「清除自身《理智值》的所有層數」"
                },
                [SkillType.PASSIVE_1]: {
                    name: "調查喵探險中",
                    description: "第1回合時，觸發「使自身獲得50層《理智值》(最多50層)」\n每經過1回合時，觸發「使自身《理智值》層數減少10層」"
                },
                [SkillType.PASSIVE_2]: {
                    name: "直視深淵",
                    description: "自身《理智值》層數=50層時，開啟「造成觸發技效果增加30%」\n自身《理智值》層數≧40層時，開啟 「造成傷害增加20%」\n自身《理智值》層數≧30層時，開啟「攻擊時，觸發『以自身攻擊力100%對目標造成傷害』」\n自身《理智值》層數≧20層時，開啟「攻擊力增加65%」\n自身《理智值》層數≧10層時，開啟「攻擊力增加65%」\n自身《理智值》層數<1層時，開啟「《喪失理智》」\n\n《喪失理智》\n每經過1回合時，觸發「《無上真神之影》」\n\n《無上真神之影》\n使自身獲得50層《理智值》(最多50層)，並對自身造成睡眠(1回合)"
                },
                [SkillType.PASSIVE_3]: {
                    name: "情報部隊守則第一條",
                    description: "第1回合時，觸發「使自身當前必殺技CD減少3回合」\n必殺時，觸發「《理智值:笨蛋凱薩》」\n\n《理智值:笨蛋凱薩》\n以自身攻擊力100%對目標造成傷害\n使自身獲得50層《理智值》(最多50層)\n使自身不受「《理智值》層數減少」效果影響(4回合)"
                },
                [SkillType.GENERAL_1]: {
                    name: "觸發+ (6潛)",
                    description: "使自身造成觸發技效果增加30%"
                },
                [SkillType.GENERAL_2]: {
                    name: "免疫睡眠 (12潛)",
                    description: "使自身免疫睡眠"
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