import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10130: Unit = {
    ID: "10130",
    metaCode: "salina",
    prefix: {
        [Locale.tc]: "聖夜喧嘩",
        [Locale.sc]: "圣夜喧哗",
        [Locale.en]: "Holy Night Rouser",
        [Locale.jp]: "聖夜の喧嘩",
        [Locale.kr]: "우당탕탕 X-mas"
    },
    name: {
        [Locale.tc]: "莎琳娜",
        [Locale.sc]: "莎琳娜",
        [Locale.en]: "Salina",
        [Locale.jp]: "サリナ",
        [Locale.kr]: "셀리나"
    },
    abbreviation: {
        [Locale.tc]: [ "8+9", "黑道" ],
        [Locale.sc]: [ "8+9", "黑道" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `莎琳娜來自傳統的聖誕（黑道）家族，身為聖誕老人的養女兼繼承人，她從小就接受了嚴苛的培訓。長大後為了傳播聖誕精神（摧毀反對組織），莎琳娜長期出國遊學（搶地盤），打下了一塊又一塊的地盤，把聖誕精神傳播到每個地方。然而，當她結束搶地盤之旅，凱旋歸來時，卻發現自己純真可愛的青梅竹馬希依，變成了身穿暴露服裝、連思想都變得放蕩無比的性誕馴鹿。難以接受青梅竹馬劇烈變化的莎琳娜，為了摧毀扭曲的性誕節，決定強忍住心中的痛苦，向性誕勢力發起進攻！\n\n『把不長眼的傢伙除掉，大家就會變開心，這就是聖誕精神！』`,
        [Locale.sc]: `莎琳娜来自传统的圣诞（黑道）家族，身为圣诞老人的养女兼继承人，她从小就接受了严苛的培训。长大后为了传播圣诞精神（摧毁反对组织），莎琳娜长期出国游学（抢地盘），打下了一块又一块的地盘，把圣诞精神传播到每个地方。然而，当她结束抢地盘之旅，凯旋归来时，却发现自己纯真可爱的青梅竹马希依，变成了身穿暴露服装、连思想都变得放荡无比的性诞驯鹿。难以接受青梅竹马剧烈变化的莎琳娜，为了摧毁扭曲的性诞节，决定强忍住心中的痛苦，向性诞势力发起进攻！\n\n『把不长眼的家伙除掉，大家就会变开心，这就是圣诞精神！』`,
        [Locale.en]: `Salina comes from a traditional (underworld) Christmas family. As the adopted daughter and heiress of Santa Claus himself, she has been rigorously trained since childhood. To spread the Christmas spirit (ie. destroy her rival competitors) once she came of age, Salina went to study (ie. land-grab) abroad, conquering territory one after another and converting them to the ways of Christmas cheer. However, when she returned triumphantly from her conquests, she found her innocent childhood sweetheart Evie wearing a sexy reindeer outfit and behaving in an uninhibited manner. Unable to accept her loved one's drastic transformation, Salina decides to hold back the heartache and launch an attack against the corrupting forces of Sexmas!\n\n"Only the ousting of these short-sighted buffoons will bring us happiness again. ‘Tis the way of Christmas!"`,
        [Locale.jp]: `サリナは伝統的なクリスマス（ヤクザ）の家族に生まれ、サンタクロースの養女兼継承人である。そのため幼いころから厳しく育てられてきた。大きくなってからはクリスマスの精神（敵対組織撲滅）を広めるために、遠くの国へ長期留学（シマ争い）に行き、クリスマスの精神を広めていった。しかし彼女は「留学」が終わり戻って来ると、自分の幼馴染である純粋なリリーが、セクシーな格好をし淫らなことばかり考えるセックスマスのトナカイになってしまったことを知る。その激しい変化を受け入れることができないサリナは、セックスマスを破滅させるために、心の苦痛を押し殺して敵対勢力に攻め込むのであった。\n\n『調子に乗ってる奴を始末すれば、みんなが喜ぶだろう？それこそがクリスマスの精神ってやつだ！』`,
        [Locale.kr]: `셀리나는 전통 크리스마스(깡패) 가문 출신으로 산타클로스의 수양딸이자 상속녀인 셀리나는 어릴 때부터 혹독한 훈련을 받았다. 어른이 된 후 크리스마스 정신을 전파하기 위해(반대 조직을 궤멸시키기 위해) 셀리나는 오랜 시간 떠돌아다니며 자신을 수양(땅 따먹기)했고 터를 잡은 뒤 크리스마스 정신을 곳곳에 전파하기 시작했다. 하지만 그녀가 땅 따먹기를 마치고 시저가 돌아왔을 때, 자신의 귀여운 죽마고우 릴리가 노출이 심한 옷을 입고 생각마저 방탕해진 섹스마스 순록이 되어버린 것을 발견하게 된다. 죽마고우의 이런 변화를 받아들일 수 없었던 셀리나, 그녀는 뒤틀린 크리스마스를 무너뜨리기 위해 마음속의 고통을 억누른 채 섹스마스 세력을 향해 진격하기로 결심한다!\n\n『눈에 밟히지 않는 녀석까지 전부 제거해버리면, 모두가 즐거울 수 있어. 이것이 바로 진정한 크리스마스 정신이야!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.salina],
    thumbnail: UnitEssence[UnitCode.salina],
    selection: UnitSelection[UnitCode.salina],
    clothes: UnitFullImage[UnitCode.salina],
    tagList: [],
    otherVersion: [],
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_1 ],
    skillSet: []
}