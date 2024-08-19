import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10023: SkillSet[] =  [
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
                    name: `狂犬的忠僕`,
                    description: `使自身攻擊力增加40/60/70/90/100%(1回合)，並以自身攻擊力20/20/22.5/22.5/25%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP15/17.5/17.5/20/20%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD :4`
                },
                [SkillType.SKILL_1]: {
                    name: `狂犬的忠僕`,
                    description: `使自身攻擊力增加40%(1回合)，並以自身攻擊力20%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP15%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `狂犬的忠僕`,
                    description: `使自身攻擊力增加60%(1回合)，並以自身攻擊力20%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP17.5%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD:4`
                    },
                [SkillType.SKILL_3]: {
                    name: `狂犬的忠僕`,
                    description: `使自身攻擊力增加70%(1回合)，並以自身攻擊力22.5%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP17.5%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `狂犬的忠僕`,
                    description: `使自身攻擊力增加90%(1回合)，並以自身攻擊力22.5%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP20%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `狂犬的忠僕`,
                    description: `使自身攻擊力增加100%(1回合)，並以自身攻擊力25%使自身以外的我方全體攻擊力增加(1回合)；使自身獲得「防禦時，觸發『以自身最大HP20%給予我方全體護盾(4回合)』(4回合)(觸發1次後解除)」，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `作戰指揮`,
                    description: `使我方全體攻擊力增加25%(1回合)，並以自身攻擊力75%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `獵犬的目光`,
                    description: `我方全體最大HP增加10%\n我方全體攻擊力增加100%\n使自身以外我方全體獲得防禦時，觸發「使我方站位1獲得1層《編制重整》(最多4層)」(50回合)\n每經過1回合時，觸發「清除自身《編制重整》的所有層數」\n當自身《編制重整》層數=4層時，發動「防禦時，觸發『使自身獲得1層《轉進》(最多1層)』」\n當自身《轉進》層數=1層時，發動《反噬的犬嚎》\n\n《反噬的犬嚎》\n必殺時，追加「以自身攻擊力25%使自身以外的我方全體攻擊力增加(1回合)」\n必殺時，追加「使我方全體造成傷害增加50%(1回合)」\n必殺時，追加「使我方全體必殺技傷害增加50%(1回合)」\n必殺時，追加「使目標受到傷害增加50%(1回合)」\n必殺時，觸發「清除自身《轉進》的所有層數」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `戰術性撤退`,
                    description: `第1回合&必殺時，觸發「使自身獲得1層《孱弱的假象》(最多1層)」\n當自身《孱弱的假象》層數=1層時，發動「《防守》」\n\n《防守》\n防禦時，觸發「使自身獲得嘲諷(1回合)」且獲得《反擊》效果」\n\n《反擊》\n被攻擊時，觸發「使我方全體造成傷害增加35%(4回合)，清除自身的《孱弱的假象》的所有層數」(1回合)(觸發1次後解除)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `驕兵之計`,
                    description: `防禦時，觸發「使自身獲得1層《反攻的時機》(最多1層)」\n當自身《反攻的時機》層數=1層時，發動「《逆襲的砲火 》」\n\n《逆襲的砲火》\n必殺時，追加「以自身攻擊力75%對目標造成傷害2次」\n必殺時，觸發「清除自身《反攻的時機》的所有層數」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `給你放個長假`,
                    description: `當自身《反攻的時機》層數=1層時，發動「《逆襲的彈雨》」\n\n《逆襲的彈雨》\n必殺時，追加「以自身攻擊力45.5%對目標造成傷害8次」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻擊+ (6潛)`,
                    description: `使自身攻擊力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潛)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `狂犬的忠仆`,
                    description: `使自身攻击力增加40/60/70/90/100%(1回合)，并以自身攻击力20/20/22.5/22.5/25%使自身以外的我方全体攻击力增加(1回合)；使自身获得「防御时，触发『以自身最大HP15/17.5/17.5/20/20%给予我方全体护盾(4回合)』(4回合)(触发1次後解除)」，CD :4`
                },
                [SkillType.SKILL_1]: {
                    name: `狂犬的忠仆`,
                    description: `使自身攻击力增加40%(1回合)，并以自身攻击力20%使自身以外的我方全体攻击力增加(1回合)；使自身获得「防御时，触发『以自身最大HP15%给予我方全体护盾(4回合)』(4回合)(触发1次後解除)」，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `狂犬的忠仆`,
                    description: `使自身攻击力增加60%(1回合)，并以自身攻击力20%使自身以外的我方全体攻击力增加(1回合)；使自身获得「防御时，触发『以自身最大HP17.5%给予我方全体护盾(4回合)』(4回合)(触发1次後解除)」，CD:4`
                    },
                [SkillType.SKILL_3]: {
                    name: `狂犬的忠仆`,
                    description: `使自身攻击力增加70%(1回合)，并以自身攻击力22.5%使自身以外的我方全体攻击力增加(1回合)；使自身获得「防御时，触发『以自身最大HP17.5%给予我方全体护盾(4回合)』(4回合)(触发1次後解除)」，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `狂犬的忠仆`,
                    description: `使自身攻击力增加90%(1回合)，并以自身攻击力22.5%使自身以外的我方全体攻击力增加(1回合)；使自身获得「防御时，触发『以自身最大HP20%给予我方全体护盾(4回合)』(4回合)(触发1次後解除)」，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `狂犬的忠仆`,
                    description: `使自身攻击力增加100%(1回合)，并以自身攻击力25%使自身以外的我方全体攻击力增加(1回合)；使自身获得「防御时，触发『以自身最大HP20%给予我方全体护盾(4回合)』(4回合)(触发1次後解除)」，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `作战指挥`,
                    description: `使我方全体攻击力增加25%(1回合)，并以自身攻击力75%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `猎犬的目光`,
                    description: `我方全体最大HP增加10%\n我方全体攻击力增加100%\n使自身以外我方全体获得防御时，触发「使我方站位1获得1层《编制重整》(最多4层)」(50回合)\n每经过1回合时，触发「清除自身《编制重整》的所有层数」\n当自身《编制重整》层数=4层时，发动「防御时，触发『使自身获得1层《转进》(最多1层)』」\n当自身《转进》层数=1层时，发动《反噬的犬嚎》\n\n《反噬的犬嚎》\n必杀时，追加「以自身攻击力25%使自身以外的我方全体攻击力增加(1回合)」\n必杀时，追加「使我方全体造成伤害增加50%(1回合)」\n必杀时，追加「使我方全体必杀技伤害增加50%(1回合)」\n必杀时，追加「使目标受到伤害增加50%(1回合)」\n必杀时，触发「清除自身《转进》的所有层数」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `战术性撤退`,
                    description: `第1回合&必杀时，触发「使自身获得1层《孱弱的假象》(最多1层)」\n当自身《孱弱的假象》层数=1层时，发动「《防守》」\n\n《防守》\n防御时，触发「使自身获得嘲讽(1回合)」且获得《反击》效果」\n\n《反击》\n被攻击时，触发「使我方全体造成伤害增加35%(4回合)，清除自身的《孱弱的假象》的所有层数」(1回合)(触发1次後解除)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `骄兵之计`,
                    description: `防御时，触发「使自身获得1层《反攻的时机》(最多1层)」\n当自身《反攻的时机》层数=1层时，发动「《逆袭的炮火 》」\n\n《逆袭的炮火》\n必杀时，追加「以自身攻击力75%对目标造成伤害2次」\n必杀时，触发「清除自身《反攻的时机》的所有层数」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `给你放个长假`,
                    description: `当自身《反攻的时机》层数=1层时，发动「《逆袭的弹雨》」\n\n《逆袭的弹雨》\n必杀时，追加「以自身攻击力45.5%对目标造成伤害8次」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻击+ (6潜)`,
                    description: `使自身攻击力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠 (12潜)`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Crazed Dog's Devoted Servant`,
                    description: `Increase your Attack Power by 40/60/70/90/100% for 1 turn, then increase other allies' Attack Power by 20/20/22.5/22.5/25% of your Attack Power for 1 turn. Gain yourself the following effect for 4 turns: When in Guard Stance, grant the party a Shield for 15/17.5/17.5/20/20% of your max HP for 4 turns. (Removes after triggering 1 time.) CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Crazed Dog's Devoted Servant`,
                    description: `Increase your Attack Power by 40% for 1 turn, then increase other allies' Attack Power by 20% of your Attack Power for 1 turn. Gain yourself the following effect for 4 turns: When in Guard Stance, grant the party a Shield for 15% of your max HP for 4 turns. (Removes after triggering 1 time.) CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Crazed Dog's Devoted Servant`,
                    description: `Increase your Attack Power by 60% for 1 turn, then increase other allies' Attack Power by 20% of your Attack Power for 1 turn. Gain yourself the following effect for 4 turns: When in Guard Stance, grant the party a Shield for 17.5% of your max HP for 4 turns. (Removes after triggering 1 time.) CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Crazed Dog's Devoted Servant`,
                    description: `Increase your Attack Power by 70% for 1 turn, then increase other allies' Attack Power by 22.5% of your Attack Power for 1 turn. Gain yourself the following effect for 4 turns: When in Guard Stance, grant the party a Shield for 17.5% of your max HP for 4 turns. (Removes after triggering 1 time.) CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Crazed Dog's Devoted Servant`,
                    description: `Increase your Attack Power by 90% for 1 turn, then increase other allies' Attack Power by 22.5% of your Attack Power for 1 turn. Gain yourself the following effect for 4 turns: When in Guard Stance, grant the party a Shield for 20% of your max HP for 4 turns. (Removes after triggering 1 time.) CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Crazed Dog's Devoted Servant`,
                    description: `Increase your Attack Power by 100% for 1 turn, then increase other allies' Attack Power by 25% of your Attack Power for 1 turn. Gain yourself the following effect for 4 turns: When in Guard Stance, grant the party a Shield for 20% of your max HP for 4 turns. (Removes after triggering 1 time.) CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Operational Command`,
                    description: `Increase the party's Attack Power by 25% for 1 turn, then damage the target (75% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Hound's Gaze`,
                    description: `Increase the party's max HP by 10%.\nIncrease the party's Attack Power by 100%.\nWhen the other allies are in Guard Stance, trigger the following effect: When in Guard Stance, gain the 1st position ally 1 stack of "Force Restructuring" for 50 turns. (max 4 stacks)\nAfter every 1 turn, remove all your "Force Restructuring" stacks.\nWhen you reach 4 stacks of "Force Restructuring", trigger the following effect: When in Guard Stance, gain yourself 1 stack of "Advance Movement". (max 1 stack)\nWhen you reach 1 stack of "Advance Movement", trigger "Backlash Howl".\n\n"Backlash Howl"\nOn Ultimate Skill,  increase other allies' Attack Power by 25% of your Attack Power for 1 turn.\nOn Ultimate Skill, increase the party's Damage Output by 50% for 1 turn.\nOn Ultimate Skill, increase the party's Ultimate Skill Power by 50% for 1 turn.\nOn Ultimate Skill, increase the target's Damage Taken by 50% for 1 turn.\nOn Ultimate Skill, remove all your "Advance Movement" stacks.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Tactical Retreat`,
                    description: `On the 1st turn and Ultimate Skill, gain yourself 1 stack of "Fragile Illusion". (max 1 stack)\nWhen you reach 1 stack of "Fragile Illusion", trigger "Defense".\n\n"Defense"\nWhen in Guard Stance, gain yourself Taunt for 1 turn and "Counterattack".\n\n"Counterattack"\nWhen attacked, increase the party's Damage Output by 35% for 4 turns and remove all your "Fragile Illusion" stacks for 1 turn. (Removes after triggering 1 time)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Arrogant Soldier`,
                    description: `When in Guard Stance, gain yourself 1 stack of "Opportunity for Counterattack".\nWhen you reach 1 stack of "Opportunity for Counterattack", trigger "Counterstrike Artillery".\n\n"Counterstrike Artillery"\nOn Ultimate Skill, deal additional damage to the target 2 times (75% Attack Power).\nOn Ultimate Skill, remove all your "Opportunity for Counterattack" stacks.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Pushing Up Daisies`,
                    description: `When you reach 1 stack of "Opportunity for Counterattack", trigger "Counterstrike Barrage".\n\n"Counterstrike Barrage"\nOn Ultimate Skill, deal additional damage to the target 8 times (45.5% Attack Power).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack+`,
                    description: `Increase your Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain immunity to Sleep.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `狂犬の忠僕`,
                    description: `自分の攻撃力を40/60/70/90/100%増加させ(1ターン)、自分以外の味方の攻撃力を自分の攻撃力の20/20/22.5/22.5/25%分増加させ(1ターン)、自分が「防御時『自分の最大HPの15/17.5/17.5/20/20%分味方全体に盾を張る(4ターン)』を誘発する(4ターン)(1回誘発すると解除される)」を得る[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `狂犬の忠僕`,
                    description: `自分の攻撃力を40%増加させ(1ターン)、自分以外の味方の攻撃力を自分の攻撃力の20%分増加させ(1ターン)、自分が「防御時『自分の最大HPの15%分味方全体に盾を張る(4ターン)』を誘発する(4ターン)(1回誘発すると解除される)」を得る[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `狂犬の忠僕`,
                    description: `自分の攻撃力を60%増加させ(1ターン)、自分以外の味方の攻撃力を自分の攻撃力の20%分増加させ(1ターン)、自分が「防御時『自分の最大HPの17.5%分味方全体に盾を張る(4ターン)』を誘発する(4ターン)(1回誘発すると解除される)」を得る[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `狂犬の忠僕`,
                    description: `自分の攻撃力を70%増加させ(1ターン)、自分以外の味方の攻撃力を自分の攻撃力の22.5%分増加させ(1ターン)、自分が「防御時『自分の最大HPの17.5%分味方全体に盾を張る(4ターン)』を誘発する(4ターン)(1回誘発すると解除される)」を得る[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `狂犬の忠僕`,
                    description: `自分の攻撃力を90%増加させ(1ターン)、自分以外の味方の攻撃力を自分の攻撃力の22.5%分増加させ(1ターン)、自分が「防御時『自分の最大HPの20%分味方全体に盾を張る(4ターン)』を誘発する(4ターン)(1回誘発すると解除される)」を得る[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `狂犬の忠僕`,
                    description: `自分の攻撃力を100%増加させ(1ターン)、自分以外の味方の攻撃力を自分の攻撃力の25%分増加させ(1ターン)、自分が「防御時『自分の最大HPの20%分味方全体に盾を張る(4ターン)』を誘発する(4ターン)(1回誘発すると解除される)」を得る[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `作戦指揮`,
                    description: `味方全体の攻撃力を25%増加させ(1ターン)、自分の75%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `ハウンドの目`,
                    description: `味方全体の最大HPを10%増加させる\n味方全体の攻撃力を100%増加させる\n自分以外の味方全体が防御を獲得したとき「味方の1番目のメンバーが1スタックの《編制整理》を得る(最高4スタック)」を誘発する(50ターン)\n1ターン毎に「自分の《編制整理》のスタック数をすべて消す」を誘発する\n自分の《編制整理》のスタック数が4のとき「防御時『自分が1スタックの《転進》を得る(最高1スタック)』を誘発する」を発動する\n自分の《転進》のスタック数が1のとき《反噬の唸り》を発動する\n\n《反噬の唸り》\n必殺技攻撃時「自分以外の味方の攻撃力を自分の攻撃力の25%分増加させ(1ターン)」を追加する\n必殺技攻撃時「味方全体の与えるダメージを50%増加させる(1ターン)」を追加する\n必殺技攻撃時「味方全体の必殺技ダメージを50%増加させる(1ターン)」を追加する\n必殺技攻撃時「ターゲットが受けるダメージを50%増加させる(1ターン)」を追加する\n必殺技攻撃時「自分の《転進》のスタック数をすべて消す」を誘発する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `戦術型撤退`,
                    description: `1ターン目&必殺技攻撃時「自分が1スタックの《繊弱の偽り》を得る(最高1スタック)」を誘発する\n自分の《繊弱の偽り》のスタック数が1のとき《守備》を発動する\n\n《守備》\n防御時「自分が挑発を得て(1ターン)、《反撃》效果を得る」を誘発する\n\n《反撃》\n攻撃を受けた時「味方全体の与えるダメージを35%増加させる(4ターン)、自分の《繊弱の偽り》のスタック数をすべて消す」を誘発する(1ターン)(1回誘発すると解除される)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `驕兵の策`,
                    description: `防御時「自分が1スタックの《反撃チャンス》を得る(最高1スタック)」を誘発する\n自分の《反撃チャンス》のスタック数が1のとき《逆襲の砲火》を発動する\n\n《逆襲の砲火》\n必殺技攻撃時「自分の75%の攻撃力でターゲットに2回ダメージを与える」を追加する\n必殺技攻撃時「自分の《反撃チャンス》のスタック数をすべて消す」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `長期休暇をあげる`,
                    description: `自分の《反撃チャンス》のスタック数が1のとき《逆襲の弾雨》を発動する\n\n《逆襲の弾雨》\n必殺技攻撃時「自分の45.5%の攻撃力でターゲットに8回ダメージを与える」を追加する`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻撃+`,
                    description: `自分の攻撃力を10%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `睡眠無効`,
                    description: `自分を睡眠無効にする`
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