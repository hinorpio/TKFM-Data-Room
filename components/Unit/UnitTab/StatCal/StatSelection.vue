<template>
    <div v-if="isMounted">
        <stat-box
            type="CURRENT"
            :unit="unit"
            :stat.sync="currentStat"
            :potentialData="potentialData"
            :levelOptions="currentLevelOptions"
            :libOptions="currentLibOptions"
            :starOptions="currentStarOptions"
            :roomOptions="currentRoomOptions"
            :potLevelOptions="currentPotLevelOptions"
            :compareStat="targetStat"
        />

        <v-divider class="my-2"></v-divider>

        <stat-box
            type="TARGET"
            :unit="unit"
            :stat.sync="targetStat"
            :potentialData="potentialData"
            :levelOptions="targetLevelOptions"
            :libOptions="targetLibOptions"
            :starOptions="targetStarOptions"
            :roomOptions="targetRoomOptions"
            :potLevelOptions="targetPotLevelOptions"
            :compareStat="currentStat"
        />
        
        <v-divider class="my-4"></v-divider>

    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Potential, PotentialSelectGroup } from '~/interface/stat/potential'
import { StatGroup, Unit } from "~/interface/unit";
import StatBox from "./StatBox.vue";
import { Rarity } from "~/plugins/utils/enums";

@Component({
    components: {
        StatBox
    }
})
export default class StatSelection extends Vue {

    @Prop({ required: true, default: {} })
    unit!: Unit;

    @Prop({ type: Object, required: true, default: [] })
    potentialData!: Potential;

    @Prop({ type: Object, required: true, default: {} })
    currentStat!: StatGroup;

    @Prop({ type: Object, required: true, default: {} })
    targetStat!: StatGroup;

    isMounted: boolean = false;
    showDetail: boolean = false;

    toggleShowDetail(): void {
        this.showDetail = !this.showDetail;
    }

    mounted(): void {
        this.isMounted = true;
    }

    get currentLevelOptions(): number[] {
        return Array.from({ length: 60 }, (_, i) => i + 1);
    }
    get currentStarOptions(): number[] {
        return Array.from({ length: 6 }, (_, i) => i).filter(f => {
            switch (f) {
                case 0:
                    return this.currentStat.rarity == Rarity.N
                case 1:
                    return this.currentStat.rarity == Rarity.N || this.currentStat.rarity == Rarity.R
                case 2:
                    return this.currentStat.rarity != Rarity.SSR
                default:
                    return true;
            }
        });
    }
    get currentBondOptions(): number[] {
        return Array.from({ length: 5 }, (_, i) => i + 1);
    }
    get currentRoomOptions(): number[] {
        return (this.currentStat.rarity != Rarity.N) ? Array.from({ length: 4 }, (_, i) => i) : [];
    }
    get currentLibOptions(): number[] {
        return Array.from({ length: 4 }, (_, i) => i);
    }
    get currentPotLevelOptions(): number[] {
        return this.potentialData.detail.map((_, index) => index + 1);
    }
    get targetLevelOptions(): number[] {
        return this.currentLevelOptions.filter(f => f >= this.currentStat.level)
    }
    get targetStarOptions(): number[] {
        return this.currentStarOptions.filter(f => f >= this.currentStat.star)
    }
    get targetRoomOptions(): number[] {
        const roomLevel = (this.currentStat.room == null) ? 0 : this.currentStat.room
        return this.currentRoomOptions.filter(f => f >= roomLevel)
    }
    get targetLibOptions(): number[] {
        const libLevel = (this.currentStat.lib == null) ? 0 : this.currentStat.lib
        return this.currentLibOptions.filter(f => f >= libLevel)
    }
    get targetPotLevelOptions(): number[] {
        return this.currentPotLevelOptions.filter((level) => level >= this.currentStat.pot.level);
    }
    @Watch("currentStat.level")
    onCurrentStatLevelChange(value: number): void {
        this.targetStat.level = (this.targetStat.level < value) ? value : this.targetStat.level
    }
    @Watch("currentStat.lib")
    onCurrentStatLibChange(value: number): void {
        this.targetStat.lib = (this.targetStat.lib != null && this.targetStat.lib < value) ? value : this.targetStat.lib
    }
    @Watch("currentStat.star")
    onCurrentStatStarChange(value: number): void {
        this.targetStat.star = (this.targetStat.star < value) ? value : this.targetStat.star
    }
    @Watch("currentStat.room")
    onCurrentStatRoomChange(value: number): void {
        this.targetStat.room = (this.targetStat.room != null && this.targetStat.room < value) ? value : this.targetStat.room
    }
    @Watch("currentStat.pot.level")
    onCurrentStatPotLevelChange(value: number): void {
        this.targetStat.pot.level = this.targetStat.pot.level < value ? value : this.targetStat.pot.level;
    }
    @Watch("currentStat.pot.slot")
    onCurrentStatPotSlotChange(value: boolean[]): void {
        for (let i = 0; i < value.length; i++) {
            this.targetStat.pot.slot[i] = value[i] && this.isSameLevel ? value[i] : this.targetStat.pot.slot[i];
        }
    }
    @Watch("targetStat.pot.level")
    onTargetStatPotLevelChange(value: number): void {
        const currentSlot = this.currentStat.pot.slot;
        const targetSlot = this.targetStat.pot.slot;
        for (let i = 0; i < targetSlot.length; i++) {
            this.targetStat.pot.slot[i] = currentSlot[i] && this.isSameLevel ? currentSlot[i] : this.targetStat.pot.slot[i];
        }
    }
    get isSameLevel(): boolean {
        return this.currentStat.pot.level === this.targetStat.pot.level;
    }

}
</script>