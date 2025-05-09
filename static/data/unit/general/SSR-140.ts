import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10168: Unit = {
    ID: "10168",
    metaCode: "eunice",
    prefix: {
        [Locale.tc]: "啦啦隊長",
        [Locale.sc]: "啦啦队长",
        [Locale.en]: "Cheerleader Captain",
        [Locale.jp]: "チアのキャプテン",
        [Locale.kr]: "치어리더장"
    },
    name: {
        [Locale.tc]: "尤妮思",
        [Locale.sc]: "尤妮思",
        [Locale.en]: "Eunice",
        [Locale.jp]: "ユニス",
        [Locale.kr]: "유니스"
    },
    abbreviation: {
        [Locale.tc]: [ "魷魚絲", "尤", "拉尤" ],
        [Locale.sc]: [ "鱿鱼丝", "尤", "拉尤" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `尤妮思是一名熱愛應援的啦啦隊長，擁有高人氣的她，不僅能掌握高難度的舞技，更是眾人口中的幸運女神。據說只要是被她應援的隊伍，都會獲得運氣的眷顧，在賽場上戰無不勝。但很少人知道的是，其實尤妮思本人的運氣竟然糟糕到了極點。大量不幸的遭遇讓她變得十分迷信，甚至從可疑的算命師身上購買許多「據說」可以改運的幸運物。然而，即使生活中時常伴隨著不幸與危險，尤妮思依舊能在觀眾面前展露最棒的笑容。因為對她而言，用熱情應援替大家注入勇氣和力量，就是她最喜歡的事情。\n\n『雖然運氣不是很好，但應援的事就交給我這個啦啦隊長吧！』`,
        [Locale.sc]: `尤妮思是一名热爱应援的啦啦队长，拥有高人气的她，不仅能掌握高难度的舞技，更是众人口中的幸运女神。据说只要是被她应援的队伍，都会获得运气的眷顾，在赛场上战无不胜。但很少人知道的是，其实尤妮思本人的运气竟然糟糕到了极点。大量不幸的遭遇让她变得十分迷信，甚至从可疑的算命师身上购买许多「据说」可以改运的幸运物。然而，即使生活中时常伴随着不幸与危险，尤妮思依旧能在观众面前展露最棒的笑容。因为对她而言，用热情应援替大家注入勇气和力量，就是她最喜欢的事情。\n\n『虽然运气不是很好，但应援的事就交给我这个啦啦队长吧！』`,
        [Locale.en]: `Eunice is a cheerleading captain whose passion is rallying the crowd. With her sky-high popularity, she does not just nail jaw-dropping dance moves, she is also known far and wide as "Lady Luck". Rumor has it that any team she cheers for gets blessed with a stroke of fortune, making them unstoppable on the battlefield. However, few people know that Eunice herself has luck so rotten it is almost legendary. A string of misfortunes has turned her into a total superstition junkie, even to the point of buying shady so-called "lucky charms" from sketchy fortune-tellers. Yet, despite a life peppered with mishaps and close calls, she still manages to flash her brightest smile for the crowd. To her, there is nothing more incredible than firing up the audience with courage and energy through her passionate cheers.\n\n"Though luck hasn't been on our side, let me handle cheerleader duties!"`,
        [Locale.jp]: `ユニスは心から応援を愛するチアリーダーのキャプテン。高い人気を誇る彼女は、難易度の高いダンスパフォーマンスもこなすだけではなく、みんなから幸運の女神として慕われている。彼女に応援されれば、そのチームには幸運が訪れ、試合では無敵になると言われているのだ。だが実のところ、ユニス本人は驚くほどの超不運である。これまで不幸な出来事に遭遇してきたため、今ではかなりの迷信家となり、怪しげな占い師から運気が上がる"らしい"開運グッズを山ほど買い集めている。しかしユニスはどんな不幸や危険に見舞われようと、ステージに立てばいつだって最高の笑顔を見せてくれる。なぜなら情熱たっぷりの応援で、みんなに勇気と力を届けることこそが、彼女の幸せだからだ。\n\n『運は良くないけど、応援はこのチアリーダーのキャプテンに任せてください！』`,
        [Locale.kr]: `유니스는 응원을 사랑하는 치어리더장으로, 높은 인기를 자랑하며 고난도의 안무도 완벽히 소화해내는 것은 물론, 사람들 사이에서는 행운의 여신이라고 불리기도 한다. 그녀의 응원을 받은 팀은 반드시 행운의 축복을 받아, 경기장에서 승리를 거머쥔다고 한다. 하지만 사실 그녀는 믿기지 않을 정도로 운이 지독하게 없다는 사실을 아는 이는 거의 없다. 수많은 불행을 겪으면서 그녀는 점점 미신을 믿게 되었고, 결국 수상한 점술사로부터 「운이 좋아질 수도 있다」는 각종 부적과 물건들을 사들이기까지 했다. 물론 일상에선 여전히 불운과 위험이 끊이질 않았지만, 유니스는 언제나 밝은 미소로 관객들을 맞이한다. 왜냐하면 사람들에게 용기와 힘을 불어넣어주는 일이 그녀가 가장 좋아하는 것이기 때문이다.\n\n『운이 좋은 건 아니지만, 그래도 응원이라면 바로 저, 치어리더장에게 맡겨만 주세요!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/04/09",
    essence: UnitEssence[UnitCode.eunice],
    thumbnail: UnitEssence[UnitCode.eunice],
    selection: UnitSelection[UnitCode.eunice],
    clothes: UnitFullImage[UnitCode.eunice],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    outfits: [],
    skillSet: []
}