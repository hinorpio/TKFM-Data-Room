import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10189: Unit = {
    ID: "10189",
    metaCode: "fifth_satan",
    prefix: {
        [Locale.tc]: "死寂葬華",
        [Locale.sc]: "死寂葬华",
        [Locale.en]: "Burial Blossom",
        [Locale.jp]: "死寂の葬花",
        [Locale.kr]: "죽음의 장송곡"
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: "撒旦",
        [Locale.en]: "Satan",
        [Locale.jp]: "サタン",
        [Locale.kr]: "사탄"
    },
    abbreviation: {
        [Locale.tc]: [ "喪撒", "喪旦" ],
        [Locale.sc]: [ "丧撒", "丧旦" ],
        [Locale.en]: [ "5.Satan" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "장사탄" ]
    },
    background: {
        [Locale.tc]: `凱薩死後，撒旦就陷入了前所未有的瘋狂。所有人都認為撒旦會回歸以前那般嗜血好殺的狀態，可在她心中，那份狂慾卻早已隨著凱薩一同消逝。失去了對鮮血、暴力和戰鬥的渴望之後，一切事物對如今地撒旦而言，都沒有了任何意義。這個世界再也沒有東西能讓她感到悸動，也不再有人能夠令她感到眷戀。她成為了遊蕩在世間的行屍走肉，只是漫無目的地活著，靜靜等待自己終末到來的那一刻。\n\n『慾望是魔族生存的動力，在凱薩死去之後，我的心已經不會再為任何事物感到悸動。』`,
        [Locale.sc]: `凯萨死后，撒旦就陷入了前所未有的疯狂。所有人都认为撒旦会回归以前那般嗜血好杀的状态，可在她心中，那份狂慾却早已随着凯萨一同消逝。失去了对鲜血、暴力和战斗的渴望之后，一切事物对如今地撒旦而言，都没有了任何意义。这个世界再也没有东西能让她感到悸动，也不再有人能够令她感到眷恋。她成为了游荡在世间的行尸走肉，只是漫无目的地活着，静静等待自己终末到来的那一刻。\n\n『慾望是魔族生存的动力，在凯萨死去之后，我的心已经不会再为任何事物感到悸动。』`,
        [Locale.en]: `After Caesar dies, Satan falls into a madness never seen before. Everyone expects her to revert to her old bloodthirsty, kill-happy self, but in her heart, that violent lust vanished the moment Caesar did. Having lost all craving for blood, violence, and battle, nothing in the world holds any meaning for her current state. Nothing excites her anymore. No one makes her feel any semblance of attachment. She becomes a walking corpse wandering the realm, living without purpose, quietly waiting for the moment her end finally arrives.\n\n"Desire is what keeps demons alive. But after Caesar died, my heart no longer races for anything or anyone."`,
        [Locale.jp]: `シーザーの死後、これまでにないくらい狂気的になったサタン。誰もがサタンは以前のように血に飢えた状態に戻ると思っていたが、彼女の心にある狂気じみた欲望はシーザーと共に消え去った。血、暴力、戦いへの渇望を失った今、サタンにとってすべてのものが無意味になった。この世界にもう彼女をときめかせるものはなく、何かに未練を抱くこともない。彼女は目的もなく生き、自分の死が訪れるその瞬間を静かに待ちながら、彷徨うだけの生ける屍となってしまったのである。\n\n『欲望は魔族の生きる糧。シーザーが死んだ今、もう何にもときめかないわ』`,
        [Locale.kr]: `시저의 죽음 후, 사탄은 전례 없는 혼란과 광기에 빠졌다. 모두 그녀가 예전처럼 피에 굶주리고 살육을 즐기던 모습으로 돌아갈 거라 생각했지만, 그녀 안의 광욕은 시저의 죽음과 함께 사라졌었다. 피도, 폭력도, 전투도 이제 사탄에게는 아무런 의미가 되지 못했다. 이 세상 어느 것도 더 이상 그녀의 심장을 뛰게 만들지 못했고, 어떤 이도 그녀의 마음을 붙잡아 둘 수 없었다. 그녀는 세상을 떠도는 살아있는 시체처럼 아무 목적 없이 하루하루를 흘려보내며 조용히 종말의 순간을 기다리고 있다.\n\n『욕망은 마족이 살아가는 원동력이지. 시저가 죽은 뒤로... 내 심장은 그 어떤 것에도 뛸 수 없게 되어버렸어.』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/12/10",
    essence: UnitEssence[UnitCode.fifth_satan],
    thumbnail: UnitEssence[UnitCode.fifth_satan],
    selection: UnitSelection[UnitCode.fifth_satan],
    clothes: UnitFullImage[UnitCode.fifth_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.e_satan, UnitCode.b_satan, UnitCode.v_satan, UnitCode.s_satan, UnitCode.h_satan ],
    initHP: 3467.2,
    initATK: 1065.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.fifth_satan],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}