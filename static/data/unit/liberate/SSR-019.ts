import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10007: LiberateSkillSet[] = [
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
                            name: "大天使之怒",
                            description: `以自身攻擊力514%對目標造成傷害，並以自身攻擊力638%每回合對目標造成傷害(1回合)，CD: 4`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: "光之懲戒",
                            description: `普攻時，觸發「以自身攻擊力130%每回合對目標造成傷害(1回合)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: "天使的祝福",
                            description: `第一回合時，觸發 「《天使的祝福-聖罰》」\n第一回合時，觸發 「《天使的祝福-斷裁》」\n第一回合時，觸發 「《天使的祝福-定罪》」\n\n《天使的祝福-聖罰》\n我方全體光屬性成員行動時，觸發「使我方全體攻擊力增加10%(50回合)」(1回合)\n\n《天使的祝福-斷裁》\n我方全體火、風屬性成員行動時，觸發「使我方全體普攻傷害增加20%(50回合)」(1回合)\n\n《天使的祝福-定罪》\n我方全體水、闇屬性成員行動時，觸發「使我方全體必殺技傷害增加10%(50回合)」(1回合)`
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
                    { code: ItemCode.EVOLVE_LIGHT_LV3, "quantity": 20 },
                    { code: ItemCode.SKILL_FRAGMENT, "quantity": 150 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 400000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.BASE_STAT]: {
                            name: "完全體數據",
                            description: "HP與ATK將永久提升10%\n\nHP：3,359,772\nATK：930,983"
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
                            name: "天使長的祝福",
                            description: "第一回合時，觸發「《天使長的祝福-聖罰》」\n第一回合時，觸發「《天使長的祝福-斷裁》」\n第一回合時，觸發「《天使長的祝福-定罪》」\n\n《天使長的祝福-聖罰》\n我方全體光屬性成員行動時，觸發「使我方全體攻擊力增加30%(50回合)」(1回合)\n\n《天使長的祝福-斷裁》\n我方全體火、風屬性成員行動時，觸發「使我方全體普攻傷害增加60%(50回合)」(1回合)\n\n《天使長的祝福-定罪》\n我方全體水、闇屬性成員行動時，觸發「使我方全體必殺技傷害增加30%(50回合)」(1回合)"
                        },
                        [SkillType.PASSIVE_3]: {
                            name: "天罰之力",
                            description: "攻擊時，觸發「使自身攻擊力增加50%(4回合)」"
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