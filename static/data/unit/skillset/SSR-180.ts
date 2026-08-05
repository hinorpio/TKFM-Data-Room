import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10209: SkillSet[] =  [
    {
        version: 1,
        lastDate: "",
        remark: {
            [Locale.tc]: ``,
            [Locale.sc]: ``,
            [Locale.en]: ``,
            [Locale.jp]: ``,
            [Locale.kr]: ``,
        },
        skill: {
            [Locale.tc]: {
                [SkillType.SKILL_S]: {
                    name: `繞5圈，好開心好興奮！`,
                    description: `使自身攻擊力增加67.2/78.4/89.6/100.8/112%(最多2層)、造成傷害增加10.08/13.44/16.8/20.16/23.52%(最多2層)、造成觸發技效果增加16.8/22.4/28/33.6/39.2%(最多2層)、被攻擊時，觸發「以自身攻擊力10/10.9/11.8/12.7/13.7%對敵方全體造成傷害」(5回合)(不可疊加)，再使敵方全體受到傷害增加3.36/3.92/4.48/5.04/5.6%(最多2層)，並以目標最大HP0.01%對自身造成真實傷害。CD:5`
                },
                [SkillType.SKILL_1]: {
                    name: `繞1圈，吸引敵人注意`,
                    description: `使自身攻擊力增加67.2%(最多2層)、造成傷害增加10.08%(最多2層)、造成觸發技效果增加16.8%(最多2層)、被攻擊時，觸發「以自身攻擊力10%對敵方全體造成傷害」(5回合)(不可疊加)，再使敵方全體受到傷害增加3.36%(最多2層)，並以目標最大HP0.01%對自身造成真實傷害。CD:5`
                },
                [SkillType.SKILL_2]: {
                    name: `繞2圈，把敵人轉到暈眩`,
                    description: `使自身攻擊力增加78.4%(最多2層)、造成傷害增加13.44%(最多2層)、造成觸發技效果增加22.4%(最多2層)、被攻擊時，觸發「以自身攻擊力10.9%對敵方全體造成傷害」(5回合)(不可疊加)，再使敵方全體受到傷害增加3.92%(最多2層)，並以目標最大HP0.01%對自身造成真實傷害。CD:5`
                },
                [SkillType.SKILL_3]: {
                    name: `繞3圈，妳看什麼看！`,
                    description: `使自身攻擊力增加89.6%(最多2層)、造成傷害增加16.8%(最多2層)、造成觸發技效果增加28%(最多2層)、被攻擊時，觸發「以自身攻擊力11.8%對敵方全體造成傷害」(5回合)(不可疊加)，再使敵方全體受到傷害增加4.48%(最多2層)，並以目標最大HP0.01%對自身造成真實傷害。CD:5`
                },
                [SkillType.SKILL_4]: {
                    name: `繞4圈，絕對不是自己想轉`,
                    description: `使自身攻擊力增加100.8%(最多2層)、造成傷害增加20.16%(最多2層)、造成觸發技效果增加33.6%(最多2層)、被攻擊時，觸發「以自身攻擊力12.7%對敵方全體造成傷害」(5回合)(不可疊加)，再使敵方全體受到傷害增加5.04%(最多2層)，並以目標最大HP0.01%對自身造成真實傷害。CD:5`
                },
                [SkillType.SKILL_5]: {
                    name: `繞5圈，好開心好興奮！`,
                    description: `使自身攻擊力增加112%(最多2層)、造成傷害增加23.52%(最多2層)、造成觸發技效果增加39.2%(最多2層)、被攻擊時，觸發「以自身攻擊力13.7%對敵方全體造成傷害」(5回合)(不可疊加)，再使敵方全體受到傷害增加5.6%(最多2層)，並以目標最大HP0.01%對自身造成真實傷害。CD:5`
                },
                [SkillType.ATTACK]: {
                    name: `被投注的關愛眼神`,
                    description: `以目標最大HP0.01%對自身造成真實傷害`
                },
                [SkillType.LEADER]: {
                    name: `獸耳隊長諾蕾蒂`,
                    description: `我方全體最大HP增加55%\n我方全體攻擊力增加73%\n自身獲得「我方隊伍恰好為1種角色屬性時，開啟『《身體耐性UP》』」\n我方全體攻擊者、妨礙者獲得「我方隊伍恰好為1種角色屬性時，開啟『《狼群的狩獵開始了！》』」\n我方全體獲得「我方隊伍守護者有1人以上時，開啟『造成傷害減少500%』(負面效果)」\n\n《身體耐性UP》\n防禦時，觸發「使自身獲得嘲諷(1回合)、受到傷害減少10%(1回合)」\n必殺時，觸發「使敵方全體受到傷害增加7.3%(最多2層)、受到風屬性傷害增加10.95%(最多2層)」\n被攻擊時，觸發「以自身攻擊力5%對自身進行治療，並以自身攻擊力4.4%對敵方全體造成傷害」\n\n《狼群的狩獵開始了！》\n造成傷害增加43.8%\n造成觸發技效果增加146%\n攻擊時，觸發「以自身攻擊力21.9%對敵方全體造成傷害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `迅狼反擊`,
                    description: `被攻擊時，觸發「以自身攻擊力10%對敵方全體造成傷害」\n自身以外我方全體獲得「普攻、必殺時，追加『以目標最大HP0.01%對【月下狂狼　諾蕾蒂】造成真實傷害』」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `野狼的柔軟性`,
                    description: `當前HP≧99%時，開啟「造成傷害增加20.16%、造成觸發技效果增加33.6%」\n當前HP≦99%時，開啟「受到傷害減少5%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `獸化Power`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少5回合」(觸發1次後清除)\n被攻擊時，觸發「使敵方全體受到風屬性傷害增加0.34%(最多50層)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `傷害+`,
                    description: `使自身造成傷害增加6%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `绕5圈，好开心好兴奋！`,
                    description: `使自身攻击力增加67.2/78.4/89.6/100.8/112%(最多2层)、造成伤害增加10.08/13.44/16.8/20.16/23.52%(最多2层)、造成触发技效果增加16.8/22.4/28/33.6/39.2%(最多2层)、被攻击时，触发「以自身攻击力10/10.9/11.8/12.7/13.7%对敌方全体造成伤害」(5回合)(不可叠加)，再使敌方全体受到伤害增加3.36/3.92/4.48/5.04/5.6%(最多2层)，并以目标最大HP0.01%对自身造成真实伤害。CD:5`
                },
                [SkillType.SKILL_1]: {
                    name: `绕1圈，吸引敌人注意`,
                    description: `使自身攻击力增加67.2%(最多2层)、造成伤害增加10.08%(最多2层)、造成触发技效果增加16.8%(最多2层)、被攻击时，触发「以自身攻击力10%对敌方全体造成伤害」(5回合)(不可叠加)，再使敌方全体受到伤害增加3.36%(最多2层)，并以目标最大HP0.01%对自身造成真实伤害。CD:5`
                },
                [SkillType.SKILL_2]: {
                    name: `绕2圈，把敌人转到晕眩`,
                    description: `使自身攻击力增加78.4%(最多2层)、造成伤害增加13.44%(最多2层)、造成触发技效果增加22.4%(最多2层)、被攻击时，触发「以自身攻击力10.9%对敌方全体造成伤害」(5回合)(不可叠加)，再使敌方全体受到伤害增加3.92%(最多2层)，并以目标最大HP0.01%对自身造成真实伤害。CD:5`
                },
                [SkillType.SKILL_3]: {
                    name: `绕3圈，妳看什么看！`,
                    description: `使自身攻击力增加89.6%(最多2层)、造成伤害增加16.8%(最多2层)、造成触发技效果增加28%(最多2层)、被攻击时，触发「以自身攻击力11.8%对敌方全体造成伤害」(5回合)(不可叠加)，再使敌方全体受到伤害增加4.48%(最多2层)，并以目标最大HP0.01%对自身造成真实伤害。CD:5`
                },
                [SkillType.SKILL_4]: {
                    name: `绕4圈，绝对不是自己想转`,
                    description: `使自身攻击力增加100.8%(最多2层)、造成伤害增加20.16%(最多2层)、造成触发技效果增加33.6%(最多2层)、被攻击时，触发「以自身攻击力12.7%对敌方全体造成伤害」(5回合)(不可叠加)，再使敌方全体受到伤害增加5.04%(最多2层)，并以目标最大HP0.01%对自身造成真实伤害。CD:5`
                },
                [SkillType.SKILL_5]: {
                    name: `绕5圈，好开心好兴奋！`,
                    description: `使自身攻击力增加112%(最多2层)、造成伤害增加23.52%(最多2层)、造成触发技效果增加39.2%(最多2层)、被攻击时，触发「以自身攻击力13.7%对敌方全体造成伤害」(5回合)(不可叠加)，再使敌方全体受到伤害增加5.6%(最多2层)，并以目标最大HP0.01%对自身造成真实伤害。CD:5`
                },
                [SkillType.ATTACK]: {
                    name: `被投注的关爱眼神`,
                    description: `以目标最大HP0.01%对自身造成真实伤害`
                },
                [SkillType.LEADER]: {
                    name: `兽耳队长诺蕾蒂`,
                    description: `我方全体最大HP增加55%\n我方全体攻击力增加73%\n自身获得「我方队伍恰好为1种角色属性时，开启『《身体耐性UP》』」\n我方全体攻击者、妨碍者获得「我方队伍恰好为1种角色属性时，开启『《狼群的狩猎开始了！》』」\n我方全体获得「我方队伍守护者有1人以上时，开启『造成伤害减少500%』(负面效果)」\n\n《身体耐性UP》\n防禦时，触发「使自身获得嘲讽(1回合)、受到伤害减少10%(1回合)」\n必杀时，触发「使敌方全体受到伤害增加7.3%(最多2层)、受到风属性伤害增加10.95%(最多2层)」\n被攻击时，触发「以自身攻击力5%对自身进行治疗，并以自身攻击力4.4%对敌方全体造成伤害」\n\n《狼群的狩猎开始了！》\n造成伤害增加43.8%\n造成触发技效果增加146%\n攻击时，触发「以自身攻击力21.9%对敌方全体造成伤害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `迅狼反击`,
                    description: `被攻击时，触发「以自身攻击力10%对敌方全体造成伤害」\n自身以外我方全体获得「普攻、必杀时，追加『以目标最大HP0.01%对【月下狂狼　诺蕾蒂】造成真实伤害』」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `野狼的柔软性`,
                    description: `当前HP≧99%时，开启「造成伤害增加20.16%、造成触发技效果增加33.6%」\n当前HP≦99%时，开启「受到伤害减少5%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `兽化Power`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少5回合」(触发1次后清除)\n被攻击时，触发「使敌方全体受到风属性伤害增加0.34%(最多50层)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `伤害+`,
                    description: `使自身造成伤害增加6%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Spin 5: Ecstasy`,
                    description: `Increase your Attack Power by 67.2/78.4/89.6/100.8/112% (max 2 stacks), Damage Output by 10.08/13.44/16.8/20.16/23.52% (max 2 stacks), and trigger ability effects by 16.8/22.4/28/33.6/39.2% (max 2 stacks). When attacked, trigger the following effect: Damage all enemies for 5 turns (10/10.9/11.8/12.7/13.7% Attack Power) (Non-stackable), increase all enemies' Damage Taken by 3.36/3.92/4.48/5.04/5.6% (max 2 stacks), and True Damage yourself for 0.01% of the target's max HP. CD:5`
                },
                [SkillType.SKILL_1]: {
                    name: `Spin 1: Attention`,
                    description: `Increase your Attack Power by 67.2% (max 2 stacks), Damage Output by 10.08% (max 2 stacks), and trigger ability effects by 16.8% (max 2 stacks). When attacked, trigger the following effect: Damage all enemies for 5 turns (10% Attack Power) (Non-stackable), increase all enemies' Damage Taken by 3.36% (max 2 stacks), and True Damage yourself for 0.01% of the target's max HP. CD:5`
                },
                [SkillType.SKILL_2]: {
                    name: `Spin 2: Dizziness`,
                    description: `Increase your Attack Power by 78.4% (max 2 stacks), Damage Output by 13.44% (max 2 stacks), and trigger ability effects by 22.4% (max 2 stacks). When attacked, trigger the following effect: Damage all enemies for 5 turns (10.9% Attack Power) (Non-stackable), increase all enemies' Damage Taken by 3.92% (max 2 stacks), and True Damage yourself for 0.01% of the target's max HP. CD:5`
                },
                [SkillType.SKILL_3]: {
                    name: `Spin 3: Staring?`,
                    description: `Increase your Attack Power by 89.6% (max 2 stacks), Damage Output by 16.8% (max 2 stacks), and trigger ability effects by 28% (max 2 stacks). When attacked, trigger the following effect: Damage all enemies for 5 turns (11.8% Attack Power) (Non-stackable), increase all enemies' Damage Taken by 4.48% (max 2 stacks), and True Damage yourself for 0.01% of the target's max HP. CD:5`
                },
                [SkillType.SKILL_4]: {
                    name: `Spin 4: Accidental Spin`,
                    description: `Increase your Attack Power by 100.8% (max 2 stacks), Damage Output by 20.16% (max 2 stacks), and trigger ability effects by 33.6% (max 2 stacks). When attacked, trigger the following effect: Damage all enemies for 5 turns (12.7% Attack Power) (Non-stackable), increase all enemies' Damage Taken by 5.04% (max 2 stacks), and True Damage yourself for 0.01% of the target's max HP. CD:5`
                },
                [SkillType.SKILL_5]: {
                    name: `Spin 5: Ecstasy`,
                    description: `Increase your Attack Power by 112% (max 2 stacks), Damage Output by 23.52% (max 2 stacks), and trigger ability effects by 39.2% (max 2 stacks). When attacked, trigger the following effect: Damage all enemies for 5 turns (13.7% Attack Power) (Non-stackable), increase all enemies' Damage Taken by 5.6% (max 2 stacks), and True Damage yourself for 0.01% of the target's max HP. CD:5`
                },
                [SkillType.ATTACK]: {
                    name: `Adored Gaze`,
                    description: `True Damage yourself for 0.01% of the target's max HP.`
                },
                [SkillType.LEADER]: {
                    name: `Beast-Ear Capt Noma`,
                    description: `Increase the party's max HP by 55%.\nIncrease the party's Attack Power by 73%.\nGain yourself the following effect: When there are exactly characters of 1 attribute in the party, activate "Body Resistance UP".\nAllied Attackers and Obstructors gain the following effect: When there are exactly characters of 1 attribute in the party, activate "The Hunt Begins!".\nThe party gains the following effect: When there is 1 or more Defenders in the party, activate "decrease Damage Output by 500% (debuff)".\n\n"Body Resistance UP"\nWhen in Guard Stance, trigger the following effect: Gain yourself Taunt for 1 turn and decrease Damage Taken by 10% for 1 turn.\nOn Ultimate Skill, trigger the following effect: Increase all enemies' Damage Taken by 7.3% (max 2 stacks) and Damage Taken from Wind attacks by 10.95% (max 2 stacks).\nWhen attacked, trigger the following effect: Heal yourself for 5% of your Attack Power and damage all enemies (4.4% Attack Power).\n\n"The Hunt Begins"\nIncrease Damage Output by 43.8%.\nIncrease trigger ability effects by 146%.\nOn Attack, trigger the following effect: Damage all enemies (21.9% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Wolf Counter`,
                    description: `When attacked, trigger the following effect: Damage all enemies (10% Attack Power).\nOther allies gain the following effect: On Basic Attack and Ultimate Skill, deal additional True Damage to [Moonlit Wolfgirl Noma] for 0.01% of the target's max HP.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Wolf's Flexibility`,
                    description: `When your current HP is ≧99%, activate "increase Damage Output by 20.16% and trigger ability effects by 33.6%".\nWhen your current HP is ≦99%, activate "decrease Damage Taken by 5%".`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Beast Power`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 5 turns (removes after triggering once).\nWhen attacked, trigger the following effect: Increase all enemies' Damage Taken from Wind attacks by 0.34% (max 50 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage+`,
                    description: `Increase your Damage Output by 6%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain yourself immunity to Silence.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `5周回ったらもう止められない！`,
                    description: `自分の攻撃力を67.2/78.4/89.6/100.8/112%増加させ(最高2スタック)、与えるダメージが10.08/13.44/16.8/20.16/23.52%増加し(最高2スタック)、与える誘発スキル効果が16.8/22.4/28/33.6/39.2%増加し(最高2スタック)、攻撃を受けた時「自分の10/10.9/11.8/12.7/13.7%の攻撃力で敵全体にダメージを与える」を誘発し(5ターン)(スタック不可)、敵全体の受けるダメージを3.36/3.92/4.48/5.04/5.6%増加させ(最高2スタック)、ターゲットの最大HPの0.01%分自分に確定ダメージを与える[CD:5]`
                },
                [SkillType.SKILL_1]: {
                    name: `1周回って敵の注意を引き付ける`,
                    description: `自分の攻撃力を67.2%増加させ(最高2スタック)、与えるダメージが10.08%増加し(最高2スタック)、与える誘発スキル効果が16.8%増加し(最高2スタック)、攻撃を受けた時「自分の10%の攻撃力で敵全体にダメージを与える」を誘発し(5ターン)(スタック不可)、敵全体の受けるダメージを3.36%増加させ(最高2スタック)、ターゲットの最大HPの0.01%分自分に確定ダメージを与える[CD:5]`
                },
                [SkillType.SKILL_2]: {
                    name: `2周回って敵の目を回すわ`,
                    description: `自分の攻撃力を78.4%増加させ(最高2スタック)、与えるダメージが13.44%増加し(最高2スタック)、与える誘発スキル効果が22.4%増加し(最高2スタック)、攻撃を受けた時「自分の10.9%の攻撃力で敵全体にダメージを与える」を誘発し(5ターン)(スタック不可)、敵全体の受けるダメージを3.92%増加させ(最高2スタック)、ターゲットの最大HPの0.01%分自分に確定ダメージを与える[CD:5]`
                },
                [SkillType.SKILL_3]: {
                    name: `3周回って……何見てんのよ！`,
                    description: `自分の攻撃力を89.6%増加させ(最高2スタック)、与えるダメージが16.8%増加し(最高2スタック)、与える誘発スキル効果が28%増加し(最高2スタック)、攻撃を受けた時「自分の11.8%の攻撃力で敵全体にダメージを与える」を誘発し(5ターン)(スタック不可)、敵全体の受けるダメージを4.48%増加させ(最高2スタック)、ターゲットの最大HPの0.01%分自分に確定ダメージを与える[CD:5]`
                },
                [SkillType.SKILL_4]: {
                    name: `4周回ったけど好きで回ってない`,
                    description: `自分の攻撃力を100.8%増加させ(最高2スタック)、与えるダメージが20.16%増加し(最高2スタック)、与える誘発スキル効果が33.6%増加し(最高2スタック)、攻撃を受けた時「自分の12.7%の攻撃力で敵全体にダメージを与える」を誘発し(5ターン)(スタック不可)、敵全体の受けるダメージを5.04%増加させ(最高2スタック)、ターゲットの最大HPの0.01%分自分に確定ダメージを与える[CD:5]`
                },
                [SkillType.SKILL_5]: {
                    name: `5周回ったらもう止められない！`,
                    description: `自分の攻撃力を112%増加させ(最高2スタック)、与えるダメージが23.52%増加し(最高2スタック)、与える誘発スキル効果が39.2%増加し(最高2スタック)、攻撃を受けた時「自分の13.7%の攻撃力で敵全体にダメージを与える」を誘発し(5ターン)(スタック不可)、敵全体の受けるダメージを5.6%増加させ(最高2スタック)、ターゲットの最大HPの0.01%分自分に確定ダメージを与える[CD:5]`
                },
                [SkillType.ATTACK]: {
                    name: `向けられる生暖かい目`,
                    description: `ターゲットの最大HPの0.01%分自分に確定ダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `ケモ耳隊長ノルディ`,
                    description: `味方全体の最大HPが55%増加する\n味方全体の攻撃力が73%増加する\n自分が「味方にちょうど1種類の属性キャラがいる時《身体耐性UP》を発動する」を獲得する\n味方全体のアタッカー、デバッファーが「味方にちょうど1種類の属性キャラがいる時《群狼の狩りの始まりよ！》を発動する」を獲得する\n味方全体が「味方チームにガーディアンが1人以上いる時『与えるダメージが500%減少する』を発動する(デバフ効果)」を獲得する\n\n《身体耐性UP》\n防御時「自分が挑発を獲得し(1ターン)、受けるダメージを10%減少させる(1ターン)」を誘発する\n必殺技攻撃時「敵全体の受けるダメージを7.3%増加させ(最高2スタック)、受ける風属性ダメージを10.95%増加させる(最高2スタック)」を誘発する\n攻撃を受けた時「自分の攻撃力の5%分自分に治療を行い、自分の4.4%の攻撃力で敵全体にダメージを与える」を誘発する\n\n《群狼の狩りの始まりよ！》\n与えるダメージが43.8%増加する\n与える誘発スキル効果が146%増加する\n攻撃時「自分の21.9%の攻撃力で敵全体にダメージを与える」を誘発する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `迅狼の反撃`,
                    description: `攻撃を受けた時「自分の10%の攻撃力で敵全体にダメージを与える」を誘発する\n自分以外の味方全体が「通常攻撃時、必殺技攻撃時『ターゲットの最大HPの0.01%分【月下の狂狼　ノルディ】に確定ダメージを与える』を追加する」を獲得する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `野狼のしなやかさ`,
                    description: `自分の現在のHPが99%以上の時「与えるダメージが20.16%増加し、与える誘発スキル効果が33.6%増加する」を発動する\n自分の現在のHPが99%以下の時「受けるダメージが5%減少する」を発動する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `ケモ化パワー`,
                    description: `1ターン目に「現在の必殺技CDを5ターン減少させる」を誘発する(誘発1回後に解除)\n攻撃を受けた時「敵全体の受ける風属性ダメージを0.34%増加させる(最高50スタック)」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ+`,
                    description: `自分の与えるダメージを6%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `5바퀴 돌기, 신난다 신나!`,
                    description: `자신의 공격 데미지 67.2/78.4/89.6/100.8/112% 증가(최대 2중첩), 가하는 데미지 10.08/13.44/16.8/20.16/23.52% 증가(최대 2중첩), 가하는 트리거 스킬 효과 16.8/22.4/28/33.6/39.2% 증가(최대 2중첩), 피격 시 「자신의 공격 데미지 10/10.9/11.8/12.7/13.7%만큼 적 전체에게 데미지」 트리거(5턴)(중첩 불가), 다시 적 전체의 받는 데미지 3.36/3.92/4.48/5.04/5.6% 증가(최대 2중첩), 타깃의 최대 HP 0.01%만큼 자신에게 확정 데미지 [CD: 5]`
                },
                [SkillType.SKILL_1]: {
                    name: `1바퀴 돌기, 적의 주의 끌기`,
                    description: `자신의 공격 데미지 67.2% 증가(최대 2중첩), 가하는 데미지 10.08% 증가(최대 2중첩), 가하는 트리거 스킬 효과 16.8% 증가(최대 2중첩), 피격 시 「자신의 공격 데미지 10%만큼 적 전체에게 데미지」 트리거(5턴)(중첩 불가), 다시 적 전체의 받는 데미지 3.36% 증가(최대 2중첩), 타깃의 최대 HP 0.01%만큼 자신에게 확정 데미지 [CD: 5]`
                },
                [SkillType.SKILL_2]: {
                    name: `2바퀴 돌기, 적을 어지럽게 만들기`,
                    description: `자신의 공격 데미지 78.4% 증가(최대 2중첩), 가하는 데미지 13.44% 증가(최대 2중첩), 가하는 트리거 스킬 효과 22.4% 증가(최대 2중첩), 피격 시 「자신의 공격 데미지 10.9%만큼 적 전체에게 데미지」 트리거(5턴)(중첩 불가), 다시 적 전체의 받는 데미지 3.92% 증가(최대 2중첩), 타깃의 최대 HP 0.01%만큼 자신에게 확정 데미지 [CD: 5]`
                },
                [SkillType.SKILL_3]: {
                    name: `3바퀴 돌기, 뭘 봐!`,
                    description: `자신의 공격 데미지 89.6% 증가(최대 2중첩), 가하는 데미지 16.8% 증가(최대 2중첩), 가하는 트리거 스킬 효과 28% 증가(최대 2중첩), 피격 시 「자신의 공격 데미지 11.8%만큼 적 전체에게 데미지」 트리거(5턴)(중첩 불가), 다시 적 전체의 받는 데미지 4.48% 증가(최대 2중첩), 타깃의 최대 HP 0.01%만큼 자신에게 확정 데미지 [CD: 5]`
                },
                [SkillType.SKILL_4]: {
                    name: `4바퀴 돌기, 원해서 돈 게 아니야`,
                    description: `자신의 공격 데미지 100.8% 증가(최대 2중첩), 가하는 데미지 20.16% 증가(최대 2중첩), 가하는 트리거 스킬 효과 33.6% 증가(최대 2중첩), 피격 시 「자신의 공격 데미지 12.7%만큼 적 전체에게 데미지」 트리거(5턴)(중첩 불가), 다시 적 전체의 받는 데미지 5.04% 증가(최대 2중첩), 타깃의 최대 HP 0.01%만큼 자신에게 확정 데미지 [CD: 5]`
                },
                [SkillType.SKILL_5]: {
                    name: `5바퀴 돌기, 신난다 신나!`,
                    description: `자신의 공격 데미지 112% 증가(최대 2중첩), 가하는 데미지 23.52% 증가(최대 2중첩), 가하는 트리거 스킬 효과 39.2% 증가(최대 2중첩), 피격 시 「자신의 공격 데미지 13.7%만큼 적 전체에게 데미지」 트리거(5턴)(중첩 불가), 다시 적 전체의 받는 데미지 5.6% 증가(최대 2중첩), 타깃의 최대 HP 0.01%만큼 자신에게 확정 데미지 [CD: 5]`
                },
                [SkillType.ATTACK]: {
                    name: `쏟아지는 관심의 눈빛`,
                    description: `타깃의 최대 HP 0.01%만큼 자신에게 확정 데미지`
                },
                [SkillType.LEADER]: {
                    name: `케모미미 대장 놀라이티`,
                    description: `아군 전체의 최대 HP 55% 증가\n아군 전체의 공격 데미지 73% 증가\n자신은 「아군 팀이 1종 속성 캐릭터로 편성될 경우 『《신체 내성 UP》』 활성화」 획득\n아군 딜러, 디스럽터는 「아군 팀이 1종 속성 캐릭터로 편성될 경우 『《늑대 무리 사냥 스타트!》』 활성화」 획득\n아군 전체는 「아군 팀에 탱커가 1명 이상 있을 경우 『가하는 데미지 500% 감소』 활성화(디버프 효과)」 획득\n\n《신체 내성 UP》\n방어 시 「자신은 도발 획득(1턴), 받는 데미지 10% 감소(1턴)」 트리거\n궁극기 발동 시 「적 전체의 받는 데미지 7.3% 증가(최대 2중첩), 받는 풍속성 데미지 10.95% 증가(최대 2중첩)」 트리거\n피격 시 「자신의 공격 데미지의 5%만큼 자신을 치유, 자신의 공격 데미지의 4.4%만큼 적 전체에게 데미지」 트리거\n\n《늑대 무리 사냥 스타트!》\n가하는 데미지 43.8% 증가\n가하는 트리거 스킬 효과 146% 증가\n공격 시 「자신의 공격 데미지의 21.9%만큼 적 전체에게 데미지」 트리거`
                },
                [SkillType.PASSIVE_1]: {
                    name: `늑대의 반격`,
                    description: `피격 시 「자신의 공격 데미지의 10%만큼 적 전체에게 데미지」 트리거\n자신 이외의 아군 전체는 「일반 공격, 궁극기 발동 시 『타깃의 최대 HP 0.01%만큼 【달빛 아래의 광랑 놀라이티】에게 확정 데미지』 추가」 획득`
                },
                [SkillType.PASSIVE_2]: {
                    name: `야생 늑대의 유연성`,
                    description: `현재 HP≧99%일 시 「가하는 데미지 20.16% 증가, 가하는 트리거 스킬 효과 33.6% 증가」 활성화\n현재 HP≦99%일 시 「받는 데미지 5% 감소」 활성화`
                },
                [SkillType.PASSIVE_3]: {
                    name: `수인화 Power`,
                    description: `첫 번째 턴 시작 시 「현재 궁극기 CD 5턴 감소」 트리거(1회 트리거 후 제거)\n피격 시 「적 전체가 받는 풍속성 데미지 0.34% 증가(최대 50중첩)」 트리거`
                },
                [SkillType.GENERAL_1]: {
                    name: `데미지+`,
                    description: `자신의 가하는 데미지 6% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 부여`
                }
            }
        }
    }
];
