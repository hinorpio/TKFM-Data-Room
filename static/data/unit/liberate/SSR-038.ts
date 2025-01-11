import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10081: LiberateSkillSet[] = [
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
                            name: `兵裝超頻。戀愛之心`,
                            description: `使自身與我方全體水屬性角色造成傷害增加30/35/40/45/50%(1回合)，再以自身攻擊力194/222.5/251.5/280/309%對目標造成傷害2次，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `兵裝超頻。戀愛之心`,
                            description: `使自身與我方全體水屬性角色造成傷害增加30%(1回合)，再以自身攻擊力194%對目標造成傷害2次，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `兵裝超頻。戀愛之心`,
                            description: `使自身與我方全體水屬性角色造成傷害增加35%(1回合)，再以自身攻擊力222.5%對目標造成傷害2次，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `兵裝超頻。戀愛之心`,
                            description: `使自身與我方全體水屬性角色造成傷害增加40%(1回合)，再以自身攻擊力251.5%對目標造成傷害2次，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `兵裝超頻。戀愛之心`,
                            description: `使自身與我方全體水屬性角色造成傷害增加45%(1回合)，再以自身攻擊力280%對目標造成傷害2次，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `兵裝超頻。戀愛之心`,
                            description: `使自身與我方全體水屬性角色造成傷害增加50%(1回合)，再以自身攻擊力309%對目標造成傷害2次，CD: 4`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `兵裝共鳴 ─ 少女心`,
                            description: `每經過1回合，觸發「使自身與我方全體水屬性角色必殺技傷害增加9%(最多11層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `兵装超频。恋爱之心`,
                            description: `使自身与我方全体水属性角色造成伤害增加30/35/40/45/50%(1回合)，再以自身攻击力194/222.5/251.5/280/309%对目标造成伤害2次，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `兵装超频。恋爱之心`,
                            description: `使自身与我方全体水属性角色造成伤害增加30%(1回合)，再以自身攻击力194%对目标造成伤害2次，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `兵装超频。恋爱之心`,
                            description: `使自身与我方全体水属性角色造成伤害增加35%(1回合)，再以自身攻击力222.5%对目标造成伤害2次，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `兵装超频。恋爱之心`,
                            description: `使自身与我方全体水属性角色造成伤害增加40%(1回合)，再以自身攻击力251.5%对目标造成伤害2次，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `兵装超频。恋爱之心`,
                            description: `使自身与我方全体水属性角色造成伤害增加45%(1回合)，再以自身攻击力280%对目标造成伤害2次，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `兵装超频。恋爱之心`,
                            description: `使自身与我方全体水属性角色造成伤害增加50%(1回合)，再以自身攻击力309%对目标造成伤害2次，CD: 4`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `兵装共鸣 ─ 少女心`,
                            description: `每经过1回合，触发「使自身与我方全体水属性角色必杀技伤害增加9%(最多11层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Militant Love`,
                            description: `Increase all Water allies' and your Damage Output by 30/35/40/45/50% for 1 turn, then damage the target 2 times (194/222.5/251.5/280/309% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Militant Love`,
                            description: `Increase all Water allies' and your Damage Output by 30% for 1 turn, then damage the target 2 times (194% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Militant Love`,
                            description: `Increase all Water allies' and your Damage Output by 35% for 1 turn, then damage the target 2 times (222.5% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Militant Love`,
                            description: `Increase all Water allies' and your Damage Output by 40% for 1 turn, then damage the target 2 times (251.5% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Militant Love`,
                            description: `Increase all Water allies' and your Damage Output by 45% for 1 turn, then damage the target 2 times (280% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Militant Love`,
                            description: `Increase all Water allies' and your Damage Output by 50% for 1 turn, then damage the target 2 times (309% Attack Power). CD: 4`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Mecha Matromony`,
                            description: `After every turn, trigger the following effect: Increase all Water allies' and your Ultimate Skill Power by 9% (max 11 stacks).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `兵装OC・愛の心`,
                            description: `自分と味方全体の水属性キャラの与えるダメージを30/35/40/45/50%増加させ(1ターン)、自分の194/222.5/251.5/280/309%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `兵装OC・愛の心`,
                            description: `自分と味方全体の水属性キャラの与えるダメージを30%増加させ(1ターン)、自分の194%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `兵装OC・愛の心`,
                            description: `自分と味方全体の水属性キャラの与えるダメージを35%増加させ(1ターン)、自分の222.5%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `兵装OC・愛の心`,
                            description: `自分と味方全体の水属性キャラの与えるダメージを40%増加させ(1ターン)、自分の251.5%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `兵装OC・愛の心`,
                            description: `自分と味方全体の水属性キャラの与えるダメージを45%増加させ(1ターン)、自分の280%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `兵装OC・愛の心`,
                            description: `自分と味方全体の水属性キャラの与えるダメージを50%増加させ(1ターン)、自分の309%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `兵装共鳴-乙女心`,
                            description: `1ターン毎に「自分と味方全体の水属性キャラの必殺技ダメージを9%増加させる(最高11スタック)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `암즈 오버클럭・연정`,
                            description: `자신과 수속성 아군 캐릭터의 가하는 데미지 30/35/40/45/50% 증가(1턴), 다시 자신의 공격 데미지의 194/222.5/251.5/280/309%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `암즈 오버클럭・연정`,
                            description: `자신과 수속성 아군 캐릭터의 가하는 데미지 30% 증가(1턴), 다시 자신의 공격 데미지의 194%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `암즈 오버클럭・연정`,
                            description: `자신과 수속성 아군 캐릭터의 가하는 데미지 35% 증가(1턴), 다시 자신의 공격 데미지의 222.5%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `암즈 오버클럭・연정`,
                            description: `자신과 수속성 아군 캐릭터의 가하는 데미지 40% 증가(1턴), 다시 자신의 공격 데미지의 251.5%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `암즈 오버클럭・연정`,
                            description: `자신과 수속성 아군 캐릭터의 가하는 데미지 45% 증가(1턴), 다시 자신의 공격 데미지의 280%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `암즈 오버클럭・연정`,
                            description: `자신과 수속성 아군 캐릭터의 가하는 데미지 50% 증가(1턴), 다시 자신의 공격 데미지의 309%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `암즈 공명 - 소녀의 마음`,
                            description: `1턴이 지날 때마다 「자신과 수속성 아군 캐릭터의 궁극기 데미지 9% 증가(최대 11중첩)」 트리거`
                        },
                    }
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
                            name: `完全體數據`,
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,491,186\n最大攻擊力：987,981`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,491,186\n最大攻击力：987,981`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,491,186\nMax ATK：987,981`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,491,186\nATK最大値：987,981`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,491,186\nMax ATK：987,981`
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
                            name: `此身應為後宮之主`,
                            description: `我方全體最大HP增加40%\n普攻時，觸發「以自身攻擊力50%對敵方全體造成傷害」\n使我方全體水、光屬性角色獲得「第1回合時，觸發『《高貴婚紗》』」\n\n《高貴婚紗》\n攻擊力增加100%(50回合)\n必殺時，觸發「使目標受到觸發技傷害增加20%(最多5層)」(50回合)\n攻擊時，觸發「使目標受到必殺傷害增加2%(最多60層)」(50回合)\n攻擊時，觸發「使目標受到傷害增加1%(最多60層)」(50回合)\n普攻時，觸發「使目標受到水屬性傷害增加5%(最多7層)」(50回合)\n普攻時，觸發「使目標受到光屬性傷害增加5%(最多7層)」(50回合)`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `婚紗兵裝輔助AI`,
                            description: `自身與我方全體水屬性角色獲得「必殺時，觸發『以自身攻擊力120%對目標造成傷害』」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `試作兵裝婚紗Z型`,
                            description: `普攻時，觸發「使目標受到水屬性傷害增加5%(最多7層)」\n普攻時，觸發「使目標受到光屬性傷害增加5%(最多7層)」\n必殺時，觸發『以自身攻擊力150%對目標造成傷害』」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `此身应为後宫之主`,
                            description: `我方全体最大HP增加40%\n普攻时，触发「以自身攻击力50%对敌方全体造成伤害」\n使我方全体水丶光属性角色获得「第1回合时，触发『《高贵婚纱》』」\n\n《高贵婚纱》\n攻击力增加100%(50回合)\n必杀时，触发「使目标受到触发技伤害增加20%(最多5层)」(50回合)\n攻击时，触发「使目标受到必杀伤害增加2%(最多60层)」(50回合)\n攻击时，触发「使目标受到伤害增加1%(最多60层)」(50回合)\n普攻时，触发「使目标受到水属性伤害增加5%(最多7层)」(50回合)\n普攻时，触发「使目标受到光属性伤害增加5%(最多7层)」(50回合)`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `婚纱兵装辅助AI`,
                            description: `自身与我方全体水属性角色获得「必杀时，触发『以自身攻击力120%对目标造成伤害』」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `试作兵装婚纱Z型`,
                            description: `普攻时，触发「使目标受到水属性伤害增加5%(最多7层)」\n普攻时，触发「使目标受到光属性伤害增加5%(最多7层)」\n必杀时，触发『以自身攻击力150%对目标造成伤害』」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Harem Honcho`,
                            description: `Increase the party's max HP by 40%.\nOn Basic Attack, trigger the following effect: Damage all enemies (50% Attack Power).\nAll Water and Light allies gain the following effect: On the 1st turn, trigger "Yes to the Dress".\n\n"Yes to the Dress"\nIncrease Attack Power by 100% for 50 turns.\nOn Ultimate Skill, trigger the following effect: Increase the target's Damage Taken from trigger skills by 20% for 50 turns (max 5 stacks).\nOn Attack, trigger the following effect: Increase the target's Damage Taken from Ultimate Skills by 2% for 50 turns (max 60 stacks).\nOn Attack, trigger the following effect: Increase the target's Damage Taken by 1% for 50 turns (max 60 stacks).\nOn Basic Attack, trigger the following effect: Increase the target's Damage Taken from Water attacks by 5% for 50 turns (max 7 stacks).\nOn Basic Attack, trigger the following effect: Increase the target's Damage Taken from Light attacks by 5% for 50 turns (max 7 stacks).`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Wedding AI`,
                            description: `You and all Water allies gain the following effect: On Ultimate Skill, trigger the following effect: Damage the target (120% Attack Power).`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Z Type`,
                            description: `On Basic Attack, trigger the following effect: Increase the target's Damage Taken from Water attacks by 5% (max 7 stacks).\nOn Basic Attack, trigger the following effect: Increase the target's Damage Taken from Light attacks by 5% (max 7 stacks).\nOn Ultimate Skill, trigger the following effect: Damage the target (150% Attack Power).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `私こそが後宮の主`,
                            description: `味方全体の最大HPが40%増加する\n通常攻撃時「自分の50%の攻撃力で敵全体にダメージを与える」を誘発する\n味方の水・光属性キャラが「1ターン目に≪高貴なウェディングドレス≫を誘発する」を獲得する\n\n≪高貴なウェディングドレス≫\n自分の攻撃力を100%増加させる(50ターン)\n必殺技攻撃時「ターゲットの受ける誘発スキルダメージを20%増加させる(最高5スタック)」を誘発する(50ターン)\n攻撃時「ターゲットの受ける必殺技ダメージを2%増加させる(最高60スタック)」を誘発する(50ターン)\n攻撃時「ターゲットが受けるダメージを1%増加させる(最高60スタック)」を誘発する(50ターン)\n通常攻撃時「ターゲットが受ける水属性ダメージを5%増加させる(最高7スタック)」を誘発する(50ターン)\n通常攻撃時「ターゲットが受ける光属性ダメージを5%増加させる(最高7スタック)」を誘発する(50ターン)`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `ドレス兵装サポートAI`,
                            description: `自分と味方全体の水属性キャラが「必殺技攻撃時『自分の120%の攻撃力でターゲットにダメージを与える』を誘発する」を獲得する`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `試作兵装ドレスZ型`,
                            description: `通常攻撃時「ターゲットが受ける水属性ダメージを5%増加させる(最高7スタック)」を誘発する\n通常攻撃時「ターゲットが受ける光属性ダメージを5%増加させる(最高7スタック)」を誘発する\n必殺技攻撃時「自分の150%の攻撃力でターゲットにダメージを与える」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `진정한 후궁 최강자`,
                            description: `아군 전체의 최대 HP 40% 증가\n일반 공격 시 「자신의 공격 데미지의 50%만큼 적 전체에게 데미지」 트리거\n수속성, 광속성 아군은 「첫 번째 턴 시작 시 『《고귀한 웨딩》』트리거」 획득\n\n《고귀한 웨딩》\n공격 데미지 100% 증가(50턴)\n궁극기 발동 시 「타깃이 받는 트리거 스킬 데미지 20% 증가(최대 5중첩)」 트리거(50턴)\n공격 시 「타깃이 받는 궁극기 데미지 2% 증가(최대 60중첩)」 트리거(50턴)\n공격 시 「타깃이 받는 데미지 1% 증가(최대 60중첩)」 트리거(50턴)\n일반 공격 시 「타깃이 받는 수속성 데미지 5% 증가(최대 7중첩)」 트리거(50턴)\n일반 공격 시 「타깃이 받는 광속성 데미지 5% 증가(최대 7중첩)」 트리거(50턴)`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `웨딩 암즈 서포트 AI`,
                            description: `자신과 수속성 아군 캐릭터는 「궁극기 발동 시 『자신의 공격 데미지의 120%만큼 타깃에게 데미지』트리거」 획득`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `프로토타입 Z`,
                            description: `일반 공격 시 「타깃이 받는 수속성 데미지 5% 증가(최대 7중첩)」 트리거\n일반 공격 시 「타깃이 받는 광속성 데미지 5% 증가(최대 7중첩)」 트리거\n궁극기 발동 시 「자신의 공격 데미지의 150%만큼 타깃에게 데미지」 트리거`
                        },
                    }
                }
            }
        }
    },
]