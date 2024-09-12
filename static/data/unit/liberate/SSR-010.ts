import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10008: LiberateSkillSet[] = [
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
                        [SkillType.LEADER]: {
                            name: `最終兵器少女模式`,
                            description: `我方全體攻擊力增加70%\n自身獲得《最終兵器·解放》\n\n《最終兵器·解放》\n第1回合時，觸發「使自身當前必殺技CD減少4回合、必殺技最大CD減少3回合(6回合)、攻擊力增加450%(6回合) 、普攻傷害增加100%(6回合)、必殺技傷害增加100%(6回合)」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `自我學習戰鬥系統`,
                            description: `攻擊時，觸發「使自身造成傷害增加10%(最多5層)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `防禦模式。切換`,
                            description: `防禦時，觸發「以自身最大HP50%對自身施放護盾(3回合)」\n防禦時，觸發「減少自身《自我學習戰鬥系統》的造成傷害增加效果2層」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `最终兵器少女模式`,
                            description: `我方全体攻击力增加70%\n自身获得《最终兵器·解放》\n\n《最终兵器·解放》\n第1回合时，触发「使自身当前必杀技CD减少4回合丶必杀技最大CD减少3回合(6回合)丶攻击力增加450%(6回合) 丶普攻伤害增加100%(6回合)丶必杀技伤害增加100%(6回合)」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `自我学习战斗系统`,
                            description: `攻击时，触发「使自身造成伤害增加10%(最多5层)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `防御模式。切换`,
                            description: `防御时，触发「以自身最大HP50%对自身施放护盾(3回合)」\n防御时，触发「减少自身《自我学习战斗系统》的造成伤害增加效果2层」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Finality Blaster`,
                            description: `Increase the party's Attack Power by 70%.\nGain "Final Weapon Unleashed".\n\n"Final Weapon Unleashed"\nOn the first turn, reduce your current Ultimate Skill CD by 4, reduce max Ultimate Skill CD by 3 for 6 turns, increase your Attack Power by 450% for 6 turns, Basic Attack Power by 100% for 6 turns, Ultimate Skill Power by 100% for 6 turns.`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `ML Battle System`,
                            description: `On Attack, increase your Damage Output by 10% (max 5 stacks).`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Defense Mode`,
                            description: `While in Guard Stance, grant yourself a Shield for 50% of your max HP for 3 turns.\nWhile in Guard Stance, reduce 2 stacks of the Damage Output buff provided by "ML Battle System".`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `最終兵器少女モード`,
                            description: `味方全体の攻撃力が70%増加する\n自分が《最終兵器・解放》を得る\n\n《最終兵器・解放》\n1ターン目に「自分の現在の必殺技CDを4ターン減少、必殺技の最大CDを3ターン減少(6ターン)させ、攻撃力を450%増加(6ターン)、通常攻撃ダメージを100%増加(6ターン)、必殺技ダメージを100%増加させる(6ターン)」を誘発する`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `機械学習バトルモード`,
                            description: `攻撃時「自分が与えるダメージを10%増加させる(最高5スタック)」を誘発する`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `防御モード・切換`,
                            description: `防御時「自分の最大HPの50%分、自分に盾を張る(3ターン)」を誘発する\n防御時「《機械学習バトルモード》が与えるダメージが増加する効果を2スタック減少させる」を誘発する`
                        },
                    },
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
                            name: `完全體數據`,
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,353,438\n最大攻擊力：934,149`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,353,438\n最大攻击力：934,149`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,353,438\nMax ATK：934,149`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,353,438\nATK最大値：934,149`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,353,438\nAMax ATK：934,149`
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
                        [SkillType.SKILL_S]: {
                            name: `全域殲滅模式。啟動`,
                            description: `使自身攻擊力增加125/130/135/140/150%(最多2層)，再以攻擊力60/70/80/90/100%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `全域殲滅模式。啟動`,
                            description: `使自身攻擊力增加125%(最多2層)，再以攻擊力60%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `全域殲滅模式。啟動`,
                            description: `使自身攻擊力增加130%(最多2層)，再以攻擊力70%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `全域殲滅模式。啟動`,
                            description: `使自身攻擊力增加135%(最多2層)，再以攻擊力80%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `全域殲滅模式。啟動`,
                            description: `使自身攻擊力增加140%(最多2層)，再以攻擊力90%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `全域殲滅模式。啟動`,
                            description: `使自身攻擊力增加150%(最多2層)，再以攻擊力100%對目標造成傷害，CD: 4`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `精神感應機砲。啟動`,
                            description: `攻擊時，觸發「以攻擊力25%對目標進行4次傷害」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `全域歼灭模式。启动`,
                            description: `使自身攻击力增加125/130/135/140/150%(最多2层)，再以攻击力60/70/80/90/100%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `全域歼灭模式。启动`,
                            description: `使自身攻击力增加125%(最多2层)，再以攻击力60%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `全域歼灭模式。启动`,
                            description: `使自身攻击力增加130%(最多2层)，再以攻击力70%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `全域歼灭模式。启动`,
                            description: `使自身攻击力增加135%(最多2层)，再以攻击力80%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `全域歼灭模式。启动`,
                            description: `使自身攻击力增加140%(最多2层)，再以攻击力90%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `全域歼灭模式。启动`,
                            description: `使自身攻击力增加150%(最多2层)，再以攻击力100%对目标造成伤害，CD: 4`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `精神感应机炮。启动`,
                            description: `攻击时，触发「以攻击力25%对目标进行4次伤害」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Humungo Bomb`,
                            description: `Increase your Attack Power by 125/130/135/140/150% (max 2 stacks), then damage the target (60/70/80/90/100% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Humungo Bomb`,
                            description: `Increase your Attack Power by 125% (max 2 stacks), then damage the target (60% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Humungo Bomb`,
                            description: `Increase your Attack Power by 130% (max 2 stacks), then damage the target (70% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Humungo Bomb`,
                            description: `Increase your Attack Power by 135% (max 2 stacks), then damage the target (80% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Humungo Bomb`,
                            description: `Increase your Attack Power by 140% (max 2 stacks), then damage the target (90% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Humungo Bomb`,
                            description: `Increase your Attack Power by 150% (max 2 stacks), then damage the target (100% Attack Power). CD: 4`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Mind Sensor Cannon`,
                            description: `On Attack, damage the target 4 times (25% Attack Power).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `全域殲滅モード・起動`,
                            description: `自分の攻撃力を125/130/135/140/150%増加させ(最高2スタック)、60/70/80/90/100%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `全域殲滅モード・起動`,
                            description: `自分の攻撃力を125%増加させ(最高2スタック)、60%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `全域殲滅モード・起動`,
                            description: `自分の攻撃力を130%増加させ(最高2スタック)、70%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `全域殲滅モード・起動`,
                            description: `自分の攻撃力を135%増加させ(最高2スタック)、80%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `全域殲滅モード・起動`,
                            description: `自分の攻撃力を140%増加させ(最高2スタック)、90%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `全域殲滅モード・起動`,
                            description: `自分の攻撃力を150%増加させ(最高2スタック)、100%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `マインドセンサー機関砲・起動`,
                            description: `攻撃時「25%の攻撃力でターゲットに4回攻撃する」を誘発する`
                        },
                    },
                    [Locale.kr]: {}
                }
            }
        }
    },
]