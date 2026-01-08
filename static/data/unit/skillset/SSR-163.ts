import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10192: SkillSet[] =  [
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
                    name: `一切染上無垢新色`,
                    description: `使自身攻擊力增加100/112/128/144/160%(4回合)(不可疊加)、造成傷害增加18/21/24/27/30%(4回合)(不可疊加)，使自身以外我方全體獲得「攻擊時，觸發『使目標受到傷害增加0/3.5/4/4.5/5%(1回合)、受到闇屬性傷害增加5/6/7/8/9%(1回合)』(5回合)(不可疊加)」，再以自身攻擊力108/126/144/162/180%對目標造成傷害3次。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `一切染上無垢新色`,
                    description: `使自身攻擊力增加100%(4回合)(不可疊加)、造成傷害增加18%(4回合)(不可疊加)，使自身以外我方全體獲得「攻擊時，觸發『使目標受到闇屬性傷害增加5%(1回合)』(5回合)(不可疊加)」，再以自身攻擊力108%對目標造成傷害3次。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `一切染上無垢新色`,
                    description: `使自身攻擊力增加112%(4回合)(不可疊加)、造成傷害增加21%(4回合)(不可疊加)，使自身以外我方全體獲得「攻擊時，觸發『使目標受到傷害增加3.5%(1回合)、受到闇屬性傷害增加6%(1回合)』(5回合)(不可疊加)」，再以自身攻擊力126%對目標造成傷害3次。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `一切染上無垢新色`,
                    description: `使自身攻擊力增加128%(4回合)(不可疊加)、造成傷害增加24%(4回合)(不可疊加)，使自身以外我方全體獲得「攻擊時，觸發『使目標受到傷害增加4%(1回合)、受到闇屬性傷害增加7%(1回合)』(5回合)(不可疊加)」，再以自身攻擊力144%對目標造成傷害3次。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `一切染上無垢新色`,
                    description: `使自身攻擊力增加144%(4回合)(不可疊加)、造成傷害增加27%(4回合)(不可疊加)，使自身以外我方全體獲得「攻擊時，觸發『使目標受到傷害增加4.5%(1回合)、受到闇屬性傷害增加8%(1回合)』(5回合)(不可疊加)」，再以自身攻擊力162%對目標造成傷害3次。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `一切染上無垢新色`,
                    description: `使自身攻擊力增加160%(4回合)(不可疊加)、造成傷害增加30%(4回合)(不可疊加)，使自身以外我方全體獲得「攻擊時，觸發『使目標受到傷害增加5%(1回合)、受到闇屬性傷害增加9%(1回合)』(5回合)(不可疊加)」，再以自身攻擊力180%對目標造成傷害3次。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `新娘惡作劇`,
                    description: `以自身攻擊力100%使目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `今天是靜的婚禮喏~`,
                    description: `我方全體最大HP增加50%\n防禦時，觸發「使自身獲得1層《純真無垢》(最多3層)」\n我方全體攻擊者、守護者、妨礙者獲得「第1回合時，觸發『使我方全體獲得1層《小狐娘的新婚祝福》(最多4層)』(觸發1次後清除)」\n我方全體獲得「當自身《小狐娘的新婚祝福》=4層時，開啟『《新年良緣》』」\n\n《新年良緣》\n攻擊力增加100%\n造成傷害增加35%\n普攻傷害增加60%\n必殺技傷害增加40%\n攻擊時，觸發「以自身攻擊力10%使我方全體攻擊力增加(1回合)」\n普攻時，追加「以自身攻擊力25%對目標造成傷害」\n必殺時，追加「以自身攻擊力50%對目標造成傷害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `不想只是扮家家酒喏`,
                    description: `普攻時，觸發「使自身必殺技傷害增加2.5%(最多6層)」\n必殺時，觸發「使自身普攻傷害增加10%(最多3層)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `搗蛋妖狐的一日祈願`,
                    description: `普攻時，觸發「使自身獲得1層《純真無垢》(最多3層)」\n當自身《純真無垢》=3層時，開啟「《無暇心靈》」\n\n《無暇心靈》\n必殺技傷害增加20%\n對防禦目標傷害增加100%\n必殺時，觸發「使我方全體攻擊力增加15%(5回合)(不可疊加)、並清除自身《純真無垢》的所有層數」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `小狐娘出嫁中`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少4回合，且獲得3層《純真無垢》(最多3層)」(觸發1次後清除)\n必殺時，根據自身《純真無垢》層數，觸發「使自身獲得《狐之御靈》」\n\n《狐之御靈》\n普攻傷害增加7%(4回合)\n造成傷害增加5%(5回合)\n普攻時，追加「以自身攻擊力10%對目標造成傷害」(4回合)`
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
                    name: `一切染上无垢新色`,
                    description: `使自身攻击力增加100/112/128/144/160%(4回合)(不可叠加)、造成伤害增加18/21/24/27/30%(4回合)(不可叠加)，使自身以外我方全体获得「攻击时，触发『使目标受到伤害增加0/3.5/4/4.5/5%(1回合)、受到闇属性伤害增加5/6/7/8/9%(1回合)』(5回合)(不可叠加)」，再以自身攻击力108/126/144/162/180%对目标造成伤害3次。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `一切染上无垢新色`,
                    description: `使自身攻击力增加100%(4回合)(不可叠加)、造成伤害增加18%(4回合)(不可叠加)，使自身以外我方全体获得「攻击时，触发『使目标受到闇属性伤害增加5%(1回合)』(5回合)(不可叠加)」，再以自身攻击力108%对目标造成伤害3次。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `一切染上无垢新色`,
                    description: `使自身攻击力增加112%(4回合)(不可叠加)、造成伤害增加21%(4回合)(不可叠加)，使自身以外我方全体获得「攻击时，触发『使目标受到伤害增加3.5%(1回合)、受到闇属性伤害增加6%(1回合)』(5回合)(不可叠加)」，再以自身攻击力126%对目标造成伤害3次。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `一切染上无垢新色`,
                    description: `使自身攻击力增加128%(4回合)(不可叠加)、造成伤害增加24%(4回合)(不可叠加)，使自身以外我方全体获得「攻击时，触发『使目标受到伤害增加4%(1回合)、受到闇属性伤害增加7%(1回合)』(5回合)(不可叠加)」，再以自身攻击力144%对目标造成伤害3次。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `一切染上无垢新色`,
                    description: `使自身攻击力增加144%(4回合)(不可叠加)、造成伤害增加27%(4回合)(不可叠加)，使自身以外我方全体获得「攻击时，触发『使目标受到伤害增加4.5%(1回合)、受到闇属性伤害增加8%(1回合)』(5回合)(不可叠加)」，再以自身攻击力162%对目标造成伤害3次。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `一切染上无垢新色`,
                    description: `使自身攻击力增加160%(4回合)(不可叠加)、造成伤害增加30%(4回合)(不可叠加)，使自身以外我方全体获得「攻击时，触发『使目标受到伤害增加5%(1回合)、受到闇属性伤害增加9%(1回合)』(5回合)(不可叠加)」，再以自身攻击力180%对目标造成伤害3次。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `新娘恶作剧`,
                    description: `以自身攻击力100%使目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `今天是静的婚礼喏~`,
                    description: `我方全体最大HP增加50%\n防御时，触发「使自身获得1层《纯真无垢》(最多3层)」\n我方全体攻击者、守护者、妨碍者获得「第1回合时，触发『使我方全体获得1层《小狐娘的新婚祝福》(最多4层)』(触发1次后清除)」\n我方全体获得「当自身《小狐娘的新婚祝福》=4层时，开启『《新年良缘》』」\n\n《新年良缘》\n攻击力增加100%\n造成伤害增加35%\n普攻伤害增加60%\n必杀技伤害增加40%\n攻击时，触发「以自身攻击力10%使我方全体攻击力增加(1回合)」\n普攻时，追加「以自身攻击力25%对目标造成伤害」\n必杀时，追加「以自身攻击力50%对目标造成伤害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `不想只是扮家家酒喏`,
                    description: `普攻时，触发「使自身必杀技伤害增加2.5%(最多6层)」\n必杀时，触发「使自身普攻伤害增加10%(最多3层)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `捣蛋妖狐的一日祈愿`,
                    description: `普攻时，触发「使自身获得1层《纯真无垢》(最多3层)」\n当自身《纯真无垢》=3层时，开启「《无暇心灵》」\n\n《无暇心灵》\n必杀技伤害增加20%\n对防御目标伤害增加100%\n必杀时，触发「使我方全体攻击力增加15%(5回合)(不可叠加)、并清除自身《纯真无垢》的所有层数」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `小狐娘出嫁中`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少4回合，且获得3层《纯真无垢》(最多3层)」(触发1次后清除)\n必杀时，根据自身《纯真无垢》层数，触发「使自身获得《狐之御灵》」\n\n《狐之御灵》\n普攻伤害增加7%(4回合)\n造成伤害增加5%(5回合)\n普攻时，追加「以自身攻击力10%对目标造成伤害」(4回合)`
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
                    name: `Pure New Hue`,
                    description: `Increase your Attack Power by 100/112/128/144/160% for 4 turns (Non-stackable) and Damage Output by 18/21/24/27/30% for 4 turns (Non-stackable). Other allies gain the following effect for 5 turns: On Attack, trigger the following effect: Increase the target's Damage Taken by 0/3.5/4/4.5/5% for 1 turn and Damage Taken from Dark attacks by 5/6/7/8/9% for 1 turn (Non-stackable), then damage the target 3 times (108/126/144/162/180% Attack Power). CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Pure New Hue`,
                    description: `Increase your Attack Power by 100% for 4 turns (Non-stackable) and Damage Output by 18% for 4 turns (Non-stackable). Other allies gain the following effect for 5 turns: On Attack, trigger the following effect: Increase the target's Damage Taken from Dark attacks by 5% for 1 turn (Non-stackable), then damage the target 3 times (108% Attack Power). CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Pure New Hue`,
                    description: `Increase your Attack Power by 112% for 4 turns (Non-stackable) and Damage Output by 21% for 4 turns (Non-stackable). Other allies gain the following effect for 5 turns: On Attack, trigger the following effect: Increase the target's Damage Taken by 3.5% for 1 turn and Damage Taken from Dark attacks by 6% for 1 turn (Non-stackable), then damage the target 3 times (126% Attack Power). CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Pure New Hue`,
                    description: `Increase your Attack Power by 128% for 4 turns (Non-stackable) and Damage Output by 24% for 4 turns (Non-stackable). Other allies gain the following effect for 5 turns: On Attack, trigger the following effect: Increase the target's Damage Taken by 4% for 1 turn and Damage Taken from Dark attacks by 7% for 1 turn (Non-stackable), then damage the target 3 times (144% Attack Power). CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Pure New Hue`,
                    description: `Increase your Attack Power by 144% for 4 turns (Non-stackable) and Damage Output by 27% for 4 turns (Non-stackable). Other allies gain the following effect for 5 turns: On Attack, trigger the following effect: Increase the target's Damage Taken by 4.5% for 1 turn and Damage Taken from Dark attacks by 8% for 1 turn (Non-stackable), then damage the target 3 times (162% Attack Power). CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Pure New Hue`,
                    description: `Increase your Attack Power by 160% for 4 turns (Non-stackable) and Damage Output by 30% for 4 turns (Non-stackable). Other allies gain the following effect for 5 turns: On Attack, trigger the following effect: Increase the target's Damage Taken by 5% for 1 turn and Damage Taken from Dark attacks by 9% for 1 turn (Non-stackable), then damage the target 3 times (180% Attack Power). CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Bridal Prank`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Shizuka's Wedding Day~`,
                    description: `Increase the party's max HP by 50%.\nWhen in Guard Stance, trigger the following effect: Gain yourself 1 stack of "Pure Innocence" (max 3 stacks).\nAllied Attackers, Defenders, and Obstructors gain the following effect: On the 1st turn, trigger the following effect: The party gains 1 stack of "Fox Bride's Blessing" (max 4 stacks) (removes after triggering once).\nThe party gains the following effect: When your "Fox Bride's Blessing" stacks are = 4, activate "New Year's Match".\n\n"New Year's Match"\nIncrease Attack Power by 100%.\nIncrease Damage Output by 35%.\nIncrease Basic Attack Power by 60%.\nIncrease Ultimate Skill Power by 40%.\nOn Attack, trigger the following effect: Increase the party's Attack Power for 10% of your Attack Power for 1 turn.\nOn Basic Attack, deal additional damage to the target (25% Attack Power).\nOn Ultimate Skill, deal additional damage to the target (50% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Not Pretend Love`,
                    description: `On Basic Attack, trigger the following effect: Increase your Ultimate Skill Power by 2.5% (max 6 stacks).\nOn Ultimate Skill, trigger the following effect: Increase your Basic Attack Power by 10% (max 3 stacks).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Naughty Fox's Wish`,
                    description: `On Basic Attack, trigger the following effect: Gain yourself 1 stack of "Pure Innocence" (max 3 stacks).\nWhen your "Pure Innocence" stacks are = 3, activate "Pure Heart".\n\n"Pure Heart"\nIncrease Ultimate Skill Power by 20%.\nIncrease Damage Output against the targets in Guard Stance by 100%.\nOn Ultimate Skill, trigger the following effect: Increase the party's Attack Power by 15% for 5 turns (Non-stackable) and remove all your "Pure Innocence" stacks.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Fox Bride's Day`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 4 turns and gain 3 stacks of "Pure Innocence" (max 3 stacks) (removes after triggering once).\nOn Ultimate Skill, trigger the following effect based on the number of your "Pure Innocence" stacks: Gain yourself "Sacred Fox Spirit".\n\n"Sacred Fox Spirit"\nIncrease Basic Attack Power by 7% for 4 turns.\nIncrease Damage Output by 5% for 5 turns.\nOn Basic Attack, deal additional damage to the target for 4 turns (10% Attack Power).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage Output+`,
                    description: `Increase your damage output by 7.5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain yourself immunity to Sleep.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `無垢なる新色に染まる`,
                    description: `自分の攻撃力を100/112/128/144/160%増加させ(4ターン)(スタック不可)、与えるダメージが18/21/24/27/30%増加し(4ターン)(スタック不可)、自分以外の味方全体が「攻撃時『ターゲットの受けるダメージを0/3.5/4/4.5/5%増加させ(1ターン)、受ける闇属性ダメージを5/6/7/8/9%増加させる(1ターン)』を誘発する(5ターン)(スタック不可)」を獲得し、自分の108/126/144/162/180%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `無垢なる新色に染まる`,
                    description: `自分の攻撃力を100%増加させ(4ターン)(スタック不可)、与えるダメージが18%増加し(4ターン)(スタック不可)、自分以外の味方全体が「攻撃時『ターゲットが受ける闇属性ダメージを5%増加させる(1ターン)』を誘発する(5ターン)(スタック不可)」を獲得し、自分の108%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `無垢なる新色に染まる`,
                    description: `自分の攻撃力を112%増加させ(4ターン)(スタック不可)、与えるダメージが21%増加し(4ターン)(スタック不可)、自分以外の味方全体が「攻撃時『ターゲットの受けるダメージを3.5%増加させ(1ターン)、受ける闇属性ダメージを6%増加させる(1ターン)』を誘発する(5ターン)(スタック不可)」を獲得し、自分の126%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `無垢なる新色に染まる`,
                    description: `自分の攻撃力を128%増加させ(4ターン)(スタック不可)、与えるダメージが24%増加し(4ターン)(スタック不可)、自分以外の味方全体が「攻撃時『ターゲットの受けるダメージを4%増加させ(1ターン)、受ける闇属性ダメージを7%増加させる(1ターン)』を誘発する(5ターン)(スタック不可)」を獲得し、自分の144%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `無垢なる新色に染まる`,
                    description: `自分の攻撃力を144%増加させ(4ターン)(スタック不可)、与えるダメージが27%増加し(4ターン)(スタック不可)、自分以外の味方全体が「攻撃時『ターゲットの受けるダメージを4.5%増加させ(1ターン)、受ける闇属性ダメージを8%増加させる(1ターン)』を誘発する(5ターン)(スタック不可)」を獲得し、自分の162%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `無垢なる新色に染まる`,
                    description: `自分の攻撃力を160%増加させ(4ターン)(スタック不可)、与えるダメージが30%増加し(4ターン)(スタック不可)、自分以外の味方全体が「攻撃時『ターゲットの受けるダメージを5%増加させ(1ターン)、受ける闇属性ダメージを9%増加させる(1ターン)』を誘発する(5ターン)(スタック不可)」を獲得し、自分の180%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `花嫁のいたずら`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `今日は静の結婚式だよ～`,
                    description: `味方全体の最大HPが50%増加する\n防御時「自分が《純粋無垢》を1スタック獲得する(最高3スタック)」を誘発する\n味方のアタッカー、ガーディアン、デバッファーが「1ターン目に『味方全体が《狐っ娘の新婚祝い》を1スタック獲得する(最高4スタック)』を誘発する(誘発1回後に解除)」を獲得する\n味方全体が「自分の《狐っ娘の新婚祝い》のスタック数が=4の時『《新年の良縁》』を発動する」を獲得する\n\n《新年の良縁》\n攻撃力が100%増加する\n与えるダメージが35%増加する\n通常攻撃ダメージが60%増加する\n必殺技ダメージが40%増加する\n攻撃時「自分の攻撃力の10%分味方全体の攻撃力を増加させる(1ターン)」を誘発する\n通常攻撃時「自分の25%の攻撃力でターゲットにダメージを与える」を追加する\n必殺技攻撃時「自分の50%の攻撃力でターゲットにダメージを与える」を追加する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `ただのおままごとじゃないよ`,
                    description: `通常攻撃時「自分の必殺技ダメージを2.5%増加させる(最高6スタック)」を誘発する\n必殺技攻撃時「自分の通常攻撃ダメージを10%増加させる(最高3スタック)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `いたずら妖狐の一日祈願`,
                    description: `通常攻撃時「自分が《純粋無垢》を1スタック獲得する(最高3スタック)」を誘発する\n自分の《純粋無垢》のスタック数が=3の時『《無垢なる心》』を発動する\n\n《無垢なる心》\n必殺技ダメージが20%増加する\n防御中のターゲットに与えるダメージを100%増加させる\n必殺技攻撃時「味方全体の攻撃力を15%増加させ(5ターン)(スタック不可)、自分の《純粋無垢》のスタック数を全て消す」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `狐っ娘、嫁入り中`,
                    description: `1ターン目に「自分の現在の必殺技CDを4ターン減少させ、《純粋無垢》を3スタック獲得する(最高3スタック)」を誘発する(誘発1回後に解除)\n必殺技攻撃時、自分の《純粋無垢》のスタック数に応じて「自分が《狐の御霊》を獲得する」を誘発する\n\n《狐の御霊》\n通常攻撃ダメージが7%増加する(4ターン)\n与えるダメージが5%増加する(5ターン)\n通常攻撃時「自分の10%の攻撃力でターゲットにダメージを与える」を追加する(4ターン)`
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
                    name: `새로운 빛으로 물들이다`,
                    description: `자신의 공격 데미지 100/112/128/144/160% 증가(4턴)(중첩 불가), 가하는 데미지 18/21/24/27/30% 증가(4턴)(중첩 불가), 자신 이외의 아군 전체는 「공격 시『타깃이 받는 데미지 0/3.5/4/4.5/5% 증가(1턴), 타깃이 받는 암속성 데미지 5/6/7/8/9% 증가(1턴)』트리거(5턴)(중첩 불가)」획득, 다시 자신의 공격 데미지의 108/126/144/162/180%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `새로운 빛으로 물들이다`,
                    description: `자신의 공격 데미지 100% 증가(4턴)(중첩 불가), 가하는 데미지 18% 증가(4턴)(중첩 불가), 자신 이외의 아군 전체는 「공격 시『타깃이 받는 암속성 데미지 5% 증가(1턴)』트리거(5턴)(중첩 불가)」획득, 다시 자신의 공격 데미지의 108%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `새로운 빛으로 물들이다`,
                    description: `자신의 공격 데미지 112% 증가(4턴)(중첩 불가), 가하는 데미지 21% 증가(4턴)(중첩 불가), 자신 이외의 아군 전체는 「공격 시『타깃이 받는 데미지 3.5% 증가(1턴), 타깃이 받는 암속성 데미지 6% 증가(1턴)』트리거(5턴)(중첩 불가)」획득, 다시 자신의 공격 데미지의 126%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `새로운 빛으로 물들이다`,
                    description: `자신의 공격 데미지 128% 증가(4턴)(중첩 불가), 가하는 데미지 24% 증가(4턴)(중첩 불가), 자신 이외의 아군 전체는 「공격 시『타깃이 받는 데미지 4% 증가(1턴), 타깃이 받는 암속성 데미지 7% 증가(1턴)』트리거(5턴)(중첩 불가)」획득, 다시 자신의 공격 데미지의 144%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `새로운 빛으로 물들이다`,
                    description: `자신의 공격 데미지 144% 증가(4턴)(중첩 불가), 가하는 데미지 27% 증가(4턴)(중첩 불가), 자신 이외의 아군 전체는 「공격 시『타깃이 받는 데미지 4.5% 증가(1턴), 타깃이 받는 암속성 데미지 8% 증가(1턴)』트리거(5턴)(중첩 불가)」획득, 다시 자신의 공격 데미지의 162%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `새로운 빛으로 물들이다`,
                    description: `자신의 공격 데미지 160% 증가(4턴)(중첩 불가), 가하는 데미지 30% 증가(4턴)(중첩 불가), 자신 이외의 아군 전체는 「공격 시『타깃이 받는 데미지 5% 증가(1턴), 타깃이 받는 암속성 데미지 9% 증가(1턴)』트리거(5턴)(중첩 불가)」획득, 다시 자신의 공격 데미지의 180%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `신부의 장난`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `오늘은 시즈카가 시집가는 날~`,
                    description: `아군 전체의 최대 HP 50% 증가\n방어 시 「자신은 1중첩의 《순진무구》 획득(최대 3중첩)」트리거\n아군 딜러, 탱커, 디스럽터는 「첫 번째 턴 시작 시『아군 전체는 1중첩의《여우 신부의 축복》획득(최대 4중첩)』트리거(1회 트리거 후 제거)」획득\n아군 전체는 「자신의 《여우 신부의 축복》 중첩수=4일 시 『《새해의 인연》』활성화」획득\n\n《새해의 인연》\n공격 데미지 100% 증가\n가하는 데미지 35% 증가\n일반 공격 데미지 60% 증가\n궁극기 데미지 40% 증가\n공격 시 「자신의 공격 데미지의 10%만큼 아군 전체의 공격 데미지 증가(1턴)」트리거\n일반 공격 시 「자신의 공격 데미지의 25%만큼 타깃에게 데미지」추가\n궁극기 발동 시 「자신의 공격 데미지의 50%만큼 타깃에게 데미지」추가`
                },
                [SkillType.PASSIVE_1]: {
                    name: `소꿉놀이로 끝내고 싶지 않아`,
                    description: `일반 공격 시 「자신의 궁극기 데미지 2.5% 증가(최대 6중첩)」트리거 \n궁극기 발동 시 「자신의 일반 공격 데미지 10% 증가(최대 3중첩)」트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `장난꾸러기 요호의 하루 기원`,
                    description: `일반 공격 시 「자신은 1중첩의 《순진무구》획득(최대 3중첩)」트리거\n자신의 《순진무구》 중첩수=3일 시 「《무결한 마음》」활성화\n\n《무결한 마음》\n궁극기 데미지 20% 증가\n방어한 타깃에게 가하는 데미지 100% 증가\n궁극기 발동 시 「아군 전체의 공격 데미지 15% 증가(5턴)(중첩 불가), 자신의 모든 《순진무구》중첩수 제거」트리거`
                },
                [SkillType.PASSIVE_3]: {
                    name: `여우 신부 시집가는 중`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 4턴 감소, 3중첩의 《순진무구》획득(최대 3중첩)」트리거(1회 트리거 후 제거) \n궁극기 발동 시, 자신의 《순진무구》 중첩수에 따라 「자신은 《여우의 어령》획득」트리거 \n\n《여우의 어령》 \n일반 공격 데미지 7% 증가(4턴) \n가하는 데미지 5% 증가(5턴) \n일반 공격 시 「자신의 공격 데미지의 10%만큼 타깃에게 데미지」추가(4턴)`
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
    },
]