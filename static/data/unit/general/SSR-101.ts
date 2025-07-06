import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10022: Unit = {
    ID: "10022",
    metaCode: "noma",
    prefix: {
        [Locale.tc]: "狂犬",
        [Locale.sc]: "狂犬",
        [Locale.en]: "Crazed Dog",
        [Locale.jp]: "狂犬",
        [Locale.kr]: "광견"
    },
    name: {
        [Locale.tc]: "諾蕾蒂",
        [Locale.sc]: "诺蕾蒂",
        [Locale.en]: "Noma",
        [Locale.jp]: "ノルディ",
        [Locale.kr]: "놀라이티"
    },
    abbreviation: {
        [Locale.tc]: [ "狂犬" ],
        [Locale.sc]: [ "狂犬" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `來自不同大陸，重視科技和工業國家的精銳軍人。帶著開闢以及征服的使命而來…雖然是這麼說，但也只是偵察部隊而已。因為原大陸的戰爭已經結束，過於好戰的諾蕾蒂以及她的部隊因為難以處理而被交付了探索新大陸的使命派了出來。儘管知道原本「飼主」心底的算盤，不過對於和平的生活沒有任何的眷念，所以諾蕾蒂開心的接下了工作。跨海而來，使用著與魔法截然不同體系的武器，諾蕾蒂與她忠誠的部隊登上了新大陸……\n\n『好不容易到了沒有肥豬上司扯後腿的新大陸，就盛大的鬧一場吧！』`,
        [Locale.sc]: `来自不同大陆，重视科技和工业国家的精锐军人。带着开辟以及征服的使命而来…虽然是这么说，但也只是侦察部队而已。因为原大陆的战争已经结束，过于好战的诺蕾蒂以及她的部队因为难以处理而被交付了探索新大陆的使命派了出来。尽管知道原本「饲主」心底的算盘，不过对于和平的生活没有任何的眷念，所以诺蕾蒂开心的接下了工作。跨海而来，使用着与魔法截然不同体系的武器，诺蕾蒂与她忠诚的部队登上了新大陆……\n\n『好不容易到了没有肥猪上司扯后腿的新大陆，就盛大的闹一场吧！』`,
        [Locale.en]: `Noma hails from a faraway foreign land, serving as an elite soldier of the Principality of Daruma. Leader of the Hound Hunters, she claimed to be tasked with taming and exploiting another region... but in reality, her superiors sent her to face her own demise. But the war she and her Hound crew were expecting had already finished and, given their belligerent selves already knew too many national secrets, they were sent out under the pretext of exploring the new continent. Only Noma knew of these intentions beforehand, but a life without war felt insufferable to her, so she gladly accepted her homeland's request to leave for greener pastures. Crossing the seas with weapons unlike any magic, Noma and her Hound comrades finally set foot on a new continent, ready for war.\n\n"A whole new world without the fat cats back home holding us back! It's chaos time, baby!"`,
        [Locale.jp]: `遠くの異国の大陸からやってきたノルディは、ダロム公国の精鋭兵士である。ハウンド小隊を率いて他の大陸を征服する使命を果たすため……と表向きでは言っているが、実は上司に捨て駒にされた存在なのだ。大陸の戦争は終わったが、ノルディとその部下たちは機密情報を多く知ったため、新大陸の征服を口実に送り出されたのである。本来の「飼い主」の思惑を理解した彼女だったが、平和な生活に一切興味のない彼女は、喜んでその任務を引き受けた。海を超えて魔法とは異なる武器を手にしたノルディとその部下たち。新しい大陸に乗り込み、楽しい戦争が始まることを期待していた。\n\n『新大陸には足を引っ張る豚上司もいないし、盛大に暴れてやるわ！』`,
        [Locale.kr]: `놀라이티는 먼 이국 대륙 출신으로 달롬공국 소속 정예군이었다. 하운드 소대를 이끌고 다른 대륙을 개척하고 정복하겠단 사명으로 이 대륙에 왔다... 명분은 그렇지만 실상은 고위층에서 악의적으로 그녀를 죽음으로 내몰은 것에 불과하다. 대륙에서의 전쟁은 이미 끝이 났지만, 지나치게 호전적인 놀라이티와 그녀의 부하들은 수많은 비밀을 알고 있었기에 신대륙을 탐험한다는 명목으로 파견된 것이다. 본래 「사육주」의 속셈을 알고 있었지만 놀라이티는 평화로운 삶에 아무런 관심이 없었고, 흔쾌히 이 임무를 받아 고국을 빠져나왔다. 바다를 건너 마법과는 사뭇 다른 계통의 무기를 사용하는 놀라이티와 그녀의 충성스런 부대는 신대륙에 당도하여 다음에 벌어질 즐거운 전쟁을 기대하고 있다.\n\n『모처럼 우리의 발목을 잡기나 하는 살찐 돼지들 없이 신대륙에 오게 됐으니, 성대하게 놀아볼까나!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/01/17",
    essence: UnitEssence[UnitCode.noma],
    thumbnail: UnitEssence[UnitCode.noma],
    selection: UnitSelection[UnitCode.noma],
    clothes: UnitFullImage[UnitCode.noma],
    tagList: [],
    otherVersion: [ UnitCode.s_noma ],
    initHP: 3332.7999728599625,
    initATK: 1057.5990739047327,
    puzzle: [],
    outfits: [],
    skillSet: []
}