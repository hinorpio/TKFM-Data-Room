import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10081: Unit = {
    ID: "10081",
    metaCode: "b_iblis",
    prefix: {
        [Locale.tc]: "花嫁",
        [Locale.sc]: "花嫁",
        [Locale.en]: "Bride",
        [Locale.jp]: "花嫁",
        [Locale.kr]: "새신부"
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: "伊布力斯",
        [Locale.en]: "Iblis",
        [Locale.jp]: "イブリース",
        [Locale.kr]: "이블리스"
    },
    abbreviation: {
        [Locale.tc]: [ "花伊" ],
        [Locale.sc]: [ "花伊" ],
        [Locale.en]: [ "B.Iblis" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `作為身分高貴的魔王，就應該要使用與其地位相襯的事物。衣服、鞋履、首飾和化妝品自然就不用說了。婚紗，也一定要穿上最好，最能襯托高貴氣質的那件才行。因為只有這樣，才能夠滿足伊布力斯的少女心對於婚姻的美好憧憬。雖然她愛的那個人總是隨心所欲、既不成熟也不浪漫，有時甚至還讓人忍不住氣得跺腳。但每一次，只要一聽見那個人的稱讚，以及他對自己毫不掩飾的強烈索求，伊布力斯便會難以止住心中不斷湧出的甜蜜。\n\n『唯有身分高貴、英明睿智的我，才能勝任凱薩正室的位置。』`,
        [Locale.sc]: `作为身分高贵的魔王，就应该要使用与其地位相衬的事物。衣服、鞋履、首饰和化妆品自然就不用说了。婚纱，也一定要穿上最好，最能衬托高贵气质的那件才行。因为只有这样，才能够满足伊布力斯的少女心对于婚姻的美好憧憬。虽然她爱的那个人总是随心所欲、既不成熟也不浪漫，有时甚至还让人忍不住气得跺脚。但每一次，只要一听见那个人的称赞，以及他对自己毫不掩饰的强烈索求，伊布力斯便会难以止住心中不断涌出的甜蜜。\n\n『唯有身分高贵、英明睿智的我，才能胜任凯萨正室的位置。』`,
        [Locale.en]: `An aristocrat like Iblis deserves a wedding ceremony fit for an archdemon. Clothing, cuisine, decor... it all needs to be the best of the best! That's the only way a wedding ceremony could live up to the one Iblis has been dreaming of since her childhood. It might be though, that, since the one she loves is a reckless cretin without a romantic bone in his body. But just when she thinks she might be able to forget about him, it just takes one backhanded compliment to send her on another trip over the moon, belly full of butterflies.\n\n"Caesar has picked me, not that conwoman Ba'al or that whore Satan. Me, an Iblis, the proper choice."`,
        [Locale.jp]: `高貴な魔王であるからには、身分相応のものを身に着けるべきである。服や靴、アクセサリーや化粧品はもちろんのこと、ウェディングドレスも最高の一着を着なければならない。そうでなければ結婚にあこがれるイブリースの乙女心を満足させられないからだ。彼女の愛する人物はわがままで、ロマンの欠片もなく、時には彼女を怒らせることもあるが、その人物から誉め言葉を貰ったり、わがままな要求をされればされるほど、イブリースの心には甘い気持ちが芽生えてくるのだ。\n\n『魔王シーザーの正室は、気高く聡明なこの私が一番ふさわしいってわけよ』`,
        [Locale.kr]: `고귀한 마왕의 신분이라면 그 지위에 걸맞아야 하는 법. 옷, 신발, 장신구, 화장품은 말할 것도 없고 웨딩드레스 역시 가장 최고의 것으로 입어야만 그 입지를 당당하게 드러낼 수 있다. ...라고 생각한 이블리스. 이 정도 조건만 충족되더라도 결혼에 대한 이블리스의 어린 환상을 만족시켜줄 수 있다. 늘 제멋대로에 로맨스도 없고 온갖 사고란 사고는 다 치고 다니는 그 사내. 하지만 그의 입으로부터 나온 한 마디의 칭찬이나 말도 안되는 무리한 요구들은 이블리스의 연정을 끊임없이 싹트게 한다.\n\n『고귀하고 총명한 데다 슬기롭기까지 한 나만이 시저의 정실이 될 수 있어.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/02/16",
    essence: UnitEssence[UnitCode.b_iblis],
    thumbnail: UnitEssence[UnitCode.b_iblis],
    selection: UnitSelection[UnitCode.b_iblis],
    clothes: UnitFullImage[UnitCode.b_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.s_iblis, UnitCode.v_iblis, UnitCode.x_iblis, UnitCode.r_iblis ],
    puzzle: [],
    skillSet: []
}