import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10210: SkillSet[] =  [
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
                    name: `超帥氣的採菇犬`,
                    description: `使我方全體獲得12/15/15/20/20層《珍寶菇》(最多60層)、造成傷害增加13.2/15.4/17.6/19.8/22%(1回合)，再使我方全體闇屬性攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力44.1/51.5/58.8/66.2/73.5%對目標造成傷害』(1回合)」。CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `超帥氣的採菇犬`,
                    description: `使我方全體獲得12層《珍寶菇》(最多60層)、造成傷害增加13.2%(1回合)，再使我方全體闇屬性攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力44.1%對目標造成傷害』(1回合)」。CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `超帥氣的採菇犬`,
                    description: `使我方全體獲得15層《珍寶菇》(最多60層)、造成傷害增加15.4%(1回合)，再使我方全體闇屬性攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力51.5%對目標造成傷害』(1回合)」。CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `超帥氣的採菇犬`,
                    description: `使我方全體獲得15層《珍寶菇》(最多60層)、造成傷害增加17.6%(1回合)，再使我方全體闇屬性攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力58.8%對目標造成傷害』(1回合)」。CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `超帥氣的採菇犬`,
                    description: `使我方全體獲得20層《珍寶菇》(最多60層)、造成傷害增加19.8%(1回合)，再使我方全體闇屬性攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力66.2%對目標造成傷害』(1回合)」。CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `超帥氣的採菇犬`,
                    description: `使我方全體獲得20層《珍寶菇》(最多60層)、造成傷害增加22%(1回合)，再使我方全體闇屬性攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力73.5%對目標造成傷害』(1回合)」。CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `偵查危險`,
                    description: `以自身攻擊力30%使我方全體角色攻擊力增加(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `狗狗Power戰隊，集合！`,
                    description: `我方全體最大HP增加55%\n我方全體獲得「我方隊伍風屬性角色有2人以上時，開啟「《我們是狗狗的尾巴！》」\n自身獲得「我方隊伍闇屬性角色有2人以上時，開啟「必殺時，觸發「《目標是傳奇冒險者小隊！》」」\n\n《我們是狗狗的尾巴！》\n攻擊力增加53%、必殺技傷害增加53%\n必殺時，追加「以自身攻擊力105.5%對目標造成傷害」\n\n《目標是傳奇冒險者小隊！》\n使我方全體造成傷害增加31.7%(1回合)\n使目標受到傷害增加21.2%(1回合)、受到風屬性傷害增加76.7%(1回合)、受到闇屬性傷害增加76.7%(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `毛茸茸就是正義`,
                    description: `必殺時，觸發「以自身攻擊力30%使我方全體角色攻擊力增加(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `松茸(？)大豐收`,
                    description: `我方全體獲得《♡心跳加速♡》\n\n《♡心跳加速♡》\n自身《珍寶菇》層數≧20層時，開啟「攻擊力增加16.7%」\n自身《珍寶菇》層數≧40層時，開啟「必殺技傷害增加16.7%」\n自身《珍寶菇》層數=60層時，開啟「攻擊力增加20%、必殺技傷害增加20%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `熱烈的繁殖慾望`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少3回合」(觸發1次後清除) \n自身《珍寶菇》層數≧40層時，開啟「必殺時，觸發『使目標獲得《發情費洛蒙》』」\n\n《發情費洛蒙》\n受到闇屬性傷害增加22%(1回合)、受到傷害增加14.6%(1回合)`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻擊＋`,
                    description: `使自身攻擊力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `超帅气的採菰犬`,
                    description: `使我方全体获得12/15/15/20/20层《珍宝菰》(最多60层)、造成伤害增加13.2/15.4/17.6/19.8/22%(1回合)，再使我方全体闇属性攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力44.1/51.5/58.8/66.2/73.5%对目标造成伤害』(1回合)」。CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `超帅气的採菰犬`,
                    description: `使我方全体获得12层《珍宝菰》(最多60层)、造成伤害增加13.2%(1回合)，再使我方全体闇属性攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力44.1%对目标造成伤害』(1回合)」。CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `超帅气的採菰犬`,
                    description: `使我方全体获得15层《珍宝菰》(最多60层)、造成伤害增加15.4%(1回合)，再使我方全体闇属性攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力51.5%对目标造成伤害』(1回合)」。CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `超帅气的採菰犬`,
                    description: `使我方全体获得15层《珍宝菰》(最多60层)、造成伤害增加17.6%(1回合)，再使我方全体闇属性攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力58.8%对目标造成伤害』(1回合)」。CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `超帅气的採菰犬`,
                    description: `使我方全体获得20层《珍宝菰》(最多60层)、造成伤害增加19.8%(1回合)，再使我方全体闇属性攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力66.2%对目标造成伤害』(1回合)」。CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `超帅气的採菰犬`,
                    description: `使我方全体获得20层《珍宝菰》(最多60层)、造成伤害增加22%(1回合)，再使我方全体闇属性攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力73.5%对目标造成伤害』(1回合)」。CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `侦查危险`,
                    description: `以自身攻击力30%使我方全体角色攻击力增加(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `狗狗Power战队，集合！`,
                    description: `我方全体最大HP增加55%\n我方全体获得「我方队伍风属性角色有2人以上时，开启「《我们是狗狗的尾巴！》」\n自身获得「我方队伍闇属性角色有2人以上时，开启「必杀时，触发「《目标是传奇冒险者小队！》」」\n\n《我们是狗狗的尾巴！》\n攻击力增加53%、必杀技伤害增加53%\n必杀时，追加「以自身攻击力105.5%对目标造成伤害」\n\n《目标是传奇冒险者小队！》\n使我方全体造成伤害增加31.7%(1回合)\n使目标受到伤害增加21.2%(1回合)、受到风属性伤害增加76.7%(1回合)、受到闇属性伤害增加76.7%(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `毛茸茸就是正义`,
                    description: `必杀时，触发「以自身攻击力30%使我方全体角色攻击力增加(1回合)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `松茸(？)大丰收`,
                    description: `我方全体获得《♡心跳加速♡》\n\n《♡心跳加速♡》\n自身《珍宝菰》层数≧20层时，开启「攻击力增加16.7%」\n自身《珍宝菰》层数≧40层时，开启「必杀技伤害增加16.7%」\n自身《珍宝菰》层数=60层时，开启「攻击力增加20%、必杀技伤害增加20%」`
                },
                [SkillType.PASSIVE_3]: {
                    name: `热烈的繁殖慾望`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少3回合」(触发1次后清除) \n自身《珍宝菰》层数≧40层时，开启「必杀时，触发『使目标获得《发情费洛蒙》』」\n\n《发情费洛蒙》\n受到闇属性伤害增加22%(1回合)、受到伤害增加14.6%(1回合)`
                },
                [SkillType.GENERAL_1]: {
                    name: `攻击＋`,
                    description: `使自身攻击力增加10%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹`,
                    description: `使自身免疫麻痹`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Cool Foraging Dog`,
                    description: `The party gains 12/15/15/20/20 stacks of "Treasure Shroom" (max 60 stacks), increase Damage Output by 13.2/15.4/17.6/19.8/22% for 1 turn, then allied Dark Attackers, Defenders, and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (44.1/51.5/58.8/66.2/73.5% Attack Power). CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `Cool Foraging Dog`,
                    description: `The party gains 12 stacks of "Treasure Shroom" (max 60 stacks), increase Damage Output by 13.2% for 1 turn, then allied Dark Attackers, Defenders, and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (44.1% Attack Power). CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `Cool Foraging Dog`,
                    description: `The party gains 15 stacks of "Treasure Shroom" (max 60 stacks), increase Damage Output by 15.4% for 1 turn, then allied Dark Attackers, Defenders, and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (51.5% Attack Power). CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `Cool Foraging Dog`,
                    description: `The party gains 15 stacks of "Treasure Shroom" (max 60 stacks), increase Damage Output by 17.6% for 1 turn, then allied Dark Attackers, Defenders, and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (58.8% Attack Power). CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `Cool Foraging Dog`,
                    description: `The party gains 20 stacks of "Treasure Shroom" (max 60 stacks), increase Damage Output by 19.8% for 1 turn, then allied Dark Attackers, Defenders, and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (66.2% Attack Power). CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `Cool Foraging Dog`,
                    description: `The party gains 20 stacks of "Treasure Shroom" (max 60 stacks), increase Damage Output by 22% for 1 turn, then allied Dark Attackers, Defenders, and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (73.5% Attack Power). CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `Sense Danger`,
                    description: `Increase the party's Attack Power for 30% of your Attack Power for 1 turn.`
                },
                [SkillType.LEADER]: {
                    name: `Doggo Rangers Assemble!`,
                    description: `Increase the party's max HP by 55%.\nThe party gains the following effect: When there are 2 or more Wind characters in the party, activate "We're Doggy's Tail".\nGain yourself the following effect: When there are 2 or more Dark characters in the party, activate "On Ultimate Skill, trigger "Targeting Adventurer Party!". \n\n"We're Doggy's Tail"\nIncrease Attack Power by 53% and Ultimate Skill Power by 53%.\nOn Ultimate Skill, deal additional damage to the target (105.5% Attack Power).\n\n"Targeting Adventurer Party!"\nIncrease the party's Damage Output by 31.7% for 1 turn.\nIncrease the target's Damage Taken by 21.2% and Damage Taken from Wind attacks by 76.7% for 1 turn.\nIncrease the Damage Taken from Dark attacks by 76.7% for 1 turn.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Fluff is Justice`,
                    description: `On Ultimate Skill, trigger the following effect: Increase the party's Attack Power for 30% of your Attack Power for 1 turn.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Matsutake (?) Harvest`,
                    description: `The party gains "♡Racing Heartbeat♡".\n\n"♡Racing Heartbeat♡"\nWhen your "Treasure Shroom" stacks are ≥ 20, activate "increase Attack Power by 16.7%".\nWhen your "Treasure Shroom" stacks are ≥ 40, activate "increase Ultimate Skill Power by 16.7%".\nWhen your "Treasure Shroom" stacks are = 60, activate "increase Attack Power by 20% and Ultimate Skill Power by 20%".`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Intense Breeding Urge`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 3 turns (removes after triggering once). \nWhen your "Treasure Shroom" stacks are ≥ 40, activate "On Ultimate Skill, trigger the following effect: The target gains "Sex Pheromone".\n\n"Sex Pheromone"\nIncrease Damage Taken from Dark attacks by 22% for 1 turn and Damage Taken by 14.6% for 1 turn.`
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
                    name: `超カッコいいキノコ採りコボルト`,
                    description: `味方全体が《珍宝茸》を12/15/15/20/20スタック獲得し(最高60スタック)、与えるダメージが13.2/15.4/17.6/19.8/22%増加し(1ターン)、味方全体の闇属性アタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の44.1/51.5/58.8/66.2/73.5%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する。[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `超カッコいいキノコ採りコボルト`,
                    description: `味方全体が《珍宝茸》を12スタック獲得し(最高60スタック)、与えるダメージが13.2%増加し(1ターン)、味方全体の闇属性アタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の44.1%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する。[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `超カッコいいキノコ採りコボルト`,
                    description: `味方全体が《珍宝茸》を15スタック獲得し(最高60スタック)、与えるダメージが15.4%増加し(1ターン)、味方全体の闇属性アタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の51.5%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する。[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `超カッコいいキノコ採りコボルト`,
                    description: `味方全体が《珍宝茸》を15スタック獲得し(最高60スタック)、与えるダメージが17.6%増加し(1ターン)、味方全体の闇属性アタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の58.8%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する。[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `超カッコいいキノコ採りコボルト`,
                    description: `味方全体が《珍宝茸》を20スタック獲得し(最高60スタック)、与えるダメージが19.8%増加し(1ターン)、味方全体の闇属性アタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の66.2%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する。[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `超カッコいいキノコ採りコボルト`,
                    description: `味方全体が《珍宝茸》を20スタック獲得し(最高60スタック)、与えるダメージが22%増加し(1ターン)、味方全体の闇属性アタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の73.5%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する。[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `危険な捜査`,
                    description: `自分の攻撃力の30％分味方全体の攻撃力を増加させる(1ターン)`
                },
                [SkillType.LEADER]: {
                    name: `ワンワンパワーレンジャー、集合！`,
                    description: `味方全体の最大HPが55%増加する\n味方全体が「チームに2人以上の風属性キャラがいる時《我らわんこのしっぽ！》を発動する」を獲得する\n自分が「チームに2人以上の闇属性キャラがいる時『必殺技攻撃時《目指せ伝説の冒険者パーティー！》を誘発する』を発動する」を獲得する\n\n《我らわんこのしっぽ！》\n攻撃力が53％増加し、必殺技ダメージが53％増加する\n必殺技攻撃時「自分の105.5%の攻撃力でターゲットにダメージを与える」を追加する\n\n《目指せ伝説の冒険者パーティー！》\n味方全体の与えるダメージを31.7%増加させる(1ターン)\nターゲットが受けるダメージを21.2%増加させ(1ターン)、受ける風属性ダメージを76.7%増加させ(1ターン)、受ける闇属性ダメージを76.7%増加させる(1ターン)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `モフモフは正義`,
                    description: `必殺技攻撃時「自分の攻撃力の30％分味方全体の攻撃力を増加させる(1ターン)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `マツタケ(？)大豊作`,
                    description: `味方全体が《♡ドキドキ急上昇♡》を獲得する\n\n《♡ドキドキ急上昇♡》\n自分の《珍宝茸》のスタック数が≧20の時「攻撃力が16.7％増加する」を発動する\n自分の《珍宝茸》のスタック数が≧40の時「必殺技ダメージが16.7％増加する」を発動する\n自分の《珍宝茸》のスタック数が=60の時「攻撃力が20％増加し、必殺技ダメージが20％増加する」を発動する`
                },
                [SkillType.PASSIVE_3]: {
                    name: `迸る繁殖欲`,
                    description: `1ターン目に「自分の現在の必殺技CDを3ターン減少させる」を誘発する(誘発1回後に解除)\n自分の《珍宝茸》ののスタック数が≧40の時「必殺技攻撃時『ターゲットに《発情フェロモン》を与える』を誘発する」を発動する\n\n《発情フェロモン》\n受ける闇属性ダメージを22%増加させ(1ターン)、受けるダメージを14.6%増加させる(1ターン)`
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
                    name: `초간지 버섯 채집견`,
                    description: `아군 전체는 12/15/15/20/20중첩의 《진귀 버섯》 획득(최대 60중첩), 가하는 데미지 13.2/15.4/17.6/19.8/22% 증가(1턴), 다시 아군 암속성 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 44.1/51.5/58.8/66.2/73.5%만큼 타깃에게 데미지』 추가(1턴)」 획득 [CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `초간지 버섯 채집견`,
                    description: `아군 전체는 12중첩의 《진귀 버섯》 획득(최대 60중첩), 가하는 데미지 13.2% 증가(1턴), 다시 아군 암속성 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 44.1%만큼 타깃에게 데미지』 추가(1턴)」 획득 [CD: 3]`
                },
                [SkillType.SKILL_2]: {
                    name: `초간지 버섯 채집견`,
                    description: `아군 전체는 15중첩의 《진귀 버섯》 획득(최대 60중첩), 가하는 데미지 15.4% 증가(1턴), 다시 아군 암속성 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 51.5%만큼 타깃에게 데미지』 추가(1턴)」 획득 [CD: 3]`
                },
                [SkillType.SKILL_3]: {
                    name: `초간지 버섯 채집견`,
                    description: `아군 전체는 15중첩의 《진귀 버섯》 획득(최대 60중첩), 가하는 데미지 17.6% 증가(1턴), 다시 아군 암속성 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 58.8%만큼 타깃에게 데미지』 추가(1턴)」 획득 [CD: 3]`
                },
                [SkillType.SKILL_4]: {
                    name: `초간지 버섯 채집견`,
                    description: `아군 전체는 20중첩의 《진귀 버섯》 획득(최대 60중첩), 가하는 데미지 19.8% 증가(1턴), 다시 아군 암속성 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 66.2%만큼 타깃에게 데미지』 추가(1턴)」 획득 [CD: 3]`
                },
                [SkillType.SKILL_5]: {
                    name: `초간지 버섯 채집견`,
                    description: `아군 전체는 20중첩의 《진귀 버섯》 획득(최대 60중첩), 가하는 데미지 22% 증가(1턴), 다시 아군 암속성 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 73.5%만큼 타깃에게 데미지』 추가(1턴)」 획득 [CD: 3]`
                },
                [SkillType.ATTACK]: {
                    name: `정찰 개시`,
                    description: `자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)`
                },
                [SkillType.LEADER]: {
                    name: `멍멍이 Power 레인저, 집합!`,
                    description: `아군 전체의 최대 HP 55% 증가 \n아군 전체는 「아군 팀에 풍속성 캐릭터가 2명 이상 있을 경우 「《우리는 멍멍이의 꼬리다!》」  활성화\n자신은 「아군 팀에 암속성 캐릭터가 2명 이상 있을 경우 『궁극기 발동 시 「《목표는 전설의 모험가 소대!》」 트리거』 활성화」 획득 \n\n《우리는 멍멍이의 꼬리다!》 \n공격 데미지 53% 증가, 궁극기 데미지 53% 증가 \n궁극기 발동 시 「자신의 공격 데미지의 105.5%만큼 타깃에게 데미지」 추가 \n\n《목표는 전설의 모험가 소대!》 \n아군 전체의 가하는 데미지 31.7% 증가(1턴) \n타깃이 받는 데미지 21.2% 증가(1턴), 받는 풍속성 데미지 76.7% 증가(1턴), 받는 암속성 데미지 76.7% 증가(1턴)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `복슬복슬한 게 정의다`,
                    description: `궁극기 발동 시 「자신의 공격 데미지의 30%만큼 아군 전체의 공격 데미지 증가(1턴)」 트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `송이버섯(?) 대풍년`,
                    description: `아군 전체는 《♡심장 박동 가속♡》 획득\n\n《♡심장 박동 가속♡》 \n자신의 《진귀 버섯》 중첩수≧20일 경우 「공격 데미지 16.7% 증가」 활성화 \n자신의 《진귀 버섯》 중첩수≧40일 경우 「궁극기 데미지 16.7% 증가」 활성화 \n자신의 《진귀 버섯》 중첩수=60일 경우  「공격 데미지 20% 증가, 궁극기 데미지 20% 증가」활성화`
                },
                [SkillType.PASSIVE_3]: {
                    name: `왕성한 번식욕`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 3턴 감소」 트리거(1회 트리거 후 제거) \n자신의 《진귀 버섯》 중첩수≧40일 경우 「궁극기 발동 시 『타깃은 《발정 페로몬》 획득』 트리거」 활성화 \n\n《발정 페로몬》 \n받는 암속성 데미지 22% 증가(1턴), 받는 데미지 14.6% 증가(1턴)`
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
    }
];
