import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10153: Unit = {
    ID: "10153",
    metaCode: "h_satan",
    prefix: {
        [Locale.tc]: "純真殺意",
        [Locale.sc]: "纯真杀意",
        [Locale.en]: "Genuine Murderess",
        [Locale.jp]: "ピュアな殺意",
        [Locale.kr]: "순수한 살의"
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: "撒旦",
        [Locale.en]: "Satan",
        [Locale.jp]: "サタン",
        [Locale.kr]: "사탄"
    },
    abbreviation: {
        [Locale.tc]: [ "幼撒", "幼旦", "小旦", "幼撒旦", "萬撒", "萬旦" ],
        [Locale.sc]: [ "幼撒", "幼旦", "小旦", "幼撒旦", "万撒", "万旦" ],
        [Locale.en]: [ "H.Satan" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "농탄" ]
    },
    background: {
        [Locale.tc]: `在萬聖的夜裡，宛若死神的少女揮舞著與身型不符的巨鐮，收割眼前所有被她盯上的甜食。若是不知情的人，或許還會覺得這幅光景有些可愛。但無庸置疑，這名看似文靜且無害的少女，就是那個號稱「會走路的戰爭」的魔王撒旦。被奇怪的道具給影響，撒旦回到了尚未癲狂的時期。這時期的她雖然好戰但不嗜血，依然殘酷卻不失理性。與現在的撒旦反差太大，讓人不禁懷疑起這少女究竟經歷了什麼事情才會變得那般瘋狂。儘管比起成熟的她已經內斂許多，但藏於那平靜表面之下的本性依舊兇猛。與她相處時請務必注意自身安危。\n\n『我很可愛…？嘖…真噁心，果然你這垃圾還是去死吧。』`,
        [Locale.sc]: `在万圣的夜里，宛若死神的少女挥舞着与身型不符的巨镰，收割眼前所有被她盯上的甜食。若是不知情的人，或许还会觉得这幅光景有些可爱。但无庸置疑，这名看似文静且无害的少女，就是那个号称「会走路的战争」的魔王撒旦。被奇怪的道具给影响，撒旦回到了尚未癫狂的时期。这时期的她虽然好战但不嗜血，依然残酷却不失理性。与现在的撒旦反差太大，让人不禁怀疑起这少女究竟经历了什麽事情才会变得那般疯狂。儘管比起成熟的她已经内敛许多，但藏于那平静表面之下的本性依旧凶猛。与她相处时请务必注意自身安危。\n\n『我很可爱…？啧…真噁心，果然你这垃圾还是去死吧。』`,
        [Locale.en]: `As the night of Halloween descends upon the realm, a woman carrying a massive scythe walks the land like the Grim Reaper, harvesting any and all sweets that cross her path.For the ignorant soul, her presence might be a deceivingly adorable sight.This quiet female might seem harmless even... but truth be told, she is Archdemon Satan—the personification of war itself.Influenced by a strange object, Satan returns to a time before madness struck her.Back then, she was already an adept warrior, though her insatiable lust for bloodshed had not yet begun.Indeed, she is practically unrecognizable, which makes one wonder... What is it that eventually made her go mad?Though she has already shown enough restraint compared to her mature self, underneath her peaceful demeanor lies a cruel and violent nature.For your own safety, be extremely careful when interacting with her.\n\n"Cute? Me...? Tch... Disgusting filth, do me a favor and drop dead."`,
        [Locale.jp]: `ハロウィンの夜のこと。死神のような少女が、自分の体格に不釣り合いな巨大な鎌を振り回し、目に映るすべてのスイーツを収穫していた。何も知らない人が見れば、この光景を少し可愛らしく感じるかもしれない。しかし、この静かで無害に見える少女こそが「歩く戦争」と称される魔王サタンである。彼女はおかしな道具の影響を受け、狂気に陥る前の姿に戻ったのだ。この頃の彼女は、好戦的ではあるものの血を好むことはなく、冷酷でありながらも理性はしっかり保っていた。現在のサタンとのギャップがあまりに大きく、この少女がいったいどんな経験を経てあのような狂気に至ったのか、考えずにはいられない。成長したサタンに比べると、狂気がだいぶ抑えられているが、その穏やかな表情の裏に隠れた本性は依然として獰猛だ。彼女と接するときは、必ず身の安全に注意を払うことを忘れないでほしい。\n\n『私が可愛い？チッ…気持ちわる。やっぱりあんたみたいなゴミには死んでもらうわ』`,
        [Locale.kr]: `할로윈의 밤, 소녀는 자신의 체형에 맞지 않는 거대한 낫을 휘두르며, 눈앞의 모든 디저트를 거둬들이듯 수확한다. 잘 알지 못하는 사람이 이 광경을 보면 귀엽다고 느낄지도 모른다. 하지만 이 조용하면서도 순수해 보이는 소녀의 정체는 바로 「걸어다니는 전쟁」이라 불리는 마왕 사탄. 이상한 도구의 영향을 받아 사탄은 아직 광기에 물들지 않았던 시절로 되돌아갔다. 이 시기의 그녀는 여전히 전투를 즐겼지만, 피를 갈망하진 않았고, 여전히 잔혹하긴 해도 나름 이성적인 면모도 갖추고 있었다. 지금의 사탄과는 사뭇 다른 모습에, 사람들은 그녀에게 도대체 무슨 일이 있었던 건지, 무엇이 그녀를 광기로 몰아넣었는지 궁금해하지 않을 수 없다. 지금보다는 훨씬 얌전해 보이지만, 그러한 겉모습 아래 여전히 흉폭한 본성을 감추고 있다. 그녀와 함께할 때는 반드시 본인의 안전에 유의해야만 할 것이다.\n\n『내가 귀엽다고...? 쳇... 역겹군. 역시 너 같은 쓰레기는 그냥 죽이는 게 낫겠어.』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/10/16",
    essence: UnitEssence[UnitCode.h_satan],
    thumbnail: UnitEssence[UnitCode.h_satan],
    selection: UnitSelection[UnitCode.h_satan],
    clothes: UnitFullImage[UnitCode.h_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.e_satan, UnitCode.b_satan, UnitCode.v_satan, UnitCode.s_satan ],
    initHP: 3359.999970904092,
    initATK: 1049.5969493639243,
    puzzle: [],
    outfits: [],
    skillSet: []
}