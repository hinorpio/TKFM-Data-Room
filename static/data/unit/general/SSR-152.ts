import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10181: Unit = {
    ID: "10181",
    metaCode: "l_ayane",
    prefix: {
        [Locale.tc]: "悠閒生活",
        [Locale.sc]: "悠闲生活",
        [Locale.en]: "Leisure Living",
        [Locale.jp]: "ほのぼの暮らし",
        [Locale.kr]: "여유로운 삶"
    },
    name: {
        [Locale.tc]: "神田綾音",
        [Locale.sc]: "神田绫音",
        [Locale.en]: "Ayane",
        [Locale.jp]: "神田綾音",
        [Locale.kr]: "칸다 아야네"
    },
    abbreviation: {
        [Locale.tc]: [ "悠勇", "悠田", "胖勇", "胖田" ],
        [Locale.sc]: [ "悠勇", "悠田", "胖勇", "胖田" ],
        [Locale.en]: [ "L.Ayane" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "여야네" ]
    },
    background: {
        [Locale.tc]: `那天就和以往的每一天一樣，是個既平凡又普通的日子。當神田綾音躺在魔王城柔軟的大床上，沉沉入睡，並再次睜開眼睛時，她卻猛然發現，自己回到了原本的世界。穿越到異世界時發生的所有事就彷彿一場夢一樣，任何一點痕跡都沒有留下。唯一能證明自己曾去過異世界的，大概就只剩下腦中那段擔任勇者的辛苦日子，以及在魔王城生活的時光。本以為這就代表她能夠回歸現代世界，盡情享受既便利又快樂的日常生活，卻沒想到，晚餐時母親的一句話，讓她發現事情似乎沒有這麼簡單………不過，就算事情並不簡單，也不能阻止自己去好好享用原本世界的各種美食。在尋找回到原本世界的真正原因之前，先去享受一頓烤肉比較重要！\n\n『今天總算把必修課的報告寫完了，等一下就去吃壽喜燒犒賞一下自己吧~』`,
        [Locale.sc]: `那天就和以往的每一天一样，是个既平凡又普通的日子。当神田绫音躺在魔王城柔软的大床上，沉沉入睡，并再次睁开眼睛时，她却猛然发现，自己回到了原本的世界。穿越到异世界时发生的所有事就彷彿一场梦一样，任何一点痕迹都没有留下。唯一能证明自己曾去过异世界的，大概就只剩下脑中那段担任勇者的辛苦日子，以及在魔王城生活的时光。本以为这就代表她能够回归现代世界，尽情享受既便利又快乐的日常生活，却没想到，晚餐时母亲的一句话，让她发现事情似乎没有这麽简单………不过，就算事情并不简单，也不能阻止自己去好好享用原本世界的各种美食。在寻找回到原本世界的真正原因之前，先去享受一顿烤肉比较重要！\n\n『今天总算把必修课的报告写完了，等一下就去吃寿喜烧犒赏一下自己吧~』`,
        [Locale.en]: `It's a day just like any other; 'tis an ordinary and uneventful one. And after Ayane falls asleep on her large, soft bed within the confines of Caesar's Palace, she then opens her eyes once more to suddenly find herself transported back to her home world. It's as if everything that had happened since she was thrust into the Demon Realm, was all a crazy dream. There's not a shred of evidence that she had ever been amongst demons. All that's left in her mind are memories of her trials and tribulations as a Hero, and her life in the palace. Ayane soaks in the possibility of happier days to come now that she's back in the modern world. However, at supper, her mother utters a sentence that causes her to realize that things aren't as simple as they seem...... But whatever, such a hunch shouldn't stop her from enjoying her hometown's scrumptious delicacies, right? Ayane can't investigate anything on an empty stomach, so onward for some delicious barbecue!\n\n"I finally finished writing my report for class, so I'm gonna eat some sukiyaki to treat myself~"`,
        [Locale.jp]: `あの日はいつもと同じ、平凡で普通な一日だった。魔王城の柔らかいベッドで眠りについた神田綾音。目が覚めると、彼女はなんと元の世界に戻っていたのだ。異世界での出来事はまるで夢のようで、跡形すら残っていない。異世界にいたと証明できる唯一の証拠は、自分が勇者として過ごした苦しい日々や、魔王城での生活の記憶だけだった。これで現代に戻り、便利で楽しい日常を満喫できる──そう思っていたが、夕食時の母の一言で、事はそう単純ではないと気づくことに…………とはいえ、複雑な事情があっても、美味しい故郷の料理を楽しむことの妨げにはならない。元の世界に戻ってきた本当の理由を探すのは後回しにして、まずは焼肉を楽しもう！\n\n『やっと必修のレポートを書き終わった。すき焼きを食べて自分を労おうっと～』`,
        [Locale.kr]: `그날도 여느 날과 다름없이, 평범하고 흔한 하루였다. 마왕성의 푹신한 침대에 몸을 뉘고 깊이 잠들었던 칸다 아야네가 다시 눈을 떴을 때, 그녀는 문득 자신이 원래의 세계로 돌아와 있다는 사실을 깨달았다. 이세계에서 겪었던 모든 일은 마치 한낱 꿈처럼, 아무 흔적도 남기지 않은 채 사라져 있었다. 단 하나, 자신이 용자로서 보낸 고된 나날들과 마왕성에서의 생활만이 뇌리 속 기억으로 남아 있을 뿐이었다. 그녀는 이것으로 이제 현대 세계에 돌아와 편리하고 즐거운 일상을 마음껏 누릴 수 있으리라 생각했지만, 저녁 식사 자리에서 엄마가 무심코 내뱉은 한마디에 상황이 그리 단순하지 않다는 것을 알게 되었다.........하지만, 아무리 간단하지 않는다 한들, 고향의 맛난 음식을 즐기는 일에 방해가 되진 못했다. 원래 세계로 돌아온 진짜 이유를 찾아내기 전까지, 우선 고기들로 배부터 채우는 게 훨씬 더 중요하니까!\n\n『오늘 드디어 필수 과목의 리포트를 다 써냈으니, 이따가 스키야키로 나 자신에게 보상을 줘야겠어~』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2025/09/10",
    essence: UnitEssence[UnitCode.l_ayane],
    thumbnail: UnitEssence[UnitCode.l_ayane],
    selection: UnitSelection[UnitCode.l_ayane],
    clothes: UnitFullImage[UnitCode.l_ayane],
    tagList: [],
    otherVersion: [ UnitCode.ayane, UnitCode.s_ayane, UnitCode.h_ayane, UnitCode.bg_ayane, UnitCode.bu_ayane ],
    initHP: 4913.6,
    initATK: 716.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.l_ayane],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}