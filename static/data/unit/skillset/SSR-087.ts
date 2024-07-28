import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10121: SkillSet[] =  [
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
                    name: `繪技。百畫投影！`,
                    description: `使自身普攻傷害增加60/75/90/105/120%(4回合)，再使目標受到普攻傷害增加30/45/60/75/90%(8回合)，CD：4`
                },
                [SkillType.SKILL_1]: {
                    name: `繪技。百畫投影`,
                    description: `使自身普攻傷害增加60%(4回合)，再使目標受到普攻傷害增加30%(8回合)，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `繪技。百畫投影`,
                    description: `使自身普攻傷害增加75%(4回合)，再使目標受到普攻傷害增加45%(8回合)，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `繪技。百畫投影`,
                    description: `使自身普攻傷害增加90%(4回合)，再使目標受到普攻傷害增加60%(8回合)，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `繪技。百畫投影`,
                    description: `使自身普攻傷害增加105%(4回合)，再使目標受到普攻傷害增加75%(8回合)，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `繪技。百畫投影`,
                    description: `使自身普攻傷害增加120%(4回合)，再使目標受到普攻傷害增加90%(8回合)，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `後勤補給喵`,
                    description: `使我方全體普攻傷害增加40%(2回合)`
                },
                [SkillType.LEADER]: {
                    name: `純熟社蓄俏水手`,
                    description: `當我方隊伍有至少3名風屬性角色時，我方全體獲得《海鷗盜賊團》\n當我方隊伍有至少2名攻擊者角色時，自身獲得《向著大海航去！》\n\n《海鷗盜賊團》\n攻擊力增加40%\n普攻傷害增加100%\n普攻時，追加「以自身攻擊力65%對目標造成傷害」\n\n《向著大海航去！》\n普攻時，觸發「使目標受到傷害增加5%(最多10層)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `在暴風雨中前行`,
                    description: `普攻時，追加「以自身最大HP5%給予我方全體護盾(1回合)」 \n必殺時，觸發「給予自身普攻時，追加『以自身攻擊力100%對目標造成傷害』(2回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `投影炮擊`,
                    description: `普攻時，追加「以自身攻擊力50%對目標造成傷害」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `悠久留存的回憶`,
                    description: `使我方全體造成傷害增加10%\n普攻時，觸發「使我方全體攻擊力增加10%(最多4層)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `減傷+ (6潛)`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潛)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `绘技。百画投影！`,
                    description: `使自身普攻伤害增加60/75/90/105/120%(4回合)，再使目标受到普攻伤害增加30/45/60/75/90%(8回合)，CD：4`
                },
                [SkillType.SKILL_1]: {
                    name: `绘技。百画投影`,
                    description: `使自身普攻伤害增加60%(4回合)，再使目标受到普攻伤害增加30%(8回合)，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `绘技。百画投影`,
                    description: `使自身普攻伤害增加75%(4回合)，再使目标受到普攻伤害增加45%(8回合)，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `绘技。百画投影`,
                    description: `使自身普攻伤害增加90%(4回合)，再使目标受到普攻伤害增加60%(8回合)，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `绘技。百画投影`,
                    description: `使自身普攻伤害增加105%(4回合)，再使目标受到普攻伤害增加75%(8回合)，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `绘技。百画投影`,
                    description: `使自身普攻伤害增加120%(4回合)，再使目标受到普攻伤害增加90%(8回合)，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `後勤补给喵`,
                    description: `使我方全体普攻伤害增加40%(2回合)`
                },
                [SkillType.LEADER]: {
                    name: `纯熟社蓄俏水手`,
                    description: `当我方队伍有至少3名风属性角色时，我方全体获得《海鸥盗贼团》\n当我方队伍有至少2名攻击者角色时，自身获得《向着大海航去！》\n\n《海鸥盗贼团》\n攻击力增加40%\n普攻伤害增加100%\n普攻时，追加「以自身攻击力65%对目标造成伤害」\n\n《向着大海航去！》\n普攻时，触发「使目标受到伤害增加5%(最多10层)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `在暴风雨中前行`,
                    description: `普攻时，追加「以自身最大HP5%给予我方全体护盾(1回合)」 \n必杀时，触发「给予自身普攻时，追加『以自身攻击力100%对目标造成伤害』(2回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `投影炮击`,
                    description: `普攻时，追加「以自身攻击力50%对目标造成伤害」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `悠久留存的回忆`,
                    description: `使我方全体造成伤害增加10%\n普攻时，触发「使我方全体攻击力增加10%(最多4层)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `减伤+ (6潜)`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潜)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 60/75/90/105/120% for 4 turns then increase the target's Damage Taken from Basic Attacks by 30/45/60/75/90% for 8 turns. CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 60% for 4 turns then increase the target's Damage Taken from Basic Attacks by 30% for 8 turns. CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 75% for 4 turns then increase the target's Damage Taken from Basic Attacks by 45% for 8 turns. CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 90% for 4 turns then increase the target's Damage Taken from Basic Attacks by 60% for 8 turns. CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 105% for 4 turns then increase the target's Damage Taken from Basic Attacks by 75% for 8 turns. CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 120% for 4 turns then increase the target's Damage Taken from Basic Attacks by 90% for 8 turns. CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `Logistics Supply Meow`,
                    description: `Increase the party's Basic Attack Power by 40% for 2 turns`
                },
                [SkillType.LEADER]: {
                    name: `Skilled Charming Sailor`,
                    description: `When there are 3 or more Wind allies on your team, grant all allies "Seagull Thieves".\nWhen there are 2 or more Attackers on your team, grant self "Sail Toward the Sea!".\n\n"Seagull Thieves"\nIncrease Attack Power by 40%.\nIncrease Basic Attack Power by 100%.\nOn Basic Attack, deal additional damage to the target (65% Attack Power).\n\n"Sail Toward the Sea!"\nOn Basic Attack, increase the target's Damage Taken by 5% (max 10 stacks).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Facing Storm`,
                    description: `On Basic Attack, grant the party a Shield for 5% of your max HP for 1 turn.\nOn Ultimate Skill, trigger the following effect: On Basic Attack, deal additional damage to the target (100% Attack Power) for 2 turns.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Projection Bombardment`,
                    description: `On Basic Attack, deal additional damage to the target (50% Attack Power).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Eternal Memories`,
                    description: `Increase the party's Damage Output by 10%.\nOn Basic Attack, increase the party's Damage Power by 10% (max 4 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage Reduction+`,
                    description: `Reduce your Damage Taken by 5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain immunity to Sleep`
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