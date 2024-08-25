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
                [SkillType.DISPATCH]: {
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
                    name: `堅固な守り`,
                    description: `265/298/331/364/397%の攻撃力でターゲットにダメージを与え、さらに自分に挑発効果(1ターン)を与え、防御状態になる[CD:3]`
                },
                [SkillType.SKILL_1]: {
                    name: `堅固な守り`,
                    description: `265%の攻撃力でターゲットにダメージを与え、さらに自分に挑発効果(1ターン)を与え、防御状態になる[CD:3]`
                },
                [SkillType.SKILL_2]: {
                    name: `堅固な守り`,
                    description: `298%の攻撃力でターゲットにダメージを与え、さらに自分に挑発効果(1ターン)を与え、防御状態になる[CD:3]`
                },
                [SkillType.SKILL_3]: {
                    name: `堅固な守り`,
                    description: `331%の攻撃力でターゲットにダメージを与え、さらに自分に挑発効果(1ターン)を与え、防御状態になる[CD:3]`
                },
                [SkillType.SKILL_4]: {
                    name: `堅固な守り`,
                    description: `364%の攻撃力でターゲットにダメージを与え、さらに自分に挑発効果(1ターン)を与え、防御状態になる[CD:3]`
                },
                [SkillType.SKILL_5]: {
                    name: `堅固な守り`,
                    description: `397%の攻撃力でターゲットにダメージを与え、さらに自分に挑発効果(1ターン)を与え、防御状態になる[CD:3]`
                },
                [SkillType.ATTACK]: {
                    name: `斬撃`,
                    description: `100%の攻撃力でターゲットにダメージを与える`
                },
                [SkillType.LEADER]: {
                    name: `闇の祝福`,
                    description: `味方の闇属性のキャラクターの最大HPを10%増加させる`
                },
                [SkillType.PASSIVE_1]: {
                    name: `攻守切替`,
                    description: `通常攻撃時、50%の確率で効果「自分を防御状態にする」を誘発する`
                },
                [SkillType.PASSIVE_2]: {
                    name: `フォス帝国の防衛術`,
                    description: `自分の防御時ダメージ軽減効果を10%増加させる`
                },
                [SkillType.PASSIVE_3]: {
                    name: `クイックサポート`,
                    description: `毎Waveの1ターン目に、効果「自分の必殺技CDを3ターン減少する」を誘発する`
                },
                [SkillType.DISPATCH]: {
                    name: `命よりも大事なお金(購入許可↑)`,
                    description: `派遣実行時、購入許可のダブル獲得確率がわずかに上昇(Lv1)する(全エリアで効果あり)`
                },
                [SkillType.GENERAL_2]: {
                    name: `麻痺無効`,
                    description: `自分を麻痺無効にする`
                }
            },
            [Locale.kr]: {
                [SkillType.SKILL_S]: {
                    name: `견고한 수비`,
                    description: `공격 데미지 265/298/331/364/397%만큼 타깃에게 데미지, 자신에게 도발 효과(1턴), 자신을 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.SKILL_1]: {
                    name: `견고한 수비`,
                    description: `공격 데미지 265%만큼 타깃에게 데미지, 자신에게 도발 효과(1턴), 자신을 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.SKILL_2]: {
                    name: `견고한 수비`,
                    description: `공격 데미지 298%만큼 타깃에게 데미지, 자신에게 도발 효과(1턴), 자신을 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.SKILL_3]: {
                    name: `견고한 수비`,
                    description: `공격 데미지 331%만큼 타깃에게 데미지, 자신에게 도발 효과(1턴), 자신을 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.SKILL_4]: {
                    name: `견고한 수비`,
                    description: `공격 데미지 364%만큼 타깃에게 데미지, 자신에게 도발 효과(1턴), 자신을 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.SKILL_5]: {
                    name: `견고한 수비`,
                    description: `공격 데미지 397%만큼 타깃에게 데미지, 자신에게 도발 효과(1턴), 자신을 방어 상태로 전환 [CD: 3]`
                },
                [SkillType.ATTACK]: {
                    name: `참격`,
                    description: `공격 데미지의 100%만큼 타깃에게 데미지`
                },
                [SkillType.LEADER]: {
                    name: `어둠의 축복`,
                    description: `아군 암속성 캐릭터의 최대 HP 10% 증가`
                },
                [SkillType.PASSIVE_1]: {
                    name: `공수전환`,
                    description: `일반 공격 시, 50% 확률로 "자신을 방어 상태로 전환"효과 발동`
                },
                [SkillType.PASSIVE_2]: {
                    name: `파스제국 방어술`,
                    description: `방어 상태에서 받는 데미지 감소 효과 10% 증가`
                },
                [SkillType.PASSIVE_3]: {
                    name: `신속한 서포트`,
                    description: `각 웨이브의 첫 번째 턴에서, "자신의 궁극기 CD 3턴 감소"효과 발동`
                },
                [SkillType.DISPATCH]: {
                    name: `목숨 같은 돈(구매 허가증↑)`,
                    description: `파견 진행 시구매 허가증2배 획득률 초소폭(Lv1) 증가(전지역 효과)`
                },
                [SkillType.GENERAL_2]: {
                    name: `마비 면역`,
                    description: `자신에게 마비 면역 효과`
                }
            }
        }
    },
]