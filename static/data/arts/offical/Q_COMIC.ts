import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const Q_COMIC: Art = {
    code: 'Q_COMIC',
    source: ArtSource.OFFICAL,
    type: ArtType.COMIC,
    locale: [ Locale.tc, Locale.sc ],
    author: 'TKFM',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: '天下布魔 - Q版漫畫',
        [Locale.sc]: '天下布魔 - Q版漫画',
        [Locale.en]: 'TenkafuMA - Cute Comic',
        [Locale.jp]: '天下布魔 - 可愛いマンガ',
        [Locale.kr]: '텐카푸마 - 귀여운 만화',
    },
    remark: {
        [Locale.tc]: '',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    paths: ArtFile.OFFICAL.Q_COMIC,
}

export default Q_COMIC