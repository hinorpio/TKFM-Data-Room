import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10134: SkillSet[] =  [
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
                    description: "HP：3,034,187\nATK：939,907"
                },
                [SkillType.SKILL_S]: {
                    name: "大家一起高聲歌唱～♪",
                    description: "使自身獲得『攻擊時，觸發「以自身攻擊力0/0/10/12.5/15%使自身以外我方全體攻擊力增加(1回合)」』(5回合)、使我方全體攻擊者、妨礙者獲得『必殺時，追加「以自身攻擊力65/75/75/75/75%對目標造成傷害」』(1回合)、使我方全體造成傷害增加30/37.5/45/52.5/60%(1回合)、以自身攻擊力165/188/211/234/257%對我方全體進行治療，CD:4"
                },
                [SkillType.SKILL_1]: {
                    name: "大家一起高聲歌唱～♪",
                    description: "使我方全體攻擊者、妨礙者獲得『必殺時，追加「以自身攻擊力65%對目標造成傷害」』(1回合)、使我方全體造成傷害增加30%(1回合)、以自身攻擊力165%對我方全體進行治療，CD:4"
                },
                [SkillType.SKILL_2]: {
                    name: "大家一起高聲歌唱～♪",
                    description: "使我方全體攻擊者、妨礙者獲得『必殺時，追加「以自身攻擊力75%對目標造成傷害」』(1回合)、使我方全體造成傷害增加37.5%(1回合)、以自身攻擊力188%對我方全體進行治療，CD:4"
                },
                [SkillType.SKILL_3]: {
                    name: "大家一起高聲歌唱～♪",
                    description: "使自身獲得『攻擊時，觸發「以自身攻擊力10%使自身以外我方全體攻擊力增加(1回合)」』(5回合)、使我方全體攻擊者、妨礙者獲得『必殺時，追加「以自身攻擊力75%對目標造成傷害」』(1回合)、使我方全體造成傷害增加45%(1回合)、以自身攻擊力211%對我方全體進行治療，CD:4"
                },
                [SkillType.SKILL_4]: {
                    name: "大家一起高聲歌唱～♪",
                    description: "使自身獲得『攻擊時，觸發「以自身攻擊力12.5%使自身以外我方全體攻擊力增加(1回合)」』(5回合)、使我方全體攻擊者、妨礙者獲得『必殺時，追加「以自身攻擊力75%對目標造成傷害」』(1回合)、使我方全體造成傷害增加52.5%(1回合)、以自身攻擊力234%對我方全體進行治療，CD:4"
                },
                [SkillType.SKILL_5]: {
                    name: "大家一起高聲歌唱～♪",
                    description: "使自身獲得『攻擊時，觸發「以自身攻擊力15%使自身以外我方全體攻擊力增加(1回合)」』(5回合)、使我方全體攻擊者、妨礙者獲得『必殺時，追加「以自身攻擊力75%對目標造成傷害」』(1回合)、使我方全體造成傷害增加60%(1回合)、以自身攻擊力257%對我方全體進行治療，CD:4"
                },
                [SkillType.ATTACK]: {
                    name: "饒舌時間到！",
                    description: "以自身攻擊力75%對我方全體進行治療"
                },
                [SkillType.LEADER]: {
                    name: "光輝璀璨★閃耀之歌姬",
                    description: "我方全體最大HP增加35%\n自身必殺時，觸發「《驅散悲傷之光☆》」\n我方全體獲得「我方隊伍中正好有4種屬性隊員時，發動 《偶像勁舞團》」\n\n《驅散悲傷之光☆》\n使敵方全體受到傷害增加30%(1回合)\n使我方全體攻擊者、妨礙者獲得「必殺時，追加『以自身攻擊力80對目標造成傷害』(1回合)」\n\n《偶像勁舞團》\n攻擊力增加125%\n受到治療量增加30%"
                },
                [SkillType.PASSIVE_1]: {
                    name: "張口就是flow",
                    description: "攻擊力增加35%\n必殺時，觸發「以自身攻擊力15使自身以外我方全體攻擊力增加(1回合)」"
                },
                [SkillType.PASSIVE_2]: {
                    name: "每句詞都溜",
                    description: "普攻時，觸發「以自身攻擊力40每回合對我方全體進行治療(1回合)」\n必殺時，觸發「以自身攻擊力80每回合對我方全體進行治療(1回合)」"
                },
                [SkillType.PASSIVE_3]: {
                    name: "粉絲見到都說wow",
                    description: "必殺時，觸發「以自身攻擊力15使自身以外我方全體攻擊力增加(1回合)」\n防禦時，觸發「以自身攻擊力120每回合對我方全體進行治療(1回合)」"
                },
                [SkillType.GENERAL_1]: {
                    name: "造成治療+ (6潛)",
                    description: "使自身造成治療量提升15%"
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