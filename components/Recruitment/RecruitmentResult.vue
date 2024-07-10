<template>
    <v-card class="outline-box" outline color="white">
        <v-card-text>
            <v-row class="ma-2">
                <v-icon class="mr-2">
                    mdi-layers-search
                </v-icon>
                <span class="title font-weight-bold">{{ $t('Filter Result') }}</span>
            </v-row>
            <v-divider></v-divider>
            <v-data-table hide-default-footer :items-per-page="-1" :headers="headers" :items="filterResult" :mobile-breakpoint="0" class="px-0">
                <template v-slot:no-data>
                    NO_TAG_SELECTED
                </template>
                <template v-slot:[`item.icon`]="{ item }">
                    <v-img :src="item.icon" :width="thumbnailSize" :height="thumbnailSize" contain />
                </template>
                <template v-slot:[`item.fullname`]="{ item }">
                    <v-col class="py-0 px-0">
                        <v-row>
                            <v-col :cols="9" class="align-self-center">
                                <v-row>
                                    <span :class="tableStringClass">{{`${item.prefix}`}}</span>
                                </v-row>
                                <v-row>
                                    <span :class="tableStringClass">{{`${item.name}`}}</span>
                                </v-row>
                            </v-col>
                            <v-col class="mx-0 px-0 align-self-center">
                                <v-icon small class="mx-0 px-0" v-if="item.isUnique">
                                    mdi-star-circle
                                </v-icon>
                                <v-icon small class="mx-0 px-0" v-if="item.isGuaranteeSR">
                                    mdi-tag
                                </v-icon>
                            </v-col>
                        </v-row>
                    </v-col>
                </template>
                <template v-slot:[`item.rarity`]="{ item }">
                    <v-img :src="$util.getRarityIcon(item.rarity)" :width="raritySize" :height="raritySize" contain />
                </template>
                <template v-slot:[`item.tag`]="{ item }">
                    <v-chip v-for="(tag, index) in item.tag" :key="index" label outlined :color="$store.state.themeColor" class="mx-1 px-2" small>
                        <b>{{ tag }}</b>
                    </v-chip>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Locale } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit';
import { Tag } from '@/interface/tag';

@Component
export default class RecruitmentResult extends Vue {
    @Prop({ type: Array, required: true })
    value!: number[];

    @Prop({ type: Array, required: true, default: {} })
    tagList!: Tag[];

    @Prop({ type: Array, required: true, default: {} })
    unitList!: Unit[];

    @Prop({ type: Object, required: true, default: { hours: 9, minutes: '00' } })
    readonly recruitmentTime!: { hours: number; minutes: string };

    headers = [
        {text: this.$t('Unit Name'), value: 'icon', class: 'px-0', cellClass: 'px-0', width: '10%', sortable: false,},
        {value: 'fullname', sortable: false},
        {text: this.$t('Rarity'), value: 'rarity', class: 'px-0', cellClass: 'px-0', sortable: false},
        {text: this.$t('Tag'), value: 'tag', sortable: false, class: 'px-0', cellClass: 'px-0', width: this.getTagColumWidth()},
    ]

    get selectedTag(): number[] {
        return this.value;
    }

    set selectedTag(tags: number[]) {
        this.$emit("input", tags);
    }

    get filterResult(): object {
        const locale = this.$i18n.locale as keyof typeof Locale
        return this.unitList
            .filter(unit => unit.tagList.some(tag => this.selectedTag.includes(tag))) // Filter unit that contain tag in selectedTag
            .filter(r => // Filter the SSR if LEADER tag didnt selected or recruitment hours are less than 4 hours
                (r.rarity !== 'SSR' && r.rarity !== 'SR') || 
                (r.rarity === 'SSR' && this.recruitmentTime.hours >= 4 && this.selectedTag.includes(21)) ||
                (r.rarity === 'SR' && this.recruitmentTime.hours >= 4)
            ) 
            .map(unit => {  // Map the array for display so that the row will show the tagList of unit that the selectedTag contained
                const showTag = this.handleShowTag(unit.tagList);
                return {
                    icon: unit.thumbnail,
                    prefix: unit.prefix[locale],
                    name: unit.name[locale],
                    rarity: unit.rarity,
                    tag: showTag.map((tag: Tag) => tag.name[locale]),
                    isUnique: this.$util.checkIsTagListUnique(showTag.map(tag => tag.ID), this.unitList),
                    isGuaranteeSR: this.$util.checkIsTagListGuaranteeSR(showTag.map(tag => tag.ID), this.unitList),
                };
            })
            .sort((a, b) => b.tag.length - a.tag.length)
            .sort((a, b) => b.rarity.localeCompare(a.rarity))
            .sort((a, b) => b.isUnique ? 1 : -1);
    }

    get tableStringClass(): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'caption', 'subtitle-2', 'subtitle-2', 'subtitle-1', 'subtitle-1')
    }

    get thumbnailSize(): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '2.5em', '4em', '3.5em', '5em', '5em')
    }

    get raritySize(): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '2em', '2.5em', '2.5em', '2.5em', '2.5em')
    }

    handleShowTag(unitTagList: number[]): Tag[] {
        return this.tagList.filter(tag => this.selectedTag.includes(tag.ID) && unitTagList.includes(tag.ID));
    }

    getTagColumWidth(): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '10%', '50%', '20%', '30%', '50%')
    }
}
</script>
<style lang="sass" scoped>
.outline-box
    padding: 1px
    width: 100%
</style>