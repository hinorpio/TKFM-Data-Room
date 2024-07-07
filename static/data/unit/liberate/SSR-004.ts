import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10004: LiberateSkillSet[] = [
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
                            name: "導引之箭矢",
                            description: "以攻擊力625%對目標造成傷害，並使我方全體攻擊力增加25%(最多2層)，CD: 6"
                        },
                        [SkillType.PASSIVE_1]: {
                            name: "引領者",
                            description: `攻擊時，觸發「使我方全體造成傷害增加20%(1回合)」\n攻擊時，觸發「使我方全體普攻傷害增加30%(1回合)」`
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
                            description: "HP與ATK將永久提升10%\n\nHP：3,597,268\nATK：870,818"
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
                            name: "精靈領域",
                            description: "我方全體最大HP增加20%\n我方全體攻擊力增加50%\n我方全體普攻傷害增加50%\n自身攻擊力增加50%"
                        },
                        [SkillType.PASSIVE_2]: {
                            name: "破天一擊",
                            description: "必殺時，觸發「使敵方全體受到傷害增加12.5%(最多2層)且使敵方全體防禦狀態解除」\n必殺時，觸發「使敵方目標受到普攻傷害增加35%(最多2層)」"
                        },
                        [SkillType.PASSIVE_3]: {
                            name: "揚起勝利之風",
                            description: "我方全體攻擊力增加25%\n第1回合，觸發「使自身必殺技冷卻時間減少6回合」"
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