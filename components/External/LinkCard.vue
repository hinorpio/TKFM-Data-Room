<template>
    <v-row>
        <v-spacer></v-spacer>
        <base-expand-card :title="$t('External Website')" icon="mdi-link" :isExpand="false" >
            <div slot="content" class="pa-4">
                <h2 class="mb-8">{{ $t('Offical Link') }}</h2>
                <v-row>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="white" :imgSrc="require('@/assets/logo.png')" :content="getLocalStr(offical_str)" :link="getLocalStr(offical)" />
                    </v-col>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="white" :imgSrc="require('@/assets/post.png')" :content="getLocalStr(post_str)" :link="getLocalStr(post)" />
                    </v-col>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="white" :imgSrc="require('@/assets/external/discord.png')" :content="getLocalStr(discord_str)" :link="getLocalStr(discord)" />
                    </v-col>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="white" :imgSrc="require('@/assets/external/youtube.png')" :content="getLocalStr(youtube_str)" :link="getLocalStr(youtube)" />
                    </v-col>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="white" :imgSrc="require('@/assets/external/facebook.png')" :content="getLocalStr(facebook_fanpage_str)" :link="getLocalStr(facebook_fanpage)" />
                    </v-col>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="white" :imgSrc="require('@/assets/external/facebook.png')" :content="getLocalStr(facebook_group_str)" :link="getLocalStr(facebook_group)" />
                    </v-col>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="white" :imgSrc="require('@/assets/external/x.png')" :content="getLocalStr(x_str)" :link="getLocalStr(x)" />
                    </v-col>
                </v-row>

                <v-divider class="my-8"></v-divider>

                <h2 class="my-8">{{ $t('Useful Tools') }}</h2>
                <v-row>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="#f48fb1" :imgSrc="require('@/assets/external/tkfmtools.png')" :content="getLocalStr(tkfmtools_str)" :link="getLocalStr(tkfmtools)" />
                    </v-col>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="#3f568b" :imgSrc="require('@/assets/external/tenkaAssist.png')" :content="getLocalStr(tenkaAssist_str)" :link="getLocalStr(tenkaAssist)" />
                    </v-col>
                </v-row>
                <!-- <a class="hyperlink-class" target="_blank" :href="getLocalStr(tkfmvercelapp)">
                    <span :class="linkClass">{{ getLocalStr(tkfmvercelapp_str) }}</span>
                </a> -->

                <v-divider class="my-8"></v-divider>

                <h2 class="my-8">{{ $t('Wiki') }}</h2>
                <v-row>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="#3ac3fd" :imgSrc="require('@/assets/external/gamekee.png')" :content="getLocalStr(gamekeeTkfmWiki_str)" :link="getLocalStr(gamekeeTkfmWiki)" />
                    </v-col>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="#622994" :imgSrc="require('@/assets/external/wikiru.png')" :content="getLocalStr(japanTkfmWiki_str)" :link="getLocalStr(japanTkfmWiki)" />
                    </v-col>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                        <link-button color="#3d414d" :imgSrc="require('@/assets/external/arcalive.png')" :content="getLocalStr(koreaTkfmWiki_str)" :link="getLocalStr(koreaTkfmWiki)" />
                    </v-col>
                </v-row>


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
import LinkButton from "./LinkButton.vue";

@Component({
    components: {
        BaseExpandCard,
        LinkButton
    }
})
export default class LinkCard extends Vue {
    getLocalStr(link: {[lang in Locale]: string}): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        return link[locale]
    }

    get linkClass(): string  {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-2', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1')}`
    }
    
    offical: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://tenkafuma.com/zh-Hant',
        [Locale.sc]: 'https://tenkafuma.com/zh-Hans',
        [Locale.en]: 'https://tenkafuma.com/en',
        [Locale.jp]: 'https://tenkafuma.com/ja',
        [Locale.kr]: 'https://tenkafuma.com/ko',
    }

    offical_str: {[lang in Locale]: string} = {
        [Locale.tc]: '官方網站',
        [Locale.sc]: '官方网站',
        [Locale.en]: 'Offical Website',
        [Locale.jp]: '公式ウェブサイト',
        [Locale.kr]: '공식 사이트',
    }

    post: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.cht.forum.tenkafuma.com',
        [Locale.sc]: 'https://www.chs.forum.tenkafuma.com',
        [Locale.en]: 'https://www.eng.forum.tenkafuma.com',
        [Locale.jp]: 'https://www.jp.forum.tenkafuma.com',
        [Locale.kr]: 'https://www.kr.forum.tenkafuma.com',
    }

    post_str: {[lang in Locale]: string} = {
        [Locale.tc]: '運營公告',
        [Locale.sc]: '运营公告',
        [Locale.en]: 'Announcements',
        [Locale.jp]: 'お知らせ',
        [Locale.kr]: '운영 공지',
    }

    discord: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://discord.gg/RRRABMtHYj',
        [Locale.sc]: 'https://discord.gg/RRRABMtHYj',
        [Locale.en]: 'https://discord.gg/RRRABMtHYj',
        [Locale.jp]: 'https://discord.gg/RRRABMtHYj',
        [Locale.kr]: 'https://discord.gg/RRRABMtHYj',
    }

    discord_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'Discord',
        [Locale.sc]: 'Discord',
        [Locale.en]: 'Discord',
        [Locale.jp]: 'Discord',
        [Locale.kr]: 'Discord',
    }

    youtube: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.sc]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.en]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.jp]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.kr]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
    }

    youtube_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'Youtube',
        [Locale.sc]: 'Youtube',
        [Locale.en]: 'Youtube',
        [Locale.jp]: 'Youtube',
        [Locale.kr]: 'Youtube',
    }

    facebook_fanpage: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.facebook.com/TenkafuMA',
        [Locale.sc]: 'https://www.facebook.com/TenkafuMA',
        [Locale.en]: 'https://www.facebook.com/TenkafuMA',
        [Locale.jp]: 'https://www.facebook.com/TenkafuMA',
        [Locale.kr]: 'https://www.facebook.com/TenkafuMA',
    }

    facebook_fanpage_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'FB 粉絲專頁',
        [Locale.sc]: 'FB 粉丝专页',
        [Locale.en]: 'FB Fanpage',
        [Locale.jp]: 'FB ファンページ',
        [Locale.kr]: 'FB 중국 팬 페이지',
    }

    facebook_group: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.sc]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.en]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.jp]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.kr]: 'https://www.facebook.com/groups/2707800699549152',
    }

    facebook_group_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'FB 中文社團',
        [Locale.sc]: 'FB 中文社团',
        [Locale.en]: 'FB Group',
        [Locale.jp]: 'FB グループ',
        [Locale.kr]: 'FB 중국 클럽',
    }

    x: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://x.com/tenkafuma',
        [Locale.sc]: 'https://x.com/tenkafuma',
        [Locale.en]: 'https://x.com/tenkafumaE',
        [Locale.jp]: 'https://x.com/tenkafuma',
        [Locale.kr]: 'https://x.com/TenkafumaK',
    }

    x_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'X / Twitter',
        [Locale.sc]: 'X / Twitter',
        [Locale.en]: 'X / Twitter',
        [Locale.jp]: 'X / Twitter',
        [Locale.kr]: 'X / Twitter',
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

    tkfmvercelapp: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://tkfm.vercel.app/',
        [Locale.sc]: 'https://tkfm.vercel.app/',
        [Locale.en]: 'https://tkfm.vercel.app/',
        [Locale.jp]: 'https://tkfm.vercel.app/',
        [Locale.kr]: 'https://tkfm.vercel.app/',
    }

    tkfmvercelapp_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔戰鬥模擬器',
        [Locale.sc]: '天下布魔战斗模拟器',
        [Locale.en]: 'TenkafuMA Vercel App',
        [Locale.jp]: 'TenkafuMA Vercel App',
        [Locale.kr]: 'TenkafuMA Vercel App',
    }

    tenkaAssist: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://inittt.github.io/tenkaassist/',
        [Locale.sc]: 'https://inittt.github.io/tenkaassist/',
        [Locale.en]: 'https://inittt.github.io/tenkaassist/',
        [Locale.jp]: 'https://inittt.github.io/tenkaassist/',
        [Locale.kr]: 'https://inittt.github.io/tenkaassist/',
    }

    tenkaAssist_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'TenkaAssist',
        [Locale.sc]: 'TenkaAssist',
        [Locale.en]: 'TenkaAssist',
        [Locale.jp]: 'TenkaAssist',
        [Locale.kr]: 'TenkaAssist',
    }
    
    gamekeeTkfmWiki: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.gamekee.com/tenkafuma/',
        [Locale.sc]: 'https://www.gamekee.com/tenkafuma/',
        [Locale.en]: 'https://www.gamekee.com/tenkafuma/',
        [Locale.jp]: 'https://www.gamekee.com/tenkafuma/',
        [Locale.kr]: 'https://www.gamekee.com/tenkafuma/',
    }

    gamekeeTkfmWiki_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'Gamekee',
        [Locale.sc]: 'Gamekee',
        [Locale.en]: 'Gamekee',
        [Locale.jp]: 'Gamekee',
        [Locale.kr]: 'Gamekee',
    }

    japanTkfmWiki: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://tenkafuma.wikiru.jp/',
        [Locale.sc]: 'https://tenkafuma.wikiru.jp/',
        [Locale.en]: 'https://tenkafuma.wikiru.jp/',
        [Locale.jp]: 'https://tenkafuma.wikiru.jp/',
        [Locale.kr]: 'https://tenkafuma.wikiru.jp/',
    }

    japanTkfmWiki_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'wikiru.jp',
        [Locale.sc]: 'wikiru.jp',
        [Locale.en]: 'wikiru.jp',
        [Locale.jp]: 'wikiru.jp',
        [Locale.kr]: 'wikiru.jp',
    }

    koreaTkfmWiki: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://arca.live/w/tenkafumaa/%ED%85%90%EC%B9%B4%ED%91%B8%EB%A7%88',
        [Locale.sc]: 'https://arca.live/w/tenkafumaa/%ED%85%90%EC%B9%B4%ED%91%B8%EB%A7%88',
        [Locale.en]: 'https://arca.live/w/tenkafumaa/%ED%85%90%EC%B9%B4%ED%91%B8%EB%A7%88',
        [Locale.jp]: 'https://arca.live/w/tenkafumaa/%ED%85%90%EC%B9%B4%ED%91%B8%EB%A7%88',
        [Locale.kr]: 'https://arca.live/w/tenkafumaa/%ED%85%90%EC%B9%B4%ED%91%B8%EB%A7%88',
    }

    koreaTkfmWiki_str: {[lang in Locale]: string} = {
        [Locale.tc]: 'arca.live',
        [Locale.sc]: 'arca.live',
        [Locale.en]: 'arca.live',
        [Locale.jp]: 'arca.live',
        [Locale.kr]: 'arca.live',
    }

}
</script>
<style lang="sass" scoped>
.hyperlink-class
    text-decoration: none
</style>
