import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10002: SkillSet[] =  [
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
                    name: `暴戾恣睢`,
                    description: `使自身攻擊力增加30/40/50/50/50%(2/2/2/3/3回合)，獲得嘲諷效果(2/2/2/3/3回合)並變為防禦狀態，CD: 4 [5絆 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻擊力增加30/40/50/50/50%(2/2/2/3/3回合)，獲得嘲諷效果(2/2/2/3/3回合)並變為防禦狀態，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻擊力增加30/40/50/50/50%(2/2/2/3/3回合)，獲得嘲諷效果(2/2/2/3/3回合)並變為防禦狀態，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻擊力增加30/40/50/50/50%(2/2/2/3/3回合)，獲得嘲諷效果(2/2/2/3/3回合)並變為防禦狀態，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻擊力增加30/40/50/50/50%(2/2/2/3/3回合)，獲得嘲諷效果(2/2/2/3/3回合)並變為防禦狀態，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻擊力增加30/40/50/50/50%(2/2/2/3/3回合)，獲得嘲諷效果(2/2/2/3/3回合)並變為防禦狀態，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `撕裂`,
                    description: `以50%攻擊力對目標造成傷害，並變為防禦狀態`
                },
                [SkillType.LEADER]: {
                    name: `魔王撒旦之狂妄`,
                    description: `使自身獲得嘲諷效果(永久)、防禦時減傷效果增加15%，但攻擊力減少25%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `魔王的霸氣`,
                    description: `使自身受到傷害減少15%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `撒旦的回禮`,
                    description: `被攻擊時，觸發"以自身攻擊力75%進行反擊"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `不敗之軀`,
                    description: `使自身每回合以自身最大HP10%進行治療`
                },
                [SkillType.GENERAL_1]: {
                    name: `防禦減傷+ (6潛)`,
                    description: `使自身防禦時的減傷效果增加10%%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻击力增加30/40/50/50/50%(2/2/2/3/3回合)，获得嘲讽效果(2/2/2/3/3回合)并变为防御状态，CD: 4 [5绊 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻击力增加30/40/50/50/50%(2/2/2/3/3回合)，获得嘲讽效果(2/2/2/3/3回合)并变为防御状态，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻击力增加30/40/50/50/50%(2/2/2/3/3回合)，获得嘲讽效果(2/2/2/3/3回合)并变为防御状态，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻击力增加30/40/50/50/50%(2/2/2/3/3回合)，获得嘲讽效果(2/2/2/3/3回合)并变为防御状态，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻击力增加30/40/50/50/50%(2/2/2/3/3回合)，获得嘲讽效果(2/2/2/3/3回合)并变为防御状态，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `暴戾恣睢`,
                    description: `使自身攻击力增加30/40/50/50/50%(2/2/2/3/3回合)，获得嘲讽效果(2/2/2/3/3回合)并变为防御状态，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `撕裂`,
                    description: `以50%攻击力对目标造成伤害，并变为防御状态`
                },
                [SkillType.LEADER]: {
                    name: `魔王撒旦之狂妄`,
                    description: `使自身获得嘲讽效果(永久)丶防御时减伤效果增加15%，但攻击力减少25%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `魔王的霸气`,
                    description: `使自身受到伤害减少15%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `撒旦的回礼`,
                    description: `被攻击时，触发"以自身攻击力75%进行反击"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `不败之躯`,
                    description: `使自身每回合以自身最大HP10%进行治疗`
                },
                [SkillType.GENERAL_1]: {
                    name: `防御减伤+ (6潜)`,
                    description: `使自身防御时的减伤效果增加10%%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Brutal Tears`,
                    description: `Increase Attack Power by 30/40/50/50/50% for 2/2/3/3/3 turns, gain Taunt for 2/2/2/3/3 turns and enter Defense Stance (CD:4) [Bond 5: (CD:3)]`
                },
                [SkillType.SKILL_1]: {
                    name: `Brutal Tears`,
                    description: `Increase Attack Power by 30% for 2 turns, gain Taunt for 2 turns and enter Defense Stance (CD:4)`
                },
                [SkillType.SKILL_2]: {
                    name: `Brutal Tears`,
                    description: `Increase Attack Power by 40% for 2 turns, gain Taunt for 2 turns and enter Defense Stance (CD:4)`
                },
                [SkillType.SKILL_3]: {
                    name: `Brutal Tears`,
                    description: `Increase Attack Power by 50% for 2 turns, gain Taunt for 2 turns and enter Defense Stance (CD:4)`
                },
                [SkillType.SKILL_4]: {
                    name: `Brutal Tears`,
                    description: `Increase Attack Power by 50% for 3 turns, gain Taunt for 3 turns and enter Defense Stance (CD:4)`
                },
                [SkillType.SKILL_5]: {
                    name: `Brutal Tears`,
                    description: `Increase Attack Power by 50% for 3 turns, gain Taunt for 3 turns and enter Defense Stance (CD:3)`
                },
                [SkillType.ATTACK]: {
                    name: `Rip`,
                    description: `Damage target (50% Attack Power) and enter Guard Stance.`
                },
                [SkillType.LEADER]: {
                    name: `Satan's Crazed Wish`,
                    description: `Give Satan Taunt for 50 turns. While in Guard Stance, take 15% less damage, but reduce Attack Power by 25%.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Despotic Archdemon`,
                    description: `Take 15% less damage.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Satan's Gift`,
                    description: `When Attacked, perform a counter Attack (75% Attack Power).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Invincible`,
                    description: `Heal 10% of your max HP every turn.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Defense Up (Self)`,
                    description: `Take 10% less damage while in Guard Stance.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity (Self)`,
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