import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10138: SkillSet[] =  [
    {
        version: 2,
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
                    name: `魔王城party time`,
                    description: `使自身獲得1/1/2/2/3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30/40/40/50/50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60/70/80/90/100%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `魔王城party time`,
                    description: `使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `魔王城party time`,
                    description: `使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力70%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `魔王城party time`,
                    description: `使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力80%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `魔王城party time`,
                    description: `使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力90%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `魔王城party time`,
                    description: `使自身獲得3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力100%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `派對邀請函`,
                    description: `以自身攻擊力50%每回合對我方全體進行治療(3回合)`
                },
                [SkillType.LEADER]: {
                    name: `睡衣派對要開始囉～`,
                    description: `我方全體最大HP增加30%\n我方全體攻擊力增加50%\n自身必殺時，觸發「使我方站位5獲得必殺技傷害增加30%(1回合)」\n自身必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加7.5%(1回合)」\n自身必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加7.5%(1回合)」\n使我方全體輔助者獲得「必殺時，觸發『以自身攻擊力10%使我方站位5攻擊力增加(1回合)」\n使我方全體妨礙者獲得「必殺時，觸發『使我方站位5獲得《派對焦點》(1回合)』」\n使我方最大HP最高者獲得「防禦時，觸發『以自身最大HP30%給予我方最大HP最低者護盾(1回合)』」\n \n《派對焦點》\n必殺時，追加「以自身攻擊力50%對目標造成傷害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `羞澀的戀愛話題`,
                    description: `必殺時，觸發「以自身攻擊力100%對我方全體進行治療，再以自身攻擊力50%每回合對我方全體進行治療(3回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `刺激的派對遊戲`,
                    description: `使我方全體輔助者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對主持人》(最多4層)』(觸發1次後清除)」\n使我方全體妨礙者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對參加者》(最多4層)』(觸發1次後清除)」\n必殺時，觸發「使自身不受《派對主持人》、《派對參加者》層數變動效果影響(50回合)」(觸發1次後解除)\n必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加8.75%(1回合)」\n必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加8.75%(1回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `臨時枕頭堡壘！`,
                    description: `防禦時，觸發「使我方最大HP最低者受到傷害減少20%(1回合)」\n防禦時，觸發「以自身攻擊力50%對我方全體進行治療」`
                },
                [SkillType.GENERAL_1]: {
                    name: `持續治療+ (6潛)`,
                    description: `使自身造成持續型治療增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `魔王城party time`,
                    description: `使自身获得1/1/2/2/3层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加30/40/40/50/50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力60/70/80/90/100%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `魔王城party time`,
                    description: `使自身获得1层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加30%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力60%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `魔王城party time`,
                    description: `使自身获得1层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加40%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力70%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `魔王城party time`,
                    description: `使自身获得2层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加40%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力80%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `魔王城party time`,
                    description: `使自身获得2层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力90%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `魔王城party time`,
                    description: `使自身获得3层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力100%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `派对邀请函`,
                    description: `以自身攻击力50%每回合对我方全体进行治疗(3回合)`
                },
                [SkillType.LEADER]: {
                    name: `睡衣派对要开始罗～`,
                    description: `我方全体最大HP增加30%\n我方全体攻击力增加50%\n自身必杀时，触发「使我方站位5获得必杀技伤害增加30%(1回合)」\n自身必杀时，根据自身《派对主持人》的层数，触发「使我方站位5造成伤害增加7.5%(1回合)」\n自身必杀时，根据自身《派对参加者》的层数，触发「使目标受到伤害增加7.5%(1回合)」\n使我方全体辅助者获得「必杀时，触发『以自身攻击力10%使我方站位5攻击力增加(1回合)」\n使我方全体妨碍者获得「必杀时，触发『使我方站位5获得《派对焦点》(1回合)』」\n使我方最大HP最高者获得「防御时，触发『以自身最大HP30%给予我方最大HP最低者护盾(1回合)』」\n \n《派对焦点》\n必杀时，追加「以自身攻击力50%对目标造成伤害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `羞涩的恋爱话题`,
                    description: `必杀时，触发「以自身攻击力100%对我方全体进行治疗，再以自身攻击力50%每回合对我方全体进行治疗(3回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `刺激的派对游戏`,
                    description: `使我方全体辅助者获得「行动时，触发『使我方『迷情薄纱 露露』获得1层《派对主持人》(最多4层)』(触发1次後清除)」\n使我方全体妨碍者获得「行动时，触发『使我方『迷情薄纱 露露』获得1层《派对参加者》(最多4层)』(触发1次後清除)」\n必杀时，触发「使自身不受《派对主持人》丶《派对参加者》层数变动效果影响(50回合)」(触发1次後解除)\n必杀时，根据自身《派对主持人》的层数，触发「使我方站位5造成伤害增加8.75%(1回合)」\n必杀时，根据自身《派对参加者》的层数，触发「使目标受到伤害增加8.75%(1回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `临时枕头堡垒！`,
                    description: `防御时，触发「使我方最大HP最低者受到伤害减少20%(1回合)」\n防御时，触发「以自身攻击力50%对我方全体进行治疗」`
                },
                [SkillType.GENERAL_1]: {
                    name: `持续治疗+ (6潜)`,
                    description: `使自身造成持续型治疗增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1/1/2/2/3 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 30/40/40/50/50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (60/70/80/90/100% Attack Power). CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 30% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (60% Attack Power). CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 40% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (70% Attack Power). CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 2 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 40% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (80% Attack Power). CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 2 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (90% Attack Power). CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 3 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (100% Attack Power). CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `Party Invitation`,
                    description: `Heal the party for 50% of your Attack Power every turn for 3 turns.`
                },
                [SkillType.LEADER]: {
                    name: `Pajama Party Starting~`,
                    description: `Increase the party's max HP by 30%.\nIncrease the party's Attack Power by 50%.\nOn Ultimate Skill, increase the 5th position ally's Ultimate Skill Power by 30% for 1 turn.\nOn Ultimate Skill, increase the 5th position ally's Damage Output by 7.5% for 1 turn based on your "Party Host" stacks.\nOn Ultimate Skill, increase the target's Damage Taken by 7.5% for 1 turn based on your "Party Attendee" stacks.\nAll allied Supporters gain the following effect: On Ultimate Skill, increase the 5th position ally's Attack Power for 10% of your Attack Power for 1 turn.\nAll allied Obstructors gain the following effect: On Ultimate Skill, gain 5th position ally "Party Focus" for 1 turn.\nThe ally with the highest max HP gains the following effect: When in Guard Stance, grant the ally with the lowest max HP a Shield for 30% of your max HP for 1 turn.\n\n"Party Focus"\nOn Ultimate Skill, damage the target (50% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Tender Topics of Love`,
                    description: `On Ultimate Skill, heal the party for 100% of your Attack Power, then heal the party for 50% of your Attack Power every turn for 3 turns.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Exciting Party Game`,
                    description: `All allied Supporters gain the following effect: When taking action, the allied Lingerie Lolita Lulu gains 1 stack of "Party Host" (max 4 stacks) (removes after triggering once).\nAll allied Obstructors gain the following effect: When taking action, the allied Lingerie Lolita Lulu gains 1 stack of "Party Attendee" (max 4 stacks) (removes after triggering once).\nOn Ultimate Skill, immune to effects of "Party Host" and "Party Attendee" stack changes for 50 turns (removes after triggering once).\nOn Ultimate Skill, increase the 5th position ally's Damage Output by 8.75% for 1 turn based on your "Party Host" stacks.\nOn Ultimate Skill, increase the target's Damage Taken by 8.75% for 1 turn based on your "Party Attendee" stacks.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Temporary Pillow Fort!`,
                    description: `When in Guard Stance, decrease the Damage Taken of the ally with the lowest max HP by 20% for 1 turn.\nWhen in Guard Stance, heal the party for 50% of your Attack Power.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Healing-over-time +`,
                    description: `Increase your Heal effect by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain immunity to Silence.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_4]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_5]: {
                    name: ``,
                    description: ``
                },
                [SkillType.ATTACK]: {
                    name: ``,
                    description: ``
                },
                [SkillType.LEADER]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_2]: {
                    name: ``,
                    description: ``
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_4]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_5]: {
                    name: ``,
                    description: ``
                },
                [SkillType.ATTACK]: {
                    name: ``,
                    description: ``
                },
                [SkillType.LEADER]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_2]: {
                    name: ``,
                    description: ``
                }
            }
        }
    },
    {
        version: 1,
        lastDate: "2024/04/26",
        remark: {
            [Locale.tc]: ``,
            [Locale.sc]: ``,
            [Locale.en]: ``,
            [Locale.jp]: ``,
            [Locale.kr]: ``
        },
        skill: {
            [Locale.tc]: {
                [SkillType.BASE_STAT]: {
                    name: `完全體數據`,
                    description: `HP：3,375,317\nATK：767,182\n(上調基礎ATK與HP數值)`
                },
                [SkillType.SKILL_S]: {
                    name: `魔王城party time`,
                    description: `使自身獲得1/1/2/2/3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30/40/40/50/50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60/70/80/90/100%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `魔王城party time`,
                    description: `使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `魔王城party time`,
                    description: `使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力70%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `魔王城party time`,
                    description: `使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力80%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `魔王城party time`,
                    description: `使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力90%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `魔王城party time`,
                    description: `使自身獲得3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力100%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `派對邀請函`,
                    description: `以自身攻擊力50%每回合對我方全體進行治療(3回合)`
                },
                [SkillType.LEADER]: {
                    name: `睡衣派對要開始囉～`,
                    description: `我方全體最大HP增加30%\n我方全體攻擊力增加50%\n自身必殺時，觸發「使我方站位5獲得必殺技傷害增加30%(1回合)」\n自身必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加7.5%(1回合)」\n自身必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加7.5%(1回合)」\n使我方全體輔助者獲得「必殺時，觸發『以自身攻擊力10%使我方站位5攻擊力增加(1回合)」\n使我方全體妨礙者獲得「必殺時，觸發『使我方站位5獲得《派對焦點》(1回合)』」\n使我方最大HP最高者獲得「防禦時，觸發『以自身最大HP30%給予我方最大HP最低者護盾(1回合)』」\n \n《派對焦點》\n必殺時，追加「以自身攻擊力50%對目標造成傷害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `羞澀的戀愛話題`,
                    description: `必殺時，觸發「以自身攻擊力100%對我方全體進行治療，再以自身攻擊力50%每回合對我方全體進行治療(3回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `刺激的派對遊戲`,
                    description: `使我方全體輔助者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對主持人》(最多4層)』(觸發1次後清除)」\n使我方全體妨礙者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對參加者》(最多4層)』(觸發1次後清除)」\n必殺時，觸發「使自身不受《派對主持人》、《派對參加者》層數變動效果影響(50回合)」(觸發1次後解除)\n必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加8.75%(1回合)」\n必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加8.75%(1回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `臨時枕頭堡壘！`,
                    description: `防禦時，觸發「使我方最大HP最低者受到傷害減少20%(1回合)」\n防禦時，觸發「以自身攻擊力50%對我方全體進行治療」`
                },
                [SkillType.GENERAL_1]: {
                    name: `持續治療+ (6潛)`,
                    description: `使自身造成持續型治療增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.BASE_STAT]: {
                    name: `完全体数据`,
                    description: `HP：3,375,317\nATK：767,182\n(上调基础ATK与HP数值)`
                },
                [SkillType.SKILL_S]: {
                    name: `魔王城party time`,
                    description: `使自身获得1/1/2/2/3层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加30/40/40/50/50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力60/70/80/90/100%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `魔王城party time`,
                    description: `使自身获得1层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加30%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力60%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `魔王城party time`,
                    description: `使自身获得1层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加40%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力70%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `魔王城party time`,
                    description: `使自身获得2层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加40%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力80%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `魔王城party time`,
                    description: `使自身获得2层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力90%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `魔王城party time`,
                    description: `使自身获得3层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力100%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `派对邀请函`,
                    description: `以自身攻击力50%每回合对我方全体进行治疗(3回合)`
                },
                [SkillType.LEADER]: {
                    name: `睡衣派对要开始罗～`,
                    description: `我方全体最大HP增加30%\n我方全体攻击力增加50%\n自身必杀时，触发「使我方站位5获得必杀技伤害增加30%(1回合)」\n自身必杀时，根据自身《派对主持人》的层数，触发「使我方站位5造成伤害增加7.5%(1回合)」\n自身必杀时，根据自身《派对参加者》的层数，触发「使目标受到伤害增加7.5%(1回合)」\n使我方全体辅助者获得「必杀时，触发『以自身攻击力10%使我方站位5攻击力增加(1回合)」\n使我方全体妨碍者获得「必杀时，触发『使我方站位5获得《派对焦点》(1回合)』」\n使我方最大HP最高者获得「防御时，触发『以自身最大HP30%给予我方最大HP最低者护盾(1回合)』」\n \n《派对焦点》\n必杀时，追加「以自身攻击力50%对目标造成伤害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `羞涩的恋爱话题`,
                    description: `必杀时，触发「以自身攻击力100%对我方全体进行治疗，再以自身攻击力50%每回合对我方全体进行治疗(3回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `刺激的派对游戏`,
                    description: `使我方全体辅助者获得「行动时，触发『使我方『迷情薄纱 露露』获得1层《派对主持人》(最多4层)』(触发1次後清除)」\n使我方全体妨碍者获得「行动时，触发『使我方『迷情薄纱 露露』获得1层《派对参加者》(最多4层)』(触发1次後清除)」\n必杀时，触发「使自身不受《派对主持人》丶《派对参加者》层数变动效果影响(50回合)」(触发1次後解除)\n必杀时，根据自身《派对主持人》的层数，触发「使我方站位5造成伤害增加8.75%(1回合)」\n必杀时，根据自身《派对参加者》的层数，触发「使目标受到伤害增加8.75%(1回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `临时枕头堡垒！`,
                    description: `防御时，触发「使我方最大HP最低者受到伤害减少20%(1回合)」\n防御时，触发「以自身攻击力50%对我方全体进行治疗」`
                },
                [SkillType.GENERAL_1]: {
                    name: `持续治疗+ (6潜)`,
                    description: `使自身造成持续型治疗增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.BASE_STAT]: {
                    name: `Maxed Data`,
                    description: `Max HP：3,375,317\nMax Attack：767,182\n(Increase base ATK and HP values)`
                },
                [SkillType.SKILL_S]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1/1/2/2/3 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 30/40/40/50/50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (60/70/80/90/100% Attack Power). CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 30% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (60% Attack Power). CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 40% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (70% Attack Power). CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 2 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 40% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (80% Attack Power). CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 2 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (90% Attack Power). CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 3 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (100% Attack Power). CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `Party Invitation`,
                    description: `Heal the party for 50% of your Attack Power every turn for 3 turns.`
                },
                [SkillType.LEADER]: {
                    name: `Pajama Party Starting~`,
                    description: `Increase the party's max HP by 30%.\nIncrease the party's Attack Power by 50%.\nOn Ultimate Skill, increase the 5th position ally's Ultimate Skill Power by 30% for 1 turn.\nOn Ultimate Skill, increase the 5th position ally's Damage Output by 7.5% for 1 turn based on your "Party Host" stacks.\nOn Ultimate Skill, increase the target's Damage Taken by 7.5% for 1 turn based on your "Party Attendee" stacks.\nAll allied Supporters gain the following effect: On Ultimate Skill, increase the 5th position ally's Attack Power for 10% of your Attack Power for 1 turn.\nAll allied Obstructors gain the following effect: On Ultimate Skill, gain 5th position ally "Party Focus" for 1 turn.\nThe ally with the highest max HP gains the following effect: When in Guard Stance, grant the ally with the lowest max HP a Shield for 30% of your max HP for 1 turn.\n\n"Party Focus"\nOn Ultimate Skill, damage the target (50% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Tender Topics of Love`,
                    description: `On Ultimate Skill, heal the party for 100% of your Attack Power, then heal the party for 50% of your Attack Power every turn for 3 turns.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Exciting Party Game`,
                    description: `All allied Supporters gain the following effect: When taking action, the allied Lingerie Lolita Lulu gains 1 stack of "Party Host" (max 4 stacks) (removes after triggering once).\nAll allied Obstructors gain the following effect: When taking action, the allied Lingerie Lolita Lulu gains 1 stack of "Party Attendee" (max 4 stacks) (removes after triggering once).\nOn Ultimate Skill, immune to effects of "Party Host" and "Party Attendee" stack changes for 50 turns (removes after triggering once).\nOn Ultimate Skill, increase the 5th position ally's Damage Output by 8.75% for 1 turn based on your "Party Host" stacks.\nOn Ultimate Skill, increase the target's Damage Taken by 8.75% for 1 turn based on your "Party Attendee" stacks.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Temporary Pillow Fort!`,
                    description: `When in Guard Stance, decrease the Damage Taken of the ally with the lowest max HP by 20% for 1 turn.\nWhen in Guard Stance, heal the party for 50% of your Attack Power.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Healing-over-time +`,
                    description: `Increase your Heal effect by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain immunity to Silence.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_4]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_5]: {
                    name: ``,
                    description: ``
                },
                [SkillType.ATTACK]: {
                    name: ``,
                    description: ``
                },
                [SkillType.LEADER]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_2]: {
                    name: ``,
                    description: ``
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_4]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_5]: {
                    name: ``,
                    description: ``
                },
                [SkillType.ATTACK]: {
                    name: ``,
                    description: ``
                },
                [SkillType.LEADER]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_2]: {
                    name: ``,
                    description: ``
                }
            }
        }
    },
]