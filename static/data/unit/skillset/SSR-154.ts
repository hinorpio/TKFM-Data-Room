import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10183: SkillSet[] =  [
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
                    name: `本天才的反轉劇`,
                    description: `使自身攻擊力增加24/28/48/54/60%(最多3/3/2/2/2層)、造成傷害增加12/14/24/27/30%(最多3/3/2/2/2層)、必殺技傷害增加12/14/24/27/30%(最多3/3/2/2/2層)，並以自身攻擊力0/0/60/90/120%對目標造成傷害，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `本天才的反轉劇`,
                    description: `使自身攻擊力增加24%(最多3層)、造成傷害增加12%(最多3層)、必殺技傷害增加12%(最多3層)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `本天才的反轉劇`,
                    description: `使自身攻擊力增加28%(最多3層)、造成傷害增加14%(最多3層)、必殺技傷害增加14%(最多3層)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `本天才的反轉劇`,
                    description: `使自身攻擊力增加48%(最多2層)、造成傷害增加24%(最多2層)、必殺技傷害增加24%(最多2層)，並以自身攻擊力60%對目標造成傷害，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `本天才的反轉劇`,
                    description: `使自身攻擊力增加54%(最多2層)、造成傷害增加27%(最多2層)、必殺技傷害增加27%(最多2層)，並以自身攻擊力90%對目標造成傷害，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `本天才的反轉劇`,
                    description: `使自身攻擊力增加60%(最多2層)、造成傷害增加30%(最多2層)、必殺技傷害增加30%(最多2層)，並以自身攻擊力120%對目標造成傷害，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `辣妹出擊！`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `天才辣妹軍師`,
                    description: `我方全體最大HP增加45%\n自身獲得「每Wave的第1回合時，觸發『使敵方全體受到水屬性傷害增加30%(最多1層)』」\n自身獲得「我方隊伍水屬性角色有3人以上時，發動《辣妹Style♡》」\n自身以外我方全體獲得「我方隊伍水屬性角色有3人以上時，發動《閃亮登場☆》」\n\n《辣妹Style♡》\n攻擊力增加120%\n必殺技傷害增加60%\n造成傷害增加60%\n\n《閃亮登場☆》\n攻擊力增加50%\n必殺時，觸發「《本天才的無敵魅力～》」\n\n《本天才的無敵魅力～》\n使我方【俏皮辣妹 布蘭妮】獲得「必殺時，追加『以自身攻擊力30%對目標造成傷害』(1回合)」\n使目標受到必殺技傷害增加15%(1回合)\n使目標受到水屬性傷害增加10%(1回合)\n使目標受到傷害增加7.5%(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `辣妹的小小心機`,
                    description: `普攻時，觸發「《聯誼的無敵連續技》」\n\n《聯誼的無敵連續技》\n使目標受到水屬性傷害增加10%(4回合)\n使自身必殺技傷害增加8%(4回合)、造成傷害增加8%(4回合)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `追隨時尚乃是必須`,
                    description: `普攻時，觸發「使自身以外我方全體獲得《辣妹化妝小技巧》」\n必殺時，觸發「使自身清除《吸引目光》所有層數」\n自身《吸引目光》層數≧4層時，開啟「必殺時，追加『以自身攻擊力210%對目標造成傷害』」\n自身《吸引目光》層數≧8層時，開啟「必殺時，追加『以自身攻擊力140%對目標造成傷害』」\n自身《吸引目光》層數=12層時，開啟「必殺時，追加『以自身攻擊力70%對目標造成傷害』」\n\n《辣妹化妝小技巧》\n普攻時，觸發「使我方【俏皮辣妹 布蘭妮】獲得1層《吸引目光》(最多12層)」(1回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `對宅宅溫柔的辣妹`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少4回合」(觸發1次後清除)\n普攻時，觸發「使我方全體獲得攻擊力增加20%(4回合)」\n自身以外我方全體獲得《臉紅心跳》\n\n《臉紅心跳》\n防禦時，觸發「使我方【俏皮辣妹　布蘭妮】獲得2層《吸引目光》（最多12層)」`
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
                    name: `本天才的反转剧`,
                    description: `使自身攻击力增加24/28/48/54/60%(最多3/3/2/2/2层)、造成伤害增加12/14/24/27/30%(最多3/3/2/2/2层)、必杀技伤害增加12/14/24/27/30%(最多3/3/2/2/2层)，并以自身攻击力0/0/60/90/120%对目标造成伤害，CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `本天才的反转剧`,
                    description: `使自身攻击力增加24%(最多3层)、造成伤害增加12%(最多3层)、必杀技伤害增加12%(最多3层)，CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `本天才的反转剧`,
                    description: `使自身攻击力增加28%(最多3层)、造成伤害增加14%(最多3层)、必杀技伤害增加14%(最多3层)，CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `本天才的反转剧`,
                    description: `使自身攻击力增加48%(最多2层)、造成伤害增加24%(最多2层)、必杀技伤害增加24%(最多2层)，并以自身攻击力60%对目标造成伤害，CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `本天才的反转剧`,
                    description: `使自身攻击力增加54%(最多2层)、造成伤害增加27%(最多2层)、必杀技伤害增加27%(最多2层)，并以自身攻击力90%对目标造成伤害，CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `本天才的反转剧`,
                    description: `使自身攻击力增加60%(最多2层)、造成伤害增加30%(最多2层)、必杀技伤害增加30%(最多2层)，并以自身攻击力120%对目标造成伤害，CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `辣妹出击！`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `天才辣妹军师`,
                    description: `我方全体最大HP增加45%\n自身获得「每Wave的第1回合时，触发『使敌方全体受到水属性伤害增加30%(最多1层)』」\n自身获得「我方队伍水属性角色有3人以上时，发动《辣妹Style♡》」\n自身以外我方全体获得「我方队伍水属性角色有3人以上时，发动《闪亮登场☆》」\n\n《辣妹Style♡》\n攻击力增加120%\n必杀技伤害增加60%\n造成伤害增加60%\n\n《闪亮登场☆》\n攻击力增加50%\n必杀时，触发「《本天才的无敌魅力～》」\n\n《本天才的无敌魅力～》\n使我方【俏皮辣妹 布兰妮】获得「必杀时，追加『以自身攻击力30%对目标造成伤害』(1回合)」\n使目标受到必杀技伤害增加15%(1回合)\n使目标受到水属性伤害增加10%(1回合)\n使目标受到伤害增加7.5%(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `辣妹的小小心机`,
                    description: `普攻时，触发「《联谊的无敌连续技》」\n\n《联谊的无敌连续技》\n使目标受到水属性伤害增加10%(4回合)\n使自身必杀技伤害增加8%(4回合)、造成伤害增加8%(4回合)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `追随时尚乃是必须`,
                    description: `普攻时，触发「使自身以外我方全体获得《辣妹化妆小技巧》」\n必杀时，触发「使自身清除《吸引目光》所有层数」\n自身《吸引目光》层数≧4层时，开启「必杀时，追加『以自身攻击力210%对目标造成伤害』」\n自身《吸引目光》层数≧8层时，开启「必杀时，追加『以自身攻击力140%对目标造成伤害』」\n自身《吸引目光》层数=12层时，开启「必杀时，追加『以自身攻击力70%对目标造成伤害』」\n\n《辣妹化妆小技巧》\n普攻时，触发「使我方【俏皮辣妹 布兰妮】获得1层《吸引目光》(最多12层)」(1回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `对宅宅温柔的辣妹`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少4回合」(触发1次后清除)\n普攻时，触发「使我方全体获得攻击力增加20%(4回合)」\n自身以外我方全体获得《脸红心跳》\n\n《脸红心跳》\n防御时，触发「使我方【俏皮辣妹　布兰妮】获得2层《吸引目光》（最多12层)」`
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
                    name: `Genius Reversal Drama`,
                    description: `Increase your Attack Power by 24/28/48/54/60% (max 3/3/2/2/2 stacks), increase Damage Output by 12/14/24/27/30% (max 3/3/2/2/2 stacks), and increase Ultimate Skill Power by 12/14/24/27/30% (max 3/3/2/2/2 stacks), then damage the target (0/0/60/90/120% Attack Power). CD: 4`
                },
                [SkillType.SKILL_1]: {
                    name: `Genius Reversal Drama`,
                    description: `Increase your Attack Power by 24% (max 3 stacks), increase Damage Output by 12% (max 3 stacks), and increase Ultimate Skill Power by 12% (max 3 stacks). CD: 4`
                },
                [SkillType.SKILL_2]: {
                    name: `Genius Reversal Drama`,
                    description: `Increase your Attack Power by 28% (max 3 stacks), increase Damage Output by 14% (max 3 stacks), and increase Ultimate Skill Power by 14% (max 3 stacks). CD: 4`
                },
                [SkillType.SKILL_3]: {
                    name: `Genius Reversal Drama`,
                    description: `Increase your Attack Power by 48% (max 2 stacks), increase Damage Output by 24% (max 2 stacks), and increase Ultimate Skill Power by 24% (max 2 stacks), then damage the target (60% Attack Power). CD: 4`
                },
                [SkillType.SKILL_4]: {
                    name: `Genius Reversal Drama`,
                    description: `Increase your Attack Power by 54% (max 2 stacks), increase Damage Output by 27% (max 2 stacks), and increase Ultimate Skill Power by 27% (max 2 stacks), then damage the target (90% Attack Power). CD: 4`
                },
                [SkillType.SKILL_5]: {
                    name: `Genius Reversal Drama`,
                    description: `Increase your Attack Power by 60% (max 2 stacks), increase Damage Output by 30% (max 2 stacks), and increase Ultimate Skill Power by 30% (max 2 stacks), then damage the target (120% Attack Power). CD: 4`
                },
                [SkillType.ATTACK]: {
                    name: `Gyaru Strike!`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Genius Gyaru General`,
                    description: `Increase the party's max HP by 45%.\nGain yourself the following effect: On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken from Water attacks by 30% (max 1 stack).\nGain yourself the following effect: When there are 3 or more Water allies in the party, activate "Hot Gyaru Style ♡".\nGain other allies the following effect: When there are 3 or more Water allies in the party, activate "Sparkling Debut ☆".\n\nHot Gyaru Style ♡\nIncrease Attack Power by 120%.\nIncrease Ultimate Skill Power by 60%.\nIncrease Damage Output by 60%.\n\nSparkling Debut ☆\nIncrease Attack Power by 50%.\nOn Ultimate Skill, trigger "Genius Invincible Charm~".\n\nGenius Invincible Charm~\nGain Playful Gyaru Britney the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (30% Attack Power).\nIncrease the target's Damage Taken from Ultimate Skills by 15% for 1 turn.\nIncrease the target's Damage Taken from Water attacks by 10% for 1 turn.\nIncrease the target's Damage Taken by 7.5% for 1 turn.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Gyaru's Little Scheme`,
                    description: `On Basic Attack, trigger "Epic Flirt Combo".\n\nEpic Flirt Combo\nIncrease the target's Damage Taken from Water attacks by 10% for 4 turns.\nIncrease your Ultimate Skill Power by 8% for 4 turns and Damage Output by 8% for 4 turns.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Fashion Is a Must`,
                    description: `On Basic Attack, trigger the following effect: Gain other allies "Gal Makeup Trick".\nOn Ultimate Skill, trigger the following effect: Remove all your "Eye-Catching Charm" stacks.\nWhen your "Eye-Catching Charm" stacks are ≥ 4, activate "On Ultimate Skill deal additional damage to the target (210% Attack Power)".\nWhen your "Eye-Catching Charm" stacks are ≥ 8, activate "On Ultimate Skill deal additional damage to the target (140% Attack Power)".\nWhen your "Eye-Catching Charm" stacks are = 12, activate "On Ultimate Skill deal additional damage to the target (70% Attack Power)".\n\nGal Makeup Trick\nOn Basic Attack, trigger the following effect: Allied [Playful Gyaru Britney] gains 1 stack of "Eye-Catching Charm" for 1 turn (max 12 stacks).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Gentle Gyaru for Otakus`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD for 4 turns (removes after triggering once).\nOn Basic Attack, trigger the following effect: Increase the party's Attack Power by 20% for 4 turns.\nGain other allies "Blushing Heartbeat".\n\nBlushing Heartbeat\nWhen in Guard Stance, trigger the following effect: Gain Playful Gyaru Britney 2 stacks of "Eye-Catching Charm" (max 12 stacks).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack+`,
                    description: `Increase your Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain yourself Immunity to Silence.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `天才の反転劇`,
                    description: `自分の攻撃力を24/28/48/54/60%増加させ(最高3/3/2/2/2スタック)、与えるダメージを12/14/24/27/30%増加させ(最高3/3/2/2/2スタック)、必殺技ダメージを12/14/24/27/30%増加させ(最高3/3/2/2/2スタック)、自分の0/0/60/90/120%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `天才の反転劇`,
                    description: `自分の攻撃力を24%増加させ(最高3スタック)、与えるダメージを12%増加させ(最高3スタック)、必殺技ダメージを12%増加させる(最高3スタック)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `天才の反転劇`,
                    description: `自分の攻撃力を28%増加させ(最高3スタック)、与えるダメージを14%増加させ(最高3スタック)、必殺技ダメージを14%増加させる(最高3スタック)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `天才の反転劇`,
                    description: `自分の攻撃力を48%増加させ(最高2スタック)、与えるダメージを24%増加させ(最高2スタック)、必殺技ダメージを24%増加させ(最高2スタック)、自分の60%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `天才の反転劇`,
                    description: `自分の攻撃力を54%増加させ(最高2スタック)、与えるダメージを27%増加させ(最高2スタック)、必殺技ダメージを27%増加させ(最高2スタック)、自分の90%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `天才の反転劇`,
                    description: `自分の攻撃力を60%増加させ(最高2スタック)、与えるダメージを30%増加させ(最高2スタック)、必殺技ダメージを30%増加させ(最高2スタック)、自分の120%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `ギャル出撃！`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `天才ギャル軍師`,
                    description: `味方全体の最大HPが45%増加する\n自分が「毎Waveの1ターン目に『敵全体が受ける水属性ダメージを30%増加させる(最高1スタック)』を誘発する」を獲得する\n自分が「味方のチーム内に水属性キャラが3人以上いる時《ギャルStyle♡》を発動する」を獲得する\n自分以外の味方全体が「味方のチーム内に水属性キャラが3人以上いる時《キラキラ登場☆》を発動する」を獲得する\n\n《ギャルStyle♡》\n攻撃力が120%増加する\n必殺技ダメージが60%増加する\n与えるダメージが60%増加する\n\n《キラキラ登場☆》\n攻撃力が100%増加する\n必殺技攻撃時《天才の無敵の魅力～》を誘発する\n\n《天才の無敵の魅力～》\n味方の【お茶目ギャルブリトニー】が「必殺技攻撃時『自分の30%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する\nターゲットが受ける必殺技ダメージを15%増加させる(1ターン)\nターゲットが受ける水属性ダメージを10%増加させる(1ターン)\nターゲットの受けるダメージを7.5%増加させる(1ターン)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `ギャルのあざとさ`,
                    description: `通常攻撃時《合コンの無敵連続技》を誘発する\n\n《合コンの無敵連続技》\nターゲットが水属性から受けるダメージを10%増加させる(4ターン)\n自分の必殺技ダメージを8%増加させ(4ターン)、与えるダメージを8%増加させる(4ターン)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `おしゃれは必須`,
                    description: `通常攻撃時「自分以外の味方全体が《ギャルの化粧テク》を獲得する」を誘発する\n必殺技攻撃時「自分の《気を引く》のスタック数を全て消す」を誘発する\n自分の《気を引く》のスタック数が4以上の時「必殺技攻撃時『自分の210%の攻撃力でターゲットにダメージを与える』を追加する」を発動する\n自分の《気を引く》のスタック数が8以上の時「必殺技攻撃時『自分の140%の攻撃力でターゲットにダメージを与える』を追加する」を発動する\n自分の《気を引く》のスタック数がちょうど12の時「必殺技攻撃時『自分の70%の攻撃力でターゲットにダメージを与える』を追加する」を発動する\n\n《ギャルの化粧テク》\n通常攻撃時「味方の【お茶目ギャル ブリトニー】が1スタックの《気を引く》を獲得する(最高12スタック)」を誘発する(1ターン)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `オタクに優しいギャル`,
                    description: `1ターン目に「自分の現在の必殺技CDを4ターン減少させる」を誘発する(誘発1回後に解除)\n通常攻撃時「味方全体に『攻撃力が20%増加する(4ターン)』が獲得する」を誘発する\n自分以外の味方全体が《ドキドキ》を獲得する\n\n《ドキドキ》\n防御時「味方の【お茶目ギャル ブリトニー】が2スタックの《気を引く》を獲得する（最高12スタック）」を誘発する`
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
                    name: `이 천재의 반전극`,
                    description: `자신의 공격 데미지 24/28/48/54/60% 증가(최대 3/3/2/2/2중첩), 가하는 데미지 12/14/24/27/30% 증가(최대 3/3/2/2/2중첩), 궁극기 데미지 12/14/24/27/30% 증가(최대 3/3/2/2/2중첩), 자신의 공격 데미지의 0/0/60/90/120%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `이 천재의 반전극`,
                    description: `자신의 공격 데미지 24% 증가(최대 3중첩), 가하는 데미지 12% 증가(최대 3중첩), 궁극기 데미지 12% 증가(최대 3중첩) [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `이 천재의 반전극`,
                    description: `자신의 공격 데미지 28% 증가(최대 3중첩), 가하는 데미지 14% 증가(최대 3중첩), 궁극기 데미지 14% 증가(최대 3중첩) [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `이 천재의 반전극`,
                    description: `자신의 공격 데미지 48% 증가(최대 2중첩), 가하는 데미지 24% 증가(최대 2중첩), 궁극기 데미지 24% 증가(최대 2중첩), 자신의 공격 데미지의 60%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `이 천재의 반전극`,
                    description: `자신의 공격 데미지 54% 증가(최대 2중첩), 가하는 데미지 27% 증가(최대 2중첩), 궁극기 데미지 27% 증가(최대 2중첩), 자신의 공격 데미지의 90%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `이 천재의 반전극`,
                    description: `자신의 공격 데미지 60% 증가(최대 2중첩), 가하는 데미지 30% 증가(최대 2중첩), 궁극기 데미지 30% 증가(최대 2중첩), 자신의 공격 데미지의 120%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `갸루 출격!`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `천재 갸루 군사`,
                    description: `아군 전체의 최대 HP 45% 증가\n자신은 「각 웨이브의 첫 번째 턴에서『적 전체가 받는 수속성 데미지 30% 증가(최대 1중첩)』트리거」획득\n자신은 「팀에 수속성 캐릭터가 3명 이상 있을 경우 《갸루 Style♡》발동」획득\n자신 이외의 아군 전체는 「팀에 수속성 캐릭터가 3명 이상 있을 경우 《블링하게 등장☆》발동」획득\n\n《갸루 Style♡》\n공격 데미지 120% 증가\n궁극기 데미지 60% 증가\n가하는 데미지 60% 증가\n\n《블링하게 등장☆》\n공격 데미지 50% 증가\n궁극기 발동 시 「《천재의 무적 매력~》」트리거\n\n《천재의 무적 매력~》\n아군【짓궂은 갸루 브리트니】는 「궁극기 발동 시 『자신의 공격 데미지의 30%만큼 타깃에게 데미지』추가(1턴)」획득\n타깃이 받는 궁극기 데미지 15% 증가(1턴)\n타깃이 받는 수속성 데미지 10% 증가(1턴)\n타깃이 받는 데미지 7.5% 증가(1턴)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `갸루의 작은 술수`,
                    description: `일반 공격 시 「《소개팅 무적 콤보 스킬》」트리거\n\n《소개팅 무적 콤보 스킬》\n타깃이 받는 수속성 데미지 10% 증가(4턴)\n자신의 궁극기 데미지 8% 증가(4턴), 가하는 데미지 8% 증가(4턴)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `트렌드를 좇는 건 필수`,
                    description: `일반 공격 시 「자신 이외의 아군 전체는 《갸루 화장 스킬》 획득」 트리거\n궁극기 발동 시 「자신의 《이목 끌기》 모든 중첩수 제거」트리거\n자신의 《이목 끌기》 중첩수≧4일 시 「궁극기 발동 시 『자신의 공격 데미지의 210%만큼 타깃에게 데미지』 추가」 활성화\n자신의 《이목 끌기》 중첩수≧8일 시 「궁극기 발동 시 『자신의 공격 데미지의 140%만큼 타깃에게 데미지』 추가」 활성화\n자신의 《이목 끌기》 중첩수=12일 시 「궁극기 발동시 『자신의 공격 데미지의 70%만큼 타깃에게 데미지』 추가」 활성화\n\n《갸루 화장 스킬》\n일반 공격 시 「아군 【짓궂은 갸루 브리트니】는 1중첩의 《이목 끌기》 획득(최대 12중첩)」 트리거(1턴)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `오타쿠에게 다정한 갸루`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 4턴 감소」트리거(1회 트리거 후 제거)\n일반 공격 시 「아군 전체는 공격 데미지 20% 증가 획득(4턴)」트리거\n자신 이외의 아군 전체는 《두근두근 쿵쿵》획득\n\n《두근두근 쿵쿵》\n방어 시 「아군【짓궂은 갸루 브리트니】는 2중첩의 《이목 끌기》획득(최대 12중첩)」트리거`
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