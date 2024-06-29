<template>
    <v-layout v-if="isMounted">
        <v-container>
            <v-timeline
                :reverse="reverse"
                :dense="$vuetify.breakpoint.smAndDown"
            >
                <v-timeline-item v-for="n in 2"  :key="n" small >
                    <span slot="opposite">Tus eu perfecto</span>
                    <v-card class="elevation-2">
                    <v-card-text>
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </v-layout>
</template>
<script lang="js">
import Vue from "vue";
import TagSelectTable from "@/components/Recruitment/TagSelectTable.vue";
import RecruitmentResult from "@/components/Recruitment/RecruitmentResult.vue";

export default Vue.extend({
    components: {
        TagSelectTable,
        RecruitmentResult
    },
    async mounted() {
        this.tagList = this.$util.getAllTag();
        this.unitList = this.$util.getAllUnitGeneralData()
        this.isMounted = true
    },
    computed: {
        
    },
    methods: {
        filterTagByType(type){
            return this.tagList.filter(tag => tag.type == type)
        },
    },
    data() {
        return {
            isMounted: false,
            tagList: [],
            unitList: [],
            selectedTag: [],
            recruitmentTime: { hours: 9, minutes: '00'}
        }
    }
})
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
::v-deep .theme--dark.v-btn-toggle:not(.v-btn-toggle--group)
  background: #424242
::v-deep .v-data-table__wrapper
  background: #424242
</style>