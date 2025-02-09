import { Locale, ArtSource, ArtType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const NANA_SUMMER_COMIC: Art = {
    code: 'NANA_SUMMER_COMIC',
    source: ArtSource.OFFICAL,
    type: ArtType.COMIC,
    locale: [ Locale.tc ],
    author: '天下布魔',
    authorLink: null,
    name: {
        [Locale.tc]: '天下布魔 - Q版貼圖',
        [Locale.sc]: '天下布魔 - Q版贴图',
        [Locale.en]: 'TenkafuMA - Cute Sticker',
        [Locale.jp]: '天下布魔 - 可愛いスタンプ',
        [Locale.kr]: '텐카푸마 - 귀여운 스티커',
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