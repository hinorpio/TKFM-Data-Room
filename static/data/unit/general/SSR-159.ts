import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10188: Unit = {
    ID: "10188",
    metaCode: "fifth_iblis",
    prefix: {
        [Locale.tc]: "凋零薔薇",
        [Locale.sc]: "凋零蔷薇",
        [Locale.en]: "Withering Rose",
        [Locale.jp]: "散った薔薇",
        [Locale.kr]: "시들어버린 장미"
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: "伊布力斯",
        [Locale.en]: "Iblis",
        [Locale.jp]: "イブリース",
        [Locale.kr]: "이블리스"
    },
    abbreviation: {
        [Locale.tc]: [ "喪伊", "小伊" ],
        [Locale.sc]: [ "丧伊", "小伊" ],
        [Locale.en]: [ "5.Iblis", "Little Ibz" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "장이블" ]
    },
    background: {
        [Locale.tc]: `面對凱薩已死的現實，伊布力斯展現出了自己的堅強與不屈。儘管她沒被這則噩耗給擊倒，但無法阻止凱薩留下的世界遭受破壞，卻還是讓她感到無比自責。知曉了失去重要之物的傷痛後，伊布力斯的作風比起以前變得柔和許多。她依舊是大家所信賴和尊敬的存在，努力地帶領底下的子民走向復興之路。過去的榮耀和那些理應被守護的一切，伊布力斯下定決心不會再失去任何一個。\n\n『本小姐的要求很簡單，給我活著回來，聽到了嗎？』`,
        [Locale.sc]: `面对凯萨已死的现实，伊布力斯展现出了自己的坚强与不屈。儘管她没被这则噩耗给击倒，但无法阻止凯萨留下的世界遭受破坏，却还是让她感到无比自责。知晓了失去重要之物的伤痛后，伊布力斯的作风比起以前变得柔和许多。她依旧是大家所信赖和尊敬的存在，努力地带领底下的子民走向復兴之路。过去的荣耀和那些理应被守护的一切，伊布力斯下定决心不会再失去任何一个。\n\n『本小姐的要求很简单，给我活着回来，听到了吗？』`,
        [Locale.en]: `Faced with Caesar's death, Iblis shows her unbreakable strength. The news doesn't crush her, but her inability to protect the world Caesar left behind still fills her with crushing guilt. After truly understanding the pain of losing something precious, she softens considerably compared to before. She remains the trusted and respected leader everyone relies on, working hard to guide her people down the road to rebirth. All the past glory and everything that should have been protected... Iblis swears she won't lose anyone else ever again.\n\n"My demand is simple: return alive. Understood?"`,
        [Locale.jp]: `シーザーの死という現実に、イブリースは気丈さと不屈さを見せた。この悲報に打ちのめされることはなかったが、シーザーが残した世界が壊されるのを止められなかったため、激しい自責の念に駆られている。大切なものを失う痛みを知ったことで、以前と比べて物腰が柔らかくなったイブリース。そして、彼女は今もなお、皆から信頼・尊敬される存在として、民を復興への道へと導くために尽力している。かつての栄光も守るべきものも二度と失わないと、彼女は心に固く誓ったのである。\n\n『私の要望はシンプルよ。生きて帰ってきなさい。わかった？』`,
        [Locale.kr]: `시저의 죽음을 마주한 이블리스는 누구보다 강인하게 버텨냈다. 비보에 무너지지는 않았지만, 시저가 남긴 세계가 무너져 가는 걸 막지 못했다는 죄책감은 그녀의 마음을 깊이 파고들었다. 소중한 것을 잃는 고통을 알게 된 뒤, 이블리스의 태도는 예전보다 확연히 부드러워졌다. 그럼에도 그녀는 여전히 모두가 믿고 따르는 존재로, 백성들을 이끌어 부흥의 길에 힘을 쏟고 있다. 과거의 영광과 반드시 지켜야 할 것들, 이블리스는 이제 그 어느 하나도 잃지 않겠다고 굳게 다짐했다.\n\n『내 요구는 간단해. 반드시 살아서 돌아와. 알아 들었지?』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/12/10",
    essence: UnitEssence[UnitCode.fifth_iblis],
    thumbnail: UnitEssence[UnitCode.fifth_iblis],
    selection: UnitSelection[UnitCode.fifth_iblis],
    clothes: UnitFullImage[UnitCode.fifth_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.b_iblis, UnitCode.s_iblis, UnitCode.v_iblis, UnitCode.x_iblis, UnitCode.bg_iblis, UnitCode.ss_iblis ],
    initHP: 4094.4,
    initATK: 902.4,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.fifth_iblis],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}