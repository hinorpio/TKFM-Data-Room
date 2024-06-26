<template>
    <div v-if="isMounted">
        <v-col>
            <v-select v-if="versionList.length > 1" :items="versionList" item-text="label" item-value="value" v-model="version" filled dense />
            <general-skill-card class="mb-4" :showVersion="showVersion" :skilltype="getSkillType('BASE_STAT')" color="#925be6" />
            <skill-card class="mb-4" :showVersion="showVersion" />
            <general-skill-card class="mb-4" :showVersion="showVersion" :skilltype="getSkillType('ATTACK')" />
            <general-skill-card class="mb-4" :showVersion="showVersion" :skilltype="getSkillType('LEADER')" />
            <general-skill-card class="mb-4" :showVersion="showVersion" :skilltype="getSkillType('PASSIVE_1')" />
            <general-skill-card class="mb-4" :showVersion="showVersion" :skilltype="getSkillType('PASSIVE_2')" />
            <general-skill-card class="mb-4" :showVersion="showVersion" :skilltype="getSkillType('PASSIVE_3')" />
            <general-skill-card class="mb-4" :showVersion="showVersion" :skilltype="getSkillType('GENERAL_1')" />
            <general-skill-card class="mb-4" :showVersion="showVersion" :skilltype="getSkillType('GENERAL_2')" />
        </v-col>
        <v-divider class="my-2"></v-divider>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale, SkillType } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit'
import { Skill, SkillSet } from '@/interface/unit/skillset';
import SkillCard from "@/components/Unit/UnitTab/SkillSetCard/SkillCard.vue";
import GeneralSkillCard from "@/components/Unit/UnitTab/SkillSetCard/GeneralSkillCard.vue";

@Component({
  components: {
    SkillCard,
    GeneralSkillCard
  },
})
export default class SkillSetTab extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    unit!: Unit;

    isMounted = false;
    loading = false;
    version = 0;
    versionList: { label: string; value: number }[] = [];

    get showVersion(): { SkillType: Skill } {
        const locale = this.$i18n.locale as keyof typeof Locale;
        const version = this.unit.skillSet[this.version]
        return version.skill[locale] as { SkillType: Skill };
    }

    async mounted() {
        this.versionList = this.unit.skillSet.map((set: any, index: number) => ({
            label: `${this.$t('Version')} ${set.version}${this.getLastDate(set.lastDate)}`,
            value: index,
        }));
        this.isMounted = true;
    }

    getLastDate(date: string | null) {
        return date === null
        ? ` - ${this.$t('Current Version')}`
        : ` - ${this.$t('As of')} ${date}`;
    }

    getSkillType(type: string): SkillType{
        return SkillType[type as keyof typeof SkillType]
    }
}
</script>

