<template>
    <div v-if="isMounted">
        <h2>{{$t('乘區分佈')}}</h2>
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
                heal_do: 100,                                  // key must be equal to the corresponding statistic, lowercased and without accents
                heal_hot: 100,
                hot_do: 100,
                other: 100,
            },
            stats: [],
            setting: [],
            shortName:{
                'heal_do': this.$t('補造'),
                'heal_hot': this.$t('補增'),
                'hot_do': this.$t('緩造'),
                'other': this.$t('其他'),
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
