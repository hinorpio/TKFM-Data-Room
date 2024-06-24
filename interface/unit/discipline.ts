
import { Locale } from '@/plugins/utils/enums';

export interface Discipline {
    preview: string;
    name: {
        [lang in Locale]?: null | string;
    };
  }
  