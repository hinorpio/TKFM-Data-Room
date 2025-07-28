import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10011: Unit = {
    ID: "10011",
    metaCode: "fiora",
    prefix: {
        [Locale.tc]: "神官長",
        [Locale.sc]: "神官长",
        [Locale.en]: "High Priestess",
        [Locale.jp]: "神官長",
        [Locale.kr]: "대신관"
    },
    name: {
        [Locale.tc]: "菲歐菈",
        [Locale.sc]: "菲欧菈",
        [Locale.en]: "Fiora",
        [Locale.jp]: "フィオラ",
        [Locale.kr]: "피오라"
    },
    abbreviation: {
        [Locale.tc]: [ "神官" ],
        [Locale.sc]: [ "神官" ],
        [Locale.en]: [ "OG.Fiora" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `菲歐菈是主神教團中的一名神官，溫柔體貼且信仰虔誠，精通治療術和驅魔術，在對付魔族時從來沒有失手過。因為驅逐魔族的功績以及民間的人望，菲歐菈成為了主神教團裡年紀最輕的神官長，位高權重。雖然被譽為最具親和力的神官長，並且深受愛戴，但本人卻對於該怎麼在民眾間樹立起自己做為神官長的威嚴一事傷透了腦筋……\n\n『神吶，請賜予我勇氣跨越眼前的難關。』`,
        [Locale.sc]: `菲欧菈是主神教团中的一名神官，温柔体贴且信仰虔诚，精通治疗术和驱魔术，在对付魔族时从来没有失手过。因为驱逐魔族的功绩以及民间的人望，菲欧菈成为了主神教团里年纪最轻的神官长，位高权重。虽然被誉为最具亲和力的神官长，并且深受爱戴，但本人却对于该怎么在民众间树立起自己做为神官长的威严一事伤透了脑筋……\n\n『神呐，请赐予我勇气跨越眼前的难关。』`,
        [Locale.en]: `Fiora is a high priestess of the Excelsis Deo. Highly passionate, with an unshakeable faith, she is versed in both healing and exorcism magic. She's never failed when dealing with demons, and her incredible achievements in exorcising demons from a young age pushed her towards becoming the Excelsis Deo's youngest ever high priestess. Most people generally see her as the softest, kindest of all the high priests and priestesses, despite Fiora trying her hardest to be taken more seriously.\n\n"Lord, please give me the strength to overcome the obstacles ahead of me..."`,
        [Locale.jp]: `フィオラは主神教団の神官である。優しく信仰心に篤い彼女は治療術と魔除け術に精通していて、悪魔に対して気を緩めることはない。魔族を追い払った功績と民の人望によって、フィオラは主神教団における最年少の神官長となった。最も親切な神官長と言われ慕われているが、本人はどのようにして民に対して神官長の威厳を保つべきか悩んでいる……\n\n『神よ、困難を乗り越える勇気を授けてくださいませ』`,
        [Locale.kr]: `피오라는 주신교단의 신관 중 한 명이다. 온화하고 깊은 신앙심을 가진 그녀는 치유술과 퇴마술에 능해 마족을 상대해 한 번도 패배한 적이 없다. 마족을 물리친 공적과 백성들 사이의 명망에 힘입어, 피오라는 주신교단 내에서 가장 젊은 대신관에 임명되어 높은 지위를 지니고 있다. 가장 뛰어난 친화력을 지닌 대신관으로 불리며 백성들의 사랑을 받고 있는 그녀는 어떻게 하면 대신관으로서의 위엄을 세울 수 있을지에 대해 깊은 고민에 빠져있다......\n\n『신이시어. 제게 눈 앞의 어려움을 극복할 용기를 주소서.』`
    },
    rarity: Rarity.SR,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.fiora],
    thumbnail: UnitEssence[UnitCode.fiora],
    selection: UnitSelection[UnitCode.fiora],
    clothes: UnitFullImage[UnitCode.fiora],
    tagList: [
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_RECOVERY,
    ], 
    otherVersion: [ UnitCode.hm_fiora, UnitCode.s_fiora, UnitCode.ny_fiora ],
    initHP: 3101,
    initATK: 750.4,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.fiora],
    skillSet: []
}