<template>
    <v-data-table hide-default-footer :items-per-page="-1" :headers="headers" :items="result" :mobile-breakpoint="0" class="px-0">
        <template v-slot:no-data>
            NO_TAG_SELECTED
        </template>
        <template v-slot:[`item.tag`]="{ item }">
            <v-col class="my-2">
                <v-row v-for="(tag, index) in item.tag" :key="index" class="justify-end">
                    <v-chip label outlined :color="$store.state.themeColor" class="mx-1 px-2" :small="isMobile">
                        <b>{{ tag }}</b>
                    </v-chip>
                </v-row>
            </v-col>
        </template>
        <template v-slot:[`item.units`]="{ item }">
            <div class="my-2">
                <v-chip v-for="(unit, index) in item.units" :key="index" outlined :color="getRarityColor(unit.rarity)" class="mx-1 px-2" :large="!isMobile">
                    <v-img :width="thumbnailSize" :height="thumbnailSize" :src="unit.icon"></v-img>
                    <b>{{ unit.name }}</b>
                </v-chip>
            </div>
        </template>
    </v-data-table>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Locale, Rarity, TagID } from '@/plugins/utils/enums'
import { RarityColor } from '~/static/const';

@Component
export default class FilterByCombination extends Vue {
    @Prop({ type: Array, required: true })
    result!: [];

    headers = [
        {text: this.$t('Tag'), value: 'tag', sortable: false, class: 'px-0', cellClass: 'px-0', width: '10%'},
        {text: this.$t('Unit Name'), value: 'units', sortable: false},
    ]

    get isMobile(): boolean {
        return this.$vuetify.breakpoint.name == 'xs';
    }

    get tableStringClass(): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'caption', 'subtitle-2', 'caption', 'subtitle-1', 'subtitle-1')
    }

    get thumbnailSize(): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '3em', '5em', '5em', '5em', '5em')
    }

    get showPrefix(): boolean{
        return this.$vuetify.breakpoint.name !== 'xs'
    }

    showCombinationString(combination: TagID[][], isUnique: boolean): string {
        const beginText = (isUnique)?this.$t("Tag Guarantee") :this.$t("Tag Guarantee SR");
        var result = ""
        combination.forEach(tagIDs => {
            const locale = this.$i18n.locale as keyof typeof Locale
            var tagNameArr = this.$util.getTagByIDs(tagIDs).map(tag => tag.name[locale])
            result += '\n'
            tagNameArr.forEach((tagName, index) => {
                result += (index !== 0)?',':''
                result += (tagName) ?.replace(/\n/g, ' '); // there is a korean tag that is shit ton long 전투하면\n할수록 강해진다
            })
        })
        return `${beginText}${result}`
    }

    getRarityColor(rarity: Rarity){
        return RarityColor[rarity]
    }
}
</script>
<style lang="sass" scoped>
.outline-box
    padding: 1px
    width: 100%
</style>