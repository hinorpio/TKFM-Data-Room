import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const PHOENFIX_WRONG_STICKER_NANA_14: Art = {
    code: 'PHOENFIX_WRONG_STICKER_NANA_14',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.tc, Locale.sc ],
    author: '过劳的娜娜喵',
    authorType: ArtAuthorType.OWNER,
    authorLink: null,
    name: {
        [Locale.tc]: '過勞的娜娜喵 - 14醬系列',
        [Locale.sc]: '过劳的娜娜喵 - 14酱系列',
        [Locale.en]: '过劳的娜娜喵 - 14-Chan',
        [Locale.jp]: '过劳的娜娜喵 - 14ちゃん',
        [Locale.kr]: '过劳的娜娜喵 - 14',
    },
    remark: {
        [Locale.tc]: '*已取得所有者 過勞的娜娜喵 授權轉載',
        [Locale.sc]: '*已取得所有者 过劳的娜娜喵 授权转载',
        [Locale.en]: '*Authorized by the owner 过劳的娜娜喵',
        [Locale.jp]: '*所有者 过劳的娜娜喵 の許可を得て転載しました',
        [Locale.kr]: '*过劳的娜娜喵 소유자 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.PHOENFIX_WRONG_STICKER_NANA_14,
}

export default PHOENFIX_WRONG_STICKER_NANA_14