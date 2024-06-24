<template>
    <div v-if="isMounted">
        <v-card>
            <v-toolbar color="green" height="50em">
                <v-row class="align-center">
                    <span class="ml-4 title font-weight-bold">
                        {{$t('Heal')}}
                    </span>
                </v-row>
            </v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col :cols="6">
                        <heal-multiplier :value="stats['HEAL']['MULTIPLIER']" />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script lang="js">
import Vue from "vue";
import BaseRadar from '@/components/BaseRadar/BaseRadar.vue'
import HealMultiplier from '@/components/Unit/UnitTab/StatChart/Heal/HealMultiplier.vue'

export default Vue.extend({
    components: {
        BaseRadar,
        HealMultiplier,
    },
    props: {
        stats: {
            type: Object,
            required: true,
            default: {},
        },
    },
    computed: {
        
    },
    async mounted() {
        this.isMounted = true
    },
    methods: {

    },
    data() {
        return {
            isMounted: false,
        }
    }
})
</script>
<style lang="sass" scoped>
.custom-sheet 
  height: auto
.v-card__text
  overflow: auto
.transparent-sheet
  background-color: transparent
::v-deep .v-window__container
  background-color: #424242

</style>
