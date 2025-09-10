import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10181: SkillSet[] =  [
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
                    name: `今天晚餐吃薑燒豬肉！`,
                    description: `使自身獲得2層《飽足感》(最多5層)，並使我方全體造成傷害增加12/14/16/18/20%(1回合)、造成傷害增加3/3.5/4/4.5/5%(最多2層)、必殺時，追加「以自身攻擊力75/87.5/100/112.5/125%對目標造成傷害」(1回合)、普攻時，追加「以自身攻擊力37.5/43.8/50/56.3/62.5%對目標造成傷害」(4回合)(不可疊加)，再以自身攻擊力330/376/422/468/514%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `今天晚餐吃薑燒豬肉！`,
                    description: `使自身獲得2層《飽足感》(最多5層)，並使我方全體造成傷害增加12%(1回合)、造成傷害增加3%(最多2層)、必殺時，追加「以自身攻擊力75%對目標造成傷害」(1回合)、普攻時，追加「以自身攻擊力37.5%對目標造成傷害」(4回合)(不可疊加)，再以自身攻擊力330%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `今天晚餐吃薑燒豬肉！`,
                    description: `使自身獲得2層《飽足感》(最多5層)，並使我方全體造成傷害增加14%(1回合)、造成傷害增加3.5%(最多2層)、必殺時，追加「以自身攻擊力87.5%對目標造成傷害」(1回合)、普攻時，追加「以自身攻擊力43.8%對目標造成傷害」(4回合)(不可疊加)，再以自身攻擊力376%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `今天晚餐吃薑燒豬肉！`,
                    description: `使自身獲得2層《飽足感》(最多5層)，並使我方全體造成傷害增加16%(1回合)、造成傷害增加4%(最多2層)、必殺時，追加「以自身攻擊力100%對目標造成傷害」(1回合)、普攻時，追加「以自身攻擊力50%對目標造成傷害」(4回合)(不可疊加)，再以自身攻擊力422%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `今天晚餐吃薑燒豬肉！`,
                    description: `使自身獲得2層《飽足感》(最多5層)，並使我方全體造成傷害增加18%(1回合)、造成傷害增加4.5%(最多2層)、必殺時，追加「以自身攻擊力112.5%對目標造成傷害」(1回合)、普攻時，追加「以自身攻擊力56.3%對目標造成傷害」(4回合)(不可疊加)，再以自身攻擊力468%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `今天晚餐吃薑燒豬肉！`,
                    description: `使自身獲得2層《飽足感》(最多5層)，並使我方全體造成傷害增加20%(1回合)、造成傷害增加5%(最多2層)、必殺時，追加「以自身攻擊力125%對目標造成傷害」(1回合)、普攻時，追加「以自身攻擊力62.5%對目標造成傷害」(4回合)(不可疊加)，再以自身攻擊力514%對目標造成傷害。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `貪吃胃口好`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `「綾音秀」的主人公`,
                    description: `自身最大HP增加60%\n自身不受《記憶中的美味》所給予「嘲諷」效果影響\n自身獲得「每經過1回合時，觸發『使自身獲得嘲諷(1回合)』」\n自身獲得「防禦時，觸發『《掙脫夢境》』」\n自身以外我方全體最大HP增加30%\n自身以外我方全體獲得「當前HP≧50%時，發動『每經過1回合時，觸發『《最佳配角》』』」\n\n《掙脫夢境》\n清除自身《「綾音秀」的主人公》所給予「嘲諷」效果\n以自身最大HP10%給予我方全體護盾(1回合)\n\n《最佳配角》\n使我方全體攻擊力增加12.5%(1回合)\n使我方全體造成傷害增加7%(1回合)\n使我方全體普攻傷害增加20%(1回合)\n使我方全體必殺技傷害增加10%(1回合)\n使敵方全體受到傷害增加5%(1回合)\n使敵方全體受到全屬性傷害增加7%(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `記憶中的美味`,
                    description: `攻擊時，觸發「使自身獲得1層《飽足感》(最多5層)」\n當自身《飽足感》層數≧1時，開啟「防禦時，觸發『使自身獲得嘲諷(1回合)』」\n當自身《飽足感》層數≧2時，開啟「攻擊時，觸發『使自身進入防禦狀態』」\n當自身《飽足感》層數≧3時，開啟「必殺時，觸發『以自身最大HP20%給予我方全體護盾(2回合)』」\n當自身《飽足感》層數≧4時，開啟「造成傷害增加30%」\n當自身《飽足感》層數=5時，開啟「防禦減傷效果增加10%」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `運動健將`,
                    description: `被攻擊時，觸發「使自身獲得1層《劇烈運動》(最多1層)」\n當自身《劇烈運動》層數=1時，開啟「每經過1回合時，觸發『《促進消化》』」\n\n《促進消化》\n使我方全體攻擊力增加30%(2回合)(不可疊加)\n使自身《飽足感》、《劇烈運動》層數減少1層`
                },
                [SkillType.PASSIVE_3]: {
                    name: `持劍的睡美人`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少4回合、獲得2層《飽足感》(最多5層)」(觸發1次後清除)\n我方全體普攻傷害增加70%\n我方全體必殺技傷害增加35%\n我方全體受到護盾效果增加30%`
                },
                [SkillType.GENERAL_1]: {
                    name: `減傷+`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `今天晚餐吃薑烧猪肉！`,
                    description: `使自身获得2层《饱足感》(最多5层)，并使我方全体造成伤害增加12/14/16/18/20%(1回合)、造成伤害增加3/3.5/4/4.5/5%(最多2层)、必杀时，追加「以自身攻击力75/87.5/100/112.5/125%对目标造成伤害」(1回合)、普攻时，追加「以自身攻击力37.5/43.8/50/56.3/62.5%对目标造成伤害」(4回合)(不可叠加)，再以自身攻击力330/376/422/468/514%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `今天晚餐吃薑烧猪肉！`,
                    description: `使自身获得2层《饱足感》(最多5层)，并使我方全体造成伤害增加12%(1回合)、造成伤害增加3%(最多2层)、必杀时，追加「以自身攻击力75%对目标造成伤害」(1回合)、普攻时，追加「以自身攻击力37.5%对目标造成伤害」(4回合)(不可叠加)，再以自身攻击力330%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `今天晚餐吃薑烧猪肉！`,
                    description: `使自身获得2层《饱足感》(最多5层)，并使我方全体造成伤害增加14%(1回合)、造成伤害增加3.5%(最多2层)、必杀时，追加「以自身攻击力87.5%对目标造成伤害」(1回合)、普攻时，追加「以自身攻击力43.8%对目标造成伤害」(4回合)(不可叠加)，再以自身攻击力376%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `今天晚餐吃薑烧猪肉！`,
                    description: `使自身获得2层《饱足感》(最多5层)，并使我方全体造成伤害增加16%(1回合)、造成伤害增加4%(最多2层)、必杀时，追加「以自身攻击力100%对目标造成伤害」(1回合)、普攻时，追加「以自身攻击力50%对目标造成伤害」(4回合)(不可叠加)，再以自身攻击力422%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `今天晚餐吃薑烧猪肉！`,
                    description: `使自身获得2层《饱足感》(最多5层)，并使我方全体造成伤害增加18%(1回合)、造成伤害增加4.5%(最多2层)、必杀时，追加「以自身攻击力112.5%对目标造成伤害」(1回合)、普攻时，追加「以自身攻击力56.3%对目标造成伤害」(4回合)(不可叠加)，再以自身攻击力468%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `今天晚餐吃薑烧猪肉！`,
                    description: `使自身获得2层《饱足感》(最多5层)，并使我方全体造成伤害增加20%(1回合)、造成伤害增加5%(最多2层)、必杀时，追加「以自身攻击力125%对目标造成伤害」(1回合)、普攻时，追加「以自身攻击力62.5%对目标造成伤害」(4回合)(不可叠加)，再以自身攻击力514%对目标造成伤害。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `贪吃胃口好`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `「绫音秀」的主人公`,
                    description: `自身最大HP增加60%\n自身不受《记忆中的美味》所给予「嘲讽」效果影响\n自身获得「每经过1回合时，触发『使自身获得嘲讽(1回合)』」\n自身获得「防御时，触发『《挣脱梦境》』」\n自身以外我方全体最大HP增加30%\n自身以外我方全体获得「当前HP≧50%时，发动『每经过1回合时，触发『《最佳配角》』』」\n\n《挣脱梦境》\n清除自身《「绫音秀」的主人公》所给予「嘲讽」效果\n以自身最大HP10%给予我方全体护盾(1回合)\n\n《最佳配角》\n使我方全体攻击力增加12.5%(1回合)\n使我方全体造成伤害增加7%(1回合)\n使我方全体普攻伤害增加20%(1回合)\n使我方全体必杀技伤害增加10%(1回合)\n使敌方全体受到伤害增加5%(1回合)\n使敌方全体受到全属性伤害增加7%(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `记忆中的美味`,
                    description: `攻击时，触发「使自身获得1层《饱足感》(最多5层)」\n当自身《饱足感》层数≧1时，开启「防御时，触发『使自身获得嘲讽(1回合)』」\n当自身《饱足感》层数≧2时，开启「攻击时，触发『使自身进入防御状态』」\n当自身《饱足感》层数≧3时，开启「必杀时，触发『以自身最大HP20%给予我方全体护盾(2回合)』」\n当自身《饱足感》层数≧4时，开启「造成伤害增加30%」\n当自身《饱足感》层数=5时，开启「防御减伤效果增加10%」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `运动健将`,
                    description: `被攻击时，触发「使自身获得1层《剧烈运动》(最多1层)」\n当自身《剧烈运动》层数=1时，开启「每经过1回合时，触发『《促进消化》』」\n\n《促进消化》\n使我方全体攻击力增加30%(2回合)(不可叠加)\n使自身《饱足感》、《剧烈运动》层数减少1层`
                },
                [SkillType.PASSIVE_3]: {
                    name: `持剑的睡美人`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少4回合、获得2层《饱足感》(最多5层)」(触发1次后清除)\n我方全体普攻伤害增加70%\n我方全体必杀技伤害增加35%\n我方全体受到护盾效果增加30%`
                },
                [SkillType.GENERAL_1]: {
                    name: `减伤+`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Ginger Pork Tonight!`,
                    description: `Gain yourself 2 stacks of "Satiety" (max 5 stacks), increase the party's Damage Output by 12/14/16/18/20% for 1 turn, increase Damage Output by 3/3.5/4/4.5/5% (max 2 stacks). On Ultimate Skill, deal additional damage to the target for 1 turn (75/87.5/100/112.5/125% Attack Power). On Basic Attack, deal additional damage to the target for 4 turns (37.5/43.8/50/56.3/62.5% Attack Power) (Non-stackable), then damage the target (330/376/422/468/514% Attack Power). CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `Ginger Pork Tonight!`,
                    description: `Gain yourself 2 stacks of "Satiety" (max 5 stacks), increase the party's Damage Output by 12% for 1 turn, increase Damage Output by 3% (max 2 stacks). On Ultimate Skill, deal additional damage to the target for 1 turn (75% Attack Power). On Basic Attack, deal additional damage to the target for 4 turns (37.5% Attack Power) (Non-stackable), then damage the target (330% Attack Power). CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `Ginger Pork Tonight!`,
                    description: `Gain yourself 2 stacks of "Satiety" (max 5 stacks), increase the party's Damage Output by 14% for 1 turn, increase Damage Output by 3.5% (max 2 stacks). On Ultimate Skill, deal additional damage to the target for 1 turn (87.5% Attack Power). On Basic Attack, deal additional damage to the target for 4 turns (43.8% Attack Power) (Non-stackable), then damage the target (376% Attack Power). CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `Ginger Pork Tonight!`,
                    description: `Gain yourself 2 stacks of "Satiety" (max 5 stacks), increase the party's Damage Output by 16% for 1 turn, increase Damage Output by 4% (max 2 stacks). On Ultimate Skill, deal additional damage to the target for 1 turn (100% Attack Power). On Basic Attack, deal additional damage to the target for 4 turns (50% Attack Power) (Non-stackable), then damage the target (422% Attack Power). CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `Ginger Pork Tonight!`,
                    description: `Gain yourself 2 stacks of "Satiety" (max 5 stacks), increase the party's Damage Output by 18% for 1 turn, increase Damage Output by 4.5% (max 2 stacks). On Ultimate Skill, deal additional damage to the target for 1 turn (112.5% Attack Power). On Basic Attack, deal additional damage to the target for 4 turns (56.3% Attack Power) (Non-stackable), then damage the target (468% Attack Power). CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `Ginger Pork Tonight!`,
                    description: `Gain yourself 2 stacks of "Satiety" (max 5 stacks), increase the party's Damage Output by 20% for 1 turn, increase Damage Output by 5% (max 2 stacks). On Ultimate Skill, deal additional damage to the target for 1 turn (125% Attack Power). On Basic Attack, deal additional damage to the target for 4 turns (62.5% Attack Power) (Non-stackable), then damage the target (514% Attack Power). CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `Big Eater`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Ayane Show Pro`,
                    description: `Increase your max HP by 60%.\nYou won't be affected by the Taunt granted by "Tasty Memory".\nGain yourself the following effect: After every 1 turn, trigger the following effect: Gain yourself Taunt for 1 turn.\nGain yourself the following effect: When in Guard Stance, trigger "Dreambreak".\nOther allies' max HP increases by 30%.\nOther allies gain the following effect: When the current HP is ≧ 50%, activate "After every 1 turn, trigger "Best Supporting Role".\n\nDream Break\nRemove the Taunt granted by "Ayane Show Pro".\nThe party gains a Shield for 10% of your max HP for 1 turn.\n\nBest Supporting Role\nIncrease the party's Attack Power by 12.5% for 1 turn.\nIncrease the party's Damage Output by 7% for 1 turn.\nIncrease the party's Basic Attack Power by 20% for 1 turn.\nIncrease the party's Ultimate Skill Power by 10% for 1 turn.\nIncrease all enemies' Damage Taken by 5% for 1 turn.\nIncrease all enemies' Damage Taken from all attribute attacks by 7% for 1 turn.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Tasty Memory`,
                    description: `On Attack, trigger the following effect: Gain yourself 1 stack of "Satiety" (max 5 stacks).\nWhen your "Satiety" stacks are ≧ 1, activate "When in Guard Stance, gain yourself Taunt for 1 turn".\nWhen your "Satiety" stacks are ≧ 2, activate "On Attack, enter Guard Stance".\nWhen your "Satiety" stacks are ≧ 3, activate "On Ultimate Skill, trigger the following effect: The party gains a Shield for 20% of your max HP for 2 turns".\nWhen your "Satiety" stacks are ≧ 4, activate "Increase Damage Output by 30%".\nWhen your "Satiety" stacks are = 5, activate "Decrease Damage Taken in Guard Stance by 10%".`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Athl Champ`,
                    description: `When attacked, trigger the following effect: Gain yourself 1 stack of "Intense Exercise" (max 1 stack).\nWhen your "Intense Exercise" stacks are = 1, activate "After every 1 turn, trigger 'Help Digest'."\n\nHelp Digest\nIncrease the party's Attack Power by 30% for 2 turns (Non-stackable).\nDecrease 1 stack of your "Satiety" and "Intense Exercise".`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Operation Sleeping Bladeswinger`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 4 turns, gain 2 stacks of "Satiety" (max 5 stacks) (removes after triggering once).\nIncrease the party's Attack Power by 70%. \nIncrease the party's Ultimate Skill Power by 35%.\nIncrease the party's Shield effect by 30%.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage Reduction+`,
                    description: `Decrease your Damage Taken by 5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain yourself Immunity to Silence.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `今日の夕飯は生姜焼き！`,
                    description: `自分が《満腹感》を2スタック獲得し(最高5スタック)、味方全体の与えるダメージを12/14/16/18/20%増加させ(1ターン)、与えるダメージが3/3.5/4/4.5/5%増加し(最高2スタック)、必殺技攻撃時「自分の75/87.5/100/112.5/125%の攻撃力でターゲットにダメージを与える」を追加し(1ターン)、通常攻撃時「自分の37.5/43.8/50/56.3/62.5%の攻撃力でターゲットにダメージを与える」を追加し(4ターン)(スタック不可)、さらに自分の330/376/422/468/514%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `今日の夕飯は生姜焼き！`,
                    description: `自分が《満腹感》を2スタック獲得し(最高5スタック)、味方全体の与えるダメージを12%増加させ(1ターン)、与えるダメージが3%増加し(最高2スタック)、必殺技攻撃時「自分の75%の攻撃力でターゲットにダメージを与える」を追加し(1ターン)、通常攻撃時「自分の37.5%の攻撃力でターゲットにダメージを与える」を追加し(4ターン)(スタック不可)、さらに自分の330%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `今日の夕飯は生姜焼き！`,
                    description: `自分が《満腹感》を2スタック獲得し(最高5スタック)、味方全体の与えるダメージを14%増加させ(1ターン)、与えるダメージが3.5%増加し(最高2スタック)、必殺技攻撃時「自分の87.5%の攻撃力でターゲットにダメージを与える」を追加し(1ターン)、通常攻撃時「自分の43.8%の攻撃力でターゲットにダメージを与える」を追加し(4ターン)(スタック不可)、さらに自分の376%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `今日の夕飯は生姜焼き！`,
                    description: `自分が《満腹感》を2スタック獲得し(最高5スタック)、味方全体の与えるダメージを16%増加させ(1ターン)、与えるダメージが4%増加し(最高2スタック)、必殺技攻撃時「自分の100%の攻撃力でターゲットにダメージを与える」を追加し(1ターン)、通常攻撃時「自分の50%の攻撃力でターゲットにダメージを与える」を追加し(4ターン)(スタック不可)、さらに自分の422%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `今日の夕飯は生姜焼き！`,
                    description: `自分が《満腹感》を2スタック獲得し(最高5スタック)、味方全体の与えるダメージを18%増加させ(1ターン)、与えるダメージが4.5%増加し(最高2スタック)、必殺技攻撃時「自分の112.5%の攻撃力でターゲットにダメージを与える」を追加し(1ターン)、通常攻撃時「自分の56.3%の攻撃力でターゲットにダメージを与える」を追加し(4ターン)(スタック不可)、さらに自分の468%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `今日の夕飯は生姜焼き！`,
                    description: `自分が《満腹感》を2スタック獲得し(最高5スタック)、味方全体の与えるダメージを20%増加させ(1ターン)、与えるダメージが5%増加し(最高2スタック)、必殺技攻撃時「自分の125%の攻撃力でターゲットにダメージを与える」を追加し(1ターン)、通常攻撃時「自分の62.5%の攻撃力でターゲットにダメージを与える」を追加し(4ターン)(スタック不可)、さらに自分の514%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `食いしん坊`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `「綾音ショー」の主人公`,
                    description: `自分の最大HPが60%増加する\n自分を《思い出の味》の与える「挑発」効果無効にする\n自分が「1ターン毎に『自分が挑発を獲得する(1ターン)』を誘発する」を獲得する\n自分が「防御時《夢から脱出》を誘発する」を獲得する\n自分以外の味方全体の最大HPが30%増加する\n自分以外の味方全体が「現在のHPが50%以上の時『1ターン毎に《最高のわき役》を誘発する』を発動する」を獲得する\n\n《夢から脱出》\n自分の《「綾音ショー」の主人公》が与えるすべての「挑発」效果を消す\n自分の最大HPの10%分味方全体に盾を張る(1ターン)\n\n《最高のわき役》\n味方全体の攻撃力を12.5%増加させる(1ターン)\n味方全体の与えるダメージを7%増加させる(1ターン)\n味方全体の通常攻撃ダメージを20%増加させる(1ターン)\n味方全体の必殺技ダメージを10%増加させる(1ターン)\n敵全体の受けるダメージを5%増加させる(1ターン)\n敵全体の全属性から受けるダメージを7%増加させる(1ターン)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `思い出の味`,
                    description: `攻撃時「自分が《満腹感》を1スタック獲得する(最高5スタック)」を誘発する\n自分の《満腹感》のスタック数が1以上の時「防御時『自分が挑発を獲得する(1ターン)』誘発する」を発動する\n自分の《満腹感》のスタック数が2以上の時「攻撃時『自分を防御状態にする』を誘発する」を発動する\n自分の《満腹感》のスタック数が3以上の時「必殺技攻撃時『自分の最大HPの20%分味方全体に盾を張る(2ターン)』を誘発する」を発動する\n自分の《満腹感》のスタック数が4以上の時「与えるダメージが30%増加する」を発動する\n自分の《満腹感》のスタック数がちょうど5の時「防御によるダメージ減少効果が10%増加する」を発動する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `スポーツ万能`,
                    description: `攻撃を受けた時「自分が《激しい運動》を1スタック獲得する(最高1スタック)」を誘発する\n自分の《激しい運動》のスタック数がちょうど1の時「1ターン毎に《消化促進》を誘発する」を発動する\n\n《消化促進》\n味方全体の攻撃力を30%増加させる(2ターン)(スタック不可)\n自分の《満腹感》と《激しい運動》のスタック数を1減少させる`
                },
                [SkillType.PASSIVE_3]: {
                    name: `剣を持つ眠り姫`,
                    description: `1ターン目に「自分の現在の必殺技CDを4ターン減少させ、《満腹感》を2スタック獲得する(最高5スタック)」を誘発する(誘発1回後に解除)\n味方全体の通常攻撃ダメージが70%増加する\n味方全体の必殺技ダメージが35%増加する\n味方全体の受ける盾の効果が30%増加する`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ減少+`,
                    description: `自分が受けるダメージを5%減少させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `오늘 저녁은 쇼가야키!`,
                    description: `자신은 2중첩의《포만감》획득(최대 5중첩), 아군 전체의 가하는 데미지 12/14/16/18/20% 증가(1턴), 가하는 데미지 3/3.5/4/4.5/5% 증가(최대 2중첩), 궁극기 발동 시 「자신의 공격 데미지의 75/87.5/100/112.5/125%만큼 타깃에게 데미지」추가(1턴), 일반 공격 시 「자신의 공격 데미지의 37.5/43.8/50/56.3/62.5%만큼 타깃에게 데미지」추가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 330/376/422/468/514%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `오늘 저녁은 쇼가야키!`,
                    description: `자신은 2중첩의《포만감》획득(최대 5중첩), 아군 전체의 가하는 데미지 12% 증가(1턴), 가하는 데미지 3% 증가(최대 2중첩), 궁극기 발동 시 「자신의 공격 데미지의 75%만큼 타깃에게 데미지」추가(1턴), 일반 공격 시 「자신의 공격 데미지의 37.5%만큼 타깃에게 데미지」추가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 330%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `오늘 저녁은 쇼가야키!`,
                    description: `자신은 2중첩의《포만감》획득(최대 5중첩), 아군 전체의 가하는 데미지 14% 증가(1턴), 가하는 데미지 3.5% 증가(최대 2중첩), 궁극기 발동 시 「자신의 공격 데미지의 87.5%만큼 타깃에게 데미지」추가(1턴), 일반 공격 시 「자신의 공격 데미지의 43.8%만큼 타깃에게 데미지」추가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 376%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `오늘 저녁은 쇼가야키!`,
                    description: `자신은 2중첩의《포만감》획득(최대 5중첩), 아군 전체의 가하는 데미지 16% 증가(1턴), 가하는 데미지 4% 증가(최대 2중첩), 궁극기 발동 시 「자신의 공격 데미지의 100%만큼 타깃에게 데미지」추가(1턴), 일반 공격 시 「자신의 공격 데미지의 50%만큼 타깃에게 데미지」추가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 422%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `오늘 저녁은 쇼가야키!`,
                    description: `자신은 2중첩의《포만감》획득(최대 5중첩), 아군 전체의 가하는 데미지 18% 증가(1턴), 가하는 데미지 4.5% 증가(최대 2중첩), 궁극기 발동 시 「자신의 공격 데미지의 112.5%만큼 타깃에게 데미지」추가(1턴), 일반 공격 시 「자신의 공격 데미지의 56.3%만큼 타깃에게 데미지」추가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 468%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `오늘 저녁은 쇼가야키!`,
                    description: `자신은 2중첩의《포만감》획득(최대 5중첩), 아군 전체의 가하는 데미지 20% 증가(1턴), 가하는 데미지 5% 증가(최대 2중첩), 궁극기 발동 시 「자신의 공격 데미지의 125%만큼 타깃에게 데미지」추가(1턴), 일반 공격 시 「자신의 공격 데미지의 62.5%만큼 타깃에게 데미지」추가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 514%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `식탐의 대가`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `「아야네 쇼」의 주인공`,
                    description: `자신의 최대 HP 60% 증가\n자신은《기억 속의 맛》이 부여한「도발」 효과의 영향을 받지 않음\n자신은 「매 1턴 종료 시 『자신은 도발 획득(1턴)』 트리거」획득\n자신은 「방어 시 『《꿈 탈출》』 트리거」 획득\n자신 이외의 아군 전체의 최대 HP 30% 증가\n자신 이외의 아군 전체는 「현존 HP≧50%일 시 『매 1턴 종료 시 「《최우수 조연》」 트리거』 발동」 획득\n\n《꿈 탈출》\n자신의《「아야네 쇼」의 주인공》이 부여한 「도발」 효과 제거\n자신의 최대 HP 10%만큼 아군 전체의 아머 강화(1턴)\n\n《최우수 조연》\n아군 전체의 공격 데미지 12.5% 증가(1턴)\n아군 전체의 가하는 데미지 7% 증가(1턴)\n아군 전체의 일반 공격 데미지 20% 증가(1턴)\n아군 전체의 궁극기 데미지 10% 증가(1턴)\n적 전체가 받는 데미지 5% 증가(1턴)\n적 전체가 받는 모든 속성 데미지 7% 증가(1턴)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `기억 속의 맛`,
                    description: `공격 시 「자신은 1중첩의 《포만감》 획득(최대 5중첩)」 트리거\n자신의 《포만감》 중첩수≧1일 시 「방어 시 『자신은 도발 획득(1턴)』 트리거」 활성화\n자신의 《포만감》 중첩수≧2일 시 「공격 시 『자신은 방어 상태 돌입』 트리거」 활성화\n자신의 《포만감》 중첩수≧3일 시 「궁극기 발동 시 『자신의 최대 HP 20%만큼 아군 전체의 아머 강화(2턴)』 트리거」 활성화\n자신의 《포만감》 중첩수≧4일 시 「가하는 데미지 30% 증가」활성화\n자신의 《포만감》 중첩수=5일 시 「방어 데미지 감소 효과 10% 증가」활성화`
                },
                [SkillType.PASSIVE_2]: {
                    name: `스포츠 만능`,
                    description: `피격 시 「자신은 1중첩의 《격렬한 운동》 획득(최대 1중첩)」 트리거\n자신의 《격렬한 운동》 중첩수=1일 시 「매 1턴 종료 시 『《소화 촉진》』 트리거」 활성화\n\n《소화 촉진》\n아군 전체의 공격 데미지 30% 증가(2턴)(중첩 불가)\n자신의 《포만감》, 《격렬한 운동》 중첩수 1중첩 감소`
                },
                [SkillType.PASSIVE_3]: {
                    name: `잠자는 숲 속의 검사`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 4턴 감소, 2중첩의《포만감》 획득(최대 5중첩)」 트리거(1회 트리거 후 제거)\n아군 전체의 일반 공격 데미지 70% 증가\n아군 전체의 궁극기 데미지 35% 증가\n아군 전체가 받는 아머 강화 효과 30% 증가`
                },
                [SkillType.GENERAL_1]: {
                    name: `받는 데미지 감소+`,
                    description: `자신이 받는 데미지 5% 감소`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 효과`
                }
            }
        }
    },
]