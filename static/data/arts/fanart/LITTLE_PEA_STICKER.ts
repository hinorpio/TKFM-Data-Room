import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const LITTLE_PEA_STICKER: Art = {
    code: 'LITTLE_PEA_STICKER',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.tc, Locale.sc, Locale.en, Locale.jp, Locale.kr ],
    author: '三重小豌豌',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: '三重小豌豌 - 娜娜GIF表情包',
        [Locale.sc]: '三重小豌豌 - 娜娜GIF表情包',
        [Locale.en]: '三重小豌豌 - Nana GIF Sticker',
        [Locale.jp]: '三重小豌豌 - ナナ GIF スタンプ',
        [Locale.kr]: '三重小豌豌 - 나나 GIF 스티커',
    },
    remark: {
        [Locale.tc]: '*已取得作者 三重小豌豌 授權轉載',
        [Locale.sc]: '*已取得作者 三重小豌豌 授权转载',
        [Locale.en]: '*Authorized by the author 三重小豌豌',
        [Locale.jp]: '*作者 三重小豌豌 の許可を得て転載しました',
        [Locale.kr]: '*三重小豌豌 작가의 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.LITTLE_PEA_STICKER,
}

export default LITTLE_PEA_STICKER