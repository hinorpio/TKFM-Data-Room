<template>
    <v-card>
        <v-toolbar color="000000" height="50em" @click="toggleShowDetail">
            <v-row class="align-center">
                <v-avatar size="1.5em" tile class="ml-2">
                    <v-img :src="getStageIcon()"  />
                </v-avatar>
                <span class="ml-4 body-1 font-weight-bold">
                    {{getSectionLabel()}}
                </span>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>{{ showDetail ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-row>
        </v-toolbar>
        <v-expand-transition>
            <div v-show="showDetail">
                <v-card-text>
                    <v-row>
                        <v-col v-for="(material, index) in showVersion.detail[section].material" :key="index" :cols="(12/itemsPerRow)">
                                <v-avatar size="2em" tile class="ml-2">
                                    <v-img :src="getItemIcon(material.code)"  />
                                </v-avatar>
                                <span class="ml-4 body-1 font-weight-bold">
                                    {{`${getItemLabel(material.code)} x ${material.quantity}`}}
                                </span>
                        </v-col>
                    </v-row>
                    <v-divider class="mt-4"></v-divider>
                    <div v-for="(skillset, key) in showVersion.detail[section].skill[$i18n.locale]" :key="key" class="mb-2">
                        <general-skill-card class="mb-4" :showVersion="showVersion.detail[section].skill[$i18n.locale]" :skilltype="getSkillType(key)" color="#c60244" />
                    </div>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { LiberationStage, ItemCode, SkillType } from '@/plugins/utils/enums'
import GeneralSkillCard from "@/components/Unit/UnitTab/SkillSetCard/GeneralSkillCard.vue";

@Component({
    components: {
        GeneralSkillCard
    },
})
export default class LiberationCard extends Vue {
    @Prop({ type: String, required: true, default: LiberationStage.LIBERATION_0 })
    section!: LiberationStage;

    @Prop({ type: Object, required: true, default: () => ({}) })
    showVersion!: any;

    @Prop({ type: String, required: true, default: '' })
    essenceIcon!: string;

    showDetail: boolean = false;

    get itemsPerRow(): number {
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 1;
            case 'sm': return 2;
            case 'md': return 2;
            case 'lg': return 2;
            case 'xl': return 2;
            default: return 2;
        }
    }

    toggleShowDetail(): void {
        this.showDetail = !this.showDetail;
    }

    getSectionLabel(): string {
        switch (this.section) {
            case LiberationStage.LIBERATION_1:
                return this.$t('Section 1') as string;
            case LiberationStage.LIBERATION_2:
                return this.$t('Section 2') as string;
            case LiberationStage.LIBERATION_3:
                return this.$t('Section 3') as string;
            default:
                return '';
        }
    }

    getStageIcon(): string{
        return this.$util.getLiberateIcon(this.section) ?? ''
    }

    getItemIcon(key: ItemCode | string): string {
        if(typeof key === 'string' && key === 'ESSENCE'){
            return this.essenceIcon;
        }else{
            const result = this.$util.getItemIcon(key as ItemCode);
            return result ?? '';
        }
    }

    getItemLabel(key: ItemCode | string): string {
        if(typeof key === 'string' && key === 'ESSENCE'){
            return this.$t('Character Essence') as string;
        }else{
            const item = this.$util.getItem(key as ItemCode);
            const itemName = item?.name as { [key: string]: string | null | undefined }
            return itemName?.[this.$i18n.locale] || '';
        }
    }

    getSkillType(type: string | number): SkillType{
        return SkillType[type as keyof typeof SkillType]
    }
}

</script>
<style lang="sass" scoped>

</style>
