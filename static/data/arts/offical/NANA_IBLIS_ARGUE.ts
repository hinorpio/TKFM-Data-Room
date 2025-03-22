import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const NANA_IBLIS_ARGUE: Art = {
    code: 'NANA_IBLIS_ARGUE',
    source: ArtSource.OFFICAL,
    type: ArtType.FICTION,
    locale: [ Locale.tc, Locale.sc ],
    author: 'TKFM',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: 'FB 伊布力斯的貼文',
        [Locale.sc]: 'FB 伊布力斯的贴文',
        [Locale.en]: 'FB 伊布力斯的貼文',
        [Locale.jp]: 'FB 伊布力斯的貼文',
        [Locale.kr]: 'FB 伊布力斯的貼文',
    },
    remark: {
        [Locale.tc]: '',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    paths: ArtFile.OFFICAL.NANA_IBLIS_ARGUE,
}

export default NANA_IBLIS_ARGUE