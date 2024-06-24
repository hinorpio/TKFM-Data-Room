
import { Locale, SkillType, LiberationStage } from '@/plugins/utils/enums';
import { Skill }  from './skillset';

interface RequiredItem {
    code: string;
    quantity: number
}

interface LiberateStage {
    material: RequiredItem[],
    skill: {
        [lang in Locale]?: {
            [key in SkillType]?: Skill
        };
    }
}

export interface LiberateSkillSet {
    version: number;
    lastDate: null | string;
    remark: {
        [lang in Locale]?: null | string;
    };
    detail: {
        [stage in LiberationStage]: LiberateStage;
    };
  }
  