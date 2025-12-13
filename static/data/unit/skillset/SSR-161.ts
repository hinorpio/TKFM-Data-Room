import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10190: SkillSet[] =  [
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
                    name: `謀士以身入局`,
                    description: `使自身攻擊力增加18/21/24/27/30%(最多3層)，使我方全體造成觸發技效果增加25.2/29.4/33.6/37.8/42%(最多3層)、攻擊時，觸發「以自身攻擊力18/21/24/27/30%對目標造成傷害」(4回合)(不可疊加)，並以自身攻擊力165/188/211/234/257%對我方全體進行治療。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `謀士以身入局`,
                    description: `使自身攻擊力增加18%(最多3層)，使我方全體造成觸發技效果增加25.2%(最多3層)、攻擊時，觸發「以自身攻擊力18%對目標造成傷害」(4回合)(不可疊加)，並以自身攻擊力165%對我方全體進行治療。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `謀士以身入局`,
                    description: `使自身攻擊力增加21%(最多3層)，使我方全體造成觸發技效果增加29.4%(最多3層)、攻擊時，觸發「以自身攻擊力21%對目標造成傷害」(4回合)(不可疊加)，並以自身攻擊力188%對我方全體進行治療。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `謀士以身入局`,
                    description: `使自身攻擊力增加24%(最多3層)，使我方全體造成觸發技效果增加33.6%(最多3層)、攻擊時，觸發「以自身攻擊力24%對目標造成傷害」(4回合)(不可疊加)，並以自身攻擊力211%對我方全體進行治療。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `謀士以身入局`,
                    description: `使自身攻擊力增加27%(最多3層)，使我方全體造成觸發技效果增加37.8%(最多3層)、攻擊時，觸發「以自身攻擊力27%對目標造成傷害」(4回合)(不可疊加)，並以自身攻擊力234%對我方全體進行治療。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `謀士以身入局`,
                    description: `使自身攻擊力增加30%(最多3層)，使我方全體造成觸發技效果增加42%(最多3層)、攻擊時，觸發「以自身攻擊力30%對目標造成傷害」(4回合)(不可疊加)，並以自身攻擊力257%對我方全體進行治療。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `後勤補給`,
                    description: `以自身攻擊力75%對我方全體進行治療`
                },
                [SkillType.LEADER]: {
                    name: `遺願的繼承者`,
                    description: `我方全體最大HP增加50%\n我方全體攻擊力增加50%\n我方全體獲得「被治療時，觸發『《最後的囑託》』」\n我方全體獲得「我方隊伍水屬性角色有2人以上時，發動『攻擊時，追加「以目標最大HP1%對我方全體進行治療」』」\n我方全體獲得「我方隊伍光屬性角色有2人以上時，發動『攻擊時，追加「以目標最大HP1%對我方全體進行治療」』」\n我方全體獲得「自身《守護眾人》層數≧20層時，開啟『攻擊時，觸發「以自身攻擊力20%對目標造成傷害」』」\n我方全體獲得「自身《守護眾人》層數=40層時，開啟『攻擊時，觸發「以自身攻擊力20%對目標造成傷害」』」\n自身獲得「每經過1回合時，觸發『使敵方全體受到水、光屬性傷害增加2%(最多10層)』」\n\n《最後的囑託》\n使自身獲得1層《守護眾人》(最多40層)\n使自身造成觸發技效果增加2.25%(最多40層)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `不准打擾他！`,
                    description: `被治療時，觸發『使我方全體獲得《凱薩的永眠》』\n\n《凱薩的永眠》\n造成觸發技效果增加6%(最多10層)\n攻擊時，觸發「以自身攻擊力30%對目標造成傷害」(1回合)(不可疊加)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `魔力喪失`,
                    description: `必殺時，觸發「使自身獲得1層《遺失的魔力》(最多3層)」\n自身《遺失的魔力》層數≧1層時，開啟「被治療時，觸發『使我方全體水、光屬性角色造成傷害增加10%(1回合)』」\n自身《遺失的魔力》層數≧2層時，開啟「造成治療量增加50%」\n自身《遺失的魔力》層數=3層時，開啟「被治療時，觸發『以自身攻擊力6%使自身以外我方全體攻擊力增加(1回合)』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `信守約定`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少4回合」(觸發1次後清除)\n防禦時，觸發「以自身攻擊力20%每回合對我方全體進行治療(4回合)(不可疊加)」\n被治療時，觸發「使我方全體造成傷害增加1.5%(最多10層)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `治療+`,
                    description: `使自身造成治療增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `谋士以身入局`,
                    description: `使自身攻击力增加18/21/24/27/30%(最多3层)，使我方全体造成触发技效果增加25.2/29.4/33.6/37.8/42%(最多3层)、攻击时，触发「以自身攻击力18/21/24/27/30%对目标造成伤害」(4回合)(不可叠加)，并以自身攻击力165/188/211/234/257%对我方全体进行治疗。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `谋士以身入局`,
                    description: `使自身攻击力增加18%(最多3层)，使我方全体造成触发技效果增加25.2%(最多3层)、攻击时，触发「以自身攻击力18%对目标造成伤害」(4回合)(不可叠加)，并以自身攻击力165%对我方全体进行治疗。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `谋士以身入局`,
                    description: `使自身攻击力增加21%(最多3层)，使我方全体造成触发技效果增加29.4%(最多3层)、攻击时，触发「以自身攻击力21%对目标造成伤害」(4回合)(不可叠加)，并以自身攻击力188%对我方全体进行治疗。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `谋士以身入局`,
                    description: `使自身攻击力增加24%(最多3层)，使我方全体造成触发技效果增加33.6%(最多3层)、攻击时，触发「以自身攻击力24%对目标造成伤害」(4回合)(不可叠加)，并以自身攻击力211%对我方全体进行治疗。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `谋士以身入局`,
                    description: `使自身攻击力增加27%(最多3层)，使我方全体造成触发技效果增加37.8%(最多3层)、攻击时，触发「以自身攻击力27%对目标造成伤害」(4回合)(不可叠加)，并以自身攻击力234%对我方全体进行治疗。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `谋士以身入局`,
                    description: `使自身攻击力增加30%(最多3层)，使我方全体造成触发技效果增加42%(最多3层)、攻击时，触发「以自身攻击力30%对目标造成伤害」(4回合)(不可叠加)，并以自身攻击力257%对我方全体进行治疗。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `后勤补给`,
                    description: `以自身攻击力75%对我方全体进行治疗`
                },
                [SkillType.LEADER]: {
                    name: `遗愿的继承者`,
                    description: `我方全体最大HP增加50%\n我方全体攻击力增加50%\n我方全体获得「被治疗时，触发『《最后的嘱託》』」\n我方全体获得「我方队伍水属性角色有2人以上时，发动『攻击时，追加「以目标最大HP1%对我方全体进行治疗」』」\n我方全体获得「我方队伍光属性角色有2人以上时，发动『攻击时，追加「以目标最大HP1%对我方全体进行治疗」』」\n我方全体获得「自身《守护众人》层数≧20层时，开启『攻击时，触发「以自身攻击力20%对目标造成伤害」』」\n我方全体获得「自身《守护众人》层数=40层时，开启『攻击时，触发「以自身攻击力20%对目标造成伤害」』」\n自身获得「每经过1回合时，触发『使敌方全体受到水、光属性伤害增加2%(最多10层)』」\n\n《最后的嘱託》\n使自身获得1层《守护众人》(最多40层)\n使自身造成触发技效果增加2.25%(最多40层)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `不准打扰他！`,
                    description: `被治疗时，触发『使我方全体获得《凯萨的永眠》』\n\n《凯萨的永眠》\n造成触发技效果增加6%(最多10层)\n攻击时，触发「以自身攻击力30%对目标造成伤害」(1回合)(不可叠加)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `魔力丧失`,
                    description: `必杀时，触发「使自身获得1层《遗失的魔力》(最多3层)」\n自身《遗失的魔力》层数≧1层时，开启「被治疗时，触发『使我方全体水、光属性角色造成伤害增加10%(1回合)』」\n自身《遗失的魔力》层数≧2层时，开启「造成治疗量增加50%」\n自身《遗失的魔力》层数=3层时，开启「被治疗时，触发『以自身攻击力6%使自身以外我方全体攻击力增加(1回合)』」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `信守约定`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少4回合」(触发1次后清除)\n防御时，触发「以自身攻击力20%每回合对我方全体进行治疗(4回合)(不可叠加)」\n被治疗时，触发「使我方全体造成伤害增加1.5%(最多10层)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `治疗+`,
                    description: `使自身造成治疗增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Strategist Enters the Fray`,
                    description: `Increase your Attack Power by 18/21/24/27/30% (max 3 stacks) and the party's Trigger Ability effects by 25.2/29.4/33.6/37.8/42% (max 3 stacks). On Attack, trigger the following effect: Damage the target for 4 turns (18/21/24/27/30% Attack Power) (Non-stackable). Heal the party for 165/188/211/234/257% of your Attack Power. CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Strategist Enters the Fray`,
                    description: `Increase your Attack Power by 18% (max 3 stacks) and the party's Trigger Ability effects by 25.2% (max 3 stacks). On Attack, trigger the following effect: Damage the target for 4 turns (18% Attack Power) (Non-stackable). Heal the party for 165% of your Attack Power. CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Strategist Enters the Fray`,
                    description: `Increase your Attack Power by 21% (max 3 stacks) and the party's Trigger Ability effects by 29.4% (max 3 stacks). On Attack, trigger the following effect: Damage the target for 4 turns (21% Attack Power) (Non-stackable). Heal the party for 188% of your Attack Power. CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Strategist Enters the Fray`,
                    description: `Increase your Attack Power by 24% (max 3 stacks) and the party's Trigger Ability effects by 33.6% (max 3 stacks). On Attack, trigger the following effect: Damage the target for 4 turns (24% Attack Power) (Non-stackable). Heal the party for 211% of your Attack Power. CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Strategist Enters the Fray`,
                    description: `Increase your Attack Power by 27% (max 3 stacks) and the party's Trigger Ability effects by 37.8% (max 3 stacks). On Attack, trigger the following effect: Damage the target for 4 turns (27% Attack Power) (Non-stackable). Heal the party for 234% of your Attack Power. CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Strategist Enters the Fray`,
                    description: `Increase your Attack Power by 30% (max 3 stacks) and the party's Trigger Ability effects by 42% (max 3 stacks). On Attack, trigger the following effect: Damage the target for 4 turns (30% Attack Power) (Non-stackable). Heal the party for 257% of your Attack Power. CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Logistics Supply`,
                    description: `Heal party equal to 75% of your Attack Power`
                },
                [SkillType.LEADER]: {
                    name: `Heir of the Last Wish`,
                    description: `Increase the party's max HP by 50%.\nIncrease the party's Attack Power by 50%.\nThe party gain the following effect: When healed, trigger "Last Entrustment".\nThe party gain the following effect: When there are 2 or more Water allies in the party, activate "On Attack, additionally heal the party for 1% of the target's max HP".\nThe party gain the following effect: When there are 2 or more Light allies in the party, activate "On Attack, additionally heal the party for 1% of the target's max HP".\nThe party gain the following effect: When your "Protect Everyone" stacks are ≥ 20, activate "On Attack, trigger the following effect: Damage the target (20% Attack Power)".\nThe party gain the following effect: When your "Protect Everyone" stacks are = 40, activate "On Attack, trigger the following effect: Damage the target (20% Attack Power)".\nGain yourself the following effect: After every 1 turn, trigger the following effect: Increase all enemies' Damage Taken from Water and Light attacks by 2% (max 10 stacks). \n\n"Last Entrustment"\nGain yourself 1 stack of "Protect Everyone" (max 40 stacks).\nIncrease your Trigger Ability effects by 2.25% (max 40 stacks).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Don't Disturb Him!`,
                    description: `When healed, trigger the following effect: The party gains"Caesar's Eternal Slumber".\n\n"Caesar's Eternal Slumber"\nIncrease Trigger Ability effects by 6% (max 10 stacks).\nOn Attack, trigger the following effect: Damage the target for 1 turn (30% Attack Power) (Non-stackable).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Magic Loss`,
                    description: `On Ultimate Skill, trigger the following effect: Gain yourself 1 stack of "Lost Magic" (max 3 stacks).\nWhen your "Lost Magic" stacks are ≥ 1, activate "When healed, trigger the following effect: Increase all Water and Light allies' Damage Output by 10% for 1 turn".\nWhen your "Lost Magic" stacks are ≥ 2, activate "Increase Heal Rate by 50%".\nWhen your "Lost Magic" stacks are = 3, activate "When healed, trigger the following effect: Increase other allies' Attack Power for 6% of your Attack Power for 1 turn".`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Keep the Promise`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 4 turns (removes after triggering once). When in Guard Stance, trigger the following effect: Heal the party for 20% of your Attack Power every turn for 4 turns (Non-stackable).\nWhen healed, trigger the following effect: Increase the party's Damage Output by 1.5% (max 10 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Healing+`,
                    description: `Increase your Heal effect by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity`,
                    description: `Gain yourself immunity to Paralysis.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `戦渦の只中へ身を投じる`,
                    description: `自分の攻撃力を18/21/24/27/30%増加させ(最高3スタック)、味方全体の与える誘発スキル効果を25.2/29.4/33.6/37.8/42%増加させ(最高3スタック)、攻撃時「自分の18/21/24/27/30%の攻撃力でターゲットにダメージを与える」を誘発し(4ターン)(スタック不可)、さらに自分の攻撃力の165/188/211/234/257%分味方全体に治療を行う[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `戦渦の只中へ身を投じる`,
                    description: `自分の攻撃力を18%増加させ(最高3スタック)、味方全体の与える誘発スキル効果を25.2%増加させ(最高3スタック)、攻撃時「自分の18%の攻撃力でターゲットにダメージを与える」を誘発し(4ターン)(スタック不可)、さらに自分の攻撃力の165%分味方全体に治療を行う[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `戦渦の只中へ身を投じる`,
                    description: `自分の攻撃力を21%増加させ(最高3スタック)、味方全体の与える誘発スキル効果を29.4%増加させ(最高3スタック)、攻撃時「自分の21%の攻撃力でターゲットにダメージを与える」を誘発し(4ターン)(スタック不可)、さらに自分の攻撃力の188%分味方全体に治療を行う[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `戦渦の只中へ身を投じる`,
                    description: `自分の攻撃力を24%増加させ(最高3スタック)、味方全体の与える誘発スキル効果を33.6%増加させ(最高3スタック)、攻撃時「自分の24%の攻撃力でターゲットにダメージを与える」を誘発し(4ターン)(スタック不可)、さらに自分の攻撃力の211%分味方全体に治療を行う[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `戦渦の只中へ身を投じる`,
                    description: `自分の攻撃力を27%増加させ(最高3スタック)、味方全体の与える誘発スキル効果を37.8%増加させ(最高3スタック)、攻撃時「自分の27%の攻撃力でターゲットにダメージを与える」を誘発し(4ターン)(スタック不可)、さらに自分の攻撃力の234%分味方全体に治療を行う[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `戦渦の只中へ身を投じる`,
                    description: `自分の攻撃力を30%増加させ(最高3スタック)、味方全体の与える誘発スキル効果を42%増加させ(最高3スタック)、攻撃時「自分の30%の攻撃力でターゲットにダメージを与える」を誘発し(4ターン)(スタック不可)、さらに自分の攻撃力の257%分味方全体に治療を行う[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `後方補給`,
                    description: `自分の攻撃力の75%分味方全体に治療を行う`
                },
                [SkillType.LEADER]: {
                    name: `最期の願いの継承者`,
                    description: `味方全体の最大HPが50%増加する\n味方全体の攻撃力が50%増加する\n味方全体が「治療を受けた時『《最後の託し》』を誘発する」を獲得する\n味方全体が「味方に2人以上の水属性キャラがいる時『攻撃時「ターゲットの最大HPの1%分味方全体に治療を行う」を追加する』を発動する」を獲得する\n味方全体が「味方に2人以上の光属性キャラがいる時『攻撃時「ターゲットの最大HPの1%分味方全体に治療を行う」を追加する』を発動する」を獲得する\n味方全体が「自分の《みんなを守る》のスタック数が≧20の時『攻撃時「自分の20%の攻撃力でターゲットにダメージを与える」を誘発する』を発動する」を獲得する\n味方全体が「自分の《みんなを守る》のスタック数が=40の時『攻撃時「自分の20%の攻撃力でターゲットにダメージを与える」を誘発する』を発動する」を獲得する\n自分が「1ターン毎に『敵全体が受ける水、光属性ダメージを2%増加させる(最高10スタック)』を誘発する」を獲得する\n\n《最後の託し》\n自分が《みんなを守る》を1スタック獲得する(最高40スタック)\n自分の与える誘発スキル効果を2.25%増加させる(最高40スタック)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `彼の邪魔をしないで！`,
                    description: `治療を受ける時「味方全体が《シーザーの永眠》を獲得する」を誘発する\n\n《シーザーの永眠》\n与える誘発スキル効果が6%増加する(最高10スタック)\n攻撃時「自分の30%の攻撃力でターゲットにダメージを与える」を誘発する(1ターン)(スタック不可)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `魔力喪失`,
                    description: `必殺技攻撃時「自分が《失われた魔力》を1スタック獲得する(最高3スタック)」を誘発する\n自分の《失われた魔力》のスタック数が≧1の時「治療を受ける時『味方の水、光属性キャラの与えるダメージを10%増加させる(1ターン)』を誘発する」を発動する\n自分の《失われた魔力》のスタック数が≧2の時「与える回復HP量が50%増加する」を発動する\n自分の《失われた魔力》のスタック数が=3の時「治療を受ける時『自分の攻撃力の6%分、自分以外の味方全体の攻撃力を増加させる(1ターン)』を誘発する」を発動する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `約束を果たす`,
                    description: `1ターン目に「自分の現在の必殺技CDを4ターン減少させる」を誘発する(誘発1回後に解除)\n防御時「毎ターン自分の攻撃力の20%分味方全体に治療を行う(4ターン)(スタック不可)」を誘発する\n治療を受ける時「味方全体の与えるダメージを1.5%増加させる(最高10スタック)」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `治療+`,
                    description: `自分が与える治療効果を10%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `麻痺無効`,
                    description: `自分を麻痺無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `승부수를 던지다`,
                    description: `자신의 공격 데미지 18/21/24/27/30% 증가(최대 3중첩), 아군 전체의 가하는 트리거 스킬 효과 25.2/29.4/33.6/37.8/42% 증가(최대 3중첩), 공격 시 「자신의 공격 데미지의 18/21/24/27/30%만큼 타깃에게 데미지」트리거(4턴)(중첩 불가), 자신의 공격 데미지의 165/188/211/234/257%만큼 아군 전체를 치유 [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `승부수를 던지다`,
                    description: `자신의 공격 데미지 18% 증가(최대 3중첩), 아군 전체의 가하는 트리거 스킬 효과 25.2% 증가(최대 3중첩), 공격 시 「자신의 공격 데미지의 18%만큼 타깃에게 데미지」트리거(4턴)(중첩 불가), 자신의 공격 데미지의 165%만큼 아군 전체를 치유 [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `승부수를 던지다`,
                    description: `자신의 공격 데미지 21% 증가(최대 3중첩), 아군 전체의 가하는 트리거 스킬 효과 29.4% 증가(최대 3중첩), 공격 시 「자신의 공격 데미지의 21%만큼 타깃에게 데미지」트리거(4턴)(중첩 불가), 자신의 공격 데미지의 188%만큼 아군 전체를 치유 [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `승부수를 던지다`,
                    description: `자신의 공격 데미지 24% 증가(최대 3중첩), 아군 전체의 가하는 트리거 스킬 효과 33.6% 증가(최대 3중첩), 공격 시 「자신의 공격 데미지의 24%만큼 타깃에게 데미지」트리거(4턴)(중첩 불가), 자신의 공격 데미지의 211%만큼 아군 전체를 치유 [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `승부수를 던지다`,
                    description: `자신의 공격 데미지 27% 증가(최대 3중첩), 아군 전체의 가하는 트리거 스킬 효과 37.8% 증가(최대 3중첩), 공격 시 「자신의 공격 데미지의 27%만큼 타깃에게 데미지」트리거(4턴)(중첩 불가), 자신의 공격 데미지의 234%만큼 아군 전체를 치유 [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `승부수를 던지다`,
                    description: `자신의 공격 데미지 30% 증가(최대 3중첩), 아군 전체의 가하는 트리거 스킬 효과 42% 증가(최대 3중첩), 공격 시 「자신의 공격 데미지의 30%만큼 타깃에게 데미지」트리거(4턴)(중첩 불가), 자신의 공격 데미지의 257%만큼 아군 전체를 치유 [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `후방 보급`,
                    description: `자신 공격 데미지의 75%만큼 아군 전체를 치유`
                },
                [SkillType.LEADER]: {
                    name: `유언의 계승자`,
                    description: `아군 전체의 최대  HP 50% 증가\n아군 전체의 공격 데미지 50% 증가\n아군 전체는 「치유를 받을 시 『《마지막 당부》』트리거」획득\n아군 전체는 「팀에 수속성 캐릭터가 2명 이상 있을 시『공격 시 「타깃의 최대 HP 1%만큼 아군 전체를 치유」 추가』발동」획득\n아군 전체는 「팀에 광속성 캐릭터가 2명 이상 있을 시『공격 시 「타깃의 최대 HP 1%만큼 아군 전체를 치유」 추가』발동」획득\n아군 전체는 「자신의《모두를 지키겠어》중첩수≧20일 시『공격 시 「자신의 공격 데미지의 20%만큼 타깃에게 데미지」트리거』활성화」획득\n아군 전체는 「자신의《모두를 지키겠어》중첩수=40일 시『공격 시 「자신의 공격 데미지의 20%만큼 타깃에게 데미지」트리거』활성화」획득\n자신은  「1턴마다  『적 전체가 받는 수속성, 광속성 데미지 2% 증가(최대 10중첩)』 트리거」 획득\n\n《마지막 당부》\n자신은 1중첩의《모두를 지키겠어》획득(최대 40중첩)\n자신의 가하는 트리거 스킬 효과 2.25% 증가(최대 40중첩)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `그를 방해하지 마!`,
                    description: `치유를 받을 시『아군 전체는《시저의 영면》획득』트리거\n\n《시저의 영면》\n가하는 트리거 스킬 효과 6% 증가(최대 10중첩)\n공격 시 「자신의 공격 데미지의 30%만큼 타깃에게 데미지」트리거(1턴)(중첩 불가)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `마력 상실`,
                    description: `궁극기 발동 시 「자신은 1중첩의 《잃어버린 마력》획득(최대 3중첩)」트리거\n자신의《잃어버린 마력》중첩수≧1일 시 「치유를 받을 시『아군 수속성, 광속성 캐릭터의 가하는 데미지 10% 증가(1턴)』트리거」활성화\n자신의《잃어버린 마력》중첩수≧2일 시 「부여하는 치유량 50% 증가」활성화\n자신의《잃어버린 마력》중첩수=3일 시 「치유를 받을 시 『자신의 공격 데미지의 6%만큼 자신 이외의 아군 전체의 공격 데미지 증가(1턴)』트리거」활성화`
                },
                [SkillType.PASSIVE_3]: {
                    name: `약속 이행`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 4턴 감소」트리거(1회 트리거 후 제거)\n방어 시 「자신의 공격 데미지의 20%만큼 매턴 아군 전체를 치유(4턴)(중첩 불가)」트리거\n치유를 받을 시 「아군 전체의 가하는 데미지 1.5% 증가(최대 10중첩)」트리거`
                },
                [SkillType.GENERAL_1]: {
                    name: `치유+`,
                    description: `자신의 치유량 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `마비 면역`,
                    description: `자신에게 마비 면역 부여`
                }
            }
        }
    },
]