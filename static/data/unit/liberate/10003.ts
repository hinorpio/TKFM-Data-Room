import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10003: LiberateSkillSet[] = [
    {
        version: 1,
        lastDate: '',
        remark: {
            [Locale.zh]: null,
            [Locale.cn]: null,
            [Locale.en]: null,
            [Locale.jp]: null,
            [Locale.ko]: null
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
                    [Locale.zh]: {
                        [SkillType.SKILL_S]: {
                            name: "烈焰攻心",
                            description: "使自身攻擊力增加35%(3回合)，造成傷害增加10%(3回合)，再以攻擊力503%對目標造成傷害，CD: 3"
                        },
                        [SkillType.PASSIVE_1]: {
                            name: "魔王肉體",
                            description: `使自身普攻傷害增加25%\n使自身必殺技傷害增加15%`
                        },
                    },
                    [Locale.cn]: {},
                    [Locale.en]: {},
                    [Locale.jp]: {},
                    [Locale.ko]: {}
                }
            },
            [LiberationStage.LIBERATION_2]:{
                material: [
                    { code: ItemCode.LIBERATE_STONE, "quantity": 1 },
                    { code: ItemCode.EVOLVE_FIRE_LV3, "quantity": 20 },
                    { code: ItemCode.SKILL_FRAGMENT, "quantity": 150 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 400000 },
                ],
                skill: {
                    [Locale.zh]: {
                        [SkillType.BASE_STAT]: {
                            name: "完全體數據",
                            description: "HP與ATK將永久提升10%\n\nHP：3,440,520\nATK：910,400"
                        },
                    },
                    [Locale.cn]: {},
                    [Locale.en]: {},
                    [Locale.jp]: {},
                    [Locale.ko]: {}
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
                    [Locale.zh]: {
                        [SkillType.LEADER]: {
                            name: "魔王巴爾之狡詐",
                            description: "我方全體最大HP20%\n我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n自身攻擊力增加125%\n自身必殺技傷害增加25%"
                        },
                        [SkillType.PASSIVE_2]: {
                            name: "不為人知的性格",
                            description: "必殺時，觸發「使自身攻擊力增加15%(最多2層)」"
                        },
                        [SkillType.PASSIVE_3]: {
                            name: "巴爾的惡作劇",
                            description: "第1回合開始時，觸發「使自身當前必殺技CD減少1回合」\n必殺時，觸發「使自身當前必殺技CD減少1回合、目標當前必殺技CD增加2回合」\n必殺時，觸發「使目標受到火屬性傷害增加10%(最多2層)」"
                        },
                    },
                    [Locale.cn]: {},
                    [Locale.en]: {},
                    [Locale.jp]: {},
                    [Locale.ko]: {}
                }
            }
        }
    },
]