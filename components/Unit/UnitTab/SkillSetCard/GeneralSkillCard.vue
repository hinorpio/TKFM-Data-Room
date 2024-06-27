<template>
    <v-card>
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
    @Prop({ type: Object, required: true, default: {} }) readonly showVersion!: { [key in SkillType]: Skill };
    @Prop({ type: String, required: true, default: '' }) readonly skilltype!: SkillType;

    getIcon(): string{
        return this.$util.getSkillIcon(this.skilltype) ?? ''
    }

    getSkillName(): string{
        return this.showVersion[this.skilltype].name ?? '';
    }

    getSkillDescription(): string{
        return this.$util.showPreLineText(this.showVersion[this.skilltype].description) ?? '';
    }

    getSkillColor(): string{
        return this.$util.getSkillColor(this.skilltype) ?? ''
    }

}
</script>
