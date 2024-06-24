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
                atk: 200,                                  // key must be equal to the corresponding statistic, lowercased and without accents
                vd: 200,
                do: 200,
                e_vd: 200,
                other: 200,
            },
            stats: [],
            setting: [],
            shortName:{
                'atk': this.$t('攻擊'),
                'vd': this.$t('易傷'),
                'do': this.$t('造傷'),
                'e_vd': this.$t('屬傷'),
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
