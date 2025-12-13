import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10190: Unit = {
    ID: "10190",
    metaCode: "fifth_baal",
    prefix: {
        [Locale.tc]: "破敗玫瑰",
        [Locale.sc]: "破败玫瑰",
        [Locale.en]: "Ruined Rose",
        [Locale.jp]: "枯れた薔薇",
        [Locale.kr]: "쇠락한 장미"
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: "巴尔",
        [Locale.en]: "Ba'al",
        [Locale.jp]: "バル",
        [Locale.kr]: "바알"
    },
    abbreviation: {
        [Locale.tc]: [ "喪巴", "巴爾大人" ],
        [Locale.sc]: [ "丧巴", "巴尔大人" ],
        [Locale.en]: [ "5.Baal" ],
        [Locale.jp]: [ "バル様" ],
        [Locale.kr]: [ "장바알" ]
    },
    background: {
        [Locale.tc]: `凱薩的死並沒有影響到巴爾太多，儘管感到悲傷，但更多的則是惋惜。面對瘋狂的對手，巴爾為了阻止世界遭受破壞而不斷努力，但最終卻差點把自己的命都賠了進去。死裡逃生後的她做事變得更加嚴謹，氛圍也變得更加成熟。她利用自己以前貿易累積下來的資源和手段，成為了穩固人界領地的重要存在。現在的她只希望一切能順利復原，好讓她能重新開始以往的貿易活動。\n\n『啊哈哈，找人家有什麼事情嗎？人家可是很忙的喔～』`,
        [Locale.sc]: `凯萨的死并没有影响到巴尔太多，儘管感到悲伤，但更多的则是惋惜。面对疯狂的对手，巴尔为了阻止世界遭受破坏而不断努力，但最终却差点把自己的命都赔了进去。死里逃生后的她做事变得更加严谨，氛围也变得更加成熟。她利用自己以前贸易累积下来的资源和手段，成为了稳固人界领地的重要存在。现在的她只希望一切能顺利復原，好让她能重新开始以往的贸易活动。\n\n『啊哈哈，找人家有什麽事情吗？人家可是很忙的喔～』`,
        [Locale.en]: `Caesar's death does not shake Ba'al too deeply. She feels sorrow, yes, but mostly regret. Facing a crazed opponent, Ba'al fights tirelessly to keep the world from being destroyed, nearly losing her own life in the process. After barely surviving, she becomes far more cautious and carries a much more mature demeanor. Using the resources and connections she built through years of trade, she establishes herself as a cornerstone of stability in the human lands. All she wants now is for everything to recover smoothly so she can go back to her old trading days.\n\n"Ahaha, need something from me? I'm super busy, you know~"`,
        [Locale.jp]: `シーザーの死はバルにそれほど影響はなかった。悲しむ気持ちはあれど、それ以上に残念な思いが強かったからである。狂った敵が世界の崩壊を防ぐために奔走した結果、彼女も命を落としかけてしまう。九死に一生を得た今、彼女は昔よりも慎重になり、大人びた雰囲気になった。それからというもの、これまでビジネスで築いた手腕とコネを活かし、人間界の領地を安定させる重要な存在となった。今はただすべてが順調に復旧し、再びビジネスを始められるのを願っている。\n\n『あはは～私に何か用？忙しいんだけど～』`,
        [Locale.kr]: `시저의 죽음은 바알에게 큰 충격을 주지는 않았다. 슬프긴 했지만, 더 큰 감정은 안타까움이었다. 광기에 사로잡힌 상대를 마주한 바알은 세계가 파괴되지 않도록 온 힘을 다해 막아섰지만, 결국 자신의 목숨까지 잃을 뻔했다. 죽을 고비를 넘긴 뒤, 그녀는 행동이 한층 신중해졌고 분위기 또한 성숙해졌다. 과거 무역을 통해 쌓아온 자원과 인맥을 활용해, 인계의 거점을 지탱하는 중요한 존재로 자리 잡았다. 지금의 그녀가 원하는 건 단 하나, 모든 것이 제자리로 되돌아오고 다시 옛날처럼 무역 활동을 시작하는 것.\n\n『아하하, 나한테 무슨 볼일이라도? 나 지금 엄청 바쁜데~』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/12/10",
    essence: UnitEssence[UnitCode.fifth_baal],
    thumbnail: UnitEssence[UnitCode.fifth_baal],
    selection: UnitSelection[UnitCode.fifth_baal],
    clothes: UnitFullImage[UnitCode.fifth_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.f_baal, UnitCode.b_baal, UnitCode.v_baal, UnitCode.s_baal, UnitCode.x_baal, UnitCode.sky_baal ],
    initHP: 3582.4,
    initATK: 1032,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.fifth_baal],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}