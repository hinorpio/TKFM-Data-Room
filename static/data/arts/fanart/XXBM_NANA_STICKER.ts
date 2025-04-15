import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const XXBM_NANA_STICKER: Art = {
    code: 'XXBM_NANA_STICKER',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.tc, Locale.sc, Locale.en, Locale.jp, Locale.kr ],
    author: 'XXBM 小小布魔',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: 'XXBM 小小布魔 - 娜娜貼圖',
        [Locale.sc]: 'XXBM 小小布魔 - 娜娜贴图',
        [Locale.en]: 'XXBM 小小布魔 - Nana Sticker',
        [Locale.jp]: 'XXBM 小小布魔 - ナナ スタンプ',
        [Locale.kr]: 'XXBM 小小布魔 - 나나 스티커',
    },
    remark: {
        [Locale.tc]: '*已取得作者 XXBM 小小布魔 授權轉載',
        [Locale.sc]: '*已取得作者 XXBM 小小布魔 授权转载',
        [Locale.en]: '*Authorized by the author XXBM 小小布魔',
        [Locale.jp]: '*作者 XXBM 小小布魔 の許可を得て転載しました',
        [Locale.kr]: '*XXBM 小小布魔 작가의 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.XXBM_NANA_STICKER,
}

export default XXBM_NANA_STICKER