import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10006: Unit = {
    ID: "10006",
    metaCode: "lulu",
    prefix: {
        [Locale.tc]: "法斯公主",
        [Locale.sc]: "法斯公主",
        [Locale.en]: "Phasi Princess",
        [Locale.jp]: 'フォス王女',
        [Locale.kr]: "파스제국의 공주"
    },
    name: {
        [Locale.tc]: "露露",
        [Locale.sc]: "露露",
        [Locale.en]: "Lulu",
        [Locale.jp]: "ルル",
        [Locale.kr]: "루루"
    },
    abbreviation: {
        [Locale.tc]: [ "普露", "解露", "露" ],
        [Locale.sc]: [ "普露", "解露", "露" ],
        [Locale.en]: [ "OG.Lulu" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `法斯帝國是人類勢力的絕對霸主，崇尚武力、並且擁有著全大陸最強盛的軍事實力，就連王室的內部也秉持著弱肉強食的菁英教育，唯有強者才能登上王位。但是在這樣的環境下，帝國公主露露卻是唯一的異類。與法斯帝國的理念相反，露露性格內向、溫吞，討厭爭鬥，更沒有任何野心，只希望自己像個洋娃娃一樣，在王宮裡吃點心，悠悠哉哉過著和平且與世無爭的生活。然而在凱薩率領魔族入侵時，瞧不起魔族的法斯帝國的皇帝卻下令跟溫室花朵沒兩樣的露露擔任帝國禁衛軍的領軍，讓她出征討伐魔族，以此積累名望與功績……\n\n『嗚嗚…父王您真的要派人家上戰場嗎…？』`,
        [Locale.sc]: `法斯帝国是人类势力的绝对霸主，崇尚武力、并且拥有着全大陆最强盛的军事实力，就连王室的内部也秉持着弱肉强食的菁英教育，唯有强者才能登上王位。但是在这样的环境下，帝国公主露露却是唯一的异类。与法斯帝国的理念相反，露露性格内向、温吞，讨厌争斗，更没有任何野心，只希望自己像个洋娃娃一样，在王宫里吃点心，悠悠哉哉过着和平且与世无争的生活。然而在凯萨率领魔族入侵时，瞧不起魔族的法斯帝国的皇帝却下令跟温室花朵没两样的露露担任帝国禁卫军的领军，让她出征讨伐魔族，以此积累名望与功绩……\n\n『呜呜…父王您真的要派人家上战场吗…？』`,
        [Locale.en]: `Although Lulu is the princess of the Phasi Empire, the most powerful kingdom on the continent, her dream is to turn into an adorable doll, sitting in the palace and munching on tasty desserts all day long. When Caesar invaded the Phasi Empire with his demon army, the emperor ordered Lulu to meet the demons head-on to prove her worth and build a reputation for herself... However, this ended up pushing Lulu into an unexpected abyss...\n\n"Daddy, do you really need me to go to war...?"`,
        [Locale.jp]: `フォス帝国は人類最強の勢力で、大陸でもっとも強い軍事力を有する国家である。王室内部でも弱肉強食のエリート教育を一貫しており、強者だけが王者の地位に立つことができる。しかし帝国王女のルルだけは違った。フォス帝国の理念とは裏腹に、内気でやさしく、争いを嫌っており、一切の野心が無い。彼女は人形のように王宮でスイーツを楽しむ、平和で争いのない生活を送りたいと思っている。シーザー軍侵攻の際、フォス王はシーザー軍を甘く見ていたため、温室で育ったルルに帝国近衛軍を率いて魔族を征伐するよう命じた。これもすべては名声と功績のためだけに……\n\n『うぅ……お父様、あなたは家族に戦場へ行けと申すのですか……？』`,
        [Locale.kr]: `파스제국은 인간 세력의 절대적 최강자이다. 그들은 무력을 숭상하며 전 대륙에서 가장 강력한 군사력을 보유하고 있다. 그들은 심지어 왕실 내부에서도 약육강식의 엘리트 교육 방침을 고수하고 있어 가장 강한 자만이 왕위에 오르도록 하였다. 그리고 이러한 환경에서 파스제국의 공주 루루는 유일한 이단아라고 할 수 있다. 파스제국의 이념과는 정반대로 어떠한 야심도 없는 루루는 내성적이고 온화한 성격을 지니고 있으며 투쟁을 싫어해 그저 바비 인형처럼 왕궁 안에서 과자나 먹으며 다툼 없는 한가로운 생활을 누리기를 희망한다. 하지만 시저가 마족을 이끌고 침입해오자 평소 마족을 무시해왔던 파스제국의 황제는 온실 속의 화초와 다를 바 없는 루루를 파스제국 근위군의 지휘관으로 명해 마족을 토벌하고 명성과 공적을 쌓도록 한다......\n\n『흑흑... 아버지, 정말 저를 전장으로 보내시려는 건가요?』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.lulu],
    thumbnail: UnitEssence[UnitCode.lulu],
    selection: UnitSelection[UnitCode.lulu],
    clothes: UnitFullImage[UnitCode.lulu],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_HEALER,
        TagID.SPECIES_HUMAN,
        TagID.CLASS_LEADER,
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [ UnitCode.s_lulu, UnitCode.w_lulu, UnitCode.c_lulu, UnitCode.p_lulu ],
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_2, PuzzleCode.EVENT_2024_XMAS_2 ],
    skillSet: []
}