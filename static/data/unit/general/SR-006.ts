import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10014: Unit = {
    ID: "10014",
    metaCode: "shizuka",
    prefix: {
        [Locale.tc]: "妖狐",
        [Locale.sc]: "妖狐",
        [Locale.en]: "Fox Spirit",
        [Locale.jp]: "妖狐",
        [Locale.kr]: "요호"
    },
    name: {
        [Locale.tc]: "靜",
        [Locale.sc]: "静",
        [Locale.en]: "Shizuka",
        [Locale.jp]: "静",
        [Locale.kr]: "시즈카"
    },
    abbreviation: {
        [Locale.tc]: [ "普狐", "普靜", "狐", "靜" ],
        [Locale.sc]: [ "普狐", "普静", "狐", "静" ],
        [Locale.en]: [ "Shiz", "OG.Shiz", "OG.Shizuka" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `有著一半妖狐血統的靜與生俱來就有著強大的妖力，從小就被寄養在烈日國的陰陽寮裡，從未與她的生父與生母見過面。靜將養育她的陰陽師們視作了真正的家人，雖然成了一名「孤兒」，不過靜並沒有因此變得陰鬱，反而活潑過了頭。然而在那樂觀的外表之下，卻藏著害怕寂寞的一面，會如此熱衷惡作劇，或許就是為了能吸引別人的注意。\n\n『靜會再好好學習的喏，下次，下次一定會的喏！』`,
        [Locale.sc]: `有着一半妖狐血统的静与生俱来就有着强大的妖力，从小就被寄养在烈日国的阴阳寮里，从未与她的生父与生母见过面。静将养育她的阴阳师们视作了真正的家人，虽然成了一名「孤儿」，不过静并没有因此变得阴郁，反而活泼过了头。然而在那乐观的外表之下，却藏着害怕寂寞的一面，会如此热衷恶作剧，或许就是为了能吸引别人的注意。\n\n『静会再好好学习的喏，下次，下次一定会的喏！』`,
        [Locale.en]: `Half-yokai, Shizuka was sent to Isorath's Onmyoryo to study under the Onmyoji soon after her birth, having never met her true mother and father. A naturally upbeat girl, Shizuka has never let being an orphan get her down, viewing the other Onmyoji as her family. Although she seems happy on the outside, she's actually quite lonesome. Maybe for the attention, she's been known to pull pranks on her fellow Onmyoji, and is far from a star pupil.\n\n"Don't worry, I'll get it next time!"`,
        [Locale.jp]: `妖狐の混血であり生まれながらに強大な力をもつ静。幼い頃から烈陽国の陰陽寮で育てられ、これまで一度も両親に会ったことが無い。静は彼女を育てた陰陽師たちが本当の家族だと考えている。「孤児」ではあるがそれを気にすることもなく、明るく活発な性格だ。いつも楽観的に見えるが実は寂しがり屋な一面を隠している。いたずらが好きなのも他人の気を引きたいからかもしれない。\n\n『静次はちゃんと勉強するよ、次はね！』`,
        [Locale.kr]: `절반의 요호 혈통을 가지고 있는 시즈카는 태어날 때부터 강력한 요력을 가지고 있어 어려서부터 태양국의 음양료에 맡겨 키워졌다. 단 한번도 자신의 생부를 만난 적이 없는 그녀는 자신을 키워준 음양사들을 진정한 가족으로 여기며, 「고아」가 되기는 했지만 이로 인해 마음속에 어두운 그림자가 생기기는커녕 오히려 성격이 너무 활발해서 문제이다. 그녀의 이런 낙천적인 외모의 이면에는 혼자가 되는 것을 두려워하는 마음이 있다. 장난치는 것을 좋아하는 성격은 어쩌면 다른 사람들의 주목을 받고 싶어서 일지도 모른다.\n\n『시즈카는 열심히 공부할 거랍니다. 다, 다음에는 반드시 그럴 거예요!』`
    },
    rarity: Rarity.SR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.shizuka],
    thumbnail: UnitEssence[UnitCode.shizuka],
    selection: UnitSelection[UnitCode.shizuka],
    clothes: UnitFullImage[UnitCode.shizuka],
    tagList: [
        TagID.ELEMENT_WATER, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_INTERFERENCE,
        TagID.OTHER_WEAKEN,
    ], 
    otherVersion: [ UnitCode.s_shizuka, UnitCode.x_shizuka, UnitCode.beer_shizuka ],
    initHP: 3032.3969661704327,
    initATK: 767.1996260655412,
    puzzle: [],
    outfits: [],
    skillSet: []
}