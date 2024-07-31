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
                            name: `大家加油喔！`,
                            description: `以自身攻擊力20/20/20/20/25%使我方輔助者攻擊力增加(1回合)，以攻擊力200%對我方全體進行治療，並以自身攻擊力80/85/90/100/110%每回合對我方全體進行治療(5回合)，CD: 5 [絆3+: CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `大家加油喔！`,
                            description: `以自身攻擊力20%使我方輔助者攻擊力增加(1回合)，以攻擊力200%對我方全體進行治療，並以自身攻擊力80%每回合對我方全體進行治療(5回合)，CD: 5`
                        },
                        [SkillType.SKILL_2]: {
                            name: `大家加油喔！`,
                            description: `以自身攻擊力20%使我方輔助者攻擊力增加(1回合)，以攻擊力200%對我方全體進行治療，並以自身攻擊力85%每回合對我方全體進行治療(5回合)，CD: 5`
                        },
                        [SkillType.SKILL_3]: {
                            name: `大家加油喔！`,
                            description: `以自身攻擊力20%使我方輔助者攻擊力增加(1回合)，以攻擊力200%對我方全體進行治療，並以自身攻擊力90%每回合對我方全體進行治療(5回合)，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `大家加油喔！`,
                            description: `以自身攻擊力20%使我方輔助者攻擊力增加(1回合)，以攻擊力200%對我方全體進行治療，並以自身攻擊力100%每回合對我方全體進行治療(5回合)，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `大家加油喔！`,
                            description: `以自身攻擊力25%使我方輔助者攻擊力增加(1回合)，以攻擊力200%對我方全體進行治療，並以自身攻擊力110%每回合對我方全體進行治療(5回合)，CD: 4`
                        },
                        [SkillType.ATTACK]: {
                            name: `鼓舞`,
                            description: `以攻擊力75%對我方全體進行治療`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `認真應援`,
                            description: `攻擊時，觸發「以自身攻擊力25%使我方全體攻擊力增加(1回合)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `大家加油喔！`,
                            description: `以自身攻击力20/20/20/20/25%使我方辅助者攻击力增加(1回合)，以攻击力200%对我方全体进行治疗，并以自身攻击力80/85/90/100/110%每回合对我方全体进行治疗(5回合)，CD: 5 [绊3+: CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `大家加油喔！`,
                            description: `以自身攻击力20%使我方辅助者攻击力增加(1回合)，以攻击力200%对我方全体进行治疗，并以自身攻击力80%每回合对我方全体进行治疗(5回合)，CD: 5`
                        },
                        [SkillType.SKILL_2]: {
                            name: `大家加油喔！`,
                            description: `以自身攻击力20%使我方辅助者攻击力增加(1回合)，以攻击力200%对我方全体进行治疗，并以自身攻击力85%每回合对我方全体进行治疗(5回合)，CD: 5`
                        },
                        [SkillType.SKILL_3]: {
                            name: `大家加油喔！`,
                            description: `以自身攻击力20%使我方辅助者攻击力增加(1回合)，以攻击力200%对我方全体进行治疗，并以自身攻击力90%每回合对我方全体进行治疗(5回合)，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `大家加油喔！`,
                            description: `以自身攻击力20%使我方辅助者攻击力增加(1回合)，以攻击力200%对我方全体进行治疗，并以自身攻击力100%每回合对我方全体进行治疗(5回合)，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `大家加油喔！`,
                            description: `以自身攻击力25%使我方辅助者攻击力增加(1回合)，以攻击力200%对我方全体进行治疗，并以自身攻击力110%每回合对我方全体进行治疗(5回合)，CD: 4`
                        },
                        [SkillType.ATTACK]: {
                            name: `鼓舞`,
                            description: `以攻击力75%对我方全体进行治疗`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `认真应援`,
                            description: `攻击时，触发「以自身攻击力25%使我方全体攻击力增加(1回合)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Go Team!!`,
                            description: `Increase allied Supporters' Attack Power for 20/20/20/20/25% of your Attack Power for 1 turn. Heal the party for 200% of your Attack Power, and heal the party for 80/85/90/100/110% of your Attack Power every turn for 5 turns. CD: 5 [Bond 3+: CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Go Team!!`,
                            description: `Increase allied Supporters' Attack Power for 25% of your Attack Power for 1 turn. Heal the party for 200% of your Attack Power, and heal the party for 110% of your Attack Power every turn for 5 turns. CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Go Team!!`,
                            description: `Increase allied Supporters' Attack Power for 25% of your Attack Power for 1 turn. Heal the party for 200% of your Attack Power, and heal the party for 110% of your Attack Power every turn for 5 turns. CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Go Team!!`,
                            description: `Increase allied Supporters' Attack Power for 25% of your Attack Power for 1 turn. Heal the party for 200% of your Attack Power, and heal the party for 110% of your Attack Power every turn for 5 turns. CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Go Team!!`,
                            description: `Increase allied Supporters' Attack Power for 25% of your Attack Power for 1 turn. Heal the party for 200% of your Attack Power, and heal the party for 110% of your Attack Power every turn for 5 turns. CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Go Team!!`,
                            description: `Increase allied Supporters' Attack Power for 25% of your Attack Power for 1 turn. Heal the party for 200% of your Attack Power, and heal the party for 110% of your Attack Power every turn for 5 turns. CD: 4`
                        },
                        [SkillType.ATTACK]: {
                            name: `Cheer Squad`,
                            description: `Heal the party for 75% of your Attack Power`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Special Help`,
                            description: `On Attack, increase the party's Attack Power for 25% of your Attack Power.`
                        },
                    },
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
                            name: `完全體數據`,
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,518,102\n最大攻擊力：889,817`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,518,102\n最大攻击力：889,817`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,518,102\nMax ATK：889,817`
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
                            name: `被激起的保護慾`,
                            description: `我方全體最大HP增加35%\n我方全體攻擊力增加40%\n我方全體必殺技傷害增加25%\n我方全體造成傷害增加20%\n我方全體守護者最大HP增加15%\n我方全體被治療時回復量增加30%`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `額外治療`,
                            description: `普攻時，觸發「我方HP最低者受到傷害減少15%(1回合)」\n普攻時，觸發「以自身攻擊力40%對我方HP最低者進行治療」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `讓大家看見我的努力！`,
                            description: `我方全體必殺技傷害增加30%\n必殺時，觸發「使目標受到風屬性傷害增加20%(最多2層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `被激起的保护欲`,
                            description: `我方全体最大HP增加35%\n我方全体攻击力增加40%\n我方全体必杀技伤害增加25%\n我方全体造成伤害增加20%\n我方全体守护者最大HP增加15%\n我方全体被治疗时回复量增加30%`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `额外治疗`,
                            description: `普攻时，触发「我方HP最低者受到伤害减少15%(1回合)」\n普攻时，触发「以自身攻击力40%对我方HP最低者进行治疗」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `让大家看见我的努力！`,
                            description: `我方全体必杀技伤害增加30%\n必杀时，触发「使目标受到风属性伤害增加20%(最多2层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Let's Do This!`,
                            description: `Increase the party's max HP by 35%.\nIncrease the party's Attack Power by 40%.\nIncrease the party's Ultimate Skill Power by 25%.\nIncrease the party's Damage Output by 20%.\nIncrease all allied Defenders' max HP by 15%.\nIncrease the party's Recovery Rate by 30%.`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Extra Heals`,
                            description: `On Basic Attack, the ally with the lowest HP take 15% less damage for 1 turn.\nOn Basic Attack, heal the ally with the lowest HP for 40% of your Attack Power.`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Watch Me!`,
                            description: `Increase the party's Ultimate Skill Damage Power by 30%.\nOn Ultimate Skill, increase the target's Damage Taken from Wind attacks by 20% (max 2 stacks).`
                        },
                    },
                    [Locale.jp]: {},
                    [Locale.kr]: {}
                }
            }
        }
    },
]