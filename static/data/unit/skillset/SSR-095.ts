import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10131: SkillSet[] =  [
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
                    name: `時願希望`,
                    description: `使目標受到時御者伊娜絲傷害增加50/62.5/75/87.5/100%(3回合)，並以自身攻擊力265/298/331/364/397%對目標造成傷害，CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `時願希望`,
                    description: `使目標受到時御者伊娜絲傷害增加50%(3回合)，並以自身攻擊力265%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `時願希望`,
                    description: `使目標受到時御者伊娜絲傷害增加62.5%(3回合)，並以自身攻擊力298%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `時願希望`,
                    description: `使目標受到時御者伊娜絲傷害增加75%(3回合)，並以自身攻擊力331%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `時願希望`,
                    description: `使目標受到時御者伊娜絲傷害增加87.5%(3回合)，並以自身攻擊力364%對目標造成傷害，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `時願希望`,
                    description: `使目標受到時御者伊娜絲傷害增加100%(3回合)，並以自身攻擊力397%對目標造成傷害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `時破斬`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `時御者`,
                    description: `我方全體HP增加25%\n我方全體攻擊力增加90%\n我方全體攻擊者造成傷害增加40%\n我方全體妨礙者造成傷害增加40%\n自身攻擊力增加90%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `破碎蒼空`,
                    description: `第一回合時，觸發「使自身造成傷害增加4%(最多5層)」\n每經過三回合時，觸發「使自身《破碎蒼空》的造成傷害效果增加2層」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `時空支配`,
                    description: `造成傷害增加20%\n必殺時，根據《破碎蒼空》的造成傷害效果層數觸發「使目標受到時御者伊娜絲傷害增加10%(4回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `夸姣光陰`,
                    description: `普攻時，追加「以自身攻擊力70%對目標造成傷害」\n必殺時，追加「以自身攻擊力70%對目標造成傷害」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻擊+ (6潛)`,
                    description: `使自身攻擊力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺 (12潛)`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `时愿希望`,
                    description: `使目标受到时御者伊娜丝伤害增加50/62.5/75/87.5/100%(3回合)，并以自身攻击力265/298/331/364/397%对目标造成伤害，CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `时愿希望`,
                    description: `使目标受到时御者伊娜丝伤害增加50%(3回合)，并以自身攻击力265%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `时愿希望`,
                    description: `使目标受到时御者伊娜丝伤害增加62.5%(3回合)，并以自身攻击力298%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `时愿希望`,
                    description: `使目标受到时御者伊娜丝伤害增加75%(3回合)，并以自身攻击力331%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `时愿希望`,
                    description: `使目标受到时御者伊娜丝伤害增加87.5%(3回合)，并以自身攻击力364%对目标造成伤害，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `时愿希望`,
                    description: `使目标受到时御者伊娜丝伤害增加100%(3回合)，并以自身攻击力397%对目标造成伤害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `时破斩`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `时御者`,
                    description: `我方全体HP增加25%\n我方全体攻击力增加90%\n我方全体攻击者造成伤害增加40%\n我方全体妨碍者造成伤害增加40%\n自身攻击力增加90%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `破碎苍空`,
                    description: `第一回合时，触发「使自身造成伤害增加4%(最多5层)」\n每经过三回合时，触发「使自身《破碎苍空》的造成伤害效果增加2层」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `时空支配`,
                    description: `造成伤害增加20%\n必杀时，根据《破碎苍空》的造成伤害效果层数触发「使目标受到时御者伊娜丝伤害增加10%(4回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `夸姣光阴`,
                    description: `普攻时，追加「以自身攻击力70%对目标造成伤害」\n必杀时，追加「以自身攻击力70%对目标造成伤害」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻击+ (6潜)`,
                    description: `使自身攻击力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹 (12潜)`,
                    description: `使自身免疫麻痹`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Temporal Wish`,
                    description: `Increase the target's Damage Taken from Timekeeper Inase by 50/62.5/75/87.5/100% for 3 turns, then damage the target (265/298/331/364/397% Attack Power). CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `Temporal Wish`,
                    description: `Increase the target's Damage Taken from Timekeeper Inase by 50% for 3 turns, then damage the target (265% Attack Power). CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `Temporal Wish`,
                    description: `Increase the target's Damage Taken from Timekeeper Inase by 62.5% for 3 turns, then damage the target (298% Attack Power). CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `Temporal Wish`,
                    description: `Increase the target's Damage Taken from Timekeeper Inase by 75% for 3 turns, then damage the target (331% Attack Power). CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `Temporal Wish`,
                    description: `Increase the target's Damage Taken from Timekeeper Inase by 87.5% for 3 turns, then damage the target (364% Attack Power). CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `Temporal Wish`,
                    description: `Increase the target's Damage Taken from Timekeeper Inase by 100% for 3 turns, then damage the target (397% Attack Power). CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `Temporal Slash`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Timekeeper`,
                    description: `Increase the party's HP by 25%\nIncrease the party's Attack Power by 90%\nIncrease the allied Attackers' Damage Output by 40%\nIncrease the allied Obstructors' Damage Output by 40%\nIncrease your Attack Power by 90%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Shattered Azure`,
                    description: `On the 1st turn, increase your Damage Output by 4% (max 5 stacks).\nEvery 3 turns, increase Shattered Azure's damage effect by 2 stacks.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Temporal Domination`,
                    description: `Increase Damage Output by 20%.\nOn Ultimate Skill, increase the target's Damage Taken from Timekeeper Inase by 10% for 4 turns according to your stacks of Shattered Azure's damage effect.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Radiant Moments`,
                    description: `On Basic Attack, deal additional damage to the target (70% Attack Power).\nOn Ultimate Skill, deal additional damage to the target (70% Attack Power).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack+`,
                    description: `Increase your Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity`,
                    description: `Gain immunity to Paralysis.`
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