import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10003: LiberateSkillSet[] = [
    {
        version: 1,
        lastDate: '',
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
                            name: "劇毒之薔薇",
                            description: "使目標受到魔王 伊布力斯的傷害增加10%(最多3層)，並以攻擊力560%對目標造成傷害，CD: 3"
                        },
                        [SkillType.PASSIVE_1]: {
                            name: "秘傳魔力儀式",
                            description: `當前HP大於75%時，發動「造成傷害增加20%」`
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
                            description: "HP與ATK將永久提升10%\n\nHP：3,166,609\nATK：989,565"
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
                            name: "魔王伊布力斯之傲慢",
                            description: "我方全體最大HP20%\n我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n攻擊時，觸發「以150%攻擊力對敵全體進行追擊」"
                        },
                        [SkillType.PASSIVE_2]: {
                            name: "魔力汲取",
                            description: "普攻傷害增加20%\n造成傷害時會以傷害值33%回復自身HP\n使自身必殺傷害增加25%"
                        },
                        [SkillType.PASSIVE_3]: {
                            name: "眾生壓迫",
                            description: "使自身攻擊力增加25%\n攻擊時，觸發「使敵方全體受到光屬性傷害增加4%(最多5層)」"
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