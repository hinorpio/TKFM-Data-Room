import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10036: SkillSet[] =  [
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
                    name: `濕濕黏黏滑滑`,
                    description: `使敵全體攻擊力減少10/12.5/15/15/15%(1/1/1/2/2回合)，每回合以自身攻擊力200%回復自身(2回合)，CD: 5 [5絆 CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `濕濕黏黏滑滑`,
                    description: `使敵全體攻擊力減少10%(1回合)，每回合以自身攻擊力200%回復自身(2回合)，CD: 5`
                },
                [SkillType.SKILL_2]: {
                    name: `濕濕黏黏滑滑`,
                    description: `使敵全體攻擊力減少12.5%(1回合)，每回合以自身攻擊力200%回復自身(2回合)，CD: 5`
                },
                [SkillType.SKILL_3]: {
                    name: `濕濕黏黏滑滑`,
                    description: `使敵全體攻擊力減少15%(1回合)，每回合以自身攻擊力200%回復自身(2回合)，CD: 5`
                },
                [SkillType.SKILL_4]: {
                    name: `濕濕黏黏滑滑`,
                    description: `使敵全體攻擊力減少15%(2回合)，每回合以自身攻擊力200%回復自身(2回合)，CD: 5`
                },
                [SkillType.SKILL_5]: {
                    name: `濕濕黏黏滑滑`,
                    description: `使敵全體攻擊力減少15%(2回合)，每回合以自身攻擊力200%回復自身(2回合)，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `黏液攻擊`,
                    description: `使目標攻擊力減少20%(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `我是善良的史萊姆唷`,
                    description: `使自身最大HP增加30%；每經過4回合，觸發"使目標受到傷害增加15%(2回合)、使自身被治療時回復量增加30%(2回合)"效果`
                },
                [SkillType.PASSIVE_1]: {
                    name: `能量果凍`,
                    description: `攻擊時，觸發"以自身攻擊力100%對我方HP最低者進行治療"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `引人注目`,
                    description: `使自身防禦減傷效果增加10%；每經過4回合，觸發"使自身獲得嘲諷(2回合)"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `史萊姆的韌性`,
                    description: `被攻擊時，觸發"使自身受到傷害減少15%(1回合)"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `回復量+`,
                    description: `使自身被治療時回復量增加15%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `湿湿黏黏滑滑`,
                    description: `使敌全体攻击力减少10/12.5/15/15/15%(1/1/1/2/2回合)，每回合以自身攻击力200%回复自身(2回合)，CD: 5 [5绊 CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `湿湿黏黏滑滑`,
                    description: `使敌全体攻击力减少10%(1回合)，每回合以自身攻击力200%回复自身(2回合)，CD: 5`
                },
                [SkillType.SKILL_2]: {
                    name: `湿湿黏黏滑滑`,
                    description: `使敌全体攻击力减少12.5%(1回合)，每回合以自身攻击力200%回复自身(2回合)，CD: 5`
                },
                [SkillType.SKILL_3]: {
                    name: `湿湿黏黏滑滑`,
                    description: `使敌全体攻击力减少15%(1回合)，每回合以自身攻击力200%回复自身(2回合)，CD: 5`
                },
                [SkillType.SKILL_4]: {
                    name: `湿湿黏黏滑滑`,
                    description: `使敌全体攻击力减少15%(2回合)，每回合以自身攻击力200%回复自身(2回合)，CD: 5`
                },
                [SkillType.SKILL_5]: {
                    name: `湿湿黏黏滑滑`,
                    description: `使敌全体攻击力减少15%(2回合)，每回合以自身攻击力200%回复自身(2回合)，CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `黏液攻击`,
                    description: `使目标攻击力减少20%(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `我是善良的史莱姆唷`,
                    description: `使自身最大HP增加30%；每经过4回合，触发"使目标受到伤害增加15%(2回合)丶使自身被治疗时回复量增加30%(2回合)"效果`
                },
                [SkillType.PASSIVE_1]: {
                    name: `能量果冻`,
                    description: `攻击时，触发"以自身攻击力100%对我方HP最低者进行治疗"效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `引人注目`,
                    description: `使自身防御减伤效果增加10%；每经过4回合，触发"使自身获得嘲讽(2回合)"效果`
                },
                [SkillType.PASSIVE_3]: {
                    name: `史莱姆的韧性`,
                    description: `被攻击时，触发"使自身受到伤害减少15%(1回合)"效果`
                },
                [SkillType.GENERAL_1]: {
                    name: `回复量+`,
                    description: `使自身被治疗时回复量增加15%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Wet Sticky Slimy`,
                    description: `Lower all enemies' Attack Power by 10/12.5/15/15/15% for [1/1/1/2/2] turn. Heal yourself by 200% of your Attack Power every turn for 2 turns. (CD:5) [Bond 5: (CD:4)]`
                },
                [SkillType.SKILL_1]: {
                    name: `Wet Sticky Slimy`,
                    description: `Lower all enemies' Attack Power by 10% for 1 turn. Heal yourself by 200% of your Attack Power every turn for 2 turns. (CD:5)`
                },
                [SkillType.SKILL_2]: {
                    name: `Wet Sticky Slimy`,
                    description: `Lower all enemies' Attack Power by 12.5% for 1 turn. Heal yourself by 200% of your Attack Power every turn for 2 turns. (CD:5)`
                },
                [SkillType.SKILL_3]: {
                    name: `Wet Sticky Slimy`,
                    description: `Lower all enemies' Attack Power by 15% for 1 turn. Heal yourself by 200% of your Attack Power every turn for 2 turns. (CD:5)`
                },
                [SkillType.SKILL_4]: {
                    name: `Wet Sticky Slimy`,
                    description: `Lower all enemies' Attack Power by 15% for 2 turn. Heal yourself by 200% of your Attack Power every turn for 2 turns. (CD:5)`
                },
                [SkillType.SKILL_5]: {
                    name: `Wet Sticky Slimy`,
                    description: `Lower all enemies' Attack Power by 15% for 2 turn. Heal yourself by 200% of your Attack Power every turn for 2 turns. (CD:4)`
                },
                [SkillType.ATTACK]: {
                    name: `Goop Attack`,
                    description: `Reduce target's Attack Power by 20% for 1 turn`
                },
                [SkillType.LEADER]: {
                    name: `I'm a Nice Slime`,
                    description: `Increase your max HP by 30%. After every 4 turns, increase the amount of damage your current target takes by 15% and increase your Recovery Rate by 30% for 2 turns.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Energy Jelly`,
                    description: `On Basic Attack, heal the lowest-HP ally by 100% of your Attack Power.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Check Me Out~!`,
                    description: `Take 10% less damage while in Guard Stance; After every 4 turns, gain Taunt for 2 turns.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Slime Wall`,
                    description: `When Attacked, take 15% less damage for 1 turn.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Restoration Up`,
                    description: `Increase Recovery Rate by 15%`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity (Self)`,
                    description: `Gain immunity to Silence`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `ベトベトヌルヌル`,
                    description: `敵全体の攻撃力を10/12.5/15/15/15%減少させ(1/1/1/2/2ターン)、毎ターン自分の攻撃力の200%分自分に治療を行う(2ターン)[CD:5] [Lv5: CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `ベトベトヌルヌル`,
                    description: `敵全体の攻撃力を10%減少させ(1ターン)、毎ターン自分の攻撃力の200%分自分に治療を行う(2ターン)[CD:5]`
                },
                [SkillType.SKILL_2]: {
                    name: `ベトベトヌルヌル`,
                    description: `敵全体の攻撃力を12.5%減少させ(1ターン)、毎ターン自分の攻撃力の200%分自分に治療を行う(2ターン)[CD:5]`
                },
                [SkillType.SKILL_3]: {
                    name: `ベトベトヌルヌル`,
                    description: `敵全体の攻撃力を15%減少させ(1ターン)、毎ターン自分の攻撃力の200%分自分に治療を行う(2ターン)[CD:5]`
                },
                [SkillType.SKILL_4]: {
                    name: `ベトベトヌルヌル`,
                    description: `敵全体の攻撃力を15%減少させ(2ターン)、毎ターン自分の攻撃力の200%分自分に治療を行う(2ターン)[CD:5]`
                },
                [SkillType.SKILL_5]: {
                    name: `ベトベトヌルヌル`,
                    description: `敵全体の攻撃力を15%減少させ(2ターン)、毎ターン自分の攻撃力の200%分自分に治療を行う(2ターン)[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `粘液攻撃`,
                    description: `ターゲットの攻撃力を20%減少させる(1ターン)`
                },
                [SkillType.LEADER]: {
                    name: `とっても真面目なスライムだよ`,
                    description: `自分の最大HPを30%増加させる。4ターン毎に、効果「ターゲットが受けるダメージを15%増加させる(2ターン)」、「自分が治療を受けるとき、回復HP量を30%増加させる(2ターン)」を誘発する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `エナジーゼリー`,
                    description: `通常攻撃時、効果「HPが一番低い仲間に攻撃力の100%分治療を行う」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `人目を引く`,
                    description: `自分の防御時のダメージ軽減効果を10%増加させる。4ターン毎に、効果「自分に挑発を与える(2ターン)」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `スライムの靭性`,
                    description: `攻撃を受けた時、効果「自分の受けるダメージを15%減少させる(1ターン)」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `回復量+`,
                    description: `自分が治療を受けるとき、回復HP量を15%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `끈적끈적 미끌미끌`,
                    description: `적 전체의 공격 데미지 10/12.5/15/15/15% 감소(1/1/1/2/2턴), 매턴마다 자신의 공격 데미지 200%로 자신을 회복(2턴) [CD:5] [Lv5: CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `끈적끈적 미끌미끌`,
                    description: `적 전체의 공격 데미지 10% 감소(1턴), 매턴마다 자신의 공격 데미지 200%로 자신을 회복(2턴) [CD:5]`
                },
                [SkillType.SKILL_2]: {
                    name: `끈적끈적 미끌미끌`,
                    description: `적 전체의 공격 데미지 12.5% 감소(1턴), 매턴마다 자신의 공격 데미지 200%로 자신을 회복(2턴) [CD:5]`
                },
                [SkillType.SKILL_3]: {
                    name: `끈적끈적 미끌미끌`,
                    description: `적 전체의 공격 데미지 15% 감소(1턴), 매턴마다 자신의 공격 데미지 200%로 자신을 회복(2턴) [CD:5]`
                },
                [SkillType.SKILL_4]: {
                    name: `끈적끈적 미끌미끌`,
                    description: `적 전체의 공격 데미지 15% 감소(2턴), 매턴마다 자신의 공격 데미지 200%로 자신을 회복(2턴) [CD:5]`
                },
                [SkillType.SKILL_5]: {
                    name: `끈적끈적 미끌미끌`,
                    description: `적 전체의 공격 데미지 15% 감소(2턴), 매턴마다 자신의 공격 데미지 200%로 자신을 회복(2턴) [CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `점액 공격`,
                    description: `타깃의 공격 데미지 20% 감소(1턴)`
                },
                [SkillType.LEADER]: {
                    name: `나는 착한 슬라임이야`,
                    description: `자신의 최대 HP 30% 증가. 매 4턴마다 "타깃의 받는 데미지 15% 증가(2턴), 자신의 받는 치유량 30% 증가(2턴)"효과 발동`
                },
                [SkillType.PASSIVE_1]: {
                    name: `에너지 젤리`,
                    description: `일반 공격 시, "공격 데미지의 100%만큼 HP가 가장 적은 동료 치유"효과 발동`
                },
                [SkillType.PASSIVE_2]: {
                    name: `시선강탈`,
                    description: `자신의 받는 데미지 감소 효과 10% 증가. 매 4턴마다 "자신에게 도발(2턴)"효과 발동`
                },
                [SkillType.PASSIVE_3]: {
                    name: `슬라임의 내성`,
                    description: `피격 시, "자신이 받는 피해 15% 감소(1턴)"효과 발동`
                },
                [SkillType.GENERAL_1]: {
                    name: `회복량+`,
                    description: `치유를 받을 시 회복량 15% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 효과`
                }
            }
        }
    },
]