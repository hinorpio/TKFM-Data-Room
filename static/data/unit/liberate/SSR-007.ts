import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10017: LiberateSkillSet[] = [
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
                            name: `烈日祭典盛宴`,
                            description: `使自身造成傷害增加25/30/35/35/35%(3/3/3/4/4回合)，並以自身攻擊力165/188/211/234/257%對目標造成傷害，再以攻擊力165/188/211/234/257%對敵方全體造成傷害，CD: 4 [5絆 CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成傷害增加25%(3回合)，並以自身攻擊力165%對目標造成傷害，再以攻擊力165%對敵方全體造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成傷害增加30%(3回合)，並以自身攻擊力188%對目標造成傷害，再以攻擊力188%對敵方全體造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成傷害增加35%(3回合)，並以自身攻擊力211%對目標造成傷害，再以攻擊力211%對敵方全體造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成傷害增加35%(4回合)，並以自身攻擊力234%對目標造成傷害，再以攻擊力234%對敵方全體造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成傷害增加35%(4回合)，並以自身攻擊力257%對目標造成傷害，再以攻擊力257%對敵方全體造成傷害，CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `想賺錢就得有行動力`,
                            description: `攻擊力增加40%`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成伤害增加25/30/35/35/35%(3/3/3/4/4回合)，并以自身攻击力165/188/211/234/257%对目标造成伤害，再以攻击力165/188/211/234/257%对敌方全体造成伤害，CD: 4 [5绊 CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成伤害增加25%(3回合)，并以自身攻击力165%对目标造成伤害，再以攻击力165%对敌方全体造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成伤害增加30%(3回合)，并以自身攻击力188%对目标造成伤害，再以攻击力188%对敌方全体造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成伤害增加35%(3回合)，并以自身攻击力211%对目标造成伤害，再以攻击力211%对敌方全体造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成伤害增加35%(4回合)，并以自身攻击力234%对目标造成伤害，再以攻击力234%对敌方全体造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `烈日祭典盛宴`,
                            description: `使自身造成伤害增加35%(4回合)，并以自身攻击力257%对目标造成伤害，再以攻击力257%对敌方全体造成伤害，CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `想赚钱就得有行动力`,
                            description: `攻击力增加40%`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Summer Ceremony`,
                            description: `Increase your Damage Output by 25/30/35/35/35% for 3/3/3/4/4 turns and damage the target (165/188/211/234/257% Attack Power), then damage all enemies (165/188/211/234/257% Attack Power). (CD:4) [Bond 5: (CD: 3)]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Summer Ceremony`,
                            description: `Increase your Damage Output by 25% for 3 turns and damage the target (165% Attack Power), then damage all enemies (165% Attack Power). (CD:4)`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Summer Ceremony`,
                            description: `Increase your Damage Output by 30% for 3 turns and damage the target (188% Attack Power), then damage all enemies (188% Attack Power). (CD:4)`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Summer Ceremony`,
                            description: `Increase your Damage Output by 35% for 3 turns and damage the target (211% Attack Power), then damage all enemies (211% Attack Power). (CD:4)`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Summer Ceremony`,
                            description: `Increase your Damage Output by 35% for 4 turns and damage the target (234% Attack Power), then damage all enemies (234% Attack Power). (CD:4)`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Summer Ceremony`,
                            description: `Increase your Damage Output by 35% for 4 turns and damage the target (257% Attack Power), then damage all enemies (257% Attack Power). (CD:3)`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `No Easy Money`,
                            description: `Increase Attack Power by 40%`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `烈陽祭の盛宴`,
                            description: `自分の与えるダメージを25/30/35/35/35%増加させ(3/3/3/4/4ターン)、自分の165/188/211/234/257%の攻撃力でターゲットにダメージを与え、165/188/211/234/257%の攻撃力で敵全体にダメージを与える[CD:4] [Lv5: CD:3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `烈陽祭の盛宴`,
                            description: `自分の与えるダメージを25%増加させ(3ターン)、自分の165%の攻撃力でターゲットにダメージを与え、165%の攻撃力で敵全体にダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `烈陽祭の盛宴`,
                            description: `自分の与えるダメージを30%増加させ(3ターン)、自分の188%の攻撃力でターゲットにダメージを与え、188%の攻撃力で敵全体にダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `烈陽祭の盛宴`,
                            description: `自分の与えるダメージを35%増加させ(3ターン)、自分の211%の攻撃力でターゲットにダメージを与え、211%の攻撃力で敵全体にダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `烈陽祭の盛宴`,
                            description: `自分の与えるダメージを35%増加させ(4ターン)、自分の234%の攻撃力でターゲットにダメージを与え、234%の攻撃力で敵全体にダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `烈陽祭の盛宴`,
                            description: `自分の与えるダメージを35%増加させ(4ターン)、自分の257%の攻撃力でターゲットにダメージを与え、257%の攻撃力で敵全体にダメージを与える[CD:3]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `お金稼ぎはまず行動`,
                            description: `自分の攻撃力を40%増加させる`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `태양제의 성찬`,
                            description: `자신이 가하는 데미지 25/30/35/35/35% 증가(3/3/3/4/4턴), 자신의 공격 데미지의 165/188/211/234/257%만큼 타깃에게 데미지, 다시 공격 데미지의 165/188/211/234/257%만큼 적 전체에게 데미지 [CD: 4] [Lv5: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `태양제의 성찬`,
                            description: `자신이 가하는 데미지 25% 증가(3턴), 자신의 공격 데미지의 165%만큼 타깃에게 데미지, 다시 공격 데미지의 165%만큼 적 전체에게 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `태양제의 성찬`,
                            description: `자신이 가하는 데미지 30% 증가(3턴), 자신의 공격 데미지의 188%만큼 타깃에게 데미지, 다시 공격 데미지의 188%만큼 적 전체에게 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `태양제의 성찬`,
                            description: `자신이 가하는 데미지 35% 증가(3턴), 자신의 공격 데미지의 211%만큼 타깃에게 데미지, 다시 공격 데미지의 211%만큼 적 전체에게 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `태양제의 성찬`,
                            description: `자신이 가하는 데미지 35% 증가(4턴), 자신의 공격 데미지의 234%만큼 타깃에게 데미지, 다시 공격 데미지의 234%만큼 적 전체에게 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `태양제의 성찬`,
                            description: `자신이 가하는 데미지 35% 증가(4턴), 자신의 공격 데미지의 257%만큼 타깃에게 데미지, 다시 공격 데미지의 257%만큼 적 전체에게 데미지 [CD: 3]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `돈은 행동력으로부터`,
                            description: `자신의 공격 데미지 40% 증가`
                        },
                    }
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
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,367,688\n最大攻擊力：929,399`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,367,688\n最大攻击力：929,399`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,367,688\nMax ATK：929,399`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,367,688\nATK最大値：929,399`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,367,688\nMax ATK：929,399`
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
                            name: `慶典魔王的氣勢`,
                            description: `我方全體最大HP增加30%\n我方全體攻擊力增加45%\n自身普攻傷害增加150%\n每Wave的第1回合時，觸發「《共襄盛舉》」\n\n《共襄盛舉》\n清除自身《徹夜狂歡》所給予的增益效果\n使敵方全體獲得「被攻擊時，觸發『《徹夜狂歡》』(50回合)(觸發1次後清除)」\n\n《徹夜狂歡》\n使自身以外我方全體受到【祭典狂歡 巴爾】傷害增加20%(最多4層)\n使敵方【祭典狂歡 巴爾】攻擊力增加20%(最多5層)\n使敵方【祭典狂歡 巴爾】獲得「普攻時，追加『以自身攻擊力30%對敵方全體造成傷害』(50回合)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `痛感帶來愉悅`,
                            description: `普攻傷害增加80%`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `最高境界是自攻自受`,
                            description: `每回合以自身最大HP10%對自身進行治療\n第1回合時，觸發「使自身當前必殺技CD減少4回合」\n必殺時，觸發「《加碼買進》」\n\n《加碼買進》\n使自身獲得「普攻時，追加『以自身攻擊力130%對目標造成傷害，再以自身攻擊力20%對敵方全體造成傷害』(4回合)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `庆典魔王的气势`,
                            description: `我方全体最大HP增加30%\n我方全体攻击力增加45%\n自身普攻伤害增加150%\n每Wave的第1回合时，触发「《共襄盛举》」\n\n《共襄盛举》\n清除自身《彻夜狂欢》所给予的增益效果\n使敌方全体获得「被攻击时，触发『《彻夜狂欢》』(50回合)(触发1次後清除)」\n\n《彻夜狂欢》\n使自身以外我方全体受到【祭典狂欢 巴尔】伤害增加20%(最多4层)\n使敌方【祭典狂欢 巴尔】攻击力增加20%(最多5层)\n使敌方【祭典狂欢 巴尔】获得「普攻时，追加『以自身攻击力30%对敌方全体造成伤害』(50回合)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `痛感带来愉悦`,
                            description: `普攻伤害增加80%`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `最高境界是自攻自受`,
                            description: `每回合以自身最大HP10%对自身进行治疗\n第1回合时，触发「使自身当前必杀技CD减少4回合」\n必杀时，触发「《加码买进》」\n\n《加码买进》\n使自身获得「普攻时，追加『以自身攻击力130%对目标造成伤害，再以自身攻击力20%对敌方全体造成伤害』(4回合)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Festival Momentum`,
                            description: `Increase the party's max HP by 30%.\nIncrease the party's Attack Power by 45%.\nIncrease your Basic Attack Power by 150%.\nOn the 1st turn of each wave, trigger "In This Together".\n\n"In This Together"\nRemove all "Party Hardy" buffs from yourself.\nAll enemies gain the following effect: When attacked, trigger "Party Hardy" for 50 turns (removes after triggering once).\n\n"Party Hardy"\nOther allies receive 20% more damage from Festive Ba'al (max 4 stacks).\nIncrease enemy Festive Ba'al's Attack Power by 20% (max 5 stacks).\nEnemy Festive Ba'al gains the following effect: On Basic Attack, deal additional damage to all enemies (30% Attack Power) for 50 turns.`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Pain is Pleasure`,
                            description: `Increase Normal Attack Power by 80%.`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Please Yourself`,
                            description: `Each turn, heal yourself for 10% of your max HP.\nOn the first turn, trigger the following effect: Decrease your current Ultimate Skill CD by 4 turns.\nOn Ultimate Skill, trigger "Bonus Purchase".\n\n"Bonus Purchase"\nGain yourself the following effect: On Basic Attack, damage the target (130% Attack Power), then damage all enemies for 4 turns (20% Attack Power).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `お祭り魔王の威勢`,
                            description: `味方全体の最大HPが30%増加する\n味方全体の攻撃力が45%増加する\n自分の通常攻撃ダメージが150%増加する\n各Waveの1ターン目に《盛大な祭り》を誘発する\n\n《盛大な祭り》\n自分の《徹夜の狂宴》のバフを消す\n敵全体が「攻撃を受けた時《徹夜の狂宴》を誘発する(50ターン)」を獲得する(1回誘発後に解除される)\n\n《徹夜の狂宴》\n自分以外の味方全体が受ける【祭りのバル】のダメージを20%増加させる(最高4スタック)\n敵の【祭りのバル】の攻撃力を20%増加させる(最高5スタック)\n敵の【祭りのバル】が「通常攻撃時『自分の30%の攻撃力で敵全体にダメージを与える』を追加する(50ターン)」を獲得する`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `痛みの快楽`,
                            description: `自分の通常攻撃ダメージを80%増加させる`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `自分で受け責め`,
                            description: `毎ターン自分の最大HPの10%分自分に治療を行う\n1ターン目に「自分の現在の必殺技CDを4ターン減少させる」を誘発する\n必殺技攻撃時、《追加買付》を誘発する\n\n《追加買付》\n自分が「通常攻撃時『130%の攻撃力でターゲットにダメージを与え、20%の攻撃力で敵全体にダメージを与える』を追加する(4ターン)」を獲得する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `축제 마왕의 기세`,
                            description: `아군 전체의 최대 HP 30% 증가\n아군 전체의 공격 데미지 45% 증가\n자신의 일반 공격 데미지 150% 증가\n매 Wave의 첫 번째 턴에서 「《성대한 행사》」트리거\n\n《성대한 행사》\n자신의 《광란의 올나잇》이 부여한 모든 버프 효과 제거\n적 전체는 「피격 시『《광란의 올나잇》』트리거(50턴)(1회 트리거 후 제거)」획득\n\n《광란의 올나잇》\n자신 이외의 아군은 【광란의 페스티벌 바알】에게 받는 데미지 20% 증가(최대 4중첩)\n적 【광란의 페스티벌 바알】의 공격 데미지 20% 증가(최대 5중첩)\n적 【광란의 페스티벌 바알】은 「일반 공격 시 『자신의 공격 데미지의 30%만큼 적 전체에게 데미지』추가(50턴)」획득`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `통증으로 인한 쾌감`,
                            description: `자신의 일반 공격 데미지 80% 증가`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `자업자득`,
                            description: `매턴 자신의 최대 HP 10%만큼 자신을 치유\n첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 4턴 감소」트리거\n궁극기 발동 시 「《고가 매입》」트리거\n\n《고가 매입》\n자신은 「일반 공격 시 『공격 데미지의 130%만큼 타깃에게 데미지, 다시 공격 데미지의 20%만큼 적 전체에게 데미지』추가(4턴)」획득`
                        },
                    }
                }
            }
        }
    },
]