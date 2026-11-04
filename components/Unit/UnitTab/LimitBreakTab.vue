<template>
    <div id="unit-limit-break-panel" role="tabpanel" aria-labelledby="unit-limit-break-tab" class="pa-3">
        <div v-if="groups.length" class="limit-break-groups">
            <limit-break-group-card v-for="group in groups" :key="group.key" :title="$t('limitBreak.' + group.key)" :icon="flowerIcon">
                <limit-break-skill-card v-for="skill in group.skills" :key="skill.id" :skill="skill.skill[locale]" :icon="getSkillIcon(group.key)" class="mb-4" />
            </limit-break-group-card>
        </div>
        <p v-else class="body-1 mb-0">{{ $t('limitBreak.empty') }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Unit } from '@/interface/unit';
import { ItemCode, Locale } from '@/plugins/utils/enums';
import { ElementIcon, PositionIcon } from '@/static/const/general';
import ItemService from '@/plugins/utils/components/Items';
import { getLimitBreakSkillGroups, LimitBreakGroupKey } from '@/static/data/unit/limitBreak';
import LimitBreakGroupCard from './LimitBreak/LimitBreakGroupCard.vue';
import LimitBreakSkillCard from './LimitBreak/LimitBreakSkillCard.vue';

@Component({
    components: { LimitBreakGroupCard, LimitBreakSkillCard },
})
export default class LimitBreakTab extends Vue {
    @Prop({ type: Object, required: true })
    readonly unit!: Unit;

    get groups() {
        return getLimitBreakSkillGroups(this.unit.position, this.unit.element);
    }

    get locale(): Locale {
        return this.$i18n.locale as Locale;
    }

    get flowerIcon(): string {
        return ItemService.getItemIcon(ItemCode.WORLD_TREE_FLOWER) ?? '';
    }

    getSkillIcon(group: LimitBreakGroupKey): string {
        if (group === 'common') return ItemService.getItemIcon(ItemCode.WORLD_TREE_PETAL) ?? '';
        if (group === 'element') return ElementIcon[this.unit.element];
        return PositionIcon[this.unit.position];
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

.limit-break-groups > section {
    min-width: 0;
    overflow-wrap: anywhere;
}
</style>
