import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10203: Unit = {
    ID: "10203",
    metaCode: "otohime",
    prefix: {
        [Locale.tc]: "龍宮之主",
        [Locale.sc]: "龙宫之主",
        [Locale.en]: "Ryugu Master",
        [Locale.jp]: "竜宮の主",
        [Locale.kr]: "용궁의 주인"
    },
    name: {
        [Locale.tc]: "乙姬",
        [Locale.sc]: "乙姬",
        [Locale.en]: "Otohime",
        [Locale.jp]: "乙姫",
        [Locale.kr]: "오토히메"
    },
    abbreviation: {
        [Locale.tc]: [ "火輔?", "火攻?" ],
        [Locale.sc]: [ "火辅?", "火攻?" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `乙姬是巨型魔導研究機構——龍宮城的管理者。她是由魔導科技專家約翰太郎博士（本人自稱瑪麗安娜）製造的魔導人偶，同時也身兼約翰太郎的助手。因為魔導文明末期的災難，乙姬曾跟隨龍宮沉入海底，沉睡了漫長時光，直到凱薩等人意外闖入，才改變了她的命運。在離開海底後，乙姬便致力於使用魔導科技開發不同類型的魔導道具，並希望能推廣婚紗兵裝給所有單身女性，將約翰太郎的理念發揚光大。同時，她也在四處探尋魔導文明的遺跡，希望能發掘過去災難的真相。儘管過去曾遭遇了諸多迷惘，但現在她已經決定踏出黑暗，向前邁進。\n\n『歡迎來到龍宮城，有興趣的話，我很樂意帶你參觀。』`,
        [Locale.sc]: `乙姬是巨型魔导研究机构——龙宫城的管理者。她是由魔导科技专家约翰太郎博士（本人自称玛丽安娜）製造的魔导人偶，同时也身兼约翰太郎的助手。因为魔导文明末期的灾难，乙姬曾跟随龙宫沉入海底，沉睡了漫长时光，直到凯萨等人意外闯入，才改变了她的命运。在离开海底后，乙姬便致力于使用魔导科技开发不同类型的魔导道具，并希望能推广婚纱兵装给所有单身女性，将约翰太郎的理念发扬光大。同时，她也在四处探寻魔导文明的遗迹，希望能发掘过去灾难的真相。儘管过去曾遭遇了诸多迷惘，但现在她已经决定踏出黑暗，向前迈进。\n\n『欢迎来到龙宫城，有兴趣的话，我很乐意带你参观。』`,
        [Locale.en]: `Otohime is the administrator of the Ryugu Palace, a giant automaton research facility. She is an automaton created by an expert in the field, Capt'n John-sama (who refers to herself as Mariana), while also serving as John-sama's assistant. Due to the catastrophe that ended automaton civilization, Otohime sank to the bottom of the ocean along with Ryugu Palace, sleeping for a vast amount of time until Caesar and the others accidentally intruded, changing her destiny forever. After leaving the ocean floor, Otohime dedicated herself to using automaton tech to develop different types of devices. She also hopes to promote wedding dress armaments to all single women, carrying forward John-sama's personal philosophy. At the same time, she is searching everywhere for the ruins of the automaton civilization, hoping to uncover the truth behind this apocalyptic disaster. Although she has faced much confusion in the past, she has now decided to step out of the darkness and move forward with her research.\n\n"Welcome to Ryugu Palace. If you're interested, I'd be more than happy to show you around."`,
        [Locale.jp]: `乙姫は大型魔導研究所──「竜宮城」の管理者である。彼女は魔導テクノロジーの専門家・ヨハン太郎(自称マリアナ)によって造られた魔魔導人形であり、同時にヨハン太郎の助手でもあった。魔導文明末期に起きた災害により、乙姫は竜宮城とともに海底に沈み、長い間眠りについていたが、シーザーたちが偶然迷い込んできたことで、彼女の運命は大きく動き出す。海底を離れた後、乙姫は魔導テクノロジーを用いた様々な魔導道具の開発に取り組み、ヨハン太郎の理念を世に広めるため、独身女性にウェディングドレス兵装を普及させたいと考えるようになった。同時に、彼女はかつての災害の真相を突き止めるため、各地にある魔導文明の遺跡を調査し続けている。かつては迷いや葛藤もあったが、今の彼女は闇から抜け出し、前を向いて進んでいる。\n\n『竜宮城へようこそ。もし興味がおありでしたら、喜んでご案内いたします』`,
        [Locale.kr]: `오토히메는 거대한 마도 연구 기관── 용궁성의 관리자다. 그녀는 마도 기술 전문가 요한타로 박사(본인은 마리아나라고 주장한다)가 만들어낸 마도 인형이며, 동시에 요한타로의 조수 역할도 맡고 있다. 마도 문명 말기에 발생한 재앙으로 인해, 오토히메는 용궁과 함께 바다 밑으로 가라앉아 오랜 시간 잠들어 있지만, 시저 일행이 우연히 용궁에 발을 들이면서 그녀의 운명 역시 바뀌게 됐다. 해저를 떠난 뒤, 오토히메는 마도 기술을 활용해 다양한 종류의 마도 도구를 개발하는 데 힘쓰고 있으며, 모든 솔로 여성들에게 웨딩드레스 병기를 보급해 요한타로의 이념을 널리 퍼뜨리기를 꿈꾸고 있다. 동시에 그녀는 과거 재앙의 진실을 밝히기 위해, 곳곳에 남겨진 마도 문명의 유적을 탐사하고 있다. 과거에는 수많은 방황을 겪었지만, 이제 그녀는 어둠에서 벗어나 앞으로 나아가기로 결심했다.\n\n『용궁성에 오신 걸 환영합니다. 원하신다면 제가 직접 안내해 드리죠.』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/06/03",
    essence: UnitEssence[UnitCode.otohime],
    thumbnail: UnitEssence[UnitCode.otohime],
    selection: UnitSelection[UnitCode.otohime],
    clothes: UnitFullImage[UnitCode.otohime],
    tagList: [],
    otherVersion: [],
    initHP: 3307.2,
    initATK: 1116.8,
    puzzle: [ PuzzleCode.EVENT_2026_SUMMER_2 ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.otohime],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
