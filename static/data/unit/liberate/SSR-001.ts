import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10001: LiberateSkillSet[] = [
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
                            name: `烈焰攻心`,
                            description: `使自身攻擊力增加25/25/25/35/35%(3回合)，造成傷害增加5/5/10/10/10%(3回合)，再以攻擊力393/448/503/503/503%對目標造成傷害，CD: 4 [5絆: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `烈焰攻心`,
                            description: `使自身攻擊力增加25%(3回合)，造成傷害增加5%(3回合)，再以攻擊力393%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `烈焰攻心`,
                            description: `使自身攻擊力增加25%(3回合)，造成傷害增加5%(3回合)，再以攻擊力448%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `烈焰攻心`,
                            description: `使自身攻擊力增加25%(3回合)，造成傷害增加10%(3回合)，再以攻擊力503%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `烈焰攻心`,
                            description: `使自身攻擊力增加35%(3回合)，造成傷害增加10%(3回合)，再以攻擊力503%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `烈焰攻心`,
                            description: `使自身攻擊力增加35%(3回合)，造成傷害增加10%(3回合)，再以攻擊力503%對目標造成傷害，CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `魔王肉體`,
                            description: `使自身普攻傷害增加25%\n使自身必殺技傷害增加15%`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `烈焰攻心`,
                            description: `使自身攻击力增加25/25/25/35/35%(3回合)，造成伤害增加5/5/10/10/10%(3回合)，再以攻击力393/448/503/503/503%对目标造成伤害，CD: 4 [5绊: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `烈焰攻心`,
                            description: `使自身攻击力增加25%(3回合)，造成伤害增加5%(3回合)，再以攻击力393%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `烈焰攻心`,
                            description: `使自身攻击力增加25%(3回合)，造成伤害增加5%(3回合)，再以攻击力448%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `烈焰攻心`,
                            description: `使自身攻击力增加25%(3回合)，造成伤害增加10%(3回合)，再以攻击力503%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `烈焰攻心`,
                            description: `使自身攻击力增加35%(3回合)，造成伤害增加10%(3回合)，再以攻击力503%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `烈焰攻心`,
                            description: `使自身攻击力增加35%(3回合)，造成伤害增加10%(3回合)，再以攻击力503%对目标造成伤害，CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `魔王肉体`,
                            description: `使自身普攻伤害增加25%\n使自身必杀技伤害增加15%`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Psychological Flames`,
                            description: `Increase your Attack Power by 25/25/25/35/35% for 3 turns. Increase your Damage Output by 5/5/10/10/10% for 3 turns. Damage the target (393/448/503/503/503% Attack Power). CD: 4 [Bond 5: CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Psychological Flames`,
                            description: `Increase your Attack Power by 25% for 3 turns. Increase your Damage Output by 5% for 3 turns. Damage the target (393% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Psychological Flames`,
                            description: `Increase your Attack Power by 25% for 3 turns. Increase your Damage Output by 5% for 3 turns. Damage the target (448% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Psychological Flames`,
                            description: `Increase your Attack Power by 25% for 3 turns. Increase your Damage Output by 10% for 3 turns. Damage the target (503% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Psychological Flames`,
                            description: `Increase your Attack Power by 35% for 3 turns. Increase your Damage Output by 10% for 3 turns. Damage the target (503% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Psychological Flames`,
                            description: `Increase your Attack Power by 35% for 3 turns. Increase your Damage Output by 10% for 3 turns. Damage the target (503% Attack Power). CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Archdemon Physique`,
                            description: `Increase your Basic Attack Damage by 25%.\nIncrease your Ultimate Skill Damage by 15%.`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `炎の精神攻撃`,
                            description: `自分の攻撃力を25/25/25/35/35%増加させ(3ターン)、与えるダメージを5/5/10/10/10%増加させ(3ターン)、393/448/503/503/503%の攻撃力でターゲットにダメージを与える[CD:4] [Lv5: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `炎の精神攻撃`,
                            description: `自分の攻撃力を25%増加させ(3ターン)、与えるダメージを5%増加させ(3ターン)、393%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `炎の精神攻撃`,
                            description: `自分の攻撃力を25%増加させ(3ターン)、与えるダメージを5%増加させ(3ターン)、448%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `炎の精神攻撃`,
                            description: `自分の攻撃力を25%増加させ(3ターン)、与えるダメージを10%増加させ(3ターン)、503%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `炎の精神攻撃`,
                            description: `自分の攻撃力を35%増加させ(3ターン)、与えるダメージを10%増加させ(3ターン)、503%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `炎の精神攻撃`,
                            description: `自分の攻撃力を35%増加させ(3ターン)、与えるダメージを10%増加させ(3ターン)、503%の攻撃力でターゲットにダメージを与える[CD:3]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `魔王の肉体`,
                            description: `自分の通常攻撃ダメージを25%増加させる\n自分の必殺技ダメージを15%増加させる`
                        },
                    },
                    [Locale.kr]: {}
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
                    [Locale.tc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全體數據`,
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,440,520\nA最大攻擊力：910,400`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,440,520\nA最大攻击力：910,400`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,440,520\nAMax ATK：910,400`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,440,520\nATK最大値：910,400`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,440,520\nAMax ATK：910,400`
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
                            name: `魔王巴爾之狡詐`,
                            description: `我方全體最大HP20%\n我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n自身攻擊力增加125%\n自身必殺技傷害增加25%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `不為人知的性格`,
                            description: `必殺時，觸發「使自身攻擊力增加15%(最多2層)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `巴爾的惡作劇`,
                            description: `第1回合開始時，觸發「使自身當前必殺技CD減少1回合」\n必殺時，觸發「使自身當前必殺技CD減少1回合、目標當前必殺技CD增加2回合」\n必殺時，觸發「使目標受到火屬性傷害增加10%(最多2層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `魔王巴尔之狡诈`,
                            description: `我方全体最大HP20%\n我方全体攻击力增加40%\n我方全体造成伤害增加20%\n自身攻击力增加125%\n自身必杀技伤害增加25%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `不为人知的性格`,
                            description: `必杀时，触发「使自身攻击力增加15%(最多2层)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `巴尔的恶作剧`,
                            description: `第1回合开始时，触发「使自身当前必杀技CD减少1回合」\n必杀时，触发「使自身当前必杀技CD减少1回合丶目标当前必杀技CD增加2回合」\n必杀时，触发「使目标受到火属性伤害增加10%(最多2层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Baal's Cunning`,
                            description: `Increase the party's Max HP by 20%.\nIncrease the party's Attack Power by 40%.\nIncrease the party's Damage Output by 20%.\nIncrease your Attack Power by 125%.\nIncrease your Ultimate Skill Damage by 25%.`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Guilty Pleasure`,
                            description: `On Ultimate Skill, increase your Attack Power by 15% (Max 2 Stacks).`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Baal's Prank`,
                            description: `On your first turn, reduce your current Ultimate Skill CD by 1 turn.\nOn Ultimate Skill, increase your current Ultimate Skill CD by 1 turn, and increase the target's current Ultimate Skill CD by 2 turns.\nOn Ultimate Skill, increase the target's Damage Taken from Fire attack by 10% (Max 2 Stacks).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `魔王バルの悪知恵`,
                            description: `味方全体の最大HPを20％増加させる\n味方全体の攻撃力を40％増加させる\n味方全体の与えるダメージを20％増加させる\n自分の攻撃力を125%増加させる\n自分の必殺攻撃ダメージを25%増加させる`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `捉えどころの無い性格`,
                            description: `必殺技攻撃時「自分の攻撃力を15%増加させる(最高2スタック)」を誘発する`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `バルのイタズラ`,
                            description: `1ターン目開始時「自分の現在の必殺技CDを1ターン減少させる」を誘発する\n必殺技攻撃時「自分の現在の必殺技CDを1ターン減少させ、ターゲットの必殺技CDを2ターン増加させる」を誘発する\n必殺技攻撃時「ターゲットが火属性から受けるダメージを10%増加させる(最高2スタック)」を誘発する`
                        },
                    },
                    [Locale.kr]: {}
                }
            }
        }
    },
]