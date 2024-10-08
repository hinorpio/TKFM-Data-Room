import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10003: LiberateSkillSet[] = [
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
                            name: `劇毒之薔薇`,
                            description: `使目標受到魔王 伊布力斯的傷害增加5/5/10/10/10%(最多3層)，並以攻擊力388/445/503/560/560%對目標造成傷害，CD: 4 [絆5: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `劇毒之薔薇`,
                            description: `使目標受到魔王 伊布力斯的傷害增加5%(最多3層)，並以攻擊力388%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `劇毒之薔薇`,
                            description: `使目標受到魔王 伊布力斯的傷害增加5%(最多3層)，並以攻擊力445%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `劇毒之薔薇`,
                            description: `使目標受到魔王 伊布力斯的傷害增加10%(最多3層)，並以攻擊力503%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `劇毒之薔薇`,
                            description: `使目標受到魔王 伊布力斯的傷害增加10%(最多3層)，並以攻擊力560%對目標造成傷害，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `劇毒之薔薇`,
                            description: `使目標受到魔王 伊布力斯的傷害增加10%(最多3層)，並以攻擊力560%對目標造成傷害，CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `秘傳魔力儀式`,
                            description: `當前HP大於75%時，發動「造成傷害增加20%」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `剧毒之蔷薇`,
                            description: `使目标受到魔王 伊布力斯的伤害增加5/5/10/10/10%(最多3层)，并以攻击力388/445/503/560/560%对目标造成伤害，CD: 4 [绊5: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `剧毒之蔷薇`,
                            description: `使目标受到魔王 伊布力斯的伤害增加5%(最多3层)，并以攻击力388%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `剧毒之蔷薇`,
                            description: `使目标受到魔王 伊布力斯的伤害增加5%(最多3层)，并以攻击力445%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `剧毒之蔷薇`,
                            description: `使目标受到魔王 伊布力斯的伤害增加10%(最多3层)，并以攻击力503%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `剧毒之蔷薇`,
                            description: `使目标受到魔王 伊布力斯的伤害增加10%(最多3层)，并以攻击力560%对目标造成伤害，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `剧毒之蔷薇`,
                            description: `使目标受到魔王 伊布力斯的伤害增加10%(最多3层)，并以攻击力560%对目标造成伤害，CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `秘传魔力仪式`,
                            description: `当前HP大於75%时，发动「造成伤害增加20%」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Poison Rose`,
                            description: `Increase the target's Damage Taken from Archdemon Iblis by 5/5/10/10/10% (Max 3 Stacks). Damage the target (388/445/503/560/560% Attack Power). CD: 4 [Bond 5: CD: 3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Poison Rose`,
                            description: `Increase the target's Damage Taken from Archdemon Iblis by 5% (Max 3 Stacks). Damage the target (388% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Poison Rose`,
                            description: `Increase the target's Damage Taken from Archdemon Iblis by 5% (Max 3 Stacks). Damage the target (445% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Poison Rose`,
                            description: `Increase the target's Damage Taken from Archdemon Iblis by 10% (Max 3 Stacks). Damage the target (503% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Poison Rose`,
                            description: `Increase the target's Damage Taken from Archdemon Iblis by 10% (Max 3 Stacks). Damage the target (560% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Poison Rose`,
                            description: `Increase the target's Damage Taken from Archdemon Iblis by 10% (Max 3 Stacks). Damage the target (560% Attack Power). CD: 3`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Hidden Ceremony`,
                            description: `When you have more than 75% HP, increase your Damage Output by 20%.`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `猛毒の薔薇`,
                            description: `ターゲットの魔王 イブリースから受けるダメージを5/5/10/10/10%増加させ(最高3スタック)、388/445/503/560/560%の攻撃力でターゲットにダメージを与える[CD:4] [Lv5: CD:3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `猛毒の薔薇`,
                            description: `ターゲットの魔王 イブリースから受けるダメージを5%増加させ(最高3スタック)、388%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `猛毒の薔薇`,
                            description: `ターゲットの魔王 イブリースから受けるダメージを5%増加させ(最高3スタック)、445%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `猛毒の薔薇`,
                            description: `ターゲットの魔王 イブリースから受けるダメージを10%増加させ(最高3スタック)、503%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `猛毒の薔薇`,
                            description: `ターゲットの魔王 イブリースから受けるダメージを10%増加させ(最高3スタック)、560%の攻撃力でターゲットにダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `猛毒の薔薇`,
                            description: `ターゲットの魔王 イブリースから受けるダメージを10%増加させ(最高3スタック)、560%の攻撃力でターゲットにダメージを与える[CD:3]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `秘伝魔力の儀式`,
                            description: `現在のHPが75%を超えている時、効果「与えるダメージが20%増加する」を発動する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `장미 맹독`,
                            description: `타깃이 받는 마왕 이블리스의 데미지 5/5/10/10/10% 증가(최대 3중첩), 자신의 공격 데미지 388/445/503/560/560%만큼 타깃에게 데미지. [CD: 4] [Lv5: CD:3]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `장미 맹독`,
                            description: `타깃이 받는 마왕 이블리스의 데미지 5% 증가(최대 3중첩), 자신의 공격 데미지 388%만큼 타깃에게 데미지. [CD: 4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `장미 맹독`,
                            description: `타깃이 받는 마왕 이블리스의 데미지 5% 증가(최대 3중첩), 자신의 공격 데미지 445%만큼 타깃에게 데미지. [CD: 4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `장미 맹독`,
                            description: `타깃이 받는 마왕 이블리스의 데미지 10% 증가(최대 3중첩), 자신의 공격 데미지 503%만큼 타깃에게 데미지. [CD: 4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `장미 맹독`,
                            description: `타깃이 받는 마왕 이블리스의 데미지 10% 증가(최대 3중첩), 자신의 공격 데미지 560%만큼 타깃에게 데미지. [CD: 4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `장미 맹독`,
                            description: `타깃이 받는 마왕 이블리스의 데미지 10% 증가(최대 3중첩), 자신의 공격 데미지 560%만큼 타깃에게 데미지. [CD: 3]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `비전의 마력 의식`,
                            description: `현재 HP가 75%보다 많을 시, 「공격력 20% 증가」 발동`
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
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,166,609\n最大攻擊力：989,565`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,166,609\n最大攻击力：989,565`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,166,609\nMax ATK：989,565`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,166,609\nATK最大値：989,565`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,166,609\nMax ATK：989,565`
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
                            name: `魔王伊布力斯之傲慢`,
                            description: `我方全體最大HP20%\n我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n攻擊時，觸發「以150%攻擊力對敵全體進行追擊」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `魔力汲取`,
                            description: `普攻傷害增加20%\n造成傷害時會以傷害值33%回復自身HP\n使自身必殺傷害增加25%`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `眾生壓迫`,
                            description: `使自身攻擊力增加25%\n攻擊時，觸發「使敵方全體受到光屬性傷害增加4%(最多5層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `魔王伊布力斯之傲慢`,
                            description: `我方全体最大HP20%\n我方全体攻击力增加40%\n我方全体造成伤害增加20%\n攻击时，触发「以150%攻击力对敌全体进行追击」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `魔力汲取`,
                            description: `普攻伤害增加20%\n造成伤害时会以伤害值33%回复自身HP\n使自身必杀伤害增加25%`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `众生压迫`,
                            description: `使自身攻击力增加25%\n攻击时，触发「使敌方全体受到光属性伤害增加4%(最多5层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Iblis' Pride`,
                            description: `Increase the party's Max HP by 20%.\nIncrease the party's Attack Power by 40%.\nIncrease the party's Damage Output by 20%.\nOn Attack, deal follow-up damage to all enemies (150% Attack Power).`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Demon Absorb`,
                            description: `Increase your Basic Damage Output by 20%.\nWhen you deal damage, heal yourself for 33% of the damage dealt.\nIncrease your Ultimate Skill Damage by 25%.`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Mass Oppression`,
                            description: `Increase your Attack Power by 25%.\nOn Attack, increase all enemies' Damage Taken from Light attacks by 4% (Max 5 Stacks).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `魔王イブリースの傲慢`,
                            description: `味方全体の最大HPを20%増加させる\n味方全体の攻撃力を40%増加させる\n味方全体の与えるダメージを20%増加させる\n攻撃時「150%の攻撃力で敵全体に追撃を行う」を誘発する`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `魔力吸収`,
                            description: `通常攻撃ダメージが20%増加する\nダメージを与えた時、そのダメージの33%分自分のHPを回復する\n自分の必殺技ダメージを25%増加させる`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `生命への抑圧`,
                            description: `自分の攻撃力を25%増加させる\n攻撃時「敵全体が光属性から受けるダメージを4%増加させる(最高5スタック)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `마왕 이블리스의 오만`,
                            description: `아군 전체의 최대 HP 20%\n아군 전체의 공격 데미지 40% 증가\n아군 전체의 가하는 데미지 20% 증가\n공격 시 「공격 데미지의 150%만큼 적 전체에게 추가 공격」발동`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `마력 섭취`,
                            description: `일반 공격 데미지 20% 증가\n데미지를 입힐 시 가한 데미지의 33%만큼 자신의 HP 회복\n자신의 궁극기 데미지 25% 증가`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `중생 압박`,
                            description: `자신의 공격 데미지25% 증가\n공격 시 「적 전체가 받는 광속성 데미지 4% 증가(최대 5중첩)」발동`
                        },
                    }
                }
            }
        }
    },
]