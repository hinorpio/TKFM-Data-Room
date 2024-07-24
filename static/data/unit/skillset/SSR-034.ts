import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10054: SkillSet[] =  [
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
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP30/40/40/50/50%，獲得嘲諷效果(2回合)並變為防禦狀態，再使我方全體受到傷害減少0/0/0/5/10%(1回合)，CD: 4 [3絆 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP30%，獲得嘲諷效果(2回合)並變為防禦狀態，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP40%，獲得嘲諷效果(2回合)並變為防禦狀態，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP40%，獲得嘲諷效果(2回合)並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP50%，獲得嘲諷效果(2回合)並變為防禦狀態，再使我方全體受到傷害減少5%(1回合)CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP50%，獲得嘲諷效果(2回合)並變為防禦狀態，再使我方全體受到傷害減少10%(1回合)CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `花鹿在奔跑`,
                    description: `以自身攻擊力50%對目標造成傷害，再使自身變為防禦狀態`
                },
                [SkillType.LEADER]: {
                    name: `聖夜的守護者`,
                    description: `必殺時，自身觸發「受到傷害減少20%(1回合)」\n第一回合時，觸發「使我方全體每回合以攻擊力70%進行治療(50回合)」\n第一回合時，觸發「使我方站位1、2、5角色獲得『《奇蹟使者》』」\n\n《奇蹟使者》\n「攻擊力增加40%(最多1層)」、「必殺技傷害增加20%(最多1層)」、「普攻傷害增加40%(最多1層)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `聖誕精神`,
                    description: `必殺時，觸發「《聖誕極道》」\n\n《聖誕極道》\n使我方站位1、2角色獲得「受到控場機率減少75%(1回合)」、「攻擊力增加30%(2回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `聲控雪撬`,
                    description: `必殺時，觸發「使我方站位2和站位5角色獲得『受到傷害減少20%(1回合)』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `馴鹿祝福`,
                    description: `HP增加10%\n被攻擊時，觸發「以自身基礎攻擊力100%對我方全體進行治療」`
                },
                [SkillType.GENERAL_1]: {
                    name: `受到傷害減少 (6潛)`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP30/40/40/50/50%，获得嘲讽效果(2回合)并变为防御状态，再使我方全体受到伤害减少0/0/0/5/10%(1回合)，CD: 4 [3绊 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP30%，获得嘲讽效果(2回合)并变为防御状态，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP40%，获得嘲讽效果(2回合)并变为防御状态，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP40%，获得嘲讽效果(2回合)并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP50%，获得嘲讽效果(2回合)并变为防御状态，再使我方全体受到伤害减少5%(1回合)CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP50%，获得嘲讽效果(2回合)并变为防御状态，再使我方全体受到伤害减少10%(1回合)CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `花鹿在奔跑`,
                    description: `以自身攻击力50%对目标造成伤害，再使自身变为防御状态`
                },
                [SkillType.LEADER]: {
                    name: `圣夜的守护者`,
                    description: `必杀时，自身触发「受到伤害减少20%(1回合)」\n第一回合时，触发「使我方全体每回合以攻击力70%进行治疗(50回合)」\n第一回合时，触发「使我方站位1丶2丶5角色获得『《奇迹使者》』」\n\n《奇迹使者》\n「攻击力增加40%(最多1层)」丶「必杀技伤害增加20%(最多1层)」丶「普攻伤害增加40%(最多1层)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `圣诞精神`,
                    description: `必杀时，触发「《圣诞极道》」\n\n《圣诞极道》\n使我方站位1丶2角色获得「受到控场机率减少75%(1回合)」丶「攻击力增加30%(2回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `声控雪撬`,
                    description: `必杀时，触发「使我方站位2和站位5角色获得『受到伤害减少20%(1回合)』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `驯鹿祝福`,
                    description: `HP增加10%\n被攻击时，触发「以自身基础攻击力100%对我方全体进行治疗」`
                },
                [SkillType.GENERAL_1]: {
                    name: `受到伤害减少 (6潜)`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
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