import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10037: Unit = {
    ID: "10037",
    metaCode: "mesmiia",
    prefix: {
        [Locale.tc]: "蛇女之后",
        [Locale.sc]: "蛇女之后",
        [Locale.en]: "Snake Queen",
        [Locale.jp]: "蛇の女王",
        [Locale.kr]: "나가 퀸"
    },
    name: {
        [Locale.tc]: "梅絲米奈雅",
        [Locale.sc]: "梅丝米奈雅",
        [Locale.en]: "Mesmiia",
        [Locale.jp]: "メスミナヤ",
        [Locale.kr]: "메스미나"
    },
    abbreviation: {
        [Locale.tc]: [ "蛇后", "蛇", "智慧毛毛蟲" ],
        [Locale.sc]: [ "蛇后", "蛇", "智慧毛毛虫" ],
        [Locale.en]: [ "Mes", "OG.Mes", "OG.Mesmiia" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `梅絲米奈雅是蛇女族的梅杜莎種。傳說中可以將人石化，但實際上只是視力不好瞪人造成的誤解，但世人沒有誤解的是，梅杜莎的確有著一頭蛇髮。而即將繼任成下位當家的梅絲米奈雅卻有著和一般梅杜莎不同的煩惱，梅絲米奈雅的左髮常常不自覺的透漏了她的心聲，讓她的虛張聲勢化為烏有。為了向其他人證明她確實有資格成為下位當家，她決定挑戰現在聲勢如日中天的魔王凱薩，以藉此證明自己的實力。\n\n『看看我這完美的體態，平滑且勻稱的身軀，你也被迷上了嗎？』\n『不同於其他擁腫蛇女，滑溜的身材才是蛇女一族的完美體態。』\n『嗚嗚嗚，我也想要跟大家一樣的大胸部。』`,
        [Locale.sc]: `梅丝米奈雅是蛇女族的梅杜莎种。传说中可以将人石化，但实际上只是视力不好瞪人造成的误解，但世人没有误解的是，梅杜莎的确有着一头蛇发。而即将继任成下位当家的梅丝米奈雅却有着和一般梅杜莎不同的烦恼，梅丝米奈雅的左发常常不自觉的透漏了她的心声，让她的虚张声势化为乌有。为了向其他人证明她确实有资格成为下位当家，她决定挑战现在声势如日中天的魔王凯萨，以借此证明自己的实力。\n\n『看看我这完美的体态，平滑且匀称的身躯，你也被迷上了吗？』\n『不同于其他拥肿蛇女，滑溜的身材才是蛇女一族的完美体态。』\n『呜呜呜，我也想要跟大家一样的大胸部。』`,
        [Locale.en]: `Mesmiia is part of the Medusa family. Everyone knows Medusas from their legendary ability to turn people into stone... really though, all that stone-turning is usually an accident--just happens when they're cranky and look at someone funny. But it is true that they do have a headful of snakes. That's definitely true. But Mesmiia, who's just become the new queen of the Medusas, is a bit different from most. Mesmiia's left strand of snake hair usually ends up saying what's truly on her mind, whether Mesmiia wants it to or not. Sometimes it gets her into a bit of trouble... So now, in order to prove to everyone that she really does have what it takes to be the next queen, Mesmiia's chosen to take on the new big-bad in the land--Archdemon Caesar himself!\n\n"Look at my sexy, smooth, taut little body... Is it turning you on?"\n"You busty bitches wish you could look like me!"\n"Awww... I want big tits like everybody else..."`,
        [Locale.jp]: `メスミナヤはナーガ族のメドゥーサ種。伝説には「見たものを石に変える能力を持つ」とあるが、実際には目が悪い人の勘違いだったようだ。ただ、メドゥーサの頭髪が蛇であるのは確かだ。まもなく一族の主となるメスミナヤは、普通のメドゥーサとは違う悩みを抱えていた。メスミナヤの左髪は心の内を漏らしてしまい、彼女のはったりが水の泡になるのだ。他の人に一族の主になる資格を持っていることを証明するために、名を轟かせている魔王シーザーに挑戦を仕掛け、自分の実力を証明しようとした。\n\n『私の完璧な体つきを見てちょうだい。滑らかでバランスのいい身体、あなたも癖になっちゃったかしら？』\n『他のぼってりしたナーガとは違って、滑らかな身体こそがナーガ一族の完璧な体つき』\n『うぅ、私もみんなみたいな大きな胸が欲しいよ』`,
        [Locale.kr]: `메스미나는 나가 족의 메두사이다. 전설에 따르면 메두사는 인간을 석화시킬 수 있다고 하지만 실은 이는 그저 시력이 좋지 않던 인간의 목겸담으로 빚어낸 오해일 뿐이다. 그래도 목격담 중 사실인 부분도 있었으니, 바로 메두사에게 뱀머리가 있다는 사실이다. 곧 다음 여왕으로 등극하게 되는 메스미나에게는 일반 메두사와는 다른 고민이 하나 있었다. 메스미나의 왼쪽 머리가 자신도 모르게 그녀의 생각을 말해버려 그녀의 위엄을 깡그리 짓밟아버린다는 것이다. 자신이 다음 여왕에 등극할 자격과 실력이 있다는 것을 증명하기 위해, 그녀는 현재 명성이 하늘을 찌르고 있는 마왕 시저에게 도전하려 한다.\n\n『나의 이 완벽한 체형를 봐. 매끄럽고 균형잡힌 몸에 너도 반해버린 거지?』\n『다른 비대한 나가들에게 비하면, 미끌한 몸매야말로 나가족이 갖춰야 할 완벽한 체형이지.』\n『흑흑흑, 나도 다른 사람들처럼 큰 가슴을 가지고 싶단 말이야.』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.mesmiia],
    thumbnail: UnitEssence[UnitCode.mesmiia],
    selection: UnitSelection[UnitCode.mesmiia],
    clothes: UnitFullImage[UnitCode.mesmiia],
    tagList: [
        TagID.ELEMENT_FIRE,
        TagID.POSITION_OBSTRUCTER,
        TagID.SPECIES_DEMON,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [ UnitCode.w_mesmiia ],
    initHP: 3539.1969828558676,
    initATK: 903.9980223916155,
    puzzle: [],
    outfits: [],
    skillSet: []
}