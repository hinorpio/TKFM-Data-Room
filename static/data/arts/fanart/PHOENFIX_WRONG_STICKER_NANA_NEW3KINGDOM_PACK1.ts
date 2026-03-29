import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const PHOENFIX_WRONG_STICKER_NANA_NEW3KINGDOM_PACK1: Art = {
    code: 'PHOENFIX_WRONG_STICKER_NANA_NEW3KINGDOM_PACK1',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.tc, Locale.sc ],
    author: '过劳的娜娜喵',
    authorType: ArtAuthorType.OWNER,
    authorLink: null,
    name: {
        [Locale.tc]: '過勞的娜娜喵 - 新三國系列',
        [Locale.sc]: '过劳的娜娜喵 - 新三国系列',
        [Locale.en]: '过劳的娜娜喵 - Three Kingdoms Series',
        [Locale.jp]: '过劳的娜娜喵 - 三国',
        [Locale.kr]: '过劳的娜娜喵 - 삼국',
    },
    remark: {
        [Locale.tc]: '*已取得所有者 過勞的娜娜喵 授權轉載',
        [Locale.sc]: '*已取得所有者 过劳的娜娜喵 授权转载',
        [Locale.en]: '*Authorized by the owner 过劳的娜娜喵',
        [Locale.jp]: '*所有者 过劳的娜娜喵 の許可を得て転載しました',
        [Locale.kr]: '*过劳的娜娜喵 소유자 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.PHOENFIX_WRONG_STICKER_NANA_NEW3KINGDOM_PACK1,
}

export default PHOENFIX_WRONG_STICKER_NANA_NEW3KINGDOM_PACK1