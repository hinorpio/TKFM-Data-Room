
import { Locale, PuzzleType, PuzzleCode } from '@/plugins/utils/enums';

export interface Puzzle {
    code: PuzzleCode;
    type: PuzzleType;
    preview: string;
    name: {
        [lang in Locale]?: null | string;
    };
    fullImage: string;
}
  