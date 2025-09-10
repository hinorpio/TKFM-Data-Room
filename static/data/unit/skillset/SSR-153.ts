import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10182: SkillSet[] =  [
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
                    name: `辦公室女王的凝視`,
                    description: `使自身攻擊力增加18/21/24/27/30%(最多2層)、使目標受到闇屬性傷害增加6.5/8/9.5/11/12.5%(最多2層)、使我方全體攻擊者、守護者普攻傷害增加18/21/24/27/30%(5回合)(不可疊加)、普攻時，追加「以自身攻擊力0/21/24/27/30%對目標造成傷害」(5回合)(不可疊加)，CD:5`
                },
                [SkillType.SKILL_1]: {
                    name: `辦公室女王的凝視`,
                    description: `使自身攻擊力增加18%(最多2層)、使目標受到闇屬性傷害增加6.5%(最多2層)、使我方全體攻擊者、守護者普攻傷害增加18%(5回合)(不可疊加)，CD:5`
                },
                [SkillType.SKILL_2]: {
                    name: `辦公室女王的凝視`,
                    description: `使自身攻擊力增加21%(最多2層)、使目標受到闇屬性傷害增加8%(最多2層)、使我方全體攻擊者、守護者普攻傷害增加21%(5回合)(不可疊加)、普攻時，追加「以自身攻擊力21%對目標造成傷害」(5回合)(不可疊加)，CD:5`
                },
                [SkillType.SKILL_3]: {
                    name: `辦公室女王的凝視`,
                    description: `使自身攻擊力增加24%(最多2層)、使目標受到闇屬性傷害增加9.5%(最多2層)、使我方全體攻擊者、守護者普攻傷害增加24%(5回合)(不可疊加)、普攻時，追加「以自身攻擊力24%對目標造成傷害」(5回合)(不可疊加)，CD:5`
                },
                [SkillType.SKILL_4]: {
                    name: `辦公室女王的凝視`,
                    description: `使自身攻擊力增加27%(最多2層)、使目標受到闇屬性傷害增加11%(最多2層)、使我方全體攻擊者、守護者普攻傷害增加27%(5回合)(不可疊加)、普攻時，追加「以自身攻擊力27%對目標造成傷害」(5回合)(不可疊加)，CD:5`
                },
                [SkillType.SKILL_5]: {
                    name: `辦公室女王的凝視`,
                    description: `使自身攻擊力增加30%(最多2層)、使目標受到闇屬性傷害增加12.5%(最多2層)、使我方全體攻擊者、守護者普攻傷害增加30%(5回合)(不可疊加)、普攻時，追加「以自身攻擊力30%對目標造成傷害」(5回合)(不可疊加)，CD:5`
                },
                [SkillType.ATTACK]: {
                    name: `佈達指令`,
                    description: `以自身攻擊力30%使我方全體攻擊力增加(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `高冷威嚴家庭主宰`,
                    description: `我方全體最大HP增加45%\n我方全體攻擊力增加85%\n我方全體普攻傷害增加110%\n我方全體獲得「我方隊伍輔助者有2人以上時，發動『攻擊力減少500%』」(負面效果)\n\n自身獲得「第1回合時，觸發『使自身獲得8層《親子之情》(最多24層)』(觸發1次後清除)」\n自身獲得「攻擊時，觸發『使我方全體造成傷害增加6%(最多5層)』」\n\n自身以外我方全體獲得「攻擊時，觸發『《是的媽媽!!》』」\n\n《是的媽媽!!》\n使我方【精英白領 神田莉央】攻擊力增加2%(最多20層)\n使目標受到闇屬性傷害增加1.5%(最多20層)\n使目標受到傷害增加1.5%(最多20層)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `媽媽喝罵`,
                    description: `普攻時，追加「以自身攻擊力75%對目標造成傷害」\n必殺時，觸發「以自身攻擊力30%使我方全體攻擊力增加(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `愛心手作黑暗料理`,
                    description: `自身以外我方全體獲得「普攻時，觸發『使我方【精英白領 神田莉央】獲得1層《親子之情》(最多24層)』」\n\n當自身《親子之情》≧12層時，開啟「攻擊時，觸發『使自身以外我方全體普攻傷害增加20%(1回合)』」\n當自身《親子之情》=24層時，開啟「攻擊時，觸發『使目標受到傷害增加5%(1回合)』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `媽媽的溫暖擁抱`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少5回合」(觸發1次後清除)\n當自身《親子之情》≧8層時，開啟「攻擊時，觸發『使自身以外我方全體普攻傷害增加20%(1回合)』」 \n當自身《親子之情》≧20層時，開啟「攻擊時，觸發『使目標受到傷害增加5%(1回合)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻擊+`,
                    description: `使自身攻擊力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `办公室女王的凝视`,
                    description: `使自身攻击力增加18/21/24/27/30%(最多2层)、使目标受到闇属性伤害增加6.5/8/9.5/11/12.5%(最多2层)、使我方全体攻击者、守护者普攻伤害增加18/21/24/27/30%(5回合)(不可叠加)、普攻时，追加「以自身攻击力0/21/24/27/30%对目标造成伤害」(5回合)(不可叠加)，CD:5`
                },
                [SkillType.SKILL_1]: {
                    name: `办公室女王的凝视`,
                    description: `使自身攻击力增加18%(最多2层)、使目标受到闇属性伤害增加6.5%(最多2层)、使我方全体攻击者、守护者普攻伤害增加18%(5回合)(不可叠加)，CD:5`
                },
                [SkillType.SKILL_2]: {
                    name: `办公室女王的凝视`,
                    description: `使自身攻击力增加21%(最多2层)、使目标受到闇属性伤害增加8%(最多2层)、使我方全体攻击者、守护者普攻伤害增加21%(5回合)(不可叠加)、普攻时，追加「以自身攻击力21%对目标造成伤害」(5回合)(不可叠加)，CD:5`
                },
                [SkillType.SKILL_3]: {
                    name: `办公室女王的凝视`,
                    description: `使自身攻击力增加24%(最多2层)、使目标受到闇属性伤害增加9.5%(最多2层)、使我方全体攻击者、守护者普攻伤害增加24%(5回合)(不可叠加)、普攻时，追加「以自身攻击力24%对目标造成伤害」(5回合)(不可叠加)，CD:5`
                },
                [SkillType.SKILL_4]: {
                    name: `办公室女王的凝视`,
                    description: `使自身攻击力增加27%(最多2层)、使目标受到闇属性伤害增加11%(最多2层)、使我方全体攻击者、守护者普攻伤害增加27%(5回合)(不可叠加)、普攻时，追加「以自身攻击力27%对目标造成伤害」(5回合)(不可叠加)，CD:5`
                },
                [SkillType.SKILL_5]: {
                    name: `办公室女王的凝视`,
                    description: `使自身攻击力增加30%(最多2层)、使目标受到闇属性伤害增加12.5%(最多2层)、使我方全体攻击者、守护者普攻伤害增加30%(5回合)(不可叠加)、普攻时，追加「以自身攻击力30%对目标造成伤害」(5回合)(不可叠加)，CD:5`
                },
                [SkillType.ATTACK]: {
                    name: `佈达指令`,
                    description: `以自身攻击力30%使我方全体攻击力增加(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `高冷威严家庭主宰`,
                    description: `我方全体最大HP增加45%\n我方全体攻击力增加85%\n我方全体普攻伤害增加110%\n我方全体获得「我方队伍辅助者有2人以上时，发动『攻击力减少500%』」(负面效果)\n\n自身获得「第1回合时，触发『使自身获得8层《亲子之情》(最多24层)』(触发1次后清除)」\n自身获得「攻击时，触发『使我方全体造成伤害增加6%(最多5层)』」\n\n自身以外我方全体获得「攻击时，触发『《是的妈妈!!》』」\n\n《是的妈妈!!》\n使我方【精英白领 神田莉央】攻击力增加2%(最多20层)\n使目标受到闇属性伤害增加1.5%(最多20层)\n使目标受到伤害增加1.5%(最多20层)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `妈妈喝骂`,
                    description: `普攻时，追加「以自身攻击力75%对目标造成伤害」\n必杀时，触发「以自身攻击力30%使我方全体攻击力增加(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `爱心手作黑暗料理`,
                    description: `自身以外我方全体获得「普攻时，触发『使我方【精英白领 神田莉央】获得1层《亲子之情》(最多24层)』」\n\n当自身《亲子之情》≧12层时，开启「攻击时，触发『使自身以外我方全体普攻伤害增加20%(1回合)』」\n当自身《亲子之情》=24层时，开启「攻击时，触发『使目标受到伤害增加5%(1回合)』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `妈妈的温暖拥抱`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少5回合」(触发1次后清除)\n当自身《亲子之情》≧8层时，开启「攻击时，触发『使自身以外我方全体普攻伤害增加20%(1回合)』」 \n当自身《亲子之情》≧20层时，开启「攻击时，触发『使目标受到伤害增加5%(1回合)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻击+`,
                    description: `使自身攻击力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Office Queen's Gaze`,
                    description: `Increase your Attack Power by 18/21/24/27/30% (max 2 stacks), increase the target's Damage Taken from Dark attacks by 6.5/8/9.5/11/12.5% (max 2 stacks), increase allied Attackers' and Defenders' Basic Attack Power by 18/21/24/27/30% for 5 turns (Non-stackable). On Basic Attack, deal additional damage to the target for 5 turns (0/21/24/27/30% Attack Power) (Non-stackable). CD: 5`
                },
                [SkillType.SKILL_1]: {
                    name: `Office Queen's Gaze`,
                    description: `Increase your Attack Power by 18% (max 2 stacks), increase the target's Damage Taken from Dark attacks by 6.5% (max 2 stacks), increase allied Attackers' and Defenders' Basic Attack Power by 18% for 5 turns (Non-stackable). CD: 5`
                },
                [SkillType.SKILL_2]: {
                    name: `Office Queen's Gaze`,
                    description: `Increase your Attack Power by 21% (max 2 stacks), increase the target's Damage Taken from Dark attacks by 8% (max 2 stacks), increase allied Attackers' and Defenders' Basic Attack Power by 21% for 5 turns (Non-stackable). On Basic Attack, deal additional damage to the target for 5 turns (21% Attack Power) (Non-stackable). CD: 5`
                },
                [SkillType.SKILL_3]: {
                    name: `Office Queen's Gaze`,
                    description: `Increase your Attack Power by 24% (max 2 stacks), increase the target's Damage Taken from Dark attacks by 9.5% (max 2 stacks), increase allied Attackers' and Defenders' Basic Attack Power by 24% for 5 turns (Non-stackable). On Basic Attack, deal additional damage to the target for 5 turns (24% Attack Power) (Non-stackable). CD: 5`
                },
                [SkillType.SKILL_4]: {
                    name: `Office Queen's Gaze`,
                    description: `Increase your Attack Power by 27% (max 2 stacks), increase the target's Damage Taken from Dark attacks by 11% (max 2 stacks), increase allied Attackers' and Defenders' Basic Attack Power by 27% for 5 turns (Non-stackable). On Basic Attack, deal additional damage to the target for 5 turns (27% Attack Power) (Non-stackable). CD: 5`
                },
                [SkillType.SKILL_5]: {
                    name: `Office Queen's Gaze`,
                    description: `Increase your Attack Power by 30% (max 2 stacks), increase the target's Damage Taken from Dark attacks by 12.5% (max 2 stacks), increase allied Attackers' and Defenders' Basic Attack Power by 30% for 5 turns (Non-stackable). On Basic Attack, deal additional damage to the target for 5 turns (30% Attack Power) (Non-stackable). CD: 5`
                },
                [SkillType.ATTACK]: {
                    name: `Order Call`,
                    description: `Increase the party's Attack Power for 30% of your Attack Power for 1 turn.`
                },
                [SkillType.LEADER]: {
                    name: `Aloof Matriarch`,
                    description: `Increase the party's max HP by 45%.\nIncrease the party's Attack Power by 85%.\nIncrease the party's Basic Attack Power by 110%.\nThe party gains the following effect: When there are 2 or more Supporters in the party, activate "decrease Attack Power by 500%" (debuff).\n\nGain yourself the following effect: On the 1st turn, trigger the following effect: Gain yourself 8 stacks of "Kin Bond" (max 24 stacks) (removes after triggering once).\nGain yourself the following effect: On Attack, trigger the following effect: Increase the party's Damage Output by 6% (max 5 stacks).\n\nOther allies gain the following effect: On Attack, trigger "Yes Mommy!!".\n\nYes Mommy!!\nIncrease allied [White-Collar Elitist Ria]'s Attack Power by 2% (max 20 stacks).\nIncrease the target's Damage Taken from Dark attacks by 1.5% (max 20 stacks).\nIncrease the target's Damage Taken by 1.5% (max 20 stacks).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Mom's Scolding`,
                    description: `On Basic Attack, deal additional damage to the target (75% Attack Power).\nOn Ultimate Skill, trigger the following effect: Increase the party's Attack Power for 30% of your Attack Power for 1 turn.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Caring Dark Dish`,
                    description: `Other allies gain the following effect: On Basic Attack, trigger the following effect: Allied [White-Collar Elitist Ria] gains 1 stack of "Kin Bond" (max 24 stacks).\n\nWhen your "Kin Bond" stacks are ≥ 12, activate "On Attack, trigger the following effect: Increase other allies' Basic Attack Power by an additional 20% for 1 turn".\nWhen your "Kin Bond" stacks are = 24, activate "On Attack, trigger the following effect: Increase the target's Damage Taken by 5% for 1 turn".`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Mom's Warm Hug`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 5 turns. (Removes after trigger once)\nWhen your "Kin Bond" stacks are ≥ 8, activate "On Attack, trigger the following effect: Increase other allies' Basic Attack Power by an additional 20% for 1 turn".\nWhen your "Kin Bond" stacks are ≥ 20, activate "On Attack, trigger the following effect: Increase the target's Damage Taken by 5% for 1 turn".`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack+`,
                    description: `Increase your Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain yourself Immunity to Silence.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `オフィス女王の凝視`,
                    description: `自分の攻撃力を18/21/24/27/30%増加させ(最高2スタック)、ターゲットが受ける闇属性ダメージを6.5/8/9.5/11/12.5%増加させ(最高2スタック)、味方アタッカーとガーディアンの通常攻撃ダメージを18/21/24/27/30%増加させ(5ターン)(スタック不可)、通常攻撃時「自分の0/21/24/27/30%の攻撃力でターゲットにダメージを与える」を追加する(5ターン)(スタック不可)[CD:5]`
                },
                [SkillType.SKILL_1]: {
                    name: `オフィス女王の凝視`,
                    description: `自分の攻撃力を18%増加させ(最高2スタック)、ターゲットが受ける闇属性ダメージを6.5%増加させ(最高2スタック)、味方アタッカー、ガーディアンの通常攻撃ダメージを18%増加させる(5ターン)(スタック不可)[CD:5]`
                },
                [SkillType.SKILL_2]: {
                    name: `オフィス女王の凝視`,
                    description: `自分の攻撃力を21%増加させ(最高2スタック)、ターゲットが受ける闇属性ダメージを8%増加させ(最高2スタック)、味方アタッカーとガーディアンの通常攻撃ダメージを21%増加させ(5ターン)(スタック不可)、通常攻撃時「自分の21%の攻撃力でターゲットにダメージを与える」を追加する(5ターン)(スタック不可)[CD:5]`
                },
                [SkillType.SKILL_3]: {
                    name: `オフィス女王の凝視`,
                    description: `自分の攻撃力を24%増加させ(最高2スタック)、ターゲットが受ける闇属性ダメージを9.5%増加させ(最高2スタック)、味方アタッカーとガーディアンの通常攻撃ダメージを24%増加させ(5ターン)(スタック不可)、通常攻撃時「自分の24%の攻撃力でターゲットにダメージを与える」を追加する(5ターン)(スタック不可)[CD:5]`
                },
                [SkillType.SKILL_4]: {
                    name: `オフィス女王の凝視`,
                    description: `自分の攻撃力を27%増加させ(最高2スタック)、ターゲットが受ける闇属性ダメージを11%増加させ(最高2スタック)、味方アタッカーとガーディアンの通常攻撃ダメージを27%増加させ(5ターン)(スタック不可)、通常攻撃時「自分の27%の攻撃力でターゲットにダメージを与える」を追加する(5ターン)(スタック不可)[CD:5]`
                },
                [SkillType.SKILL_5]: {
                    name: `オフィス女王の凝視`,
                    description: `自分の攻撃力を30%増加させ(最高2スタック)、ターゲットが受ける闇属性ダメージを12.5%増加させ(最高2スタック)、味方アタッカーとガーディアンの通常攻撃ダメージを30%増加させ(5ターン)(スタック不可)、通常攻撃時「自分の30%の攻撃力でターゲットにダメージを与える」を追加する(5ターン)(スタック不可)[CD:5]`
                },
                [SkillType.ATTACK]: {
                    name: `命令伝達`,
                    description: `自分の攻撃力の30%分味方全体の攻撃力を増加させる(1ターン)`
                },
                [SkillType.LEADER]: {
                    name: `冷酷かつ威厳のある家長`,
                    description: `味方全体の最大HPが45%増加する\n味方全体の攻撃力が85%増加する\n味方全体の通常攻撃ダメージが110%増加する\n味方全体が「味方のチーム内にサポーターが2人以上いる時『攻撃力が500%減少する』を発動する」を獲得する（デバフ）\n\n自分が「1ターン目に『自分が8スタックの《親子の仲》を獲得する(最高24スタック)』を誘発する(誘発1回後に解除)」を獲得する\n自分が「攻撃時『味方全体の与えるダメージを6%増加させる(最高5スタック)』を誘発する」を獲得する\n\n自分以外の味方全体が「攻撃時《はい！お母さん！》を誘発する」を獲得する\n\n《はい！お母さん！》\n味方の【エリートOL 神田莉央】の攻撃力を2%増加させる(最高20スタック)\nターゲットが受ける闇属性ダメージを1.5%増加させる(最高20スタック)\nターゲットの受けるダメージを1.5%増加させる(最高20スタック)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `ママの喝と叱責`,
                    description: `通常攻撃時「自分の75%の攻撃力でターゲットにダメージを与える」を追加する\n必殺技攻撃時「自分の攻撃力の30%分味方全体の攻撃力を増加させる(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `愛情こもった闇料理`,
                    description: `自分以外の味方全体が「通常攻撃時『味方の【エリートOL 神田莉央】が1スタックの《親子の仲》を獲得する(最高24スタック)』を誘発する」を獲得する\n\n自分の《親子の仲》のスタック数が12以上の時「攻撃時『自分以外の味方全体の通常攻撃ダメージを20%増加させる(1ターン)』を誘発する」を発動する\n自分の《親子の仲》のスタック数がちょうど24の時「攻撃時『ターゲットの受けるダメージを5%増加させる(1ターン)』を誘発する」を発動する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `ママのあたたかいハグ`,
                    description: `1ターン目に「自分の現在の必殺技CDを5ターン減少させる」を誘発する(誘発1回後に解除)\n\n自分の《親子の仲》のスタック数が8以上の時「攻撃時『自分以外の味方全体の通常攻撃ダメージを20%増加させる(1ターン)』を誘発する」を発動する\n自分の《親子の仲》のスタック数が20以上の時「攻撃時『ターゲットの受けるダメージを5%増加させる(1ターン)』を誘発する」を発動する`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻撃+`,
                    description: `自分の攻撃力を10%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `오피스 여왕의 응시`,
                    description: `자신의 공격 데미지 18/21/24/27/30% 증가(최대 2중첩), 타깃이 받는 암속성 데미지 6.5/8/9.5/11/12.5% 증가(최대 2중첩), 아군 딜러, 탱커의 일반 공격 데미지 18/21/24/27/30% 증가(5턴)(중첩 불가), 일반 공격 시「자신의 공격 데미지의 0/21/24/27/30%만큼 타깃에게 데미지」추가(5턴)(중첩 불가) [CD: 5]`
                },
                [SkillType.SKILL_1]: {
                    name: `오피스 여왕의 응시`,
                    description: `자신의 공격 데미지 18% 증가(최대 2중첩), 타깃이 받는 암속성 데미지 6.5% 증가(최대 2중첩), 아군 딜러, 탱커의 일반 공격 데미지 18% 증가(5턴)(중첩 불가) [CD: 5]`
                },
                [SkillType.SKILL_2]: {
                    name: `오피스 여왕의 응시`,
                    description: `자신의 공격 데미지 21% 증가(최대 2중첩), 타깃이 받는 암속성 데미지 8% 증가(최대 2중첩), 아군 딜러, 탱커의 일반 공격 데미지 21% 증가(5턴)(중첩 불가), 일반 공격 시「자신의 공격 데미지의 21%만큼 타깃에게 데미지」추가(5턴)(중첩 불가) [CD: 5]`
                },
                [SkillType.SKILL_3]: {
                    name: `오피스 여왕의 응시`,
                    description: `자신의 공격 데미지 24% 증가(최대 2중첩), 타깃이 받는 암속성 데미지 9.5% 증가(최대 2중첩), 아군 딜러, 탱커의 일반 공격 데미지 24% 증가(5턴)(중첩 불가), 일반 공격 시「자신의 공격 데미지의 24%만큼 타깃에게 데미지」추가(5턴)(중첩 불가) [CD: 5]`
                },
                [SkillType.SKILL_4]: {
                    name: `오피스 여왕의 응시`,
                    description: `자신의 공격 데미지 27% 증가(최대 2중첩), 타깃이 받는 암속성 데미지 11% 증가(최대 2중첩), 아군 딜러, 탱커의 일반 공격 데미지 27% 증가(5턴)(중첩 불가), 일반 공격 시「자신의 공격 데미지의 27%만큼 타깃에게 데미지」추가(5턴)(중첩 불가) [CD: 5]`
                },
                [SkillType.SKILL_5]: {
                    name: `오피스 여왕의 응시`,
                    description: `자신의 공격 데미지 30% 증가(최대 2중첩), 타깃이 받는 암속성 데미지 12.5% 증가(최대 2중첩), 아군 딜러, 탱커의 일반 공격 데미지 30% 증가(5턴)(중첩 불가), 일반 공격 시「자신의 공격 데미지의 30%만큼 타깃에게 데미지」추가(5턴)(중첩 불가) [CD: 5]`
                },
                [SkillType.ATTACK]: {
                    name: `지령 전달`,
                    description: `자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)`
                },
                [SkillType.LEADER]: {
                    name: `도도한 위엄의 가장`,
                    description: `아군 전체의 최대 HP 45% 증가\n아군 전체의 공격 데미지 85% 증가\n아군 전체의 일반 공격 데미지 110% 증가\n아군 전체는 「팀에 서포터가 2명 이상 있을 경우 『공격 데미지 500% 감소』발동」획득(디버프)\n\n자신은 「첫 번째 턴 시작 시 『자신은 8중첩의 《가족의 정》획득(최대 24중첩)』트리거(1회 트리거 후 제거)」획득\n자신은 「공격 시 『아군 전체의 가하는 데미지 6% 증가(최대 5중첩)』트리거」 획득\n\n자신 이외의 아군 전체는 「공격 시 『《네, 엄마!!》』트리거」획득\n\n《네, 엄마!!》\n아군 【커리어 우먼 칸다 리오】의 공격 데미지 2% 증가(최대 20중첩)\n타깃이 받는 암속성 데미지 1.5% 증가(최대 20중첩)\n타깃이 받는 데미지 1.5% 증가(최대 20중첩)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `엄마의 호통`,
                    description: `일반 공격 시 「자신의 공격 데미지의 75%만큼 타깃에게 데미지」 추가 \n궁극기 발동 시 「자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)」 트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `사랑이 담긴 암흑 요리`,
                    description: `자신 이외의 아군 전체는 「일반 공격 시 『아군【커리어 우먼 칸다 리오】는 1중첩의 《가족의 정》획득(최대 24중첩)』트리거」획득\n\n자신의 《가족의 정》중첩수≧12일 시 「공격 시 『자신 이외의 아군 전체의 일반 공격 데미지 20% 증가(1턴)』트리거」활성화\n자신의 《가족의 정》중첩수=24일 시 「공격 시 『타깃이 받는 데미지 5% 증가(1턴)』트리거」활성화`
                },
                [SkillType.PASSIVE_3]: {
                    name: `엄마의 따뜻한 포옹`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 5턴 감소」 트리거(1회 트리거 후 제거)\n자신의 《가족의 정》중첩수≧8일 시 「공격 시 『자신 이외의 아군 전체의 일반 공격 데미지 20% 증가(1턴)』트리거」활성화\n자신의 《가족의 정》중첩수≧20일 시 「공격 시 『타깃이 받는 데미지 5% 증가(1턴)』트리거」활성화`
                },
                [SkillType.GENERAL_1]: {
                    name: `공격+`,
                    description: `자신의 공격 데미지 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 효과`
                }
            }
        }
    },
]