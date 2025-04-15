import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const XXBM_PAINTING: Art = {
    code: 'XXBM_PAINTING',
    source: ArtSource.FANART,
    type: ArtType.PAINTING,
    locale: [ Locale.sc, Locale.tc ],
    author: 'XXBM 小小布魔',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: 'XXBM 小小布魔 - 雜圖',
        [Locale.sc]: 'XXBM 小小布魔 - 杂图',
        [Locale.en]: 'XXBM 小小布魔 - Painting',
        [Locale.jp]: 'XXBM 小小布魔 - 絵画',
        [Locale.kr]: 'XXBM 小小布魔 - 그림',
    },
    remark: {
        [Locale.tc]: '*已取得作者 XXBM 小小布魔 授權轉載',
        [Locale.sc]: '*已取得作者 XXBM 小小布魔 授权转载',
        [Locale.en]: '*Authorized by the author XXBM 小小布魔',
        [Locale.jp]: '*作者 XXBM 小小布魔 の許可を得て転載しました',
        [Locale.kr]: '*XXBM 小小布魔 작가의 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.XXBM_PAINTING,
}

export default XXBM_PAINTING