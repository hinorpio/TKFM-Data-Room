import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10025: Unit = {
    ID: "10025",
    metaCode: "i_iblis",
    prefix: {
        [Locale.tc]: "偶像",
        [Locale.sc]: "偶像",
        [Locale.en]: "Idol",
        [Locale.jp]: "アイドル",
        [Locale.kr]: '아이돌'
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: "伊布力斯",
        [Locale.en]: "Iblis",
        [Locale.jp]: "イブリース",
        [Locale.kr]: "이블리스"
    },
    abbreviation: {
        [Locale.tc]: [ "偶伊" ],
        [Locale.sc]: [ "偶伊" ],
        [Locale.en]: [ "I.Iblis" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "아이블" ]
    },
    background: {
        [Locale.tc]: `突如其然出現的諾艾莉擄獲了大量的民眾，讓民眾們沉溺於追星無心工作。既然如此，就只能推出新的偶像與她對抗了！貴族是能夠吸引他人追隨，並且高高在上的存在，而這一點偶像也是一樣的。自認為魔界未來的領袖，天生的領導者，魔王伊布力斯在凱薩的一時興起下被相中成為了魔界的代表。雖然整件事簡直莫名其妙，但既然被推選成為偶像，以伊布力斯好勝的性格，要做自然就要做到最好！好勝心數一數二強的伊布力斯為了拯救魔界的未來，正式出道！\n\n『獻上你們的忠誠，然後跪拜著欣賞本魔王的歌聲及曼妙舞姿吧！』`,
        [Locale.sc]: `突如其然出现的诺艾莉掳获了大量的民众，让民众们沉溺于追星无心工作。既然如此，就只能推出新的偶像与她对抗了！贵族是能够吸引他人追随，并且高高在上的存在，而这一点偶像也是一样的。自认为魔界未来的领袖，天生的领导者，魔王伊布力斯在凯萨的一时兴起下被相中成为了魔界的代表。虽然整件事简直莫名其妙，但既然被推选成为偶像，以伊布力斯好胜的性格，要做自然就要做到最好！好胜心数一数二强的伊布力斯为了拯救魔界的未来，正式出道！\n\n『献上你们的忠诚，然后跪拜着欣赏本魔王的歌声及曼妙舞姿吧！』`,
        [Locale.en]: `Appearing out of nowhere, Noel has captured the hearts of her fans, and now no one is focusing on their work. Only one thing can stop her... another idol! Nobility... arrogant and paparazzi breeding, just like superstars. A natural leader and self-proclaimed lord of the demon realm, Iblis has been chosen by Caesar to represent the demons. Forced to become a superstar, even though Iblis thinks the whole thing is ridiculous, her personality won't allow her to lose. She'll show everyone whose more perfect that perfection itself! A sore loser and ambitious winner, Iblis sets out to save the future of the demon realm!\n\n"My loyal fans, bow down before my angelic voice and sexy dance moves!"`,
        [Locale.jp]: `突如現れたノエルがたくさんの民を虜にしてしまった。人々はアイドルの追っかけに夢中で仕事もそっちのけだ。こうなったら新たなアイドルを売り出して彼女に対抗するしかない！貴族とは他人から崇拝される高貴な存在。それはアイドルと何ら違わない。自称魔界の未来のリーダー、天性の指導者の魔王イブリースはシーザーの気まぐれで魔界代表に選ばれた。1から10まで理解できないことばかりだが、アイドルに選ばれた以上、負けず嫌いのイブリースがベストを尽くすのは当然の事！人並外れた負けず嫌いのイブリースは魔界の未来を救うため、今メジャーデビューを果たす！\n\n『私に忠誠を捧げ、跪いて魔王の歌声と華麗な舞に酔いしれなさい！』`,
        [Locale.kr]: `갑자기 출현한 노엘리가 수많은 사람들의 마음을 뺏었다! 사람들은 아이돌을 쫓느라 더 이상 일을 열심히 하지 않게 되었습니다. 그렇다면 이제 새로운 아이돌을 데뷔시켜 그녀와 상대하도록 해야 해요! 귀족은 다른 사람들보다 더 높은 곳에서 많은 사람들의 존경을 받는 점에서 아이돌과 같답니다. 자칭 마계의 미래 리더인 타고난 지도자 마왕 이블리스가 시저의 충동적인 선택으로 인해 마계의 대표로 출전합니다. 무언가 상황이 이상하게 흘러가지만, 이미 아이돌로 선택된 이상 승부욕에 불타는 이블리스는 절대 패배할 수 없습니다! 마계 최강의 승부욕을 지닌 이블리스가 마계의 미래를 구출하기 위해 데뷔합니다!\n\n『너희들의 충성심을 바쳐라. 그리고 이 마왕 이블리스의 노래와 멋진 댄스를 즐겨라!』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2021/02/03",
    essence: UnitEssence[UnitCode.i_iblis],
    thumbnail: UnitEssence[UnitCode.i_iblis],
    selection: UnitSelection[UnitCode.i_iblis],
    clothes: UnitFullImage[UnitCode.i_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.b_iblis, UnitCode.s_iblis, UnitCode.v_iblis, UnitCode.x_iblis, UnitCode.bg_iblis, UnitCode.ss_iblis ],
    initHP: 0,
    initATK: 0,
    puzzle: [],
    outfits: [],
    skillSet: []
}