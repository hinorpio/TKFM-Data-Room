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
                            name: `大天使之怒`,
                            description: `以自身攻擊力514%對目標造成傷害，並以自身攻擊力638%每回合對目標造成傷害(1回合)，CD: 4`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `光之懲戒`,
                            description: `普攻時，觸發「以自身攻擊力130%每回合對目標造成傷害(1回合)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `天使的祝福`,
                            description: `第一回合時，觸發 「《天使的祝福-聖罰》」\n第一回合時，觸發 「《天使的祝福-斷裁》」\n第一回合時，觸發 「《天使的祝福-定罪》」\n\n《天使的祝福-聖罰》\n我方全體光屬性成員行動時，觸發「使我方全體攻擊力增加10%(50回合)」(1回合)\n\n《天使的祝福-斷裁》\n我方全體火、風屬性成員行動時，觸發「使我方全體普攻傷害增加20%(50回合)」(1回合)\n\n《天使的祝福-定罪》\n我方全體水、闇屬性成員行動時，觸發「使我方全體必殺技傷害增加10%(50回合)」(1回合)`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `大天使之怒`,
                            description: `以自身攻击力514%对目标造成伤害，并以自身攻击力638%每回合对目标造成伤害(1回合)，CD: 4`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `光之惩戒`,
                            description: `普攻时，触发「以自身攻击力130%每回合对目标造成伤害(1回合)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `天使的祝福`,
                            description: `第一回合时，触发 「《天使的祝福-圣罚》」\n第一回合时，触发 「《天使的祝福-断裁》」\n第一回合时，触发 「《天使的祝福-定罪》」\n\n《天使的祝福-圣罚》\n我方全体光属性成员行动时，触发「使我方全体攻击力增加10%(50回合)」(1回合)\n\n《天使的祝福-断裁》\n我方全体火丶风属性成员行动时，触发「使我方全体普攻伤害增加20%(50回合)」(1回合)\n\n《天使的祝福-定罪》\n我方全体水丶闇属性成员行动时，触发「使我方全体必杀技伤害增加10%(50回合)」(1回合)`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Raging Archangel`,
                            description: `Damage the target (514% Attack Power), then damage the target (638% Attack Power) every turn for 1 turn. CD: 4`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Glorious Punishment`,
                            description: `On Basic Attack, damage the target (130% Attack Power) every turn for 1 turn.`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Angel's Blessing`,
                            description: `On the first turn, trigger "Archangel's Blessing - Holy Punishment".\nOn the first turn, trigger "Archangel's Blessing - Judgment".\nOn the first turn, trigger "Archangel's Blessing - Conviction".\n\n"Archangel's Blessing - Holy Punishment"\nWhen all Light allies perform an action, trigger the following effect: "increase the party's Attack Power by 10% for 50 turns" for 1 turn.\n\n"Archangel's Blessing - Judgment".\nWhen all Fire and Wind allies perform an action, trigger the following effect: "increase the party's Basic Attack Power by 20% for 50 turns" for 1 turn.\n\n"Archangel's Blessing - Conviction".\nWhen all Water and Dark allies perform an action, trigger the following effect: "increase the party's Ultimate Skill Power by 10% for 50 turns" for 1 turn.`
                        },
                    },
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
                            name: `完全體數據`,
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,359,772\n最大攻擊力：930,983`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,359,772\n最大攻击力：930,983`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,359,772\nMax ATK：930,983`
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
                        [SkillType.LEADER]: {
                            name: `天使長的祝福`,
                            description: `第一回合時，觸發「《天使長的祝福-聖罰》」\n第一回合時，觸發「《天使長的祝福-斷裁》」\n第一回合時，觸發「《天使長的祝福-定罪》」\n\n《天使長的祝福-聖罰》\n我方全體光屬性成員行動時，觸發「使我方全體攻擊力增加30%(50回合)」(1回合)\n\n《天使長的祝福-斷裁》\n我方全體火、風屬性成員行動時，觸發「使我方全體普攻傷害增加60%(50回合)」(1回合)\n\n《天使長的祝福-定罪》\n我方全體水、闇屬性成員行動時，觸發「使我方全體必殺技傷害增加30%(50回合)」(1回合)`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `天罰之力`,
                            description: `攻擊時，觸發「使自身攻擊力增加50%(4回合)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `天使长的祝福`,
                            description: `第一回合时，触发「《天使长的祝福-圣罚》」\n第一回合时，触发「《天使长的祝福-断裁》」\n第一回合时，触发「《天使长的祝福-定罪》」\n\n《天使长的祝福-圣罚》\n我方全体光属性成员行动时，触发「使我方全体攻击力增加30%(50回合)」(1回合)\n\n《天使长的祝福-断裁》\n我方全体火丶风属性成员行动时，触发「使我方全体普攻伤害增加60%(50回合)」(1回合)\n\n《天使长的祝福-定罪》\n我方全体水丶闇属性成员行动时，触发「使我方全体必杀技伤害增加30%(50回合)」(1回合)`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `天罚之力`,
                            description: `攻击时，触发「使自身攻击力增加50%(4回合)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Archangel's Blessing`,
                            description: `On the first turn, trigger "Archangel's Blessing - Holy Punishment".\nOn the first turn, trigger "Archangel's Blessing - Judgment".\nOn the first turn, trigger "Archangel's Blessing - Conviction".\n\n"Archangel's Blessing - Holy Punishment"\nWhen all Light allies perform an action, trigger the following effect: "increase the party's Attack Power by 30% for 50 turns" for 1 turn.\n\n"Archangel's Blessing - Judgment"\nWhen all Fire and Wind allies perform an action, trigger the following effect: "increase the party's Basic Attack Power by 60% for 50 turns" for 1 turn.\n\n"Archangel's Blessing - Conviction"\nWhen all Water and Dark allies perform an action, trigger the following effect: "increase the party's Ultimate Skill Power by 30% for 50 turns" for 1 turn.`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Wrath of God`,
                            description: `On Attack, increase your Attack Power by 50% for 4 turns.`
                        },
                    },
                    [Locale.jp]: {},
                    [Locale.kr]: {}
                }
            }
        }
    },
]