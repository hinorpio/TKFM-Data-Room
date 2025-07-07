<template>
    <div>
        <v-row class="mt-4 mx-1 align-center">
            <v-icon color="grey" class="mr-2"> 
                mdi-invoice-list 
            </v-icon>
            <span class="title font-weight-bold">{{ $t('Display') }}</span>
            <v-btn class="ml-4" x-small @click="toggleShowTotal">
                {{ showTotalText }}
            </v-btn>
        </v-row>
        <v-card v-if="roomSummary.summary.length > 0 || potSummary.summary.length > 0" class="outline-box my-6" outlined color="white">
            <v-card-text class="pa-4">
                <v-row class="px-0">
                    <v-col v-if="roomSummary.summary.length > 0" class="align-center" :cols="12" :xl="6" :lg="12" :md="12" :sm="12" :xs="12">
                        <span class="subtitle font-weight-bold">{{ $t('Discipline Item') }}</span>
                        <br v-if="isMobile">
                        <v-btn v-for="(f, index) in 4" :key="index" class="ml-4" x-small :color="(roomItemLevel == (4-index))?'primary':'#272727'" @click="roomItemLevel = (4-index)">
                            {{ `LV${(4-index)}` }}
                        </v-btn> 
                    </v-col>
                    <v-col v-if="potSummary.summary.length > 0" class="align-center" :cols="12" :xl="6" :lg="12" :md="12" :sm="12" :xs="12">
                        <span class="subtitle font-weight-bold">{{ $t('Potential') }}</span>
                        <v-btn class="ml-4" x-small @click="toggleShowCombined">
                            {{ showCombinedText }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-divider class="my-4"></v-divider>

        <div v-if="showTotal">
            <total-result 
                :potTypeSummary = totalPotTypeData
                :evolveTypeSummary = totalEvolveTypeData
                :otherTypeSummary = totalOtherTypeData
            />
        </div>
        <div v-else>
            <level-result v-if="levelSummary.summary.length > 0" :levelSummary="levelSummary" />
            <lib-result v-if="libSummary.summary.length > 0" :libSummary="libSummary" />
            <star-result v-if="starSummary.summary.length > 0" :starSummary="starSummary" />
            <room-result v-if="roomSummary.summary.length > 0" :roomSummary="showRoomItem" :roomItemLevel="roomItemLevel" />
            <pot-result v-if="potSummary.summary.length > 0" :potSummary="potSummary"/>
        </div>

    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { ItemQty } from "~/interface/item";
import { ItemType } from "~/plugins/utils/enums";
import { Component, Prop, Watch } from "vue-property-decorator";
import { CalculatedLevelSummary } from "~/interface/stat/level";
import { CalculatedLibSummary } from "~/interface/stat/lib";
import { CalculatedStarSummary } from "~/interface/stat/star";
import { CalculatedRoomSummary } from "~/interface/stat/room";
import { CalculatedPotSummary } from "~/interface/stat/potential";
import LevelResult from "./ResultBox/LevelResult.vue";
import LibResult from "./ResultBox/LibResult.vue";
import StarResult from "./ResultBox/StarResult.vue";
import RoomResult from "./ResultBox/RoomResult.vue";
import PotResult from "./ResultBox/PotResult.vue";
import TotalResult from "./ResultBox/TotalResult.vue";


@Component({
    components: {
        LevelResult,
        LibResult,
        StarResult,
        RoomResult,
        PotResult,
        TotalResult
    }
})
export default class CalculateResult extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    levelSummary!: CalculatedLevelSummary;

    @Prop({ type: Object, required: true, default: {} })
    libSummary!: CalculatedLibSummary;

    @Prop({ type: Object, required: true, default: {} })
    starSummary!: CalculatedStarSummary;

    @Prop({ type: Object, required: true, default: {} })
    roomSummary!: CalculatedRoomSummary;

    @Prop({ type: Object, required: true, default: {} })
    potSummary!: CalculatedPotSummary;

    @Prop({ type: Boolean, required: true, default: false })
    showTotal!: boolean;

    @Prop({ type: Boolean, required: true, default: false })
    showCombined!: boolean;

    localShowCombined: boolean = this.showCombined;
    localShowTotal: boolean = this.showTotal;
    roomItemLevel: number = 4

    get isMobile(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, false, false, false, false)
    }

    get itemFontSize(): string {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'body-2', 'body-2', 'body-1', 'body-1', 'body-1')} font-weight-bold`
    }

    get showCombinedText(): string {
        return (this.showCombined)
            ? this.$t('Show Combined Material')
            : this.$t('Show Actual Material')
    }

    get showTotalText(): string {
        return (this.showTotal)
            ? this.$t('Total')
            : this.$t('Group')
    }

    @Watch('localShowCombined')
    onLocalShowCombinedChange(newVal: boolean): void {
        this.$emit("update:showCombined", newVal);
    }

    @Watch('localShowTotal')
    onLocalShowTotalChange(newVal: boolean): void {
        this.$emit("update:showTotal", newVal);
    }

    toggleShowCombined(): void {
        this.localShowCombined = !this.localShowCombined;
    }

    toggleShowTotal(): void {
        this.localShowTotal = !this.localShowTotal;
    }

    get showRoomItem(): CalculatedRoomSummary{
        return {
            exp: this.roomSummary.exp,
            summary: this.roomSummary.summary.filter((f, index) => this.roomItemLevel == (4 - index))
        }
    }

    get totalData(): ItemQty[]{
        let result: ItemQty[] = []
        for(const potItem of this.potSummary.summary){
            const existing = result.find(s => s.code === potItem.code);
            if(existing)
                existing.quantity = (existing.quantity as number) + (potItem.quantity as number)
            else
                result.push({ code: potItem.code, quantity: potItem.quantity });
        }

        for(const libItem of this.libSummary.summary){
            const existing = result.find(s => s.code === libItem.code);
            if(existing)
                existing.quantity = (existing.quantity as number) + (libItem.quantity as number)
            else
                result.push({ code: libItem.code, quantity: libItem.quantity });
        }

        for(const starItem of this.starSummary.summary){
            const existing = result.find(s => s.code === starItem.code);
            if(existing)
                existing.quantity = (existing.quantity as number) + (starItem.quantity as number)
            else
                result.push({ code: starItem.code, quantity: starItem.quantity });
        }

        for(const levelItem of this.levelSummary.summary){
            const existing = result.find(s => s.code === levelItem.code);
            if(existing)
                existing.quantity = (existing.quantity as number) + (levelItem.quantity as number)
            else
                result.push({ code: levelItem.code, quantity: levelItem.quantity });
        }

        for(const roomItem of this.showRoomItem.summary){
            const existing = result.find(s => s.code === roomItem.code);
            if(existing)
                existing.quantity = (existing.quantity as number) + (roomItem.quantity as number)
            else
                result.push({ code: roomItem.code, quantity: roomItem.quantity });
        }

        return result
    }

    get totalPotTypeData(): ItemQty[]{
        return this.totalData.filter(f => {
            return this.$util.isItemCode(f.code) 
                && (
                    this.$util.getItem(f.code)?.type == ItemType.POTENTIAL
                    ||  this.$util.getItem(f.code)?.type == ItemType.POTENTIAL_ADVANCED
                )
        })
    }

    get totalEvolveTypeData(): ItemQty[]{
        return this.totalData.filter(f => {
            return this.$util.isItemCode(f.code) 
                && this.$util.getItem(f.code)?.type == ItemType.EVOLVE
        }).sort((a, b) => a.code.localeCompare(b.code))
    }

    get totalOtherTypeData(): ItemQty[]{
        return this.totalData.filter(f => {
            return !this.totalPotTypeData.find(item => f.code == item.code)
                && !this.totalEvolveTypeData.find(item => f.code == item.code)
        }).sort((a, b) => a.code.localeCompare(b.code))
    }
}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
    background: #424242
</style>