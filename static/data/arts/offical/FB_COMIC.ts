import { Locale, ArtSource, ArtType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const FB_COMIC: Art = {
    code: 'FB_COMIC',
    source: ArtSource.OFFICAL,
    type: ArtType.COMIC,
    locale: [ Locale.tc, Locale.sc ],
    author: 'TKFM',
    authorLink: null,
    name: {
        [Locale.tc]: 'FB 粉絲專頁 - 漫畫',
        [Locale.sc]: 'FB 粉丝专页 - 漫画',
        [Locale.en]: 'FB Fanpage - Comic',
        [Locale.jp]: 'FB ファンページ - マンガ',
        [Locale.kr]: 'FB 팬페이지 - 만화',
    },
    remark: {
        [Locale.tc]: '',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    paths: ArtFile.OFFICAL.FB_COMIC,
}

export default FB_COMIC