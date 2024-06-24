import { Locale, TagType } from '@/plugins/utils/enums';

export interface Tag {
    ID: number;
    type: TagType;
    icon: string;
    name: {
        [lang in Locale]?: null | string;
    }
}
  