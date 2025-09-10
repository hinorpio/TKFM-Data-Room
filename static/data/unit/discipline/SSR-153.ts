import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10182: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ria][0],
        name: {
            [Locale.tc]: `敦親睦鄰魔王`,
            [Locale.sc]: `敦亲睦邻魔王`,
            [Locale.en]: `Neighborly Archdemon`,
            [Locale.jp]: `親睦を深める魔王`,
            [Locale.kr]: `이웃 마왕과의 친목 시저 씨`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ria][1],
        name: {
            [Locale.tc]: `凱薩出沒注意`,
            [Locale.sc]: `凯萨出没注意`,
            [Locale.en]: `Wild Caesar Appears`,
            [Locale.jp]: `シーザー出没注意`,
            [Locale.kr]: `시저 출몰 경보`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ria][2],
        name: {
            [Locale.tc]: `征服人妻`,
            [Locale.sc]: `征服人妻`,
            [Locale.en]: `Wife Domination`,
            [Locale.jp]: `人妻征服`,
            [Locale.kr]: `유부녀 정복`
        },
    },
]
