import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10005: LiberateSkillSet[] = [
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
                        [SkillType.PASSIVE_1]: {
                            name: `力量儲存`,
                            description: `行動時，觸發「使自身攻擊力增加15%(最多4層)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `屏氣凝神`,
                            description: `行動時，觸發「使自身造成傷害增加5%(最多4層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.PASSIVE_1]: {
                            name: `力量储存`,
                            description: `行动时，触发「使自身攻击力增加15%(最多4层)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `屏气凝神`,
                            description: `行动时，触发「使自身造成伤害增加5%(最多4层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.PASSIVE_1]: {
                            name: `Store Power`,
                            description: `When performing an action, increase your Attack Power by 15% (max 4 stacks).`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Focus`,
                            description: `When performing an action, increase your Damage Output by 5% (max 4 stacks).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.PASSIVE_1]: {
                            name: `エネルギーチャージ`,
                            description: `行動時「自分の攻撃力を15%増加させる(最高4スタック)」を誘発する`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `精神統一`,
                            description: `行動時「自分の与えるダメージが5%増加させる(最高4スタック)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.PASSIVE_1]: {
                            name: `에너지 세이브`,
                            description: `행동 시 「자신의 공격 데미지 15% 증가(최대 4중첩)」발동`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `정신통일`,
                            description: `행동 시 「자신이 가하는 데미지 5% 증가(최대 4중첩)」발동`
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
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,723,932\n最大攻擊力：840,735`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,723,932\n最大攻击力：840,735`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,723,932\nMax ATK：840,735`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,723,932\nATK最大値：840,735`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,723,932\nMax ATK：840,735`
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
                        [SkillType.SKILL_S]: {
                            name: `躍空斷裂破`,
                            description: `使目標解除防禦狀態，再以攻擊力631/736/840/945/1050%對目標造成傷害，並使自身獲得普攻傷害增加60/70/80/90/100%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_1]: {
                            name: `躍空斷裂破`,
                            description: `使目標解除防禦狀態，再以攻擊力631%對目標造成傷害，並使自身獲得普攻傷害增加60%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_2]: {
                            name: `躍空斷裂破`,
                            description: `使目標解除防禦狀態，再以攻擊力736%對目標造成傷害，並使自身獲得普攻傷害增加70%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_3]: {
                            name: `躍空斷裂破`,
                            description: `使目標解除防禦狀態，再以攻擊力840%對目標造成傷害，並使自身獲得普攻傷害增加80%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_4]: {
                            name: `躍空斷裂破`,
                            description: `使目標解除防禦狀態，再以攻擊力945%對目標造成傷害，並使自身獲得普攻傷害增加90%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_5]: {
                            name: `躍空斷裂破`,
                            description: `使目標解除防禦狀態，再以攻擊力1050%對目標造成傷害，並使自身獲得普攻傷害增加100%(3回合)，CD: 6`
                        },
                        [SkillType.LEADER]: {
                            name: `矮人王的氣勢`,
                            description: `我方全體最大HP增加20%\n自身攻擊力增加125%\n自身普攻傷害增加100%\n自身造成傷害增加35%`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `巨斧破龍的幻光`,
                            description: `自身必殺技傷害增加50%\n行動時，觸發\n「使目標受到水屬性傷害增加6%(最多4層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `跃空断裂破`,
                            description: `使目标解除防御状态，再以攻击力631/736/840/945/1050%对目标造成伤害，并使自身获得普攻伤害增加60/70/80/90/100%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_1]: {
                            name: `跃空断裂破`,
                            description: `使目标解除防御状态，再以攻击力631%对目标造成伤害，并使自身获得普攻伤害增加60%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_2]: {
                            name: `跃空断裂破`,
                            description: `使目标解除防御状态，再以攻击力736%对目标造成伤害，并使自身获得普攻伤害增加70%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_3]: {
                            name: `跃空断裂破`,
                            description: `使目标解除防御状态，再以攻击力840%对目标造成伤害，并使自身获得普攻伤害增加80%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_4]: {
                            name: `跃空断裂破`,
                            description: `使目标解除防御状态，再以攻击力945%对目标造成伤害，并使自身获得普攻伤害增加90%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_5]: {
                            name: `跃空断裂破`,
                            description: `使目标解除防御状态，再以攻击力1050%对目标造成伤害，并使自身获得普攻伤害增加100%(3回合)，CD: 6`
                        },
                        [SkillType.LEADER]: {
                            name: `矮人王的气势`,
                            description: `我方全体最大HP增加20%\n自身攻击力增加125%\n自身普攻伤害增加100%\n自身造成伤害增加35%`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `巨斧破龙的幻光`,
                            description: `自身必杀技伤害增加50%\n行动时，触发\n「使目标受到水属性伤害增加6%(最多4层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Dive and Destroy`,
                            description: `Remove the target's Defensive Stance, then damage the target (631/736/840/945/1050% Attack Power). Increase your Basic Attack Power by 60/70/80/90/100% for 3 turns. CD: 6`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Dive and Destroy`,
                            description: `Remove the target's Defensive Stance, then damage the target (631% Attack Power). Increase your Basic Attack Power by 60% for 3 turns. CD: 6`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Dive and Destroy`,
                            description: `Remove the target's Defensive Stance, then damage the target (736% Attack Power). Increase your Basic Attack Power by 70% for 3 turns. CD: 6`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Dive and Destroy`,
                            description: `Remove the target's Defensive Stance, then damage the target (840% Attack Power). Increase your Basic Attack Power by 80% for 3 turns. CD: 6`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Dive and Destroy`,
                            description: `Remove the target's Defensive Stance, then damage the target (945% Attack Power). Increase your Basic Attack Power by 90% for 3 turns. CD: 6`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Dive and Destroy`,
                            description: `Remove the target's Defensive Stance, then damage the target (1050% Attack Power). Increase your Basic Attack Power by 100% for 3 turns. CD: 6`
                        },
                        [SkillType.LEADER]: {
                            name: `Dwarven Power`,
                            description: `Increase the party's max HP by 20%. \nIncrease your Attack Power by 125%.\nIncrease your Basic Attack Power by 100%.\nIncrease your Damage Output by 35%.`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Dragon Killer`,
                            description: `Increase your Ultimate Skill damage by 50%.\nWhen performing an action, increase the target's Damage Taken from Water attacks by 6% (max 4 stacks).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `蒼天断裂破`,
                            description: `ターゲットの防御状態を解除し、631/736/840/945/1050%の攻撃力でターゲットにダメージを与え、自分の通常攻撃ダメージを60/70/80/90/100%増加させる(3ターン)[CD:6]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `蒼天断裂破`,
                            description: `ターゲットの防御状態を解除し、631%の攻撃力でターゲットにダメージを与え、自分の通常攻撃ダメージを60%増加させる(3ターン)[CD:6]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `蒼天断裂破`,
                            description: `ターゲットの防御状態を解除し、736%の攻撃力でターゲットにダメージを与え、自分の通常攻撃ダメージを70%増加させる(3ターン)[CD:6]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `蒼天断裂破`,
                            description: `ターゲットの防御状態を解除し、840%の攻撃力でターゲットにダメージを与え、自分の通常攻撃ダメージを80%増加させる(3ターン)[CD:6]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `蒼天断裂破`,
                            description: `ターゲットの防御状態を解除し、945%の攻撃力でターゲットにダメージを与え、自分の通常攻撃ダメージを90%増加させる(3ターン)[CD:6]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `蒼天断裂破`,
                            description: `ターゲットの防御状態を解除し、1050%の攻撃力でターゲットにダメージを与え、自分の通常攻撃ダメージを100%増加させる(3ターン)[CD:6]`
                        },
                        [SkillType.LEADER]: {
                            name: `小人王の気迫`,
                            description: `味方全体の最大HPを20%増加させる\n自分の攻撃力を125%増加させる\n自分の通常攻撃ダメージを100%増加させる\n自分の与えるダメージを35%増加させる`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `破龍の幻光`,
                            description: `自分の必殺技ダメージが50%増加する\n行動時「ターゲットが水属性から受けるダメージを6%増加させる(最高4スタック)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `활공 찢기`,
                            description: `타깃의 방어 상태를 해제하고 공격 데미지의 631/736/840/945/1050%만큼 타깃에게 데미지, 자신은 일반 공격 데미지 60/70/80/90/100% 증가 획득(3턴) [CD: 6]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `활공 찢기`,
                            description: `타깃의 방어 상태를 해제하고 공격 데미지의 631%만큼 타깃에게 데미지, 자신은 일반 공격 데미지 60% 증가 획득(3턴) [CD: 6]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `활공 찢기`,
                            description: `타깃의 방어 상태를 해제하고 공격 데미지의 736%만큼 타깃에게 데미지, 자신은 일반 공격 데미지 70% 증가 획득(3턴) [CD: 6]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `활공 찢기`,
                            description: `타깃의 방어 상태를 해제하고 공격 데미지의 840%만큼 타깃에게 데미지, 자신은 일반 공격 데미지 80% 증가 획득(3턴) [CD: 6]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `활공 찢기`,
                            description: `타깃의 방어 상태를 해제하고 공격 데미지의 945%만큼 타깃에게 데미지, 자신은 일반 공격 데미지 90% 증가 획득(3턴) [CD: 6]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `활공 찢기`,
                            description: `타깃의 방어 상태를 해제하고 공격 데미지의 1050%만큼 타깃에게 데미지, 자신은 일반 공격 데미지 100% 증가 획득(3턴) [CD: 6]`
                        },
                        [SkillType.LEADER]: {
                            name: `난쟁이왕의 기세`,
                            description: `아군 전체의 최대 HP 20% 증가\n자신의 공격 데미지 125% 증가\n자신의 일반 공격 데미지 100% 증가\n자신이 가하는 데미지 35% 증가`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `파룡의 환광`,
                            description: `자신의 궁극기 데미지 50% 증가\n행동 시 「타깃이 받는 수속성 데미지 6% 증가(최대 4중첩)」발동`
                        },
                    }
                }
            }
        }
    },
]