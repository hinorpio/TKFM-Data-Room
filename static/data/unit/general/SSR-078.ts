import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10115: Unit = {
    ID: "10115",
    metaCode: "m_britney",
    prefix: {
        [Locale.tc]: "魔法少女",
        [Locale.sc]: "魔法少女",
        [Locale.en]: "Magical Maiden",
        [Locale.jp]: "魔法少女",
        [Locale.kr]: "마법소녀"
    },
    name: {
        [Locale.tc]: "布蘭妮",
        [Locale.sc]: "布兰妮",
        [Locale.en]: "Britney",
        [Locale.jp]: "ブリトニー",
        [Locale.kr]: "브리트니"
    },
    abbreviation: {
        [Locale.tc]: [ "風軍", "魔軍" ],
        [Locale.sc]: [ "风军", "魔军" ],
        [Locale.en]: [ "M.Britney" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "마브리" ]
    },
    background: {
        [Locale.tc]: `為了阻止神秘的犯罪集團在邊境犯下罪行，布蘭妮隨軍前去平叛，卻意外碰上危機。情急之下，她握住D之一族古老的聖物，化身成魔法少女，成功將敵人全數驅逐。只不過，機智如她仍無法想到的是，成為魔法少女不只要身穿羞恥的暴露服裝，還要被迫念出奇怪又羞恥的台詞。倒楣的魔法少女布蘭妮必須和自己失魂落魄的夥伴朱諾安，可疑的吉祥物，以及不可靠的魔法少女前輩，一起對抗奇怪的變態犯罪集團。究竟，布蘭妮是否能夠成功打倒四處亂偷男人性器官的邪惡組織，將眾人的男根盡數解放呢？\n\n『溫柔自信，熱情洋溢☆閃亮的天才魔法少女布蘭妮，要代替正義懲罰你～☆』`,
        [Locale.sc]: `为了阻止神秘的犯罪集团在边境犯下罪行，布兰妮随军前去平叛，却意外碰上危机。情急之下，她握住D之一族古老的圣物，化身成魔法少女，成功将敌人全数驱逐。只不过，机智如她仍无法想到的是，成为魔法少女不只要身穿羞耻的暴露服装，还要被迫念出奇怪又羞耻的台词。倒楣的魔法少女布兰妮必须和自己失魂落魄的伙伴朱诺安，可疑的吉祥物，以及不可靠的魔法少女前辈，一起对抗奇怪的变态犯罪集团。究竟，布兰妮是否能够成功打倒四处乱偷男人性器官的邪恶组织，将众人的男根尽数解放呢？\n\n『温柔自信，热情洋溢☆闪亮的天才魔法少女布兰妮，要代替正义惩罚你～☆』`,
        [Locale.en]: `To put a stop to the criminal machinations of a secret triad gang, Britney takes the lead in putting down an armed revolt, but accidentally lands herself in a crisis. With things reaching boiling point, she grabs hold of a mysterious relic that belongs to the D Tribe and is transformed into a Magical Maiden before successfully driving out every last enemy. But, resourceful as she may be, Britney hasn't realized that being a Magical Maiden comes with a price—wearing a salacious uniform and being forced to recite some strange and shameful phrases. This down-on-her-luck maiden must team up with her dispirited comrade, Juneau, as well as a suspicious mascot and a shady senior to trounce the strange and perverted crime syndicate. Will Britney be able to triumph over the evil organization that's been stealing men's joy toys, and restore the pilfered members back to their rightful owners?\n\n"Tenderness, self-confidence, and passion above all ☆ Magical Maiden Britney's here to punish you in the name of jusice~☆"`,
        [Locale.jp]: `謎の犯罪集団の暴挙を阻止するべく、ブリトニーは軍を率いて現場へと向かったが、その途中危機に遭遇した。彼女はDの一族の神器を取り、魔法少女に変身して敵の駆逐に成功する。ただ魔法少女になった彼女は、露出の激しい衣装を身に着けた上、痛く恥ずかしいセリフを言わなければならなかった。そんな魔法少女ブリトニーは、魂を失ったジュノアンと怪しげなマスコット、頼りない魔法少女の大先輩を仲間に、変態犯罪集団に立ち向かうのであった。果たして彼女は、あちこちで男のペニスを盗む邪悪組織に打ち勝つことはできるのだろうか。\n\n『優しく自信に満ちた情熱の天才魔法少女ブリトニーが、正義に変わってお仕置きよ☆』`,
        [Locale.kr]: `국경에서 활개를 치고 다니는 의문의 범죄 조직을 저지하기 위해 군대를 이끌고 출정에 나선 브리트니는 뜻밖의 위기에 봉착하고 말았다. 다급한 상황 속에서 그녀는 D의 일족의 오래된 성물을 손에 넣고 마법소녀로 변신해 적을 모두 몰아내는 데 성공한다. 하지만 그녀는 모르고 있었다. 마법소녀가 된다는 것은 노출 수위가 심한 복장을 입어야 하는 것은 물론, 요상하고 손발이 오그라드는 대사를 읽도록 강요를 받아야 한다는 사실을. 운이 따라주지 않는 마법소녀 브리트니는 멘탈이 붕괴된 파트너 쥬노안, 의문의 마스코트, 수상하기 짝이 없는 마법소녀 선배와 함께 변태 범죄 집단에 맞서야만 한다. 과연 브리트니는 남자의 성기를 훔치던 사악한 조직을 타도하고 빼앗긴 남성들의 물건을 모두 해방시킬 수 있을는지?\n\n『자신감 만땅! 열정이 뿜뿜☆블링블링 천재 마법소녀 브리트니, 정의의 이름으로 널 용서하지 않겠다~☆』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/04/07",
    essence: UnitEssence[UnitCode.m_britney],
    thumbnail: UnitEssence[UnitCode.m_britney],
    selection: UnitSelection[UnitCode.m_britney],
    clothes: UnitFullImage[UnitCode.m_britney],
    tagList: [],
    otherVersion: [ UnitCode.britney, UnitCode.h_britney, UnitCode.x_britney ],
    puzzle: [],
    skillSet: []
}