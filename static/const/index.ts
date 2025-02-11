import { 
    ErrorCode,
    ErrorMessage,
} from '@/plugins/utils/enums';
import * as Item from './item';
import * as General from './general';
import * as Puzzle from './puzzle';
import * as UnitImage from './unit';
import * as Event from './event';
import * as ArtSrc from './art';
import { NuxtError } from '@nuxt/types';

export const CustomError: {[code in ErrorCode]: NuxtError} = {
    [ErrorCode.PAGE_NOT_FOUND]: {
            statusCode: ErrorCode.PAGE_NOT_FOUND,
            message: ErrorMessage.PAGE_NOT_FOUND
    },
    [ErrorCode.UNKNOWN_ERROR]:  {
            statusCode: ErrorCode.UNKNOWN_ERROR,
            message: ErrorMessage.UNKNOWN_ERROR
    },
    [ErrorCode.CANNOT_FIND_CHARACTER]: {
            statusCode: ErrorCode.CANNOT_FIND_CHARACTER,
            message: ErrorMessage.CANNOT_FIND_CHARACTER
    },
    [ErrorCode.CANNOT_FIND_ART]: {
        statusCode: ErrorCode.CANNOT_FIND_ART,
        message: ErrorMessage.CANNOT_FIND_ART
},
}

export const baseURL = "https://tkfmdata.com"
export const cdnURL = `https://cdn.tkfmdata.com`

export const LocaleString = General.LocaleString

export const ElementIcon = General.ElementIcon
export const ElementColor = General.ElementColor
export const PositionIcon = General.PositionIcon
export const RarityIcon = General.RarityIcon
export const RarityColor = General.RarityColor
export const SkillIcon = General.SkillIcon
export const SkillTypeColor = General.SkillTypeColor
export const LiberateIcon = General.LiberateIcon
export const PotentialBuffIcon = General.PotentialBuffIcon
export const DispatchImage = General.DispatchImage
export const DispatchSkillTypeString = General.DispatchSkillTypeString
export const LogTypeColor = General.LogTypeColor
export const LogTypeStr = General.LogTypeStr
export const ArtSourceColor = General.ArtSourceColor
export const ArtSourceStr = General.ArtSourceStr
export const ArtTypeColor = General.ArtTypeColor
export const ArtTypeStr = General.ArtTypeStr

export const ItemIcon = Item.Icon

export const PuzzlePreview = Puzzle.Preview
export const PuzzleImage = Puzzle.Image

export const EventTypeColor = General.EventTypeColor
export const EventTypeString = General.EventTypeString
export const EventBanner = Event

export const UnitEssence = UnitImage.Essence
export const UnitSelection = UnitImage.Selection
export const UnitFullImage = UnitImage.FullImage 
export const UnitDisciplinePreview = UnitImage.DisciplinePreview
export const UnitOutfits = UnitImage.Outfits

export const ArtFile = ArtSrc
