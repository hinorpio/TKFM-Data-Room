import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10084: SkillSet[] =  [
    {
        version: 2,
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
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加25/30/35/40/45%(1回合)，再以自身攻擊力265/298/331/364/397%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加25%(1回合)，再以自身攻擊力265%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加30%(1回合)，再以自身攻擊力298%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加35%(1回合)，再以自身攻擊力331%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加40%(1回合)，再以自身攻擊力364%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加45%(1回合)，再以自身攻擊力397%對目標造成傷害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `翻滾`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `人被殺，還沒死`,
                    description: `我方全體最大HP增加40%\n我方全體被治療量增加80%\n我方全體攻擊力增加40%\n自身必殺技最大CD減少1回合`
                },
                [SkillType.PASSIVE_1]: {
                    name: `天賦都點翻滾`,
                    description: `防禦減傷效果增加10%\n被攻擊時，觸發「使自身受到傷害減少10%(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `超級留言`,
                    description: `攻擊時，觸發「使自身攻擊力增加20%(3回合)」\n必殺時，觸發「使自身獲得《實況嗨起來》」\n\n《實況嗨起來》\n「觀看人數1000」(最多20層)\n「抖內100000 $」(20回合)\n造成傷害增加7%(最多5層)\n使自身獲得「攻擊時，觸發「以自身攻擊力50%對目標造成傷害」(3回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `外鄉人戰法`,
                    description: `必殺時，觸發「以自身攻擊力99.9%對目標造成傷害」\n攻擊時，觸發「使自身必殺技傷害增加10%(5回合)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `必殺+ (6潛)`,
                    description: `使自身必殺技傷害增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加25/30/35/40/45%(1回合)，再以自身攻击力265/298/331/364/397%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加25%(1回合)，再以自身攻击力265%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加30%(1回合)，再以自身攻击力298%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加35%(1回合)，再以自身攻击力331%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加40%(1回合)，再以自身攻击力364%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加45%(1回合)，再以自身攻击力397%对目标造成伤害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `翻滚`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `人被杀，还没死`,
                    description: `我方全体最大HP增加40%\n我方全体被治疗量增加80%\n我方全体攻击力增加40%\n自身必杀技最大CD减少1回合`
                },
                [SkillType.PASSIVE_1]: {
                    name: `天赋都点翻滚`,
                    description: `防御减伤效果增加10%\n被攻击时，触发「使自身受到伤害减少10%(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `超级留言`,
                    description: `攻击时，触发「使自身攻击力增加20%(3回合)」\n必杀时，触发「使自身获得《实况嗨起来》」\n\n《实况嗨起来》\n「观看人数1000」(最多20层)\n「抖内100000 $」(20回合)\n造成伤害增加7%(最多5层)\n使自身获得「攻击时，触发「以自身攻击力50%对目标造成伤害」(3回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `外乡人战法`,
                    description: `必杀时，触发「以自身攻击力99.9%对目标造成伤害」\n攻击时，触发「使自身必杀技伤害增加10%(5回合)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `必杀+ (6潜)`,
                    description: `使自身必杀技伤害增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫沉默`
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
    {
        version: 1,
        lastDate: "2023/01/19",
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
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加10/15/20/25/35%(1回合)，再以自身攻擊力265/298/331/364/397%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加10%(1回合)，再以自身攻擊力265%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加15%(1回合)，再以自身攻擊力298%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加20%(1回合)，再以自身攻擊力331%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加25%(1回合)，再以自身攻擊力364%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `發現破綻！`,
                    description: `使目標受到必殺技傷害增加35%(1回合)，再以自身攻擊力397%對目標造成傷害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `翻滾`,
                    description: `自身獲得受到傷害減少45%(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `人被殺，還沒死`,
                    description: `我方全體最大HP增加40%\n我方全體被治療量增加80%\n自身必殺技最大CD減少1回合`
                },
                [SkillType.PASSIVE_1]: {
                    name: `天賦都點翻滾`,
                    description: `防禦減傷效果減少25%\n普攻時，觸發「使自身必殺技傷害增加10%(7回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `超級留言`,
                    description: `攻擊時，觸發「使自身攻擊力增加20%(3回合)」\n必殺時，觸發「使自身獲得《實況嗨起來》」\n\n《實況嗨起來》\n「觀看人數：1000」(最多20層)\n「抖內100000 $」(20回合) \n造成傷害增加7%(最多5層) `
                },
                [SkillType.PASSIVE_3]: {
                    name: `外鄉人戰法`,
                    description: `必殺時，觸發「以自身攻擊力99.9%對目標造成傷害」\n被攻擊時，觸發「使自身受到傷害減少15%(1回合)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `必殺+ (6潛)`,
                    description: `使自身必殺技傷害增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加10/15/20/25/35%(1回合)，再以自身攻击力265/298/331/364/397%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加10%(1回合)，再以自身攻击力265%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加15%(1回合)，再以自身攻击力298%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加20%(1回合)，再以自身攻击力331%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加25%(1回合)，再以自身攻击力364%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `发现破绽！`,
                    description: `使目标受到必杀技伤害增加35%(1回合)，再以自身攻击力397%对目标造成伤害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `翻滚`,
                    description: `自身获得受到伤害减少45%(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `人被杀，还没死`,
                    description: `我方全体最大HP增加40%\n我方全体被治疗量增加80%\n自身必杀技最大CD减少1回合`
                },
                [SkillType.PASSIVE_1]: {
                    name: `天赋都点翻滚`,
                    description: `防御减伤效果减少25%\n普攻时，触发「使自身必杀技伤害增加10%(7回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `超级留言`,
                    description: `攻击时，触发「使自身攻击力增加20%(3回合)」\n必杀时，触发「使自身获得《实况嗨起来》」\n\n《实况嗨起来》\n「观看人数：1000」(最多20层)\n「抖内100000 $」(20回合) \n造成伤害增加7%(最多5层) `
                },
                [SkillType.PASSIVE_3]: {
                    name: `外乡人战法`,
                    description: `必杀时，触发「以自身攻击力99.9%对目标造成伤害」\n被攻击时，触发「使自身受到伤害减少15%(1回合)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `必杀+ (6潜)`,
                    description: `使自身必杀技伤害增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫沉默`
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