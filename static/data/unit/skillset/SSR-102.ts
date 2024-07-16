import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10023: SkillSet[] =  [
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
                    description: "HP：3,966,895\nATK：719,684"
                },
                [SkillType.SKILL_S]: {
                    name: "狂犬的忠僕",
                    description: "使自身攻擊力增加40/60/70/90/100%(1回合)，並以自身攻擊力20/20/22.5/22.5/25%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP15/17.5/17.5/20/20%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD :4"
                },
                [SkillType.SKILL_1]: {
                    name: "狂犬的忠僕",
                    description: "使自身攻擊力增加40%(1回合)，並以自身攻擊力20%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP15%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD:4"
                },
                [SkillType.SKILL_2]: {
                    name: "狂犬的忠僕",
                    description: "使自身攻擊力增加60%(1回合)，並以自身攻擊力20%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP17.5%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD:4"
                    },
                [SkillType.SKILL_3]: {
                    name: "狂犬的忠僕",
                    description: "使自身攻擊力增加70%(1回合)，並以自身攻擊力22.5%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP17.5%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD:4"
                },
                [SkillType.SKILL_4]: {
                    name: "狂犬的忠僕",
                    description: "使自身攻擊力增加90%(1回合)，並以自身攻擊力22.5%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP20%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD:4"
                },
                [SkillType.SKILL_5]: {
                    name: "狂犬的忠僕",
                    description: "使自身攻擊力增加100%(1回合)，並以自身攻擊力25%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP20%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD:4"
                },
                [SkillType.ATTACK]: {
                    name: "作戰指揮",
                    description: "使我方全體攻擊力增加25%(1回合)，並以自身攻擊力75%對目標造成傷害"
                },
                [SkillType.LEADER]: {
                    name: "獵犬的目光",
                    description: "我方全體最大HP增加10%\n我方全體攻擊力增加100%\n使自身以外我方全體獲得防禦時，觸發「使我方站位1獲得1層《編制重整》(最多4層)」(50回合)\n每經過1回合時，觸發「清除自身《編制重整》的所有層數」\n當自身《編制重整》層數=4層時，發動「防禦時，觸發『使自身獲得1層《轉進》(最多1層)』」\n當自身《轉進》層數=1層時，發動《反噬的犬嚎》\n\n《反噬的犬嚎》\n必殺時，追加「以自身攻擊力25%使自身以外的我方全體攻擊力增加(1回合)」\n必殺時，追加「使我方全體造成傷害增加50%(1回合)」\n必殺時，追加「使我方全體必殺技傷害增加50%(1回合)」\n必殺時，追加「使目標受到傷害增加50%(1回合)」\n必殺時，觸發「清除自身《轉進》的所有層數」"
                },
                [SkillType.PASSIVE_1]: {
                    name: "戰術性撤退",
                    description: "第1回合&必殺時，觸發「使自身獲得1層《孱弱的假象》(最多1層)」\n當自身《孱弱的假象》層數=1層時，發動「《防守》」\n\n《防守》\n防禦時，觸發「使自身獲得嘲諷(1回合)」且獲得《反擊》效果」\n\n《反擊》\n被攻擊時，觸發「使我方全體造成傷害增加35%(4回合)，清除自身的《孱弱的假象》的所有層數」(1回合)(觸發1次後解除)"
                },
                [SkillType.PASSIVE_2]: {
                    name: "驕兵之計",
                    description: "防禦時，觸發「使自身獲得1層《反攻的時機》(最多1層)」\n當自身《反攻的時機》層數=1層時，發動「《逆襲的砲火 》」\n\n《逆襲的砲火》\n必殺時，追加「以自身攻擊力75%對目標造成傷害2次」\n必殺時，觸發「清除自身《反攻的時機》的所有層數」"
                },
                [SkillType.PASSIVE_3]: {
                    name: "給你放個長假",
                    description: "當自身《反攻的時機》層數=1層時，發動「《逆襲的彈雨》」\n\n《逆襲的彈雨》\n必殺時，追加「以自身攻擊力45.5%對目標造成傷害8次」"
                },
                [SkillType.GENERAL_1]: {
                    name: "攻擊+ (6潛)",
                    description: "使自身攻擊力增加10%"
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