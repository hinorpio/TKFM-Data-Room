import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10007: LiberateSkillSet[] = [
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
                            name: `大天使之怒`,
                            description: `以自身攻擊力330/376/422/468/514%對目標造成傷害，並以自身攻擊力399/458/518/578/638%每回合對目標造成傷害(1回合)，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `大天使之怒`,
                            description: `以自身攻擊力330%對目標造成傷害，並以自身攻擊力399%每回合對目標造成傷害(1回合)，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `大天使之怒`,
                            description: `以自身攻擊力376%對目標造成傷害，並以自身攻擊力458%每回合對目標造成傷害(1回合)，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `大天使之怒`,
                            description: `以自身攻擊力422%對目標造成傷害，並以自身攻擊力518%每回合對目標造成傷害(1回合)，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `大天使之怒`,
                            description: `以自身攻擊力468%對目標造成傷害，並以自身攻擊力578%每回合對目標造成傷害(1回合)，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `大天使之怒`,
                            description: `以自身攻擊力514%對目標造成傷害，並以自身攻擊力638%每回合對目標造成傷害(1回合)，CD: 4`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `光之懲戒`,
                            description: `普攻時，觸發「以自身攻擊力130%每回合對目標造成傷害(1回合)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `天使的祝福`,
                            description: `第一回合時，觸發 「《天使的祝福-聖罰》」\n第一回合時，觸發 「《天使的祝福-斷裁》」\n第一回合時，觸發 「《天使的祝福-定罪》」\n\n《天使的祝福-聖罰》\n我方全體光屬性成員行動時，觸發「使我方全體攻擊力增加10%(50回合)」(1回合)\n\n《天使的祝福-斷裁》\n我方全體火、風屬性成員行動時，觸發「使我方全體普攻傷害增加20%(50回合)」(1回合)\n\n《天使的祝福-定罪》\n我方全體水、闇屬性成員行動時，觸發「使我方全體必殺技傷害增加10%(50回合)」(1回合)`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `大天使之怒`,
                            description: `以自身攻击力330/376/422/468/514%对目标造成伤害，并以自身攻击力399/458/518/578/638%每回合对目标造成伤害(1回合)，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `大天使之怒`,
                            description: `以自身攻击力330%对目标造成伤害，并以自身攻击力399%每回合对目标造成伤害(1回合)，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `大天使之怒`,
                            description: `以自身攻击力376%对目标造成伤害，并以自身攻击力458%每回合对目标造成伤害(1回合)，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `大天使之怒`,
                            description: `以自身攻击力422%对目标造成伤害，并以自身攻击力518%每回合对目标造成伤害(1回合)，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `大天使之怒`,
                            description: `以自身攻击力468%对目标造成伤害，并以自身攻击力578%每回合对目标造成伤害(1回合)，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `大天使之怒`,
                            description: `以自身攻击力514%对目标造成伤害，并以自身攻击力638%每回合对目标造成伤害(1回合)，CD: 4`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `光之惩戒`,
                            description: `普攻时，触发「以自身攻击力130%每回合对目标造成伤害(1回合)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `天使的祝福`,
                            description: `第一回合时，触发 「《天使的祝福-圣罚》」\n第一回合时，触发 「《天使的祝福-断裁》」\n第一回合时，触发 「《天使的祝福-定罪》」\n\n《天使的祝福-圣罚》\n我方全体光属性成员行动时，触发「使我方全体攻击力增加10%(50回合)」(1回合)\n\n《天使的祝福-断裁》\n我方全体火丶风属性成员行动时，触发「使我方全体普攻伤害增加20%(50回合)」(1回合)\n\n《天使的祝福-定罪》\n我方全体水丶闇属性成员行动时，触发「使我方全体必杀技伤害增加10%(50回合)」(1回合)`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Raging Archangel`,
                            description: `Damage the target (330/376/422/468/514% Attack Power), then damage the target (399/458/518/578/638% Attack Power) every turn for 1 turn. CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Raging Archangel`,
                            description: `Damage the target (330% Attack Power), then damage the target (399% Attack Power) every turn for 1 turn. CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Raging Archangel`,
                            description: `Damage the target (376% Attack Power), then damage the target (458% Attack Power) every turn for 1 turn. CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Raging Archangel`,
                            description: `Damage the target (422% Attack Power), then damage the target (518% Attack Power) every turn for 1 turn. CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Raging Archangel`,
                            description: `Damage the target (468% Attack Power), then damage the target (578% Attack Power) every turn for 1 turn. CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Raging Archangel`,
                            description: `Damage the target (514% Attack Power), then damage the target (638% Attack Power) every turn for 1 turn. CD: 4`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Glorious Punishment`,
                            description: `On Basic Attack, damage the target (130% Attack Power) every turn for 1 turn.`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Angel's Blessing`,
                            description: `On the first turn, trigger "Archangel's Blessing - Holy Punishment".\nOn the first turn, trigger "Archangel's Blessing - Judgment".\nOn the first turn, trigger "Archangel's Blessing - Conviction".\n\n"Archangel's Blessing - Holy Punishment"\nWhen all Light allies perform an action, trigger the following effect: "increase the party's Attack Power by 10% for 50 turns" for 1 turn.\n\n"Archangel's Blessing - Judgment".\nWhen all Fire and Wind allies perform an action, trigger the following effect: "increase the party's Basic Attack Power by 20% for 50 turns" for 1 turn.\n\n"Archangel's Blessing - Conviction".\nWhen all Water and Dark allies perform an action, trigger the following effect: "increase the party's Ultimate Skill Power by 10% for 50 turns" for 1 turn.`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `大天使の怒り`,
                            description: `330/376/422/468/514%の攻撃力でターゲットにダメージを与え、毎ターン399/458/518/578/638%の攻撃力でターゲットにダメージを与える(1ターン)[CD:4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `大天使の怒り`,
                            description: `330%の攻撃力でターゲットにダメージを与え、毎ターン399%の攻撃力でターゲットにダメージを与える(1ターン)[CD:4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `大天使の怒り`,
                            description: `376%の攻撃力でターゲットにダメージを与え、毎ターン458%の攻撃力でターゲットにダメージを与える(1ターン)[CD:4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `大天使の怒り`,
                            description: `422%の攻撃力でターゲットにダメージを与え、毎ターン518%の攻撃力でターゲットにダメージを与える(1ターン)[CD:4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `大天使の怒り`,
                            description: `468%の攻撃力でターゲットにダメージを与え、毎ターン578%の攻撃力でターゲットにダメージを与える(1ターン)[CD:4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `大天使の怒り`,
                            description: `514%の攻撃力でターゲットにダメージを与え、毎ターン638%の攻撃力でターゲットにダメージを与える(1ターン)[CD:4]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `光の懲戒`,
                            description: `通常攻撃時「毎ターン自分の130%の攻撃力でターゲットにダメージを与える(1ターン)」を誘発する`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `天使の祝福`,
                            description: `1ターン目に「《天使の祝福 - 聖罰》」を誘発する\n1ターン目に「《天使の祝福 - 審判》」を誘発する\n1ターン目に「《天使の祝福 - 断罪》」を誘発する\n\n《天使の祝福 - 聖罰》\n味方の光属性キャラクター全体が行動した時「味方全体の攻撃力を10%増加させる(50ターン)」を誘発する(1ターン)\n\n《天使の祝福 - 審判》\n味方の火・風属性キャラクター全体が行動した時「味方全体の通常攻撃ダメージを20%増加させる(50ターン)」を誘発する(1ターン)\n\n《天使的祝福 - 断罪》\n味方の水・闇属性キャラクター全体が行動した時「味方全体の必殺技ダメージを10%増加させる(50ターン)」を誘発する(1ターン)`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `대천사의 진노`,
                            description: `자신의 공격 데미지의 330/376/422/468/514%만큼 타깃에게 데미지를 가하고 자신의 공격 데미지의 399/458/518/578/638%만큼 매턴 타깃에게 데미지(1턴) [CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `대천사의 진노`,
                            description: `자신의 공격 데미지의 330%만큼 타깃에게 데미지를 가하고 자신의 공격 데미지의 399%만큼 매턴 타깃에게 데미지(1턴) [CD: 4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `대천사의 진노`,
                            description: `자신의 공격 데미지의 376%만큼 타깃에게 데미지를 가하고 자신의 공격 데미지의 458%만큼 매턴 타깃에게 데미지(1턴) [CD: 4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `대천사의 진노`,
                            description: `자신의 공격 데미지의 422%만큼 타깃에게 데미지를 가하고 자신의 공격 데미지의 518%만큼 매턴 타깃에게 데미지(1턴) [CD: 4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `대천사의 진노`,
                            description: `자신의 공격 데미지의 468%만큼 타깃에게 데미지를 가하고 자신의 공격 데미지의 578%만큼 매턴 타깃에게 데미지(1턴) [CD: 4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `대천사의 진노`,
                            description: `자신의 공격 데미지의 514%만큼 타깃에게 데미지를 가하고 자신의 공격 데미지의 638%만큼 매턴 타깃에게 데미지(1턴) [CD: 4]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `빛의 징계`,
                            description: `일반 공격 시, 「자신의 공격 데미지의 130%만큼 매턴 타깃에게 데미지(1턴)」 발동`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `천사의 축복`,
                            description: `첫 번째 턴 시작 시, 「《대천사의 축복-성벌》」발동\n첫 번째 턴 시작 시, 「《대천사의 축복-심판》」발동\n첫 번째 턴 시작 시, 「《대천사의 축복-정죄》」발동\n\n《대천사의 축복-성벌》\n광속성 아군 행동 시, 「아군 전체의 공격 데미지 10% 증가(50턴)」발동(1턴)\n\n《대천사의 축복-심판》\n화속성, 풍속성 아군 행동 시, 「아군 전체의 일반 공격 데미지 20% 증가(50턴)」발동(1턴)\n\n《대천사의 축복-정죄》\n수속성, 암속성 아군 행동 시, 「아군 전체의 궁극기 데미지 10% 증가(50턴)」발동(1턴)`
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
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,359,772\n最大攻擊力：930,983`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,359,772\n最大攻击力：930,983`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,359,772\nMax ATK：930,983`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,359,772\nATK最大値：930,983`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,359,772\nMax ATK：930,983`
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
                            name: `天使長的祝福`,
                            description: `第一回合時，觸發「《天使長的祝福-聖罰》」\n第一回合時，觸發「《天使長的祝福-斷裁》」\n第一回合時，觸發「《天使長的祝福-定罪》」\n\n《天使長的祝福-聖罰》\n我方全體光屬性成員行動時，觸發「使我方全體攻擊力增加30%(50回合)」(1回合)\n\n《天使長的祝福-斷裁》\n我方全體火、風屬性成員行動時，觸發「使我方全體普攻傷害增加60%(50回合)」(1回合)\n\n《天使長的祝福-定罪》\n我方全體水、闇屬性成員行動時，觸發「使我方全體必殺技傷害增加30%(50回合)」(1回合)`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `天罰之力`,
                            description: `攻擊時，觸發「使自身攻擊力增加50%(4回合)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `天使长的祝福`,
                            description: `第一回合时，触发「《天使长的祝福-圣罚》」\n第一回合时，触发「《天使长的祝福-断裁》」\n第一回合时，触发「《天使长的祝福-定罪》」\n\n《天使长的祝福-圣罚》\n我方全体光属性成员行动时，触发「使我方全体攻击力增加30%(50回合)」(1回合)\n\n《天使长的祝福-断裁》\n我方全体火丶风属性成员行动时，触发「使我方全体普攻伤害增加60%(50回合)」(1回合)\n\n《天使长的祝福-定罪》\n我方全体水丶闇属性成员行动时，触发「使我方全体必杀技伤害增加30%(50回合)」(1回合)`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `天罚之力`,
                            description: `攻击时，触发「使自身攻击力增加50%(4回合)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Archangel's Blessing`,
                            description: `On the first turn, trigger "Archangel's Blessing - Holy Punishment".\nOn the first turn, trigger "Archangel's Blessing - Judgment".\nOn the first turn, trigger "Archangel's Blessing - Conviction".\n\n"Archangel's Blessing - Holy Punishment"\nWhen all Light allies perform an action, trigger the following effect: "increase the party's Attack Power by 30% for 50 turns" for 1 turn.\n\n"Archangel's Blessing - Judgment"\nWhen all Fire and Wind allies perform an action, trigger the following effect: "increase the party's Basic Attack Power by 60% for 50 turns" for 1 turn.\n\n"Archangel's Blessing - Conviction"\nWhen all Water and Dark allies perform an action, trigger the following effect: "increase the party's Ultimate Skill Power by 30% for 50 turns" for 1 turn.`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Wrath of God`,
                            description: `On Attack, increase your Attack Power by 50% for 4 turns.`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `天使長の祝福`,
                            description: `1ターン目に「《天使長の祝福 - 聖罰》」を誘発する\n1ターン目に「《天使長の祝福 - 審判》」を誘発する\n1ターン目に「《天使長の祝福 - 断罪》」を誘発する\n\n《天使長の祝福 - 聖罰》\n味方の光属性キャラクター全体が行動した時「味方全体の攻撃力を30%増加させる(50ターン)」を誘発する(1ターン)\n\n《天使長の祝福 - 審判》\n味方の火・風属性キャラクター全体が行動した時「味方全体の通常攻撃ダメージを60%増加させる(50ターン)」を誘発する(1ターン)\n\n《天使長的祝福 - 断罪》\n味方の水・闇属性キャラクター全体が行動した時「味方全体の必殺技ダメージを30%増加させる(50ターン)」を誘発する(1ターン)`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `天罰の力`,
                            description: `攻撃時「自分の攻撃力を50%増加させる(4ターン)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `대천사의 축복`,
                            description: `첫 번째 턴 시작 시, 「《대천사의 축복-성벌》」발동\n첫 번째 턴 시작 시, 「《대천사의 축복-심판》」발동\n첫 번째 턴 시작 시, 「《대천사의 축복-정죄》」발동\n\n《대천사의 축복-성벌》\n광속성 아군 행동 시, 「아군 전체의 공격 데미지 30% 증가(50턴)」발동(1턴)\n\n《대천사의 축복-심판》\n화속성, 풍속성 아군 행동 시, 「아군 전체의 일반 공격 데미지 60% 증가(50턴)」발동(1턴)\n\n《대천사의 축복-정죄》\n수속성, 암속성 아군 행동 시, 「아군 전체의 궁극기 데미지 30% 증가(50턴)」발동(1턴)`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `천벌의 힘`,
                            description: `공격 시, 「자신의 공격 데미지 50% 증가(4턴)」발동`
                        },
                    }
                }
            }
        }
    },
]