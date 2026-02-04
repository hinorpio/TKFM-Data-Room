import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10196: SkillSet[] =  [
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
                    name: `啞鈴裂斷破`,
                    description: `使自身攻擊力增加30/35/40/45/50%(1回合)，使我方全體攻擊者、守護者、妨礙者必殺技傷害增加0/17.5/20/22.5/25%(1回合)，並獲得「必殺時，追加『以自身攻擊力30/35/40/45/50%對目標造成傷害』(1回合)」，並使目標受到傷害增加9/10.5/12/13.5/15%(1回合) CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `啞鈴裂斷破`,
                    description: `使自身攻擊力增加30%(1回合)，使我方全體攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力30%對目標造成傷害』(1回合)」，並使目標受到傷害增加9%(1回合) CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `啞鈴裂斷破`,
                    description: `使自身攻擊力增加35%(1回合)，使我方全體攻擊者、守護者、妨礙者必殺技傷害增加17.5%(1回合)，並獲得「必殺時，追加『以自身攻擊力35%對目標造成傷害』(1回合)」，並使目標受到傷害增加10.5%(1回合) CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `啞鈴裂斷破`,
                    description: `使自身攻擊力增加40%(1回合)，使我方全體攻擊者、守護者、妨礙者必殺技傷害增加20%(1回合)，並獲得「必殺時，追加『以自身攻擊力40%對目標造成傷害』(1回合)」，並使目標受到傷害增加12%(1回合) CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `啞鈴裂斷破`,
                    description: `使自身攻擊力增加45%(1回合)，使我方全體攻擊者、守護者、妨礙者必殺技傷害增加22.5%(1回合)，並獲得「必殺時，追加『以自身攻擊力45%對目標造成傷害』(1回合)」，並使目標受到傷害增加13.5%(1回合) CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `啞鈴裂斷破`,
                    description: `使自身攻擊力增加50%(1回合)，使我方全體攻擊者、守護者、妨礙者必殺技傷害增加25%(1回合)，並獲得「必殺時，追加『以自身攻擊力50%對目標造成傷害』(1回合)」，並使目標受到傷害增加15%(1回合) CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `蓄力一擊`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `婚紗矮人王的真心`,
                    description: `我方全體最大HP增加50%\n我方全體攻擊力增加50%\n自身獲得「當自身《伴侶之力》≧1層時，開啟『普攻時，觸發「使目標受到風屬性傷害增加10%(3回合)」』」\n自身獲得「當自身《伴侶之力》≧4層時，開啟『攻擊力增加50%』」\n自身獲得「當自身《伴侶之力》=8層時，開啟『必殺時，觸發「使我方全體造成傷害增加20%(1回合)」』」\n自身獲得「我方隊伍恰好為1種屬性時，開啟『第1回合時，觸發「使自身以外我方全體獲得《捧花持有者》」』」(觸發1次後清除)\n\n《捧花持有者》\n攻擊力增加50%(50回合)\n造成傷害增加50%(50回合)\n必殺技傷害增加50%(50回合)\n攻擊時，觸發「使我方【花嫁　蘭兒】獲得1層《伴侶之力》(最多8層)」(50回合)\n必殺時，追加「以自身攻擊力75%對目標造成傷害」(50回合)\n行動後，觸發「清除自身以外我方全體《捧花持有者》的所有效果」(50回合)(觸發1次後清除)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `幸福的重量`,
                    description: `普攻時，觸發「使自身攻擊力增加25%(3回合)，並使目標獲得《矮人王的威壓》」\n我方全體攻擊者、守護者、妨礙者獲得「我方隊伍輔助者有2人以上時，開啟『觸發技效果減少500%』」(負面效果)\n\n《矮人王的威壓》\n被攻擊時，觸發「使目標攻擊力增加25%(3回合)、造成傷害增加10%(3回合)」(1回合)	`
                },
                [SkillType.PASSIVE_2]: {
                    name: `要把捧花接好喔！`,
                    description: `必殺時，追加『《全力捧花啞鈴投擲》』」\n\n《全力啞鈴捧花投擲》\n以自身攻擊力30%使我方全體攻擊力增加(1回合)\n使我方全體必殺技傷害增加10%(1回合)\n使目標受到風屬性傷害增加30%(1回合)\n以自身攻擊力200%對目標造成傷害`
                },
                [SkillType.PASSIVE_3]: {
                    name: `愛即是力量`,
                    description: `普攻時，觸發「使自身獲得1層《修煉幸福》(最多2層)」\n當自身《修煉幸福》=2層時，開啟「必殺時，追加『使自身以外我方全體獲得《風之祝福》效果，並清除自身《修煉幸福》的所有層數』」\n\n自身以外我方全體獲得「受到《風之祝福》效果時，觸發『使自身攻擊力增加15%(最多5層)、必殺技傷害增加5%(最多5層)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻擊+`,
                    description: `使自身攻擊力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `哑铃裂断破`,
                    description: `使自身攻击力增加30/35/40/45/50%(1回合)，使我方全体攻击者、守护者、妨碍者必杀技伤害增加0/17.5/20/22.5/25%(1回合)，并获得「必杀时，追加『以自身攻击力30/35/40/45/50%对目标造成伤害』(1回合)」，并使目标受到伤害增加9/10.5/12/13.5/15%(1回合) CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `哑铃裂断破`,
                    description: `使自身攻击力增加30%(1回合)，使我方全体攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力30%对目标造成伤害』(1回合)」，并使目标受到伤害增加9%(1回合) CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `哑铃裂断破`,
                    description: `使自身攻击力增加35%(1回合)，使我方全体攻击者、守护者、妨碍者必杀技伤害增加17.5%(1回合)，并获得「必杀时，追加『以自身攻击力35%对目标造成伤害』(1回合)」，并使目标受到伤害增加10.5%(1回合) CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `哑铃裂断破`,
                    description: `使自身攻击力增加40%(1回合)，使我方全体攻击者、守护者、妨碍者必杀技伤害增加20%(1回合)，并获得「必杀时，追加『以自身攻击力40%对目标造成伤害』(1回合)」，并使目标受到伤害增加12%(1回合) CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `哑铃裂断破`,
                    description: `使自身攻击力增加45%(1回合)，使我方全体攻击者、守护者、妨碍者必杀技伤害增加22.5%(1回合)，并获得「必杀时，追加『以自身攻击力45%对目标造成伤害』(1回合)」，并使目标受到伤害增加13.5%(1回合) CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `哑铃裂断破`,
                    description: `使自身攻击力增加50%(1回合)，使我方全体攻击者、守护者、妨碍者必杀技伤害增加25%(1回合)，并获得「必杀时，追加『以自身攻击力50%对目标造成伤害』(1回合)」，并使目标受到伤害增加15%(1回合) CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `蓄力一击`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `婚纱矮人王的真心`,
                    description: `我方全体最大HP增加50%\n我方全体攻击力增加50%\n自身获得「当自身《伴侣之力》≧1层时，开启『普攻时，触发「使目标受到风属性伤害增加10%(3回合)」』」\n自身获得「当自身《伴侣之力》≧4层时，开启『攻击力增加50%』」\n自身获得「当自身《伴侣之力》=8层时，开启『必杀时，触发「使我方全体造成伤害增加20%(1回合)」』」\n自身获得「我方队伍恰好为1种属性时，开启『第1回合时，触发「使自身以外我方全体获得《捧花持有者》」』」(触发1次后清除)\n\n《捧花持有者》\n攻击力增加50%(50回合)\n造成伤害增加50%(50回合)\n必杀技伤害增加50%(50回合)\n攻击时，触发「使我方【花嫁　兰儿】获得1层《伴侣之力》(最多8层)」(50回合)\n必杀时，追加「以自身攻击力75%对目标造成伤害」(50回合)\n行动后，触发「清除自身以外我方全体《捧花持有者》的所有效果」(50回合)(触发1次后清除)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `幸福的重量`,
                    description: `普攻时，触发「使自身攻击力增加25%(3回合)，并使目标获得《矮人王的威压》」\n我方全体攻击者、守护者、妨碍者获得「我方队伍辅助者有2人以上时，开启『触发技效果减少500%』」(负面效果)\n\n《矮人王的威压》\n被攻击时，触发「使目标攻击力增加25%(3回合)、造成伤害增加10%(3回合)」(1回合)	`
                },
                [SkillType.PASSIVE_2]: {
                    name: `要把捧花接好喔！`,
                    description: `必杀时，追加『《全力捧花哑铃投掷》』」\n\n《全力哑铃捧花投掷》\n以自身攻击力30%使我方全体攻击力增加(1回合)\n使我方全体必杀技伤害增加10%(1回合)\n使目标受到风属性伤害增加30%(1回合)\n以自身攻击力200%对目标造成伤害`
                },
                [SkillType.PASSIVE_3]: {
                    name: `爱即是力量`,
                    description: `普攻时，触发「使自身获得1层《修炼幸福》(最多2层)」\n当自身《修炼幸福》=2层时，开启「必杀时，追加『使自身以外我方全体获得《风之祝福》效果，并清除自身《修炼幸福》的所有层数』」\n\n自身以外我方全体获得「受到《风之祝福》效果时，触发『使自身攻击力增加15%(最多5层)、必杀技伤害增加5%(最多5层)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻击+`,
                    description: `使自身攻击力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Dumbbell Break`,
                    description: `Increase your Attack Power by 30/35/40/45/50% for 1 turn. All allied Attackers, Defenders, and Obstructors gain the following effect: Increase Ultimate Skill Power by 0/17.5/20/22.5/25% for 1 turn. On Ultimate Skill, deal additional damage to the target for 1 turn (30/35/40/45/50% Attack Power) and increase the target's Damage Taken by 9/10.5/12/13.5/15% for 1 turn. CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Dumbbell Break`,
                    description: `Increase your Attack Power by 30% for 1 turn. All allied Attackers, Defenders, and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (30% Attack Power) and increase the target's Damage Taken by 9% for 1 turn. CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Dumbbell Break`,
                    description: `Increase your Attack Power by 35% for 1 turn. All allied Attackers, Defenders, and Obstructors gain the following effect: Increase Ultimate Skill Power by 17.5% for 1 turn. On Ultimate Skill, deal additional damage to the target for 1 turn (35% Attack Power) and increase the target's Damage Taken by 10.5% for 1 turn. CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Dumbbell Break`,
                    description: `Increase your Attack Power by 40% for 1 turn. All allied Attackers, Defenders, and Obstructors gain the following effect: Increase Ultimate Skill Power by 20% for 1 turn. On Ultimate Skill, deal additional damage to the target for 1 turn (40% Attack Power) and increase the target's Damage Taken by 12% for 1 turn. CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Dumbbell Break`,
                    description: `Increase your Attack Power by 45% for 1 turn. All allied Attackers, Defenders, and Obstructors gain the following effect: Increase Ultimate Skill Power by 22.5% for 1 turn. On Ultimate Skill, deal additional damage to the target for 1 turn (45% Attack Power) and increase the target's Damage Taken by 13.5% for 1 turn. CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Dumbbell Break`,
                    description: `Increase your Attack Power by 50% for 1 turn. All allied Attackers, Defenders, and Obstructors gain the following effect: Increase Ultimate Skill Power by 25% for 1 turn. On Ultimate Skill, deal additional damage to the target for 1 turn (50% Attack Power) and increase the target's Damage Taken by 15% for 1 turn. CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Charged Hit`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Dwarf Bride's True Heart`,
                    description: `Increase the party's max HP by 50% \nIncrease the party's Attack Power by 50% \nGain yourself the following effect: When your "Partner Power" stacks are ≥ 1, activate "On Basic Attack, trigger the following effect: Increase the target's Damage Taken from Wind attacks by 10% for 3 turns".\nGain yourself the following effect: When your "Partner Power" stacks are ≥ 4, activate "Increase Attack Power by 50%".\nGain yourself the following effect: When your "Partner Power" stacks are = 8, activate "On Ultimate Skill, trigger the following effect: Increase the party's Damage Output by 20% for 1 turn".\nGain yourself the following effect:  When there are only characters of 1 attribute in the party, activate "On the 1st turn, trigger the following effect: Other allies gain "Bouquet Holder". (Removes after triggering once)\n\n"Bouquet Holder"\nIncrease Attack Power by 50% for 50 turns.\nIncrease Damage Output by 50% for 50 turns.\nIncrease Ultimate Skill Power by 50% for 50 turns.\nOn Attack, trigger the following effect: Gain allied [Bride Lana] 1 stack of "Partner Power" for 50 turns (max 8 stacks).\nOn Ultimate Skill, deal additional damage to the target for 50 turns (75% Attack Power).\nAfter performing an action, trigger the following effect: Remove other allies' "Bouquet Holder" effects for 50 turns. (Removes after triggering once)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Weight of Bliss`,
                    description: `On Basic Attack, trigger the following effect: Increase your Attack Power by 25% for 3 turns and the target gains "Dwarf Queen's Awe".\nAllied Attackers, Defenders, and Obstructors gain the following effect: When there are 2 or more Supporters in the party, activate "Decrease trigger ability effects by 500%". (Debuff)\n\n"Dwarf Queen's Awe"\nWhen attacked, trigger the following effect for 1 turn: Increase the target's Attack Power by 25% for 3 turns and Damage Output by 10% for 3 turns.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Catch Bouquet!`,
                    description: `On Ultimate Skill, gain additional "Dumbbell Bouquet Toss".\n\n"Dumbbell Bouquet Toss"\nIncrease the party's Attack Power for 30% of your Attack Power for 1 turn.\nIncrease the party's Ultimate Skill Power by 10% for 1 turn.\nIncreae the target's Damage Taken from Wind attacks by 30% for 1 turn.\nDamage the target (200% Attack Power).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Love is Power`,
                    description: `On Basic Attack, trigger the following effect: Gain yourself 1 stack of "Cultivating Bliss" (max 2 stacks).\nWhen your "Cultivating Bliss" stacks are = 2, activate "On Ultimate Skill, other allies gain additional 'Wind's Blessing' effect and remove all your 'Cultivating Bliss' stacks".\n\nOther allies gain the following effect: When receiving the "Wind's Blessing" effect, trigger the following effect: Increase your Attack Power by 15% (max 5 stacks) and Ultimate Skill Power by 5% (max 5 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack+`,
                    description: `Increase your Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity`,
                    description: `Gain yourself immunity to Paralysis.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `ダンベル断裂破`,
                    description: `自分の攻撃力を30/35/40/45/50%増加させ(1ターン)、味方全体のアタッカー、ガーディアン、デバッファーの必殺技ダメージを0/17.5/20/22.5/25%増加させ(1ターン)、「必殺技攻撃時『自分の30/35/40/45/50%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、ターゲットの受けるダメージを9/10.5/12/13.5/15%増加させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `ダンベル断裂破`,
                    description: `自分の攻撃力を30%増加させ(1ターン)、味方全体のアタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の30%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、ターゲットの受けるダメージを9%増加させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `ダンベル断裂破`,
                    description: `自分の攻撃力を35%増加させ(1ターン)、味方全体のアタッカー、ガーディアン、デバッファーの必殺技ダメージを17.5%増加させ(1ターン)、「必殺技攻撃時『自分の35%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、ターゲットの受けるダメージを10.5%増加させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `ダンベル断裂破`,
                    description: `自分の攻撃力を40%増加させ(1ターン)、味方全体のアタッカー、ガーディアン、デバッファーの必殺技ダメージを20%増加させ(1ターン)、「必殺技攻撃時『自分の40%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、ターゲットの受けるダメージを12%増加させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `ダンベル断裂破`,
                    description: `自分の攻撃力を45%増加させ(1ターン)、味方全体のアタッカー、ガーディアン、デバッファーの必殺技ダメージを22.5%増加させ(1ターン)、「必殺技攻撃時『自分の45%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、ターゲットの受けるダメージを13.5%増加させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `ダンベル断裂破`,
                    description: `自分の攻撃力を50%増加させ(1ターン)、味方全体のアタッカー、ガーディアン、デバッファーの必殺技ダメージを25%増加させ(1ターン)、「必殺技攻撃時『自分の50%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、ターゲットの受けるダメージを15%増加させる(1ターン)[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `溜め攻撃`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `ウェディング小人王の真心`,
                    description: `味方全体の最大HPが50%増加する\n味方全体の攻撃力が50%増加する\n自分が「自分の《伴侶の力》のスタック数が≧1の時『通常攻撃時「ターゲットが受ける風属性ダメージを10%増加させる(3ターン)」を誘発する』を発動する」を獲得する\n自分が「自分の《伴侶の力》のスタック数が≧4の時『攻撃力が50%増加する』を発動する」を獲得する\n自分が「自分の《伴侶の力》のスタック数が=8の時『必殺技攻撃時「味方全体の与えるダメージを20%増加させる(1ターン)」を誘発する』を発動する」を獲得する\n自分が「味方チーム内の属性がちょうど1種類のみの時『1ターン目に「自分以外の味方全体が《ブーケを持つ者》を獲得する」を誘発する』を発動する」を獲得する(誘発1回後に解除)\n\n《ブーケを持つ者》\n攻撃力を50%増加する(50ターン)\n与えるダメージが50%増加する(50ターン)\n必殺技ダメージが50%増加する(50ターン)\n攻撃時「味方の【花嫁 ラン】が《伴侶の力》を1スタック獲得する(最高8スタック)」を誘発する(50ターン)\n必殺技攻撃時「自分の75%の攻撃力でターゲットにダメージを与える」を追加する(50ターン)\n行動後「自分以外の味方全体の《ブーケを持つ者》による全ての効果を消す」を誘発する(50ターン)(誘発1回後に解除)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `幸せの重み`,
                    description: `通常攻撃時「自分の攻撃力を25%増加させ(3ターン)、ターゲットが《小人王の威圧》を獲得する」を誘発する\n味方全体のアタッカー、ガーディアン、デバッファーが「チーム内に2人以上のサポーターがいる時、『誘発スキル効果が500%減少する』を発動する」を獲得する（デバフ効果）\n\n《小人王の威圧》\n攻撃を受けた時「ターゲットの攻撃力を25%増加させ(3ターン)、与えるダメージを10%増加させる(3ターン)」を誘発する(1ターン)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `ブーケちゃんと受け取ってね！`,
                    description: `必殺技攻撃時「《全力ダンベルブーケ投げ》」を追加する\n\n《全力ダンベルブーケ投げ》\n自分の攻撃力の30%分、味方全体の攻撃力を増加させる(1ターン)\n味方全体の必殺技ダメージを10%増加させる(1ターン)\nターゲットが受ける風属性ダメージを30%増加させる(1ターン)\n自分の200%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.PASSIVE_3]: {
                    name: `愛こそ力`,
                    description: `通常攻撃時「自分が《幸せの修行》を1スタック獲得する(最高2スタック)」を誘発する\n自分の《幸せの修行》のスタック数が=2の時「必殺技攻撃時『自分以外の味方全体が《風の祝福》を獲得し、自分の《幸せの修行》のスタック数をすべて消す』を追加する」を発動する\n\n自分以外の味方全体が「《風の祝福》の効果を受けた時『自分の攻撃力を15%増加させ(最高5スタック)、必殺技ダメージを5%増加させる(最高5スタック)』を誘発する」を獲得する`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻撃+`,
                    description: `自分の攻撃力を10%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `麻痺無効`,
                    description: `自分を麻痺無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `아령 열단파`,
                    description: `자신의 공격 데미지 30/35/40/45/50% 증가(1턴), 아군 딜러, 탱커, 디스럽터의 궁극기 데미지 0/17.5/20/22.5/25% 증가(1턴), 「궁극기 발동 시 『자신의 공격 데미지의 30/35/40/45/50%만큼 타깃에게 데미지』 추가(1턴)」획득, 타깃이 받는 데미지 9/10.5/12/13.5/15% 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `아령 열단파`,
                    description: `자신의 공격 데미지 30% 증가(1턴), 아군 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 30%만큼 타깃에게 데미지』추가(1턴)」 획득, 타깃이 받는 데미지 9% 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `아령 열단파`,
                    description: `자신의 공격 데미지 35% 증가(1턴), 아군 딜러, 탱커, 디스럽터의 궁극기 데미지 17.5% 증가(1턴), 「궁극기 발동 시 『자신의 공격 데미지의 35%만큼 타깃에게 데미지』 추가(1턴)」획득, 타깃이 받는 데미지 10.5% 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `아령 열단파`,
                    description: `자신의 공격 데미지 40% 증가(1턴), 아군 딜러, 탱커, 디스럽터의 궁극기 데미지 20% 증가(1턴), 「궁극기 발동 시 『자신의 공격 데미지의 40%만큼 타깃에게 데미지』 추가(1턴)」획득, 타깃이 받는 데미지 12% 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `아령 열단파`,
                    description: `자신의 공격 데미지 45% 증가(1턴), 아군 딜러, 탱커, 디스럽터의 궁극기 데미지 22.5% 증가(1턴), 「궁극기 발동 시 『자신의 공격 데미지의 45%만큼 타깃에게 데미지』 추가(1턴)」획득, 타깃이 받는 데미지 13.5% 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `아령 열단파`,
                    description: `자신의 공격 데미지 50% 증가(1턴), 아군 딜러, 탱커, 디스럽터의 궁극기 데미지 25% 증가(1턴), 「궁극기 발동 시 『자신의 공격 데미지의 50%만큼 타깃에게 데미지』 추가(1턴)」획득, 타깃이 받는 데미지 15% 증가(1턴) [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `진심 펀치`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `웨딩드레스를 입은 난쟁이 왕의 진심`,
                    description: `아군 전체의 최대 HP 50% 증가\n아군 전체의 공격 데미지 50% 증가\n자신은 「자신의 《동반자의 힘》 중첩수≧1일 시, 『일반 공격 시 「타깃이 받는 풍속성 데미지 10% 증가(3턴)」트리거』활성화」 획득\n자신은 「자신의 《동반자의 힘》 중첩수≧4일 시, 『공격 데미지 50% 증가』활성화」 획득\n자신은 「자신의 《동반자의 힘》 중첩수=8일 시, 『궁극기 발동 시 「아군 전체의 가하는 데미지 20% 증가(1턴)」트리거』활성화」 획득\n자신은 「팀이 단 1종류의 속성으로 편성됐을 시, 『첫 번째 턴 시작 시 「자신 이외의 아군 전체는 《부케를 받은 자》 획득」 트리거(1회 트리거 후 제거)』활성화」획득\n\n《부케를 받은 자》\n공격 데미지 50% 증가(50턴)\n가하는 데미지 50% 증가(50턴)\n궁극기 데미지 50% 증가(50턴)\n공격 시 「아군 【새신부 란】은 1중첩의 《동반자의 힘》 획득(최대 8중첩)」트리거(50턴)\n궁극기 발동 시 「자신의 공격 데미지의 75%만큼 타깃에게 데미지」 추가(50턴)\n행동 후 「자신 이외의 아군 전체가 획득한 모든 《부케를 받은 자》가 부여한 효과 제거」트리거(50턴)(1회 트리거 후 제거)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `축복의 무게`,
                    description: `일반 공격 시 「자신의 공격 데미지 25% 증가(3턴), 타깃은 《난쟁이 왕의 위압》 획득」 트리거 \n아군 딜러, 탱커, 디스럽터는 「팀에 서포터가 2명 이상 있을 경우,  『트리거 스킬 효과 500% 감소』 활성화」획득(디버프) \n\n《난쟁이 왕의 위압》 \n피격 시 「타깃의 공격 데미지 25% 증가(3턴), 가하는 데미지 10% 증가(3턴)」 트리거(1턴)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `부케 잘 받아!`,
                    description: `궁극기 발동 시 『《풀파워 부케 아령 투척》』 추가 \n\n《풀파워 부케 아령 투척》 \n자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴) \n아군 전체의 궁극기 데미지 10% 증가(1턴)\n타깃이 받는 풍속성 데미지 30% 증가(1턴) \n자신의 공격 데미지의 200%만큼 타깃에게 데미지`
                },
                [SkillType.PASSIVE_3]: {
                    name: `사랑이 곧 힘`,
                    description: `일반 공격 시 「자신은 1중첩의 《수련의 행복》 획득(최대 2중첩)」 트리거\n자신의 《수련의 행복》 중첩수=2일 시, 「궁극기 발동 시 『자신 이외의 아군 전체는 《바람의 축복》 효과 획득, 자신의 모든 《수련의 행복》 중첩수 제거』 추가」 활성화\n\n자신 이외의 아군 전체는 「《바람의 축복》 효과를 받을 시, 『자신의 공격 데미지 15% 증가(최대 5중첩), 궁극기 데미지 5% 증가(최대 5중첩)』 트리거」 획득`
                },
                [SkillType.GENERAL_1]: {
                    name: `공격+`,
                    description: `자신의 공격 데미지 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `마비 면역`,
                    description: `자신에게 마비 면역 부여`
                }
            }
        }
    },
]