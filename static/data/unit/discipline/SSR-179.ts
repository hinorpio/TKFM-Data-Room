import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10208: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.lilyelsa][0],
        name: {
            [Locale.tc]: `床上運動的直播唷！`,
            [Locale.sc]: `床上运动的直播唷！`,
            [Locale.en]: `Live Stream of Bed Exercise!`,
            [Locale.jp]: `ベッドで運動ライブ配信よ！`,
            [Locale.kr]: `침대 운동 라이브!`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lilyelsa][1],
        name: {
            [Locale.tc]: `和前輩討論直播方向喔！`,
            [Locale.sc]: `和前辈讨论直播方向喔！`,
            [Locale.en]: `Discussing Live Stream with Senpai!`,
            [Locale.jp]: `先輩とライブの方向性を話し合うわよ！`,
            [Locale.kr]: `선배와 라이브 방향 토론!`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lilyelsa][2],
        name: {
            [Locale.tc]: `經紀人到家突襲了！`,
            [Locale.sc]: `经纪人到家突袭了！`,
            [Locale.en]: `Manager Makes a Surprise Visit!`,
            [Locale.jp]: `マネジャーの突撃訪問！`,
            [Locale.kr]: `매니저 기습 방문!`
        },
    },
]
