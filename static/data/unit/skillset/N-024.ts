import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10921: SkillSet[] =  [
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
        dispatchSkill: { type: DispatchSkillType.EMPTY_HAND, level: 1 },
        skill: {
            [Locale.tc]: {
                [SkillType.SKILL_S]: {
                    name: `精準狙擊`,
                    description: `使自身攻擊力增加10/15/20/25/30%(1回合)，再以自身攻擊力330/376/422/468/514%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `精準狙擊`,
                    description: `使自身攻擊力增加10%(1回合)，再以自身攻擊力330%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `精準狙擊`,
                    description: `使自身攻擊力增加15%(1回合)，再以自身攻擊力376%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `精準狙擊`,
                    description: `使自身攻擊力增加20%(1回合)，再以自身攻擊力422%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `精準狙擊`,
                    description: `使自身攻擊力增加25%(1回合)，再以自身攻擊力468%對目標造成傷害，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `精準狙擊`,
                    description: `使自身攻擊力增加30%(1回合)，再以自身攻擊力514%對目標造成傷害，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `單發點射`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `地獄廚娘`,
                    description: `使我方全體受到傷害減少10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `弱點暴露`,
                    description: `必殺時，觸發「使目標受到傷害增加10%(4回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `變更射擊位置`,
                    description: `普攻時，觸發「使自身必殺技傷害增加20%(2回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `破片彈`,
                    description: `必殺時，追加「以自身攻擊力2%對目標造成10次傷害」`
                },
                [SkillType.DISPATCH]: {
                    name: `幸運兒(空手而歸↓) (3潛)`,
                    description: `進行派遣時，微量降低空手而歸機率(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (6潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `精准狙击`,
                    description: `使自身攻击力增加10/15/20/25/30%(1回合)，再以自身攻击力330/376/422/468/514%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `精准狙击`,
                    description: `使自身攻击力增加10%(1回合)，再以自身攻击力330%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `精准狙击`,
                    description: `使自身攻击力增加15%(1回合)，再以自身攻击力376%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `精准狙击`,
                    description: `使自身攻击力增加20%(1回合)，再以自身攻击力422%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `精准狙击`,
                    description: `使自身攻击力增加25%(1回合)，再以自身攻击力468%对目标造成伤害，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `精准狙击`,
                    description: `使自身攻击力增加30%(1回合)，再以自身攻击力514%对目标造成伤害，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `单发点射`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `地狱厨娘`,
                    description: `使我方全体受到伤害减少10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `弱点暴露`,
                    description: `必杀时，触发「使目标受到伤害增加10%(4回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `变更射击位置`,
                    description: `普攻时，触发「使自身必杀技伤害增加20%(2回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `破片弹`,
                    description: `必杀时，追加「以自身攻击力2%对目标造成10次伤害」`
                },
                [SkillType.DISPATCH]: {
                    name: `幸运儿(空手而归↓) (3潜)`,
                    description: `进行派遣时，微量降低空手而归机率(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (6潜)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Precision Sniping`,
                    description: `Increase Attack Power by 10/15/20/25/30% for 1 turn, then damage the target (330/376/422/468/514% Attack Power). CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `Precision Sniping`,
                    description: `Increase Attack Power by 10% for 1 turn, then damage the target (330% Attack Power). CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `Precision Sniping`,
                    description: `Increase Attack Power by 15% for 1 turn, then damage the target (376% Attack Power). CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `Precision Sniping`,
                    description: `Increase Attack Power by 20% for 1 turn, then damage the target (422% Attack Power). CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `Precision Sniping`,
                    description: `Increase Attack Power by 25% for 1 turn, then damage the target (468% Attack Power). CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `Precision Sniping`,
                    description: `Increase Attack Power by 30% for 1 turn, then damage the target (514% Attack Power). CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `Single-Round Accuracy`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Hell's Chef`,
                    description: `Decrease the party's Damage Taken by 10%.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Weakness Exposed`,
                    description: `On Ultimate Skill, increase the target's Damage Taken by 10% for 4 turns.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Shift Fire Position`,
                    description: `On Basic Attack, increase your Ultimate Skill Power by 20% for 2 turns.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Shrapnel Rounds`,
                    description: `On Ultimate Skill, deal additional damage to the target for 2% of your Attack Power 10 times.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Lucky One (Empty Handed↓)`,
                    description: `When dispatched, very slightly decrease the chance of coming back empty-handed. (Global Effect)`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain immunity to Silence.`
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