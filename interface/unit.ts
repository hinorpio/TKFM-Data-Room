import { Locale, Rarity, Element, Position, PotentialType } from '@/plugins/utils/enums';
import { Tag } from './global/tag';
import { SkillSet } from './unit/skillset';
import { LiberateSkillSet } from './unit/liberateSkillSet';
import { Discipline } from './unit/discipline';
import { Puzzle } from './unit/puzzle';

export interface Unit {
    ID: string;
    metaCode: string;
    prefix: {
      [lang in Locale]?: string | null;
    };
    name: {
      [lang in Locale]?: string | null;
    };
    abbreviation: {
      [lang in Locale]?: string[];
    };
    background: {
      [lang in Locale]?: string | null;
    };
    rarity: Rarity;
    element: Element;
    position: Position;
    isLimited: boolean;
    potential: PotentialType;
    releaseDate: string;
    essence: string;
    thumbnail: string;
    selection: string;
    cloth_one: string[];
    cloth_two: string[];
    cloth_three: string[];
    tagList: number[];
    otherVersion: string[];
    skillSet: SkillSet[];
    discipline?: Discipline[];
    liberateSkillSet?: LiberateSkillSet[];
    puzzle?: Puzzle[];
}