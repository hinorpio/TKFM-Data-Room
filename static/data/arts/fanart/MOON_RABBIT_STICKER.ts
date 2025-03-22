import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const MOON_RABBIT_STICKER: Art = {
    code: 'MOON_RABBIT_STICKER',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.tc, Locale.sc ],
    author: '月兔管理官',
    authorType: ArtAuthorType.OWNER,
    authorLink: '',
    name: {
        [Locale.tc]: '月兔管理官 - 二次加工貼圖',
        [Locale.sc]: '月兔管理官 - 二次加工贴图',
        [Locale.en]: '月兔管理官 - Re-Processing Sticker',
        [Locale.jp]: '月兔管理官 - 再処理 スタン',
        [Locale.kr]: '月兔管理官 - 재처리 스티커',
    },
    remark: {
        [Locale.tc]: '*已取得所有者 月兔管理官 授權轉載',
        [Locale.sc]: '*已取得所有者 月兔管理官 授权转载',
        [Locale.en]: '*Authorized by the owner 月兔管理官',
        [Locale.jp]: '*所有者 月兔管理官 の許可を得て転載しました',
        [Locale.kr]: '*月兔管理官 소유자 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.MOON_RABBIT_STICKER,
}

export default MOON_RABBIT_STICKER