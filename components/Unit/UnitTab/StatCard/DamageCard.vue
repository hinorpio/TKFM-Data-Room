<template>
    <div v-if="isMounted">
        <v-card>
            <v-toolbar color="red" height="50em">
                <v-row class="align-center">
                    <span class="ml-4 title font-weight-bold">
                        {{$t('DMG')}}
                    </span>
                </v-row>
            </v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col :cols="6">
                        <dmg-multiplier :value="stats['DMG']['MULTIPLIER']" />
                    </v-col>
                    <v-col :cols="6">
                        <dmg-other :value="stats['DMG']['OTHER']" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col :cols="6">
                        <dmg-attack :value="stats['DMG']['ATTACK']" />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script lang="js">
import Vue from "vue";
import BaseRadar from '@/components/BaseRadar/BaseRadar.vue'
import DmgMultiplier from '@/components/Unit/UnitTab/StatChart/Dmg/DmgMultiplier.vue'
import DmgOther from '@/components/Unit/UnitTab/StatChart/Dmg/DmgOther.vue'
import DmgAttack from '@/components/Unit/UnitTab/StatChart/Dmg/DmgAttack.vue'

export default Vue.extend({
    components: {
        BaseRadar,
        DmgMultiplier,
        DmgOther,
        DmgAttack
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
