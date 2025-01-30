import { Art } from '~/interface/art';
import { ErrorMessage } from '../enums'
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
    }
};