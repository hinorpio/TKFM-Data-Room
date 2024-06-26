<template>
    <v-card>
        <v-toolbar color="#f0b023" height="50em">
            <v-row class="align-center">
                <v-avatar size="1.5em" tile class="ml-2">
                    <v-img :src="getIcon()"  />
                </v-avatar>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_S'].name}}
                </span>
                <v-spacer></v-spacer>
                <v-switch v-if="!isLiberation" v-model="isDetail" class="mt-5" inset ></v-switch>
            </v-row>
        </v-toolbar>
        <v-card-text>
            <div v-if="isDetail && !isLiberation">
                <h3>{{$t('Level 1')}}</h3>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_1'].description}}
                </span>
                <v-divider class="my-2"></v-divider>
                <h3>{{$t('Level 2')}}</h3>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_2'].description}}
                </span>
                <v-divider class="my-2"></v-divider>
                <h3>{{$t('Level 3')}}</h3>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_3'].description}}
                </span>
                <v-divider class="my-2"></v-divider>
                <h3>{{$t('Level 4')}}</h3>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_4'].description}}
                </span>
                <v-divider class="my-2"></v-divider>
                <h3>{{$t('Level 5')}}</h3>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_5'].description}}
                </span>
            </div>
            <div v-else>
                <div class="ml-4">
                    <span class="body-1 font-weight-bold">
                        {{showVersion['SKILL_S'].description}}
                    </span>
                </div>
            </div>
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
    @Prop({ type: Object, required: true, default: {} }) readonly showVersion!: { [key in SkillType]: Skill };
    @Prop({ type: Boolean, required: false, default: false }) isLiberation!: Boolean;

    skilltype: SkillType = SkillType.SKILL_S
    isDetail: Boolean = false

    getIcon(): string{
        return this.$util.getSkillIcon(this.skilltype) ?? ''
    }

    getSkillName(): string{
        return this.showVersion[this.skilltype].name ?? '';
    }

    getSkillDescription(): string{
        return this.$util.showPreLineText(this.showVersion[this.skilltype].description) ?? '';
    }

}
</script>
