import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10090: Unit = {
    ID: "10090",
    metaCode: "s_milae",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "聖米勒",
        [Locale.sc]: "圣米勒",
        [Locale.en]: "Milae",
        [Locale.jp]: "聖女ミラ",
        [Locale.kr]: "성녀 밀레"
    },
    abbreviation: {
        [Locale.tc]: [ "夏天", "墮天" ],
        [Locale.sc]: [ "夏天", "堕天" ],
        [Locale.en]: [ "S.Milae" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수밀레" ]
    },
    background: {
        [Locale.tc]: `大天使長聖米勒曾經是主神麾下最為堅定的利刃，是天使一族的驕傲。然而，在被凱薩洗腦調教過後，那個嚴以律己、清心寡慾，一心只為主神而戰的天使已經不在了。取而代之，是將性愛之神的教義奉為圭臬，將精液視作聖水、將淫言穢語視作禱告，與過去截然不同，卻同樣有著堅定信仰的性愛天使。作為性愛之神使徒的聖米勒，心裡已經構思出了一個如何將性愛的歡愉傳遞給迷茫眾生的偉大計畫。\n\n『就讓吾代替吾主，為汝帶來歡愉與淫樂吧♡』`,
        [Locale.sc]: `大天使长圣米勒曾经是主神麾下最为坚定的利刃，是天使一族的骄傲。然而，在被凯萨洗脑调教过后，那个严以律己、清心寡欲，一心只为主神而战的天使已经不在了。取而代之，是将性爱之神的教义奉为圭臬，将精液视作圣水、将淫言秽语视作祷告，与过去截然不同，却同样有着坚定信仰的性爱天使。作为性爱之神使徒的圣米勒，心里已经构思出了一个如何将性爱的欢愉传递给迷茫众生的伟大计画。\n\n『就让吾代替吾主，为汝带来欢愉与淫乐吧♡』`,
        [Locale.en]: `Saint Milae used to be a great general from the Sky Realm, the pride of the angels. But now, after being taken in and disciplined by Caesar, she's changed her ways and devoted herself to the Church of Sex. The Tome of Sex is her new Bible, semen her holy water, dirty talk her hymns. Now, Saint Milae's main concern is how to convert the Demon Realm's lost lambs into her disciples.\n\n"Accept His Horniness into your loins!"`,
        [Locale.jp]: `大天使長聖女ミラはかつて主神のゆるぎない利剣であり、天使一族の驕れる存在だった。そんな端然で誠実、ひたすらに神のために戦う天使が、シーザーに洗脳調教を受け変貌した。セックスの神に忠誠を誓い、精液を聖水とし、淫らな言葉で祈りをささげる、セックス天使となってしまった。セックスの神の篤き信者となった聖女ミラは、セックスの歓びを民に布教する大きな計画を立てたのであった。\n\n『私が主に代わり、汝らに淫欲の快楽を教示しましょう♡』`,
        [Locale.kr]: `천사장 밀레는 주신 휘하의 가장 강력한 검이며, 천사들의 자랑이었다. 하지만 시저에게 세뇌당한 후, 강직한 심성과 청빈한 성격, 그리고 오직 주신만을 위해 검을 빼들던 그녀는 사라져 버렸다. 세뇌 후 그녀는 오직 섹스 신을 섬기며 그 교리는 곧 그녀의 의지가 되었다. 새로워진 그녀에게 정액은 성수였고 음란한 말은 진실한 기도였다. 과거와는 사뭇 달랐지만, 그녀는 여전히 섹스 신의 천사로서 자신의 신앙을 굳게 관철한다. 섹스 신의 사도인 밀레는 그분의 뜻을 더 많은 이들에게 알리려는 원대한 계획을 세우게 되는데......\n\n『그분을 대신하여, 제가 여러분께 환희와 쾌락을 안겨드리죠♡.』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/06/08",
    essence: UnitEssence[UnitCode.s_milae],
    thumbnail: UnitEssence[UnitCode.s_milae],
    selection: UnitSelection[UnitCode.s_milae],
    clothes: UnitFullImage[UnitCode.s_milae],
    tagList: [],
    otherVersion: [ UnitCode.milae ],
    initHP: 0,
    initATK: 0,
    puzzle: [ PuzzleCode.EVENT_2022_SUMMER_2 ],
    outfits: [],
    skillSet: []
}