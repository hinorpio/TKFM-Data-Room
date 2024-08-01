import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10804: SkillSet[] =  [
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
        dispatchSkill: { type: DispatchSkillType.EMPTY_HAND, level: 2 },
        skill: {
            [Locale.tc]: {
                [SkillType.SKILL_S]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少10/12.5/15/17.5/20%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少10%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少12.5%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少15%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少17.5%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `忠心守護`,
                    description: `使自身受到傷害減少20%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `爪擊`,
                    description: `以攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `靜水守護`,
                    description: `使我方風屬性角色被水屬性攻擊時受到傷害減少12.5%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `知恩圖報`,
                    description: `被治療時，觸發"使自身獲得每回合以攻擊力25%進行治療(2回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `簡單快樂`,
                    description: `使自身被治療時回復量增加12.5%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `感恩的心`,
                    description: `被治療時，有50%機率觸發"使自身當前必殺技CD減少1回合"效果`
                },
                [SkillType.DISPATCH]: {
                    name: `嗅覺敏銳(空手而歸↓↓) (3潛)`,
                    description: `進行派遣時，少量降低空手而歸機率(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺 (6潛)`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少10/12.5/15/17.5/20%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少10%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少12.5%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少15%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少17.5%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `忠心守护`,
                    description: `使自身受到伤害减少20%(2回合)丶嘲讽效果(2回合)，并变为防御状态，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `爪击`,
                    description: `以攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `静水守护`,
                    description: `使我方风属性角色被水属性攻击时受到伤害减少12.5%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `知恩图报`,
                    description: `被治疗时，触发"使自身获得每回合以攻击力25%进行治疗(2回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `简单快乐`,
                    description: `使自身被治疗时回复量增加12.5%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `感恩的心`,
                    description: `被治疗时，有50%机率触发"使自身当前必杀技CD减少1回合"效果`
                },
                [SkillType.DISPATCH]: {
                    name: `嗅觉敏锐(空手而归↓↓) (3潜)`,
                    description: `进行派遣时，少量降低空手而归机率(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹 (6潜)`,
                    description: `使自身免疫麻痹`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Loyalty`,
                    description: `Take 10/12.5/15/17.5/20% less damage for 2 turns, gain Taunt for 2 turns, and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_1]: {
                    name: `Loyalty`,
                    description: `Take 10% less damage for 2 turns, gain Taunt for 2 turns, and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_2]: {
                    name: `Loyalty`,
                    description: `Take 12.5% less damage for 2 turns, gain Taunt for 2 turns, and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_3]: {
                    name: `Loyalty`,
                    description: `Take 15% less damage for 2 turns, gain Taunt for 2 turns, and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_4]: {
                    name: `Loyalty`,
                    description: `Take 17.5% less damage for 2 turns, gain Taunt for 2 turns, and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_5]: {
                    name: `Loyalty`,
                    description: `Take 20% less damage for 2 turns, gain Taunt for 2 turns, and enter Guard Stance. (CD:3)`
                },
                [SkillType.ATTACK]: {
                    name: `Tackle`,
                    description: `Damage target (100% Attack Power)`
                },
                [SkillType.LEADER]: {
                    name: `Silent Cover`,
                    description: `When Wind allies are attacked by Water enemies, take 12.5% less damage.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Best Laid Plans`,
                    description: `When healed, gain the effect "Heal yourself each turn (25% Attack Power) for 2 turns."`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Contentment`,
                    description: `Increase Recovery Rate by 12.5%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `A Quiet Mind`,
                    description: `When healed, there's a 50% chance to decrease your current Ultimate Skill CD by 1.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attentive (Empty Handed↓↓)`,
                    description: `When dispatched, slightly decrease the chance of coming back empty-handed. (Global Effect)`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity (Self)`,
                    description: `Gain immunity to Paralysis`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `忠義の守護`,
                    description: `自分の受けるダメージを10/12.5/15/17.5/20%減少させ(2ターン)、挑発効果(2ターン)を得て、防御状態となる[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `忠義の守護`,
                    description: `自分の受けるダメージを10%減少させ(2ターン)、挑発効果(2ターン)を得て、防御状態となる[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `忠義の守護`,
                    description: `自分の受けるダメージを12.5%減少させ(2ターン)、挑発効果(2ターン)を得て、防御状態となる[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `忠義の守護`,
                    description: `自分の受けるダメージを15%減少させ(2ターン)、挑発効果(2ターン)を得て、防御状態となる[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `忠義の守護`,
                    description: `自分の受けるダメージを17.5%減少させ(2ターン)、挑発効果(2ターン)を得て、防御状態となる[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `忠義の守護`,
                    description: `自分の受けるダメージを20%減少させ(2ターン)、挑発効果(2ターン)を得て、防御状態となる[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `爪攻撃`,
                    description: `100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `静かなる水の守護`,
                    description: `味方の風属性キャラクターが水属性に攻撃を受けた時、受けるダメージを12.5%減少させる`
                },
                [SkillType.PASSIVE_1]: {
                    name: `報恩感謝`,
                    description: `治療を受けた時、効果「毎ターン攻撃力の25%分自分に治療を行う(2ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `シンプルな喜び`,
                    description: `自分が治療を受けるとき、回復HP量を12.5%増加させる`
                },
                [SkillType.PASSIVE_3]: {
                    name: `感謝の心`,
                    description: `治療を受けた時、50%の確率で効果「自分の必殺技CDを1ターン減少させる」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `鋭い嗅覚(手ぶらで帰還↓↓)`,
                    description: `派遣実行時、手ぶらで帰還する確率が少し低下する(全エリアで効果あり)`
                },
                [SkillType.GENERAL_2]: {
                    name: `麻痺無効`,
                    description: `自分を麻痺無効にする`
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