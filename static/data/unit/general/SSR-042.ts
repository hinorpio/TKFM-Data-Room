import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10019: Unit = {
    ID: "10019",
    metaCode: "ayane",
    prefix: {
        [Locale.tc]: "現代勇者",
        [Locale.sc]: "现代勇者",
        [Locale.en]: "Modern Hero",
        [Locale.jp]: "現代の勇者",
        [Locale.kr]: "현대 용자"
    },
    name: {
        [Locale.tc]: "神田綾音",
        [Locale.sc]: "神田绫音",
        [Locale.en]: "Ayane",
        [Locale.jp]: "神田綾音",
        [Locale.kr]: "칸다 아야네"
    },
    abbreviation: {
        [Locale.tc]: [ "現勇", "普勇", "公車" ],
        [Locale.sc]: [ "现勇", "普勇", "公车" ],
        [Locale.en]: [ "OG.Ayane" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `被法斯帝國勇者召喚儀式召喚過來的「現代勇者」。生活在高樓大廈林立，車水馬龍的現代勇者，本身只是普通的女大學生，不過在被召喚後獲得了加護技能。在加護技能的效果下，獲得了超人一樣的身體能力以及學習力，只要學習就能嫻熟的使用各種魔法和武器。因為不喜法斯帝國的對待他國的高壓姿態，原本不想成為勇者，不過最後還是無法坐視無辜的人民被捲入戰爭而參戰。由於來自和平的世界，最開始並不擅長戰鬥，但是在召喚勇者中是最具成長潛力的人。\n\n『本來不想用這招的…偶爾也會想這麼說。』`,
        [Locale.sc]: `被法斯帝国勇者召唤仪式召唤过来的「现代勇者」。生活在高楼大厦林立，车水马龙的现代勇者，本身只是普通的女大学生，不过在被召唤后获得了加护技能。在加护技能的效果下，获得了超人一样的身体能力以及学习力，只要学习就能娴熟的使用各种魔法和武器。因为不喜法斯帝国的对待他国的高压姿态，原本不想成为勇者，不过最后还是无法坐视无辜的人民被捲入战争而参战。由于来自和平的世界，最开始并不擅长战斗，但是在召唤勇者中是最具成长潜力的人。\n\n『本来不想用这招的…偶尔也会想这麽说。』`,
        [Locale.en]: `A modern "hero" summoned by the Phasi Emperor to aid his failing empire. Just a regular college girl living in a regular-old apartment building, Ayane wasn't expecting to warp through time and space into some other world. She especially wasn't expecting to get these weird powers, either! These powers have given her a crazy-strong body and sharper mind, allowing Ayane to learn new magic spells and wield deadly weapons. Disgusted by the Phasi emperor, Ayane was originally going to wash her hands of all this "hero" nonsense, but after seeing how innocent people were being used and abused by the empire, she chooses to fight against it. Even though she comes from a peaceful world, and isn't adept in fighting, it soon becomes apparent to Ayane and those around her that she's been blessed with truly impressive potential.\n\n"'You feeling lucky, punk?' Heh, I've been wanting to use that line."`,
        [Locale.jp]: `フォス帝国の勇者召喚儀式で召喚された「現代の勇者」。高層ビルが立ち並び、車が走る現代に生きている勇者。ただの大学生ではあるが、召喚されたときに加護スキルを得た。加護スキルの効果で、超人並みの身体能力と学習能力を手に入れたため、学ぶだけで様々な魔法や武器を使えるようになる。フォス帝国の他国に対する高圧的な態度が気に入らず、勇者にはなりたくないと考えていたが、罪のない民が戦争に巻き込まれている現状を無視できず、戦いに身を投じていく。平和な世界から来たため戦闘は不得意であったが、召喚された勇者の中ではとびぬけた潜在能力を持っていたのだ。\n\n『この技は使いたくなかったけど......なんてたまにはこんなセリフ言ってみたかったの』`,
        [Locale.kr]: `파스제국 용자 소환술로 소환된 「현대의 용자」. 빌딩 숲과 자동차 행렬이 길게 이어진 도시에서 살던 평범한 대학생이었으나 파스제국으로 소환된 후 '가호의 스킬'을 지니게 되었다. 가호의 스킬로 초인의 운동 신경과 학습 능력을 지니게 되어 한번 배운 것만으로도 각종 마법과 무기를 익숙하게 다를 수 있다. 다른 나라에 대한 파스제국의 고압적인 태도를 싫어하여 용자가 되지 않으려고 했으나, 무고한 백성들이 전쟁에 휘말려 참전하는 것을 차마 못 본체할 수 없었다. 평화로운 세계에서 지내왔던 탓에 전투에 대한 지식이 전무하였으나 사실은 소환된 용자들 중 가장 큰 잠재력을 지니고 있다.\n\n『이 기술 만큼은 쓰고 싶지 않았는데... 나도 이런 대사 한번 해보고 싶었어.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/03/16",
    essence: UnitEssence[UnitCode.ayane],
    thumbnail: UnitEssence[UnitCode.ayane],
    selection: UnitSelection[UnitCode.ayane],
    clothes: UnitFullImage[UnitCode.ayane],
    tagList: [
        TagID.ELEMENT_LIGHT,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_DAMAGE_OUTPUT,
    ],
    otherVersion: [ UnitCode.s_ayane, UnitCode.h_ayane, UnitCode.bg_ayane, UnitCode.bu_ayane ],
    initHP: 3417.6,
    initATK: 936,
    puzzle: [],
    outfits: [],
    skillSet: []
}