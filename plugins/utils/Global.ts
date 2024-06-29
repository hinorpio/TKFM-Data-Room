import { NuxtError } from '@nuxt/types';
import { 
    ErrorCode,
    Element, 
    Position, 
    Rarity, 
    SkillType, 
    LiberationStage, 
    PotentialBuffType
} from './enums';
import { 
    ElementIcon, 
    PositionIcon, 
    RarityIcon, 
    SkillIcon,
    LiberateIcon,
    PotentialBuffIcon,
    SkillTypeColor,
    CustomError,
} from '~/static/data/ImageSrc';

export default {
    showPreLineText(text: string): string{
        return text.replace(/\n/g, '<br>');
    },
    getErrorImage(code: string): string{
        switch (code) {
            case "CANNOT_FIND_CHARACTER":
                return require("@/assets/error.png")
            default:
                return require("@/assets/error.png")
        }
    },
    getAllElement(): { [key: string]: string }[] {
        return Object.entries(ElementIcon).map(([key, value]) => ({ code: key, icon: value }));
    },
    getAllPosition(): { [key: string]: string }[] {
        return Object.entries(PositionIcon).map(([key, value]) => ({ code: key, icon: value }));
    },
    getAllRarity(): { [key: string]: string }[] {
        return Object.entries(RarityIcon).map(([key, value]) => ({ code: key, icon: value }));
    },
    getElementIcon(code: Element): string {
        return ElementIcon[code] || '';
    },
    getPositionIcon(code: Position): string {
        return PositionIcon[code] || '';
    },
    getRarityIcon(code: Rarity): string | undefined{
        return RarityIcon[code] || '';
    },
    getSkillIcon(type: SkillType): string | undefined{
        return SkillIcon[type] || '';
    },
    getSkillColor(type: SkillType): string | undefined{
        return SkillTypeColor[type] || '';
    },
    getLiberateIcon(stage: LiberationStage): string | undefined{
        return LiberateIcon[stage] || '';
    },
    getPotentialBuffIcon(type: PotentialBuffType): string | undefined{
        return PotentialBuffIcon[type] || '';
    },
    getCustomError(code: ErrorCode): NuxtError{
        return CustomError[code]
    }
}