import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10202: SkillSet[] =  [
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
                    name: `正義的邪惡光線`,
                    description: `使自身攻擊力增加138/161/184/207/230%(1回合)，再使我方全體造成傷害增加20.7/24.15/27.6/31.05/34.5%(1回合)，且使目標受到傷害增加0/16.1/18.4/20.7/23%(1回合)、受到闇屬性傷害增加20.7/24.15/27.6/31.05/34.5%(1回合)，並以自身攻擊力165/188/211/234/257%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `正義的邪惡光線`,
                    description: `使自身攻擊力增加138%(1回合)，再使我方全體造成傷害增加20.7%(1回合)，且使目標受到闇屬性傷害增加20.7%(1回合)，並以自身攻擊力165%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `正義的邪惡光線`,
                    description: `使自身攻擊力增加161%(1回合)，再使我方全體造成傷害增加24.15%(1回合)，且使目標受到傷害增加16.1%(1回合)、受到闇屬性傷害增加24.15%(1回合)，並以自身攻擊力188%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `正義的邪惡光線`,
                    description: `使自身攻擊力增加184%(1回合)，再使我方全體造成傷害增加27.6%(1回合)，且使目標受到傷害增加18.4%(1回合)、受到闇屬性傷害增加27.6%(1回合)，並以自身攻擊力211%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `正義的邪惡光線`,
                    description: `使自身攻擊力增加207%(1回合)，再使我方全體造成傷害增加31.05%(1回合)，且使目標受到傷害增加20.7%(1回合)、受到闇屬性傷害增加31.05%(1回合)，並以自身攻擊力234%對目標造成傷害。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `正義的邪惡光線`,
                    description: `使自身攻擊力增加230%(1回合)，再使我方全體造成傷害增加34.5%(1回合)，且使目標受到傷害增加23%(1回合)、受到闇屬性傷害增加34.5%(1回合)，並以自身攻擊力257%對目標造成傷害。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `邪惡粉碎擊`,
                    description: `使自身攻擊力增加100%(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `奉惡之王的命令`,
                    description: `我方全體最大HP增加50%\n我方全體攻擊力增加63.5%\n我方全體獲得「必殺時，觸發『《對魔法少女陷阱》』」\n我方全體獲得「我方隊伍治療者有1人以上時，開啟『造成傷害減少500%』(負面效果)」\n自身獲得「攻擊時，觸發『以自身最大HP50%對我方全體進行治療』」\n自身獲得「每經過4回合時，觸發『《召喚惡之爪牙》』」\n\n《對魔法少女陷阱》\n使我方全體造成傷害增加2.54%(最多15層)、必殺技傷害增加2.12%(最多15層)、觸發技效果增加2.12%(最多15層)\n使目標受到傷害增加1.69%(最多15層)、受到闇屬性傷害增加2.54%(最多15層)\n\n《召喚惡之爪牙》\n使我方全體闇屬性攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力63.5%對目標造成傷害』(2回合)」、「必殺時，觸發『以自身攻擊力19%對目標造成傷害』(2回合)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `平凡的打工族`,
                    description: `攻擊時，觸發「以自身攻擊力50%對目標造成傷害」\n防禦時，觸發「以自身最大HP10%給予我方全體護盾(3回合)(不可疊加)」\n我方全體必殺技傷害增加28.75%、觸發技效果增加28.75%、受到護盾效果增加50%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `惡之幹部變身`,
                    description: `必殺時，觸發「《金錢就是力量》」\n\n《金錢就是力量》\n使自身進入防禦狀態\n使自身獲得嘲諷(1回合)\n以自身攻擊力100%對目標造成傷害\n以自身最大HP30%給予自身護盾(1回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `迴響的正義之心`,
                    description: `每經過4回合時，觸發「《魔杖的回應》」\n\n《魔杖的回應》\n使自身當前必殺技CD減少1回合\n使自身獲得「必殺時，觸發『使自身當前必殺技CD減少3回合』(4回合)(觸發1次後清除)」\n使我方全體闇屬性攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力57.5%對目標造成傷害』(2回合)」、「必殺時，觸發『以自身攻擊力17.2%對目標造成傷害』(2回合)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `減傷+`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `正义的邪恶光线`,
                    description: `使自身攻击力增加138/161/184/207/230%(1回合)，再使我方全体造成伤害增加20.7/24.15/27.6/31.05/34.5%(1回合)，且使目标受到伤害增加0/16.1/18.4/20.7/23%(1回合)、受到闇属性伤害增加20.7/24.15/27.6/31.05/34.5%(1回合)，并以自身攻击力165/188/211/234/257%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `正义的邪恶光线`,
                    description: `使自身攻击力增加138%(1回合)，再使我方全体造成伤害增加20.7%(1回合)，且使目标受到闇属性伤害增加20.7%(1回合)，并以自身攻击力165%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `正义的邪恶光线`,
                    description: `使自身攻击力增加161%(1回合)，再使我方全体造成伤害增加24.15%(1回合)，且使目标受到伤害增加16.1%(1回合)、受到闇属性伤害增加24.15%(1回合)，并以自身攻击力188%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `正义的邪恶光线`,
                    description: `使自身攻击力增加184%(1回合)，再使我方全体造成伤害增加27.6%(1回合)，且使目标受到伤害增加18.4%(1回合)、受到闇属性伤害增加27.6%(1回合)，并以自身攻击力211%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `正义的邪恶光线`,
                    description: `使自身攻击力增加207%(1回合)，再使我方全体造成伤害增加31.05%(1回合)，且使目标受到伤害增加20.7%(1回合)、受到闇属性伤害增加31.05%(1回合)，并以自身攻击力234%对目标造成伤害。CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `正义的邪恶光线`,
                    description: `使自身攻击力增加230%(1回合)，再使我方全体造成伤害增加34.5%(1回合)，且使目标受到伤害增加23%(1回合)、受到闇属性伤害增加34.5%(1回合)，并以自身攻击力257%对目标造成伤害。CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `邪恶粉碎击`,
                    description: `使自身攻击力增加100%(1回合)`
                },
                [SkillType.LEADER]: {
                    name: `奉恶之王的命令`,
                    description: `我方全体最大HP增加50%\n我方全体攻击力增加63.5%\n我方全体获得「必杀时，触发『《对魔法少女陷阱》』」\n我方全体获得「我方队伍治疗者有1人以上时，开启『造成伤害减少500%』(负面效果)」\n自身获得「攻击时，触发『以自身最大HP50%对我方全体进行治疗』」\n自身获得「每经过4回合时，触发『《召唤恶之爪牙》』」\n\n《对魔法少女陷阱》\n使我方全体造成伤害增加2.54%(最多15层)、必杀技伤害增加2.12%(最多15层)、触发技效果增加2.12%(最多15层)\n使目标受到伤害增加1.69%(最多15层)、受到闇属性伤害增加2.54%(最多15层)\n\n《召唤恶之爪牙》\n使我方全体闇属性攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力63.5%对目标造成伤害』(2回合)」、「必杀时，触发『以自身攻击力19%对目标造成伤害』(2回合)」`
                },
                [SkillType.PASSIVE_1]: {
                    name: `平凡的打工族`,
                    description: `攻击时，触发「以自身攻击力50%对目标造成伤害」\n防禦时，触发「以自身最大HP10%给予我方全体护盾(3回合)(不可叠加)」\n我方全体必杀技伤害增加28.75%、触发技效果增加28.75%、受到护盾效果增加50%`
                },
                [SkillType.PASSIVE_2]: {
                    name: `恶之干部变身`,
                    description: `必杀时，触发「《金钱就是力量》」\n\n《金钱就是力量》\n使自身进入防禦状态\n使自身获得嘲讽(1回合)\n以自身攻击力100%对目标造成伤害\n以自身最大HP30%给予自身护盾(1回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `迴响的正义之心`,
                    description: `每经过4回合时，触发「《魔杖的回应》」\n\n《魔杖的回应》\n使自身当前必杀技CD减少1回合\n使自身获得「必杀时，触发『使自身当前必杀技CD减少3回合』(4回合)(触发1次后清除)」\n使我方全体闇属性攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力57.5%对目标造成伤害』(2回合)」、「必杀时，触发『以自身攻击力17.2%对目标造成伤害』(2回合)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `减伤+`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫睡眠`,
                    description: `使自身免疫睡眠`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Justice's Evil Beam`,
                    description: `Increase your Attack Power by 138/161/184/207/230% for 1 turn, increase the party's Damage Output by 20.7/24.15/27.6/31.05/34.5% for 1 turn, increase the target's Damage Taken by 0/16.1/18.4/20.7/23% for 1 turn and Damage Taken from Dark attacks by 20.7/24.15/27.6/31.05/34.5% for 1 turn, damage the target (165/188/211/234/257% Attack Power). CD:4`
                },
                [SkillType.SKILL_1]: {
                    name: `Justice's Evil Beam`,
                    description: `Increase your Attack Power by 138% for 1 turn, increase the party's Damage Output by 20.7% for 1 turn, increase the target's Damage Taken from Dark attacks by 20.7% for 1 turn, damage the target (165% Attack Power). CD:4`
                },
                [SkillType.SKILL_2]: {
                    name: `Justice's Evil Beam`,
                    description: `Increase your Attack Power by 161% for 1 turn, increase the party's Damage Output by 24.15% for 1 turn, increase the target's Damage Taken by 16.1% for 1 turn and Damage Taken from Dark attacks by 24.15% for 1 turn, damage the target (188% Attack Power). CD:4`
                },
                [SkillType.SKILL_3]: {
                    name: `Justice's Evil Beam`,
                    description: `Increase your Attack Power by 184% for 1 turn, increase the party's Damage Output by 27.6% for 1 turn, increase the target's Damage Taken by 18.4% for 1 turn and Damage Taken from Dark attacks by 27.6% for 1 turn, damage the target (211% Attack Power). CD:4`
                },
                [SkillType.SKILL_4]: {
                    name: `Justice's Evil Beam`,
                    description: `Increase your Attack Power by 207% for 1 turn, increase the party's Damage Output by 31.05% for 1 turn, increase the target's Damage Taken by 20.7% for 1 turn and Damage Taken from Dark attacks by 31.05% for 1 turn, damage the target (234% Attack Power). CD:4`
                },
                [SkillType.SKILL_5]: {
                    name: `Justice's Evil Beam`,
                    description: `Increase your Attack Power by 230% for 1 turn, increase the party's Damage Output by 34.5% for 1 turn, increase the target's Damage Taken by 23% for 1 turn and Damage Taken from Dark attacks by 34.5% for 1 turn, damage the target (257% Attack Power). CD:4`
                },
                [SkillType.ATTACK]: {
                    name: `Evil Crush`,
                    description: `Increase your Attack Power by 100% for 1 turn.`
                },
                [SkillType.LEADER]: {
                    name: `King of Evil's Decree`,
                    description: `Increase the party's max HP by 50%.\nIncrease the party's Attack Power by 63.5%.\nThe party gains the following effect: On Ultimate Skill, trigger "Trap the Magic Knights".\nThe party gains the following effect: When there is 1 or more Healers in the party, activate "Decrease Damage Output by 500%" (debuff).\nGain yourself the following effect: On Attack, trigger the following effect: Heal the party for 50% of your max HP.\nGain yourself the following effect: After every 4 turns, trigger "Summon Evil Henchmen".\n\n"Trap the Magic Knights"\nIncrease the party's Damage Output by 2.54% (max 15 stacks), Ultimate Skill Power by 2.12% (max 15 stacks), and trigger ability effects by 2.12% (max 15 stacks).\nIncrease the target's Damage Taken by 1.69% (max 15 stacks) and Damage Taken from Dark attacks by 2.54% (max 15 stacks).\n\n"Summon Evil Henchmen"\nThe allied Dark Attackers, Defenders, and Obstructors gain the following effects: On Ultimate Skill, deal additional damage to the target for 2 turns (63.5% Attack Power). On Ultimate Skill, trigger the following effect: Damage the target for 2 turns (19% Attack Power).`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Average Worker`,
                    description: `On Attack, trigger the following effect: Damage the target (50% Attack Power).\nWhen in Guard Stance, trigger the following effect: Grant the party a Shield for 10% of your max HP for 3 turns (Non-stackable).\nIncrease the party's Ultimate Skill Power by 28.75%, trigger ability effects by 28.75%, and Shield effects by 50%.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Evil Inc's Morph`,
                    description: `On Ultimate Skill, trigger "Money Power".\n\n"Money Power"\nMake yourself enter Guard Stance.\nGain yourself Taunt for 1 turn.\nDamage the target (100% Attack Power).\nGrant yourself a Shield for 30% of your max HP for 1 turn.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Echoing Justice`,
                    description: `After every 4 turns, trigger "Wand's Response".\n\n"Wand's Response"\nDecrease your current Ultimate Skill CD by 1 turn.\nGain yourself the following effect: On Ultimate Skill, trigger the following effect for 4 turns: Decrease your current Ultimate Skill CD by 3 turns (removes after triggering once).\nAllied Dark Attackers, Defenders, and Obstructors gain the following effects: On Ultimate Skill, deal additional damage to the target for 2 turns (57.5% Attack Power). On Ultimate Skill, trigger the following effect: Damage the target for 2 turns (17.2% Attack Power).`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage Reduction+`,
                    description: `Decrease your Damage Taken by 5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Sleep Immunity`,
                    description: `Gain yourself immunity to Sleep.`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `正義の邪悪ビーム`,
                    description: `自分の攻撃力を138/161/184/207/230%増加させ(1ターン)、味方全体の与えるダメージを20.7/24.15/27.6/31.05/34.5%増加させ(1ターン)、ターゲットの受けるダメージを0/16.1/18.4/20.7/23%増加させ(1ターン)、受ける闇属性ダメージを20.7/24.15/27.6/31.05/34.5%増加させ(1ターン)、自分の165/188/211/234/257%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_1]: {
                    name: `正義の邪悪ビーム`,
                    description: `自分の攻撃力を138%増加させ(1ターン)、味方全体の与えるダメージを20.7%増加させ(1ターン)、ターゲットの受ける闇属性ダメージを20.7%増加させ(1ターン)、自分の165%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_2]: {
                    name: `正義の邪悪ビーム`,
                    description: `自分の攻撃力を161%増加させ(1ターン)、味方全体の与えるダメージを24.15%増加させ(1ターン)、ターゲットの受けるダメージを16.1%増加させ(1ターン)、受ける闇属性ダメージを24.15%増加させ(1ターン)、自分の188%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_3]: {
                    name: `正義の邪悪ビーム`,
                    description: `自分の攻撃力を184%増加させ(1ターン)、味方全体の与えるダメージを27.6%増加させ(1ターン)、ターゲットの受けるダメージを18.4%増加させ(1ターン)、受ける闇属性ダメージを27.6%増加させ(1ターン)、自分の211%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_4]: {
                    name: `正義の邪悪ビーム`,
                    description: `自分の攻撃力を207%増加させ(1ターン)、味方全体の与えるダメージを31.05%増加させ(1ターン)、ターゲットの受けるダメージを20.7%増加させ(1ターン)、受ける闇属性ダメージを31.05%増加させ(1ターン)、自分の234%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.SKILL_5]: {
                    name: `正義の邪悪ビーム`,
                    description: `自分の攻撃力を230%増加させ(1ターン)、味方全体の与えるダメージを34.5%増加させ(1ターン)、ターゲットの受けるダメージを23%増加させ(1ターン)、受ける闇属性ダメージを34.5%増加させ(1ターン)、自分の257%の攻撃力でターゲットにダメージを与える[CD:4]`
                },
                [SkillType.ATTACK]: {
                    name: `イビルインパクト`,
                    description: `自分の攻撃力を100%増加させる(1ターン)`
                },
                [SkillType.LEADER]: {
                    name: `悪の王の命を奉じて`,
                    description: `味方全体の最大HPが50%増加する\n味方全体の攻撃力が63.5%増加する\n味方全体が「必殺技攻撃時『《魔法少女をハメる罠》』を誘発する」を獲得する\n味方全体が「チーム内に1人以上のヒーラーがいる時『与えるダメージを500%減少させる』を発動する(デバフ効果)」を獲得する\n自分が「攻撃時『自分の最大HPの50%分味方全体に治療を行う』を誘発する」を獲得する\n自分が「4ターン毎に『《悪の爪牙を召喚》』を誘発する」を獲得する\n\n《魔法少女をハメる罠》\n味方全体の与えるダメージを2.54%増加させ(最高15スタック)、必殺技ダメージを2.12%増加させ(最高15スタック)、誘発スキル効果を2.12%増加させる(最高15スタック)\nターゲットの受けるダメージを1.69%増加させ(最高15スタック)、受ける闇属性ダメージを2.54%増加させる(最高15スタック)\n\n《悪の爪牙を召喚》\n味方の闇属性アタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の63.5%の攻撃力でターゲットにダメージを与える』を追加する(2ターン)」、「必殺技攻撃時『自分の19%の攻撃力でターゲットにダメージを与える』を誘発する(2ターン)」を獲得する`
                },
                [SkillType.PASSIVE_1]: {
                    name: `平凡なる労働者たち`,
                    description: `攻撃時「自分の50%の攻撃力でターゲットにダメージを与える」を誘発する\n防御時「自分の最大HPの10%分味方全体に盾を張る(3ターン)(スタック不可)」を誘発する\n味方全体の必殺技ダメージが28.75%増加し、誘発スキル効果が28.75%増加し、受ける盾効果が50%増加する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `悪の幹部変身`,
                    description: `必殺技攻撃時「《金こそ力》」を誘発する\n\n《金こそ力》\n自分を防御状態にする\n自分が挑発を獲得する(1ターン)\n自分の100%の攻撃力でターゲットにダメージを与える\n自分の最大HPの30%分自分に盾を張る(1ターン)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `鳴り響く正義の心`,
                    description: `4ターンごとに「《魔法の杖の導き》」を誘発する\n\n《魔法の杖の導き》\n自分の現在の必殺技CDを1ターン減少させる\n自分が「必殺技攻撃時『自分の現在の必殺技CDを3ターン減少させる』を誘発する(4ターン)(誘発1回後に解除)」を獲得する\n味方の闇属性アタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の57.5%の攻撃力でターゲットにダメージを与える』を追加する(2ターン)」、「必殺技攻撃時『自分の17.2%の攻撃力でターゲットにダメージを与える』を誘発する(2ターン)」を獲得する`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ減少+`,
                    description: `自分が受けるダメージを5%減少させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `睡眠無効`,
                    description: `自分を睡眠無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `정의의 사악 광선`,
                    description: `자신의 공격 데미지 138/161/184/207/230% 증가(1턴), 아군 전체의 가하는 데미지 20.7/24.15/27.6/31.05/34.5% 증가(1턴), 타깃이 받는 데미지 0/16.1/18.4/20.7/23% 증가(1턴), 받는 암속성 데미지 20.7/24.15/27.6/31.05/34.5% 증가(1턴), 자신의 공격 데미지의 165/188/211/234/257%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_1]: {
                    name: `정의의 사악 광선`,
                    description: `자신의 공격 데미지 138% 증가(1턴), 아군 전체의 가하는 데미지 20.7% 증가(1턴), 타깃이 받는 암속성 데미지 20.7% 증가(1턴), 자신의 공격 데미지의 165%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_2]: {
                    name: `정의의 사악 광선`,
                    description: `자신의 공격 데미지 161% 증가(1턴), 아군 전체의 가하는 데미지 24.15% 증가(1턴), 타깃이 받는 데미지 16.1% 증가(1턴), 받는 암속성 데미지 24.15% 증가(1턴), 자신의 공격 데미지의 188%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_3]: {
                    name: `정의의 사악 광선`,
                    description: `자신의 공격 데미지 184% 증가(1턴), 아군 전체의 가하는 데미지 27.6% 증가(1턴), 타깃이 받는 데미지 18.4% 증가(1턴), 받는 암속성 데미지 27.6% 증가(1턴), 자신의 공격 데미지의 211%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_4]: {
                    name: `정의의 사악 광선`,
                    description: `자신의 공격 데미지 207% 증가(1턴), 아군 전체의 가하는 데미지 31.05% 증가(1턴), 타깃이 받는 데미지 20.7% 증가(1턴), 받는 암속성 데미지 31.05% 증가(1턴), 자신의 공격 데미지의 234%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.SKILL_5]: {
                    name: `정의의 사악 광선`,
                    description: `자신의 공격 데미지 230% 증가(1턴), 아군 전체의 가하는 데미지 34.5% 증가(1턴), 타깃이 받는 데미지 23% 증가(1턴), 받는 암속성 데미지 34.5% 증가(1턴), 자신의 공격 데미지의 257%만큼 타깃에게 데미지 [CD: 4]`
                },
                [SkillType.ATTACK]: {
                    name: `악의 분쇄 타격`,
                    description: `자신의 공격 데미지 100% 증가(1턴)`
                },
                [SkillType.LEADER]: {
                    name: `악의 왕의 명령`,
                    description: `자신의 최대 HP 50% 증가\n아군 전체의 공격 데미지 63.5% 증가\n아군 전체는 「궁극기 발동 시 『《마법소녀를 위한 함정》』 트리거」 획득\n아군 전체는 「팀에 힐러 1명 이상을 편성할 시 『가하는 데미지 500% 감소』 활성화(디버프)」 획득\n자신은 「공격 시 『자신의 최대 HP 50%만큼 아군 전체를 치유』 트리거」 획득\n자신은 「4턴마다 『《악의 발톱 소환》』 트리거」 획득\n\n《마법소녀를 위한 함정》\n아군 전체의 가하는 데미지 2.54% 증가(최대 15중첩), 궁극기 데미지 2.12% 증가(최대 15중첩), 트리거 스킬 효과 2.12% 증가(최대 15중첩)\n타깃이 받는 데미지 1.69% 증가(최대 15중첩), 받는 암속성 데미지 2.54% 증가(최대 15중첩)\n\n《악의 발톱 소환》\n아군 암속성 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 63.5%만큼 타깃에게 데미지』 추가(2턴)」, 「궁극기 발동 시 『자신의 공격 데미지의 19%만큼 타깃에게 데미지』 트리거(2턴)」 획득`
                },
                [SkillType.PASSIVE_1]: {
                    name: `평범한 아르바이트생`,
                    description: `공격 시 「자신의 공격 데미지의 50%만큼 타깃에게 데미지」 트리거\n방어 시 「자신의 최대 HP 10%만큼 아군 전체에게 아머 강화(3턴)(중첩불가)」 트리거\n아군 전체의 궁극기 데미지 28.75% 증가, 트리거 스킬 효과 28.75% 증가, 받는 아머 강화 효과 50% 증가`
                },
                [SkillType.PASSIVE_2]: {
                    name: `악의 간부 변신`,
                    description: `궁극기 발동 시 「《돈이 곧 힘》」 트리거\n\n《돈이 곧 힘》\n자신은 방어 상태에 돌입\n자신은 도발 획득(1턴)\n자신의 공격 데미지의 100%만큼 타깃에게 데미지\n자신의 최대 HP 30%만큼 자신에게 아머 강화(1턴)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `울려 퍼지는 정의의 심장`,
                    description: `4턴마다 「《마법봉의 응답》」 트리거\n\n《마법봉의 응답》\n자신의 현재 궁극기 CD 1턴 감소\n자신은 「궁극기 발동 시 『자신의 현재 궁극기 CD 3턴 감소』 트리거(4턴)(1회 트리거 후 제거)」 획득\n아군 암속성 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 57.5%만큼 타깃에게 데미지』 추가(2턴)」, 「궁극기 발동 시 『자신의 공격 데미지의 17.2%만큼 타깃에게 데미지』 트리거(2턴)」 획득`
                },
                [SkillType.GENERAL_1]: {
                    name: `받는 데미지 감소+`,
                    description: `자신이 받는 데미지 5% 감소`
                },
                [SkillType.GENERAL_2]: {
                    name: `수면 면역`,
                    description: `자신에게 수면 면역 부여`
                }
            }
        }
    },
]
