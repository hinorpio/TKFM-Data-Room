<template>
    <v-card>
        <v-toolbar color="#f0b023" height="50em">
            <v-row class="align-center">
                <v-avatar size="1.5em" tile class="ml-2">
                    <v-img :src="getIcon()"  />
                </v-avatar>
                <span class="ml-4 body-1 font-weight-bold">
                    {{getSkillName(skilltype)}}
                </span>
            </v-row>
        </v-toolbar>
        <v-card-text>
            <div v-if="isDetail && !isLiberation" class="ml-4">
                <u><h3>{{$t('Level 1')}}{{ (showEachSkillName)? ` - ${getSkillName(skilltype_1)}` :'' }}</h3></u>
                <span class="body-1 font-weight-bold" v-html="getSkillDescription(skilltype_1)"></span>
                <v-divider class="my-2"></v-divider>
                <u><h3>{{$t('Level 2')}}{{ (showEachSkillName)? ` - ${getSkillName(skilltype_2)}` :'' }}</h3></u>
                <span class="body-1 font-weight-bold" v-html="getSkillDescription(skilltype_2)"></span>
                <v-divider class="my-2"></v-divider>
                <u><h3>{{$t('Level 3')}}{{ (showEachSkillName)? ` - ${getSkillName(skilltype_3)}` :'' }}</h3></u>
                <span class="body-1 font-weight-bold" v-html="getSkillDescription(skilltype_3)"></span>
                <v-divider class="my-2"></v-divider>
                <u><h3>{{$t('Level 4')}}{{ (showEachSkillName)? ` - ${getSkillName(skilltype_4)}` :'' }}</h3></u>
                <span class="body-1 font-weight-bold" v-html="getSkillDescription(skilltype_4)"></span>
                <v-divider class="my-2"></v-divider>
                <u><h3>{{$t('Level 5')}}{{ (showEachSkillName)? ` - ${getSkillName(skilltype_5)}` :'' }}</h3></u>
                <span class="body-1 font-weight-bold" v-html="getSkillDescription(skilltype_5)"></span>
            </div>
            <div v-else class="ml-4">
                <span class="body-1 font-weight-bold" v-html="getSkillDescription(skilltype)"></span>
            </div>
            <v-divider class="my-2"></v-divider>
            <v-row v-if="!isLiberation" class="align-center justify-center">
                <v-btn @click="isDetail = !isDetail" block x-small>
                    <v-icon>{{ isDetail ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    {{ $t('Detail') }}
                </v-btn>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { SkillType } from '@/plugins/utils/enums'
import { Skill } from '@/interface/unit/skillset';

@Component
export default class SkillCard extends Vue {
    @Prop({ type: Object, required: true, default: {} }) readonly showVersion!: { [key in SkillType]?: Skill };
    @Prop({ type: Boolean, required: false, default: false }) isLiberation!: Boolean;

    skilltype: SkillType = SkillType.SKILL_S
    skilltype_1: SkillType = SkillType.SKILL_1
    skilltype_2: SkillType = SkillType.SKILL_2
    skilltype_3: SkillType = SkillType.SKILL_3
    skilltype_4: SkillType = SkillType.SKILL_4
    skilltype_5: SkillType = SkillType.SKILL_5

    isDetail: Boolean = false

    getIcon(): string{
        return this.$util.getSkillIcon(this.skilltype) ?? ''
    }

    getSkillName(type: SkillType): string{
        const skillName = this.showVersion[type]?.name
        return (skillName !== undefined)? skillName :'';
    }

    getSkillDescription(type: SkillType): string{
        const skillDescription = this.showVersion[type]?.description
        return (skillDescription !== undefined)? this.$util.showPreLineText(skillDescription) : '';
    }

    get showEachSkillName(): boolean{
        const skillname = this.getSkillName(this.skilltype)
        let result = false;

        if(this.getSkillName(this.skilltype_1) != skillname)
            return true
        if(this.getSkillName(this.skilltype_2) != skillname)
            return true
        if(this.getSkillName(this.skilltype_3) != skillname)
            return true
        if(this.getSkillName(this.skilltype_4) != skillname)
            return true
        if(this.getSkillName(this.skilltype_5) != skillname)
            return true

        return result
    }

}
</script>
