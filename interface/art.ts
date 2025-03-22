import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';

export interface Art {
    code: string;
    source: ArtSource;
    type: ArtType;
    author: string;
    authorType: ArtAuthorType;
    locale: Locale[];
    authorLink?: null | string;
    name: {
        [lang in Locale]?: null | string;
    };
    remark: {
        [lang in Locale]?: null | string;
    };
    paths: string[];
}
  