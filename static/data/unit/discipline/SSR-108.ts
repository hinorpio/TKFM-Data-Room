import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10138: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.p_lulu][0],
        name: {
            [Locale.tc]: `喚醒瞌睡蟲的好方法`,
            [Locale.sc]: `唤醒瞌睡虫的好方法`,
            [Locale.en]: `Effective Ways to Awaken Sleepyheads`,
            [Locale.jp]: `寝坊助の起こし方`,
            [Locale.kr]: `잠꾸러기를 깨우는 최고의 방법`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.p_lulu][1],
        name: {
            [Locale.tc]: `公主的腿部鍛鍊課程`,
            [Locale.sc]: `公主的腿部锻炼课程`,
            [Locale.en]: `A Princess's Leg Day`,
            [Locale.jp]: `お姫様、足を鍛える`,
            [Locale.kr]: `공주의 하체 훈련 수업`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.p_lulu][2],
        name: {
            [Locale.tc]: `夢中遇襲`,
            [Locale.sc]: `梦中遇袭`,
            [Locale.en]: `Mid-dream Violations`,
            [Locale.jp]: `夢での襲撃`,
            [Locale.kr]: `몽중기습`
        },
    },
]
