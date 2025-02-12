import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10162: SkillSet[] =  [
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
                    name: `天地創造`,
                    description: `使自身獲得3/4/5/6/7層《凱薩大明神的加護》(最多7層)，並使自身造成傷害增加35/45/55/65/75%(最多1層)。CD:[4/5/6/7/8]`
                },
                [SkillType.SKILL_1]: {
                    name: `天地創造`,
                    description: `使自身獲得3層《凱薩大明神的加護》(最多7層)，並使自身造成傷害增加35%(最多1層)。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `天地創造`,
                    description: `使自身獲得4層《凱薩大明神的加護》(最多7層)，並使自身造成傷害增加45%(最多1層)。CD:5`
                },
                [SkillType.SKILL_3]: {
                    name: `天地創造`,
                    description: `使自身獲得5層《凱薩大明神的加護》(最多7層)，並使自身造成傷害增加55%(最多1層)。CD:6`
                },
                [SkillType.SKILL_4]: {
                    name: `天地創造`,
                    description: `使自身獲得6層《凱薩大明神的加護》(最多7層)，並使自身造成傷害增加65%(最多1層)。CD:7`
                },
                [SkillType.SKILL_5]: {
                    name: `天地創造`,
                    description: `使自身獲得7層《凱薩大明神的加護》(最多7層)，並使自身造成傷害增加75%(最多1層)。CD:8`
                },
                [SkillType.ATTACK]: {
                    name: `剷除不信者`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `凱薩大明神的虔誠巫女`,
                    description: `我方全體最大HP增加40%\n我方全體攻擊力增加80%\n我方全體造成傷害增加50%\n我方全體普攻傷害增加100%\n我方全體獲得「普攻時，觸發『使目標受到傷害增加1.5%(最多50層)』」\n我方全體獲得「當我方隊伍輔助者有1人以上時，發動『《異教信仰》』」\n\n《異教信仰》\n造成傷害減少500%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `狂熱信徒`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少8回合」(觸發1次後清除)\n普攻時，觸發「使自身《凱薩大明神的加護》層數減少1層」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `巫女的職責`,
                    description: `自身《凱薩大明神的加護》層數≧1層時，開啟「《除穢務淨》」\n\n《除穢務淨》\n普攻傷害增加125%\n普攻時，追加「以自身攻擊力150%對目標造成傷害」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `不可質疑凱薩大明神`,
                    description: `自身《凱薩大明神的加護》層數≧3層時，開啟「《凱薩大權現》」\n\n《凱薩大權現》\n普攻時，觸發「使目標受到傷害增加3%(最多5層)」\n普攻時，觸發「使目標受到闇屬性傷害增加3%(最多5層)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻擊+`,
                    description: `使自身攻擊力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `天地创造`,
                    description: `使自身获得3/4/5/6/7层《凯萨大明神的加护》(最多7层)，并使自身造成伤害增加35/45/55/65/75%(最多1层)。CD:[4/5/6/7/8]`
                },
                [SkillType.SKILL_1]: {
                    name: `天地创造`,
                    description: `使自身获得3层《凯萨大明神的加护》(最多7层)，并使自身造成伤害增加35%(最多1层)。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `天地创造`,
                    description: `使自身获得4层《凯萨大明神的加护》(最多7层)，并使自身造成伤害增加45%(最多1层)。CD:5`
                },
                [SkillType.SKILL_3]: {
                    name: `天地创造`,
                    description: `使自身获得5层《凯萨大明神的加护》(最多7层)，并使自身造成伤害增加55%(最多1层)。CD:6`
                },
                [SkillType.SKILL_4]: {
                    name: `天地创造`,
                    description: `使自身获得6层《凯萨大明神的加护》(最多7层)，并使自身造成伤害增加65%(最多1层)。CD:7`
                },
                [SkillType.SKILL_5]: {
                    name: `天地创造`,
                    description: `使自身获得7层《凯萨大明神的加护》(最多7层)，并使自身造成伤害增加75%(最多1层)。CD:8`
                },
                [SkillType.ATTACK]: {
                    name: `铲除不信者`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `凯萨大明神的虔诚巫女`,
                    description: `我方全体最大HP增加40%\n我方全体攻击力增加80%\n我方全体造成伤害增加50%\n我方全体普攻伤害增加100%\n我方全体获得「普攻时，触发『使目标受到伤害增加1.5%(最多50层)』」\n我方全体获得「当我方队伍辅助者有1人以上时，发动『《异教信仰》』」\n\n《异教信仰》\n造成伤害减少500%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `狂热信徒`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少8回合」(触发1次後清除)\n普攻时，触发「使自身《凯萨大明神的加护》层数减少1层」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `巫女的职责`,
                    description: `自身《凯萨大明神的加护》层数≥1层时，开启「《除秽务净》」\n\n《除秽务净》\n普攻伤害增加125%\n普攻时，追加「以自身攻击力150%对目标造成伤害」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `不可质疑凯萨大明神`,
                    description: `自身《凯萨大明神的加护》层数≥3层时，开启「《凯萨大权现》」\n\n《凯萨大权现》\n普攻时，触发「使目标受到伤害增加3%(最多5层)」\n普攻时，触发「使目标受到闇属性伤害增加3%(最多5层)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻击+`,
                    description: `使自身攻击力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Creation of Heaven & Earth!`,
                    description: `Gain yourself 3/4/5/6/7 stacks of "Deus Caesar's Blessing" (max 7 stacks) and increase your Damage Output by 35/45/55/65/75% (max 1 stack). CD:[4/5/6/7/8]`
                },
                [SkillType.SKILL_1]: {
                    name: `Creation of Heaven & Earth!`,
                    description: `Gain yourself 3 stacks of "Deus Caesar's Blessing" (max 7 stacks) and increase your Damage Output by 35% (max 1 stack). CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Creation of Heaven & Earth!`,
                    description: `Gain yourself 4 stacks of "Deus Caesar's Blessing" (max 7 stacks) and increase your Damage Output by 45% (max 1 stack). CD:5`
                },
                [SkillType.SKILL_3]: {
                    name: `Creation of Heaven & Earth!`,
                    description: `Gain yourself 5 stacks of "Deus Caesar's Blessing" (max 7 stacks) and increase your Damage Output by 55% (max 1 stack). CD:6`
                },
                [SkillType.SKILL_4]: {
                    name: `Creation of Heaven & Earth!`,
                    description: `Gain yourself 6 stacks of "Deus Caesar's Blessing" (max 7 stacks) and increase your Damage Output by 65% (max 1 stack). CD:7`
                },
                [SkillType.SKILL_5]: {
                    name: `Creation of Heaven & Earth!`,
                    description: `Gain yourself 7 stacks of "Deus Caesar's Blessing" (max 7 stacks) and increase your Damage Output by 75% (max 1 stack). CD:8`
                },
                [SkillType.ATTACK]: {
                    name: `Purge the Unbelievers`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Deus Caesar's Miko`,
                    description: `Increase the party's max HP by 40%.\nIncrease the party's Attack Power by 80%.\nIncrease the party's Damage Output by 50%.\nIncrease the party's Basic Attack Power by 100%.\nGain the party the following effect: On Basic Attack, trigger the following effect: Increase the target's Damage Taken by 1.5% (max 50 stacks).\nGain the party the following effect: When there are 1 or more Supporters in the party, activate "Heretical Belief".\n\n"Heretical Belief"\nDecrease Damage Output by 500%.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Fanatical Believer`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 8 turns (removes after triggering once).\nOn Basic Attack, trigger the following effect: Decrease your "Deus Caesar's Blessing" by 1 stack.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `A Miko's Duty`,
                    description: `When you have ≧1 stacks of "Deus Caesar's Blessing", activate "Purification Duty".\n\n"Purification Duty"\nIncrease Attack Power by 50%.\nIncrease Basic Attack Power by 100%.\nOn Basic Attack, deal additional damage to the target (100% Attack Power).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Unquestionable Deus Caesar`,
                    description: `When you have ≧3 stacks of "Deus Caesar's Blessing", activate "Caesar Daigon".\n\n"Caesar Daigon"\nOn Basic Attack, trigger the following effect: Increase the target's Damage Taken by 6% (max 5 stacks).\nOn Basic Attack, trigger the following effect: Increase the target's Damage Taken from Dark attacks by 4% (max 5 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack+`,
                    description: `Increase your Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain immunity to Silence`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `天地創造！`,
                    description: `自分に3/4/5/6/7スタックの《シーザー大明神のご加護》を与え(最高7スタック)、自分の与えるダメージを35/45/55/65/75%増加させる(最高1スタック)[CD:4/5/6/7/8]`
                },
                [SkillType.SKILL_1]: {
                    name: `天地創造！`,
                    description: `自分に3スタックの《シーザー大明神のご加護》を与え(最高7スタック)、自分の与えるダメージを35%増加させる(最高1スタック)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `天地創造！`,
                    description: `自分に4スタックの《シーザー大明神のご加護》を与え(最高7スタック)、自分の与えるダメージを45%増加させる(最高1スタック)[CD:5]`
                },
                [SkillType.SKILL_3]: {
                    name: `天地創造！`,
                    description: `自分に5スタックの《シーザー大明神のご加護》を与え(最高7スタック)、自分の与えるダメージを55%増加させる(最高1スタック)[CD:6]`
                },
                [SkillType.SKILL_4]: {
                    name: `天地創造！`,
                    description: `自分に6スタックの《シーザー大明神のご加護》を与え(最高7スタック)、自分の与えるダメージを65%増加させる(最高1スタック)[CD:7]`
                },
                [SkillType.SKILL_5]: {
                    name: `天地創造！`,
                    description: `自分に7スタックの《シーザー大明神のご加護》を与え(最高7スタック)、自分の与えるダメージを75%増加させる(最高1スタック)[CD:8]`
                },
                [SkillType.ATTACK]: {
                    name: `非信者を粛清せよ`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `シーザー大明神に仕える敬虔なる巫女`,
                    description: `味方全体の最大HPが40%増加する\n味方全体の攻撃力が80%増加する\n味方全体の与えるダメージが50%増加する\n味方全体の通常攻撃ダメージが100%増加する\n味方全体が「通常攻撃時『ターゲットの受けるダメージを1.5%増加させる(最高50スタック)』誘発する」を獲得する\n味方全体が「チーム内にサポーターが1人以上いる時《異教徒の信仰》を発動する」を獲得する\n\n《異教徒の信仰》\n与えるダメージが500%減少する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `狂信的な信徒`,
                    description: `1ターン目に「自分の現在の必殺技CDを8ターン減少させる」を誘発する(誘発1回後に解除)\n通常攻撃時「自分の《シーザー大明神のご加護》のスタック数を1減少させる」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `巫女の務`,
                    description: `自分の《シーザー大明神のご加護》のスタック数が≧1の時、《穢れを祓い尽くす》を発動する\n\n《穢れを祓い尽くす》\n通常攻撃ダメージが125%増加する\n通常攻撃時「自分の150%の攻撃力でターゲットにダメージを与える」を追加する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `シーザー大明神を疑うことなかれ`,
                    description: `自分の《シーザー大明神のご加護》のスタック数が≧3の時、《シーザー大権現》を発動する\n\n《シーザー大権現》\n通常攻撃時「ターゲットの受けるダメージを3%増加させる(最高5スタック)」誘発する\n通常攻撃時「ターゲットの受ける闇属性ダメージを3%増加させる(最高5スタック)」誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻撃+`,
                    description: `自分の攻撃力を10%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `천지창조!`,
                    description: `자신은 3/4/5/6/7중첩의 《시저 대명신의 가호》획득(최대 7중첩), 자신의 가하는 데미지 35/45/55/65/75% 증가(최대 1중첩) [CD: 4/5/6/7/8]`
                },
                [SkillType.SKILL_1]: {
                    name: `천지창조!`,
                    description: `자신은 3중첩의 《시저 대명신의 가호》획득(최대 7중첩), 자신의 가하는 데미지 35% 증가(최대 1중첩) [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `천지창조!`,
                    description: `자신은 4중첩의 《시저 대명신의 가호》획득(최대 7중첩), 자신의 가하는 데미지 45% 증가(최대 1중첩) [CD: 5]`
                },
                [SkillType.SKILL_3]: {
                    name: `천지창조!`,
                    description: `자신은 5중첩의 《시저 대명신의 가호》획득(최대 7중첩), 자신의 가하는 데미지 55% 증가(최대 1중첩) [CD: 6]`
                },
                [SkillType.SKILL_4]: {
                    name: `천지창조!`,
                    description: `자신은 6중첩의 《시저 대명신의 가호》획득(최대 7중첩), 자신의 가하는 데미지 65% 증가(최대 1중첩) [CD: 7]`
                },
                [SkillType.SKILL_5]: {
                    name: `천지창조!`,
                    description: `자신은 7중첩의 《시저 대명신의 가호》획득(최대 7중첩), 자신의 가하는 데미지 75% 증가(최대 1중첩) [CD: 8]`
                },
                [SkillType.ATTACK]: {
                    name: `불신자 제거`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `시저 대명신의 무녀`,
                    description: `아군 전체의 최대 HP 40% 증가\n아군 전체의 공격 데미지 80% 증가\n아군 전체의 가하는 데미지 50% 증가\n아군 전체의 일반 공격 데미지 100% 증가\n아군 전체는 「일반 공격 시 『타깃이 받는 데미지 1.5% 증가(최대 50중첩)』트리거」 획득\n아군 전체는 「팀에 서포터가 1명 이상 있을 시, 『《이교 신앙》』발동」획득\n\n《이교 신앙》\n가하는 데미지 500% 감소`
                },
                [SkillType.PASSIVE_1]: {
                    name: `광신도`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 8턴 감소」 트리거(1회 트리거 후 제거)\n일반 공격 시 「자신의 《시저 대명신의 가호》중첩 수 1 감소」 트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `무녀의 직책`,
                    description: `자신의 《시저 대명신의 가호》중첩 수 ≧ 1일 시, 「《정화 작업》」 활성화\n\n《정화 작업》\n일반 공격 데미지 125% 증가\n일반 공격 시 「자신의 공격 데미지의 150%만큼 타깃에게 데미지」 추가`
                },
                [SkillType.PASSIVE_3]: {
                    name: `시저 대명신님을 의심해선 안됩니다`,
                    description: `자신의 《시저 대명신의 가호》중첩 수 ≧ 3일 시, 「《시저 대현신》」 활성화\n\n《시저 대현신》\n일반 공격 시 「타깃이 받는 데미지 3% 증가(최대 5중첩)」 트리거\n일반 공격 시 「타깃이 받는 암속성 데미지 3% 증가(최대 5중첩)」 트리거`
                },
                [SkillType.GENERAL_1]: {
                    name: `공격+`,
                    description: `자신의 공격 데미지 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 효과`
                }
            }
        }
    },
]