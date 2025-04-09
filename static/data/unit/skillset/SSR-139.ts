import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10167: SkillSet[] =  [
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
                    name: `閃亮☆應援`,
                    description: `使我方全體攻擊者攻擊力增加20/25/30/35/40%(2回合)、造成傷害增加10/11.25/16.66/18.33/30%(最多4/4/3/3/2層)、並獲得「必殺時，觸發『以自身攻擊力10/11.25/12.5/13.75/15%使自身攻擊力增加(2回合)(不可疊加)』(1回合)」，再使目標受到火屬性傷害增加5/7.5/8.33/13.75/15%(最多4/3/3/2/2層)。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `閃亮☆應援`,
                    description: `使我方全體攻擊者攻擊力增加20%(2回合)、造成傷害增加10%(最多4層)、並獲得「必殺時，觸發『以自身攻擊力10%使自身攻擊力增加(2回合)(不可疊加)』(1回合)」，再使目標受到火屬性傷害增加5%(最多4層)。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `閃亮☆應援`,
                    description: `使我方全體攻擊者攻擊力增加25%(2回合)、造成傷害增加11.25%(最多4層)、並獲得「必殺時，觸發『以自身攻擊力11.25%使自身攻擊力增加(2回合)(不可疊加)』(1回合)」，再使目標受到火屬性傷害增加7.5%(最多3層)。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `閃亮☆應援`,
                    description: `使我方全體攻擊者攻擊力增加30%(2回合)、造成傷害增加16.66%(最多3層)、並獲得「必殺時，觸發『以自身攻擊力12.5%使自身攻擊力增加(2回合)(不可疊加)』(1回合)」，再使目標受到火屬性傷害增加8.33%(最多3層)。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `閃亮☆應援`,
                    description: `使我方全體攻擊者攻擊力增加35%(2回合)、造成傷害增加18.33%(最多3層)、並獲得「必殺時，觸發『以自身攻擊力13.75%使自身攻擊力增加(2回合)(不可疊加)』(1回合)」，再使目標受到火屬性傷害增加13.75%(最多2層)。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `閃亮☆應援`,
                    description: `使我方全體攻擊者攻擊力增加40%(2回合)、造成傷害增加30%(最多2層)、並獲得「必殺時，觸發『以自身攻擊力15%使自身攻擊力增加(2回合)(不可疊加)』(1回合)」，再使目標受到火屬性傷害增加15%(最多2層)。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `偶像應援`,
                    description: `以自身攻擊力30%使我方全體攻擊力增加(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `偶像啦啦隊`,
                    description: `我方全體最大HP增加40%\n火屬性攻擊者以外我方全體火屬性角色獲得「第1回合時，觸發『《熱情分享》』(觸發1次後清除)」\n\n《熱情分享》\n使自身獲得「普攻時，觸發『使目標受到傷害增加5%(1回合)』(50回合)」\n使自身獲得「普攻時，觸發『使目標受到火屬性傷害增加5%(1回合)』(50回合)」\n使我方全體攻擊力增加20%(最多4層)\n使我方全體火屬性攻擊者普攻傷害增加15%(最多4層)\n使我方全體火屬性攻擊者造成傷害增加10%(最多4層)\n使我方全體火屬性攻擊者獲得「普攻時，追加『以自身攻擊力15%對目標造成傷害』(50回合)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `一擊逆轉☆`,
                    description: `普攻時，追加「以自身攻擊力50%對目標造成傷害」\n必殺時，觸發「以自身攻擊力30%使我方全體攻擊力增加(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `勇氣☆躍動～！`,
                    description: `第2、6、10回合時，觸發「使我方全體攻擊者普攻傷害增加30%(最多3層)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `凱薩的啦啦隊♡特訓`,
                    description: `第1回合時，觸發「使自身與我方全體攻擊者當前必殺技CD減少4回合」(觸發1次後清除)\n我方全體攻擊者獲得「必殺時，觸發『使自身獲得《特殊應援技巧♡》』」\n\n《特殊應援技巧♡》\n普攻時，追加「以自身攻擊力40%對目標造成傷害」(2回合)`
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
                    name: `闪亮☆应援`,
                    description: `使我方全体攻击者攻击力增加20/25/30/35/40%(2回合)、造成伤害增加10/11.25/16.66/18.33/30%(最多4/4/3/3/2层)、并获得「必杀时，触发『以自身攻击力10/11.25/12.5/13.75/15%使自身攻击力增加(2回合)(不可叠加)』(1回合)」，再使目标受到火属性伤害增加5/7.5/8.33/13.75/15%(最多4/3/3/2/2层)。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `闪亮☆应援`,
                    description: `使我方全体攻击者攻击力增加20%(2回合)、造成伤害增加10%(最多4层)、并获得「必杀时，触发『以自身攻击力10%使自身攻击力增加(2回合)(不可叠加)』(1回合)」，再使目标受到火属性伤害增加5%(最多4层)。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `闪亮☆应援`,
                    description: `使我方全体攻击者攻击力增加25%(2回合)、造成伤害增加11.25%(最多4层)、并获得「必杀时，触发『以自身攻击力11.25%使自身攻击力增加(2回合)(不可叠加)』(1回合)」，再使目标受到火属性伤害增加7.5%(最多3层)。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `闪亮☆应援`,
                    description: `使我方全体攻击者攻击力增加30%(2回合)、造成伤害增加16.66%(最多3层)、并获得「必杀时，触发『以自身攻击力12.5%使自身攻击力增加(2回合)(不可叠加)』(1回合)」，再使目标受到火属性伤害增加8.33%(最多3层)。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `闪亮☆应援`,
                    description: `使我方全体攻击者攻击力增加35%(2回合)、造成伤害增加18.33%(最多3层)、并获得「必杀时，触发『以自身攻击力13.75%使自身攻击力增加(2回合)(不可叠加)』(1回合)」，再使目标受到火属性伤害增加13.75%(最多2层)。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `闪亮☆应援`,
                    description: `使我方全体攻击者攻击力增加40%(2回合)、造成伤害增加30%(最多2层)、并获得「必杀时，触发『以自身攻击力15%使自身攻击力增加(2回合)(不可叠加)』(1回合)」，再使目标受到火属性伤害增加15%(最多2层)。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `偶像应援`,
                    description: `以自身攻击力30%使我方全体攻击力增加(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `偶像啦啦队`,
                    description: `我方全体最大HP增加40%\n火属性攻击者以外我方全体火属性角色获得「第1回合时，触发『《热情分享》』(触发1次後清除)」\n\n《热情分享》\n使自身获得「普攻时，触发『使目标受到伤害增加5%(1回合)』(50回合)」\n使自身获得「普攻时，触发『使目标受到火属性伤害增加5%(1回合)』(50回合)」\n使我方全体攻击力增加20%(最多4层)\n使我方全体火属性攻击者普攻伤害增加15%(最多4层)\n使我方全体火属性攻击者造成伤害增加10%(最多4层)\n使我方全体火属性攻击者获得「普攻时，追加『以自身攻击力15%对目标造成伤害』(50回合)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `一击逆转☆`,
                    description: `普攻时，追加「以自身攻击力50%对目标造成伤害」\n必杀时，触发「以自身攻击力30%使我方全体攻击力增加(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `勇气☆跃动～！`,
                    description: `第2、6、10回合时，触发「使我方全体攻击者普攻伤害增加30%(最多3层)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `凯萨的啦啦队♡特训`,
                    description: `第1回合时，触发「使自身与我方全体攻击者当前必杀技CD减少4回合」(触发1次後清除)\n我方全体攻击者获得「必杀时，触发『使自身获得《特殊应援技巧♡》』」\n\n《特殊应援技巧♡》\n普攻时，追加「以自身攻击力40%对目标造成伤害」(2回合)`
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
                    name: `Sparkle ☆ Cheerr`,
                    description: `Increase all allied Attackers' Attack Power by 20/25/30/35/40% for 2 turns, increase Damage Output by 10/11.25/16.66/18.33/30% (max 4/4/3/3/2 stacks), and gain the following effect for 1 turn: On Ultimate Skill, trigger the following effect: Increase your Attack Power for 10/11.25/12.5/13.75/15% of your Attack Power for 2 turns (Non-stackable). Then increase the target's Damage Taken from Fire attacks by 5/7.5/8.33/13.75/15% (max 4/3/3/2/2 stacks). CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Sparkle ☆ Cheerr`,
                    description: `Increase all allied Attackers' Attack Power by 20% for 2 turns, increase Damage Output by 10% (max 4 stacks), and gain the following effect for 1 turn: On Ultimate Skill, trigger the following effect: Increase your Attack Power for 10% of your Attack Power for 2 turns (Non-stackable). Then increase the target's Damage Taken from Fire attacks by 5% (max 4 stacks). CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Sparkle ☆ Cheerr`,
                    description: `Increase all allied Attackers' Attack Power by 25% for 2 turns, increase Damage Output by 11.25% (max 4 stacks), and gain the following effect for 1 turn: On Ultimate Skill, trigger the following effect: Increase your Attack Power for 11.25% of your Attack Power for 2 turns (Non-stackable). Then increase the target's Damage Taken from Fire attacks by 7.5% (max 3 stacks). CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Sparkle ☆ Cheerr`,
                    description: `Increase all allied Attackers' Attack Power by 30% for 2 turns, increase Damage Output by 16.66% (max 3 stacks), and gain the following effect for 1 turn: On Ultimate Skill, trigger the following effect: Increase your Attack Power for 12.5% of your Attack Power for 2 turns (Non-stackable). Then increase the target's Damage Taken from Fire attacks by 8.33% (max 3 stacks). CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Sparkle ☆ Cheerr`,
                    description: `Increase all allied Attackers' Attack Power by 35% for 2 turns, increase Damage Output by 18.33% (max 3 stacks), and gain the following effect for 1 turn: On Ultimate Skill, trigger the following effect: Increase your Attack Power for 13.75% of your Attack Power for 2 turns (Non-stackable). Then increase the target's Damage Taken from Fire attacks by 13.75% (max 2 stacks). CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Sparkle ☆ Cheerr`,
                    description: `Increase all allied Attackers' Attack Power by 40% for 2 turns, increase Damage Output by 30% (max 2 stacks), and gain the following effect for 1 turn: On Ultimate Skill, trigger the following effect: Increase your Attack Power for 15% of your Attack Power for 2 turns (Non-stackable). Then increase the target's Damage Taken from Fire attacks by 15% (max 2 stacks). CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Idol Support`,
                    description: `Increase the party's Attack Power for 30% of your Attack Power for 1 turn.`
                },
                [SkillType.LEADER]: {
                    name: `Idol Cheer Squad`,
                    description: `Increase the party's max HP by 40%.\nAll Fire allies, except Fire Attackers, gain the following effect: On the 1st turn, trigger "Passion Share" (removes after triggering once).\n\n"Passion Share"\nGain yourself the following effect: On Basic Attack, trigger the following effect for 50 turns: Increase the target's Damage Taken by 5% for 1 turn.\nGain yourself the following effect: On Basic Attack, trigger the following effect for 50 turns: Increase the target's Damage Taken from Fire attacks by 5% for 1 turn.\nIncrease the party's Attack Power by 20% (max 4 stacks).\nIncrease all Fire Attackers' Basic Attack Power by 15% (max 4 stacks).\nIncrease all Fire Attackers' Damage Output by 10% (max 4 stacks).\nGain all Fire Attackers the following effect: On Basic Attack, deal additional damage to the target for 50 turns (15% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `One-Strike Comeback ☆`,
                    description: `On Basic Attack, deal additional damage to the target (50% Attack Power).\nOn Ultimate Skill, trigger the following effect: Increase the party's Attack Power for 30% of your Attack Power for 1 turn.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Courage ☆ Pulse~!`,
                    description: `On the 2nd, 6th, and 10th turn, trigger the following effect: Increase all allied Attackers' Basic Attack Power by 30% (max 3 stacks).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Caesar's Cheerleader ♡ Bootcamp`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD and that of all allied Attackers by 4 turns. (removes after triggering once)\nAll allied Attackers gain the following effect: On Ultimate Skill, trigger the following effect: Gain yourself "Special Cheer Technique ♡".\n\n"Special Cheer Technique ♡"\nOn Basic Attack, deal additional damage to the target for 2 turns (40% Attack Power).`
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
                    name: `キラキラ☆応援`,
                    description: `味方アタッカーの攻撃力を20/25/30/35/40%増加させ(2ターン)、与えるダメージが10/11.25/16.66/18.33/30%増加し(最高4/4/3/3/2スタック)、「必殺技攻撃時『自分の攻撃力の10/11.25/12.5/13.75/15%分自分の攻撃力を増加させる(2ターン)(スタック不可)』を誘発する(1ターン)」を獲得し、ターゲットが受ける火属性ダメージを5/7.5/8.33/13.75/15%増加させる(最高4/3/3/2/2スタック)[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `キラキラ☆応援`,
                    description: `味方アタッカーの攻撃力を20%増加させ(2ターン)、与えるダメージが10%増加し(最高4スタック)、「必殺技攻撃時『自分の攻撃力の10%分自分の攻撃力を増加させる(2ターン)(スタック不可)』を誘発する(1ターン)」を獲得し、ターゲットが受ける火属性ダメージを5%増加させる(最高4スタック)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `キラキラ☆応援`,
                    description: `味方アタッカーの攻撃力を25%増加させ(2ターン)、与えるダメージが11.25%増加し(最高4スタック)、「必殺技攻撃時『自分の攻撃力の11.25%分自分の攻撃力を増加させる(2ターン)(スタック不可)』を誘発する(1ターン)」を獲得し、ターゲットが受ける火属性ダメージを7.5%増加させる(最高3スタック)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `キラキラ☆応援`,
                    description: `味方アタッカーの攻撃力を30%増加させ(2ターン)、与えるダメージが16.66%増加し(最高3スタック)、「必殺技攻撃時『自分の攻撃力の12.5%分自分の攻撃力を増加させる(2ターン)(スタック不可)』を誘発する(1ターン)」を獲得し、ターゲットが受ける火属性ダメージを8.33%増加させる(最高3スタック)[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `キラキラ☆応援`,
                    description: `味方アタッカーの攻撃力を35%増加させ(2ターン)、与えるダメージが18.33%増加し(最高3スタック)、「必殺技攻撃時『自分の攻撃力の13.75%分自分の攻撃力を増加させる(2ターン)(スタック不可)』を誘発する(1ターン)」を獲得し、ターゲットが受ける火属性ダメージを13.75%増加させる(最高2スタック)[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `キラキラ☆応援`,
                    description: `味方アタッカーの攻撃力を40%増加させ(2ターン)、与えるダメージが30%増加し(最高2スタック)、「必殺技攻撃時『自分の攻撃力の15%分自分の攻撃力を増加させる(2ターン)(スタック不可)』を誘発する(1ターン)」を獲得し、ターゲットが受ける火属性ダメージを15%増加させる(最高2スタック)[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `アイドルエール`,
                    description: `自分の攻撃力の30반짝☆응원分味方全体の攻撃力を増加させる(1ターン)`
                },
                [SkillType.LEADER]: {
                    name: `アイドルチアリーダー`,
                    description: `味方全体の最大HPが40%増加する\n火属性アタッカー以外の味方火属性キャラが「1ターン目に《情熱おすそわけ》を誘発する(誘発1回後に解除)」を獲得する\n\n《情熱おすそわけ》\n自分が「通常攻撃時『ターゲットが受けるダメージを5%増加させる(1ターン)』を誘発する(50ターン)」を獲得する\n自分が「通常攻撃時『ターゲットが受ける火属性ダメージを5%増加させる(1ターン)』を誘発する(50ターン)」を獲得する\n味方全体の攻撃力を20%増加させる(最高4スタック)\n味方の火属性アタッカーの通常攻撃ダメージを15%増加させる(最高4スタック)\n味方の火属性アタッカーの与えるダメージを10%増加させる(最高4スタック)\n味方の火属性アタッカーが「通常攻撃時『自分の15%の攻撃力でターゲットにダメージを与える』を追加する(50ターン)」を獲得する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `一発逆転☆`,
                    description: `通常攻撃時「自分の50%の攻撃力でターゲットにダメージを与える」を追加する\n必殺技攻撃時「自分の攻撃力の30반짝☆응원分味方全体の攻撃力を増加させる(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `勇気☆ジャンプ！`,
                    description: `2、6、10ターン目開始時「味方アタッカーの通常攻撃ダメージを30%増加させる(最高3スタック)」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `シーザーのチア♡特訓`,
                    description: `1ターン目に「自分と味方アタッカーの現在の必殺技CDを4ターン減少させる(誘発1回後に解除)」を誘発する\n味方アタッカーが「必殺技攻撃時『自分が《特別な応援スキル♡》を獲得する』を誘発する」を獲得する\n\n《特別な応援スキル♡》\n通常攻撃時「自分の40%の攻撃力でターゲットにダメージを与える」を追加する(2ターン)`
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
                    name: `반짝☆응원`,
                    description: `아군 딜러의 공격 데미지 20/25/30/35/40% 증가(2턴), 가하는 데미지 10/11.25/16.66/18.33/30% 증가(최대 4/4/3/3/2중첩), 「궁극기 발동 시 『자신의 공격 데미지의 10/11.25/12.5/13.75/15%만큼 자신의 공격 데미지 증가(2턴)(중첩 불가)』트리거(1턴)」 획득, 다시 타깃이 받는 화속성 데미지 5/7.5/8.33/13.75/15% 증가(최대 4/3/3/2/2중첩) [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `반짝☆응원`,
                    description: `아군 딜러의 공격 데미지 20% 증가(2턴), 가하는 데미지 10% 증가(최대 4중첩), 「궁극기 발동 시 『자신의 공격 데미지의 10%만큼 자신의 공격 데미지 증가(2턴)(중첩 불가)』트리거(1턴)」 획득, 다시 타깃이 받는 화속성 데미지 5% 증가(최대 4중첩) [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `반짝☆응원`,
                    description: `아군 딜러의 공격 데미지 25% 증가(2턴), 가하는 데미지 11.25% 증가(최대 4중첩), 「궁극기 발동 시 『자신의 공격 데미지의 11.25%만큼 자신의 공격 데미지 증가(2턴)(중첩 불가)』트리거(1턴)」 획득, 다시 타깃이 받는 화속성 데미지 7.5% 증가(최대 3중첩) [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `반짝☆응원`,
                    description: `아군 딜러의 공격 데미지 30% 증가(2턴), 가하는 데미지 16.66% 증가(최대 3중첩), 「궁극기 발동 시 『자신의 공격 데미지의 12.5%만큼 자신의 공격 데미지 증가(2턴)(중첩 불가)』트리거(1턴)」 획득, 다시 타깃이 받는 화속성 데미지 8.33% 증가(최대 3중첩) [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `반짝☆응원`,
                    description: `아군 딜러의 공격 데미지 35% 증가(2턴), 가하는 데미지 18.33% 증가(최대 3중첩), 「궁극기 발동 시 『자신의 공격 데미지의 13.75%만큼 자신의 공격 데미지 증가(2턴)(중첩 불가)』트리거(1턴)」 획득, 다시 타깃이 받는 화속성 데미지 13.75% 증가(최대 2중첩) [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `반짝☆응원`,
                    description: `아군 딜러의 공격 데미지 40% 증가(2턴), 가하는 데미지 30% 증가(최대 2중첩), 「궁극기 발동 시 『자신의 공격 데미지의 15%만큼 자신의 공격 데미지 증가(2턴)(중첩 불가)』트리거(1턴)」 획득, 다시 타깃이 받는 화속성 데미지 15% 증가(최대 2중첩) [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `아이돌 응원`,
                    description: `자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)`
                },
                [SkillType.LEADER]: {
                    name: `아이돌 치어리더`,
                    description: `아군 전체의 최대 HP 40% 증가\n화속성 딜러 이외의 아군 전체의 화속성 캐릭터는 「첫 번째 턴 시작 시 『《열정 나눔》』트리거(1회 트리거 후 제거)」획득\n\n《열정 나눔》\n자신은 「일반 공격 시 『타깃이 받는 데미지 5% 증가(1턴)』트리거(50턴)」 획득\n자신은 「일반 공격 시 『타깃이 받는 화속성 데미지 5% 증가(1턴)』트리거(50턴)」 획득\n아군 전체의 공격 데미지 20% 증가(최대 4중첩)\n아군 화속성 딜러의 일반 공격 데미지 15% 증가(최대 4중첩)\n아군 화속성 딜러의 가하는 데미지 10% 증가(최대 4중첩)\n아군 화속성 딜러는 「일반 공격 시 『자신의 공격 데미지의 15%만큼 타깃에게 데미지』추가(50턴)」획득`
                },
                [SkillType.PASSIVE_1]: {
                    name: `한 방 역전☆`,
                    description: `일반 공격 시 「자신의 공격 데미지의 50%만큼 타깃에게 데미지」 추가\n궁극기 발동 시 「자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)」 트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `용기☆두근두근~!`,
                    description: `2, 6, 10번째 턴에서 「아군 딜러의 일반 공격 데미지 30% 증가(최대 3중첩)」 트리거`
                },
                [SkillType.PASSIVE_3]: {
                    name: `시저의 치어리더♡특훈`,
                    description: `첫 번째 턴 시작 시 「자신과 아군 딜러의 현재 궁극기 CD 4턴 감소」 트리거(1회 트리거 후 제거)\n아군 딜러는 「궁극기 발동 시 『자신은 《스페셜 응원 스킬♡》 획득』트리거」 획득\n\n《스페셜 응원 스킬♡》\n일반 공격 시 「자신의 공격 데미지의 40%만큼 타깃에게 데미지」 추가(2턴)`
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