import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10160: SkillSet[] =  [
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
                    name: `聖劍咆哮。星辰編年`,
                    description: `使目標受到光屬性傷害增加18/21/24/27/30%(8回合)(不可疊加)，並使我方全體攻擊者獲得「普攻時，追加『以自身攻擊力0/0/15/20/25%對目標造成傷害』(8回合)(不可疊加)」，再以自身攻擊力140%對目標造成傷害6/7/8/9/10次。CD:40`
                },
                [SkillType.SKILL_1]: {
                    name: `聖劍咆哮。星辰編年`,
                    description: `使目標受到光屬性傷害增加18%(8回合)(不可疊加)，再以自身攻擊力140%對目標造成傷害6次。CD:40`
                },
                [SkillType.SKILL_2]: {
                    name: `聖劍咆哮。星辰編年`,
                    description: `使目標受到光屬性傷害增加21%(8回合)(不可疊加)，再以自身攻擊力140%對目標造成傷害7次。CD:40`
                },
                [SkillType.SKILL_3]: {
                    name: `聖劍咆哮。星辰編年`,
                    description: `使目標受到光屬性傷害增加24%(8回合)(不可疊加)，並使我方全體攻擊者獲得「普攻時，追加『以自身攻擊力15%對目標造成傷害』(8回合)(不可疊加)」，再以自身攻擊力140%對目標造成傷害8次。CD:40`
                },
                [SkillType.SKILL_4]: {
                    name: `聖劍咆哮。星辰編年`,
                    description: `使目標受到光屬性傷害增加27%(8回合)(不可疊加)，並使我方全體攻擊者獲得「普攻時，追加『以自身攻擊力20%對目標造成傷害』(8回合)(不可疊加)」，再以自身攻擊力140%對目標造成傷害9次。CD:40`
                },
                [SkillType.SKILL_5]: {
                    name: `聖劍咆哮。星辰編年`,
                    description: `使目標受到光屬性傷害增加30%(8回合)(不可疊加)，並使我方全體攻擊者獲得「普攻時，追加『以自身攻擊力25%對目標造成傷害』(8回合)(不可疊加)」，再以自身攻擊力140%對目標造成傷害10次。CD:40`
                },
                [SkillType.ATTACK]: {
                    name: `逆刃`,
                    description: `使目標受到傷害增加10%(2回合)(不可疊加)，再以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `最後的勇者`,
                    description: `我方全體最大HP增加40%\n光屬性角色以外我方全體獲得「第1回合時，觸發『使我方【聖劍覺醒 神田綾音】獲得1層《應當守護的存在》(最多4層)』(觸發1次後清除)」\n自身《應當守護的存在》層數=4時，開啟「《守護一切的決心》」\n\n《守護一切的決心》\n必殺技最大CD減少20回合\n攻擊力增加200%\n造成傷害增加50%\n普攻傷害增加100%\n必殺技傷害增加60%\n必殺時，觸發「使目標受到光屬性傷害增加30%(最多1層)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `勇者的職責`,
                    description: `攻擊力增加50%\n普攻傷害增加50%\n必殺傷害增加30%\n對防禦目標傷害增加100%\n自身以外我方全體獲得「攻擊時，觸發『使我方【聖劍覺醒 神田綾音】當前必殺技CD減少1回合』」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `覺醒聖劍。卡利伯`,
                    description: `攻擊時，觸發「使目標被治療時回復量減少5%(最多10層)」\n防禦時，觸發「《破曉之光》」\n\n《破曉之光》\n以自身最大HP20%給予自身護盾(1回合)\n使自身獲得「普攻時，追加『以自身攻擊力50%對目標造成傷害』(2回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `聖劍解放，最終型態！`,
                    description: `造成傷害增加30%\n自身以外我方全體攻擊者獲得「第1回合時，觸發『使我方【聖劍覺醒 神田綾音】當前必殺技CD減少20回合』(觸發1次後清除)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `造成傷害+`,
                    description: `使自身造成傷害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `完全免疫`,
                    description: `使自身免疫沉默\n使自身免疫麻痺\n使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `圣剑咆哮。星辰编年`,
                    description: `使目标受到光属性伤害增加18/21/24/27/30%(8回合)(不可迭加)，并使我方全体攻击者获得「普攻时，追加『以自身攻击力0/0/15/20/25%对目标造成伤害』(8回合)(不可迭加)」，再以自身攻击力140%对目标造成伤害6/7/8/9/10次。CD:40`
                },
                [SkillType.SKILL_1]: {
                    name: `圣剑咆哮。星辰编年`,
                    description: `使目标受到光属性伤害增加18%(8回合)(不可迭加)，再以自身攻击力140%对目标造成伤害6次。CD:40`
                },
                [SkillType.SKILL_2]: {
                    name: `圣剑咆哮。星辰编年`,
                    description: `使目标受到光属性伤害增加21%(8回合)(不可迭加)，再以自身攻击力140%对目标造成伤害7次。CD:40`
                },
                [SkillType.SKILL_3]: {
                    name: `圣剑咆哮。星辰编年`,
                    description: `使目标受到光属性伤害增加24%(8回合)(不可迭加)，并使我方全体攻击者获得「普攻时，追加『以自身攻击力15%对目标造成伤害』(8回合)(不可迭加)」，再以自身攻击力140%对目标造成伤害8次。CD:40`
                },
                [SkillType.SKILL_4]: {
                    name: `圣剑咆哮。星辰编年`,
                    description: `使目标受到光属性伤害增加27%(8回合)(不可迭加)，并使我方全体攻击者获得「普攻时，追加『以自身攻击力20%对目标造成伤害』(8回合)(不可迭加)」，再以自身攻击力140%对目标造成伤害9次。CD:40`
                },
                [SkillType.SKILL_5]: {
                    name: `圣剑咆哮。星辰编年`,
                    description: `使目标受到光属性伤害增加30%(8回合)(不可迭加)，并使我方全体攻击者获得「普攻时，追加『以自身攻击力25%对目标造成伤害』(8回合)(不可迭加)」，再以自身攻击力140%对目标造成伤害10次。CD:40`
                },
                [SkillType.ATTACK]: {
                    name: `逆刃`,
                    description: `使目标受到伤害增加10%(2回合)(不可迭加)，再以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `最后的勇者`,
                    description: `我方全体最大HP增加40%\n光属性角色以外我方全体获得「第1回合时，触发『使我方【圣剑觉醒 神田绫音】获得1层《应当守护的存在》(最多4层)』(触发1次后清除)」\n自身《应当守护的存在》层数=4时，开启「《守护一切的决心》」\n\n《守护一切的决心》\n必杀技最大CD减少20回合\n攻击力增加200%\n造成伤害增加50%\n普攻伤害增加100%\n必杀技伤害增加60%\n必杀时，触发「使目标受到光属性伤害增加30%(最多1层)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `勇者的职责`,
                    description: `攻击力增加50%\n普攻伤害增加50%\n必杀伤害增加30%\n对防御目标伤害增加100%\n自身以外我方全体获得「攻击时，触发『使我方【圣剑觉醒 神田绫音】当前必杀技CD减少1回合』」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `觉醒圣剑。卡利伯`,
                    description: `攻击时，触发「使目标被治疗时回復量减少5%(最多10层)」\n防御时，触发「《破晓之光》」\n\n《破晓之光》\n以自身最大HP20%给予自身护盾(1回合)\n使自身获得「普攻时，追加『以自身攻击力50%对目标造成伤害』(2回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `圣剑解放，最终型态！`,
                    description: `造成伤害增加30%\n自身以外我方全体攻击者获得「第1回合时，触发『使我方【圣剑觉醒 神田绫音】当前必杀技CD减少20回合』(触发1次后清除)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `造成伤害+`,
                    description: `使自身造成伤害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `完全免疫`,
                    description: `使自身免疫沉默\n使自身免疫麻痺\n使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Unleashed: Star Chronicles`,
                    description: `Increase the target's Damage Taken from Light attacks by 18/21/24/27/30% for 8 turns (non-stackable), gain all allied Attackers the following effect: On Basic Attack, deal additional damage to the target for 8 turns (0/0/15/20/25% Attack Power) (non-stackable), then damage the target 6/7/8/9/10 times (140% Attack Power). CD: 40`
                },
                [SkillType.SKILL_1]: {
                    name: `Unleashed: Star Chronicles`,
                    description: `Increase the target's Damage Taken from Light attacks by 18% for 8 turns (non-stackable), then damage the target 6 times (140% Attack Power). CD: 40`
                },
                [SkillType.SKILL_2]: {
                    name: `Unleashed: Star Chronicles`,
                    description: `Increase the target's Damage Taken from Light attacks by 21% for 8 turns (non-stackable), then damage the target 7 times (140% Attack Power). CD: 40`
                },
                [SkillType.SKILL_3]: {
                    name: `Unleashed: Star Chronicles`,
                    description: `Increase the target's Damage Taken from Light attacks by 24% for 8 turns (non-stackable), gain all allied Attackers the following effect: On Basic Attack, deal additional damage to the target for 8 turns (15% Attack Power) (non-stackable), then damage the target 8 times (140% Attack Power). CD: 40`
                },
                [SkillType.SKILL_4]: {
                    name: `Unleashed: Star Chronicles`,
                    description: `Increase the target's Damage Taken from Light attacks by 27% for 8 turns (non-stackable), gain all allied Attackers the following effect: On Basic Attack, deal additional damage to the target for 8 turns (20% Attack Power) (non-stackable), then damage the target 9 times (140% Attack Power). CD: 40`
                },
                [SkillType.SKILL_5]: {
                    name: `Unleashed: Star Chronicles`,
                    description: `Increase the target's Damage Taken from Light attacks by 30% for 8 turns (non-stackable), gain all allied Attackers the following effect: On Basic Attack, deal additional damage to the target for 8 turns (25% Attack Power) (non-stackable), then damage the target 10 times (140% Attack Power). CD: 40`
                },
                [SkillType.ATTACK]: {
                    name: `Reverse Blade`,
                    description: `Increase the target's Damage Taken by 10% for 2 turns (non-stackable), then damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Final Hero`,
                    description: `Increase the party's max HP by 40%.\nAll allies except for Light allies gain the following effect: On the 1st turn, trigger the following effect: Allied Blademaster Unleashed Ayane gains 1 stack of "The One Worth Protecting" (max 4 stacks) (removes after triggering once).\nWhen your stacks of "The One Worth Protecting" = 4, activate "Vow to Protect All".\n\n"Vow to Protect All"\nDecrease your max Ultimate Skill CD by 20 turns.\nIncrease Attack Power by 200%.\nIncrease Damage Output by 50%.\nIncrease Basic Attack Power by 100%.\nIncrease Ultimate Skill Power by 60%.\nOn Ultimate Skill, trigger the following effect: Increase the target's Damage Taken from Light attacks by 30% (max 1 stack).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `A Hero's Duty`,
                    description: `Increase Attack Power by 50%.\nIncrease Basic Attack Power by 50%.\nIncrease Ultimate Skill Power by 30%.\nIncrease the Damage Output against targets in Guard Stance by 100%.\nOther allies gain the following effect: On Attack, trigger the following effect: Decrease allied Blademaster Unleashed Ayane's current Ultimate Skill CD by 1 turn.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Awakened Blademaster Calibur`,
                    description: `On Attack, trigger the following effect: Decrease the target's Recovery Rate by 5% (max 10 stacks).\nWhen in Guard Stance, trigger "Dawn's Light".\n\n"Dawn's Light"\nGain yourself a Shield for 20% of your max HP for 1 turn.\nGain yourself the following effect: On Basic Attack, deal additional damage to the target for 2 turns (50% Attack Power).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Blademaster: Final Form`,
                    description: `Increase Damage Output by 30%.\nOther allied Attackers gain the following effect: On the 1st turn, trigger the following effect: Decrease allied Blademaster Unleashed Ayane's current Ultimate Skill CD by 20 turns (removes after triggering once).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage Output+`,
                    description: `Increase your damage output by 7.5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Complete Immunity`,
                    description: `Gain yourself immunity to Silence.\nGain yourself immunity to Paralysis.\nGain yourself immunity to Sleep.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `聖剣咆哮・星の編年`,
                    description: `ターゲットが受ける光属性ダメージを18/21/24/27/30%増加させ(8ターン)(スタック不可)、味方全体のアタッカーが「通常攻撃時『自分の0/0/15/20/25%の攻撃力でターゲットにダメージを与える』を追加する(8ターン)(スタック不可)」を獲得し、さらに自分の140%の攻撃力でターゲットに6/7/8/9/10回ダメージを与える[CD:40]`
                },
                [SkillType.SKILL_1]: {
                    name: `聖剣咆哮・星の編年`,
                    description: `ターゲットが受ける光属性ダメージを18%増加させ(8ターン)(スタック不可)、自分の140%の攻撃力でターゲットに6回ダメージを与える[CD:40]`
                },
                [SkillType.SKILL_2]: {
                    name: `聖剣咆哮・星の編年`,
                    description: `ターゲットが受ける光属性ダメージを21%増加させ(8ターン)(スタック不可)、自分の140%の攻撃力でターゲットに7回ダメージを与える[CD:40]`
                },
                [SkillType.SKILL_3]: {
                    name: `聖剣咆哮・星の編年`,
                    description: `ターゲットが受ける光属性ダメージを24%増加させ(8ターン)(スタック不可)、味方全体のアタッカーが「通常攻撃時『自分の15%の攻撃力でターゲットにダメージを与える』を追加する(8ターン)(スタック不可)」を獲得し、さらに自分の140%の攻撃力でターゲットに8回ダメージを与える[CD:40]`
                },
                [SkillType.SKILL_4]: {
                    name: `聖剣咆哮・星の編年`,
                    description: `ターゲットが受ける光属性ダメージを27%増加させ(8ターン)(スタック不可)、味方全体のアタッカーが「通常攻撃時『自分の20%の攻撃力でターゲットにダメージを与える』を追加する(8ターン)(スタック不可)」を獲得し、さらに自分の140%の攻撃力でターゲットに9回ダメージを与える[CD:40]`
                },
                [SkillType.SKILL_5]: {
                    name: `聖剣咆哮・星の編年`,
                    description: `ターゲットが受ける光属性ダメージを30%増加させ(8ターン)(スタック不可)、味方全体のアタッカーが「通常攻撃時『自分の25%の攻撃力でターゲットにダメージを与える』を追加する(8ターン)(スタック不可)」を獲得し、さらに自分の140%の攻撃力でターゲットに10回ダメージを与える[CD:40]`
                },
                [SkillType.ATTACK]: {
                    name: `逆刃`,
                    description: `ターゲットが受けるダメージを10%増加させ(2ターン)(スタック不可)、自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `最後の勇者`,
                    description: `味方全体の最大HPが40%増加する\n光属性以外の味方全体が「1ターン目に『味方の【聖剣解放 神田綾音】が《守るべき存在》を1スタック獲得する(最高4スタック)』を誘発する(誘発1回後に解除)」を獲得する\n自分の《守るべき存在》のスタック数が=4の時、「《全てを守る決意》」を発動する\n\n《全てを守る決意》\n必殺技の最大CDが20ターン減少する\n攻撃力が200%増加する\n与えるダメージが50%増加する\n通常攻撃ダメージが100%増加する\n必殺技ダメージが60%増加する\n必殺技攻撃時「ターゲットが光属性から受けるダメージを30%増加させる(最高1スタック)」を誘発する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `勇者の使命`,
                    description: `攻撃力が50%増加する\n通常攻撃ダメージが50%増加する\n必殺技ダメージが30%増加する\n防御中のターゲットへのダメージが100%増加する\n自分以外の味方全体が「攻撃時『味方の【聖剣解放 神田綾音】の現在の必殺技CDを1ターン減少させる』を誘発する」を獲得する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `聖剣覚醒・カリバー`,
                    description: `攻撃時「ターゲットが治療を受ける時、回復HP量を5%減少させる(最高10スタック)」を誘発する\n防御時「《暁の光》」を誘発する\n\n《暁の光》\n自分の最大HPの20%分で自分に盾を張る(1ターン)\n自分が「通常攻撃時『自分の50%の攻撃力でターゲットにダメージを与える』を追加する(2ターン)」を獲得する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `聖剣解放、最終形態！`,
                    description: `与えるダメージが30%増加する\n自分以外の味方アタッカー全体が「1ターン目に『味方の【聖剣解放 神田綾音】の現在の必殺技CDを20ターン減少させる』を誘発する(誘発1回後に解除)」を獲得する`
                },
                [SkillType.GENERAL_1]: {
                    name: `与えるダメージ+`,
                    description: `自分の与えるダメージを7.5%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `完全無効`,
                    description: `自分を沈黙無効にする\n自分を麻痺無効にする\n自分を睡眠無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `성검 포효 ‧ 성진편년`,
                    description: `타깃이 받는 광속성 데미지 18/21/24/27/30% 증가(8턴)(중첩 불가), 아군 전체 딜러는 「일반 공격 시 『자신의 공격 데미지의 0/0/15/20/25%만큼 타깃에게 데미지』추가(8턴)(중첩 불가)」획득, 자신의 공격 데미지의 140%만큼 타깃에게 6/7/8/9/10회 데미지 [CD: 40]`
                },
                [SkillType.SKILL_1]: {
                    name: `성검 포효 ‧ 성진편년`,
                    description: `타깃이 받는 광속성 데미지 18% 증가(8턴)(중첩 불가), 자신의 공격 데미지의 140%만큼 타깃에게 6회 데미지 [CD: 40]`
                },
                [SkillType.SKILL_2]: {
                    name: `성검 포효 ‧ 성진편년`,
                    description: `타깃이 받는 광속성 데미지 21% 증가(8턴)(중첩 불가), 자신의 공격 데미지의 140%만큼 타깃에게 7회 데미지 [CD: 40]`
                },
                [SkillType.SKILL_3]: {
                    name: `성검 포효 ‧ 성진편년`,
                    description: `타깃이 받는 광속성 데미지 24% 증가(8턴)(중첩 불가), 아군 전체 딜러는 「일반 공격 시 『자신의 공격 데미지의 15%만큼 타깃에게 데미지』추가(8턴)(중첩 불가)」획득, 자신의 공격 데미지의 140%만큼 타깃에게 8회 데미지 [CD: 40]`
                },
                [SkillType.SKILL_4]: {
                    name: `성검 포효 ‧ 성진편년`,
                    description: `타깃이 받는 광속성 데미지 27% 증가(8턴)(중첩 불가), 아군 전체 딜러는 「일반 공격 시 『자신의 공격 데미지의 20%만큼 타깃에게 데미지』추가(8턴)(중첩 불가)」획득, 자신의 공격 데미지의 140%만큼 타깃에게 9회 데미지 [CD: 40]`
                },
                [SkillType.SKILL_5]: {
                    name: `성검 포효 ‧ 성진편년`,
                    description: `타깃이 받는 광속성 데미지 30% 증가(8턴)(중첩 불가), 아군 전체 딜러는 「일반 공격 시 『자신의 공격 데미지의 25%만큼 타깃에게 데미지』추가(8턴)(중첩 불가)」획득, 자신의 공격 데미지의 140%만큼 타깃에게 10회 데미지 [CD: 40]`
                },
                [SkillType.ATTACK]: {
                    name: `역날`,
                    description: `타깃이 받는 데미지 10% 증가(2턴)(중첩 불가), 자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `마지막 용자`,
                    description: `아군 전체의 최대 HP 40% 증가 \n광속성 캐릭터 이외의 아군 전체는 「첫 번째 턴 시작 시, 『아군【성검 해방 칸다 아야네】는 1중첩의 《지켜야 할 존재》획득(최대 4중첩)』트리거(1회 트리거 후 제거)」획득 \n자신의《지켜야 할 존재》중첩수=4일 시, 「《모든 것을 지키는 결심》」활성화 \n\n《모든 것을 지키는 결심》 \n궁극기 최대 CD 20턴 감소 \n공격 데미지 200% 증가\n가하는 데미지 50% 증가 \n일반 공격 데미지 100% 증가 \n궁극기 데미지 60% 증가 \n궁극기 발동 시, 「타깃이 받는 광속성 데미지 30% 증가(최대 1중첩)」트리거`
                },
                [SkillType.PASSIVE_1]: {
                    name: `용자의 직책`,
                    description: `공격 데미지 50% 증가\n일반 공격 데미지 50% 증가\n궁극기 데미지 30% 증가\n방어한 타깃에게 가하는 데미지 100% 증가\n자신 이외의 아군 전체는 「공격 시 『아군 【성검 해방 칸다 아야네】의 현재 궁극기 CD 1턴 감소』트리거」획득`
                },
                [SkillType.PASSIVE_2]: {
                    name: `각성 성검 ‧ 칼리버`,
                    description: `공격 시 「타깃이 받는 치유량 5% 감소(최대 10중첩)」트리거\n방어 시 「《새벽빛》」트리거\n\n《새벽빛》\n자신의 최대 HP 20%만큼 자신에게 아머 강화(1턴)\n자신은 「일반 공격 시 『자신의 공격 데미지의 50%만큼 타깃에게 데미지』추가(2턴)」획득`
                },
                [SkillType.PASSIVE_3]: {
                    name: `성검 해방, 최종 형태!`,
                    description: `가하는 데미지 30% 증가\n자신 이외의 아군 전체 딜러는 「첫 번째 턴 시작 시 『아군 【성검 해방 칸다 아야네】의 현재 궁극기 CD 20턴 감소』트리거(1회 트리거 후 제거)」획득`
                },
                [SkillType.GENERAL_1]: {
                    name: `가하는 데미지+`,
                    description: `자신이 가하는 데미지 7.5% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `완전 면역`,
                    description: `자신에게 침묵 면역\n자신에게 마비 면역\n자신에게 수면 면역`
                }
            }
        }
    },
]