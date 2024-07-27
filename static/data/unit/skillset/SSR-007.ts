import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10017: SkillSet[] =  [
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
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加25/25/25/35/35%(3/3/3/3/4回合)，再以攻擊力165/188/211/211/211%對敵全體造成傷害，CD: 4 [5絆 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加25%(3回合)，再以攻擊力165%對敵全體造成傷害，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加25%(3回合)，再以攻擊力188%對敵全體造成傷害，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加25%(3回合)，再以攻擊力211%對敵全體造成傷害，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加35%(3回合)，再以攻擊力211%對敵全體造成傷害，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加35%(3回合)，再以攻擊力211%對敵全體造成傷害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `平民美食攻擊`,
                    description: `以攻擊力50%對敵全體造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `慶典魔王的氣勢`,
                    description: `使自身攻擊力增加35%、普攻傷害增加150%，但自身以外的隊員造成傷害減少15%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `想賺錢就得有行動力`,
                    description: `自身HP低於99%時，發動"使自身攻擊力增加35%"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `痛感帶來愉悅`,
                    description: `自身HP低於99%時，發動"使自身普攻傷害增加70%"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `最高境界是自攻自受`,
                    description: `使自身每回合以自身最大HP7.5%進行治療\n第1回合＆每經過1回合時，觸發「以自身當前HP1.5%對自身造成傷害」效果\n第1回合時，觸發「使自身當前必殺技CD減少4回合」效果\n必殺時，觸發「《加碼買進》」效果 \n\n《加碼買進》 \n普攻時，追加技能「以攻擊力150%對當前目標進行追擊」(4回合)`
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
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加25/25/25/35/35%(3/3/3/3/4回合)，再以攻击力165/188/211/211/211%对敌全体造成伤害，CD: 4 [5绊 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加25%(3回合)，再以攻击力165%对敌全体造成伤害，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加25%(3回合)，再以攻击力188%对敌全体造成伤害，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加25%(3回合)，再以攻击力211%对敌全体造成伤害，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加35%(3回合)，再以攻击力211%对敌全体造成伤害，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加35%(3回合)，再以攻击力211%对敌全体造成伤害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `平民美食攻击`,
                    description: `以攻击力50%对敌全体造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `庆典魔王的气势`,
                    description: `使自身攻击力增加35%丶普攻伤害增加150%，但自身以外的队员造成伤害减少15%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `想赚钱就得有行动力`,
                    description: `自身HP低於99%时，发动"使自身攻击力增加35%"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `痛感带来愉悦`,
                    description: `自身HP低於99%时，发动"使自身普攻伤害增加70%"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `最高境界是自攻自受`,
                    description: `使自身每回合以自身最大HP7.5%进行治疗\n第1回合＆每经过1回合时，触发「以自身当前HP1.5%对自身造成伤害」效果\n第1回合时，触发「使自身当前必杀技CD减少4回合」效果\n必杀时，触发「《加码买进》」效果 \n\n《加码买进》 \n普攻时，追加技能「以攻击力150%对当前目标进行追击」(4回合)`
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
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 25/25/25/35/35% for [3/3/3/3/4] turns, then deal damage to all enemies with 165/188/211/211/211% Attack Power (CD: 4) [Bond 5: (CD: 3)]`
                },
                [SkillType.SKILL_1]: {
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 25% for 3 turns, then deal damage to all enemies with 165% Attack Power (CD: 4)`
                },
                [SkillType.SKILL_2]: {
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 25% for 3 turns, then deal damage to all enemies with 188% Attack Power (CD: 4)`
                },
                [SkillType.SKILL_3]: {
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 25% for 3 turns, then deal damage to all enemies with 211% Attack Power (CD: 4)`
                },
                [SkillType.SKILL_4]: {
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 35% for 3 turns, then deal damage to all enemies with 211% Attack Power (CD: 4)`
                },
                [SkillType.SKILL_5]: {
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 35% for 4 turns, then deal damage to all enemies with 211% Attack Power (CD: 3)`
                },
                [SkillType.ATTACK]: {
                    name: `Street Food Attack`,
                    description: `Damage all enemies (50% Attack Power)`
                },
                [SkillType.LEADER]: {
                    name: `Festival Momentum`,
                    description: `Increase your Attack Power by 35% and Basic Attack Power by 150%. All allies deal 15% less damage.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `No Easy Money`,
                    description: `When the HP is below 99%, increase Attack Power by 35%.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Pain is Pleasure`,
                    description: `When HP is below 99%, increase Normal Attack Power by 70%.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Please Yourself`,
                    description: `Heal yourself by 7.5% of your max HP every turn.\nEvery turn, damage yourself equal to 1.5% of your current HP.\nOn the first turn, decrease your current Ultimate Skill CD by 4.\nOn Ultimate Skill, trigger "Bonus Purchase" for 4 turns.\n\nBonus Purchase:\nAfter a Basic Attack, perform a follow-up Attack on the target (150% Attack Power).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Normal Attack Up`,
                    description: `Increase Normal Attack Power by 10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
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
    {
        version: 1,
        lastDate: "2022/01/12",
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
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加25/25/25/35/35%(3/3/3/3/4回合)，再以攻擊力165/188/211/211/211%對敵全體造成傷害，CD: 4 [5絆 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加25%(3回合)，再以攻擊力165%對敵全體造成傷害，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加25%(3回合)，再以攻擊力188%對敵全體造成傷害，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加25%(3回合)，再以攻擊力211%對敵全體造成傷害，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加35%(3回合)，再以攻擊力211%對敵全體造成傷害，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻擊力增加35%(3回合)，再以攻擊力211%對敵全體造成傷害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `平民美食攻擊`,
                    description: `以攻擊力50%對敵全體造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `慶典魔王的氣勢`,
                    description: `第1回合時，觸發"使自身攻擊力增加35%(4回合)"效果；自身普攻傷害增加150%，但自身以外的隊員造成傷害減少15%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `想賺錢就得有行動力`,
                    description: `自身HP低於99%時，發動"使自身攻擊力增加17.5%"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `痛感帶來愉悅`,
                    description: `自身HP低於99%時，發動"使自身普攻傷害增加50%"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `最高境界是自攻自受`,
                    description: `使自身每回合以自身最大HP7.5%進行治療；第1回合＆每經過1回合時，觸發"以自身當前HP1.5%對自身造成傷害"效果`
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
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加25/25/25/35/35%(3/3/3/3/4回合)，再以攻击力165/188/211/211/211%对敌全体造成伤害，CD: 4 [5绊 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加25%(3回合)，再以攻击力165%对敌全体造成伤害，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加25%(3回合)，再以攻击力188%对敌全体造成伤害，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加25%(3回合)，再以攻击力211%对敌全体造成伤害，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加35%(3回合)，再以攻击力211%对敌全体造成伤害，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `烈日祭典盛宴`,
                    description: `使自身攻击力增加35%(3回合)，再以攻击力211%对敌全体造成伤害，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `平民美食攻击`,
                    description: `以攻击力50%对敌全体造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `庆典魔王的气势`,
                    description: `第1回合时，触发"使自身攻击力增加35%(4回合)"效果；自身普攻伤害增加150%，但自身以外的队员造成伤害减少15%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `想赚钱就得有行动力`,
                    description: `自身HP低於99%时，发动"使自身攻击力增加17.5%"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `痛感带来愉悦`,
                    description: `自身HP低於99%时，发动"使自身普攻伤害增加50%"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `最高境界是自攻自受`,
                    description: `使自身每回合以自身最大HP7.5%进行治疗；第1回合＆每经过1回合时，触发"以自身当前HP1.5%对自身造成伤害"效果`
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
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 25/25/25/35/35% for [3/3/3/3/4] turns, then deal damage to all enemies with 165/188/211/211/211% Attack Power (CD: 4) [Bond 5: (CD: 3)]`
                },
                [SkillType.SKILL_1]: {
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 25% for 3 turns, then deal damage to all enemies with 165% Attack Power (CD: 4)`
                },
                [SkillType.SKILL_2]: {
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 25% for 3 turns, then deal damage to all enemies with 188% Attack Power (CD: 4)`
                },
                [SkillType.SKILL_3]: {
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 25% for 3 turns, then deal damage to all enemies with 211% Attack Power (CD: 4)`
                },
                [SkillType.SKILL_4]: {
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 35% for 3 turns, then deal damage to all enemies with 211% Attack Power (CD: 4)`
                },
                [SkillType.SKILL_5]: {
                    name: `Summer Ceremony`,
                    description: `Increase Attack Power by 35% for 4 turns, then deal damage to all enemies with 211% Attack Power (CD: 3)`
                },
                [SkillType.ATTACK]: {
                    name: `Street Food Attack`,
                    description: `Damage all enemies (50% Attack Power)`
                },
                [SkillType.LEADER]: {
                    name: `Festival Momentum`,
                    description: `Increase your Attack Power by 35% and Basic Attack Power by 150%. All allies deal 15% less damage.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `No Easy Money`,
                    description: `When the HP is below 99%, increase Attack Power by 17.5%.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Pain is Pleasure`,
                    description: `When HP is below 99%, increase Normal Attack Power by 50%.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Please Yourself`,
                    description: `Heal yourself by 7.5% of your max HP every turn.\nEvery turn, damage yourself equal to 1.5% of your current HP.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Normal Attack Up`,
                    description: `Increase Normal Attack Power by 10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
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