import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10167: Unit = {
    ID: "10167",
    metaCode: "c_noel",
    prefix: {
        [Locale.tc]: "躍動之星",
        [Locale.sc]: "跃动之星",
        [Locale.en]: "Star of Momentum",
        [Locale.jp]: "躍動のスター",
        [Locale.kr]: "도약의 별"
    },
    name: {
        [Locale.tc]: "黑白諾艾莉",
        [Locale.sc]: "黑白诺艾莉",
        [Locale.en]: "Noel",
        [Locale.jp]: "ノエル",
        [Locale.kr]: "노엘리"
    },
    abbreviation: {
        [Locale.tc]: [ "拉黑" ],
        [Locale.sc]: [ "拉黑" ],
        [Locale.en]: [ "C.Noel" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "도엘리" ]
    },
    background: {
        [Locale.tc]: `閃耀動人的超人氣偶像，黑白諾艾莉，今天也會用閃亮的身姿，演唱充滿愛與希望的歌曲！並且這次她將和最強的金牌教練——魔王凱薩聯手，化身為最熱情的啦啦隊員。然而誰也沒想到的是，那些備受喜愛的啦啦隊員似乎被壞人盯上了。不只人氣啦啦隊長尤妮思都被捲入其中，就連諾艾莉的啦啦隊搭檔星空奈奈美都變得怪怪的。盡管前方困難重重，但是諾艾莉的偶像之心是不會輕易被打敗的！她將會用超過百分百的熱情，和伙伴們一起突破所有阻礙，將勇氣與希望帶給所有人！\n\n『大家～啦啦隊的應援表演要開始囉～快跟著人家一起用力歡呼吧～！』`,
        [Locale.sc]: `闪耀动人的超人气偶像，黑白诺艾莉，今天也会用闪亮的身姿，演唱充满爱与希望的歌曲！并且这次她将和最强的金牌教练——魔王凯萨联手，化身为最热情的啦啦队员。然而谁也没想到的是，那些备受喜爱的啦啦队员似乎被坏人盯上了。不只人气啦啦队长尤妮思都被捲入其中，就连诺艾莉的啦啦队搭档星空奈奈美都变得怪怪的。尽管前方困难重重，但是诺艾莉的偶像之心是不会轻易被打败的！她将会用超过百分百的热情，和伙伴们一起突破所有阻碍，将勇气与希望带给所有人！\n\n『大家～啦啦队的应援表演要开始囉～快跟着人家一起用力欢呼吧～！』`,
        [Locale.en]: `The dazzling and ultra-popular idol, Noel, shines bright once again today! With her sparkling presence, she sings songs overflowing with love and hope! And this time, she is teaming up with the ultimate coach, Archdemon Caesar, to transform into the most passionate cheerleader ever! But no one could have predicted that these beloved cheerleaders would catch the eye of a shady and villainous presence. Not only has the fan-favorite cheer captain, Eunice, gotten tangled up in the mess, but even Noel's cheerleading partner, Nanami, is acting super weird lately. Despite the tough challenges ahead, Noel's idol spirit won't go down without a fight! With 101% pure passion, she joins forces with her teammates to smash through every obstacle and deliver courage and hope to everyone!\n\n"Alright, everybody~ The cheer squad's about to start~ Cheer along with me~!"`,
        [Locale.jp]: `キラキラ輝く超人気アイドル、モノクロのノエル。今日も煌めく姿で、愛と希望に満ちた歌を届けるのだ！そして今回は、なんと最強の金メダルコーチ──魔王シーザーとタッグを組み、情熱全開のチアリーダーとして大変身。しかし予期せぬことに、みんなに愛されていたチアリーダーが、何者かに目をつけられてしまう。人気チアリーダーのユニスが巻き込まれただけではなく、ノエルのパートナー星空ななみまで、様子がおかしくなっていく。こうして次々と困難が襲いかかるも、ノエルのアイドル魂は決して燃え尽きることはない！彼女は全力以上の情熱で、仲間たちと共に障害も乗り越え、勇気と希望を届けるのであった！\n\n『みんな〜チアガールの応援パフォーマンスが始まるよ〜一生懸命応援しようね〜！』`,
        [Locale.kr]: `반짝이며 무대를 수놓는 초인기 아이돌, 블랙앤화이트 노엘리. 오늘도 반짝이는 몸짓으로 사랑과 희망이 담긴 노래를 선사한다! 이번에는 최강의 코치——마왕 시저와 손을 잡고 가장 열정이 넘치는 치어리더로 거듭났다! 하지만 사랑받던 치어리더들이 나쁜 악당의 표적이 될 것이라곤 아무도 예상하지 못했다. 인기 치어리더장 유니스까지 사건에 휘말렸고, 노엘리의 파트너 나나미마저 이상하게 변해가기 시작했다. 비록 앞길엔 수많은 시련이 기다리고 있지만, 노엘리의 아이돌 정신은 그렇게나 쉽게 무너지지 않는다! 그녀는 100% 이상의 열정으로 동료들과 함께 모든 장애물을 뛰어넘어 용기와 희망을 모두에게 전할 것이다!\n\n『여러분~ 치어리더 공연 시작합니다~ 얼른 저와 함께 열심히 환호성을 질러보자구요~!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2025/04/09",
    essence: UnitEssence[UnitCode.c_noel],
    thumbnail: UnitEssence[UnitCode.c_noel],
    selection: UnitSelection[UnitCode.c_noel],
    clothes: UnitFullImage[UnitCode.c_noel],
    tagList: [],
    otherVersion: [ UnitCode.noel, UnitCode.s_noel, UnitCode.w_noel ],
    puzzle: [],
    outfits: [],
    skillSet: []
}