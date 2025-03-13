import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10159: Unit = {
    ID: "10159",
    metaCode: "ny_fiora",
    prefix: {
        [Locale.tc]: "喜迎性春",
        [Locale.sc]: "喜迎性春",
        [Locale.en]: "Spring Lust",
        [Locale.jp]: "性なる迎春",
        [Locale.kr]: "성의 봄맞이"
    },
    name: {
        [Locale.tc]: "菲歐菈",
        [Locale.sc]: "菲欧菈",
        [Locale.en]: "Fiora",
        [Locale.jp]: "フィオラ",
        [Locale.kr]: "피오라"
    },
    abbreviation: {
        [Locale.tc]: [ "春菲", "春肥", "水肥" ],
        [Locale.sc]: [ "春菲", "春肥", "水肥" ],
        [Locale.en]: [ "Ny.Fiora" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "춘오라" ]
    },
    background: {
        [Locale.tc]: `身為性愛神教的神官長，菲歐菈致力於將性愛神教的理念傳播到世界各地，讓人們都能享受性愛的快樂。然而，在某次的傳教活動中，菲歐菈發現當地居民缺乏性生活的原因，竟然是因為附近有一座火焰山？善良的菲歐菈自然不會坐視不管，為了奪回人們的性生活，她義無反顧地踏上了熄滅火焰山的旅程。即使前方遍布荊棘，擁有堅定信仰的菲歐菈，也絕對不會退縮。因為想要帶給人們性福，是她唯一不變的初衷。\n\n『在這美好的時節，讓我們一起解開束縛，享受性愛的美好吧。』`,
        [Locale.sc]: `身为性爱神教的神官长，菲欧菈致力于将性爱神教的理念传播到世界各地，让人们都能享受性爱的快乐。然而，在某次的传教活动中，菲欧菈发现当地居民缺乏性生活的原因，竟然是因为附近有一座火焰山？善良的菲欧菈自然不会坐视不管，为了夺回人们的性生活，她义无反顾地踏上了熄灭火焰山的旅程。即使前方遍布荆棘，拥有坚定信仰的菲欧菈，也绝对不会退缩。因为想要带给人们性福，是她唯一不变的初衷。\n\n『在这美好的时节，让我们一起解开束缚，享受性爱的美好吧。』`,
        [Locale.en]: `As the high priestess of the Church of Cock, Fiora dedicates her life to spreading the teachings of her faith across the world, ensuring that everyone can experience the joys of sexual pleasure. However, during a recent missionary event, she discovers that the local residents lacked a fulfilling sex life due to the ominous presence of the scorching Mount Flambé nearby! Being the kind-hearted soul she is, Fiora can't simply stand by and watch the innocent suffer a sexless life. Determined to restore the villagers' carnal passions, she fearlessly embarks on a journey to extinguish the flames of the volcano. Even when faced with possible dangers ahead, Fiora is fuled by her unwavering faith and does not retreat. Her singular, unchanging goal is to bring happiness through intimacy to all.\n\n"In this wonderful season, let us break free from our constraints and revel in the beauty of love-making."`,
        [Locale.jp]: `セックス教の神官長であるフィオラは、セックス教の理念を世界中に広め、人々に性の喜びを享受してもらうことを使命としている。しかし、とある布教活動をしている途中、その地域の住民たちが性生活を楽しめない理由が、近くにそびえる火焔山にあることに気づく。心優しいフィオラが、そんな状況を見過ごすわけにはいかなかった。人々の性生活を取り戻すため、彼女は迷うことなく火焔山の炎を鎮める旅に出ることを決意する。道中、いばらのような困難が待ち受けていようとも、フィオラはその信念を貫き通す。人々に性なる幸せをもたらすことが、彼女の揺るぎない想いだからだ。\n\n『この美しい季節に、束縛を解き放ち、セックスの素晴らしさを堪能しましょう』`,
        [Locale.kr]: `섹스 교단의 대신관으로, 피오라는 섹스 교단의 이념을 세계 각지에 알리고 모든 이들이 섹스의 쾌락을 누릴 수 있도록 하기 위해 노력하고 있다. 하지만 어느 선교 활동에서 피오라는 해당 지역 주민들의 성생활이 부족한 이유가 화염산이 근처에 있기 때문이란 사실을 알게 된다. 이를 좌시할 수 없었던 피오라는 사람들이 정상적으로 성생활을 누릴 수 있도록, 화염산의 불을 끄는 여정에 발을 내딛는다. 비록 그 앞길이 험난할지라도, 확고한 신념을 가진 피오라는 절대 물러서는 법이 없다. 모든 이에게 성복(性福)을 전하겠다는 그녀의 초심은 조금도 변하지 않았다.\n\n『아름다운 계절, 함께 모든 것을 내려놓고 섹스의 아름다움을 만끽해 볼까요?』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/01/22",
    essence: UnitEssence[UnitCode.ny_fiora],
    thumbnail: UnitEssence[UnitCode.ny_fiora],
    selection: UnitSelection[UnitCode.ny_fiora],
    clothes: UnitFullImage[UnitCode.ny_fiora],
    tagList: [],
    otherVersion: [ UnitCode.fiora, UnitCode.hm_fiora, UnitCode.s_fiora ],
    puzzle: [],
    skillSet: []
}