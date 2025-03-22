import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const NOEL_CUTE_PAINTING: Art = {
    code: 'NOEL_CUTE_PAINTING',
    source: ArtSource.FANART,
    type: ArtType.PAINTING,
    locale: [ Locale.tc, Locale.sc, Locale.en, Locale.jp, Locale.kr ],
    author: '黑白好哇塞',
    authorType: ArtAuthorType.OWNER,
    authorLink: null,
    name: {
        [Locale.tc]: '黑白好哇塞 - 黑白 同人圖',
        [Locale.sc]: '黑白好哇塞 - 黑白 同人图',
        [Locale.en]: '黑白好哇塞 - Noel Fanart',
        [Locale.jp]: '黑白好哇塞 - ノエル 同人',
        [Locale.kr]: '黑白好哇塞 - 엘리 팬 창작',
    },
    remark: {
        [Locale.tc]: '*已取得所有者 黑白好哇塞 授權轉載',
        [Locale.sc]: '*已取得所有者 黑白好哇塞 授权转载',
        [Locale.en]: '*Authorized by the owner 黑白好哇塞',
        [Locale.jp]: '*所有者 黑白好哇塞 の許可を得て転載しました',
        [Locale.kr]: '*黑白好哇塞 소유자 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.NOEL_CUTE_PAINTING,
}

export default NOEL_CUTE_PAINTING