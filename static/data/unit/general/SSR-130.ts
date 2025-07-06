import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10175: Unit = {
    ID: "10175",
    metaCode: "x_ichika",
    prefix: {
        [Locale.tc]: "翩舞雪花",
        [Locale.sc]: "翩舞雪花",
        [Locale.en]: "Snowflake",
        [Locale.jp]: "舞い散る雪の花",
        [Locale.kr]: "춤추는 눈꽃"
    },
    name: {
        [Locale.tc]: "初華",
        [Locale.sc]: "初华",
        [Locale.en]: "Ichika",
        [Locale.jp]: "初華",
        [Locale.kr]: "이치카"
    },
    abbreviation: {
        [Locale.tc]: [ "雪人" ],
        [Locale.sc]: [ "雪人" ],
        [Locale.en]: [ "X.Ichika", "C.Ichika" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "크치카" ]
    },
    background: {
        [Locale.tc]: `隱居於深山之中的雪姬，常年避開人群生活，只有在冬天來臨之際才會出現在他人面前。這是因為初華知道，一年之中也只有在這個季節，自己無意間釋放的寒氣才不會影響到別人，對他人造成困擾。也因如此，所以每當冬天到來，初華都會陷入和平時的文靜模樣相差甚遠的興奮狀態，到處堆雪人、打雪仗、或者是在自己蓋好的巨大冰雪城堡裡唱歌。在來到魔王城居住後也不例外，今年的初華也同樣望著緩緩落下的細雪，興起了玩樂之心。於皚雪中翩翩起舞，興高采烈的雪姬這次也打算好好享受冬日雪景。\n\n『滾啊滾～滾啊滾～滾出圓圓大大的身體，再捏出貓耳和眼睛，這樣一個可愛的雪人就完成了～♪』`,
        [Locale.sc]: `隐居于深山之中的雪姬，常年避开人群生活，只有在冬天来临之际才会出现在他人面前。这是因为初华知道，一年之中也只有在这个季节，自己无意间释放的寒气才不会影响到别人，对他人造成困扰。也因如此，所以每当冬天到来，初华都会陷入和平时的文静模样相差甚远的兴奋状态，到处堆雪人、打雪仗、或者是在自己盖好的巨大冰雪城堡里唱歌。在来到魔王城居住后也不例外，今年的初华也同样望着缓缓落下的细雪，兴起了玩乐之心。于皑雪中翩翩起舞，兴高采烈的雪姬这次也打算好好享受冬日雪景。\n\n『滚啊滚～滚啊滚～滚出圆圆大大的身体，再捏出猫耳和眼睛，这样一个可爱的雪人就完成了～♪』`,
        [Locale.en]: `The Yuki-Hime, living in seclusion deep within the mountains, only ventures out when winter arrives, avoiding human contact for the rest of the year. Ichika knows that only during this season can her unintentional chill be released without troubling others. Thus, when winter comes, she transforms from her usual serene self into a whirlwind of excitement, building snowmen, engaging in snowball fights, or singing within the grand ice palace she creates. After moving to Caesar's Palace, this winter is no different. Ichika gazes at the softly falling snow, her playful spirit ignited. Dancing joyfully in the snow, the Yuki-Hime planned to fully embrace the winter wonderland.\n\n"Roll, roll, roll your balls into a big body! Then some cat ears, then some eyes, like a cute snowman~♪"`,
        [Locale.jp]: `深山に隠れ住む雪姫は、長年人里を離れて暮らしてきた。人前に姿を見せるのは冬が訪れた時だけだ。その理由は、この季節だけが自分の放つ寒気が他人に影響を及ぼさず、迷惑をかけることもないからだ。そのためか、彼女は冬が来ると普段の物静かな様子から一変してはしゃぎ出し、雪だるま作りや雪合戦に興じ、自作の巨大な氷の城で歌を歌うのだ。魔王城に住むようになった今年も例外ではない。初華は舞い降りる雪を眺めていると、遊び心が芽生えていく。真っ白な雪の中で舞い踊る雪姫は、今年も冬の情景を心ゆくまで楽しむつもりのようだ。\n\n『ころころ～ころころ～大きく丸い体を作って猫耳と目をつけたら、可愛い雪だるまの完成です～♪』`,
        [Locale.kr]: `깊은 산속에 은거 중인 유키히메, 이치카. 그녀는 오랜 세월 사람들의 눈을 피해 살아왔으며, 겨울이 찾아오는 순간에만 다른 이들 앞에 모습을 드러내곤 했다. 1년 중 이 계절에만 무의식적으로 뿜어내는 냉기가 타인에게 영향을 끼치지 않을 수 있다는 걸 알고 있었기 때문이다. 이 때문에 겨울이 다가올 때마다 이치카는 평소의 조용한 모습과는 사뭇 다른 흥분 상태에 빠지곤 한다. 눈사람을 만들고, 눈싸움을 하며, 혹은 자신이 지은 거대한 얼음성에서 노래를 부르기도 했다. 마왕성에 거주하게 된 이후로도 마찬가지였다. 이치카는 올해도 천천히 내리는 눈송이를 바라보며 놀고 싶은 충동에 불이 붙기 시작했다. 하얀 눈밭 위에서 춤을 추듯 움직이는 이치카, 이번 겨울에도 설경을 만끽하기로 마음먹기에 이른다.\n\n『굴려라~ 굴려~ 둥글고 커다란 몸통을 만든 뒤~ 고양이 귀와 눈을 붙이면~ 귀여운 눈사람 완성~♪』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2024/12/11",
    essence: UnitEssence[UnitCode.x_ichika],
    thumbnail: UnitEssence[UnitCode.x_ichika],
    selection: UnitSelection[UnitCode.x_ichika],
    clothes: UnitFullImage[UnitCode.x_ichika],
    tagList: [],
    otherVersion: [ UnitCode.ichika ],
    initHP: 4713.598173477928,
    initATK: 747.1997337594844,
    puzzle: [ PuzzleCode.EVENT_2024_XMAS_1 ],
    outfits: [],
    skillSet: []
}