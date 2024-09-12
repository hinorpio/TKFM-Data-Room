import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10128: Unit = {
    ID: "10128",
    metaCode: "x_iblis",
    prefix: {
        [Locale.tc]: "性誕戀歌",
        [Locale.sc]: "性诞恋歌",
        [Locale.en]: "Snowy Caroler",
        [Locale.jp]: "性誕祭の恋歌",
        [Locale.kr]: "섹스마스 연가"
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: "伊布力斯",
        [Locale.en]: "Iblis",
        [Locale.jp]: "イブリース",
        [Locale.kr]: "이블리스"
    },
    abbreviation: {
        [Locale.tc]: [ "誕伊", "王妃" ],
        [Locale.sc]: [ "诞伊", "王妃" ],
        [Locale.en]: [ "X.Iblis", "C.Iblis" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `性誕節，與戀人共結連理、享受性愛歡愉的美好節日。雖然這個節日的習俗聽起來都非常奇怪，但為了和自己心愛的那個他來場完美的性誕約會。伊布力斯選擇邀請作為性誕節馴鹿的希依，來幫助她學習性誕節的文化。沒想到，卻因此意外被捲入了聖誕與性誕的對抗中。魔王的權威不容質疑，為了擺平聖誕反抗軍，順利推動自己的約會計畫，伊布力斯決定親自出手，和希依合作，一起為了性誕而戰！\n\n『這下誰都別想打擾本小姐的性誕節計畫。』`,
        [Locale.sc]: `性诞节，与恋人共结连理、享受性爱欢愉的美好节日。虽然这个节日的习俗听起来都非常奇怪，但为了和自己心爱的那个他来场完美的性诞约会。伊布力斯选择邀请作为性诞节驯鹿的希依，来帮助她学习性诞节的文化。没想到，却因此意外被卷入了圣诞与性诞的对抗中。魔王的权威不容质疑，为了摆平圣诞反抗军，顺利推动自己的约会计画，伊布力斯决定亲自出手，和希依合作，一起为了性诞而战！\n\n『这下谁都别想打扰本小姐的性诞节计画。』`,
        [Locale.en]: `Sexmas, what a wonderful holiday to tie the knot with one's lover and enjoy the pleasantries of debaucherous sex! Although the customs of this holiday may sound slightly strange, it is all about having a perfect sex-filled date with your significant other. Iblis chose to invite Evie, a Sexmas reindeer, to help her learn about the cultural norms involved in this exciting festival. Shockingly, though, she becomes unintentionally embroiled in a heated confrontation between Christmas and Sexmas. An Archdemon's authority cannot be questioned! And so, to deal with the Christmas rebels and allow her date plans to run smoothly, Iblis decides to get personally involved and cooperate with Evie to fight in the name of Sexmas!\n\n"You better not dare interrupt my Sexmas plans."`,
        [Locale.jp]: `セックスマスは、恋人と繋がって性愛の喜びに耽る美しい日。よく考えればおかしい習慣だが、自分の愛する彼のために完璧なデートを計画する。イブリースはセックスマスのトナカイであるリリーを招いて、セックスマスの文化を学ばせた。しかし、とある事件がきっかけでクリスマスとセックスマスの抗争に巻き込まれたのであった。魔王の権威に疑う余地はない。クリスマス反乱軍を撲滅し、自らのデート計画を成功させるために、イブリースはリリーと協力して、抗争に身を投じるのである！\n\n『誰にも私のセックスマス計画を邪魔させないわ』`,
        [Locale.kr]: `섹스마스, 연인과 함께 어울리며 성적인 즐거움을 누리는 아름다운 명절. 비록 이 명절의 풍습이 이상하게 들리겠지만, 자신이 사랑하는 대상과 완벽한 섹스마스 데이트를 즐기기 위해 이 자리에 왔다. 이블리스는 섹스마스 순록 릴리를 초대해 섹스마스의 문화를 학습하게 되는데. 뜻밖에도 크리스마스와 섹스마스 간의 충돌에 휘말리고 말았다. 마왕의 권위로 크리스마스 저항군을 진압하고 자신의 데이트 계획을 순조롭게 추진하기 위해. 이블리스는 직접 릴리와 합심하여 섹스마스를 위해 싸우기로 결심하게 된다!\n\n『어느 누구도 이 몸의 섹스마스 계획을 방해할 수 없다.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.x_iblis],
    thumbnail: UnitEssence[UnitCode.x_iblis],
    selection: UnitSelection[UnitCode.x_iblis],
    clothes: UnitFullImage[UnitCode.x_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.b_iblis, UnitCode.s_iblis, UnitCode.v_iblis, UnitCode.r_iblis ],
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_2 ],
    skillSet: []
}