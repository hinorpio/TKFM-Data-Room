import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10206: SkillSet[] =  [
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
                    name: `莉可菈光線！`,
                    description: `以自身攻擊力20%使我方全體攻擊力增加(1回合)，使我方全體風屬性角色造成傷害增加17/19.8/22.6/25.5/28.3%(1回合)，且使我方全體風屬性攻擊者、妨礙者獲得「必殺時，追加『以自身攻擊力56.6/66/75.4/84.9/94.3%對目標造成傷害』(1回合)」，並使目標受到風屬性傷害增加0/0/22.6/25.5/28.3%(1回合)，再以自身攻擊力182.5/212.9/243.3/273.7/304%對目標造成傷害2次。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `莉可菈光線！`,
                    description: `以自身攻擊力20%使我方全體攻擊力增加(1回合)，使我方全體風屬性角色造成傷害增加17%(1回合)，且使我方全體風屬性攻擊者、妨礙者獲得「必殺時，追加『以自身攻擊力56.6%對目標造成傷害』(1回合)」，再以自身攻擊力182.5%對目標造成傷害2次。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `莉可菈光線！`,
                    description: `以自身攻擊力20%使我方全體攻擊力增加(1回合)，使我方全體風屬性角色造成傷害增加19.8%(1回合)，且使我方全體風屬性攻擊者、妨礙者獲得「必殺時，追加『以自身攻擊力66%對目標造成傷害』(1回合)」，再以自身攻擊力212.9%對目標造成傷害2次。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `莉可菈光線！`,
                    description: `以自身攻擊力20%使我方全體攻擊力增加(1回合)，使我方全體風屬性角色造成傷害增加22.6%(1回合)，且使我方全體風屬性攻擊者、妨礙者獲得「必殺時，追加『以自身攻擊力75.4%對目標造成傷害』(1回合)」，並使目標受到風屬性傷害增加22.6%(1回合)，再以自身攻擊力243.3%對目標造成傷害2次。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `莉可菈光線！`,
                    description: `以自身攻擊力20%使我方全體攻擊力增加(1回合)，使我方全體風屬性角色造成傷害增加25.5%(1回合)，且使我方全體風屬性攻擊者、妨礙者獲得「必殺時，追加『以自身攻擊力84.9%對目標造成傷害』(1回合)」，並使目標受到風屬性傷害增加25.5%(1回合)，再以自身攻擊力273.7%對目標造成傷害2次。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `莉可菈光線！`,
                    description: `以自身攻擊力20%使我方全體攻擊力增加(1回合)，使我方全體風屬性角色造成傷害增加28.3%(1回合)，且使我方全體風屬性攻擊者、妨礙者獲得「必殺時，追加『以自身攻擊力94.3%對目標造成傷害』(1回合)」，並使目標受到風屬性傷害增加28.3%(1回合)，再以自身攻擊力304%對目標造成傷害2次。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `莉可菈拳`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `最愛好和平的怪獸`,
                    description: `我方全體最大HP增加55%\n我方全體攻擊力增加51.5%\n自身獲得「當我方隊伍恰好為2種角色屬性時，開啟『每經過4回合時，觸發「《溫柔的自我》』」\n自身獲得「當我方隊伍攻擊者有2人以上時，開啟『每經過4回合時，觸發「《溫柔的自我》』」\n\n《溫柔的自我》\n使我方全體造成傷害增加7.75%(最多4層)、必殺技傷害增加12.9%(最多4層)、受到傷害減少3.75%(最多4層)\n使我方全體獲得「必殺時，追加『以自身攻擊力51.5%對目標造成傷害』(4回合)」(觸發1次後清除)\n使自身獲得「必殺、防禦時，觸發『使目標受到風屬性傷害增加7.75%(最多4層)、受到傷害增加5.15%(最多4層)』(4回合)(觸發1次後清除自身《溫柔的自我》所給予「必殺、防禦時觸發」效果)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `莉可菈肚子餓了`,
                    description: `攻擊時，觸發「使自身進入防禦狀態」\n防禦時，觸發「以自身最大HP10%給予我方全體護盾(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `誕生的意義`,
                    description: `每經過4回合時，觸發「使自身獲得《巨大化》」\n\n《巨大化》\n防禦時，觸發「《莉可菈會保護大家的！》(不可疊加)」(4回合)(觸發1次後清除)\n\n《莉可菈會保護大家的！》\n使自身獲得嘲諷(4回合)\n使自身獲得「防禦時，觸發『清除自身《莉可菈會保護大家的！》所給予「嘲諷」效果』(4回合)(觸發1次後清除)」\n使我方全體受到傷害減少10%(4回合)、防禦減傷效果增加10%(4回合)、受到護盾效果增加50%(4回合)\n以自身最大HP30%給予自身護盾(4回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `最後之獸的祝福`,
                    description: `必殺時，追加「使目標受到傷害增加18.8%(1回合)，並使我方全體獲得《風之祝福》效果」\n我方全體獲得「受到《風之祝福》效果時，觸發『使自身攻擊力增加9.45%(最多5層)、必殺技傷害增加9.45%(最多5層)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `吸血＋`,
                    description: `造成傷害時會以傷害值15%回復自身HP`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `莉可菈光线！`,
                    description: `以自身攻击力20%使我方全体攻击力增加(1回合)，使我方全体风属性角色造成伤害增加17/19.8/22.6/25.5/28.3%(1回合)，且使我方全体风属性攻击者、妨碍者获得「必杀时，追加『以自身攻击力56.6/66/75.4/84.9/94.3%对目标造成伤害』(1回合)」，并使目标受到风属性伤害增加0/0/22.6/25.5/28.3%(1回合)，再以自身攻击力182.5/212.9/243.3/273.7/304%对目标造成伤害2次。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `莉可菈光线！`,
                    description: `以自身攻击力20%使我方全体攻击力增加(1回合)，使我方全体风属性角色造成伤害增加17%(1回合)，且使我方全体风属性攻击者、妨碍者获得「必杀时，追加『以自身攻击力56.6%对目标造成伤害』(1回合)」，再以自身攻击力182.5%对目标造成伤害2次。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `莉可菈光线！`,
                    description: `以自身攻击力20%使我方全体攻击力增加(1回合)，使我方全体风属性角色造成伤害增加19.8%(1回合)，且使我方全体风属性攻击者、妨碍者获得「必杀时，追加『以自身攻击力66%对目标造成伤害』(1回合)」，再以自身攻击力212.9%对目标造成伤害2次。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `莉可菈光线！`,
                    description: `以自身攻击力20%使我方全体攻击力增加(1回合)，使我方全体风属性角色造成伤害增加22.6%(1回合)，且使我方全体风属性攻击者、妨碍者获得「必杀时，追加『以自身攻击力75.4%对目标造成伤害』(1回合)」，并使目标受到风属性伤害增加22.6%(1回合)，再以自身攻击力243.3%对目标造成伤害2次。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `莉可菈光线！`,
                    description: `以自身攻击力20%使我方全体攻击力增加(1回合)，使我方全体风属性角色造成伤害增加25.5%(1回合)，且使我方全体风属性攻击者、妨碍者获得「必杀时，追加『以自身攻击力84.9%对目标造成伤害』(1回合)」，并使目标受到风属性伤害增加25.5%(1回合)，再以自身攻击力273.7%对目标造成伤害2次。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `莉可菈光线！`,
                    description: `以自身攻击力20%使我方全体攻击力增加(1回合)，使我方全体风属性角色造成伤害增加28.3%(1回合)，且使我方全体风属性攻击者、妨碍者获得「必杀时，追加『以自身攻击力94.3%对目标造成伤害』(1回合)」，并使目标受到风属性伤害增加28.3%(1回合)，再以自身攻击力304%对目标造成伤害2次。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `莉可菈拳`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `最爱好和平的怪兽`,
                    description: `我方全体最大HP增加55%\n我方全体攻击力增加51.5%\n自身获得「当我方队伍恰好为2种角色属性时，开启『每经过4回合时，触发「《温柔的自我》』」\n自身获得「当我方队伍攻击者有2人以上时，开启『每经过4回合时，触发「《温柔的自我》』」\n\n《温柔的自我》\n使我方全体造成伤害增加7.75%(最多4层)、必杀技伤害增加12.9%(最多4层)、受到伤害减少3.75%(最多4层)\n使我方全体获得「必杀时，追加『以自身攻击力51.5%对目标造成伤害』(4回合)」(触发1次后清除)\n使自身获得「必杀、防禦时，触发『使目标受到风属性伤害增加7.75%(最多4层)、受到伤害增加5.15%(最多4层)』(4回合)(触发1次后清除自身《温柔的自我》所给予「必杀、防禦时触发」效果)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `莉可菈肚子饿了`,
                    description: `攻击时，触发「使自身进入防禦状态」\n防禦时，触发「以自身最大HP10%给予我方全体护盾(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `诞生的意义`,
                    description: `每经过4回合时，触发「使自身获得《巨大化》」\n\n《巨大化》\n防禦时，触发「《莉可菈会保护大家的！》(不可叠加)」(4回合)(触发1次后清除)\n\n《莉可菈会保护大家的！》\n使自身获得嘲讽(4回合)\n使自身获得「防禦时，触发『清除自身《莉可菈会保护大家的！》所给予「嘲讽」效果』(4回合)(触发1次后清除)」\n使我方全体受到伤害减少10%(4回合)、防禦减伤效果增加10%(4回合)、受到护盾效果增加50%(4回合)\n以自身最大HP30%给予自身护盾(4回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `最后之兽的祝福`,
                    description: `必杀时，追加「使目标受到伤害增加18.8%(1回合)，并使我方全体获得《风之祝福》效果」\n我方全体获得「受到《风之祝福》效果时，触发『使自身攻击力增加9.45%(最多5层)、必杀技伤害增加9.45%(最多5层)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `吸血＋`,
                    description: `造成伤害时会以伤害值15%回復自身HP`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Legora Beam!`,
                    description: `Increase the party's Attack Power for 20% of your Attack Power for 1 turn, increase the Wind allies' Attack Power by 17/19.8/22.6/25.5/28.3% for 1 turn, and allied Wind Attackers and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (56.6/66/75.4/84.9/94.3% Attack Power), increase the target's Damage Taken from Wind attacks by 0/0/22.6/25.5/28.3% for 1 turn, then damage the target 2 times (182.5/212.9/243.3/273.7/304% Attack Power). CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Legora Beam!`,
                    description: `Increase the party's Attack Power for 20% of your Attack Power for 1 turn, increase the Wind allies' Attack Power by 17% for 1 turn, and allied Wind Attackers and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (56.6% Attack Power), then damage the target 2 times (182.5% Attack Power). CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Legora Beam!`,
                    description: `Increase the party's Attack Power for 20% of your Attack Power for 1 turn, increase the Wind allies' Attack Power by 19.8% for 1 turn, and allied Wind Attackers and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (66% Attack Power), then damage the target 2 times (212.9% Attack Power). CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Legora Beam!`,
                    description: `Increase the party's Attack Power for 20% of your Attack Power for 1 turn, increase the Wind allies' Attack Power by 22.6% for 1 turn, and allied Wind Attackers and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (75.4% Attack Power), increase the target's Damage Taken from Wind attacks by 22.6% for 1 turn, then damage the target 2 times (243.3% Attack Power). CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Legora Beam!`,
                    description: `Increase the party's Attack Power for 20% of your Attack Power for 1 turn, increase the Wind allies' Attack Power by 25.5% for 1 turn, and allied Wind Attackers and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (84.9% Attack Power), increase the target's Damage Taken from Wind attacks by 25.5% for 1 turn, then damage the target 2 times (273.7% Attack Power). CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Legora Beam!`,
                    description: `Increase the party's Attack Power for 20% of your Attack Power for 1 turn, increase the Wind allies' Attack Power by 28.3% for 1 turn, and allied Wind Attackers and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (94.3% Attack Power), increase the target's Damage Taken from Wind attacks by 28.3% for 1 turn, then damage the target 2 times (304% Attack Power). CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Legora Punch`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Peaceful Monster`,
                    description: `Increase the party's max HP by 55%.\nIncrease the party's Attack Power by 51.5%.\nGain yourself the following effect: When there are exactly characters of 2 attributes in the party, activate: After every 4 turns, trigger "Tender Self".\nGain yourself the following effect: When there are 2 or more Attackers in the party, activate: After every 4 turns, trigger "Tender Self".\n \n"Tender Self"\nIncrease the party's Damage Output by 7.75% (max 4 stacks), Ultimate Skill Power by 12.9% (max 4 stacks), and decrease Damage Taken by 3.75% (max 4 stacks).\nThe party gains the following effect: On Ultimate Skill, deal additional damage to the target for 4 turns (51.5% Attack Power) (removes after triggering once).\nGain yourself the following effect: On Ultimate Skill, or when in Guard Stance, trigger the following effect: Increase the target's Damage Taken from Wind attacks by 7.75% (max 4 stacks) and Damage Taken by 5.15% for 4 turns (max 4 stacks) (removes the "trigger on Ultimate Skill or when in Guard Stance" effect granted by "Tender Self" after triggering 1 time).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Legora Hungry`,
                    description: `On Attack, trigger the following effect: Enter Guard Stance.\nWhen in Guard Stance, trigger the following effect: The party gains a Shield for 10% of your max HP for 1 turn.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Reason to Be`,
                    description: `After every 4 turns, trigger the following effect: gain yourself "Gigantify".\n \n"Gigantify"\nWhen in Guard Stance, trigger "Legora Protects All!" for 4 turns (Non-stackable) (removes after triggering once).\n \n"Legora Protects All!"\nGain yourself Taunt for 4 turns.\nGain yourself the following effect: When in Guard Stance, trigger the following effect: Remove your Taunt effect granted by "Legora Protects All!" for 4 turns (removes after triggering once).\nDecrease the party's Damage Taken by 10% for 4 turns, decrease the party's Damage Taken in Guard Stance by 10% for 4 turns, and increase the party's Shield effects by 50% for 4 turns.\nGain yourself a Shield for 30% of your max HP for 4 turns.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Primal Blessing`,
                    description: `On Ultimate Skill, increase the target's Damage Taken by 18.8% for 1 turn, then the party gains "Wind's Blessing".\n The party gains the following effect: When receiving "Wind's Blessing", trigger the following effect: Increase your Attack Power by 9.45% (max 5 stacks) and Ultimate Skill Power by 9.45% (max 5 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Bloodsucking+`,
                    description: `Recover HP for 15% of the damage dealt.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain yourself immunity to Sleep.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `リゴラビ──ム！`,
                    description: `自分の攻撃力の20%分味方全体の攻撃力を増加させ(1ターン)、風属性キャラの与えるダメージを17/19.8/22.6/25.5/28.3%増加させ(1ターン)、味方全体の風属性アタッカー、デバッファーが「必殺技攻撃時『自分の56.6/66/75.4/84.9/94.3%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、ターゲットが受ける風属性ダメージを0/0/22.6/25.5/28.3%増加させ(1ターン)、自分の182.5/212.9/243.3/273.7/304%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `リゴラビ──ム！`,
                    description: `自分の攻撃力の20%分味方全体の攻撃力を増加させ(1ターン)、風属性キャラの与えるダメージを17%増加させ(1ターン)、味方全体の風属性アタッカー、デバッファーが「必殺技攻撃時『自分の56.6%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、自分の182.5%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `リゴラビ──ム！`,
                    description: `自分の攻撃力の20%分味方全体の攻撃力を増加させ(1ターン)、風属性キャラの与えるダメージを19.8%増加させ(1ターン)、味方全体の風属性アタッカー、デバッファーが「必殺技攻撃時『自分の66%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、自分の212.9%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `リゴラビ──ム！`,
                    description: `自分の攻撃力の20%分味方全体の攻撃力を増加させ(1ターン)、風属性キャラの与えるダメージを22.6%増加させ(1ターン)、味方全体の風属性アタッカー、デバッファーが「必殺技攻撃時『自分の75.4%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、ターゲットが受ける風属性ダメージを22.6%増加させ(1ターン)、自分の243.3%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `リゴラビ──ム！`,
                    description: `自分の攻撃力の20%分味方全体の攻撃力を増加させ(1ターン)、風属性キャラの与えるダメージを25.5%増加させ(1ターン)、味方全体の風属性アタッカー、デバッファーが「必殺技攻撃時『自分の84.9%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、ターゲットが受ける風属性ダメージを25.5%増加させ(1ターン)、自分の273.7%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `リゴラビ──ム！`,
                    description: `自分の攻撃力の20%分味方全体の攻撃力を増加させ(1ターン)、風属性キャラの与えるダメージを28.3%増加させ(1ターン)、味方全体の風属性アタッカー、デバッファーが「必殺技攻撃時『自分の94.3%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、ターゲットが受ける風属性ダメージを28.3%増加させ(1ターン)、自分の304%の攻撃力でターゲットに2回ダメージを与える[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `リゴラパンチ`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `最も平和を愛する怪獣`,
                    description: `味方全体の最大HPが55%増加する\n味方全体の攻撃力が51.5%増加する\n自分が「味方のチーム内にちょうど2種類の属性キャラがいる時『4ターン毎に《やさしい自我》を誘発する』を発動する」を獲得する\n自分が「味方のチーム内に2人以上のアタッカーがいる時『4ターン毎に《やさしい自我》を誘発する』を発動する」を獲得する\n\n《やさしい自我》\n味方全体の与えるダメージを7.75%増加させ(最高4スタック)、必殺技ダメージを12.9%増加させ(最高4スタック)、受けるダメージを3.75%減少させる(最高4スタック)\n味方全体が「必殺技攻撃時『自分の51.5%の攻撃力でターゲットにダメージを与える』を追加する(4ターン)」を獲得する(誘発1回後に解除)\n自分が「必殺技、防御時『ターゲットが受ける風属性ダメージを7.75%増加させ(最高4スタック)、受けるダメージを5.15%増加させる(最高4スタック)』を誘発する(誘発1回後に自分の《やさしい自我》が与える『必殺技、防御時』の効果を消す)」を獲得する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `リゴラおなかすいた`,
                    description: `攻撃時「自分を防御状態にする」を誘発する\n防御時「自分の最大HPの10%分味方全体に盾を張る(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `生まれた意味`,
                    description: `4ターン毎に「自分が《巨大化》を獲得する」を誘発する\n\n《巨大化》\n防御時「《リゴラがみんなを守る！》(スタック不可)」を誘発する(4ターン)(誘発1回後に解除)\n\n《リゴラがみんなを守る！》\n自分が挑発を獲得する(4ターン)\n自分が「防御時『自分の《リゴラがみんなを守る！》が与える『挑発』効果を消す』を誘発する(4ターン)(誘発1回後に解除)」を獲得する\n味方全体の受けるダメージを10%減少させ(4ターン)、防御時のダメージ軽減効果を10%増加させ(4ターン)、受ける盾の効果を50%増加させる(4ターン)\n自分の最大HPの30%分自分に盾を張る(4ターン)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `最後の獣の祝福`,
                    description: `必殺技攻撃時「ターゲットの受けるダメージを18.8%増加させ(1ターン)、味方全体が《風の祝福》を獲得する」を追加する\n味方全体が「《風の祝福》の効果を受けた時『自分の攻撃力を9.45%増加させ(最高5スタック)、必殺技ダメージを9.45%増加させる(最高5スタック)』を誘発する」を獲得する`
                },
                [SkillType.GENERAL_1]: {
                    name: `吸血+`,
                    description: `ダメージを与えた時、与えたダメージの15%分自分のHPを回復する`
                },
                [SkillType.GENERAL_2]: {
                    name: `睡眠無効`,
                    description: `自分を睡眠無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `리고라 빔!`,
                    description: `자신의 공격 데미지의 20%만큼 아군 전체의 공격 데미지 증가(1턴), 아군 풍속성 캐릭터가 가하는 데미지 17/19.8/22.6/25.5/28.3% 증가(1턴), 아군 풍속성 딜러, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 56.6/66/75.4/84.9/94.3%만큼 타깃에게 데미지』 추가(1턴)」 획득, 타깃이 받는 풍속성 데미지 0/0/22.6/25.5/28.3% 증가(1턴), 다시 자신의 공격 데미지의 182.5/212.9/243.3/273.7/304%만큼 타깃에게 2회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `리고라 빔!`,
                    description: `자신의 공격 데미지의 20%만큼 아군 전체의 공격 데미지 증가(1턴), 아군 풍속성 캐릭터가 가하는 데미지 17% 증가(1턴), 아군 풍속성 딜러, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 56.6%만큼 타깃에게 데미지』 추가(1턴)」 획득, 다시 자신의 공격 데미지의 182.5%만큼 타깃에게 2회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `리고라 빔!`,
                    description: `자신의 공격 데미지의 20%만큼 아군 전체의 공격 데미지 증가(1턴), 아군 풍속성 캐릭터가 가하는 데미지 19.8% 증가(1턴), 아군 풍속성 딜러, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 66%만큼 타깃에게 데미지』 추가(1턴)」 획득, 다시 자신의 공격 데미지의 212.9%만큼 타깃에게 2회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `리고라 빔!`,
                    description: `자신의 공격 데미지의 20%만큼 아군 전체의 공격 데미지 증가(1턴), 아군 풍속성 캐릭터가 가하는 데미지 22.6% 증가(1턴), 아군 풍속성 딜러, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 75.4%만큼 타깃에게 데미지』 추가(1턴)」 획득, 타깃이 받는 풍속성 데미지 22.6% 증가(1턴), 다시 자신의 공격 데미지의 243.3%만큼 타깃에게 2회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `리고라 빔!`,
                    description: `자신의 공격 데미지의 20%만큼 아군 전체의 공격 데미지 증가(1턴), 아군 풍속성 캐릭터가 가하는 데미지 25.5% 증가(1턴), 아군 풍속성 딜러, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 84.9%만큼 타깃에게 데미지』 추가(1턴)」 획득, 타깃이 받는 풍속성 데미지 25.5% 증가(1턴), 다시 자신의 공격 데미지의 273.7%만큼 타깃에게 2회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `리고라 빔!`,
                    description: `자신의 공격 데미지의 20%만큼 아군 전체의 공격 데미지 증가(1턴), 아군 풍속성 캐릭터가 가하는 데미지 28.3% 증가(1턴), 아군 풍속성 딜러, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 94.3%만큼 타깃에게 데미지』 추가(1턴)」 획득, 타깃이 받는 풍속성 데미지 28.3% 증가(1턴), 다시 자신의 공격 데미지의 304%만큼 타깃에게 2회 데미지 [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `리고라 펀치`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `평화를 사랑하는 괴수`,
                    description: `아군 전체의 최대 HP 55% 증가\n아군 전체의 공격 데미지 51.5% 증가\n자신은 「팀이 2종 속성 캐릭터로 편성될 시, 『4턴마다  「《따뜻한 자아》 트리거』 활성화」 획득\n자신은 「팀에 딜러가 2명 이상 있을 시 『4턴마다 「《따뜻한 자아》」 트리거』 활성화」 획득\n\n《따뜻한 자아》\n아군 전체의 가하는 데미지 7.75% 증가(최대 4중첩), 궁극기 데미지 12.9% 증가(최대 4중첩), 받는 데미지 3.75% 감소(최대 4중첩)\n아군 전체는 「궁극기 발동 시 『자신의 공격 데미지의 51.5%만큼 타깃에게 데미지』 추가(4턴)」 획득(1회 트리거 후 제거)\n자신은 「궁극기 발동 시, 방어 시 『타깃이 받는 풍속성 데미지 7.75% 증가(최대 4중첩), 받는 데미지 5.15% 증가(최대 4중첩)』 트리거(4턴)」(1회 트리거 후 자신에게 《따뜻한 자아》가 부여한 「궁극기 발동 시, 방어 시 트리거」효과 제거)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `리고라 배고파`,
                    description: `공격 시 「자신은 방어 상태 진입」 트리거\n방어 시 「자신의 최대 HP 10%만큼 아군 전체의 아머 강화(1턴)」 트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `탄생의 의미`,
                    description: `4턴마다 「자신은 《거대화》 획득」 트리거\n\n《거대화》\n방어 시 「《리고라는 모두를 지킬 거야!》(중첩 불가)」 트리거(4턴)(1회 트리거 후 제거)\n\n《리고라는 모두를 지킬 거야!》\n자신은 도발 획득(4턴)\n자신은 「방어 시 『자신에게  《리고라는 모두를 지킬 거야!》가 부여한 모든 「도발」 효과 제거』 트리거(4턴)(1회 트리거 후 제거)」 획득\n아군 전체가 받는 데미지 10% 감소(4턴), 방어 상태에서 받는 데미지 감소 효과 10% 증가(4턴), 받는 아머 강화 효과 50% 증가(4턴)\n자신의 최대 HP 30%만큼 자신의 아머 강화(4턴)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `마지막 괴수의 축복`,
                    description: `궁극기 발동 시 「타깃이 받는 데미지 18.8% 증가(1턴), 아군 전체는 《바람의 축복》 효과 획득」 추가\n아군 전체는 「《바람의 축복》 효과를 받을 시 『자신의 공격 데미지 9.45% 증가(최대 5중첩), 궁극기 데미지 9.45% 증가(최대 5중첩)』 트리거」 획득`
                },
                [SkillType.GENERAL_1]: {
                    name: `흡혈＋`,
                    description: `데미지를 가할 시, 가한 데미지의 15%만큼 자신의 HP 회복`
                },
                [SkillType.GENERAL_2]: {
                    name: `수면 면역`,
                    description: `자신에게 수면 면역 효과`
                }
            }
        }
    },
]
