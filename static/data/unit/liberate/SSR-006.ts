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
                            description: `Increase allied Supporters' Attack Power for 20% of your Attack Power for 1 turn. Heal the party for 200% of your Attack Power, and heal the party for 110% of your Attack Power every turn for 5 turns. CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Go Team!!`,
                            description: `Increase allied Supporters' Attack Power for 20% of your Attack Power for 1 turn. Heal the party for 200% of your Attack Power, and heal the party for 110% of your Attack Power every turn for 5 turns. CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Go Team!!`,
                            description: `Increase allied Supporters' Attack Power for 20% of your Attack Power for 1 turn. Heal the party for 200% of your Attack Power, and heal the party for 110% of your Attack Power every turn for 5 turns. CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Go Team!!`,
                            description: `Increase allied Supporters' Attack Power for 20% of your Attack Power for 1 turn. Heal the party for 200% of your Attack Power, and heal the party for 110% of your Attack Power every turn for 5 turns. CD: 4`
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
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `みんながんばって！`,
                            description: `味方サポーターの攻撃力を自分の攻撃力の20/20/20/20/25%分増加させ(1ターン)、自分の攻撃力の200%分味方全体に治療を行い、さらに毎ターン自分の攻撃力の80/85/90/100/110%分味方全体に治療を行う(5ターン)[CD:5] [Lv3+: CD:4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `みんながんばって！`,
                            description: `味方サポーターの攻撃力を自分の攻撃力の20%分増加させ(1ターン)、自分の攻撃力の200%分味方全体に治療を行い、さらに毎ターン自分の攻撃力の80%分味方全体に治療を行う(5ターン)[CD:5]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `みんながんばって！`,
                            description: `味方サポーターの攻撃力を自分の攻撃力の20%分増加させ(1ターン)、自分の攻撃力の200%分味方全体に治療を行い、さらに毎ターン自分の攻撃力の85%分味方全体に治療を行う(5ターン)[CD:5]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `みんながんばって！`,
                            description: `味方サポーターの攻撃力を自分の攻撃力の20%分増加させ(1ターン)、自分の攻撃力の200%分味方全体に治療を行い、さらに毎ターン自分の攻撃力の90%分味方全体に治療を行う(5ターン)[CD:4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `みんながんばって！`,
                            description: `味方サポーターの攻撃力を自分の攻撃力の20%分増加させ(1ターン)、自分の攻撃力の200%分味方全体に治療を行い、さらに毎ターン自分の攻撃力の100%分味方全体に治療を行う(5ターン)[CD:4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `みんながんばって！`,
                            description: `味方サポーターの攻撃力を自分の攻撃力の25%分増加させ(1ターン)、自分の攻撃力の200%分味方全体に治療を行い、さらに毎ターン自分の攻撃力の110%分味方全体に治療を行う(5ターン)[CD:4]`
                        },
                        [SkillType.ATTACK]: {
                            name: `激励`,
                            description: `自分の攻撃力の75%分味方全体に治療を行う`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `全力応援`,
                            description: `攻撃時「自分の攻撃力の25%分、味方全体の攻撃力を増加させる(1ターン)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `모두 화이팅!`,
                            description: `자신의 공격 데미지 20/20/20/20/25%만큼 아군 서포터의 공격 데미지 증가(1턴), 공격 데미지의 200%만큼 아군 전체를 치유, 자신의 공격 데미지의 80/85/90/100/110%만큼 매턴 아군 전체를 치유(5턴) [CD: 5] [Lv3+: CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `모두 화이팅!`,
                            description: `자신의 공격 데미지 20%만큼 아군 서포터의 공격 데미지 증가(1턴), 공격 데미지의 200%만큼 아군 전체를 치유, 자신의 공격 데미지의 80%만큼 매턴 아군 전체를 치유(5턴) [CD: 5]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `모두 화이팅!`,
                            description: `자신의 공격 데미지 20%만큼 아군 서포터의 공격 데미지 증가(1턴), 공격 데미지의 200%만큼 아군 전체를 치유, 자신의 공격 데미지의 85%만큼 매턴 아군 전체를 치유(5턴) [CD: 5]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `모두 화이팅!`,
                            description: `자신의 공격 데미지 20%만큼 아군 서포터의 공격 데미지 증가(1턴), 공격 데미지의 200%만큼 아군 전체를 치유, 자신의 공격 데미지의 90%만큼 매턴 아군 전체를 치유(5턴) [CD: 4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `모두 화이팅!`,
                            description: `자신의 공격 데미지 20%만큼 아군 서포터의 공격 데미지 증가(1턴), 공격 데미지의 200%만큼 아군 전체를 치유, 자신의 공격 데미지의 100%만큼 매턴 아군 전체를 치유(5턴) [CD: 4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `모두 화이팅!`,
                            description: `자신의 공격 데미지 25%만큼 아군 서포터의 공격 데미지 증가(1턴), 공격 데미지의 200%만큼 아군 전체를 치유, 자신의 공격 데미지의 110%만큼 매턴 아군 전체를 치유(5턴) [CD: 4]`
                        },
                        [SkillType.ATTACK]: {
                            name: `격려`,
                            description: `자신의 공격 데미지의 75%만큼 아군 전체를 치유`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `전격 지원`,
                            description: `공격 시 「자신의 공격 데미지의 25%만큼 아군 전체의 공격 데미지 증가(1턴)」발동`
                        },
                    }
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
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,518,102\nATK最大値：889,817`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,518,102\nMax ATK：889,817`
                        },
                    }
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
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `掻き立てられた支配欲`,
                            description: `味方全体の最大HPが35%増加する\n味方全体の攻撃力が40%増加する\n味方全体の必殺技ダメージが25%増加する\n味方の与えるダメージが20%増加する\n味方のガーディアンの最大HPが15%増加する\n味方が治療を受けた時、回復HP量が30%増加する`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `追加治療`,
                            description: `通常攻撃時「HPが一番低いメンバーが受けるダメージが15%減少する(1ターン)」を誘発する\n通常攻撃時「攻撃力の40%分、HPが一番低い味方メンバーに治療を行う」を誘発する`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `みんなに努力の成果を見せてやる！`,
                            description: `味方全体の必殺技ダメージが30%増加する\n必殺技攻撃時「ターゲットが風属性から受けるダメージを20%増加させる(最高2スタック)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `보호 욕구 자극`,
                            description: `아군 전체의 최대 HP 35% 증가\n아군 전체의 공격 데미지 40% 증가\n아군 전체의 궁극기 데미지 25% 증가\n아군 전체가 가하는 데미지 20% 증가\n아군 탱커의 최대 HP 15% 증가\n아군 전체는 치유를 받을 시 회복량 30% 증가`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `추가 치료`,
                            description: `일반 공격 시 「HP가 가장 낮은 아군이 받는 데미지 15% 감소(1턴)」발동\n일반 공격 시 「공격 데미지의 40%만큼 HP가 가장 낮은 아군을 치유」발동`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `모두에게 노력의 성과를 보여주겠어!`,
                            description: `아군 전체의 궁극기 데미지 30% 증가\n궁극기 발동 시 「타깃이 받는 풍속성 데미지 20% 증가(최대 2중첩)」발동`
                        },
                    }
                }
            }
        }
    },
]