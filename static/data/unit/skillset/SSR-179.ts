import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10208: SkillSet[] =  [
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
                    name: `我～要～當～偶～像～`,
                    description: `使自身攻擊力增加180/210/240/270/300%(1回合)、造成傷害增加27/31.5/36/40.5/45%(1回合)、造成傷害增加27/31.5/36/40.5/45%(3回合)(不可疊加)，再使目標受到傷害增加0/10.5/12/13.5/15%(1回合)、受到傷害增加0/10.5/12/13.5/15%(3回合)(不可疊加)，並以自身攻擊力53/59.6/66.2/72.8/79.4%對目標造成傷害5次。CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `我～要～當～偶～像～`,
                    description: `使自身攻擊力增加180%(1回合)、造成傷害增加27%(1回合)、造成傷害增加27%(3回合)(不可疊加)，並以自身攻擊力53%對目標造成傷害5次。CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `我～要～當～偶～像～`,
                    description: `使自身攻擊力增加210%(1回合)、造成傷害增加31.5%(1回合)、造成傷害增加31.5%(3回合)(不可疊加)，再使目標受到傷害增加10.5%(1回合)、受到傷害增加10.5%(3回合)(不可疊加)，並以自身攻擊力59.6%對目標造成傷害5次。CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `我～要～當～偶～像～`,
                    description: `使自身攻擊力增加240%(1回合)、造成傷害增加36%(1回合)、造成傷害增加36%(3回合)(不可疊加)，再使目標受到傷害增加12%(1回合)、受到傷害增加12%(3回合)(不可疊加)，並以自身攻擊力66.2%對目標造成傷害5次。CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `我～要～當～偶～像～`,
                    description: `使自身攻擊力增加270%(1回合)、造成傷害增加40.5%(1回合)、造成傷害增加40.5%(3回合)(不可疊加)，再使目標受到傷害增加13.5%(1回合)、受到傷害增加13.5%(3回合)(不可疊加)，並以自身攻擊力72.8%對目標造成傷害5次。CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `我～要～當～偶～像～`,
                    description: `使自身攻擊力增加300%(1回合)、造成傷害增加45%(1回合)、造成傷害增加45%(3回合)(不可疊加)，再使目標受到傷害增加15%(1回合)、受到傷害增加15%(3回合)(不可疊加)，並以自身攻擊力79.4%對目標造成傷害5次。CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `陰暗少女化妝中`,
                    description: `使自身攻擊力增加100%(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `連動演唱會`,
                    description: `我方全體最大HP增加55%\n我方全體攻擊者、守護者、妨礙者獲得「我方隊伍恰好為3種角色定位時，開啟『《三位偶像的舞台》』」\n自身獲得「我方隊伍恰好為3種角色定位時，開啟『造成傷害增加16.5%』」\n我方全體獲得「我方隊伍輔助者有1人以上時，開啟『造成傷害減少500%』」(負面效果)\n\n《三位偶像的舞台》\n攻擊力增加55%\n造成傷害增加16.5%\n必殺技傷害增加27.5%\n觸發技效果增加27.5%\n必殺時，追加「以自身攻擊力55%對目標造成傷害」\n攻擊時，觸發「《閃耀光芒》」\n\n《閃耀光芒》\n使目標受到傷害增加0.44%(最多50層)、受到光屬性傷害增加0.66%(最多50層)\n以自身攻擊力15%使我方全體攻擊力增加(1回合)\n以自身攻擊力16.5%對目標造成傷害\n以自身攻擊力5%對我方全體進行治療`
                },
                [SkillType.PASSIVE_1]: {
                    name: `新銳偶像`,
                    description: `攻擊時，觸發「使自身必殺技傷害增加18.75%(3回合)、觸發技效果增加18.75%(3回合)」\n普攻時，觸發「以自身攻擊力100%對目標造成傷害」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `偶像直播中`,
                    description: `必殺時，觸發「使目標受到光屬性傷害增加15%(最多3層)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `這就是人家的偶像之道`,
                    description: `普攻、必殺時，追加「使自身獲得《光之祝福》效果」\n自身獲得「受到《光之祝福》效果時，觸發『使自身獲得「《偶像之光》」』」\n\n《偶像之光》\n普攻時，觸發「以自身攻擊力4.5%對目標造成傷害」(3回合)\n必殺時，追加「以自身攻擊力15%對目標造成傷害」(3回合)(觸發1次後清除)`
                },
                [SkillType.GENERAL_1]: {
                    name: `造成傷害+`,
                    description: `使自身造成傷害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `我～要～当～偶～像～`,
                    description: `使自身攻击力增加180/210/240/270/300%(1回合)、造成伤害增加27/31.5/36/40.5/45%(1回合)、造成伤害增加27/31.5/36/40.5/45%(3回合)(不可叠加)，再使目标受到伤害增加0/10.5/12/13.5/15%(1回合)、受到伤害增加0/10.5/12/13.5/15%(3回合)(不可叠加)，并以自身攻击力53/59.6/66.2/72.8/79.4%对目标造成伤害5次。CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `我～要～当～偶～像～`,
                    description: `使自身攻击力增加180%(1回合)、造成伤害增加27%(1回合)、造成伤害增加27%(3回合)(不可叠加)，并以自身攻击力53%对目标造成伤害5次。CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `我～要～当～偶～像～`,
                    description: `使自身攻击力增加210%(1回合)、造成伤害增加31.5%(1回合)、造成伤害增加31.5%(3回合)(不可叠加)，再使目标受到伤害增加10.5%(1回合)、受到伤害增加10.5%(3回合)(不可叠加)，并以自身攻击力59.6%对目标造成伤害5次。CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `我～要～当～偶～像～`,
                    description: `使自身攻击力增加240%(1回合)、造成伤害增加36%(1回合)、造成伤害增加36%(3回合)(不可叠加)，再使目标受到伤害增加12%(1回合)、受到伤害增加12%(3回合)(不可叠加)，并以自身攻击力66.2%对目标造成伤害5次。CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `我～要～当～偶～像～`,
                    description: `使自身攻击力增加270%(1回合)、造成伤害增加40.5%(1回合)、造成伤害增加40.5%(3回合)(不可叠加)，再使目标受到伤害增加13.5%(1回合)、受到伤害增加13.5%(3回合)(不可叠加)，并以自身攻击力72.8%对目标造成伤害5次。CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `我～要～当～偶～像～`,
                    description: `使自身攻击力增加300%(1回合)、造成伤害增加45%(1回合)、造成伤害增加45%(3回合)(不可叠加)，再使目标受到伤害增加15%(1回合)、受到伤害增加15%(3回合)(不可叠加)，并以自身攻击力79.4%对目标造成伤害5次。CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `阴暗少女化妆中`,
                    description: `使自身攻击力增加100%(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `连动演唱会`,
                    description: `我方全体最大HP增加55%\n我方全体攻击者、守护者、妨碍者获得「我方队伍恰好为3种角色定位时，开启『《三位偶像的舞台》』」\n自身获得「我方队伍恰好为3种角色定位时，开启『造成伤害增加16.5%』」\n我方全体获得「我方队伍辅助者有1人以上时，开启『造成伤害减少500%』」(负面效果)\n\n《三位偶像的舞台》\n攻击力增加55%\n造成伤害增加16.5%\n必杀技伤害增加27.5%\n触发技效果增加27.5%\n必杀时，追加「以自身攻击力55%对目标造成伤害」\n攻击时，触发「《闪耀光芒》」\n\n《闪耀光芒》\n使目标受到伤害增加0.44%(最多50层)、受到光属性伤害增加0.66%(最多50层)\n以自身攻击力15%使我方全体攻击力增加(1回合)\n以自身攻击力16.5%对目标造成伤害\n以自身攻击力5%对我方全体进行治疗`
                },
                [SkillType.PASSIVE_1]: {
                    name: `新锐偶像`,
                    description: `攻击时，触发「使自身必杀技伤害增加18.75%(3回合)、触发技效果增加18.75%(3回合)」\n普攻时，触发「以自身攻击力100%对目标造成伤害」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `偶像直播中`,
                    description: `必杀时，触发「使目标受到光属性伤害增加15%(最多3层)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `这就是人家的偶像之道`,
                    description: `普攻、必杀时，追加「使自身获得《光之祝福》效果」\n自身获得「受到《光之祝福》效果时，触发『使自身获得「《偶像之光》」』」\n\n《偶像之光》\n普攻时，触发「以自身攻击力4.5%对目标造成伤害」(3回合)\n必杀时，追加「以自身攻击力15%对目标造成伤害」(3回合)(触发1次后清除)`
                },
                [SkillType.GENERAL_1]: {
                    name: `造成伤害+`,
                    description: `使自身造成伤害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `I'm~ An~ Idol~!`,
                    description: `Increase your Attack Power by 180/210/240/270/300% for 1 turn, Damage Output by 27/31.5/36/40.5/45% for 1 turn, and Damage Output by 27/31.5/36/40.5/45% for 3 turns (Non-stackable), increase the target's Damage Taken by 0/10.5/12/13.5/15% for 1 turn and Damage Taken by 0/10.5/12/13.5/15% for 3 turns (Non-stackable), then damage the target 5 times (53/59.6/66.2/72.8/79.4% Attack Power). CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `I'm~ An~ Idol~!`,
                    description: `Increase your Attack Power by 180% for 1 turn, Damage Output by 27% for 1 turn, and Damage Output by 27% for 3 turns (Non-stackable), then damage the target 5 times (53% Attack Power). CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `I'm~ An~ Idol~!`,
                    description: `Increase your Attack Power by 210% for 1 turn, Damage Output by 31.5% for 1 turn, and Damage Output by 31.5% for 3 turns (Non-stackable), increase the target's Damage Taken by 10.5% for 1 turn and Damage Taken by 10.5% for 3 turns (Non-stackable), then damage the target 5 times (59.6% Attack Power). CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `I'm~ An~ Idol~!`,
                    description: `Increase your Attack Power by 240% for 1 turn, Damage Output by 36% for 1 turn, and Damage Output by 36% for 3 turns (Non-stackable), increase the target's Damage Taken by 12% for 1 turn and Damage Taken by 12% for 3 turns (Non-stackable), then damage the target 5 times (66.2% Attack Power). CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `I'm~ An~ Idol~!`,
                    description: `Increase your Attack Power by 270% for 1 turn, Damage Output by 40.5% for 1 turn, and Damage Output by 40.5% for 3 turns (Non-stackable), increase the target's Damage Taken by 13.5% for 1 turn and Damage Taken by 13.5% for 3 turns (Non-stackable), then damage the target 5 times (72.8% Attack Power). CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `I'm~ An~ Idol~!`,
                    description: `Increase your Attack Power by 300% for 1 turn, Damage Output by 45% for 1 turn, and Damage Output by 45% for 3 turns (Non-stackable), increase the target's Damage Taken by 15% for 1 turn and Damage Taken by 15% for 3 turns (Non-stackable), then damage the target 5 times (79.4% Attack Power). CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `Gloom Girl's Glowup`,
                    description: `Increase your Attack Power by 100% for 1 turn.`
                },
                [SkillType.LEADER]: {
                    name: `Collab Stage Concert`,
                    description: `Increase the party's max HP by 55%.\nAllied Attackers, Defenders, and Obstructors gain the following effect: When there are only characters of 3 positions in the party, activate "3 Idols' Stage.\n Gain yourself the following effect: When there are only characters of 3 positions in the party, activate "increase Damage Output by 16.5%.\nThe party gains the following effect: When there is 1 or more Supporter in the party, activate "Decrease Damage Output by 500%" (debuff).\n\n"3 Idols' Stage"\nIncrease Attack Power by 55%.\nIncrease Damage Output by 16.5%.\nIncrease Ultimate Skill Power by 27.5%.\nIncrease trigger ability effects by 27.5%.\nOn Ultimate Skill, deal additional damage to the target (55% Attack Power).\nOn Attack, trigger "Radiant Shine".\n\n"Radiant Shine"\nIncrease the target's Damage Taken by 0.44% (max 50 stacks) and Damage Taken from Light attacks by 0.66% (max 50 stacks).\nIncrease the party's Attack Power for 15% of your Attack Power for 1 turn.\nDamage the target (16.5% Attack Power).\nHeal the party for 5% of your Attack Power.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Rising Idol`,
                    description: `On Attack, trigger the following effect: Increase your Ultimate Skill Power by 18.75% for 3 turns and trigger ability effects by 18.75% for 3 turns.\nOn Basic Attack, trigger the following effect: Damage the target (100% Attack Power).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Idol Live Stream`,
                    description: `On Ultimate Skill, trigger the following effect: Increase the target's Damage Taken from Light attacks by 15% (max 3 stacks).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `My Idol Way`,
                    description: `On Basic Attack and Ultimate Skill, gain yourself an additional "Light's Blessing" effect.\nGain yourself the following effect: When receiving "Light's Blessing" effect, trigger the following effect: Gain yourself "Idol Light".\n\n"Idol Light"\nOn Basic Attack, trigger the following effect: Damage the target for 3 turns (4.5% Attack Power).\nOn Ultimate Skill, deal additional damage to the target for 3 turns (15% Attack Power) (removes after triggering once).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage Output+`,
                    description: `Increase your Damage Output by 7.5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain yourself immunity to Sleep.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `アイドルにな～る～ぞ～`,
                    description: `自分の攻撃力を180/210/240/270/300%増加させ(1ターン)、与えるダメージを27/31.5/36/40.5/45%増加させ(1ターン)、与えるダメージを27/31.5/36/40.5/45%増加させ(3ターン)(スタック不可)、ターゲットの受けるダメージを0/10.5/12/13.5/15%増加させ(1ターン)、受けるダメージを0/10.5/12/13.5/15%増加させ(3ターン)(スタック不可)、自分の53/59.6/66.2/72.8/79.4%の攻撃力でターゲットにダメージを5回与える[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `アイドルにな～る～ぞ～`,
                    description: `自分の攻撃力を180%増加させ(1ターン)、与えるダメージを27%増加させ(1ターン)、与えるダメージを27%増加させ(3ターン)(スタック不可)、自分の53%の攻撃力でターゲットにダメージを5回与える[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `アイドルにな～る～ぞ～`,
                    description: `自分の攻撃力を210%増加させ(1ターン)、与えるダメージを31.5%増加させ(1ターン)、与えるダメージを31.5%増加させ(3ターン)(スタック不可)、ターゲットの受けるダメージを10.5%増加させ(1ターン)、受けるダメージを10.5%増加させ(3ターン)(スタック不可)、自分の59.6%の攻撃力でターゲットにダメージを5回与える[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `アイドルにな～る～ぞ～`,
                    description: `自分の攻撃力を240%増加させ(1ターン)、与えるダメージを36%増加させ(1ターン)、与えるダメージを36%増加させ(3ターン)(スタック不可)、ターゲットの受けるダメージを12%増加させ(1ターン)、受けるダメージを12%増加させ(3ターン)(スタック不可)、自分の66.2%の攻撃力でターゲットにダメージを5回与える[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `アイドルにな～る～ぞ～`,
                    description: `自分の攻撃力を270%増加させ(1ターン)、与えるダメージを40.5%増加させ(1ターン)、与えるダメージを40.5%増加させ(3ターン)(スタック不可)、ターゲットの受けるダメージを13.5%増加させ(1ターン)、受けるダメージを13.5%増加させ(3ターン)(スタック不可)、自分の72.8%の攻撃力でターゲットにダメージを5回与える[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `アイドルにな～る～ぞ～`,
                    description: `自分の攻撃力を300%増加させ(1ターン)、与えるダメージを45%増加させ(1ターン)、与えるダメージを45%増加させ(3ターン)(スタック不可)、ターゲットの受けるダメージを15%増加させ(1ターン)、受けるダメージを15%増加させ(3ターン)(スタック不可)、自分の79.4%の攻撃力でターゲットにダメージを5回与える[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `暗黒少女メイク中`,
                    description: `自分の攻撃力を100%増加させる(1ターン)`
                },
                [SkillType.LEADER]: {
                    name: `コラボコンサート`,
                    description: `味方全体のHPが55%増加する\n味方全体のアタッカー、ガーディアン、デバッファーが「味方のチーム内にちょうど3種類のポジションのキャラがいる時《アイドル3人のステージ》を発動する」を獲得する\n自分が「味方のチーム内にちょうど3種類のポジションのキャラがいる時『与えるダメージが16.5%増加する』を発動する」を獲得する\n味方全体が「チーム内に1人以上のサポーターがいる時『与えるダメージが500%減少する』を発動する」を獲得する（デバフ効果）\n\n《アイドル3人のステージ》\n攻撃力が55%増加する\n与えるダメージが16.5%増加する\n必殺技ダメージが27.5%増加する\n誘発スキル効果が27.5%増加する\n必殺技攻撃時「自分の55%の攻撃力でターゲットにダメージを与える」を追加する\n攻撃時「《シャイニングライト》」を誘発する\n\n《シャイニングライト》\nターゲットが受けるダメージを0.44%増加させ(最高50スタック)、受ける光属性ダメージを0.66%増加させる(最高50スタック)\n自分の攻撃力の15%分味方の全体の攻撃力を増加させる(1ターン)\n自分の16.5%の攻撃力でターゲットにダメージを与える\n自分の5%の攻撃力で味方全体に治療を行う`
                },
                [SkillType.PASSIVE_1]: {
                    name: `新鋭アイドル`,
                    description: `攻撃時「自分の必殺技ダメージを18.75%増加させ(3ターン)、誘発スキル効果を18.75%増加させる(3ターン)」を誘発する\n通常攻撃時「自分の100%の攻撃力でターゲットにダメージを与える」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `アイドル配信中`,
                    description: `必殺技攻撃時「ターゲットが受ける光属性ダメージを15%増加させる(最高3スタック)」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `これがアタシのアイドル道`,
                    description: `通常攻撃、必殺技攻撃時「自分が《光の祝福》を獲得する」を追加する\n自分が「《光の祝福》の効果を受けた時『自分が「《アイドルの光》」を獲得する』を誘発する」を獲得する\n\n《アイドルの光》\n通常攻撃時「自分の4.5%の攻撃力でターゲットにダメージを与える」を誘発する(3ターン)\n必殺技攻撃時「自分の15%の攻撃力でターゲットにダメージを与える」を追加する(3ターン)(誘発1回後に解除)`
                },
                [SkillType.GENERAL_1]: {
                    name: `与えるダメージ+`,
                    description: `自分の与えるダメージを7.5%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `睡眠無効`,
                    description: `自分を睡眠無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `나~는~아~이~돌~이~될~거~야~!`,
                    description: `자신의 공격 데미지 180/210/240/270/300% 증가(1턴), 가하는 데미지 27/31.5/36/40.5/45% 증가(1턴), 가하는 데미지 27/31.5/36/40.5/45% 증가(3턴)(중첩불가), 다시 타깃이 받는 데미지 0/10.5/12/13.5/15% 증가(1턴), 받는 데미지 0/10.5/12/13.5/15% 증가(3턴)(중첩불가), 자신의 공격 데미지의 53/59.6/66.2/72.8/79.4%만큼 타깃에게 5회 데미지 [CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `나~는~아~이~돌~이~될~거~야~!`,
                    description: `자신의 공격 데미지 180% 증가(1턴), 가하는 데미지 27% 증가(1턴), 가하는 데미지 27% 증가(3턴)(중첩불가),  자신의 공격 데미지의 53%만큼 타깃에게 5회 데미지 [CD: 3]`
                },
                [SkillType.SKILL_2]: {
                    name: `나~는~아~이~돌~이~될~거~야~!`,
                    description: `자신의 공격 데미지 210% 증가(1턴), 가하는 데미지 31.5% 증가(1턴), 가하는 데미지 31.5% 증가(3턴)(중첩불가), 다시 타깃이 받는 데미지 10.5% 증가(1턴), 받는 데미지 10.5% 증가(3턴)(중첩불가), 자신의 공격 데미지의 59.6%만큼 타깃에게 5회 데미지 [CD: 3]`
                },
                [SkillType.SKILL_3]: {
                    name: `나~는~아~이~돌~이~될~거~야~!`,
                    description: `자신의 공격 데미지 240% 증가(1턴), 가하는 데미지 36% 증가(1턴), 가하는 데미지 36% 증가(3턴)(중첩불가), 다시 타깃이 받는 데미지 12% 증가(1턴), 받는 데미지 12% 증가(3턴)(중첩불가), 자신의 공격 데미지의 66.2%만큼 타깃에게 5회 데미지 [CD: 3]`
                },
                [SkillType.SKILL_4]: {
                    name: `나~는~아~이~돌~이~될~거~야~!`,
                    description: `자신의 공격 데미지 270% 증가(1턴), 가하는 데미지 40.5% 증가(1턴), 가하는 데미지 40.5% 증가(3턴)(중첩불가), 다시 타깃이 받는 데미지 13.5% 증가(1턴), 받는 데미지 13.5% 증가(3턴)(중첩불가), 자신의 공격 데미지의 72.8%만큼 타깃에게 5회 데미지 [CD: 3]`
                },
                [SkillType.SKILL_5]: {
                    name: `나~는~아~이~돌~이~될~거~야~!`,
                    description: `자신의 공격 데미지 300% 증가(1턴), 가하는 데미지 45% 증가(1턴), 가하는 데미지 45% 증가(3턴)(중첩불가), 다시 타깃이 받는 데미지 15% 증가(1턴), 받는 데미지 15% 증가(3턴)(중첩불가), 자신의 공격 데미지의 79.4%만큼 타깃에게 5회 데미지 [CD: 3]`
                },
                [SkillType.ATTACK]: {
                    name: `음침한 소녀 메이크업 중`,
                    description: `자신의 공격 데미지 100% 증가(1턴)`
                },
                [SkillType.LEADER]: {
                    name: `콜라보 콘서트`,
                    description: `아군 전체의 최대 HP 55% 증가\n 아군 딜러, 탱커, 디스럽터는 「아군 팀이 3종류 위치 캐릭터로 편성될 경우  『《아이돌 3명의 무대》』 활성화」 획득\n 자신은 「아군 팀이 3종류 위치 캐릭터로 편성될 경우 『가하는 데미지 16.5% 증가』 활성화」 획득\n아군 전체는 「팀에 서포터 1명 이상을 편성할 시 『가하는 데미지 500% 감소』 활성화(디버프)」 획득\n\n《아이돌 3명의 무대》\n공격 데미지 55% 증가\n가하는 데미지 16.5% 증가\n궁극기 데미지 27.5% 증가\n트리거 스킬 효과 27.5% 증가\n궁극기 발동 시 「자신의 공격 데미지의 55%만큼 타깃에게 데미지」 추가\n공격 시 「《찬란한 빛》」 트리거\n\n《찬란한 빛》\n타깃이 받는 데미지 0.44% 증가(최대 50중첩), 받는 광속성 데미지 0.66% 증가(최대 50중첩)\n자신의 공격 데미지의 15%만큼 아군 전체의 공격 데미지 증가(1턴)\n자신의 공격 데미지의 16.5%만큼 타깃에게 데미지\n자신의 공격 데미지의 5%만큼 아군 전체를 치유`
                },
                [SkillType.PASSIVE_1]: {
                    name: `신예 아이돌`,
                    description: `공격 시 「자신의 궁극기 데미지 18.75% 증가(3턴), 트리거 스킬 효과 18.75% 증가(3턴)」 트리거\n일반 공격 시 「자신의 공격 데미지의 100%만큼 타깃에게 데미지」 트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `아이돌 라이브 중`,
                    description: `궁극기 발동 시 「타깃이 받는 광속성 데미지 15% 증가(최대 3중첩)」 트리거`
                },
                [SkillType.PASSIVE_3]: {
                    name: `내가 걸어갈 아이돌의 길`,
                    description: `일반 공격, 궁극기 발동 시 「자신은 《빛의 축복》 효과 획득」 추가\n자신은 「《빛의 축복》 효과를 받을 시 『자신은 「《아이돌의 빛》」 획득』 트리거」 획득\n\n《아이돌의 빛》\n일반 공격 시 「자신의 공격 데미지의 4.5%만큼 타깃에게 데미지」 트리거(3턴)\n궁극기 발동 시 「자신의 공격 데미지의 15%만큼 타깃에게 데미지」 추가(3턴)(1회 트리거 후 제거)`
                },
                [SkillType.GENERAL_1]: {
                    name: `가하는 데미지+`,
                    description: `자신이 가하는 데미지 7.5% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `수면 면역`,
                    description: `자신에게 수면 면역 효과`
                }
            }
        }
    }
];
