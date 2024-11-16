import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10154: SkillSet[] =  [
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
                    name: `戀愛女僕萌萌光束`,
                    description: `使自身獲得1/1/2/2/3層《戀愛的萌系能量》(最多3層)(每場戰鬥僅生效1次)，並使自身以外我方全體水屬性角色獲得「必殺時，追加『以自身攻擊力80/90/100/110/120%對目標造成傷害』(1回合)」，再以自身攻擊力265/298/331/364/397%對目標造成傷害。CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `戀愛女僕萌萌光束`,
                    description: `使自身獲得1層《戀愛的萌系能量》(最多3層)(每場戰鬥僅生效1次)，並使自身以外我方全體水屬性角色獲得「必殺時，追加『以自身攻擊力80%對目標造成傷害』(1回合)」，再以自身攻擊力265%對目標造成傷害。CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `戀愛女僕萌萌光束`,
                    description: `使自身獲得1層《戀愛的萌系能量》(最多3層)(每場戰鬥僅生效1次)，並使自身以外我方全體水屬性角色獲得「必殺時，追加『以自身攻擊力90%對目標造成傷害』(1回合)」，再以自身攻擊力298%對目標造成傷害。CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `戀愛女僕萌萌光束`,
                    description: `使自身獲得2層《戀愛的萌系能量》(最多3層)(每場戰鬥僅生效1次)，並使自身以外我方全體水屬性角色獲得「必殺時，追加『以自身攻擊力100%對目標造成傷害』(1回合)」，再以自身攻擊力331%對目標造成傷害。CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `戀愛女僕萌萌光束`,
                    description: `使自身獲得2層《戀愛的萌系能量》(最多3層)(每場戰鬥僅生效1次)，並使自身以外我方全體水屬性角色獲得「必殺時，追加『以自身攻擊力110%對目標造成傷害』(1回合)」，再以自身攻擊力364%對目標造成傷害。CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `戀愛女僕萌萌光束`,
                    description: `使自身獲得3層《戀愛的萌系能量》(最多3層)(每場戰鬥僅生效1次)，並使自身以外我方全體水屬性角色獲得「必殺時，追加『以自身攻擊力120%對目標造成傷害』(1回合)」，再以自身攻擊力397%對目標造成傷害。CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `簡易女僕防身術`,
                    description: `以自身攻擊力100%對目標造成傷害，並使自身進入防禦狀態`
                },
                [SkillType.LEADER]: {
                    name: `☆星光少女☆`,
                    description: `我方全體最大HP增加40%\n我方全體攻擊力增加50%\n自身獲得「當我方隊伍至少有4名水屬性角色時，發動『每經過3回合時，觸發《如流星般墜落於地》』」\n自身獲得「當我方隊伍恰好為4種角色定位時，發動『每經過3回合時，觸發《如流星般墜落於地》』」\n自身獲得「當我方隊伍攻擊者有1人以上時，發動『每經過3回合時，觸發《如流星般墜落於地》』」\n自身獲得「當我方隊伍輔助者有1人以上時，發動『每經過3回合時，觸發《如流星般墜落於地》』」\n\n《如流星般墜落於地》\n使我方全體攻擊力增加15%(1回合)\n使我方全體造成傷害增加10%(1回合)\n使我方全體必殺技傷害增加12.5%(1回合)\n使我方全體獲得「必殺時，追加『以自身攻擊力10%對目標造成傷害』(1回合)」\n使我方全體受到傷害減少5%(1回合)\n使敵方全體受到傷害增加10%(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `秘密改造魔導兵裝`,
                    description: `必殺時，觸發「使自身不受《戀愛的萌系能量》層數變動效果影響(50回合)」(觸發1次後清除)\n必殺時，觸發「使目標受到水屬性傷害增加7.5%(最多4層)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `舞台上最閃耀的存在`,
                    description: `每經過3回合時，觸發「《只屬於你的偶像》」\n\n《只屬於你的偶像》\n使我方全體必殺技傷害增加50%(1回合)\n使自身獲得「防禦時，觸發『使自身當前必殺技CD增加3回合，並使自身獲得嘲諷效果(1回合)』(1回合)」\n使自身獲得「防禦時，根據自身《戀愛的萌系能量》的層數，觸發『《萌耶～萌耶～碰碰碰～♪》』(1回合)」\n\n《萌耶～萌耶～碰碰碰～♪》\n以自身最大HP30%對我方全體進行治療\n使我方全體受到傷害減少10%(1回合)\n使自身防禦減傷增加5%(1回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `心跳加快♡是戀愛開始的訊號`,
                    description: `第1回合時，觸發「使自身當前必殺技CD減少3回合」\n每經過3回合時，觸發「使我方全體水屬性角色攻擊力增加120%(1回合)，再使我方全體水屬性角色造成傷害增加60%(1回合)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `減傷+`,
                    description: `使自身受到傷害減少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `恋爱女仆萌萌光束`,
                    description: `使自身获得1/1/2/2/3层《恋爱的萌系能量》(最多3层)(每场战斗仅生效1次)，并使自身以外我方全体水属性角色获得「必杀时，追加『以自身攻击力80/90/100/110/120%对目标造成伤害』(1回合)」，再以自身攻击力265/298/331/364/397%对目标造成伤害。CD:3`
                },
                [SkillType.SKILL_1]: {
                    name: `恋爱女仆萌萌光束`,
                    description: `使自身获得1层《恋爱的萌系能量》(最多3层)(每场战斗仅生效1次)，并使自身以外我方全体水属性角色获得「必杀时，追加『以自身攻击力80%对目标造成伤害』(1回合)」，再以自身攻击力265%对目标造成伤害。CD:3`
                },
                [SkillType.SKILL_2]: {
                    name: `恋爱女仆萌萌光束`,
                    description: `使自身获得1层《恋爱的萌系能量》(最多3层)(每场战斗仅生效1次)，并使自身以外我方全体水属性角色获得「必杀时，追加『以自身攻击力90%对目标造成伤害』(1回合)」，再以自身攻击力298%对目标造成伤害。CD:3`
                },
                [SkillType.SKILL_3]: {
                    name: `恋爱女仆萌萌光束`,
                    description: `使自身获得2层《恋爱的萌系能量》(最多3层)(每场战斗仅生效1次)，并使自身以外我方全体水属性角色获得「必杀时，追加『以自身攻击力100%对目标造成伤害』(1回合)」，再以自身攻击力331%对目标造成伤害。CD:3`
                },
                [SkillType.SKILL_4]: {
                    name: `恋爱女仆萌萌光束`,
                    description: `使自身获得2层《恋爱的萌系能量》(最多3层)(每场战斗仅生效1次)，并使自身以外我方全体水属性角色获得「必杀时，追加『以自身攻击力110%对目标造成伤害』(1回合)」，再以自身攻击力364%对目标造成伤害。CD:3`
                },
                [SkillType.SKILL_5]: {
                    name: `恋爱女仆萌萌光束`,
                    description: `使自身获得3层《恋爱的萌系能量》(最多3层)(每场战斗仅生效1次)，并使自身以外我方全体水属性角色获得「必杀时，追加『以自身攻击力120%对目标造成伤害』(1回合)」，再以自身攻击力397%对目标造成伤害。CD:3`
                },
                [SkillType.ATTACK]: {
                    name: `简易女仆防身术`,
                    description: `以自身攻击力100%对目标造成伤害，并使自身进入防御状态`
                },
                [SkillType.LEADER]: {
                    name: `☆星光少女☆`,
                    description: `我方全体最大HP增加40%\n我方全体攻击力增加50%\n自身获得「当我方队伍至少有4名水属性角色时，发动『每经过3回合时，触发《如流星般坠落於地》』」\n自身获得「当我方队伍恰好为4种角色定位时，发动『每经过3回合时，触发《如流星般坠落於地》』」\n自身获得「当我方队伍攻击者有1人以上时，发动『每经过3回合时，触发《如流星般坠落於地》』」\n自身获得「当我方队伍辅助者有1人以上时，发动『每经过3回合时，触发《如流星般坠落於地》』」\n\n《如流星般坠落於地》\n使我方全体攻击力增加15%(1回合)\n使我方全体造成伤害增加10%(1回合)\n使我方全体必杀技伤害增加12.5%(1回合)\n使我方全体获得「必杀时，追加『以自身攻击力10%对目标造成伤害』(1回合)」\n使我方全体受到伤害减少5%(1回合)\n使敌方全体受到伤害增加10%(1回合)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `秘密改造魔导兵装`,
                    description: `必杀时，触发「使自身不受《恋爱的萌系能量》层数变动效果影响(50回合)」(触发1次後清除)\n必杀时，触发「使目标受到水属性伤害增加7.5%(最多4层)」`
                },
                [SkillType.PASSIVE_2]: {
                    name: `舞台上最闪耀的存在`,
                    description: `每经过3回合时，触发「《只属於你的偶像》」\n\n《只属於你的偶像》\n使我方全体必杀技伤害增加50%(1回合)\n使自身获得「防御时，触发『使自身当前必杀技CD增加3回合，并使自身获得嘲讽效果(1回合)』(1回合)」\n使自身获得「防御时，根据自身《恋爱的萌系能量》的层数，触发『《萌耶～萌耶～碰碰碰～♪》』(1回合)」\n\n《萌耶～萌耶～碰碰碰～♪》\n以自身最大HP30%对我方全体进行治疗\n使我方全体受到伤害减少10%(1回合)\n使自身防御减伤增加5%(1回合)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `心跳加快♡是恋爱开始的讯号`,
                    description: `第1回合时，触发「使自身当前必杀技CD减少3回合」\n每经过3回合时，触发「使我方全体水属性角色攻击力增加120%(1回合)，再使我方全体水属性角色造成伤害增加60%(1回合)」`
                },
                [SkillType.GENERAL_1]: {
                    name: `减伤+`,
                    description: `使自身受到伤害减少5%`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫沉默`,
                    description: `使自身免疫沉默`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Kawaii Beam`,
                    description: `Gain yourself 1/1/2/2/3 stacks of "Kawaii Energy" (max 3 stacks) (effective only once per battle). Other Water allies gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (80/90/100/110/120% Attack Power), then damage the target (265/298/331/364/397% Attack Power). CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `Kawaii Beam`,
                    description: `Gain yourself 1 stacks of "Kawaii Energy" (max 3 stacks) (effective only once per battle). Other Water allies gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (80% Attack Power), then damage the target (265% Attack Power). CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `Kawaii Beam`,
                    description: `Gain yourself 1 stacks of "Kawaii Energy" (max 3 stacks) (effective only once per battle). Other Water allies gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (90% Attack Power), then damage the target (298% Attack Power). CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `Kawaii Beam`,
                    description: `Gain yourself 2 stacks of "Kawaii Energy" (max 3 stacks) (effective only once per battle). Other Water allies gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (100% Attack Power), then damage the target (331% Attack Power). CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `Kawaii Beam`,
                    description: `Gain yourself 2 stacks of "Kawaii Energy" (max 3 stacks) (effective only once per battle). Other Water allies gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (110% Attack Power), then damage the target (364% Attack Power). CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `Kawaii Beam`,
                    description: `Gain yourself 3 stacks of "Kawaii Energy" (max 3 stacks) (effective only once per battle). Other Water allies gain the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (120% Attack Power), then damage the target (397% Attack Power). CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `Maid's Self-Defense`,
                    description: `Damage the target (100% Attack Power) and enter Guard Stance.`
                },
                [SkillType.LEADER]: {
                    name: `☆ Starlight Girl ☆`,
                    description: `Increase the party's max HP by 40%.\nIncrease the party's Attack Power by 50%.\nGain yourself the following effect: When there are 4 or more Water characters in the party, activate the following effect: After every 3 turns, trigger "Falling Like Shooting Star".\nGain yourself the following effect: When there are characters taking 4 positions in the party, activate the following effect: After every 3 turns, trigger "Falling Like Shooting Star".\nGain yourself the following effect: When there are 1 or more Attackers in the party, activate the following effect: After every 3 turns, trigger "Falling Like Shooting Star".\nGain yourself the following effect: When there are 1 or more Supporters in the party, activate the following effect: After every 3 turns, trigger "Falling Like Shooting Star".\n\n"Falling Like Shooting Star"\nIncrease the party's Attack Power by 15% for 1 turn.\nIncrease the party's Damage Output by 10% for 1 turn.\nIncrease the party's Ultimate Skill Power by 12.5% for 1 turn.\nThe party gains the following effect: On Ultimate Skill, deal additional damage to the target for 1 turn (10% Attack Power).\nDecrease the party's Damage Taken by 5% for 1 turn.\nIncrease the enemy's Damage Taken by 10% for 1 turn.`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Secretly Enhanced Gear`,
                    description: `On Ultimate Skill, trigger the following effect: You won't be affected by the stack changes of "Kawaii Energy" for 50 turns (removes after triggering once).\nOn Ultimate Skill, trigger the following effect: Increase the target's Damage Taken from Water attacks by 7.5% (max 4 stacks).`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Brightest Starr`,
                    description: `After every 3 turns, trigger "Your Only Idol".\n\n"Your Only Idol"\nIncrease the party's Ultimate Skill Power by 50% for 1 turn.\nGain yourself the following effect for 1 turn: When in Guard Stance trigger the following effect: Increase your current Ultimate Skill CD by 3 turns and gain yourself Taunt for 1 turn.\nGain yourself the following effect for 1 turn: When in Guard Stance, trigger "Wow~ Super Kawaii~♪" based on your stacks of "Kawaii Energy" for 1 turn.\n\n"Wow~ Super Kawaii~♪"\nHeal the party for 30% of your max HP.\nDecrease the party's Damage Taken by 10% for 1 turn.\nIncrease your Defense buffs by 5% for 1 turn.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Heart Racing ♡ Signal of Love`,
                    description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 3 turns.\nAfter every 3 turns, trigger the following effect: Increase the Water allies' Attack Power by 120% for 1 turn, then increase the Water allies' Damage Output by 60% for 1 turn.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Damage Reduction+`,
                    description: `Reduce your Damage Taken by 5%.`
                },
                [SkillType.GENERAL_2]: {
                    name: `Silence Immunity`,
                    description: `Gain immunity to Silence`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: `ラブラブメイドの萌え萌えビーム`,
                    description: `自分は1/1/2/2/3スタックの《恋の萌え萌えエナジー》を獲得し(最高3スタック)(各バトルで1回のみ有効) 、自分以外の味方水属性メンバー全体が「必殺技攻撃時『自分の80/90/100/110/120%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、自分の265/298/331/364/397%の攻撃力でターゲットにダメージを与える[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `ラブラブメイドの萌え萌えビーム`,
                    description: `自分は1スタックの《恋の萌え萌えエナジー》を獲得し(最高3スタック)(各バトルで1回のみ有効) 、自分以外の味方水属性メンバー全体が「必殺技攻撃時『自分の80%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、自分の265%の攻撃力でターゲットにダメージを与える[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `ラブラブメイドの萌え萌えビーム`,
                    description: `自分は1スタックの《恋の萌え萌えエナジー》を獲得し(最高3スタック)(各バトルで1回のみ有効) 、自分以外の味方水属性メンバー全体が「必殺技攻撃時『自分の90%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、自分の298%の攻撃力でターゲットにダメージを与える[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `ラブラブメイドの萌え萌えビーム`,
                    description: `自分は2スタックの《恋の萌え萌えエナジー》を獲得し(最高3スタック)(各バトルで1回のみ有効) 、自分以外の味方水属性メンバー全体が「必殺技攻撃時『自分の100%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、自分の331%の攻撃力でターゲットにダメージを与える[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `ラブラブメイドの萌え萌えビーム`,
                    description: `自分は2スタックの《恋の萌え萌えエナジー》を獲得し(最高3スタック)(各バトルで1回のみ有効) 、自分以外の味方水属性メンバー全体が「必殺技攻撃時『自分の110%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、自分の364%の攻撃力でターゲットにダメージを与える[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `ラブラブメイドの萌え萌えビーム`,
                    description: `自分は3スタックの《恋の萌え萌えエナジー》を獲得し(最高3スタック)(各バトルで1回のみ有効) 、自分以外の味方水属性メンバー全体が「必殺技攻撃時『自分の120%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得し、自分の397%の攻撃力でターゲットにダメージを与える[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `簡易メイド護身術`,
                    description: `自分の100%の攻撃力でターゲットにダメージを与え、自分は防御状態になる`
                },
                [SkillType.LEADER]: {
                    name: `☆スターライトガール☆`,
                    description: `味方全体の最大HPを40%増加させる\n味方全体の攻撃力を50%増加させる\n自分が「チーム内に4人以上の水属性のキャラがいる時、『3ターンごとに《流れ星のように落ちていく》を誘発する』を発動する」を獲得する\n自分が「チーム内にちょうど4種類のポジションのキャラがいる時、『3ターンごとに《流れ星のように落ちていく》を誘発する』を発動する」を獲得する\n自分が「チーム内に1人以上のアタッカーがいる時、『3ターンごとに《流れ星のように落ちていく》を誘発する』を発動する」を獲得する\n自分が「チーム内に1人以上のサポーターがいる時、『3ターンごとに《流れ星のように落ちていく》を誘発する』を発動する」を獲得する\n\n《流れ星のように落ちていく》\n味方全体の攻撃力を15%増加させる(1ターン)\n味方全体の与えるダメージを10%増加させる(1ターン)\n味方全体の必殺技ダメージを12.5%増加させる(1ターン)\n味方全体が「必殺技攻撃時『自分の10%の攻撃力でターゲットにダメージを与える』を追加する(1ターン)」を獲得する\n味方全体が受けるダメージを5%減少させる(1ターン)\n敵全体が受けるダメージを10%増加させる(1ターン)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `極秘改造魔導兵装`,
                    description: `必殺技攻撃時「自分が《恋の萌え萌えエナジー》のスタック数変動効果の影響を受けなくなる(50ターン)」を誘発する(誘発1回後に解除)\n必殺技攻撃時「ターゲットが受ける水属性ダメージを7.5%増加させる(最高4スタック)」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `ステージで最も輝く存在`,
                    description: `3ターンごとに「《あなただけのアイドル》」を誘発する\n\n《あなただけのアイドル》\n味方全体の必殺技ダメージを50%増加させる(1ターン)\n自分が「防御時、『自分の現在の必殺技CDを3ターン増加させ、自分が挑発効果を獲得する(1ターン)』を誘発する(1ターン)」を得る\n自分が「防御時、自分の《恋の萌え萌えエナジー》のスタックに応じて、『萌え～萌え～パパパーン♪』を誘発する(1ターン)」を得る\n\n《萌え～萌え～パパパーン♪》\n自分の最大HPの30%分味方全体に治療を行う\n味方全体の受けるダメージを10%減少させる(1ターン)\n自分の防御のダメージ軽減を5%増加させる(1ターン)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `加速するドキドキ♡は恋のスタートの合図`,
                    description: `1ターン目に「自分の現在の必殺技CDを3ターン減少させる」を誘発する\n3ターンごとに「味方の水属性メンバーの攻撃力を120%増加させ(1ターン)、味方の水属性メンバーの与えるダメージを60%増加させる(1ターン)」を誘発する`
                },
                [SkillType.GENERAL_1]: {
                    name: `ダメージ減少+`,
                    description: `自分が受けるダメージを5%減少させる`
                },
                [SkillType.GENERAL_2]: {
                    name: `沈黙無効`,
                    description: `自分を沈黙無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `러브 메이드의 모에모에 빔`,
                    description: `자신은 1/1/2/2/3중첩의 《사랑의 모에 에너지》 획득(최대 3중첩)(매 전투당 1회만 효과 적용), 자신 이외의 수속성 아군은 「궁극기 발동 시 『자신의 공격 데미지의 80/90/100/110/120%만큼 타깃에게 데미지』추가(1턴)」 획득, 다시 자신의 공격 데미지의 265/298/331/364/397%만큼 타깃에게 데미지 [CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `러브 메이드의 모에모에 빔`,
                    description: `자신은 1중첩의 《사랑의 모에 에너지》 획득(최대 3중첩)(매 전투당 1회만 효과 적용), 자신 이외의 수속성 아군은 「궁극기 발동 시 『자신의 공격 데미지의 80%만큼 타깃에게 데미지』추가(1턴)」 획득, 다시 자신의 공격 데미지의 265%만큼 타깃에게 데미지 [CD: 3]`
                },
                [SkillType.SKILL_2]: {
                    name: `러브 메이드의 모에모에 빔`,
                    description: `자신은 1중첩의 《사랑의 모에 에너지》 획득(최대 3중첩)(매 전투당 1회만 효과 적용), 자신 이외의 수속성 아군은 「궁극기 발동 시 『자신의 공격 데미지의 90%만큼 타깃에게 데미지』추가(1턴)」 획득, 다시 자신의 공격 데미지의 298%만큼 타깃에게 데미지 [CD: 3]`
                },
                [SkillType.SKILL_3]: {
                    name: `러브 메이드의 모에모에 빔`,
                    description: `자신은 2중첩의 《사랑의 모에 에너지》 획득(최대 3중첩)(매 전투당 1회만 효과 적용), 자신 이외의 수속성 아군은 「궁극기 발동 시 『자신의 공격 데미지의 100%만큼 타깃에게 데미지』추가(1턴)」 획득, 다시 자신의 공격 데미지의 331%만큼 타깃에게 데미지 [CD: 3]`
                },
                [SkillType.SKILL_4]: {
                    name: `러브 메이드의 모에모에 빔`,
                    description: `자신은 2중첩의 《사랑의 모에 에너지》 획득(최대 3중첩)(매 전투당 1회만 효과 적용), 자신 이외의 수속성 아군은 「궁극기 발동 시 『자신의 공격 데미지의 110%만큼 타깃에게 데미지』추가(1턴)」 획득, 다시 자신의 공격 데미지의 364%만큼 타깃에게 데미지 [CD: 3]`
                },
                [SkillType.SKILL_5]: {
                    name: `러브 메이드의 모에모에 빔`,
                    description: `자신은 3중첩의 《사랑의 모에 에너지》 획득(최대 3중첩)(매 전투당 1회만 효과 적용), 자신 이외의 수속성 아군은 「궁극기 발동 시 『자신의 공격 데미지의 120%만큼 타깃에게 데미지』추가(1턴)」 획득, 다시 자신의 공격 데미지의 397%만큼 타깃에게 데미지 [CD: 3]`
                },
                [SkillType.ATTACK]: {
                    name: `메이드 간편 호신술`,
                    description: `자신의 공격 데미지의 100%만큼 타깃에게 데미지, 자신은 방어 상태 진입`
                },
                [SkillType.LEADER]: {
                    name: `☆스타라이트 걸☆`,
                    description: `아군 전체의 최대 HP 40% 증가\n아군 전체의 공격 데미지 50% 증가\n자신은 「팀에 최소 4명의 수속성 캐릭터가 있을 시, 『3턴마다, 《유성처럼 추락》트리거』발동」획득\n자신은 「팀에 4가지 위치가 갖추어졌을 시, 『3턴마다, 《유성처럼 추락》트리거』발동」획득\n자신은 「팀에 딜러가 1명 이상 있을 시, 『3턴마다, 《유성처럼 추락》트리거』발동」획득\n자신은 「팀에 서포터가 1명 이상 있을 시, 『3턴마다, 《유성처럼 추락》트리거』발동」획득\n\n《유성처럼 추락》\n아군 전체의 공격 데미지 15% 증가(1턴)\n아군 전체의 가하는 데미지 10% 증가(1턴)\n아군 전체의 궁극기 데미지 12.5% 증가(1턴)\n아군 전체는 「궁극기 발동 시 『자신의 공격 데미지의 10%만큼 타깃에게 데미지 』추가(1턴)」 획득\n아군 전체의 받는 데미지 5% 감소(1턴)\n적 전체의 받는 데미지 10% 증가(1턴)`
                },
                [SkillType.PASSIVE_1]: {
                    name: `비밀 개조 마도 전투복`,
                    description: `궁극기 발동 시 「자신은 《사랑의 모에 에너지》 중첩 수 변동 효과의 영향을 받지 않음(50턴)」트리거(1회 트리거 후 제거)\n궁극기 발동 시 「타깃이 받는 수속성 데미지 7.5% 증가(최대 4중첩)」트리거`
                },
                [SkillType.PASSIVE_2]: {
                    name: `무대 위에서 가장 빛나는 존재`,
                    description: `3턴마다 「《너만의 아이돌》」트리거\n\n《너만의 아이돌》\n아군 전체의 궁극기 데미지 50% 증가(1턴)\n자신은 「방어 시 『자신의 현재 궁극기 CD 3턴 증가, 자신은 도발 효과 획득(1턴)』 트리거(1턴)」획득\n자신은 「방어 시 자신의 《사랑의 모에 에너지》 중첩 수에 따라 『《모에~모에~쿵쿵~♪》』 트리거(1턴)」획득\n\n《모에~모에~쿵쿵~♪》\n자신의 최대 HP 30%만큼 아군 전체를 치유\n아군 전체의 받는 데미지 10% 감소(1턴)\n자신의 방어 데미지 감소 5% 증가(1턴)`
                },
                [SkillType.PASSIVE_3]: {
                    name: `두근두근♡사랑 시작의 신호`,
                    description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 3턴 감소」트리거\n3턴마다 「수속성 아군 캐릭터의 공격 데미지 120% 증가(1턴), 다시 수속성 아군 캐릭터의 가하는 데미지 60% 증가(1턴)」트리거`
                },
                [SkillType.GENERAL_1]: {
                    name: `받는 데미지 감소+`,
                    description: `자신이 받는 데미지 5% 감소`
                },
                [SkillType.GENERAL_2]: {
                    name: `침묵 면역`,
                    description: `자신에게 침묵 면역 효과`
                }
            }
        }
    },
]