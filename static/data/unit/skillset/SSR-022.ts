import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10033: SkillSet[] =  [
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
                    name: `睡夢侵襲`,
                    description: `以100/110/120/130/150%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加100/110/120/130/150%，受傷後解除，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `睡夢侵襲`,
                    description: `以100%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加100%，受傷後解除，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `睡夢侵襲`,
                    description: `以110%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加110%，受傷後解除，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `睡夢侵襲`,
                    description: `以120%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加120%，受傷後解除，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `睡夢侵襲`,
                    description: `以130%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加130%，受傷後解除，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `睡夢侵襲`,
                    description: `以150%機率對當前敵對目標造成睡眠效果2回合，無法行動且受到傷害增加150%，受傷後解除，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `惡夢`,
                    description: `使當前敵對目標受到普攻傷害增加10%(3回合)、受到必殺傷害增加5%(3回合)；以自身攻擊力50%給予自身護盾(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `安眠曲`,
                    description: `使我方全體獲得"普攻時，觸發"以20%機率對當前敵對目標造成睡眠效果1回合，無法行動且受到傷害增加30%，受傷後解除"效果" \n使自身以外所有隊員獲得"普攻時，觸發"使當前敵對目標被睡眠機率增加20%(1回合)"效果"`
                },
                [SkillType.PASSIVE_1]: {
                    name: `安眠曲`,
                    description: `普攻時，觸發"使當前敵對目標被睡眠機率增加40%(1回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `再睡一下…`,
                    description: `攻擊時，觸發"使當前敵對目標攻擊力減少15%(2回合)"效果\n必殺時，觸發"使當前敵對目標必殺技CD倒數停止(1回合)"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `午夜夢迴`,
                    description: `每Wave第1回合時，觸發"使敵方全體造成傷害減少10%(50回合)"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `減傷+ (6潛)`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺 (12潛)`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `睡梦侵袭`,
                    description: `以100/110/120/130/150%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加100/110/120/130/150%，受伤後解除，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `睡梦侵袭`,
                    description: `以100%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加100%，受伤後解除，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `睡梦侵袭`,
                    description: `以110%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加110%，受伤後解除，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `睡梦侵袭`,
                    description: `以120%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加120%，受伤後解除，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `睡梦侵袭`,
                    description: `以130%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加130%，受伤後解除，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `睡梦侵袭`,
                    description: `以150%机率对当前敌对目标造成睡眠效果2回合，无法行动且受到伤害增加150%，受伤後解除，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `恶梦`,
                    description: `使当前敌对目标受到普攻伤害增加10%(3回合)丶受到必杀伤害增加5%(3回合)；以自身攻击力50%给予自身护盾(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `安眠曲`,
                    description: `使我方全体获得"普攻时，触发"以20%机率对当前敌对目标造成睡眠效果1回合，无法行动且受到伤害增加30%，受伤後解除"效果" \n使自身以外所有队员获得"普攻时，触发"使当前敌对目标被睡眠机率增加20%(1回合)"效果"`
                },
                [SkillType.PASSIVE_1]: {
                    name: `安眠曲`,
                    description: `普攻时，触发"使当前敌对目标被睡眠机率增加40%(1回合)"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `再睡一下…`,
                    description: `攻击时，触发"使当前敌对目标攻击力减少15%(2回合)"效果\n必杀时，触发"使当前敌对目标必杀技CD倒数停止(1回合)"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `午夜梦回`,
                    description: `每Wave第1回合时，触发"使敌方全体造成伤害减少10%(50回合)"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `减伤+ (6潜)`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹 (12潜)`,
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