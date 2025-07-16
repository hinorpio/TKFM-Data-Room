import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10145: Unit = {
    ID: "10145",
    metaCode: "s_satan",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: "撒旦",
        [Locale.en]: "Satan",
        [Locale.jp]: "サタン",
        [Locale.kr]: "사탄"
    },
    abbreviation: {
        [Locale.tc]: [ "夏撒", "夏旦" ],
        [Locale.sc]: [ "夏撒", "夏旦" ],
        [Locale.en]: [ "S.Satan" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수사탄" ]
    },
    background: {
        [Locale.tc]: `大海上最令人恐懼的掠食者是誰？是鯊魚嗎？是深海魔獸嗎？還是會捲起三層樓高海浪的地獄觸手章魚呢？這幾個答案都很接近，而真正正確的回答是「撒旦」！她帶著恣意的笑容和強大的威壓，以鮮血與恐懼向大海宣告她的到來。魔獸們，顫抖吧，海怪們，快點逃竄吧！因為魔王的狩獵遊戲，即將要開始了。所有值得挑戰的魔獸，最後都會被直接做成禮物獻給凱薩大人。\n\n『強大的海怪到底在哪裡呢？好期待啊，呵呵呵~』`,
        [Locale.sc]: `大海上最令人恐惧的掠食者是谁？是鲨鱼吗？是深海魔兽吗？还是会卷起三层楼高海浪的地狱触手章鱼呢？这几个答案都很接近，而真正正确的回答是「撒旦」！她带着恣意的笑容和强大的威压，以鲜血与恐惧向大海宣告她的到来。魔兽们，颤抖吧，海怪们，快点逃窜吧！因为魔王的狩猎游戏，即将要开始了。所有值得挑战的魔兽，最后都会被直接做成礼物献给凯萨大人。\n\n『强大的海怪到底在哪里呢？好期待啊，呵呵呵~』`,
        [Locale.en]: `Who is the most feared predator in the sea? Is it a shark? Is it a deep sea monster? Or a hellish tentacled octopus that can create waves three stories high? All are very close answers, but the most fearsome is beyond a doubt... Satan! With her willful smile and powerfully coercive demeanor, she announces her arrival to the sea with blood and absolute terror. Tremble, sea monsters and beastly abominations! Flee for your lives! Because this sadistic Archdemon is on the hunt! And all her sea enemies will be made trophies to be gifted to Master Caesar.\n\n"Oh, sea monsters... Come out, come out wherever you are! Hyehehe~"`,
        [Locale.jp]: `大海原で最も恐ろしい捕食者とは？サメか、深海の魔獣か、それとも……3階の高さほどの高波を巻き起こす地獄の触手タコか。どれも正解に近いが、本当の正解は「サタン」である！傲慢な笑みを浮かべ、とてつもない威圧感を放つ彼女は、血と恐怖を纏い大海原に宣戦布告した。魔獣たちよ、震えるのだ。怪物たちよ、逃げ回るのだ！魔王のハンティングゲームが、今始まろうとしている。全ての魔獣が、最後にはシーザー様に捧げるプレゼントとなるのであった。\n\n『強い海の怪物はどこかしら？楽しみだわ。ウフフフっ』`,
        [Locale.kr]: `바다에서 가장 무서운 포식자는 누구? 상어? 아니면 심해 괴수? 그것도 아니라면 3층 높이의 파도를 일으키는 지옥의 촉수 문어? 전부 그럴 듯한 답이긴 하지만, 정답은 바로 「사탄」! 방자한 웃음과 엄청난 위압감, 바다에 몰아닥칠 피바람을 예고한다. 괴수들아, 두려움으로 떨어라. 바다 괴수들아, 도망쳐라! 마왕의 사냥놀이가 곧 시작될 테니. 도전할만한 가치가 있는 마수들조차 결국 시저 님께 바쳐질 제물이 될 뿐.\n\n『강력한 바다괴수는 대체 어디에 있으려나? 너무 기대 된다니까~ 후훗~』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2024/06/05",
    essence: UnitEssence[UnitCode.s_satan],
    thumbnail: UnitEssence[UnitCode.s_satan],
    selection: UnitSelection[UnitCode.s_satan],
    clothes: UnitFullImage[UnitCode.s_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.e_satan, UnitCode.b_satan, UnitCode.v_satan, UnitCode.h_satan ],
    initHP: 5249.6,
    initATK: 672,
    puzzle: [ PuzzleCode.EVENT_2024_SUMMER_4 ],
    outfits: [],
    skillSet: []
}