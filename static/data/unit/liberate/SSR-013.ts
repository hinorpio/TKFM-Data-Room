import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10028: LiberateSkillSet[] = [
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
                        [SkillType.LEADER]: {
                            name: `超級千鶴！`,
                            description: `自身最大HP增加50%\n自身攻擊力增加200%、必殺技傷害增加100%\n每經過一回合觸發「以自身最大HP100%對自身進行治療」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `不死肉體`,
                            description: `使自身被治療時回復量增加20%\n使自身受到傷害減少15%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `防禦加速`,
                            description: `防禦時，觸發「使自身攻擊力增加50%(最多1層)」\n防禦時，觸發「使自身當前必殺技CD減少1回合」\n必殺時，觸發「清除自身《防禦加速》的使自身攻擊力增加效果」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `超级千鹤！`,
                            description: `自身最大HP增加50%\n自身攻击力增加200%丶必杀技伤害增加100%\n每经过一回合触发「以自身最大HP100%对自身进行治疗」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `不死肉体`,
                            description: `使自身被治疗时回复量增加20%\n使自身受到伤害减少15%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `防御加速`,
                            description: `防御时，触发「使自身攻击力增加50%(最多1层)」\n防御时，触发「使自身当前必杀技CD减少1回合」\n必杀时，触发「清除自身《防御加速》的使自身攻击力增加效果」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Chi-zombie!`,
                            description: `Increase your max HP by 50%.\nIncrease your Attack Power by 200% and Ultimate Skill Power by 100%.\nAfter every turn, heal yourself for 100% of your max HP.`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `28 Days Hotter`,
                            description: `Increase your Recovery Rate by 20%.\nDecrease your Damage Taken by 15%.`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Rigor mortis`,
                            description: `While in Guard Stance, increase your Attack Power by 50% (max 1 stack).\nWhile in Guard Stance, reduce your current Ultimate Skill CD by 1.\nOn Ultimate Skill, remove the damage buff provided by "Rigor mortis".`
                        },
                    },
                    [Locale.jp]: {},
                    [Locale.kr]: {}
                }
            },
            [LiberationStage.LIBERATION_2]:{
                material: [
                    { code: ItemCode.LIBERATE_STONE, "quantity": 1 },
                    { code: ItemCode.EVOLVE_WIND_LV3, "quantity": 20 },
                    { code: ItemCode.SKILL_FRAGMENT, "quantity": 150 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 400000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全體數據`,
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,412,021\n最大攻擊力：918,317`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,412,021\n最大攻击力：918,317`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,412,021\nMax ATK：918,317`
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
                            name: `千鶴的全力一擊！`,
                            description: `使目標受到風屬性傷害增加15/15/15/20/25%(最多2層)，再以自身攻擊力330/376/422/468/514%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `千鶴的全力一擊！`,
                            description: `使目標受到風屬性傷害增加15%(最多2層)，再以自身攻擊力330%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `千鶴的全力一擊！`,
                            description: `使目標受到風屬性傷害增加15%(最多2層)，再以自身攻擊力376%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `千鶴的全力一擊！`,
                            description: `使目標受到風屬性傷害增加15%(最多2層)，再以自身攻擊力422%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `千鶴的全力一擊！`,
                            description: `使目標受到風屬性傷害增加20%(最多2層)，再以自身攻擊力468%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `千鶴的全力一擊！`,
                            description: `使目標受到風屬性傷害增加25%(最多2層)，再以自身攻擊力514%對目標造成傷害，CD: 4`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `烈風鼓舞`,
                            description: `必殺時，觸發「使我方全體造成傷害增加20%(4回合)」\n必殺時，觸發「使我方全體風屬性角色必殺技傷害增加20% (最多2層)」效果`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `千鹤的全力一击！`,
                            description: `使目标受到风属性伤害增加15/15/15/20/25%(最多2层)，再以自身攻击力330/376/422/468/514%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `千鹤的全力一击！`,
                            description: `使目标受到风属性伤害增加15%(最多2层)，再以自身攻击力330%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `千鹤的全力一击！`,
                            description: `使目标受到风属性伤害增加15%(最多2层)，再以自身攻击力376%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `千鹤的全力一击！`,
                            description: `使目标受到风属性伤害增加15%(最多2层)，再以自身攻击力422%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `千鹤的全力一击！`,
                            description: `使目标受到风属性伤害增加20%(最多2层)，再以自身攻击力468%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `千鹤的全力一击！`,
                            description: `使目标受到风属性伤害增加25%(最多2层)，再以自身攻击力514%对目标造成伤害，CD: 4`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `烈风鼓舞`,
                            description: `必杀时，触发「使我方全体造成伤害增加20%(4回合)」\n必杀时，触发「使我方全体风属性角色必杀技伤害增加20% (最多2层)」效果`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Dawn of the Babe`,
                            description: `Increase the target's Damage Taken from Wind Damage by 15/15/15/20/25% (max 2 stacks), then damage the target (330/376/422/468/514% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Dawn of the Babe`,
                            description: `Increase the target's Damage Taken from Wind Damage by 15% (max 2 stacks), then damage the target (330% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Dawn of the Babe`,
                            description: `Increase the target's Damage Taken from Wind Damage by 15% (max 2 stacks), then damage the target (376% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Dawn of the Babe`,
                            description: `Increase the target's Damage Taken from Wind Damage by 15% (max 2 stacks), then damage the target (422% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Dawn of the Babe`,
                            description: `Increase the target's Damage Taken from Wind Damage by 20% (max 2 stacks), then damage the target (468% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Dawn of the Babe`,
                            description: `Increase the target's Damage Taken from Wind Damage by 25% (max 2 stacks), then damage the target (514% Attack Power). CD: 4`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Raise the Dead`,
                            description: `On Ultimate Skill, increase the party's Damage Output by 20% for 4 turns.\nOn Ultimate Skill, increase the Wind allies' Ultimate Skill Power by 20% (max 2 stacks).`
                        },
                    },
                    [Locale.jp]: {},
                    [Locale.kr]: {}
                }
            }
        }
    },
]