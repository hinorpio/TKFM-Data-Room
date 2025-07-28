import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10169: Unit = {
    ID: "10169",
    metaCode: "momDaphne",
    prefix: {
        [Locale.tc]: "盛慾嬌妻",
        [Locale.sc]: "盛欲娇妻",
        [Locale.en]: "Thirsty Wife",
        [Locale.jp]: "溢れる欲",
        [Locale.kr]: "왕성한 성욕"
    },
    name: {
        [Locale.tc]: "達芙妮",
        [Locale.sc]: "达芙妮",
        [Locale.en]: "Daphne",
        [Locale.jp]: "ダフィー",
        [Locale.kr]: "더피"
    },
    abbreviation: {
        [Locale.tc]: [ "兔媽" ],
        [Locale.sc]: [ "兔妈" ],
        [Locale.en]: [ "momDaphne" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `達芙妮是鈴蘭的母親，溫柔體貼，賢慧淑麗，看起來就是個完美的兔族人妻。不過，她雖然看起來很像兔人，實際上卻是個戴著兔耳朵和尾巴的人類。曾經的她因為有著超越常人的性慾和性能力，但卻找不到適合的伴侶而困擾。但在遇到現任的兔族丈夫後，她就毫無猶豫的決定嫁到兔族村落「獸格里拉」了。而她現在最大的嗜好，便是時不時藉著找鈴蘭的藉口，跑到魔王城，偷偷品嘗女兒新交到的男朋友。\n\n『今天老公臨時出門支援犬族姊妹的發情期，一時半刻都不會在家，你晚上要來家裡陪媽媽嗎？』`,
        [Locale.sc]: `达芙妮是铃兰的母亲，温柔体贴，贤慧淑丽，看起来就是个完美的兔族人妻。不过，她虽然看起来很像兔人，实际上却是个戴着兔耳朵和尾巴的人类。曾经的她因为有着超越常人的性欲和性能力，但却找不到适合的伴侣而困扰。但在遇到现任的兔族丈夫後，她就毫无犹豫的决定嫁到兔族村落「兽格里拉」了。而她现在最大的嗜好，便是时不时藉着找铃兰的藉口，跑到魔王城，偷偷品尝女儿新交到的男朋友。\n\n『今天老公临时出门支援犬族姊妹的发情期，一时半刻都不会在家，你晚上要来家里陪妈妈吗？』`,
        [Locale.en]: `Lillane's mother, Daphne, is the epitome of gentle grace and refined beauty—a seemingly perfect Rabbitkin wife. But don't let her fluffy ears and bouncy tail fool you. Despite her rabbit-like charm, she's actually a human donning those adorable accessories. In her younger days, Daphne grappled with desires and talents far beyond mortal limits, yet struggled to find a partner who could keep up. That all changed when she met her current husband, a dashing Rabbitkin man. Without a second thought, she married into the Rabbitkin village of Shangri-Rawr. Now, her favorite pastime? Sneaking off to Caesar's Palace under the pretense of visiting her daughter, all to "sample" Lillane's latest demon boy toy.\n\n"My hubby's off helping the Dogfolk women with their heat season and won't be back for a while. Wanna come over tonight and keep momma company?"`,
        [Locale.jp]: `ダフィーは鈴蘭の母親。優しく思いやりがあり、上品で、完璧な兔族の人妻そのもの。見た目はウサギ人そっくりだが、実はウサ耳と尻尾を着けた人間である。彼女は常人以上の性欲と性的能力を持ちながら、自分にふさわしいパートナーを見つけられず悩んでいた。しかし、今の兔族の夫と出会ってから、迷うことなく兔族の村「シャングリラ」に嫁ぐことを決めた。そして、彼女の今の趣味は、鈴蘭を訪ねる口実で魔王城に赴き、娘の新しい彼氏をこっそり味わうことである。\n\n『今日、旦那が犬族の姉妹の手伝いをしに行ったから、しばらく帰ってこないの。夜、うちに来てママと一緒に過ごさない？』`,
        [Locale.kr]: `더피는 스즈란의 어머니로 다정하고 배려심 깊으며 현명하고 단아한, 그야말로 완벽한 토끼족 아내처럼 보인다. 물론 외모는 토끼족 같아도, 사실은 그저 토끼 귀와 꼬리를 착용한 인간이다. 한때 평범한 이성과는 맞지 않을 정도의 강한 성욕과 성능력을 지닌 탓에, 자신과 궁합이 맞는 대상을 찾는 데 무척 애를 먹었다. 하지만 지금의 토끼족 남편을 만나게 되면서, 단 한 치의 망설임도 없어 토끼족 마을「샹그릴라」로 시집을 가게 된다. 지금 그녀의 가장 큰 취미는 바로, 딸 스즈란을 핑계 삼아 마왕성에 드나들면서 딸의 새로운 남자친구를 맛보는 일이라고.\n\n『남편이 코볼트족 자매들의 발정기 지원을 나갔으니 당분간은 안 돌아오실 것 같아요. 오늘 밤, 우리집에서 같이 있어 줄래요?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2025/05/07",
    essence: UnitEssence[UnitCode.momDaphne],
    thumbnail: UnitEssence[UnitCode.momDaphne],
    selection: UnitSelection[UnitCode.momDaphne],
    clothes: UnitFullImage[UnitCode.momDaphne],
    tagList: [],
    otherVersion: [],
    initHP: 3992,
    initATK: 883.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.momDaphne],
    skillSet: []
}