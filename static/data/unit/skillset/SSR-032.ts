import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10052: SkillSet[] =  [
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
                    name: `摧毀一切…`,
                    description: `以自身攻擊力475/550/625/700/775%對目標造成傷害，CD: 5`
                },
                [SkillType.SKILL_1]: {
                    name: `摧毀一切…`,
                    description: `以自身攻擊力475%對目標造成傷害，CD: 5`
                },
                [SkillType.SKILL_2]: {
                    name: `摧毀一切…`,
                    description: `以自身攻擊力550%對目標造成傷害，CD: 5`
                },
                [SkillType.SKILL_3]: {
                    name: `摧毀一切…`,
                    description: `以自身攻擊力625%對目標造成傷害，CD: 5`
                },
                [SkillType.SKILL_4]: {
                    name: `摧毀一切…`,
                    description: `以自身攻擊力700%對目標造成傷害，CD: 5`
                },
                [SkillType.SKILL_5]: {
                    name: `摧毀一切…`,
                    description: `以自身攻擊力775%對目標造成傷害，CD: 5`
                },
                [SkillType.ATTACK]: {
                    name: `擋我者死！`,
                    description: `以自身攻擊力125%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `聖誕殺手`,
                    description: `使自身最大HP增加50%\n使我方全體闇屬性隊員攻擊力增加20%\n\n聖誕矮人王蘭兒在我方隊伍時使她《屈服恐懼》，再使暗黑聖誕艾可發動《越發癲狂》 \n聖誕馴鹿希依在我方隊伍時使她《屈服恐懼》，再使暗黑聖誕艾可發動《越發癲狂》\n \n《越發癲狂》 \n使自身造成傷害增加50% \n使我方全體闇屬性隊員攻擊力增加25% \n\n《屈服恐懼》\n第1回合時，觸發「以自身攻擊力100%使暗黑聖誕艾可攻擊力增加(50回合)、必殺技CD停止倒數5回合、必殺技最大CD增加2回合」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `該死的馴鹿`,
                    description: `自身普攻時觸發「使目標受到必殺傷害增加2.5%(最多4層)」\n當「聖誕馴鹿希依」在我方隊伍中，發動「《殺死馴鹿》」\n\n《殺死馴鹿》\n使自身攻擊時，觸發「對除了自身以外隊員造成其最大HP10%的真實傷害」\n使自身普攻時，觸發「使敵方目標受到闇屬性傷害增加5%(最多4層)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `該死的聖誕`,
                    description: `自身普攻時，觸發「使敵方目標受到普攻傷害增加5%(最多4層)」\n當「聖誕矮人王蘭兒」在我方隊伍中，發動「《摧毀聖誕 》」 \n\n《摧毀聖誕》\n使自身攻擊時，觸發「對除了自身以外隊員造成其最大HP10%的真實傷害」\n使自身普攻時，觸發「使目標受到暗黑聖誕艾可傷害增加6%(最多5層)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `暗黑聖誕`,
                    description: `自身普攻傷害增加50%`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻擊+ (6潛)`,
                    description: `使自身攻擊力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `摧毁一切…`,
                    description: `以自身攻击力475/550/625/700/775%对目标造成伤害，CD: 5`
                },
                [SkillType.SKILL_1]: {
                    name: `摧毁一切…`,
                    description: `以自身攻击力475%对目标造成伤害，CD: 5`
                },
                [SkillType.SKILL_2]: {
                    name: `摧毁一切…`,
                    description: `以自身攻击力550%对目标造成伤害，CD: 5`
                },
                [SkillType.SKILL_3]: {
                    name: `摧毁一切…`,
                    description: `以自身攻击力625%对目标造成伤害，CD: 5`
                },
                [SkillType.SKILL_4]: {
                    name: `摧毁一切…`,
                    description: `以自身攻击力700%对目标造成伤害，CD: 5`
                },
                [SkillType.SKILL_5]: {
                    name: `摧毁一切…`,
                    description: `以自身攻击力775%对目标造成伤害，CD: 5`
                },
                [SkillType.ATTACK]: {
                    name: `挡我者死！`,
                    description: `以自身攻击力125%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `圣诞杀手`,
                    description: `使自身最大HP增加50%\n使我方全体闇属性队员攻击力增加20%\n\n圣诞矮人王兰儿在我方队伍时使她《屈服恐惧》，再使暗黑圣诞艾可发动《越发癫狂》 \n圣诞驯鹿希依在我方队伍时使她《屈服恐惧》，再使暗黑圣诞艾可发动《越发癫狂》\n \n《越发癫狂》 \n使自身造成伤害增加50% \n使我方全体闇属性队员攻击力增加25% \n\n《屈服恐惧》\n第1回合时，触发「以自身攻击力100%使暗黑圣诞艾可攻击力增加(50回合)丶必杀技CD停止倒数5回合丶必杀技最大CD增加2回合」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `该死的驯鹿`,
                    description: `自身普攻时触发「使目标受到必杀伤害增加2.5%(最多4层)」\n当「圣诞驯鹿希依」在我方队伍中，发动「《杀死驯鹿》」\n\n《杀死驯鹿》\n使自身攻击时，触发「对除了自身以外队员造成其最大HP10%的真实伤害」\n使自身普攻时，触发「使敌方目标受到闇属性伤害增加5%(最多4层)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `该死的圣诞`,
                    description: `自身普攻时，触发「使敌方目标受到普攻伤害增加5%(最多4层)」\n当「圣诞矮人王兰儿」在我方队伍中，发动「《摧毁圣诞 》」 \n\n《摧毁圣诞》\n使自身攻击时，触发「对除了自身以外队员造成其最大HP10%的真实伤害」\n使自身普攻时，触发「使目标受到暗黑圣诞艾可伤害增加6%(最多5层)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `暗黑圣诞`,
                    description: `自身普攻伤害增加50%`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻击+ (6潜)`,
                    description: `使自身攻击力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Total Annihilation`,
                    description: `Damage target (475/550/625/700/775% Attack Power) (CD: 5)`
                },
                [SkillType.SKILL_1]: {
                    name: `Total Annihilation`,
                    description: `Damage target (475% Attack Power) (CD: 5)`
                },
                [SkillType.SKILL_2]: {
                    name: `Total Annihilation`,
                    description: `Damage target (550% Attack Power) (CD: 5)`
                },
                [SkillType.SKILL_3]: {
                    name: `Total Annihilation`,
                    description: `Damage target (625% Attack Power) (CD: 5)`
                },
                [SkillType.SKILL_4]: {
                    name: `Total Annihilation`,
                    description: `Damage target (700% Attack Power) (CD: 5)`
                },
                [SkillType.SKILL_5]: {
                    name: `Total Annihilation`,
                    description: `Damage target (775% Attack Power) (CD: 5)`
                },
                [SkillType.ATTACK]: {
                    name: `Kill Resisters!`,
                    description: `Damage target (125% Attack Power)`
                },
                [SkillType.LEADER]: {
                    name: `Xmas Reaper`,
                    description: `Increase max HP by 50%.\nIncrease all Dark allies' Attack Power by 20%.\n\nIf Xmas Dwarf Queen Lana is in your party, make her "Succumb to Fear" for 50 rounds, then trigger Dark Christmas Aiko's "Spiralling Insanity".\nIf Xmas Reindeer Evie is in your party, make her "Succumb to Fear" for 50 rounds, then trigger Dark Christmas Aiko's "Spiralling Insanity".\n\nSpiralling Insanity:\nIncreases your Damage Output by 50%.\nIncrease all Dark allies' Attack Power by 25%.\n\nSuccumb to Fear:\nOn the first turn, whoever "succumbs to fear" increases Dark Christmas Aiko's Attack Power by 100% of their own Attack Power. Then, their Ultimate Skill CD stops counting down for 5 turns, and their Max Ultimate Skill CD increases by 2.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Screw Reindeer`,
                    description: `On Basic Attack, increase the target's Damage Taken by Ultimate Skills by 5% (Max 4 Stacks)\nWhen Xmas Reindeer Evie is in your party, trigger "Death to Reindeers".\n\n"Death to Reindeers"\nOn Attack, Deal True Damage to all other allies equal to 10% of their max HP.\nOn Basic Attack, increase the target's Damage Taken by Dark Attack by 5% (Max 4 Stacks).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Screw Christmas`,
                    description: `On Basic Attack, increase Basic Attack dealt to enemy by 5% (Max 4 Stacks)\nWhen Xmas Dwarf Queen Lana is in your party, activate "Destroy Christmas".\n\n"Destroy Christmas"\nOn attack, deal True Damage to all allies equal to 10% of their max HP.\nOn Basic Attack, increase Dark Christmas Aiko's damage to target by 6% (Max 5 Stacks)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Dark Christmas`,
                    description: `Increase Basic Attack damage by 50%`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack Up (Self)`,
                    description: `Increase your Attack Power by 10%`
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