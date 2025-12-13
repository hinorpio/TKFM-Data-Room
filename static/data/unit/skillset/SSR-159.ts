import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10188: SkillSet[] =  [
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
                    name: `薔薇綻放`,
                    description: `使我方全體造成傷害增加15/17.5/20/22.5/25%(4回合)(不可疊加)、必殺技傷害增加15/17.5/20/22.5/25%(1回合)、普攻傷害增加25.2/29.4/33.6/37.8/42%(4回合)(不可疊加)，再使目標受到傷害增加0/0/6/12/18%(4回合)(不可疊加)。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `薔薇綻放`,
                    description: `使我方全體造成傷害增加15%(4回合)(不可疊加)、必殺技傷害增加15%(1回合)、普攻傷害增加25.2%(4回合)(不可疊加)。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `薔薇綻放`,
                    description: `使我方全體造成傷害增加17.5%(4回合)(不可疊加)、必殺技傷害增加17.5%(1回合)、普攻傷害增加29.4%(4回合)(不可疊加)。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `薔薇綻放`,
                    description: `使我方全體造成傷害增加20%(4回合)(不可疊加)、必殺技傷害增加20%(1回合)、普攻傷害增加33.6%(4回合)(不可疊加)，再使目標受到傷害增加6%(4回合)(不可疊加)。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `薔薇綻放`,
                    description: `使我方全體造成傷害增加22.5%(4回合)(不可疊加)、必殺技傷害增加22.5%(1回合)、普攻傷害增加37.8%(4回合)(不可疊加)，再使目標受到傷害增加12%(4回合)(不可疊加)。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `薔薇綻放`,
                    description: `使我方全體造成傷害增加25%(4回合)(不可疊加)、必殺技傷害增加25%(1回合)、普攻傷害增加42%(4回合)(不可疊加)，再使目標受到傷害增加18%(4回合)(不可疊加)。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `賜福之光`,
                    description: `以自身攻擊力30%使我方全體攻擊力增加(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `自我放逐的魔王`,
                    description: `我方全體最大HP增加50%\n我方全體獲得「當我方隊伍恰好為1種角色屬性時，開啟『《暗中幫助》』」\n我方攻擊者、守護者、妨礙者獲得「攻擊時，觸發『以自身攻擊力15%使我方全體攻擊力增加(1回合)』」\n我方站位5獲得「自身《懊悔》層數≧4層時，開啟『必殺技傷害增加40%、必殺時，追加「以自身攻擊力50%對目標造成傷害」』」\n我方站位5獲得「自身《懊悔》層數=8層時，開啟『必殺技傷害增加80%、必殺時，追加「以自身攻擊力100%對目標造成傷害」』」\n自身獲得「每Wave第1回合時，觸發『使敵方全體受到傷害增加16%(最多1層)、受到光屬性傷害增加40%(最多1層)』」\n\n《暗中幫助》\n攻擊力增加50%\n造成傷害增加45%\n普攻傷害增加75%\n普攻時，追加「以自身攻擊力30%對目標造成傷害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `不曾忘卻的他`,
                    description: `攻擊時，觸發「使我方站位5獲得1層《懊悔》(最多8層)」\n必殺時，觸發「以自身攻擊力30%使我方全體攻擊力增加(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `重振決心`,
                    description: `我方站位5獲得「自身《懊悔》層數≧4層時，開啟『必殺時，追加「使自身獲得『《不再逃避》』，並以自身攻擊力25%對目標造成傷害，再清除自身《懊悔》全部層數」』」\n我方站位5獲得「自身《懊悔》層數=8層時，開啟『必殺時，追加「使自身獲得『《守護一切》』，並以自身攻擊力50%對目標造成傷害」』」\n\n《不再逃避》\n造成傷害增加7%(9回合)(不可疊加)\n普攻時，追加『以自身攻擊力8%對目標造成傷害』(8回合)(不可疊加)\n\n《守護一切》\n造成傷害增加17%(9回合)(不可疊加)\n普攻時，追加『以自身攻擊力16%對目標造成傷害』(8回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `再次出發`,
                    description: `攻擊時，觸發「以自身攻擊力15%使我方站位5攻擊力增加(1回合)」\n每Wave第1、5、9回合時，觸發「使敵方全體受到光屬性傷害增加10%(最多3層)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻擊+`,
                    description: `使自身攻擊力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `蔷薇绽放`,
                    description: `使我方全体造成伤害增加15/17.5/20/22.5/25%(4回合)(不可叠加)、必杀技伤害增加15/17.5/20/22.5/25%(1回合)、普攻伤害增加25.2/29.4/33.6/37.8/42%(4回合)(不可叠加)，再使目标受到伤害增加0/0/6/12/18%(4回合)(不可叠加)。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `蔷薇绽放`,
                    description: `使我方全体造成伤害增加15%(4回合)(不可叠加)、必杀技伤害增加15%(1回合)、普攻伤害增加25.2%(4回合)(不可叠加)。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `蔷薇绽放`,
                    description: `使我方全体造成伤害增加17.5%(4回合)(不可叠加)、必杀技伤害增加17.5%(1回合)、普攻伤害增加29.4%(4回合)(不可叠加)。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `蔷薇绽放`,
                    description: `使我方全体造成伤害增加20%(4回合)(不可叠加)、必杀技伤害增加20%(1回合)、普攻伤害增加33.6%(4回合)(不可叠加)，再使目标受到伤害增加6%(4回合)(不可叠加)。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `蔷薇绽放`,
                    description: `使我方全体造成伤害增加22.5%(4回合)(不可叠加)、必杀技伤害增加22.5%(1回合)、普攻伤害增加37.8%(4回合)(不可叠加)，再使目标受到伤害增加12%(4回合)(不可叠加)。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `蔷薇绽放`,
                    description: `使我方全体造成伤害增加25%(4回合)(不可叠加)、必杀技伤害增加25%(1回合)、普攻伤害增加42%(4回合)(不可叠加)，再使目标受到伤害增加18%(4回合)(不可叠加)。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `赐福之光`,
                    description: `以自身攻击力30%使我方全体攻击力增加(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `自我放逐的魔王`,
                    description: `我方全体最大HP增加50%\n我方全体获得「当我方队伍恰好为1种角色属性时，开启『《暗中帮助》』」\n我方攻击者、守护者、妨碍者获得「攻击时，触发『以自身攻击力15%使我方全体攻击力增加(1回合)』」\n我方站位5获得「自身《懊悔》层数≧4层时，开启『必杀技伤害增加40%、必杀时，追加「以自身攻击力50%对目标造成伤害」』」\n我方站位5获得「自身《懊悔》层数=8层时，开启『必杀技伤害增加80%、必杀时，追加「以自身攻击力100%对目标造成伤害」』」\n自身获得「每Wave第1回合时，触发『使敌方全体受到伤害增加16%(最多1层)、受到光属性伤害增加40%(最多1层)』」\n\n《暗中帮助》\n攻击力增加50%\n造成伤害增加45%\n普攻伤害增加75%\n普攻时，追加「以自身攻击力30%对目标造成伤害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `不曾忘却的他`,
                    description: `攻击时，触发「使我方站位5获得1层《懊悔》(最多8层)」\n必杀时，触发「以自身攻击力30%使我方全体攻击力增加(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `重振决心`,
                    description: `我方站位5获得「自身《懊悔》层数≧4层时，开启『必杀时，追加「使自身获得『《不再逃避》』，并以自身攻击力25%对目标造成伤害，再清除自身《懊悔》全部层数」』」\n我方站位5获得「自身《懊悔》层数=8层时，开启『必杀时，追加「使自身获得『《守护一切》』，并以自身攻击力50%对目标造成伤害」』」\n\n《不再逃避》\n造成伤害增加7%(9回合)(不可叠加)\n普攻时，追加『以自身攻击力8%对目标造成伤害』(8回合)(不可叠加)\n\n《守护一切》\n造成伤害增加17%(9回合)(不可叠加)\n普攻时，追加『以自身攻击力16%对目标造成伤害』(8回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `再次出发`,
                    description: `攻击时，触发「以自身攻击力15%使我方站位5攻击力增加(1回合)」\n每Wave第1、5、9回合时，触发「使敌方全体受到光属性伤害增加10%(最多3层)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻击+`,
                    description: `使自身攻击力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Rose in Bloom`,
                    description: `Increase the party's Damage Output by 15/17.5/20/22.5/25% for 4 turns (Non-stackable), Ultimate Skill Power by 15/17.5/20/22.5/25% for 1 turn, Basic Attack Power by 25.2/29.4/33.6/37.8/42% for 4 turns (Non-stackable), then increase the target's Damage Taken by 0/0/6/12/18% for 4 turns (Non-stackable). CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Rose in Bloom`,
                    description: `Increase the party's Damage Output by 15% for 4 turns (Non-stackable), Ultimate Skill Power by 15% for 1 turn, Basic Attack Power by 25.2% for 4 turns (Non-stackable). CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Rose in Bloom`,
                    description: `Increase the party's Damage Output by 17.5% for 4 turns (Non-stackable), Ultimate Skill Power by 17.5% for 1 turn, Basic Attack Power by 29.4% for 4 turns (Non-stackable). CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Rose in Bloom`,
                    description: `Increase the party's Damage Output by 20% for 4 turns (Non-stackable), Ultimate Skill Power by 20% for 1 turn, Basic Attack Power by 33.6% for 4 turns (Non-stackable), then increase the target's Damage Taken by 6% for 4 turns (Non-stackable). CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Rose in Bloom`,
                    description: `Increase the party's Damage Output by 22.5% for 4 turns (Non-stackable), Ultimate Skill Power by 22.5% for 1 turn, Basic Attack Power by 37.8% for 4 turns (Non-stackable), then increase the target's Damage Taken by 12% for 4 turns (Non-stackable). CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Rose in Bloom`,
                    description: `Increase the party's Damage Output by 25% for 4 turns (Non-stackable), Ultimate Skill Power by 25% for 1 turn, Basic Attack Power by 42% for 4 turns (Non-stackable), then increase the target's Damage Taken by 18% for 4 turns (Non-stackable). CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Light of Benediction`,
                    description: `Increase the party's Attack Power for 30% of your Attack Power for 1 turn.`
                },
                [SkillType.LEADER]: {
                    name: `Self-Exiled Archdemon`,
                    description: `Increase the party's max HP by 50%.\nThe party gains the following effect: When characters are taking 1 position in the party, activate "Secret Help".\nAllied Attackers, Defenders, and Obstructors gain the following effect: On Attack, trigger the following effect: Increase the party's Attack Power for 15% of your Attack Power for 1 turn.\nThe 5th ally gains the following effect: When your "Regret" stacks are ≥ 4, activate "Increase Ultimate Skill Power by 40%. On Ultimate Skill, deal additional damage to the target (50% Attack Power)".\nThe 5th ally gains the following effect: When your "Regret" stacks are = 8, activate "Increase Ultimate Skill Power by 80%. On Ultimate Skill, deal additional damage to the target (100% Attack Power)".\nGain yourself the following effect: On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken by 16% (max 1 stack) and Damage Taken from Light attacks by 40% (max 1 stack).\n\n"Secret Help"\nIncrease Attack Power by 50%.\nIncrease Damage Output by 45%.\nIncrease Basic Attack Power by 75%.\nOn Basic Attack, deal additional damage to the target (30% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `The One Never Forgotten`,
                    description: `On Attack, trigger the following effect: Gain the 5th ally 1 stack of "Regret" (max 8 stacks).\nOn Ultimate Skill, trigger the following effect: Increase the party's Attack Power for 30% of your Attack Power for 1 turn.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Renewed Resolve`,
                    description: `The 5th ally gains the following effect: When your "Regret" stacks are ≥ 4, activate "On Ultimate Skill, gain yourself "Done Running Away", damage the target (25% Attack Power), then remove all your "Regret" stacks".\nThe 5th ally gains the following effect: When your "Regret" stacks are = 8, activate "On Ultimate Skill, gain yourself "Protect Everything", then damage the target (50% Attack Power)".\n\n"Done Running Away"\nIncrease Damage Output by 7% for 9 turns (Non-stackable).\nOn Basic Attack, deal additional damage to the target for 8 turns (8% Attack Power)(Non-stackable).\n\n"Protect Everything"\nIncrease Damage Output by 17% for 9 turns (Non-stackable).\nOn Basic Attack, deal additional damage to the target for 8 turns (16% Attack Power).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Set Off Once More`,
                    description: `On Attack, trigger the following effect: Increase the 5th ally's Attack Power for 15% of your Attack Power for 1 turn.\nOn the 1st, 5th, and 9th turn of each wave, trigger the following effect: Increase all enemies' Damage Taken from Light attacks by 10% (max 3 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack+`,
                    description: `Increase your Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain yourself immunity to Sleep.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `咲き誇る薔薇`,
                    description: `味方全体の与えるダメージを15/17.5/20/22.5/25%増加させ(4ターン)(スタック不可)、必殺技ダメージが15/17.5/20/22.5/25%増加し(1ターン)、通常攻撃ダメージが25.2/29.4/33.6/37.8/42%増加し(4ターン)(スタック不可)、さらにターゲットの受けるダメージを0/0/6/12/18%増加させる(4ターン)(スタック不可)[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `咲き誇る薔薇`,
                    description: `味方全体の与えるダメージを15%増加させ(4ターン)(スタック不可)、必殺技ダメージが15%増加し(1ターン)、通常攻撃ダメージが25.2%増加する(4ターン)(スタック不可)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `咲き誇る薔薇`,
                    description: `味方全体の与えるダメージを17.5%増加させ(4ターン)(スタック不可)、必殺技ダメージが17.5%増加し(1ターン)、通常攻撃ダメージが29.4%増加する(4ターン)(スタック不可)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `咲き誇る薔薇`,
                    description: `味方全体の与えるダメージを20%増加させ(4ターン)(スタック不可)、必殺技ダメージが20%増加し(1ターン)、通常攻撃ダメージが33.6%増加し(4ターン)(スタック不可)、さらにターゲットの受けるダメージを6%増加させる(4ターン)(スタック不可)[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `咲き誇る薔薇`,
                    description: `味方全体の与えるダメージを22.5%増加させ(4ターン)(スタック不可)、必殺技ダメージが22.5%増加し(1ターン)、通常攻撃ダメージが37.8%増加し(4ターン)(スタック不可)、さらにターゲットの受けるダメージを12%増加させる(4ターン)(スタック不可)[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `咲き誇る薔薇`,
                    description: `味方全体の与えるダメージを25%増加させ(4ターン)(スタック不可)、必殺技ダメージが25%増加し(1ターン)、通常攻撃ダメージが42%増加し(4ターン)(スタック不可)、さらにターゲットの受けるダメージを18%増加させる(4ターン)(スタック不可)[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `祝福の光`,
                    description: `自分の攻撃力の30%分味方全体の攻撃力を増加させる(1ターン)`
                },
                [SkillType.LEADER]: {
                    name: `流浪の魔王`,
                    description: `味方全体の最大HPが50%増加する\n味方全体が「味方にちょうど1種類の属性キャラがいる時『《密かな手助け》』を発動する」を獲得する\n味方アタッカー、ガーディアン、デバッファーが「攻撃時『自分の攻撃力の15%分味方全体の攻撃力を増加させる(1ターン)』を誘発する」を獲得する\n味方の5番目のメンバーが「自分の《後悔》のスタック数が≧4の時『必殺技ダメージが40%増加し、必殺技攻撃時「自分の50%の攻撃力でターゲットにダメージを与える」を追加する』を発動する」を獲得する\n味方の5番目のメンバーが「自分の《後悔》のスタック数が=8の時『必殺技ダメージが80%増加し、必殺技攻撃時「自分の100%の攻撃力でターゲットにダメージを与える」を追加する』を発動する」を獲得する\n自分が「每Waveの1ターン目に『敵全体の受けるダメージを16%増加させ(最高1スタック)、受ける光属性ダメージを40%増加させる(最高1スタック)』を誘発する」を獲得する\n\n《密かな手助け》\n攻撃力が50%増加する\n与えるダメージが45%増加する\n通常攻撃ダメージが75%増加する\n通常攻撃時「自分の30%の攻撃力でターゲットにダメージを与える」を追加する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `忘れられぬ彼`,
                    description: `攻撃時「味方の5番目のメンバーが《後悔》を1スタック獲得する(最高8スタック)」を誘発する\n必殺技攻撃時「自分の攻撃力の30%分味方全体の攻撃力を増加させる(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `新たなる決意`,
                    description: `味方の5番目のメンバーが「自分の《後悔》のスタック数が≧4の時『必殺技攻撃時「自分が『《もう逃げない》』を獲得し、自分の25%の攻撃力でターゲットにダメージを与え、自分の《後悔》のスタック数をすべて消す」を追加する』を発動する」を獲得する\n味方の5番目のメンバーが「自分の《後悔》のスタック数が=8の時『必殺技攻撃時「自分が『《すべてを守る》』を獲得し、自分の50%の攻撃力でターゲットにダメージを与える」を追加する』を発動する」を獲得する\n\n《もう逃げない》\n与えるダメージが7%増加する(9ターン)(スタック不可)\n通常攻撃時「自分の8%の攻撃力でターゲットにダメージを与える」を追加する(8ターン)(スタック不可)\n\n《すべてを守る》\n与えるダメージが17%増加する(9ターン)(スタック不可)\n通常攻撃時「自分の16%の攻撃力でターゲットにダメージを与える」を追加する(8ターン)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `再出発`,
                    description: `攻撃時「自分の攻撃力の15%分味方の5番目のメンバーの攻撃力を増加させる(1ターン)」を誘発する\n每Waveの1、5、9ターン目に「敵全体の受ける光属性ダメージを10%増加させる(最高3スタック)」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻撃+`,
                    description: `自分の攻撃力を10%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `睡眠無効`,
                    description: `自分を睡眠無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `장미 개화`,
                    description: `아군 전체의 가하는 데미지 15/17.5/20/22.5/25% 증가(4턴)(중첩 불가), 궁극기 데미지 15/17.5/20/22.5/25% 증가(1턴), 일반 공격 데미지 25.2/29.4/33.6/37.8/42% 증가(4턴)(중첩 불가), 다시 타깃이 받는 데미지 0/0/6/12/18% 증가(4턴)(중첩불가) [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `장미 개화`,
                    description: `아군 전체의 가하는 데미지 15% 증가(4턴)(중첩 불가), 궁극기 데미지 15% 증가(1턴), 일반 공격 데미지 25.2%증가(4턴)(중첩 불가) [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `장미 개화`,
                    description: `아군 전체의 가하는 데미지 17.5% 증가(4턴)(중첩 불가), 궁극기 데미지 17.5% 증가(1턴), 일반 공격 데미지 29.4%증가(4턴)(중첩 불가) [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `장미 개화`,
                    description: `아군 전체의 가하는 데미지 20% 증가(4턴)(중첩 불가), 궁극기 데미지 20% 증가(1턴), 일반 공격 데미지 33.6% 증가(4턴)(중첩 불가), 다시 타깃이 받는 데미지 6% 증가(4턴)(중첩불가) [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `장미 개화`,
                    description: `아군 전체의 가하는 데미지 22.5% 증가(4턴)(중첩 불가), 궁극기 데미지 22.5% 증가(1턴), 일반 공격 데미지 37.8% 증가(4턴)(중첩 불가), 다시 타깃이 받는 데미지 12% 증가(4턴)(중첩불가) [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `장미 개화`,
                    description: `아군 전체의 가하는 데미지 25% 증가(4턴)(중첩 불가), 궁극기 데미지 25% 증가(1턴), 일반 공격 데미지 42%증가(4턴)(중첩 불가), 다시 타깃이 받는 데미지 18% 증가(4턴)(중첩불가) [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `축복의 빛`,
                    description: `자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)`
                },
                [SkillType.LEADER]: {
                    name: `스스로 유배된 마왕`,
                    description: `아군 전체의 최대 HP 50% 증가\n아군 전체는 「팀이 1종류 캐릭터 속성으로 편성될 시 『《은밀한 도움》』활성화」획득\n아군 딜러, 탱커, 디스럽터는 「공격 시『자신의 공격 데미지의 15%만큼 아군 전체의 공격 데미지 증가(1턴)』트리거」획득\n5번 자리 아군은 「자신의《뼈저린 후회》중첩수≧4일 시『궁극기 데미지 40% 증가, 궁극기 발동 시「자신의 공격 데미지의 50%만큼 타깃에게 데미지」추가』활성화」획득\n5번 자리 아군은 「자신의《뼈저린 후회》중첩수=8일 시『궁극기 데미지 80% 증가, 궁극기 발동 시「자신의 공격 데미지의 100%만큼 타깃에게 데미지」추가』활성화」획득\n자신은 「모든 Wave의 첫 번째 턴 시작 시, 『적 전체가 받는 데미지 16% 증가(최대 1중첩), 받는 광속성 데미지 40% 증가(최대 1중첩)』트리거」획득\n\n《은밀한 도움》\n공격 데미지 50% 증가\n가하는 데미지 45% 증가\n일반 공격 데미지 75% 증가\n일반 공격 시 「자신의 공격 데미지의 30%만큼 타깃에게 데미지」추가`
                },
                [SkillType.PASSIVE_1]: {
                    name: `잊은 적 없는 그 사람`,
                    description: `공격 시 「5번 자리 아군은 1중첩의《뼈저린 후회》획득(최대8중첩)」트리거\n궁극기 발동 시 「자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)」 트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `다시 다진 결의`,
                    description: `5번 자리 아군은 「자신의《뼈저린 후회》중첩수≧4일 시 『궁극기 발동 시「자신은 『《더 이상 피하지 않겠어》』획득, 자신의 공격 데미지의 25%만큼 타깃에게 데미지, 다시 자신의 모든《뼈저린 후회》중첩수 제거」추가』활성화」획득\n5번 자리 아군은 「자신의《뼈저린 후회》중첩수=8일 시 『궁극기 발동 시「자신은 『《모든 것을 지키겠어》』획득, 자신의 공격 데미지의 50%만큼 타깃에게 데미지」추가』활성화」획득\n\n《더 이상 피하지 않겠어》\n가하는 데미지 7% 증가(9턴)(중첩 불가)\n일반 공격 시 『자신의 공격 데미지의 8%만큼 타깃에게 데미지』추가(8턴)(중첩 불가)\n\n《모든 것을 지키겠어》\n가하는 데미지 17% 증가(9턴)(중첩 불가)\n일반 공격 시 『자신의 공격 데미지의 16%만큼 타깃에게 데미지』추가(8턴)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `다시 출발`,
                    description: `공격 시 「자신의 공격 데미지의 15%만큼 5번 자리 아군의 공격 데미지 증가(1턴)」트리거\n각 Wave의 1, 5, 9번째 턴 시작 시, 「적 전체가 받는 광속성 데미지 10% 증가(최대 3중첩)」트리거`
                },
                [SkillType.GENERAL_1]: {
                    name: `공격+`,
                    description: `자신의 공격 데미지 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `수면 면역`,
                    description: `자신에게 수면 면역 효과`
                }
            }
        }
    },
]