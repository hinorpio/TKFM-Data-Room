import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10053: Unit = {
    ID: "10053",
    metaCode: "x_lana",
    prefix: {
        [Locale.tc]: "聖誕矮人王",
        [Locale.sc]: "圣诞矮人王",
        [Locale.en]: "Xmas Dwarf Queen",
        [Locale.jp]: "聖夜の小人王",
        [Locale.kr]: "X-mas 난쟁이"
    },
    name: {
        [Locale.tc]: "蘭兒",
        [Locale.sc]: "兰儿",
        [Locale.en]: "Lana",
        [Locale.jp]: "ラン",
        [Locale.kr]: "란"
    },
    abbreviation: {
        [Locale.tc]: [ "聖矮", "誕矮" ],
        [Locale.sc]: [ "圣矮", "诞矮" ],
        [Locale.en]: [ "X.Lana", "C.Lana" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "크란" ]
    },
    background: {
        [Locale.tc]: `聖誕節是矮人的節日，因為傳說的聖誕老人就是矮人一族之一，所以矮人們一直把這節日當作是神聖的節日。蘭兒也穿上了聖誕裝，準備和凱薩一起度過聖誕節，沒想到馴鹿竟然前來，述說聖誕節即將完蛋的消息。本來準備給凱薩驚喜的蘭兒不允許聖誕節被破壞，於是就和凱薩一起前往拯救聖誕節的旅途。\n\n『好孩子有禮物和美酒，壞孩子要吃斧頭，這就是矮人族的聖誕節。』`,
        [Locale.sc]: `圣诞节是矮人的节日，因为传说的圣诞老人就是矮人一族之一，所以矮人们一直把这节日当作是神圣的节日。兰儿也穿上了圣诞装，准备和凯萨一起度过圣诞节，没想到驯鹿竟然前来，述说圣诞节即将完蛋的消息。本来准备给凯萨惊喜的兰儿不允许圣诞节被破坏，于是就和凯萨一起前往拯救圣诞节的旅途。\n\n『好孩子有礼物和美酒，坏孩子要吃斧头，这就是矮人族的圣诞节。』`,
        [Locale.en]: `Legend says that Santa Claus was originally a dwarf, making Christmas a particularly important day for those of the dwarf race. They even go so far as it to call it their holiest of days. Lana dons a special Christmas outfit and plans to spend the special holiday together with Caesar. However, she couldn't have predicted that a reindeer would appear out of nowhere, spreading the news that Christmas was doomed. Under no circumstances is Lana going to allow the magic of Christmas to be destroyed. With Caesar in tow, she sets out on a heroic journey to save Christmas...\n\n"The good kids out there will receive gifts in huge sacks, the bad kids out there will feel the blade of my ax. That's a real dwarf Christmas!"`,
        [Locale.jp]: `クリスマスは小人族の祝日だ。伝説によるとサンタクロースは小人族の一人らしい。だから小人たちはこの日を聖なる祝日としている。ランはクリスマスの衣装に着替えると、シーザーと共にクリスマスを過ごす準備をした。しかしトナカイが一足先に来て、クリスマスが中止になるかもしれないと言った。シーザーにサプライズを用意していたランは、クリスマスが無くなるのは許せないと言い、シーザーと共にクリスマスを救う旅へと出かけた。\n\n『いい子にはプレゼントと甘酒、悪い子には斧を振るよ！これが小人族のクリスマスなの。』`,
        [Locale.kr]: `산타는 사실 난쟁이족이라는 전설이 있다. 그래서 크리스마스는 난쟁이족에게도 큰 명절이자 신성한 날로 여겨지고 있다. 산타복을 입은 란은 시저와 함께 크리스마스를 보낼 준비로 한껏 들떠 있었다. 크리스마스가 위험하다는 릴리의 소식을 듣기 전까지. 란과 시저는 결국 크리스마스를 위험으로부터 구하기 위해 여정에 나서게 되었는데...\n\n『착한 아이들에겐 선물과 멋진 술을! 나쁜 아이들에겐 도끼 맛을! 이것이 우리 난쟁이족의 크리스마스라는 말씀!』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/12/15",
    essence: UnitEssence[UnitCode.x_lana],
    thumbnail: UnitEssence[UnitCode.x_lana],
    selection: UnitSelection[UnitCode.x_lana],
    clothes: UnitFullImage[UnitCode.x_lana],
    tagList: [],
    otherVersion: [ UnitCode.lana, UnitCode.ny_lana, UnitCode.o_lana ],
    initHP: 3732.8,
    initATK: 944,
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_1 ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.x_lana],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}