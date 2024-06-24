<template>
    <div v-if="isMounted">
        <h2>{{$t('攻擊力')}}</h2>
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
                base_atk: 200,
                atk_buff: 200,
                atk_tran: 200,
            },
            stats: [],
            setting: [],
            shortName:{
                'base_atk': this.$t('基礎'),
                'atk_buff': this.$t('%增'),
                'atk_tran': this.$t('傳攻'),
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
