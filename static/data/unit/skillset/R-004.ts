import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10804: SkillSet[] =  [
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
        dispatchSkill: { type: DispatchSkillType.EMPTY_HAND, level: 2 },
        skill: {
            [Locale.tc]: {
                [SkillType.SKILL_S]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少10/12.5/15/17.5/20%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少10%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少12.5%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少15%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少17.5%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少20%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `爪擊`,
                    description: `以攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `靜水守護`,
                    description: `使我方風屬性角色被水屬性攻擊時受到傷害減少12.5%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `知恩圖報`,
                    description: `被治療時，觸發"使自身獲得每回合以攻擊力25%進行治療(2回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `簡單快樂`,
                    description: `使自身被治療時回復量增加12.5%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `感恩的心`,
                    description: `被治療時，有50%機率觸發"使自身當前必殺技CD減少1回合"效果`
                },
                [SkillType.DISPATCH]: {
                    name: `嗅覺敏銳(空手而歸↓↓) (3潛)`,
                    description: `進行派遣時，少量降低空手而歸機率(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺 (6潛)`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少10/12.5/15/17.5/20%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少10%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少12.5%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少15%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少17.5%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少20%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `爪击`,
                    description: `以攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `静水守护`,
                    description: `使我方风属性角色被水属性攻击时受到伤害减少12.5%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `知恩图报`,
                    description: `被治疗时，触发"使自身获得每回合以攻击力25%进行治疗(2回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `简单快乐`,
                    description: `使自身被治疗时回复量增加12.5%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `感恩的心`,
                    description: `被治疗时，有50%机率触发"使自身当前必杀技CD减少1回合"效果`
                },
                [SkillType.DISPATCH]: {
                    name: `嗅觉敏锐(空手而归↓↓) (3潜)`,
                    description: `进行派遣时，少量降低空手而归机率(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹 (6潜)`,
                    description: `使自身免疫麻痹`
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