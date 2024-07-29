import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10003: LiberateSkillSet[] = [
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
                            name: `劇毒之薔薇`,
                            description: `使目標受到魔王 伊布力斯的傷害增加10%(最多3層)，並以攻擊力560%對目標造成傷害，CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `秘傳魔力儀式`,
                            description: `當前HP大於75%時，發動「造成傷害增加20%」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `剧毒之蔷薇`,
                            description: `使目标受到魔王 伊布力斯的伤害增加10%(最多3层)，并以攻击力560%对目标造成伤害，CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `秘传魔力仪式`,
                            description: `当前HP大於75%时，发动「造成伤害增加20%」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Poison Rose`,
                            description: `Increase the target's Damage Taken from Archdemon Iblis by 10% (Max 3 Stacks). Damage the target (560% Attack Power). CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Hidden Ceremony`,
                            description: `When you have more than 75% HP, increase your Damage Output by 20%.`
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
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,166,609\n最大攻擊力：989,565`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,166,609\n最大攻击力：989,565`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,166,609\nMax ATK：989,565`
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
                            name: `魔王伊布力斯之傲慢`,
                            description: `我方全體最大HP20%\n我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n攻擊時，觸發「以150%攻擊力對敵全體進行追擊」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `魔力汲取`,
                            description: `普攻傷害增加20%\n造成傷害時會以傷害值33%回復自身HP\n使自身必殺傷害增加25%`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `眾生壓迫`,
                            description: `使自身攻擊力增加25%\n攻擊時，觸發「使敵方全體受到光屬性傷害增加4%(最多5層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `魔王伊布力斯之傲慢`,
                            description: `我方全体最大HP20%\n我方全体攻击力增加40%\n我方全体造成伤害增加20%\n攻击时，触发「以150%攻击力对敌全体进行追击」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `魔力汲取`,
                            description: `普攻伤害增加20%\n造成伤害时会以伤害值33%回复自身HP\n使自身必杀伤害增加25%`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `众生压迫`,
                            description: `使自身攻击力增加25%\n攻击时，触发「使敌方全体受到光属性伤害增加4%(最多5层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Iblis' Pride`,
                            description: `Increase the party's Max HP by 20%.\nIncrease the party's Attack Power by 40%.\nIncrease the party's Damage Output by 20%.\nOn Attack, deal follow-up damage to all enemies (150% Attack Power).`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Demon Absorb`,
                            description: `Increase your Basic Damage Output by 20%.\nWhen you deal damage, heal yourself for 33% of the damage dealt.\nIncrease your Ultimate Skill Damage by 25%.`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Mass Oppression`,
                            description: `Increase your Attack Power by 25%.\nOn Attack, increase all enemies' Damage Taken from Light attacks by 4% (Max 5 Stacks).`
                        },
                    },
                    [Locale.jp]: {},
                    [Locale.kr]: {}
                }
            }
        }
    },
]