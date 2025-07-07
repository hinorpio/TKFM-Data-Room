import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10007: Unit = {
    ID: "10007",
    metaCode: "milae",
    prefix: {
        [Locale.tc]: "天使長",
        [Locale.sc]: "天使长",
        [Locale.en]: "Archangel",
        [Locale.jp]: "天使長",
        [Locale.kr]: "대천사"
    },
    name: {
        [Locale.tc]: "聖米勒",
        [Locale.sc]: "圣米勒",
        [Locale.en]: "Saint Milae",
        [Locale.jp]: "聖女ミラ",
        [Locale.kr]: "성녀 밀레"
    },
    abbreviation: {
        [Locale.tc]: [ "普天", "解天", "天使" ],
        [Locale.sc]: [ "普天", "解天", "天使" ],
        [Locale.en]: [ "Milae", "OG.Milae" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `聖米勒是天界的天使長，信仰忠誠驍勇善戰。得知魔族禍亂世界的消息後，為了遵循主神的教誨守護無辜人類，即使儀式不完整，也毅然響應人類的求援，以實力大打折扣為代價降臨人界，投身戰爭之中。以信仰為食的天使不需要補給，只要信仰之力足夠就能長時間作戰，聖米勒的出戰幾乎搗亂了魔族的戰略佈局。聖米勒是凱薩成名以來最強大的敵人，面對只要有信仰，近乎不死不滅的天使，凱薩究竟會如何迎戰？\n\n『以主之名，吾將賜予爾等死亡。』`,
        [Locale.sc]: `圣米勒是天界的天使长，信仰忠诚骁勇善战。得知魔族祸乱世界的消息后，为了遵循主神的教诲守护无辜人类，即使仪式不完整，也毅然响应人类的求援，以实力大打折扣为代价降临人界，投身战争之中。以信仰为食的天使不需要补给，只要信仰之力足够就能长时间作战，圣米勒的出战几乎捣乱了魔族的战略布局。圣米勒是凯萨成名以来最强大的敌人，面对只要有信仰，近乎不死不灭的天使，凯萨究竟会如何迎战？\n\n『以主之名，吾将赐予尔等死亡。』`,
        [Locale.en]: `Saint Milae is archangel of the Heavenly Realm, a loyal and benevolent being. After learning of the demon's push into the Human Realm, Saint Milae answers human pleas for salvation by jumping into the fray herself, upholding the lord's teachings of protecting all innocent life! The Angels feed on their faith, needing no mortal sustenance such as food or water. And with a limitless well of faith practically bursting from within, Saint Milae expects to fight against Caesar for as long as it takes, until one of them falls. Saint Milae is Caesar's strongest opponent yet. Pit against this seemingly immortal Angel, one who feeds on an endless supply of faith... just how will Caesar prevail?\n\n"I will bestow upon you a quick death, in the name of the lord."`,
        [Locale.jp]: `聖女ミラは天界の大天使。信仰に篤く勇猛である。魔族が世界を混乱させていることを耳にすると、主神の教えの通り無辜の人類を守るべく、儀式を簡単に済ませて人類の助けにこたえ、実力を犠牲にして人類界に降臨し、戦いに身を投じた。信仰を糧とする天使は補給物資の必要がなく、信仰の力さえあれば長時間戦うことも可能である。この聖女ミラの出征により魔族の戦略に大きな影響を与えた。聖女ミラはシーザー最大の強敵で、信仰を目の前にした天使は不死身と言っても過言ではない。シーザーは一体どう応戦するのだろうか。\n\n『主の名において、死を授けよう。』`,
        [Locale.kr]: `깊은 신앙심을 가진 성녀 밀레는 천계의 대천사로 용맹스러우며 전투에 능하다. 마족이 세계를 어지럽히고 있다는 소식을 접한 후, 그녀는 주신의 가르침에 따라 무고한 인간들을 수호하기 위해 불완전한 의식에도 불구하고 인간의 구원 요청에 응답하기로 한다. 결국 성녀 밀레는 천계에서보다 크게 감소한 실력을 대가로 인간 세계에 강림해 전쟁터에 뛰어든다. 신앙을 식량으로 삼는 천사는 보급이 필요하지 않아 충분한 신앙심만 있다면 장시간 전투를 할 수 있다. 그녀의 출전으로 인해 마족의 전략적 안배에 커다란 어려움이 발생하였다. 시저가 이름을 떨치게 된 이레, 성녀 밀레는 그가 만나본 적들 중 가장 강력한 적이다. 신앙만 있다면 가히 불사불멸인 이 천사에게 시저는 어떻게 대적할 수 있을까?\n\n『주신의 이름으로 내가 너희에게 죽음을 내려주지.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/07/14",
    essence: UnitEssence[UnitCode.milae],
    thumbnail: UnitEssence[UnitCode.milae],
    selection: UnitSelection[UnitCode.milae],
    clothes: UnitFullImage[UnitCode.milae],
    tagList: [
        TagID.ELEMENT_LIGHT,
        TagID.ELEMENT_LIGHT,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [ UnitCode.s_milae ],
    initHP: 3395.2,
    initATK: 940.8,
    puzzle: [],
    outfits: [],
    skillSet: []
}