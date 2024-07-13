import { Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10138: SkillSet[] =  [
    {
        version: 2,
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
                    description: "HP：3,543,722\nATK：804,606"
                },
                [SkillType.SKILL_S]: {
                    name: "魔王城party time",
                    description: "使自身獲得1/1/2/2/3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30/40/40/50/50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60/70/80/90/100%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.SKILL_1]: {
                    name: "魔王城party time",
                    description: "使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.SKILL_2]: {
                    name: "魔王城party time",
                    description: "使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力70%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.SKILL_3]: {
                    name: "魔王城party time",
                    description: "使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力80%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.SKILL_4]: {
                    name: "魔王城party time",
                    description: "使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力90%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.SKILL_5]: {
                    name: "魔王城party time",
                    description: "使自身獲得3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力100%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.ATTACK]: {
                    name: "派對邀請函",
                    description: "以自身攻擊力50%每回合對我方全體進行治療(3回合)"
                },
                [SkillType.LEADER]: {
                    name: "睡衣派對要開始囉～",
                    description: "我方全體最大HP增加30%\n我方全體攻擊力增加50%\n自身必殺時，觸發「使我方站位5獲得必殺技傷害增加30%(1回合)」\n自身必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加7.5%(1回合)」\n自身必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加7.5%(1回合)」\n使我方全體輔助者獲得「必殺時，觸發『以自身攻擊力10%使我方站位5攻擊力增加(1回合)」\n使我方全體妨礙者獲得「必殺時，觸發『使我方站位5獲得《派對焦點》(1回合)』」\n使我方最大HP最高者獲得「防禦時，觸發『以自身最大HP30%給予我方最大HP最低者護盾(1回合)』」\n \n《派對焦點》\n必殺時，追加「以自身攻擊力50%對目標造成傷害」"
                },
                [SkillType.PASSIVE_1]: {
                    name: "羞澀的戀愛話題",
                    description: "必殺時，觸發「以自身攻擊力100%對我方全體進行治療，再以自身攻擊力50%每回合對我方全體進行治療(3回合)」"
                },
                [SkillType.PASSIVE_2]: {
                    name: "刺激的派對遊戲",
                    description: "使我方全體輔助者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對主持人》(最多4層)』(觸發1次後清除)」\n使我方全體妨礙者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對參加者》(最多4層)』(觸發1次後清除)」\n必殺時，觸發「使自身不受《派對主持人》、《派對參加者》層數變動效果影響(50回合)」(觸發1次後解除)\n必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加8.75%(1回合)」\n必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加8.75%(1回合)」"
                },
                [SkillType.PASSIVE_3]: {
                    name: "臨時枕頭堡壘！",
                    description: "防禦時，觸發「使我方最大HP最低者受到傷害減少20%(1回合)」\n防禦時，觸發「以自身攻擊力50%對我方全體進行治療」"
                },
                [SkillType.GENERAL_1]: {
                    name: "持續治療+ (6潛)",
                    description: "使自身造成持續型治療增加10%"
                },
                [SkillType.GENERAL_2]: {
                    name: "免疫沉默 (12潛)",
                    description: "使自身免疫沉默"
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
    {
        version: 1,
        lastDate: "2024/04/26",
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
                    description: "HP：3,375,317\nATK：767,182\n(上調基礎ATK與HP數值)"
                },
                [SkillType.SKILL_S]: {
                    name: "魔王城party time",
                    description: "使自身獲得1/1/2/2/3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30/40/40/50/50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60/70/80/90/100%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.SKILL_1]: {
                    name: "魔王城party time",
                    description: "使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.SKILL_2]: {
                    name: "魔王城party time",
                    description: "使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力70%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.SKILL_3]: {
                    name: "魔王城party time",
                    description: "使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力80%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.SKILL_4]: {
                    name: "魔王城party time",
                    description: "使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力90%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.SKILL_5]: {
                    name: "魔王城party time",
                    description: "使自身獲得3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力100%對目標造成傷害』(1回合)」，CD:3"
                },
                [SkillType.ATTACK]: {
                    name: "派對邀請函",
                    description: "以自身攻擊力50%每回合對我方全體進行治療(3回合)"
                },
                [SkillType.LEADER]: {
                    name: "睡衣派對要開始囉～",
                    description: "我方全體最大HP增加30%\n我方全體攻擊力增加50%\n自身必殺時，觸發「使我方站位5獲得必殺技傷害增加30%(1回合)」\n自身必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加7.5%(1回合)」\n自身必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加7.5%(1回合)」\n使我方全體輔助者獲得「必殺時，觸發『以自身攻擊力10%使我方站位5攻擊力增加(1回合)」\n使我方全體妨礙者獲得「必殺時，觸發『使我方站位5獲得《派對焦點》(1回合)』」\n使我方最大HP最高者獲得「防禦時，觸發『以自身最大HP30%給予我方最大HP最低者護盾(1回合)』」\n \n《派對焦點》\n必殺時，追加「以自身攻擊力50%對目標造成傷害」"
                },
                [SkillType.PASSIVE_1]: {
                    name: "羞澀的戀愛話題",
                    description: "必殺時，觸發「以自身攻擊力100%對我方全體進行治療，再以自身攻擊力50%每回合對我方全體進行治療(3回合)」"
                },
                [SkillType.PASSIVE_2]: {
                    name: "刺激的派對遊戲",
                    description: "使我方全體輔助者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對主持人》(最多4層)』(觸發1次後清除)」\n使我方全體妨礙者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對參加者》(最多4層)』(觸發1次後清除)」\n必殺時，觸發「使自身不受《派對主持人》、《派對參加者》層數變動效果影響(50回合)」(觸發1次後解除)\n必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加8.75%(1回合)」\n必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加8.75%(1回合)」"
                },
                [SkillType.PASSIVE_3]: {
                    name: "臨時枕頭堡壘！",
                    description: "防禦時，觸發「使我方最大HP最低者受到傷害減少20%(1回合)」\n防禦時，觸發「以自身攻擊力50%對我方全體進行治療」"
                },
                [SkillType.GENERAL_1]: {
                    name: "持續治療+ (6潛)",
                    description: "使自身造成持續型治療增加10%"
                },
                [SkillType.GENERAL_2]: {
                    name: "免疫沉默 (12潛)",
                    description: "使自身免疫沉默"
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