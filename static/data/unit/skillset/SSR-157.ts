import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10186: SkillSet[] =  [
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
                    name: `女王的侍奉`,
                    description: `使我方全體水屬性攻擊者、守護者、妨礙者普攻傷害增加60/70/80/90/100%(最多1層)、獲得「普攻時，追加『以自身攻擊力27/31.5/36/40.5/45%對目標造成傷害』(50回合)(不可疊加)」，並使敵方全體受到傷害增加12/14/16/18/20%(最多1層)。CD:1`
                },
                [SkillType.SKILL_1]: {
                    name: `女王的侍奉`,
                    description: `使我方全體水屬性攻擊者、守護者、妨礙者普攻傷害增加60%(最多1層)、獲得「普攻時，追加『以自身攻擊力27%對目標造成傷害』(50回合)(不可疊加)」，並使敵方全體受到傷害增加12%(最多1層)。CD:1`
                },
                [SkillType.SKILL_2]: {
                    name: `女王的侍奉`,
                    description: `使我方全體水屬性攻擊者、守護者、妨礙者普攻傷害增加70%(最多1層)、獲得「普攻時，追加『以自身攻擊力31.5%對目標造成傷害』(50回合)(不可疊加)」，並使敵方全體受到傷害增加14%(最多1層)。CD:1`
                },
                [SkillType.SKILL_3]: {
                    name: `女王的侍奉`,
                    description: `使我方全體水屬性攻擊者、守護者、妨礙者普攻傷害增加80%(最多1層)、獲得「普攻時，追加『以自身攻擊力36%對目標造成傷害』(50回合)(不可疊加)」，並使敵方全體受到傷害增加16%(最多1層)。CD:1`
                },
                [SkillType.SKILL_4]: {
                    name: `女王的侍奉`,
                    description: `使我方全體水屬性攻擊者、守護者、妨礙者普攻傷害增加90%(最多1層)、獲得「普攻時，追加『以自身攻擊力40.5%對目標造成傷害』(50回合)(不可疊加)」，並使敵方全體受到傷害增加18%(最多1層)。CD:1`
                },
                [SkillType.SKILL_5]: {
                    name: `女王的侍奉`,
                    description: `使我方全體水屬性攻擊者、守護者、妨礙者普攻傷害增加100%(最多1層)、獲得「普攻時，追加『以自身攻擊力45%對目標造成傷害』(50回合)(不可疊加)」，並使敵方全體受到傷害增加20%(最多1層)。CD:1`
                },
                [SkillType.ATTACK]: {
                    name: `愛心手作甜點`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `清潔、侍奉兩不誤`,
                    description: `我方全體最大HP增加45%\n我方全體水屬性角色獲得「我方隊伍闇屬性角色有2人以上時，開啟『《女僕清潔隊》』」\n我方全體闇屬性角色獲得「我方隊伍水屬性角色有2人以上時，開啟『《女僕侍奉隊》』」\n\n《女僕清潔隊》\n攻擊力增加50%\n普攻傷害增加100%\n造成傷害增加40%\n普攻時，追加「以自身攻擊力50%對目標造成傷害」\n普攻時，觸發「使目標受到傷害增加0.75%(最多40層)」\n普攻時，觸發「使目標受到水屬性傷害增加2%(最多20層)」\n\n《女僕侍奉隊》\n攻擊力增加100%\n普攻傷害增加150%\n造成傷害增加40%\n普攻時，追加「以自身攻擊力80%對目標造成傷害」\n普攻時，觸發「使目標受到傷害增加0.75%(最多40層)」\n普攻時，觸發「使目標受到闇屬性傷害增加3.5%(最多20層)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `稍微放個假也不錯`,
                    description: `第1回合時，觸發「《突如其來的假期》」(觸發1次後清除)\n自身《凱薩大人的專屬女僕》層數=1時，開啟「《專屬女僕的服侍》」\n\n《突如其來的假期》\n使自身當前必殺技CD減少1回合\n使自身獲得「必殺時，觸發『使自身獲得1層《凱薩大人的專屬女僕》(最多1層)』(50回合)(觸發1次後清除)」\n\n《專屬女僕的服侍》\n造成傷害增加30%\n普攻時，追加「以自身攻擊力50%對目標造成傷害」\n必殺時，觸發「《假期結束》」\n\n《假期結束》\n清除自身《凱薩大人的專屬女僕》所有層數\n使自身獲得1層《精靈一族的完美女王》(最多1層)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `不忘王者的責任`,
                    description: `防禦時，觸發「使自身獲得嘲諷(1回合)」\n自身《精靈一族的完美女王》層數=1時，開啟「《完美女王的庇護》」\n\n《完美女王的庇護》\n受到傷害減少10%\n普攻時，觸發『以自身最大HP10%給予我方全體水屬性成員護盾(1回合)』\n防禦時，觸發「以自身最大HP30%給予自身護盾(1回合)」\n必殺時，觸發「《假期再開》」\n\n《假期再開》\n清除自身《精靈一族的完美女王》所有層數\n使自身獲得1層《凱薩大人的專屬女僕》(最多1層)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `女王或女僕都沒問題`,
                    description: `普攻時，觸發「使我方全體水屬性成員攻擊力增加6.25%(最多8層)」\n自身《凱薩大人的專屬女僕》層數=1時，開啟「普攻時，觸發『使目標受到水屬性傷害增加3.75%(8回合)』」\n自身《精靈一族的完美女王》層數=1時，開啟「普攻時，觸發『使目標攻擊力減少2.5%(8回合)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `減傷+`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `女王的侍奉`,
                    description: `使我方全体水属性攻击者、守护者、妨碍者普攻伤害增加60/70/80/90/100%(最多1层)、获得「普攻时，追加『以自身攻击力27/31.5/36/40.5/45%对目标造成伤害』(50回合)(不可迭加)」，并使敌方全体受到伤害增加12/14/16/18/20%(最多1层)。CD:1`
                },
                [SkillType.SKILL_1]: {
                    name: `女王的侍奉`,
                    description: `使我方全体水属性攻击者、守护者、妨碍者普攻伤害增加60%(最多1层)、获得「普攻时，追加『以自身攻击力27%对目标造成伤害』(50回合)(不可迭加)」，并使敌方全体受到伤害增加12%(最多1层)。CD:1`
                },
                [SkillType.SKILL_2]: {
                    name: `女王的侍奉`,
                    description: `使我方全体水属性攻击者、守护者、妨碍者普攻伤害增加70%(最多1层)、获得「普攻时，追加『以自身攻击力31.5%对目标造成伤害』(50回合)(不可迭加)」，并使敌方全体受到伤害增加14%(最多1层)。CD:1`
                },
                [SkillType.SKILL_3]: {
                    name: `女王的侍奉`,
                    description: `使我方全体水属性攻击者、守护者、妨碍者普攻伤害增加80%(最多1层)、获得「普攻时，追加『以自身攻击力36%对目标造成伤害』(50回合)(不可迭加)」，并使敌方全体受到伤害增加16%(最多1层)。CD:1`
                },
                [SkillType.SKILL_4]: {
                    name: `女王的侍奉`,
                    description: `使我方全体水属性攻击者、守护者、妨碍者普攻伤害增加90%(最多1层)、获得「普攻时，追加『以自身攻击力40.5%对目标造成伤害』(50回合)(不可迭加)」，并使敌方全体受到伤害增加18%(最多1层)。CD:1`
                },
                [SkillType.SKILL_5]: {
                    name: `女王的侍奉`,
                    description: `使我方全体水属性攻击者、守护者、妨碍者普攻伤害增加100%(最多1层)、获得「普攻时，追加『以自身攻击力45%对目标造成伤害』(50回合)(不可迭加)」，并使敌方全体受到伤害增加20%(最多1层)。CD:1`
                },
                [SkillType.ATTACK]: {
                    name: `爱心手作甜点`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `清洁、侍奉两不误`,
                    description: `我方全体最大HP增加45%\n我方全体水属性角色获得「我方队伍闇属性角色有2人以上时，开启『《女僕清洁队》』」\n我方全体闇属性角色获得「我方队伍水属性角色有2人以上时，开启『《女僕侍奉队》』」\n\n《女僕清洁队》\n攻击力增加50%\n普攻伤害增加100%\n造成伤害增加40%\n普攻时，追加「以自身攻击力50%对目标造成伤害」\n普攻时，触发「使目标受到伤害增加0.75%(最多40层)」\n普攻时，触发「使目标受到水属性伤害增加2%(最多20层)」\n\n《女僕侍奉队》\n攻击力增加100%\n普攻伤害增加150%\n造成伤害增加40%\n普攻时，追加「以自身攻击力80%对目标造成伤害」\n普攻时，触发「使目标受到伤害增加0.75%(最多40层)」\n普攻时，触发「使目标受到闇属性伤害增加3.5%(最多20层)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `稍微放个假也不错`,
                    description: `第1回合时，触发「《突如其来的假期》」(触发1次后清除)\n自身《凯萨大人的专属女僕》层数=1时，开启「《专属女僕的服侍》」\n\n《突如其来的假期》\n使自身当前必杀技CD减少1回合\n使自身获得「必杀时，触发『使自身获得1层《凯萨大人的专属女僕》(最多1层)』(50回合)(触发1次后清除)」\n\n《专属女僕的服侍》\n造成伤害增加30%\n普攻时，追加「以自身攻击力50%对目标造成伤害」\n必杀时，触发「《假期结束》」\n\n《假期结束》\n清除自身《凯萨大人的专属女僕》所有层数\n使自身获得1层《精灵一族的完美女王》(最多1层)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `不忘王者的责任`,
                    description: `防御时，触发「使自身获得嘲讽(1回合)」\n自身《精灵一族的完美女王》层数=1时，开启「《完美女王的庇护》」\n\n《完美女王的庇护》\n受到伤害减少10%\n普攻时，触发『以自身最大HP10%给予我方全体水属性成员护盾(1回合)』\n防御时，触发「以自身最大HP30%给予自身护盾(1回合)」\n必杀时，触发「《假期再开》」\n\n《假期再开》\n清除自身《精灵一族的完美女王》所有层数\n使自身获得1层《凯萨大人的专属女僕》(最多1层)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `女王或女僕都没问题`,
                    description: `普攻时，触发「使我方全体水属性成员攻击力增加6.25%(最多8层)」\n自身《凯萨大人的专属女僕》层数=1时，开启「普攻时，触发『使目标受到水属性伤害增加3.75%(8回合)』」\n自身《精灵一族的完美女王》层数=1时，开启「普攻时，触发『使目标攻击力减少2.5%(8回合)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `减伤+`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Cement Barrel Fill♡`,
                    description: `Increase all allied Water Attackers, Defenders, and Obstructors' Basic Attack Power by 60/70/80/90/100% (max 1 stack). Gain the following effect: On Basic Attack, deal additional damage to the target for 50 turns (27/31.5/36/40.5/45% Attack Power) (Non-stackable) and increase all enemies' Damage Taken by 12/14/16/18/20% (max 1 stack). CD:1`
                },
                [SkillType.SKILL_1]: {
                    name: `Cement Barrel Fill♡`,
                    description: `Increase all allied Water Attackers, Defenders, and Obstructors' Basic Attack Power by 60% (max 1 stack). Gain the following effect: On Basic Attack, deal additional damage to the target for 50 turns (27% Attack Power) (Non-stackable) and increase all enemies' Damage Taken by 12% (max 1 stack). CD:1`
                },
                [SkillType.SKILL_2]: {
                    name: `Cement Barrel Fill♡`,
                    description: `Increase all allied Water Attackers, Defenders, and Obstructors' Basic Attack Power by 70% (max 1 stack). Gain the following effect: On Basic Attack, deal additional damage to the target for 50 turns (31.5% Attack Power) (Non-stackable) and increase all enemies' Damage Taken by 14% (max 1 stack). CD:1`
                },
                [SkillType.SKILL_3]: {
                    name: `Cement Barrel Fill♡`,
                    description: `Increase all allied Water Attackers, Defenders, and Obstructors' Basic Attack Power by 80% (max 1 stack). Gain the following effect: On Basic Attack, deal additional damage to the target for 50 turns (36% Attack Power) (Non-stackable) and increase all enemies' Damage Taken by 16% (max 1 stack). CD:1`
                },
                [SkillType.SKILL_4]: {
                    name: `Cement Barrel Fill♡`,
                    description: `Increase all allied Water Attackers, Defenders, and Obstructors' Basic Attack Power by 90% (max 1 stack). Gain the following effect: On Basic Attack, deal additional damage to the target for 50 turns (40.5% Attack Power) (Non-stackable) and increase all enemies' Damage Taken by 18% (max 1 stack). CD:1`
                },
                [SkillType.SKILL_5]: {
                    name: `Cement Barrel Fill♡`,
                    description: `Increase all allied Water Attackers, Defenders, and Obstructors' Basic Attack Power by 100% (max 1 stack). Gain the following effect: On Basic Attack, deal additional damage to the target for 50 turns (45% Attack Power) (Non-stackable) and increase all enemies' Damage Taken by 20% (max 1 stack). CD:1`
                },
                [SkillType.ATTACK]: {
                    name: `Heartfelt Handmade Sweets`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Flawlessly Cleaning & Service`,
                    description: `Increase the party's max HP by 45%.\nGain all Water allies the following effect: When there are 2 or more Dark characters in the party, activate "Maid Cleaning Team".\nGain all Dark allies the following effect: When there are 2 or more Water characters in the party, activate "Maid Serving Team".\n\n"Maid Cleaning Team"\nIncrease Attack Power by 50%.\nIncrease Basic Attack Power by 100%.\nIncrease Damage Output by 40%.\nOn Basic Attack, deal additional damage to the target (50% Attack Power).\nOn Basic Attack, trigger the following effect: Increase the target's Damage Taken by 0.75% (max 40 stacks).\nOn Basic Attack, trigger the following effect: Increase the target's Damage Taken from Water attacks by 2% (max 20 stacks).\n\n"Maid Serving Team".\nIncrease Attack Power by 100%.\nIncrease Basic Attack Power by 150%.\nIncrease Damage Output by 40%.\nOn Basic Attack, deal additional damage to the target (80% Attack Power).\nOn Basic Attack, trigger the following effect: Increase the target's Damage Taken by 0.75% (max 40 stacks).\nOn Basic Attack, trigger the following effect: Increase the target's Damage Taken from Dark attacks by 3.5% (max 20 stacks).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Nice Short Break`,
                    description: `On the 1st turn, trigger "Sudden Vacation" (removes after triggering once).\nWhen your "Master Caesar's Exclusive Maid" stacks are = 1, activate "Exclusive Maid's Service".\n\n"Sudden Vacation"\nDecrease your current Ultimate Skill CD by 1 turn.\nGain yourself the following effect: On Ultimate Skill, trigger the following effect: Gain yourself 1 stack of "Master Caesar's Exclusive Maid" for 50 turns (max 1 stack) (removes after triggering once).\n\n"Exclusive Maid's Service"\nIncrease Damage Output by 30%.\nOn Basic Attack, deal additional damage to the target (50% Attack Power).\nOn Ultimate Skill, trigger "End of Vacation".\n\n"End of Vacation"\nRemove all your "Master Caesar's Exclusive Maid" stacks.\nGain yourself 1 stack of "Perfect Queen of the Elf Clan" (max 1 stack).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `The Sovereign's Duties`,
                    description: `When in Guard Stance, trigger the following effect: Gain yourself Taunt for 1 turn.\nWhen your "Perfect Queen of the Elf Clan" stacks are = 1, activate "Perfect Queen's Protection".\n\n"Perfect Queen's Protection"\nDecrease Damage Taken by 10%.\nOn Basic Attack, trigger the following effect: All Water allies gain a Shield for 10% of your max HP for 1 turn.\nWhen in Guard Stance, trigger the following effect: Gain yourself a Shield for 30% of your max HP for 1 turn.\nOn Ultimate Skill, trigger "Another Vacation".\n\n"Another Vacation"\nRemove all your "Perfect Queen of the Elf Clan" stacks.\nGain yourself 1 stack of "Master Caesar's Exclusive Maid" (max 1 stack).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Queen or Maid Both Fine`,
                    description: `On Basic Attack, trigger the following effect: Increase all Water allies' Attack Power by 6.25% (max 8 stacks).\nWhen your "Master Caesar's Exclusive Maid" stacks are = 1, activate "On Basic Attack, trigger the following effect: Increase the target's Damage Taken from Water attacks by 3.75% for 8 turns".\nWhen your "Perfect Queen of the Elf Clan" stacks are = 1, activate "On Basic Attack, trigger the following effect: Decrease the target's Attack Power by 2.5% for 8 turns".`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage Reduction+`,
                    description: `Decrease your Damage Taken by 5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity`,
                    description: `Gain immunity to Paralysis.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `女王の奉仕`,
                    description: `味方全体の水属性のアタッカー、ガーディアン、デバッファーの通常攻撃ダメージを60/70/80/90/100%増加させ(最高1スタック)、「通常攻撃時『自分の27/31.5/36/40.5/45%の攻撃力でターゲットにダメージを与える』を追加する(50ターン)(スタック不可)」を獲得し、敵全体が受けるダメージを12/14/16/18/20%増加させる(最高1スタック)[CD:1]`
                },
                [SkillType.SKILL_1]: {
                    name: `女王の奉仕`,
                    description: `味方全体の水属性のアタッカー、ガーディアン、デバッファーの通常攻撃ダメージを60%増加させ(最高1スタック)、「通常攻撃時『自分の27%の攻撃力でターゲットにダメージを与える』を追加する(50ターン)(スタック不可)」を獲得し、敵全体が受けるダメージを12%増加させる(最高1スタック)[CD:1]`
                },
                [SkillType.SKILL_2]: {
                    name: `女王の奉仕`,
                    description: `味方全体の水属性のアタッカー、ガーディアン、デバッファーの通常攻撃ダメージを70%増加させ(最高1スタック)、「通常攻撃時『自分の31.5%の攻撃力でターゲットにダメージを与える』を追加する(50ターン)(スタック不可)」を獲得し、敵全体が受けるダメージを14%増加させる(最高1スタック)[CD:1]`
                },
                [SkillType.SKILL_3]: {
                    name: `女王の奉仕`,
                    description: `味方全体の水属性のアタッカー、ガーディアン、デバッファーの通常攻撃ダメージを80%増加させ(最高1スタック)、「通常攻撃時『自分の36%の攻撃力でターゲットにダメージを与える』を追加する(50ターン)(スタック不可)」を獲得し、敵全体が受けるダメージを16%増加させる(最高1スタック)[CD:1]`
                },
                [SkillType.SKILL_4]: {
                    name: `女王の奉仕`,
                    description: `味方全体の水属性のアタッカー、ガーディアン、デバッファーの通常攻撃ダメージを90%増加させ(最高1スタック)、「通常攻撃時『自分の40.5%の攻撃力でターゲットにダメージを与える』を追加する(50ターン)(スタック不可)」を獲得し、敵全体が受けるダメージを18%増加させる(最高1スタック)[CD:1]`
                },
                [SkillType.SKILL_5]: {
                    name: `女王の奉仕`,
                    description: `味方全体の水属性のアタッカー、ガーディアン、デバッファーの通常攻撃ダメージを100%増加させ(最高1スタック)、「通常攻撃時『自分の45%の攻撃力でターゲットにダメージを与える』を追加する(50ターン)(スタック不可)」を獲得し、敵全体が受けるダメージを20%増加させる(最高1スタック)[CD:1]`
                },
                [SkillType.ATTACK]: {
                    name: `愛情たっぷり手作りスイーツ`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `清掃もご奉仕も完璧に`,
                    description: `味方全体の最大HPが45%増加する\n味方全体の水属性メンバーが「味方チームに2人以上の闇属性メンバーがいる時『《メイド清掃隊》』を発動する」を獲得する\n味方全体の闇属性メンバーが「味方チームに2人以上の水属性メンバーがいる時『《メイド奉仕隊》』を発動する」を獲得する\n\n《メイド清掃隊》\n攻撃力が50%増加する\n通常攻撃ダメージが100%増加する\n与えるダメージが40%増加する\n通常攻撃時「自分の50%の攻撃力でターゲットにダメージを与える」を追加する\n通常攻撃時「ターゲットが受けるダメージを0.75%増加させる(最高40スタック)」を誘発する\n通常攻撃時「ターゲットが受ける水属性ダメージを2%増加させる(最高20スタック)」を誘発する\n\n《メイド奉仕隊》\n攻撃力が100%増加する\n通常攻撃ダメージが150%増加する\n与えるダメージが40%増加する\n通常攻撃時「自分の80%の攻撃力でターゲットにダメージを与える」を追加する\n通常攻撃時「ターゲットが受けるダメージを0.75%増加させる(最高40スタック)」を誘発する\n通常攻撃時「ターゲットが受ける闇属性ダメージを3.5%増加させる(最高20スタック)」を誘発する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `ちょっとしたバカンスもいいよね`,
                    description: `1ターン目に「《突然のバカンス》」を誘発する(誘発1回後に解除)\n自分の《シーザー様の専属メイド》のスタック数が=1の時「《専属メイドの奉仕》」を発動する\n\n《突然のバカンス》\n自分の現在の必殺技CDを1ターン減少させる\n自分が「必殺技攻撃時『自分が《シーザー様の専属メイド》を1スタック獲得する(最高1スタック)』を誘発する(50ターン)(誘発1回後に解除)」を獲得する\n\n《専属メイドの奉仕》\n与えるダメージが30%増加する\n通常攻撃時「自身の50%の攻撃力でターゲットにダメージを与える」を追加する\n必殺技発動時「《バカンス終了》」を誘発する\n\n《バカンス終了》\n自分の《シーザー様の専属メイド》のスタック数をすべて消す\n自分が《エルフ族の完璧な女王》を1スタック獲得する(最高1スタック)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `王者としての責任を忘れない`,
                    description: `防御時「自分が挑発を獲得する(1ターン)」を誘発する\n自分の《エルフ族の完璧な女王》のスタック数が=1の時「《完璧な女王の加護》」を発動する\n\n《完璧な女王の加護》\n受けるダメージが10%減少する\n通常攻撃時「自分の最大HPの10%分味方全体の水属性メンバーに盾を張る(1ターン)」を誘発する\n防御時「自分の最大HPの30%分自分に盾を張る(1ターン)」を誘発する\n必殺技発動時「《バカンス再開》」を誘発する\n\n《バカンス再開》\n自分の《エルフ族の完璧な女王》のスタック数をすべて消す\n自分が《シーザー様の専属メイド》を1スタック獲得する(最高1スタック)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `女王もメイドもこなす`,
                    description: `通常攻撃時「味方全体の水属性メンバーの攻撃力を6.25%増加させる(最高8スタック)」を誘発する\n自分の《シーザー様の専属メイド》のスタック数が=1の時「通常攻撃時『ターゲットが受ける水属性ダメージを3.75%増加させる(8ターン)』を誘発する」を発動する\n自分の《エルフ族の完璧な女王》のスタック数が=1の時「通常攻撃時『ターゲットの攻撃力を2.5%減少させる(8ターン)』を誘発する」を発動する`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ減少+`,
                    description: `自分が受けるダメージを5%減少させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `麻痺無効`,
                    description: `自分を麻痺無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `여왕의 봉사`,
                    description: `아군 수속성 딜러, 탱커, 디스럽터의 일반 공격 데미지 60/70/80/90/100% 증가(최대 1중첩), 「일반 공격 시 『자신의 공격 데미지의 27/31.5/36/40.5/45%만큼 타깃에게 데미지』추가(50턴)(중첩 불가)」획득, 적 전체의 받는 데미지 12/14/16/18/20% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.SKILL_1]: {
                    name: `여왕의 봉사`,
                    description: `아군 수속성 딜러, 탱커, 디스럽터의 일반 공격 데미지 60% 증가(최대 1중첩), 「일반 공격 시 『자신의 공격 데미지의 27%만큼 타깃에게 데미지』추가(50턴)(중첩 불가)」획득, 적 전체의 받는 데미지 12% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.SKILL_2]: {
                    name: `여왕의 봉사`,
                    description: `아군 수속성 딜러, 탱커, 디스럽터의 일반 공격 데미지 70% 증가(최대 1중첩), 「일반 공격 시 『자신의 공격 데미지의 31.5%만큼 타깃에게 데미지』추가(50턴)(중첩 불가)」획득, 적 전체의 받는 데미지 14% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.SKILL_3]: {
                    name: `여왕의 봉사`,
                    description: `아군 수속성 딜러, 탱커, 디스럽터의 일반 공격 데미지 80% 증가(최대 1중첩), 「일반 공격 시 『자신의 공격 데미지의 36%만큼 타깃에게 데미지』추가(50턴)(중첩 불가)」획득, 적 전체의 받는 데미지 16% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.SKILL_4]: {
                    name: `여왕의 봉사`,
                    description: `아군 수속성 딜러, 탱커, 디스럽터의 일반 공격 데미지 90% 증가(최대 1중첩), 「일반 공격 시 『자신의 공격 데미지의 40.5%만큼 타깃에게 데미지』추가(50턴)(중첩 불가)」획득, 적 전체의 받는 데미지 18% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.SKILL_5]: {
                    name: `여왕의 봉사`,
                    description: `아군 수속성 딜러, 탱커, 디스럽터의 일반 공격 데미지 100% 증가(최대 1중첩), 「일반 공격 시 『자신의 공격 데미지의 45%만큼 타깃에게 데미지』추가(50턴)(중첩 불가)」획득, 적 전체의 받는 데미지 20% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.ATTACK]: {
                    name: `사랑의 수제 디저트`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `청결과 봉사, 둘 다 놓칠 수 없어`,
                    description: `아군 전체의 최대 HP 45% 증가\n아군 전체 수속성 캐릭터는 「팀에 2종 속성의 캐릭터가 있을 시 『《메이드 청소팀》』 활성화」획득\n아군 전체 암속성 캐릭터는 「팀에 2종 속성의 캐릭터가 있을 시 『《메이드 봉사팀》』 활성화」 획득\n\n《메이드 청소팀》\n공격 데미지 50% 증가\n일반 공격 데미지 100% 증가\n가하는 데미지 40% 증가\n일반 공격 시 「자신의 공격 데미지의 50%만큼 타깃에게 데미지」 추가\n일반 공격 시 「타깃이 받는 데미지 0.75% 증가(최대 40중첩)」 트리거\n일반 공격 시 「타깃이 받는 수속성 데미지 2% 증가(최대 20중첩)」 트리거\n\n《메이드 봉사팀》\n공격 데미지 100% 증가\n일반 공격 데미지 150% 증가\n가하는 데미지 40% 증가\n일반 공격 시 「자신의 공격 데미지의 80%만큼 타깃에게 데미지」 추가\n일반 공격 시 「타깃이 받는 데미지 0.75% 증가(최대 40중첩)」 트리거\n일반 공격 시 「타깃이 받는 암속성 데미지 3.5% 증가(최대 20중첩)」 트리거`
                },
                [SkillType.PASSIVE_1]: {
                    name: `가끔은 휴가를 내는 것도 나쁘지 않지`,
                    description: `첫 번째 턴 시작 시 「《갑작스러운 휴가》」 트리거(1회 트리거 후 제거)\n자신의 《시저 님의 전속 메이드》 중첩수=1일 시 「《전속 메이드 서비스》」 활성화\n\n《갑작스러운 휴가》\n자신의 현재 궁극기 CD 1턴 감소\n자신은 「궁극기 발동 시 『자신은 1중첩의 《시저 님의 전속 메이드》 획득(최대 1중첩)』 트리거(50턴)(1회 트리거 후 제거)」 획득\n\n《전속 메이드 서비스》\n가하는 데미지 30% 증가\n일반 공격 시 「자신의 공격 데미지의 50%만큼 타깃에게 데미지」추가\n궁극기 발동 시 「《휴가 종료》」트리거\n\n《휴가 종료》\n자신의 모든 《시저 님의 전속 메이드》 중첩수 제거\n자신은 1중첩의 《엘프 일족의 완벽한 여왕》 획득(최대 1중첩)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `왕의 책임을 잊어선 안 돼`,
                    description: `방어 시 「자신은 도발 획득(1턴)」 트리거\n자신의 《엘프 일족의 완벽한 여왕》 중첩수=1일 시 「《완벽한 여왕의 비호》」 활성화\n\n《완벽한 여왕의 비호》\n받는 데미지 10% 감소\n일반 공격 시 『자신의 최대 HP 10%만큼 아군 수속성 캐릭터의 아머 강화(1턴)』 트리거\n방어 시 「자신의 최대 HP 30%만큼 자신의 아머 강화(1턴)」 트리거\n궁극기 발동 시 「《휴가 재개》」 트리거\n\n《휴가 재개》\n자신의 모든《엘프 일족의 완벽한 여왕》중첩수 제거\n자신은 1중첩의 《시저 님의 전속 메이드》획득(최대 1중첩)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `여왕 혹은 메이드 전부 문제없지`,
                    description: `일반 공격 시 「아군 전체 수속성 캐릭터의 공격 데미지 6.25% 증가(최대 8중첩)」트리거\n자신의 《시저 님의 전속 메이드》 중첩수=1일 시, 「일반 공격 시 『타깃이 받는 수속성 데미지 3.75% 증가(8턴)』 트리거」 활성화\n자신의 《엘프 일족의 완벽한 여왕》 중첩수=1일 시, 「일반 공격 시 『타깃의 공격 데미지 2.5% 감소(8턴)』 트리거」 활성화`
                },
                [SkillType.GENERAL_1]: {
                    name: `받는 데미지 감소+`,
                    description: `자신이 받는 데미지 5% 감소`
                },
                [SkillType.GENERAL_2]: {
                    name: `마비 면역`,
                    description: `자신에게 마비 면역 부여`
                }
            }
        }
    },
]