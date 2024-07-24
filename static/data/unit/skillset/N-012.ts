import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10912: SkillSet[] =  [
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
        dispatchSkill: { type: DispatchSkillType.EMPTY_HAND, level: 1 },
        skill: {
            [Locale.tc]: {
                [SkillType.SKILL_S]: {
                    name: `自癒體質`,
                    description: `以最大HP50%對自身進行治療，並獲得"每回合以自身最大HP8.0/8.5/9.0/9.5/10.0%進行治療(5回合)"效果，CD: 5`
                },
                [SkillType.SKILL_1]: {
                    name: `自癒體質`,
                    description: `以最大HP50%對自身進行治療，並獲得"每回合以自身最大HP8.0%進行治療(5回合)"效果，CD: 5`
                },
                [SkillType.SKILL_2]: {
                    name: `自癒體質`,
                    description: `以最大HP50%對自身進行治療，並獲得"每回合以自身最大HP8.5%進行治療(5回合)"效果，CD: 5`
                },
                [SkillType.SKILL_3]: {
                    name: `自癒體質`,
                    description: `以最大HP50%對自身進行治療，並獲得"每回合以自身最大HP9.0%進行治療(5回合)"效果，CD: 5`
                },
                [SkillType.SKILL_4]: {
                    name: `自癒體質`,
                    description: `以最大HP50%對自身進行治療，並獲得"每回合以自身最大HP9.5%進行治療(5回合)"效果，CD: 5`
                },
                [SkillType.SKILL_5]: {
                    name: `自癒體質`,
                    description: `以最大HP50%對自身進行治療，並獲得"每回合以自身最大HP10.0%進行治療(5回合)"效果，CD: 5`
                },
                [SkillType.ATTACK]: {
                    name: `撞擊`,
                    description: `以攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `水之療癒`,
                    description: `使我方水屬性角色被治療時回復量增加15%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `腐蝕黏液`,
                    description: `攻擊時，觸發"使目標攻擊力減少5%(2回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `快速癒合`,
                    description: `使自身被治療時回復量增加12.5%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `強蝕黏液`,
                    description: `攻擊時，觸發"使目標受到傷害增加5%(2回合)"效果`
                },
                [SkillType.DISPATCH]: {
                    name: `幸運兒(空手而歸↓) (3潛)`,
                    description: `進行派遣時，微量降低空手而歸機率(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺 (6潛)`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `自愈体质`,
                    description: `以最大HP50%对自身进行治疗，并获得"每回合以自身最大HP8.0/8.5/9.0/9.5/10.0%进行治疗(5回合)"效果，CD: 5`
                },
                [SkillType.SKILL_1]: {
                    name: `自愈体质`,
                    description: `以最大HP50%对自身进行治疗，并获得"每回合以自身最大HP8.0%进行治疗(5回合)"效果，CD: 5`
                },
                [SkillType.SKILL_2]: {
                    name: `自愈体质`,
                    description: `以最大HP50%对自身进行治疗，并获得"每回合以自身最大HP8.5%进行治疗(5回合)"效果，CD: 5`
                },
                [SkillType.SKILL_3]: {
                    name: `自愈体质`,
                    description: `以最大HP50%对自身进行治疗，并获得"每回合以自身最大HP9.0%进行治疗(5回合)"效果，CD: 5`
                },
                [SkillType.SKILL_4]: {
                    name: `自愈体质`,
                    description: `以最大HP50%对自身进行治疗，并获得"每回合以自身最大HP9.5%进行治疗(5回合)"效果，CD: 5`
                },
                [SkillType.SKILL_5]: {
                    name: `自愈体质`,
                    description: `以最大HP50%对自身进行治疗，并获得"每回合以自身最大HP10.0%进行治疗(5回合)"效果，CD: 5`
                },
                [SkillType.ATTACK]: {
                    name: `撞击`,
                    description: `以攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `水之疗愈`,
                    description: `使我方水属性角色被治疗时回复量增加15%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `腐蚀黏液`,
                    description: `攻击时，触发"使目标攻击力减少5%(2回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `快速愈合`,
                    description: `使自身被治疗时回复量增加12.5%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `强蚀黏液`,
                    description: `攻击时，触发"使目标受到伤害增加5%(2回合)"效果`
                },
                [SkillType.DISPATCH]: {
                    name: `幸运儿(空手而归↓) (3潜)`,
                    description: `进行派遣时，微量降低空手而归机率(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹 (6潜)`,
                    description: `使自身免疫麻痹`
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