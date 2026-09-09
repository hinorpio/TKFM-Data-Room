<template>
    <div id="unit-limit-break-panel" role="tabpanel" aria-labelledby="unit-limit-break-tab" class="pa-3">
        <div v-if="groups.length" class="limit-break-groups">
            <section v-for="group in groups" :key="group.key">
                <h2 class="title mb-3">{{ $t('limitBreak.' + group.key) }}</h2>
                <v-card v-for="skill in group.skills" :key="skill.id" tag="article" class="mb-4">
                    <v-card-text class="text--primary">
                        <h3 class="body-1 font-weight-bold mb-2">{{ skill.skill[locale].name }}</h3>
                        <p class="body-1 mb-0 limit-break-description">{{ skill.skill[locale].description }}</p>
                    </v-card-text>
                </v-card>
            </section>
        </div>
        <p v-else class="body-1 mb-0">{{ $t('limitBreak.empty') }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Unit } from '@/interface/unit';
import { Locale } from '@/plugins/utils/enums';
import { getLimitBreakSkillGroups } from '@/static/data/unit/limitBreak';

@Component
export default class LimitBreakTab extends Vue {
    @Prop({ type: Object, required: true })
    readonly unit!: Unit;

    get groups() {
        return getLimitBreakSkillGroups(this.unit.position, this.unit.element);
    }

    get locale(): Locale {
        return this.$i18n.locale as Locale;
    }
}
</script>

<style scoped>
.limit-break-groups {
    display: grid;
    gap: 16px;
    /* Up to two columns, stacking when this half-page panel is too narrow. */
    grid-template-columns: repeat(auto-fit, minmax(min(100%, max(20rem, calc(50% - 8px))), 1fr));
}

.limit-break-groups section {
    min-width: 0;
    overflow-wrap: anywhere;
}

.limit-break-description {
    white-space: pre-wrap;
}
</style>
