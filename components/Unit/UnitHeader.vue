<template>
    <v-row class="align-center" >
        <v-avatar :size="iconSize" class="ml-3" tile>
            <v-img :src="$util.getRarityIcon(unit.rarity)"  />
        </v-avatar>
        <v-avatar :size="iconSize" class="ml-3" tile>
            <v-img :src="$util.getElementIcon(unit.element)"  />
        </v-avatar>
        <v-avatar :size="iconSize" class="ml-3" tile>
            <v-img :src="$util.getPositionIcon(unit.position)"  />
        </v-avatar>
        <v-col v-if="strLengthExceedWidth(unit)" class="ml-2">
            <span :class="titleClass">{{`${unit.prefix[$i18n.locale]}`}}</span>
            <br />
            <span :class="titleClass">{{`${unit.name[$i18n.locale]}`}}</span>
        </v-col>
        <v-col v-else class="ml-1">
            <span :class="titleClass">{{`${unit.prefix[$i18n.locale]} ${unit.name[$i18n.locale]}`}}</span>
        </v-col>
        <!-- <v-col class="ml-1">
            <span :class="titleClass">{{`${unit.prefix[$i18n.locale]} ${unit.name[$i18n.locale]}`}}</span>
        </v-col> -->
    </v-row>
</template>
<script lang="js">
import Vue from "vue";
export default Vue.extend({
    props: {
        unit: {
            type: Object,
            required: true,
            default: {},
        },
    },
    computed: {
        iconSize(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '2em'
                case 'sm': return '2em'
                case 'md': return '2em'
                case 'lg': return '2.5em'
                case 'xl': return '3em'
            }
        },
        titleClass(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 'title font-weight-bold'
                case 'sm': return 'title font-weight-bold'
                case 'md': return 'title font-weight-bold'
                case 'lg': return 'headline font-weight-bold'
                case 'xl': return 'display-1 font-weight-bold'
            }
        },
    },
    methods: {
        strLengthExceedWidth(){
            var strLength = this.unit.prefix[this.$i18n.locale].length + this.unit.name[this.$i18n.locale].length
            return (this.$vuetify.breakpoint.name == 'xs' && this.$vuetify.breakpoint.width > 352 && strLength > 7) || (this.$vuetify.breakpoint.width < 352 && strLength > 7)
        },
    },
})
</script>