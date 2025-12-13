import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10189: SkillSet[] =  [
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
                    name: `終焉—暴戾骨爪`,
                    description: `使自身攻擊力增加100/115/130/145/160%(2回合)，普攻傷害增加50/65/80/95/110%(2回合)、使目標受到火屬性傷害增加18/21/24/27/30%(2回合)、再使自身獲得「普攻時，觸發『使自身獲得0/0/1/2/3層《煉獄冥焰》(最多6層)』(2回合)」。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `終焉—暴戾骨爪`,
                    description: `使自身攻擊力增加100%(2回合)，普攻傷害增加50%(2回合)、使目標受到火屬性傷害增加18%(2回合)。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `終焉—暴戾骨爪`,
                    description: `使自身攻擊力增加115%(2回合)，普攻傷害增加65%(2回合)、使目標受到火屬性傷害增加21%(2回合)。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `終焉—暴戾骨爪`,
                    description: `使自身攻擊力增加130%(2回合)，普攻傷害增加80%(2回合)、使目標受到火屬性傷害增加24%(2回合)、再使自身獲得「普攻時，觸發『使自身獲得1層《煉獄冥焰》(最多6層)』(2回合)」。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `終焉—暴戾骨爪`,
                    description: `使自身攻擊力增加145%(2回合)，普攻傷害增加95%(2回合)、使目標受到火屬性傷害增加27%(2回合)、再使自身獲得「普攻時，觸發『使自身獲得2層《煉獄冥焰》(最多6層)』(2回合)」。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `終焉—暴戾骨爪`,
                    description: `使自身攻擊力增加160%(2回合)，普攻傷害增加110%(2回合)、使目標受到火屬性傷害增加30%(2回合)、再使自身獲得「普攻時，觸發『使自身獲得3層《煉獄冥焰》(最多6層)』(2回合)」。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `無情一擊`,
                    description: `以自身攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `喪失慾望的魔王`,
                    description: `我方全體最大HP增加50%\n我方全體獲得「我方隊伍攻擊者有2人以上時，發動『攻擊力減少500%』」(負面效果)\n使自身以外我方全體獲得「《冥焰蔓延》」\n\n《冥焰蔓延》\n攻擊力增加50%\n必殺時，觸發「使自身獲得『普攻時，觸發『使目標受到傷害增加5%(1回合)、受到普攻傷害增加10%(1回合)』(2回合)』」\n必殺時，觸發「使我方【死寂葬華 撒旦】獲得『必殺時，觸發『《被點燃的戰鬥慾》』(1回合)』」\n\n《被點燃的戰鬥慾》\n攻擊力增加35%(2回合)\n造成傷害增加10.5%(2回合)\n普攻傷害增加30%(2回合)\n普攻時，追加「以自身攻擊力52.5%對目標造成傷害」(2回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `憎恨無以燃燒`,
                    description: `攻擊力增加45%\n普攻時，追加「以自身當前HP1%對自身造成真實傷害，並使自身普攻傷害增加5%(最多10層)」(可觸發「被攻擊時」觸發效果)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `泯滅萬物`,
                    description: `被攻擊時，觸發「使自身獲得1層《煉獄冥焰》(最多6層)」\n必殺時，根據自身《煉獄冥焰》的層數，觸發「使自身獲得《冥焰猛擊》」\n必殺時，觸發「清除自身《煉獄冥焰》所有層數」\n\n《冥焰猛擊》\n造成傷害增加5%(2回合)\n普攻時，追加「以自身攻擊力52.5%對目標造成傷害」(2回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `無法尋回的慾望`,
                    description: `使我方全體獲得「被攻擊時，觸發『使我方【死寂葬華 撒旦】獲得1層《詛咒般的愛》(最多10層)』」\n自身《詛咒般的愛》≧2層時，開啟「攻擊力增加30%」\n自身《詛咒般的愛》≧6層時，開啟「對防禦目標傷害增加100%」\n自身《詛咒般的愛》=10層時，開啟「必殺時，觸發『使自身造成傷害增加30%(2回合)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻擊+`,
                    description: `使自身攻擊力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `终焉—暴戾骨爪`,
                    description: `使自身攻击力增加100/115/130/145/160%(2回合)，普攻伤害增加50/65/80/95/110%(2回合)、使目标受到火属性伤害增加18/21/24/27/30%(2回合)、再使自身获得「普攻时，触发『使自身获得0/0/1/2/3层《炼狱冥焰》(最多6层)』(2回合)」。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `终焉—暴戾骨爪`,
                    description: `使自身攻击力增加100%(2回合)，普攻伤害增加50%(2回合)、使目标受到火属性伤害增加18%(2回合)。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `终焉—暴戾骨爪`,
                    description: `使自身攻击力增加115%(2回合)，普攻伤害增加65%(2回合)、使目标受到火属性伤害增加21%(2回合)。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `终焉—暴戾骨爪`,
                    description: `使自身攻击力增加130%(2回合)，普攻伤害增加80%(2回合)、使目标受到火属性伤害增加24%(2回合)、再使自身获得「普攻时，触发『使自身获得1层《炼狱冥焰》(最多6层)』(2回合)」。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `终焉—暴戾骨爪`,
                    description: `使自身攻击力增加145%(2回合)，普攻伤害增加95%(2回合)、使目标受到火属性伤害增加27%(2回合)、再使自身获得「普攻时，触发『使自身获得2层《炼狱冥焰》(最多6层)』(2回合)」。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `终焉—暴戾骨爪`,
                    description: `使自身攻击力增加160%(2回合)，普攻伤害增加110%(2回合)、使目标受到火属性伤害增加30%(2回合)、再使自身获得「普攻时，触发『使自身获得3层《炼狱冥焰》(最多6层)』(2回合)」。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `无情一击`,
                    description: `以自身攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `丧失慾望的魔王`,
                    description: `我方全体最大HP增加50%\n我方全体获得「我方队伍攻击者有2人以上时，发动『攻击力减少500%』」(负面效果)\n使自身以外我方全体获得「《冥焰蔓延》」\n\n《冥焰蔓延》\n攻击力增加50%\n必杀时，触发「使自身获得『普攻时，触发『使目标受到伤害增加5%(1回合)、受到普攻伤害增加10%(1回合)』(2回合)』」\n必杀时，触发「使我方【死寂葬华 撒旦】获得『必杀时，触发『《被点燃的战斗慾》』(1回合)』」\n\n《被点燃的战斗慾》\n攻击力增加35%(2回合)\n造成伤害增加10.5%(2回合)\n普攻伤害增加30%(2回合)\n普攻时，追加「以自身攻击力52.5%对目标造成伤害」(2回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `憎恨无以燃烧`,
                    description: `攻击力增加45%\n普攻时，追加「以自身当前HP1%对自身造成真实伤害，并使自身普攻伤害增加5%(最多10层)」(可触发「被攻击时」触发效果)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `泯灭万物`,
                    description: `被攻击时，触发「使自身获得1层《炼狱冥焰》(最多6层)」\n必杀时，根据自身《炼狱冥焰》的层数，触发「使自身获得《冥焰勐击》」\n必杀时，触发「清除自身《炼狱冥焰》所有层数」\n\n《冥焰勐击》\n造成伤害增加5%(2回合)\n普攻时，追加「以自身攻击力52.5%对目标造成伤害」(2回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `无法寻回的慾望`,
                    description: `使我方全体获得「被攻击时，触发『使我方【死寂葬华 撒旦】获得1层《诅咒般的爱》(最多10层)』」\n自身《诅咒般的爱》≧2层时，开启「攻击力增加30%」\n自身《诅咒般的爱》≧6层时，开启「对防御目标伤害增加100%」\n自身《诅咒般的爱》=10层时，开启「必杀时，触发『使自身造成伤害增加30%(2回合)』」`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻击+`,
                    description: `使自身攻击力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Ravaging Bone Claw`,
                    description: `Increase your Attack Power by 100/115/130/145/160% for 2 turns, Basic Attack Power by 50/65/80/95/110% for 2 turns, and the target's Damage Taken from Fire attacks by 18/21/24/27/30% for 2 turns. Gain yourself the following effect for 2 turns: On Basic Attack, trigger the following effect: Gain yourself 0/0/1/2/3 stacks of "Purgatory Nether Flame" (max 6 stacks). CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Ravaging Bone Claw`,
                    description: `Increase your Attack Power by 100% for 2 turns, Basic Attack Power by 50% for 2 turns, and the target's Damage Taken from Fire attacks by 18% for 2 turns. CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Ravaging Bone Claw`,
                    description: `Increase your Attack Power by 115% for 2 turns, Basic Attack Power by 65% for 2 turns, and the target's Damage Taken from Fire attacks by 21% for 2 turns. CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Ravaging Bone Claw`,
                    description: `Increase your Attack Power by 130% for 2 turns, Basic Attack Power by 80% for 2 turns, and the target's Damage Taken from Fire attacks by 24% for 2 turns. Gain yourself the following effect for 2 turns: On Basic Attack, trigger the following effect: Gain yourself 1 stacks of "Purgatory Nether Flame" (max 6 stacks). CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Ravaging Bone Claw`,
                    description: `Increase your Attack Power by 145% for 2 turns, Basic Attack Power by 95% for 2 turns, and the target's Damage Taken from Fire attacks by 27% for 2 turns. Gain yourself the following effect for 2 turns: On Basic Attack, trigger the following effect: Gain yourself 2 stacks of "Purgatory Nether Flame" (max 6 stacks). CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Ravaging Bone Claw`,
                    description: `Increase your Attack Power by 160% for 2 turns, Basic Attack Power by 110% for 2 turns, and the target's Damage Taken from Fire attacks by 30% for 2 turns. Gain yourself the following effect: On Basic Attack, trigger the following effect: Gain yourself 3 stacks of "Purgatory Nether Flame" (max 6 stacks) for 2 turns. CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Ruthless Strike`,
                    description: `Damage the target (100% Attack Power).`
                },
                [SkillType.LEADER]: {
                    name: `Lustless Archdemon`,
                    description: `Increase the party's max HP by 50%.\nThe party gains the following effect: When there are 2 or more Attackers in the party, trigger "decrease Attack Power by 500%" (debuff). \nOther allies gain "Nether Flame Spread".\n\nNether Flame Spread\nIncrease Attack Power by 50%.\nOn Ultimate Skill, trigger the following effect: Gain yourself the following effect: On Basic Attack, trigger the following effect for 2 turns: Increase the target's Damage Taken by 5% for 1 turn and Damage Taken from Basic Attacks by 10% for 1 turn.\nOn Ultimate Skill, trigger the following effect: Burial Blossom Satan gains the following effect: On Ultimate Skill, trigger "Ignited Battle Lust" for 1 turn.\n\nIgnited Battle Lust\nIncrease Attack Power by 35% for 2 turns.\nIncrease Damage Output by 10.5% for 2 turns.\nIncrease Basic Attack Power by 30% for 2 turns.\nOn Basic Attack, deal additional damage to the target for 2 turns (52.5% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Fading Hatred Flame`,
                    description: `Increase Attack Power by 45%.\nOn Basic Attack, True Damage yourself for 1% of your current HP and increase your Basic Attack Power by 5% (max 10 stacks) (can trigger the "when attacked" trigger effect).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Annihilation of All`,
                    description: `When attacked, trigger the following effect: Gain yourself 1 stack of "Purgatory Nether Flame" (max 6 stacks).\nOn Ultimate Skill, based on your "Purgatory Nether Flame" stacks, trigger the following effect: Gain yourself "Nether Flame Strike".\nOn Ultimate Skill,  trigger the following effect: Remove all your "Purgatory Nether Flame" stacks.\n\nNether Flame Strike\nIncrease Damage Output by 5% for 2 turns.\nOn Basic Attack, deal additional damage to the target for 2 turns (52.5% Attack Power).`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Irretrievable Desire`,
                    description: `The party gains the following effect: When attacked, trigger the following effect: Burial Blossom Satan gains 1 stack of "Cursed Love" (max 10 stacks).\nWhen your "Cursed Love" stacks are ≥ 2, activate "Increase Attack Power by 30%".\nWhen your "Cursed Love" stacks are ≥ 6, activate "Increase the damage against targets in Guard Stance by 100%".\nWhen your "Cursed Love" stacks are = 10, activate "On Ultimate Skill, trigger the following effect: Increase your Damage Output by 30% for 2 turns".`
                },
                [SkillType.GENERAL_1]: {
                    name: `Attack+`,
                    description: `Increase your Attack Power by 10%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity`,
                    description: `Gain yourself immunity to Paralysis.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `終焉—残忍の爪`,
                    description: `自分の攻撃力を100/115/130/145/160%増加させ(2ターン)、通常攻撃ダメージを50/65/80/95/110%増加させ(2ターン)、ターゲットが受ける火属性ダメージを18/21/24/27/30%増加させ(2ターン)、さらに自分が「通常攻撃時『自分が0/0/1/2/3スタックの《煉獄の冥炎》を獲得する(最高6スタック)』を誘発する(2ターン)」を獲得する[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `終焉—残忍の爪`,
                    description: `自分の攻撃力を100%増加させ(2ターン)、通常攻撃ダメージを50%増加させ(2ターン)、ターゲットが受ける火属性ダメージを18%増加させる(2ターン)[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `終焉—残忍の爪`,
                    description: `自分の攻撃力を115%増加させ(2ターン)、通常攻撃ダメージを65%増加させ(2ターン)、ターゲットが受ける火属性ダメージを21%増加させる(2ターン)[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `終焉—残忍の爪`,
                    description: `自分の攻撃力を130%増加させ(2ターン)、通常攻撃ダメージを80%増加させ(2ターン)、ターゲットが受ける火属性ダメージを24%増加させ(2ターン)、さらに自分が「通常攻撃時『自分が1スタックの《煉獄の冥炎》を獲得する(最高6スタック)』を誘発する(2ターン)」を獲得する[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `終焉—残忍の爪`,
                    description: `自分の攻撃力を145%増加させ(2ターン)、通常攻撃ダメージを95%増加させ(2ターン)、ターゲットが受ける火属性ダメージを27%増加させ(2ターン)、さらに自分が「通常攻撃時『自分が2スタックの《煉獄の冥炎》を獲得する(最高6スタック)』を誘発する(2ターン)」を獲得する[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `終焉—残忍の爪`,
                    description: `自分の攻撃力を160%増加させ(2ターン)、通常攻撃ダメージを110%増加させ(2ターン)、ターゲットが受ける火属性ダメージを30%増加させ(2ターン)、さらに自分が「通常攻撃時『自分が3スタックの《煉獄の冥炎》を獲得する(最高6スタック)』を誘発する(2ターン)」を獲得する[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `無情の一撃`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `欲望無き魔王`,
                    description: `味方全体の最大HPが50%増加する\n味方全体が「味方チームにアタッカーが2人以上いる時『攻撃力が500%減少する』を発動する」を獲得する(デバフ効果)\n自分以外の味方が「《冥炎の蔓延》」を獲得する\n\n《冥炎の蔓延》\n攻撃力が50%増加する\n必殺技攻撃時「自分が『通常攻撃時「ターゲットが受けるダメージを5%増加させ(1ターン)、受ける通常攻撃ダメージを10%増加させる(1ターン)」を誘発する(2ターン)』を獲得する」を誘発する\n必殺技攻撃時「味方の【死寂の葬花 サタン】が『必殺技攻撃時「《燃え上がった闘争心》」を誘発する(1ターン)』を獲得する」を誘発する\n\n《燃え上がった闘争心》\n攻撃力が35%増加する(2ターン)\n与えるダメージが10.5%増加する(2ターン)\n通常攻撃ダメージが30%増加する(2ターン)\n通常攻撃時「自分の52.5%の攻撃力でターゲットにダメージを与える」を追加する(2ターン)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `燃えぬ憎しみ`,
                    description: `攻撃力が45%増加する\n通常攻撃時「自分の現在のHPの1%分自分に確定ダメージを与え、自分の通常攻撃ダメージを5%増加させる(最高10スタック)」を追加する（「攻撃を受けた時」に誘発する効果を誘発可能）`
                },
                [SkillType.PASSIVE_2]: {
                    name: `万物滅却`,
                    description: `攻撃を受けた時「自分が1スタックの《煉獄の冥炎》を獲得する(最高6スタック)」を誘発する\n必殺技攻撃時、自分の《煉獄の冥炎》のスタック数に応じて「自分が《冥炎の猛撃》を獲得する」を誘発する\n必殺技攻撃時「自分の《煉獄の冥炎》のスタック数をすべて消す」を誘発する\n\n《冥炎の猛撃》\n与えるダメージが5%増加する(2ターン)\n通常攻撃時「自分の52.5%の攻撃力でターゲットにダメージを与える」を追加する(2ターン)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `取り戻せぬ欲望`,
                    description: `味方全体が「攻撃を受けた時『味方の【死寂の葬花 サタン】が1スタックの《呪いのような愛》を獲得する(最高10スタック)』を誘発する」を獲得する\n自分の《呪いのような愛》のスタック数が≧2の時「攻撃力が30%増加する」を発動する\n自分の《呪いのような愛》のスタック数が≧6の時「防御中のターゲットに与えるダメージが100%増加する」を発動する\n自分の《呪いのような愛》のスタック数が=10の時「必殺技攻撃時『自分の与えるダメージが30%増加する(2ターン)』を誘発する」を発動する`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻撃+`,
                    description: `自分の攻撃力を10%増加させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `麻痺無効`,
                    description: `自分を麻痺無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `종언(終焉)—잔혹의 발톱`,
                    description: `자신의 공격 데미지 100/115/130/145/160% 증가(2턴), 일반 공격 데미지 50/65/80/95/110% 증가(2턴), 타깃이 받는 화속성 데미지 18/21/24/27/30% 증가(2턴), 자신은 「일반 공격 시 『자신은 0/0/1/2/3중첩의 《지옥의 화염》 획득(최대 6중첩)』 트리거(2턴)」 획득 [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `종언(終焉)—잔혹의 발톱`,
                    description: `자신의 공격 데미지 100% 증가(2턴), 일반 공격 데미지 50% 증가(2턴), 타깃이 받는 화속성 데미지 18% 증가(2턴) [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `종언(終焉)—잔혹의 발톱`,
                    description: `자신의 공격 데미지 115% 증가(2턴), 일반 공격 데미지 65% 증가(2턴), 타깃이 받는 화속성 데미지 21% 증가(2턴) [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `종언(終焉)—잔혹의 발톱`,
                    description: `자신의 공격 데미지 130% 증가(2턴), 일반 공격 데미지 80% 증가(2턴), 타깃이 받는 화속성 데미지 24% 증가(2턴), 자신은 「일반 공격 시 『자신은 1중첩의 《지옥의 화염》 획득(최대 6중첩)』 트리거(2턴)」 획득 [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `종언(終焉)—잔혹의 발톱`,
                    description: `자신의 공격 데미지 145% 증가(2턴), 일반 공격 데미지 95% 증가(2턴), 타깃이 받는 화속성 데미지 27% 증가(2턴), 자신은 「일반 공격 시 『자신은 2중첩의 《지옥의 화염》 획득(최대 6중첩)』 트리거(2턴)」 획득 [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `종언(終焉)—잔혹의 발톱`,
                    description: `자신의 공격 데미지 160% 증가(2턴), 일반 공격 데미지 110% 증가(2턴), 타깃이 받는 화속성 데미지 30% 증가(2턴), 자신은 「일반 공격 시 『자신은 3중첩의 《지옥의 화염》 획득(최대 6중첩)』 트리거(2턴)」 획득 [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `무자비한 일격`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `욕망을 상실한 마왕`,
                    description: `아군 전체의 최대 HP 50% 증가\n아군 전체는 「팀에 딜러가 2명 이상 있을 시 『공격 데미지 500% 감소』 발동」 획득(디버프)\n자신 이외의 아군 전체는 「《화염의 만연》」 획득\n\n《화염의 만연》\n공격 데미지 50% 증가\n궁극기 발동 시 「자신은 『일반 공격 시 「타깃이 받는 데미지 5% 증가(1턴), 타깃이 받는 일반 공격 데미지 10% 증가(1턴)」 트리거(2턴)』 획득」 트리거\n궁극기 발동 시 「아군【죽음의 장송곡 사탄】은 『궁극기 발동 시 「《타오르는 전투 욕구》」 트리거(1턴)』획득」트리거\n\n《타오르는 전투 욕구》\n공격 데미지 35% 증가(2턴)\n가하는 데미지 10.5% 증가(2턴)\n일반 공격 데미지 30% 증가(2턴)\n일반 공격 시 「자신의 공격 데미지의 52.5%만큼 타깃에게 데미지」추가(2턴)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `타오르지 않는 증오`,
                    description: `공격 데미지 45% 증가\n일반 공격 시 「자신의 현재 HP 1%만큼 자신에게 확정 데미지, 자신의 일반 공격 데미지 5% 증가(최대 10중첩)」추가(「피격 시」 트리거 효과 트리거)`
                },
                [SkillType.PASSIVE_2]: {
                    name: `만물 멸절`,
                    description: `피격 시 「자신은 1중첩의《지옥의 화염》획득(최대 6중첩)」트리거\n궁극기 발동 시 자신의《지옥의 화염》중첩수에 따라 「자신은 《명염의 일격》획득」트리거\n궁극기 발동 시 「자신의 모든《지옥의 화염》중첩수 제거」트리거\n\n《명염의 일격》\n가하는 데미지 5% 증가(2턴)\n일반 공격 시 「자신의 공격 데미지의 52.5%만큼 타깃에게 데미지」추가(2턴)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `되찾을 수 없는 욕망`,
                    description: `아군 전체는 「피격 시 『아군【죽음의 장송곡 사탄】은 1중첩의 《저주 같은 사랑》 획득(최대 10중첩)』 트리거」 획득\n자신의《저주 같은 사랑》중첩수≧2일 시  「공격 데미지 30% 증가」 활성화\n자신의《저주 같은 사랑》중첩수≧6일 시  「방어한 타깃에게 가하는 데미지 100% 증가」 활성화\n자신의《저주 같은 사랑》중첩수=10일 시 「궁극기 발동 시 『자신의 가하는 데미지 30% 증가(2턴)』 트리거」 활성화`
                },
                [SkillType.GENERAL_1]: {
                    name: `공격+`,
                    description: `자신의 공격 데미지 10% 증가`
                },
                [SkillType.GENERAL_2]: {
                    name: `마비 면역`,
                    description: `자신에게 마비 면역 부여`
                }
            }
        }
    },
]