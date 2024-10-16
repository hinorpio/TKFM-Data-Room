import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10153: SkillSet[] =  [
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
                    name: `萌芽的廝殺慾望`,
                    description: `使自身獲得6/7/8/9/10層《向聖杯祈願》(最多10層)(每場戰鬥僅生效1次)，並使目標受到傷害增加15/20/20/25/25%(最多2層)，再使目標受到暗屬性傷害增加5/5/10/10/15%(最多2層)。CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `萌芽的廝殺慾望`,
                    description: `使自身獲得6層《向聖杯祈願》(最多10層)(每場戰鬥僅生效1次)，並使目標受到傷害增加15%(最多2層)，再使目標受到暗屬性傷害增加5%(最多2層)。CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `萌芽的廝殺慾望`,
                    description: `使自身獲得7層《向聖杯祈願》(最多10層)(每場戰鬥僅生效1次)，並使目標受到傷害增加20%(最多2層)，再使目標受到暗屬性傷害增加5%(最多2層)。CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `萌芽的廝殺慾望`,
                    description: `使自身獲得8層《向聖杯祈願》(最多10層)(每場戰鬥僅生效1次)，並使目標受到傷害增加20%(最多2層)，再使目標受到暗屬性傷害增加10%(最多2層)。CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `萌芽的廝殺慾望`,
                    description: `使自身獲得9層《向聖杯祈願》(最多10層)(每場戰鬥僅生效1次)，並使目標受到傷害增加25%(最多2層)，再使目標受到暗屬性傷害增加10%(最多2層)。CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `萌芽的廝殺慾望`,
                    description: `使自身獲得10層《向聖杯祈願》(最多10層)(每場戰鬥僅生效1次)，並使目標受到傷害增加25%(最多2層)，再使目標受到暗屬性傷害增加15%(最多2層)。CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `地獄烈焰`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `可愛又危險的死神`,
                    description: `我方全體最大HP增加40%\n我方全體攻擊力增加50%\n自身獲得「我方隊伍闇屬性角色有4人以上時，發動『《甜美卻殺意滿滿》』」\n自身以外我方全體獲得「我方隊伍闇屬性角色有4人以上時，發動『《讓我們享受廝殺吧》』」\n\n《甜美卻殺意滿滿》\n每經過1回合時，觸發「使自身獲得2層《高級萬聖甜點組》(最多6層)」\n攻擊力增加100%\n造成傷害效果增加50%\n被攻擊時，觸發「使目標受到闇屬性傷害增加5%(最多10層)」\n\n《讓我們享受廝殺吧》\n攻擊時，觸發「以自身攻擊力20%對目標造成傷害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `聖杯的迴響`,
                    description: `必殺時，觸發「使自身不受《向聖杯祈願》層數變動效果影響(50回合)」(觸發1次後解除)\n必殺時，根據自身《向聖杯祈願》的層數，觸發「以自身攻擊力30%對目標造成傷害」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `吃甜點不吐骨`,
                    description: `使自身以外我方全體獲得「被攻擊時，觸發『使我方【純真殺意　撒旦】獲得1層《高級萬聖甜點組》(最多6層)』\n行動後，觸發「清除自身《高級萬聖甜點組》的所有層數」\n普攻時，根據自身《高級萬聖甜點組》的層數，觸發「以自身攻擊力10%對目標造成傷害」\n自身《高級萬聖甜點組》層數≧2時，開啟「造成觸發技效果增加50%」\n自身《高級萬聖甜點組》層數≧4時，開啟「攻擊力增加40%」\n自身《高級萬聖甜點組》層數=6時，開啟「造成傷害增加30%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `不給糖就殺戮`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少3回合」\n使自身以外我方全體獲得「《惡作劇(生命威脅)》」\n\n《惡作劇(生命威脅)》\n普攻時，追加「以自身當前HP1%對自身造成真實傷害」\n必殺時，追加「以自身當前HP1%對自身造成真實傷害」`
                },
                [SkillType.GENERAL_1]: {
                    name: `觸發+`,
                    description: `使自身造成觸發技效果增加30%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潛)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `萌芽的厮杀欲望`,
                    description: `使自身获得6/7/8/9/10层《向圣杯祈愿》(最多10层)(每场战斗仅生效1次)，并使目标受到伤害增加15/20/20/25/25%(最多2层)，再使目标受到暗属性伤害增加5/5/10/10/15%(最多2层)。CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `萌芽的厮杀欲望`,
                    description: `使自身获得6层《向圣杯祈愿》(最多10层)(每场战斗仅生效1次)，并使目标受到伤害增加15%(最多2层)，再使目标受到暗属性伤害增加5%(最多2层)。CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `萌芽的厮杀欲望`,
                    description: `使自身获得7层《向圣杯祈愿》(最多10层)(每场战斗仅生效1次)，并使目标受到伤害增加20%(最多2层)，再使目标受到暗属性伤害增加5%(最多2层)。CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `萌芽的厮杀欲望`,
                    description: `使自身获得8层《向圣杯祈愿》(最多10层)(每场战斗仅生效1次)，并使目标受到伤害增加20%(最多2层)，再使目标受到暗属性伤害增加10%(最多2层)。CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `萌芽的厮杀欲望`,
                    description: `使自身获得9层《向圣杯祈愿》(最多10层)(每场战斗仅生效1次)，并使目标受到伤害增加25%(最多2层)，再使目标受到暗属性伤害增加10%(最多2层)。CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `萌芽的厮杀欲望`,
                    description: `使自身获得10层《向圣杯祈愿》(最多10层)(每场战斗仅生效1次)，并使目标受到伤害增加25%(最多2层)，再使目标受到暗属性伤害增加15%(最多2层)。CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `地狱烈焰`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `可爱又危险的死神`,
                    description: `我方全体最大HP增加40%\n我方全体攻击力增加50%\n自身获得「我方队伍闇属性角色有4人以上时，发动『《甜美却杀意满满》』」\n自身以外我方全体获得「我方队伍闇属性角色有4人以上时，发动『《让我们享受厮杀吧》』」\n\n《甜美却杀意满满》\n每经过1回合时，触发「使自身获得2层《高级万圣甜点组》(最多6层)」\n攻击力增加100%\n造成伤害效果增加50%\n被攻击时，触发「使目标受到闇属性伤害增加5%(最多10层)」\n\n《让我们享受厮杀吧》\n攻击时，触发「以自身攻击力20%对目标造成伤害」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `圣杯的回响`,
                    description: `必杀时，触发「使自身不受《向圣杯祈愿》层数变动效果影响(50回合)」(触发1次後解除)\n必杀时，根据自身《向圣杯祈愿》的层数，触发「以自身攻击力30%对目标造成伤害」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `吃甜点不吐骨`,
                    description: `使自身以外我方全体获得「被攻击时，触发『使我方【纯真杀意　撒旦】获得1层《高级万圣甜点组》(最多6层)』\n行动後，触发「清除自身《高级万圣甜点组》的所有层数」\n普攻时，根据自身《高级万圣甜点组》的层数，触发「以自身攻击力10%对目标造成伤害」\n自身《高级万圣甜点组》层数≥2时，开启「造成触发技效果增加50%」\n自身《高级万圣甜点组》层数≥4时，开启「攻击力增加40%」\n自身《高级万圣甜点组》层数=6时，开启「造成伤害增加30%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `不给糖就杀戮`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少3回合」\n使自身以外我方全体获得「《恶作剧(生命威胁)》」\n\n《恶作剧(生命威胁)》\n普攻时，追加「以自身当前HP1%对自身造成真实伤害」\n必杀时，追加「以自身当前HP1%对自身造成真实伤害」`
                },
                [SkillType.GENERAL_1]: {
                    name: `触发+`,
                    description: `使自身造成触发技效果增加30%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默 (12潜)`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Budding Kill Lust`,
                    description: `Gain yourself 6/7/8/9/10 stacks of "Wish to the Grail" (max 10 stacks) (takes effect once per battle), increase the target's Damage Taken by 15/20/20/25/25% (max 2 stacks), then increase the target's Damage Taken from Dark attacks by 5/5/10/10/15% (max 2 stacks). CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `Budding Kill Lust`,
                    description: `Gain yourself 6 stacks of "Wish to the Grail" (max 10 stacks) (takes effect once per battle), increase the target's Damage Taken by 15% (max 2 stacks), then increase the target's Damage Taken from Dark attacks by 5% (max 2 stacks). CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `Budding Kill Lust`,
                    description: `Gain yourself 7 stacks of "Wish to the Grail" (max 10 stacks) (takes effect once per battle), increase the target's Damage Taken by 20% (max 2 stacks), then increase the target's Damage Taken from Dark attacks by 5% (max 2 stacks). CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `Budding Kill Lust`,
                    description: `Gain yourself 8 stacks of "Wish to the Grail" (max 10 stacks) (takes effect once per battle), increase the target's Damage Taken by 20% (max 2 stacks), then increase the target's Damage Taken from Dark attacks by 10% (max 2 stacks). CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `Budding Kill Lust`,
                    description: `Gain yourself 9 stacks of "Wish to the Grail" (max 10 stacks) (takes effect once per battle), increase the target's Damage Taken by 25% (max 2 stacks), then increase the target's Damage Taken from Dark attacks by 10% (max 2 stacks). CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `Budding Kill Lust`,
                    description: `Gain yourself 10 stacks of "Wish to the Grail" (max 10 stacks) (takes effect once per battle), increase the target's Damage Taken by 25% (max 2 stacks), then increase the target's Damage Taken from Dark attacks by 15% (max 2 stacks). CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `Hellfire`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Cute Reaper`,
                    description: `Increase the party's max HP by 40%.\nIncrease the party's Attack Power by 50%.\nGain yourself the following effect: When there are 4 or more Dark allies in the party, activate "Sweet Yet Deadly".\nGain other allies the following effect: When there are 4 or more Dark allies in the party, activate "Enjoy the Slaughter".\n\n"Sweet Yet Deadly"\nAfter every turn, trigger the following effect: Gain yourself 2 stacks of "Halloween Desserts" (max 6 stacks).\nIncrease Attack Power by 100%.\nIncrease the effect of damage buff by 50%.\nWhen attacked, trigger the following effect: Increase the target's Damage Taken from Dark attacks by 5% (max 10 stacks).\n\n"Enjoy the Slaughter"\nOn Attack, trigger the following effect: Damage the target (20% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Grail Echo`,
                    description: `On Ultimate Skill, trigger the following effect: You won't be affected by the stack changes of "Wish to the Grail" for 50 turns (removes after triggering once).\nOn Ultimate Skill, trigger the following effect based on your stacks of "Wish to the Grail": Damage the target (30% Attack Power).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Sweet Revenge`,
                    description: `Gain other allies the following effect: When attacked, trigger the following effect: Gain the allied Genuine Murderess Satan 1 stack of "Halloween Desserts" (max 6 stacks).\nAfter performing an action, trigger the following effect: Remove all your "Halloween Desserts" stacks.\nOn Basic Attack, trigger the following effect based on your "Halloween Desserts" stacks: Damage the target (10% Attack Power).\nWhen your "Halloween Desserts" stacks are ≧2, activate "increase trigger ability effects by 50%".\nWhen your "Halloween Desserts" stacks are ≧4, activate "increase Attack Power by 40%".\nWhen your "Halloween Desserts" stacks are =6, activate "increase Damage Output by 30%".`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Trick or Slaughter`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 3 turns.\nGain other allies "Prank (Life Threat)".\n\n"Prank (Life Threat)"\nOn Basic Attack, deal additional True Damage to yourself for 1% of your current HP.\nOn Ultimate Skill, deal additional True Damage to yourself for 1% of your current HP.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Trigger+`,
                    description: `Increase your trigger ability effects by 30%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain immunity to Silence`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `芽生える殺意`,
                    description: `自分が6/7/8/9/10スタックの《聖杯への祈願》を獲得し(最大10スタック)(各バトルで1回のみ有効)、ターゲットの受けるダメージを15/20/20/25/25%増加させ(最大2スタック)、ターゲットが受ける闇属性ダメージを5/5/10/10/15%増加させる(最大2スタック)[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `芽生える殺意`,
                    description: `自分が6スタックの《聖杯への祈願》を獲得し(最大10スタック)(各バトルで1回のみ有効)、ターゲットの受けるダメージを15%増加させ(最大2スタック)、ターゲットが受ける闇属性ダメージを5%増加させる(最大2スタック)[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `芽生える殺意`,
                    description: `自分が7スタックの《聖杯への祈願》を獲得し(最大10スタック)(各バトルで1回のみ有効)、ターゲットの受けるダメージを20%増加させ(最大2スタック)、ターゲットが受ける闇属性ダメージを5%増加させる(最大2スタック)[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `芽生える殺意`,
                    description: `自分が8スタックの《聖杯への祈願》を獲得し(最大10スタック)(各バトルで1回のみ有効)、ターゲットの受けるダメージを20%増加させ(最大2スタック)、ターゲットが受ける闇属性ダメージを10%増加させる(最大2スタック)[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `芽生える殺意`,
                    description: `自分が9スタックの《聖杯への祈願》を獲得し(最大10スタック)(各バトルで1回のみ有効)、ターゲットの受けるダメージを25%増加させ(最大2スタック)、ターゲットが受ける闇属性ダメージを10%増加させる(最大2スタック)[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `芽生える殺意`,
                    description: `自分が10スタックの《聖杯への祈願》を獲得し(最大10スタック)(各バトルで1回のみ有効)、ターゲットの受けるダメージを25%増加させ(最大2スタック)、ターゲットが受ける闇属性ダメージを15%増加させる(最大2スタック)[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `地獄の烈火`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `可愛くて危険な死神`,
                    description: `味方全体の最大HPが40%増加する\n味方全体の攻撃力が50%増加する\n自分が「チーム内に闇属性のキャラが4人以上いる時《甘美な殺意》を発動する」を獲得する\n自分以外の味方全体が「チーム内に闇属性のキャラが4人以上いる時《殺し合いを楽しみましょう》を発動する」を獲得する\n\n《甘美な殺意》\n1ターン毎に「自分が2スタックの《ハロウィン高級デザートセット》を獲得する(最大6スタック)」を誘発する\n攻撃力が100%増加する\n与えるダメージが50%増加する\n攻撃を受けた時「ターゲットが受ける闇属性ダメージを5%増加させる(最大10スタック)」を誘発する\n\n《殺し合いを楽しみましょう》\n攻撃時「自分の20%の攻撃力でターゲットにダメージを与える」を誘発する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `聖杯の反響`,
                    description: `必殺技攻撃時「自分が《聖杯への祈願》のスタック数変動効果の影響を受けなくなる(50ターン)」を誘発する(誘発1回後に解除)\n必殺技攻撃時、自分の《聖杯への祈願》のスタック数に応じて「自分の30%の攻撃力でターゲットにダメージを与える」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `スイーツ狩り`,
                    description: `自分以外の味方全体が「攻撃を受けた時『味方の【ピュアな殺意 サタン】が1スタックの《ハロウィン高級デザートセット》を獲得する(最大6スタック)』を誘発する」を獲得する\n行動後「自分の《ハロウィン高級デザートセット》のスタック数をすべて消す」を誘発する\n通常攻撃時、自分の《ハロウィン高級デザートセット》のスタック数に応じて「自分の10%の攻撃力でターゲットにダメージを与える」を誘発する\n《ハロウィン高級デザートセット》スタック数が≧2スタックの時「誘発スキル効果が50%増加する」を発動する\n《ハロウィン高級デザートセット》スタック数が≧4スタックの時「攻撃力が40%増加する」を発動する\n《ハロウィン高級デザートセット》スタック数=6スタックの時「与えるダメージが30%増加する」を発動する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `お菓子をくれなきゃ殺すぞ`,
                    description: `1ターン目に「自分の現在の必殺技CDを3ターン減少させる」を誘発する\n自分以外の味方全体が《イタズラ(命の危険)》を獲得する\n\n《イタズラ(命の危険)》\n通常攻撃時「自分の現在のHPの1%分自分に確定ダメージを与える」を追加する\n必殺技攻撃時「自分の現在のHPの1%分自分に確定ダメージを与える」を追加する`
                },
                [SkillType.GENERAL_1]: {
                    name: `誘発+`,
                    description: `自分の誘発スキル効果を30%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `싹트는 살육 욕망`,
                    description: `자신은 6/7/8/9/10중첩의 《성배를 향한 기도》획득(최대 10중첩)(각 전투에서 1회만 적용), 타깃이 받는 데미지 15/20/20/25/25% 증가(최대 2중첩), 다시 타깃이 받는 암속성 데미지 5/5/10/10/15% 증가(최대 2중첩) [CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `싹트는 살육 욕망`,
                    description: `자신은 6중첩의 《성배를 향한 기도》획득(최대 10중첩)(각 전투에서 1회만 적용), 타깃이 받는 데미지 15% 증가(최대 2중첩), 다시 타깃이 받는 암속성 데미지 5% 증가(최대 2중첩) [CD: 3]`
                },
                [SkillType.SKILL_2]: {
                    name: `싹트는 살육 욕망`,
                    description: `자신은 7중첩의 《성배를 향한 기도》획득(최대 10중첩)(각 전투에서 1회만 적용), 타깃이 받는 데미지 20% 증가(최대 2중첩), 다시 타깃이 받는 암속성 데미지 5% 증가(최대 2중첩) [CD: 3]`
                },
                [SkillType.SKILL_3]: {
                    name: `싹트는 살육 욕망`,
                    description: `자신은 8중첩의 《성배를 향한 기도》획득(최대 10중첩)(각 전투에서 1회만 적용), 타깃이 받는 데미지 20% 증가(최대 2중첩), 다시 타깃이 받는 암속성 데미지 10% 증가(최대 2중첩) [CD: 3]`
                },
                [SkillType.SKILL_4]: {
                    name: `싹트는 살육 욕망`,
                    description: `자신은 9중첩의 《성배를 향한 기도》획득(최대 10중첩)(각 전투에서 1회만 적용), 타깃이 받는 데미지 25% 증가(최대 2중첩), 다시 타깃이 받는 암속성 데미지 10% 증가(최대 2중첩) [CD: 3]`
                },
                [SkillType.SKILL_5]: {
                    name: `싹트는 살육 욕망`,
                    description: `자신은 10중첩의 《성배를 향한 기도》획득(최대 10중첩)(각 전투에서 1회만 적용), 타깃이 받는 데미지 25% 증가(최대 2중첩), 다시 타깃이 받는 암속성 데미지 15% 증가(최대 2중첩) [CD: 3]`
                },
                [SkillType.ATTACK]: {
                    name: `지옥의 불길`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `귀엽고 위험한 사신`,
                    description: `아군 전체의 최대 HP 40% 증가\n아군 전체의 공격 데미지 50% 증가\n자신은 「팀에 아군 암속성 캐릭터가 4명 이상 있을 시, 『《달콤살벌한 살의》』발동」획득\n자신 이외의 아군은 「팀에 아군 암속성 캐릭터가 4명 이상 있을 시, 『《살육을 즐기자》』발동」획득\n\n《달콤살벌한 살의》\n1턴마다 「자신은 2중첩의《고급 할로윈 디저트 세트》획득(최대 6중첩)」 트리거\n공격 데미지 100% 증가\n가하는 데미지 효과 50% 증가\n피격 시 「타깃이 받는 암속성 데미지 5% 증가(최대 10중첩)」 트리거\n\n《살육을 즐기자》\n공격 시 「자신의 공격 데미지의 20%만큼 타깃에게 데미지」 트리거`
                },
                [SkillType.PASSIVE_1]: {
                    name: `성배의 메아리`,
                    description: `궁극기 발동 시 「자신은 《성배를 향한 기도》중첩수 변동 효과의 영향을 받지 않음(50턴)」 트리거(1회 트리거 후 제거)\n궁극기 발동 시 자신의 《성배를 향한 기도》중첩수에 따라 「자신의 공격 데미지의 30%만큼 타깃에게 데미지」 트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `디저트 폭식`,
                    description: `자신 이외의 아군은 「피격 시 『아군【순수한 살의 사탄】은 1중첩의 《고급 할로윈 디저트 세트》획득(최대 6중첩)』트리거」 획득\n행동 후 「자신의 《고급 할로윈 디저트 세트》의 모든 중첩 수 제거」 트리거\n일반 공격 시 자신의 《고급 할로윈 디저트 세트》의 중첩 수에 따라 「자신의 공격 데미지의 10%만큼 타깃에게 데미지」 트리거\n자신의 《고급 할로윈 디저트 세트》중첩 수 ≧ 2일 시 「가하는 트리거 스킬 효과 50% 증가」 활성화\n자신의 《고급 할로윈 디저트 세트》중첩 수 ≧ 4일 시 「공격 데미지 40% 증가」 활성화\n자신의 《고급 할로윈 디저트 세트》중첩 수 = 6일 시 「가하는 데미지 30% 증가」 활성화`
                },
                [SkillType.PASSIVE_3]: {
                    name: `트릿 오어 다이`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 3턴 감소」 트리거\n자신 이외의 아군은 「《장난(생명 위협)》」획득\n\n《장난(생명 위협)》\n일반 공격 시 「자신의 현재 HP 1%만큼 자신에게 확정 데미지」 추가\n궁극기 발동 시 「자신의 현재 HP 1%만큼 자신에게 확정 데미지」 추가`
                },
                [SkillType.GENERAL_1]: {
                    name: `트리거+`,
                    description: `자신의 트리거 스킬 효과 30% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 효과`
                }
            }
        }
    },
]