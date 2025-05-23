import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10022: SkillSet[] =  [
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
                    name: `開膛破肚`,
                    description: `以自身攻擊力33/37.6/42.2/46.8/51.4%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加8.75/10/11.25/12.5/15%(最多8層)」(4回合)，並使目標受到傷害增加0/0/10/20/30%(最多1層)，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `開膛破肚`,
                    description: `以自身攻擊力33%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加8.75%(最多8層)」(4回合)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `開膛破肚`,
                    description: `以自身攻擊力37.6%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加10%(最多8層)」(4回合)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `開膛破肚`,
                    description: `以自身攻擊力42.2%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加11.25%(最多8層)」(4回合)，並使目標受到傷害增加10%(最多1層)，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `開膛破肚`,
                    description: `以自身攻擊力46.8%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加12.5%(最多8層)」(4回合)，並使目標受到傷害增加20%(最多1層)，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `開膛破肚`,
                    description: `以自身攻擊力51.4%對目標造成傷害10次，並使目標獲得被攻擊時，觸發「使自身受到『狂犬 諾蕾蒂』傷害增加15%(最多8層)」(4回合)，並使目標受到傷害增加30%(最多1層)，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `嚙殺`,
                    description: `以自身攻擊力20%對目標造成傷害5次`
                },
                [SkillType.LEADER]: {
                    name: `戰爭狂氣`,
                    description: `我方全體最大HP增加20%\n我方全體必殺技傷害增加50%\n我方全體攻擊者、妨礙者、守護者攻擊力增加40%\n我方全體攻擊者、妨礙者、守護者造成傷害增加25%\n\n我方全體獲得，當我方隊伍治療者有1人以上時，發動「被治療時回復量減少500%」(負面效果)\n\n第一回合時，觸發「以自身攻擊力80%每回合對我方全體造成治療(50回合)」 \n防禦時，觸發「使我方全體受到持續型治療增加100%(1回合)」\n必殺時，觸發「以自身攻擊力200%對我方全體造成治療」\n\n自身以外我方全體攻擊者、妨礙者、守護者獲得《援護射擊》\n\n《援護射擊》\n 必殺時，觸發「使我方站位1角色獲得《虐殺時間到！》」\n\n《虐殺時間到！》\n攻擊力增加90%(1回合)\n必殺時，追加「以自身攻擊力80%對目標造成傷害」(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `蓄勢待發`,
                    description: `防禦時，觸發「使自身攻擊力增加100%(最多1層)」\n必殺時，觸發「消除自身《蓄勢待發》的攻擊力增加效果 」\n必殺時，觸發「消除目標身上《開膛破肚》的受到『狂犬 諾蕾蒂」傷害增加效果」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `緊咬不放`,
                    description: `必殺時，觸發「使自身造成傷害增加12%(最多5層)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `狂犬`,
                    description: `普攻時，觸發「使自身獲得《腎上腺素》」\n\n《腎上腺素》\n必殺技傷害增加50%(2回合)\n必殺時，追加「以自身攻擊力100%對目標造成傷害」(2回合)`
                },
                [SkillType.GENERAL_1]: {
                    name: `必殺追擊+`,
                    description: `必殺時，追加「以自身攻擊力30%對目標造成傷害」`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力33/37.6/42.2/46.8/51.4%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加8.75/10/11.25/12.5/15%(最多8层)」(4回合)，并使目标受到伤害增加0/0/10/20/30%(最多1层)，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力33%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加8.75%(最多8层)」(4回合)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力37.6%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加10%(最多8层)」(4回合)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力42.2%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加11.25%(最多8层)」(4回合)，并使目标受到伤害增加10%(最多1层)，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力46.8%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加12.5%(最多8层)」(4回合)，并使目标受到伤害增加20%(最多1层)，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `开膛破肚`,
                    description: `以自身攻击力51.4%对目标造成伤害10次，并使目标获得被攻击时，触发「使自身受到『狂犬 诺蕾蒂』伤害增加15%(最多8层)」(4回合)，并使目标受到伤害增加30%(最多1层)，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `啮杀`,
                    description: `以自身攻击力20%对目标造成伤害5次`
                },
                [SkillType.LEADER]: {
                    name: `战争狂气`,
                    description: `我方全体最大HP增加20%\n我方全体必杀技伤害增加50%\n我方全体攻击者丶妨碍者丶守护者攻击力增加40%\n我方全体攻击者丶妨碍者丶守护者造成伤害增加25%\n\n我方全体获得，当我方队伍治疗者有1人以上时，发动「被治疗时回复量减少500%」(负面效果)\n\n第一回合时，触发「以自身攻击力80%每回合对我方全体造成治疗(50回合)」 \n防御时，触发「使我方全体受到持续型治疗增加100%(1回合)」\n必杀时，触发「以自身攻击力200%对我方全体造成治疗」\n\n自身以外我方全体攻击者丶妨碍者丶守护者获得《援护射击》\n\n《援护射击》\n 必杀时，触发「使我方站位1角色获得《虐杀时间到！》」\n\n《虐杀时间到！》\n攻击力增加90%(1回合)\n必杀时，追加「以自身攻击力80%对目标造成伤害」(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `蓄势待发`,
                    description: `防御时，触发「使自身攻击力增加100%(最多1层)」\n必杀时，触发「消除自身《蓄势待发》的攻击力增加效果 」\n必杀时，触发「消除目标身上《开膛破肚》的受到『狂犬 诺蕾蒂」伤害增加效果」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `紧咬不放`,
                    description: `必杀时，触发「使自身造成伤害增加12%(最多5层)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `狂犬`,
                    description: `普攻时，触发「使自身获得《肾上腺素》」\n\n《肾上腺素》\n必杀技伤害增加50%(2回合)\n必杀时，追加「以自身攻击力100%对目标造成伤害」(2回合)`
                },
                [SkillType.GENERAL_1]: {
                    name: `必杀追击+`,
                    description: `必杀时，追加「以自身攻击力30%对目标造成伤害」`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (33/37.6/42.2/46.8/51.4% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 8.75/10/11.25/12.5/15% (max 8 stacks) for 4 turns. Increase the target's Damage Taken by 0/0/10/20/30%. (max 1 stack) CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (33% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 8.75% (max 8 stacks) for 4 turns. CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (37.6% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 10% (max 8 stacks) for 4 turns. CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (42.2% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 11.25% (max 8 stacks) for 4 turns. Increase the target's Damage Taken by 10%. (max 1 stack) CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (46.8% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 12.5% (max 8 stacks) for 4 turns. Increase the target's Damage Taken by 20%. (max 1 stack) CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Gutripper`,
                    description: `Damage the target 10 times (51.4% Attack Power) and gain the target the following effect: When attacked, increase your Damage Taken from "Crazed Dog Noma" by 15% (max 8 stacks) for 4 turns. Increase the target's Damage Taken by 30%. (max 1 stack) CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Ravage`,
                    description: `Damage the target 5 times (20% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `War Fury`,
                    description: `Increase the party's max HP by 20%.\nIncrease the party's Ultimate Skill Power by 50%.\nIncrease all allied Attackers, Obstructors, and Defenders' Attack Power by 40%\nIncrease all allied Attackers, Obstructors, and Defenders' Damage Output by 25%\n\nGain the party the following effect: When there are 1 or more Healers in the party, decrease the Recovery Rate by 500%. (Debuff)\n\nOn the 1st turn, heal the party for 80% of your Attack Power every turn for 50 turns.\nWhen in Guard Stance, increase the party's heal overtime effect by 100% for 1 turn.\nOn Ultimate Skill, heal the party for 200% of your Attack Power.\n\nOther allied Attackers, Obstructors, and Defenders gain "Covering Fire."\n\n"Covering Fire"\nOn Ultimate Skill, the 1st position ally gains "Time to Kill!"\n\n"Time to Kill!"\nIncrease Attack Power by 90% for 1 turn.\nOn Ultimate Skill, deal additional damage to the target for 1 turn (80% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Ready to Strike`,
                    description: `When in Guard Stance, increase your Attack Power by 100%. (max 1 stack)\nOn Ultimate Skill, remove your "Ready to Strike" attack buff.\nOn Ultimate Skill, remove the target's "Gutripper" effect: increase the Damage Taken from "Crazed Dog Noma."`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Unyielding Bite`,
                    description: `On Ultimate Skill, increase your Damage Output by 12%. (max 5 stacks)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Crazed Dog`,
                    description: `On Basic Attack, gain yourself "Adrenaline."\n\n"Adrenaline"\nIncrease Ultimate Skill Power by 50% for 2 turns.\nOn Ultimate Skill, deal additional damage to the target for 2 turns (100% Attack Power).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Ultimate Skill Pursuit+`,
                    description: `On Ultimate Skill, deal additional damage to the target (30% Attack Power).`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain immunity to Sleep.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `腹裂き`,
                    description: `自分の33/37.6/42.2/46.8/51.4%の攻撃力でターゲットに10回ダメージを与え、ターゲットが攻撃を受けた時、「自分が『狂犬 ノルディ』から受けるダメージを8.75/10/11.25/12.5/15%増加させる(最高8スタック)」を誘発し(4ターン)、ターゲットの受けるダメージを0/0/10/20/30%増加させる(最高1スタック)[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `腹裂き`,
                    description: `自分の33%の攻撃力でターゲットに10回ダメージを与え、ターゲットが攻撃を受けた時、「自分が『狂犬 ノルディ』から受けるダメージを8.75%増加させる(最高8スタック)」を誘発し(4ターン)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `腹裂き`,
                    description: `自分の37.6%の攻撃力でターゲットに10回ダメージを与え、ターゲットが攻撃を受けた時、「自分が『狂犬 ノルディ』から受けるダメージを10%増加させる(最高8スタック)」を誘発し(4ターン)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `腹裂き`,
                    description: `自分の42.2%の攻撃力でターゲットに10回ダメージを与え、ターゲットが攻撃を受けた時、「自分が『狂犬 ノルディ』から受けるダメージを11.25%増加させる(最高8スタック)」を誘発し(4ターン)、ターゲットの受けるダメージを10%増加させる(最高1スタック)[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `腹裂き`,
                    description: `自分の46.8%の攻撃力でターゲットに10回ダメージを与え、ターゲットが攻撃を受けた時、「自分が『狂犬 ノルディ』から受けるダメージを12.5%増加させる(最高8スタック)」を誘発し(4ターン)、ターゲットの受けるダメージを20%増加させる(最高1スタック)[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `腹裂き`,
                    description: `自分の51.4%の攻撃力でターゲットに10回ダメージを与え、ターゲットが攻撃を受けた時、「自分が『狂犬 ノルディ』から受けるダメージを15%増加させる(最高8スタック)」を誘発し(4ターン)、ターゲットの受けるダメージを30%増加させる(最高1スタック)[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `咬み殺し`,
                    description: `自分の20%の攻撃力でターゲットに5回ダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `戦争の狂気`,
                    description: `味方全体の最大HPが20%増加する\n味方全体の必殺技ダメージが50%増加する\n自分以外の味方のアタッカー、デバッファー、ガーディアンの攻撃力が40%増加する\n自分以外の味方のアタッカー、デバッファー、ガーディアンの与えるダメージが25%増加する\n\n味方のチーム内に1人以上ヒーラーがいる時、味方全体が「治療を受ける時の回復HP量が500%減少する」を発動する(デバフ効果)\n\n1ターン目に「毎ターン自分の攻撃力の80%分味方全体に治療を行う(50ターン)」を誘発する\n防御時「味方全体の受ける持続型治療効果を100%増加させる(1ターン)」を誘発する\n必殺技攻撃時「自分の攻撃力の200%分味方全体に治療を行う」を誘発する\n\n味方のアタッカー、デバッファー、ガーディアンが《援護射撃》を得る\n\n《援護射撃》\n必殺技攻撃時「味方の1番目のメンバーが《虐殺タイム！》を得る」を誘発する\n\n《虐殺タイム！》\n攻撃力が90%増加する(1ターン)\n必殺技攻撃時「自分の80%の攻撃力でターゲットにダメージを与える」を追加する(1ターン)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `牙研ぎ`,
                    description: `防御時「自分の攻撃力を100%増加させる(最高1スタック)」を誘発する\n必殺技攻撃時「自分の《牙研ぎ》の攻撃力増加効果を消す」を誘発する\n必殺技攻撃時「ターゲットの《腹裂き》の『狂犬 ノルディ』から受けるダメージ増加効果を消す」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `食らいつく`,
                    description: `必殺技攻撃時「自分が与えるダメージを12%増加させる(最高5スタック)」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `狂犬`,
                    description: `通常攻撃時「自分が《アドレナリン》を得る」を誘発する\n\n《アドレナリン》\n必殺技ダメージが50%増加する(2ターン)\n必殺技攻撃時「自分の100%の攻撃力でターゲットにダメージを与える」を追加する(2ターン)`
                },
                [SkillType.GENERAL_1]: {
                    name: `必殺追撃+`,
                    description: `必殺技攻撃時「自分の30%の攻撃力でターゲットにダメージを与える」を追加する`
                },
                [SkillType.GENERAL_2]: {
                    name: `睡眠無効`,
                    description: `自分を睡眠無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `배 가르기`,
                    description: `자신의 공격 데미지의 33/37.6/42.2/46.8/51.4%만큼 타깃에게 10회 데미지, 타깃은 피격 시 「자신이 『광견 놀라이티』로부터 받는 데미지 8.75/10/11.25/12.5/15% 증가(최대 8중첩)」획득(4턴), 타깃이 받는 데미지 0/0/10/20/30% 증가(최대 1중첩) [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `배 가르기`,
                    description: `자신의 공격 데미지의 33%만큼 타깃에게 10회 데미지, 타깃은 피격 시 「자신이 『광견 놀라이티』로부터 받는 데미지 8.75% 증가(최대 8중첩)」획득(4턴) [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `배 가르기`,
                    description: `자신의 공격 데미지의 37.6%만큼 타깃에게 10회 데미지, 타깃은 피격 시 「자신이 『광견 놀라이티』로부터 받는 데미지 10% 증가(최대 8중첩)」획득(4턴) [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `배 가르기`,
                    description: `자신의 공격 데미지의 42.2%만큼 타깃에게 10회 데미지, 타깃은 피격 시 「자신이 『광견 놀라이티』로부터 받는 데미지 11.25% 증가(최대 8중첩)」획득(4턴), 타깃이 받는 데미지 10% 증가(최대 1중첩) [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `배 가르기`,
                    description: `자신의 공격 데미지의 46.8%만큼 타깃에게 10회 데미지, 타깃은 피격 시 「자신이 『광견 놀라이티』로부터 받는 데미지 12.5% 증가(최대 8중첩)」획득(4턴), 타깃이 받는 데미지 20% 증가(최대 1중첩) [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `배 가르기`,
                    description: `자신의 공격 데미지의 51.4%만큼 타깃에게 10회 데미지, 타깃은 피격 시 「자신이 『광견 놀라이티』로부터 받는 데미지 15% 증가(최대 8중첩)」획득(4턴), 타깃이 받는 데미지 30% 증가(최대 1중첩) [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `물어 죽이기`,
                    description: `자신의 공격 데미지의 20%만큼 타깃에게 5회 데미지`
                },
                [SkillType.LEADER]: {
                    name: `전쟁의 광기`,
                    description: `아군 전체의 최대 HP 20% 증가\n아군 전체의 궁극기 데미지 50% 증가\n아군 딜러, 디스럽터, 탱커는 공격 데미지 40% 증가\n아군 딜러, 디스럽터, 탱커는 가하는 데미지 25% 증가\n\n아군 전체는 「아군 팀에 힐러가 1명 이상 있을 시 『치유를 받을 시 회복량 500% 감소』(디버프)발동」 획득\n\n첫째 턴 시작 시 「자신의 공격 데미지의 80%만큼 매턴 아군 전체를 치유(50턴)」발동\n방어 시 「아군 전체가 받는 지속형 치유량 100% 증가(1턴)」발동\n궁극기 발동 시 「자신의 공격 데미지의 200%만큼 아군 전체를 치유」발동\n\n자신 이외의 아군 딜러, 디스럽터, 탱커는 《엄호 사격》 획득\n\n《엄호 사격》\n궁극기 발동 시 「1번 자리 아군은 《학살 시간이다!》 획득」발동\n\n《학살 시간이다!》\n공격 데미지 90% 증가(1턴)\n궁극기 발동 시 「자신의 공격 데미지의 80%만큼 타깃에게 데미지」추가(1턴)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `극도의 흥분`,
                    description: `방어 시 「자신의 공격 데미지 100% 증가(최대 1중첩)」발동\n궁극기 발동 시 「자신의 《극도의 흥분》의 공격 데미지 증가 효과 제거」발동\n궁극기 발동 시 「타깃의 《배 가르기》로 『광견 놀라이티』로부터 받는 데미지 증가 효과 제거」발동`
                },
                [SkillType.PASSIVE_2]: {
                    name: `물고 늘어지기`,
                    description: `궁극기 발동 시 「자신이 가하는 데미지 12% 증가(최대 5중첩)」 발동`
                },
                [SkillType.PASSIVE_3]: {
                    name: `광견`,
                    description: `일반 공격 시 「자신은 《아드레날린》획득」발동\n\n《아드레날린》\n궁극기 데미지 50% 증가(2턴)\n궁극기 발동 시 「자신의 공격 데미지의 100%만큼 타깃에게 데미지」추가(2턴)`
                },
                [SkillType.GENERAL_1]: {
                    name: `궁극기 추격+`,
                    description: `궁극기 발동 시 「자신의 공격 데미지의 30%만큼 타깃에게 데미지」 추가`
                },
                [SkillType.GENERAL_2]: {
                    name: `수면 면역`,
                    description: `자신에게 수면 면역 부여`
                }
            }
        }
    },
]