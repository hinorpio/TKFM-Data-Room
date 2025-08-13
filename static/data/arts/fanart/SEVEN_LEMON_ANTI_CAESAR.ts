import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const SEVEN_LEMON_ANTI_CAESAR: Art = {
    code: 'SEVEN_LEMON_ANTI_CAESAR',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.sc, Locale.tc ],
    author: '七色柠檬糖',
    authorType: ArtAuthorType.OWNER,
    authorLink: null,
    name: {
        [Locale.tc]: '七色柠檬糖 - 反凱薩表情包',
        [Locale.sc]: '七色柠檬糖 - 反凯萨表情包',
        [Locale.en]: '七色柠檬糖 - Anti-Caesar Sticker',
        [Locale.jp]: '七色柠檬糖 - 反シーザー スタン',
        [Locale.kr]: '七色柠檬糖 - 안티 시저 스티커',
    },
    remark: {
        [Locale.tc]: '*已取得所有者 七色柠檬糖 授權轉載',
        [Locale.sc]: '*已取得所有者 七色柠檬糖 授权转载',
        [Locale.en]: '*Authorized by the owner 七色柠檬糖',
        [Locale.jp]: '*所有者 七色柠檬糖 の許可を得て転載しました',
        [Locale.kr]: '*七色柠檬糖 소유자 허가를 받아 재게시했습니다',
    },
    paths: ArtFile.FANART.SEVEN_LEMON_ANTI_CAESAR,
}

export default SEVEN_LEMON_ANTI_CAESAR