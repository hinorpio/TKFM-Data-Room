import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10140: SkillSet[] =  [
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
                    name: `繁星歸位`,
                    description: `以自身攻擊力330/376/422/468/514%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少10/12.5/15/17.5/20%(2回合)，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `繁星歸位`,
                    description: `以自身攻擊力330%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少10%(2回合)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `繁星歸位`,
                    description: `以自身攻擊力376%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少12.5%(2回合)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `繁星歸位`,
                    description: `以自身攻擊力422%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少15%(2回合)，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `繁星歸位`,
                    description: `以自身攻擊力468%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少17.5%(2回合)，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `繁星歸位`,
                    description: `以自身攻擊力514%對目標造成傷害、並使我方站位1、站位2、站位3角色受到傷害減少20%(2回合)，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `汙穢褻瀆之音`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `扭曲儀式`,
                    description: `自身最大HP增加50%\n我方全體攻擊力增加100%\n自身必殺時，觸發「以自身攻擊力400%對目標造成傷害」\n自身攻擊時，觸發「以自身最大HP1%對自身以外我方全體造成傷害」\n自身造成傷害時會以傷害值25%回復自身HP\n我方站位2、站位3獲得《活體獻祭》\n\n《活體獻祭》\n造成傷害減少300%\n攻擊時，觸發「以自身基礎攻擊力125%使我方站位1角色攻擊力增加(1回合)」\n必殺時，觸發「使目標受到闇屬性傷害增加14%(2回合)」\n第一回合時，觸發「使自身獲得《意識剝離》」\n\n《意識剝離》\n當自身是攻擊者時：\n行動時，觸發「使我方站位1角色獲得必殺時，觸發「以自身最大HP100%對目標造成傷害、再以自身攻擊力150%對目標造成傷害」(50回合)、造成傷害增加25%(50回合)」(1回合)\n當自身是妨礙者時：\n行動時，觸發「使我方站位1角色獲得攻擊時，觸發「使目標被治療回復量減少50%(2回合)」(50回合)、必殺時，觸發「使目標受到傷害增加45%(9回合)」(50回合)、造成傷害增加25%(50回合)」(1回合)\n當自身是守護者、治療者、輔助者時：\n自身攻擊力減少600%(50回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `深淵府邸`,
                    description: `使我方全體必殺技傷害增加30%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `不可名狀之軀`,
                    description: `造成傷害增加10%\n必殺時，觸發「使我方全體造成傷害增加20%(1回合)」\n防禦時，觸發「使我方全體被治療時回復量增加20%(1回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `候汝入夢`,
                    description: `自身獲得《降臨準備》\n\n《降臨準備》\n普攻時，觸發「使自身『降臨值(最多10層)』增加1層」\n必殺時，觸發「使自身『降臨值(最多10層)』增加3層」\n自身「降臨值」層數=10層時，開啟《真神降臨》技能\n\n《真神降臨》\n普攻時，觸發「使目標獲得3層受到傷害增加5%(最多9層)」\n必殺時，觸發「以自身最大HP50%對目標造成傷害」`
                },
                [SkillType.GENERAL_1]: {
                    name: `傷害+ (6潛)`,
                    description: `使自身造成傷害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `完全免疫 (12潛)`,
                    description: `免疫睡眠\n免疫麻痺\n免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `繁星归位`,
                    description: `以自身攻击力330/376/422/468/514%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少10/12.5/15/17.5/20%(2回合)，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `繁星归位`,
                    description: `以自身攻击力330%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少10%(2回合)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `繁星归位`,
                    description: `以自身攻击力376%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少12.5%(2回合)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `繁星归位`,
                    description: `以自身攻击力422%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少15%(2回合)，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `繁星归位`,
                    description: `以自身攻击力468%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少17.5%(2回合)，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `繁星归位`,
                    description: `以自身攻击力514%对目标造成伤害丶并使我方站位1丶站位2丶站位3角色受到伤害减少20%(2回合)，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `污秽亵渎之音`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `扭曲仪式`,
                    description: `自身最大HP增加50%\n我方全体攻击力增加100%\n自身必杀时，触发「以自身攻击力400%对目标造成伤害」\n自身攻击时，触发「以自身最大HP1%对自身以外我方全体造成伤害」\n自身造成伤害时会以伤害值25%回复自身HP\n我方站位2丶站位3获得《活体献祭》\n\n《活体献祭》\n造成伤害减少300%\n攻击时，触发「以自身基础攻击力125%使我方站位1角色攻击力增加(1回合)」\n必杀时，触发「使目标受到闇属性伤害增加14%(2回合)」\n第一回合时，触发「使自身获得《意识剥离》」\n\n《意识剥离》\n当自身是攻击者时：\n行动时，触发「使我方站位1角色获得必杀时，触发「以自身最大HP100%对目标造成伤害丶再以自身攻击力150%对目标造成伤害」(50回合)丶造成伤害增加25%(50回合)」(1回合)\n当自身是妨碍者时：\n行动时，触发「使我方站位1角色获得攻击时，触发「使目标被治疗回复量减少50%(2回合)」(50回合)丶必杀时，触发「使目标受到伤害增加45%(9回合)」(50回合)丶造成伤害增加25%(50回合)」(1回合)\n当自身是守护者丶治疗者丶辅助者时：\n自身攻击力减少600%(50回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `深渊府邸`,
                    description: `使我方全体必杀技伤害增加30%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `不可名状之躯`,
                    description: `造成伤害增加10%\n必杀时，触发「使我方全体造成伤害增加20%(1回合)」\n防御时，触发「使我方全体被治疗时回复量增加20%(1回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `候汝入梦`,
                    description: `自身获得《降临准备》\n\n《降临准备》\n普攻时，触发「使自身『降临值(最多10层)』增加1层」\n必杀时，触发「使自身『降临值(最多10层)』增加3层」\n自身「降临值」层数=10层时，开启《真神降临》技能\n\n《真神降临》\n普攻时，触发「使目标获得3层受到伤害增加5%(最多9层)」\n必杀时，触发「以自身最大HP50%对目标造成伤害」`
                },
                [SkillType.GENERAL_1]: {
                    name: `伤害+ (6潜)`,
                    description: `使自身造成伤害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `完全免疫 (12潜)`,
                    description: `免疫睡眠\n免疫麻痹\n免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Starry Return`,
                    description: `Damage the target (330/376/422/468/514% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 10/12.5/15/17.5/20% for 2 turns. CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Starry Return`,
                    description: `Damage the target (330% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 10% for 2 turns. CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Starry Return`,
                    description: `Damage the target (376% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 12.5% for 2 turns. CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Starry Return`,
                    description: `Damage the target (422% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 15% for 2 turns. CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Starry Return`,
                    description: `Damage the target (468% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 17.5% for 2 turns. CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Starry Return`,
                    description: `Damage the target (514% Attack Power) then decrease the 1st, 2nd, and 3rd ally's Damage Taken by 20% for 2 turns. CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `The Profane Voice`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Twisted Ritual`,
                    description: `Increase your max HP by 50%.\nIncrease the party's Attack Power by 100%.\nOn Ultimate Skill, damage the target (400% Attack Power).\nOn Attack, damage other allies for 1% of your max HP.\nRecover your HP for 25% of your damage when you deal damage.\nThe 2nd and 3rd position allies gain "Living Sacrifice".\n\n"Living Sacrifice"\nDecrease Damage Output by 300%.\nOn Attack, increase the 1st position ally's Attack Power for 125% of your Basic Attack Power for 1 turn.\nOn Ultimate Skill, increase the target's Damage Taken from Dark attacks by 14% for 2 turns.\nOn the 1st turn, gain yourself "Consciousness Detachment".\n\n"Consciousness Detachment"\nWhen you're the Attacker:\nThis turn, when performing an action, the 1st position ally gains the following effects for 50 turns: On Ultimate Skill, damage the target for 100% of your max HP, then damage the target (150% Attack Power); increase Damage Output by 25%.\nWhen you're the Obstructor:\nThis turn, when performing an action, the 1st position ally gains the following effects for 50 turns: On Attack, decrease the target's Recovery Rate by 50% for 2 turns; On Ultimate Skill, increase the target's Damage Taken by 45% for 9 turns; increase Damage Output by 25%.\nWhen you're the Defender, Healer, or Supporter:\nDecrease your Attack Power by 600% for 50 turns.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Abyssal Manor`,
                    description: `Increase the party's Ultimate Skill Power by 30%.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `The Unnameable Form`,
                    description: `Increase Damage Output by 10%.\nOn Ultimate Skill, increase the party's Damage Output by 20% for 1 turn.\nWhen in Guard Stance, increase the party's Recovery Rate by 20% for 1 turn.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Waiting for You in Dreams`,
                    description: `Gain yourself "Preparation for Descent"\n\n"Preparation for Descent"\nOn Basic Attack, increase your Descent Value by 1 stack (max 10 stacks).\nOn Ultimate Skill, increase your Descent Value by 3 stacks (max 10 stacks).\nWhen your Descent Value is equal to 10 stacks, gain "Supreme One Descends."\n\n"Supreme One Descends"\nOn Basic Attack, the target gains 3 stacks of increase Damage Taken by 5% (max 9 stacks).\nOn Ultimate Skill, damage the target for 50% of your max HP.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage+`,
                    description: `Increase your damage output by 7.5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Complete Immunity`,
                    description: `Sleep Immunity\nParalysis Immunity\nSilence Immunity`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `星空帰還`,
                    description: `自分の330/376/422/468/514%の攻撃力でターゲットにダメージを与え、1、2、3番目の味方の受けるダメージを10/12.5/15/17.5/20%減少させる(2ターン)[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `星空帰還`,
                    description: `自分の330%の攻撃力でターゲットにダメージを与え、1、2、3番目の味方の受けるダメージを10%減少させる(2ターン)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `星空帰還`,
                    description: `自分の376%の攻撃力でターゲットにダメージを与え、1、2、3番目の味方の受けるダメージを12.5%減少させる(2ターン)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `星空帰還`,
                    description: `自分の422%の攻撃力でターゲットにダメージを与え、1、2、3番目の味方の受けるダメージを15%減少させる(2ターン)[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `星空帰還`,
                    description: `自分の468%の攻撃力でターゲットにダメージを与え、1、2、3番目の味方の受けるダメージを17.5%減少させる(2ターン)[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `星空帰還`,
                    description: `自分の514%の攻撃力でターゲットにダメージを与え、1、2、3番目の味方の受けるダメージを20%減少させる(2ターン)[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `卑猥な音`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `曲折の儀式`,
                    description: `自分の最大HPが50%増加する\n味方全体の攻撃力が100%増加する\n自分が必殺技攻撃時「自分の攻撃力の400%分ターゲットにダメージを与える」を誘発する\n自分が攻撃時「自分の最大HPの1%分自分以外の味方にダメージを与える」を誘発する\n自分がダメージを与えた時、与えたダメージの25%分自分のHPを回復する\n2、3番目の味方が《生け贄の儀》を獲得する\n\n《生け贄の儀》\n与えるダメージが300%減少する\n攻撃時「自分の基本攻撃力の125%分1番目の味方の攻撃力を増加させる(1ターン)」を誘発する\n必殺技攻撃時「ターゲットが闇属性から受けるダメージを14%増加させる(2ターン)」を誘発する\n1ターン目に「自分が《意識剥離》を獲得する」を誘発する\n\n《意識剥離》\n自分がアタッカーの時：\n行動時「1番目の味方が必殺技攻撃時『「自分の最大HPの100%分ターゲットにダメージを与え、さらに自分の攻撃力の150%分ターゲットにダメージを与える」を誘発する(50ターン)』を獲得し、与えるダメージが25%増加する(50ターン)」を誘発する(1ターン)\n自分がデバッファーの時：\n行動時、「1番目の味方が攻撃時『「ターゲットの受ける治療回復量を50%減少させる(2ターン)」を誘発する(50ターン)』を獲得し、必殺技攻撃時『「ターゲットの受けるダメージを45%増加させる(9ターン)」を誘発する(50ターン)』を獲得し、与えるダメージが25%増加する(50ターン)」を誘発する(1ターン)\n自分がガーディアン、ヒーラー、サポーターの時：\n自分の攻撃力が600%減少する(50ターン)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `深淵の御殿`,
                    description: `味方全体の必殺技ダメージを30%増加させる`
                },
                [SkillType.PASSIVE_2]: {
                    name: `名状しがたい身体`,
                    description: `与えるダメージが10%増加する\n必殺技攻撃時「味方全体の与えるダメージを20%増加させる(1ターン)」を誘発する\n防御時「味方全体が受ける治療回復量を20%増加させる(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `夢入り待ち`,
                    description: `自分が《降臨の準備》を獲得する\n\n《降臨の準備》\n通常攻撃時「自分の『降臨値(最大10スタック)』を1スタック増加させる」を誘発する\n必殺技攻撃時「自分の『降臨値(最大10スタック)』を3スタック増加させる」を誘発する\n自分の「降臨値」のスタック数が10スタックの時、スキル《最高神降臨》を発動する\n\n《最高神降臨》\n通常攻撃時「ターゲットが『受けるダメージが5%増加する(最大9スタック)』を3スタック獲得する」を誘発する\n必殺技攻撃時「自分の最大HPの50%分ターゲットにダメージを与える」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ+`,
                    description: `自分の与えるダメージを7.5%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `完全無効`,
                    description: `睡眠無効\n麻痺無効\n沈黙無効`
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