import { Element, Locale, Position } from '@/plugins/utils/enums';
import { Skill } from '@/interface/unit/skillset';

export type LimitBreakGroupKey = 'profession1' | 'common' | 'element' | 'profession2';

interface LimitBreakSkill {
    id: number;
    group: LimitBreakGroupKey;
    position?: Position;
    element?: Element;
    skill: { [locale in Locale]: Skill };
}

// Presentation categories only; this order does not assert game slots or unlock levels.
const groupKeys: LimitBreakGroupKey[] = ['profession1', 'common', 'element', 'profession2'];

// SkillStr 2026-09-09 display entries only (40501–40537); helpers 40538–40566 are excluded.
// Preserve source wording, including 40536 TC/SC's missing verb, and non-unique names.
export const limitBreakSkills: LimitBreakSkill[] = [
    {
        id: 40501,
        group: 'profession1',
        position: Position.ATTACKER,
        skill: {
            [Locale.tc]: {
                name: "攻擊者：攻擊+",
                description: "攻擊力增加30%",
            },
            [Locale.sc]: {
                name: "攻击者：攻击+",
                description: "攻击力增加30%",
            },
            [Locale.en]: {
                name: "ATK: Attack+",
                description: "Increase Attack Power by 30%.",
            },
            [Locale.jp]: {
                name: "アタッカー：攻撃+",
                description: "攻撃力が30%増加する",
            },
            [Locale.kr]: {
                name: "딜러：공격+",
                description: "공격 데미지 30% 증가",
            },
        },
    },
    {
        id: 40502,
        group: 'profession1',
        position: Position.ATTACKER,
        skill: {
            [Locale.tc]: {
                name: "攻擊者：傷害+",
                description: "造成傷害增加9%",
            },
            [Locale.sc]: {
                name: "攻击者：伤害+",
                description: "造成伤害增加9%",
            },
            [Locale.en]: {
                name: "ATK: Damage+",
                description: "Increase Damage Output by 9%.",
            },
            [Locale.jp]: {
                name: "アタッカー：ダメージ+",
                description: "与えるダメージが9%増加する",
            },
            [Locale.kr]: {
                name: "딜러：데미지+",
                description: "가하는 데미지 9% 증가",
            },
        },
    },
    {
        id: 40503,
        group: 'profession1',
        position: Position.PROTECTOR,
        skill: {
            [Locale.tc]: {
                name: "守護者：全體攻擊+",
                description: "第1回合時，觸發「以自身最大HP1%使我方全體攻擊力增加(50回合)」(觸發1次後清除)",
            },
            [Locale.sc]: {
                name: "守护者：全体攻击+",
                description: "第1回合时，触发「以自身最大HP1%使我方全体攻击力增加(50回合)」(触发1次后清除)",
            },
            [Locale.en]: {
                name: "DEF: Party Attack+",
                description: "On the 1st turn, trigger the following effect: Increase the party's Attack Power for 1% of your max HP for 50 turns (removes after triggering once).",
            },
            [Locale.jp]: {
                name: "ガーディアン：全体攻撃+",
                description: "1ターン目に「自分の最大HPの1%分、味方全体の攻撃力を増加させる(50ターン)」を誘発する(誘発1回後に解除)",
            },
            [Locale.kr]: {
                name: "탱커：전체 공격+",
                description: "첫 번째 턴 시작 시 「자신의 최대 HP 1%만큼 아군 전체의 공격 데미지 증가(50턴)」 트리거(1회 트리거 후 제거)",
            },
        },
    },
    {
        id: 40504,
        group: 'profession1',
        position: Position.PROTECTOR,
        skill: {
            [Locale.tc]: {
                name: "守護者：全體減傷+",
                description: "我方全體受到傷害減少3%",
            },
            [Locale.sc]: {
                name: "守护者：全体减伤+",
                description: "我方全体受到伤害减少3%",
            },
            [Locale.en]: {
                name: "DEF: Party DMG Taken+",
                description: "Decrease the party's Damage Taken by 3%.",
            },
            [Locale.jp]: {
                name: "ガーディアン：全体ダメージ軽減+",
                description: "味方全体の受けるダメージが3%減少する",
            },
            [Locale.kr]: {
                name: "탱커：전체 데미지 감소+",
                description: "아군 전체가 받는 데미지 3% 감소",
            },
        },
    },
    {
        id: 40505,
        group: 'profession1',
        position: Position.HEALER,
        skill: {
            [Locale.tc]: {
                name: "治療者：全體攻擊+",
                description: "我方全體攻擊力增加10%",
            },
            [Locale.sc]: {
                name: "治疗者：全体攻击+",
                description: "我方全体攻击力增加10%",
            },
            [Locale.en]: {
                name: "HEA: Party Attack+",
                description: "Increase the party's Attack Power by 10%.",
            },
            [Locale.jp]: {
                name: "ヒーラー：全体攻撃+",
                description: "味方全体の攻撃力が10％増加する",
            },
            [Locale.kr]: {
                name: "힐러：전체 공격+",
                description: "아군 전체의 공격 데미지 10% 증가",
            },
        },
    },
    {
        id: 40506,
        group: 'profession1',
        position: Position.HEALER,
        skill: {
            [Locale.tc]: {
                name: "治療者：全體回復+",
                description: "我方全體被治療時回復量增加10%",
            },
            [Locale.sc]: {
                name: "治疗者：全体回復+",
                description: "我方全体被治疗时回復量增加10%",
            },
            [Locale.en]: {
                name: "HEA: Party Restoration+",
                description: "Increase the party's Recovery Rate by 10%.",
            },
            [Locale.jp]: {
                name: "ヒーラー：全体回復+",
                description: "味方全体が治療を受ける時、回復HP量が10%増加する",
            },
            [Locale.kr]: {
                name: "힐러：전체 회복+",
                description: "아군 전체의 치유를 받을 시 회복량 10% 증가",
            },
        },
    },
    {
        id: 40507,
        group: 'profession1',
        position: Position.SUPPORTER,
        skill: {
            [Locale.tc]: {
                name: "輔助者：全體傷害+",
                description: "我方全體造成傷害增加5.4%",
            },
            [Locale.sc]: {
                name: "辅助者：全体伤害+",
                description: "我方全体造成伤害增加5.4%",
            },
            [Locale.en]: {
                name: "SUP: Party Damage+",
                description: "Increase the party's Damage Output by 5.4%.",
            },
            [Locale.jp]: {
                name: "サポーター：全体ダメージ+",
                description: "味方全体の与えるダメージが5.4%増加する",
            },
            [Locale.kr]: {
                name: "서포터：전체 데미지+",
                description: "아군 전체의 가하는 데미지 5.4% 증가",
            },
        },
    },
    {
        id: 40508,
        group: 'profession1',
        position: Position.SUPPORTER,
        skill: {
            [Locale.tc]: {
                name: "輔助者：全體攻擊+",
                description: "攻擊時，觸發「以自身攻擊力3%使我方全體攻擊力增加(1回合)」",
            },
            [Locale.sc]: {
                name: "辅助者：全体攻击+",
                description: "攻击时，触发「以自身攻击力3%使我方全体攻击力增加(1回合)」",
            },
            [Locale.en]: {
                name: "SUP: Party Attack+",
                description: "On Attack, trigger the following effect: Increase the party's Attack Power for 3% of your Attack Power for 1 turn.",
            },
            [Locale.jp]: {
                name: "サポーター：全体攻撃+",
                description: "攻撃時「自分の攻撃力の3％分、味方全体の攻撃力を増加させる(1ターン)」を誘発する",
            },
            [Locale.kr]: {
                name: "서포터：전체 공격+",
                description: "공격 시, 「자신의 공격 데미지의 3%만큼 아군 전체의 공격 데미지 증가(1턴)」 트리거",
            },
        },
    },
    {
        id: 40509,
        group: 'profession1',
        position: Position.OBSTRUCTER,
        skill: {
            [Locale.tc]: {
                name: "妨礙者：傷害+",
                description: "每Wave第1回合時，觸發「使敵方全體受到傷害增加6%(最多5層)」",
            },
            [Locale.sc]: {
                name: "妨碍者：伤害+",
                description: "每Wave第1回合时，触发「使敌方全体受到伤害增加6%(最多5层)」",
            },
            [Locale.en]: {
                name: "OBS: Damage+",
                description: "On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken by 6% (max 5 stacks).",
            },
            [Locale.jp]: {
                name: "デバッファー：ダメージ+",
                description: "毎Waveの1ターン目に「敵全体が受けるダメージを6%増加させる(最高5スタック)」を誘発する",
            },
            [Locale.kr]: {
                name: "디스럽터：데미지+",
                description: "각 Wave의 첫 번째 턴에서 「적 전체의 받는 데미지 6% 증가 (최대 5중첩)」 트리거",
            },
        },
    },
    {
        id: 40510,
        group: 'profession1',
        position: Position.OBSTRUCTER,
        skill: {
            [Locale.tc]: {
                name: "妨礙者：減療+",
                description: "每Wave第1回合時，觸發「使敵方全體被治療時回復量減少15%(最多5層)」",
            },
            [Locale.sc]: {
                name: "妨碍者：减疗+",
                description: "每Wave第1回合时，触发「使敌方全体被治疗时回復量减少15%(最多5层)」",
            },
            [Locale.en]: {
                name: "OBS: Reduced Heal+",
                description: "On the 1st turn of each wave, trigger the following effect: Decrease all enemies' Recovery Rate by 15% (max 5 stacks).",
            },
            [Locale.jp]: {
                name: "デバッファー：回復量減少+",
                description: "毎Waveの1ターン目に「敵全体が治療を受ける時、回復HP量を15%減少させる(最高5スタック)」を誘発する",
            },
            [Locale.kr]: {
                name: "디스럽터：치유 감소+",
                description: "각 Wave의 첫 번째 턴에서 「적 전체의 치유를 받을 시 회복량 15% 감소(최대 5중첩)」 트리거",
            },
        },
    },
    {
        id: 40511,
        group: 'common',
        skill: {
            [Locale.tc]: {
                name: "通用：最大HP+",
                description: "最大HP增加5%",
            },
            [Locale.sc]: {
                name: "通用：最大HP+",
                description: "最大HP增加5%",
            },
            [Locale.en]: {
                name: "Generic: Max HP+",
                description: "Increase max HP by 5%.",
            },
            [Locale.jp]: {
                name: "共通：最大HP+",
                description: "最大HPが5%増加する",
            },
            [Locale.kr]: {
                name: "통용：최대 HP+",
                description: "최대 HP 5% 증가",
            },
        },
    },
    {
        id: 40512,
        group: 'common',
        skill: {
            [Locale.tc]: {
                name: "通用：攻擊+",
                description: "攻擊力增加10%",
            },
            [Locale.sc]: {
                name: "通用：攻击+",
                description: "攻击力增加10%",
            },
            [Locale.en]: {
                name: "Generic: Attack+",
                description: "Increase Attack Power by 10%.",
            },
            [Locale.jp]: {
                name: "共通：攻撃+",
                description: "攻撃力が10%増加する",
            },
            [Locale.kr]: {
                name: "통용：공격+",
                description: "공격 데미지 10% 증가",
            },
        },
    },
    {
        id: 40513,
        group: 'element',
        element: Element.FIRE,
        skill: {
            [Locale.tc]: {
                name: "火屬性：傷害+",
                description: "每Wave第1回合時，觸發「使敵方全體受到火屬性傷害增加3%(最多5層)」",
            },
            [Locale.sc]: {
                name: "火属性：伤害+",
                description: "每Wave第1回合时，触发「使敌方全体受到火属性伤害增加3%(最多5层)」",
            },
            [Locale.en]: {
                name: "Fire: Damage+",
                description: "On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken from Fire attacks by 3% (max 5 stacks).",
            },
            [Locale.jp]: {
                name: "火属性：ダメージ+",
                description: "毎Waveの1ターン目に「敵全体が受ける火属性ダメージを3%増加させる(最高5スタック)」を誘発する",
            },
            [Locale.kr]: {
                name: "화속성：데미지+",
                description: "각 Wave의 첫 번째 턴에서 「적 전체가 받는 화속성 데미지 3% 증가 (최대 5중첩)」 트리거",
            },
        },
    },
    {
        id: 40514,
        group: 'element',
        element: Element.FIRE,
        skill: {
            [Locale.tc]: {
                name: "火屬性：減傷+",
                description: "受到水屬性傷害減少33.33%",
            },
            [Locale.sc]: {
                name: "火属性：减伤+",
                description: "受到水属性伤害减少33.33%",
            },
            [Locale.en]: {
                name: "Fire: Damage Reduction+",
                description: "Decrease Damage Taken from Water attacks by 33.33%.",
            },
            [Locale.jp]: {
                name: "火属性：ダメージ軽減+",
                description: "受ける水属性ダメージが33.33%減少する",
            },
            [Locale.kr]: {
                name: "화속성：데미지 감소+",
                description: "받는 수속성 데미지 33.33% 감소",
            },
        },
    },
    {
        id: 40515,
        group: 'element',
        element: Element.WATER,
        skill: {
            [Locale.tc]: {
                name: "水屬性：傷害+",
                description: "每Wave第1回合時，觸發「使敵方全體受到水屬性傷害增加3%(最多5層)」",
            },
            [Locale.sc]: {
                name: "水属性：伤害+",
                description: "每Wave第1回合时，触发「使敌方全体受到水属性伤害增加3%(最多5层)」",
            },
            [Locale.en]: {
                name: "Water: Damage+",
                description: "On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken from Water attacks by 3% (max 5 stacks).",
            },
            [Locale.jp]: {
                name: "水属性：ダメージ+",
                description: "毎Waveの1ターン目に「敵全体が受ける水属性ダメージを3%増加させる(最高5スタック)」を誘発する",
            },
            [Locale.kr]: {
                name: "수속성：데미지+",
                description: "각 Wave의 첫 번째 턴에서 「적 전체가 받는 수속성 데미지 3% 증가 (최대 5중첩)」 트리거",
            },
        },
    },
    {
        id: 40516,
        group: 'element',
        element: Element.WATER,
        skill: {
            [Locale.tc]: {
                name: "水屬性：減傷+",
                description: "受到風屬性傷害減少33.33%",
            },
            [Locale.sc]: {
                name: "水属性：减伤+",
                description: "受到风属性伤害减少33.33%",
            },
            [Locale.en]: {
                name: "Water: Damage Reduction+",
                description: "Decrease Damage Taken from Wind attacks by 33.33%.",
            },
            [Locale.jp]: {
                name: "水属性：ダメージ軽減+",
                description: "受ける風属性ダメージが33.33%減少する",
            },
            [Locale.kr]: {
                name: "수속성：데미지 감소+",
                description: "받는 풍속성 데미지 33.33% 감소",
            },
        },
    },
    {
        id: 40517,
        group: 'element',
        element: Element.WIND,
        skill: {
            [Locale.tc]: {
                name: "風屬性：傷害+",
                description: "每Wave第1回合時，觸發「使敵方全體受到風屬性傷害增加3%(最多5層)」",
            },
            [Locale.sc]: {
                name: "风属性：伤害+",
                description: "每Wave第1回合时，触发「使敌方全体受到风属性伤害增加3%(最多5层)」",
            },
            [Locale.en]: {
                name: "Wind: Damage+",
                description: "On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken from Wind attacks by 3% (max 5 stacks).",
            },
            [Locale.jp]: {
                name: "風属性：ダメージ+",
                description: "毎Waveの1ターン目に「敵全体が受ける風属性ダメージを3%増加させる(最高5スタック)」を誘発する",
            },
            [Locale.kr]: {
                name: "풍속성：데미지+",
                description: "각 Wave의 첫 번째 턴에서 「적 전체가 받는 풍속성 데미지 3% 증가 (최대 5중첩)」 트리거",
            },
        },
    },
    {
        id: 40518,
        group: 'element',
        element: Element.WIND,
        skill: {
            [Locale.tc]: {
                name: "風屬性：減傷+",
                description: "受到火屬性傷害減少33.33%",
            },
            [Locale.sc]: {
                name: "风属性：减伤+",
                description: "受到火属性伤害减少33.33%",
            },
            [Locale.en]: {
                name: "Wind: Damage Reduction+",
                description: "Decrease Damage Taken from Fire attacks by 33.33%.",
            },
            [Locale.jp]: {
                name: "風属性：ダメージ軽減+",
                description: "受ける火属性ダメージが33.33%減少する",
            },
            [Locale.kr]: {
                name: "풍속성：데미지 감소+",
                description: "받는 화속성 데미지 33.33% 감소",
            },
        },
    },
    {
        id: 40519,
        group: 'element',
        element: Element.LIGHT,
        skill: {
            [Locale.tc]: {
                name: "光屬性：傷害+",
                description: "每Wave第1回合時，觸發「使敵方全體受到光屬性傷害增加3%(最多5層)」",
            },
            [Locale.sc]: {
                name: "光属性：伤害+",
                description: "每Wave第1回合时，触发「使敌方全体受到光属性伤害增加3%(最多5层)」",
            },
            [Locale.en]: {
                name: "Light: Damage+",
                description: "On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken from Light attacks by 3% (max 5 stacks).",
            },
            [Locale.jp]: {
                name: "光属性：ダメージ+",
                description: "毎Waveの1ターン目に「敵全体が受ける光属性ダメージを3%増加させる(最高5スタック)」を誘発する",
            },
            [Locale.kr]: {
                name: "광속성：데미지+",
                description: "각 Wave의 첫 번째 턴에서 「적 전체가 받는 광속성 데미지 3% 증가 (최대 5중첩)」 트리거",
            },
        },
    },
    {
        id: 40520,
        group: 'element',
        element: Element.LIGHT,
        skill: {
            [Locale.tc]: {
                name: "光屬性：減傷+",
                description: "受到闇屬性傷害減少33.33%",
            },
            [Locale.sc]: {
                name: "光属性：减伤+",
                description: "受到闇属性伤害减少33.33%",
            },
            [Locale.en]: {
                name: "Light: Damage Reduction+",
                description: "Decrease Damage Taken from Dark attacks by 33.33%.",
            },
            [Locale.jp]: {
                name: "光属性：ダメージ軽減+",
                description: "受ける闇属性ダメージが33.33%減少する",
            },
            [Locale.kr]: {
                name: "광속성：데미지 감소+",
                description: "받는 암속성 데미지 33.33% 감소",
            },
        },
    },
    {
        id: 40521,
        group: 'element',
        element: Element.DARK,
        skill: {
            [Locale.tc]: {
                name: "闇屬性：傷害+",
                description: "每Wave第1回合時，觸發「使敵方全體受到闇屬性傷害增加3%(最多5層)」",
            },
            [Locale.sc]: {
                name: "闇属性：伤害+",
                description: "每Wave第1回合时，触发「使敌方全体受到闇属性伤害增加3%(最多5层)」",
            },
            [Locale.en]: {
                name: "Dark: Damage+",
                description: "On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken from Dark attacks by 3% (max 5 stacks).",
            },
            [Locale.jp]: {
                name: "闇属性：ダメージ+",
                description: "毎Waveの1ターン目に「敵全体が受ける闇属性ダメージを3%増加させる(最高5スタック)」を誘発する",
            },
            [Locale.kr]: {
                name: "암속성：데미지+",
                description: "각 Wave의 첫 번째 턴에서 「적 전체가 받는 암속성 데미지 3% 증가 (최대 5중첩)」 트리거",
            },
        },
    },
    {
        id: 40522,
        group: 'element',
        element: Element.DARK,
        skill: {
            [Locale.tc]: {
                name: "闇屬性：減傷+",
                description: "受到光屬性傷害減少33.33%",
            },
            [Locale.sc]: {
                name: "闇属性：减伤+",
                description: "受到光属性伤害减少33.33%",
            },
            [Locale.en]: {
                name: "Dark: Damage Reduction+",
                description: "Decrease Damage Taken from Light attacks by 33.33%.",
            },
            [Locale.jp]: {
                name: "闇属性：ダメージ軽減+",
                description: "受ける光属性ダメージが33.33%減少する",
            },
            [Locale.kr]: {
                name: "암속성：데미지 감소+",
                description: "받는 광속성 데미지 33.33% 감소",
            },
        },
    },
    {
        id: 40523,
        group: 'profession2',
        position: Position.ATTACKER,
        skill: {
            [Locale.tc]: {
                name: "攻擊者：必殺追擊+",
                description: "必殺時，追加「以自身攻擊力20%對目標造成傷害」",
            },
            [Locale.sc]: {
                name: "攻击者：必杀追击+",
                description: "必杀时，追加「以自身攻击力20%对目标造成伤害」",
            },
            [Locale.en]: {
                name: "ATK: ULT Pursuit+",
                description: "On Ultimate Skill, deal additional damage to the target (20% Attack Power).",
            },
            [Locale.jp]: {
                name: "アタッカー：必殺追撃+",
                description: "必殺技攻撃時「自分の20%の攻撃力でターゲットにダメージを与える」を追加する",
            },
            [Locale.kr]: {
                name: "딜러：궁극기 추가 공격+",
                description: "궁극기 발동 시 「자신의 공격 데미지의 20%만큼 타깃에게 데미지」추가",
            },
        },
    },
    {
        id: 40524,
        group: 'profession2',
        position: Position.ATTACKER,
        skill: {
            [Locale.tc]: {
                name: "攻擊者：普攻追擊+",
                description: "普攻時，追加「以自身攻擊力10%對目標造成傷害」",
            },
            [Locale.sc]: {
                name: "攻击者：普攻追击+",
                description: "普攻时，追加「以自身攻击力10%对目标造成伤害」",
            },
            [Locale.en]: {
                name: "ATK: Basic ATK Pursuit+",
                description: "On Basic Attack, deal additional damage to the target (10% Attack Power).",
            },
            [Locale.jp]: {
                name: "アタッカー：通常追撃+",
                description: "通常攻撃時「自分の10%の攻撃力でターゲットにダメージを与える」を追加する",
            },
            [Locale.kr]: {
                name: "딜러：일반 공격 추가 공격+",
                description: "일반 공격 시 「자신의 공격 데미지의 10%만큼 타깃에게 데미지」추가",
            },
        },
    },
    {
        id: 40525,
        group: 'profession2',
        position: Position.ATTACKER,
        skill: {
            [Locale.tc]: {
                name: "攻擊者：攻擊觸發+",
                description: "攻擊時，觸發「以自身攻擊力6%對目標造成傷害」",
            },
            [Locale.sc]: {
                name: "攻击者：攻击触发+",
                description: "攻击时，触发「以自身攻击力6%对目标造成伤害」",
            },
            [Locale.en]: {
                name: "ATK: Attack Trigger+",
                description: "On Attack, trigger the following effect: Damage the target (6% Attack Power).",
            },
            [Locale.jp]: {
                name: "アタッカー：攻撃誘発+",
                description: "攻撃時「自分の6%の攻撃力でターゲットにダメージを与える」を誘発する",
            },
            [Locale.kr]: {
                name: "딜러：공격 트리거+",
                description: "공격 시 「자신의 공격 데미지의 6%만큼 타깃에게 데미지」트리거",
            },
        },
    },
    {
        id: 40526,
        group: 'profession2',
        position: Position.PROTECTOR,
        skill: {
            [Locale.tc]: {
                name: "守護者：全體攻擊+",
                description: "我方全體攻擊力增加5%",
            },
            [Locale.sc]: {
                name: "守护者：全体攻击+",
                description: "我方全体攻击力增加5%",
            },
            [Locale.en]: {
                name: "DEF: Party Attack+",
                description: "Increase the party's Attack Power by 5%.",
            },
            [Locale.jp]: {
                name: "ガーディアン：全体攻撃+",
                description: "味方全体の攻撃力が5％増加する",
            },
            [Locale.kr]: {
                name: "탱커：전체 공격+",
                description: "아군 전체의 공격 데미지 5% 증가",
            },
        },
    },
    {
        id: 40527,
        group: 'profession2',
        position: Position.PROTECTOR,
        skill: {
            [Locale.tc]: {
                name: "守護者：全體防禦減傷+",
                description: "我方全體防禦減傷效果增加2%",
            },
            [Locale.sc]: {
                name: "守护者：全体防禦减伤+",
                description: "我方全体防禦减伤效果增加2%",
            },
            [Locale.en]: {
                name: "DEF: Party DMG Taken+",
                description: "Decrease the party's Damage Taken in Guard Stance by 2%.",
            },
            [Locale.jp]: {
                name: "ガーディアン：全体防御軽減+",
                description: "味方全体の防御時のダメージ軽減効果が2%増加する",
            },
            [Locale.kr]: {
                name: "탱커：전체 방어 데미지 감소+",
                description: "아군 전체의 방어 데미지 경감 효과 2% 증가",
            },
        },
    },
    {
        id: 40528,
        group: 'profession2',
        position: Position.PROTECTOR,
        skill: {
            [Locale.tc]: {
                name: "守護者：全體護盾+",
                description: "我方全體受到護盾效果增加15%",
            },
            [Locale.sc]: {
                name: "守护者：全体护盾+",
                description: "我方全体受到护盾效果增加15%",
            },
            [Locale.en]: {
                name: "DEF: Party Shield+",
                description: "Increase the party's Shield effect by 15%.",
            },
            [Locale.jp]: {
                name: "ガーディアン：全体盾+",
                description: "味方全体の受ける盾効果が15%増加する",
            },
            [Locale.kr]: {
                name: "탱커：전체 아머+",
                description: "아군 전체가 받는 아머 강화 효과 15% 증가",
            },
        },
    },
    {
        id: 40529,
        group: 'profession2',
        position: Position.HEALER,
        skill: {
            [Locale.tc]: {
                name: "治療者：全體傷害+",
                description: "我方全體造成傷害增加3%",
            },
            [Locale.sc]: {
                name: "治疗者：全体伤害+",
                description: "我方全体造成伤害增加3%",
            },
            [Locale.en]: {
                name: "HEA: Party Damage+",
                description: "Increase the party's Damage Output by 3%.",
            },
            [Locale.jp]: {
                name: "ヒーラー：全体ダメージ+",
                description: "味方全体の与えるダメージが3%増加する",
            },
            [Locale.kr]: {
                name: "힐러：전체 데미지+",
                description: "아군 전체의 가하는 데미지 3% 증가",
            },
        },
    },
    {
        id: 40530,
        group: 'profession2',
        position: Position.HEALER,
        skill: {
            [Locale.tc]: {
                name: "治療者：治療+",
                description: "造成治療增加10%",
            },
            [Locale.sc]: {
                name: "治疗者：治疗+",
                description: "造成治疗增加10%",
            },
            [Locale.en]: {
                name: "HEA: Heal+",
                description: "Increase heal effect by 10%.",
            },
            [Locale.jp]: {
                name: "ヒーラー：治療+",
                description: "与える治療効果が10%増加する",
            },
            [Locale.kr]: {
                name: "힐러：치유+",
                description: "부여하는 치유량 10% 증가",
            },
        },
    },
    {
        id: 40531,
        group: 'profession2',
        position: Position.HEALER,
        skill: {
            [Locale.tc]: {
                name: "治療者：持續治療+",
                description: "造成持續型治療增加10%",
            },
            [Locale.sc]: {
                name: "治疗者：持续治疗+",
                description: "造成持续型治疗增加10%",
            },
            [Locale.en]: {
                name: "HEA: Mass Regen+",
                description: "Increase turn-by-turn heal effect by 10%.",
            },
            [Locale.jp]: {
                name: "ヒーラー：継続治療+",
                description: "与える持続型治療効果が10%増加する",
            },
            [Locale.kr]: {
                name: "힐러：지속 치유+",
                description: "부여하는 지속 치유량 10% 증가",
            },
        },
    },
    {
        id: 40532,
        group: 'profession2',
        position: Position.SUPPORTER,
        skill: {
            [Locale.tc]: {
                name: "輔助者：必殺追擊+",
                description: "我方全體攻擊者、守護者、妨礙者獲得「必殺時，追加『以自身攻擊力10%對目標造成傷害』」",
            },
            [Locale.sc]: {
                name: "辅助者：必杀追击+",
                description: "我方全体攻击者、守护者、妨碍者获得「必杀时，追加『以自身攻击力10%对目标造成伤害』」",
            },
            [Locale.en]: {
                name: "SUP: ULT Pursuit+",
                description: "Allied Attackers, Defenders, and Obstructors gain the following effect: On Ultimate Skill, deal additional damage to the target (10% Attack Power).",
            },
            [Locale.jp]: {
                name: "サポーター：必殺追撃+",
                description: "味方全体のアタッカー、ガーディアン、デバッファーが「必殺技攻撃時『自分の10%の攻撃力でターゲットにダメージを与える』を追加する」を獲得する",
            },
            [Locale.kr]: {
                name: "서포터：궁극기 추가 공격+",
                description: "아군 딜러, 탱커, 디스럽터는 「궁극기 발동 시 『자신의 공격 데미지의 10%만큼 타깃에게 데미지』 추가」 획득",
            },
        },
    },
    {
        id: 40533,
        group: 'profession2',
        position: Position.SUPPORTER,
        skill: {
            [Locale.tc]: {
                name: "輔助者：普攻追擊+",
                description: "我方全體攻擊者、守護者、妨礙者獲得「普攻時，追加『以自身攻擊力5%對目標造成傷害』」",
            },
            [Locale.sc]: {
                name: "辅助者：普攻追击+",
                description: "我方全体攻击者、守护者、妨碍者获得「普攻时，追加『以自身攻击力5%对目标造成伤害』」",
            },
            [Locale.en]: {
                name: "SUP: Basic ATK Pursuit+",
                description: "Allied Attackers, Defenders, and Obstructors gain the following effect: On Basic Attack, deal additional damage to the target (5% Attack Power).",
            },
            [Locale.jp]: {
                name: "サポーター：通常追撃+",
                description: "味方全体のアタッカー、ガーディアン、デバッファーが「通常攻撃時『自分の5%の攻撃力でターゲットにダメージを与える』を追加する」を獲得する",
            },
            [Locale.kr]: {
                name: "서포터：일반 공격 추가 공격+",
                description: "아군 딜러, 탱커, 디스럽터는 「일반 공격 시 『자신의 공격 데미지의 5%만큼 타깃에게 데미지』 추가」 획득",
            },
        },
    },
    {
        id: 40534,
        group: 'profession2',
        position: Position.SUPPORTER,
        skill: {
            [Locale.tc]: {
                name: "輔助者：攻擊觸發+",
                description: "我方全體攻擊者、守護者、妨礙者獲得「攻擊時，觸發『以自身攻擊力3%對目標造成傷害』」",
            },
            [Locale.sc]: {
                name: "辅助者：攻击触发+",
                description: "我方全体攻击者、守护者、妨碍者获得「攻击时，触发『以自身攻击力3%对目标造成伤害』」",
            },
            [Locale.en]: {
                name: "SUP: Attack Trigger+",
                description: "Allied Attackers, Defenders, and Obstructors gain the following effect: On Attack, trigger the following effect: Damage the target (3% Attack Power).",
            },
            [Locale.jp]: {
                name: "サポーター：攻撃誘発+",
                description: "味方全体のアタッカー、ガーディアン、デバッファーが「攻撃時『自分の3%の攻撃力でターゲットにダメージを与える』を誘発する」を獲得する",
            },
            [Locale.kr]: {
                name: "서포터：공격 트리거+",
                description: "아군 딜러, 탱커, 디스럽터는 「공격 시 『자신의 공격 데미지의 3%만큼 타깃에게 데미지』 트리거」 획득",
            },
        },
    },
    {
        id: 40535,
        group: 'profession2',
        position: Position.OBSTRUCTER,
        skill: {
            [Locale.tc]: {
                name: "妨礙者：必殺+",
                description: "每Wave第1回合時，觸發「使敵方全體受到必殺技傷害增加5%(最多5層)」",
            },
            [Locale.sc]: {
                name: "妨碍者：必杀+",
                description: "每Wave第1回合时，触发「使敌方全体受到必杀技伤害增加5%(最多5层)」",
            },
            [Locale.en]: {
                name: "OBS: Ultimate+",
                description: "On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken from Ultimate Skills by 5% (max 5 stacks).",
            },
            [Locale.jp]: {
                name: "デバッファー：必殺+",
                description: "毎Waveの1ターン目に「敵全体が受ける必殺技ダメージを5%増加させる(最高5スタック)」を誘発する",
            },
            [Locale.kr]: {
                name: "디스럽터：궁극기+",
                description: "각 웨이브의 첫 번째 턴에서 「적 전체가 받는 궁극기 데미지 5% 증가(최대 5중첩)」 트리거",
            },
        },
    },
    {
        id: 40536,
        group: 'profession2',
        position: Position.OBSTRUCTER,
        skill: {
            [Locale.tc]: {
                name: "妨礙者：普攻+",
                description: "每Wave第1回合時，觸發「使敵方全體受到普攻傷害7.5%(最多5層)」",
            },
            [Locale.sc]: {
                name: "妨碍者：普攻+",
                description: "每Wave第1回合时，触发「使敌方全体受到普攻伤害7.5%(最多5层)」",
            },
            [Locale.en]: {
                name: "OBS: Basic ATK+",
                description: "On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken from Basic Attacks by 7.5% (max 5 stacks).",
            },
            [Locale.jp]: {
                name: "デバッファー：通常攻撃+",
                description: "毎Waveの1ターン目に「敵全体が受ける通常攻撃ダメージを7.5%増加させる(最高5スタック)」を誘発する",
            },
            [Locale.kr]: {
                name: "디스럽터：일반 공격+",
                description: "각 Wave의 첫 번째 턴에서 「적 전체가 받는 일반 공격 데미지 7.5% 증가 (최대 5중첩)」 트리거",
            },
        },
    },
    {
        id: 40537,
        group: 'profession2',
        position: Position.OBSTRUCTER,
        skill: {
            [Locale.tc]: {
                name: "妨礙者：觸發+",
                description: "每Wave第1回合時，觸發「使敵方全體受到觸發技傷害增加10%(最多5層)」",
            },
            [Locale.sc]: {
                name: "妨碍者：触发+",
                description: "每Wave第1回合时，触发「使敌方全体受到触发技伤害增加10%(最多5层)」",
            },
            [Locale.en]: {
                name: "OBS: Trigger+",
                description: "On the 1st turn of each wave, trigger the following effect: Increase all enemies' Damage Taken from trigger abilities by 10% (max 5 stacks).",
            },
            [Locale.jp]: {
                name: "デバッファー：誘発+",
                description: "毎Waveの1ターン目に「敵全体が受ける誘発スキルダメージを10%増加させる(最高5スタック)」を誘発する",
            },
            [Locale.kr]: {
                name: "디스럽터：트리거+",
                description: "각 웨이브의 첫 번째 턴에서 「적 전체가 받는 트리거 스킬 데미지 10% 증가(최대 5중첩)」 트리거",
            },
        },
    },
];

export function getLimitBreakSkillGroups(position: Position, element: Element) {
    if (!Object.values(Position).includes(position) || !Object.values(Element).includes(element)) return [];

    return groupKeys.map(key => ({
        key,
        skills: limitBreakSkills.filter(skill => skill.group === key
            && (skill.position === undefined || skill.position === position)
            && (skill.element === undefined || skill.element === element)),
    }));
}
