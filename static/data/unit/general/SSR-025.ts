import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10060: Unit = {
    ID: "10060",
    metaCode: "hm_fiora",
    prefix: {
        [Locale.tc]: "豐收聖女",
        [Locale.sc]: "丰收圣女",
        [Locale.en]: "Harvest Maid",
        [Locale.jp]: "豊作聖女",
        [Locale.kr]: "풍작의 성녀"
    },
    name: {
        [Locale.tc]: "菲歐菈",
        [Locale.sc]: "菲欧菈",
        [Locale.en]: "Fiora",
        [Locale.jp]: "フィオラ",
        [Locale.kr]: "피오라"
    },
    abbreviation: {
        [Locale.tc]: [ "聖女" ],
        [Locale.sc]: [ "圣女" ],
        [Locale.en]: [ "Hm.Fiora" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "풍오라" ]
    },
    background: {
        [Locale.tc]: `原主神教團的神官長，在凱薩的刻意誤導下，變成性愛之神的信徒。原本以為會變成扭曲的性愛奴隸，但是沒想到不但沒被信仰之神遺棄，依舊能施展神蹟，而且最後更自己悟出了一番道理，從信仰跟性愛享樂中取得了平衡。在信眾的邀約下，菲歐拉將在豐收祭上跳起讚揚豐收的舞蹈，以及參與之後的"同樂活動"。\n\n『用此舞讚揚讓萬物豐饒收成的性愛之神！』`,
        [Locale.sc]: `原主神教团的神官长，在凯萨的刻意误导下，变成性爱之神的信徒。原本以为会变成扭曲的性爱奴隶，但是没想到不但没被信仰之神遗弃，依旧能施展神迹，而且最后更自己悟出了一番道理，从信仰跟性爱享乐中取得了平衡。在信众的邀约下，菲欧拉将在丰收祭上跳起赞扬丰收的舞蹈，以及参与之后的"同乐活动"。\n\n『用此舞赞扬让万物丰饶收成的性爱之神！ 』`,
        [Locale.en]: `Originally a high priestess for the Excelsis Deo, as part of Caesar's harem Fiora learned to worship at the Church of Cock instead. Afraid she would fall entirely to lust, Fiora was surprised when Caesar didn't force her to dispose of her faith in The Lord. Now, Fiora has learned to enjoy a healthy balance of both sex and religion. And now, on the Harvest Festival, Fiora dances together with everyone and even enjoys the nightly 'group activities'.\n\n"We dance for the God of Sex, to thank him for this bountiful harvest!"`,
        [Locale.jp]: `主神教団の神官長であったフィオラだが、シーザーに騙され、セックス神の信徒となった。誰もがセックス奴隷に堕ちると思っていたが、崇拝していた神に捨てられることなく、いまだに神の奇跡を起こすことができる。そして最終的には信仰とセックスの快楽のバランスを見出した。信徒の誘いの元、フィオラは収穫祭で豊作祈願の舞を踊り、「交流イベント」に参加することとなった。\n\n『この舞を、豊作をもたらすセックスの神に捧げます！』`,
        [Locale.kr]: `주신교단의 대신관이었던 피오라, 시저에게 속아 섹스 신의 신자가 되고 말았다. 성노예로 전락해버린 그녀, 뜻밖에도 여전히 신의 기적을 일으켜내는데. 신앙과 섹스 간의 밸런스를 완전히 깨달은 피오라. 신도들의 요청으로 풍작 축제에서 춤도 추고 축제 후의 애프터 파티도 참가하게 되었다.\n\n『저의 춤사위로 풍작을 내려주신 섹스 신께 감사를 표합니다!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2021/09/08",
    essence: UnitEssence[UnitCode.hm_fiora],
    thumbnail: UnitEssence[UnitCode.hm_fiora],
    selection: UnitSelection[UnitCode.hm_fiora],
    clothes: UnitFullImage[UnitCode.hm_fiora],
    tagList: [],
    otherVersion: [ UnitCode.fiora, UnitCode.s_fiora, UnitCode.ny_fiora ],
    puzzle: [],
    outfits: [],
    skillSet: []
}