import { Locale, ArtSource, ArtType } from '@/plugins/utils/enums';

export interface Art {
    code: string;
    source: ArtSource;
    type: ArtType;
    author: string;
    name: {
        [lang in Locale]?: null | string;
    };
    remark: {
        [lang in Locale]?: null | string;
    };
    paths: string[];
}
  