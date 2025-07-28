import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10110: Unit = {
    ID: "10110",
    metaCode: "v_satan",
    prefix: {
        [Locale.tc]: "致命可可",
        [Locale.sc]: "致命可可",
        [Locale.en]: "Killer Cocoa",
        [Locale.jp]: "キラーココア",
        [Locale.kr]: "치명적인 코코아"
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: "撒旦",
        [Locale.en]: "Satan",
        [Locale.jp]: "サタン",
        [Locale.kr]: "사탄"
    },
    abbreviation: {
        [Locale.tc]: [ "可撒", "可旦" ],
        [Locale.sc]: [ "可撒", "可旦" ],
        [Locale.en]: [ "V.Satan" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "코사탄" ]
    },
    background: {
        [Locale.tc]: `愛情就只是掠奪與征服的美化說法而已，真正的魔族，就該在死亡與鮮血中展現彼此的愛意。不過，出乎意料的是，巧克力的味道，竟然和生命消亡時綻放的鮮血嘗起來一樣的甘甜。原來如此，當死亡與甜美合而為一時，不就產生值得奪取的價值了嗎？懷抱著這般心思，撒旦決定化身為魔王專屬的女僕，親自替心愛的『主人』狩獵最強、最致命的甜品……如果想收下她的贈禮，請千萬要小心，這塊巧克力可能會要了你的命！\n\n『比起砂糖，死亡才是最美味的調味料，你不這麼認為嗎~』`,
        [Locale.sc]: `爱情就只是掠夺与征服的美化说法而已，真正的魔族，就该在死亡与鲜血中展现彼此的爱意。不过，出乎意料的是，巧克力的味道，竟然和生命消亡时绽放的鲜血尝起来一样的甘甜。原来如此，当死亡与甜美合而为一时，不就产生值得夺取的价值了吗？怀抱着这般心思，撒旦决定化身为魔王专属的女仆，亲自替心爱的『主人』狩猎最强、最致命的甜品……如果想收下她的赠礼，请千万要小心，这块巧克力可能会要了你的命！\n\n『比起砂糖，死亡才是最美味的调味料，你不这么认为吗~』`,
        [Locale.en]: `Love is just another word for dominance and subjugation. Read demons show their love on the battlefield. So it's strange that, to Satan, chocolate tastes just as sweet as the blood of a fresh kill. So then... maybe chocolate has some value, after all? So, on that thought, Satan takes the part of Caesar's maid, dead-set on finding him the sweetest, deadliest chocolate known to demon-kind. And when we say deadliest, we aren't kidding. Satan's chocolate will kill you.\n\n"Two cups of sugar, hmm? I think I'll use BLOOD instead! KWAHAHAHA!!!"`,
        [Locale.jp]: `愛は掠奪と征服を美化した言い方であり、真の魔族は鮮血と死を以て愛を伝えるべきである。そして意外なことに、チョコレートの味は命の消える刹那に味わえる鮮血と同じ甘さだという。ふむ。つまり死と甘さが交わったときにこそ、最高の価値が生まれるのではないだろうか。そんな考えを持ったサタンは、魔王の専属メイドとなり、愛する『ご主人様』に代わって、最強の致命的なスイーツ狩りに……だが彼女のプレゼントには気を付けた方がいい。一つのチョコレートがあなたの命を奪うかもしれない。\n\n『砂糖よりも死こそが最高の調味料よ。そう思わない？』`,
        [Locale.kr]: `사랑은 약탈과 정복의 미화된 말일뿐, 진정한 마족이라면 죽음과 피로 사랑을 말해야 하는 법. 하지만 뜻밖에도 초콜릿의 맛은, 끊어진 생명의 신선한 피처럼 무척이나 달콤했다. 그렇군. 죽음과 달콤함이 합쳐졌을 때야 비로소 약탈할 가치가 생기는 법인가? 이런 마음을 품게 된 사탄은 마왕의 전속 하녀로서 사랑하는 『주인』을 대신해 가장 강하고 치명적인 디저트를 사냥하기에 이르는데… 만약 그녀의 선물을 받고 싶다면 조심하시기를. 그 초콜릿 때문에 목숨을 잃을 수도 있으니까!\n\n『설탕 따위보다, 죽음이 가장 달콤한 조미료가 되어줄 수 있다는 생각은 안 해봤어?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/02/08",
    essence: UnitEssence[UnitCode.v_satan],
    thumbnail: UnitEssence[UnitCode.v_satan],
    selection: UnitSelection[UnitCode.v_satan],
    clothes: UnitFullImage[UnitCode.v_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.e_satan, UnitCode.b_satan, UnitCode.s_satan, UnitCode.h_satan ],
    initHP: 5249.6,
    initATK: 672,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.v_satan],
    skillSet: []
}