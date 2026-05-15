import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10202: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.nali][0],
        name: {
            [Locale.tc]: `邪惡幹部戰敗的下場`,
            [Locale.sc]: `邪恶干部战败的下场`,
            [Locale.en]: `The Fate of a Defeated Evil Girl`,
            [Locale.jp]: `邪悪幹部が敗れた末路`,
            [Locale.kr]: `패배한 악의 간부의 말로`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.nali][1],
        name: {
            [Locale.tc]: `意猶未盡的夜晚`,
            [Locale.sc]: `意犹未尽的夜晚`,
            [Locale.en]: `A Night of Lingering Desire`,
            [Locale.jp]: `名残惜しい夜`,
            [Locale.kr]: `여운 가득한 밤`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.nali][2],
        name: {
            [Locale.tc]: `外傳，魔王凱薩侵略篇`,
            [Locale.sc]: `外传，魔王凯萨侵略篇`,
            [Locale.en]: `Side Story: Archdemon Caesar's Invasion`,
            [Locale.jp]: `外伝・魔王シーザー侵略篇`,
            [Locale.kr]: `외전, 마왕 시저 침략편`
        },
    },
]
