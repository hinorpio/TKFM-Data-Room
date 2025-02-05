import { NuxtError } from '@nuxt/types';
import { 
    ErrorCode,
    Element, 
    Position, 
    Rarity, 
    SkillType, 
    LiberationStage, 
    PotentialBuffType
} from '../enums';
import { 
    ElementIcon, 
    PositionIcon, 
    RarityIcon, 
    SkillIcon,
    LiberateIcon,
    PotentialBuffIcon,
    SkillTypeColor,
    CustomError,
} from '~/static/const';

export default {
    showPreLineText(text: string): string{
        return text.replace(/\n/g, '<br>');
    },
    handleCopyLink(path: string): void{
        navigator.clipboard.writeText(path);
    },
    handleDownload(path: string): void{
        const link = document.createElement('a');
        link.href = path;
        link.target = '_blank';
        link.download = this.getFileNameFromUrl(path);

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },
    getFileNameFromUrl(url: string): string {
        return url.substring(url.lastIndexOf('/') + 1);
    },
    getCustomError(code: ErrorCode): NuxtError{
        return CustomError[code]
    },
    getErrorImage(code: string): string{
        switch (code) {
            case "CANNOT_FIND_CHARACTER":
                return require("@/assets/error.png")
            default:
                return require("@/assets/error.png")
        }
    },
    getValueByBreakPoint(breakpoint: string, xs: any, sm: any, md: any, lg: any, xl: any): any{
        switch (breakpoint) {
            case 'xs': return xs;
            case 'sm': return sm;
            case 'md': return md;
            case 'lg': return lg;
            case 'xl': return xl;
            default: return xl;
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
}