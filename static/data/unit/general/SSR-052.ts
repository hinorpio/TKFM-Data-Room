import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10092: Unit = {
    ID: "10092",
    metaCode: "s_aridya",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "阿爾蒂雅",
        [Locale.sc]: "阿尔蒂雅",
        [Locale.en]: "Aridya",
        [Locale.jp]: "アルティア",
        [Locale.kr]: "아르티아"
    },
    abbreviation: {
        [Locale.tc]: [ "夏蘿", "夏夢", "瘋狗浪" ],
        [Locale.sc]: [ "夏萝", "夏梦", "疯狗浪" ],
        [Locale.en]: [ "S.Aridya" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `如果說，永遠睡不飽是食夢貘一族永遠無法擺脫的詛咒。那麼，追求更好的睡眠品質就是阿爾蒂雅的畢生追求。雖然以前就曾聽說在海上漂著的感覺很舒服，但因為太麻煩，所以阿爾蒂雅一直都沒有去嘗試。直到某天，當她醒來的時候，卻發現自己被換上了泳裝，身旁還躺了一隻看起來非常適合當床的充氣海豚。雖然很想回去，但是因為太麻煩了，所以阿爾蒂雅決定，好好的享受這得來容易的海上漂流之旅。\n\n『姆嗯…泳裝？這種衣服和人家原本穿的沒什麼差別吧……』`,
        [Locale.sc]: `如果说，永远睡不饱是食梦貘一族永远无法摆脱的诅咒。那么，追求更好的睡眠品质就是阿尔蒂雅的毕生追求。虽然以前就曾听说在海上漂着的感觉很舒服，但因为太麻烦，所以阿尔蒂雅一直都没有去尝试。直到某天，当她醒来的时候，却发现自己被换上了泳装，身旁还躺了一只看起来非常适合当床的充气海豚。虽然很想回去，但是因为太麻烦了，所以阿尔蒂雅决定，好好的享受这得来容易的海上漂流之旅。\n\n『姆嗯…泳装？这种衣服和人家原本穿的没什么差别吧……』`,
        [Locale.en]: `It's said that an unending and unfulfillable desire for sleep is a dreameater's lifelong curse. As such, Aridya has spent her entire life striving for better quality slumber. She'd heard there was no better feeling during summer than dozing off on the ocean waves but had always thought it too troublesome to try for herself. Then one day, Aridya awakes lying on an inflatable dolphin and decked in a bathing suit. Despite a strong desire to get back to dry land, the drowsy dreameater decides to first catch a few Z's under the cool ocean breeze...\n\n"Hngh... a bathing suit? It looks pretty much the same as what I always wear..."`,
        [Locale.jp]: `永遠の寝不足が夢喰い族の運命だとしたら。より良い質の睡眠を求めることがアルティアの生涯の夢である。アルティアは海に浮かぶと気持ちがいいと聞いたが、面倒くさがりな彼女は試したことがなかった。ある日目を覚ますとアルティアは水着を着ていた。そしてベッドにピッタリなイルカ型の浮き輪に寝そべっていたのだ。陸へ戻りたいと思ったが面倒なため、彼女はこの漂流の旅を楽しむことに決めたのである。\n\n『んん......水着？あたちの普段着と変わらないよ......』`,
        [Locale.kr]: `영원한 수면 부족은 드림이터가 짊어져야 할 벗어날 수 없는 저주. 따라서 더 나은 수면 품질을 좇는 것이야말로 아르티아에게 있어 일생일대의 목표. 바다 위에서 잠을 자면 극강의 편안함을 느낄 수 있다고 들은 아르티아였지만 언제나 게으른 그녀에게 있어 시도할 엄두조차 나지 않는 일이기도 했다. 어느날 깨어났을 때 수영복을 입고 돌고래 튜브위에 누워있는 자신을 발견하게 된 아르티아. 육지로 돌아가고 싶은 마음도 그녀의 귀차니즘을 이길 순 없었기에... 결국 그대로 바다 위를 표류하기로 결정한 아르티아였다.\n\n『흠냐... 수영복? 평소에 입고 있던 거랑 별반 다를 것도 없는데...』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/06/08",
    essence: UnitEssence[UnitCode.s_aridya],
    thumbnail: UnitEssence[UnitCode.s_aridya],
    selection: UnitSelection[UnitCode.s_aridya],
    clothes: UnitFullImage[UnitCode.s_aridya],
    tagList: [],
    otherVersion: [ UnitCode.aridya, UnitCode.x_aridya ],
    puzzle: [ PuzzleCode.EVENT_2022_SUMMER_4 ],
    skillSet: []
}