import { Locale, LogType, Element, Rarity, Position, SkillType, LiberationStage, PotentialBuffType, DispatchType, DispatchSkillType, EventType, ArtSource, ArtType, LogGroup, VoiceType } from '@/plugins/utils/enums';

const cdnURL = `https://cdn.tkfmdata.com`

const ELEMENT_FIRE = `${cdnURL}/general/element_fire.png`
const ELEMENT_WATER = `${cdnURL}/general/element_water.png`
const ELEMENT_WIND = `${cdnURL}/general/element_wind.png`
const ELEMENT_LIGHT = `${cdnURL}/general/element_light.png`
const ELEMENT_DARK = `${cdnURL}/general/element_dark.png`
const RARITY_SSR = `${cdnURL}/general/rarity_ssr.png`
const RARITY_SR = `${cdnURL}/general/rarity_sr.png`
const RARITY_R = `${cdnURL}/general/rarity_r.png`
const RARITY_N = `${cdnURL}/general/rarity_n.png`
const POSITION_ATTACKER = `${cdnURL}/general/position_attacker.png`
const POSITION_OBSTRUCTER = `${cdnURL}/general/position_obstructer.png`
const POSITION_PROTECTOR = `${cdnURL}/general/position_protector.png`
const POSITION_HEALER = `${cdnURL}/general/position_healer.png`
const POSITION_SUPPORTER = `${cdnURL}/general/position_supporter.png`
const SKILL_BASE_STAT = `${cdnURL}/general/ui_bond_5.png`
const SKILL_SKILL = `${cdnURL}/general/skillset_skill.png`
const SKILL_ATTACK = `${cdnURL}/general/skillset_attack.png`
const SKILL_LEADER = `${cdnURL}/general/skillset_leader.png`
const SKILL_PASSIVE = `${cdnURL}/general/skillset_passive.png`
const SKILL_GENERAL = `${cdnURL}/general/skillset_general.png`
const SKILL_DISPATCH = `${cdnURL}/general/skillset_dispatch.png`
const LIBERATE_STAGE0 = `${cdnURL}/general/liberate_0.png`
const LIBERATE_STAGE1 = `${cdnURL}/general/liberate_1.png`
const LIBERATE_STAGE2 = `${cdnURL}/general/liberate_2.png`
const LIBERATE_STAGE3 = `${cdnURL}/general/liberate_3.png`
const POTENTIAL_BUFF_ATK = `${cdnURL}/general/ui_small_atk.png`
const POTENTIAL_BUFF_HP = `${cdnURL}/general/ui_small_hp.png`
const POTENTIAL_BUFF_PASSIVE = `${cdnURL}/general/skillset_general.png`
const DISPATCH_CAESAR_ROOM_TC = `${cdnURL}/dispatch/dp0001_tc.png`
const DISPATCH_CAESAR_ROOM_SC = `${cdnURL}/dispatch/dp0001_sc.png`
const DISPATCH_CAESAR_ROOM_EN = `${cdnURL}/dispatch/dp0001_en.png`
const DISPATCH_CAESAR_ROOM_JP = `${cdnURL}/dispatch/dp0001_jp.png`
const DISPATCH_CAESAR_ROOM_KR = `${cdnURL}/dispatch/dp0001_kr.png`
const DISPATCH_DUNGEON_TC = `${cdnURL}/dispatch/dp0002_tc.png`
const DISPATCH_DUNGEON_SC = `${cdnURL}/dispatch/dp0002_sc.png`
const DISPATCH_DUNGEON_EN = `${cdnURL}/dispatch/dp0002_en.png`
const DISPATCH_DUNGEON_JP = `${cdnURL}/dispatch/dp0002_jp.png`
const DISPATCH_DUNGEON_KR = `${cdnURL}/dispatch/dp0002_kr.png`
const DISPATCH_TRAINING_CENTER_TC = `${cdnURL}/dispatch/dp0003_tc.png`
const DISPATCH_TRAINING_CENTER_SC = `${cdnURL}/dispatch/dp0003_sc.png`
const DISPATCH_TRAINING_CENTER_EN = `${cdnURL}/dispatch/dp0003_en.png`
const DISPATCH_TRAINING_CENTER_JP = `${cdnURL}/dispatch/dp0003_jp.png`
const DISPATCH_TRAINING_CENTER_KR = `${cdnURL}/dispatch/dp0003_kr.png`
const DISPATCH_TREASURE_ROOM_TC = `${cdnURL}/dispatch/dp0004_tc.png`
const DISPATCH_TREASURE_ROOM_SC = `${cdnURL}/dispatch/dp0004_sc.png`
const DISPATCH_TREASURE_ROOM_EN = `${cdnURL}/dispatch/dp0004_en.png`
const DISPATCH_TREASURE_ROOM_JP = `${cdnURL}/dispatch/dp0004_jp.png`
const DISPATCH_TREASURE_ROOM_KR = `${cdnURL}/dispatch/dp0004_kr.png`
const DISPATCH_SEALED_CHAMBER_TC = `${cdnURL}/dispatch/dp0005_tc.png`
const DISPATCH_SEALED_CHAMBER_SC = `${cdnURL}/dispatch/dp0005_sc.png`
const DISPATCH_SEALED_CHAMBER_EN = `${cdnURL}/dispatch/dp0005_en.png`
const DISPATCH_SEALED_CHAMBER_JP = `${cdnURL}/dispatch/dp0005_jp.png`
const DISPATCH_SEALED_CHAMBER_KR = `${cdnURL}/dispatch/dp0005_kr.png`


export const LocaleString = {
    [Locale.tc]: '繁體中文',
    [Locale.sc]: '简体中文',
    [Locale.en]: 'English',
    [Locale.jp]: '日本語',
    [Locale.kr]: '한국어',
}

export const LogTypeColor = {
    [LogType.NEW]: 'green',
    [LogType.FIX]: 'red',
    [LogType.CHANGE]: 'blue',
    [LogType.OTHER]: 'grey',
}

export const LogTypeStr = {
    [LogType.NEW]: {
        [Locale.tc]: '新增',
        [Locale.sc]: '新增',
        [Locale.en]: 'New',
        [Locale.jp]: '新規',
        [Locale.kr]: '추가',
    },
    [LogType.FIX]: {
        [Locale.tc]: '修正',
        [Locale.sc]: '修正',
        [Locale.en]: 'Fix',
        [Locale.jp]: '修正',
        [Locale.kr]: '수정',
    },
    [LogType.CHANGE]: {
        [Locale.tc]: '變更',
        [Locale.sc]: '变更',
        [Locale.en]: 'Change',
        [Locale.jp]: '変更',
        [Locale.kr]: '변경',
    },
    [LogType.OTHER]: {
        [Locale.tc]: '其他',
        [Locale.sc]: '其他',
        [Locale.en]: 'Other',
        [Locale.jp]: '他の',
        [Locale.kr]: '다른',
    },
}

export const ElementIcon = {
    [Element.FIRE]: ELEMENT_FIRE,
    [Element.WATER]: ELEMENT_WATER,
    [Element.WIND]: ELEMENT_WIND,
    [Element.LIGHT]: ELEMENT_LIGHT,
    [Element.DARK]: ELEMENT_DARK
}

export const PositionIcon = {
    [Position.ATTACKER]: POSITION_ATTACKER,
    [Position.OBSTRUCTER]: POSITION_OBSTRUCTER,
    [Position.PROTECTOR]: POSITION_PROTECTOR,
    [Position.HEALER]: POSITION_HEALER,
    [Position.SUPPORTER]: POSITION_SUPPORTER
}

export const RarityIcon = {
    [Rarity.SSR]: RARITY_SSR,
    [Rarity.SR]: RARITY_SR,
    [Rarity.R]: RARITY_R,
    [Rarity.N]: RARITY_N,
}

export const SkillIcon = {
    [SkillType.BASE_STAT]: SKILL_BASE_STAT,
    [SkillType.SKILL_S]: SKILL_SKILL,
    [SkillType.SKILL_1]: SKILL_SKILL,
    [SkillType.SKILL_2]: SKILL_SKILL,
    [SkillType.SKILL_3]: SKILL_SKILL,
    [SkillType.SKILL_4]: SKILL_SKILL,
    [SkillType.SKILL_5]: SKILL_SKILL,
    [SkillType.ATTACK]: SKILL_ATTACK,
    [SkillType.LEADER]: SKILL_LEADER,
    [SkillType.PASSIVE_1]: SKILL_PASSIVE,
    [SkillType.PASSIVE_2]: SKILL_PASSIVE,
    [SkillType.PASSIVE_3]: SKILL_PASSIVE,
    [SkillType.GENERAL_1]: SKILL_GENERAL,
    [SkillType.GENERAL_2]: SKILL_GENERAL,
    [SkillType.DISPATCH]: SKILL_DISPATCH,
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
    [SkillType.DISPATCH]: '#4a148c',
}

export const LiberateIcon = {
    [LiberationStage.LIBERATION_0]: LIBERATE_STAGE0,
    [LiberationStage.LIBERATION_1]: LIBERATE_STAGE1,
    [LiberationStage.LIBERATION_2]: LIBERATE_STAGE2,
    [LiberationStage.LIBERATION_3]: LIBERATE_STAGE3,
}

export const PotentialBuffIcon = {
    [PotentialBuffType.ATK]: POTENTIAL_BUFF_ATK,
    [PotentialBuffType.HP]: POTENTIAL_BUFF_HP,
    [PotentialBuffType.PASSIVE]: POTENTIAL_BUFF_PASSIVE,
}

export const DispatchImage = {
    [DispatchType.CAESAR_ROOM]: {
        [Locale.tc]: DISPATCH_CAESAR_ROOM_TC,
        [Locale.sc]: DISPATCH_CAESAR_ROOM_SC,
        [Locale.en]: DISPATCH_CAESAR_ROOM_EN,
        [Locale.jp]: DISPATCH_CAESAR_ROOM_JP,
        [Locale.kr]: DISPATCH_CAESAR_ROOM_KR,
    },
    [DispatchType.DUNGEON]: {
        [Locale.tc]: DISPATCH_DUNGEON_TC,
        [Locale.sc]: DISPATCH_DUNGEON_SC,
        [Locale.en]: DISPATCH_DUNGEON_EN,
        [Locale.jp]: DISPATCH_DUNGEON_JP,
        [Locale.kr]: DISPATCH_DUNGEON_KR,
    },
    [DispatchType.TRAINING_CENTER]: {
        [Locale.tc]: DISPATCH_TRAINING_CENTER_TC,
        [Locale.sc]: DISPATCH_TRAINING_CENTER_SC,
        [Locale.en]: DISPATCH_TRAINING_CENTER_EN,
        [Locale.jp]: DISPATCH_TRAINING_CENTER_JP,
        [Locale.kr]: DISPATCH_TRAINING_CENTER_KR,
    },
    [DispatchType.TREASURE_ROOM]: {
        [Locale.tc]: DISPATCH_TREASURE_ROOM_TC,
        [Locale.sc]: DISPATCH_TREASURE_ROOM_SC,
        [Locale.en]: DISPATCH_TREASURE_ROOM_EN,
        [Locale.jp]: DISPATCH_TREASURE_ROOM_JP,
        [Locale.kr]: DISPATCH_TREASURE_ROOM_KR,
    },
    [DispatchType.SEALED_CHAMBER]: {
        [Locale.tc]: DISPATCH_SEALED_CHAMBER_TC,
        [Locale.sc]: DISPATCH_SEALED_CHAMBER_SC,
        [Locale.en]: DISPATCH_SEALED_CHAMBER_EN,
        [Locale.jp]: DISPATCH_SEALED_CHAMBER_JP,
        [Locale.kr]: DISPATCH_SEALED_CHAMBER_KR,
    },
}

export const RarityColor = {
    [Rarity.N]: '#cad0d7',
    [Rarity.R]: '#96a7e7',
    [Rarity.SR]: '#fef4d3',
    [Rarity.SSR]: '#efaadd',
}

export const ElementColor = {
    [Element.FIRE]: '#F45F34',
    [Element.WATER]: '#48B4EB',
    [Element.WIND]: '#54BA71',
    [Element.LIGHT]: '#EFB26B',
    [Element.DARK]: '#C390FF',
}

export const DispatchSkillTypeString = {
    [DispatchSkillType.EMPTY_HAND]: {
        [Locale.tc]: '空手而歸',
        [Locale.sc]: '空手而归',
        [Locale.en]: 'Empty Hand',
        [Locale.jp]: '手ぶらで帰還',
        [Locale.kr]: '빈손으로 귀환',
    },
    [DispatchSkillType.ENHANCE_MATERIAL]: {
        [Locale.tc]: '強化素材',
        [Locale.sc]: '强化素材',
        [Locale.en]: 'Enhance Material',
        [Locale.jp]: '強化素材',
        [Locale.kr]: '강화 재료',
    },
    [DispatchSkillType.NORMAL_SEX_TOY]: {
        [Locale.tc]: '普通調教',
        [Locale.sc]: '普通调教',
        [Locale.en]: 'Normal Sex Toy',
        [Locale.jp]: 'ノーマル調教道具',
        [Locale.kr]: '일반 조련 도구',
    },
    [DispatchSkillType.RARE_SEX_TOY]: {
        [Locale.tc]: '稀有調教',
        [Locale.sc]: '稀有调教',
        [Locale.en]: 'Rare Sex Toy',
        [Locale.jp]: 'レア調教道具',
        [Locale.kr]: '레어 조련 도구',
    },
    [DispatchSkillType.RARE_NORMAL_SEX_TOY]: {
        [Locale.tc]: '稀有＆普通調教',
        [Locale.sc]: '稀有＆普通调教',
        [Locale.en]: 'Rare/Normal Sex Toy',
        [Locale.jp]: 'レア&ノーマル調教道具',
        [Locale.kr]: '레어&일반 조련 도구',
    },
    [DispatchSkillType.EXPERIENCE_POTION]: {
        [Locale.tc]: '經驗藥水',
        [Locale.sc]: '经验药水',
        [Locale.en]: 'Experience Potion',
        [Locale.jp]: '経験値ポーション',
        [Locale.kr]: '경험치 포션',
    },
    [DispatchSkillType.PURCHASE_PERMITS]: {
        [Locale.tc]: '購買許可',
        [Locale.sc]: '购买许可',
        [Locale.en]: 'Purchase Permits',
        [Locale.jp]: '購入許可',
        [Locale.kr]: '구매 허가증',
    },
}

export const EventTypeColor = {
    [EventType.POINT]: 'light-blue lighten-2',
    [EventType.CHALLENGE]: 'indigo darken-1',
    [EventType.EVOLVE]: 'red lighten-1',
    [EventType.POTENTIAL]: 'deep-purple lighten-1',
    [EventType.DISCIPLINE]: 'pink lighten-2',
    [EventType.SLIVER]: 'grey',
    [EventType.SIDESTORY]: 'teal accent-4',
    [EventType.SPIRE]: 'pink darken-4',
    [EventType.TIMERIFT]: 'red darken-4',
    [EventType.GUILDBOSS]: 'green',
    [EventType.SPECIAL]: 'blue-grey lighten-3',
}

export const EventTypeString = {
    [EventType.POINT]: {
        [Locale.tc]: '積分活動',
        [Locale.sc]: '积分活动',
        [Locale.en]: 'Point',
        [Locale.jp]: 'ポイント',
        [Locale.kr]: '포인트를',
    },
    [EventType.CHALLENGE]: {
        [Locale.tc]: '高難關卡',
        [Locale.sc]: '高难关卡',
        [Locale.en]: 'Challenge',
        [Locale.jp]: 'チャレンジ',
        [Locale.kr]: '챌린지',
    },
    [EventType.EVOLVE]: {
        [Locale.tc]: '屬性礦+',
        [Locale.sc]: '属性矿+',
        [Locale.en]: 'Evolve+',
        [Locale.jp]: '進化アイテム+',
        [Locale.kr]: '진화 아이템을+',
    },
    [EventType.POTENTIAL]: {
        [Locale.tc]: '潛力素材+',
        [Locale.sc]: '潜力素材+',
        [Locale.en]: 'Potential+',
        [Locale.jp]: '潜在能力アイテム+',
        [Locale.kr]: '잠재능력 아이템+',
    },
    [EventType.DISCIPLINE]: {
        [Locale.tc]: '調教道具+',
        [Locale.sc]: '调教道具+',
        [Locale.en]: 'Discipline+',
        [Locale.jp]: '調教道具+',
        [Locale.kr]: '조교 아이템을+',
    },
    [EventType.SLIVER]: {
        [Locale.tc]: '銀幣+',
        [Locale.sc]: '银币+',
        [Locale.en]: 'Sliver+',
        [Locale.jp]: 'コイン+',
        [Locale.kr]: '실버 코인+',
    },
    [EventType.SIDESTORY]: {
        [Locale.tc]: '外傳故事',
        [Locale.sc]: '外传故事',
        [Locale.en]: 'Side Story',
        [Locale.jp]: '外伝',
        [Locale.kr]: '외전 이야기',
    },
    [EventType.SPIRE]: {
        [Locale.tc]: '魔獄塔',
        [Locale.sc]: '魔狱塔',
        [Locale.en]: 'Demon Spire',
        [Locale.jp]: '魔獄塔',
        [Locale.kr]: '마옥탑',
    },
    [EventType.TIMERIFT]: {
        [Locale.tc]: '時之裂縫',
        [Locale.sc]: '时之裂缝',
        [Locale.en]: 'Time Rift',
        [Locale.jp]: '時空の裂け目',
        [Locale.kr]: '시공간의 균열',
    },
    [EventType.GUILDBOSS]: {
        [Locale.tc]: '協會戰',
        [Locale.sc]: '协会战',
        [Locale.en]: 'Guild Boss',
        [Locale.jp]: 'ギルド戦',
        [Locale.kr]: '길드전',
    },
    [EventType.SPECIAL]: {
        [Locale.tc]: '特殊',
        [Locale.sc]: '特殊',
        [Locale.en]: 'Special',
        [Locale.jp]: '特別',
        [Locale.kr]: '특별한',
    }
}

export const ArtSourceColor = {
    [ArtSource.OFFICAL]: 'purple',
    [ArtSource.FANART]: 'blue',
}

export const ArtSourceStr = {
    [ArtSource.OFFICAL]: {
        [Locale.tc]: '官方',
        [Locale.sc]: '官方',
        [Locale.en]: 'Offcal',
        [Locale.jp]: '公式',
        [Locale.kr]: '공식적인',
    },
    [ArtSource.FANART]: {
        [Locale.tc]: '二創',
        [Locale.sc]: '二创',
        [Locale.en]: 'Fanart',
        [Locale.jp]: '同人',
        [Locale.kr]: '팬아트',
    }
}

export const ArtTypeColor = {
    [ArtType.PAINTING]: 'green darken-1',
    [ArtType.STICKER]: 'amber darken-3',
    [ArtType.COMIC]: 'red darken-2',
    [ArtType.FICTION]: 'indigo darken-1',
    [ArtType.VIDEO]: 'brown',
    [ArtType.OTHER]: 'grey darken-2',
}

export const ArtTypeStr = {
    [ArtType.PAINTING]: {
        [Locale.tc]: '畫作',
        [Locale.sc]: '画作',
        [Locale.en]: 'Painting',
        [Locale.jp]: '絵画',
        [Locale.kr]: '그림',
    },
    [ArtType.STICKER]: {
        [Locale.tc]: '貼圖',
        [Locale.sc]: '贴图',
        [Locale.en]: 'Sticker',
        [Locale.jp]: 'スタンプ',
        [Locale.kr]: '스티커',
    },
    [ArtType.COMIC]: {
        [Locale.tc]: '漫畫',
        [Locale.sc]: '漫画',
        [Locale.en]: 'Comic',
        [Locale.jp]: 'マンガ',
        [Locale.kr]: '만화',
    },
    [ArtType.FICTION]: {
        [Locale.tc]: '小說',
        [Locale.sc]: '小说',
        [Locale.en]: 'Fiction',
        [Locale.jp]: '小説',
        [Locale.kr]: '소설',
    },
    [ArtType.VIDEO]: {
        [Locale.tc]: '影片',
        [Locale.sc]: '视频',
        [Locale.en]: 'Video',
        [Locale.jp]: 'ビデオ',
        [Locale.kr]: '비디오',
    },
    [ArtType.OTHER]: {
        [Locale.tc]: '其他',
        [Locale.sc]: '其他',
        [Locale.en]: 'Other',
        [Locale.jp]: '他の',
        [Locale.kr]: '다른',
    },
}

export const LogGroupStr = {
    [LogGroup.UNIT]: {
        [Locale.tc]: `角色: `,
        [Locale.sc]: `角色: `,
        [Locale.en]: `Unit: `,
        [Locale.jp]: `キャラ: `,
        [Locale.kr]: `캐릭터: `
    },
    [LogGroup.EVENT]: {
        [Locale.tc]: `活動: `,
        [Locale.sc]: `活动: `,
        [Locale.en]: `Event: `,
        [Locale.jp]: `イベント: `,
        [Locale.kr]: `이벤트: `,
    },
    [LogGroup.ART]: {
        [Locale.tc]: `畫作/二創: `,
        [Locale.sc]: `画作/二创: `,
        [Locale.en]: `Artwork / Fanart: `,
        [Locale.jp]: `アートワーク / 同人: `,
        [Locale.kr]: `아트워크 / 팬 창작: `,
    },
    [LogGroup.SKILL]: {
        [Locale.tc]: `角色技能: `,
        [Locale.sc]: `角色技能: `,
        [Locale.en]: `Unit Skillset: `,
        [Locale.jp]: `キャラスキル: `,
        [Locale.kr]: `캐릭터 스킬: `,
    },
    [LogGroup.LIBERATE]: {
        [Locale.tc]: `解放技能: `,
        [Locale.sc]: `解放技能: `,
        [Locale.en]: `Liberation: `,
        [Locale.jp]: `解放スキル: `,
        [Locale.kr]: `해방스킬: `,
    },
    [LogGroup.OUTFIT]: {
        [Locale.tc]: `簡易造型: `,
        [Locale.sc]: `简易造型: `,
        [Locale.en]: `Simple Outfits: `,
        [Locale.jp]: `簡易スキン: `,
        [Locale.kr]: `간이 스킨: `,
    },
    [LogGroup.PUZZLE]: {
        [Locale.tc]: `相關拼圖: `,
        [Locale.sc]: `相关拼图: `,
        [Locale.en]: `Puzzle: `,
        [Locale.jp]: `パズル: `,
        [Locale.kr]: `관련 퍼즐: `,
    },
    [LogGroup.GENERAL]: {
        [Locale.tc]: ``,
        [Locale.sc]: ``,
        [Locale.en]: ``,
        [Locale.jp]: ``,
        [Locale.kr]: ``,
    },
}

export const VoiceTypeStr = {
    [VoiceType.GREET]: {
        [Locale.tc]: `問候`,
        [Locale.sc]: `问候`,
        [Locale.en]: `Greet`,
        [Locale.jp]: `あいさつ`,
        [Locale.kr]: `인사`,
    },
    [VoiceType.CONFUSED]: {
        [Locale.tc]: `疑惑`,
        [Locale.sc]: `疑惑`,
        [Locale.en]: `Confused`,
        [Locale.jp]: `疑問`,
        [Locale.kr]: `당황`,
    },
    [VoiceType.HAPPY]: {
        [Locale.tc]: `開心`,
        [Locale.sc]: `开心`,
        [Locale.en]: `Happy`,
        [Locale.jp]: `嬉しい`,
        [Locale.kr]: `기쁨`,
    },
    [VoiceType.ANGRY]: {
        [Locale.tc]: `生氣`,
        [Locale.sc]: `开心`,
        [Locale.en]: `Angry`,
        [Locale.jp]: `怒り`,
        [Locale.kr]: `화남`,
    },
    [VoiceType.SAD]: {
        [Locale.tc]: `難過`,
        [Locale.sc]: `难过`,
        [Locale.en]: `Sad`,
        [Locale.jp]: `悲しい`,
        [Locale.kr]: `슬픔`,
    },
    [VoiceType.FURIOUS]: {
        [Locale.tc]: `憤怒`,
        [Locale.sc]: `愤怒`,
        [Locale.en]: `Furious`,
        [Locale.jp]: `怒り`,
        [Locale.kr]: `분노`,
    },
    [VoiceType.AGREE]: {
        [Locale.tc]: `同意`,
        [Locale.sc]: `同意`,
        [Locale.en]: `Agree`,
        [Locale.jp]: `同意`,
        [Locale.kr]: `동의`,
    },
    [VoiceType.DISAGREE]: {
        [Locale.tc]: `否定`,
        [Locale.sc]: `否定`,
        [Locale.en]: `Disagree`,
        [Locale.jp]: `否定`,
        [Locale.kr]: `부정`,
    },
    [VoiceType.PROMISE]: {
        [Locale.tc]: `承諾`,
        [Locale.sc]: `承诺`,
        [Locale.en]: `Promise`,
        [Locale.jp]: `承諾`,
        [Locale.kr]: `승낙`,
    },
    [VoiceType.ATTACK]: {
        [Locale.tc]: `攻擊`,
        [Locale.sc]: `攻击`,
        [Locale.en]: `Attack`,
        [Locale.jp]: `攻擊`,
        [Locale.kr]: `공격`,
    },
    [VoiceType.SKILL]: {
        [Locale.tc]: `技能`,
        [Locale.sc]: `技能`,
        [Locale.en]: `Skill`,
        [Locale.jp]: `スキル`,
        [Locale.kr]: `스킬`,
    },
    [VoiceType.TAKE_DAMAGE]: {
        [Locale.tc]: `受擊`,
        [Locale.sc]: `受击`,
        [Locale.en]: `Take Dmg.`,
        [Locale.jp]: `ダメージ`,
        [Locale.kr]: `공격받음`,
    },
    [VoiceType.DEATH]: {
        [Locale.tc]: `死亡`,
        [Locale.sc]: `死亡`,
        [Locale.en]: `Death`,
        [Locale.jp]: `死亡`,
        [Locale.kr]: `사망`,
    },
    [VoiceType.DISCIPLINE_1]: {
        [Locale.tc]: `調教1`,
        [Locale.sc]: `调教1`,
        [Locale.en]: `Disc. 1`,
        [Locale.jp]: `調教1`,
        [Locale.kr]: `조련1`,
    },
    [VoiceType.DISCIPLINE_2]: {
        [Locale.tc]: `調教2`,
        [Locale.sc]: `调教2`,
        [Locale.en]: `Disc. 2`,
        [Locale.jp]: `調教2`,
        [Locale.kr]: `조련2`,
    },
    [VoiceType.DISCIPLINE_3]: {
        [Locale.tc]: `調教3`,
        [Locale.sc]: `调教3`,
        [Locale.en]: `Disc. 3`,
        [Locale.jp]: `調教3`,
        [Locale.kr]: `조련3`,
    },
    [VoiceType.ORGASM]: {
        [Locale.tc]: `高潮`,
        [Locale.sc]: `高潮`,
        [Locale.en]: `Orgasm`,
        [Locale.jp]: `絶頂`,
        [Locale.kr]: `오르가즘`,
    },
    [VoiceType.CHARACTER_FEATURE_1]: {
        [Locale.tc]: `角色特式1`,
        [Locale.sc]: `角色特式1`,
        [Locale.en]: `Character\nfeature 1`,
        [Locale.jp]: `キャラ特色1`,
        [Locale.kr]: `캐릭터 특징1`,
    },
    [VoiceType.CHARACTER_FEATURE_2]: {
        [Locale.tc]: `角色特式2`,
        [Locale.sc]: `角色特式2`,
        [Locale.en]: `Character\nfeature 2`,
        [Locale.jp]: `キャラ特色2`,
        [Locale.kr]: `캐릭터 특징2`,
    },
    [VoiceType.CHARACTER_FEATURE_3]: {
        [Locale.tc]: `角色特式3`,
        [Locale.sc]: `角色特式3`,
        [Locale.en]: `Character\nfeature 3`,
        [Locale.jp]: `キャラ特色3`,
        [Locale.kr]: `캐릭터 특징3`,
    },
    [VoiceType.CHARACTER_FEATURE_4]: {
        [Locale.tc]: `角色特式4`,
        [Locale.sc]: `角色特式4`,
        [Locale.en]: `Character\nfeature 4`,
        [Locale.jp]: `キャラ特色4`,
        [Locale.kr]: `캐릭터 특징4`,
    },
    [VoiceType.CHARACTER_FEATURE_5]: {
        [Locale.tc]: `角色特式5`,
        [Locale.sc]: `角色特式5`,
        [Locale.en]: `Character\nfeature 5`,
        [Locale.jp]: `キャラ特色5`,
        [Locale.kr]: `캐릭터 특징5`,
    },
    [VoiceType.VICTORY]: {
        [Locale.tc]: `勝利`,
        [Locale.sc]: `胜利`,
        [Locale.en]: `Victory`,
        [Locale.jp]: `勝利`,
        [Locale.kr]: `승리`,
    },
    [VoiceType.DEFEAT]: {
        [Locale.tc]: `敗北`,
        [Locale.sc]: `败北`,
        [Locale.en]: `Defeat`,
        [Locale.jp]: `敗北`,
        [Locale.kr]: `패배`,
    },
    [VoiceType.SEX_MOANS]: {
        [Locale.tc]: `叫床`,
        [Locale.sc]: `叫床`,
        [Locale.en]: `Sex Moans`,
        [Locale.jp]: `あえぎ声`,
        [Locale.kr]: `신음소리`,
    },
    [VoiceType.BLOWJOB]: {
        [Locale.tc]: `口交`,
        [Locale.sc]: `口交`,
        [Locale.en]: `Blowjob`,
        [Locale.jp]: `フェラチオ`,
        [Locale.kr]: `블로우잡`,
    },
    [VoiceType.KISS]: {
        [Locale.tc]: `接吻`,
        [Locale.sc]: `接吻`,
        [Locale.en]: `Kiss`,
        [Locale.jp]: `キス`,
        [Locale.kr]: `키스`,
    },
}
