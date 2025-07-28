import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType, VoiceLocale } from '@/plugins/utils/enums';
import { SkillSet } from './skillset';
import { LiberateSkillSet } from './liberateSkillSet';
import { Discipline } from './discipline';
import { PotentialSelectGroup } from '../stat/potential'

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
    potential: PotentialType;
    isLimited: boolean;
    releaseDate: string;
    essence: string;
    thumbnail: string;
    selection: string;
    clothes: string[][];
    tagList: TagID[];
    otherVersion: UnitCode[];
    initHP: number;
    initATK: number;
    skillSet: SkillSet[];
    discipline?: Discipline[];
    liberateSkillSet?: LiberateSkillSet[];
    puzzle?: PuzzleCode[];
    outfits?: string[][];
    voiceSet?: {
      [voice in VoiceType]: {
          [lang in VoiceLocale]: string;
      }
    };
}

export interface StatGroup {
    initHP: number;
    initATK: number;
    initStar: number;
    rarity: Rarity;
    level: number;
    star: number;
    room: null | number;
    pot: PotentialSelectGroup;
    lib: null | number;
}