import { Locale, ArtSource, ArtType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const C_FANART: Art = {
    code: 'C_FANART',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.tc, Locale.sc ],
    author: '嗯C郎',
    authorLink: 'https://www.pixiv.net/users/10499555',
    name: {
        [Locale.tc]: '嗯C郎 - 同人圖',
        [Locale.sc]: '嗯C郎 - 同人图',
        [Locale.en]: '嗯C郎 - Fanart',
        [Locale.jp]: '嗯C郎 - 同人',
        [Locale.kr]: '嗯C郎 - 팬 창작',
    },
    remark: {
        [Locale.tc]: '*已取得作者 嗯C郎 授權轉載',
        [Locale.sc]: '*已取得作者 嗯C郎 授权转载',
        [Locale.en]: '*Authorized by the author 嗯C郎',
        [Locale.jp]: '*作者 嗯C郎 の許可を得て転載しました',
        [Locale.kr]: '*嗯C郎 작가의 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.C_FANART,
}

export default C_FANART