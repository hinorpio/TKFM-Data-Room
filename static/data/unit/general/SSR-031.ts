import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10083: Unit = {
    ID: "10083",
    metaCode: "sakuya",
    prefix: {
        [Locale.tc]: "夢天堂店長",
        [Locale.sc]: "梦天堂店长",
        [Locale.en]: "Store Manager",
        [Locale.jp]: 'DP-TOY店長',
        [Locale.kr]: "DP-TOY 점장"
    },
    name: {
        [Locale.tc]: "咲野夢",
        [Locale.sc]: "咲野梦",
        [Locale.en]: "Sakuya Yume",
        [Locale.jp]: "咲野夢",
        [Locale.kr]: "사쿠야 유메"
    },
    abbreviation: {
        [Locale.tc]: [ "店長", "店" ],
        [Locale.sc]: [ "店長", "店" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `咲野夢雖然是剛踏入社會的新鮮人，但性經驗卻無人能比。由於天使臉蛋魔鬼身材，願意跟她發生關係的男人數量多不可數。在性愛方面一開始都會欲拒還迎，一旦被開啟了某個開關就會變成極其下流的痴女。充滿了服務精神的咲野夢即使在工作時候，也會適當的秀一下「福利」給男同事們一個沙必死。在2021年進入情趣夢天堂工作，卻在某天下班打掃店內環境的時候遇到了時空亂流而被傳送至凱薩的世界……異世界x現代情趣用品販售員的異想物語現在才剛剛開始！\n\n『太好了，人家做到了，這是異世界開店的第一步！』`,
        [Locale.sc]: `咲野梦虽然是刚踏入社会的新鲜人，但性经验却无人能比。由于天使脸蛋魔鬼身材，愿意跟她发生关系的男人数量多不可数。在性爱方面一开始都会欲拒还迎，一旦被开启了某个开关就会变成极其下流的痴女。充满了服务精神的咲野梦即使在工作时候，也会适当的秀一下「福利」给男同事们一个沙必死。在2021年进入情趣梦天堂工作，却在某天下班打扫店内环境的时候遇到了时空乱流而被传送至凯萨的世界……异世界x现代情趣用品贩售员的异想物语现在才刚刚开始！\n\n『太好了，人家做到了，这是异世界开店的第一步！』`,
        [Locale.en]: `Sakuya Yume may only have recently started out on her career path, but when it comes to sexual experience, her levels are already off the charts. Due to her angelic facial features and devilishly seductive figure, there's no end of men who want to get down and dirty with Sakuya. When it comes to sex, she's often reluctant at first, but once she's turned on, she becomes wild beyond belief. Always ready to serve, even during work hours, Sakuya is prepared to provide a few "special services" for her male colleagues. After joining the Dream Paradise team in 2021, when tidying up the store one day, she came across a mysterious portal and was suddenly transported to Archdemon Caesar's world. The great tale of the sex toy store employee thrust into a parallel world has only just begun!\n\n"Yeah! I did it! The first step towards opening up a store in a parallel world!"`,
        [Locale.jp]: `咲野夢は社会人になりたての新入社員だが、性経験において右に出る者はいないだろう。ベビーフェイス＆ダイナマイトボディで、彼女と関係を持ちたい男性は数知れず。セックスは最初こそあまり乗り気でない態度で挑むが、一度スイッチが入ればドスケベビッチに豹変する。サービス精神旺盛の咲野夢はたとえ仕事中でも、「サービス」を同僚の男たちに見せつけて喜ばせている。2021年にDream Paradise Toysに入社、ある日仕事終わりの掃除中に時空のひずみによってシーザーの世界へ飛ばされてしまう…異世界×現代アダルトグッズ販売員の異世界物語が今始まる！\n\n『やった～！異世界でお店を開く第一歩！』`,
        [Locale.kr]: `사쿠야 유메는 사회초년생이지만 성 경험은 그 누구보다도 많다. 천사 같은 얼굴과 육감적인 몸매를 지닌 그녀와 관계하고 싶어 하는 남자는 셀 수 없을 정도로 많다. 섹스에 관해, 그녀는 처음에는 별로 내키지 않아 하지만 한 번 스위치가 켜지면 180도 돌변한다. 서비스 정신이 투철한 사쿠야 유메는 일할 때조차 남자 동료들에게 「복지」를 제공할 준비가 되어있다. 2021년에 드림 파라다이스에 입사, 어느 날 퇴근 시간에 매장을 청소하다가 시공간 난기류를 만나 시저의 세계로 보내지게 되었다. 이세계x현대 성인용품 판매원의 기상천외한 이야기가 이제 막 시작됐다!\n\n『해냈어! 이세계 진출 입점으로의 첫걸음을 내딛었어!』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/12/01",
    essence: UnitEssence[UnitCode.sakuya],
    thumbnail: UnitEssence[UnitCode.sakuya],
    selection: UnitSelection[UnitCode.sakuya],
    clothes: UnitFullImage[UnitCode.sakuya],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}