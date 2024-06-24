
import { Locale, SkillType } from '@/plugins/utils/enums';

export interface Skill {
    name: string;
    description: string;
}
  
export interface SkillSet {
    version: number;
    lastDate: null | string;
    remark: {
        [lang in Locale]?: null | string;
    };
    skill: {
        [lang in Locale]: {
            [key in SkillType]?: Skill
        };
    };
  }
  