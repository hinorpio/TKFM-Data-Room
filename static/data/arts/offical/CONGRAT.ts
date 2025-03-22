import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const CONGRAT: Art = {
    code: 'CONGRAT',
    source: ArtSource.OFFICAL,
    type: ArtType.PAINTING,
    locale: [ Locale.tc, Locale.sc, Locale.en, Locale.jp, Locale.kr ],
    author: 'TKFM',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: '天下布魔 - 官方賀圖',
        [Locale.sc]: '天下布魔 - 官方贺图',
        [Locale.en]: 'TenkafuMA - Offical Greeting',
        [Locale.jp]: '天下布魔 - 公式祝賀',
        [Locale.kr]: '텐카푸마 - 공식 축하해요',
    },
    remark: {
        [Locale.tc]: '',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    paths: ArtFile.OFFICAL.CONGRAT,
}

export default CONGRAT