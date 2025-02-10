import { Locale, ArtSource, ArtType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const DATA_AS_OF_2024: Art = {
    code: 'DATA_AS_OF_2024',
    source: ArtSource.OFFICAL,
    type: ArtType.PAINTING,
    locale: [ Locale.tc, Locale.sc ],
    author: 'TKFM',
    authorLink: null,
    name: {
        [Locale.tc]: '截至2024年玩家相關數據',
        [Locale.sc]: '截至2024年玩家相关数据',
        [Locale.en]: 'Player-related data - As of 2024',
        [Locale.jp]: '2024年現在プレイヤー関連データ',
        [Locale.kr]: '2024년 기준 플레이어 관련 데이터',
    },
    remark: {
        [Locale.tc]: '',
        [Locale.sc]: '',
        [Locale.en]: '',
        [Locale.jp]: '',
        [Locale.kr]: '',
    },
    paths: ArtFile.OFFICAL.DATA_AS_OF_2024,
}

export default DATA_AS_OF_2024