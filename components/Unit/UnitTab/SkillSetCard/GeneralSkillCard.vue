<template>
    <v-card v-if="isSkillTypeExist">
        <v-toolbar :color="getSkillColor()" height="50em">
            <v-row class="align-center">
                <v-avatar size="1.5em" tile class="ml-2">
                    <v-img :src="getIcon()"  />
                </v-avatar>
                <span class="ml-4 body-1 font-weight-bold">
                    {{getSkillName()}}
                </span>
            </v-row>
        </v-toolbar>
        <v-card-text>
            <div class="ml-4">
                <span class="body-1 font-weight-bold" v-html="getSkillDescription()" ></span>
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
export default class GeneralSkillCard extends Vue {
    @Prop({ type: Object, required: true, default: {} }) readonly showVersion!: { [key in SkillType]?: Skill };
    @Prop({ type: String, required: true, default: '' }) readonly skilltype!: SkillType;

    get isSkillTypeExist(): boolean{
        return this.showVersion[this.skilltype] !== undefined
    }

    getIcon(): string{
        return this.$util.getSkillIcon(this.skilltype) ?? ''
    }

    getSkillName(): string{
        const skillName = this.showVersion[this.skilltype]?.name
        return (skillName !== undefined)? skillName :'';
    }

    getSkillDescription(): string{
        const skillDescription = this.showVersion[this.skilltype]?.description
        return (skillDescription !== undefined)? this.$util.showPreLineText(skillDescription) : '';
    }

    getSkillColor(): string{
        return this.$util.getSkillColor(this.skilltype) ?? ''
    }

}
</script>
