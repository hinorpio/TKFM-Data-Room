import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10010: SkillSet[] =  [
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
                    name: `聖光守護`,
                    description: `以最大HP37.9/42.6/47.3/52.0/56.7%對自身施放護盾(1回合)，並獲得嘲諷效果(1回合)且變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `聖光守護`,
                    description: `以最大HP37.9%對自身施放護盾(1回合)，並獲得嘲諷效果(1回合)且變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `聖光守護`,
                    description: `以最大HP42.6%對自身施放護盾(1回合)，並獲得嘲諷效果(1回合)且變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `聖光守護`,
                    description: `以最大HP47.3%對自身施放護盾(1回合)，並獲得嘲諷效果(1回合)且變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `聖光守護`,
                    description: `以最大HP52.0%對自身施放護盾(1回合)，並獲得嘲諷效果(1回合)且變為防禦狀態，CD: 3`
                    },
                [SkillType.SKILL_5]: {
                    name: `聖光守護`,
                    description: `以最大HP56.7%對自身施放護盾(1回合)，並獲得嘲諷效果(1回合)且變為防禦狀態，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `斬擊`,
                    description: `以攻擊力50%對目標造成傷害，並以最大HP7.5%對自身施放護盾(2回合)`
                },
                [SkillType.LEADER]: {
                    name: `身先士卒的聖騎士長`,
                    description: `使雷歐娜最大HP增加50%，必殺技CD減少1回合`
                },
                [SkillType.PASSIVE_1]: {
                    name: `無懼之心`,
                    description: `使自身受到傷害減少10%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `永不退縮`,
                    description: `最大HP增加15%、被治療時回復量增加15%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `聖光騎士團之盾`,
                    description: `當前HP小於25%時，發動"受到傷害減少75%"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `減傷+ (6潛)`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潛)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `圣光守护`,
                    description: `以最大HP37.9/42.6/47.3/52.0/56.7%对自身施放护盾(1回合)，并获得嘲讽效果(1回合)且变为防御状态，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `圣光守护`,
                    description: `以最大HP37.9%对自身施放护盾(1回合)，并获得嘲讽效果(1回合)且变为防御状态，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `圣光守护`,
                    description: `以最大HP42.6%对自身施放护盾(1回合)，并获得嘲讽效果(1回合)且变为防御状态，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `圣光守护`,
                    description: `以最大HP47.3%对自身施放护盾(1回合)，并获得嘲讽效果(1回合)且变为防御状态，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `圣光守护`,
                    description: `以最大HP52.0%对自身施放护盾(1回合)，并获得嘲讽效果(1回合)且变为防御状态，CD: 3`
                    },
                [SkillType.SKILL_5]: {
                    name: `圣光守护`,
                    description: `以最大HP56.7%对自身施放护盾(1回合)，并获得嘲讽效果(1回合)且变为防御状态，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `斩击`,
                    description: `以攻击力50%对目标造成伤害，并以最大HP7.5%对自身施放护盾(2回合)`
                },
                [SkillType.LEADER]: {
                    name: `身先士卒的圣骑士长`,
                    description: `使雷欧娜最大HP增加50%，必杀技CD减少1回合`
                },
                [SkillType.PASSIVE_1]: {
                    name: `无惧之心`,
                    description: `使自身受到伤害减少10%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `永不退缩`,
                    description: `最大HP增加15%丶被治疗时回复量增加15%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `圣光骑士团之盾`,
                    description: `当前HP小於25%时，发动"受到伤害减少75%"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `减伤+ (6潜)`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潜)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Holy Ward`,
                    description: `Gain a Shield equal to 37.9/42.6/47.3/52.0/56.7% of your max HP and gain Taunt for 1 turn. Enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_1]: {
                    name: `Holy Ward`,
                    description: `Gain a Shield equal to 37.9% of your max HP and gain Taunt for 1 turn. Enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_2]: {
                    name: `Holy Ward`,
                    description: `Gain a Shield equal to 42.6% of your max HP and gain Taunt for 1 turn. Enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_3]: {
                    name: `Holy Ward`,
                    description: `Gain a Shield equal to 47.3% of your max HP and gain Taunt for 1 turn. Enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_4]: {
                    name: `Holy Ward`,
                    description: `Gain a Shield equal to 52.0% of your max HP and gain Taunt for 1 turn. Enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_5]: {
                    name: `Holy Ward`,
                    description: `Gain a Shield equal to 56.7% of your max HP and gain Taunt for 1 turn. Enter Guard Stance. (CD:3)`
                },
                [SkillType.ATTACK]: {
                    name: `Slash`,
                    description: `Damage target (50% Attack power) and gain a Shield equal to 7.5% of your max HP for 2 turns.`
                },
                [SkillType.LEADER]: {
                    name: `Oh Captain`,
                    description: `Increase Leona's max HP by 50%. Reduce Ultimate Skill CD by 1`
                },
                [SkillType.PASSIVE_1]: {
                    name: `No Fear`,
                    description: `Take 10% less damage.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Never Surrender`,
                    description: `Increase the max HP by 15% and Recovery Rate by 15%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Oh Holy Knight~`,
                    description: `When HP is below 25%, take 75% less damage.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Protect (Self)`,
                    description: `Take 5% less damage.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity (Self)`,
                    description: `Gain immunity to Sleep`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `聖光の守護`,
                    description: `自分に最大HPの37.9/42.6/47.3/52.0/56.7%分盾を張って(1ターン)、挑発を得て(1ターン)防御状態になる[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `聖光の守護`,
                    description: `自分に最大HPの37.9%分盾を張って(1ターン)、挑発を得て(1ターン)防御状態になる[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `聖光の守護`,
                    description: `自分に最大HPの42.6%分盾を張って(1ターン)、挑発を得て(1ターン)防御状態になる[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `聖光の守護`,
                    description: `自分に最大HPの47.3%分盾を張って(1ターン)、挑発を得て(1ターン)防御状態になる[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `聖光の守護`,
                    description: `自分に最大HPの52.0%分盾を張って(1ターン)、挑発を得て(1ターン)防御状態になる[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `聖光の守護`,
                    description: `自分に最大HPの56.7%分盾を張って(1ターン)、挑発を得て(1ターン)防御状態になる[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `斬撃`,
                    description: `50%の攻撃力でターゲットにダメージを与え、自分に最大HPの56.7%分盾を張る(2ターン)`
                },
                [SkillType.LEADER]: {
                    name: `先頭に立つ聖騎士団長`,
                    description: `レオナの最大HPを15%増加させ、必殺技CDを1ターン減少させる`
                },
                [SkillType.PASSIVE_1]: {
                    name: `恐れを知らない心`,
                    description: `自分の受けるダメージを10%減少させる`
                },
                [SkillType.PASSIVE_2]: {
                    name: `不退転`,
                    description: `最大HPを15%増加させ、治療を受けた時、回復HP量を15%増加させる`
                },
                [SkillType.PASSIVE_3]: {
                    name: `聖光騎士団の盾`,
                    description: `現在のHPが25%未満の時、効果「受けるダメージが75%減少する」を発動する`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ減少+`,
                    description: `自分の受けるダメージを5%減少させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `睡眠無効`,
                    description: `自分を睡眠無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `성스러운 빛의 수호`,
                    description: `최대 HP의 37.9/42.6/47.3/52.0/56.7%만큼 자신의 아머 강화(1턴), 1턴간 도발 효과, 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `성스러운 빛의 수호`,
                    description: `최대 HP의 37.9%만큼 자신의 아머 강화(1턴), 1턴간 도발 효과, 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.SKILL_2]: {
                    name: `성스러운 빛의 수호`,
                    description: `최대 HP의 42.6%만큼 자신의 아머 강화(1턴), 1턴간 도발 효과, 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.SKILL_3]: {
                    name: `성스러운 빛의 수호`,
                    description: `최대 HP의 47.3%만큼 자신의 아머 강화(1턴), 1턴간 도발 효과, 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.SKILL_4]: {
                    name: `성스러운 빛의 수호`,
                    description: `최대 HP의 52.0%만큼 자신의 아머 강화(1턴), 1턴간 도발 효과, 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.SKILL_5]: {
                    name: `성스러운 빛의 수호`,
                    description: `최대 HP의 56.7%만큼 자신의 아머 강화(1턴), 1턴간 도발 효과, 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.ATTACK]: {
                    name: `참격`,
                    description: `공격 데미지의 50%만큼 타깃에게 데미지, 최대 HP의 7.5%만큼 자신의 아머 강화(2턴)`
                },
                [SkillType.LEADER]: {
                    name: `솔선수범의 성기사단장`,
                    description: `레오나의 최대 HP 50% 증가, 궁극기 CD 1턴 감소`
                },
                [SkillType.PASSIVE_1]: {
                    name: `두려움을 모르는 마음`,
                    description: `자신이 받는 데미지 10% 감소`
                },
                [SkillType.PASSIVE_2]: {
                    name: `일수불퇴`,
                    description: `최대 HP 15% 증가, 치유를 받을 시 회복량 15% 증가`
                },
                [SkillType.PASSIVE_3]: {
                    name: `성스러운 빛의 기사단의 방패`,
                    description: `HP가 25%보다 적을 시, "받는 데미지 75% 감소" 효과 발동`
                },
                [SkillType.GENERAL_1]: {
                    name: `받는 데미지 감소+`,
                    description: `자신이 받는 데미지 5% 감소`
                },
                [SkillType.GENERAL_2]: {
                    name: `수면 면역`,
                    description: `자신에게 수면 면역 효과`
                }
            }
        }
    },
]