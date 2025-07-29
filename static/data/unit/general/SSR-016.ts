import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10030: Unit = {
    ID: "10030",
    metaCode: "s_lulu",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "露露",
        [Locale.sc]: "露露",
        [Locale.en]: "Lulu",
        [Locale.jp]: "ルル",
        [Locale.kr]: "루루"
    },
    abbreviation: {
        [Locale.tc]: [ "夏露", "泳露", "鴨" ],
        [Locale.sc]: [ "夏露", "泳露", "鸭" ],
        [Locale.en]: [ "S.Lulu" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수루루" ]
    },
    background: {
        [Locale.tc]: `只想安逸度日的公主，如今挺立於沙灘之上。聽聞要到海邊玩耍的消息，比以往更亢奮的靜強迫將露露從舒適房間拖了出來。雖然換好了泳裝，但入水即沉的旱鴨子體質，讓露露打定了絕不下水的主意。不止不下水，就連離開遮陽傘的底下都全力拒絕！毒辣的太陽、光是踩上去就會燙人腳底板的沙灘…嗚嗚，露露已經想回家了啦！\n\n『人家不要下水，絕對不要…呀啊，浪打過來了！』`,
        [Locale.sc]: `只想安逸度日的公主，如今挺立于沙滩之上。听闻要到海边玩耍的消息，比以往更亢奋的静强迫将露露从舒适房间拖了出来。虽然换好了泳装，但入水即沉的旱鸭子体质，让露露打定了绝不下水的主意。不止不下水，就连离开遮阳伞的底下都全力拒绝！毒辣的太阳、光是踩上去就会烫人脚底板的沙滩…呜呜，露露已经想回家了啦！\n\n『人家不要下水，绝对不要…呀啊，浪打过来了！』`,
        [Locale.en]: `With news of a beach vacation, the super-excited Shizuka drags the markedly less-excited Lulu out from her room. Even though she's put her swimsuit on, Lulu can't swim in the slightest and she expects to stay far away from the water. Not only the water, but the sun too. Lulu doesn't want to get a sunburn! That evil sun's gonna burn her little feetsies, too, Lulu just knows it! She can't wait to go back home!\n\n"I don't wanna go swimming! Please, just leave me alone!! Go away, waves!!!"`,
        [Locale.jp]: `ただ平穏に日々を過ごしたい公主は、今砂浜に立っていた。海辺に遊びに行くという話を耳にして、普段よりも更にテンションが上がった静が、無理やりルルを居心地の良い部屋から引っ張り出して来たのだ。水着に着替えたものの、水に入るとすぐ沈んでしまうほどに泳げないため、ルルは海には絶対に入らないと決意した。海に入らないだけでなく、パラソルの下から離れることすら全力拒否！ギラギラと照り付ける太陽、一瞬触れただけですぐに足の裏が火傷してしまいそうな砂浜……うう、ルルもうお城に帰りたい！\n\n『私、海になんか入りたくない…絶対に……きゃっ、波が来たっ！』`,
        [Locale.kr]: `그저 조용히 평온한 날만을 보내고 싶어하는 공주가 이렇게 해변에 서 있다. 바닷가 소풍 소식을 듣자마자 평소보다 더욱 흥분해버린 시즈카에 의해 루루는 쾌적한 방에서 억지로 끌려 나오고 말았다. 수영복으로 갈아입긴 했지만 물에 들어가자마자 가라앉아버리기 일쑤인 맥주병인 루루는 절대 물에 안 들어가기로 작정한다. 그뿐만 아니라 양산 밖으로 나가는 것도 전부 거부하기로 결심한다. 지독한 햇빛과 발바닥이 화끈거리게 만드는 뜨거운 모래... 흑흑... 루루는 이제 그만 집에 가고 싶다구!\n\n『난 절대 물에 들어갈 생각 없어! 싫어... 꺄아! 파도가 덮쳐 오고 있어!』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2021/05/28",
    essence: UnitEssence[UnitCode.s_lulu],
    thumbnail: UnitEssence[UnitCode.s_lulu],
    selection: UnitSelection[UnitCode.s_lulu],
    clothes: UnitFullImage[UnitCode.s_lulu],
    tagList: [],
    otherVersion: [ UnitCode.lulu, UnitCode.w_lulu, UnitCode.c_lulu, UnitCode.p_lulu ],
    initHP: 3748.8,
    initATK: 940.8,
    puzzle: [ PuzzleCode.EVENT_2021_SUMMER_2 ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.s_lulu],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}