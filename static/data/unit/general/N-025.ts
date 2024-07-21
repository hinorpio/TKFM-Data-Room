import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10933: Unit = {
    ID: "10933",
    metaCode: "anya",
    prefix: {
        [Locale.tc]: "獵犬小隊",
        [Locale.sc]: "猎犬小队",
        [Locale.en]: "Hound Hunter",
        [Locale.jp]: "ハウンド小隊",
        [Locale.kr]: "하운드 소대"
    },
    name: {
        [Locale.tc]: "安雅",
        [Locale.sc]: "安雅",
        [Locale.en]: "Anya",
        [Locale.jp]: "アンヤ",
        [Locale.kr]: "안야"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `安雅是來自不同大陸，重視科技和工業的達洛姆公國精銳部隊——獵犬小隊的成員。她每逢戰鬥都衝鋒在最前線，不畏生死，如同凶狠的鬥犬般勇猛。因為熱愛爭勇鬥狠的關係，安雅健壯的身軀上滿是大大小小的傷痕，但她對此並不在意。對她來說，戰鬥就是生存的唯一目的，而傷疤與彈痕更是自己存在的價值。\n\n『狩獵時間到，獵犬要開始狩獵啦，哈哈哈！』`,
        [Locale.sc]: `安雅是来自不同大陆，重视科技和工业的达洛姆公国精锐部队——猎犬小队的成员。她每逢战斗都冲锋在最前线，不畏生死，如同凶狠的斗犬般勇猛。因为热爱争勇斗狠的关係，安雅健壮的身躯上满是大大小小的伤痕，但她对此并不在意。对她来说，战斗就是生存的唯一目的，而伤疤与弹痕更是自己存在的价值。\n\n『狩猎时间到，猎犬要开始狩猎啦，哈哈哈！』`,
        [Locale.en]: `A member of the Hound Hunters, an elite group from the tech and industry-focused Principality of Daruma. Anya is always at the front lines of any heated battle. She fears neither the hardships of life nor the inevitability of death, she is defined by her courageous ferocity. Scars large and small cover his body, a symbol of her love for combat which she carries proudly. For her, fighting is necessary for survival, and the injuries from blade and bullet are proof of how she values her existence.\n\n"Hounds, the hunt for our prey is on! Bwahaha!"`,
        [Locale.jp]: `アンヤはテクノロジーと工業を重視するダロム公国の精鋭部隊ーーハウンド小隊のメンバーだ。彼女は死を恐れずにいつも最前線で戦う。その姿はまるで獰猛な犬だ。戦うことが大好きな彼女は、身体に大小様々な傷がある。しかし彼女はそれを気にする様子はない。彼女にとって戦いは唯一の生き甲斐であり、傷は自分の存在価値の証なのである。\n\n『狩りの時間よ。ハウンドが狩りを始めるの！アハハハッ！』`,
        [Locale.kr]: `안야는 다른 대륙 출신으로 기술과 산업을 중시하는 달롬 공국의 정예 부대——하운드 소대의 일원이다. 그녀는 전투 때마다 생사를 두려워하지 않는 용맹한 투견처럼 언제나 최전선에 자리하고 있다. 싸움을 좋아하는 관계로 그녀의 건장한 몸에는 크고 작은 여러 흉터들이 남아있지만, 본인은 조금도 개의치 않는다. 그녀에게 있어 전투란 생존의 유일한 목적이며, 상처와 탄흔은 자신의 존재 가치, 그 자체이다.\n\n『사냥 시간이다! 이제부터 사냥개가 나설 차례로군! 하하하!』`
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2024/01/07",
    essence: UnitEssence[UnitCode.anya],
    thumbnail: UnitEssence[UnitCode.anya],
    selection: UnitSelection[UnitCode.anya],
    clothes: UnitFullImage[UnitCode.anya],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}