import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10106: Unit = {
    ID: "10106",
    metaCode: "ny_salucia",
    prefix: {
        [Locale.tc]: "絕代佳人",
        [Locale.sc]: "绝代佳人",
        [Locale.en]: "Elegance Personified",
        [Locale.jp]: "絶世の美女",
        [Locale.kr]: "절세가인"
    },
    name: {
        [Locale.tc]: "賽露西亞",
        [Locale.sc]: "赛露西亚",
        [Locale.en]: "Salucia",
        [Locale.jp]: "セルシア",
        [Locale.kr]: "살루시아"
    },
    abbreviation: {
        [Locale.tc]: [ "春精", "春王" ],
        [Locale.sc]: [ "春精", "春王" ],
        [Locale.en]: [ "Ny.Salucia" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "절살루" ]
    },
    background: {
        [Locale.tc]: `雖說自己在成為魔王凱薩的後宮之後，已經見識到了更寬廣的世界。但她的族人們卻依舊故步自封，不願離開森林，主動踏足外界。為了解決這個問題，精靈女王露出充滿心機的笑容，和魔王凱薩一同策畫了這場祭典。若是溫和的勸說無法改變自己的族人，那就只好用一些較為刺激、激烈的方式來導正他們了。\n\n『悄悄告訴您，雖然精靈不喜歡爭鬥，但好勝心是很強的唷。』`,
        [Locale.sc]: `虽说自己在成为魔王凯萨的后宫之后，已经见识到了更宽广的世界。但她的族人们却依旧故步自封，不愿离开森林，主动踏足外界。为了解决这个问题，精灵女王露出充满心机的笑容，和魔王凯萨一同策画了这场祭典。若是温和的劝说无法改变自己的族人，那就只好用一些较为刺激、激烈的方式来导正他们了。\n\n『悄悄告诉您，虽然精灵不喜欢争斗，但好胜心是很强的唷。』`,
        [Locale.en]: `Even though she's seen much more of the world after joining Master Caesar's harem, the other elves still won't leave the Misty Forest and get out there with her. In order to tackle this problem, Salucia and Master Caesar make a plan. If the elves won't come out of the forest voluntarily, then maybe they'll come out for a raucous festival!\n\n"Elves may not like fighting, but we're pretty good at it!"`,
        [Locale.jp]: `魔王シーザーの後宮メンバーになってから、世界の広さを知ったセルシア。しかし彼女の族人は閉鎖的で、森を離れて外界に足を踏み入れることはなかった。この問題を解決すべく、エルフ王は魔王シーザーと共に祭りを開催することにした。優しく諭しても族人を説得できないのなら、刺激的な方法をとろうと考えたのだ。\n\n『エルフは争い事が嫌いですが、負けず嫌いなんです。内緒ですよ』`,
        [Locale.kr]: `마왕 시저의 후궁이 되겠다고 한 후, 광활한 세계를 보게 된 살루시아. 하지만 자신의 동족들은 여전히 폐쇄적으로 숲 밖으로 나와 바깥세상에 발을 들이려 하질 않는다. 이 문제를 해결하기 위해 살루시아는 시저와 함께 이번 축제를 계획하게 되었는데. 온화한 방식이 통하지 않는다면 조금은 자극적인 방식을 취하는 수밖에.\n\n『엘프는 전쟁을 좋아하지 않지만, 그래도 승부욕이 매우 강한 종족이랍니다.』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/01/18",
    essence: UnitEssence[UnitCode.ny_salucia],
    thumbnail: UnitEssence[UnitCode.ny_salucia],
    selection: UnitSelection[UnitCode.ny_salucia],
    clothes: UnitFullImage[UnitCode.ny_salucia],
    tagList: [],
    otherVersion: [ UnitCode.salucia, UnitCode.h_salucia, UnitCode.s_salucia ],
    puzzle: [],
    skillSet: []
}