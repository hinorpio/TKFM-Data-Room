import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitID } from '@/plugins/utils/enums';
import { Tag } from './global/tag';
import { SkillSet } from './unit/skillset';
import { LiberateSkillSet } from './unit/liberateSkillSet';
import { Discipline } from './unit/discipline';
import { Puzzle } from './global/puzzle';

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
    rarity?: Rarity;
    element?: Element;
    position?: Position;
    isLimited: boolean;
    potential?: PotentialType;
    releaseDate: string;
    essence: string;
    thumbnail: string;
    selection: string;
    clothes: string[];
    tagList: number[];
    otherVersion: UnitID[];
    skillSet?: SkillSet[];
    discipline?: Discipline[];
    liberateSkillSet?: LiberateSkillSet[];
    puzzle?: PuzzleCode[];
}