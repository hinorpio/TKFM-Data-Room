<template>
    <v-container class="r18-warning">
        <v-card>
            <v-card-title class="text-center">{{ getLocalStr(header) }}</v-card-title>
            <v-card-text>
                <p>{{ getLocalStr(p1_str) }}</p>
                <p>{{ getLocalStr(p2_str) }}</p>
            </v-card-text>
            <v-card-actions>
                <v-btn class="ma-2" color="primary" @click="proceed">{{ getLocalStr(confirm_str) }}</v-btn>
                <v-btn class="ma-2" color="error" @click="decline">{{ getLocalStr(decline_str) }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";

@Component
export default class R18Warning extends Vue {

    getLocalStr(link: {[lang in Locale]: string}): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        return link[locale]
    }

    proceed(): void {
        const locale = this.$i18n.locale as keyof typeof Locale
        const localePrefix = (locale === 'tc')?`` :`/${locale}`
        const path = this.$route.query.query as string
        this.$cookies.set('r18_warning_acknowledged', true); // Store the acknowledgment status in a cookie
        location.replace(`${localePrefix}${path}`)
    }

    decline(): void {
        this.$cookies.set('r18_warning_acknowledged', false); // Store the acknowledgment status in a cookie
        window.history.go(-2);
    }

    mounted(): void {
        const locale = this.$i18n.locale as keyof typeof Locale
        const localePrefix = (locale === 'tc')?`` :`/${locale}`
        
        const r18WarningAcknowledged = this.$cookies.get('r18_warning_acknowledged');
        if (r18WarningAcknowledged) {
            this.$router.push(`${this.$route.query}`); // Redirect the user to the home page or any other appropriate page
        }
    }

    header: {[lang in Locale]: string} = {
        [Locale.tc]: 'R-18 內容警告',
        [Locale.sc]: 'R-18 內容警告',
        [Locale.en]: 'R-18 Content Warning',
        [Locale.jp]: 'R-18警告',
        [Locale.kr]: 'R-18 콘텐츠 경고',
    }

    p1_str: {[lang in Locale]: string} = {
        [Locale.tc]: '本網站包含成人內容，僅適合年滿 18 歲的使用者。',
        [Locale.sc]: '本网站包含成人内容，仅适合年满 18 岁的使用者。',
        [Locale.en]: 'This website contains adult content and is only suitable for users aged 18 or over.',
        [Locale.jp]: 'このウェブサイトにはアダルト コンテンツが含まれており、18 歳以上のユーザーのみが閲覧できます。',
        [Locale.kr]: '이 웹사이트에는 성인용 콘텐츠가 포함되어 있으며 18세 이상의 사용자에게만 적합합니다.',
    }

    p2_str: {[lang in Locale]: string} = {
        [Locale.tc]: '如果您未滿18歲或不希望查看成人內容，請立即離開此頁面。',
        [Locale.sc]: '如果您未满18岁或不希望查看成人内容，请立即离开此页面。',
        [Locale.en]: 'If you are under 18 or do not wish to view adult content, please leave this page immediately.',
        [Locale.jp]: '18 歳未満の方、またはアダルト コンテンツを閲覧したくない方は、直ちにこのページから離れてください。',
        [Locale.kr]: '18세 미만이거나 성인 콘텐츠를 보고 싶지 않은 경우 즉시 이 페이지에서 나가시기 바랍니다.',
    }

    confirm_str: {[lang in Locale]: string} = {
        [Locale.tc]: '我已年滿 18 歲',
        [Locale.sc]: '我已年满 18 岁',
        [Locale.en]: 'I am over 18',
        [Locale.jp]: '私は18歳以上です',
        [Locale.kr]: '나는 18세 이상입니다',
    }

    decline_str: {[lang in Locale]: string} = {
        [Locale.tc]: '我未滿 18 歲',
        [Locale.sc]: '我未满 18 岁',
        [Locale.en]: 'I am below 18',
        [Locale.jp]: '私は18歳未満です',
        [Locale.kr]: '나는 18세 미만입니다',
    }

}
</script>

<style lang="sass" scoped>
.r18-warning
    display: flex
    justify-content: center
    align-items: center
    height: 90vh

.text-center 
    text-align: center

</style>