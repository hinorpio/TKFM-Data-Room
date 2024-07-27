import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10130: SkillSet[] =  [
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
                    name: `這一棒，貫穿腦門！`,
                    description: `使目標受到傷害增加0/0/20/25/25%，以自身攻擊力211/234/256/278/300%對目標造成傷害，並使自身獲得「被攻擊時，觸發『以自身攻擊力156/156/178/178/200%對目標進行反擊(觸發1次後解除)』(3回合)」、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `這一棒，貫穿腦門！`,
                    description: `以自身攻擊力211%對目標造成傷害，並使自身獲得『被攻擊時，觸發以自身攻擊力156%對目標進行反擊(觸發1次後解除)』(3回合)、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態, CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `這一棒，貫穿腦門！`,
                    description: `以自身攻擊力234%對目標造成傷害，並使自身獲得『被攻擊時，觸發以自身攻擊力156%對目標進行反擊(觸發1次後解除)』(3回合)、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態, CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `這一棒，貫穿腦門！`,
                    description: `使目標受到傷害增加20%，以自身攻擊力256%對目標造成傷害，並使自身獲得『被攻擊時，觸發以自身攻擊力178%對目標進行反擊(觸發1次後解除)』(3回合)、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態, CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `這一棒，貫穿腦門！`,
                    description: `使目標受到傷害增加25%，以自身攻擊力278%對目標造成傷害，並使自身獲得『被攻擊時，觸發以自身攻擊力178%對目標進行反擊(觸發1次後解除)』(3回合)、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態, CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `這一棒，貫穿腦門！`,
                    description: `使目標受到傷害增加25%，以自身攻擊力300%對目標造成傷害，並使自身獲得『被攻擊時，觸發以自身攻擊力200%對目標進行反擊(觸發1次後解除)』(3回合)、使自身獲得嘲諷效果(3回合)(被攻擊1次後解除)，並使自身變為防禦狀態, CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `跨殺小啦！`,
                    description: `以自身攻擊力89%對目標造成傷害，並使自身受到傷害減少17%(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `聖夜的繼承者`,
                    description: `我方全體最大HP增加20%\n我方全體免疫嘲諷效果\n我方全體獲得「隊伍中至少有3名守護者時，發動『攻擊力增加140%』」\n我方全體獲得「隊伍中至少有3名守護者時，發動『造成傷害增加100%』」\n我方全體獲得「隊伍中至少有3名守護者時，發動『《江湖在走，球棒要有！》』」\n我方全體獲得「隊伍中至少有3名守護者時，發動『《沒有很可以》』」 \n\n《江湖在走，球棒要有！》\n被攻擊時，觸發「使目標受到觸發技傷害增加20%(最多10層)」\n\n《沒有很可以》\n必殺時，觸發「使自身獲得《但你惹不起！》」\n\n《但你惹不起！》\n被攻擊時，觸發「以自身攻擊力250%對目標進行反擊(觸發1次後解除)」(3回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `狼若回頭！`,
                    description: `免疫必殺技CD變動效果\n第1回合＆每經過3回合時，觸發「使自身獲得2層《喧嘩上等！》」\n被攻擊時，觸發「使自身獲得1層《喧嘩上等！》」\n\n《喧嘩上等！》\n使自身獲得文字效果《喧嘩上等！》(最多10層)\n使自身攻擊力增加5%(最多10層)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `不是報恩！`,
                    description: `當自身《暄曄上等！》層數≧3層時，發動「造成傷害增加5%」\n當自身《喧曄上等！》層數≧6層時，發動「造成傷害增加10%」\n當自身《暄曄上等！》層數≧9層時，發動「造成傷害增加15%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `就是爆頭！`,
                    description: `當自身《喧嘩上等！》層數=10層時，發動「《夜露死苦！》」\n\n《夜露死苦！》\n行動時，觸發「使自身獲得《巴格耶鹿！》」\n\n《巴格耶鹿！》\n被攻擊時，觸發「以自身攻擊力100%對目標進行反擊(被攻擊1次後解除)」(1回合)`
                },
                [SkillType.GENERAL_1]: {
                    name: `傷害+ (6潛)`,
                    description: `使自身造成傷害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺 (12潛)`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `这一棒，贯穿脑门！`,
                    description: `使目标受到伤害增加0/0/20/25/25%，以自身攻击力211/234/256/278/300%对目标造成伤害，并使自身获得「被攻击时，触发『以自身攻击力156/156/178/178/200%对目标进行反击(触发1次後解除)』(3回合)」丶使自身获得嘲讽效果(3回合)(被攻击1次後解除)，并使自身变为防御状态，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `这一棒，贯穿脑门！`,
                    description: `以自身攻击力211%对目标造成伤害，并使自身获得『被攻击时，触发以自身攻击力156%对目标进行反击(触发1次後解除)』(3回合)丶使自身获得嘲讽效果(3回合)(被攻击1次後解除)，并使自身变为防御状态, CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `这一棒，贯穿脑门！`,
                    description: `以自身攻击力234%对目标造成伤害，并使自身获得『被攻击时，触发以自身攻击力156%对目标进行反击(触发1次後解除)』(3回合)丶使自身获得嘲讽效果(3回合)(被攻击1次後解除)，并使自身变为防御状态, CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `这一棒，贯穿脑门！`,
                    description: `使目标受到伤害增加20%，以自身攻击力256%对目标造成伤害，并使自身获得『被攻击时，触发以自身攻击力178%对目标进行反击(触发1次後解除)』(3回合)丶使自身获得嘲讽效果(3回合)(被攻击1次後解除)，并使自身变为防御状态, CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `这一棒，贯穿脑门！`,
                    description: `使目标受到伤害增加25%，以自身攻击力278%对目标造成伤害，并使自身获得『被攻击时，触发以自身攻击力178%对目标进行反击(触发1次後解除)』(3回合)丶使自身获得嘲讽效果(3回合)(被攻击1次後解除)，并使自身变为防御状态, CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `这一棒，贯穿脑门！`,
                    description: `使目标受到伤害增加25%，以自身攻击力300%对目标造成伤害，并使自身获得『被攻击时，触发以自身攻击力200%对目标进行反击(触发1次後解除)』(3回合)丶使自身获得嘲讽效果(3回合)(被攻击1次後解除)，并使自身变为防御状态, CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `跨杀小啦！`,
                    description: `以自身攻击力89%对目标造成伤害，并使自身受到伤害减少17%(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `圣夜的继承者`,
                    description: `我方全体最大HP增加20%\n我方全体免疫嘲讽效果\n我方全体获得「队伍中至少有3名守护者时，发动『攻击力增加140%』」\n我方全体获得「队伍中至少有3名守护者时，发动『造成伤害增加100%』」\n我方全体获得「队伍中至少有3名守护者时，发动『《江湖在走，球棒要有！》』」\n我方全体获得「队伍中至少有3名守护者时，发动『《没有很可以》』」 \n\n《江湖在走，球棒要有！》\n被攻击时，触发「使目标受到触发技伤害增加20%(最多10层)」\n\n《没有很可以》\n必杀时，触发「使自身获得《但你惹不起！》」\n\n《但你惹不起！》\n被攻击时，触发「以自身攻击力250%对目标进行反击(触发1次後解除)」(3回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `狼若回头！`,
                    description: `免疫必杀技CD变动效果\n第1回合＆每经过3回合时，触发「使自身获得2层《喧哗上等！》」\n被攻击时，触发「使自身获得1层《喧哗上等！》」\n\n《喧哗上等！》\n使自身获得文字效果《喧哗上等！》(最多10层)\n使自身攻击力增加5%(最多10层)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `不是报恩！`,
                    description: `当自身《暄晔上等！》层数≥3层时，发动「造成伤害增加5%」\n当自身《喧晔上等！》层数≥6层时，发动「造成伤害增加10%」\n当自身《暄晔上等！》层数≥9层时，发动「造成伤害增加15%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `就是爆头！`,
                    description: `当自身《喧哗上等！》层数=10层时，发动「《夜露死苦！》」\n\n《夜露死苦！》\n行动时，触发「使自身获得《巴格耶鹿！》」\n\n《巴格耶鹿！》\n被攻击时，触发「以自身攻击力100%对目标进行反击(被攻击1次後解除)」(1回合)`
                },
                [SkillType.GENERAL_1]: {
                    name: `伤害+ (6潜)`,
                    description: `使自身造成伤害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹 (12潜)`,
                    description: `使自身免疫麻痹`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Forehead Strike!`,
                    description: `Increase the target's Damage Taken by 0/0/20/25/25% for 3 turns, damage the target (211/234/256/278/300% Attack Power), then grant yourself the following effect: When attacked, perform a counter attack on the target for 3 turns (156/156/178/178/200% Attack Power) (removes after triggering once). Gain Taunt for 3 turns (removes after being attacked) and enter Guard Stance. CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `Forehead Strike!`,
                    description: `Damage the target (211% Attack Power), grant yourself the following effect: When attacked, perform a counter attack on the target for 3 turns (156% Attack Power) (removes after triggering once). Gain Taunt for 3 turns (removes after being attacked) and enter Guard Stance. CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `Forehead Strike!`,
                    description: `Damage the target (234% Attack Power), grant yourself the following effect: When attacked, perform a counter attack on the target for 3 turns (156% Attack Power) (removes after triggering once). Gain Taunt for 3 turns (removes after being attacked) and enter Guard Stance. CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `Forehead Strike!`,
                    description: `Increase the target's Damage Taken by 20% for 3 turns, damage the target (256% Attack Power), then grant yourself the following effect: When attacked, perform a counter attack on the target for 3 turns (178% Attack Power) (removes after triggering once). Gain Taunt for 3 turns (removes after being attacked) and enter Guard Stance. CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `Forehead Strike!`,
                    description: `Increase the target's Damage Taken by 20% for 3 turns, damage the target (278% Attack Power), then grant yourself the following effect: When attacked, perform a counter attack on the target for 3 turns (178% Attack Power) (removes after triggering once). Gain Taunt for 3 turns (removes after being attacked) and enter Guard Stance. CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `Forehead Strike!`,
                    description: `Increase the target's Damage Taken by 25% for 3 turns, damage the target (300% Attack Power), then grant yourself the following effect: When attacked, perform a counter attack on the target for 3 turns (200% Attack Power) (removes after triggering once). Gain Taunt for 3 turns (removes after being attacked) and enter Guard Stance. CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `What'cha Lookin' At!?`,
                    description: `Damage the target (89% Attack Power) and decrease your Damage Taken by 17% for 1 turn.`
                },
                [SkillType.LEADER]: {
                    name: `Heir of Holy Night`,
                    description: `Increase the party's max HP by 20%\nParty gains immunity to Taunt\nWhen your party has 3 or more Guardians, increase the party's Attack Power by 140%.\nWhen your party has 3 or more Guardians, increase the party's Damage Output by 100%.\nWhen your party has 3 or more Guardians, trigger "Always Keep the Bat Ready!".\nWhen your party has 3 or more Guardians, trigger "Tougher Than You Think".\n\n"Always Keep the Bat Ready!"\nWhen attacked, increase the target's Damage Taken from trigger skills by 20% (max 10 stacks).\n\n"Tougher Than You Think"\nOn Ultimate Skill, gain "You Better Not Upset Me!".\n\n"You Better Not Upset Me!"\nWhen attacked, perform a counter attack on the target for 3 turns (250% Attack Power) (removes after triggering once).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Wolf Turns Head!`,
                    description: `Gain immunity to CD changes\nOn the 1st turn & every 3 turns, gain 2 stacks of "Don't Mess with Me!"\nWhen attacked, gain 1 stack of "Don't Mess with Me!".\n\n"Don't Mess with Me!"\nGain "Don't Mess with Me!" mark (max 10 stacks)\nIncrease your Attack Power by 5% (max 10 stacks)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Ain't No Repayment!`,
                    description: `When you have ≧ 3 stacks of "Don't Mess with Me!", increase your Damage Output by 5%.\nWhen you have ≧ 6 stacks of "Don't Mess with Me!", increase your Damage Output by 10%.\nWhen you have ≧ 9 stacks of "Don't Mess with Me!", increase your Damage Output by 15%.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Headshot Bullseye!`,
                    description: `When you have 10 stacks of "Don't Mess with Me!", trigger "You will regret that!"\n\n"You will regret that!"\nWhen performing an action, gain "TO THE FACE!"\n\n"TO THE FACE!"\nWhen attacked, perform a counter attack on the target for 1 turn. (100% Attack Power) (removes after triggering once)`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage+`,
                    description: `Increase your Damage Output by 7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity`,
                    description: `Gain immunity to Paralysis`
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