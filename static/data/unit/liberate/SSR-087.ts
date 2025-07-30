import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10121: LiberateSkillSet[] = [
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
                            name: `繪技。百畫投影`,
                            description: `使自身普攻傷害增加60/75/90/105/120%(4回合)，再使目標受到普攻傷害增加40/55/70/85/100%(8回合)，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `繪技。百畫投影`,
                            description: `使自身普攻傷害增加60%(4回合)，再使目標受到普攻傷害增加40%(8回合)，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `繪技。百畫投影`,
                            description: `使自身普攻傷害增加75%(4回合)，再使目標受到普攻傷害增加55%(8回合)，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `繪技。百畫投影`,
                            description: `使自身普攻傷害增加90%(4回合)，再使目標受到普攻傷害增加70%(8回合)，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `繪技。百畫投影`,
                            description: `使自身普攻傷害增加105%(4回合)，再使目標受到普攻傷害增加85%(8回合)，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `繪技。百畫投影`,
                            description: `使自身普攻傷害增加120%(4回合)，再使目標受到普攻傷害增加100%(8回合)，CD: 4`
                        },
                        [SkillType.ATTACK]: {
                            name: `後勤補給喵`,
                            description: `使我方全體普攻傷害增加50%(2回合)`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `投影炮擊`,
                            description: `普攻時，追加「以自身攻擊力70%對目標造成傷害」`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `绘技。百画投影！`,
                            description: `使自身普攻伤害增加60/75/90/105/120%(4回合)，再使目标受到普攻伤害增加40/55/70/85/100%(8回合)，CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `绘技。百画投影`,
                            description: `使自身普攻伤害增加60%(4回合)，再使目标受到普攻伤害增加40%(8回合)，CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `绘技。百画投影`,
                            description: `使自身普攻伤害增加75%(4回合)，再使目标受到普攻伤害增加55%(8回合)，CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `绘技。百画投影`,
                            description: `使自身普攻伤害增加90%(4回合)，再使目标受到普攻伤害增加70%(8回合)，CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `绘技。百画投影`,
                            description: `使自身普攻伤害增加105%(4回合)，再使目标受到普攻伤害增加85%(8回合)，CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `绘技。百画投影`,
                            description: `使自身普攻伤害增加120%(4回合)，再使目标受到普攻伤害增加100%(8回合)，CD: 4`
                        },
                        [SkillType.ATTACK]: {
                            name: `后勤补给喵`,
                            description: `使我方全体普攻伤害增加50%(2回合)`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `投影炮击`,
                            description: `普攻时，追加「以自身攻击力70%对目标造成伤害」`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Hundred Drawings Projection`,
                            description: `Increase your Basic Attack Power by 60/75/90/105/120% for 4 turns then increase the target's Damage Taken from Basic Attacks by 40/55/70/85/100% for 8 turns. CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Hundred Drawings Projection`,
                            description: `Increase your Basic Attack Power by 60% for 4 turns then increase the target's Damage Taken from Basic Attacks by 40% for 8 turns. CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Hundred Drawings Projection`,
                            description: `Increase your Basic Attack Power by 75% for 4 turns then increase the target's Damage Taken from Basic Attacks by 55% for 8 turns. CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Hundred Drawings Projection`,
                            description: `Increase your Basic Attack Power by 90% for 4 turns then increase the target's Damage Taken from Basic Attacks by 70% for 8 turns. CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Hundred Drawings Projection`,
                            description: `Increase your Basic Attack Power by 105% for 4 turns then increase the target's Damage Taken from Basic Attacks by 85% for 8 turns. CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Hundred Drawings Projection`,
                            description: `Increase your Basic Attack Power by 120% for 4 turns then increase the target's Damage Taken from Basic Attacks by 100% for 8 turns. CD: 4`
                        },
                        [SkillType.ATTACK]: {
                            name: `Logistics Supply Meow`,
                            description: `Increase the party's Basic Attack Power by 50% for 2 turns`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `Projection Bombardment`,
                            description: `On Basic Attack, deal additional damage to the target (70% Attack Power).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `画技・絵画投影`,
                            description: `自分の通常攻撃ダメージを60/75/90/105/120%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを40/55/70/85/100%増加させる(8ターン)[CD:4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `画技・絵画投影`,
                            description: `自分の通常攻撃ダメージを60%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを40%増加させる(8ターン)[CD:4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `画技・絵画投影`,
                            description: `自分の通常攻撃ダメージを75%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを55%増加させる(8ターン)[CD:4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `画技・絵画投影`,
                            description: `自分の通常攻撃ダメージを90%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを70%増加させる(8ターン)[CD:4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `画技・絵画投影`,
                            description: `自分の通常攻撃ダメージを105%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを85%増加させる(8ターン)[CD:4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `画技・絵画投影`,
                            description: `自分の通常攻撃ダメージを120%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを100%増加させる(8ターン)[CD:4]`
                        },
                        [SkillType.ATTACK]: {
                            name: `後方補給にゃ`,
                            description: `味方全体の通常攻撃ダメージを50%増加させる(2ターン)`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `投影砲撃`,
                            description: `通常攻撃時「自分の70%の攻撃力でターゲットにダメージを与える」を追加する`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `회기・백화투영`,
                            description: `자신의 일반 공격 데미지 60/75/90/105/120% 증가(4턴), 타깃이 받는 일반 공격 데미지 40/55/70/85/100% 증가(8턴) [CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `회기・백화투영`,
                            description: `자신의 일반 공격 데미지 60% 증가(4턴), 타깃이 받는 일반 공격 데미지 40% 증가(8턴) [CD: 4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `회기・백화투영`,
                            description: `자신의 일반 공격 데미지 75% 증가(4턴), 타깃이 받는 일반 공격 데미지 55% 증가(8턴) [CD: 4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `회기・백화투영`,
                            description: `자신의 일반 공격 데미지 90% 증가(4턴), 타깃이 받는 일반 공격 데미지 70% 증가(8턴) [CD: 4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `회기・백화투영`,
                            description: `자신의 일반 공격 데미지 105% 증가(4턴), 타깃이 받는 일반 공격 데미지 85% 증가(8턴) [CD: 4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `회기・백화투영`,
                            description: `자신의 일반 공격 데미지 120% 증가(4턴), 타깃이 받는 일반 공격 데미지 100% 증가(8턴) [CD: 4]`
                        },
                        [SkillType.ATTACK]: {
                            name: `후방 보급이다냥`,
                            description: `아군 전체의 일반 공격 데미지 50% 증가(2턴)`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `프로젝터 캐논`,
                            description: `일반 공격 시 「자신의 공격 데미지의 70%만큼 타깃에게 데미지」추가`
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
                            description: `HP與ATK將永久提升10%\n\n最大生命值:4,053,259\n最大攻擊力:851,817`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值:4,053,259\n最大攻击力:851,817`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP:4,053,259\nMax ATK:851,817`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値:4,053,259\nATK最大値:851,817`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP:4,053,259\nMax ATK:851,817`
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
                            name: `純熟社蓄俏水手`,
                            description: `我方全體最大HP增加25%\n我方全體獲得「我方隊伍風屬性角色有3人以上時，發動『《海鷗盜賊團》』」\n自身獲得「我方隊伍攻擊者角色有2人以上時，發動『《向著大海航去！》』」\n\n《海鷗盜賊團》\n攻擊力增加40%\n普攻傷害增加100%\n普攻時，追加「以自身攻擊力65%對目標造成傷害」\n\n《向著大海航去！》\n普攻時，觸發「使目標受到傷害增加5%(最多10層)」\n必殺時，觸發「使目標受到風屬性傷害增加15%(2回合)」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `在暴風雨中前行`,
                            description: `普攻時，追加「以自身最大HP10%給予我方全體護盾(1回合)」\n必殺時，觸發「《風雨也無法阻止我們》」\n\n《風雨也無法阻止我們》\n使自身獲得「普攻時，追加『以自身攻擊力120%對目標造成傷害』(2回合)」\n使目標受到風屬性傷害增加15%(2回合)`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `悠久留存的回憶`,
                            description: `我方全體造成傷害增加10%\n普攻時，觸發「使我方全體攻擊力增加10%(最多4層)」\n第1回合時，觸發「使自身當前必殺技CD減少4回合」(觸發1次後清除)`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `纯熟社蓄俏水手`,
                            description: `我方全体最大HP增加25%\n我方全体获得「我方队伍风属性角色有3人以上时，发动『《海鸥盗贼团》』」\n自身获得「我方队伍攻击者角色有2人以上时，发动『《向着大海航去！》』」\n\n《海鸥盗贼团》\n攻击力增加40%\n普攻伤害增加100%\n普攻时，追加「以自身攻击力65%对目标造成伤害」\n\n《向着大海航去！》\n普攻时，触发「使目标受到伤害增加5%(最多10层)」\n必杀时，触发「使目标受到风属性伤害增加15%(2回合)」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `在暴风雨中前行`,
                            description: `普攻时，追加「以自身最大HP10%给予我方全体护盾(1回合)」\n必杀时，触发「《风雨也无法阻止我们》」\n\n《风雨也无法阻止我们》\n使自身获得「普攻时，追加『以自身攻击力120%对目标造成伤害』(2回合)」\n使目标受到风属性伤害增加15%(2回合)`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `悠久留存的回忆`,
                            description: `我方全体造成伤害增加10%\n普攻时，触发「使我方全体攻击力增加10%(最多4层)」\n第1回合时，触发「使自身当前必杀技CD减少4回合」(触发1次后清除)`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Skilled Charming Sailor`,
                            description: `Increase the party's max HP by 25%.\nGain the party the following effect: When there are 3 or more Wind characters in the party, activate "Seagull Thieves".\nGain yourself the following effect: When there are 2 or more Attackers in the party, activate "Sail Toward the Sea!".\n\n"Seagull Thieves"\nIncrease Attack Power by 40%.\nIncrease Basic Attack Power by 100%.\nOn Basic Attack, deal additional damage to the target (65% Attack Power).\n\n"Sail Toward the Sea!"\nOn Basic Attack, trigger the following effect: Increase the target's Damage Taken by 5% (max 10 stacks).\nOn Ultimate Skill, trigger the following effect: increase the target's Damage Taken from Wind attacks by 15% for 2 turns.`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Facing Storm`,
                            description: `On Basic Attack, gain the party a Shield for 10% of your max HP for 1 turn.\nOn Ultimate Skill, trigger "Storm Ain't Stopping Us".\n\n"Storm Ain't Stopping Us"\nGain yourself the following effect: On Basic Attack, deal additional damage to the target for 2 turns (120% Attack Power).\nIncrease the target's Damage Taken from Wind attacks by 15% for 2 turns`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Eternal Memories`,
                            description: `Increase the party's Damage Output by 10%.\nOn Basic Attack, trigger the following effect: Increase the party's Attack Power by 10% (max 4 stacks).\nOn the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 4 turns (removes after triggering once).`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `熟練社畜船乗り`,
                            description: `味方全体の最大HPが25%増加する\n味方全体が「味方のチーム内に風属性キャラが3人以上いる時《カモメ海賊団》を発動する」を獲得する\n自分が「味方のチーム内にアタッカーが2人以上いる時《大海原へ航海！》を発動する」を獲得する\n\n《カモメ海賊団》\n攻撃力が40%増加する\n通常攻撃ダメージが100%増加する\n通常攻撃時「自分の65%の攻撃力でターゲットにダメージを与える」を追加する\n\n《大海原へ航海！》\n通常攻撃時「ターゲットの受けるダメージを5%増加させる(最高10スタック)」を誘発する\n必殺技攻撃時「ターゲットが風属性から受けるダメージを15%増加させる(2ターン)」を誘発する`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `暴風雨の航海`,
                            description: `通常攻撃時「自分の最大HPの10%分、味方全体に盾を張る(1ターン)」を追加する\n必殺技攻撃時《雨風ですら止められない》を誘発する\n\n《雨風ですら止められない》\n自分が「通常攻撃時『自分の120%の攻撃力でターゲットにダメージを与える』を追加する(2ターン)」を獲得する\nターゲットが風属性から受けるダメージを15%増加させる(2ターン)`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `永遠の思い出`,
                            description: `味方全体の与えるダメージが10%増加する\n通常攻撃時「味方全体の攻撃力を10%増加させる(最高4スタック)」を誘発する\n1ターン目に「自分の現在の必殺技CDを4ターン減少させる」を誘発する(誘発1回後に解除)`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `노예 선원`,
                            description: `아군 전체의 최대 HP 25% 증가\n아군 전체는「팀에 풍속성 캐릭터가 3명 이상 있을 경우,『《갈매기 도적단》』발동」획득\n자신은「팀에 딜러가 2명 이상 있을 경우,『《대해를 향하여!》』발동」획득\n\n《갈매기 도적단》\n공격 데미지 40% 증가\n일반 공격 데미지 100% 증가\n일반 공격 시, 「자신의 공격 데미지의 65%만큼 타깃에게 데미지」추가\n\n《대해를 향하여!》\n일반 공격 시 「타깃이 받는 데미지 5% 증가(최대 10중첩)」트리거\n궁극기 발동 시 「타깃이 받는 풍속성 데미지 15% 증가(2턴)」트리거`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `폭풍우 감행`,
                            description: `일반 공격 시 「자신의 최대 HP 10%만큼 아군 전체의 아머 강화(1턴)」추가\n궁극기 발동 시 「《폭풍우도 우릴 막을 수 없어》」트리거\n\n《폭풍우도 우릴 막을 수 없어》\n자신은 「일반 공격 시 『자신의 공격 데미지의 120%만큼 타깃에게 데미지』추가(2턴)」획득\n타깃이 받는 풍속성 데미지 15% 증가(2턴)`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `오랜 추억`,
                            description: `아군 전체의 가하는 데미지 10% 증가\n일반 공격 시 「아군 전체의 공격 데미지 10% 증가(최대 4중첩)」트리거\n첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 4턴 감소」트리거(1회 트리거 후 제거)`
                        },
                    }
                }
            }
        }
    },
]