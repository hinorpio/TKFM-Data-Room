import { Locale, ArtSource, ArtType } from '@/plugins/utils/enums';
import { Art } from '~/interface/art';
import { ArtFile } from '~/static/const';

const Art_001: Art = {
    code: 'Art-001',
    source: ArtSource.FANART,
    type: ArtType.STICKER,
    author: '독군 Dokgun',
    name: {
        [Locale.tc]: '독군 Dokgun - 貼圖 (韓文)',
        [Locale.sc]: '독군 Dokgun - 贴图 (韓文)',
        [Locale.en]: '독군 Dokgun - Sticker (Korean)',
        [Locale.jp]: '독군 Dokgun - スタンプ (韓国語)',
        [Locale.kr]: '독군 Dokgun - 스티커 (한국어)',
    },
    remark: {
        [Locale.tc]: 'test',
        [Locale.sc]: 'test',
        [Locale.en]: 'test',
        [Locale.jp]: 'test',
        [Locale.kr]: 'test',
    },
    paths: ArtFile.DOKGUN_STICKER
}

export default Art_001