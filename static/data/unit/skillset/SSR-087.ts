import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10121: SkillSet[] =  [
    {
        version: 1,
        lastDate: "",
        remark: {
            [Locale.tc]: ``,
            [Locale.sc]: ``,
            [Locale.en]: ``,
            [Locale.jp]: ``,
            [Locale.kr]: ``
        },
        skill: {
            [Locale.tc]: {
                [SkillType.SKILL_S]: {
                    name: `繪技。百畫投影！`,
                    description: `使自身普攻傷害增加60/75/90/105/120%(4回合)，再使目標受到普攻傷害增加30/45/60/75/90%(8回合)，CD：4`
                },
                [SkillType.SKILL_1]: {
                    name: `繪技。百畫投影`,
                    description: `使自身普攻傷害增加60%(4回合)，再使目標受到普攻傷害增加30%(8回合)，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `繪技。百畫投影`,
                    description: `使自身普攻傷害增加75%(4回合)，再使目標受到普攻傷害增加45%(8回合)，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `繪技。百畫投影`,
                    description: `使自身普攻傷害增加90%(4回合)，再使目標受到普攻傷害增加60%(8回合)，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `繪技。百畫投影`,
                    description: `使自身普攻傷害增加105%(4回合)，再使目標受到普攻傷害增加75%(8回合)，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `繪技。百畫投影`,
                    description: `使自身普攻傷害增加120%(4回合)，再使目標受到普攻傷害增加90%(8回合)，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `後勤補給喵`,
                    description: `使我方全體普攻傷害增加40%(2回合)`
                },
                [SkillType.LEADER]: {
                    name: `純熟社蓄俏水手`,
                    description: `當我方隊伍有至少3名風屬性角色時，我方全體獲得《海鷗盜賊團》\n當我方隊伍有至少2名攻擊者角色時，自身獲得《向著大海航去！》\n\n《海鷗盜賊團》\n攻擊力增加40%\n普攻傷害增加100%\n普攻時，追加「以自身攻擊力65%對目標造成傷害」\n\n《向著大海航去！》\n普攻時，觸發「使目標受到傷害增加5%(最多10層)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `在暴風雨中前行`,
                    description: `普攻時，追加「以自身最大HP5%給予我方全體護盾(1回合)」 \n必殺時，觸發「給予自身普攻時，追加『以自身攻擊力100%對目標造成傷害』(2回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `投影炮擊`,
                    description: `普攻時，追加「以自身攻擊力50%對目標造成傷害」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `悠久留存的回憶`,
                    description: `使我方全體造成傷害增加10%\n普攻時，觸發「使我方全體攻擊力增加10%(最多4層)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `減傷+ (6潛)`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潛)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `绘技。百画投影！`,
                    description: `使自身普攻伤害增加60/75/90/105/120%(4回合)，再使目标受到普攻伤害增加30/45/60/75/90%(8回合)，CD：4`
                },
                [SkillType.SKILL_1]: {
                    name: `绘技。百画投影`,
                    description: `使自身普攻伤害增加60%(4回合)，再使目标受到普攻伤害增加30%(8回合)，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `绘技。百画投影`,
                    description: `使自身普攻伤害增加75%(4回合)，再使目标受到普攻伤害增加45%(8回合)，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `绘技。百画投影`,
                    description: `使自身普攻伤害增加90%(4回合)，再使目标受到普攻伤害增加60%(8回合)，CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `绘技。百画投影`,
                    description: `使自身普攻伤害增加105%(4回合)，再使目标受到普攻伤害增加75%(8回合)，CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `绘技。百画投影`,
                    description: `使自身普攻伤害增加120%(4回合)，再使目标受到普攻伤害增加90%(8回合)，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `後勤补给喵`,
                    description: `使我方全体普攻伤害增加40%(2回合)`
                },
                [SkillType.LEADER]: {
                    name: `纯熟社蓄俏水手`,
                    description: `当我方队伍有至少3名风属性角色时，我方全体获得《海鸥盗贼团》\n当我方队伍有至少2名攻击者角色时，自身获得《向着大海航去！》\n\n《海鸥盗贼团》\n攻击力增加40%\n普攻伤害增加100%\n普攻时，追加「以自身攻击力65%对目标造成伤害」\n\n《向着大海航去！》\n普攻时，触发「使目标受到伤害增加5%(最多10层)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `在暴风雨中前行`,
                    description: `普攻时，追加「以自身最大HP5%给予我方全体护盾(1回合)」 \n必杀时，触发「给予自身普攻时，追加『以自身攻击力100%对目标造成伤害』(2回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `投影炮击`,
                    description: `普攻时，追加「以自身攻击力50%对目标造成伤害」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `悠久留存的回忆`,
                    description: `使我方全体造成伤害增加10%\n普攻时，触发「使我方全体攻击力增加10%(最多4层)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `减伤+ (6潜)`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潜)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 60/75/90/105/120% for 4 turns then increase the target's Damage Taken from Basic Attacks by 30/45/60/75/90% for 8 turns. CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 60% for 4 turns then increase the target's Damage Taken from Basic Attacks by 30% for 8 turns. CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 75% for 4 turns then increase the target's Damage Taken from Basic Attacks by 45% for 8 turns. CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 90% for 4 turns then increase the target's Damage Taken from Basic Attacks by 60% for 8 turns. CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 105% for 4 turns then increase the target's Damage Taken from Basic Attacks by 75% for 8 turns. CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `Hundred Drawings Projection`,
                    description: `Increase your Basic Attack Power by 120% for 4 turns then increase the target's Damage Taken from Basic Attacks by 90% for 8 turns. CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `Logistics Supply Meow`,
                    description: `Increase the party's Basic Attack Power by 40% for 2 turns`
                },
                [SkillType.LEADER]: {
                    name: `Skilled Charming Sailor`,
                    description: `When there are 3 or more Wind allies on your team, grant all allies "Seagull Thieves".\nWhen there are 2 or more Attackers on your team, grant self "Sail Toward the Sea!".\n\n"Seagull Thieves"\nIncrease Attack Power by 40%.\nIncrease Basic Attack Power by 100%.\nOn Basic Attack, deal additional damage to the target (65% Attack Power).\n\n"Sail Toward the Sea!"\nOn Basic Attack, increase the target's Damage Taken by 5% (max 10 stacks).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Facing Storm`,
                    description: `On Basic Attack, grant the party a Shield for 5% of your max HP for 1 turn.\nOn Ultimate Skill, trigger the following effect: On Basic Attack, deal additional damage to the target (100% Attack Power) for 2 turns.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Projection Bombardment`,
                    description: `On Basic Attack, deal additional damage to the target (50% Attack Power).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Eternal Memories`,
                    description: `Increase the party's Damage Output by 10%.\nOn Basic Attack, increase the party's Damage Power by 10% (max 4 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage Reduction+`,
                    description: `Reduce your Damage Taken by 5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain immunity to Sleep`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `画技・絵画投影`,
                    description: `自分の通常攻撃ダメージを60/75/90/105/120%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを30/45/60/75/90%増加させる(8ターン)[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `画技・絵画投影`,
                    description: `自分の通常攻撃ダメージを60%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを30%増加させる(8ターン)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `画技・絵画投影`,
                    description: `自分の通常攻撃ダメージを75%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを45%増加させる(8ターン)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `画技・絵画投影`,
                    description: `自分の通常攻撃ダメージを90%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを60%増加させる(8ターン)[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `画技・絵画投影`,
                    description: `自分の通常攻撃ダメージを105%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを75%増加させる(8ターン)[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `画技・絵画投影`,
                    description: `自分の通常攻撃ダメージを120%増加させ(4ターン)、ターゲットが受ける通常攻撃ダメージを90%増加させる(8ターン)[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `後方補給にゃ`,
                    description: `味方全体の通常攻撃ダメージを40%増加させる(2ターン)`
                },
                [SkillType.LEADER]: {
                    name: `熟練社畜船乗り`,
                    description: `味方に風属性メンバーが3人以上いる時、味方全体が《カモメ海賊団》を得る\n味方にアタッカーが2人以上いる時、自分が《大海原へ航海！》を得る\n\n《カモメ海賊団》\n攻撃力が40%増加する\n通常攻撃ダメージが100%増加する\n通常攻撃時「自分の65%の攻撃力でターゲットにダメージを与える」を追加する\n\n《大海原へ航海！》\n通常攻撃時「ターゲットが受けるダメージを5%増加させる(最高10スタック)」を誘発する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `暴風雨の航海`,
                    description: `通常攻撃時「自分の最大HPの5%分、味方全体に盾を張る(1ターン)」を追加する\n必殺技攻撃時「自分に通常攻撃時『自分の100%の攻撃力でターゲットにダメージを与える』を追加する(2ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `投影砲撃`,
                    description: `通常攻撃時「自分の50%の攻撃力でターゲットにダメージを与える」を追加する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `永遠の思い出 `,
                    description: `味方全体の与えるダメージを10%増加させる\n通常攻撃時「味方全体の攻撃力を10%増加させる(最高4スタック)」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ減少+`,
                    description: `自分が受けるダメージを5%減少させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `睡眠無効`,
                    description: `自分を睡眠無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `회기・백화투영`,
                    description: `자신의 일반 공격 데미지 60/75/90/105/120% 증가(4턴), 타깃이 받는 일반 공격 데미지 30/45/60/75/90% 증가(8턴) [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `회기・백화투영`,
                    description: `자신의 일반 공격 데미지 60% 증가(4턴), 타깃이 받는 일반 공격 데미지 30% 증가(8턴) [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `회기・백화투영`,
                    description: `자신의 일반 공격 데미지 75% 증가(4턴), 타깃이 받는 일반 공격 데미지 45% 증가(8턴) [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `회기・백화투영`,
                    description: `자신의 일반 공격 데미지 90% 증가(4턴), 타깃이 받는 일반 공격 데미지 60% 증가(8턴) [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `회기・백화투영`,
                    description: `자신의 일반 공격 데미지 105% 증가(4턴), 타깃이 받는 일반 공격 데미지 75% 증가(8턴) [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `회기・백화투영`,
                    description: `자신의 일반 공격 데미지 120% 증가(4턴), 타깃이 받는 일반 공격 데미지 90% 증가(8턴) [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `후방 보급이다냥`,
                    description: `아군 전체의 일반 공격 데미지 40% 증가(2턴)`
                },
                [SkillType.LEADER]: {
                    name: `노예 선원`,
                    description: `팀에 풍속성 캐릭터가 최소  3명 있을 시 아군 전체는 《갈매기 도적단》 획득\n팀에 딜러가 최소  2명 있을 시 자신은 《대해를 향하여!》획득\n\n《갈매기 도적단》\n공격 데미지 40% 증가\n일반 공격 데미지 100% 증가\n일반 공격 시 「자신의 공격 데미지의 65%만큼 타깃에게 데미지」추가\n\n《대해를 향하여!》\n일반 공격 시 「타깃이 받는 데미지 5% 증가(최대10중첩)」발동`
                },
                [SkillType.PASSIVE_1]: {
                    name: `폭풍우 감행`,
                    description: `일반 공격 시 「자신의 최대 HP의 5%만큼 아군 전체의 아머 강화(1회)」추가\n궁극기 발동 시 「자신이 일반 공격을 가할 시 『자신의 공격 데미지의 100%만큼 타깃에게 데미지』 추가(2턴)」발동`
                },
                [SkillType.PASSIVE_2]: {
                    name: `프로젝터 캐논`,
                    description: `일반 공격 시 「자신의 공격 데미지의 50%만큼 타깃에게 데미지」추가`
                },
                [SkillType.PASSIVE_3]: {
                    name: `오랜 추억`,
                    description: `아군 전체가 가하는 데미지 10% 증가\n일반 공격 시 「아군 전체의 공격 데미지 10% 증가(최대 4중첩)」발동`
                },
                [SkillType.GENERAL_1]: {
                    name: `피해 감소+`,
                    description: `자신이 받는 데미지 5% 감소`
                },
                [SkillType.GENERAL_2]: {
                    name: `수면 면역`,
                    description: `자신에게 수면 면역 부여`
                }
            }
        }
    },
]