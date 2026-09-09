import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10212: Unit = {
    ID: "10212",
    metaCode: "vita",
    prefix: {
        [Locale.tc]: "終焉魔劍",
        [Locale.sc]: "终焉魔剑",
        [Locale.en]: "Demon Sword",
        [Locale.jp]: "終焉の魔剣",
        [Locale.kr]: "종언의 마검"
    },
    name: {
        [Locale.tc]: "薇塔",
        [Locale.sc]: "薇塔",
        [Locale.en]: "Vita",
        [Locale.jp]: "ヴィータ",
        [Locale.kr]: "비타"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `在人魔戰爭最為激烈的那個年代，魔族與天使、勇者、人類，這三者艱難的做著抗爭。為了對抗那把專為斬殺魔族而生的聖劍，一位魔王使用無數戰死者的屍體與自己的精血，打造出了一把令人聞風喪膽的魔劍。這把魔劍不僅擁有極強的殺傷力，還能夠吸收周圍所有生命的力量與魔力。揮舞著這把恐怖的魔劍，魔王戰無不勝，直到連他自己都承受不住魔劍的力量，變成一具屍體為止。在那之後，就再也無人敢使用這柄魔劍，魔劍薇塔就這樣被安置在魔王專用的藏寶庫中，一直不見天日。直到那天，有位不穿衣服的魔王將她重新挖了出來，並理所當然地成為了她的新主人。\n\n『我厭倦了永無止盡的殺戮，戰爭…什麼時候才能結束呢？』`,
        [Locale.sc]: `在人魔战争最为激烈的那个年代，魔族与天使、勇者、人类，这三者艰难的做着抗争。为了对抗那把专为斩杀魔族而生的圣剑，一位魔王使用无数战死者的尸体与自己的精血，打造出了一把令人闻风丧胆的魔剑。这把魔剑不仅拥有极强的杀伤力，还能够吸收周围所有生命的力量与魔力。挥舞着这把恐怖的魔剑，魔王战无不胜，直到连他自己都承受不住魔剑的力量，变成一具尸体为止。在那之后，就再也无人敢使用这柄魔剑，魔剑薇塔就这样被安置在魔王专用的藏宝库中，一直不见天日。直到那天，有位不穿衣服的魔王将她重新挖了出来，并理所当然地成为了她的新主人。\n\n『我厌倦了永无止尽的杀戮，战争…什么时候才能结束呢？』`,
        [Locale.en]: `During the era when the war between humans and demons raged at its fiercest, the Demons fought a grueling struggle against angels, heroes, and humanity. To counter the Blademaster specifically crafted to slay demonkind, an Archdemon used the corpses of countless fallen soldiers alongside his own essence and blood to forge a terrifying demon sword that struck fear into all. This demon sword possessed monstrous destructive power and could absorb the vitality and magic of every living thing nearby. Wielding this dreadful weapon, the Archdemon was undefeated, until even he could no longer withstand the blade's overwhelming power and collapsed into a lifeless corpse. From that moment on, no one dared to touch the sword again. Thus, the Demon Sword Vita was locked away in the Archdemon's personal treasury, left in utter darkness. That is, until the day a certain clothes-less Archdemon dug her back out, and naturally claimed his spot as her new master.\n\n"I'm so tired of endless slaughter... When will this war finally come to an end?"`,
        [Locale.jp]: `人間と魔族の戦争が苛酷を極めたその時代、魔族と天使・勇者・人間の三勢力は熾烈な抗争に昼夜明け暮れていた。そんな折とある魔王が立ち上がり、魔族を殺すために生まれた聖剣に対抗するべく、無数の戦死者の屍と己の生き血を用いて、身の毛もよだつ悍ましい魔剣を創り上げる。その魔剣は凄まじい殺傷力を有するだけでなく、周囲のすべての生命の、力と魔力を無差別に吸い尽くすことができた。この恐怖の魔剣を振りかざし、向かうところ敵なしとなった魔王だったが、その魔王さえついには魔剣の力を御しきれなくなり、最後には屍となり果てた。その後、この魔剣に触れ得る者はおらず、魔剣ヴィータはそのまま魔王の宝物庫に安置され、それきり日の目を浴びることは無くなった。──その日、とある全裸の魔王が彼女を掘り起こし、当然のように新たな主を名乗り出すまでは。\n\n『果ての無い殺戮にはもううんざりです。戦は……いつになったら終わるのでしょうか？』`,
        [Locale.kr]: `인간과 마족의 전쟁이 가장 치열했던 그 시절, 마족은 천사와 용자, 인간이라는 세 세력에 맞서 고군분투하고 있었다. 마족을 처단하기 위해 탄생한 성검에 맞서고자, 어느 마왕은 수많은 전사자들의 시체와 자신의 정혈을 이용해 악명 높은 마검을 만들어냈다. 그 마검은 강력한 살상력을 지녔을 뿐만 아니라, 주변의 모든 생명체가 지닌 힘과 마력까지 흡수할 수 있었다. 마왕은 그 무시무시한 마검을 휘두르며 승승장구했으나, 결국 그조차도 마검의 힘을 감당하지 못하고 시체가 되고 말았다. 그 후로는 누구도 감히 그 마검에 손대려 하지 않았고, 마검 비타는 그렇게 마왕 전용 보물창고 깊은 곳에 안치된 채 오랫동안 세상에 모습을 드러내지 못했다. 그러던 어느 날, 옷도 입지 않은 한 마왕이 그녀를 다시 파내고는, 당연하다는 듯 그녀의 새로운 주인이 되었다.\n\n『끝없는 살육엔 이제 지쳤어요. 전쟁은... 대체 언제쯤 끝나는 걸까요?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/09/09",
    essence: UnitEssence[UnitCode.vita],
    thumbnail: UnitEssence[UnitCode.vita],
    selection: UnitSelection[UnitCode.vita],
    clothes: UnitFullImage[UnitCode.vita],
    tagList: [],
    otherVersion: [],
    initHP: 3440,
    initATK: 1073.6,
    puzzle: [],
    outfits: UnitOutfits[UnitCode.vita],
    voiceSet: UnitVoice[UnitCode.vita],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
