import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10001: SkillSet[] =  [
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
                    name: `烈焰攻心`,
                    description: `使自身攻擊力增加25/25/25/35/35%(3回合)，再以攻擊力330/376/422/422/422%對目標造成傷害，CD: 4 [5絆 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `烈焰攻心`,
                    description: `使自身攻擊力增加25%(3回合)，再以攻擊力330%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `烈焰攻心`,
                    description: `使自身攻擊力增加25%(3回合)，再以攻擊力376%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `烈焰攻心`,
                    description: `使自身攻擊力增加25%(3回合)，再以攻擊力422%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `烈焰攻心`,
                    description: `使自身攻擊力增加35%(3回合)，再以攻擊力422%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `烈焰攻心`,
                    description: `使自身攻擊力增加35%(3回合)，再以攻擊力422%對目標造成傷害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `魔力彈`,
                    description: `以攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `魔王巴爾之狡詐`,
                    description: `使自身攻擊力增加125%，但自身以外的隊員造成傷害減少10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `魔王肉體`,
                    description: `使自身普攻傷害增加25%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `不為人知的性格`,
                    description: `被攻擊時，觸發"使自身攻勢力增加15%(最多2層)"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `巴爾的惡作劇`,
                    description: `必殺時，觸發"使自身當前必殺技CD減少1回合、目標當前必殺技CD增加2回合"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `普攻傷害+ (6潛)`,
                    description: `使自身普攻傷害增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `烈焰攻心`,
                    description: `使自身攻击力增加25/25/25/35/35%(3回合)，再以攻击力330/376/422/422/422%对目标造成伤害，CD: 4 [5绊 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `烈焰攻心`,
                    description: `使自身攻击力增加25%(3回合)，再以攻击力330%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `烈焰攻心`,
                    description: `使自身攻击力增加25%(3回合)，再以攻击力376%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `烈焰攻心`,
                    description: `使自身攻击力增加25%(3回合)，再以攻击力422%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `烈焰攻心`,
                    description: `使自身攻击力增加35%(3回合)，再以攻击力422%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `烈焰攻心`,
                    description: `使自身攻击力增加35%(3回合)，再以攻击力422%对目标造成伤害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `魔力弹`,
                    description: `以攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `魔王巴尔之狡诈`,
                    description: `使自身攻击力增加125%，但自身以外的队员造成伤害减少10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `魔王肉体`,
                    description: `使自身普攻伤害增加25%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `不为人知的性格`,
                    description: `被攻击时，触发"使自身攻势力增加15%(最多2层)"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `巴尔的恶作剧`,
                    description: `必杀时，触发"使自身当前必杀技CD减少1回合丶目标当前必杀技CD增加2回合"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `普攻伤害+ (6潜)`,
                    description: `使自身普攻伤害增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Psychological Flames`,
                    description: `Increase Attack Power by 25/25/25/35/35% for 3 turns, then deal damage to target (330/376/422/422/422% Attack Power) (CD: 4) [Bond 5: (CD: 3)]`
                },
                [SkillType.SKILL_1]: {
                    name: `Psychological Flames`,
                    description: `Increase Attack Power by 25% for 3 turns, then deal damage to target (330% Attack Power) (CD: 4)`
                },
                [SkillType.SKILL_2]: {
                    name: `Psychological Flames`,
                    description: `Increase Attack Power by 25% for 3 turns, then deal damage to target (376% Attack Power) (CD: 4)`
                },
                [SkillType.SKILL_3]: {
                    name: `Psychological Flames`,
                    description: `Increase Attack Power by 25% for 3 turns, then deal damage to target (422% Attack Power) (CD: 4)`
                },
                [SkillType.SKILL_4]: {
                    name: `Psychological Flames`,
                    description: `Increase Attack Power by 35% for 3 turns, then deal damage to target (422% Attack Power) (CD: 4)`
                },
                [SkillType.SKILL_5]: {
                    name: `Psychological Flames`,
                    description: `Increase Attack Power by 35% for 3 turns, then deal damage to target (422% Attack Power) (CD: 3)`
                },
                [SkillType.ATTACK]: {
                    name: `Magic Bullet`,
                    description: `Damage target (100% Attack Power)`
                },
                [SkillType.LEADER]: {
                    name: `Baal's Cunning`,
                    description: `Increase Ba'al's Attack Power by 125% and decrease allies' Attack Power by 10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Archdemon Physique`,
                    description: `Increase Basic Attack damage by 25%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Guilty Pleasure`,
                    description: `When Attacked, increase your Attack Power by 15% (Max 2 Stacks).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Baal's Prank`,
                    description: `On Ultimate Skill, decrease your Ultimate Skill CD by 1, and increase the target's Ultimate Skill CD by 2.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Normal Attack Up (Self)`,
                    description: `Increase Basic Attack damage by 10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity (Self)`,
                    description: `Gain immunity to Silence`
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