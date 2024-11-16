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
                    name: `幸運兒(空手而歸↓)`,
                    description: `進行派遣時，微量降低空手而歸機率(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
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
                    name: `幸运儿(空手而归↓)`,
                    description: `进行派遣时，微量降低空手而归机率(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹`,
                    description: `使自身免疫麻痹`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Body Conscious`,
                    description: `Recover 50% HP. Then, recover 8.0/8.5/9.0/9.5/10.0% HP every turn for 5 turns. (CD:5)`
                },
                [SkillType.SKILL_1]: {
                    name: `Body Conscious`,
                    description: `Recover 50% HP. Then, recover 8.0% HP every turn for 5 turns. (CD:5)`
                },
                [SkillType.SKILL_2]: {
                    name: `Body Conscious`,
                    description: `Recover 50% HP. Then, recover 8.5% HP every turn for 5 turns. (CD:5)`
                },
                [SkillType.SKILL_3]: {
                    name: `Body Conscious`,
                    description: `Recover 50% HP. Then, recover 9.0% HP every turn for 5 turns. (CD:5)`
                },
                [SkillType.SKILL_4]: {
                    name: `Body Conscious`,
                    description: `Recover 50% HP. Then, recover 9.5% HP every turn for 5 turns. (CD:5)`
                },
                [SkillType.SKILL_5]: {
                    name: `Body Conscious`,
                    description: `Recover 50% HP. Then, recover 10.0% HP every turn for 5 turns. (CD:5)`
                },
                [SkillType.ATTACK]: {
                    name: `Smash`,
                    description: `Damage target (100% Attack Power)`
                },
                [SkillType.LEADER]: {
                    name: `Water Healing`,
                    description: `Increase Water ally's Recovery Rate by 15%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Foul Ooze`,
                    description: `On Attack, decrease the target's Attack Power by 5% for 2 turns.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Quick Heal`,
                    description: `Increase Recovery Rate by 12.5%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Corrosive Sludge`,
                    description: `On Attack, target takes 5% more damage for 2 turns.`
                },
                [SkillType.DISPATCH]: {
                    name: `Lucky One (Empty Handed↓)`,
                    description: `When dispatched, very slightly decrease the chance of coming back empty-handed. (Global Effect)`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity (Self)`,
                    description: `Gain immunity to Paralysis`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `自己治療体質`,
                    description: `最大HPの50%分自分に治療を行い、さらに効果「毎ターン自分の最大HPの8.0/8.5/9.0/9.5/10.0%分自分に治療を行う(5ターン」を獲得する[CD:5]`
                },
                [SkillType.SKILL_1]: {
                    name: `自己治療体質`,
                    description: `最大HPの50%分自分に治療を行い、さらに効果「毎ターン自分の最大HPの8.0%分自分に治療を行う(5ターン」を獲得する[CD:5]`
                },
                [SkillType.SKILL_2]: {
                    name: `自己治療体質`,
                    description: `最大HPの50%分自分に治療を行い、さらに効果「毎ターン自分の最大HPの8.5%分自分に治療を行う(5ターン」を獲得する[CD:5]`
                },
                [SkillType.SKILL_3]: {
                    name: `自己治療体質`,
                    description: `最大HPの50%分自分に治療を行い、さらに効果「毎ターン自分の最大HPの9.0%分自分に治療を行う(5ターン」を獲得する[CD:5]`
                },
                [SkillType.SKILL_4]: {
                    name: `自己治療体質`,
                    description: `最大HPの50%分自分に治療を行い、さらに効果「毎ターン自分の最大HPの9.5%分自分に治療を行う(5ターン」を獲得する[CD:5]`
                },
                [SkillType.SKILL_5]: {
                    name: `自己治療体質`,
                    description: `最大HPの50%分自分に治療を行い、さらに効果「毎ターン自分の最大HPの10.0%分自分に治療を行う(5ターン」を獲得する[CD:5]`
                },
                [SkillType.ATTACK]: {
                    name: `ぶつかる`,
                    description: `100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `水の治療`,
                    description: `味方の水属性キャラクターが治療を受けるとき、回復HP量を15%増加させる`
                },
                [SkillType.PASSIVE_1]: {
                    name: `腐食粘液`,
                    description: `攻撃時、効果「ターゲットの攻撃力を5%減少させる(2ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `クイック治療`,
                    description: `自分が治療を受けるとき、回復HP量を12.5%増加させる`
                },
                [SkillType.PASSIVE_3]: {
                    name: `強酸粘液`,
                    description: `攻撃時、効果「ターゲットの受けるダメージを5%増加させる(2ターン)」を誘発する`
                },
                [SkillType.DISPATCH]: {
                    name: `ラッキーガール(手ぶらで帰還↓)`,
                    description: `派遣実行時、手ぶらで帰還する確率がわずかに低下する(全エリアで効果あり)`
                },
                [SkillType.GENERAL_2]: {
                    name: `麻痺無効`,
                    description: `自分を麻痺無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `자가 치유 체질`,
                    description: `최대 HP 50%만큼 자신을 치유, "매턴 자신의 최대 HP 8.0/8.5/9.0/9.5/10.0%만큼 자신을 치유(5턴)"효과 발동 [CD: 5]`
                },
                [SkillType.SKILL_1]: {
                    name: `자가 치유 체질`,
                    description: `최대 HP 50%만큼 자신을 치유, "매턴 자신의 최대 HP 8.0%만큼 자신을 치유(5턴)"효과 발동 [CD: 5]`
                },
                [SkillType.SKILL_2]: {
                    name: `자가 치유 체질`,
                    description: `최대 HP 50%만큼 자신을 치유, "매턴 자신의 최대 HP 8.5%만큼 자신을 치유(5턴)"효과 발동 [CD: 5]`
                },
                [SkillType.SKILL_3]: {
                    name: `자가 치유 체질`,
                    description: `최대 HP 50%만큼 자신을 치유, "매턴 자신의 최대 HP 9.0%만큼 자신을 치유(5턴)"효과 발동 [CD: 5]`
                },
                [SkillType.SKILL_4]: {
                    name: `자가 치유 체질`,
                    description: `최대 HP 50%만큼 자신을 치유, "매턴 자신의 최대 HP 9.5%만큼 자신을 치유(5턴)"효과 발동 [CD: 5]`
                },
                [SkillType.SKILL_5]: {
                    name: `자가 치유 체질`,
                    description: `최대 HP 50%만큼 자신을 치유, "매턴 자신의 최대 HP 10.0%만큼 자신을 치유(5턴)"효과 발동 [CD: 5]`
                },
                [SkillType.ATTACK]: {
                    name: `차지 어택`,
                    description: `공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `물의 치유`,
                    description: `아군 수속성 캐릭터가 받는 치유량 15% 증가`
                },
                [SkillType.PASSIVE_1]: {
                    name: `부식 점액`,
                    description: `공격 시, "타깃의 공격 데미지 5% 감소(2턴)"효과 발동`
                },
                [SkillType.PASSIVE_2]: {
                    name: `빠른 치유`,
                    description: `자신이 받는 치유량 12.5% 증가`
                },
                [SkillType.PASSIVE_3]: {
                    name: `강산 점액`,
                    description: `공격 시, "타깃이 받는 데미지 5% 증가(2턴)"효과 발동`
                },
                [SkillType.DISPATCH]: {
                    name: `행운아(빈손으로 귀환↓)`,
                    description: `파견 진행 시빈손으로 귀환확률 초소폭 감소(전지역 효과)`
                },
                [SkillType.GENERAL_2]: {
                    name: `마비 면역`,
                    description: `자신에게 마비 면역 효과`
                }
            }
        }
    },
]