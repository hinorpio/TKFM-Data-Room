import { PuzzleCode } from '@/plugins/utils/enums';

const cdnURL = `https://cdn.tkfmdata.com`

function getPuzzlePath(id: string): string{
    return `${cdnURL}/puzzle/scg${id}.png`
}

function getPuzzlePreviewPath(id: string): string{
    return `${cdnURL}/puzzle/scg${id}s.png`
}

export const Preview = {
    [PuzzleCode.EVENT_2021_SUMMER_1]: getPuzzlePreviewPath('00001'),
    [PuzzleCode.EVENT_2021_SUMMER_1_DMM]: getPuzzlePreviewPath('00001'),
    [PuzzleCode.EVENT_2021_SUMMER_2]: getPuzzlePreviewPath('00002'),
    [PuzzleCode.EVENT_2021_SUMMER_3]: getPuzzlePreviewPath('00003'),
    [PuzzleCode.EVENT_2021_SUMMER_4]: getPuzzlePreviewPath('00004'),
    [PuzzleCode.EVENT_2021_XMAS_1]: getPuzzlePreviewPath('00005'),
    [PuzzleCode.EVENT_2021_XMAS_2]: getPuzzlePreviewPath('00006'),
    [PuzzleCode.EVENT_2022_SUMMER_1]: getPuzzlePreviewPath('00007'),
    [PuzzleCode.EVENT_2022_SUMMER_2]: getPuzzlePreviewPath('00008'),
    [PuzzleCode.EVENT_2022_SUMMER_3]: getPuzzlePreviewPath('00009'),
    [PuzzleCode.EVENT_2022_SUMMER_4]: getPuzzlePreviewPath('000010'),
    [PuzzleCode.EVENT_2022_XMAS_1]: getPuzzlePreviewPath('00011'),
    [PuzzleCode.EVENT_2023_CNY_1]: getPuzzlePreviewPath('00012'),
    [PuzzleCode.EVENT_2023_SUMMER_1]: getPuzzlePreviewPath('00013'),
    [PuzzleCode.EVENT_2023_SUMMER_2]: getPuzzlePreviewPath('00014'),
    [PuzzleCode.EVENT_2023_SUMMER_3]: getPuzzlePreviewPath('00015'),
    [PuzzleCode.EVENT_2023_SUMMER_4]: getPuzzlePreviewPath('00016'),
    [PuzzleCode.EVENT_2023_XMAS_1]: getPuzzlePreviewPath('00017'),
    [PuzzleCode.EVENT_2023_XMAS_2]: getPuzzlePreviewPath('00018'),
    [PuzzleCode.EVENT_2024_SUMMER_1]: getPuzzlePreviewPath('00019'),
    [PuzzleCode.EVENT_2024_SUMMER_2]: getPuzzlePreviewPath('00020'),
    [PuzzleCode.EVENT_2024_SUMMER_3]: getPuzzlePreviewPath('00021'),
    [PuzzleCode.EVENT_2024_SUMMER_4]: getPuzzlePreviewPath('00022'),
    [PuzzleCode.EVENT_2024_XMAS_1]: getPuzzlePreviewPath('00023'),
    [PuzzleCode.EVENT_2024_XMAS_2]: getPuzzlePreviewPath('00024'),
    [PuzzleCode.EVENT_2025_SUMMER_1]: getPuzzlePreviewPath('00025'),
    [PuzzleCode.EVENT_2025_SUMMER_2]: getPuzzlePreviewPath('00026'),
    [PuzzleCode.EVENT_2025_SUMMER_3]: getPuzzlePreviewPath('00027'),
    [PuzzleCode.EVENT_2025_SUMMER_4]: getPuzzlePreviewPath('00028'),
    [PuzzleCode.HUMAN_SARIA]: getPuzzlePreviewPath('10901'),
    [PuzzleCode.HUMAN_PETRA]: getPuzzlePreviewPath('10902'),
    [PuzzleCode.HUMAN_KIKYOU]: getPuzzlePreviewPath('10905'),
    [PuzzleCode.HUMAN_KAEDE]: getPuzzlePreviewPath('10906'),
    [PuzzleCode.HUMAN_OLA]: getPuzzlePreviewPath('10907'),
    [PuzzleCode.HUMAN_KANI]: getPuzzlePreviewPath('10908'),
    [PuzzleCode.HUMAN_CHARLENE]: getPuzzlePreviewPath('10909'),
    [PuzzleCode.HUMAN_MARTINA]: getPuzzlePreviewPath('10910'),
    [PuzzleCode.HUMAN_CLARIE]: getPuzzlePreviewPath('10911'),
    [PuzzleCode.HUMAN_ANNA]: getPuzzlePreviewPath('10916'),
    [PuzzleCode.HUMAN_BLAIRE]: getPuzzlePreviewPath('10917'),
    [PuzzleCode.HUMAN_NATASHA]: getPuzzlePreviewPath('10918'),
    [PuzzleCode.HUMAN_MOLLY]: getPuzzlePreviewPath('10921'),
    [PuzzleCode.HUMAN_ANYA]: getPuzzlePreviewPath('10933'),
    [PuzzleCode.DEMON_FLAY]: getPuzzlePreviewPath('10903'),
    [PuzzleCode.DEMON_MANUELLA]: getPuzzlePreviewPath('10904'),
    [PuzzleCode.DEMON_LORI]: getPuzzlePreviewPath('10912'),
    [PuzzleCode.DEMON_MINNOW]: getPuzzlePreviewPath('10913'),
    [PuzzleCode.DEMON_LAMIA]: getPuzzlePreviewPath('10914'),
    [PuzzleCode.DEMON_HARPY]: getPuzzlePreviewPath('10915'),
    [PuzzleCode.DEMON_MAREYL]: getPuzzlePreviewPath('10923'),
    [PuzzleCode.DEMON_MUMU]: getPuzzlePreviewPath('10924'),
    [PuzzleCode.SKY_PUNISHMENT]: getPuzzlePreviewPath('10919'),
    [PuzzleCode.SKY_BLISS]: getPuzzlePreviewPath('10920'),
}

export const Image = {
    [PuzzleCode.EVENT_2021_SUMMER_1]: getPuzzlePath('00001'),
    [PuzzleCode.EVENT_2021_SUMMER_1_DMM]: getPuzzlePath('00001_dmm'),
    [PuzzleCode.EVENT_2021_SUMMER_2]: getPuzzlePath('00002'),
    [PuzzleCode.EVENT_2021_SUMMER_3]: getPuzzlePath('00003'),
    [PuzzleCode.EVENT_2021_SUMMER_4]: getPuzzlePath('00004'),
    [PuzzleCode.EVENT_2021_XMAS_1]: getPuzzlePath('00005'),
    [PuzzleCode.EVENT_2021_XMAS_2]: getPuzzlePath('00006'),
    [PuzzleCode.EVENT_2022_SUMMER_1]: getPuzzlePath('00007'),
    [PuzzleCode.EVENT_2022_SUMMER_2]: getPuzzlePath('00008'),
    [PuzzleCode.EVENT_2022_SUMMER_3]: getPuzzlePath('00009'),
    [PuzzleCode.EVENT_2022_SUMMER_4]: getPuzzlePath('00010'),
    [PuzzleCode.EVENT_2022_XMAS_1]: getPuzzlePath('00011'),
    [PuzzleCode.EVENT_2023_CNY_1]: getPuzzlePath('00012'),
    [PuzzleCode.EVENT_2023_SUMMER_1]: getPuzzlePath('00013'),
    [PuzzleCode.EVENT_2023_SUMMER_2]: getPuzzlePath('00014'),
    [PuzzleCode.EVENT_2023_SUMMER_3]: getPuzzlePath('00015'),
    [PuzzleCode.EVENT_2023_SUMMER_4]: getPuzzlePath('00016'),
    [PuzzleCode.EVENT_2023_XMAS_1]: getPuzzlePath('00017'),
    [PuzzleCode.EVENT_2023_XMAS_2]: getPuzzlePath('00018'),
    [PuzzleCode.EVENT_2024_SUMMER_1]: getPuzzlePath('00019'),
    [PuzzleCode.EVENT_2024_SUMMER_2]: getPuzzlePath('00020'),
    [PuzzleCode.EVENT_2024_SUMMER_3]: getPuzzlePath('00021'),
    [PuzzleCode.EVENT_2024_SUMMER_4]: getPuzzlePath('00022'),
    [PuzzleCode.EVENT_2024_XMAS_1]: getPuzzlePath('00023'),
    [PuzzleCode.EVENT_2024_XMAS_2]: getPuzzlePath('00024'),
    [PuzzleCode.EVENT_2025_SUMMER_1]: getPuzzlePath('00025'),
    [PuzzleCode.EVENT_2025_SUMMER_2]: getPuzzlePath('00026'),
    [PuzzleCode.EVENT_2025_SUMMER_3]: getPuzzlePath('00027'),
    [PuzzleCode.EVENT_2025_SUMMER_4]: getPuzzlePath('00028'),
    [PuzzleCode.HUMAN_SARIA]: getPuzzlePath('10901'),
    [PuzzleCode.HUMAN_PETRA]: getPuzzlePath('10902'),
    [PuzzleCode.HUMAN_KIKYOU]: getPuzzlePath('10905'),
    [PuzzleCode.HUMAN_KAEDE]: getPuzzlePath('10906'),
    [PuzzleCode.HUMAN_OLA]: getPuzzlePath('10907'),
    [PuzzleCode.HUMAN_KANI]: getPuzzlePath('10908'),
    [PuzzleCode.HUMAN_CHARLENE]: getPuzzlePath('10909'),
    [PuzzleCode.HUMAN_MARTINA]: getPuzzlePath('10910'),
    [PuzzleCode.HUMAN_CLARIE]: getPuzzlePath('10911'),
    [PuzzleCode.HUMAN_ANNA]: getPuzzlePath('10916'),
    [PuzzleCode.HUMAN_BLAIRE]: getPuzzlePath('10917'),
    [PuzzleCode.HUMAN_NATASHA]: getPuzzlePath('10918'),
    [PuzzleCode.HUMAN_MOLLY]: getPuzzlePath('10921'),
    [PuzzleCode.HUMAN_ANYA]: getPuzzlePath('10933'),
    [PuzzleCode.DEMON_FLAY]: getPuzzlePath('10903'),
    [PuzzleCode.DEMON_MANUELLA]: getPuzzlePath('10904'),
    [PuzzleCode.DEMON_LORI]: getPuzzlePath('10912'),
    [PuzzleCode.DEMON_MINNOW]: getPuzzlePath('10913'),
    [PuzzleCode.DEMON_LAMIA]: getPuzzlePath('10914'),
    [PuzzleCode.DEMON_HARPY]: getPuzzlePath('10915'),
    [PuzzleCode.DEMON_MAREYL]: getPuzzlePath('10923'),
    [PuzzleCode.DEMON_MUMU]: getPuzzlePath('10924'),
    [PuzzleCode.SKY_PUNISHMENT]: getPuzzlePath('10919'),
    [PuzzleCode.SKY_BLISS]: getPuzzlePath('10920'),
}