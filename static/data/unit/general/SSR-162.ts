import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10191: Unit = {
    ID: "10191",
    metaCode: "fifth_nana",
    prefix: {
        [Locale.tc]: "魔王",
        [Locale.sc]: "魔王",
        [Locale.en]: "Archdemon",
        [Locale.jp]: "魔王",
        [Locale.kr]: "마왕"
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: "娜娜",
        [Locale.en]: "Nana",
        [Locale.jp]: "ナナ",
        [Locale.kr]: "나나"
    },
    abbreviation: {
        [Locale.tc]: [ "喪娜", "黑娜", "娜娜大人" ],
        [Locale.sc]: [ "丧娜", "黑娜", "娜娜大人" ],
        [Locale.en]: [ "5.Nana" ],
        [Locale.jp]: [ "ナナ様" ],
        [Locale.kr]: [ "마나나" ]
    },
    background: {
        [Locale.tc]: `在凱薩死後，娜娜就彷彿變了一個人一樣。無法接受愛人已死的她，陷入了瘋狂狀態，腦中只剩下「復活凱薩」這一個念頭。在她決意犧牲一切的執著之下，她意外繼承了凱薩的力量，並且成為了新一任的魔王。擁有了力量的她更加堅定地走在自己的道路上，認為自己的所作所為皆是正確的，其他人都不應該來阻止。無視周遭的哀號和勸告，「魔王凱薩」今天也走在遵從慾望的不歸路上。\n\n『本喵一定會完成那個『約定』…一定會喵。』`,
        [Locale.sc]: `在凯萨死后，娜娜就彷彿变了一个人一样。无法接受爱人已死的她，陷入了疯狂状态，脑中只剩下「復活凯萨」这一个念头。在她决意牺牲一切的执着之下，她意外继承了凯萨的力量，并且成为了新一任的魔王。拥有了力量的她更加坚定地走在自己的道路上，认为自己的所作所为皆是正确的，其他人都不应该来阻止。无视周遭的哀号和劝告，「魔王凯萨」今天也走在遵从慾望的不归路上。\n\n『本喵一定会完成那个『约定』…一定会喵。』`,
        [Locale.en]: `After Caesar dies, Nana becomes like a completely different person. Unable to accept that the love of her life is gone, she descends into madness, her mind fixated on a single thought: "revive Caesar". Driven by her resolve to sacrifice everything, she unexpectedly inherits Caesar's power and rises as the new Archdemon. With that power, she grows even more unshakable on her chosen path, convinced that everything she does is right and that no one has any business stopping her. Ignoring the screams and pleas around her, "Archdemon Caesar" marches ever forward on this irredeemable road of pure desire.\n\n"I will undoubtedly fulfill the 'promise'... I will not falter, meow."`,
        [Locale.jp]: `シーザーの死後、まるで別人のように変わってしまったナナ。愛する者の死を受け入れられず、「シーザーを復活させる」ことにだけに狂ったように執着し始める。すべてを犠牲にする決意の果てに、彼女はシーザーの力を継承して、新たな魔王となった。強い力を手に入れた彼女は、自らの行いが正しく、何人たりとも邪魔していいわけがないという思いを胸に、我が道を歩み続ける。周囲の悲鳴や忠告を無視し、「魔王シーザー」は今日も後戻りできない欲望の道を突き進む。\n\n『何が何でも『約束』を果たしてみせるにゃ……絶対に』`,
        [Locale.kr]: `시저의 죽음 후, 나나는 완전히 다른 사람이 된 듯했다. 가장 사랑하던 이를 잃은 현실을 받아들이지 못한 그녀는 미치고 말았고, 머릿속엔 「시저의 부활」만 남게 되었다. 그 집착을 위해 모든 걸 바치려던 순간, 그녀는 우연처럼 시저의 힘을 이어받아 새로운  마왕이 되었다. 힘을 얻은 그녀는 자신의 선택이 모두 옳다고 굳게 믿었고, 누구도 자신을 막아서는 안 된다고 생각했다. 주변의 울부짖음도, 충고도 모두 외면한 채, 「마왕 시저」는 오늘도 욕망이 이끄는 길에서 돌아올 수 없는 길을 걷고 있다.\n\n『난 반드시 그 『약속』을... 지킬 거라냥...』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/12/10",
    essence: UnitEssence[UnitCode.fifth_nana],
    thumbnail: UnitEssence[UnitCode.fifth_nana],
    selection: UnitSelection[UnitCode.fifth_nana],
    clothes: UnitFullImage[UnitCode.fifth_nana],
    tagList: [],
    otherVersion: [ UnitCode.nana, UnitCode.s_nana, UnitCode.c1_nana, UnitCode.o_nana, UnitCode.a_nana ],
    initHP: 3494.4,
    initATK: 1057.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.fifth_nana],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}