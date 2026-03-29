import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10198: SkillSet[] =  [
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
                    name: `九淫真經(偽)．解放`,
                    description: `使自身攻擊力增加90/105/120/135/150%(最多1層)、普攻傷害增加30/35/40/45/50%(最多1層)、造成傷害增加0/0/20/22.5/25%(最多1層)。CD:1`
                },
                [SkillType.SKILL_1]: {
                    name: `九淫真經(偽)．解放`,
                    description: `使自身攻擊力增加90%(最多1層)、普攻傷害增加30%(最多1層)。CD:1`
                },
                [SkillType.SKILL_2]: {
                    name: `九淫真經(偽)．解放`,
                    description: `使自身攻擊力增加105%(最多1層)、普攻傷害增加35%(最多1層)。CD:1`
                },
                [SkillType.SKILL_3]: {
                    name: `九淫真經(偽)．解放`,
                    description: `使自身攻擊力增加120%(最多1層)、普攻傷害增加40%(最多1層)、造成傷害增加20%(最多1層)。CD:1`
                },
                [SkillType.SKILL_4]: {
                    name: `九淫真經(偽)．解放`,
                    description: `使自身攻擊力增加135%(最多1層)、普攻傷害增加45%(最多1層)、造成傷害增加22.5%(最多1層)。CD:1`
                },
                [SkillType.SKILL_5]: {
                    name: `九淫真經(偽)．解放`,
                    description: `使自身攻擊力增加150%(最多1層)、普攻傷害增加50%(最多1層)、造成傷害增加25%(最多1層)。CD:1`
                },
                [SkillType.ATTACK]: {
                    name: `二連刺`,
                    description: `以自身攻擊力50%對目標造成傷害2次`
                },
                [SkillType.LEADER]: {
                    name: `野玫瑰之影`,
                    description: `我方全體最大HP增加50%\n我方全體攻擊力增加50%\n自身獲得「我方隊伍攻擊者有5人以上時，開啟『《花吹雪之舞》』」\n自身以外我方全體獲得「我方隊伍攻擊者有5人以上時，開啟『攻擊時，觸發「《玫瑰殘影》』」\n\n《花吹雪之舞》\n造成傷害增加60%\n普攻傷害增加60%\n普攻時，追加「以自身攻擊力30%對目標造成傷害」\n每Wave的第1回合時，觸發『使敵方全體受到傷害增加15%(最多1層)、受到全屬性傷害增加20%(最多1層)』\n第1回合時，觸發「使自身以外我方全體當前必殺技CD減少4回合」\n\n《玫瑰殘影》\n以自身攻擊力30%對我方全體進行治療\n以自身攻擊力12.5%使我方【冷豔鋒刃 毛毛】攻擊力增加(1回合)\n使我方【冷豔鋒刃 毛毛】獲得2層《緋紅薔薇》(最多12層)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `緋紅刺殺術`,
                    description: `自身以外我方全體獲得「攻擊時，觸發『使我方【冷豔鋒刃 毛毛】獲得1層《緋紅薔薇》(最多12層)』」\n自身《緋紅薔薇》≧4層時，開啟「普攻傷害增加85%」」\n自身《緋紅薔薇》≧8層時，開啟「造成傷害增加30%』」\n自身《緋紅薔薇》=12層時，開啟「普攻時，追加『《薔薇亂舞》』」\n\n《薔薇亂舞》\n以自身攻擊力30%對目標造成傷害4次\n使目標受到闇屬性傷害增加37.5%(最多1層)\n清除自身《緋紅薔薇》的所有層數`
                },
                [SkillType.PASSIVE_2]: {
                    name: `疾風呼吸法`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少1回合」(觸發1次後清除)\n防禦時，觸發『使自身獲得4層《緋紅薔薇》(最多12層)」\n必殺時，觸發「使自身獲得《疾風世界》」(觸發1次後清除)\n\n《疾風世界》\n攻擊力增加110%(50回合)\n對防禦目標傷害增加110%(50回合)\n必殺技CD停止倒數(50回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `暗殺者公會的菁英`,
                    description: `自身以外我方全體攻擊者、妨礙者、守護者獲得「第1回合時，觸發『使我方【冷豔鋒刃 毛毛】造成傷害增加15%(最多2層)』(觸發1次後清除)」\n自身以外我方全體攻擊者、妨礙者、守護者獲得「每Wave的第1回合時，觸發『使敵方全體受到傷害增加12.5%(最多2層)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `普攻傷害+`,
                    description: `普攻傷害增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `九淫真经(伪)．解放`,
                    description: `使自身攻击力增加90/105/120/135/150%(最多1层)、普攻伤害增加30/35/40/45/50%(最多1层)、造成伤害增加0/0/20/22.5/25%(最多1层)。CD:1`
                },
                [SkillType.SKILL_1]: {
                    name: `九淫真经(伪)．解放`,
                    description: `使自身攻击力增加90%(最多1层)、普攻伤害增加30%(最多1层)。CD:1`
                },
                [SkillType.SKILL_2]: {
                    name: `九淫真经(伪)．解放`,
                    description: `使自身攻击力增加105%(最多1层)、普攻伤害增加35%(最多1层)。CD:1`
                },
                [SkillType.SKILL_3]: {
                    name: `九淫真经(伪)．解放`,
                    description: `使自身攻击力增加120%(最多1层)、普攻伤害增加40%(最多1层)、造成伤害增加20%(最多1层)。CD:1`
                },
                [SkillType.SKILL_4]: {
                    name: `九淫真经(伪)．解放`,
                    description: `使自身攻击力增加135%(最多1层)、普攻伤害增加45%(最多1层)、造成伤害增加22.5%(最多1层)。CD:1`
                },
                [SkillType.SKILL_5]: {
                    name: `九淫真经(伪)．解放`,
                    description: `使自身攻击力增加150%(最多1层)、普攻伤害增加50%(最多1层)、造成伤害增加25%(最多1层)。CD:1`
                },
                [SkillType.ATTACK]: {
                    name: `二连刺`,
                    description: `以自身攻击力50%对目标造成伤害2次`
                },
                [SkillType.LEADER]: {
                    name: `野玫瑰之影`,
                    description: `我方全体最大HP增加50%\n我方全体攻击力增加50%\n自身获得「我方队伍攻击者有5人以上时，开启『《花吹雪之舞》』」\n自身以外我方全体获得「我方队伍攻击者有5人以上时，开启『攻击时，触发「《玫瑰残影》』」\n\n《花吹雪之舞》\n造成伤害增加60%\n普攻伤害增加60%\n普攻时，追加「以自身攻击力30%对目标造成伤害」\n每Wave的第1回合时，触发『使敌方全体受到伤害增加15%(最多1层)、受到全属性伤害增加20%(最多1层)』\n第1回合时，触发「使自身以外我方全体当前必杀技CD减少4回合」\n\n《玫瑰残影》\n以自身攻击力30%对我方全体进行治疗\n以自身攻击力12.5%使我方【冷豔锋刃 毛毛】攻击力增加(1回合)\n使我方【冷豔锋刃 毛毛】获得2层《绯红蔷薇》(最多12层)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `绯红刺杀术`,
                    description: `自身以外我方全体获得「攻击时，触发『使我方【冷豔锋刃 毛毛】获得1层《绯红蔷薇》(最多12层)』」\n自身《绯红蔷薇》≧4层时，开启「普攻伤害增加85%」」\n自身《绯红蔷薇》≧8层时，开启「造成伤害增加30%』」\n自身《绯红蔷薇》=12层时，开启「普攻时，追加『《蔷薇乱舞》』」\n\n《蔷薇乱舞》\n以自身攻击力30%对目标造成伤害4次\n使目标受到闇属性伤害增加37.5%(最多1层)\n清除自身《绯红蔷薇》的所有层数`
                },
                [SkillType.PASSIVE_2]: {
                    name: `疾风呼吸法`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少1回合」(触发1次后清除)\n防御时，触发『使自身获得4层《绯红蔷薇》(最多12层)」\n必杀时，触发「使自身获得《疾风世界》」(触发1次后清除)\n\n《疾风世界》\n攻击力增加110%(50回合)\n对防御目标伤害增加110%(50回合)\n必杀技CD停止倒数(50回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `暗杀者公会的菁英`,
                    description: `自身以外我方全体攻击者、妨碍者、守护者获得「第1回合时，触发『使我方【冷豔锋刃 毛毛】造成伤害增加15%(最多2层)』(触发1次后清除)」\n自身以外我方全体攻击者、妨碍者、守护者获得「每Wave的第1回合时，触发『使敌方全体受到伤害增加12.5%(最多2层)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `普攻伤害+`,
                    description: `普攻伤害增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Lewd Monk (Fake) - Unleashed`,
                    description: `Increase your Attack Power by 90/105/120/135/150% (max 1 stack), Basic Attack Power by 30/35/40/45/50% (max 1 stack), and Damage Output by 0/0/20/22.5/25% (max 1 stack). CD:1`
                },
                [SkillType.SKILL_1]: {
                    name: `Lewd Monk (Fake) - Unleashed`,
                    description: `Increase your Attack Power by 90% (max 1 stack) and Basic Attack Power by 30% (max 1 stack). CD:1`
                },
                [SkillType.SKILL_2]: {
                    name: `Lewd Monk (Fake) - Unleashed`,
                    description: `Increase your Attack Power by 105% (max 1 stack) and Basic Attack Power by 35% (max 1 stack). CD:1`
                },
                [SkillType.SKILL_3]: {
                    name: `Lewd Monk (Fake) - Unleashed`,
                    description: `Increase your Attack Power by 120% (max 1 stack), Basic Attack Power by 40% (max 1 stack), and Damage Output by 20% (max 1 stack). CD:1`
                },
                [SkillType.SKILL_4]: {
                    name: `Lewd Monk (Fake) - Unleashed`,
                    description: `Increase your Attack Power by 135% (max 1 stack), Basic Attack Power by 45% (max 1 stack), and Damage Output by 22.5% (max 1 stack). CD:1`
                },
                [SkillType.SKILL_5]: {
                    name: `Lewd Monk (Fake) - Unleashed`,
                    description: `Increase your Attack Power by 150% (max 1 stack), Basic Attack Power by 50% (max 1 stack), and Damage Output by 25% (max 1 stack). CD:1`
                },
                [SkillType.ATTACK]: {
                    name: `Double Piercing`,
                    description: `Damage the target 2 times (50% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Wild Rose Shadow`,
                    description: `Increase the party's max HP by 50%.\nIncrease the party's Attack Power by 50%.\nGain yourself the following effect: When there are 5 or more Attackers in the party, activate "Petal Dance".\nOther allies gain the following effect: When there are 5 or more Attackers in the party, activate "On Attack, trigger 'Rose Remnant'."\n\n"Petal Dance"\nIncrease Damage Output by 60%.\nIncrease Basic Attack Power by 60%.\nOn Basic Attack, deal additional damage to the target (30% Attack Power).\nOn the 1st wave of each turn, trigger the following effect: Increase all enemies' Damage Taken by 15% (max 1 stack) and Damage Taken from all attributes by 20% (max 1 stack).\n\n"Rose Remnant"\nHeal the party for 30% of your Attack Power.\nIncrease Cold-Blooded Blade Momo's Attack Power for 12.5% of your Attack Power for 1 turn.\nCold-Blooded Blade Momo gains 2 stacks of "Crimson Rose" (max 12 stacks).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Crimson Assassination`,
                    description: `Gain other allies the following effect: On Attack, trigger the following effect: Cold-Blooded Blade Momo gains 1 stack of "Crimson Rose" (max 12 stacks).\nWhen your "Crimson Rose" stacks are ≥ 4, activate "Increase Basic Attack Power by 85%".\nWhen your "Crimson Rose" stacks are ≥ 8, activate "Increase Damage Output by 30%".\nWhen your "Crimson Rose" stacks are = 12, activate "On Basic Attack, gain additional 'Rose Flurry'".\n\n"Rose Flurry"\nDamage the target 4 times (30% Attack Power).\nIncrease the target's Damage Taken from Dark attacks by 37.5% (max 1 stack).\nRemove all your "Crimson Rose" stacks.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Gale Breathing`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 1 turn (removes after triggering once).\nWhen in Guard Stance, trigger the following effect: Gain yourself 4 stacks of "Crimson Rose" (max 12 stacks).\nOn Ultimate Skill, trigger the following effect: Gain yourself "Gale World" (removes after triggering once).\n\n"Gale World" \nIncrease Attack Power by 110% for 50 turns.\nIncrease the Damage against targets in Guard Stance by 110% for 50 turns.\nFreeze Ultimate Skill CD for 50 turns.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Assassins' Guild Elite`,
                    description: `Gain other allied Attackers, Defenders, and Obstructors the following effect: On the 1st turn, trigger the following effect: Increase Cold-Blooded Blade Momo's Damage Output by 15% (max 2 stacks) (removes after triggering once).\nGain other allied Attackers, Defenders, and Obstructors the following effect: On the 1st wave of each turn, trigger the following effect: Increase all enemies' Damage Taken by 12.5% (max 2 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Basic Attack Damage+`,
                    description: `Increase Basic Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity`,
                    description: `Gain yourself immunity to Paralysis.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `九淫真経（偽）・解放`,
                    description: `自分の攻撃力を90/105/120/135/150%増加させ(最高1スタック)、通常攻撃ダメージを30/35/40/45/50%増加させ(最高1スタック)、与えるダメージを0/0/20/22.5/25%増加させる(最高1スタック)。[CD:1]`
                },
                [SkillType.SKILL_1]: {
                    name: `九淫真経（偽）・解放`,
                    description: `自分の攻撃力を90%増加させ(最高1スタック)、通常攻撃ダメージを30%増加させる(最高1スタック)。[CD:1]`
                },
                [SkillType.SKILL_2]: {
                    name: `九淫真経（偽）・解放`,
                    description: `自分の攻撃力を105%増加させ(最高1スタック)、通常攻撃ダメージを35%増加させる(最高1スタック)。[CD:1]`
                },
                [SkillType.SKILL_3]: {
                    name: `九淫真経（偽）・解放`,
                    description: `自分の攻撃力を120%増加させ(最高1スタック)、通常攻撃ダメージを40%増加させ(最高1スタック)、与えるダメージを20%増加させる(最高1スタック)。[CD:1]`
                },
                [SkillType.SKILL_4]: {
                    name: `九淫真経（偽）・解放`,
                    description: `自分の攻撃力を135%増加させ(最高1スタック)、通常攻撃ダメージを45%増加させ(最高1スタック)、与えるダメージを22.5%増加させる(最高1スタック)。[CD:1]`
                },
                [SkillType.SKILL_5]: {
                    name: `九淫真経（偽）・解放`,
                    description: `自分の攻撃力を150%増加させ(最高1スタック)、通常攻撃ダメージを50%増加させ(最高1スタック)、与えるダメージを25%増加させる(最高1スタック)。[CD:1]`
                },
                [SkillType.ATTACK]: {
                    name: `二連突`,
                    description: `自分の50%の攻撃力でターゲットに2回ダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `野薔薇の影`,
                    description: `味方全体の最大HPが50%増加する\n味方全体の攻撃力が50%増加する\n自分が「チーム内に5人以上のアタッカーがいる時《花吹雪の舞》を発動する」を獲得する\n自分以外の味方全体が「チーム内に5人以上のアタッカーがいる時『攻撃時《薔薇の残影》を誘発する』を発動する」を獲得する\n\n《花吹雪の舞》\n与えるダメージが60%増加する\n通常攻撃ダメージが60%増加する\n通常攻撃時「自分の30%の攻撃力でターゲットにダメージを与える」を追加する\n毎Waveの1ターン目に『敵全体の受けるダメージを15%増加させ(最高1スタック)、受ける全属性ダメージを20%増加させる(最高1スタック)』を誘発する\n1ターン目に「自分以外の味方全体の現在の必殺技CDを4ターン減少させる」を誘発する\n\n《薔薇の残影》\n自分の30%の攻撃力で味方全体に治療を行う\n自分の攻撃力の12.5%分味方の【冷艶の刃 モモ】の攻撃力を増加させる(1ターン)\n味方の【冷艶の刃 モモ】が《緋紅の薔薇》を2スタック獲得する(最高12スタック)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `緋紅刺殺術`,
                    description: `自分以外の味方全体が「攻撃時『味方の【冷艶の刃 モモ】が《緋紅の薔薇》を1スタック獲得する(最高12スタック)』を誘発する」を獲得する\n自分の《緋紅の薔薇》のスタック数が≧4の時、「通常攻撃ダメージが85%増加する」を発動する\n自分の《緋紅の薔薇》のスタック数が≧8の時、「与えるダメージが30%増加する」を発動する\n自分の《緋紅の薔薇》のスタック数が=12の時、「通常攻撃時《薔薇乱舞》を追加する」を発動する\n\n《薔薇乱舞》\n自分の30%の攻撃力でターゲットに4回ダメージを与える\nターゲットが受ける闇属性ダメージを37.5%増加させる(最高1スタック)\n自分の《緋紅の薔薇》のスタック数を全て消す`
                },
                [SkillType.PASSIVE_2]: {
                    name: `疾風呼吸法`,
                    description: `1ターン目に「自分の現在の必殺技CDを1ターン減少させる」を誘発する(誘発1回後に解除)\n防御時「自分が《緋紅の薔薇》を4スタック獲得する(最高12スタック)」を誘発する\n必殺技攻撃時「自分が《疾風世界》を獲得する」を誘発する(誘発1回後に解除)\n\n《疾風世界》\n攻撃力が110%増加する(50ターン)\n防御中のターゲットに与えるダメージが110%増加する(50ターン)\n必殺技CDカウントを停止する(50ターン)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `殺し屋協会のエリート`,
                    description: `自分以外の味方全体のアタッカー、デバッファー、ガーディアンが「1ターン目に『味方の【冷艶の刃 モモ】の与えるダメージが15%増加する(最高2スタック)』を誘発する(誘発1回後に解除)」を獲得する\n自分以外の味方全体のアタッカー、ガーディアン、デバッファーが「毎Waveの1ターン目に『敵全体の受けるダメージを12.5%増加させる(最高2スタック)』を誘発する」を獲得する`
                },
                [SkillType.GENERAL_1]: {
                    name: `通常攻撃+`,
                    description: `通常攻撃ダメージが10%増加する`
                },
                [SkillType.GENERAL_2]: {
                    name: `麻痺無効`,
                    description: `自分を麻痺無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `구음진경(위)．해방`,
                    description: `자신의 공격 데미지 30/35/40/45/50% 증가(1턴), 아군 딜러, 탱커, 디스럽터의 궁극기 데미지 0/17.5/20/22.5/25% 증가(1턴), 「궁극기 발동 시 『자신의 공격 데미지의 30/35/40/45/50%만큼 타깃에게 데미지』 추가(1턴)」획득, 타깃이 받는 데미지 9/10.5/12/13.5/15% 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `구음진경(위)．해방`,
                    description: `자신의 공격 데미지 90% 증가(최대 1중첩), 일반 공격 데미지 30% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.SKILL_2]: {
                    name: `구음진경(위)．해방`,
                    description: `자신의 공격 데미지 105% 증가(최대 1중첩), 일반 공격 데미지 35% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.SKILL_3]: {
                    name: `구음진경(위)．해방`,
                    description: `자신의 공격 데미지 120% 증가(최대 1중첩), 일반 공격 데미지 40% 증가(최대 1중첩), 가하는 데미지 20% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.SKILL_4]: {
                    name: `구음진경(위)．해방`,
                    description: `자신의 공격 데미지 135% 증가(최대 1중첩), 일반 공격 데미지 45% 증가(최대 1중첩), 가하는 데미지 22.5% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.SKILL_5]: {
                    name: `구음진경(위)．해방`,
                    description: `자신의 공격 데미지 150% 증가(최대 1중첩), 일반 공격 데미지 50% 증가(최대 1중첩), 가하는 데미지 25% 증가(최대 1중첩) [CD: 1]`
                },
                [SkillType.ATTACK]: {
                    name: `2연격`,
                    description: `자신의 공격 데미지의 50%만큼 타깃에게 2회 데미지`
                },
                [SkillType.LEADER]: {
                    name: `장미의 그림자`,
                    description: `아군 전체의 HP 50% 증가 \n아군 전체의 공격 데미지 50% 증가 \n자신은 「팀에 딜러가 5명 이상 있을 시, 『《꽃잎의 춤》』 활성화」 획득 \n자신 이외의 아군 전체는 「팀에 딜러가 5명 이상 있을 시 『공격 시 「《장미의 잔영》 트리거』활성화」 획득 \n\n《꽃잎의 춤》 \n가하는 데미지 60% 증가 \n일반 공격 데미지 60% 증가 \n일반 공격 시 「자신의 공격 데미지의 30%만큼 타깃에게 데미지」 추가 \n각 웨이브의 첫 번째 턴에서 『적 전체가 받는 데미지 15% 증가(최대 1중첩), 받는 모든 속성 데미지 20% 증가(최대 1중첩)』 트리거 \n첫 번째 턴 시작 시 「자신 이외의 아군 전체의 현재 궁극기 CD 4턴 감소」 트리거\n\n《장미의 잔영》 \n자신의 공격 데미지의 30%만큼 아군 전체를 치유 \n자신의 공격 데미지의 12.5%만큼 아군 【냉염의 칼날 모모】의 공격 데미지 증가(1턴) \n아군 【냉염의 칼날 모모】는 2중첩의 《붉은 장미》 획득(최대 12중첩)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `핏빛 꿰뚫기술`,
                    description: `자신 이외의 아군 전체는 「공격 시 『아군 【냉염의 칼날 모모】는 1중첩의 《붉은 장미》 획득(최대 12중첩)』 트리거」 획득\n자신의 《붉은 장미》 중첩수≧4일 시, 「일반 공격 데미지 85% 증가」 활성화\n자신의 《붉은 장미》 중첩수≧8일 시, 「가하는 데미지 30% 증가」 활성화\n자신의 《붉은 장미》 중첩수=12일 시, 「일반 공격 시 『《장미의 춤》』 추가」 활성화\n\n《장미의 춤》\n자신의 공격 데미지의 30%만큼 타깃에게 4회 데미지\n타깃이 받는 암속성 데미지 37.5% 증가(최대 1중첩)\n자신의 모든 《붉은 장미》 중첩수 제거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `질풍 호흡법`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 1턴 감소」 트리거(1회 트리거 후 제거)\n방어 시 「자신은 4중첩의 《붉은 장미》 획득(최대 12중첩)」 트리거\n궁극기 발동 시 「자신은 《질풍 세계》 획득」 트리거(1회 트리거 후 제거)\n\n《질풍 세계》\n공격 데미지 110% 증가(50턴)\n방어하는 타깃에게 가하는 데미지 110% 증가(50턴)\n궁극기 CD 카운트 정지(50턴)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `암살자 길드의 엘리트`,
                    description: `자신 이외의 아군 딜러, 디스럽터, 탱커는 「첫 번째 턴 시작 시 『아군 【냉염의 칼날 모모】가 가하는 데미지 15% 증가(최대 2중첩)』 트리거(1회 트리거 후 제거)」 획득\n자신 이외의 아군 딜러, 디스럽터, 탱커는 「각 웨이브의 첫 번째 턴에서 『적 전체가 받는 데미지 12.5% 증가(최대 2중첩)』 트리거」 획득`
                },
                [SkillType.GENERAL_1]: {
                    name: `일반 공격 데미지+`,
                    description: `일반 공격 데미지 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `마비 면역`,
                    description: `자신에게 마비 면역 부여`
                }
            }
        }
    },
]