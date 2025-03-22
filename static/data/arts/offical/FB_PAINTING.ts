import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const FB_PAINTING: Art = {
    code: 'FB_PAINTING',
    source: ArtSource.OFFICAL,
    type: ArtType.PAINTING,
    locale: [ Locale.tc, Locale.sc, Locale.en, Locale.jp, Locale.kr ],
    author: 'TKFM',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: 'FB 粉絲專頁 - 畫作',
        [Locale.sc]: 'FB 粉丝专页 - 画作',
        [Locale.en]: 'FB Fanpage - Painting',
        [Locale.jp]: 'FB ファンページ - 絵画',
        [Locale.kr]: 'FB 팬페이지 - 그림',
    },
    remark: {
        [Locale.tc]: '',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    paths: ArtFile.OFFICAL.FB_PAINTING,
}

export default FB_PAINTING