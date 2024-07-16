
import { Locale, SkillType, DispatchSkillType } from '@/plugins/utils/enums';

interface DispatchSkill {
    type: DispatchSkillType;
    level: number;
}

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
    dispatchSkill?: DispatchSkill;
    skill: {
        [lang in Locale]: {
            [key in SkillType]?: Skill
        };
    };
}
  