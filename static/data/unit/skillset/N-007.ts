import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10907: SkillSet[] =  [
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
        dispatchSkill: { type: DispatchSkillType.ENHANCE_MATERIAL, level: 1 },
        skill: {
            [Locale.tc]: {
                [SkillType.SKILL_S]: {
                    name: "瞄準射擊",
                    description: "以攻擊力330/376/422/468/514%對目標造成傷害，並使自身獲得\"普攻傷害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.SKILL_1]: {
                    name: "瞄準射擊",
                    description: "以攻擊力330%對目標造成傷害，並使自身獲得\"普攻傷害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.SKILL_2]: {
                    name: "瞄準射擊",
                    description: "以攻擊力376%對目標造成傷害，並使自身獲得\"普攻傷害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.SKILL_3]: {
                    name: "瞄準射擊",
                    description: "以攻擊力422%對目標造成傷害，並使自身獲得\"普攻傷害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.SKILL_4]: {
                    name: "瞄準射擊",
                    description: "以攻擊力468%對目標造成傷害，並使自身獲得\"普攻傷害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.SKILL_5]: {
                    name: "瞄準射擊",
                    description: "以攻擊力514%對目標造成傷害，並使自身獲得\"普攻傷害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.ATTACK]: {
                    name: "射擊",
                    description: "以攻擊力100%對目標造成傷害"
                },
                [SkillType.LEADER]: {
                    name: "風之鼓舞",
                    description: "使我方風屬性角色攻擊力增加10%"
                },
                [SkillType.PASSIVE_1]: {
                    name: "連射技巧",
                    description: "普攻時，有25%機率觸發\"攻擊力100%對目標造成傷害\"效果"
                },
                [SkillType.PASSIVE_2]: {
                    name: "拉力提升",
                    description: "使自身普攻傷害增加12.5%"
                },
                [SkillType.PASSIVE_3]: {
                    name: "風之疾走",
                    description: "每Wave的第1回合，觸發\"使自身當前必殺技CD減少2回合\"效果"
                },
                [SkillType.DISPATCH]: {
                    name: "寶藏獵人(強化素材↑) (3潛)",
                    description: "進行派遣時，微量提升強化素材雙倍獲得機率Lv1(全域效果)"
                },
                [SkillType.GENERAL_2]: {
                    name: "免疫睡眠 (6潛)",
                    description: "使自身免疫睡眠"
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: "瞄准射击",
                    description: "以攻击力330/376/422/468/514%对目标造成伤害，并使自身获得\"普攻伤害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.SKILL_1]: {
                    name: "瞄准射击",
                    description: "以攻击力330%对目标造成伤害，并使自身获得\"普攻伤害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.SKILL_2]: {
                    name: "瞄准射击",
                    description: "以攻击力376%对目标造成伤害，并使自身获得\"普攻伤害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.SKILL_3]: {
                    name: "瞄准射击",
                    description: "以攻击力422%对目标造成伤害，并使自身获得\"普攻伤害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.SKILL_4]: {
                    name: "瞄准射击",
                    description: "以攻击力468%对目标造成伤害，并使自身获得\"普攻伤害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.SKILL_5]: {
                    name: "瞄准射击",
                    description: "以攻击力514%对目标造成伤害，并使自身获得\"普攻伤害增加45%(3回合)\"效果，CD: 4"
                },
                [SkillType.ATTACK]: {
                    name: "射击",
                    description: "以攻击力100%对目标造成伤害"
                },
                [SkillType.LEADER]: {
                    name: "风之鼓舞",
                    description: "使我方风属性角色攻击力增加10%"
                },
                [SkillType.PASSIVE_1]: {
                    name: "连射技巧",
                    description: "普攻时，有25%机率触发\"攻击力100%对目标造成伤害\"效果"
                },
                [SkillType.PASSIVE_2]: {
                    name: "拉力提升",
                    description: "使自身普攻伤害增加12.5%"
                },
                [SkillType.PASSIVE_3]: {
                    name: "风之疾走",
                    description: "每Wave的第1回合，触发\"使自身当前必杀技CD减少2回合\"效果"
                },
                [SkillType.DISPATCH]: {
                    name: "宝藏猎人(强化素材↑) (3潜)",
                    description: "进行派遣时，微量提升强化素材双倍获得机率Lv1(全域效果)"
                },
                [SkillType.GENERAL_2]: {
                    name: "免疫睡眠 (6潜)",
                    description: "使自身免疫睡眠"
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Ready, Aim, Fire`,
                    description: `Damage target (330/376/422/468/514% Attack Power) and increase Basic Attack damage by 45% for 3 turns. (CD:4)`
                },
                [SkillType.SKILL_1]: {
                    name: `Ready, Aim, Fire`,
                    description: `Damage target (330% Attack Power) and increase Basic Attack damage by 45% for 3 turns. (CD:4)`
                },
                [SkillType.SKILL_2]: {
                    name: `Ready, Aim, Fire`,
                    description: `Damage target (376% Attack Power) and increase Basic Attack damage by 45% for 3 turns. (CD:4)`
                },
                [SkillType.SKILL_3]: {
                    name: `Ready, Aim, Fire`,
                    description: `Damage target (422% Attack Power) and increase Basic Attack damage by 45% for 3 turns. (CD:4)`
                },
                [SkillType.SKILL_4]: {
                    name: `Ready, Aim, Fire`,
                    description: `Damage target (468% Attack Power) and increase Basic Attack damage by 45% for 3 turns. (CD:4)`
                },
                [SkillType.SKILL_5]: {
                    name: `Ready, Aim, Fire`,
                    description: `Damage target (514% Attack Power) and increase Basic Attack damage by 45% for 3 turns. (CD:4)`
                },
                [SkillType.ATTACK]: {
                    name: `Shoot`,
                    description: `Damage target (100% Attack Power)`
                },
                [SkillType.LEADER]: {
                    name: `Symphony of Wind`,
                    description: `Increase Wind allies' Attack Power by 10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Rapid Fire`,
                    description: `On Basic Attack, there's a 25% chance to damage target (100% Attack Power)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Buck Up`,
                    description: `Increase Basic Attack damage by 12.5%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Wind's Caress`,
                    description: `In the first round of each wave, decrease your Ultimate Skill CD by 2.`
                },
                [SkillType.DISPATCH]: {
                    name: `Prized Hunter (Boost Mats↑)`,
                    description: `When dispatched, very slightly(Lv1) increase the 2x drop rate of Enhance Materials. (Global Effect)`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity (Self)`,
                    description: `Gain immunity to Sleep`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `照準射撃`,
                    description: `330/376/422/468/514%の攻撃力でターゲットにダメージを与え、効果「通常攻撃ダメージを45%増加させる(3ターン)」を獲得する[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `照準射撃`,
                    description: `330%の攻撃力でターゲットにダメージを与え、効果「通常攻撃ダメージを45%増加させる(3ターン)」を獲得する[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `照準射撃`,
                    description: `376%の攻撃力でターゲットにダメージを与え、効果「通常攻撃ダメージを45%増加させる(3ターン)」を獲得する[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `照準射撃`,
                    description: `422%の攻撃力でターゲットにダメージを与え、効果「通常攻撃ダメージを45%増加させる(3ターン)」を獲得する[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `照準射撃`,
                    description: `468%の攻撃力でターゲットにダメージを与え、効果「通常攻撃ダメージを45%増加させる(3ターン)」を獲得する[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `照準射撃`,
                    description: `514%の攻撃力でターゲットにダメージを与え、効果「通常攻撃ダメージを45%増加させる(3ターン)」を獲得する[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `射撃`,
                    description: `100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `風の激励`,
                    description: `味方の風属性キャラクターの攻撃力を10%増加させる`
                },
                [SkillType.PASSIVE_1]: {
                    name: `連射術`,
                    description: `通常攻撃時、25%の確率で効果「100%の攻撃力でターゲットにダメージを与える」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `張力上昇`,
                    description: `自分の通常攻撃ダメージを12.5%増加させる`
                },
                [SkillType.PASSIVE_3]: {
                    name: `ウインドダッシュ`,
                    description: `毎Waveの1ターン目に、効果「自分の必殺技CDを2ターン減少する」を誘発する`
                },
                [SkillType.DISPATCH]: {
                    name: `トレジャーハンター（強化素材↑）`,
                    description: `派遣実行時、強化素材のダブル獲得確率がわずかに上昇(Lv1)する(全エリアで効果あり)`
                },
                [SkillType.GENERAL_2]: {
                    name: `睡眠無効`,
                    description: `自分を睡眠無効にする`
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
                [SkillType.DISPATCH]: {
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