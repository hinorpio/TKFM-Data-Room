import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10157: Unit = {
    ID: "10157",
    metaCode: "x_muila",
    prefix: {
        [Locale.tc]: "純真祈願",
        [Locale.sc]: "纯真祈愿",
        [Locale.en]: "Pure Prayer",
        [Locale.jp]: "純粋な祈り",
        [Locale.kr]: "순진한 소원"
    },
    name: {
        [Locale.tc]: "牧愛菈",
        [Locale.sc]: "牧爱菈",
        [Locale.en]: "Muila",
        [Locale.jp]: "マイラ",
        [Locale.kr]: "무엘라"
    },
    abbreviation: {
        [Locale.tc]: [ "誕牧", "誕未", "性牧", "性未", "聖牧", "聖未" ],
        [Locale.sc]: [ "诞牧", "诞未", "性牧", "性未", "圣牧", "圣未" ],
        [Locale.en]: [ "X.Muila", "C.Muila" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "크엘라" ]
    },
    background: {
        [Locale.tc]: `聖誕節……這種節日只有腦袋空空的現充才會期待它的到來。原本一直抱持這種想法的牧愛菈，卻在某天因為凱薩的一句話深受刺激，換上了平時絕對不會穿的聖誕服飾。為了挽回戀人的心，順利跟他來場美妙的約會做愛，牧愛菈決定豁出去，扮成她極度鄙夷的那種聖誕辣妹。扮裝過後的她，完全看不出來是那個喜歡宅在實驗室與機械為伍，整天發出陰沉笑聲的陰角科學家。帶著一點羞澀還有一點大膽，心懷祈願的少女主動踏上飄著大雪的街道，準備去和無比思念的戀人見面。\n\n『呀、呀吼～凱薩大人好呀～！是牧愛菈唷～要、要跟人家一起度過快樂的時光嘛～』`,
        [Locale.sc]: `圣诞节……这种节日只有脑袋空空的现充才会期待它的到来。原本一直抱持这种想法的牧爱菈，却在某天因为凯萨的一句话深受刺激，换上了平时绝对不会穿的圣诞服饰。为了挽回恋人的心，顺利跟他来场美妙的约会做爱，牧爱菈决定豁出去，扮成她极度鄙夷的那种圣诞辣妹。扮装过后的她，完全看不出来是那个喜欢宅在实验室与机械为伍，整天发出阴沉笑声的阴角科学家。带着一点羞涩还有一点大胆，心怀祈愿的少女主动踏上飘着大雪的街道，准备去和无比思念的恋人见面。\n\n『呀、呀吼～凯萨大人好呀～！是牧爱菈唷～要、要跟人家一起度过快乐的时光嘛～』`,
        [Locale.en]: `Christmas… a holiday only the airheaded, blissfully in love types look forward to. Muila has always held this belief until one day, spurred by a comment from Caesar, she is jolted into action, donning a Christmas outfit she would never normally wear. Determined to win back her lover's heart and enjoy a delightful date that would lead to romance, Muila resolves to embrace the very image she has always scorned: the stereotypical Christmas vixen. Transformed, she is unrecognizable as the reclusive scientist who prefers the company of machines in her lab, often laughing in a shadowy manner. With a mix of shyness and boldness, the wishful girl steps onto the snow-covered streets, ready to meet her dearly missed lover.\n\n"Yay, yay~! Hi, Master Caesar! It's Muila! Would you like to make some joyful memories with me~?"`,
        [Locale.jp]: `クリスマス……そんな祭日を心待ちにするのは、頭の空っぽなリア充だけ。そう信じて疑わなかったマイラだったが、ある日シーザーの一言で心を揺さぶられ、普段なら絶対に身につけないクリスマス衣装に着替えることにした。恋人の心を取り戻し、素敵なデートと愛を育むため、意を決してかつて軽蔑していたクリスマスギャルを演じることにしたマイラ。着替えた後の彼女からは、実験室に引きこもって機械と戯れ、不気味な笑い声を上げる陰キャ科学者の面影は微塵も感じられない。願いを胸に秘めた少女は、恥じらいながらも大胆に雪の舞う街へと足を踏み出し、思いを寄せる恋人の元へと向かった。\n\n『や、やっほ～シーザー様こんにちは～！マイラだよ～い、一緒に楽しい時間を過ごそうね～』`,
        [Locale.kr]: `크리스마스라... 머릿속이 텅 빈 사람들만 그 명절이 다가오기를 무척 기대했다. 늘 이런 생각을 품고 있던 무엘라는 어느 날 시저의 한마디에 충격을 받게 됐고, 평소에는 절대 입지 않을 크리스마스 복장으로 갈아입었다. 연인의 마음을 되돌리고 뜨겁고 아름다운 밤을 보내기 위해, 무엘라는 평소에 극도로 경멸하던 크리스마스 섹시걸로 변신하기에 이른다. 변신한 그녀는 늘 실험실에 틀어박혀 기계들이나 만지며 음침한 웃음이나 짓는 과학자라는 이미지와는 사뭇 다른 모습이다. 약간의 수줍음과 과감함까지 품은 소녀는 소망을 안고 하얀 눈이 내리는 거리로 나섰고 그리워하는 연인과 만날 준비가 되어 있었다.\n\n『유, 유후~ 시저 님, 안녕하세요~ 무엘라예요~ 저, 저랑 즐거운 시간 보내지 않으실래요~』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2024/12/11",
    essence: UnitEssence[UnitCode.x_muila],
    thumbnail: UnitEssence[UnitCode.x_muila],
    selection: UnitSelection[UnitCode.x_muila],
    clothes: UnitFullImage[UnitCode.x_muila],
    tagList: [],
    otherVersion: [ UnitCode.muila ],
    initHP: 0,
    initATK: 0,
    puzzle: [ PuzzleCode.EVENT_2024_XMAS_1 ],
    outfits: [],
    skillSet: []
}