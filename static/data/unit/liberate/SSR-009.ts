import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10026: LiberateSkillSet[] = [
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
                            name: `心跳☆閃耀`,
                            description: `以自身攻擊力79.2/91.7/104.2/116.7/129.2%每回合對我方全體進行治療(6回合)，並使自身以外的我方隊員當前必殺技CD減少1回合，並使我方全體必殺技傷害增加10/12.5/15/20/20%(3/3/3/3/6回合)，CD: 6`
                        },
                        [SkillType.SKILL_1]: {
                            name: `心跳☆閃耀`,
                            description: `以自身攻擊力79.2%每回合對我方全體進行治療(6回合)，並使自身以外的我方隊員當前必殺技CD減少1回合，並使我方全體必殺技傷害增加10%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_2]: {
                            name: `心跳☆閃耀`,
                            description: `以自身攻擊力91.7%每回合對我方全體進行治療(6回合)，並使自身以外的我方隊員當前必殺技CD減少1回合，並使我方全體必殺技傷害增加12.5%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_3]: {
                            name: `心跳☆閃耀`,
                            description: `以自身攻擊力104.2%每回合對我方全體進行治療(6回合)，並使自身以外的我方隊員當前必殺技CD減少1回合，並使我方全體必殺技傷害增加15%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_4]: {
                            name: `心跳☆閃耀`,
                            description: `以自身攻擊力116.7%每回合對我方全體進行治療(6回合)，並使自身以外的我方隊員當前必殺技CD減少1回合，並使我方全體必殺技傷害增加20%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_5]: {
                            name: `心跳☆閃耀`,
                            description: `以自身攻擊力129.2%每回合對我方全體進行治療(6回合)，並使自身以外的我方隊員當前必殺技CD減少1回合，並使我方全體必殺技傷害增加20%(6回合)，CD: 6`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `跟著一起唱唷☆`,
                            description: `必殺時，觸發「使我方全體攻擊力增加30%(最多1層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `心跳☆闪耀`,
                            description: `以自身攻击力79.2/91.7/104.2/116.7/129.2%每回合对我方全体进行治疗(6回合)，并使自身以外的我方队员当前必杀技CD减少1回合，并使我方全体必杀技伤害增加10/12.5/15/20/20%(3/3/3/3/6回合)，CD: 6`
                        },
                        [SkillType.SKILL_1]: {
                            name: `心跳☆闪耀`,
                            description: `以自身攻击力79.2%每回合对我方全体进行治疗(6回合)，并使自身以外的我方队员当前必杀技CD减少1回合，并使我方全体必杀技伤害增加10%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_2]: {
                            name: `心跳☆闪耀`,
                            description: `以自身攻击力91.7%每回合对我方全体进行治疗(6回合)，并使自身以外的我方队员当前必杀技CD减少1回合，并使我方全体必杀技伤害增加12.5%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_3]: {
                            name: `心跳☆闪耀`,
                            description: `以自身攻击力104.2%每回合对我方全体进行治疗(6回合)，并使自身以外的我方队员当前必杀技CD减少1回合，并使我方全体必杀技伤害增加15%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_4]: {
                            name: `心跳☆闪耀`,
                            description: `以自身攻击力116.7%每回合对我方全体进行治疗(6回合)，并使自身以外的我方队员当前必杀技CD减少1回合，并使我方全体必杀技伤害增加20%(3回合)，CD: 6`
                        },
                        [SkillType.SKILL_5]: {
                            name: `心跳☆闪耀`,
                            description: `以自身攻击力129.2%每回合对我方全体进行治疗(6回合)，并使自身以外的我方队员当前必杀技CD减少1回合，并使我方全体必杀技伤害增加20%(6回合)，CD: 6`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `跟着一起唱唷☆`,
                            description: `必杀时，触发「使我方全体攻击力增加30%(最多1层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Heart☆Beat`,
                            description: `Heal the party for 79.2/91.7/104.2/116.7/129.2% of your Attack Power every turn for 6 turns, decrease other allies' current Ultimate Skill CD by 1 turn, and increase the party's Ultimate Skill Power by 10/12.5/15/20/20% for [3/3/3/3/6] turns. CD: 6`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Heart☆Beat`,
                            description: `Heal the party for 79.2% of your Attack Power every turn for 6 turns, decrease other allies' current Ultimate Skill CD by 1 turn, and increase the party's Ultimate Skill Power by 10% for 3 turns. CD: 6`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Heart☆Beat`,
                            description: `Heal the party for 91.7% of your Attack Power every turn for 6 turns, decrease other allies' current Ultimate Skill CD by 1 turn, and increase the party's Ultimate Skill Power by 12.5% for 3 turns. CD: 6`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Heart☆Beat`,
                            description: `Heal the party for 104.2% of your Attack Power every turn for 6 turns, decrease other allies' current Ultimate Skill CD by 1 turn, and increase the party's Ultimate Skill Power by 15% for 3 turns. CD: 6`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Heart☆Beat`,
                            description: `Heal the party for 116.7% of your Attack Power every turn for 6 turns, decrease other allies' current Ultimate Skill CD by 1 turn, and increase the party's Ultimate Skill Power by 20% for 3 turns. CD: 6`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Heart☆Beat`,
                            description: `Heal the party for 129.2% of your Attack Power every turn for 6 turns, decrease other allies' current Ultimate Skill CD by 1 turn, and increase the party's Ultimate Skill Power by 20% for 6 turns. CD: 6`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Sing Along☆`,
                            description: `On Ultimate Skill, trigger the following effect: Increase the party's Attack Power by 30% (max 1 stack).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `ドキドキ☆キラッ`,
                            description: `毎ターン自分の攻撃力の79.2/91.7/104.2/116.7/129.2%分味方全体に治療を行い(6ターン)、自分以外の味方の現在の必殺技CDを1ターン減少させ、味方全体の必殺技ダメージを10/12.5/15/20/20%増加させる(3/3/3/3/6ターン)[CD:6]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `ドキドキ☆キラッ`,
                            description: `毎ターン自分の攻撃力の79.2%分味方全体に治療を行い(6ターン)、自分以外の味方の現在の必殺技CDを1ターン減少させ、味方全体の必殺技ダメージを10%増加させる(3ターン)[CD:6]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `ドキドキ☆キラッ`,
                            description: `毎ターン自分の攻撃力の91.7%分味方全体に治療を行い(6ターン)、自分以外の味方の現在の必殺技CDを1ターン減少させ、味方全体の必殺技ダメージを12.5%増加させる(3ターン)[CD:6]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `ドキドキ☆キラッ`,
                            description: `毎ターン自分の攻撃力の104.2%分味方全体に治療を行い(6ターン)、自分以外の味方の現在の必殺技CDを1ターン減少させ、味方全体の必殺技ダメージを15%増加させる(3ターン)[CD:6]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `ドキドキ☆キラッ`,
                            description: `毎ターン自分の攻撃力の116.7%分味方全体に治療を行い(6ターン)、自分以外の味方の現在の必殺技CDを1ターン減少させ、味方全体の必殺技ダメージを20%増加させる(3ターン)[CD:6]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `ドキドキ☆キラッ`,
                            description: `毎ターン自分の攻撃力の129.2%分味方全体に治療を行い(6ターン)、自分以外の味方の現在の必殺技CDを1ターン減少させ、味方全体の必殺技ダメージを20%増加させる(6ターン)[CD:6]`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `一緒に歌って☆`,
                            description: `必殺技攻撃時「味方全体の攻撃力を30%増加させる(最高1スタック)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `두근☆반짝`,
                            description: `자신의 공격 데미지의 79.2/91.7/104.2/116.7/129.2%만큼 매턴 아군 전체를 치유(6턴), 자신 이외의 아군의 현재 궁극기 CD 1턴 감소, 아군 전체의 궁극기 데미지 10/12.5/15/20/20% 증가(3/3/3/3/6턴) [CD: 6]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `두근☆반짝`,
                            description: `자신의 공격 데미지의 79.2%만큼 매턴 아군 전체를 치유(6턴), 자신 이외의 아군의 현재 궁극기 CD 1턴 감소, 아군 전체의 궁극기 데미지 10% 증가(3턴) [CD: 6]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `두근☆반짝`,
                            description: `자신의 공격 데미지의 91.7%만큼 매턴 아군 전체를 치유(6턴), 자신 이외의 아군의 현재 궁극기 CD 1턴 감소, 아군 전체의 궁극기 데미지 12.5% 증가(3턴) [CD: 6]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `두근☆반짝`,
                            description: `자신의 공격 데미지의 104.2%만큼 매턴 아군 전체를 치유(6턴), 자신 이외의 아군의 현재 궁극기 CD 1턴 감소, 아군 전체의 궁극기 데미지 15% 증가(3턴) [CD: 6]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `두근☆반짝`,
                            description: `자신의 공격 데미지의 116.7%만큼 매턴 아군 전체를 치유(6턴), 자신 이외의 아군의 현재 궁극기 CD 1턴 감소, 아군 전체의 궁극기 데미지 20% 증가(3턴) [CD: 6]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `두근☆반짝`,
                            description: `자신의 공격 데미지의 129.2%만큼 매턴 아군 전체를 치유(6턴), 자신 이외의 아군의 현재 궁극기 CD 1턴 감소, 아군 전체의 궁극기 데미지 20% 증가(6턴) [CD: 6]`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `함께 노래해요☆`,
                            description: `궁극기 발동 시 「아군 전체의 공격 데미지 30% 증가(최대 1중첩)」 트리거`
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
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,502,269\n最大攻擊力：894,567`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,502,269\n最大攻击力：894,567`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,502,269\nMax ATK：894,567`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,502,269\nATK最大値：894,567`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,502,269\nMax ATK：894,567`
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
                            name: `閃耀☆偶像之星諾艾莉`,
                            description: `使我方全體最大HP增加30%\n使我方全體攻擊力增加60%\n使我方全體受到護盾效果減少75%\n使自身必殺技最大CD減少3回合\n以自身攻擊力35%每回合對我方全體進行治療\n必殺時，觸發「使我方全體必殺技傷害增加10%(最多4層)」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `舉起你們的手☆`,
                            description: `使自身受到護盾效果增加30%\n攻擊時，觸發「使我方全體被治療時回復量增加12.5%(2回合)、受到護盾效果增加12.5%(2回合)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `我愛你們大家☆`,
                            description: `必殺時，觸發「以自身攻擊力30%使我方全體攻擊力增加(1回合)」\n必殺時，觸發「以攻擊力100%對我方全體施放護盾(4回合)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `闪耀☆偶像之星诺艾莉`,
                            description: `使我方全体最大HP增加30%\n使我方全体攻击力增加60%\n使我方全体受到护盾效果减少75%\n使自身必杀技最大CD减少3回合\n以自身攻击力35%每回合对我方全体进行治疗\n必杀时，触发「使我方全体必杀技伤害增加10%(最多4层)」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `举起你们的手☆`,
                            description: `使自身受到护盾效果增加30%\n攻击时，触发「使我方全体被治疗时回复量增加12.5%(2回合)丶受到护盾效果增加12.5%(2回合)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `我爱你们大家☆`,
                            description: `必杀时，触发「以自身攻击力30%使我方全体攻击力增加(1回合)」\n必杀时，触发「以攻击力100%对我方全体施放护盾(4回合)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `My Brightest Star`,
                            description: `Increase the party's max HP by 30%.\nIncrease the party's Attack Power by 60%.\nDecrease the party's Shield effect by 75%.\nDecrease your max Ultimate Skill CD by 3 turns.\nHeal the party for 35% of your Attack Power every turn.\nOn Ultimate Skill, trigger the following effect: Increase the party's Ultimate Skill Power by 10% (max 4 stacks).`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Raise Your Hands☆`,
                            description: `Increase your own Shield effect by 30%.\nOn Attack, trigger the following effect: Increase the party's Recovery Rate by 12.5% for 2 turns and Shield effect by 12.5% for 2 turns.`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `I Love You☆`,
                            description: `On Ultimate Skill, trigger the following effect: Increase the party's Attack Power by 30% of your Attack Power for 1 turn.\nOn Ultimate Skill, trigger the following effect: The party gains a Shield for 100% of your Attack Power for 4 turns.`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `キラキラ☆アイドルの星ノエル`,
                            description: `味方全体の最大HPを30%増加させる\n味方全体の攻撃力を60%増加させる\n味方全体の受ける盾効果を75%減少させる\n自分の必殺技最大CDを3ターン減少させる\n毎ターン自分の攻撃力の35%分味方全体に治療を行う\n必殺技攻撃時「味方全体の必殺技ダメージを10%増加させる(最高4スタック)」を誘発する`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `手を挙げて☆`,
                            description: `受ける盾効果が30%増加する\n攻撃時、効果「味方全体が治療を受けた時、回復HP量を12.5%増加させる(2ターン)」「受ける盾効果を12.5%増加させる(2ターン)」を誘発する`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `みんなだいすき☆`,
                            description: `必殺技攻撃時「自分の攻撃力の30%分、味方全体の攻撃力を増加させる(1ターン)」を誘発する\n必殺技攻撃時「攻撃力の100%分味方全体に盾を張る(4ターン)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `반짝☆아이돌 스타 노엘리`,
                            description: `아군 전체의 최대 HP 30% 증가\n아군 전체의 공격 데미지 60% 증가\n아군 전체가 받는 아머 강화 효과 75% 감소\n자신의 궁극기 최대 CD 3턴 감소\n자신의 공격 데미지의 35%만큼 매턴 아군 전체를 치유\n자신은 궁극기 발동 시, 「아군 전체의 궁극기 데미지 10% 증가(최대 4중첩)」트리거`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `두 손을 들어요☆`,
                            description: `자신이 받는 아머 강화 효과 30% 증가\n공격 시, 「아군 전체가 치유를 받을 시 회복량 12.5% 증가(2턴), 받는 아머 강화 효과 12.5% 증가(2턴)」 트리거`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `팬들을 사랑해☆`,
                            description: `궁극기 발동 시 「자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)」 트리거\n궁극기 발동 시 「공격 데미지의 100%만큼 아군 전체의 아머 강화(4턴)」트리거`
                        },
                    }
                }
            }
        }
    },
]