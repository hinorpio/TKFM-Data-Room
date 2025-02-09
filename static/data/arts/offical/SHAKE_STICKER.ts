import { Locale, ArtSource, ArtType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const SHAKE_STICKER: Art = {
    code: 'SHAKE_STICKER',
    source: ArtSource.OFFICAL,
    type: ArtType.STICKER,
    locale: [ Locale.tc, Locale.sc, Locale.en, Locale.jp, Locale.kr ],
    author: '天下布魔',
    authorLink: null,
    name: {
        [Locale.tc]: '天下布魔 - 抖腰',
        [Locale.sc]: '天下布魔 - 抖腰',
        [Locale.en]: 'TenkafuMA - Shake',
        [Locale.jp]: '天下布魔 - 腰を振る',
        [Locale.kr]: '텐카푸마 - 허리를 흔들어라',
    },
    remark: {
        [Locale.tc]: '',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    paths: ArtFile.OFFICAL.SHAKE_STICKER,
}

export default SHAKE_STICKER