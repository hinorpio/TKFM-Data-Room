import { Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10215: SkillSet[] =  [
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
                    name: `打倒魔王資本的壓迫！`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加15.66/18.27/20.88/23.49/26.1%(4回合)(不可疊加)，並使敵方全體受到傷害增加2.61/3.04/3.48/3.91/4.35%(最多2層)、受到風屬性傷害增加0/3.92/4.79/5.66/6.53%(最多2層)。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `打倒魔王資本的壓迫！`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加15.66%(4回合)(不可疊加)，並使敵方全體受到傷害增加2.61%(最多2層)。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `打倒魔王資本的壓迫！`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加18.27%(4回合)(不可疊加)，並使敵方全體受到傷害增加3.04%(最多2層)、受到風屬性傷害增加3.92%(最多2層)。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `打倒魔王資本的壓迫！`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加20.88%(4回合)(不可疊加)，並使敵方全體受到傷害增加3.48%(最多2層)、受到風屬性傷害增加4.79%(最多2層)。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `打倒魔王資本的壓迫！`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加23.49%(4回合)(不可疊加)，並使敵方全體受到傷害增加3.91%(最多2層)、受到風屬性傷害增加5.66%(最多2層)。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `打倒魔王資本的壓迫！`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加26.1%(4回合)(不可疊加)，並使敵方全體受到傷害增加4.35%(最多2層)、受到風屬性傷害增加6.53%(最多2層)。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `濫用權力`,
                    description: `以自身攻擊力30%使我方全體攻擊力增加(1回合)，並以目標最大HP0.01%對我方全體造成真實傷害`
                },
                [SkillType.LEADER]: {
                    name: `萬聖多元博士顧問`,
                    description: `我方全體最大HP增加55%\n我方全體攻擊力增加67.5%\n我方全體攻擊者、守護者、妨礙者獲得「每Wave第1回合時，觸發『使自身獲得《不多元思想感知兵器》』」\n我方全體風屬性角色獲得「第1回合時，觸發『使我方全體獲得1層《甜蜜的介入》(最多5層)』(觸發1次後清除)」\n我方全體獲得「自身《甜蜜的介入》層數=3層時，開啟『《閉上你們的嘴》』」\n我方全體風屬性攻擊者、守護者、妨礙者獲得「自身《甜蜜的介入》層數=3層時，開啟『《Party解散倒數》』」\n\n《不多元思想感知兵器》\n攻擊力增加100%(1回合)\n造成傷害增加60%(1回合)\n造成觸發技效果增加200%(1回合)\n被攻擊時，觸發「以自身攻擊力15%對敵方全體造成傷害」(1回合)\n\n《閉上你們的嘴》\n被攻擊時，觸發「使自身造成觸發技效果增加16.88%(最多8層)，並使敵方全體受到傷害增加0.34%(最多40層)、受到風屬性傷害增加0.51%(最多40層)」\n\n《Party解散倒數》\n被攻擊時，觸發「使自身造成傷害增加5.06%(最多8層)，並以自身攻擊力4%對敵方全體造成傷害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `是你們要服務我！`,
                    description: `必殺時，追加「以自身攻擊力30%使我方全體攻擊力增加(1回合)，並以目標最大HP0.01%對我方全體造成真實傷害」\n我方全體攻擊者、守護者、妨礙者獲得「普攻、必殺時，追加『以目標最大HP0.01%對自身造成真實傷害』」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `所有人都要聽我的`,
                    description: `第1回合時，觸發「使我方全體攻擊者、守護者、妨礙者獲得1層《無止盡的慾望》(最多5層)」(觸發1次後清除)\n每經過1回合時，觸發「使我方全體攻擊者、守護者、妨礙者《無止盡的慾望》層數變為1層(最多5層)」\n我方全體攻擊者、守護者、妨礙者獲得「自身《無止盡的慾望》層數≦4層時，開啟『被攻擊時，觸發「以自身攻擊力2.2%對敵方全體造成傷害，並使自身獲得1層《無止盡的慾望》(最多5層)」』」\n我方全體攻擊者、守護者、妨礙者獲得「自身《無止盡的慾望》層數=5層時，開啟『被攻擊時，觸發「以自身攻擊力4.4%對敵方全體造成傷害」』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `這是我應得的權利！`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少4回合」(觸發1次後清除)\n攻擊力增加43.5%\n防禦時，觸發「以自身攻擊力30%使我方全體攻擊力增加(1回合)」\n我方全體獲得「被攻擊時，觸發『使自身造成觸發效果增加10.88%(最多8層)』」`
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
                    name: `打倒魔王资本的压迫！`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加15.66/18.27/20.88/23.49/26.1%(4回合)(不可叠加)，并使敌方全体受到伤害增加2.61/3.04/3.48/3.91/4.35%(最多2层)、受到风属性伤害增加0/3.92/4.79/5.66/6.53%(最多2层)。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `打倒魔王资本的压迫！`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加15.66%(4回合)(不可叠加)，并使敌方全体受到伤害增加2.61%(最多2层)。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `打倒魔王资本的压迫！`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加18.27%(4回合)(不可叠加)，并使敌方全体受到伤害增加3.04%(最多2层)、受到风属性伤害增加3.92%(最多2层)。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `打倒魔王资本的压迫！`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加20.88%(4回合)(不可叠加)，并使敌方全体受到伤害增加3.48%(最多2层)、受到风属性伤害增加4.79%(最多2层)。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `打倒魔王资本的压迫！`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加23.49%(4回合)(不可叠加)，并使敌方全体受到伤害增加3.91%(最多2层)、受到风属性伤害增加5.66%(最多2层)。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `打倒魔王资本的压迫！`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加26.1%(4回合)(不可叠加)，并使敌方全体受到伤害增加4.35%(最多2层)、受到风属性伤害增加6.53%(最多2层)。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `滥用权力`,
                    description: `以自身攻击力30%使我方全体攻击力增加(1回合)，并以目标最大HP0.01%对我方全体造成真实伤害`
                },
                [SkillType.LEADER]: {
                    name: `万圣多元博士顾问`,
                    description: `我方全体最大HP增加55%\n我方全体攻击力增加67.5%\n我方全体攻击者、守护者、妨碍者获得「每Wave第1回合时，触发『使自身获得《不多元思想感知兵器》』」\n我方全体风属性角色获得「第1回合时，触发『使我方全体获得1层《甜蜜的介入》(最多5层)』(触发1次后清除)」\n我方全体获得「自身《甜蜜的介入》层数=3层时，开启『《闭上你们的嘴》』」\n我方全体风属性攻击者、守护者、妨碍者获得「自身《甜蜜的介入》层数=3层时，开启『《Party解散倒数》』」\n\n《不多元思想感知兵器》\n攻击力增加100%(1回合)\n造成伤害增加60%(1回合)\n造成触发技效果增加200%(1回合)\n被攻击时，触发「以自身攻击力15%对敌方全体造成伤害」(1回合)\n\n《闭上你们的嘴》\n被攻击时，触发「使自身造成触发技效果增加16.88%(最多8层)，并使敌方全体受到伤害增加0.34%(最多40层)、受到风属性伤害增加0.51%(最多40层)」\n\n《Party解散倒数》\n被攻击时，触发「使自身造成伤害增加5.06%(最多8层)，并以自身攻击力4%对敌方全体造成伤害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `是你们要服务我！`,
                    description: `必杀时，追加「以自身攻击力30%使我方全体攻击力增加(1回合)，并以目标最大HP0.01%对我方全体造成真实伤害」\n我方全体攻击者、守护者、妨碍者获得「普攻、必杀时，追加『以目标最大HP0.01%对自身造成真实伤害』」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `所有人都要听我的`,
                    description: `第1回合时，触发「使我方全体攻击者、守护者、妨碍者获得1层《无止尽的慾望》(最多5层)」(触发1次后清除)\n每经过1回合时，触发「使我方全体攻击者、守护者、妨碍者《无止尽的慾望》层数变为1层(最多5层)」\n我方全体攻击者、守护者、妨碍者获得「自身《无止尽的慾望》层数≦4层时，开启『被攻击时，触发「以自身攻击力2.2%对敌方全体造成伤害，并使自身获得1层《无止尽的慾望》(最多5层)」』」\n我方全体攻击者、守护者、妨碍者获得「自身《无止尽的慾望》层数=5层时，开启『被攻击时，触发「以自身攻击力4.4%对敌方全体造成伤害」』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `这是我应得的权利！`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少4回合」(触发1次后清除)\n攻击力增加43.5%\n防禦时，触发「以自身攻击力30%使我方全体攻击力增加(1回合)」\n我方全体获得「被攻击时，触发『使自身造成触发效果增加10.88%(最多8层)』」`
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
                    name: `Smash Capitalist Oppression!`,
                    description: `Increase all allied Attackers, Defenders, and Obstructors' Damage Output by 15.66/18.27/20.88/23.49/26.1% for 4 turns (Non-stackable), increase all enemies' Damage Taken by 2.61/3.04/3.48/3.91/4.35% (max 2 stacks), increase all enemies' Damage Taken from Wind attacks by 0/3.92/4.79/5.66/6.53% (max 2 stacks). CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Smash Capitalist Oppression!`,
                    description: `Increase all allied Attackers, Defenders, and Obstructors' Damage Output by 15.66% for 4 turns (Non-stackable), increase all enemies' Damage Taken by 2.61% (max 2 stacks). CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Smash Capitalist Oppression!`,
                    description: `Increase all allied Attackers, Defenders, and Obstructors' Damage Output by 18.27% for 4 turns (Non-stackable), increase all enemies' Damage Taken by 3.04% (max 2 stacks), increase all enemies' Damage Taken from Wind attacks by 3.92% (max 2 stacks). CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Smash Capitalist Oppression!`,
                    description: `Increase all allied Attackers, Defenders, and Obstructors' Damage Output by 20.88% for 4 turns (Non-stackable), increase all enemies' Damage Taken by 3.48% (max 2 stacks), increase all enemies' Damage Taken from Wind attacks by 4.79% (max 2 stacks). CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Smash Capitalist Oppression!`,
                    description: `Increase all allied Attackers, Defenders, and Obstructors' Damage Output by 23.49% for 4 turns (Non-stackable), increase all enemies' Damage Taken by 3.91% (max 2 stacks), increase all enemies' Damage Taken from Wind attacks by 5.66% (max 2 stacks). CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Smash Capitalist Oppression!`,
                    description: `Increase all allied Attackers, Defenders, and Obstructors' Damage Output by 26.1% for 4 turns (Non-stackable), increase all enemies' Damage Taken by 4.35% (max 2 stacks), increase all enemies' Damage Taken from Wind attacks by 6.53% (max 2 stacks). CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Abuse of Power`,
                    description: `Increase the party's Attack Power for 30% of your Attack Power for 1 turn and deal True Damage to the party for 0.01% of the target's max HP.`
                },
                [SkillType.LEADER]: {
                    name: `Halloween Diversity Advisor`,
                    description: `Increase the party's max HP by 55%.\nIncrease the party's Attack Power by 67.5%.\nGain all allied Attackers, Defenders, and Obstructors the following effect: On the 1st turn of each wave, trigger the following effect: Gain yourself "Anti-Diversity Detector".\nGain all Wind allies the following effect: On the 1st turn, trigger the following effect: The party gains 1 stack of "Sweet Intervention" (max 5 stacks) (removes after triggering once).\nThe party gains the following effect: When your "Sweet Intervention" stacks are = 3, activate "Shut Your Mouths".\nGain all allied Wind Attackers, Defenders, and Obstructors the following effect: When your "Sweet Intervention" stacks are = 3, activate "Party Shutdown Countdown".\n\n"Anti-Diversity Detector"\nIncrease Attack Power by 100% for 1 turn.\nIncrease Damage Output by 60% for 1 turn.\nIncrease trigger ability effects by 200% for 1 turn.\nWhen attacked, trigger the following effect for 1 turn: Damage all enemies (15% Attack Power).\n\n"Shut Your Mouths"\nWhen attacked, trigger the following effect: Increase your trigger ability effects by 16.88% (max 8 stacks), increase all enemies' Damage Taken by 0.34% (max 40 stacks) and Damage Taken from Wind attacks by 0.51% (max 40 stacks).\n\n"Party Shutdown Countdown"\nWhen attacked, trigger the following effect: Increase your Damage Output by 5.06% (max 8 stacks) and damage all enemies (4% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `You Serve Me!`,
                    description: `On Ultimate Skill, increase the party's Attack Power for 30% of your Attack Power for 1 turn and deal True Damage to the party for 0.01% of the target's max HP.\nWhen an allied Attacker, Defender, or Obstructor performs a Basic Attack or Ultimate Skill, they then deal True Damage to themselves for 0.01% of the target's max HP.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Everyone Obeys Me`,
                    description: `On the 1st turn, trigger the following effect: All allied Attackers, Defenders, and Obstructors gain 1 stack of "Endless Desire" (max 5 stacks) (removes after triggering once).\nAfter every 1 turn, trigger the following effect: All allied Attackers, Defenders, and Obstructors' "Endless Desire" stacks become 1 (max 5 stacks).\nGain all allied Attackers, Defenders, and Obstructors the following effect: When your "Endless Desire" stacks are ≤ 4, activate "When attacked, trigger the following effect: Damage all enemies (2.2% Attack Power) and gain yourself 1 stack of "Endless Desire" (max 5 stacks)".\nGain all allied Attackers, Defenders, and Obstructors the following effect: When your "Endless Desire" stacks are = 5, activate "When attacked, trigger the following effect: Damage all enemies (4.4% Attack Power)".`
                },
                [SkillType.PASSIVE_3]: {
                    name: `This Is My Right!`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 4 turns (removes after triggering once).\nIncrease Attack Power by 43.5%.\nWhen in Guard Stance, trigger the following effect: Increase the party's Attack Power for 30% of your Attack Power for 1 turn.\nThe party gains the following effect: When attacked, trigger the following effect: Increase your trigger ability effects by 10.88% (max 8 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack+`,
                    description: `Increase your Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain immunity to Sleep.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `打倒魔王資本の抑圧！`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを15.66/18.27/20.88/23.49/26.1%増加させ(4ターン)(スタック不可)、敵全体の受けるダメージを2.61/3.04/3.48/3.91/4.35%増加させ(最高2スタック)、受ける風属性ダメージを0/3.92/4.79/5.66/6.53%増加させる(最高2スタック)[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `打倒魔王資本の抑圧！`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを15.66%増加させ(4ターン)(スタック不可)、敵全体の受けるダメージを2.61%増加させる(最高2スタック)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `打倒魔王資本の抑圧！`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを18.27%増加させ(4ターン)(スタック不可)、敵全体の受けるダメージを3.04%増加させ(最高2スタック)、受ける風属性ダメージを3.92%増加させる(最高2スタック)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `打倒魔王資本の抑圧！`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを20.88%増加させ(4ターン)(スタック不可)、敵全体の受けるダメージを3.48%増加させ(最高2スタック)、受ける風属性ダメージを4.79%増加させる(最高2スタック)[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `打倒魔王資本の抑圧！`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを23.49%増加させ(4ターン)(スタック不可)、敵全体の受けるダメージを3.91%増加させ(最高2スタック)、受ける風属性ダメージを5.66%増加させる(最高2スタック)[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `打倒魔王資本の抑圧！`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを26.1%増加させ(4ターン)(スタック不可)、敵全体の受けるダメージを4.35%増加させ(最高2スタック)、受ける風属性ダメージを6.53%増加させる(最高2スタック)[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `職権乱用`,
                    description: `自分の攻撃力の30%分、味方全体の攻撃力を増加させ(1ターン)、ターゲットの最大HPの0.01%分味方全体に確定ダメージを与える。`
                },
                [SkillType.LEADER]: {
                    name: `多様性ハロウィン博士顧問`,
                    description: `味方全体の最大HPが55%増加する\n味方全体の攻撃力が67.5%増加する\n味方全体のアタッカー、ガーディアン、デバッファーが「毎Waveの1ターン目に『自分が《アンチ多様性思想感知兵器》を獲得する』を誘発する」を獲得する\n味方全体の風属性キャラが「1ターン目に『味方全体が《甘い介入》を1スタック獲得する(最高5スタック)』を誘発する(誘発1回後に解除)」を獲得する\n味方全体が「自分の《甘い介入》のスタック数が=3の時『《お前らその口を閉じろ》』を発動する」を獲得する\n味方全体の風属性アタッカー、ガーディアン、デバッファーが「自分の《甘い介入》のスタック数が=3の時『《パーティー解散カウントダウン》』を発動する」を獲得する\n\n《アンチ多様性思想感知兵器》\n攻撃力が100%増加する(1ターン)\n与えるダメージが60%増加する(1ターン)\n与える誘発スキル効果が200%増加する(1ターン)\n攻撃を受けた時「自分の攻撃力の15%分敵全体にダメージを与える」を誘発する(1ターン)\n\n《お前らその口を閉じろ》\n攻撃を受けた時「自分の与える誘発スキル効果を16.88%増加させ(最高8スタック)、敵全体の受けるダメージを0.34%増加させ(最高40スタック)、受ける風属性ダメージを0.51%増加させる(最高40スタック)」を誘発する\n\n《パーティー解散カウントダウン》\n攻撃を受けた時「自分の与えるダメージを5.06%増加させ(最高8スタック)、自分の攻撃力の4%分敵全体にダメージを与える」を誘発する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `お前らがサービスするんだよ！`,
                    description: `必殺技攻撃時「自分の攻撃力の30%分、味方全体の攻撃力を増加させ(1ターン)、ターゲットの最大HPの0.01%分味方全体に確定ダメージを与える」を追加する\n味方全体のアタッカー、ガーディアン、デバッファーが「通常攻撃、必殺技攻撃時に『ターゲットの最大HPの0.01%分自分に確定ダメージを与える』を追加する」を獲得する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `全員あたしの言う事を聞け`,
                    description: `1ターン目に「味方全体のアタッカー、ガーディアン、デバッファーが《底なしの欲望》を1スタック獲得する(最高5スタック)」を誘発する(誘発1回後に解除)\n1ターン毎に「味方全体のアタッカー、ガーディアン、デバッファーの《底なしの欲望》を1スタックにする(最高5スタック)」を誘発する\n味方全体のアタッカー、ガーディアン、デバッファーが「自分の《底なしの欲望》のスタック数が≦4の時『攻撃を受けた時「自分の攻撃力の2.2％分敵全体にダメージを与え、自分が《底なしの欲望》を1スタック獲得する(最高5スタック)」を誘発する』を発動する」を獲得する\n味方全体のアタッカー、ガーディアン、デバッファーが「自分の《底なしの欲望》のスタック数が=5の時『攻撃を受けた時「自分の攻撃力の4.4%分敵全体にダメージを与える」を誘発する』を発動する」を獲得する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `あたしが受けるべき当然の権利だ！`,
                    description: `1ターン目に「自分の現在の必殺技CDを4ターン減少させる」を誘発する(誘発1回後に解除)\n攻撃力が43.5%増加する\n防御時「自分の攻撃力の30％分味方全体の攻撃力を増加させる(1ターン)」を誘発する\n味方全体が「攻撃を受けた時『自分の誘発スキル効果を10.88%増加させる(最高8スタック)』を誘発する」を獲得する`
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
                    name: `마왕 자본의 압제를 타도하라!`,
                    description: `아군 딜러, 탱커, 디스럽터가 가하는 데미지 15.66/18.27/20.88/23.49/26.1% 증가(4턴)(중첩 불가), 적 전체가 받는 데미지 2.61/3.04/3.48/3.91/4.35% 증가(최대 2중첩), 받는 풍속성 데미지 0/3.92/4.79/5.66/6.53% 증가(최대 2중첩) [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `마왕 자본의 압제를 타도하라!`,
                    description: `아군 딜러, 탱커, 디스럽터가 가하는 데미지 15.66% 증가(4턴)(중첩 불가), 적 전체가 받는 데미지 2.61% 증가(최대 2중첩) [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `마왕 자본의 압제를 타도하라!`,
                    description: `아군 딜러, 탱커, 디스럽터가 가하는 데미지 18.27% 증가(4턴)(중첩 불가), 적 전체가 받는 데미지 3.04% 증가(최대 2중첩), 받는 풍속성 데미지 3.92% 증가(최대 2중첩) [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `마왕 자본의 압제를 타도하라!`,
                    description: `아군 딜러, 탱커, 디스럽터가 가하는 데미지 20.88% 증가(4턴)(중첩 불가), 적 전체가 받는 데미지 3.48% 증가(최대 2중첩), 받는 풍속성 데미지 4.79% 증가(최대 2중첩) [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `마왕 자본의 압제를 타도하라!`,
                    description: `아군 딜러, 탱커, 디스럽터가 가하는 데미지 23.49% 증가(4턴)(중첩 불가), 적 전체가 받는 데미지 3.91% 증가(최대 2중첩), 받는 풍속성 데미지 5.66% 증가(최대 2중첩) [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `마왕 자본의 압제를 타도하라!`,
                    description: `아군 딜러, 탱커, 디스럽터가 가하는 데미지 26.1% 증가(4턴)(중첩 불가), 적 전체가 받는 데미지 4.35% 증가(최대 2중첩), 받는 풍속성 데미지 6.53% 증가(최대 2중첩) [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `권력 남용`,
                    description: `자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴), 타깃의 최대 HP 0.01%만큼 아군 전체에게 확정 데미지`
                },
                [SkillType.LEADER]: {
                    name: `할로윈 다양성 박사 고문`,
                    description: `아군 전체의 최대 HP 55% 증가\n아군 전체의 공격 데미지 67.5% 증가\n아군 딜러, 탱커, 디스럽터는 「각 Wave 첫 번째 턴 시작 시 『자신은 《비다양성 사상 감지 병기》 획득』 트리거」 획득\n아군 풍속성 캐릭터는 「첫 번째 턴 시작 시 『아군 전체는 1중첩의 《달콤한 개입》 획득(최대 5중첩)』 트리거(1회 트리거 후 제거)」 획득\n아군 전체는 「자신의 《달콤한 개입》 중첩수=3일 경우 『《너희 입다물어》』 활성화」 획득\n아군 풍속성 딜러, 탱커, 디스럽터는 「자신의 《달콤한 개입》 중첩수=3일 경우 『《Party 해산 카운트다운》』 활성화」 획득\n\n《비다양성 사상 감지 병기》\n공격 데미지 100% 증가(1턴)\n가하는 데미지 60% 증가(1턴)\n가하는 트리거 스킬 효과 200% 증가(1턴)\n피격 시 「자신의 공격 데미지의 15%만큼 적 전체에게 데미지」 트리거(1턴)\n\n《너희 입다물어》\n피격 시 「자신이 가하는 트리거 스킬 효과 16.88% 증가(최대 8중첩), 적 전체가 받는 데미지 0.34% 증가(최대 40중첩), 받는 풍속성 데미지 0.51% 증가(최대 40중첩)」 트리거\n\n《Party 해산 카운트다운》\n피격 시 「자신이 가하는 데미지 5.06% 증가(최대 8중첩), 자신의 공격 데미지의 4%만큼 적 전체에게 데미지」 트리거`
                },
                [SkillType.PASSIVE_1]: {
                    name: `너희가 날 모셔야 해!`,
                    description: `궁극기 발동 시 「자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴), 타깃의 최대 HP 0.01%만큼 아군 전체에게 확정 데미지」 추가\n아군 딜러, 탱커, 디스럽터는 「일반 공격, 궁극기 발동 시 『타깃의 최대 HP 0.01%만큼 자신에게 확정 데미지』 추가」 획득`
                },
                [SkillType.PASSIVE_2]: {
                    name: `모두 내 말을 들어야 해`,
                    description: `첫 번째 턴 시작 시 「아군 딜러, 탱커, 디스럽터는 1중첩의 《끝없는 욕망》 획득(최대 5중첩)」 트리거(1회 트리거 후 제거) \n매 1턴 종료 시 「아군 딜러, 탱커, 디스럽터의 《끝없는 욕망》 중첩수가 1로 변경(최대 5중첩)」 트리거 \n아군 딜러, 탱커, 디스럽터는 「자신의 《끝없는 욕망》 중첩수≦4일 경우 『피격 시 「자신의 공격 데미지의 2.2%만큼 적 전체에게 데미지, 자신은 1중첩의 《끝없는 욕망》 획득(최대 5중첩)」 트리거』 활성화」 획득\n아군 딜러, 탱커, 디스럽터는 「자신의 《끝없는 욕망》 중첩수=5일 경우 『피격 시 「자신의 공격 데미지의 4.4%만큼 적 전체에게 데미지」 트리거』 활성화」 획득`
                },
                [SkillType.PASSIVE_3]: {
                    name: `이건 내가 마땅히 누려야 할 권리야!`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 4턴 감소」 트리거(1회 트리거 후 제거)\n공격 데미지 43.5% 증가\n방어 시 「자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)」 트리거\n아군 전체는 「피격 시 『자신이 가하는 트리거 효과 10.88% 증가(최대 8중첩)』 트리거」 획득`
                },
                [SkillType.GENERAL_1]: {
                    name: `공격+`,
                    description: `자신의 공격 데미지 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `수면 면역`,
                    description: `자신에게 수면 면역 부여`
                }
            }
        }
    }
];
