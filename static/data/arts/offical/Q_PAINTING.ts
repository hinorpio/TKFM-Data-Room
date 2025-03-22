import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const Q_PAINTING: Art = {
    code: 'Q_PAINTING',
    source: ArtSource.OFFICAL,
    type: ArtType.PAINTING,
    locale: [ Locale.tc, Locale.sc ],
    author: 'TKFM',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: '天下布魔 - Q版畫作',
        [Locale.sc]: '天下布魔 - Q版画作',
        [Locale.en]: 'TenkafuMA - Cute Painting',
        [Locale.jp]: '天下布魔 - 可愛い絵画',
        [Locale.kr]: '텐카푸마 - 귀여운 그림',
    },
    remark: {
        [Locale.tc]: '',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    paths: ArtFile.OFFICAL.Q_PAINTING,
}

export default Q_PAINTING