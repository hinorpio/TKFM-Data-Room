<template>
    <v-layout v-if="isMounted">
        <v-container>
            <v-row>
                <v-col :cols="12" :xl="7" :lg="6" :md="6" :sm="12" :xs="12">
                    <tag-select-table v-model="selectedTag" :tagList="tagList" :recruitmentTime.sync="recruitmentTime"/>
                </v-col>
                <v-col :cols="12" :xl="5" :lg="6" :md="6" :sm="12" :xs="12">
                    <recruitment-result v-model="selectedTag" :tagList="tagList" :unitList="unitList" :recruitmentTime="recruitmentTime"/>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { TagType } from '@/plugins/utils/enums'
import { Tag } from '@/interface/tag';
import { Unit } from '@/interface/unit';
import TagSelectTable from "@/components/Recruitment/TagSelectTable.vue";
import RecruitmentResult from "@/components/Recruitment/RecruitmentResult.vue";

@Component({
    components: {
        TagSelectTable,
        RecruitmentResult
    }
})
export default class RecruitmentPage extends Vue {

    isMounted = false
    tagList: Tag[] = []
    unitList: Unit[] = []
    selectedTag: number[] = []
    recruitmentTime = { hours: 9, minutes: '00' }

    mounted(): void {
        this.tagList = this.$util.getAllTag();
        this.unitList = this.$util.getAllUnitGeneralData()
        this.isMounted = true
    }

    filterTagByType(type: TagType){
        return this.tagList.filter(tag => tag.type == type)
    }
}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
::v-deep .theme--dark.v-btn-toggle:not(.v-btn-toggle--group)
  background: #424242
::v-deep .v-data-table__wrapper
  background: #424242
</style>