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
                    name: `普攻傷害+`,
                    description: `使自身普攻傷害增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
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
                    name: `普攻伤害+`,
                    description: `使自身普攻伤害增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
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
                    name: `炎の精神攻撃`,
                    description: `自分の攻撃力を25/25/25/35/35%増加させ(3ターン)、330/376/422/422/422%の攻撃力でターゲットにダメージを与える[CD:4] [Lv5: CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `炎の精神攻撃`,
                    description: `自分の攻撃力を25%増加させ(3ターン)、330%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `炎の精神攻撃`,
                    description: `自分の攻撃力を25%増加させ(3ターン)、376%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `炎の精神攻撃`,
                    description: `自分の攻撃力を25%増加させ(3ターン)、422%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `炎の精神攻撃`,
                    description: `自分の攻撃力を35%増加させ(3ターン)、422%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `炎の精神攻撃`,
                    description: `自分の攻撃力を35%増加させ(3ターン)、422%の攻撃力でターゲットにダメージを与える[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `マジックボール`,
                    description: `100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `魔王バルの悪知恵`,
                    description: `バルの攻撃力を125%増加させる。ただし自分以外のメンバーの攻撃力が10%減少する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `魔王の肉体`,
                    description: `自分の通常攻撃ダメージを25%増加させる`
                },
                [SkillType.PASSIVE_2]: {
                    name: `捉えどころの無い性格`,
                    description: `攻撃を受けた際、効果「自分の攻撃力を15%増加させる(最高2スタック)」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `バルのイタズラ`,
                    description: `必殺時、効果「自分の必殺技CDを1ターン減少させ、ターゲットの必殺技CDを2ターン増加させる」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `通常攻撃ダメージ+`,
                    description: `自分の通常攻撃ダメージを10%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `맹렬한 불길`,
                    description: `자신의 공격 데미지 25/25/25/35/35% 증가(3턴), 공격 데미지의 330/376/422/422/422%만큼 타깃에게 데미지  [CD: 4] [Lv5: CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `맹렬한 불길`,
                    description: `자신의 공격 데미지 25% 증가(3턴), 공격 데미지의 330%만큼 타깃에게 데미지  [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `맹렬한 불길`,
                    description: `자신의 공격 데미지 25% 증가(3턴), 공격 데미지의 376%만큼 타깃에게 데미지  [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `맹렬한 불길`,
                    description: `자신의 공격 데미지 25% 증가(3턴), 공격 데미지의 422%만큼 타깃에게 데미지  [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `맹렬한 불길`,
                    description: `자신의 공격 데미지 35% 증가(3턴), 공격 데미지의 422%만큼 타깃에게 데미지  [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `맹렬한 불길`,
                    description: `자신의 공격 데미지 35% 증가(3턴), 공격 데미지의 422%만큼 타깃에게 데미지  [CD: 3]`
                },
                [SkillType.ATTACK]: {
                    name: `마력의 탄환`,
                    description: `공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `마왕 바알의 꿍꿍이`,
                    description: `자신의 공격 데미지 125% 증가, 단 자신을 제외한 아군의 의한 데미지는 10% 감소.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `마왕의 육체`,
                    description: `자신의 일반 공격 데미지 25% 증가`
                },
                [SkillType.PASSIVE_2]: {
                    name: `알 수 없는 성격`,
                    description: `피격 시, "자신의 공격 데미지 15% 증가(최대 2중첩)" 효과 발동`
                },
                [SkillType.PASSIVE_3]: {
                    name: `바알의 장난`,
                    description: `궁극기 발동 시, "자신의 궁극기 CD 1턴 감소, 타깃의 궁극기 CD 2턴 증가"효과 발동`
                },
                [SkillType.GENERAL_1]: {
                    name: `일반 공격 데미지+`,
                    description: `자신의 일반 공격 데미지 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 효과`
                }
            }
        }
    },
]