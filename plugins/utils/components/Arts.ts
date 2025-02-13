import { Art } from '~/interface/art';
import { Locale, ErrorMessage, ArtSource, ArtType } from '../enums'
import { ArtSourceColor, ArtSourceStr, ArtTypeColor, ArtTypeStr } from '~/static/const';
import artData from '@/static/data/arts';

export default {
    getAllArt(): Art[] {
        return artData;
    },

    getArt(metaCode: string): Art | undefined{
        const foundArt = artData.find((art: Art) => art.code === metaCode);
        if (foundArt) {
            return foundArt;
        } else {
            throw new Error(ErrorMessage.CANNOT_FIND_ART);
        }
    },

    getArtSourceColor(source: ArtSource): string{
        return ArtSourceColor[source]
    },

    getArtSourceStr(source: ArtSource): {[lang in Locale]: string}{
        return ArtSourceStr[source];
    },

    getArtTypeColor(type: ArtType): string{
        return ArtTypeColor[type]
    },

    getArtTypeStr(type: ArtType): {[lang in Locale]: string}{
        return ArtTypeStr[type];
    },

    getAllArtSourceColor(): { [key: string]: string }[] {
        return Object.entries(ArtSourceColor).map(([key, value]) => ({ code: key, color: value }));
    },
    getAllArtTypeColor(): { [key: string]: string }[] {
        return Object.entries(ArtTypeColor).map(([key, value]) => ({ code: key, color: value }));
    },
};