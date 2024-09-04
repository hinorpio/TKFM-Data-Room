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
                    name: `封印されし力`,
                    description: `330/376/422/468/514%の攻撃力でターゲットにダメージを与え、ターゲットの通常攻撃ダメージを60/80/100/100/200%減少させる[Lv1-3: (1ターン)][Lv4-5: (効果は3ターン内に次第に減少)][CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `封印されし力`,
                    description: `330%の攻撃力でターゲットにダメージを与え、ターゲットの通常攻撃ダメージを60%減少させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `封印されし力`,
                    description: `376%の攻撃力でターゲットにダメージを与え、ターゲットの通常攻撃ダメージを80%減少させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `封印されし力`,
                    description: `422%の攻撃力でターゲットにダメージを与え、ターゲットの通常攻撃ダメージを100%減少させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `封印されし力`,
                    description: `468%の攻撃力でターゲットにダメージを与え、ターゲットの通常攻撃ダメージを100%減少させる(効果は3ターン内に次第に減少)[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `封印されし力`,
                    description: `514%の攻撃力でターゲットにダメージを与え、ターゲットの通常攻撃ダメージを200%減少させる(効果は3ターン内に次第に減少)[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `銀龍の爪`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `封印の儀式`,
                    description: `味方全体が「攻撃時、効果『ターゲットが与える必殺技ダメージを10%減少させる(1ターン)』を誘発する」を得る`
                },
                [SkillType.PASSIVE_1]: {
                    name: `第一封印`,
                    description: `通常攻撃時、効果「ターゲットが与える通常攻撃ダメージを20%減少させる(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `第二封印`,
                    description: `攻撃時、効果「ターゲットの攻撃力を15%減少させる(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `最終封印`,
                    description: `5ターン毎に、効果「攻撃時、効果『ターゲットが与えるダメージを12.5%減少させる(最高2スタック)」を誘発する』を誘発する(1ターン)`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ減少+`,
                    description: `自分の受けるダメージを5%減少させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `봉인된 힘`,
                    description: `공격 데미지의 330/376/422/468/514%만큼 타깃에게 데미지. 타깃의 일반 공격 데미지 60/80/100/100/200% 감소[Lv1-3: (1턴)][Lv4+: (효과가 3턴 동안 차츰 감소)].[CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `봉인된 힘`,
                    description: `공격 데미지의 330%만큼 타깃에게 데미지. 타깃의 일반 공격 데미지 60% 감소(1턴). [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `봉인된 힘`,
                    description: `공격 데미지의 376%만큼 타깃에게 데미지. 타깃의 일반 공격 데미지 80% 감소(1턴). [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `봉인된 힘`,
                    description: `공격 데미지의 422%만큼 타깃에게 데미지. 타깃의 일반 공격 데미지 100% 감소(1턴). [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `봉인된 힘`,
                    description: `공격 데미지의 468%만큼 타깃에게 데미지. 타깃의 일반 공격 데미지 100% 감소(효과가 3턴 동안 차츰 감소).[CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `봉인된 힘`,
                    description: `공격 데미지의 514%만큼 타깃에게 데미지. 타깃의 일반 공격 데미지 200% 감소(효과가 3턴 동안 차츰 감소).[CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `은룡의 발톱`,
                    description: `자신의 공격 데미지 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `봉인 의식`,
                    description: `아군 전체가 공격 시, "타깃의 궁극기 데미지 10% 감소(1턴)" 효과 획득.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `제1의 봉인`,
                    description: `일반 공격 시, "타깃의 일반 공격 데미지 20% 감소(1턴)" 효과 발동.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `제2의 봉인`,
                    description: `공격 시, 타깃의 공격 데미지 15% 감소(1턴)" 효과 발동.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `최후의 봉인`,
                    description: `매 5턴마다 "공격시, 타깃의 데미지 12.5% 감소(최대 2중첩) 효과 발동(1턴)" 효과 발동.`
                },
                [SkillType.GENERAL_1]: {
                    name: `받는 데미지 감소+`,
                    description: `자신이 받는 데미지 5% 감소`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 효과`
                }
            }
        }
    },
]