import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10138: SkillSet[] =  [
    {
        version: 2,
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
                    name: `魔王城party time`,
                    description: `使自身獲得1/1/2/2/3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30/40/40/50/50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60/70/80/90/100%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `魔王城party time`,
                    description: `使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `魔王城party time`,
                    description: `使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力70%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `魔王城party time`,
                    description: `使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力80%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `魔王城party time`,
                    description: `使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力90%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `魔王城party time`,
                    description: `使自身獲得3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力100%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `派對邀請函`,
                    description: `以自身攻擊力50%每回合對我方全體進行治療(3回合)`
                },
                [SkillType.LEADER]: {
                    name: `睡衣派對要開始囉～`,
                    description: `我方全體最大HP增加30%\n我方全體攻擊力增加50%\n自身必殺時，觸發「使我方站位5獲得必殺技傷害增加30%(1回合)」\n自身必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加7.5%(1回合)」\n自身必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加7.5%(1回合)」\n使我方全體輔助者獲得「必殺時，觸發『以自身攻擊力10%使我方站位5攻擊力增加(1回合)」\n使我方全體妨礙者獲得「必殺時，觸發『使我方站位5獲得《派對焦點》(1回合)』」\n使我方最大HP最高者獲得「防禦時，觸發『以自身最大HP30%給予我方最大HP最低者護盾(1回合)』」\n \n《派對焦點》\n必殺時，追加「以自身攻擊力50%對目標造成傷害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `羞澀的戀愛話題`,
                    description: `必殺時，觸發「以自身攻擊力100%對我方全體進行治療，再以自身攻擊力50%每回合對我方全體進行治療(3回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `刺激的派對遊戲`,
                    description: `使我方全體輔助者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對主持人》(最多4層)』(觸發1次後清除)」\n使我方全體妨礙者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對參加者》(最多4層)』(觸發1次後清除)」\n必殺時，觸發「使自身不受《派對主持人》、《派對參加者》層數變動效果影響(50回合)」(觸發1次後解除)\n必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加8.75%(1回合)」\n必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加8.75%(1回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `臨時枕頭堡壘！`,
                    description: `防禦時，觸發「使我方最大HP最低者受到傷害減少20%(1回合)」\n防禦時，觸發「以自身攻擊力50%對我方全體進行治療」`
                },
                [SkillType.GENERAL_1]: {
                    name: `持續治療+`,
                    description: `使自身造成持續型治療增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `魔王城party time`,
                    description: `使自身获得1/1/2/2/3层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加30/40/40/50/50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力60/70/80/90/100%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `魔王城party time`,
                    description: `使自身获得1层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加30%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力60%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `魔王城party time`,
                    description: `使自身获得1层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加40%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力70%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `魔王城party time`,
                    description: `使自身获得2层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加40%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力80%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `魔王城party time`,
                    description: `使自身获得2层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力90%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `魔王城party time`,
                    description: `使自身获得3层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力100%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `派对邀请函`,
                    description: `以自身攻击力50%每回合对我方全体进行治疗(3回合)`
                },
                [SkillType.LEADER]: {
                    name: `睡衣派对要开始罗～`,
                    description: `我方全体最大HP增加30%\n我方全体攻击力增加50%\n自身必杀时，触发「使我方站位5获得必杀技伤害增加30%(1回合)」\n自身必杀时，根据自身《派对主持人》的层数，触发「使我方站位5造成伤害增加7.5%(1回合)」\n自身必杀时，根据自身《派对参加者》的层数，触发「使目标受到伤害增加7.5%(1回合)」\n使我方全体辅助者获得「必杀时，触发『以自身攻击力10%使我方站位5攻击力增加(1回合)」\n使我方全体妨碍者获得「必杀时，触发『使我方站位5获得《派对焦点》(1回合)』」\n使我方最大HP最高者获得「防御时，触发『以自身最大HP30%给予我方最大HP最低者护盾(1回合)』」\n \n《派对焦点》\n必杀时，追加「以自身攻击力50%对目标造成伤害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `羞涩的恋爱话题`,
                    description: `必杀时，触发「以自身攻击力100%对我方全体进行治疗，再以自身攻击力50%每回合对我方全体进行治疗(3回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `刺激的派对游戏`,
                    description: `使我方全体辅助者获得「行动时，触发『使我方『迷情薄纱 露露』获得1层《派对主持人》(最多4层)』(触发1次後清除)」\n使我方全体妨碍者获得「行动时，触发『使我方『迷情薄纱 露露』获得1层《派对参加者》(最多4层)』(触发1次後清除)」\n必杀时，触发「使自身不受《派对主持人》丶《派对参加者》层数变动效果影响(50回合)」(触发1次後解除)\n必杀时，根据自身《派对主持人》的层数，触发「使我方站位5造成伤害增加8.75%(1回合)」\n必杀时，根据自身《派对参加者》的层数，触发「使目标受到伤害增加8.75%(1回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `临时枕头堡垒！`,
                    description: `防御时，触发「使我方最大HP最低者受到伤害减少20%(1回合)」\n防御时，触发「以自身攻击力50%对我方全体进行治疗」`
                },
                [SkillType.GENERAL_1]: {
                    name: `持续治疗+`,
                    description: `使自身造成持续型治疗增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1/1/2/2/3 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 30/40/40/50/50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (60/70/80/90/100% Attack Power). CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 30% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (60% Attack Power). CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 40% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (70% Attack Power). CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 2 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 40% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (80% Attack Power). CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 2 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (90% Attack Power). CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 3 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (100% Attack Power). CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `Party Invitation`,
                    description: `Heal the party for 50% of your Attack Power every turn for 3 turns.`
                },
                [SkillType.LEADER]: {
                    name: `Pajama Party Starting~`,
                    description: `Increase the party's max HP by 30%.\nIncrease the party's Attack Power by 50%.\nOn Ultimate Skill, increase the 5th position ally's Ultimate Skill Power by 30% for 1 turn.\nOn Ultimate Skill, increase the 5th position ally's Damage Output by 7.5% for 1 turn based on your "Party Host" stacks.\nOn Ultimate Skill, increase the target's Damage Taken by 7.5% for 1 turn based on your "Party Attendee" stacks.\nAll allied Supporters gain the following effect: On Ultimate Skill, increase the 5th position ally's Attack Power for 10% of your Attack Power for 1 turn.\nAll allied Obstructors gain the following effect: On Ultimate Skill, gain 5th position ally "Party Focus" for 1 turn.\nThe ally with the highest max HP gains the following effect: When in Guard Stance, grant the ally with the lowest max HP a Shield for 30% of your max HP for 1 turn.\n\n"Party Focus"\nOn Ultimate Skill, damage the target (50% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Tender Topics of Love`,
                    description: `On Ultimate Skill, heal the party for 100% of your Attack Power, then heal the party for 50% of your Attack Power every turn for 3 turns.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Exciting Party Game`,
                    description: `All allied Supporters gain the following effect: When taking action, the allied Lingerie Lolita Lulu gains 1 stack of "Party Host" (max 4 stacks) (removes after triggering once).\nAll allied Obstructors gain the following effect: When taking action, the allied Lingerie Lolita Lulu gains 1 stack of "Party Attendee" (max 4 stacks) (removes after triggering once).\nOn Ultimate Skill, immune to effects of "Party Host" and "Party Attendee" stack changes for 50 turns (removes after triggering once).\nOn Ultimate Skill, increase the 5th position ally's Damage Output by 8.75% for 1 turn based on your "Party Host" stacks.\nOn Ultimate Skill, increase the target's Damage Taken by 8.75% for 1 turn based on your "Party Attendee" stacks.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Temporary Pillow Fort!`,
                    description: `When in Guard Stance, decrease the Damage Taken of the ally with the lowest max HP by 20% for 1 turn.\nWhen in Guard Stance, heal the party for 50% of your Attack Power.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Healing-over-time +`,
                    description: `Increase your Heal effect by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain immunity to Silence.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `魔王城party time`,
                    description: `自分が1/1/2/2/3スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが30/40/40/50/50%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の60/70/80/90/100%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `魔王城party time`,
                    description: `自分が1スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが30%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の60%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `魔王城party time`,
                    description: `自分が1スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが40%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の70%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `魔王城party time`,
                    description: `自分が2スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが40%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の80%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `魔王城party time`,
                    description: `自分が2スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが50%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の90%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `魔王城party time`,
                    description: `自分が3スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが50%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の100%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `パーティーの招待状`,
                    description: `毎ターン自分の攻撃力の50%分、味方全体に治療を行う(3ターン)`
                },
                [SkillType.LEADER]: {
                    name: `パジャマパーティー始まるよ～！`,
                    description: `味方全体の最大HPが30%増加する\n味方全体の攻撃力が50%増加する\n自身の必殺技攻撃時「味方の5番目のメンバーの必殺技ダメージを30%増加させる(1ターン)」を誘発する\n自身の必殺技攻撃時、自分の《パーティーの司会者》のスタック数に応じて「味方の5番目のメンバーの与えるダメージを7.5%増加させる(1ターン)」を誘発する\n自身の必殺技攻撃時、自分の《パーティーの参加者》のスタック数に応じて「ターゲットの受けるダメージを7.5%増加させる(1ターン)」を誘発する\n味方全体のサポーターが「必殺技攻撃時『自分の攻撃力の10%分、味方の5番目のメンバーの攻撃力を増加させる(1ターン)』を誘発する」を獲得する\n味方全体のデバッファーが「必殺技攻撃時『味方の5番目のメンバーが《パーティーの主役》を獲得する(1ターン)』を誘発する」を獲得する\n最大HPが最も高い味方が「防御時『自分の最大HPの30%分、最大HPが最も低い味方に盾を与える(1ターン)』を誘発する」を獲得する\n\n《パーティーの主役》\n必殺技攻撃時「自身の50%の攻撃力でターゲットにダメージを与える」を追加する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `恥ずかしい恋バナ`,
                    description: `必殺技攻撃時「自分の攻撃力の100%分味方全体に治療を行い、さらに毎ターン自分の攻撃力の50%分味方全体に治療を行う(3ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `刺激的なパーティーゲーム`,
                    description: `味方全体のサポーターが「行動時『味方の『溺愛のベール ルル』が1スタックの《パーティーの司会者》を獲得する(最大4スタック)』を誘発する(誘発1回後に解除)」を獲得する\n味方全体のデバッファーが「行動時『味方の『溺愛のベール ルル』が1スタックの《パーティーの参加者》を獲得する(最大4スタック)』を誘発する(誘発1回後に解除)」を獲得する\n必殺技攻撃時「自分が《パーティーの司会者》や《パーティーの参加者》のスタック数の変動の影響を受けない(50ターン)」を誘発する(誘発1回後に解除)\n必殺技攻撃時、自分の《パーティーの司会者》のスタック数に応じて 「味方の5番目のメンバーが与えるダメージを8.75%増加させる(1ターン)」を誘発する\n必殺技攻撃時、自分の《パーティーの参加者》のスタック数に応じて 「ターゲットの受けるダメージを8.75%増加させる(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `一時的な枕の砦`,
                    description: `防御時「最大HPが一番低い味方メンバーが受けるダメージを20%減少させる(1ターン)」を誘発する\n防御時「自分の攻撃力の50%分、味方全体に治療を行う」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `継続治療+`,
                    description: `自分が与える治癒量を10%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `마왕성 party time`,
                    description: `자신은 1/1/2/2/3중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 30/40/40/50/50% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 60/70/80/90/100%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `마왕성 party time`,
                    description: `자신은 1중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 30% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 60%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.SKILL_2]: {
                    name: `마왕성 party time`,
                    description: `자신은 1중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 40% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 70%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.SKILL_3]: {
                    name: `마왕성 party time`,
                    description: `자신은 2중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 40% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 80%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.SKILL_4]: {
                    name: `마왕성 party time`,
                    description: `자신은 2중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 50% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 90%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.SKILL_5]: {
                    name: `마왕성 party time`,
                    description: `자신은 3중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 50% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 100%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.ATTACK]: {
                    name: `파티 초청장`,
                    description: `자신의 공격 데미지의 50%만큼 매턴 아군 전체를 치유(3턴)`
                },
                [SkillType.LEADER]: {
                    name: `파자마 파티 스타트~`,
                    description: `아군 전체의 최대 HP 30% 증가\n아군 전체의 공격 데미지 50% 증가\n자신이 궁극기 발동 시, 「5번 자리 아군은 궁극기 데미지 30% 증가 획득(1턴)」발동\n자신이 궁극기 발동 시, 자신의 《파티 사회자》 중첩 수에 따라 「5번 자리 아군이 가하는 데미지 7.5% 증가(1턴)」발동\n자신이 궁극기 발동 시, 자신의 《파티 참가자》 중첩 수에 따라 「타깃이 받는 데미지 7.5% 증가(1턴)」발동\n아군 서포터는 「궁극기 발동 시 『자신의 공격 데미지의 10%만큼 5번 자리 아군의 공격 데미지 증가(1턴)』발동」획득\n아군 디스럽터는 「궁극기 발동 시 『5번 자리 아군은 《파티 주인공》(1턴)획득』 발동」획득\n최대 HP가 가장 높은 아군은 「방어 시 『자신의 최대 HP 30%만큼 최대 HP가 가장 낮은 아군에게 아머 강화 부여(1턴)』발동」획득\n\n《파티 주인공》\n궁극기 발동 시 「자신의 공격 데미지의 50%만큼 타깃에게 데미지」추가`
                },
                [SkillType.PASSIVE_1]: {
                    name: `수줍은 연애 이야기`,
                    description: `궁극기 발동 시 「자신의 공격 데미지의 100%만큼 아군 전체를 치유하고 자신의 공격 데미지의 50%만큼 매턴 아군 전체를 치유(3턴)」발동`
                },
                [SkillType.PASSIVE_2]: {
                    name: `스릴 넘치는 파티 게임`,
                    description: `아군 서포터는 「행동 시 『아군 『익애의 베일 루루』가 1중첩의 《파티 사회자》획득(최대 4중첩)』(1회 발동 후 제거)」획득\n아군 디스럽터는 「행동 시 『아군 『익애의 베일 루루』가 1중첩의 《파티 참가자》 획득(최대 4중첩)』(1회 발동 후 제거)」획득\n궁극기 발동 시 「자신은 《파티 사회자》, 《파티 참가자》중첩 수 변동 효과의 영향을 받지 않음(50턴)」발동(1회 발동 후 제거)\n궁극기 발동 시 자신의 《파티 사회자》 중첩 수에 따라 「5번 자리 아군이 가하는 데미지 8.75% 증가(1턴)」발동\n궁극기 발동 시 자신의 《파티 참가자》 중첩 수에 따라 「타깃이 받는 데미지 8.75% 증가(1턴)」발동`
                },
                [SkillType.PASSIVE_3]: {
                    name: `임시 베개 요새!`,
                    description: `방어 시 「최대 HP가 가장 적은 아군이 받는 데미지 20% 감소(1턴)」발동\n방어 시 「자신의 공격 데미지의 50%만큼 아군 전체를 치유」발동`
                },
                [SkillType.GENERAL_1]: {
                    name: `지속 치유+`,
                    description: `자신이 부여하는 치유량 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 부여`
                }
            }
        }
    },
    {
        version: 1,
        lastDate: "2024/04/26",
        remark: {
            [Locale.tc]: ``,
            [Locale.sc]: ``,
            [Locale.en]: ``,
            [Locale.jp]: ``,
            [Locale.kr]: ``
        },
        skill: {
            [Locale.tc]: {
                [SkillType.BASE_STAT]: {
                    name: `完全體數據`,
                    description: `HP：3,375,317\nATK：767,182\n(上調基礎ATK與HP數值)`
                },
                [SkillType.SKILL_S]: {
                    name: `魔王城party time`,
                    description: `使自身獲得1/1/2/2/3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30/40/40/50/50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60/70/80/90/100%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `魔王城party time`,
                    description: `使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加30%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力60%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `魔王城party time`,
                    description: `使自身獲得1層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力70%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `魔王城party time`,
                    description: `使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加40%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力80%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `魔王城party time`,
                    description: `使自身獲得2層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力90%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `魔王城party time`,
                    description: `使自身獲得3層《派對主持人》、《派對參加者》(最多3層)(每場戰鬥僅生效1次)\n使我方站位5獲得必殺技傷害增加50%(1回合)\n使我方站位5獲得「必殺時，追加『以自身攻擊力100%對目標造成傷害』(1回合)」，CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `派對邀請函`,
                    description: `以自身攻擊力50%每回合對我方全體進行治療(3回合)`
                },
                [SkillType.LEADER]: {
                    name: `睡衣派對要開始囉～`,
                    description: `我方全體最大HP增加30%\n我方全體攻擊力增加50%\n自身必殺時，觸發「使我方站位5獲得必殺技傷害增加30%(1回合)」\n自身必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加7.5%(1回合)」\n自身必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加7.5%(1回合)」\n使我方全體輔助者獲得「必殺時，觸發『以自身攻擊力10%使我方站位5攻擊力增加(1回合)」\n使我方全體妨礙者獲得「必殺時，觸發『使我方站位5獲得《派對焦點》(1回合)』」\n使我方最大HP最高者獲得「防禦時，觸發『以自身最大HP30%給予我方最大HP最低者護盾(1回合)』」\n \n《派對焦點》\n必殺時，追加「以自身攻擊力50%對目標造成傷害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `羞澀的戀愛話題`,
                    description: `必殺時，觸發「以自身攻擊力100%對我方全體進行治療，再以自身攻擊力50%每回合對我方全體進行治療(3回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `刺激的派對遊戲`,
                    description: `使我方全體輔助者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對主持人》(最多4層)』(觸發1次後清除)」\n使我方全體妨礙者獲得「行動時，觸發『使我方『迷情薄紗 露露』獲得1層《派對參加者》(最多4層)』(觸發1次後清除)」\n必殺時，觸發「使自身不受《派對主持人》、《派對參加者》層數變動效果影響(50回合)」(觸發1次後解除)\n必殺時，根據自身《派對主持人》的層數，觸發「使我方站位5造成傷害增加8.75%(1回合)」\n必殺時，根據自身《派對參加者》的層數，觸發「使目標受到傷害增加8.75%(1回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `臨時枕頭堡壘！`,
                    description: `防禦時，觸發「使我方最大HP最低者受到傷害減少20%(1回合)」\n防禦時，觸發「以自身攻擊力50%對我方全體進行治療」`
                },
                [SkillType.GENERAL_1]: {
                    name: `持續治療+`,
                    description: `使自身造成持續型治療增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.BASE_STAT]: {
                    name: `完全体数据`,
                    description: `HP：3,375,317\nATK：767,182\n(上调基础ATK与HP数值)`
                },
                [SkillType.SKILL_S]: {
                    name: `魔王城party time`,
                    description: `使自身获得1/1/2/2/3层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加30/40/40/50/50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力60/70/80/90/100%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `魔王城party time`,
                    description: `使自身获得1层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加30%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力60%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `魔王城party time`,
                    description: `使自身获得1层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加40%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力70%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `魔王城party time`,
                    description: `使自身获得2层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加40%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力80%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `魔王城party time`,
                    description: `使自身获得2层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力90%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `魔王城party time`,
                    description: `使自身获得3层《派对主持人》丶《派对参加者》(最多3层)(每场战斗仅生效1次)\n使我方站位5获得必杀技伤害增加50%(1回合)\n使我方站位5获得「必杀时，追加『以自身攻击力100%对目标造成伤害』(1回合)」，CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `派对邀请函`,
                    description: `以自身攻击力50%每回合对我方全体进行治疗(3回合)`
                },
                [SkillType.LEADER]: {
                    name: `睡衣派对要开始罗～`,
                    description: `我方全体最大HP增加30%\n我方全体攻击力增加50%\n自身必杀时，触发「使我方站位5获得必杀技伤害增加30%(1回合)」\n自身必杀时，根据自身《派对主持人》的层数，触发「使我方站位5造成伤害增加7.5%(1回合)」\n自身必杀时，根据自身《派对参加者》的层数，触发「使目标受到伤害增加7.5%(1回合)」\n使我方全体辅助者获得「必杀时，触发『以自身攻击力10%使我方站位5攻击力增加(1回合)」\n使我方全体妨碍者获得「必杀时，触发『使我方站位5获得《派对焦点》(1回合)』」\n使我方最大HP最高者获得「防御时，触发『以自身最大HP30%给予我方最大HP最低者护盾(1回合)』」\n \n《派对焦点》\n必杀时，追加「以自身攻击力50%对目标造成伤害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `羞涩的恋爱话题`,
                    description: `必杀时，触发「以自身攻击力100%对我方全体进行治疗，再以自身攻击力50%每回合对我方全体进行治疗(3回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `刺激的派对游戏`,
                    description: `使我方全体辅助者获得「行动时，触发『使我方『迷情薄纱 露露』获得1层《派对主持人》(最多4层)』(触发1次後清除)」\n使我方全体妨碍者获得「行动时，触发『使我方『迷情薄纱 露露』获得1层《派对参加者》(最多4层)』(触发1次後清除)」\n必杀时，触发「使自身不受《派对主持人》丶《派对参加者》层数变动效果影响(50回合)」(触发1次後解除)\n必杀时，根据自身《派对主持人》的层数，触发「使我方站位5造成伤害增加8.75%(1回合)」\n必杀时，根据自身《派对参加者》的层数，触发「使目标受到伤害增加8.75%(1回合)」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `临时枕头堡垒！`,
                    description: `防御时，触发「使我方最大HP最低者受到伤害减少20%(1回合)」\n防御时，触发「以自身攻击力50%对我方全体进行治疗」`
                },
                [SkillType.GENERAL_1]: {
                    name: `持续治疗+`,
                    description: `使自身造成持续型治疗增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.BASE_STAT]: {
                    name: `Maxed Data`,
                    description: `Max HP：3,375,317\nMax Attack：767,182\n(Increase base ATK and HP values)`
                },
                [SkillType.SKILL_S]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1/1/2/2/3 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 30/40/40/50/50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (60/70/80/90/100% Attack Power). CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 30% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (60% Attack Power). CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 1 stack of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 40% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (70% Attack Power). CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 2 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 40% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (80% Attack Power). CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 2 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (90% Attack Power). CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `Caesar's Palace Party Time`,
                    description: `Gain yourself 3 stacks of "Party Host" and "Party Attendee" (max 4 stacks) (effective only once per battle.)\nIncrease the 5th position ally's Ultimate Skill Power by 50% for 1 turn.\nThe 5th position ally gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (100% Attack Power). CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `Party Invitation`,
                    description: `Heal the party for 50% of your Attack Power every turn for 3 turns.`
                },
                [SkillType.LEADER]: {
                    name: `Pajama Party Starting~`,
                    description: `Increase the party's max HP by 30%.\nIncrease the party's Attack Power by 50%.\nOn Ultimate Skill, increase the 5th position ally's Ultimate Skill Power by 30% for 1 turn.\nOn Ultimate Skill, increase the 5th position ally's Damage Output by 7.5% for 1 turn based on your "Party Host" stacks.\nOn Ultimate Skill, increase the target's Damage Taken by 7.5% for 1 turn based on your "Party Attendee" stacks.\nAll allied Supporters gain the following effect: On Ultimate Skill, increase the 5th position ally's Attack Power for 10% of your Attack Power for 1 turn.\nAll allied Obstructors gain the following effect: On Ultimate Skill, gain 5th position ally "Party Focus" for 1 turn.\nThe ally with the highest max HP gains the following effect: When in Guard Stance, grant the ally with the lowest max HP a Shield for 30% of your max HP for 1 turn.\n\n"Party Focus"\nOn Ultimate Skill, damage the target (50% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Tender Topics of Love`,
                    description: `On Ultimate Skill, heal the party for 100% of your Attack Power, then heal the party for 50% of your Attack Power every turn for 3 turns.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Exciting Party Game`,
                    description: `All allied Supporters gain the following effect: When taking action, the allied Lingerie Lolita Lulu gains 1 stack of "Party Host" (max 4 stacks) (removes after triggering once).\nAll allied Obstructors gain the following effect: When taking action, the allied Lingerie Lolita Lulu gains 1 stack of "Party Attendee" (max 4 stacks) (removes after triggering once).\nOn Ultimate Skill, immune to effects of "Party Host" and "Party Attendee" stack changes for 50 turns (removes after triggering once).\nOn Ultimate Skill, increase the 5th position ally's Damage Output by 8.75% for 1 turn based on your "Party Host" stacks.\nOn Ultimate Skill, increase the target's Damage Taken by 8.75% for 1 turn based on your "Party Attendee" stacks.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Temporary Pillow Fort!`,
                    description: `When in Guard Stance, decrease the Damage Taken of the ally with the lowest max HP by 20% for 1 turn.\nWhen in Guard Stance, heal the party for 50% of your Attack Power.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Healing-over-time +`,
                    description: `Increase your Heal effect by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain immunity to Silence.`
                }
            },
            [Locale.jp]: {
                [SkillType.BASE_STAT]: {
                    name: `ステータス最大値`,
                    description: `HP最大値：3,375,317\nATK最大値：767,182\n基礎ATKとHPの値を増加`
                },
                [SkillType.SKILL_S]: {
                    name: `魔王城party time`,
                    description: `自分が1/1/2/2/3スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが30/40/40/50/50%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の60/70/80/90/100%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `魔王城party time`,
                    description: `自分が1スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが30%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の60%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `魔王城party time`,
                    description: `自分が1スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが40%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の70%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `魔王城party time`,
                    description: `自分が2スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが40%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の80%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `魔王城party time`,
                    description: `自分が2スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが50%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の90%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `魔王城party time`,
                    description: `自分が3スタックの《パーティーの司会者》、《パーティーの参加者》を獲得する(最大4スタック)(各バトルで1回のみ有効)\n味方の5番目のメンバーの必殺技ダメージが50%増加する(1ターン)\n味方の5番目のメンバーが「必殺技攻撃時『自分の100%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `パーティーの招待状`,
                    description: `毎ターン自分の攻撃力の50%分、味方全体に治療を行う(3ターン)`
                },
                [SkillType.LEADER]: {
                    name: `パジャマパーティー始まるよ～！`,
                    description: `味方全体の最大HPが30%増加する\n味方全体の攻撃力が50%増加する\n自身の必殺技攻撃時「味方の5番目のメンバーの必殺技ダメージを30%増加させる(1ターン)」を誘発する\n自身の必殺技攻撃時、自分の《パーティーの司会者》のスタック数に応じて「味方の5番目のメンバーの与えるダメージを7.5%増加させる(1ターン)」を誘発する\n自身の必殺技攻撃時、自分の《パーティーの参加者》のスタック数に応じて「ターゲットの受けるダメージを7.5%増加させる(1ターン)」を誘発する\n味方全体のサポーターが「必殺技攻撃時『自分の攻撃力の10%分、味方の5番目のメンバーの攻撃力を増加させる(1ターン)』を誘発する」を獲得する\n味方全体のデバッファーが「必殺技攻撃時『味方の5番目のメンバーが《パーティーの主役》を獲得する(1ターン)』を誘発する」を獲得する\n最大HPが最も高い味方が「防御時『自分の最大HPの30%分、最大HPが最も低い味方に盾を与える(1ターン)』を誘発する」を獲得する\n\n《パーティーの主役》\n必殺技攻撃時「自身の50%の攻撃力でターゲットにダメージを与える」を追加する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `恥ずかしい恋バナ`,
                    description: `必殺技攻撃時「自分の攻撃力の100%分味方全体に治療を行い、さらに毎ターン自分の攻撃力の50%分味方全体に治療を行う(3ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `刺激的なパーティーゲーム`,
                    description: `味方全体のサポーターが「行動時『味方の『溺愛のベール ルル』が1スタックの《パーティーの司会者》を獲得する(最大4スタック)』を誘発する(誘発1回後に解除)」を獲得する\n味方全体のデバッファーが「行動時『味方の『溺愛のベール ルル』が1スタックの《パーティーの参加者》を獲得する(最大4スタック)』を誘発する(誘発1回後に解除)」を獲得する\n必殺技攻撃時「自分が《パーティーの司会者》や《パーティーの参加者》のスタック数の変動の影響を受けない(50ターン)」を誘発する(誘発1回後に解除)\n必殺技攻撃時、自分の《パーティーの司会者》のスタック数に応じて 「味方の5番目のメンバーが与えるダメージを8.75%増加させる(1ターン)」を誘発する\n必殺技攻撃時、自分の《パーティーの参加者》のスタック数に応じて 「ターゲットの受けるダメージを8.75%増加させる(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `一時的な枕の砦`,
                    description: `防御時「最大HPが一番低い味方メンバーが受けるダメージを20%減少させる(1ターン)」を誘発する\n防御時「自分の攻撃力の50%分、味方全体に治療を行う」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `継続治療+`,
                    description: `自分が与える治癒量を10%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.BASE_STAT]: {
                    name: `스탯 최대치`,
                    description: `Max HP：3,375,317\nMax ATK：767,182\n기본 ATK와 HP 값 증가`
                },
                [SkillType.SKILL_S]: {
                    name: `마왕성 party time`,
                    description: `자신은 1/1/2/2/3중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 30/40/40/50/50% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 60/70/80/90/100%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `마왕성 party time`,
                    description: `자신은 1중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 30% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 60%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.SKILL_2]: {
                    name: `마왕성 party time`,
                    description: `자신은 1중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 40% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 70%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.SKILL_3]: {
                    name: `마왕성 party time`,
                    description: `자신은 2중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 40% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 80%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.SKILL_4]: {
                    name: `마왕성 party time`,
                    description: `자신은 2중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 50% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 90%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.SKILL_5]: {
                    name: `마왕성 party time`,
                    description: `자신은 3중첩의 《파티 사회자》, 《파티 참가자》 획득(최대 4중첩)(각 전투에서 1회만 유효)\n5번 자리 아군은 궁극기 데미지 50% 증가 획득(1턴)\n5번 자리 아군은 「궁극기 발동 시 『자신의 공격 데미지의 100%만큼 타깃에게 데미지』(1턴) 추가」 획득 [CD: 3]`
                },
                [SkillType.ATTACK]: {
                    name: `파티 초청장`,
                    description: `자신의 공격 데미지의 50%만큼 매턴 아군 전체를 치유(3턴)`
                },
                [SkillType.LEADER]: {
                    name: `파자마 파티 스타트~`,
                    description: `아군 전체의 최대 HP 30% 증가\n아군 전체의 공격 데미지 50% 증가\n자신이 궁극기 발동 시, 「5번 자리 아군은 궁극기 데미지 30% 증가 획득(1턴)」발동\n자신이 궁극기 발동 시, 자신의 《파티 사회자》 중첩 수에 따라 「5번 자리 아군이 가하는 데미지 7.5% 증가(1턴)」발동\n자신이 궁극기 발동 시, 자신의 《파티 참가자》 중첩 수에 따라 「타깃이 받는 데미지 7.5% 증가(1턴)」발동\n아군 서포터는 「궁극기 발동 시 『자신의 공격 데미지의 10%만큼 5번 자리 아군의 공격 데미지 증가(1턴)』발동」획득\n아군 디스럽터는 「궁극기 발동 시 『5번 자리 아군은 《파티 주인공》(1턴)획득』 발동」획득\n최대 HP가 가장 높은 아군은 「방어 시 『자신의 최대 HP 30%만큼 최대 HP가 가장 낮은 아군에게 아머 강화 부여(1턴)』발동」획득\n\n《파티 주인공》\n궁극기 발동 시 「자신의 공격 데미지의 50%만큼 타깃에게 데미지」추가`
                },
                [SkillType.PASSIVE_1]: {
                    name: `수줍은 연애 이야기`,
                    description: `궁극기 발동 시 「자신의 공격 데미지의 100%만큼 아군 전체를 치유하고 자신의 공격 데미지의 50%만큼 매턴 아군 전체를 치유(3턴)」발동`
                },
                [SkillType.PASSIVE_2]: {
                    name: `스릴 넘치는 파티 게임`,
                    description: `아군 서포터는 「행동 시 『아군 『익애의 베일 루루』가 1중첩의 《파티 사회자》획득(최대 4중첩)』(1회 발동 후 제거)」획득\n아군 디스럽터는 「행동 시 『아군 『익애의 베일 루루』가 1중첩의 《파티 참가자》 획득(최대 4중첩)』(1회 발동 후 제거)」획득\n궁극기 발동 시 「자신은 《파티 사회자》, 《파티 참가자》중첩 수 변동 효과의 영향을 받지 않음(50턴)」발동(1회 발동 후 제거)\n궁극기 발동 시 자신의 《파티 사회자》 중첩 수에 따라 「5번 자리 아군이 가하는 데미지 8.75% 증가(1턴)」발동\n궁극기 발동 시 자신의 《파티 참가자》 중첩 수에 따라 「타깃이 받는 데미지 8.75% 증가(1턴)」발동`
                },
                [SkillType.PASSIVE_3]: {
                    name: `임시 베개 요새!`,
                    description: `방어 시 「최대 HP가 가장 적은 아군이 받는 데미지 20% 감소(1턴)」발동\n방어 시 「자신의 공격 데미지의 50%만큼 아군 전체를 치유」발동`
                },
                [SkillType.GENERAL_1]: {
                    name: `지속 치유+`,
                    description: `자신이 부여하는 치유량 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 부여`
                }
            }
        }
    },
]