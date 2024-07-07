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
                            name: "超級千鶴！",
                            description: `自身最大HP增加50%\n自身攻擊力增加200%、必殺技傷害增加100%\n每經過一回合觸發「以自身最大HP100%對自身進行治療」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: "不死肉體",
                            description: `使自身被治療時回復量增加20%\n使自身受到傷害減少15%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: "防禦加速",
                            description: `防禦時，觸發「使自身攻擊力增加50%(最多1層)」\n防禦時，觸發「使自身當前必殺技CD減少1回合」\n必殺時，觸發「清除自身《防禦加速》的使自身攻擊力增加效果」`
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
                    { code: ItemCode.EVOLVE_WIND_LV3, "quantity": 20 },
                    { code: ItemCode.SKILL_FRAGMENT, "quantity": 150 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 400000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.BASE_STAT]: {
                            name: "完全體數據",
                            description: "HP與ATK將永久提升10%\n\nHP：3,412,021\nATK：918,317"
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
                            name: "千鶴的全力一擊！",
                            description: "使目標受到風屬性傷害增加25%(最多2層)，再以自身攻擊力514%對目標造成傷害，CD: 4"
                        },
                        [SkillType.PASSIVE_3]: {
                            name: "烈風鼓舞",
                            description: "必殺時，觸發「使我方全體造成傷害增加20%(4回合)」\n必殺時，觸發「使我方全體風屬性角色必殺技傷害增加20% (最多2層)」效果"
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