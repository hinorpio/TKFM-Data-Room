
import { Locale } from '@/plugins/utils/enums';

export interface Puzzle {
    preview: string;
    name: {
        [lang in Locale]?: null | string;
    };
    fullImage: string;
}
  