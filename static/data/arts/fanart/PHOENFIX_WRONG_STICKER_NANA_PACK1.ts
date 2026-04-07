import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const PHOENFIX_WRONG_STICKER_NANA_PACK1: Art = {
    code: 'PHOENFIX_WRONG_STICKER_NANA_PACK1',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    locale: [ Locale.tc, Locale.sc ],
    author: '过劳的娜娜喵',
    authorType: ArtAuthorType.OWNER,
    authorLink: 'https://space.bilibili.com/1492446334',
    name: {
        [Locale.tc]: '過勞的娜娜喵 - 正常表情包',
        [Locale.sc]: '过劳的娜娜喵 - 正常表情包',
        [Locale.en]: '过劳的娜娜喵 - Nana Sticker Pack 1',
        [Locale.jp]: '过劳的娜娜喵 - ナナ スタンプ Pack 1',
        [Locale.kr]: '过劳的娜娜喵 - 나나 스티커 Pack 1',
    },
    remark: {
        [Locale.tc]: `*已取得所有者 過勞的娜娜喵 授權轉載\n如果需要作為視訊素材需要取得授權, 請到作者的B站空間/QQ粉絲群 696388237 聯絡作者授權，並標註來源`,
        [Locale.sc]: `*已取得所有者 过劳的娜娜喵 授权转载\n如果需要作为视频素材需要获取授权, 请到作者的B站空间/QQ粉丝群 696388237 联系作者授权，并标注来源`,
        [Locale.en]: `*Authorized by the owner 过劳的娜娜喵\nIf you wish to use this material in a video, you will need to obtain authorization. Please contact the author on Bilibili/QQ fan group (696388237) to request authorization and indicate the source.`,
        [Locale.jp]: `*所有者 过劳的娜娜喵 の許可を得て転載しました\nこの素材を動画で使用する場合は、許可を得る必要があります。許可を申請するには、Bilibili/QQファングループ(696388237)で作者に連絡し、出典を明記してください。`,
        [Locale.kr]: `*过劳的娜娜喵 소유자 허가를 받아 재게시했습니다\n이 자료를 영상에 사용하려면 허가를 받아야 합니다. Bilibili/QQ 팬 그룹(696388237)에서 저작자에게 연락하여 허가를 요청하고 출처를 명시해 주세요.`,
    },
    paths: ArtFile.FANART.PHOENFIX_WRONG_STICKER_NANA_PACK1,
}

export default PHOENFIX_WRONG_STICKER_NANA_PACK1