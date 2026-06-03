import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10204: SkillSet[] =  [
    {
        version: 1,
        lastDate: "",
        remark: {
            [Locale.tc]: ``,
            [Locale.sc]: ``,
            [Locale.en]: ``,
            [Locale.jp]: ``,
            [Locale.kr]: ``,
        },
        skill: {
            [Locale.tc]: {
                [SkillType.SKILL_S]: {
                    name: `暖爐火力全開`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加7.94/9.26/10.58/11.9/13.23%(最多2層)、造成傷害增加10.58/12.34/14.1/15.87/17.64%(1回合)，並使目標受到傷害增加8.82/10.29/11.76/13.23/14.7%(最多2層)、受到火屬性傷害增加26.46/30.87/35.28/39.69/44.1%(1回合)，再以自身攻擊力30%使我方全體攻擊力增加(1回合)，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `暖爐火力全開`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加7.94%(最多2層)、造成傷害增加10.58%(1回合)，並使目標受到傷害增加8.82%(最多2層)、受到火屬性傷害增加26.46%(1回合)，再以自身攻擊力30%使我方全體攻擊力增加(1回合)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `暖爐火力全開`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加9.26%(最多2層)、造成傷害增加12.34%(1回合)，並使目標受到傷害增加10.29%(最多2層)、受到火屬性傷害增加30.87%(1回合)，再以自身攻擊力30%使我方全體攻擊力增加(1回合)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `暖爐火力全開`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加10.58%(最多2層)、造成傷害增加14.1%(1回合)，並使目標受到傷害增加11.76%(最多2層)、受到火屬性傷害增加35.28%(1回合)，再以自身攻擊力30%使我方全體攻擊力增加(1回合)，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `暖爐火力全開`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加11.9%(最多2層)、造成傷害增加15.87%(1回合)，並使目標受到傷害增加13.23%(最多2層)、受到火屬性傷害增加39.69%(1回合)，再以自身攻擊力30%使我方全體攻擊力增加(1回合)，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `暖爐火力全開`,
                    description: `使我方全體攻擊者、守護者、妨礙者造成傷害增加13.23%(最多2層)、造成傷害增加17.64%(1回合)，並使目標受到傷害增加14.7%(最多2層)、受到火屬性傷害增加44.1%(1回合)，再以自身攻擊力30%使我方全體攻擊力增加(1回合)，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `總之先吃點熱騰騰的食物～`,
                    description: `以自身攻擊力30%使我方全體攻擊力增加(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `本天才的保暖計畫`,
                    description: `我方全體最大HP增加55%\n我方全體攻擊力增加63.5%\n我方全體獲得「我方隊伍恰好為5種角色定位時，開啟『《發抖》』」\n我方全體獲得「自身《保暖計畫》≧1層時，開啟『《禦寒之力》』」\n我方全體獲得「自身《保暖計畫》≧2層時，開啟『《禦寒之力》』」\n我方全體獲得「自身《保暖計畫》=3層時，開啟『《禦寒之力》』」\n\n《發抖》\n造成傷害增加38.4%\n造成觸發技效果增加51.2%\n攻擊時，觸發「以自身攻擊力23.1%對目標造成傷害」\n普攻時，觸發「使自身獲得1層《保暖計畫》(最多3層)」\n必殺時，觸發「使目標受到傷害增加2.56%(最多10層)、受到火屬性傷害增加3.84%(最多10層)，再清除自身《保暖計畫》所有層數」\n\n《禦寒之力》\n必殺技傷害增加8.53%\n必殺時，追加「以自身攻擊力17%對目標造成傷害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `雪、雪…更多的雪！`,
                    description: `我方隊伍守護者有1人以上時，開啟「必殺時，觸發『使我方全體必殺技傷害增加29.4%(1回合)』」\n我方隊伍妨礙者有1人以上時，開啟「必殺時，觸發『使我方全體造成觸發技效果增加29.4%(最多2層)』」\n我方隊伍攻擊者有2人以上時，開啟「第1回合時，觸發『對自身造成封印(50回合)』」(負面效果)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `湛藍冰點`,
                    description: `自身免疫必殺技CD變動效果\n我方全體攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力58.8%對目標造成傷害』」\n我方全體攻擊者、守護者、妨礙者獲得「攻擊時，觸發『以自身攻擊力26.5%對目標造成傷害』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `禦寒對策`,
                    description: `攻擊力增加44.1%\n必殺時，追加「使我方全體獲得《火之祝福》效果」\n我方全體治療者、輔助者獲得「受到《火之祝福》效果時，觸發『使自身攻擊力增加7.35%(最多10層)』」`
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
                    name: `暖炉火力全开`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加7.94/9.26/10.58/11.9/13.23%(最多2层)、造成伤害增加10.58/12.34/14.1/15.87/17.64%(1回合)，并使目标受到伤害增加8.82/10.29/11.76/13.23/14.7%(最多2层)、受到火属性伤害增加26.46/30.87/35.28/39.69/44.1%(1回合)，再以自身攻击力30%使我方全体攻击力增加(1回合)，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `暖炉火力全开`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加7.94%(最多2层)、造成伤害增加10.58%(1回合)，并使目标受到伤害增加8.82%(最多2层)、受到火属性伤害增加26.46%(1回合)，再以自身攻击力30%使我方全体攻击力增加(1回合)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `暖炉火力全开`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加9.26%(最多2层)、造成伤害增加12.34%(1回合)，并使目标受到伤害增加10.29%(最多2层)、受到火属性伤害增加30.87%(1回合)，再以自身攻击力30%使我方全体攻击力增加(1回合)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `暖炉火力全开`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加10.58%(最多2层)、造成伤害增加14.1%(1回合)，并使目标受到伤害增加11.76%(最多2层)、受到火属性伤害增加35.28%(1回合)，再以自身攻击力30%使我方全体攻击力增加(1回合)，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `暖炉火力全开`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加11.9%(最多2层)、造成伤害增加15.87%(1回合)，并使目标受到伤害增加13.23%(最多2层)、受到火属性伤害增加39.69%(1回合)，再以自身攻击力30%使我方全体攻击力增加(1回合)，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `暖炉火力全开`,
                    description: `使我方全体攻击者、守护者、妨碍者造成伤害增加13.23%(最多2层)、造成伤害增加17.64%(1回合)，并使目标受到伤害增加14.7%(最多2层)、受到火属性伤害增加44.1%(1回合)，再以自身攻击力30%使我方全体攻击力增加(1回合)，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `总之先吃点热腾腾的食物～`,
                    description: `以自身攻击力30%使我方全体攻击力增加(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `本天才的保暖计画`,
                    description: `我方全体最大HP增加55%\n我方全体攻击力增加63.5%\n我方全体获得「我方队伍恰好为5种角色定位时，开启『《发抖》』」\n我方全体获得「自身《保暖计画》≧1层时，开启『《禦寒之力》』」\n我方全体获得「自身《保暖计画》≧2层时，开启『《禦寒之力》』」\n我方全体获得「自身《保暖计画》=3层时，开启『《禦寒之力》』」\n\n《发抖》\n造成伤害增加38.4%\n造成触发技效果增加51.2%\n攻击时，触发「以自身攻击力23.1%对目标造成伤害」\n普攻时，触发「使自身获得1层《保暖计画》(最多3层)」\n必杀时，触发「使目标受到伤害增加2.56%(最多10层)、受到火属性伤害增加3.84%(最多10层)，再清除自身《保暖计画》所有层数」\n\n《禦寒之力》\n必杀技伤害增加8.53%\n必杀时，追加「以自身攻击力17%对目标造成伤害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `雪、雪…更多的雪！`,
                    description: `我方队伍守护者有1人以上时，开启「必杀时，触发『使我方全体必杀技伤害增加29.4%(1回合)』」\n我方队伍妨碍者有1人以上时，开启「必杀时，触发『使我方全体造成触发技效果增加29.4%(最多2层)』」\n我方队伍攻击者有2人以上时，开启「第1回合时，触发『对自身造成封印(50回合)』」(负面效果)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `湛蓝冰点`,
                    description: `自身免疫必杀技CD变动效果\n我方全体攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力58.8%对目标造成伤害』」\n我方全体攻击者、守护者、妨碍者获得「攻击时，触发『以自身攻击力26.5%对目标造成伤害』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `禦寒对策`,
                    description: `攻击力增加44.1%\n必杀时，追加「使我方全体获得《火之祝福》效果」\n我方全体治疗者、辅助者获得「受到《火之祝福》效果时，触发『使自身攻击力增加7.35%(最多10层)』」`
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
                    name: `Max Heat`,
                    description: `Increase allied Attackers, Defenders, and Obstructors' Damage Output by 7.94/9.26/10.58/11.9/13.23% (max 2 stacks), increase Damage Output by 10.58/12.34/14.1/15.87/17.64% for 1 turn, increase the target's Damage Taken by 8.82/10.29/11.76/13.23/14.7% (max 2 stacks) and Damage Taken by Fire attacks by 26.46/30.87/35.28/39.69/44.1% for 1 turn, then increase the party's Attack Power for 30% of your Attack Power for 1 turn. CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Max Heat`,
                    description: `Increase allied Attackers, Defenders, and Obstructors' Damage Output by 7.94% (max 2 stacks), increase Damage Output by 10.58% for 1 turn, increase the target's Damage Taken by 8.82% (max 2 stacks) and Damage Taken by Fire attacks by 26.46% for 1 turn, then increase the party's Attack Power for 30% of your Attack Power for 1 turn. CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Max Heat`,
                    description: `Increase allied Attackers, Defenders, and Obstructors' Damage Output by 9.26% (max 2 stacks), increase Damage Output by 12.34% for 1 turn, increase the target's Damage Taken by 10.29% (max 2 stacks) and Damage Taken by Fire attacks by 30.87% for 1 turn, then increase the party's Attack Power for 30% of your Attack Power for 1 turn. CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Max Heat`,
                    description: `Increase allied Attackers, Defenders, and Obstructors' Damage Output by 10.58% (max 2 stacks), increase Damage Output by 14.1% for 1 turn, increase the target's Damage Taken by 11.76% (max 2 stacks) and Damage Taken by Fire attacks by 35.28% for 1 turn, then increase the party's Attack Power for 30% of your Attack Power for 1 turn. CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Max Heat`,
                    description: `Increase allied Attackers, Defenders, and Obstructors' Damage Output by 11.9% (max 2 stacks), increase Damage Output by 15.87% for 1 turn, increase the target's Damage Taken by 13.23% (max 2 stacks) and Damage Taken by Fire attacks by 39.69% for 1 turn, then increase the party's Attack Power for 30% of your Attack Power for 1 turn. CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Max Heat`,
                    description: `Increase allied Attackers, Defenders, and Obstructors' Damage Output by 13.23% (max 2 stacks), increase Damage Output by 17.64% for 1 turn, increase the target's Damage Taken by 14.7% (max 2 stacks) and Damage Taken by Fire attacks by 44.1% for 1 turn, then increase the party's Attack Power for 30% of your Attack Power for 1 turn. CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Hot Food First`,
                    description: `Increase the party's Attack Power for 30% of your Attack Power for 1 turn.`
                },
                [SkillType.LEADER]: {
                    name: `Genius Warmth Plan`,
                    description: `Increase the party's max HP by 55%.\nIncrease the party's Attack Power by 63.5%.\nThe party gains the following effect: When there are exactly characters of 5 different positions in the party, activate "Tremble".\nThe party gains the following effect: When your "Warmth Plan" stacks are ≥ 1, activate "Anti-Cold Power".\nThe party gains the following effect: When your "Warmth Plan" stacks are ≥ 2, activate "Anti-Cold Power".\nThe party gains the following effect: When your "Warmth Plan" stacks are = 3, activate "Anti-Cold Power".\n\n"Tremble"\nIncrease Damage Output by 38.4%.\nIncrease trigger ability effects by 51.2%.\nOn Attack, trigger the following effect: Damage the target (23.1% Attack Power).\nOn Basic Attack, trigger the following effect: Gain yourself 1 stack of "Warmth Plan" (max 3 stacks).\nOn Ultimate Skill, trigger the following effect: Increase the target's Damage Taken by 2.56% (max 10 stacks) and Damage Taken from Fire attacks by 3.84% (max 10 stacks), then remove all your "Warmth Plan" stacks.\n\n"Anti-Cold Power"\nIncrease Ultimate Skill Power by 8.53%.\nOn Ultimate Skill, deal additional damage to the target (17% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Snow, Snow, Snow!`,
                    description: `When there is 1 or more Defenders in the party, activate "On Ultimate Skill, trigger the following effect: Increase the party's Ultimate Skill Power by 29.4% for 1 turn".\nWhen there is 1 or more Obstructors in the party, activate "On Ultimate Skill, trigger the following effect: Increase the party's trigger ability effects by 29.4% (max 2 stacks)".\nWhen there are 2 or more Attackers in the party, activate "On the 1st turn, trigger the following effect: Seal yourself for 50 turns (debuff).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Azure Freezing Point`,
                    description: `Gain yourself immunity to Ultimate Skill CD changes.\nAllied Attackers, Defenders, and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target (58.8% Attack Power).\nAllied Attackers, Defenders, and Obstructors gain the following effect: On Attack, trigger the following effect: Damage the target (26.5% Attack Power).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Anti-Cold Strategy`,
                    description: `Increase Attack Power by 44.1%.\nOn Ultimate Skill, the party gains additional "Fire's Blessings" effect.\nAllied Healers and Supporters gain the following effect: When receiving "Fire's Blessings" effect, trigger the following effect: Increase your Attack Power by 7.35% (max 10 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack+`,
                    description: `Increase your Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain immunity to Silence.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `暖房火力全開`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを7.94/9.26/10.58/11.9/13.23%増加させ(最高2スタック)、与えるダメージが10.58/12.34/14.1/15.87/17.64%増加し(1ターン)、ターゲットの受けるダメージを8.82/10.29/11.76/13.23/14.7%増加させ(最高2スタック)、受ける火属性ダメージを26.46/30.87/35.28/39.69/44.1%増加させ(1ターン)、自分の攻撃力の30％分味方全体の攻撃力を増加させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `暖房火力全開`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを7.94%増加させ(最高2スタック)、与えるダメージが10.58%増加し(1ターン)、ターゲットの受けるダメージを8.82%増加させ(最高2スタック)、受ける火属性ダメージを26.46%増加させ(1ターン)、自分の攻撃力の30％分味方全体の攻撃力を増加させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `暖房火力全開`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを9.26%増加させ(最高2スタック)、与えるダメージが12.34%増加し(1ターン)、ターゲットの受けるダメージを10.29%増加させ(最高2スタック)、受ける火属性ダメージを30.87%増加させ(1ターン)、自分の攻撃力の30％分味方全体の攻撃力を増加させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `暖房火力全開`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを10.58%増加させ(最高2スタック)、与えるダメージが14.1%増加し(1ターン)、ターゲットの受けるダメージを11.76%増加させ(最高2スタック)、受ける火属性ダメージを35.28%増加させ(1ターン)、自分の攻撃力の30％分味方全体の攻撃力を増加させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `暖房火力全開`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを11.9%増加させ(最高2スタック)、与えるダメージが15.87%増加し(1ターン)、ターゲットの受けるダメージを13.23%増加させ(最高2スタック)、受ける火属性ダメージを39.69%増加させ(1ターン)、自分の攻撃力の30％分味方全体の攻撃力を増加させる(1ターン)[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `暖房火力全開`,
                    description: `味方全体のアタッカー、ガーディアン、デバッファーの与えるダメージを13.23%増加させ(最高2スタック)、与えるダメージが17.64%増加し(1ターン)、ターゲットの受けるダメージを14.7%増加させ(最高2スタック)、受ける火属性ダメージを44.1%増加させ(1ターン)、自分の攻撃力の30％分味方全体の攻撃力を増加させる(1ターン)[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `まずはアツアツのごはんを食べてから～`,
                    description: `自分の攻撃力の30％分味方全体の攻撃力を増加させる(1ターン)`
                },
                [SkillType.LEADER]: {
                    name: `天才のぽかぽか計画`,
                    description: `味方全体の最大HPが55%増加する\n味方全体の攻撃力が63.5%増加する\n味方全体が「味方のチーム内にちょうど5種類のポジションのキャラがいる時《身震い》を発動する」を獲得する\n味方全体が「自分の《ぽかぽか計画》のスタック数が≧1の時《防寒の力》を発動する」を獲得する\n味方全体が「自分の《ぽかぽか計画》のスタック数が≧2の時《防寒の力》を発動する」を獲得する\n味方全体が「自分の《ぽかぽか計画》のスタック数が=3の時《防寒の力》を発動する」を獲得する\n\n《身震い》\n与えるダメージが38.4%増加する\n誘発スキル効果が51.2%増加する\n攻撃時「自分の23.1%の攻撃力でターゲットにダメージを与える」を誘発する\n通常攻撃時「自分が《ぽかぽか計画》を1スタック獲得する(最高3スタック)」を誘発する\n必殺技攻撃時「ターゲットの受けるダメージを2.56%増加させ(最高10スタック)、受ける火属性ダメージを3.84%増加させ(最高10スタック)、自分の《ぽかぽか計画》のすべてのスタック数を消す」を誘発する\n\n《防寒の力》\n必殺技ダメージが8.53%増加する\n必殺技攻撃時「自分の17%の攻撃力でターゲットにダメージを与える」を追加する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `雪、雪……雪だらけ！`,
                    description: `味方チームにガーディアンが1人以上いる時「必殺技攻撃時『味方全体の必殺技ダメージを29.4%増加させる(1ターン)』を誘発する」を発動する\n味方チームにデバッファーが1人以上いる時「必殺技攻撃時『味方全体の与える誘発スキル効果を29.4%増加させる(最高2スタック)』を誘発する」を発動する\n味方チームにアタッカーが2人以上いる時「1ターン目に『自分を封印する(50ターン)』を誘発する」を発動する（デバフ効果）`
                },
                [SkillType.PASSIVE_2]: {
                    name: `ブルーアイス`,
                    description: `自分の必殺技CDを変動させる効果を無効にする\n味方全体のアタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の58.8%の攻撃力でターゲットにダメージを与える』を追加する」を獲得する\n味方全体のアタッカー、ガーディアン、デバッファーが「攻撃時『自分の26.5%の攻撃力でターゲットにダメージを与える』を誘発する」を獲得する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `防寒対策`,
                    description: `攻撃力が44.1%増加する\n必殺技攻撃時「味方全体が《火の祝福》を獲得する」を追加する\n味方全体のヒーラー、サポーターが「《火の祝福》の効果を受けた時『自分の攻撃力を7.35%増加させる(最高10スタック)』を誘発する」を獲得する`
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
                    name: `난로 화력 개방`,
                    description: `아군 딜러, 탱커, 디스럽터의 가하는 데미지 7.94/9.26/10.58/11.9/13.23% 증가(최대 2중첩), 가하는 데미지 10.58/12.34/14.1/15.87/17.64% 증가(1턴), 타깃이 받는 데미지 8.82/10.29/11.76/13.23/14.7% 증가(최대 2중첩), 받는 화속성 데미지 26.46/30.87/35.28/39.69/44.1% 증가(1턴), 다시 자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `난로 화력 개방`,
                    description: `아군 딜러, 탱커, 디스럽터의 가하는 데미지 7.94% 증가(최대 2중첩), 가하는 데미지 10.58% 증가(1턴), 타깃이 받는 데미지 8.82% 증가(최대 2중첩), 받는 화속성 데미지 26.46% 증가(1턴), 다시 자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `난로 화력 개방`,
                    description: `아군 딜러, 탱커, 디스럽터의 가하는 데미지 9.26% 증가(최대 2중첩), 가하는 데미지 12.34% 증가(1턴), 타깃이 받는 데미지 10.29% 증가(최대 2중첩), 받는 화속성 데미지 30.87% 증가(1턴), 다시 자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `난로 화력 개방`,
                    description: `아군 딜러, 탱커, 디스럽터의 가하는 데미지 10.58% 증가(최대 2중첩), 가하는 데미지 14.1% 증가(1턴), 타깃이 받는 데미지 11.76% 증가(최대 2중첩), 받는 화속성 데미지 35.28% 증가(1턴), 다시 자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `난로 화력 개방`,
                    description: `아군 딜러, 탱커, 디스럽터의 가하는 데미지 11.9% 증가(최대 2중첩), 가하는 데미지 15.87% 증가(1턴), 타깃이 받는 데미지 13.23% 증가(최대 2중첩), 받는 화속성 데미지 39.69% 증가(1턴), 다시 자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴) [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `난로 화력 개방`,
                    description: `아군 딜러, 탱커, 디스럽터의 가하는 데미지 13.23% 증가(최대 2중첩), 가하는 데미지 17.64% 증가(1턴), 타깃이 받는 데미지 14.7% 증가(최대 2중첩), 받는 화속성 데미지 44.1% 증가(1턴), 다시 자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴) [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `일단은 뜨끈한 것부터 먹자~`,
                    description: `자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)`
                },
                [SkillType.LEADER]: {
                    name: `천재의 방한 계획`,
                    description: `아군 전체의 최대 HP 55% 증가\n아군 전체의 공격 데미지 63.5% 증가\n아군 전체는 「팀이 5종 위치의 캐릭터로 편성될 경우 『《덜덜》』 활성화」 획득\n아군 전체는 「자신의 《방한 계획》 중첩수≧1일 시 『《방한의 힘》』 활성화」 획득\n아군 전체는 「자신의 《방한 계획》중첩수≧2일 시 『《방한의 힘》』 활성화」 획득\n아군 전체는 「자신의 《방한 계획》중첩수=3일 시 『《방한의 힘》』 활성화」 획득\n\n《덜덜》\n가하는 데미지 38.4% 증가\n트리거 스킬 효과 51.2% 증가\n공격 시 「자신의 공격 데미지의 23.1%만큼 타깃에게 데미지」 트리거\n일반 공격 시 「자신은 1중첩의 《방한 계획》 획득(최대 3중첩)」 트리거\n궁극기 발동 시 「타깃이 받는 데미지 2.56% 증가(최대 10중첩), 받는 화속성 데미지 3.84% 증가(최대 10중첩), 다시 자신의 모든 《방한 계획》 중첩수 제거」 트리거\n\n《방한의 힘》\n궁극기 데미지 8.53% 증가\n궁극기 발동 시 「자신의 공격 데미지의 17%만큼 타깃에게 데미지」 추가`
                },
                [SkillType.PASSIVE_1]: {
                    name: `눈, 눈... 더 많은 눈!`,
                    description: `아군 팀에 탱커가 1명 이상 있을 시 「궁극기 발동 시 『아군 전체의 궁극기 데미지 29.4% 증가(1턴)』 트리거」 활성화\n아군 팀에 디스럽터가 1명 이상 있을 시 「궁극기 발동 시 『아군 전체가 가하는 트리거 스킬 효과 29.4% 증가(최대 2중첩)』 트리거」 활성화\n아군 팀에 딜러가 2명 이상 있을 시 「첫 번째 턴 시작 시 『자신에게 봉인 부여(50턴)』 트리거」 활성화(디버프 효과)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `짙푸른 빙점`,
                    description: `자신은 궁극기 CD 변동 효과 면역\n아군 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 58.8%만큼 타깃에게 데미지』 추가」 획득\n아군 딜러, 탱커, 디스럽터는 「공격 시 『자신의 공격 데미지의 26.5%만큼 타깃에게 데미지』 트리거」 획득`
                },
                [SkillType.PASSIVE_3]: {
                    name: `방한 대책`,
                    description: `공격 데미지 44.1% 증가\n궁극기 발동 시 「아군 전체는《불의 축복》 효과 획득」 추가\n아군 힐러, 서포터는 「《불의 축복》 효과를 받을 시 『자신의 공격 데미지 7.35% 증가(최대 10중첩)』 트리거」 획득`
                },
                [SkillType.GENERAL_1]: {
                    name: `공격+`,
                    description: `자신의 공격 데미지 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 부여`
                }
            }
        }
    },
]
