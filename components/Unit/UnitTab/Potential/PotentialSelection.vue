<template>
    <v-row>
        <v-col :cols="12" :xl="6" :lg="6" :md="12" :sm="6" :xs="12">
            <v-select :items="currentLevelOptions" v-model="currentPotential.level" :label="$t('Current Potential')" dense outlined></v-select>
            <v-row class="ml-1">
                <v-checkbox v-for="(slot, index) in currentPotential.slot" :key="index" v-model="currentPotential.slot[index]" :color="checkBoxColor(index, 'CURRENT')" dense  hide-details ></v-checkbox>
            </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col :cols="12" :xl="6" :lg="6" :md="12" :sm="6" :xs="12">
            <v-select :items="targetLevelOptions" v-model="targetPotential.level" :label="$t('Target Potential')" dense outlined></v-select>
            <v-row class="ml-1">
                <v-checkbox v-for="(slot, index) in targetPotential.slot" :key="index" v-model="targetPotential.slot[index]" dense :color="checkBoxColor(index, 'TARGET')" :disabled="handleCheckBoxDisabled(index)" hide-details ></v-checkbox>
            </v-row>
        </v-col>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Potential, PotentialSelectGroup } from '~/interface/stat/potential'

@Component
export default class PotentialSelection extends Vue {
  @Prop({ type: Object, required: true, default: [] })
  potentialData!: Potential;

  @Prop({ type: Object, required: true, default: {} })
  currentPotential!: PotentialSelectGroup;

  @Prop({ type: Object, required: true, default: {} })
  targetPotential!: PotentialSelectGroup;

  @Watch("currentPotential.level")
  onCurrentPotentialLevelChange(value: number): void {
    this.targetPotential.level = this.targetPotential.level < value ? value : this.targetPotential.level;
  }

  @Watch("currentPotential.slot")
  onCurrentPotentialSlotChange(value: boolean[]): void {
    for (let i = 0; i < value.length; i++) {
      this.targetPotential.slot[i] = value[i] && this.isSameLevel ? value[i] : this.targetPotential.slot[i];
    }
  }

  @Watch("targetPotential.level")
  onTargetPotentialLevelChange(value: number): void {
    const currentSlot = this.currentPotential.slot;
    const targetSlot = this.targetPotential.slot;
    for (let i = 0; i < targetSlot.length; i++) {
      this.targetPotential.slot[i] = currentSlot[i] && this.isSameLevel ? currentSlot[i] : this.targetPotential.slot[i];
    }
  }

  get currentLevelOptions(): number[] {
    return this.potentialData.detail.map((_, index) => index + 1);
  }

  get targetLevelOptions(): number[] {
    return this.currentLevelOptions.filter((level) => level >= this.currentPotential.level);
  }

  get isSameLevel(): boolean {
    return this.currentPotential.level === this.targetPotential.level;
  }

  handleCheckBoxDisabled(index: number): boolean {
    return this.currentPotential.slot[index] && this.isSameLevel;
  }

  checkBoxColor(slot: number, type: string): string {
    const level = type === "TARGET" ? this.targetPotential.level - 1 : this.currentPotential.level - 1;
    const slotType = this.potentialData.detail[level][slot].type;
    switch (slotType) {
      case "ATK":
        return "red accent-2";
      case "HP":
        return "green accent-2";
      case "PASSIVE":
        return "purple accent-2";
      default:
        return "";
    }
  }
}
</script>