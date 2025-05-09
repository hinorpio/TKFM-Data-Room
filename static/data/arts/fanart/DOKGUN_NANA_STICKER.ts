import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const DOKGUN_NANA_STICKER: Art = {
    code: 'DOKGUN_NANA_STICKER',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.kr ],
    author: '독군 Dokgun',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: 'https://www.pixiv.net/users/19278065',
    name: {
        [Locale.tc]: '독군 Dokgun - 娜娜貼圖 (韓文)',
        [Locale.sc]: '독군 Dokgun - 娜娜贴图 (韓文)',
        [Locale.en]: '독군 Dokgun - Nana Sticker (Korean)',
        [Locale.jp]: '독군 Dokgun - ナナ スタンプ (韓国語)',
        [Locale.kr]: '독군 Dokgun - 나나 스티커 (한국어)',
    },
    remark: {
        [Locale.tc]: '*已取得作者 독군 Dokgun 授權轉載',
        [Locale.sc]: '*已取得作者 독군 Dokgun 授权转载',
        [Locale.en]: '*Authorized by the author 독군 Dokgun',
        [Locale.jp]: '*作者 독군 Dokgun の許可を得て転載しました',
        [Locale.kr]: '*독군 Dokgun 작가의 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.DOKGUN_NANA_STICKER,
}

export default DOKGUN_NANA_STICKER