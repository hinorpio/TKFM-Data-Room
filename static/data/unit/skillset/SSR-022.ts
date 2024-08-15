import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10033: SkillSet[] =  [
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
                    name: `睡夢侵襲`,
                    description: `以100/110/120/130/150%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加100/110/120/130/150%，受傷後解除，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `睡夢侵襲`,
                    description: `以100%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加100%，受傷後解除，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `睡夢侵襲`,
                    description: `以110%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加110%，受傷後解除，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `睡夢侵襲`,
                    description: `以120%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加120%，受傷後解除，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `睡夢侵襲`,
                    description: `以130%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加130%，受傷後解除，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `睡夢侵襲`,
                    description: `以150%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加150%，受傷後解除，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `惡夢`,
                    description: `使當前敵對目標受到普攻傷害增加10%(3回合)、受到必殺傷害增加5%(3回合)；以自身攻擊力50%給予自身護盾(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `安眠曲`,
                    description: `使我方全體獲得"普攻時，觸發"以20%機率對當前敵對目標造成睡眠效果1回合，無法行動且受到傷害增加30%，受傷後解除"效果" \n使自身以外所有隊員獲得"普攻時，觸發"使當前敵對目標被睡眠機率增加20%(1回合)"效果"`
                },
                [SkillType.PASSIVE_1]: {
                    name: `安眠曲`,
                    description: `普攻時，觸發"使當前敵對目標被睡眠機率增加40%(1回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `再睡一下…`,
                    description: `攻擊時，觸發"使當前敵對目標攻擊力減少15%(2回合)"效果\n必殺時，觸發"使當前敵對目標必殺技CD倒數停止(1回合)"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `午夜夢迴`,
                    description: `每Wave第1回合時，觸發"使敵方全體造成傷害減少10%(50回合)"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `減傷+ (6潛)`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺 (12潛)`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `睡梦侵袭`,
                    description: `以100/110/120/130/150%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加100/110/120/130/150%，受伤後解除，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `睡梦侵袭`,
                    description: `以100%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加100%，受伤後解除，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `睡梦侵袭`,
                    description: `以110%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加110%，受伤後解除，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `睡梦侵袭`,
                    description: `以120%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加120%，受伤後解除，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `睡梦侵袭`,
                    description: `以130%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加130%，受伤後解除，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `睡梦侵袭`,
                    description: `以150%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加150%，受伤後解除，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `恶梦`,
                    description: `使当前敌对目标受到普攻伤害增加10%(3回合)丶受到必杀伤害增加5%(3回合)；以自身攻击力50%给予自身护盾(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `安眠曲`,
                    description: `使我方全体获得"普攻时，触发"以20%机率对当前敌对目标造成睡眠效果1回合，无法行动且受到伤害增加30%，受伤後解除"效果" \n使自身以外所有队员获得"普攻时，触发"使当前敌对目标被睡眠机率增加20%(1回合)"效果"`
                },
                [SkillType.PASSIVE_1]: {
                    name: `安眠曲`,
                    description: `普攻时，触发"使当前敌对目标被睡眠机率增加40%(1回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `再睡一下…`,
                    description: `攻击时，触发"使当前敌对目标攻击力减少15%(2回合)"效果\n必杀时，触发"使当前敌对目标必杀技CD倒数停止(1回合)"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `午夜梦回`,
                    description: `每Wave第1回合时，触发"使敌方全体造成伤害减少10%(50回合)"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `减伤+ (6潜)`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹 (12潜)`,
                    description: `使自身免疫麻痹`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Irresistible Sleepiness`,
                    description: `Inflict current enemy with Sleep for 2 turns (100/110/120/130/150% success rate). The target will be unable to attack and will take 100/110/120/130/150% more damage. The target will wake up upon taking damage. (CD:3)`
                },
                [SkillType.SKILL_1]: {
                    name: `Irresistible Sleepiness`,
                    description: `Inflict current enemy with Sleep for 2 turns (100% success rate). The target will be unable to attack and will take 100% more damage. The target will wake up upon taking damage. (CD:3)`
                },
                [SkillType.SKILL_2]: {
                    name: `Irresistible Sleepiness`,
                    description: `Inflict current enemy with Sleep for 2 turns (110% success rate). The target will be unable to attack and will take 110% more damage. The target will wake up upon taking damage. (CD:3)`
                },
                [SkillType.SKILL_3]: {
                    name: `Irresistible Sleepiness`,
                    description: `Inflict current enemy with Sleep for 2 turns (120% success rate). The target will be unable to attack and will take 120% more damage. The target will wake up upon taking damage. (CD:3)`
                },
                [SkillType.SKILL_4]: {
                    name: `Irresistible Sleepiness`,
                    description: `Inflict current enemy with Sleep for 2 turns (130% success rate). The target will be unable to attack and will take 130% more damage. The target will wake up upon taking damage. (CD:3)`
                },
                [SkillType.SKILL_5]: {
                    name: `Irresistible Sleepiness`,
                    description: `Inflict current enemy with Sleep for 2 turns (150% success rate). The target will be unable to attack and will take 150% more damage. The target will wake up upon taking damage. (CD:3)`
                },
                [SkillType.ATTACK]: {
                    name: `Nightmare`,
                    description: `The current enemy takes 10% more damage from Basic Attack and 5% more damage from Ultimate Skill for 3 turns; Gain a Shield equal to 50% of your Attack Power for 1 turn.`
                },
                [SkillType.LEADER]: {
                    name: `Strange Bedfellows`,
                    description: `Grant the party the following effect: "On Basic Attack, there's a 20% chance of putting the target to Sleep for 1 turn. While asleep, the target will be unable to Attack and will take 30% more damage. The target will wake up upon taking damage."\n\nGrant your allies the following effect: "On Basic Attack, increase the target's chance of being put to Sleep by 20% for 1 turn."`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Lullab`,
                    description: `On Basic Attack, increase the target's chance of being put to Sleep by 40% for 1 turn.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Snoozing…`,
                    description: `On Attack, decrease the current target's Attack Power by 15% for 2 turns.\nOn Ultimate Skill, freeze the current target's Ultimate Skill CD for 1 turn.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Endless Dream`,
                    description: `On the first turn of each wave, decrease all enemies' Damage Output by 10% for 50 turns.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Protect (Self)`,
                    description: `Take 5% less damage.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity (Self)`,
                    description: `Gain immunity to Paralysis`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `睡魔襲来`,
                    description: `100/110/120/130/150%の確率で現在の敵ターゲットに睡眠効果を与え(2ターン)、行動不能にして受けるダメージを100/110/120/130/150%増加させる。ダメージを受けると解除される[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `睡魔襲来`,
                    description: `100%の確率で現在の敵ターゲットに睡眠効果を与え(2ターン)、行動不能にして受けるダメージを100%増加させる。ダメージを受けると解除される[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `睡魔襲来`,
                    description: `110%の確率で現在の敵ターゲットに睡眠効果を与え(2ターン)、行動不能にして受けるダメージを110%増加させる。ダメージを受けると解除される[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `睡魔襲来`,
                    description: `120%の確率で現在の敵ターゲットに睡眠効果を与え(2ターン)、行動不能にして受けるダメージを120%増加させる。ダメージを受けると解除される[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `睡魔襲来`,
                    description: `130%の確率で現在の敵ターゲットに睡眠効果を与え(2ターン)、行動不能にして受けるダメージを130%増加させる。ダメージを受けると解除される[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `睡魔襲来`,
                    description: `150%の確率で現在の敵ターゲットに睡眠効果を与え(2ターン)、行動不能にして受けるダメージを150%増加させる。ダメージを受けると解除される[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `悪夢`,
                    description: `現在の敵ターゲットの受ける通常攻撃ダメージを10%増加させ、受ける必殺技ダメージを5%増加させる(3ターン)。攻撃力50%分自分に盾効果を与える(1ターン)`
                },
                [SkillType.LEADER]: {
                    name: `同床異夢`,
                    description: `味方全体が「通常攻撃時、効果『20%の確率で現在の敵ターゲットに睡眠効果を与え(1ターン)、行動不能にして受けるダメージを30%増加させる。ダメージを受けると解除される』を誘発する」を得る\n自分以外の味方メンバーが「通常攻撃時、効果『現在の敵ターゲットが睡眠を得る確率を20%増加させる(1ターン)』を誘発する」を得る`
                },
                [SkillType.PASSIVE_1]: {
                    name: `睡眠導入曲`,
                    description: `通常攻撃時、効果「現在の敵ターゲットが睡眠を得る確率を40%増加させる(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `二度寝･･････`,
                    description: `攻撃時、効果「現在の敵ターゲットの攻撃力を15%減少させる(2ターン)」を誘発する。\n必殺時、効果「現在の敵ターゲットの必殺技CDカウントを停止する(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `真夜中の夢歩き`,
                    description: `毎Waveの1ターン目に、効果「敵全体の与えるダメージを10%減少させる(50ターン)」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ減少＋`,
                    description: `自分が受けるダメージを5%減少させる`
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