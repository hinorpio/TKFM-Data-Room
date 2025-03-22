import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const NANA_SUMMER_COMIC: Art = {
    code: 'NANA_SUMMER_COMIC',
    source: ArtSource.OFFICAL,
    type: ArtType.COMIC,
    locale: [ Locale.tc, Locale.sc ],
    author: 'TKFM - Bian 小編',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: '與她的夏日回憶',
        [Locale.sc]: '与她的夏日回忆',
        [Locale.en]: '與她的夏日回憶',
        [Locale.jp]: '與她的夏日回憶',
        [Locale.kr]: '與她的夏日回憶',
    },
    remark: {
        [Locale.tc]: '',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    paths: ArtFile.OFFICAL.NANA_SUMMER_COMIC,
}

export default NANA_SUMMER_COMIC