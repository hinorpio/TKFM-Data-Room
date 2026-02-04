import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10196: Unit = {
    ID: "10196",
    metaCode: "b_lana",
    prefix: {
        [Locale.tc]: "花嫁",
        [Locale.sc]: "花嫁",
        [Locale.en]: "Bride",
        [Locale.jp]: "花嫁",
        [Locale.kr]: "새신부"
    },
    name: {
        [Locale.tc]: "蘭兒",
        [Locale.sc]: "兰儿",
        [Locale.en]: "Lana",
        [Locale.jp]: "ラン",
        [Locale.kr]: "란"
    },
    abbreviation: {
        [Locale.tc]: [ "花矮", "花蘭" ],
        [Locale.sc]: [ "花矮", "花兰" ],
        [Locale.en]: [ "B.Lana" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신란" ]
    },
    background: {
        [Locale.tc]: `愛是肌肉！愛是力量！愛得越深，力量也就越強！對矮人來說最浪漫的事，就是在比拚力氣的對決中輸給異性，然後被他直接了當的表達愛意。所以，面對凱薩毫不掩飾慾望，坦然對待自己的態度，蘭兒感到十分認可，甚至可以說是非常欣賞。而這也是為什麼，他不會輕易把凱薩身邊的位置讓給其他人的原因！為了參加這次的天下第一新娘武鬥會，蘭兒穿上了這身特製的婚紗。因為要方便行動所以把白紗改短，因為要讓大家都能明白幸福的重量所以把捧花改重！蘭兒的目標很明確，就是用自己的愛打倒其他的候選人，成為世界第一強的新娘！\n\n『結婚會帶給人們力量的傳聞是真的呢，我拿著捧花的時候能感到手部的肌肉正在成長…！』`,
        [Locale.sc]: `爱是肌肉！爱是力量！爱得越深，力量也就越强！对矮人来说最浪漫的事，就是在比拚力气的对决中输给异性，然后被他直接了当的表达爱意。所以，面对凯萨毫不掩饰慾望，坦然对待自己的态度，兰儿感到十分认可，甚至可以说是非常欣赏。而这也是为什麽，他不会轻易把凯萨身边的位置让给其他人的原因！为了参加这次的天下第一新娘武斗会，兰儿穿上了这身特製的婚纱。因为要方便行动所以把白纱改短，因为要让大家都能明白幸福的重量所以把捧花改重！兰儿的目标很明确，就是用自己的爱打倒其他的候选人，成为世界第一强的新娘！\n\n『虽然看起来好像没有表现得特别高兴，但就算是我，多少也会期待自己成为新娘的那一天喔。』`,
        [Locale.en]: `Love is muscle! Love is power! The deeper the love, the greater the strength! For dwarves, the most romantic thing is to lose a test of strength against the opposite sex, then have him express his love straightforwardly and directly. That's why Lana feels great approval—even admiration—toward Caesar's unabashed desire and his honest way of treating her. And that's exactly why she won't easily give up her spot by Caesar's side to anyone else! To participate in this World's Strongest Bride Martial Arts Tournament, Lana donned this specially made wedding dress. The white veil was shortened for ease of movement, and the bouquet was made heavier so everyone could understand the weight of happiness! Lana's goal is crystal clear: use her own love to defeat all the other candidates and become the world's strongest bride!\n\n"The rumor that marriage gives people strength is true... When I hold this bouquet, I can feel the muscles in my hands literally growing...!"`,
        [Locale.jp]: `愛とは筋肉！愛とは力！愛が深まるほど、その力も強くなる！小人にとって最もロマンチックな出来事とは、力比べの勝負で異性に敗れ、その相手から率直に愛を告げられることである。そのため、欲望を隠さず自分に正直に向き合うシーザーをランは受け入れた。もはや深く賞賛していると言ってもいい。そしてそれこそが、ランがシーザーの隣の座を、そう簡単に他人へ譲ろうとしない理由でもある。天下一花嫁武道会に出場するため、ランはこの特製ウェディングドレスを身に包んだ。動きやすさを重視してベールは短くし、幸せの「重さ」を皆に知ってもらうために、ブーケはあえて重く作られている。ランの目的は明確である。自らの愛の力で他の候補者たちを打ち倒し、世界最強の花嫁となること！\n\n『結婚が力を与えるっていうけど、あれって本当だったのね。こうしてブーケを持ってると腕の筋肉がメキメキと育っていくのがわかるわ……！』`,
        [Locale.kr]: `사랑은 곧 근육! 사랑은 곧 힘! 사랑이 깊을수록 힘 또한 강해지는 법! 난쟁이에게 가장 낭만적인 일이란 바로, 힘 겨루기에서 이성에게 패배한 뒤 그에게 직접적인 사랑 고백을 받는 것이다. 그렇기에 욕망을 숨기지 않고 자신을 솔직하게 마주하는 시저의 태도를 본 그녀는 깊은 유대감을 느끼고 심지어 동경의 감정마저 느낀다. 이것이 바로 그녀가 쉽게 시저의 옆자리를 내어주지 않으려는 가장 큰 이유이기도 하다! 이번 천하제일 신부 대회에 참가하기 위해 란은 이 특제 웨딩드레스를 착용했다. 움직이기 편하도록 드레스 길이를 짧게 수선했고, 모두에게 행복의 무게를 실감하게 해 주고자 부케의 중량을 훨씬 무겁게 개조했다! 란의 목표는 명확하다. 바로 자신의 사랑으로 다른 후보들을 쓰러뜨리고, 세계에서 가장 강한 신부가 되는 것!\n\n『결혼이 힘을 준다는 소문은 진짜였어. 부케를 들고 있을 때 팔 근육이 성장하는 게 느껴져...!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/02/04",
    essence: UnitEssence[UnitCode.b_lana],
    thumbnail: UnitEssence[UnitCode.b_lana],
    selection: UnitSelection[UnitCode.b_lana],
    clothes: UnitFullImage[UnitCode.b_lana],
    tagList: [],
    otherVersion: [ UnitCode.lana, UnitCode.x_lana, UnitCode.ny_lana, UnitCode.o_lana ],
    initHP: 3358.4,
    initATK: 1100.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.b_lana],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}