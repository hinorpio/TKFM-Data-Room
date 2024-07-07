import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10006: LiberateSkillSet[] = [
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
                            name: "大家加油喔！",
                            description: `以自身攻擊力25%使我方輔助者攻擊力增加(1回合)，以攻擊力200%對我方全體進行治療，並以自身攻擊力110%每回合對我方全體進行治療(5回合)，CD: 4`
                        },
                        [SkillType.ATTACK]: {
                            name: "鼓舞",
                            description: `以攻擊力75%對我方全體進行治療`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: "認真應援",
                            description: `攻擊時，觸發「以自身攻擊力25%使我方全體攻擊力增加(1回合)」`
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
                            description: "HP與ATK將永久提升10%\n\nHP：3,518,102\nATK：889,817"
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
                        [SkillType.LEADER]: {
                            name: "被激起的保護慾",
                            description: "我方全體最大HP增加35%\n我方全體攻擊力增加40%\n我方全體必殺技傷害增加25%\n我方全體造成傷害增加20%\n我方全體守護者最大HP增加15%\n我方全體被治療時回復量增加30%"
                        },
                        [SkillType.PASSIVE_1]: {
                            name: "額外治療",
                            description: "普攻時，觸發「我方HP最低者受到傷害減少15%(1回合)」\n普攻時，觸發「以自身攻擊力40%對我方HP最低者進行治療」"
                        },
                        [SkillType.PASSIVE_3]: {
                            name: "讓大家看見我的努力！",
                            description: "我方全體必殺技傷害增加30%\n必殺時，觸發「使目標受到風屬性傷害增加20%(最多2層)」"
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