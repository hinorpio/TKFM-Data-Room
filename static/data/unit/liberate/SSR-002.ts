import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10002: LiberateSkillSet[] = [
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
                            name: "暴戾恣睢",
                            description: "使自身攻擊力增加100%(3回合)，獲得嘲諷效果(3回合)並變為防禦狀態，CD: 3"
                        },
                        [SkillType.ATTACK]: {
                            name: "撕裂",
                            description: `以100%攻擊力對目標造成傷害，並變為防禦狀態`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: "魔王的霸氣",
                            description: `使自身受到傷害減少20%`
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
                    { code: ItemCode.EVOLVE_DARK_LV3, "quantity": 20 },
                    { code: ItemCode.SKILL_FRAGMENT, "quantity": 150 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 400000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.BASE_STAT]: {
                            name: "完全體數據",
                            description: "HP與ATK將永久提升10%\n\nHP：4,947,826\nATK：633,319"
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
                            name: "魔王撒旦之狂妄",
                            description: "我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n使自身攻擊力增加100%\n使撒旦自身獲得嘲諷效果(永久)、防禦時減傷效果增加15%"
                        },
                        [SkillType.PASSIVE_2]: {
                            name: "撒旦的回禮",
                            description: "被攻擊時，觸發「以自身攻擊力100%進行反擊」\n被攻擊時，觸發「使自身攻擊力增加10%(最多10層)」"
                        },
                        [SkillType.PASSIVE_3]: {
                            name: "不敗之軀",
                            description: "使自身每回合以自身最大HP20%進行治療\n被攻擊時，觸發「使自身造成傷害增加2%(最多10層)」"
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