import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const VV_PAINTING: Art = {
    code: 'VV_PAINTING',
    source: ArtSource.FANART,
    type: ArtType.PAINTING,
    locale: [ Locale.tc, Locale.sc, Locale.en, Locale.jp, Locale.kr ],
    author: '森屿海盐vv',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: '森屿海盐vv - 雜圖',
        [Locale.sc]: '森屿海盐vv - 杂图',
        [Locale.en]: '森屿海盐vv - Painting',
        [Locale.jp]: '森屿海盐vv - 絵画',
        [Locale.kr]: '森屿海盐vv - 그림',
    },
    remark: {
        [Locale.tc]: '*已取得作者 森屿海盐vv 授權轉載',
        [Locale.sc]: '*已取得作者 森屿海盐vv 授权转载',
        [Locale.en]: '*Authorized by the author 森屿海盐vv',
        [Locale.jp]: '*作者 森屿海盐vv の許可を得て転載しました',
        [Locale.kr]: '*森屿海盐vv 작가의 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.VV_PAINTING,
}

export default VV_PAINTING