import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10120: SkillSet[] =  [
    {
        version: 1,
        lastDate: "",
        remark: {
            [Locale.tc]: ``,
            [Locale.sc]: ``,
            [Locale.en]: ``,
            [Locale.jp]: ``,
            [Locale.kr]: ``
        },
        skill: {
            [Locale.tc]: {
                [SkillType.SKILL_S]: {
                    name: `一顆深海的大鳳梨！`,
                    description: `使自身造成觸發技效果增加40/60/60/80/100%(3回合)，使自身必殺技傷害增加0/0/20/37.5/45%(1回合)，並以自身攻擊力330/376/422/468/514%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `一顆深海的大鳳梨`,
                    description: `使自身造成觸發技效果增加40%(3回合)，並以自身攻擊力330%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `一顆深海的大鳳梨`,
                    description: `使自身造成觸發技效果增加60%(3回合)，並以自身攻擊力376%對目標造成傷害，CD: 4` 
                },
                [SkillType.SKILL_3]: {
                    name: `一顆深海的大鳳梨`,
                    description: `使自身造成觸發技效果增加60%(3回合)，使自身必殺技傷害增加20%(1回合)，並以自身攻擊力422%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `一顆深海的大鳳梨`, 
                    description: `使自身造成觸發技效果增加80%(3回合)，使自身必殺技傷害增加37.5%(1回合)，並以自身攻擊力468%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `一顆深海的大鳳梨`,
                    description: `使自身造成觸發技效果增加100%(3回合)，使自身必殺技傷害增加45%(1回合)，並以自身攻擊力514%對目標造成傷害，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `伸縮自如的～`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `跟著矮人船長一起上！`,
                    description: `我方全體最大HP增加20%\n我方全體攻擊力增加50%\n使我方所有攻擊者、妨礙者獲得「隊伍中至少有3名風屬性角色時，發動《乘風而行》」\n每Wave的第1回合，觸發「使敵方全體受到風屬性傷害增加25%(50回合)」\n\n《乘風而行》\n使自身攻擊力增加80\n使自身造成傷害增加40%\n使自身攻擊時，觸發「《斬破滔浪》」\n\n《斬破滔浪》\n使我方站位1獲得「普攻時，觸發『以自身攻擊力65%對目標造成傷害』(1回合)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `填裝火藥`,
                    description: `普攻時，觸發「使自身攻擊力增加50%(3回合)」\n每經過1回合，觸發「使自身獲得必殺時，觸發『清除自身《填裝火藥》的攻擊力增加(回合型)效果』(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `準備好了嗎？孩子們！`,
                    description: `普攻時，觸發「《是的船長！》」\n每經過1回合，觸發「使自身獲得必殺時，觸發『清除自身《是的船長！》的效果』(1回合)」\n\n《是的船長！》\n使自身獲得必殺時，觸發「以自身攻擊力80%對目標造成傷害」(3回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `太小聲囉！`,
                    description: `必殺技最大CD減少1回合\n普攻時，觸發「使自身造成傷害增加20%(3回合)」\n每經過1回合，觸發「使自身獲得必殺時，觸發『清除自身《太小聲囉！》的造成傷害增加(回合型)效果』(1回合)`
                },
                [SkillType.GENERAL_1]: {
                    name: `傷害+ (6潛)`,
                    description: `使自身造成傷害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潛)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `一颗深海的大凤梨！`,
                    description: `使自身造成触发技效果增加40/60/60/80/100%(3回合)，使自身必杀技伤害增加0/0/20/37.5/45%(1回合)，并以自身攻击力330/376/422/468/514%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `一颗深海的大凤梨`,
                    description: `使自身造成触发技效果增加40%(3回合)，并以自身攻击力330%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `一颗深海的大凤梨`,
                    description: `使自身造成触发技效果增加60%(3回合)，并以自身攻击力376%对目标造成伤害，CD: 4` 
                },
                [SkillType.SKILL_3]: {
                    name: `一颗深海的大凤梨`,
                    description: `使自身造成触发技效果增加60%(3回合)，使自身必杀技伤害增加20%(1回合)，并以自身攻击力422%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `一颗深海的大凤梨`, 
                    description: `使自身造成触发技效果增加80%(3回合)，使自身必杀技伤害增加37.5%(1回合)，并以自身攻击力468%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `一颗深海的大凤梨`,
                    description: `使自身造成触发技效果增加100%(3回合)，使自身必杀技伤害增加45%(1回合)，并以自身攻击力514%对目标造成伤害，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `伸缩自如的～`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `跟着矮人船长一起上！`,
                    description: `我方全体最大HP增加20%\n我方全体攻击力增加50%\n使我方所有攻击者丶妨碍者获得「队伍中至少有3名风属性角色时，发动《乘风而行》」\n每Wave的第1回合，触发「使敌方全体受到风属性伤害增加25%(50回合)」\n\n《乘风而行》\n使自身攻击力增加80\n使自身造成伤害增加40%\n使自身攻击时，触发「《斩破滔浪》」\n\n《斩破滔浪》\n使我方站位1获得「普攻时，触发『以自身攻击力65%对目标造成伤害』(1回合)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `填装火药`,
                    description: `普攻时，触发「使自身攻击力增加50%(3回合)」\n每经过1回合，触发「使自身获得必杀时，触发『清除自身《填装火药》的攻击力增加(回合型)效果』(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `准备好了吗？孩子们！`,
                    description: `普攻时，触发「《是的船长！》」\n每经过1回合，触发「使自身获得必杀时，触发『清除自身《是的船长！》的效果』(1回合)」\n\n《是的船长！》\n使自身获得必杀时，触发「以自身攻击力80%对目标造成伤害」(3回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `太小声罗！`,
                    description: `必杀技最大CD减少1回合\n普攻时，触发「使自身造成伤害增加20%(3回合)」\n每经过1回合，触发「使自身获得必杀时，触发『清除自身《太小声罗！》的造成伤害增加(回合型)效果』(1回合)`
                },
                [SkillType.GENERAL_1]: {
                    name: `伤害+ (6潜)`,
                    description: `使自身造成伤害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潜)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_4]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_5]: {
                    name: ``,
                    description: ``
                },
                [SkillType.ATTACK]: {
                    name: ``,
                    description: ``
                },
                [SkillType.LEADER]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_2]: {
                    name: ``,
                    description: ``
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_4]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_5]: {
                    name: ``,
                    description: ``
                },
                [SkillType.ATTACK]: {
                    name: ``,
                    description: ``
                },
                [SkillType.LEADER]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_2]: {
                    name: ``,
                    description: ``
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_4]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_5]: {
                    name: ``,
                    description: ``
                },
                [SkillType.ATTACK]: {
                    name: ``,
                    description: ``
                },
                [SkillType.LEADER]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_2]: {
                    name: ``,
                    description: ``
                }
            }
        }
    },
]