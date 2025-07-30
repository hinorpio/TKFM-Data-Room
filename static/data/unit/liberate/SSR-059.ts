import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10093: LiberateSkillSet[] = [
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
                            name: `過勞貓咪光束！`,
                            description: `使自身攻擊力增加10/20/30/40/50%(最多2層)，並使目標受到光屬性傷害增加0/0/5/7.5/10%(最多2層)，再以自身攻擊力141/162/184/205/227%對目標造成傷害3次，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `過勞貓咪光束！`,
                            description: `使自身攻擊力增加10%(最多2層)，再以自身攻擊力141%對目標造成傷害3次，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `過勞貓咪光束！`,
                            description: `使自身攻擊力增加20%(最多2層)，再以自身攻擊力162%對目標造成傷害3次，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `過勞貓咪光束！`,
                            description: `使自身攻擊力增加30%(最多2層)，並使目標受到光屬性傷害增加5%(最多2層)，再以自身攻擊力184%對目標造成傷害3次，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `過勞貓咪光束！`,
                            description: `使自身攻擊力增加40%(最多2層)，並使目標受到光屬性傷害增加7.5%(最多2層)，再以自身攻擊力205%對目標造成傷害3次，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `過勞貓咪光束！`,
                            description: `使自身攻擊力增加50%(最多2層)，並使目標受到光屬性傷害增加10%(最多2層)，再以自身攻擊力227%對目標造成傷害3次，CD: 4`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `勞碌命`,
                            description: `普攻時，觸發「使自身普攻傷害增加6%(最多8層)」\n必殺時，觸發「使自身必殺傷害增加20%(最多2層)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `餓肚子`,
                            description: `被治療時，觸發「使自身受到傷害減少3%(最多5層)」\n被治療時，觸發 「使自身攻擊力增加8%(最多8層)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `过劳猫咪光束！`,
                            description: `使自身攻击力增加10/20/30/40/50%(最多2层)，并使目标受到光属性伤害增加0/0/5/7.5/10%(最多2层)，再以自身攻击力141/162/184/205/227%对目标造成伤害3次，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `过劳猫咪光束！`,
                            description: `使自身攻击力增加10%(最多2层)，再以自身攻击力141%对目标造成伤害3次，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `过劳猫咪光束！`,
                            description: `使自身攻击力增加20%(最多2层)，再以自身攻击力162%对目标造成伤害3次，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `过劳猫咪光束！`,
                            description: `使自身攻击力增加30%(最多2层)，并使目标受到光属性伤害增加5%(最多2层)，再以自身攻击力184%对目标造成伤害3次，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `过劳猫咪光束！`,
                            description: `使自身攻击力增加40%(最多2层)，并使目标受到光属性伤害增加7.5%(最多2层)，再以自身攻击力205%对目标造成伤害3次，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `过劳猫咪光束！`,
                            description: `使自身攻击力增加50%(最多2层)，并使目标受到光属性伤害增加10%(最多2层)，再以自身攻击力227%对目标造成伤害3次，CD: 4`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `劳碌命`,
                            description: `普攻时，触发「使自身普攻伤害增加6%(最多8层)」\n必杀时，触发「使自身必杀伤害增加20%(最多2层)」`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `饿肚子`,
                            description: `被治疗时，触发「使自身受到伤害减少3%(最多5层)」\n被治疗时，触发 「使自身攻击力增加8%(最多8层)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Overworked blast!!!`,
                            description: `Increase your Attack Power by 10/20/30/40/50% (max 2 stacks), increase the target's Damage Taken from Light attacks by 0/0/5/7.5/10% (max 2 stacks), then damage the target 3 times (141/162/184/205/227% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Overworked blast!!!`,
                            description: `Increase your Attack Power by 10% (max 2 stacks), then damage the target 3 times (141% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Overworked blast!!!`,
                            description: `Increase your Attack Power by 20% (max 2 stacks), then damage the target 3 times (162% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Overworked blast!!!`,
                            description: `Increase your Attack Power by 30% (max 2 stacks), increase the target's Damage Taken from Light attacks by 5% (max 2 stacks), then damage the target 3 times (184% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Overworked blast!!!`,
                            description: `Increase your Attack Power by 40% (max 2 stacks), increase the target's Damage Taken from Light attacks by 7.5% (max 2 stacks), then damage the target 3 times (205% Attack Power). CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Overworked blast!!!`,
                            description: `Increase your Attack Power by 50% (max 2 stacks), increase the target's Damage Taken from Light attacks by 10% (max 2 stacks), then damage the target 3 times (227% Attack Power). CD: 4`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Worked to the Bone`,
                            description: `On Basic Attack, trigger the following effect: Increase your Basic Attack Damage by 6% (Max 8 Stacks).\nOn Ultimate Skill, trigger the following effect: Increase your Ultimate Skill Damage by 20% (Max 2 Stacks).`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Hunger Pangs`,
                            description: `When healed, trigger the following effect: Reduce your Damage Taken by 3% (Max 5 Stacks).\nWhen healed, trigger the following effect: Increase your Attack Power by 8% (Max 8 Stacks).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `過労猫ビーム！`,
                            description: `自分の攻撃力を10/20/30/40/50%増加させ(最高2スタック)、ターゲットが光属性から受けるダメージを0/0/5/7.5/10%増加させ(最高2スタック)、自分の141/162/184/205/227%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `過労猫ビーム！`,
                            description: `自分の攻撃力を10%増加させ(最高2スタック)、自分の141%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `過労猫ビーム！`,
                            description: `自分の攻撃力を20%増加させ(最高2スタック)、自分の162%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `過労猫ビーム！`,
                            description: `自分の攻撃力を30%増加させ(最高2スタック)、ターゲットが光属性から受けるダメージを5%増加させ(最高2スタック)、自分の184%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `過労猫ビーム！`,
                            description: `自分の攻撃力を40%増加させ(最高2スタック)、ターゲットが光属性から受けるダメージを7.5%増加させ(最高2スタック)、自分の205%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `過労猫ビーム！`,
                            description: `自分の攻撃力を50%増加させ(最高2スタック)、ターゲットが光属性から受けるダメージを10%増加させ(最高2スタック)、自分の227%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `苦労人`,
                            description: `通常攻撃時「自分の通常攻撃ダメージを6%増加させる(最高8スタック)」を誘発する\n必殺技攻撃時「自分の必殺技ダメージを20%増加させる(最高2スタック)」を誘発する`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `お腹が空いた`,
                            description: `治療を受けたとき「自分の受けるダメージを3%減少させる(最高5スタック)」を誘発する\n治療を受けたとき「自分の攻撃力を8%増加させる(最高8スタック)」を誘発する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `과로의 냥이 빔!`,
                            description: `자신의 공격 데미지 10/20/30/40/50% 증가(최대 2중첩), 다시 타깃이 받는 광속성 데미지 0/0/5/7.5/10% 증가(최대 2중첩), 다시 자신의 공격 데미지의 141/162/184/205/227%만큼 타깃에게 3회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `과로의 냥이 빔!`,
                            description: `자신의 공격 데미지 10% 증가(최대 2중첩), 다시 자신의 공격 데미지의 141%만큼 타깃에게 3회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `과로의 냥이 빔!`,
                            description: `자신의 공격 데미지 20% 증가(최대 2중첩), 다시 자신의 공격 데미지의 162%만큼 타깃에게 3회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `과로의 냥이 빔!`,
                            description: `자신의 공격 데미지 30% 증가(최대 2중첩), 다시 타깃이 받는 광속성 데미지 5% 증가(최대 2중첩), 다시 자신의 공격 데미지의 184%만큼 타깃에게 3회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `과로의 냥이 빔!`,
                            description: `자신의 공격 데미지 40% 증가(최대 2중첩), 다시 타깃이 받는 광속성 데미지 7.5% 증가(최대 2중첩), 다시 자신의 공격 데미지의 205%만큼 타깃에게 3회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `과로의 냥이 빔!`,
                            description: `자신의 공격 데미지 50% 증가(최대 2중첩), 다시 타깃이 받는 광속성 데미지 10% 증가(최대 2중첩), 다시 자신의 공격 데미지의 227%만큼 타깃에게 3회 데미지 [CD: 4]`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `과로사할 운명`,
                            description: `일반 공격 시, [자신의 일반 공격 데미지 6% 증가(최대 8중첩)] 트리거\n궁극기 발동 시, [자신의 궁극기 데미지 20% 증가(최대 2중첩)] 트리거`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `출출하다냥!`,
                            description: `치유를 받을 시, [자신이 받는 데미지 3% 감소(최대 5중첩)] 트리거\n치유를 받을 시, [자신의 공격 데미지 8% 증가(최대 8중첩)] 트리거`
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
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,621,017\n最大攻擊力：953,149`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,621,017\n最大攻击力：953,149`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,621,017\nMax ATK：953,149`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,621,017\nATK最大値：953,149`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,621,017\nMax ATK：953,149`
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
                            name: `星之共鳴`,
                            description: `我方全體最大HP增加40%\n自身攻擊力增加90%\n自身以外我方全體獲得「攻擊時，觸發『《匯集能量》』」\n我方全體獲得《星之碎片》\n\n《匯集能量》\n以自身攻擊力20%使我方【適格者 娜娜】攻擊力增加(1回合)\n使目標受到光、闇屬性傷害增加4%(最多15層)\n\n《星之碎片》\n隊伍中至少有(1/2)名光屬性隊員時，發動「攻擊力增加(5/25)%」\n隊伍中至少有(1/2)名闇屬性隊員時，發動「攻擊力增加(5/25)%」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `超級加班模式！`,
                            description: `被治療時，觸發「使自身造成傷害增加4%(最多8層)」\n必殺時，觸發「《連續加班拳》」\n\n《連續加班拳》\n使自身獲得「攻擊時，觸發『以自身攻擊力67.5%對目標造成傷害』(8回合)」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `星之共鸣`,
                            description: `我方全体最大HP增加40%\n自身攻击力增加90%\n自身以外我方全体获得「攻击时，触发『《汇集能量》』」\n我方全体获得《星之碎片》\n\n《汇集能量》\n以自身攻击力20%使我方【适格者 娜娜】攻击力增加(1回合)\n使目标受到光、闇属性伤害增加4%(最多15层)\n\n《星之碎片》\n队伍中至少有(1/2)名光属性队员时，发动「攻击力增加(5/25)%」\n队伍中至少有(1/2)名闇属性队员时，发动「攻击力增加(5/25)%」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `超级加班模式！`,
                            description: `被治疗时，触发「使自身造成伤害增加4%(最多8层)」\n必杀时，触发「《连续加班拳》」\n\n《连续加班拳》\n使自身获得「攻击时，触发『以自身攻击力67.5%对目标造成伤害』(8回合)」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Call of the Stars`,
                            description: `Increase the party's max HP by 40%.\nIncrease your Attack Power by 90%.\nGain other allies the following effect: On Attack, trigger "Gather Energy".\nGain the party "Star Shards".\n\n"Gather Energy"\nIncrease Chosen One Nana's Attack Power for 20% of your Attack Power for 1 turn.\nIncrease the target's Damage Taken from Light and Dark attacks by 4% (max 15 stacks).\n\n"Star Shards"\nWhen there are at least (1/2) Light characters in the party, activate "increase Attack Power by (5/25)%.\nWhen there are at least (1/2) Dark characters in the party, activate "increase Attack Power by (5/25)%.`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Super Overtime Mode!`,
                            description: `When healed, trigger the following effect: Increase your Damage Output by 4% (max 8 stacks).\nOn Ultimate Skill, trigger "Overtime Punch!".\n\n"Overtime Punch!"\nGain yourself the following effect: On Attack, trigger the following effect: Damage the target for 8 turns (67.5% Attack Power).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `星の共鳴`,
                            description: `味方全体の最大HPが40%増加する\n自分の攻撃力が90%増加する\n自分以外の味方全体が「攻撃時《エネルギー凝縮》を誘発する」を獲得する\n味方全体が《星の欠片》を獲得する\n\n《エネルギー凝縮》\n自分の攻撃力の20%分【チルドレン ナナ】の攻撃力を増加させる(1ターン)\nターゲットが光・闇属性から受けるダメージを4%増加させる(最高15スタック)\n\n《星の欠片》\nチームに光属性メンバーが(1/2)人以上いる時「攻撃力が(5/25)%増加する」を発動する\nチームに闇属性メンバーが(1/2)人以上いる時、「攻撃力が(5/25)%増加する」を発動する`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `ナナ・スーパー残業モード！`,
                            description: `治療を受けた時「自分が与えるダメージを4%増加させる(最高8スタック)」を誘発する\n必殺技攻撃時《連続残業拳》を誘発する\n\n《連続残業拳》\n自分が「攻撃時『自分の67.5%の攻撃力でターゲットにダメージを与える』を誘発する(8ターン)」を獲得する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `별의 공진`,
                            description: `아군 전체의 최대 HP 40% 증가\n자신의 공격 데미지 90% 증가\n자신 이외의 아군 전체는 「공격 시 『《에너지 집중》』트리거」획득\n아군 전체는《별의 조각》획득\n\n《에너지 집중》\n자신의 공격 데미지의 20%만큼 아군【적격자 나나】의 공격 데미지 증가(1턴)\n타깃이 받는 광속성, 암속성 데미지 4% 증가(최대 15중첩)\n\n《별의 조각》\n팀에 최소 (1/2)명의 광속성 캐릭터가 있을 경우, 「공격 데미지 (5/25)% 증가」발동\n팀에 최소 (1/2)명의 암속성 캐릭터가 있을 경우, 「공격 데미지 (5/25)% 증가」발동`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `슈퍼 야근 모드!`,
                            description: `치유를 받을 시,「자신이 가하는 데미지 4% 증가(최대 8중첩)」트리거\n궁극기 발동 시,「《초과 근무의 죽빵》」트리거\n\n《초과 근무의 죽빵》\n자신은 「공격 시『자신의 공격 데미지의 67.5%만큼 타깃에게 데미지』트리거(8턴)」획득`
                        },
                    }
                }
            }
        }
    },
]