import { 
    Locale,
    ErrorCode,
    ErrorMessage,
    Element, 
    Rarity, 
    Position, 
    SkillType, 
    LiberationStage, 
    PotentialBuffType,
    ItemCode,
    DispatchType,
    PuzzleCode,
    UnitID
} from '@/plugins/utils/enums';
import * as Icon from './icon';
import * as Image from './image';
import * as Preview from './preview';
import { NuxtError } from '@nuxt/types';

export const CustomError: {[code in ErrorCode]: NuxtError} = {
    [ErrorCode.PAGE_NOT_FOUND]: 
        {
            statusCode: ErrorCode.PAGE_NOT_FOUND,
            message: ErrorMessage.PAGE_NOT_FOUND
        },
    [ErrorCode.UNKNOWN_ERROR]: 
        {
            statusCode: ErrorCode.UNKNOWN_ERROR,
            message: ErrorMessage.UNKNOWN_ERROR
        },
    [ErrorCode.CANNOT_FIND_CHARACTER]: 
        {
            statusCode: ErrorCode.CANNOT_FIND_CHARACTER,
            message: ErrorMessage.CANNOT_FIND_CHARACTER
        },
}

export const ElementIcon = {
    [Element.FIRE]: Icon.ELEMENT_FIRE,
    [Element.WATER]: Icon.ELEMENT_WATER,
    [Element.WIND]: Icon.ELEMENT_WIND,
    [Element.LIGHT]: Icon.ELEMENT_LIGHT,
    [Element.DARK]: Icon.ELEMENT_DARK
}

export const PositionIcon = {
    [Position.ATTACKER]: Icon.POSITION_ATTACKER,
    [Position.OBSTRUCTER]: Icon.POSITION_OBSTRUCTER,
    [Position.PROTECTOR]: Icon.POSITION_PROTECTOR,
    [Position.HEALER]: Icon.POSITION_HEALER,
    [Position.SUPPORTER]: Icon.POSITION_SUPPORTER
}

export const RarityIcon = {
    [Rarity.SSR]: Icon.RARITY_SSR,
    [Rarity.SR]: Icon.RARITY_SR,
    [Rarity.R]: Icon.RARITY_R,
    [Rarity.N]: Icon.RARITY_N,
}

export const SkillIcon = {
    [SkillType.BASE_STAT]: Icon.SKILL_BASE_STAT,
    [SkillType.SKILL_S]: Icon.SKILL_SKILL,
    [SkillType.SKILL_1]: Icon.SKILL_SKILL,
    [SkillType.SKILL_2]: Icon.SKILL_SKILL,
    [SkillType.SKILL_3]: Icon.SKILL_SKILL,
    [SkillType.SKILL_4]: Icon.SKILL_SKILL,
    [SkillType.SKILL_5]: Icon.SKILL_SKILL,
    [SkillType.ATTACK]: Icon.SKILL_ATTACK,
    [SkillType.LEADER]: Icon.SKILL_LEADER,
    [SkillType.PASSIVE_1]: Icon.SKILL_PASSIVE,
    [SkillType.PASSIVE_2]: Icon.SKILL_PASSIVE,
    [SkillType.PASSIVE_3]: Icon.SKILL_PASSIVE,
    [SkillType.GENERAL_1]: Icon.SKILL_GENERAL,
    [SkillType.GENERAL_2]: Icon.SKILL_GENERAL,
    [SkillType.DISPATCH]: Icon.SKILL_DISPATCH,
}

export const LiberateIcon = {
    [LiberationStage.LIBERATION_0]: Icon.LIBERATE_STAGE0,
    [LiberationStage.LIBERATION_1]: Icon.LIBERATE_STAGE1,
    [LiberationStage.LIBERATION_2]: Icon.LIBERATE_STAGE2,
    [LiberationStage.LIBERATION_3]: Icon.LIBERATE_STAGE3,
}

export const PotentialBuffIcon = {
    [PotentialBuffType.ATK]: Icon.POTENTIAL_BUFF_ATK,
    [PotentialBuffType.HP]: Icon.POTENTIAL_BUFF_HP,
    [PotentialBuffType.PASSIVE]: Icon.POTENTIAL_BUFF_PASSIVE,
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
    [SkillType.DISPATCH]: '#e591ea',
}

export const ItemIcon = {
    [ItemCode.SLIVER_COIN]: Icon.ITEM_SLIVER_COIN,
    [ItemCode.NAMELESS]: Icon.ITEM_NAMELESS,
    [ItemCode.FLAWLESS]: Icon.ITEM_FLAWLESS,
    [ItemCode.SKILL_FRAGMENT]: Icon.ITEM_SKILL_FRAGMENT,
    [ItemCode.SKILL_STONE]: Icon.ITEM_SKILL_STONE,
    [ItemCode.LIBERATE_STONE]: Icon.ITEM_LIBERATE_STONE,
    [ItemCode.EVOLVE_FIRE_LV1]: Icon.ITEM_EVOLVE_FIRE_LV1,
    [ItemCode.EVOLVE_FIRE_LV2]: Icon.ITEM_EVOLVE_FIRE_LV2,
    [ItemCode.EVOLVE_FIRE_LV3]: Icon.ITEM_EVOLVE_FIRE_LV3,
    [ItemCode.EVOLVE_FIRE_LV4]: Icon.ITEM_EVOLVE_FIRE_LV4,
    [ItemCode.EVOLVE_WATER_LV1]: Icon.ITEM_EVOLVE_WATER_LV1,
    [ItemCode.EVOLVE_WATER_LV2]: Icon.ITEM_EVOLVE_WATER_LV2,
    [ItemCode.EVOLVE_WATER_LV3]: Icon.ITEM_EVOLVE_WATER_LV3,
    [ItemCode.EVOLVE_WATER_LV4]: Icon.ITEM_EVOLVE_WATER_LV4,
    [ItemCode.EVOLVE_WIND_LV1]: Icon.ITEM_EVOLVE_WIND_LV1,
    [ItemCode.EVOLVE_WIND_LV2]: Icon.ITEM_EVOLVE_WIND_LV2,
    [ItemCode.EVOLVE_WIND_LV3]: Icon.ITEM_EVOLVE_WIND_LV3,
    [ItemCode.EVOLVE_WIND_LV4]: Icon.ITEM_EVOLVE_WIND_LV4,
    [ItemCode.EVOLVE_LIGHT_LV1]: Icon.ITEM_EVOLVE_LIGHT_LV1,
    [ItemCode.EVOLVE_LIGHT_LV2]: Icon.ITEM_EVOLVE_LIGHT_LV2,
    [ItemCode.EVOLVE_LIGHT_LV3]: Icon.ITEM_EVOLVE_LIGHT_LV3,
    [ItemCode.EVOLVE_LIGHT_LV4]: Icon.ITEM_EVOLVE_LIGHT_LV4,
    [ItemCode.EVOLVE_DARK_LV1]: Icon.ITEM_EVOLVE_DARK_LV1,
    [ItemCode.EVOLVE_DARK_LV2]: Icon.ITEM_EVOLVE_DARK_LV2,
    [ItemCode.EVOLVE_DARK_LV3]: Icon.ITEM_EVOLVE_DARK_LV3,
    [ItemCode.EVOLVE_DARK_LV4]: Icon.ITEM_EVOLVE_DARK_LV4,
    [ItemCode.CLAW_LV1]: Icon.ITEM_CLAW_LV1,
    [ItemCode.CLAW_LV2]: Icon.ITEM_CLAW_LV2,
    [ItemCode.CLAW_LV3]: Icon.ITEM_CLAW_LV3,
    [ItemCode.IRON_LV1]: Icon.ITEM_IRON_LV1,
    [ItemCode.IRON_LV2]: Icon.ITEM_IRON_LV2,
    [ItemCode.IRON_LV3]: Icon.ITEM_IRON_LV3,
    [ItemCode.WATER_LV1]: Icon.ITEM_WATER_LV1,
    [ItemCode.WATER_LV2]: Icon.ITEM_WATER_LV2,
    [ItemCode.WATER_LV3]: Icon.ITEM_WATER_LV3,
    [ItemCode.MIXTURE_LV1]: Icon.ITEM_MIXTURE_LV1,
    [ItemCode.MIXTURE_LV2]: Icon.ITEM_MIXTURE_LV2,
    [ItemCode.MIXTURE_LV3]: Icon.ITEM_MIXTURE_LV3,
    [ItemCode.DUST_LV1]: Icon.ITEM_DUST_LV1,
    [ItemCode.DUST_LV2]: Icon.ITEM_DUST_LV2,
    [ItemCode.DUST_LV3]: Icon.ITEM_DUST_LV3,
    [ItemCode.HORN_LV1]: Icon.ITEM_HORN_LV1,
    [ItemCode.HORN_LV2]: Icon.ITEM_HORN_LV2,
    [ItemCode.SLIVER_LV1]: Icon.ITEM_SLIVER_LV1,
    [ItemCode.SLIVER_LV2]: Icon.ITEM_SLIVER_LV2,
    [ItemCode.OIL_LV1]: Icon.ITEM_OIL_LV1,
    [ItemCode.OIL_LV2]: Icon.ITEM_OIL_LV2,
    [ItemCode.CRYSTAL_LV1]: Icon.ITEM_CRYSTAL_LV1,
    [ItemCode.CRYSTAL_LV2]: Icon.ITEM_CRYSTAL_LV2,
    [ItemCode.FANG_LV1]: Icon.ITEM_FANG_LV1,
    [ItemCode.FANG_LV2]: Icon.ITEM_FANG_LV2,
    [ItemCode.BEAK_LV1]: Icon.ITEM_BEAK_LV1,
    [ItemCode.BEAK_LV2]: Icon.ITEM_BEAK_LV2,
    [ItemCode.SKIN_LV1]: Icon.ITEM_SKIN_LV1,
    [ItemCode.SKIN_LV2]: Icon.ITEM_SKIN_LV2,
    [ItemCode.BOOK_LV1]: Icon.ITEM_BOOK_LV1,
    [ItemCode.BOOK_LV2]: Icon.ITEM_BOOK_LV2,
    [ItemCode.FEATHER_LV1]: Icon.ITEM_FEATHER_LV1,
    [ItemCode.FEATHER_LV2]: Icon.ITEM_FEATHER_LV2,
    [ItemCode.WEB_LV1]: Icon.ITEM_WEB_LV1,
    [ItemCode.WEB_LV2]: Icon.ITEM_WEB_LV2,
    [ItemCode.DISCIPLINE_FIRE_LV1]: Icon.ITEM_DISCIPLINE_FIRE_LV1,
    [ItemCode.DISCIPLINE_FIRE_LV2]: Icon.ITEM_DISCIPLINE_FIRE_LV2,
    [ItemCode.DISCIPLINE_FIRE_LV3]: Icon.ITEM_DISCIPLINE_FIRE_LV3,
    [ItemCode.DISCIPLINE_WATER_LV1]: Icon.ITEM_DISCIPLINE_WATER_LV1,
    [ItemCode.DISCIPLINE_WATER_LV2]: Icon.ITEM_DISCIPLINE_WATER_LV2,
    [ItemCode.DISCIPLINE_WATER_LV3]: Icon.ITEM_DISCIPLINE_WATER_LV3,
    [ItemCode.DISCIPLINE_WIND_LV1]: Icon.ITEM_DISCIPLINE_WIND_LV1,
    [ItemCode.DISCIPLINE_WIND_LV2]: Icon.ITEM_DISCIPLINE_WIND_LV2,
    [ItemCode.DISCIPLINE_WIND_LV3]: Icon.ITEM_DISCIPLINE_WIND_LV3,
    [ItemCode.DISCIPLINE_LIGHT_LV1]: Icon.ITEM_DISCIPLINE_LIGHT_LV1,
    [ItemCode.DISCIPLINE_LIGHT_LV2]: Icon.ITEM_DISCIPLINE_LIGHT_LV2,
    [ItemCode.DISCIPLINE_LIGHT_LV3]: Icon.ITEM_DISCIPLINE_LIGHT_LV3,
    [ItemCode.DISCIPLINE_DARK_LV1]: Icon.ITEM_DISCIPLINE_DARK_LV1,
    [ItemCode.DISCIPLINE_DARK_LV2]: Icon.ITEM_DISCIPLINE_DARK_LV2,
    [ItemCode.DISCIPLINE_DARK_LV3]: Icon.ITEM_DISCIPLINE_DARK_LV3,
}

export const DispatchImage = {
    [DispatchType.CAESAR_ROOM]: {
        [Locale.zh]: Image.DISPATCH_CAESAR_ROOM_ZH,
        [Locale.cn]: Image.DISPATCH_CAESAR_ROOM_CN,
        [Locale.en]: Image.DISPATCH_CAESAR_ROOM_EN,
        [Locale.jp]: Image.DISPATCH_CAESAR_ROOM_JP,
        [Locale.ko]: Image.DISPATCH_CAESAR_ROOM_KO,
    },
    [DispatchType.DUNGEON]: {
        [Locale.zh]: Image.DISPATCH_DUNGEON_ZH,
        [Locale.cn]: Image.DISPATCH_DUNGEON_CN,
        [Locale.en]: Image.DISPATCH_DUNGEON_EN,
        [Locale.jp]: Image.DISPATCH_DUNGEON_JP,
        [Locale.ko]: Image.DISPATCH_DUNGEON_KO,
    },
    [DispatchType.TRAINING_CENTER]: {
        [Locale.zh]: Image.DISPATCH_TRAINING_CENTER_ZH,
        [Locale.cn]: Image.DISPATCH_TRAINING_CENTER_CN,
        [Locale.en]: Image.DISPATCH_TRAINING_CENTER_EN,
        [Locale.jp]: Image.DISPATCH_TRAINING_CENTER_JP,
        [Locale.ko]: Image.DISPATCH_TRAINING_CENTER_KO,
    },
    [DispatchType.TREASURE_ROOM]: {
        [Locale.zh]: Image.DISPATCH_TREASURE_ROOM_ZH,
        [Locale.cn]: Image.DISPATCH_TREASURE_ROOM_CN,
        [Locale.en]: Image.DISPATCH_TREASURE_ROOM_EN,
        [Locale.jp]: Image.DISPATCH_TREASURE_ROOM_JP,
        [Locale.ko]: Image.DISPATCH_TREASURE_ROOM_KO,
    },
    [DispatchType.SEALED_CHAMBER]: {
        [Locale.zh]: Image.DISPATCH_SEALED_CHAMBER_ZH,
        [Locale.cn]: Image.DISPATCH_SEALED_CHAMBER_CN,
        [Locale.en]: Image.DISPATCH_SEALED_CHAMBER_EN,
        [Locale.jp]: Image.DISPATCH_SEALED_CHAMBER_JP,
        [Locale.ko]: Image.DISPATCH_SEALED_CHAMBER_KO,
    },
}

export const PuzzlePreview = {
    [PuzzleCode.EVENT_2021_SUMMER_1]: Preview.PUZZLE_EVENT_2021_SUMMER_1,
    [PuzzleCode.EVENT_2021_SUMMER_1_DMM]: Preview.PUZZLE_EVENT_2021_SUMMER_1_DMM,
    [PuzzleCode.EVENT_2021_SUMMER_2]: Preview.PUZZLE_EVENT_2021_SUMMER_2,
    [PuzzleCode.EVENT_2021_SUMMER_3]: Preview.PUZZLE_EVENT_2021_SUMMER_3,
    [PuzzleCode.EVENT_2021_SUMMER_4]: Preview.PUZZLE_EVENT_2021_SUMMER_4,
    [PuzzleCode.EVENT_2021_XMAS_1]: Preview.PUZZLE_EVENT_2021_XMAS_1,
    [PuzzleCode.EVENT_2021_XMAS_2]: Preview.PUZZLE_EVENT_2021_XMAS_2,
    [PuzzleCode.EVENT_2022_SUMMER_1]: Preview.PUZZLE_EVENT_2022_SUMMER_1,
    [PuzzleCode.EVENT_2022_SUMMER_2]: Preview.PUZZLE_EVENT_2022_SUMMER_2,
    [PuzzleCode.EVENT_2022_SUMMER_3]: Preview.PUZZLE_EVENT_2022_SUMMER_3,
    [PuzzleCode.EVENT_2022_SUMMER_4]: Preview.PUZZLE_EVENT_2022_SUMMER_4,
    [PuzzleCode.EVENT_2022_XMAS_1]: Preview.PUZZLE_EVENT_2022_XMAS_1,
    [PuzzleCode.EVENT_2023_CNY_1]: Preview.PUZZLE_EVENT_2023_CNY_1,
    [PuzzleCode.EVENT_2023_SUMMER_1]: Preview.PUZZLE_EVENT_2023_SUMMER_1,
    [PuzzleCode.EVENT_2023_SUMMER_2]: Preview.PUZZLE_EVENT_2023_SUMMER_2,
    [PuzzleCode.EVENT_2023_SUMMER_3]: Preview.PUZZLE_EVENT_2023_SUMMER_3,
    [PuzzleCode.EVENT_2023_SUMMER_4]: Preview.PUZZLE_EVENT_2023_SUMMER_4,
    [PuzzleCode.EVENT_2023_XMAS_1]: Preview.PUZZLE_EVENT_2023_XMAS_1,
    [PuzzleCode.EVENT_2023_XMAS_2]: Preview.PUZZLE_EVENT_2023_XMAS_2,
    [PuzzleCode.EVENT_2024_SUMMER_1]: Preview.PUZZLE_EVENT_2024_SUMMER_1,
    [PuzzleCode.EVENT_2024_SUMMER_2]: Preview.PUZZLE_EVENT_2024_SUMMER_2,
    [PuzzleCode.EVENT_2024_SUMMER_3]: Preview.PUZZLE_EVENT_2024_SUMMER_3,
    [PuzzleCode.EVENT_2024_SUMMER_4]: Preview.PUZZLE_EVENT_2024_SUMMER_4,
    [PuzzleCode.HUMAN_SARIA]: Preview.PUZZLE_HUMAN_SARIA,
    [PuzzleCode.HUMAN_PETRA]: Preview.PUZZLE_HUMAN_PETRA,
    [PuzzleCode.HUMAN_KIKYOU]: Preview.PUZZLE_HUMAN_KIKYOU,
    [PuzzleCode.HUMAN_KAEDE]: Preview.PUZZLE_HUMAN_KAEDE,
    [PuzzleCode.HUMAN_OLA]: Preview.PUZZLE_HUMAN_OLA,
    [PuzzleCode.HUMAN_KANI]: Preview.PUZZLE_HUMAN_KANI,
    [PuzzleCode.HUMAN_CHARLENE]: Preview.PUZZLE_HUMAN_CHARLENE,
    [PuzzleCode.HUMAN_MARTINA]: Preview.PUZZLE_HUMAN_MARTINA,
    [PuzzleCode.HUMAN_CLARIE]: Preview.PUZZLE_HUMAN_CLARIE,
    [PuzzleCode.HUMAN_ANNA]: Preview.PUZZLE_HUMAN_ANNA,
    [PuzzleCode.HUMAN_BLAIRE]: Preview.PUZZLE_HUMAN_BLAIRE,
    [PuzzleCode.HUMAN_NATASHA]: Preview.PUZZLE_HUMAN_NATASHA,
    [PuzzleCode.DEMON_FLAY]: Preview.PUZZLE_DEMON_FLAY,
    [PuzzleCode.DEMON_MANUELLA]: Preview.PUZZLE_DEMON_MANUELLA,
    [PuzzleCode.DEMON_LORI]: Preview.PUZZLE_DEMON_LORI,
    [PuzzleCode.DEMON_MINNOW]: Preview.PUZZLE_DEMON_MINNOW,
    [PuzzleCode.DEMON_LAMIA]: Preview.PUZZLE_DEMON_LAMIA,
    [PuzzleCode.DEMON_HARPY]: Preview.PUZZLE_DEMON_HARPY,
    [PuzzleCode.DEMON_STEED]: Preview.PUZZLE_DEMON_STEED,
    [PuzzleCode.DEMON_MUMU]: Preview.PUZZLE_DEMON_MUMU,
    [PuzzleCode.SKY_PUNISHMENT]: Preview.PUZZLE_SKY_PUNISHMENT,
    [PuzzleCode.SKY_BLISS]: Preview.PUZZLE_SKY_BLISS,
}

export const PuzzleImage = {
    [PuzzleCode.EVENT_2021_SUMMER_1]: Image.PUZZLE_EVENT_2021_SUMMER_1,
    [PuzzleCode.EVENT_2021_SUMMER_1_DMM]: Image.PUZZLE_EVENT_2021_SUMMER_1_DMM,
    [PuzzleCode.EVENT_2021_SUMMER_2]: Image.PUZZLE_EVENT_2021_SUMMER_2,
    [PuzzleCode.EVENT_2021_SUMMER_3]: Image.PUZZLE_EVENT_2021_SUMMER_3,
    [PuzzleCode.EVENT_2021_SUMMER_4]: Image.PUZZLE_EVENT_2021_SUMMER_4,
    [PuzzleCode.EVENT_2021_XMAS_1]: Image.PUZZLE_EVENT_2021_XMAS_1,
    [PuzzleCode.EVENT_2021_XMAS_2]: Image.PUZZLE_EVENT_2021_XMAS_2,
    [PuzzleCode.EVENT_2022_SUMMER_1]: Image.PUZZLE_EVENT_2022_SUMMER_1,
    [PuzzleCode.EVENT_2022_SUMMER_2]: Image.PUZZLE_EVENT_2022_SUMMER_2,
    [PuzzleCode.EVENT_2022_SUMMER_3]: Image.PUZZLE_EVENT_2022_SUMMER_3,
    [PuzzleCode.EVENT_2022_SUMMER_4]: Image.PUZZLE_EVENT_2022_SUMMER_4,
    [PuzzleCode.EVENT_2022_XMAS_1]: Image.PUZZLE_EVENT_2022_XMAS_1,
    [PuzzleCode.EVENT_2023_CNY_1]: Image.PUZZLE_EVENT_2023_CNY_1,
    [PuzzleCode.EVENT_2023_SUMMER_1]: Image.PUZZLE_EVENT_2023_SUMMER_1,
    [PuzzleCode.EVENT_2023_SUMMER_2]: Image.PUZZLE_EVENT_2023_SUMMER_2,
    [PuzzleCode.EVENT_2023_SUMMER_3]: Image.PUZZLE_EVENT_2023_SUMMER_3,
    [PuzzleCode.EVENT_2023_SUMMER_4]: Image.PUZZLE_EVENT_2023_SUMMER_4,
    [PuzzleCode.EVENT_2023_XMAS_1]: Image.PUZZLE_EVENT_2023_XMAS_1,
    [PuzzleCode.EVENT_2023_XMAS_2]: Image.PUZZLE_EVENT_2023_XMAS_2,
    [PuzzleCode.EVENT_2024_SUMMER_1]: Image.PUZZLE_EVENT_2024_SUMMER_1,
    [PuzzleCode.EVENT_2024_SUMMER_2]: Image.PUZZLE_EVENT_2024_SUMMER_2,
    [PuzzleCode.EVENT_2024_SUMMER_3]: Image.PUZZLE_EVENT_2024_SUMMER_3,
    [PuzzleCode.EVENT_2024_SUMMER_4]: Image.PUZZLE_EVENT_2024_SUMMER_4,
    [PuzzleCode.HUMAN_SARIA]: Image.PUZZLE_HUMAN_SARIA,
    [PuzzleCode.HUMAN_PETRA]: Image.PUZZLE_HUMAN_PETRA,
    [PuzzleCode.HUMAN_KIKYOU]: Image.PUZZLE_HUMAN_KIKYOU,
    [PuzzleCode.HUMAN_KAEDE]: Image.PUZZLE_HUMAN_KAEDE,
    [PuzzleCode.HUMAN_OLA]: Image.PUZZLE_HUMAN_OLA,
    [PuzzleCode.HUMAN_KANI]: Image.PUZZLE_HUMAN_KANI,
    [PuzzleCode.HUMAN_CHARLENE]: Image.PUZZLE_HUMAN_CHARLENE,
    [PuzzleCode.HUMAN_MARTINA]: Image.PUZZLE_HUMAN_MARTINA,
    [PuzzleCode.HUMAN_CLARIE]: Image.PUZZLE_HUMAN_CLARIE,
    [PuzzleCode.HUMAN_ANNA]: Image.PUZZLE_HUMAN_ANNA,
    [PuzzleCode.HUMAN_BLAIRE]: Image.PUZZLE_HUMAN_BLAIRE,
    [PuzzleCode.HUMAN_NATASHA]: Image.PUZZLE_HUMAN_NATASHA,
    [PuzzleCode.DEMON_FLAY]: Image.PUZZLE_DEMON_FLAY,
    [PuzzleCode.DEMON_MANUELLA]: Image.PUZZLE_DEMON_MANUELLA,
    [PuzzleCode.DEMON_LORI]: Image.PUZZLE_DEMON_LORI,
    [PuzzleCode.DEMON_MINNOW]: Image.PUZZLE_DEMON_MINNOW,
    [PuzzleCode.DEMON_LAMIA]: Image.PUZZLE_DEMON_LAMIA,
    [PuzzleCode.DEMON_HARPY]: Image.PUZZLE_DEMON_HARPY,
    [PuzzleCode.DEMON_STEED]: Image.PUZZLE_DEMON_STEED,
    [PuzzleCode.DEMON_MUMU]: Image.PUZZLE_DEMON_MUMU,
    [PuzzleCode.SKY_PUNISHMENT]: Image.PUZZLE_SKY_PUNISHMENT,
    [PuzzleCode.SKY_BLISS]: Image.PUZZLE_SKY_BLISS,
}

export const UnitDisciplinePreview = {
    [UnitID.baal]: [ Preview.DISCIPLINE_10001_1, Preview.DISCIPLINE_10001_2, Preview.DISCIPLINE_10001_3 ],
    [UnitID.satan]: [ Preview.DISCIPLINE_10002_1, Preview.DISCIPLINE_10002_2, Preview.DISCIPLINE_10002_3 ],
    [UnitID.iblis]: [ Preview.DISCIPLINE_10003_1, Preview.DISCIPLINE_10003_2, Preview.DISCIPLINE_10003_3 ],
    [UnitID.nana]: [ Preview.DISCIPLINE_10802_1, Preview.DISCIPLINE_10802_2, Preview.DISCIPLINE_10802_3 ],
}

export const UnitEssenceIcon = {
    [UnitID.baal]: Icon.ESSENCE_10001,
    [UnitID.satan]: Icon.ESSENCE_10002,
    [UnitID.iblis]: Icon.ESSENCE_10003,
    [UnitID.nana]: Icon.ESSENCE_10802,
}

export const UnitSelectionPreview = {
    [UnitID.baal]: Preview.SELECTION_10001,
    [UnitID.satan]: Preview.SELECTION_10002,
    [UnitID.iblis]: Preview.SELECTION_10003,
    [UnitID.nana]: Preview.SELECTION_10802,
}

export const UnitFullImage = {
    [UnitID.baal]: [ Image.FULLIMAGE_10001_0, Image.FULLIMAGE_10001_1, Image.FULLIMAGE_10001_2 ],
    [UnitID.satan]: [ Image.FULLIMAGE_10002_0, Image.FULLIMAGE_10002_1, Image.FULLIMAGE_10002_2 ],
    [UnitID.iblis]: [ Image.FULLIMAGE_10002_0, Image.FULLIMAGE_10003_1, Image.FULLIMAGE_10003_2 ],
    [UnitID.nana]: [ Image.FULLIMAGE_10802_0, Image.FULLIMAGE_10802_1, Image.FULLIMAGE_10802_2 ],
}