<template>
    <div v-if="isMounted">
        <h2>{{$t('其他乘區')}}</h2>
        <div>
            <base-radar
                :stats="stats"
                :setting="setting"
                :scale="scale">
            </base-radar>
        </div>
    </div>
</template>
<script lang="js">
import Vue from "vue";
import BaseRadar from '@/components/BaseRadar/BaseRadar.vue'

export default Vue.extend({
    components: {
        BaseRadar
    },
    props: {
        value: {
            type: Object,
            required: true,
            default: {},
        },
    },
    computed: {
        
    },
    async mounted() {
        this.value.forEach(f => {
            var dataset = []
            Object.entries(this.shortName).forEach(([key, name]) => {
                dataset.push( {name: key, value: f[key], shortName: name} )
            });
            this.stats.push(dataset)
            this.setting.push({type: f.type, polycolor: f.polycolor})
        });
        this.isMounted = true
    },
    methods: {

    },
    data() {
        return {
            isMounted: false,
            scale: {                                        // scales of corresponding statistic
                ba_vd: 200,                                  // key must be equal to the corresponding statistic, lowercased and without accents
                ba_do: 200,
                ult_vd: 200,
                ult_do: 200,
                trig_vd: 200,
                trig_do: 200,
                sp_vd: 200,
                sp_do: 200,
            },
            stats: [],
            setting: [],
            shortName:{
                'ba_vd': this.$t('普易'),
                'ba_do': this.$t('普增'),
                'ult_vd': this.$t('必易'),
                'ult_do': this.$t('必增'),
                'trig_vd': this.$t('觸易'),
                'trig_do': this.$t('觸增'),
                'sp_vd': this.$t('指易'),
                'sp_do': this.$t('指增'),
            },
            polycolor: '#F44336',
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
