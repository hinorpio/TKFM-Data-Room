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
                            name: `導引之箭矢`,
                            description: `以攻擊力475/550/625/625/625%對目標造成傷害，並使我方全體攻擊力增加15/15/15/20/25%(最多2層)，CD: 6`
                        },
                        [SkillType.SKILL_1]: {
                            name: `導引之箭矢`,
                            description: `以攻擊力475%對目標造成傷害，並使我方全體攻擊力增加15%(最多2層)，CD: 6`
                        },
                        [SkillType.SKILL_2]: {
                            name: `導引之箭矢`,
                            description: `以攻擊力550%對目標造成傷害，並使我方全體攻擊力增加15%(最多2層)，CD: 6`
                        },
                        [SkillType.SKILL_3]: {
                            name: `導引之箭矢`,
                            description: `以攻擊力625%對目標造成傷害，並使我方全體攻擊力增加15%(最多2層)，CD: 6`
                        },
                        [SkillType.SKILL_4]: {
                            name: `導引之箭矢`,
                            description: `以攻擊力625%對目標造成傷害，並使我方全體攻擊力增加20%(最多2層)，CD: 6`
                        },
                        [SkillType.SKILL_5]: {
                            name: `導引之箭矢`,
                            description: `以攻擊力625%對目標造成傷害，並使我方全體攻擊力增加25%(最多2層)，CD: 6`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `引領者`,
                            description: `攻擊時，觸發「使我方全體造成傷害增加20%(1回合)」\n攻擊時，觸發「使我方全體普攻傷害增加30%(1回合)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `导引之箭矢`,
                            description: `以攻击力475/550/625/625/625%对目标造成伤害，并使我方全体攻击力增加15/15/15/20/25%(最多2层)，CD: 6`
                        },
                        [SkillType.SKILL_1]: {
                            name: `导引之箭矢`,
                            description: `以攻击力475%对目标造成伤害，并使我方全体攻击力增加15%(最多2层)，CD: 6`
                        },
                        [SkillType.SKILL_2]: {
                            name: `导引之箭矢`,
                            description: `以攻击力550%对目标造成伤害，并使我方全体攻击力增加15%(最多2层)，CD: 6`
                        },
                        [SkillType.SKILL_3]: {
                            name: `导引之箭矢`,
                            description: `以攻击力625%对目标造成伤害，并使我方全体攻击力增加15%(最多2层)，CD: 6`
                        },
                        [SkillType.SKILL_4]: {
                            name: `导引之箭矢`,
                            description: `以攻击力625%对目标造成伤害，并使我方全体攻击力增加20%(最多2层)，CD: 6`
                        },
                        [SkillType.SKILL_5]: {
                            name: `导引之箭矢`,
                            description: `以攻击力625%对目标造成伤害，并使我方全体攻击力增加25%(最多2层)，CD: 6`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `引领者`,
                            description: `攻击时，触发「使我方全体造成伤害增加20%(1回合)」\n攻击时，触发「使我方全体普攻伤害增加30%(1回合)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Guided Arrow`,
                            description: `Damage the target (475/550/625/625/625% Attack Power) and increase allies Attack Power by 15/15/15/20/25% (max 2 stacks). CD: 6`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Guided Arrow`,
                            description: `Damage the target (475% Attack Power) and increase allies Attack Power by 15% (max 2 stacks). CD: 6`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Guided Arrow`,
                            description: `Damage the target (550% Attack Power) and increase allies Attack Power by 15% (max 2 stacks). CD: 6`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Guided Arrow`,
                            description: `Damage the target (625% Attack Power) and increase allies Attack Power by 15% (max 2 stacks). CD: 6`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Guided Arrow`,
                            description: `Damage the target (625% Attack Power) and increase allies Attack Power by 20% (max 2 stacks). CD: 6`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Guided Arrow`,
                            description: `Damage the target (625% Attack Power) and increase allies Attack Power by 25% (max 2 stacks). CD: 6`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Follow the Leader`,
                            description: `On Attack, increase the party's Damage Output by 20% for 1 turn.\nOn Attack, increase the party's Basic Attack Power by 30% for 1 turn.`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `導きの矢`,
                            description: `475/550/625/625/625%の攻撃力でターゲットにダメージを与え、味方全体の攻撃力を15/15/15/20/25%増加させる(最高2スタック)[CD:6]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `導きの矢`,
                            description: `475%の攻撃力でターゲットにダメージを与え、味方全体の攻撃力を15%増加させる(最高2スタック)[CD:6]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `導きの矢`,
                            description: `550%の攻撃力でターゲットにダメージを与え、味方全体の攻撃力を15%増加させる(最高2スタック)[CD:6]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `導きの矢`,
                            description: `625%の攻撃力でターゲットにダメージを与え、味方全体の攻撃力を15%増加させる(最高2スタック)[CD:6]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `導きの矢`,
                            description: `625%の攻撃力でターゲットにダメージを与え、味方全体の攻撃力を20%増加させる(最高2スタック)[CD:6]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `導きの矢`,
                            description: `625%の攻撃力でターゲットにダメージを与え、味方全体の攻撃力を25%増加させる(最高2スタック)[CD:6]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `案内人`,
                            description: `攻撃時「味方全体の与えるダメージを20%増加させる(1ターン)」を誘発する\n攻撃時「味方全体の通常攻撃ダメージを30%増加させる(1ターン)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `유도 화살`,
                            description: `공격력의 475/550/625/625/625%만큼 타깃에게 데미지, 아군 전체의 공격 데미지 15/15/15/20/25% 증가(최대 2중첩) [CD: 6]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `유도 화살`,
                            description: `공격력의 475%만큼 타깃에게 데미지, 아군 전체의 공격 데미지 15% 증가(최대 2중첩) [CD: 6]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `유도 화살`,
                            description: `공격력의 550%만큼 타깃에게 데미지, 아군 전체의 공격 데미지 15% 증가(최대 2중첩) [CD: 6]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `유도 화살`,
                            description: `공격력의 625%만큼 타깃에게 데미지, 아군 전체의 공격 데미지 15% 증가(최대 2중첩) [CD: 6]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `유도 화살`,
                            description: `공격력의 625%만큼 타깃에게 데미지, 아군 전체의 공격 데미지 20% 증가(최대 2중첩) [CD: 6]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `유도 화살`,
                            description: `공격력의 625%만큼 타깃에게 데미지, 아군 전체의 공격 데미지 25% 증가(최대 2중첩) [CD: 6]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `인도자`,
                            description: `공격 시「아군 전체가 가하는 데미지 20% 증가(1턴)」발동\n공격 시「아군 전체의 일반 공격 데미지 30% 증가(1턴)」발동`
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
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,597,268\n最大攻擊力：870,818`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,597,268\n最大攻击力：870,818`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,597,268\nMax ATK：870,818`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,597,268\nATK最大値：870,818`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,597,268\nMax ATK：870,818`
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
                            name: `精靈領域`,
                            description: `我方全體最大HP增加20%\n我方全體攻擊力增加50%\n我方全體普攻傷害增加50%\n自身攻擊力增加50%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `破天一擊`,
                            description: `必殺時，觸發「使敵方全體受到傷害增加12.5%(最多2層)且使敵方全體防禦狀態解除」\n必殺時，觸發「使敵方目標受到普攻傷害增加35%(最多2層)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `揚起勝利之風`,
                            description: `我方全體攻擊力增加25%\n第1回合，觸發「使自身必殺技冷卻時間減少6回合」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `精灵领域`,
                            description: `我方全体最大HP增加20%\n我方全体攻击力增加50%\n我方全体普攻伤害增加50%\n自身攻击力增加50%`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `破天一击`,
                            description: `必杀时，触发「使敌方全体受到伤害增加12.5%(最多2层)且使敌方全体防御状态解除」\n必杀时，触发「使敌方目标受到普攻伤害增加35%(最多2层)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `扬起胜利之风`,
                            description: `我方全体攻击力增加25%\n第1回合，触发「使自身必杀技冷却时间减少6回合」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Elf Territory`,
                            description: `Increase the party's max HP by 20%. \nIncrease the party's Attack Power by 50%.\nIncrease the party's Basic Attack Power by 50%.\nIncrease your Attack Power by 50%.`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Skybreaker`,
                            description: `On Ultimate Skill, increase all enemies' Damage Taken by 12.5% (max 2 stacks) and remove all enemies' Defensive Stance.\nOn Ultimate Skill, increase all enemies' Damage Taken from Basic Attacks by 35% (max 2 stacks).`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `The Winds of Victory`,
                            description: `Increase the party's Attack Power by 25%.\nOn the first turn, reduce your Ultimate Skill CD by 6.`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `精霊の領域`,
                            description: `味方全体の最大HPを20%増加させる\n味方全体の攻撃力を50%増加させる\n味方全体の与える通常攻撃ダメージを50%増加させる\n自分の攻撃力を50%増加させる`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `破天撃`,
                            description: `必殺技攻撃時「敵全体の受けるダメージを12.5%増加させ(最高2スタック)、敵全体の防禦状態を解除する」を追加する\n必殺技攻撃時「ターゲットが受ける通常攻撃ダメージを35%増加させる(最高2スタック)」を誘発する`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `吹き立つ勝利の風`,
                            description: `味方全体の攻撃力が25%増加する\n1ターン目に「自分の必殺技のCDを6ターン減少させる」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `엘프의 영역`,
                            description: `아군 전체의 최대 HP 20% 증가\n아군 전체의 공격 데미지 50% 증가\n아군 전체의 일반 공격 데미지 50% 증가\n자신의 공격 데미지 50% 증가`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `파천일격`,
                            description: `궁극기 발동 시 「적 전체가 받는 데미지 12.5% 증가(최대 2중첩), 적 전체의 방어 상태 해제」추가\n궁극기 발동 시 「적 타깃이 받는 일반 공격 데미지 35% 증가(최대 2중첩)」발동`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `불어오는 승리의 바람`,
                            description: `아군 전체의 공격 데미지 25% 증가\n첫번째 턴에서 「자신의 궁극기 CD 6턴 감소」발동`
                        },
                    }
                }
            }
        }
    },
]