import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10051: SkillSet[] =  [
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
                    name: `封龍之力`,
                    description: `以攻擊力330/376/422/468/514%對目標造成傷害，並使目標造成普攻傷害減少60/80/100/100/200%(1回合) [4絆 (效果會在3回合內逐漸減少)]，CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `封龍之力`,
                    description: `以攻擊力330%對目標造成傷害，並使目標造成普攻傷害減少60%(1回合)，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `封龍之力`,
                    description: `以攻擊力376%對目標造成傷害，並使目標造成普攻傷害減少80%(1回合)，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `封龍之力`,
                    description: `以攻擊力422%對目標造成傷害，並使目標造成普攻傷害減少100%(1回合)，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `封龍之力`,
                    description: `以攻擊力468%對目標造成傷害，並使目標造成普攻傷害減少100%(效果會在3回合內逐漸減少)，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `封龍之力`,
                    description: `以攻擊力514%對目標造成傷害，並使目標造成普攻傷害減少200%(效果會在3回合內逐漸減少)，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `銀龍之力`,
                    description: `以自身100%攻擊力對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `封印儀式`,
                    description: `使我方全體獲得"攻擊時，觸發"使目標造成必殺傷害減少10%(1回合)"效果"`
                },
                [SkillType.PASSIVE_1]: {
                    name: `第一封印`,
                    description: `普攻時，觸發"使目標造成普攻傷害減少20%(1回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `第二封印`,
                    description: `攻擊時，觸發"使目標攻擊力減少15%(1回合)"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `最終封印`,
                    description: `每經過5回合，觸發"攻擊時，觸發"使目標造成傷害減少12.5%(最多2層)"效果(1回合)"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `減傷+ (6潛)`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `封龙之力`,
                    description: `以攻击力330/376/422/468/514%对目标造成伤害，并使目标造成普攻伤害减少60/80/100/100/200%(1回合) [4绊 (效果会在3回合内逐渐减少)]，CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `封龙之力`,
                    description: `以攻击力330%对目标造成伤害，并使目标造成普攻伤害减少60%(1回合)，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `封龙之力`,
                    description: `以攻击力376%对目标造成伤害，并使目标造成普攻伤害减少80%(1回合)，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `封龙之力`,
                    description: `以攻击力422%对目标造成伤害，并使目标造成普攻伤害减少100%(1回合)，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `封龙之力`,
                    description: `以攻击力468%对目标造成伤害，并使目标造成普攻伤害减少100%(效果会在3回合内逐渐减少)，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `封龙之力`,
                    description: `以攻击力514%对目标造成伤害，并使目标造成普攻伤害减少200%(效果会在3回合内逐渐减少)，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `银龙之力`,
                    description: `以自身100%攻击力对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `封印仪式`,
                    description: `使我方全体获得"攻击时，触发"使目标造成必杀伤害减少10%(1回合)"效果"`
                },
                [SkillType.PASSIVE_1]: {
                    name: `第一封印`,
                    description: `普攻时，触发"使目标造成普攻伤害减少20%(1回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `第二封印`,
                    description: `攻击时，触发"使目标攻击力减少15%(1回合)"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `最终封印`,
                    description: `每经过5回合，触发"攻击时，触发"使目标造成伤害减少12.5%(最多2层)"效果(1回合)"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `减伤+ (6潜)`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Sealed Dragon Force`,
                    description: `Damage target (330/376/422/468/514% Attack Power) and lose target's Basic Attack Power by 60/80/100/100/200% [Bond 1-3: for 1 turn] [Bond 4-5: (this debuff will gradually wear off in 3 turns)]. CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Sealed Dragon Force`,
                    description: `Damage target (330% Attack Power) and lose target's Basic Attack Power by 60% for 1 turn. CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Sealed Dragon Force`,
                    description: `Damage target (376% Attack Power) and lose target's Basic Attack Power by 80% for 1 turn. CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Sealed Dragon Force`,
                    description: `Damage target (422% Attack Power) and lose target's Basic Attack Power by 100% for 1 turn. CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Sealed Dragon Force`,
                    description: `Damage target (468% Attack Power) and lose target's Basic Attack Power by 100% (this debuff will gradually wear off in 3 turns). CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Sealed Dragon Force`,
                    description: `Damage target (514% Attack Power) and lose target's Basic Attack Power by 200% (this debuff will gradually wear off in 3 turns). CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Silver Dragon Claw`,
                    description: `Damage target (100% Attack Power)`
                },
                [SkillType.LEADER]: {
                    name: `Sealing Ceremony`,
                    description: `The party gains the following ability: "On Attack, lower the target's Ultimate Skill Damage by 10% for 1 turn."`
                },
                [SkillType.PASSIVE_1]: {
                    name: `First Sealing`,
                    description: `On Basic Attack, lower the target's Basic Attack Damage by 20% for 1 turn.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Second Sealing`,
                    description: `On Attack, lower the target's Attack Power by 15% for 1 turn.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Final Sealing`,
                    description: `Every 5 turns (not including your first turn), your Attacks decrease the target's Damage Output by 12.5% for 1 turn (Max 2 Stacks).\n\nDetails: The first time you can perform this ability is on your 6th turn; then the 11th, 16th, 21st, etc.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Protect (Self)`,
                    description: `Take 5% less damage.`
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