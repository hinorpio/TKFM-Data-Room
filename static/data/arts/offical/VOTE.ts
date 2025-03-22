import { Locale, ArtSource, ArtType, ArtAuthorType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const VOTE: Art = {
    code: 'VOTE',
    source: ArtSource.OFFICAL,
    type: ArtType.PAINTING,
    locale: [ Locale.tc, Locale.sc ],
    author: 'TKFM',
    authorType: ArtAuthorType.AUTHOR,
    authorLink: null,
    name: {
        [Locale.tc]: '歷屇人氣投票',
        [Locale.sc]: '历屇人气投票',
        [Locale.en]: 'Past Popularity Vote',
        [Locale.jp]: '歴代人気投票',
        [Locale.kr]: '역대 인기 투표',
    },
    remark: {
        [Locale.tc]: '',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    paths: ArtFile.OFFICAL.VOTE,
}

export default VOTE