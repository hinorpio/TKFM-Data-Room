import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const DOKGUN_STICKER_KR: Art = {
    code: 'DOKGUN_STICKER_KR',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.kr ],
    author: '독군 Dokgun',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: 'https://www.pixiv.net/users/19278065',
    name: {
        [Locale.tc]: '독군 Dokgun - GIF 貼圖 (韓文)',
        [Locale.sc]: '독군 Dokgun - GIF 贴图 (韓文)',
        [Locale.en]: '독군 Dokgun - GIF Sticker (Korean)',
        [Locale.jp]: '독군 Dokgun - GIF スタンプ (韓国語)',
        [Locale.kr]: '독군 Dokgun - GIF 스티커 (한국어)',
    },
    remark: {
        [Locale.tc]: '*已取得作者 독군 Dokgun 授權轉載',
        [Locale.sc]: '*已取得作者 독군 Dokgun 授权转载',
        [Locale.en]: '*Authorized by the author 독군 Dokgun',
        [Locale.jp]: '*作者 독군 Dokgun の許可を得て転載しました',
        [Locale.kr]: '*독군 Dokgun 작가의 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.DOKGUN_STICKER_KR,
}

export default DOKGUN_STICKER_KR