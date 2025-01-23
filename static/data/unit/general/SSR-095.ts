import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10131: Unit = {
    ID: "10131",
    metaCode: "inase",
    prefix: {
        [Locale.tc]: "時御者",
        [Locale.sc]: "时御者",
        [Locale.en]: "Timekeeper",
        [Locale.jp]: "時を越える者",
        [Locale.kr]: "시간을 다스리는 자"
    },
    name: {
        [Locale.tc]: "伊娜絲",
        [Locale.sc]: "伊娜丝",
        [Locale.en]: "Inase",
        [Locale.jp]: "イネース",
        [Locale.kr]: "이나스"
    },
    abbreviation: {
        [Locale.tc]: [ "時御", "轉筆" ],
        [Locale.sc]: [ "时御", "转笔" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `熱愛鑽研古文明、散發書卷氣息的學者。過去曾為了復活死去的愛人，解開原慾之神艾洛斯的封印，爾後成為了與他擁有著親密關係的眷族。在和艾洛斯追捕逃脫目標的過程中意外被捲入時空裂縫，來到了一處未曾聽聞過的奇妙世界。儘管有些慌張，但面對一個全新的世界，伊娜絲心中對於考古的熱情反倒壓過了這股不安。\n\n『能夠學習不同世界的知識與文化讓我感到非常興奮，雖然這個世界的某些習俗好像有點奇怪……』`,
        [Locale.sc]: `热爱钻研古文明、散发书卷气息的学者。过去曾为了复活死去的爱人，解开原欲之神艾洛斯的封印，尔后成为了与他拥有着亲密关系的眷族。在和艾洛斯追捕逃脱目标的过程中意外被卷入时空裂缝，来到了一处未曾听闻过的奇妙世界。尽管有些慌张，但面对一个全新的世界，伊娜丝心中对于考古的热情反倒压过了这股不安。\n\n『能够学习不同世界的知识与文化让我感到非常兴奋，虽然这个世界的某些习俗好像有点奇怪……』`,
        [Locale.en]: `As a scholar who adores researching ancient civilizations, Inase exudes a bookish atmosphere. She once broke the seal of Eros, the god of sexual desire, to resurrect her dead lover, after which she became the god's concubine and developed a close relationship with him. While chasing a runaway target with Eros, she was accidentally drawn into a rift in time and space, dropping into a wondrous world she had never known before. Though slightly panicked, the prospect of exploring a new world ignited Inase's passion for archeology and helped ease her disquiet.\n\n"My legs quiver at the thought of all the knowledge left to study among our worlds, even though this one's customs are quite strange..."`,
        [Locale.jp]: `古代文明に情熱を注ぐ、知性にあふれた学者。亡くなった婚約者を蘇らせるために、欲望の神であるエロスの封印を解く。その結果エロスの眷属となって親密な関係を築くようになった。エロスと凶悪犯を追っている際に時空の裂け目にのみこまれてしまい、見知らぬ奇妙な世界に飛ばされてしまう。不安はあったものの、見たことがない世界にやってきたイネースは、不安を上回るほどの学者魂を発揮したのであった。\n\n『異世界の知識や文化を学べるなんてワクワクしてくる。この世界にはちょっと変な習わしもあるけど……』`,
        [Locale.kr]: `지적인 면모가 뚜렷한 고대 문명을 깊이 연구하는 학자. 과거 죽은 애인을 되살리기 위해 원욕의 신 에로스의 봉인을 풀고 그와 친밀한 관계를 맺어 권족이 되었다. 에로스와 탈출을 하는 도중 뜻밖에 시공간의 균열에 휘말리게 되었고 듣지도 보지도 못한 어느 기묘한 세계에 당도하게 된다. 당황스러운 상황 속에서도 새로운 세계를 마주한 이나스는 마음속의 고고학에 대한 열정이 오히려 그녀의 불안감을 억눌러주는 것을 느낀다.\n\n『다양한 세계의 지식과 문화를 배울 수 있어 무척 흥분 돼. 비록 이 세계의 어떤 풍습은 조금 이상한 것 같지만...』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/11/15",
    essence: UnitEssence[UnitCode.inase],
    thumbnail: UnitEssence[UnitCode.inase],
    selection: UnitSelection[UnitCode.inase],
    clothes: UnitFullImage[UnitCode.inase],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}