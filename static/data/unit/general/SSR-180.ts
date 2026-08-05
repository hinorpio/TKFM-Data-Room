import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10209: Unit = {
    ID: "10209",
    metaCode: "w_noma",
    prefix: {
        [Locale.tc]: "月下狂狼",
        [Locale.sc]: "月下狂狼",
        [Locale.en]: "Moonlit Wolfgirl",
        [Locale.jp]: "月下の狂狼",
        [Locale.kr]: "달빛 아래의 광랑"
    },
    name: {
        [Locale.tc]: "諾蕾蒂",
        [Locale.sc]: "诺蕾蒂",
        [Locale.en]: "Noma",
        [Locale.jp]: "ノルディ",
        [Locale.kr]: "놀라이티"
    },
    abbreviation: {
        [Locale.tc]: [ "紅犬" ],
        [Locale.sc]: [ "红犬" ],
        [Locale.en]: [ "W.Noma" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "달놀라" ]
    },
    background: {
        [Locale.tc]: `在某魔王的暗算之下，諾蕾蒂身上長出了獸人的特徵。不只外表出現變化，就連五感也都變得更加敏銳。無論是遠處烤肉的香味，還是旁人的竊竊私語，她都能清楚的捕捉到。對於身體機能增強這點諾蕾蒂還算是滿意，可是這副身體卻有個沒辦法無視的缺點。就是這對毛茸茸的耳朵和蓬鬆的尾巴根本與自己的形象不合，但這種事情貌似只有她本人這樣覺得。儘管不斷強調這是狼的耳朵和尾巴，看待小動物的柔和眼光和誇獎可愛的稱讚聲還是不斷傳來。就算帶上兜帽想要隱藏，卻還是因為耳朵被蓋住的躁動感而在帽子上多開了兩個洞。原本脾氣就稱不上好的諾蕾蒂，因此變得比平常更加狂野。在拍打餵食的時候，務必小心自身的安全。\n\n『你眼瞎了嗎！這明明就是狼耳朵和狼尾巴，你再喊我一次乖狗狗我就讓你知道狼爪抓在身上的感覺是什麼！』`,
        [Locale.sc]: `在某魔王的暗算之下，诺蕾蒂身上长出了兽人的特徵。不只外表出现变化，就连五感也都变得更加敏锐。无论是远处烤肉的香味，还是旁人的窃窃私语，她都能清楚的捕捉到。对于身体机能增强这点诺蕾蒂还算是满意，可是这副身体却有个没办法无视的缺点。就是这对毛茸茸的耳朵和蓬松的尾巴根本与自己的形象不合，但这种事情貌似只有她本人这样觉得。儘管不断强调这是狼的耳朵和尾巴，看待小动物的柔和眼光和夸奖可爱的称赞声还是不断传来。就算带上兜帽想要隐藏，却还是因为耳朵被盖住的躁动感而在帽子上多开了两个洞。原本脾气就称不上好的诺蕾蒂，因此变得比平常更加狂野。在拍打餵食的时候，务必小心自身的安全。\n\n『你眼瞎了吗！这明明就是狼耳朵和狼尾巴，你再喊我一次乖狗狗我就让你知道狼爪抓在身上的感觉是什么！』`,
        [Locale.en]: `Under the schemes of a certain conniving Archdemon, Noma develops beastfolk characteristics on her body. Not only does her appearance change, but even her five senses become much sharper. Whether it is the aroma of barbecue in the distance or the whispers of those around her, nothing escapes her attention. She is reasonably satisfied with this enhancement of her physical functions, but this body has a flaw that she cannot ignore... This pair of fluffy ears and bushy tail do not match her image at all, though she seems to be the only one who thinks so. Despite her constantly emphasizing that these are wolf ears and a wolf tail, gentle looks reserved for small animals and praises calling her cute continue to pour in. Even when she wears a hood to hide them, the irritating feeling of her ears being covered drives her to cut two holes in the hood anyway. Noma, whose temper was never tame to begin with, has thus become even wilder than before. Be sure to watch out for your own safety when attempting to pet and feed her.\n\n"Are you blind?! These are clearly wolf ears and a wolf tail! Call me a 'good doggy' one more time and I'll show you what it feels like to have wolf claws tearing into you!"`,
        [Locale.jp]: `とある魔王の陰謀により、ノルディの体に獣人の特徴が現れた。見た目が変わっただけでなく、五感もより鋭くなった。遠くで肉を焼く香りも、周りの人のささやき声も、はっきりと感じ取れるようになった。身体能力が向上したことについてはノルディも満足しているが、この体には無視できない欠点がある。このふわふわの耳ともこもこの尻尾が、自分のイメージに全く合わないということだ。だが、そう思っているのは彼女自身だけらしい。これは狼の耳と尻尾だと何度強調しても、小動物を見るような優しい視線や可愛いという褒め言葉を絶えず浴びせられる。フードを被って隠そうとしても、耳が覆われるむずがゆさに耐えられず、フードに二つの穴を開けることに。元々怒りっぽいノルディだが、そのせいでいつもよりさらに荒々しくなっている。頭を撫でて餌をやる際は、自身の安全に十分注意した方が良い。\n\n『目が腐ってるんじゃない？これは絶対に狼の耳と尻尾よ！もう一度『いい子』って言ったら、狼の爪で思い知らせてやるから！』`,
        [Locale.kr]: `어떤 마왕의 계략으로 인해 놀라이티의 몸에는 수인의 특징이 생겨나게 되었다. 겉모습뿐만 아니라 오감 또한 더욱 예민해졌다. 그녀는 멀리서 풍겨오는 고기 굽는 냄새는 물론, 주변 사람들의 속삭임까지도 선명하게 포착할 수 있었다. 신체 기능이 강화된 점은 놀라이티도 나름 만족했지만, 이 몸에는 무시할 수 없는 단점이 하나 있었다. 바로 이 털북숭이 귀와 복슬복슬한 꼬리가 자신의 이미지와 전혀 어울리지 않는다는 점이었는데, 그렇게 생각하는 건 아무래도 그녀 본인뿐인 듯했다. 늑대의 귀와 꼬리라고 아무리 강조해 봐도, 그저 작은 동물을 바라보듯 부드러운 시선과 귀엽다는 칭찬만 끊임없이 쏟아질 뿐이었다. 후드를 써서 어떻게든 가려보려 했지만, 귀가 짓눌리는 답답함을 참지 못하고 결국 모자에 구멍을 두 개나 뚫고 말았다. 원래도 성격이 그리 온순한 편은 아니었던 놀라이티는, 이 일로 인해 평소보다 훨씬 더 거칠고 사나워졌다. 그러니 쓰다듬거나 먹이를 줄 땐 반드시 안전에 유의하도록 하자.\n\n『눈 삐었어!? 이건 엄연히 늑대 귀랑 늑대 꼬리라고. 한 번만 더 날 개라고 부르면, 이 늑대 발톱 맛이 어떤지 뼈저리게 느끼게 해주지!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2026/08/05",
    essence: UnitEssence[UnitCode.w_noma],
    thumbnail: UnitEssence[UnitCode.w_noma],
    selection: UnitSelection[UnitCode.w_noma],
    clothes: UnitFullImage[UnitCode.w_noma],
    tagList: [],
    otherVersion: [ UnitCode.noma, UnitCode.s_noma ],
    initHP: 4299.2,
    initATK: 859.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.w_noma],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
