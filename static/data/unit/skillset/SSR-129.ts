import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10158: SkillSet[] =  [
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
                    name: `聖誕八陣圖`,
                    description: `使目標攻擊力減少10%(最多2/2/3/3/4層)，並使我方全體攻擊力增加40/48.75/57.5/66.25/75%(3回合)，再以自身攻擊力330/376/422/468/514%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `聖誕八陣圖`,
                    description: `使目標攻擊力減少10%(最多2層)，並使我方全體攻擊力增加40%(3回合)，再以自身攻擊力330%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `聖誕八陣圖`,
                    description: `使目標攻擊力減少10%(最多2層)，並使我方全體攻擊力增加48.75%(3回合)，再以自身攻擊力376%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `聖誕八陣圖`,
                    description: `使目標攻擊力減少10%(最多3層)，並使我方全體攻擊力增加57.5%(3回合)，再以自身攻擊力422%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `聖誕八陣圖`,
                    description: `使目標攻擊力減少10%(最多3層)，並使我方全體攻擊力增加66.25%(3回合)，再以自身攻擊力468%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `聖誕八陣圖`,
                    description: `使目標攻擊力減少10%(最多4層)，並使我方全體攻擊力增加75%(3回合)，再以自身攻擊力514%對目標造成傷害。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `運籌帷幄`,
                    description: `使我方全體受到傷害減少5%(1回合)，再以自身攻擊力75%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `首席聖誕軍師`,
                    description: `我方全體最大HP增加40%\n使我方全體獲得「當我方隊伍恰好為5種角色屬性時，開啟《決勝千里之外》」\n\n《決勝千里之外》\n攻擊力增加50%\n造成傷害增加80%\n攻擊時，觸發「使目標受到傷害增加1%(最多50層)」\n普攻時，追加「以自身攻擊力100%對目標造成傷害」\n必殺時，追加「以自身攻擊力130%對目標造成傷害」\n受到傷害減少10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `出謀劃策`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少1回合」(觸發1次後清除)\n必殺時，觸發「《我有錦囊訣》」\n\n《我有錦囊訣》\n清除自身以外我方全體《錦囊妙計》所有層數\n使自身以外我方全體獲得「攻擊時，觸發『《可以持君身》』(1回合)」\n\n《可以持君身》\n使自身進入防禦狀態\n使自身獲得3層《錦囊妙計》(最多3層)\n清除自身以外我方全體《我有錦囊訣》所給予「攻擊時觸發」效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `妙算神謀`,
                    description: `使自身以外我方全體獲得《妙計支援》\n\n《妙計支援》\n當自身《錦囊妙計》層數=3層時，開啟「《第1計。請君入甕》」\n當自身《錦囊妙計》層數=2層時，開啟「《第2計。甕中捉鱉》」\n當自身《錦囊妙計》層數=1層時，開啟「《第3計。趁勝追擊》」\n\n《第1計。請君入甕》\n自身獲得嘲諷效果\n被攻擊時，觸發「《神機妙算》」\n\n《第2計。甕中捉鱉》\n必殺技傷害增加30%\n必殺時，觸發「《神機妙算》」\n\n《第3計。趁勝追擊》\n普攻傷害增加60%\n普攻時，觸發「《神機妙算》」\n\n《神機妙算》\n使目標受到傷害增加5%(最多6層)\n使自身《錦囊妙計》減少1層`
                },
                [SkillType.PASSIVE_3]: {
                    name: `百計齊出`,
                    description: `使我方全體角色受到被剋制屬性傷害減少10%\n使自身以外我方全體獲得「當自身《錦囊妙計》層數≧1層時，開啟『造成傷害增加20%』」`
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
                    name: `圣诞八阵图`,
                    description: `使目标攻击力减少10%(最多2/2/3/3/4层)，并使我方全体攻击力增加40/48.75/57.5/66.25/75%(3回合)，再以自身攻击力330/376/422/468/514%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `圣诞八阵图`,
                    description: `使目标攻击力减少10%(最多2层)，并使我方全体攻击力增加40%(3回合)，再以自身攻击力330%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `圣诞八阵图`,
                    description: `使目标攻击力减少10%(最多2层)，并使我方全体攻击力增加48.75%(3回合)，再以自身攻击力376%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `圣诞八阵图`,
                    description: `使目标攻击力减少10%(最多3层)，并使我方全体攻击力增加57.5%(3回合)，再以自身攻击力422%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `圣诞八阵图`,
                    description: `使目标攻击力减少10%(最多3层)，并使我方全体攻击力增加66.25%(3回合)，再以自身攻击力468%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `圣诞八阵图`,
                    description: `使目标攻击力减少10%(最多4层)，并使我方全体攻击力增加75%(3回合)，再以自身攻击力514%对目标造成伤害。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `运筹帷幄`,
                    description: `使我方全体受到伤害减少5%(1回合)，再以自身攻击力75%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `首席圣诞军师`,
                    description: `我方全体最大HP增加40%\n使我方全体获得「当我方队伍恰好为5种角色属性时，开启《决胜千里之外》」\n\n《决胜千里之外》\n攻击力增加50%\n造成伤害增加80%\n攻击时，触发「使目标受到伤害增加1%(最多50层)」\n普攻时，追加「以自身攻击力100%对目标造成伤害」\n必杀时，追加「以自身攻击力130%对目标造成伤害」\n受到伤害减少10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `出谋划策`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少1回合」(触发1次後清除)\n必杀时，触发「《我有锦囊诀》」\n\n《我有锦囊诀》\n清除自身以外我方全体《锦囊妙计》所有层数\n使自身以外我方全体获得「攻击时，触发『《可以持君身》』(1回合)」\n\n《可以持君身》\n使自身进入防御状态\n使自身获得3层《锦囊妙计》(最多3层)\n清除自身以外我方全体《我有锦囊诀》所给予「攻击时触发」效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `妙算神谋`,
                    description: `使自身以外我方全体获得《妙计支援》\n\n《妙计支援》\n当自身《锦囊妙计》层数=3层时，开启「《第1计。请君入瓮》」\n当自身《锦囊妙计》层数=2层时，开启「《第2计。瓮中捉鳖》」\n当自身《锦囊妙计》层数=1层时，开启「《第3计。趁胜追击》」\n\n《第1计。请君入瓮》\n自身获得嘲讽效果\n被攻击时，触发「《神机妙算》」\n\n《第2计。瓮中捉鳖》\n必杀技伤害增加30%\n必杀时，触发「《神机妙算》」\n\n《第3计。趁胜追击》\n普攻伤害增加60%\n普攻时，触发「《神机妙算》」\n\n《神机妙算》\n使目标受到伤害增加5%(最多6层)\n使自身《锦囊妙计》减少1层`
                },
                [SkillType.PASSIVE_3]: {
                    name: `百计齐出`,
                    description: `使我方全体角色受到被克制属性伤害减少10%\n使自身以外我方全体获得「当自身《锦囊妙计》层数≥1层时，开启『造成伤害增加20%』」`
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
                    name: `Xmas Formation`,
                    description: `Decrease the target's Attack Power by 10% (max 2/2/3/3/4 stacks), increase the party's Attack Power by 40/48.75/57.5/66.25/75% for 3 turns, then damage the target (330/376/422/468/514% Attack Power). CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `Xmas Formation`,
                    description: `Decrease the target's Attack Power by 10% (max 4 stacks), increase the party's Attack Power by 40% for 3 turns, then damage the target (330% Attack Power). CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `Xmas Formation`,
                    description: `Decrease the target's Attack Power by 10% (max 4 stacks), increase the party's Attack Power by 48.75% for 3 turns, then damage the target (376% Attack Power). CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `Xmas Formation`,
                    description: `Decrease the target's Attack Power by 10% (max 4 stacks), increase the party's Attack Power by 57.5% for 3 turns, then damage the target (422% Attack Power). CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `Xmas Formation`,
                    description: `Decrease the target's Attack Power by 10% (max 4 stacks), increase the party's Attack Power by 66.25% for 3 turns, then damage the target (468% Attack Power). CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `Xmas Formation`,
                    description: `Decrease the target's Attack Power by 10% (max 4 stacks), increase the party's Attack Power by 75% for 3 turns, then damage the target (514% Attack Power). CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `Strategic Mastery`,
                    description: `Decrease the party's Damage Taken by 5% for 1 turn, then damage the target (75% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Chief Xmas Strategist`,
                    description: `Increase the party's max HP by 40%.\nGain the party the following effect: When there are characters of 5 attributes in the party, activate "Victory from Afar"\n\n"Victory from Afar"\nIncrease Attack Power by 50%.\nIncrease Damage Output by 80%.\nOn Attack, trigger the following effect: Increase the target's Damage Taken by 1% (max 50 stacks).\nOn Basic Attack, deal additional damage to the target (100% Attack Power).\nOn Ultimate Skill, deal additional damage to the target (130% Attack Power).\nDecrease Damage Taken by 10%.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Tactical Planning`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 1 turn. (Removes after trigger once)\nOn Ultimate Skill, trigger "Secret Strategy".\n\n"Secret Strategy"\nRemove all other allies' "Brilliant Stratagem" stacks.\nGain all other allies the following effect: On Attack, trigger "Loyal Guardian" for 1 turn.\n\n"Loyal Guardian"\nEnter Guard Stance.\nGain yourself 3 stacks of "Brilliant Stratagem" (max 3 stacks).\nRemove all other allies' "On Attack, trigger" effect granted by "Secret Strategy".`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Brilliant Schemes`,
                    description: `Gain other allies "Strategic Support".\n\n"Strategic Support"\nWhen your "Brilliant Stratagem" stack count reaches 3, activate "Plan 1: Enter the Trap".\nWhen your "Brilliant Stratagem" stack count reaches 2, activate "Plan 2: Capture Within the Trap".\nWhen your "Brilliant Stratagem" stack count reaches 1, activate "Plan 3: Exploit the Victory".\n\n"Plan 1: Enter the Trap"\nGain yourself Taunt.\nWhen attacked, trigger "Masterstroke".\n\n"Plan 2: Capture Within the Trap".\nIncrease Ultimate Skill Power by 30%.\nOn Ultimate Skill, trigger "Masterstroke".\n\n"Plan 3: Exploit the Victory"\nIncrease Basic Attack Power by 60%.\nOn Basic Attack, trigger "Masterstroke".\n\n"Masterstroke"\nIncrease the target's Damage Taken by 5% (max 6 stacks).\nDecrease 1 stack of "Brilliant Stratagem".`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Deploying a Hundred Plans`,
                    description: `Decrease all allies' Damage Taken from their weak attribute by 10%.\nGain all other allies the following effect: When your stacks of "Brilliant Stratagem" are more than or equal to 1, activate the following effect: Increase Damage Output by 20%.`
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
                    name: `聖夜の八陣図`,
                    description: `ターゲットの攻撃力を10%減少させ(最高2/2/3/3/4スタック)、味方全体の攻撃力を40/48.75/57.5/66.25/75%増加させ(3ターン)、自分の330/376/422/468/514%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `聖夜の八陣図`,
                    description: `ターゲットの攻撃力を10%減少させ(最高2スタック)、味方全体の攻撃力を40%増加させ(3ターン)、自分の330%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `聖夜の八陣図`,
                    description: `ターゲットの攻撃力を10%減少させ(最高2スタック)、味方全体の攻撃力を48.75%増加させ(3ターン)、自分の376%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `聖夜の八陣図`,
                    description: `ターゲットの攻撃力を10%減少させ(最高3スタック)、味方全体の攻撃力を57.5%増加させ(3ターン)、自分の422%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `聖夜の八陣図`,
                    description: `ターゲットの攻撃力を10%減少させ(最高3スタック)、味方全体の攻撃力を66.25%増加させ(3ターン)、自分の468%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `聖夜の八陣図`,
                    description: `ターゲットの攻撃力を10%減少させ(最高4スタック)、味方全体の攻撃力を75%増加させ(3ターン)、自分の514%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `権謀術数`,
                    description: `味方全体が受けるダメージを5%減少させ(1ターン)、自分の75%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `聖夜の主席軍師`,
                    description: `味方全体の最大HPが40%増加する\n味方全体が「味方にちょうど5種類の属性のキャラがいる時《勝ちを千里の外に決す》を発動する」を獲得する\n\n《勝ちを千里の外に決す》\n攻撃力が50%増加する\n与えるダメージが80%増加する\n攻撃時「ターゲットが受けるダメージが1%増加させる(最高50スタック)」を誘発する\n通常攻撃時「自分の100%の攻撃力でターゲットにダメージを与える」を追加する\n必殺技攻撃時「自分の130%の攻撃力でターゲットにダメージを与える」を追加する\n受けるダメージが10%減少する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `暗中飛躍`,
                    description: `1ターン目に「自分の現在の必殺技CDを1ターン減少させる」を誘発する(誘発1回後に解除)\n必殺技攻撃時《いい作戦がある》を誘発する\n\n《いい作戦がある》\n自分以外の味方全体の《巧妙な計画》のスタック数をすべて消す\n自分以外の味方全体が「攻撃時《あなたの力になれる》を誘発する(1ターン)」を獲得する\n\n《あなたの力になれる》\n自分を防御状態にする\n自分が3スタックの《巧妙な計画》を獲得する(最高3スタック)\n自分以外の味方全体の《いい作戦がある》が与える「攻撃時の誘発効果」を解除する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `天才的策略`,
                    description: `自分以外の味方全体が《妙計支援》を獲得する\n\n《妙計支援》\n自分の《巧妙な計画》のスタック数が3スタックの時《第1計・ハメ手》を発動する\n自分の《巧妙な計画》のスタック数が2スタックの時《第2計・袋の中のネズミ》を発動する\n自分の《巧妙な計画》のスタック数が1スタックの時《第3計・勝機を活かせ》を発動する\n\n《第1計・ハメ手》\n自分が挑発を獲得する\n攻撃を受けた時《神機妙算》を誘発する\n\n《第2計・袋の中のネズミ》\n必殺技のダメージが30%増加する\n必殺技攻撃時《神機妙算》を誘発する\n\n《第3計・勝機を活かせ》\n通常攻撃のダメージが60%増加する\n通常攻撃時《神機妙算》を誘発する\n\n《神機妙算》\nターゲットが受けるダメージが5%増加させる(最高6スタック)\n自分の《巧妙な計画》を1スタック減少させる`
                },
                [SkillType.PASSIVE_3]: {
                    name: `千方百計`,
                    description: `味方全体が受ける属性相性ダメージが10%減少させる\n自分以外の味方全体が、効果「自分の《巧妙な計画》のスタック数が1スタック以上の時、効果『与えるダメージが20%増加する』を発動する」を得る`
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
                    name: `크리스마스 팔진도`,
                    description: `타깃의 공격 데미지 10% 감소(최대 2/2/3/3/4중첩), 아군 전체의 공격 데미지 40/48.75/57.5/66.25/75% 증가(3턴), 다시 자신의 공격 데미지의 330/376/422/468/514%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `크리스마스 팔진도`,
                    description: `타깃의 공격 데미지 10% 감소(최대 2중첩), 아군 전체의 공격 데미지 40% 증가(3턴), 다시 자신의 공격 데미지의 330%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `크리스마스 팔진도`,
                    description: `타깃의 공격 데미지 10% 감소(최대 2중첩), 아군 전체의 공격 데미지 48.75% 증가(3턴), 다시 자신의 공격 데미지의 376%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `크리스마스 팔진도`,
                    description: `타깃의 공격 데미지 10% 감소(최대 3중첩), 아군 전체의 공격 데미지 57.5% 증가(3턴), 다시 자신의 공격 데미지의 422%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `크리스마스 팔진도`,
                    description: `타깃의 공격 데미지 10% 감소(최대 3중첩), 아군 전체의 공격 데미지 66.25% 증가(3턴), 다시 자신의 공격 데미지의 468%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `크리스마스 팔진도`,
                    description: `타깃의 공격 데미지 10% 감소(최대 4중첩), 아군 전체의 공격 데미지 75% 증가(3턴), 다시 자신의 공격 데미지의 514%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `전략 구상`,
                    description: `아군 전체가 받는 데미지 5% 감소(1턴), 다시 자신의 공격 데미지의 75%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `수석 크리스마스 군사`,
                    description: `아군 전체의 최대 HP 40% 증가\n아군 전체는 「팀에 속한 캐릭터의 속성이 5종류일 경우, 《결승천리지외》활성화」 획득\n\n《결승천리지외》\n공격 데미지 50% 증가\n가하는 데미지 80% 증가\n공격 시 「타깃이 받는 데미지 1% 증가(최대 50중첩)」 트리거\n일반 공격 시 「자신의 공격 데미지의 100%만큼 타깃에게 데미지」 추가\n궁극기 발동 시 「자신의 공격 데미지의 130%만큼 타깃에게 데미지」 추가\n받는 데미지 10% 감소`
                },
                [SkillType.PASSIVE_1]: {
                    name: `방안 모색`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 1턴 감소」 트리거(1회 트리거 후 제거)\n궁극기 발동 시 「《내게는 비책이 있다》」 트리거\n\n《내게는 비책이 있다》\n자신 이외의 아군 전체에게 부여된《절묘한 비책》모든 중첩 수 제거\n자신 이외의 아군 전체는 「공격 시 『《군주를 지킨다》』트리거(1턴)」 획득\n\n《군주를 지킨다》\n자신은 방어 상태 돌입\n자신은 3중첩의 《절묘한 비책》획득(최대 3중첩)\n자신 이외의 아군 전체에게 부여된 《내게는 비책이 있다》가 부여하는 「공격 시 트리거」 효과 제거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `절묘한 계략`,
                    description: `자신 이외의 아군 전체는 《묘책 지원》획득\n\n《묘책 지원》\n자신의 《절묘한 비책》중첩 수=3일 시 「《제1계 ‧ 청군입옹》」 활성화\n자신의 《절묘한 비책》중첩 수=2일 시 「《제2계 ‧ 옹중착별》」 활성화\n자신의 《절묘한 비책》중첩 수=1일 시 「《제3계 ‧ 천승추격》」 활성화\n\n《제1계 ‧ 청군입옹》\n자신은 도발 효과 획득\n피격 시 「《신묘한 계략》」 트리거\n\n《제2계 ‧ 옹중착별》\n궁극기 데미지 30% 증가\n궁극기 발동 시 「《신묘한 계략》」 트리거\n\n《제3계 ‧ 천승추격》\n일반 공격 데미지 60% 증가\n일반 공격 시 「《신묘한 계략》」 트리거\n\n《신묘한 계략》\n타깃이 받는 데미지 5% 증가(최대 6중첩)\n자신의 《절묘한 비책》 1중첩 감소`
                },
                [SkillType.PASSIVE_3]: {
                    name: `계략 총동원`,
                    description: `아군 전체가 받는 약점 속성 데미지 10% 감소\n자신 이외의 아군 전체는 「현재 자신의《절묘한 비책》중첩 수 ≧ 1일 경우, 『가하는 데미지 20% 증가』활성화」 획득`
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