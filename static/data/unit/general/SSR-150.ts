import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10179: Unit = {
    ID: "10179",
    metaCode: "n_lulu",
    prefix: {
        [Locale.tc]: "白衣天使",
        [Locale.sc]: "白衣天使",
        [Locale.en]: "Angel In White",
        [Locale.jp]: "白衣の天使",
        [Locale.kr]: "백의의 천사"
    },
    name: {
        [Locale.tc]: "露露",
        [Locale.sc]: "露露",
        [Locale.en]: "Lulu",
        [Locale.jp]: "ルル",
        [Locale.kr]: "루루"
    },
    abbreviation: {
        [Locale.tc]: [ "護露", "火露", "天露" ],
        [Locale.sc]: [ "护露", "火露", "天露" ],
        [Locale.en]: [ "N.Lulu" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "백루루" ]
    },
    background: {
        [Locale.tc]: `因為魔王凱薩一時的興起，無奈的露露只好在休息日換上護士服到醫院工作。身為凱薩專屬的護士，必須要有靈巧的手指，富有創意的舌頭，以及各種熟練的技巧，如此一來，才有辦法提供讓「病患」滿足的特殊治療服務。但是對露露來說，在醫院裡面做那種事情，不管怎麼想都太奇怪了！更不妙的是，當探病的人陸續抵達後，可怕的事情卻開始一件一件發生了。露露這時才察覺，醫院…好像比她想的還要可怕……\n\n『唔…身體不舒服的話，需要人家餵您吃藥嗎?』`,
        [Locale.sc]: `因为魔王凯萨一时的兴起，无奈的露露只好在休息日换上护士服到医院工作。身为凯萨专属的护士，必须要有灵巧的手指，富有创意的舌头，以及各种熟练的技巧，如此一来，才有办法提供让「病患」满足的特殊治疗服务。但是对露露来说，在医院里面做那种事情，不管怎么想都太奇怪了！更不妙的是，当探病的人陆续抵达后，可怕的事情却开始一件一件发生了。露露这时才察觉，医院…好像比她想的还要可怕……\n\n『唔…身体不舒服的话，需要人家喂您吃药吗?』`,
        [Locale.en]: `Thanks to Archdemon Caesar's sudden whim, poor Lulu has no choice but to slip into a nurse outfit and work at the hospital on her day off. As Caesar's personal nurse, she needs nimble fingers, a creative tongue, and all sorts of polished skills to provide the kind of special treatment that leaves her "patients" thoroughly satisfied. But to Lulu, engaging in that kind of act in a hospital? No matter how you slice it, it's just too weird! Things take a turn for the worse when visitors start showing up, and one terrifying event after another begins to unfold. That's when Lulu realizes... this hospital might be far scarier than she ever imagined...\n\n"Ugh... feeling under the weather? Want me to spoon-feed you some medicine?"`,
        [Locale.jp]: `魔王シーザーの突然の思いつきで、ルルは休日にナース服に着替えて病院で働くことになった。シーザー専属のナースとして、器用な指先、創造性豊かな舌、そして様々な熟練した技術は欠かせない。そうでなければ「患者」を満足させる特別な治療サービスを提供できないからだ。しかしルルからすれば、病院の中でそんなことをするなんて、どう考えてもおかしすぎる！さらにまずいことに、お見舞いする人が続々と来る中、次から次へと恐ろしいことが起こり始めた。ルルはその時になって気づいた。病院は……思っていたよりもずっと恐ろしい場所だったのだと……\n\n『うぅ……体調が悪いなら、お薬を飲ませてあげましょうか？』`,
        [Locale.kr]: `마왕 시저의 변덕 때문에, 불쌍한 루루는 쉬는 날 간호사 복장을 하고 병원에 일하러 가야만 했다. 시저의 전담 간호사로서, 루루는 민첩한 손놀림과 창의적인 혀놀림, 그리고 다양한 숙련된 기술을 갖춰야만 「환자」들에게 만족스러운 특별 치료 서비스를 제공할 수 있었다. 하지만 루루는 병원에서 그런 일을 한다는 게 아무리 생각해도 납득할 수 없었다! 더 최악인 건, 병문안 오는 사람들이 속속 도착하기 시작하면서 무서운 일들이 하나둘 벌어지기 시작했다는 것. 그제야 루루는 병원이... 생각보다 훨씬 더 무서운 곳이라는 것을 깨닫는데...\n\n『음... 몸이 안 좋으시면, 제가 약을 먹여 드릴까요?』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/08/13",
    essence: UnitEssence[UnitCode.n_lulu],
    thumbnail: UnitEssence[UnitCode.n_lulu],
    selection: UnitSelection[UnitCode.n_lulu],
    clothes: UnitFullImage[UnitCode.n_lulu],
    tagList: [],
    otherVersion: [ UnitCode.lulu, UnitCode.s_lulu, UnitCode.w_lulu, UnitCode.c_lulu, UnitCode.p_lulu ],
    initHP: 3817.6,
    initATK: 923.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.n_lulu],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}