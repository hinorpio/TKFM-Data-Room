<template>
    <div v-if="isMounted">
        <v-card elevation="0">
            <v-card-title>{{ $t('New Unit') }}</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col v-for="(unit, index) in unitData" :key="index" :cols="(12/itemsPerRow)" class="py-2" > 
                        <unit-icon :unit="unit" @select="handleSelectUnit"/>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Event } from '@/interface/event'
import { Unit } from "~/interface/unit";
import UnitIcon from "~/components/Unit/UnitIcon.vue";

@Component({
    components: {
        UnitIcon
    },
})
export default class NewUnitCard extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    event!: Event;

    isMounted: boolean = false
    unitData: Unit[] = []

    mounted(): void{
        this.unitData = this.$util.getUnitsByIDs(this.event.newUnit)
        this.isMounted = true
    }

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 4, 4, 6, 6, 6)
    }

    handleSelectUnit(unit: Unit): void {
        const locale = this.$i18n.locale
        const langPrefix = (locale === 'tc')?`` :`/${locale}`
        this.$router.push({
            path: `${langPrefix}/unit?code=${unit.metaCode}`,
        });
    }
}

</script>