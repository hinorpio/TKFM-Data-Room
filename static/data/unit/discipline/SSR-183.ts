import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10212: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.vita][0],
        name: {
            [Locale.tc]: `魔劍的肉體開發`,
            [Locale.sc]: `魔剑的肉体开发`,
            [Locale.en]: `Developing the Demon Sword's Body`,
            [Locale.jp]: `魔剣の肉体開発`,
            [Locale.kr]: `마검의 육체 개발`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.vita][1],
        name: {
            [Locale.tc]: `與妖刀「切磋」`,
            [Locale.sc]: `与妖刀「切磋」`,
            [Locale.en]: `"Sparring" with the Phantom Blade`,
            [Locale.jp]: `妖刀との「手合わせ」`,
            [Locale.kr]: `요도와의 「겨루기」`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.vita][2],
        name: {
            [Locale.tc]: `劍娘的魔力乳汁`,
            [Locale.sc]: `剑娘的魔力乳汁`,
            [Locale.en]: `A Sword Maiden's Magical Milk`,
            [Locale.jp]: `剣娘の魔力母乳`,
            [Locale.kr]: `검 소녀의 마력 유즙`
        },
    },
]
