import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const MIMIMAOMAO_STICKER: Art = {
    code: 'MIMIMAOMAO_STICKER',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.tc, Locale.sc ],
    author: '咪咪貓貓',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: '咪咪貓貓 - 同人圖',
        [Locale.sc]: '咪咪貓貓 - 同人图',
        [Locale.en]: '咪咪貓貓 - Fanart',
        [Locale.jp]: '咪咪貓貓 - 同人',
        [Locale.kr]: '咪咪貓貓 - 팬 창작',
    },
    remark: {
        [Locale.tc]: '*已取得作者 咪咪貓貓 授權轉載',
        [Locale.sc]: '*已取得作者 咪咪貓貓 授权转载',
        [Locale.en]: '*Authorized by the author 咪咪貓貓',
        [Locale.jp]: '*作者 咪咪貓貓 の許可を得て転載しました',
        [Locale.kr]: '*咪咪貓貓 작가의 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.MIMIMAOMAO_STICKER,
}

export default MIMIMAOMAO_STICKER