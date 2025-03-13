import { Locale, ArtSource, ArtType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const DOKGUN_OLD_STICKER: Art = {
    code: 'DOKGUN_OLD_STICKER',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.kr ],
    author: '독군 Dokgun',
    authorLink: 'https://www.pixiv.net/users/19278065',
    name: {
        [Locale.tc]: '독군 Dokgun - 貼圖 V1 (韓文)',
        [Locale.sc]: '독군 Dokgun - 贴图 V1 (韓文)',
        [Locale.en]: '독군 Dokgun - Sticker V1 (Korean)',
        [Locale.jp]: '독군 Dokgun - スタンプ V1 (韓国語)',
        [Locale.kr]: '독군 Dokgun - 스티커 V1 (한국어)',
    },
    remark: {
        [Locale.tc]: '*已取得作者 독군 Dokgun 授權轉載',
        [Locale.sc]: '*已取得作者 독군 Dokgun 授权转载',
        [Locale.en]: '*Authorized by the author 독군 Dokgun',
        [Locale.jp]: '*作者 독군 Dokgun の許可を得て転載しました',
        [Locale.kr]: '*독군 Dokgun 작가의 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.DOKGUN_OLD_STICKER,
}

export default DOKGUN_OLD_STICKER