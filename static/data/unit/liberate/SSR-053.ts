import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10074: LiberateSkillSet[] = [
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
                            name: `霜華綻放`,
                            description: `使敵方站位2、3、4目標受到必殺傷害增加3.75/3.75/5/5/7.5%(最多4層)，再以自身攻擊力102/116/130/143/157%對敵方站位2、3、4目標造成傷害，CD:3`
                        },
                        [SkillType.SKILL_1]: {
                            name: `霜華綻放`,
                            description: `使敵方站位2、3、4目標受到必殺傷害增加3.75%(最多4層)，再以自身攻擊力102%對敵方站位2、3、4目標造成傷害，CD:3`
                        },
                        [SkillType.SKILL_2]: {
                            name: `霜華綻放`,
                            description: `使敵方站位2、3、4目標受到必殺傷害增加3.75%(最多4層)，再以自身攻擊力116%對敵方站位2、3、4目標造成傷害，CD:3`
                        },
                        [SkillType.SKILL_3]: {
                            name: `霜華綻放`,
                            description: `使敵方站位2、3、4目標受到必殺傷害增加5%(最多4層)，再以自身攻擊力130%對敵方站位2、3、4目標造成傷害，CD:3`
                        },
                        [SkillType.SKILL_4]: {
                            name: `霜華綻放`,
                            description: `使敵方站位2、3、4目標受到必殺傷害增加5%(最多4層)，再以自身攻擊力143%對敵方站位2、3、4目標造成傷害，CD:3`
                        },
                        [SkillType.SKILL_5]: {
                            name: `霜華綻放`,
                            description: `使敵方站位2、3、4目標受到必殺傷害增加7.5%(最多4層)，再以自身攻擊力157%對敵方站位2、3、4目標造成傷害，CD:3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `霜風障壁`,
                            description: `防禦時，觸發「以自身最大HP10%給予我方全體護盾(1回合)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `冰山美人`,
                            description: `自身造成傷害增加25%\n自身必殺時，觸發「給予我方全體自身最大HP20%的護盾(1回合)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `霜华绽放`,
                            description: `使敌方站位2丶3丶4目标受到必杀伤害增加3.75/3.75/5/5/7.5%(最多4层)，再以自身攻击力102/116/130/143/157%对敌方站位2丶3丶4目标造成伤害，CD:3`
                        },
                        [SkillType.SKILL_1]: {
                            name: `霜华绽放`,
                            description: `使敌方站位2丶3丶4目标受到必杀伤害增加3.75%(最多4层)，再以自身攻击力102%对敌方站位2丶3丶4目标造成伤害，CD:3`
                        },
                        [SkillType.SKILL_2]: {
                            name: `霜华绽放`,
                            description: `使敌方站位2丶3丶4目标受到必杀伤害增加3.75%(最多4层)，再以自身攻击力116%对敌方站位2丶3丶4目标造成伤害，CD:3`
                        },
                        [SkillType.SKILL_3]: {
                            name: `霜华绽放`,
                            description: `使敌方站位2丶3丶4目标受到必杀伤害增加5%(最多4层)，再以自身攻击力130%对敌方站位2丶3丶4目标造成伤害，CD:3`
                        },
                        [SkillType.SKILL_4]: {
                            name: `霜华绽放`,
                            description: `使敌方站位2丶3丶4目标受到必杀伤害增加5%(最多4层)，再以自身攻击力143%对敌方站位2丶3丶4目标造成伤害，CD:3`
                        },
                        [SkillType.SKILL_5]: {
                            name: `霜华绽放`,
                            description: `使敌方站位2丶3丶4目标受到必杀伤害增加7.5%(最多4层)，再以自身攻击力157%对敌方站位2丶3丶4目标造成伤害，CD:3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `霜风障壁`,
                            description: `防御时，触发「以自身最大HP10%给予我方全体护盾(1回合)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `冰山美人`,
                            description: `自身造成伤害增加25%\n自身必杀时，触发「给予我方全体自身最大HP20%的护盾(1回合)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Ice Blossom`,
                            description: `Increase the 2nd, 3rd, and 4th-position enemy's Damage Taken from Ultimate Skills by 3.75/3.75/5/5/7.5% (Max 4 Stacks), then damage them for 102/116/130/143/157% Attack Power. CD: 3`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Ice Blossom`,
                            description: `Increase the 2nd, 3rd, and 4th-position enemy's Damage Taken from Ultimate Skills by 3.75% (Max 4 Stacks), then damage them for 102% Attack Power. CD: 3`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Ice Blossom`,
                            description: `Increase the 2nd, 3rd, and 4th-position enemy's Damage Taken from Ultimate Skills by 3.75% (Max 4 Stacks), then damage them for 116% Attack Power. CD: 3`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Ice Blossom`,
                            description: `Increase the 2nd, 3rd, and 4th-position enemy's Damage Taken from Ultimate Skills by 5% (Max 4 Stacks), then damage them for 130% Attack Power. CD: 3`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Ice Blossom`,
                            description: `Increase the 2nd, 3rd, and 4th-position enemy's Damage Taken from Ultimate Skills by 5% (Max 4 Stacks), then damage them for 143% Attack Power. CD: 3`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Ice Blossom`,
                            description: `Increase the 2nd, 3rd, and 4th-position enemy's Damage Taken from Ultimate Skills by 7.5% (Max 4 Stacks), then damage them for 157% Attack Power. CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Chill Barrier`,
                            description: `On entering Guard Stance, trigger the following effect: Grant the party a Shield for 10% of your max HP for 1 turn.`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Snow Beauty`,
                            description: `Increase your Damage Output by 25%.\nOn Ultimate Skill, trigger the following effect: give the party a shield equal to 20% of your Max HP for 1 turn.`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `凍りの花の綻び`,
                            description: `2、3、4番目の敵が受ける必殺技ダメージを3.75/3.75/5/5/7.5%増加させ(最高4スタック)、さらに自分の102/116/130/143/157%の攻撃力で2、3、4番目の敵にダメージを与える[CD:3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `凍りの花の綻び`,
                            description: `2、3、4番目の敵が受ける必殺技ダメージを3.75%増加させ(最高4スタック)、さらに自分の102%の攻撃力で2、3、4番目の敵にダメージを与える[CD:3]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `凍りの花の綻び`,
                            description: `2、3、4番目の敵が受ける必殺技ダメージを3.75%増加させ(最高4スタック)、さらに自分の116%の攻撃力で2、3、4番目の敵にダメージを与える[CD:3]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `凍りの花の綻び`,
                            description: `2、3、4番目の敵が受ける必殺技ダメージを5%増加させ(最高4スタック)、さらに自分の130%の攻撃力で2、3、4番目の敵にダメージを与える[CD:3]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `凍りの花の綻び`,
                            description: `2、3、4番目の敵が受ける必殺技ダメージを5%増加させ(最高4スタック)、さらに自分の143%の攻撃力で2、3、4番目の敵にダメージを与える[CD:3]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `凍りの花の綻び`,
                            description: `2、3、4番目の敵が受ける必殺技ダメージを7.5%増加させ(最高4スタック)、さらに自分の157%の攻撃力で2、3、4番目の敵にダメージを与える[CD:3]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `寒風の障壁`,
                            description: `防御時「自分の最大HPの10%分味方全体に盾を張る(1ターン)」を誘発する`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `雪山美人`,
                            description: `自分の与えるダメージを25%増加させる\n必殺技攻撃時「自分の最大HPの20%分、味方全体に盾を張る(1ターン)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `피어나는 눈꽃`,
                            description: `2, 3, 4번 자리 적이 받는 궁극기 데미지 3.75/3.75/5/5/7.5% 증가(최대 4중첩), 자신의 공격 데미지 102/116/130/143/157%만큼 2, 3, 4번 자리 적에게 데미지[CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `피어나는 눈꽃`,
                            description: `2, 3, 4번 자리 적이 받는 궁극기 데미지 3.75% 증가(최대 4중첩), 자신의 공격 데미지 102%만큼 2, 3, 4번 자리 적에게 데미지[CD: 3]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `피어나는 눈꽃`,
                            description: `2, 3, 4번 자리 적이 받는 궁극기 데미지 3.75% 증가(최대 4중첩), 자신의 공격 데미지 116%만큼 2, 3, 4번 자리 적에게 데미지[CD: 3]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `피어나는 눈꽃`,
                            description: `2, 3, 4번 자리 적이 받는 궁극기 데미지 5% 증가(최대 4중첩), 자신의 공격 데미지 130%만큼 2, 3, 4번 자리 적에게 데미지[CD: 3]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `피어나는 눈꽃`,
                            description: `2, 3, 4번 자리 적이 받는 궁극기 데미지 5% 증가(최대 4중첩), 자신의 공격 데미지 143%만큼 2, 3, 4번 자리 적에게 데미지[CD: 3]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `피어나는 눈꽃`,
                            description: `2, 3, 4번 자리 적이 받는 궁극기 데미지 7.5% 증가(최대 4중첩), 자신의 공격 데미지 157%만큼 2, 3, 4번 자리 적에게 데미지[CD: 3]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `설풍 장벽`,
                            description: `방어 시 「자신의 최대 HP 10%만큼 아군 전체의 아머 강화(1턴)」 트리거`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `설산 미인`,
                            description: `자신이 가하는 데미지 25% 증가\n궁극기 발동 시, 「자신의 최대 HP 20%만큼 아군 전체의 아머 강화(1턴)」트리거`
                        },
                    }
                }
            },
            [LiberationStage.LIBERATION_2]:{
                material: [
                    { code: ItemCode.LIBERATE_STONE, "quantity": 1 },
                    { code: ItemCode.EVOLVE_WATER_LV3, "quantity": 20 },
                    { code: ItemCode.SKILL_FRAGMENT, "quantity": 150 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 400000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全體數據`,
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,752,432\n最大攻擊力：919,899`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,752,432\n最大攻击力：919,899`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,752,432\nMax ATK：919,899`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,752,432\nATK最大値：919,899`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,752,432\nMax ATK：919,899`
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
                            name: `永凍之巔`,
                            description: `我方全體最大HP增加30%\n我方全體攻擊力增加100%\n自身必殺技最大CD增加一回合\n自身必殺時，觸發「使敵方全體受到傷害增加15%(最多4層)」\n自身必殺時，觸發「使敵方全體受到必殺傷害增加12.5%(最多4層)」\n每經過1回合時，觸發「以自身攻擊力30%使我方全體攻擊力增加(1回合)」\n自身免疫沉默\n自身造成傷害增加40%\n自身必殺技傷害增加60%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `徹骨冰寒`,
                            description: `必殺時，觸發「使自身攻擊力增加25%(最多4層)」\n必殺時，觸發「使自身必殺傷害增加15%(最多4層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `永冻之巅`,
                            description: `我方全体最大HP增加30%\n我方全体攻击力增加100%\n自身必杀技最大CD增加一回合\n自身必杀时，触发「使敌方全体受到伤害增加15%(最多4层)」\n自身必杀时，触发「使敌方全体受到必杀伤害增加12.5%(最多4层)」\n每经过1回合时，触发「以自身攻击力30%使我方全体攻击力增加(1回合)」\n自身免疫沉默\n自身造成伤害增加40%\n自身必杀技伤害增加60%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `彻骨冰寒`,
                            description: `必杀时，触发「使自身攻击力增加25%(最多4层)」\n必杀时，触发「使自身必杀伤害增加15%(最多4层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Permafrost`,
                            description: `Increase the party's max HP by 30%.\nIncrease the party's Attack Power by 100%.\nIncrease your max Ultimate Skill CD by 1 turn.\nOn Ultimate Skill, trigger the following effect: Increase all enemies' Damage Taken by 15% (max 4 stacks).\nOn Ultimate Skill, trigger the following effect: Increase all enemies' Damage Taken by Ultimate Skills by 12.5% (max 4 stacks).\nAfter every turn, trigger the following effect: Increase the party's Attack Power for 30% of your Attack Power for 1 turn.\nGain yourself immunity to Silence.\nIncrease your Damage Output by 40%.\nIncrease your Ultimate Skill Power by 60%.`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `The Frozen Ghost`,
                            description: `On Ultimate Skill, trigger the following effect: increase your Attack Power by 25% (Max 4 Stacks).\nOn Ultimate Skill, trigger the following effect: increase your Ultimate Skill Damage by 15% (Max 4 Stacks).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `永久凍土の頂`,
                            description: `味方全体の最大HPが30%増加する\n味方全体の攻撃力が100%増加する\n自分の必殺技最大CDを1ターン増加させる\n自分の必殺技攻撃時「敵全体が受けるダメージを15%増加させる(最高4スタック)」を誘発する\n自分の必殺技攻撃時「敵全体が受ける必殺技ダメージを12.5%増加させる(最高4スタック)」を誘発する\n1ターン毎に「自分の攻撃力の30%分、味方全体の攻撃力を増加させる(1ターン)」を誘発する\n自分を沈黙無効にする\n自分の与えるダメージが40%増加する\n自分の必殺技ダメージが60%増加する`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `骨まで凍える`,
                            description: `必殺技攻撃時「自分の攻撃力を25%増加させる(最高4スタック)」を誘発する\n必殺技攻撃時「自分が与える必殺技ダメージを15%増加させる(最高4スタック)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `툰드라`,
                            description: `아군 전체의 최대 HP 30% 증가\n아군 전체의 공격 데미지 100% 증가\n자신의 궁극기 최대 CD 1턴 증가\n자신은 궁극기 발동 시 「적 전체의 받는 데미지 15% 증가(최대 4중첩)」 트리거\n자신은 궁극기 발동 시 「적 전체의 받는 궁극기 데미지 12.5% 증가(최대 4중첩)」 트리거\n1턴이 지날 때마다 「자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)」 트리거\n자신은 침묵에 면역\n자신의 가하는 데미지 40% 증가\n자신의 궁극기 데미지 60% 증가`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `칼바람`,
                            description: `궁극기 발동 시, 「자신의 공격 데미지 25% 증가(최대 4중첩)」트리거\n궁극기 발동 시, 「자신의 궁극기 데미지 15% 증가(최대 4중첩)」트리거`
                        },
                    }
                }
            }
        }
    },
]