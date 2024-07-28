import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10022: SkillSet[] =  [
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
                    name: `開膛破肚`,
                    description: `以自身攻擊力33/37.6/42.2/46.8/51.4%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加8.75/10/11.25/12.5/15%(最多8層)」(4回合)，並使目標受到傷害增加0/0/10/20/30%(最多1層)，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `開膛破肚`,
                    description: `以自身攻擊力33%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加8.75%(最多8層)」(4回合)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `開膛破肚`,
                    description: `以自身攻擊力37.6%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加10%(最多8層)」(4回合)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `開膛破肚`,
                    description: `以自身攻擊力42.2%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加11.25%(最多8層)」(4回合)，並使目標受到傷害增加10%(最多1層)，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `開膛破肚`,
                    description: `以自身攻擊力46.8%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加12.5%(最多8層)」(4回合)，並使目標受到傷害增加20%(最多1層)，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `開膛破肚`,
                    description: `以自身攻擊力51.4%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加15%(最多8層)」(4回合)，並使目標受到傷害增加30%(最多1層)，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `嚙殺`,
                    description: `以自身攻擊力20%對目標造成傷害5次`
                },
                [SkillType.LEADER]: {
                    name: `戰爭狂氣`,
                    description: `我方全體最大HP增加20%\n我方全體必殺技傷害增加50%\n我方全體攻擊者、妨礙者、守護者攻擊力增加40%\n我方全體攻擊者、妨礙者、守護者造成傷害增加25%\n\n我方全體獲得，當我方隊伍治療者有1人以上時，發動「被治療時回復量減少500%」(負面效果)\n\n第一回合時，觸發「以自身攻擊力80%每回合對我方全體造成治療(50回合)」 \n防禦時，觸發「使我方全體受到持續型治療增加100%(1回合)」\n必殺時，觸發「以自身攻擊力200%對我方全體造成治療」\n\n自身以外我方全體攻擊者、妨礙者、守護者獲得《援護射擊》\n\n《援護射擊》\n 必殺時，觸發「使我方站位1角色獲得《虐殺時間到！》」\n\n《虐殺時間到！》\n攻擊力增加90%(1回合)\n必殺時，追加「以自身攻擊力80%對目標造成傷害」(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `蓄勢待發`,
                    description: `防禦時，觸發「使自身攻擊力增加100%(最多1層)」\n必殺時，觸發「消除自身《蓄勢待發》的攻擊力增加效果 」\n必殺時，觸發「消除目標身上《開膛破肚》的受到『狂犬 諾蕾蒂」傷害增加效果」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `緊咬不放`,
                    description: `必殺時，觸發「使自身造成傷害增加12%(最多5層)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `狂犬`,
                    description: `普攻時，觸發「使自身獲得《腎上腺素》」\n\n《腎上腺素》\n必殺技傷害增加50%(2回合)\n必殺時，追加「以自身攻擊力100%對目標造成傷害」(2回合)`
                },
                [SkillType.GENERAL_1]: {
                    name: `必殺追擊+ (6潛)`,
                    description: `必殺時，追加「以自身攻擊力30%對目標造成傷害」`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潛)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力33/37.6/42.2/46.8/51.4%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加8.75/10/11.25/12.5/15%(最多8层)」(4回合)，并使目标受到伤害增加0/0/10/20/30%(最多1层)，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力33%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加8.75%(最多8层)」(4回合)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力37.6%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加10%(最多8层)」(4回合)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力42.2%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加11.25%(最多8层)」(4回合)，并使目标受到伤害增加10%(最多1层)，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力46.8%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加12.5%(最多8层)」(4回合)，并使目标受到伤害增加20%(最多1层)，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力51.4%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加15%(最多8层)」(4回合)，并使目标受到伤害增加30%(最多1层)，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `啮杀`,
                    description: `以自身攻击力20%对目标造成伤害5次`
                },
                [SkillType.LEADER]: {
                    name: `战争狂气`,
                    description: `我方全体最大HP增加20%\n我方全体必杀技伤害增加50%\n我方全体攻击者丶妨碍者丶守护者攻击力增加40%\n我方全体攻击者丶妨碍者丶守护者造成伤害增加25%\n\n我方全体获得，当我方队伍治疗者有1人以上时，发动「被治疗时回复量减少500%」(负面效果)\n\n第一回合时，触发「以自身攻击力80%每回合对我方全体造成治疗(50回合)」 \n防御时，触发「使我方全体受到持续型治疗增加100%(1回合)」\n必杀时，触发「以自身攻击力200%对我方全体造成治疗」\n\n自身以外我方全体攻击者丶妨碍者丶守护者获得《援护射击》\n\n《援护射击》\n 必杀时，触发「使我方站位1角色获得《虐杀时间到！》」\n\n《虐杀时间到！》\n攻击力增加90%(1回合)\n必杀时，追加「以自身攻击力80%对目标造成伤害」(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `蓄势待发`,
                    description: `防御时，触发「使自身攻击力增加100%(最多1层)」\n必杀时，触发「消除自身《蓄势待发》的攻击力增加效果 」\n必杀时，触发「消除目标身上《开膛破肚》的受到『狂犬 诺蕾蒂」伤害增加效果」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `紧咬不放`,
                    description: `必杀时，触发「使自身造成伤害增加12%(最多5层)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `狂犬`,
                    description: `普攻时，触发「使自身获得《肾上腺素》」\n\n《肾上腺素》\n必杀技伤害增加50%(2回合)\n必杀时，追加「以自身攻击力100%对目标造成伤害」(2回合)`
                },
                [SkillType.GENERAL_1]: {
                    name: `必杀追击+ (6潜)`,
                    description: `必杀时，追加「以自身攻击力30%对目标造成伤害」`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潜)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Gutripper`,
                    description: ``
                },
                [SkillType.SKILL_1]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (33% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 8.75% (max 8 stacks) for 4 turns. CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (37.6% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 10% (max 8 stacks) for 4 turns. CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (42.2% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 11.25% (max 8 stacks) for 4 turns. Increase the target's Damage Taken by 10%. (max 1 stack) CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (46.8% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 12.5% (max 8 stacks) for 4 turns. Increase the target's Damage Taken by 20%. (max 1 stack) CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (51.4% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 15% (max 8 stacks) for 4 turns. Increase the target's Damage Taken by 30%. (max 1 stack) CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Ravage`,
                    description: `Damage the target 5 times (20% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `War Fury`,
                    description: `Increase the party's max HP by 20%.\nIncrease the party's Ultimate Skill Power by 50%.\nIncrease all allied Attackers, Obstructors, and Defenders' Attack Power by 40%\nIncrease all allied Attackers, Obstructors, and Defenders' Damage Output by 25%\n\nGain the party the following effect: When there are 1 or more Healers in the party, decrease the Recovery Rate by 500%. (Debuff)\n\nOn the 1st turn, heal the party for 80% of your Attack Power every turn for 50 turns.\nWhen in Guard Stance, increase the party's heal overtime effect by 100% for 1 turn.\nOn Ultimate Skill, heal the party for 200% of your Attack Power.\n\nOther allied Attackers, Obstructors, and Defenders gain "Covering Fire."\n\n"Covering Fire"\nOn Ultimate Skill, the 1st position ally gains "Time to Kill!"\n\n"Time to Kill!"\nIncrease Attack Power by 90% for 1 turn.\nOn Ultimate Skill, deal additional damage to the target for 1 turn (80% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Ready to Strike`,
                    description: `When in Guard Stance, increase your Attack Power by 100%. (max 1 stack)\nOn Ultimate Skill, remove your "Ready to Strike" attack buff.\nOn Ultimate Skill, remove the target's "Gutripper" effect: increase the Damage Taken from "Crazed Dog Noma."`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Unyielding Bite`,
                    description: `On Ultimate Skill, increase your Damage Output by 12%. (max 5 stacks)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Crazed Dog`,
                    description: `On Basic Attack, gain yourself "Adrenaline."\n\n"Adrenaline"\nIncrease Ultimate Skill Power by 50% for 2 turns.\nOn Ultimate Skill, deal additional damage to the target for 2 turns (100% Attack Power).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Ultimate Skill Pursuit+`,
                    description: `On Ultimate Skill, deal additional damage to the target (30% Attack Power).`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain immunity to Sleep.`
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