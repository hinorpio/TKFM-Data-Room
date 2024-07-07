import { Locale, Element, Rarity, Position, SkillType, LiberationStage, PotentialBuffType, DispatchType, EventType } from '@/plugins/utils/enums';

import ELEMENT_FIRE from "@/assets/general/element_fire.png"
import ELEMENT_WATER from "@/assets/general/element_water.png"
import ELEMENT_WIND from "@/assets/general/element_wind.png"
import ELEMENT_LIGHT from "@/assets/general/element_light.png"
import ELEMENT_DARK from "@/assets/general/element_dark.png"
import RARITY_SSR from "@/assets/general/rarity_ssr.png"
import RARITY_SR from "@/assets/general/rarity_sr.png"
import RARITY_R from "@/assets/general/rarity_r.png"
import RARITY_N from "@/assets/general/rarity_n.png"
import POSITION_ATTACKER from "@/assets/general/position_attacker.png"
import POSITION_OBSTRUCTER from "@/assets/general/position_obstructer.png"
import POSITION_PROTECTOR from "@/assets/general/position_protector.png"
import POSITION_HEALER from "@/assets/general/position_healer.png"
import POSITION_SUPPORTER from "@/assets/general/position_supporter.png"
import SKILL_BASE_STAT from "@/assets/general/ui_bond_5.png"
import SKILL_SKILL from "@/assets/general/skillset_skill.jpg"
import SKILL_ATTACK from "@/assets/general/skillset_attack.jpg"
import SKILL_LEADER from "@/assets/general/skillset_leader.jpg"
import SKILL_PASSIVE from "@/assets/general/skillset_passive.jpg"
import SKILL_GENERAL from "@/assets/general/skillset_general.jpg"
import SKILL_DISPATCH from "@/assets/general/skillset_dispatch.jpg"
import LIBERATE_STAGE0 from "@/assets/general/liberate_0.png"
import LIBERATE_STAGE1 from "@/assets/general/liberate_1.png"
import LIBERATE_STAGE2 from "@/assets/general/liberate_2.png"
import LIBERATE_STAGE3 from "@/assets/general/liberate_3.png"
import POTENTIAL_BUFF_ATK from "@/assets/general/ui_small_atk.png"
import POTENTIAL_BUFF_HP from "@/assets/general/ui_small_hp.png"
import POTENTIAL_BUFF_PASSIVE from "@/assets/general/skillset_general.jpg"
import DISPATCH_CAESAR_ROOM_TC from "@/assets/dispatch/dp0001_tc.png"
import DISPATCH_CAESAR_ROOM_SC from "@/assets/dispatch/dp0001_sc.png"
import DISPATCH_CAESAR_ROOM_EN from "@/assets/dispatch/dp0001_en.png"
import DISPATCH_CAESAR_ROOM_JP from "@/assets/dispatch/dp0001_jp.png"
import DISPATCH_CAESAR_ROOM_KR from "@/assets/dispatch/dp0001_kr.png"
import DISPATCH_DUNGEON_TC from "@/assets/dispatch/dp0002_tc.png"
import DISPATCH_DUNGEON_SC from "@/assets/dispatch/dp0002_sc.png"
import DISPATCH_DUNGEON_EN from "@/assets/dispatch/dp0002_en.png"
import DISPATCH_DUNGEON_JP from "@/assets/dispatch/dp0002_jp.png"
import DISPATCH_DUNGEON_KR from "@/assets/dispatch/dp0002_kr.png"
import DISPATCH_TRAINING_CENTER_TC from "@/assets/dispatch/dp0003_tc.png"
import DISPATCH_TRAINING_CENTER_SC from "@/assets/dispatch/dp0003_sc.png"
import DISPATCH_TRAINING_CENTER_EN from "@/assets/dispatch/dp0003_en.png"
import DISPATCH_TRAINING_CENTER_JP from "@/assets/dispatch/dp0003_jp.png"
import DISPATCH_TRAINING_CENTER_KR from "@/assets/dispatch/dp0003_kr.png"
import DISPATCH_TREASURE_ROOM_TC from "@/assets/dispatch/dp0004_tc.png"
import DISPATCH_TREASURE_ROOM_SC from "@/assets/dispatch/dp0004_sc.png"
import DISPATCH_TREASURE_ROOM_EN from "@/assets/dispatch/dp0004_en.png"
import DISPATCH_TREASURE_ROOM_JP from "@/assets/dispatch/dp0004_jp.png"
import DISPATCH_TREASURE_ROOM_KR from "@/assets/dispatch/dp0004_kr.png"
import DISPATCH_SEALED_CHAMBER_TC from "@/assets/dispatch/dp0005_tc.png"
import DISPATCH_SEALED_CHAMBER_SC from "@/assets/dispatch/dp0005_sc.png"
import DISPATCH_SEALED_CHAMBER_EN from "@/assets/dispatch/dp0005_en.png"
import DISPATCH_SEALED_CHAMBER_JP from "@/assets/dispatch/dp0005_jp.png"
import DISPATCH_SEALED_CHAMBER_KR from "@/assets/dispatch/dp0005_kr.png"

export const ElementIcon = {
    [Element.FIRE]: ELEMENT_FIRE,
    [Element.WATER]: ELEMENT_WATER,
    [Element.WIND]: ELEMENT_WIND,
    [Element.LIGHT]: ELEMENT_LIGHT,
    [Element.DARK]: ELEMENT_DARK
}

export const PositionIcon = {
    [Position.ATTACKER]: POSITION_ATTACKER,
    [Position.OBSTRUCTER]: POSITION_OBSTRUCTER,
    [Position.PROTECTOR]: POSITION_PROTECTOR,
    [Position.HEALER]: POSITION_HEALER,
    [Position.SUPPORTER]: POSITION_SUPPORTER
}

export const RarityIcon = {
    [Rarity.SSR]: RARITY_SSR,
    [Rarity.SR]: RARITY_SR,
    [Rarity.R]: RARITY_R,
    [Rarity.N]: RARITY_N,
}

export const SkillIcon = {
    [SkillType.BASE_STAT]: SKILL_BASE_STAT,
    [SkillType.SKILL_S]: SKILL_SKILL,
    [SkillType.SKILL_1]: SKILL_SKILL,
    [SkillType.SKILL_2]: SKILL_SKILL,
    [SkillType.SKILL_3]: SKILL_SKILL,
    [SkillType.SKILL_4]: SKILL_SKILL,
    [SkillType.SKILL_5]: SKILL_SKILL,
    [SkillType.ATTACK]: SKILL_ATTACK,
    [SkillType.LEADER]: SKILL_LEADER,
    [SkillType.PASSIVE_1]: SKILL_PASSIVE,
    [SkillType.PASSIVE_2]: SKILL_PASSIVE,
    [SkillType.PASSIVE_3]: SKILL_PASSIVE,
    [SkillType.GENERAL_1]: SKILL_GENERAL,
    [SkillType.GENERAL_2]: SKILL_GENERAL,
    [SkillType.DISPATCH]: SKILL_DISPATCH,
}

export const SkillTypeColor = {
    [SkillType.BASE_STAT]: '#925be6',
    [SkillType.SKILL_S]: '#f0b023',
    [SkillType.SKILL_1]: '#f0b023',
    [SkillType.SKILL_2]: '#f0b023',
    [SkillType.SKILL_3]: '#f0b023',
    [SkillType.SKILL_4]: '#f0b023',
    [SkillType.SKILL_5]: '#f0b023',
    [SkillType.ATTACK]: '#c60244',
    [SkillType.LEADER]: '#085bad',
    [SkillType.PASSIVE_1]: '#43be57',
    [SkillType.PASSIVE_2]: '#43be57',
    [SkillType.PASSIVE_3]: '#43be57',
    [SkillType.GENERAL_1]: '#e591ea',
    [SkillType.GENERAL_2]: '#e591ea',
    [SkillType.DISPATCH]: '#4a148c',
}

export const LiberateIcon = {
    [LiberationStage.LIBERATION_0]: LIBERATE_STAGE0,
    [LiberationStage.LIBERATION_1]: LIBERATE_STAGE1,
    [LiberationStage.LIBERATION_2]: LIBERATE_STAGE2,
    [LiberationStage.LIBERATION_3]: LIBERATE_STAGE3,
}

export const PotentialBuffIcon = {
    [PotentialBuffType.ATK]: POTENTIAL_BUFF_ATK,
    [PotentialBuffType.HP]: POTENTIAL_BUFF_HP,
    [PotentialBuffType.PASSIVE]: POTENTIAL_BUFF_PASSIVE,
}

export const DispatchImage = {
    [DispatchType.CAESAR_ROOM]: {
        [Locale.tc]: DISPATCH_CAESAR_ROOM_TC,
        [Locale.sc]: DISPATCH_CAESAR_ROOM_SC,
        [Locale.en]: DISPATCH_CAESAR_ROOM_EN,
        [Locale.jp]: DISPATCH_CAESAR_ROOM_JP,
        [Locale.kr]: DISPATCH_CAESAR_ROOM_KR,
    },
    [DispatchType.DUNGEON]: {
        [Locale.tc]: DISPATCH_DUNGEON_TC,
        [Locale.sc]: DISPATCH_DUNGEON_SC,
        [Locale.en]: DISPATCH_DUNGEON_EN,
        [Locale.jp]: DISPATCH_DUNGEON_JP,
        [Locale.kr]: DISPATCH_DUNGEON_KR,
    },
    [DispatchType.TRAINING_CENTER]: {
        [Locale.tc]: DISPATCH_TRAINING_CENTER_TC,
        [Locale.sc]: DISPATCH_TRAINING_CENTER_SC,
        [Locale.en]: DISPATCH_TRAINING_CENTER_EN,
        [Locale.jp]: DISPATCH_TRAINING_CENTER_JP,
        [Locale.kr]: DISPATCH_TRAINING_CENTER_KR,
    },
    [DispatchType.TREASURE_ROOM]: {
        [Locale.tc]: DISPATCH_TREASURE_ROOM_TC,
        [Locale.sc]: DISPATCH_TREASURE_ROOM_SC,
        [Locale.en]: DISPATCH_TREASURE_ROOM_EN,
        [Locale.jp]: DISPATCH_TREASURE_ROOM_JP,
        [Locale.kr]: DISPATCH_TREASURE_ROOM_KR,
    },
    [DispatchType.SEALED_CHAMBER]: {
        [Locale.tc]: DISPATCH_SEALED_CHAMBER_TC,
        [Locale.sc]: DISPATCH_SEALED_CHAMBER_SC,
        [Locale.en]: DISPATCH_SEALED_CHAMBER_EN,
        [Locale.jp]: DISPATCH_SEALED_CHAMBER_JP,
        [Locale.kr]: DISPATCH_SEALED_CHAMBER_KR,
    },
}

export const EventTypeColor = {
    [EventType.POINT]: 'light-blue lighten-2',
    [EventType.CHALLENGE]: 'indigo darken-1',
    [EventType.EVOLVE]: 'red lighten-1',
    [EventType.POTENTIAL]: 'deep-purple lighten-1',
    [EventType.DISCIPLINE]: 'pink lighten-2',
    [EventType.SLIVER]: 'grey',
    [EventType.SIDESTORY]: 'teal accent-4',
    [EventType.SPIRE]: 'pink darken-4',
    [EventType.TIMERIFT]: 'red darken-4',
    [EventType.GUILDBOSS]: 'green',
    [EventType.SPECIAL]: 'blue-grey darken-2',
}

export const EventTypeString = {
    [EventType.POINT]: {
        [Locale.tc]: '積分活動',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    [EventType.CHALLENGE]: {
        [Locale.tc]: '高難關卡',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    [EventType.EVOLVE]: {
        [Locale.tc]: '屬性礦+',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    [EventType.POTENTIAL]: {
        [Locale.tc]: '潛力素材+',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    [EventType.DISCIPLINE]: {
        [Locale.tc]: '調教道具+',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    [EventType.SLIVER]: {
        [Locale.tc]: '銀幣+',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    [EventType.SIDESTORY]: {
        [Locale.tc]: '外傳故事',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    [EventType.SPIRE]: {
        [Locale.tc]: '魔獄塔',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    [EventType.TIMERIFT]: {
        [Locale.tc]: '時之裂縫',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    [EventType.GUILDBOSS]: {
        [Locale.tc]: '協會戰',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    [EventType.SPECIAL]: {
        [Locale.tc]: '特殊',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    }
}