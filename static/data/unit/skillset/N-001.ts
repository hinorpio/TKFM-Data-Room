import { DispatchSkillType, Locale, SkillType } from '@/plugins/utils/enums';
import { SkillSet } from '@/interface/unit/skillset';

export const SkillSet_10901: SkillSet[] =  [
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
        dispatchSkill: { type: DispatchSkillType.PURCHASE_PERMITS, level: 1 },
        skill: {
            [Locale.tc]: {
                [SkillType.SKILL_S]: {
                    name: `堅定守護`,
                    description: `以攻擊力265/298/331/364/397%對目標造成傷害，並使自身獲得嘲諷效果(1回合)，且變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `堅定守護`,
                    description: `以攻擊力265%對目標造成傷害，並使自身獲得嘲諷效果(1回合)，且變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `堅定守護`,
                    description: `以攻擊力298%對目標造成傷害，並使自身獲得嘲諷效果(1回合)，且變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `堅定守護`,
                    description: `以攻擊力331%對目標造成傷害，並使自身獲得嘲諷效果(1回合)，且變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `堅定守護`,
                    description: `以攻擊力364%對目標造成傷害，並使自身獲得嘲諷效果(1回合)，且變為防禦狀態，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `堅定守護`,
                    description: `以攻擊力397%對目標造成傷害，並使自身獲得嘲諷效果(1回合)，且變為防禦狀態，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `斬擊`,
                    description: `以攻擊力100%對目標造成傷害`
                },
                [SkillType.LEADER]: {
                    name: `闇之祝福`,
                    description: `使我方闇屬性角色最大HP增加10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `攻守切換`,
                    description: `普攻時，有50%機率觸發\`使自身變為防禦狀態\`效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `法斯帝國防守術`,
                    description: `使自身防禦時的減傷效果增加10%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `快速援護`,
                    description: `每Wave的第1回合，觸發\"自身必殺技CD減少3回合\"效果`
                },
                [SkillType.DISPATCH]: {
                    name: `視財如命(購買許可↑) (3潛)`,
                    description: `進行派遣時，微量提升購買許可雙倍獲得機率Lv1(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痺 (6潛)`,
                    description: `使自身免疫麻痺`
                }
            },
            [Locale.sc]: {
                [SkillType.SKILL_S]: {
                    name: `坚定守护`,
                    description: `以攻击力265/298/331/364/397%对目标造成伤害，并使自身获得嘲讽效果(1回合)，且变为防御状态，CD: 3`
                },
                [SkillType.SKILL_1]: {
                    name: `坚定守护`,
                    description: `以攻击力265%对目标造成伤害，并使自身获得嘲讽效果(1回合)，且变为防御状态，CD: 3`
                },
                [SkillType.SKILL_2]: {
                    name: `坚定守护`,
                    description: `以攻击力298%对目标造成伤害，并使自身获得嘲讽效果(1回合)，且变为防御状态，CD: 3`
                },
                [SkillType.SKILL_3]: {
                    name: `坚定守护`,
                    description: `以攻击力331%对目标造成伤害，并使自身获得嘲讽效果(1回合)，且变为防御状态，CD: 3`
                },
                [SkillType.SKILL_4]: {
                    name: `坚定守护`,
                    description: `以攻击力364%对目标造成伤害，并使自身获得嘲讽效果(1回合)，且变为防御状态，CD: 3`
                },
                [SkillType.SKILL_5]: {
                    name: `坚定守护`,
                    description: `以攻击力397%对目标造成伤害，并使自身获得嘲讽效果(1回合)，且变为防御状态，CD: 3`
                },
                [SkillType.ATTACK]: {
                    name: `斩击`,
                    description: `以攻击力100%对目标造成伤害`
                },
                [SkillType.LEADER]: {
                    name: `闇之祝福`,
                    description: `使我方闇属性角色最大HP增加10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `攻守切换`,
                    description: `普攻时，有50%机率触发\`使自身变为防御状态\`效果`
                },
                [SkillType.PASSIVE_2]: {
                    name: `法斯帝国防守术`,
                    description: `使自身防御时的减伤效果增加10%`
                },
                [SkillType.PASSIVE_3]: {
                    name: `快速援护`,
                    description: `每Wave的第1回合，触发\"自身必杀技CD减少3回合\"效果`
                },
                [SkillType.DISPATCH]: {
                    name: `视财如命(购买许可↑) (3潜)`,
                    description: `进行派遣时，微量提升购买许可双倍获得机率Lv1(全域效果)`
                },
                [SkillType.GENERAL_2]: {
                    name: `免疫麻痹 (6潜)`,
                    description: `使自身免疫麻痹`
                }
            },
            [Locale.en]: {
                [SkillType.SKILL_S]: {
                    name: `Cover`,
                    description: `Damage target (265/298/331/364/397% Attack Power), gain Taunt for 1 turn, and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_1]: {
                    name: `Cover`,
                    description: `Damage target (265% Attack Power), gain Taunt for 1 turn, and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_2]: {
                    name: `Cover`,
                    description: `Damage target (298% Attack Power), gain Taunt for 1 turn, and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_3]: {
                    name: `Cover`,
                    description: `Damage target (331% Attack Power), gain Taunt for 1 turn, and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_4]: {
                    name: `Cover`,
                    description: `Damage target (364% Attack Power), gain Taunt for 1 turn, and enter Guard Stance. (CD:3)`
                },
                [SkillType.SKILL_5]: {
                    name: `Cover`,
                    description: `Damage target (397% Attack Power), gain Taunt for 1 turn, and enter Guard Stance. (CD:3)`
                },
                [SkillType.ATTACK]: {
                    name: `Slash`,
                    description: `Damage target (100% Attack Power)`
                },
                [SkillType.LEADER]: {
                    name: `Best Wishes`,
                    description: `Increase Dark allies' max HP by 10%`
                },
                [SkillType.PASSIVE_1]: {
                    name: `Quick Reflexes`,
                    description: `On Basic Attack, there's a 50% chance to enter Guard Stance.`
                },
                [SkillType.PASSIVE_2]: {
                    name: `Phasi Protection`,
                    description: `Take 10% less damage while in Guard Stance.`
                },
                [SkillType.PASSIVE_3]: {
                    name: `Minutemen`,
                    description: `On the first round of each wave, decrease your current Ultimate Skill CD by 3.`
                },
                [SkillType.GENERAL_1]: {
                    name: `Money Matters (Purchase Permits↑)`,
                    description: `When dispatched, slightly(Lv1) increase the 2x drop rate of Purchase Permits. (Global Effect)`
                },
                [SkillType.GENERAL_2]: {
                    name: `Paralysis Immunity (Self)`,
                    description: `Gain immunity to Paralysis`
                }
            },
            [Locale.jp]: {
                [SkillType.SKILL_S]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_4]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_5]: {
                    name: ``,
                    description: ``
                },
                [SkillType.ATTACK]: {
                    name: ``,
                    description: ``
                },
                [SkillType.LEADER]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_2]: {
                    name: ``,
                    description: ``
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_4]: {
                    name: ``,
                    description: ``
                },
                [SkillType.SKILL_5]: {
                    name: ``,
                    description: ``
                },
                [SkillType.ATTACK]: {
                    name: ``,
                    description: ``
                },
                [SkillType.LEADER]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_2]: {
                    name: ``,
                    description: ``
                },
                [SkillType.PASSIVE_3]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_1]: {
                    name: ``,
                    description: ``
                },
                [SkillType.GENERAL_2]: {
                    name: ``,
                    description: ``
                }
            }
        }
    },
]