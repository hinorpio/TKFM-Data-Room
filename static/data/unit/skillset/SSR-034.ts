import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10054: SkillSet[] =  [
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
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP30/40/40/50/50%，獲得嘲諷效果(2回合)並變為防禦狀態，再使我方全體受到傷害減少0/0/0/5/10%(1回合)，CD: 4 [3絆 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP30%，獲得嘲諷效果(2回合)並變為防禦狀態，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP40%，獲得嘲諷效果(2回合)並變為防禦狀態，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP40%，獲得嘲諷效果(2回合)並變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP50%，獲得嘲諷效果(2回合)並變為防禦狀態，再使我方全體受到傷害減少5%(1回合)CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `請緊握扶手，站穩踏階`,
                    description: `回復自身最大HP50%，獲得嘲諷效果(2回合)並變為防禦狀態，再使我方全體受到傷害減少10%(1回合)CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `花鹿在奔跑`,
                    description: `以自身攻擊力50%對目標造成傷害，再使自身變為防禦狀態`
                },
                [SkillType.LEADER]: {
                    name: `聖夜的守護者`,
                    description: `必殺時，自身觸發「受到傷害減少20%(1回合)」\n第一回合時，觸發「使我方全體每回合以攻擊力70%進行治療(50回合)」\n第一回合時，觸發「使我方站位1、2、5角色獲得『《奇蹟使者》』」\n\n《奇蹟使者》\n「攻擊力增加40%(最多1層)」、「必殺技傷害增加20%(最多1層)」、「普攻傷害增加40%(最多1層)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `聖誕精神`,
                    description: `必殺時，觸發「《聖誕極道》」\n\n《聖誕極道》\n使我方站位1、2角色獲得「受到控場機率減少75%(1回合)」、「攻擊力增加30%(2回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `聲控雪撬`,
                    description: `必殺時，觸發「使我方站位2和站位5角色獲得『受到傷害減少20%(1回合)』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `馴鹿祝福`,
                    description: `HP增加10%\n被攻擊時，觸發「以自身基礎攻擊力100%對我方全體進行治療」`
                },
                [SkillType.GENERAL_1]: {
                    name: `受到傷害減少 (6潛)`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP30/40/40/50/50%，获得嘲讽效果(2回合)并变为防御状态，再使我方全体受到伤害减少0/0/0/5/10%(1回合)，CD: 4 [3绊 CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP30%，获得嘲讽效果(2回合)并变为防御状态，CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP40%，获得嘲讽效果(2回合)并变为防御状态，CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP40%，获得嘲讽效果(2回合)并变为防御状态，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP50%，获得嘲讽效果(2回合)并变为防御状态，再使我方全体受到伤害减少5%(1回合)CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `请紧握扶手，站稳踏阶`,
                    description: `回复自身最大HP50%，获得嘲讽效果(2回合)并变为防御状态，再使我方全体受到伤害减少10%(1回合)CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `花鹿在奔跑`,
                    description: `以自身攻击力50%对目标造成伤害，再使自身变为防御状态`
                },
                [SkillType.LEADER]: {
                    name: `圣夜的守护者`,
                    description: `必杀时，自身触发「受到伤害减少20%(1回合)」\n第一回合时，触发「使我方全体每回合以攻击力70%进行治疗(50回合)」\n第一回合时，触发「使我方站位1丶2丶5角色获得『《奇迹使者》』」\n\n《奇迹使者》\n「攻击力增加40%(最多1层)」丶「必杀技伤害增加20%(最多1层)」丶「普攻伤害增加40%(最多1层)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `圣诞精神`,
                    description: `必杀时，触发「《圣诞极道》」\n\n《圣诞极道》\n使我方站位1丶2角色获得「受到控场机率减少75%(1回合)」丶「攻击力增加30%(2回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `声控雪撬`,
                    description: `必杀时，触发「使我方站位2和站位5角色获得『受到伤害减少20%(1回合)』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `驯鹿祝福`,
                    description: `HP增加10%\n被攻击时，触发「以自身基础攻击力100%对我方全体进行治疗」`
                },
                [SkillType.GENERAL_1]: {
                    name: `受到伤害减少 (6潜)`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Steady Steps`,
                    description: `Heal a maximum of 30/40/40/50/50% of HP. Gain taunt for 2 turns and enter Guard Stance. Reduce damage dealt to your party by 0/0/0/5/10% for 1 turn (CD:4) [Bond 3+: (CD:3)]`
                },
                [SkillType.SKILL_1]: {
                    name: `Steady Steps`,
                    description: `Heal a maximum of 30% of HP. Gain taunt for 2 turns and enter Guard Stance. (CD:4)`
                },
                [SkillType.SKILL_2]: {
                    name: `Steady Steps`,
                    description: `Heal a maximum of 40% of HP. Gain taunt for 2 turns and enter Guard Stance. (CD:4)`
                },
                [SkillType.SKILL_3]: {
                    name: `Steady Steps`,
                    description: `Heal a maximum of 40% of HP. Gain taunt for 2 turns and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_4]: {
                    name: `Steady Steps`,
                    description: `Heal a maximum of 50% of HP. Gain taunt for 2 turns and enter Guard Stance. Reduce damage dealt to your party by 5% for 1 turn (CD:3)`
                },
                [SkillType.SKILL_5]: {
                    name: `Steady Steps`,
                    description: `Heal a maximum of 50% of HP. Gain taunt for 2 turns and enter Guard Stance. Reduce damage dealt to your party by 10% for 1 turn (CD:3)`
                },
                [SkillType.ATTACK]: {
                    name: `Flower Deer Stampede`,
                    description: `Damage target (50% Attack Power) and enter Guard Stance`
                },
                [SkillType.LEADER]: {
                    name: `Holy Night Protector`,
                    description: `On Ultimate Skill, decrease your Damage Taken by 20% for 1 turn\nGive your party the following effect for 50 turns: "Every turn, heal yourself (70% Attack Power)."\nOn the first turn, your 1st, 2nd, and 5th-position allies gain "Miracle Messenger".\n\nMiracle Messenger:\nIncrease your Attack Power by 40% (Max 1 Stack).\nIncrease your Ultimate Skill Damage by 20% (Max 1 Stack).\n\nIncrease your Basic Attack Damage by 40% (Max 1 Stack).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Christmas Spirit`,
                    description: `On Ultimate Skill, trigger "Christmas Yakuza".\n\nChristmas Yakuza:\nDecrease the chance of your 1st and 2nd-position allies being inflicted with Status Effects by 75% for 1 turn.\nIncrease your 1st and 2nd-position allies' Attack Power by 30% for 2 turns.\n\nStatus Effects: Paralysis, Sleep, Silence.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Voice-Controlled Sled`,
                    description: `On Ultimate Skill, decrease the 1st and 2nd-position ally's Damage Taken by 20% for 1 turn.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Reindeer's Blessing`,
                    description: `Increase your max HP by 10%\nWhen Attacked, heal the party by 100% of your Base Attack Power.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Protect (Self)`,
                    description: `Take 5% less damage`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity (Self)`,
                    description: `Gain immunity to Silence`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `手すりにおつかまりください`,
                    description: `自分のHPを30/40/40/50/50%回復して、挑発効果(2ターン)を獲得して防御状態になり、味方全体の受けるダメージ0/0/0/5/10%減少(1ターン)[CD:4] [Lv3+: CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `手すりにおつかまりください`,
                    description: `自分のHPを30%回復して、挑発効果(2ターン)を獲得して防御状態になり[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `手すりにおつかまりください`,
                    description: `自分のHPを40%回復して、挑発効果(2ターン)を獲得して防御状態になり[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `手すりにおつかまりください`,
                    description: `自分のHPを40%回復して、挑発効果(2ターン)を獲得して防御状態になり[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `手すりにおつかまりください`,
                    description: `自分のHPを50%回復して、挑発効果(2ターン)を獲得して防御状態になり、味方全体の受けるダメージ5%減少(1ターン)[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `手すりにおつかまりください`,
                    description: `自分のHPを50%回復して、挑発効果(2ターン)を獲得して防御状態になり、味方全体の受けるダメージ10%減少(1ターン)[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `走れトナカイ`,
                    description: `50%の攻撃力でターゲットにダメージを与え、自分が防御状態になる`
                },
                [SkillType.LEADER]: {
                    name: `聖夜の守護者`,
                    description: `必殺技攻撃時、自分が効果「受けるダメージを20%減少させる(1ターン)」を誘発する\n最初のターン開始時、効果「毎ターン攻撃力の70%分味方全体に治療を行う(50ターン)」を誘発する\n最初のターン開始時、効果「味方の1、2、5番目のメンバーは《奇跡の使者》の効果を獲得する」を誘発する\n\n《奇跡の使者》\n「攻撃力を40%増加させる(最高1スタック)」「必殺技ダメージを20%増加させる(最高1スタック)」「通常攻撃ダメージを40%増加させる(最高1スタック)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `クリスマス精神`,
                    description: `必殺技攻撃時、効果《クリスマス極道》を誘発する\n\n《クリスマス極道》\n味方の1、2番目のメンバーが効果「状態異常を受ける確率を75%減少させる(1ターン)」、「攻撃力が30%増加させる(2ターン)」を得る`
                },
                [SkillType.PASSIVE_2]: {
                    name: `音声認識雪そり`,
                    description: `必殺技攻撃時、効果「味方の2、5番目のメンバーが効果『受けるダメージを20%減少させる(1ターン)』を得る」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `トナカイの祝福`,
                    description: `HPを10%増加させる\n攻撃を受けた時、効果「自分の基礎攻撃力の100%分味方全体に治療を行う」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `受けるダメージを減少`,
                    description: `自分の受けるダメージを5%減少させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
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