<template>
    <v-row>
        <v-spacer></v-spacer>
        <base-expand-card :title="$t('About')" icon="mdi-information-outline" >
            <div slot="content" class="pa-4">
                <h1 v-if="!isMobile" class="mb-8">
                    {{ `${$t('TKFM Data Room')} ver.${$store.state.version}` }}
                </h1>
                <div v-else class="mb-8">
                    <h1>{{ `${$t('TKFM Data Room')}` }}</h1>
                    <h2 class="mt-2">{{ `ver.${$store.state.version}` }}</h2>
                </div>
                <h2 class="mb-4">{{ $t('Introduction') }}</h2>
                <span :class="linkClass" v-html="$util.showPreLineText(getLocalStr(introduction_str))"></span>
                <h2 class="mt-8 mb-4">{{ $t('Disclaimer') }}</h2>
                <span :class="linkClass" v-html="$util.showPreLineText(getLocalStr(disclaimer_str))"></span>
                <h2 class="mt-8 mb-4">{{ $t('Game art') }}</h2>
                <span :class="linkClass" v-html="$util.showPreLineText(getLocalStr(gameArt_str))"></span>
                <!-- <h2 class="mt-8 mb-4">{{ $t('Special Thanks') }}</h2> -->
                <h2 class="mt-8 mb-4">{{ $t('Feedback') }}</h2>
                <span :class="linkClass">
                    {{ getLocalStr(feedback_str) }}
                    <a class="hyperlink-class" target="_blank" :href="getLocalStr(issue)">
                        <span :class="linkClass">{{$t('Feedback-url')}}</span>
                    </a>
                </span>
                <h2 class="mt-8 mb-4">{{ $t('Reference') }}</h2>
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(tkfmtools)">
                    <span :class="linkClass">{{ getLocalStr(tkfmtools_str) }}</span>
                </a>
                <br />
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(gamekeeTkfmWiki)">
                    <span :class="linkClass">{{ getLocalStr(this.gamekeeTkfmWiki_str) }}</span>
                </a>
                <br />
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(japanTkfmWiki)">
                    <span :class="linkClass">{{ getLocalStr(japanTkfmWiki_str) }}</span>
                </a>
                <br />
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(koreaTkfmWiki)">
                    <span :class="linkClass">{{ getLocalStr(koreaTkfmWiki_str) }}</span>
                </a>
            </div>
        </base-expand-card>
        <v-spacer></v-spacer>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import BaseExpandCard from "../BaseExpandCard.vue";
import { Locale } from "~/plugins/utils/enums";

@Component({
    components: {
        BaseExpandCard
    }
})
export default class About extends Vue {
    getLocalStr(link: {[lang in Locale]: string}): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        return link[locale]
    }

    get linkClass(): string  {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-2', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1')}`
    }

    get isMobile(): boolean {
        return this.$vuetify.breakpoint.name == 'xs';
    }

    introduction_str: {[lang in Locale]: string} = {
        [Locale.tc]: `本人為天下布魔 Discord 中文官方討論區內的機器人「過勞的娜娜」的作者。鑑於「天下布魔工具箱」的作者已經停更了網站，本站的初衷便是接替該站的功能並且融合「過勞的娜娜」的功能而製成的網站。\n\n本站為基於手遊「天下布魔」中數據所建之網站，旨在統整資料、並提供方便的工具。\n\n本站包含全境徵才、角色技能資料、角色潛力計算、活動時序、派遣資訊、畫作/二創。`,
        [Locale.sc]: `本人为天下布魔 Discord 中文官方讨论区内的机器人「过劳的娜娜」的作者。鉴于「天下布魔工具箱」的作者已经停更了网站，本站的初衷便是接替该站的功能并且融合「过劳的娜娜」的功能而制成的网站。\n\n本站为基于手游「天下布魔」中数据所建之网站，旨在统整资料、并提供方便的工具。\n\n本站包含全境征才、角色技能资料、角色潜力计算、活动时序、派遣资讯、画作/二创。`,
        [Locale.en]: `I am the author of the Bot "Overworked Nana" in TenkafuMA! Offical Discord Chinese Channel. Since the author of "TenkafuMA Toolbox" has stopped updating the website, the aim of this website is to take over the functions of that website and integrate the functions of "Overworked Nana".\n\nThe goal of this website is to collect, organize, and present TenkafuMA data.\n\nThis website includes a recruitment filter, character detail, character potential calculator, event timeline, dispatch info and artwork / fanart .`,
        [Locale.jp]: `<u>ChatGPTによる翻訳 - (Translated by ChatGPT)</u>\n\n私は「天下布魔 Discord 中国語公式チャンネル」におけるボット「過労のナナ」の作者です。『天下布魔道具箱』の作者がウェブサイトの更新を停止しているため、このウェブサイトの目的はそのウェブサイトの機能を引き継ぎ、「過労のナナ」の機能を統合することです。\n\nこのウェブサイトの目標は、天下布魔のデータを収集し、整理して提示することです。\n\nこのウェブサイトには、召集令、キャラクターの詳細、キャラクターのポテンシャル計算機、イベントタイムライン、および派遣情報、アートワーク / 同人が含まれています。`,
        [Locale.kr]: `<u>ChatGPT로 번역됨 - (Translated by ChatGPT)</u>\n\n공식 텐카푸마 디스코드 중국어 채널의 '지친 나나' 봇의 저자입니다. '텐카푸마 툴박스'의 저자가 웹사이트 업데이트를 중단했기 때문에 이 웹사이트의 목적은 그 웹사이트의 기능을 이어받고 '지친 나나'의 기능을 통합하는 것입니다.\n\n이 웹사이트의 목표는 텐카푸마 데이터를 수집, 정리하고 제공하는 것입니다.\n\n이 웹사이트에는 모든 구인 정보, 캐릭터 세부 정보, 캐릭터 잠재력 계산기, 이벤트 타임라인, 파견 정보가 및 아트워크 / 팬 창작 포함되어 있습니다.`,
    }

    disclaimer_str: {[lang in Locale]: string} = {
        [Locale.tc]: '本站工具所用數據多為熱心玩家自主蒐集，實際情形請以官方及遊戲內為主，因本站資料所致利害一概不負責。',
        [Locale.sc]: '本站工具所用数据多为热心玩家自主搜集，实际情形请以官方及游戏内为主，因本站资料所致利害一概不负责。',
        [Locale.en]: 'All materials and information on this website are collected by players and may not reflect the actual situation. In all circumstances, actual game data shall prevail.',
        [Locale.jp]: 'このサイトで使用しているデータは熱心なプレイヤーの皆さまが集めたものです。実際の内容は公式サイト及びゲームを基準とします。この資料によって発生した一切の利害に関して責任は負いません。',
        [Locale.kr]: '본 사이트는 텐카푸마 플레이어가 제공해 수집한 데이터로 구성됩니다. 실제 상황은 공식 공지사항 및 게임 내 컨텐츠 정보를 기준으로 합니다. 저희는 본 사이트 내용으로 인해 발생한 모든 이익과 손해에 대한 책임을 지지 않습니다.',
    }

    gameArt_str: {[lang in Locale]: string} = {
        [Locale.tc]: '基於著作權法 §65 引用，著作財產權屬著作權人所有。若著作權人要求將盡速撤除。',
        [Locale.sc]: '基于著作权法 §65 引用，著作财产权属著作权人所有。若著作权人要求将尽速撤除。',
        [Locale.en]: 'Used under R.O.C. Copyright Act §65, all rights are reserved for the copyright owner.',
        [Locale.jp]: '著作権 §65により、著作財産権は著作権をもつ者に帰属します。著作者が要求した場合、直ちに削除しなければなりません。',
        [Locale.kr]: '저작권법 제65조 규정에 따르면, 지적재산권은 저작권자 소유입니다. 만약 저작권자가 게임에 관한 내용을 이용 금지할 경우 반드시 신속하게 해당 내용을 철회해야 합니다.',
    }

    feedback_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'Bug、建議、使用心得等請至 ',
        [Locale.sc]: 'Bug、建议、使用心得等请至 ',
        [Locale.en]: 'Bug reports, suggestions, and thoughts are always welcome. Please check ',
        [Locale.jp]: '不具合、ご意見・ご感想は ',
        [Locale.kr]: 'Bug, 건의 사항, 사용 후기는 ',
    }

    issue: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://github.com/hinorpio/TKFM-Data-Room/issues',
        [Locale.sc]: 'https://github.com/hinorpio/TKFM-Data-Room/issues',
        [Locale.en]: 'https://github.com/hinorpio/TKFM-Data-Room/issues',
        [Locale.jp]: 'https://github.com/hinorpio/TKFM-Data-Room/issues',
        [Locale.kr]: 'https://github.com/hinorpio/TKFM-Data-Room/issues',
    }

    tkfmtools: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://purindaisuki.github.io/tkfmtools/',
        [Locale.sc]: 'https://purindaisuki.github.io/tkfmtools/',
        [Locale.en]: 'https://purindaisuki.github.io/tkfmtools/en/',
        [Locale.jp]: 'https://purindaisuki.github.io/tkfmtools/ja/',
        [Locale.kr]: 'https://purindaisuki.github.io/tkfmtools/ko/',
    }

    tkfmtools_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔工具箱',
        [Locale.sc]: '天下布魔工具箱',
        [Locale.en]: 'TenkafuMA Toolboxs',
        [Locale.jp]: '天下布魔道具箱',
        [Locale.kr]: '텐카푸마 툴박스',
    }

    gamekeeTkfmWiki: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.gamekee.com/tenkafuma/',
        [Locale.sc]: 'https://www.gamekee.com/tenkafuma/',
        [Locale.en]: 'https://www.gamekee.com/tenkafuma/',
        [Locale.jp]: 'https://www.gamekee.com/tenkafuma/',
        [Locale.kr]: 'https://www.gamekee.com/tenkafuma/',
    }

    gamekeeTkfmWiki_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔 Wiki (Gamekee)',
        [Locale.sc]: '天下布魔 Wiki (Gamekee)',
        [Locale.en]: 'TKFM Wiki (Gamekee)',
        [Locale.jp]: '天下布魔 Wiki (Gamekee)',
        [Locale.kr]: '텐카푸마 Wiki (Gamekee)',
    }

    japanTkfmWiki: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://tenkafuma.wikiru.jp/',
        [Locale.sc]: 'https://tenkafuma.wikiru.jp/',
        [Locale.en]: 'https://tenkafuma.wikiru.jp/',
        [Locale.jp]: 'https://tenkafuma.wikiru.jp/',
        [Locale.kr]: 'https://tenkafuma.wikiru.jp/',
    }

    japanTkfmWiki_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔攻略 Wiki (Japan)',
        [Locale.sc]: '天下布魔攻略 Wiki (Japan)',
        [Locale.en]: 'TKFM Wiki (Japan)',
        [Locale.jp]: '天下布魔攻略 Wiki (Japan)',
        [Locale.kr]: '텐카푸마 Wiki (Japan)',
    }

    koreaTkfmWiki: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://arca.live/w/tenkafumaa/%ED%85%90%EC%B9%B4%ED%91%B8%EB%A7%88',
        [Locale.sc]: 'https://arca.live/w/tenkafumaa/%ED%85%90%EC%B9%B4%ED%91%B8%EB%A7%88',
        [Locale.en]: 'https://arca.live/w/tenkafumaa/%ED%85%90%EC%B9%B4%ED%91%B8%EB%A7%88',
        [Locale.jp]: 'https://arca.live/w/tenkafumaa/%ED%85%90%EC%B9%B4%ED%91%B8%EB%A7%88',
        [Locale.kr]: 'https://arca.live/w/tenkafumaa/%ED%85%90%EC%B9%B4%ED%91%B8%EB%A7%88',
    }

    koreaTkfmWiki_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'arca.live 天下布魔Wiki (Korea)',
        [Locale.sc]: 'arca.live 天下布魔Wiki (Korea)',
        [Locale.en]: 'arca.live TKFM Wiki (Korea)',
        [Locale.jp]: 'arca.live 天下布魔Wiki (Korea)',
        [Locale.kr]: 'arca.live 텐카푸마Wiki (Korea)',
    }

}
</script>
<style lang="sass" scoped>
.hyperlink-class
    text-decoration: none
</style>
