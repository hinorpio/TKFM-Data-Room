import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10140: SkillSet[] =  [
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
                    name: `真神懲戒`,
                    description: `以自身攻擊力330/376/422/468/514%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少10/12.5/15/17.5/20%(2回合)，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `真神懲戒`,
                    description: `以自身攻擊力330%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少10%(2回合)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `真神懲戒`,
                    description: `以自身攻擊力376%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少12.5%(2回合)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `真神懲戒`,
                    description: `以自身攻擊力422%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少15%(2回合)，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `真神懲戒`,
                    description: `以自身攻擊力468%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少17.5%(2回合)，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `真神懲戒`,
                    description: `以自身攻擊力514%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少20%(2回合)，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `虔魂禱告`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `儀式主祭`,
                    description: `自身最大HP增加50%\n我方全體攻擊力增加100%\n自身必殺時，觸發「以自身攻擊力400%對目標造成傷害」\n自身攻擊時，觸發「以自身最大HP1%對自身以外我方全體造成傷害」\n自身造成傷害時會以傷害值25%回復自身HP\n我方站位2、站位3獲得《獻上牲禮》\n\n《獻上牲禮》\n造成傷害減少300%\n攻擊時，觸發「以自身基礎攻擊力125%使我方站位1角色攻擊力增加(1回合)」\n必殺時，觸發「使目標受到闇屬性傷害增加14%(2回合)」\n第一回合時，觸發「使自身獲得《融合祈願》」\n\n《融合祈願》\n當自身是攻擊者時：\n行動時，觸發「使我方站位1角色獲得必殺時，觸發「以自身最大HP100%對目標造成傷害、再以自身攻擊力150%對目標造成傷害」(50回合)、造成傷害增加25%(50回合)」(1回合)\n當自身是妨礙者時：\n行動時，觸發「使我方站位1角色獲得攻擊時，觸發「使目標被治療回復量減少50%(2回合)」(50回合)、必殺時，觸發「使目標受到傷害增加45%(9回合)」(50回合)、造成傷害增加25%(50回合)」(1回合)\n當自身是守護者、治療者、輔助者時：\n自身攻擊力減少600%(50回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `溫馨村落`,
                    description: `使我方全體必殺技傷害增加30%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `蒼白之女`,
                    description: `造成傷害增加10%\n必殺時，觸發「使我方全體造成傷害增加20%(1回合)」\n防禦時，觸發「使我方全體被治療時回復量增加20%(1回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `座標定導`,
                    description: `自身獲得《降臨儀式》\n\n《降臨儀式》\n普攻時，觸發「使自身『降臨值(最多10層)』增加1層」\n必殺時，觸發「使自身『降臨值(最多10層)』增加3層」\n自身「降臨值」層數=10層時，開數《真神降臨》技能 \n\n《真神降臨》\n普攻時，觸發「使目標獲得3層受到傷害增加5%(最多9層)」\n必殺時，觸發「以自身最大HP50%對目標造成傷害」`
                },
                [SkillType.GENERAL_1]: {
                    name: `傷害+ (6潛)`,
                    description: `使自身造成傷害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `完全免疫 (12潛)`,
                    description: `免疫睡眠\n免疫麻痺\n免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `真神惩戒`,
                    description: `以自身攻击力330/376/422/468/514%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少10/12.5/15/17.5/20%(2回合)，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `真神惩戒`,
                    description: `以自身攻击力330%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少10%(2回合)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `真神惩戒`,
                    description: `以自身攻击力376%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少12.5%(2回合)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `真神惩戒`,
                    description: `以自身攻击力422%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少15%(2回合)，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `真神惩戒`,
                    description: `以自身攻击力468%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少17.5%(2回合)，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `真神惩戒`,
                    description: `以自身攻击力514%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少20%(2回合)，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `虔魂祷告`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `仪式主祭`,
                    description: `自身最大HP增加50%\n我方全体攻击力增加100%\n自身必杀时，触发「以自身攻击力400%对目标造成伤害」\n自身攻击时，触发「以自身最大HP1%对自身以外我方全体造成伤害」\n自身造成伤害时会以伤害值25%回复自身HP\n我方站位2丶站位3获得《献上牲礼》\n\n《献上牲礼》\n造成伤害减少300%\n攻击时，触发「以自身基础攻击力125%使我方站位1角色攻击力增加(1回合)」\n必杀时，触发「使目标受到闇属性伤害增加14%(2回合)」\n第一回合时，触发「使自身获得《融合祈愿》」\n\n《融合祈愿》\n当自身是攻击者时：\n行动时，触发「使我方站位1角色获得必杀时，触发「以自身最大HP100%对目标造成伤害丶再以自身攻击力150%对目标造成伤害」(50回合)丶造成伤害增加25%(50回合)」(1回合)\n当自身是妨碍者时：\n行动时，触发「使我方站位1角色获得攻击时，触发「使目标被治疗回复量减少50%(2回合)」(50回合)丶必杀时，触发「使目标受到伤害增加45%(9回合)」(50回合)丶造成伤害增加25%(50回合)」(1回合)\n当自身是守护者丶治疗者丶辅助者时：\n自身攻击力减少600%(50回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `温馨村落`,
                    description: `使我方全体必杀技伤害增加30%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `苍白之女`,
                    description: `造成伤害增加10%\n必杀时，触发「使我方全体造成伤害增加20%(1回合)」\n防御时，触发「使我方全体被治疗时回复量增加20%(1回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `座标定导`,
                    description: `自身获得《降临仪式》\n\n《降临仪式》\n普攻时，触发「使自身『降临值(最多10层)』增加1层」\n必杀时，触发「使自身『降临值(最多10层)』增加3层」\n自身「降临值」层数=10层时，开数《真神降临》技能 \n\n《真神降临》\n普攻时，触发「使目标获得3层受到伤害增加5%(最多9层)」\n必杀时，触发「以自身最大HP50%对目标造成伤害」`
                },
                [SkillType.GENERAL_1]: {
                    name: `伤害+ (6潜)`,
                    description: `使自身造成伤害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `完全免疫 (12潜)`,
                    description: `免疫睡眠\n免疫麻痹\n免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Starry Return`,
                    description: `Damage the target (330/376/422/468/514% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 10/12.5/15/17.5/20% for 2 turns. CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Starry Return`,
                    description: `Damage the target (330% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 10% for 2 turns. CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Starry Return`,
                    description: `Damage the target (376% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 12.5% for 2 turns. CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Starry Return`,
                    description: `Damage the target (422% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 15% for 2 turns. CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Starry Return`,
                    description: `Damage the target (468% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 17.5% for 2 turns. CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Starry Return`,
                    description: `Damage the target (514% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 20% for 2 turns. CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `The Profane Voice`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Twisted Ritual`,
                    description: `Increase your max HP by 50%.\nIncrease the party's Attack Power by 100%.\nOn Ultimate Skill, damage the target (400% Attack Power).\nOn Attack, damage other allies for 1% of your max HP.\nRecover your HP for 25% of your damage when you deal damage.\nThe 2nd and 3rd position allies gain "Living Sacrifice".\n\n"Living Sacrifice"\nDecrease Damage Output by 300%.\nOn Attack, increase the 1st position ally's Attack Power for 125% of your Basic Attack Power for 1 turn.\nOn Ultimate Skill, increase the target's Damage Taken from Dark attacks by 14% for 2 turns.\nOn the 1st turn, gain yourself "Consciousness Detachment".\n\n"Consciousness Detachment"\nWhen you're the Attacker:\nThis turn, when performing an action, the 1st position ally gains the following effects for 50 turns: On Ultimate Skill, damage the target for 100% of your max HP, then damage the target (150% Attack Power); increase Damage Output by 25%.\nWhen you're the Obstructor:\nThis turn, when performing an action, the 1st position ally gains the following effects for 50 turns: On Attack, decrease the target's Recovery Rate by 50% for 2 turns; On Ultimate Skill, increase the target's Damage Taken by 45% for 9 turns; increase Damage Output by 25%.\nWhen you're the Defender, Healer, or Supporter:\nDecrease your Attack Power by 600% for 50 turns.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Abyssal Manor`,
                    description: `Increase the party's Ultimate Skill Power by 30%.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `The Unnameable Form`,
                    description: `Increase Damage Output by 10%.\nOn Ultimate Skill, increase the party's Damage Output by 20% for 1 turn.\nWhen in Guard Stance, increase the party's Recovery Rate by 20% for 1 turn.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Waiting for You in Dreams`,
                    description: `Gain yourself "Preparation for Descent"\n\n"Preparation for Descent"\nOn Basic Attack, increase your Descent Value by 1 stack (max 10 stacks).\nOn Ultimate Skill, increase your Descent Value by 3 stacks (max 10 stacks).\nWhen your Descent Value is equal to 10 stacks, gain "Supreme One Descends."\n\n"Supreme One Descends"\nOn Basic Attack, the target gains 3 stacks of increase Damage Taken by 5% (max 9 stacks).\nOn Ultimate Skill, damage the target for 50% of your max HP.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage+`,
                    description: `Increase your damage output by 7.5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Complete Immunity`,
                    description: `Sleep Immunity\nParalysis Immunity\nSilence Immunity`
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