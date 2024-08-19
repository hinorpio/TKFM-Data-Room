import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10002: LiberateSkillSet[] = [
    {
        version: 1,
        lastDate: "",
        remark: {
            [Locale.tc]: null,
            [Locale.sc]: null,
            [Locale.en]: null,
            [Locale.jp]: null,
            [Locale.kr]: null
        },
        detail: {
            [LiberationStage.LIBERATION_1]:{
                material: [
                    { code: ItemCode.LIBERATE_STONE, "quantity": 1 },
                    { code: "ESSENCE", "quantity": 10 },
                    { code: ItemCode.FLAWLESS, "quantity": 1 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 300000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.SKILL_S]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻擊力增加60/80/100/100/100%(3回合)，獲得嘲諷效果(2/2/2/3/3回合)並變為防禦狀態，CD: 4 [絆5: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻擊力增加60%(3回合)，獲得嘲諷效果(2回合)並變為防禦狀態，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻擊力增加80%(3回合)，獲得嘲諷效果(2回合)並變為防禦狀態，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻擊力增加100%(3回合)，獲得嘲諷效果(2回合)並變為防禦狀態，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻擊力增加100%(3回合)，獲得嘲諷效果(3回合)並變為防禦狀態，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻擊力增加100%(3回合)，獲得嘲諷效果(3回合)並變為防禦狀態，CD: 3`
                        },
                        [SkillType.ATTACK]: {
                            name: `撕裂`,
                            description: `以100%攻擊力對目標造成傷害，並變為防禦狀態`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `魔王的霸氣`,
                            description: `使自身受到傷害減少20%`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻击力增加60/80/100/100/100%(3回合)，获得嘲讽效果(2/2/2/3/3回合)并变为防御状态，CD: 4 [绊5: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻击力增加60%(3回合)，获得嘲讽效果(2回合)并变为防御状态，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻击力增加80%(3回合)，获得嘲讽效果(2回合)并变为防御状态，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻击力增加100%(3回合)，获得嘲讽效果(2回合)并变为防御状态，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻击力增加100%(3回合)，获得嘲讽效果(3回合)并变为防御状态，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `暴戾恣睢`,
                            description: `使自身攻击力增加100%(3回合)，获得嘲讽效果(3回合)并变为防御状态，CD: 3`
                        },
                        [SkillType.ATTACK]: {
                            name: `撕裂`,
                            description: `以100%攻击力对目标造成伤害，并变为防御状态`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `魔王的霸气`,
                            description: `使自身受到伤害减少20%`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Brutal Tears`,
                            description: `Increase your Attack Power by 60/80/100/100/100% for 3 turns. Gain Taunt for 2/2/2/3/3 turns, and enter Guard Stance. CD: 4. [Bond 5: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Brutal Tears`,
                            description: `Increase your Attack Power by 60% for 3 turns. Gain Taunt for 2 turns, and enter Guard Stance. CD: 4.`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Brutal Tears`,
                            description: `Increase your Attack Power by 80% for 3 turns. Gain Taunt for 2 turns, and enter Guard Stance. CD: 4.`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Brutal Tears`,
                            description: `Increase your Attack Power by 100% for 3 turns. Gain Taunt for 2 turns, and enter Guard Stance. CD: 4.`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Brutal Tears`,
                            description: `Increase your Attack Power by 100% for 3 turns. Gain Taunt for 3 turns, and enter Guard Stance. CD: 4.`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Brutal Tears`,
                            description: `Increase your Attack Power by 100% for 3 turns. Gain Taunt for 3 turns, and enter Guard Stance. CD: 3.`
                        },
                        [SkillType.ATTACK]: {
                            name: `Rip`,
                            description: `Damage the target (100% Attack Power), and enter Guard Stance.`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Despotic Archdemon`,
                            description: `Reduce your Damage Taken by 20%.`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `極悪非道`,
                            description: `自分の攻撃力を60/80/100/100/100%増加させ(3ターン)、挑発([2/2/2/3/3]ターン)を得て防御状態になる[CD:4] [Lv5: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `極悪非道`,
                            description: `自分の攻撃力を60%増加させ(3ターン)、挑発(2ターン)を得て防御状態になる[CD:4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `極悪非道`,
                            description: `自分の攻撃力を80%増加させ(3ターン)、挑発(2ターン)を得て防御状態になる[CD:4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `極悪非道`,
                            description: `自分の攻撃力を100%増加させ(3ターン)、挑発(2ターン)を得て防御状態になる[CD:4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `極悪非道`,
                            description: `自分の攻撃力を100%増加させ(3ターン)、挑発(3ターン)を得て防御状態になる[CD:4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `極悪非道`,
                            description: `自分の攻撃力を100%増加させ(3ターン)、挑発(3ターン)を得て防御状態になる[CD:3]`
                        },
                        [SkillType.ATTACK]: {
                            name: `引き裂く`,
                            description: `100%の攻撃力でターゲットにダメージを与え、防御状態になる`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `魔王の覇気`,
                            description: `自分の受けるダメージを20%減少させる`
                        },
                    },
                    [Locale.kr]: {}
                }
            },
            [LiberationStage.LIBERATION_2]:{
                material: [
                    { code: ItemCode.LIBERATE_STONE, "quantity": 1 },
                    { code: ItemCode.EVOLVE_DARK_LV3, "quantity": 20 },
                    { code: ItemCode.SKILL_FRAGMENT, "quantity": 150 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 400000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全體數據`,
                            description: `HP與ATK將永久提升10%\n\n最大生命值：4,947,826\n最大攻擊力：633,319`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：4,947,826\n最大攻击力：633,319`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：4,947,826\nMax ATK：633,319`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：4,947,826\nATK最大値：633,319`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：4,947,826\nAMax ATK：633,319`
                        },
                    }
                }
            },
            [LiberationStage.LIBERATION_3]:{
                material: [
                    { code: ItemCode.LIBERATE_STONE, "quantity": 1 },
                    { code: "ESSENCE", "quantity": 10 },
                    { code: ItemCode.FLAWLESS, "quantity": 1 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 500000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.LEADER]: {
                            name: `魔王撒旦之狂妄`,
                            description: `我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n使自身攻擊力增加100%\n使撒旦自身獲得嘲諷效果(永久)、防禦時減傷效果增加15%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `撒旦的回禮`,
                            description: `被攻擊時，觸發「以自身攻擊力100%進行反擊」\n被攻擊時，觸發「使自身攻擊力增加10%(最多10層)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `不敗之軀`,
                            description: `使自身每回合以自身最大HP20%進行治療\n被攻擊時，觸發「使自身造成傷害增加2%(最多10層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `魔王撒旦之狂妄`,
                            description: `我方全体攻击力增加40%\n我方全体造成伤害增加20%\n使自身攻击力增加100%\n使撒旦自身获得嘲讽效果(永久)丶防御时减伤效果增加15%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `撒旦的回礼`,
                            description: `被攻击时，触发「以自身攻击力100%进行反击」\n被攻击时，触发「使自身攻击力增加10%(最多10层)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `不败之躯`,
                            description: `使自身每回合以自身最大HP20%进行治疗\n被攻击时，触发「使自身造成伤害增加2%(最多10层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Satan's Crazed Wish`,
                            description: `Increase the party's Attack Power by 40%.\nIncrease the party's Damage Output by 20%.\nIncrease your Attack Power by 100%.\nGive Satan Taunt permanently, and reduce her Damage Taken in Guard Stance by 15%.`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Satan's Gift`,
                            description: `When Attacked, perform a Counter Attack on the target (100% Attack Power).\nWhen Attacked, increase your Attack Power by 10% (Max 10 Stacks).`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Invincible`,
                            description: `Heal yourself for 20% of your Max HP every turn.\nWhen Attacked, increase your Damage Output by 2% (Max 10 Stacks).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `魔王サタンの小生意気`,
                            description: `味方全体の攻撃力を40％増加させる\n味方全体の与えるダメージを20％増加させる\n自分の攻撃力を100%増加させる\nサタンに挑発を与え(永久)、防禦時のダメージ減少効果を15%増加させる`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `サタンの返礼`,
                            description: `攻撃された時「自分の100%の攻撃力で反撃する」を誘発する\n攻撃された時「自分の攻撃力を10%増加させる(最高10スタック)」を誘発する`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `不敗の肉体`,
                            description: `毎ターン自分の最大HPの20%分、自分に治療を行う\n攻撃を受けた時「自分が与えるダメージを2%増加させる(最高10スタック)」を誘発する`
                        },
                    },
                    [Locale.kr]: {}
                }
            }
        }
    },
]