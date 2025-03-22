import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const NOEL_CUTE_STICKER: Art = {
    code: 'NOEL_CUTE_STICKER',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.tc, Locale.sc, Locale.en, Locale.jp, Locale.kr ],
    author: '黑白好哇塞',
    authorType: ArtAuthorType.OWNER,
    authorLink: null,
    name: {
        [Locale.tc]: '黑白好哇塞 - 黑白 頭像/表情包',
        [Locale.sc]: '黑白好哇塞 - 黑白 头像/表情包',
        [Locale.en]: '黑白好哇塞 - Noel Avatar/Sticker',
        [Locale.jp]: '黑白好哇塞 - ノエル スタンプ',
        [Locale.kr]: '黑白好哇塞 - 엘리 스티커',
    },
    remark: {
        [Locale.tc]: '*已取得所有者 黑白好哇塞 授權轉載',
        [Locale.sc]: '*已取得所有者 黑白好哇塞 授权转载',
        [Locale.en]: '*Authorized by the owner 黑白好哇塞',
        [Locale.jp]: '*所有者 黑白好哇塞 の許可を得て転載しました',
        [Locale.kr]: '*黑白好哇塞 소유자 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.NOEL_CUTE_STICKER,
}

export default NOEL_CUTE_STICKER