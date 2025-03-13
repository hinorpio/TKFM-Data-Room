import { Locale, ArtSource, ArtType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const ANNA_PHOENIX_FANART: Art = {
    code: 'ANNA_PHOENIX_FANART',
    source: ArtSource.FANART,
    type: ArtType.PAINTING,
    locale: [ Locale.tc, Locale.sc, Locale.en, Locale.jp, Locale.kr ],
    author: '真吾鳳',
    authorLink: null,
    name: {
        [Locale.tc]: '真吾鳳 - 同人圖',
        [Locale.sc]: '真吾鳳 - 同人图',
        [Locale.en]: '真吾鳳 - Fanart',
        [Locale.jp]: '真吾鳳 - 同人',
        [Locale.kr]: '真吾鳳 - 팬 창작',
    },
    remark: {
        [Locale.tc]: '*已取得作者 真吾鳳 授權轉載',
        [Locale.sc]: '*已取得作者 真吾鳳 授权转载',
        [Locale.en]: '*Authorized by the author 真吾鳳',
        [Locale.jp]: '*作者 真吾鳳 の許可を得て転載しました',
        [Locale.kr]: '*真吾鳳 작가의 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.ANNA_PHOENIX_FANART,
}

export default ANNA_PHOENIX_FANART