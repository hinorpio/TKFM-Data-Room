import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10173: SkillSet[] =  [
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
                    name: `先下手為強就對了！`,
                    description: `使目標解除防禦狀態，再使自身造成傷害增加36/42/48/54/60%(1回合)、必殺技傷害增加18/21/24/27/30%(1回合)、造成觸發技效果增加50/55/60/65/70%(1回合)、行動後，觸發「自身獲得0/0/3/3/3層《快速裝填》(最多6層)」(2回合)，並以自身攻擊力53/49.7/47.3/45.5/44.1%對目標造成傷害5/6/7/8/9次。CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `先下手為強就對了！`,
                    description: `使目標解除防禦狀態，再使自身造成傷害增加36%(1回合)、必殺技傷害增加18%(1回合)、造成觸發技效果增加50%(1回合)，並以自身攻擊力53%對目標造成傷害5次。CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `先下手為強就對了！`,
                    description: `使目標解除防禦狀態，再使自身造成傷害增加42%(1回合)、必殺技傷害增加21%(1回合)、造成觸發技效果增加55%(1回合)，並以自身攻擊力49.7%對目標造成傷害6次。CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `先下手為強就對了！`,
                    description: `使目標解除防禦狀態，再使自身造成傷害增加48%(1回合)、必殺技傷害增加24%(1回合)、造成觸發技效果增加60%(1回合)、行動後，觸發「自身獲得3層《快速裝填》(最多6層)」(2回合)，並以自身攻擊力47.3%對目標造成傷害7次。CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `先下手為強就對了！`,
                    description: `使目標解除防禦狀態，再使自身造成傷害增加54%(1回合)、必殺技傷害增加27%(1回合)、造成觸發技效果增加65%(1回合)、行動後，觸發「自身獲得3層《快速裝填》(最多6層)」(2回合)，並以自身攻擊力45.5%對目標造成傷害8次。CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `先下手為強就對了！`,
                    description: `使目標解除防禦狀態，再使自身造成傷害增加60%(1回合)、必殺技傷害增加30%(1回合)、造成觸發技效果增加70%(1回合)、行動後，觸發「自身獲得3層《快速裝填》(最多6層)」(2回合)，並以自身攻擊力44.1%對目標造成傷害9次。CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `水槍點射`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `獵犬小隊夏日集訓`,
                    description: `我方全體最大HP增加40%\n我方全體攻擊力增加100%\n我方全體造成傷害增加40%\n我方全體必殺技傷害增加30%\n我方全體觸發技傷害增加60%\n每Wave第1回合，觸發「使敵方全體受到傷害增加30%(最多1層)」\n\n自身以外我方全體獲得《攻擊援護》\n自身以外我方全體攻擊者獲得《閃一邊去！》(負面效果)\n\n《攻擊援護》\n攻擊時，觸發「以自身攻擊力60%對目標造成傷害」\n必殺時，追加「以自身攻擊力120%對目標造成傷害」\n\n《閃一邊去！》\n自身造成傷害減少500%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `生存遊戲老將`,
                    description: `防禦時，觸發「使自身獲得3層《快速裝填》(最多6層)」\n被攻擊時，觸發「使自身獲得3層《快速裝填》(最多6層)」\n每經過3回合，觸發「《更換彈匣》」\n必殺時，根據自身「《快速裝填》」的層數，觸發「《全力射擊》」\n我方隊伍攻擊者有2人以上時，發動「《更換彈匣》」(負面效果)\n\n《更換彈匣》\n自身獲得「行動後，觸發『清除自身《快速裝填》所有層數』(1回合)」\n\n《全力射擊》\n以自身攻擊力50%對目標造成傷害`
                },
                [SkillType.PASSIVE_2]: {
                    name: `就是現在！上吧`,
                    description: `成功解除防禦時，觸發「使目標受到水屬性傷害增加20%(4回合)(不可疊加)」\n自身《快速裝填》層數≧1層時，開啟「攻擊力增加50%」\n自身《快速裝填》層數≧2層時，開啟「觸發技效果增加20%」\n自身《快速裝填》層數≧3層時，開啟「觸發技效果增加20%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `獵犬的精神象徵`,
                    description: `防禦時，觸發「使我方全體攻擊力增加50%(2回合)(不可疊加)」\n自身《快速裝填》層數≧4層時，開啟「觸發技效果增加20%」\n自身《快速裝填》層數≧5層時，開啟「觸發技效果增加20%」\n自身《快速裝填》層數=6層時，開啟「必殺技傷害增加30%」`
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
                    name: `先下手为强就对了！`,
                    description: `使目标解除防御状态，再使自身造成伤害增加36/42/48/54/60%(1回合)丶必杀技伤害增加18/21/24/27/30%(1回合)丶造成触发技效果增加50/55/60/65/70%(1回合)丶行动後，触发「自身获得0/0/3/3/3层《快速装填》(最多6层)」(2回合)，并以自身攻击力53/49.7/47.3/45.5/44.1%对目标造成伤害5/6/7/8/9次。CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `先下手为强就对了！`,
                    description: `使目标解除防御状态，再使自身造成伤害增加36%(1回合)丶必杀技伤害增加18%(1回合)丶造成触发技效果增加50%(1回合)，并以自身攻击力53%对目标造成伤害5次。CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `先下手为强就对了！`,
                    description: `使目标解除防御状态，再使自身造成伤害增加42%(1回合)丶必杀技伤害增加21%(1回合)丶造成触发技效果增加55%(1回合)，并以自身攻击力49.7%对目标造成伤害6次。CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `先下手为强就对了！`,
                    description: `使目标解除防御状态，再使自身造成伤害增加48%(1回合)丶必杀技伤害增加24%(1回合)丶造成触发技效果增加60%(1回合)丶行动後，触发「自身获得3层《快速装填》(最多6层)」(2回合)，并以自身攻击力47.3%对目标造成伤害7次。CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `先下手为强就对了！`,
                    description: `使目标解除防御状态，再使自身造成伤害增加54%(1回合)丶必杀技伤害增加27%(1回合)丶造成触发技效果增加65%(1回合)丶行动後，触发「自身获得3层《快速装填》(最多6层)」(2回合)，并以自身攻击力45.5%对目标造成伤害8次。CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `先下手为强就对了！`,
                    description: `使目标解除防御状态，再使自身造成伤害增加60%(1回合)丶必杀技伤害增加30%(1回合)丶造成触发技效果增加70%(1回合)丶行动後，触发「自身获得3层《快速装填》(最多6层)」(2回合)，并以自身攻击力44.1%对目标造成伤害9次。CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `水枪点射`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `猎犬小队夏日集训`,
                    description: `我方全体最大HP增加40%\n我方全体攻击力增加100%\n我方全体造成伤害增加40%\n我方全体必杀技伤害增加30%\n我方全体触发技伤害增加60%\n每Wave第1回合，触发「使敌方全体受到伤害增加30%(最多1层)」\n\n自身以外我方全体获得《攻击援护》\n自身以外我方全体攻击者获得《闪一边去！》(负面效果)\n\n《攻击援护》\n攻击时，触发「以自身攻击力60%对目标造成伤害」\n必杀时，追加「以自身攻击力120%对目标造成伤害」\n\n《闪一边去！》\n自身造成伤害减少500%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `生存游戏老将`,
                    description: `防御时，触发「使自身获得3层《快速装填》(最多6层)」\n被攻击时，触发「使自身获得3层《快速装填》(最多6层)」\n每经过3回合，触发「《更换弹匣》」\n必杀时，根据自身「《快速装填》」的层数，触发「《全力射击》」\n我方队伍攻击者有2人以上时，发动「《更换弹匣》」(负面效果)\n\n《更换弹匣》\n自身获得「行动後，触发『清除自身《快速装填》所有层数』(1回合)」\n\n《全力射击》\n以自身攻击力50%对目标造成伤害`
                },
                [SkillType.PASSIVE_2]: {
                    name: `就是现在！上吧`,
                    description: `成功解除防御时，触发「使目标受到水属性伤害增加20%(4回合)(不可叠加)」\n自身《快速装填》层数≥1层时，开启「攻击力增加50%」\n自身《快速装填》层数≥2层时，开启「触发技效果增加20%」\n自身《快速装填》层数≥3层时，开启「触发技效果增加20%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `猎犬的精神象徵`,
                    description: `防御时，触发「使我方全体攻击力增加50%(2回合)(不可叠加)」\n自身《快速装填》层数≥4层时，开启「触发技效果增加20%」\n自身《快速装填》层数≥5层时，开启「触发技效果增加20%」\n自身《快速装填》层数=6层时，开启「必杀技伤害增加30%」`
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
                    name: `Strike First!`,
                    description: `Remove the target from Guard Stance, increase your Damage Output by 36/42/48/54/60% for 1 turn, increase your Ultimate Skill Power by 18/21/24/27/30% for 1 turn, and increase trigger ability effects by 50/55/60/65/70% for 1 turn. After performing an action, trigger the following effect: Gain yourself 0/0/3/3/3 stacks of "Rapid Reload" for 2 turns (max 6 stacks), then damage the target 5/6/7/8/9 times (53/49.7/47.3/45.5/44.1% Attack Power). CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `Strike First!`,
                    description: `Remove the target from Guard Stance, increase your Damage Output by 36% for 1 turn, increase your Ultimate Skill Power by 18% for 1 turn, increase trigger ability effects by 50% for 1 turn, then damage the target 5 times (53% Attack Power). CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `Strike First!`,
                    description: `Remove the target from Guard Stance, increase your Damage Output by 42% for 1 turn, increase your Ultimate Skill Power by 21% for 1 turn, increase trigger ability effects by 55% for 1 turn, then damage the target 6 times (49.7% Attack Power). CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `Strike First!`,
                    description: `Remove the target from Guard Stance, increase your Damage Output by 48% for 1 turn, increase your Ultimate Skill Power by 24% for 1 turn, and increase trigger ability effects by 60% for 1 turn. After performing an action, trigger the following effect: Gain yourself 3 stacks of "Rapid Reload" for 2 turns (max 6 stacks), then damage the target 7 times (47.3% Attack Power). CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `Strike First!`,
                    description: `Remove the target from Guard Stance, increase your Damage Output by 54% for 1 turn, increase your Ultimate Skill Power by 27% for 1 turn, and increase trigger ability effects by 65% for 1 turn. After performing an action, trigger the following effect: Gain yourself 3 stacks of "Rapid Reload" for 2 turns (max 6 stacks), then damage the target 8 times (45.5% Attack Power). CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `Strike First!`,
                    description: `Remove the target from Guard Stance, increase your Damage Output by 60% for 1 turn, increase your Ultimate Skill Power by 30% for 1 turn, and increase trigger ability effects by 70% for 1 turn. After performing an action, trigger the following effect: Gain yourself 3 stacks of "Rapid Reload" for 2 turns (max 6 stacks), then damage the target 9 times (44.1% Attack Power). CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `Water Gun Burst`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Hound Hunters Summer Training`,
                    description: `Increase the party's max HP by 40%.\nIncrease the party's Attack Power by 100%.\nIncrease the party's Damage Output by 40%.\nIncrease the party's Ultimate Skill Power by 30%.\nIncrease the party's trigger ability damage by 60%.\nOn the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken by 30% (max 1 stack).\n\nOther allies gain "Attack Support".\nOther allied Attackers gain "Out of My Way!".\n\n"Attack Support"\nOn Attack, trigger the following effect: Damage the target (60% Attack Power).\nOn Ultimate Skill, deal additional damage to the target (120% Attack Power).\n\n"Out of My Way!"\nDecrease your Damage Output by 500%.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Survival Game Veteran`,
                    description: `When in Guard Stance, trigger the following effect: Gain yourself 3 stacks of "Rapid Reload" (max 6 stacks).\nWhen attacked, trigger the following effect: Gain yourself 3 stacks of "Rapid Reload" (max 6 stacks).\nAfter every 3 turns, trigger "Reload Magazine".\nOn Ultimate Skill, trigger "Full-Power Shot" based on the stacks of "Rapid Reload" (max 6 stacks).\nWhen there are 2 or more Attackers in the party, activate "Reload Magazine"(debuff).\n\n"Reload Magazine"\nGain yourself the following effect: After performing an action, trigger the following effect: remove all your "Rapid Reload" stacks for 1 turn.\n\n"Full-Power Shot"\nDamage the target (50% Attack Power).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Now's the Time!`,
                    description: `When successfully removing Guard Stance, trigger the following effect: Increase the target's Damage Taken from Water attacks by 20% for 4 turns (Non-stackable).\nWhen your "Rapid Reload" stacks are ≥ 1, activate "increase Attack Power by 50%".\nWhen your "Rapid Reload" stacks are ≥ 2, activate "increase trigger ability effects by 20%".\nWhen your "Rapid Reload" stacks are ≥ 3, activate "increase trigger ability effects by 20%".`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Spirit of Hound Hunters`,
                    description: `When in Guard Stance, trigger the following effect: Increase the party's Attack Power by 50% for 2 turns (Non-stackable).\nWhen your "Rapid Reload" stacks are ≥ 4, activate "increase trigger ability effects by 20%".\nWhen your "Rapid Reload" stacks are ≥ 5, activate "increase trigger ability effects by 20%".\nWhen your "Rapid Reload" stacks are = 6, activate "increase Ultimate Skill Power by 30%".`
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
                    name: `先手必勝！`,
                    description: `ターゲットの防御状態を解除し、自分の与えるダメージを36/42/48/54/60%増加させ(1ターン)、必殺技ダメージが18/21/24/27/30%増加し(1ターン)、与える誘発スキル効果が50/55/60/65/70%増加し(1ターン)、行動後、「自分が《クイックリロード》を0/0/3/3/3スタック獲得する(最高6スタック)」を誘発し(2ターン)、自分の53/49.7/47.3/45.5/44.1%の攻撃力でターゲットに5/6/7/8/9回ダメージを与える[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `先手必勝！`,
                    description: `ターゲットの防御状態を解除し、自分の与えるダメージを36%増加させ(1ターン)、必殺技ダメージが18%増加し(1ターン)、与える誘発スキル効果が50%増加し(1ターン)、自分の53%の攻撃力でターゲットに5回ダメージを与える[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `先手必勝！`,
                    description: `ターゲットの防御状態を解除し、自分の与えるダメージを42%増加させ(1ターン)、必殺技ダメージが21%増加し(1ターン)、与える誘発スキル効果が55%増加し(1ターン)、自分の49.7%の攻撃力でターゲットに6回ダメージを与える[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `先手必勝！`,
                    description: `ターゲットの防御状態を解除し、自分の与えるダメージを48%増加させ(1ターン)、必殺技ダメージが24%増加し(1ターン)、与える誘発スキル効果が60%増加し(1ターン)、行動後、「自分が《クイックリロード》を3スタック獲得する(最高6スタック)」を誘発し(2ターン)、自分の47.3%の攻撃力でターゲットに7回ダメージを与える[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `先手必勝！`,
                    description: `ターゲットの防御状態を解除し、自分の与えるダメージを54%増加させ(1ターン)、必殺技ダメージが27%増加し(1ターン)、与える誘発スキル効果が65%増加し(1ターン)、行動後、「自分が《クイックリロード》を3スタック獲得する(最高6スタック)」を誘発し(2ターン)、自分の45.5%の攻撃力でターゲットに8回ダメージを与える[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `先手必勝！`,
                    description: `ターゲットの防御状態を解除し、自分の与えるダメージを60%増加させ(1ターン)、必殺技ダメージが30%増加し(1ターン)、与える誘発スキル効果が70%増加し(1ターン)、行動後、「自分が《クイックリロード》を3スタック獲得する(最高6スタック)」を誘発し(2ターン)、自分の44.1%の攻撃力でターゲットに9回ダメージを与える[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `水鉄砲一点狙い`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `ハウンド小隊の夏季訓練`,
                    description: `味方全体の最大HPが40%増加する\n味方全体の攻撃力が100%増加する\n味方全体の与えるダメージが40%増加する\n味方全体の必殺技ダメージが30%増加する\n味方全体の誘発スキルダメージが60%増加する\n毎Waveの1ターン目に「敵全体の受けるダメージを30%増加させる(最高1スタック)」を誘発する\n\n自分以外の味方全員が《攻撃支援》を獲得する\n自分以外の味方全体のアタッカーが《どけ！》を獲得する(デバフ効果)\n\n《攻撃支援》\n攻撃時「自分の60%の攻撃力でターゲットにダメージを与える」を誘発する\n必殺技攻撃時「自分の120%の攻撃力でターゲットにダメージを与える」を追加する\n\n《どけ！》\n自分の与えるダメージが500%減少する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `サバイバルゲームのベテラン`,
                    description: `防御時「自分が《クイックリロード》を3スタック獲得する(最高6スタック)」を誘発する\n攻撃を受けた時「自分が《クイックリロード》を3スタック獲得する(最高6スタック)」を誘発する\n3ターン毎に「《マガジンチェンジ》」を誘発する\n必殺技攻撃時、自分の「《クイックリロード》」のスタック数に応じて「《全力射撃》」を誘発する\nチーム内にアタッカーが2人以上いる時、《マガジンチェンジ》を発動する(デバフ効果)\n\n《マガジンチェンジ》\n自分が「行動後『自分の《クイックリロード》のスタック数をすべて消す』を誘発する(1ターン)」を獲得する\n\n《全力射撃》\n自分の50%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.PASSIVE_2]: {
                    name: `今よ！いきなさい！`,
                    description: `防御の解除に成功した時「ターゲットが受ける水属性ダメージを20%増加させる(4ターン)(スタック不可)」を誘発する\n自分の《クイックリロード》のスタック数が≧1の時「攻撃力が50%増加する」を発動する\n自分の《クイックリロード》のスタック数が≧2の時「誘発スキル効果が20%増加する」を発動する\n自分の《クイックリロード》のスタック数が≧3の時「誘発スキル効果が20%増加する」を発動する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `ハウンドの精神的象徴`,
                    description: `防御時「味方全体の攻撃力を50%増加させる(2ターン)(スタック不可)」を誘発する\n自分の《クイックリロード》のスタック数が≧4の時「誘発スキル効果が20%増加する」を発動する\n自分の《クイックリロード》のスタック数が≧5の時「誘発スキル効果が20%増加する」を発動する\n自分の《クイックリロード》のスタック数が=6の時「必殺技ダメージが30%増加する」を発動する`
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
                    name: `선수필승이다!`,
                    description: `타깃의 방어 상태를 해제하고 자신의 가하는 데미지 36/42/48/54/60% 증가(1턴), 궁극기 데미지 18/21/24/27/30% 증가(1턴), 가하는 트리거 스킬 효과 50/55/60/65/70% 증가(1턴), 행동 후 「자신은 0/0/3/3/3중첩의《고속 장전》획득(최대 6중첩)」트리거(2턴), 자신의 공격 데미지의 53/49.7/47.3/45.5/44.1%만큼 타깃에게 5/6/7/8/9회 데미지 [CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `선수필승이다!`,
                    description: `타깃의 방어 상태를 해제하고 자신의 가하는 데미지 36% 증가(1턴), 궁극기 데미지 18% 증가(1턴), 가하는 트리거 스킬 효과 50% 증가(1턴), 자신의 공격 데미지의 53%만큼 타깃에게 5회 데미지 [CD: 3]`
                },
                [SkillType.SKILL_2]: {
                    name: `선수필승이다!`,
                    description: `타깃의 방어 상태를 해제하고 자신의 가하는 데미지 42% 증가(1턴), 궁극기 데미지 21% 증가(1턴), 가하는 트리거 스킬 효과 55% 증가(1턴), 자신의 공격 데미지의 49.7%만큼 타깃에게 6회 데미지 [CD: 3]`
                },
                [SkillType.SKILL_3]: {
                    name: `선수필승이다!`,
                    description: `타깃의 방어 상태를 해제하고 자신의 가하는 데미지 48% 증가(1턴), 궁극기 데미지 24% 증가(1턴), 가하는 트리거 스킬 효과 60% 증가(1턴), 행동 후 「자신은 3중첩의《고속 장전》획득(최대 6중첩)」트리거(2턴), 자신의 공격 데미지의 47.3%만큼 타깃에게 7회 데미지 [CD: 3]`
                },
                [SkillType.SKILL_4]: {
                    name: `선수필승이다!`,
                    description: `타깃의 방어 상태를 해제하고 자신의 가하는 데미지 54% 증가(1턴), 궁극기 데미지 27% 증가(1턴), 가하는 트리거 스킬 효과 65% 증가(1턴), 행동 후 「자신은 3중첩의《고속 장전》획득(최대 6중첩)」트리거(2턴), 자신의 공격 데미지의 45.5%만큼 타깃에게 8회 데미지 [CD: 3]`
                },
                [SkillType.SKILL_5]: {
                    name: `선수필승이다!`,
                    description: `타깃의 방어 상태를 해제하고 자신의 가하는 데미지 60% 증가(1턴), 궁극기 데미지 30% 증가(1턴), 가하는 트리거 스킬 효과 70% 증가(1턴), 행동 후 「자신은 3중첩의《고속 장전》획득(최대 6중첩)」트리거(2턴), 자신의 공격 데미지의 44.1%만큼 타깃에게 9회 데미지 [CD: 3]`
                },
                [SkillType.ATTACK]: {
                    name: `물총 점사`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `하운드 소대 여름 합숙 훈련`,
                    description: `아군 전체의 최대 HP 40% 증가\n아군 전체의 공격 데미지 100% 증가\n아군 전체의 가하는 데미지 40% 증가\n아군 전체의 궁극기 데미지 30% 증가\n아군 전체의 트리거 스킬 데미지 60% 증가\n매 Wave의 첫 번째 턴 시작 시, 「적 전체가 받는 데미지 30% 증가(최대 1중첩)」트리거\n\n자신 이외의 아군 전체는《엄호 공격》획득\n자신 이외의 아군 딜러는《물러서!》획득(디버프 효과)\n\n《엄호 공격》\n공격 시 「자신의 공격 데미지의 60%만큼 타깃에게 데미지」트리거\n궁극기 발동 시「자신의 공격 데미지의 120%만큼 타깃에게 데미지」추가\n\n《물러서!》\n자신의 가하는 데미지 500% 감소`
                },
                [SkillType.PASSIVE_1]: {
                    name: `생존 게임 노장`,
                    description: `방어 시 「자신은 3중첩의《고속 장전》획득(최대 6중첩)」트리거\n피격 시 「자신은 3중첩의《고속 장전》획득(최대 6중첩)」트리거\n3턴마다 「《탄창 교환》」트리거\n궁극기 발동 시, 자신의「《고속 장전》」중첩수에 따라 「《전력 사격》」트리거\n팀에 딜러가 2명 이상 있을 시 「《탄창 교환》」발동(디버프 효과)\n\n《탄창 교환》\n자신은 「행동 후 『자신의《고속 장전》모든 중첩수 제거』트리거(1턴)」획득\n\n《전력 사격》\n자신의 공격 데미지의 50%만큼 타깃에게 데미지`
                },
                [SkillType.PASSIVE_2]: {
                    name: `바로 지금이다! 가랏!`,
                    description: `방어 해제 성공 시, 「타깃이 받는 수속성 데미지 20% 증가(4턴)(중첩 불가)」트리거\n자신의《고속 장전》중첩수≧1일 시, 「공격 데미지 50% 증가」활성화\n자신의《고속 장전》중첩수≧2일 시,「트리거 스킬 효과 20% 증가」활성화\n자신의《고속 장전》중첩수≧3일 시,「트리거 스킬 효과 20% 증가」활성화`
                },
                [SkillType.PASSIVE_3]: {
                    name: `하운드의 정신적 상징`,
                    description: `방어 시「아군 전체의 공격 데미지 50% 증가(2턴)(중첩 불가)」트리거\n자신의《고속 장전》중첩수≧4일 시, 「트리거 스킬 효과 20% 증가」활성화\n자신의《고속 장전》중첩수≧5일 시, 「트리거 스킬 효과 20% 증가」활성화\n자신의《고속 장전》중첩수=6일 시, 「궁극기 데미지 30% 증가」활성화`
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