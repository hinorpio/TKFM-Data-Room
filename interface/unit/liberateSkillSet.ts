
import { Locale, SkillType, LiberationStage, ItemCode } from '@/plugins/utils/enums';
import { Skill }  from './skillset';
import { ItemQty } from '../item';

interface LiberateStage {
    material: ItemQty[],
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
        [stage in LiberationStage]?: LiberateStage;
    };
  }
  