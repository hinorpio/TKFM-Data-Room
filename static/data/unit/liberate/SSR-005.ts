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
                    [Locale.jp]: {},
                    [Locale.kr]: {}
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
                    [Locale.jp]: {},
                    [Locale.kr]: {}
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
                    [Locale.jp]: {},
                    [Locale.kr]: {}
                }
            }
        }
    },
]