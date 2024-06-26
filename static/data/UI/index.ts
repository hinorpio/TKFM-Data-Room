import { 
    Element, 
    Rarity, 
    Position, 
    SkillType, 
    LiberationStage, 
    PotentialBuffType 
} from '@/plugins/utils/enums';
import * as Icon from './icon';

export const ElementIcon = {
    [Element.FIRE]: Icon.ELEMENT_FIRE,
    [Element.WATER]: Icon.ELEMENT_WATER,
    [Element.WIND]: Icon.ELEMENT_WIND,
    [Element.LIGHT]: Icon.ELEMENT_LIGHT,
    [Element.DARK]: Icon.ELEMENT_DARK
}

export const PositionIcon = {
    [Position.ATTACKER]: Icon.POSITION_ATTACKER,
    [Position.OBSTRUCTER]: Icon.POSITION_OBSTRUCTER,
    [Position.PROTECTOR]: Icon.POSITION_PROTECTOR,
    [Position.HEALER]: Icon.POSITION_HEALER,
    [Position.SUPPORTER]: Icon.POSITION_SUPPORTER
}

export const RarityIcon = {
    [Rarity.SSR]: Icon.RARITY_SSR,
    [Rarity.SR]: Icon.RARITY_SR,
    [Rarity.R]: Icon.RARITY_R,
    [Rarity.N]: Icon.RARITY_N,
}

export const SkillIcon = {
    [SkillType.BASE_STAT]: Icon.SKILL_BASE_STAT,
    [SkillType.SKILL_S]: Icon.SKILL_SKILL,
    [SkillType.SKILL_1]: Icon.SKILL_SKILL,
    [SkillType.SKILL_2]: Icon.SKILL_SKILL,
    [SkillType.SKILL_3]: Icon.SKILL_SKILL,
    [SkillType.SKILL_4]: Icon.SKILL_SKILL,
    [SkillType.SKILL_5]: Icon.SKILL_SKILL,
    [SkillType.ATTACK]: Icon.SKILL_ATTACK,
    [SkillType.LEADER]: Icon.SKILL_LEADER,
    [SkillType.PASSIVE_1]: Icon.SKILL_PASSIVE,
    [SkillType.PASSIVE_2]: Icon.SKILL_PASSIVE,
    [SkillType.PASSIVE_3]: Icon.SKILL_PASSIVE,
    [SkillType.GENERAL_1]: Icon.SKILL_GENERAL,
    [SkillType.GENERAL_2]: Icon.SKILL_GENERAL,
    [SkillType.DISPATCH]: Icon.SKILL_DISPATCH,
}

export const LiberateIcon = {
    [LiberationStage.LIBERATION_0]: Icon.LIBERATE_STAGE0,
    [LiberationStage.LIBERATION_1]: Icon.LIBERATE_STAGE1,
    [LiberationStage.LIBERATION_2]: Icon.LIBERATE_STAGE2,
    [LiberationStage.LIBERATION_3]: Icon.LIBERATE_STAGE3,
}

export const PotentialBuffIcon = {
    [PotentialBuffType.ATK]: Icon.POTENTIAL_BUFF_ATK,
    [PotentialBuffType.HP]: Icon.POTENTIAL_BUFF_HP,
    [PotentialBuffType.PASSIVE]: Icon.POTENTIAL_BUFF_PASSIVE,
}

export const SkillTypeColor = {
    [SkillType.BASE_STAT]: '#925be6',
    [SkillType.SKILL_S]: '#f0b023',
    [SkillType.SKILL_1]: '#f0b023',
    [SkillType.SKILL_2]: '#f0b023',
    [SkillType.SKILL_3]: '#f0b023',
    [SkillType.SKILL_4]: '#f0b023',
    [SkillType.SKILL_5]: '#f0b023',
    [SkillType.ATTACK]: '#c60244',
    [SkillType.LEADER]: '#085bad',
    [SkillType.PASSIVE_1]: '#43be57',
    [SkillType.PASSIVE_2]: '#43be57',
    [SkillType.PASSIVE_3]: '#43be57',
    [SkillType.GENERAL_1]: '#e591ea',
    [SkillType.GENERAL_2]: '#e591ea',
    [SkillType.DISPATCH]: '#e591ea',
}