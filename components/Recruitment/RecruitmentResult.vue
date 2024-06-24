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
                                <v-row class="px-0">
                                    <span :class="tableStringClass">{{`${item.prefix}`}}</span>
                                </v-row>
                                <v-row>
                                    <span :class="tableStringClass">{{`${item.name}`}}</span>
                                </v-row>
                            </v-col>
                            <v-col class="mx-0 px-0">
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
<script lang="js">
import Vue from "vue";

export default Vue.extend({
    props: {
        value: {
            type: Array,
            required: true
        },
        tagList: {
            type: Array,
            required: true,
            default: {},
        },
        unitList: {
            type: Array,
            required: true,
            default: {},
        },
        recruitmentTime: {
            type: Object,
            required: true,
            default: {
                hours: 9, minutes: '00'
            }
        }
    },
    computed: {
        selectedTag: {
            get() {
                return this.value;
            },
            set(tags) {
                this.$emit("input", tags);
            },
        },
        filterResult(){
            return this.unitList
                .filter(unit => unit.tagList.some(tag => this.selectedTag.includes(tag))) // Filter unit that contain tag in selectedTag
                .filter(r => // Filter the SSR if LEADER tag didnt selected or recruitment hours are less than 4 hours
                    (r.rarity !== 'SSR' && r.rarity !== 'SR') || 
                    (r.rarity === 'SSR' && this.recruitmentTime.hours >= 4 && this.selectedTag.includes(21)) ||
                    (r.rarity === 'SR' && this.recruitmentTime.hours >= 4)
                ) 
                .map(unit => {  // Map the array for display so that the row will show the tagList of unit that the selectedTag contained
                    var showTag = this.handleShowTag(unit.tagList)
                    return {
                        icon: unit.thumbnail,
                        prefix: unit.prefix[this.$i18n.locale],
                        name: unit.name[this.$i18n.locale],
                        rarity: unit.rarity,
                        tag: showTag.map(tag => tag[this.$i18n.locale]),
                        isUnique: this.$util.checkIsTagListUnique(showTag.map(tag => tag.ID), this.unitList),
                        isGuaranteeSR: this.$util.checkIsTagListGuaranteeSR(showTag.map(tag => tag.ID), this.unitList),
                    }
                })
                .sort((a, b) => b.tag.length - a.tag.length)
                .sort((a, b) => b.rarity.localeCompare(a.rarity))
                .sort((a, b) => b.isUnique - a.isUnique)
        },
        tableStringClass(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 'caption'
                case 'sm': return 'subtitle-2'
                case 'md': return 'subtitle-2'
                case 'lg': return 'subtitle-1'
                case 'xl': return 'subtitle-1'
            }
        },
        thumbnailSize(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '2.5em'
                case 'sm': return '4em'
                case 'md': return '3.5em'
                case 'lg': return '5em'
                case 'xl': return '5em'
            }
        },
        raritySize(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '2em'
                case 'sm': return '2.5em'
                case 'md': return '2.5em'
                case 'lg': return '2.5em'
                case 'xl': return '2.5em'
            }
        },
    },
    methods: {
        handleShowTag(unitTagList){
            return this.tagList
                .filter(tag => this.selectedTag.includes(tag.ID) && unitTagList.includes(tag.ID))
        },
        getTagColumWidth(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return "10%"
                case 'sm': return "50%"
                case 'md': return "20%"
                case 'lg': return "30%"
                case 'xl': return "50%"
            }
        },
    },
    data(){
        return {
            headers: [
                {text: this.$t('Unit Name'), value: 'icon', class: 'px-0', cellClass: 'px-0', width: '10%', sortable: false,},
                {value: 'fullname', sortable: false},
                {text: this.$t('Rarity'), value: 'rarity', class: 'px-0', cellClass: 'px-0', sortable: false},
                {text: this.$t('Tag'), value: 'tag', sortable: false, class: 'px-0', cellClass: 'px-0', width: this.getTagColumWidth()},
            ]
        }
    }
})
</script>
<style lang="sass" scoped>
.outline-box
    padding: 1px
    width: 100%
</style>