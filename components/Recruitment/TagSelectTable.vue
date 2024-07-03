<template>
    <div>
        <v-card class="outline-box" outline color="white">
            <v-card-text>
                <v-row class="ma-2 align-center">
                    <v-icon class="mr-2">
                        mdi-tag
                    </v-icon>
                    <span class="title font-weight-bold">{{ $t('Tag Selection') }}</span>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="selectedTag = []">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>  
                </v-row>
                <v-divider></v-divider>
                <v-btn-toggle v-model="selectedTag" multiple column>
                    <v-col>
                        <div v-for="type in tagTypeList" :key="type" >
                            <span class="font-weight-bold">{{ $t(type) }}</span>
                            <v-row class="ma-2">
                                <v-col v-for="(tag, index) in filterTagByType(type)" :key="index" :cols="6" :xl="2" :lg="4" :md="4" :sm="4" :xs="4" class="pa-1">
                                    <v-btn label active-class="blue lighten-1" block height="2.5em" :value="tag.ID" :small="showBtnSize">
                                        <v-icon class="mr-1">
                                            {{ tag.icon }}
                                        </v-icon>
                                        {{ tag.name[$i18n.locale] }}
                                    </v-btn>    
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                </v-btn-toggle>
                <v-divider></v-divider>
                <v-row class="mx-2 my-4 align-center">
                    <v-icon class="mr-2">
                        mdi-clock-outline
                    </v-icon>
                    <span class="title font-weight-bold">{{ $t('Recruitment Time') }}</span>
                </v-row>
                <v-row class="ma-2 align-center">
                    <v-col :cols="6" :xl="2" :lg="4" :md="4" :sm="4" :xs="6">
                        <v-select :items="hourList" v-model="recruitmentTime.hours" @change="handleUpdateRecruitmentHours" dense outlined></v-select>
                    </v-col>
                    <v-col :cols="6" :xl="2" :lg="4" :md="4" :sm="4" :xs="6">
                        <v-select :items="minuteList" v-model="recruitmentTime.minutes" @change="handleUpdateRecruitmentMinutes" dense outlined></v-select>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { TagType } from '@/plugins/utils/enums'
import { Tag } from '@/interface/tag';

@Component
export default class TagSelectTable extends Vue {
    @Prop({ type: Array, required: true }) readonly value!: number[];
    @Prop({ type: Array, required: true, default: {} }) readonly tagList!: Tag[];
    @Prop({ type: Object, required: true, default: { hours: 9, minutes: '00' } })
    readonly recruitmentTime!: { hours: number; minutes: string };

    tagTypeList: TagType[] = Object.values(TagType);
    hourList: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    minuteList: string[] = ['00', '10', '20', '30', '40', '50', '60'];
    alertVisible: boolean = false;
    timeout: number = 2000;

    get selectedTag(): number[] {
        return this.value;
    }

    set selectedTag(tags: number[]) {
        this.$emit('input', tags);
    }

    get showBtnSize(): boolean {
        switch (this.$vuetify.breakpoint.name) {
            case 'xs':
                return true;
            case 'sm':
                return true;
            case 'md':
                return true;
            case 'lg':
                return false;
            case 'xl':
                return false;
            default:
                return false;
        }
    }

    filterTagByType(type: TagType): any[] {
        return this.tagList.filter((tag) => tag.type === type);
    }

    handleUpdateRecruitmentHours(val: number): void {
        this.recruitmentTime.hours = val;
        this.$emit('update:recruitmentTime', this.recruitmentTime);
    }

    handleUpdateRecruitmentMinutes(val: string): void {
        this.recruitmentTime.minutes = val;
        this.$emit('update:recruitmentTime', this.recruitmentTime);
    }
}
</script>
<style lang="sass" scoped>
.outline-box
    padding: 1px
::v-deep .v-btn--active.no-active::before
    opacity: 0 !important
      
</style>