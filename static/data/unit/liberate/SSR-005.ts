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
                            name: "力量儲存",
                            description: `行動時，觸發「使自身攻擊力增加15%(最多4層)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: "屏氣凝神",
                            description: `行動時，觸發「使自身造成傷害增加5%(最多4層)」`
                        },
                    },
                    [Locale.sc]: {},
                    [Locale.en]: {},
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
                            name: "完全體數據",
                            description: "HP與ATK將永久提升10%\n\nHP：3,723,932\nATK：840,735"
                        },
                    },
                    [Locale.sc]: {},
                    [Locale.en]: {},
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
                            name: "躍空斷裂破",
                            description: "使目標解除防禦狀態，再以攻擊力1050%對目標造成傷害，並使自身獲得普攻傷害增加100%(3回合)，CD: 6"
                        },
                        [SkillType.LEADER]: {
                            name: "矮人王的氣勢",
                            description: "我方全體最大HP增加20%\n自身攻擊力增加125%\n自身普攻傷害增加100%\n自身造成傷害增加35%"
                        },
                        [SkillType.PASSIVE_3]: {
                            name: "巨斧破龍的幻光",
                            description: "自身必殺技傷害增加50%\n行動時，觸發\n「使目標受到水屬性傷害增加6%(最多4層)」"
                        },
                    },
                    [Locale.sc]: {},
                    [Locale.en]: {},
                    [Locale.jp]: {},
                    [Locale.kr]: {}
                }
            }
        }
    },
]