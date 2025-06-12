import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10171: SkillSet[] =  [
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
                    name: `終焰・薔薇輪舞`,
                    description: `使自身獲得1/2/3/4層《令萬物折服的王者之威》(最多4層)，再使自身受到傷害減少15%(4回合)，以自身攻擊力110/125/140/155%對目標造成傷害3次。CD:4 \n\n5絆：使自身獲得4層《令萬物折服的王者之威》(最多4層)，並使自身不受「《令萬物折服的王者之威》層數減少效果」影響(4回合)，再使自身受到傷害減少15%(4回合)，以自身攻擊力170%對目標造成傷害3次。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `終焰・薔薇輪舞`,
                    description: `使自身獲得1層《令萬物折服的王者之威》(最多4層)，再使自身受到傷害減少15%(4回合)，以自身攻擊力110%對目標造成傷害3次。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `終焰・薔薇輪舞`,
                    description: `使自身獲得2層《令萬物折服的王者之威》(最多4層)，再使自身受到傷害減少15%(4回合)，以自身攻擊力125%對目標造成傷害3次。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `終焰・薔薇輪舞`,
                    description: `使自身獲得3層《令萬物折服的王者之威》(最多4層)，再使自身受到傷害減少15%(4回合)，以自身攻擊力140%對目標造成傷害3次。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `終焰・薔薇輪舞`,
                    description: `使自身獲得4層《令萬物折服的王者之威》(最多4層)，再使自身受到傷害減少15%(4回合)，以自身攻擊力155%對目標造成傷害3次。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `終焰・薔薇輪舞`,
                    description: `使自身獲得4層《令萬物折服的王者之威》(最多4層)，並使自身不受「《令萬物折服的王者之威》層數減少效果」影響(4回合)，再使自身受到傷害減少15%(4回合)，以自身攻擊力170%對目標造成傷害3次。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `魔王的傲慢`,
                    description: `以自身攻擊力125%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `最出色的「伊布力斯」`,
                    description: `我方全體最大HP增加40%\n我方全體攻擊力增加50%\n自身獲得「當我方隊伍恰好為5種屬性時，開啟『《王若先行》』」\n\n《王若先行》\n普攻傷害增加100%\n必殺技傷害增加50%\n造成傷害增加30%\n第1回合時，觸發「使自身當前必殺技CD減少4回合」\n普攻時，觸發「使自身以外我方全體獲得《士亦相隨》」\n必殺時，觸發「使目標受到風屬性傷害增加25%(5回合)」\n\n《士亦相隨》\n普攻時，觸發「《榮耀終歸伊布力斯》」(1回合)\n必殺時，觸發「《榮耀終歸伊布力斯》」(2回合)\n\n《榮耀終歸伊布力斯》\n使目標受到傷害增加5.5%(2回合)\n以自身攻擊力10%使【盛暑沁夏 伊布力斯】攻擊力增加(2回合)\n使【盛暑沁夏 伊布力斯】獲得「普攻時，追加『以自身攻擊力30%對目標造成傷害』(2回合)」\n使【盛暑沁夏 伊布力斯】獲得「必殺時，追加『以自身攻擊力60%對目標造成傷害』(1回合)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `受挑戰者的自傲`,
                    description: `第1回合時，觸發「使自身免疫必殺技CD變動效果(50回合)」(觸發1次後清除)\n防禦時，觸發「使自身《令萬物折服的王者之威》層數減少1層」\n被攻擊時，觸發「使我方全體攻擊力增加50%(4回合)(不可疊加)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `絕對的力量`,
                    description: `自身《令萬物折服的王者之威》層數≧1層時，開啟「對防禦目標傷害增加110%」\n自身《令萬物折服的王者之威》層數≧2層時，開啟「普攻傷害增加100%」\n自身《令萬物折服的王者之威》層數≧3層時，開啟「必殺技傷害增加50%」\n自身《令萬物折服的王者之威》層數=4層時，開啟「造成傷害增加30%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `「魔王」的真義`,
                    description: `自身《令萬物折服的王者之威》層數=4層時，開啟「每經過4回合時，觸發『《魔王領域》』」\n\n《魔王領域》\n使敵方全體受到傷害增加30%(4回合)\n使敵方全體受到風屬性傷害增加25%(4回合)\n使敵方全體防禦減傷減少50%(1回合)\n使敵方全體獲得「被攻擊時，觸發『使自身進入防禦狀態』(1回合)(觸發1次後清除)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `傷害+`,
                    description: `使自身造成傷害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `终焰・蔷薇轮舞`,
                    description: `使自身获得1/2/3/4层《令万物折服的王者之威》(最多4层)，再使自身受到伤害减少15%(4回合)，以自身攻击力110/125/140/155%对目标造成伤害3次。CD:4 \n\n5绊：使自身获得4层《令万物折服的王者之威》(最多4层)，并使自身不受「《令万物折服的王者之威》层数减少效果」影响(4回合)，再使自身受到伤害减少15%(4回合)，以自身攻击力170%对目标造成伤害3次。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `终焰・蔷薇轮舞`,
                    description: `使自身获得1层《令万物折服的王者之威》(最多4层)，再使自身受到伤害减少15%(4回合)，以自身攻击力110%对目标造成伤害3次。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `终焰・蔷薇轮舞`,
                    description: `使自身获得2层《令万物折服的王者之威》(最多4层)，再使自身受到伤害减少15%(4回合)，以自身攻击力125%对目标造成伤害3次。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `终焰・蔷薇轮舞`,
                    description: `使自身获得3层《令万物折服的王者之威》(最多4层)，再使自身受到伤害减少15%(4回合)，以自身攻击力140%对目标造成伤害3次。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `终焰・蔷薇轮舞`,
                    description: `使自身获得4层《令万物折服的王者之威》(最多4层)，再使自身受到伤害减少15%(4回合)，以自身攻击力155%对目标造成伤害3次。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `终焰・蔷薇轮舞`,
                    description: `使自身获得4层《令万物折服的王者之威》(最多4层)，并使自身不受「《令万物折服的王者之威》层数减少效果」影响(4回合)，再使自身受到伤害减少15%(4回合)，以自身攻击力170%对目标造成伤害3次。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `魔王的傲慢`,
                    description: `以自身攻击力125%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `最出色的「伊布力斯」`,
                    description: `我方全体最大HP增加40%\n我方全体攻击力增加50%\n自身获得「当我方队伍恰好为5种属性时，开启『《王若先行》』」\n\n《王若先行》\n普攻伤害增加100%\n必杀技伤害增加50%\n造成伤害增加30%\n第1回合时，触发「使自身当前必杀技CD减少4回合」\n普攻时，触发「使自身以外我方全体获得《士亦相随》」\n必杀时，触发「使目标受到风属性伤害增加25%(5回合)」\n\n《士亦相随》\n普攻时，触发「《荣耀终归伊布力斯》」(1回合)\n必杀时，触发「《荣耀终归伊布力斯》」(2回合)\n\n《荣耀终归伊布力斯》\n使目标受到伤害增加5.5%(2回合)\n以自身攻击力10%使【盛暑沁夏 伊布力斯】攻击力增加(2回合)\n使【盛暑沁夏 伊布力斯】获得「普攻时，追加『以自身攻击力30%对目标造成伤害』(2回合)」\n使【盛暑沁夏 伊布力斯】获得「必杀时，追加『以自身攻击力60%对目标造成伤害』(1回合)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `受挑战者的自傲`,
                    description: `第1回合时，触发「使自身免疫必杀技CD变动效果(50回合)」(触发1次後清除)\n防御时，触发「使自身《令万物折服的王者之威》层数减少1层」\n被攻击时，触发「使我方全体攻击力增加50%(4回合)(不可叠加)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `绝对的力量`,
                    description: `自身《令万物折服的王者之威》层数≥1层时，开启「对防御目标伤害增加110%」\n自身《令万物折服的王者之威》层数≥2层时，开启「普攻伤害增加100%」\n自身《令万物折服的王者之威》层数≥3层时，开启「必杀技伤害增加50%」\n自身《令万物折服的王者之威》层数=4层时，开启「造成伤害增加30%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `「魔王」的真义`,
                    description: `自身《令万物折服的王者之威》层数=4层时，开启「每经过4回合时，触发『《魔王领域》』」\n\n《魔王领域》\n使敌方全体受到伤害增加30%(4回合)\n使敌方全体受到风属性伤害增加25%(4回合)\n使敌方全体防御减伤减少50%(1回合)\n使敌方全体获得「被攻击时，触发『使自身进入防御状态』(1回合)(触发1次後清除)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `伤害+`,
                    description: `使自身造成伤害增加7.5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹`,
                    description: `使自身免疫麻痹`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Final Flame: Rose Rondo`,
                    description: `Gain yourself 1/2/3/4 stacks of "Dominance Incarnate" (max 4 stacks), decrease Damage Taken by 15% for 4 turns, then damage the target 3 times (110/125/140/155% Attack Power). CD:4\n\nBond 5: Gain yourself 4 stacks of "Dominance Incarnate" (max 4 stacks), you won't be affected by the "Dominance Incarnate stacks decrease effect" for 4 turns, decrease the Damage Taken by 15% for 4 turns, then damage the target 3 times (170% Attack Power). CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Final Flame: Rose Rondo`,
                    description: `Gain yourself 1 stack of "Dominance Incarnate" (max 4 stacks), decrease Damage Taken by 15% for 4 turns, then damage the target 3 times (110% Attack Power). CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Final Flame: Rose Rondo`,
                    description: `Gain yourself 2 stacks of "Dominance Incarnate" (max 4 stacks), decrease Damage Taken by 15% for 4 turns, then damage the target 3 times (125% Attack Power). CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Final Flame: Rose Rondo`,
                    description: `Gain yourself 3 stacks of "Dominance Incarnate" (max 4 stacks), decrease Damage Taken by 15% for 4 turns, then damage the target 3 times (140% Attack Power). CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Final Flame: Rose Rondo`,
                    description: `Gain yourself 4 stacks of "Dominance Incarnate" (max 4 stacks), decrease Damage Taken by 15% for 4 turns, then damage the target 3 times (155% Attack Power). CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Final Flame: Rose Rondo`,
                    description: `Gain yourself 4 stacks of "Dominance Incarnate" (max 4 stacks), you won't be affected by the "Dominance Incarnate stacks decrease effect" for 4 turns, decrease the Damage Taken by 15% for 4 turns, then damage the target 3 times (170% Attack Power). CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Archdemon's Arrogance`,
                    description: `Damage the target (125% Attack Power)`
                },
                [SkillType.LEADER]: {
                    name: `The Ultimate "Iblis"`,
                    description: `Increase the party's max HP by 40%.\nIncrease the party's Attack Power by 50%.\nIncrease Damage Output by 30%.\nGain yourself the following effect: When there are exactly characters of 5 attributes in the party, activate "If the King Leads".\n\n"If the King Leads"\nIncrease Basic Attack Power by 100%.\nIncrease Ultimate Skill Power by 50%.\nOn the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 4 turns.\nOn Basic Attack, trigger the following effect: Other allies gain "Warriors Follow".\nOn Ultimate Skill, trigger the following effect: Increase the target's Damage Taken from Wind attacks by 25% for 5 turns.\n\n"Warriors Follow"\nOn Basic Attack, trigger "All Glory to Iblis" for 1 turn.\nOn Ultimate Skill, trigger "All Glory to Iblis" for 2 turns.\n\n"All Glory to Iblis"\nTarget takes 5.5% more damage for 2 turns.\nIncrease Scalding Summer Iblis's Attack Power by 10% of your Attack Power for 2 turns.\nScalding Summer Iblis gains the following effect: On Basic Attack, deal additional damage to the target for 2 turns (30% Attack Power).\nScalding Summer Iblis gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (60% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Challenger's Pride`,
                    description: `On the 1st turn, trigger the following effect: Gain yourself immunity to CD changes for 50 turns (removes after triggering once).\nWhen in Guard Stance, trigger the following effect: Decrease your "Dominance Incarnate" stacks by 1.\nWhen attacked, trigger the following effect: Increase the party's Attack Power by 50% for 4 turns (non-stackable).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Absolute Power`,
                    description: `When your "Dominance Incarnate" stacks are ≥ 1, activate the following effect: Increase the Damage Output against targets in Guard Stance by 110%.\nWhen your "Dominance Incarnate" stacks are ≥ 2, activate the following effect: Increase Basic Attack Power by 100%.\nWhen your "Dominance Incarnate" stacks are ≥ 3, activate the following effect: Increase Ultimate Skill Power by 50%.\nWhen your "Dominance Incarnate" stacks are = 4, activate the following effect: Increase Damage Output by 30%.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `True Meaning of "Archdemon"`,
                    description: `When your "Dominance Incarnate" stacks are = 4, activate the following effect: After every 4 turns, trigger "Archdemon's Domain".\n\n"Archdemon's Domain"\nIncrease all enemies' Damage Taken by 30% for 4 turns.\nIncrease all enemies' Damage Taken from Wind attacks by 25% for 4 turns.\nDecrease all enemies' defense buff effects by 50% for 1 turn.\nAll enemies gain the following effect: When attacked, trigger the following effect: Enter Guard Stance for 1 turn (removes after triggering once).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage+`,
                    description: `Increase your damage output by 7.5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity`,
                    description: `Gain immunity to Paralysis.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `終焔・薔薇の輪舞`,
                    description: `自分が《万物を従える王者の威厳》を1/2/3/4スタック獲得し(最高4スタック)、受けるダメージが15%減少し(4ターン)、自分の110/125/140/155%の攻撃力でターゲットに3回ダメージを与える[CD:4]\n\nLv5: 自分が《万物を従える王者の威厳》を4スタック獲得し(最高4スタック)、「《万物を従える王者の威厳》のスタック数を減少させる効果」を無効にし(4ターン)、受けるダメージが15%減少し(4ターン)、自分の170%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `終焔・薔薇の輪舞`,
                    description: `自分が《万物を従える王者の威厳》を1スタック獲得し(最高4スタック)、受けるダメージが15%減少し(4ターン)、自分の110%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `終焔・薔薇の輪舞`,
                    description: `自分が《万物を従える王者の威厳》を2スタック獲得し(最高4スタック)、受けるダメージが15%減少し(4ターン)、自分の125%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `終焔・薔薇の輪舞`,
                    description: `自分が《万物を従える王者の威厳》を3スタック獲得し(最高4スタック)、受けるダメージが15%減少し(4ターン)、自分の140%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `終焔・薔薇の輪舞`,
                    description: `自分が《万物を従える王者の威厳》を4スタック獲得し(最高4スタック)、受けるダメージが15%減少し(4ターン)、自分の155%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `終焔・薔薇の輪舞`,
                    description: `自分が《万物を従える王者の威厳》を4スタック獲得し(最高4スタック)、「《万物を従える王者の威厳》のスタック数を減少させる効果」を無効にし(4ターン)、受けるダメージが15%減少し(4ターン)、自分の170%の攻撃力でターゲットに3回ダメージを与える[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `魔王の傲慢`,
                    description: `自分の125%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `最強の「イブリース」`,
                    description: `味方全体の最大HPが40%増加する\n味方全体の攻撃力が50%増加する\n自分が「チーム内にちょうど5種類の属性のキャラがいる時《王の先駆け》を発動する」を獲得する\n\n《王の先駆け》\n通常攻撃ダメージが100%増加する\n必殺技ダメージが50%増加する\n与えるダメージが30%増加する\n1ターン目に「自分の現在の必殺技CDを4ターン減少させる」を誘発する\n通常攻撃時「自分以外の味方全体が《王に従う者》を獲得する」を誘発する\n必殺技攻撃時「ターゲットが受ける風属性ダメージを25%増加させる(5ターン)」を誘発する\n\n《王に従う者》\n通常攻撃時《栄光はイブリースに帰す》を誘発する(1ターン)\n必殺技攻撃時《栄光はイブリースに帰す》を誘発する(2ターン)\n\n《栄光はイブリースに帰す》\nターゲットの受けるダメージを5.5%増加させる(2ターン)\n自分の攻撃力の10%分【真夏の清涼 イブリース】の攻撃力を増加させる(2ターン)\n【真夏の清涼 イブリース】が「通常攻撃時『自分の30%の攻撃力でターゲットにダメージを与える』を追加する(2ターン)」を獲得する\n【真夏の清涼 イブリース】が「必殺技攻撃時『自分の60%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `挑戦を受けるプライド`,
                    description: `1ターン目に「自分の必殺技CDを変動させる効果を無効にする(50ターン)」を誘発する(誘発1回後に解除)\n防御時「自分の《万物を従える王者の威厳》のスタック数を1減少させる」を誘発する\n攻撃を受けた時「味方全体の攻撃力を50%増加させる(4ターン)(スタック不可)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `絶対的な力`,
                    description: `自分の《万物を従える王者の威厳》のスタック数が≧1の時「防御中のターゲットに与えるダメージが110%増加する」を発動する\n自分の《万物を従える王者の威厳》のスタック数が≧2の時「通常攻撃ダメージが100%増加する」を発動する\n自分の《万物を従える王者の威厳》のスタック数が≧3の時「必殺技ダメージが50%増加する」を発動する\n自分の《万物を従える王者の威厳》のスタック数が=4の時「与えるダメージが30%増加する」を発動する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `「魔王」の真義`,
                    description: `自分の《万物を従える王者の威厳》のスタック数が=4の時「4ターンごとに《魔王の領域》を誘発する」を発動する\n\n《魔王の領域》\n敵全体の受けるダメージを30%増加させる(4ターン)\n敵全体の受ける風属性ダメージを25%増加させる(4ターン)\n敵全体の防御によるダメージ減少効果を50%減少させる(1ターン)\n敵全体が「攻撃を受けた時『自分を防御状態にする』を誘発する(1ターン)(誘発1回後に解除)」を獲得する`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ+`,
                    description: `自分の与えるダメージを7.5%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `麻痺無効`,
                    description: `自分を麻痺無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `최후의 불꽃・장미의 춤`,
                    description: `자신은 1/2/3/4중첩의 《만물을 굴복시키는 왕자의 위엄》 획득(최대 4중첩), 받는 데미지 15% 감소(4턴), 다시 자신의 공격 데미지의 110/125/140/155%만큼 타깃에게 3회 데미지 [CD: 4]\n\n Lv5: 자신은 4중첩의 《만물을 굴복시키는 왕자의 위엄》 획득(최대 4중첩), 「《만물을 굴복시키는 왕자의 위엄》중첩수 감소 효과」의 영향을 받지 않음(4턴), 받는 데미지 15% 감소(4턴), 다시 신의 공격 데미지의 170%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `최후의 불꽃・장미의 춤`,
                    description: `자신은 1중첩의 《만물을 굴복시키는 왕자의 위엄》 획득(최대 4중첩), 받는 데미지 15% 감소(4턴), 다시 자신의 공격 데미지의 110%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `최후의 불꽃・장미의 춤`,
                    description: `자신은 2중첩의 《만물을 굴복시키는 왕자의 위엄》 획득(최대 4중첩), 받는 데미지 15% 감소(4턴), 다시 자신의 공격 데미지의 125%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `최후의 불꽃・장미의 춤`,
                    description: `자신은 3중첩의 《만물을 굴복시키는 왕자의 위엄》 획득(최대 4중첩), 받는 데미지 15% 감소(4턴), 다시 자신의 공격 데미지의 140%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `최후의 불꽃・장미의 춤`,
                    description: `자신은 4중첩의 《만물을 굴복시키는 왕자의 위엄》 획득(최대 4중첩), 받는 데미지 15% 감소(4턴), 다시 자신의 공격 데미지의 155%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `최후의 불꽃・장미의 춤`,
                    description: `자신은 4중첩의 《만물을 굴복시키는 왕자의 위엄》 획득(최대 4중첩), 「《만물을 굴복시키는 왕자의 위엄》중첩수 감소 효과」의 영향을 받지 않음(4턴), 받는 데미지 15% 감소(4턴), 다시 신의 공격 데미지의 170%만큼 타깃에게 3회 데미지 [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `마왕의 오만`,
                    description: `자신의 공격 데미지의 125%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `최강의 「이블리스」`,
                    description: `아군 전체의 최대 HP 40% 증가\n아군 전체의 공격 데미지 50% 증가\n자신은 「아군 팀에 5종 속성의 캐릭터가 있을 시, 『《선봉의 왕》』활성화」획득\n\n《선봉의 왕》\n일반 공격 데미지 100% 증가\n궁극기 데미지 50% 증가\n가하는 데미지 30% 증가\n첫 번째 턴 시작 시, 「자신의 현재 궁극기 CD 4턴 감소」트리거\n일반 공격 시, 「자신 이외의 아군 전체는《고결한 동행》획득」트리거\n궁극기 발동 시 「타깃이 받는 풍속성 데미지 25% 증가(5턴)」트리거\n\n《고결한 동행》\n일반 공격 시 「《영광의 귀환 이블리스》」트리거(1턴)\n궁극기 발동 시 「《영광의 귀환 이블리스》」트리거(2턴)\n\n《영광의 귀환 이블리스》\n타깃이 받는 데미지 5.5% 증가(2턴)\n자신의 공격 데미지의 10%만큼【청량한 여름 이블리스】의 공격 데미지 증가(2턴)\n【청량한 여름 이블리스】는 「일반 공격 시, 『자신의 공격 데미지의 30%만큼 타깃에게 데미지』추가(2턴)」획득\n【청량한 여름 이블리스】는「궁극기 발동 시,『자신의 공격 데미지의 60%만큼 타깃에게 데미지』추가(1턴)」획득`
                },
                [SkillType.PASSIVE_1]: {
                    name: `도전 응수자의 프라이드`,
                    description: `첫 번째 턴 시작 시, 「자신은 궁극기 CD 변동 효과 면역(50턴)」트리거(1회 트리거 후 제거)\n방어 시 「자신은《만물을 굴복시키는 왕자의 위엄》중첩수 1중첩 감소」트리거\n피격 시 「아군 전체의 공격 데미지 50% 증가(4턴)(중첩 불가)」트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `절대적인 힘`,
                    description: `자신의 《만물을 굴복시키는 왕자의 위엄》 중첩수≧1일 시,「방어하는 타깃에게 가하는 데미지 110% 증가」활성화\n자신의 《만물을 굴복시키는 왕자의 위엄》 중첩수≧2일 시,「일반 공격 데미지 100% 증가」활성화\n자신의 《만물을 굴복시키는 왕자의 위엄》 중첩수≧3일 시,「궁극기 데미지 50% 증가」활성화\n자신의 《만물을 굴복시키는 왕자의 위엄》 중첩수=4일 시, 「가하는 데미지 30% 증가」활성화`
                },
                [SkillType.PASSIVE_3]: {
                    name: `「마왕」의 진의`,
                    description: `자신의《만물을 굴복시키는 왕자의 위엄》중첩수=4일 시, 「4턴마다 『《마왕 영역》』트리거」활성화\n\n《마왕 영역》\n적 전체가 받는 데미지 30% 증가(4턴)\n적 전체가 받는 풍속성 데미지 25% 증가(4턴)\n적 전체의 방어 데미지 감소 효과 50% 감소(1턴)\n적 전체는「적이 궁극기 발동 시, 『자신은 방어 상태 진입』트리거(1턴)(1회 트리거 후 제거)」획득`
                },
                [SkillType.GENERAL_1]: {
                    name: `데미지+`,
                    description: `자신이 가하는 데미지 7.5% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `마비 면역`,
                    description: `자신에게 마비 면역 부여`
                }
            }
        }
    },
]