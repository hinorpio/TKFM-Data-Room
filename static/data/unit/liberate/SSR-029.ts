import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';

export const LiberateSkillSet_10043: LiberateSkillSet[] = [
    {
        version: 1,
        lastDate: "",
        remark: {
            [Locale.tc]: null,
            [Locale.sc]: null,
            [Locale.en]: null,
            [Locale.jp]: null,
            [Locale.kr]: null
        },
        detail: {
            [LiberationStage.LIBERATION_1]:{
                material: [
                    { code: ItemCode.LIBERATE_STONE, "quantity": 1 },
                    { code: "ESSENCE", "quantity": 10 },
                    { code: ItemCode.FLAWLESS, "quantity": 1 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 300000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.SKILL_S]: {
                            name: `至高至上至強萬聖精靈王`,
                            description: `使我方全體攻擊力增加22.2/25.9/29.6/33.3/37%(4回合)(不可疊加)，使自身以外我方全體攻擊者、輔助者獲得「必殺時，追加『以自身攻擊力0/0/30.4/34.2/38%對目標造成傷害』(5回合)(不可疊加)」，並使目標受到風屬性傷害增加13.3/15.5/17.8/20/22.2%(4回合)(不可疊加)，再以自身攻擊力165.6/193.2/220.8/248.4/274%對目標造成傷害2次。CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `至高至上至強萬聖精靈王`,
                            description: `使我方全體攻擊力增加22.2%(4回合)(不可疊加)，使目標受到風屬性傷害增加13.3%(4回合)(不可疊加)，再以自身攻擊力165.6%對目標造成傷害2次。CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `至高至上至強萬聖精靈王`,
                            description: `使我方全體攻擊力增加25.9%(4回合)(不可疊加)，使目標受到風屬性傷害增加15.5%(4回合)(不可疊加)，再以自身攻擊力193.2%對目標造成傷害2次。CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `至高至上至強萬聖精靈王`,
                            description: `使我方全體攻擊力增加29.6%(4回合)(不可疊加)，使自身以外我方全體攻擊者、輔助者獲得「必殺時，追加『以自身攻擊力30.4%對目標造成傷害』(5回合)(不可疊加)」，並使目標受到風屬性傷害增加17.8%(4回合)(不可疊加)，再以自身攻擊力220.8%對目標造成傷害2次。CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `至高至上至強萬聖精靈王`,
                            description: `使我方全體攻擊力增加33.3%(4回合)(不可疊加)，使自身以外我方全體攻擊者、輔助者獲得「必殺時，追加『以自身攻擊力34.2%對目標造成傷害』(5回合)(不可疊加)」，並使目標受到風屬性傷害增加20%(4回合)(不可疊加)，再以自身攻擊力248.4%對目標造成傷害2次。CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `至高至上至強萬聖精靈王`,
                            description: `使我方全體攻擊力增加37%(4回合)(不可疊加)，使自身以外我方全體攻擊者、輔助者獲得「必殺時，追加『以自身攻擊力38%對目標造成傷害』(5回合)(不可疊加)」，並使目標受到風屬性傷害增加22.2%(4回合)(不可疊加)，再以自身攻擊力274%對目標造成傷害2次。CD: 4`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `出擊，我的精靈(奴僕)`,
                            description: `普攻時，觸發「使目標受到攻擊者、輔助者傷害增加10%(最多3層)」`
                        }
                    },
                    [Locale.sc]: {
                        [SkillType.SKILL_S]: {
                            name: `至高至上至强万圣精灵王`,
                            description: `使我方全体攻击力增加22.2/25.9/29.6/33.3/37%(4回合)(不可叠加)，使自身以外我方全体攻击者、辅助者获得「必杀时，追加『以自身攻击力0/0/30.4/34.2/38%对目标造成伤害』(5回合)(不可叠加)」，并使目标受到风属性伤害增加13.3/15.5/17.8/20/22.2%(4回合)(不可叠加)，再以自身攻击力165.6/193.2/220.8/248.4/274%对目标造成伤害2次。CD: 4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `至高至上至强万圣精灵王`,
                            description: `使我方全体攻击力增加22.2%(4回合)(不可叠加)，使目标受到风属性伤害增加13.3%(4回合)(不可叠加)，再以自身攻击力165.6%对目标造成伤害2次。CD: 4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `至高至上至强万圣精灵王`,
                            description: `使我方全体攻击力增加25.9%(4回合)(不可叠加)，使目标受到风属性伤害增加15.5%(4回合)(不可叠加)，再以自身攻击力193.2%对目标造成伤害2次。CD: 4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `至高至上至强万圣精灵王`,
                            description: `使我方全体攻击力增加29.6%(4回合)(不可叠加)，使自身以外我方全体攻击者、辅助者获得「必杀时，追加『以自身攻击力30.4%对目标造成伤害』(5回合)(不可叠加)」，并使目标受到风属性伤害增加17.8%(4回合)(不可叠加)，再以自身攻击力220.8%对目标造成伤害2次。CD: 4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `至高至上至强万圣精灵王`,
                            description: `使我方全体攻击力增加33.3%(4回合)(不可叠加)，使自身以外我方全体攻击者、辅助者获得「必杀时，追加『以自身攻击力34.2%对目标造成伤害』(5回合)(不可叠加)」，并使目标受到风属性伤害增加20%(4回合)(不可叠加)，再以自身攻击力248.4%对目标造成伤害2次。CD: 4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `至高至上至强万圣精灵王`,
                            description: `使我方全体攻击力增加37%(4回合)(不可叠加)，使自身以外我方全体攻击者、辅助者获得「必杀时，追加『以自身攻击力38%对目标造成伤害』(5回合)(不可叠加)」，并使目标受到风属性伤害增加22.2%(4回合)(不可叠加)，再以自身攻击力274%对目标造成伤害2次。CD: 4`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `出击，我的精灵(奴僕)`,
                            description: `普攻时，触发「使目标受到攻击者、辅助者伤害增加10%(最多3层)」`
                        }
                    },
                    [Locale.en]: {
                        [SkillType.SKILL_S]: {
                            name: `Supreme Halloween Elf Queen`,
                            description: `Increase the party's Attack Power by 22.2/25.9/29.6/33.3/37% for 4 turns (Non-stackable), other allied Attackers and Supporters gain the following effect: On Ultimate Skill, deal additional damage to the target for 5 turns (0/0/30.4/34.2/38% Attack Power) (Non-stackable), increase the target's Damage Taken from Wind attacks by 13.3/15.5/17.8/20/22.2% for 4 turns (Non-stackable), then damage the target 2 times (165.6/193.2/220.8/248.4/274% Attack Power). CD:4`
                        },
                        [SkillType.SKILL_1]: {
                            name: `Supreme Halloween Elf Queen`,
                            description: `Increase the party's Attack Power by 22.2% for 4 turns (Non-stackable), increase the target's Damage Taken from Wind attacks by 13.3% for 4 turns (Non-stackable), then damage the target 2 times (165.6% Attack Power). CD:4`
                        },
                        [SkillType.SKILL_2]: {
                            name: `Supreme Halloween Elf Queen`,
                            description: `Increase the party's Attack Power by 25.9% for 4 turns (Non-stackable), increase the target's Damage Taken from Wind attacks by 15.5% for 4 turns (Non-stackable), then damage the target 2 times (193.2% Attack Power). CD:4`
                        },
                        [SkillType.SKILL_3]: {
                            name: `Supreme Halloween Elf Queen`,
                            description: `Increase the party's Attack Power by 29.6% for 4 turns (Non-stackable), other allied Attackers and Supporters gain the following effect: On Ultimate Skill, deal additional damage to the target for 5 turns (30.4% Attack Power) (Non-stackable), increase the target's Damage Taken from Wind attacks by 17.8% for 4 turns (Non-stackable), then damage the target 2 times (220.8% Attack Power). CD:4`
                        },
                        [SkillType.SKILL_4]: {
                            name: `Supreme Halloween Elf Queen`,
                            description: `Increase the party's Attack Power by 33.3% for 4 turns (Non-stackable), other allied Attackers and Supporters gain the following effect: On Ultimate Skill, deal additional damage to the target for 5 turns (34.2% Attack Power) (Non-stackable), increase the target's Damage Taken from Wind attacks by 20% for 4 turns (Non-stackable), then damage the target 2 times (248.4% Attack Power). CD:4`
                        },
                        [SkillType.SKILL_5]: {
                            name: `Supreme Halloween Elf Queen`,
                            description: `Increase the party's Attack Power by 37% for 4 turns (Non-stackable), other allied Attackers and Supporters gain the following effect: On Ultimate Skill, deal additional damage to the target for 5 turns (38% Attack Power) (Non-stackable), increase the target's Damage Taken from Wind attacks by 22.2% for 4 turns (Non-stackable), then damage the target 2 times (274% Attack Power). CD:4`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `My Elves, Time to Strike`,
                            description: `On Basic Attack, trigger the following effect: Increase the target's Damage Taken from Attackers and Supporters by 10%. (max 3 stacks)`
                        }
                    },
                    [Locale.jp]: {
                        [SkillType.SKILL_S]: {
                            name: `最強最高のハロウィンエルフ王`,
                            description: `味方全体の攻撃力を22.2/25.9/29.6/33.3/37%増加させ(4ターン)(スタック不可)、自分以外の味方全体のアタッカー、サポーターが「必殺技攻撃時『自分の0/0/30.4/34.2/38%の攻撃力でターゲットにダメージを与える』を追加する(5ターン)(スタック不可)」を獲得し、ターゲットが受ける風属性ダメージを13.3/15.5/17.8/20/22.2%増加させ(4ターン)(スタック不可)、自分の165.6/193.2/220.8/248.4/274%の攻撃力でターゲットに2回ダメージを与える[CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `最強最高のハロウィンエルフ王`,
                            description: `味方全体の攻撃力を22.2%増加させ(4ターン)(スタック不可)、ターゲットが受ける風属性ダメージを13.3%増加させ(4ターン)(スタック不可)、自分の165.6%の攻撃力でターゲットに2回ダメージを与える[CD4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `最強最高のハロウィンエルフ王`,
                            description: `味方全体の攻撃力を25.9%増加させ(4ターン)(スタック不可)、ターゲットが受ける風属性ダメージを15.5%増加させ(4ターン)(スタック不可)、自分の193.2%の攻撃力でターゲットに2回ダメージを与える[CD4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `最強最高のハロウィンエルフ王`,
                            description: `味方全体の攻撃力を29.6%増加させ(4ターン)(スタック不可)、自分以外の味方全体のアタッカー、サポーターが「必殺技攻撃時『自分の30.4%の攻撃力でターゲットにダメージを与える』を追加する(5ターン)(スタック不可)」を獲得し、ターゲットが受ける風属性ダメージを17.8%増加させ(4ターン)(スタック不可)、自分の220.8%の攻撃力でターゲットに2回ダメージを与える[CD: 4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `最強最高のハロウィンエルフ王`,
                            description: `味方全体の攻撃力を33.3%増加させ(4ターン)(スタック不可)、自分以外の味方全体のアタッカー、サポーターが「必殺技攻撃時『自分の34.2%の攻撃力でターゲットにダメージを与える』を追加する(5ターン)(スタック不可)」を獲得し、ターゲットが受ける風属性ダメージを20%増加させ(4ターン)(スタック不可)、自分の248.4%の攻撃力でターゲットに2回ダメージを与える[CD: 4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `最強最高のハロウィンエルフ王`,
                            description: `味方全体の攻撃力を37%増加させ(4ターン)(スタック不可)、自分以外の味方全体のアタッカー、サポーターが「必殺技攻撃時『自分の38%の攻撃力でターゲットにダメージを与える』を追加する(5ターン)(スタック不可)」を獲得し、ターゲットが受ける風属性ダメージを22.2%増加させ(4ターン)(スタック不可)、自分の274%の攻撃力でターゲットに2回ダメージを与える[CD: 4]`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `出撃せよ、私のエルフ（奴隷）！`,
                            description: `通常攻撃時「ターゲットがアタッカー、サポーターから受けるダメージを10%増加させる(最高3スタック)」を誘発する`
                        }
                    },
                    [Locale.kr]: {
                        [SkillType.SKILL_S]: {
                            name: `최강 최고 최상의 할로 엘프 퀸`,
                            description: `아군 전체의 공격 데미지 22.2/25.9/29.6/33.3/37% 증가(4턴)(중첩 불가), 자신 이외의 아군 딜러, 서포터는 「궁극기 발동 시 『자신의 공격 데미지의 0/0/30.4/34.2/38%만큼 타깃에게 데미지』 추가(5턴)(중첩 불가)」 획득, 타깃이 받는 풍속성 데미지 13.3/15.5/17.8/20/22.2% 증가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 165.6/193.2/220.8/248.4/274%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_1]: {
                            name: `최강 최고 최상의 할로 엘프 퀸`,
                            description: `아군 전체의 공격 데미지 22.2% 증가(4턴)(중첩 불가), 타깃이 받는 풍속성 데미지 13.3% 증가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 165.6%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_2]: {
                            name: `최강 최고 최상의 할로 엘프 퀸`,
                            description: `아군 전체의 공격 데미지 25.9% 증가(4턴)(중첩 불가), 타깃이 받는 풍속성 데미지 15.5% 증가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 193.2%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_3]: {
                            name: `최강 최고 최상의 할로 엘프 퀸`,
                            description: `아군 전체의 공격 데미지 29.6% 증가(4턴)(중첩 불가), 자신 이외의 아군 딜러, 서포터는 「궁극기 발동 시 『자신의 공격 데미지의 30.4%만큼 타깃에게 데미지』 추가(5턴)(중첩 불가)」 획득, 타깃이 받는 풍속성 데미지 17.8% 증가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 220.8%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_4]: {
                            name: `최강 최고 최상의 할로 엘프 퀸`,
                            description: `아군 전체의 공격 데미지 33.3% 증가(4턴)(중첩 불가), 자신 이외의 아군 딜러, 서포터는 「궁극기 발동 시 『자신의 공격 데미지의 34.2%만큼 타깃에게 데미지』 추가(5턴)(중첩 불가)」 획득, 타깃이 받는 풍속성 데미지 20% 증가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 248.4%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.SKILL_5]: {
                            name: `최강 최고 최상의 할로 엘프 퀸`,
                            description: `아군 전체의 공격 데미지 37% 증가(4턴)(중첩 불가), 자신 이외의 아군 딜러, 서포터는 「궁극기 발동 시 『자신의 공격 데미지의 38%만큼 타깃에게 데미지』 추가(5턴)(중첩 불가)」 획득, 타깃이 받는 풍속성 데미지 22.2% 증가(4턴)(중첩 불가), 다시 자신의 공격 데미지의 274%만큼 타깃에게 2회 데미지 [CD: 4]`
                        },
                        [SkillType.PASSIVE_2]: {
                            name: `출격! 나의 엘프(노예)여!`,
                            description: `일반 공격 시 「타깃이 받는 딜러, 서포터의 데미지 10% 증가(최대 3중첩)」 트리거`
                        }
                    }
                }
            },
            [LiberationStage.LIBERATION_2]:{
                material: [
                    { code: ItemCode.LIBERATE_STONE, "quantity": 1 },
                    { code: ItemCode.EVOLVE_WIND_LV3, "quantity": 20 },
                    { code: ItemCode.SKILL_FRAGMENT, "quantity": 150 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 400000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全體數據`,
                            description: `HP與ATK將永久提升10%\n\n最大生命值：3,434,188\n最大攻擊力：1,005,398`
                        },
                    },
                    [Locale.sc]: {
                        [SkillType.BASE_STAT]: {
                            name: `完全体数据`,
                            description: `HP与ATK将永久提升10%\n\n最大生命值：3,434,188\n最大攻击力：1,005,398`
                        },
                    },
                    [Locale.en]: {
                        [SkillType.BASE_STAT]: {
                            name: `Maxed Data`,
                            description: `Permanently Increase HP and ATK by 10%\n\nMax HP：3,434,188\nMax ATK：1,005,398`
                        },
                    },
                    [Locale.jp]: {
                        [SkillType.BASE_STAT]: {
                            name: `ステータス最大値`,
                            description: `HPとATKは永久に10%向上します\n\nHP最大値：3,434,188\nATK最大値：1,005,398`
                        },
                    },
                    [Locale.kr]: {
                        [SkillType.BASE_STAT]: {
                            name: `스탯 최대치`,
                            description: `HP와 ATK는 영구적으로 10% 상승합니다\n\nMax HP：3,434,188\nMax ATK：1,005,398`
                        },
                    }
                }
            },
            [LiberationStage.LIBERATION_3]:{
                material: [
                    { code: ItemCode.LIBERATE_STONE, "quantity": 1 },
                    { code: "ESSENCE", "quantity": 10 },
                    { code: ItemCode.FLAWLESS, "quantity": 1 },
                    { code: ItemCode.SLIVER_COIN, "quantity": 500000 },
                ],
                skill: {
                    [Locale.tc]: {
                        [SkillType.LEADER]: {
                            name: `古板的老女人過時了！`,
                            description: `我方全體最大HP增加55%\n我方全體攻擊者、治療者、輔助者獲得「我方隊伍風屬性角色有3人以上時，開啟『《糖果盛宴》』」\n自身獲得「我方隊伍風屬性角色有3人以上時，開啟『第1回合時，觸發「《萬聖精靈王的恩賜》」(觸發1次後清除)』」\n\n《糖果盛宴》\n攻擊力增加11.3%\n造成傷害增加30.8%\n普攻傷害增加38.5%\n必殺技傷害增加25.8%\n被治療時回復量增加25%\n普攻時，追加「以自身攻擊力25.5%對目標造成傷害」\n必殺時，追加「以自身攻擊力51.8%對目標造成傷害」\n\n《萬聖精靈王的恩賜》\n使【精靈王　賽露西亞】必殺技最大CD減少2回合(50回合)\n使我方全體輔助者當前必殺技CD減少4回合\n以自身攻擊力40%使我方全體攻擊力增加(50回合)\n使我方全體輔助者獲得「必殺時，觸發『使目標受到傷害增加5.13%(最多4層)、受到風屬性傷害增加7.7%(最多4層)』(50回合)」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `糖果徵收令`,
                            description: `普攻時，觸發「使目標受到普攻傷害增加10%(最多3層)」\n必殺時，觸發「使目標受到必殺技傷害增加5%(最多2層)、受到傷害增加7.4%(最多2層)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `為精靈王(我)而戰`,
                            description: `第1回合時，觸發「使自身當前必殺技CD減少4回合」(觸發1次後清除)\n必殺時，觸發「使我方全體風屬性角色獲得《為女王而戰》」\n\n《為女王而戰》\n造成傷害增加15%(最多2層)\n普攻時，追加「以自身攻擊力18%對目標造成傷害」(4回合)(不可疊加)`
                        }
                    },
                    [Locale.sc]: {
                        [SkillType.LEADER]: {
                            name: `古板的老女人过时了！`,
                            description: `我方全体最大HP增加55%\n我方全体攻击者、治疗者、辅助者获得「我方队伍风属性角色有3人以上时，开启『《糖果盛宴》』」\n自身获得「我方队伍风属性角色有3人以上时，开启『第1回合时，触发「《万圣精灵王的恩赐》」(触发1次后清除)』」\n\n《糖果盛宴》\n攻击力增加11.3%\n造成伤害增加30.8%\n普攻伤害增加38.5%\n必杀技伤害增加25.8%\n被治疗时回復量增加25%\n普攻时，追加「以自身攻击力25.5%对目标造成伤害」\n必杀时，追加「以自身攻击力51.8%对目标造成伤害」\n\n《万圣精灵王的恩赐》\n使【精灵王　赛露西亚】必杀技最大CD减少2回合(50回合)\n使我方全体辅助者当前必杀技CD减少4回合\n以自身攻击力40%使我方全体攻击力增加(50回合)\n使我方全体辅助者获得「必杀时，触发『使目标受到伤害增加5.13%(最多4层)、受到风属性伤害增加7.7%(最多4层)』(50回合)」`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `糖果徵收令`,
                            description: `普攻时，触发「使目标受到普攻伤害增加10%(最多3层)」\n必杀时，触发「使目标受到必杀技伤害增加5%(最多2层)、受到伤害增加7.4%(最多2层)」`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `为精灵王(我)而战`,
                            description: `第1回合时，触发「使自身当前必杀技CD减少4回合」(触发1次后清除)\n必杀时，触发「使我方全体风属性角色获得《为女王而战》」\n\n《为女王而战》\n造成伤害增加15%(最多2层)\n普攻时，追加「以自身攻击力18%对目标造成伤害」(4回合)(不可叠加)`
                        }
                    },
                    [Locale.en]: {
                        [SkillType.LEADER]: {
                            name: `Stupid Old Hag!`,
                            description: `Increase the party's max HP by 55%.\nAllied Attackers, Healers, and Supporters gain the following effect: When there are 3 or more Wind allies in the party, activate "Candy Feast".\nGain yourself the following effect: When there are 3 or more Wind allies in the party, activate "On the 1st turn, trigger Halloween Elf Queen's Blessing" (removes after triggering once).\n\n"Candy Feast"\nIncrease Attack Power by 11.3%.\nIncrease Damage Output by 30.8%.\nIncrease Basic Attack Power by 38.5%.\nIncrease Ultimate Skill Power by 25.8%.\nIncrease Recovery Rate by by 25%.\nOn Basic Attack, deal additional damage to the target (25.5% Attack Power).\nOn Ultimate Skill, deal additional damage to the target (51.8% Attack Power).\n\n"Halloween Elf Queen's Blessing"\nDecrease [Elf Queen Salucia's] Ultimate Skill max CD by 4 turns.\nIncrease the party's Attack Power for 40% of your Attack Power for 50 turns.\nAllied Supporters gain the following effect: On Ultimate Skill, trigger the following effect: Increase the target's Damage Taken by 5.13% (max 4 stacks) and Damage Taken from Wind attacks by 7.7% for 50 turns (max 4 stacks).`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `Candy Wanted`,
                            description: `On Basic Attack, trigger the following effect: Increase the target's Damage Taken from Basic Attacks by 10% (max 3 stacks).\nOn Ultimate Skill, trigger the following effect: Increase the target's Damage Taken from Ultimate Skills by 5%(max 2 stacks) and Damage Taken by 7.4%(max 2 stacks).`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `Fight for the Elf Queen`,
                            description: `On the 1st turn, trigger the following effect: Decrease your current Ultimate Skill CD by 4 turns (removes after triggering once).\nOn Ultimate Skill, trigger the following effect: Allied Wind characters gain "Fight for the Queen".\n\n"Fight for the Queen"\nIncrease Damage Output by 15% (max 2 stacks).\nOn Basic Attack, deal additional damage to the target for 4 turns (18% Attack Power) (Non-stackable).`
                        }
                    },
                    [Locale.jp]: {
                        [SkillType.LEADER]: {
                            name: `ひっこめ、老いぼれ女！`,
                            description: `味方全体の最大HPが55%増加する\n味方全体のアタッカー、ヒーラー、サポーターが「味方に3人以上の風属性キャラがいる時《キャンディーパーティー》を発動する」を獲得する\n自分が「味方に3人以上の風属性キャラがいる時『1ターン目に《ハロウィンエルフ王の施し》を誘発する(誘発1回後に解除)』を発動する」を獲得する\n\n《キャンディーパーティー》\n攻撃力が11.3%増加する\n与えるダメージが30.8%増加する\n通常攻撃ダメージが38.5%増加する\n必殺技ダメージが25.8%増加する\n治療を受ける時、回復HP量が25%増加する\n通常攻撃時「自分の25.5%の攻撃力でターゲットにダメージを与える」を追加する\n必殺技攻撃時「自分の51.8%の攻撃力でターゲットにダメージを与える」を追加する\n\n《ハロウィンエルフ王の施し》\n【エルフ王　セルシア】の必殺技最大CDを2ターン減少させる(50ターン)\n味方全体のサポーターの現在の必殺技CDを4ターン減少させる\n味方全体の攻撃力を自分の攻撃力の40％分増加させる(50ターン)\n味方全体のサポーターが「必殺技攻撃時『ターゲットの受けるダメージを5.13％増加させ(最高4スタック)、受ける風属性ダメージを7.7%増加させる(最高4スタック)』を誘発する(50ターン)」を獲得する`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `お菓子の徴収命令`,
                            description: `通常攻撃時「ターゲットの受ける通常攻撃ダメージを10%増加させる(最高3スタック)」を誘発する\n必殺技攻撃時「ターゲットの受ける必殺技ダメージを5%増加させ(最高2スタック)、受けるダメージを7.4%増加させる(最高2スタック)」を誘発する`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `エルフ王（私）のために戦え`,
                            description: `1ターン目に「自分の現在の必殺技CDを4ターン減少させる」を誘発する(誘発1回後に解除)\n必殺技攻撃時「味方全体の風属性キャラが《女王のために戦う》を獲得する」を誘発する\n\n《女王のために戦う》\n与えるダメージが15%増加する(最高2スタック)\n通常攻撃時「自分の18%の攻撃力でターゲットにダメージを与える」を追加する(4ターン)(スタック不可)`
                        }
                    },
                    [Locale.kr]: {
                        [SkillType.LEADER]: {
                            name: `꽉 막힌 그녀, 아웃!`,
                            description: `아군 전체의 최대 HP 55% 증가 \n아군 딜러, 힐러, 서포터는 「아군 팀에 풍속성 캐릭터가 3명 이상 있을 경우 『《캔디 축제》』 활성화」 획득\n자신은 「아군 팀에 풍속성 캐릭터가 3명 이상 있을 경우 『첫 번째 턴 시작 시 「《할로윈 엘프왕의 은총》」 트리거(1회 트리거 후 제거)』 활성화」 획득 \n\n《캔디 축제》 \n공격 데미지 11.3% 증가 \n가하는 데미지 30.8% 증가 \n일반 공격 데미지 38.5% 증가 \n궁극기 데미지 25.8% 증가 \n치유를 받을 시 회복량 25% 증가 \n일반 공격 시 「자신의 공격 데미지의 25.5%만큼 타깃에게 데미지」 추가 \n궁극기 발동 시 「자신의 공격 데미지의 51.8%만큼 타깃에게 데미지」 추가 \n\n《할로윈 엘프왕의 은총》 \n【엘프왕 살루시아】의 궁극기 최대 CD 2턴 감소(50턴) \n아군 서포터의 현재 궁극기 CD 4턴 감소 \n자신의 공격 데미지의 40%만큼 아군 전체의 공격 데미지 증가(50턴) \n아군 서포터는 「궁극기 발동 시 『타깃이 받는 데미지 5.13% 증가(최대 4중첩), 받는 풍속성 데미지 7.7% 증가(최대 4중첩)』 트리거(50턴)」 획득`
                        },
                        [SkillType.PASSIVE_1]: {
                            name: `사탕 징수령`,
                            description: `일반 공격 시 「타깃이 받는 일반 공격 데미지 10% 증가(최대 3중첩)」 트리거\n궁극기 발동 시 「타깃이 받는 궁극기 데미지 5% 증가(최대 2중첩), 받는 데미지 7.4% 증가(최대 2중첩)」 트리거`
                        },
                        [SkillType.PASSIVE_3]: {
                            name: `엘프의 왕, 나를 위한 전투`,
                            description: `첫 번째 턴 시작 시 「자신의 현재 궁극기 CD 4턴 감소」 트리거(1회 트리거 후 제거) \n궁극기 발동 시 「아군 풍속성 캐릭터는 《여왕을 위해 싸운다》 획득」 트리거 \n\n《여왕을 위해 싸운다》 \n가하는 데미지 15% 증가(최대 2중첩) \n일반 공격 시 「자신의 공격 데미지의 18%만큼 타깃에게 데미지」 추가(4턴)(중첩 불가)`
                        }
                    }
                }
            }
        }
    },
]
