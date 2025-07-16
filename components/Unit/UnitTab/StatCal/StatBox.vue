<template>
    <div v-if="isMounted">
        <v-card>
            <v-toolbar color="000000" height="50em" @click="toggleShowDetail">
                <v-row class="align-center">
                    <v-avatar size="1.5em" tile class="ml-2">
                        <v-icon v-if="type == 'CURRENT'">mdi-current-dc</v-icon>
                        <v-icon v-else>mdi-target</v-icon>
                    </v-avatar>
                    <span class="ml-4 body-1 font-weight-bold">
                        {{ (type == 'CURRENT'? $t('Current Stat') :$t('Target Stat')) }}
                    </span>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>{{ showDetail ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-row>
            </v-toolbar>
            <v-expand-transition>
                <div v-show="showDetail">
                    <v-card-text class="py-8">
                        <v-row>
                            <v-col class="py-1" :cols="12" :xl="6" :lg="6" :md="6" :sm="6" :xs="12">
                                <v-text-field v-model="calculatedHP" disabled :label="$t('HP')" dense outlined>
                                    <template v-slot:prepend>
                                        <v-icon color="light-blue">mdi-water</v-icon>
                                    </template>
                                </v-text-field>
                            </v-col>
                            <v-col class="py-1" :cols="12" :xl="6" :lg="6" :md="6" :sm="6" :xs="12">
                                <v-text-field v-model="calculatedATK" disabled :label="$t('ATK')" dense outlined prepend-icon="mdi-sword">
                                    <template v-slot:prepend>
                                        <v-icon color="brown">mdi-sword</v-icon>
                                    </template>
                                </v-text-field>
                            </v-col>
                            <v-col class="py-1" :cols="6" :xl="3" :lg="3" :md="6" :sm="3" :xs="6">
                                <v-select :items="levelOptions" v-model="stat.level" :label="$t('Level')" dense outlined :append-icon="''">
                                    <template v-slot:prepend>
                                        <v-icon color="green">mdi-stairs</v-icon>
                                    </template>
                                </v-select>
                            </v-col>
                            <v-col class="py-1" :cols="6" :xl="3" :lg="3" :md="6" :sm="3" :xs="6">
                                <v-select :disabled="noLib" :items="libOptions" v-model="stat.lib" :label="(noLib)?$t('N/A') :$t('Lib')" dense outlined :append-icon="''">
                                    <template v-slot:prepend>
                                        <v-icon color="grey lighten-3">mdi-star-four-points</v-icon>
                                    </template>
                                </v-select>
                            </v-col>
                            <v-col class="py-1" :cols="6" :xl="3" :lg="3" :md="6" :sm="3" :xs="6">
                                <v-select :items="starOptions" v-model="stat.star" :label="$t('Star')" dense outlined :append-icon="''">
                                    <template v-slot:prepend>
                                        <v-icon color="amber">mdi-star</v-icon>
                                    </template>
                                </v-select>
                            </v-col>
                            <v-col class="py-1" :cols="6" :xl="3" :lg="3" :md="6" :sm="3" :xs="6">
                                <v-select :disabled="noRoom" :items="roomOptions" v-model="stat.room" :label="(noRoom)?$t('N/A') :$t('Room')" dense outlined :append-icon="''">
                                    <template v-slot:prepend>
                                        <v-icon color="pink accent-1">mdi-heart</v-icon>
                                    </template>
                                </v-select>
                            </v-col>
                            <v-col class="py-1" :cols="12" :xl="6" :lg="6" :md="12" :sm="6" :xs="12">
                                <v-select :items="potLevelOptions" v-model="stat.pot.level" :label="$t('Potential')" dense outlined :append-icon="''">
                                    <template v-slot:prepend>
                                        <v-icon color="deep-purple">mdi-pot-steam</v-icon>
                                    </template>
                                </v-select>
                                <v-row class="ml-8">
                                    <v-checkbox v-for="(slot, index) in 6" :key="index" v-model="stat.pot.slot[index]" :color="checkBoxColor(index)" :disabled="handleCheckBoxDisabled(index)" dense hide-details ></v-checkbox>
                                </v-row>
                            </v-col>
                            <v-col class="py-4" :cols="12" :xl="6" :lg="6" :md="12" :sm="6" :xs="12">
                                <v-row class="mt-2 pr-6">
                                    <v-spacer></v-spacer>
                                    <v-btn class="mr-2" @click="getMinStat">
                                        <v-icon class="mr-1" color="red">mdi-chevron-triple-down</v-icon>
                                        <span class="mr-1">{{ $t('Min') }}</span>
                                    </v-btn>
                                    <v-btn class="mr-2" @click="getMaxStat">
                                        <span class="ml-1">{{ $t('Max') }}</span>
                                        <v-icon class="ml-1" color="green">mdi-chevron-triple-up</v-icon>
                                    </v-btn>
                                </v-row>
                                
                            </v-col>
                        </v-row>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Potential, PotentialSelectGroup } from '~/interface/stat/potential'
import { StatGroup, Unit } from "~/interface/unit";
import { Rarity } from "~/plugins/utils/enums";

@Component
export default class StatBox extends Vue {

    @Prop({ required: true, default: {} })
    unit!: Unit;

    @Prop({ type: String, required: true, default: {} })
    type!: string;

    @Prop({ type: Object, required: true, default: {} })
    stat!: StatGroup;

    @Prop({ type: Object, required: true, default: [] })
    potentialData!: Potential;

    @Prop({ type: Array, required: true, default: [] })
    levelOptions!: number[];

    @Prop({ type: Array, required: true, default: [] })
    libOptions!: number[];
    
    @Prop({ type: Array, required: true, default: [] })
    starOptions!: number[];
    
    @Prop({ type: Array, required: true, default: [] })
    roomOptions!: number[];
    
    @Prop({ type: Array, required: true, default: [] })
    potLevelOptions!: number[];

    @Prop({ type: Object, required: true, default: {} })
    compareStat!: StatGroup;

    isMounted: boolean = false;
    showDetail: boolean = true;

    toggleShowDetail(): void {
        this.showDetail = !this.showDetail;
    }

    mounted(): void {
        this.isMounted = true;
    }

    get isSameLevel(): boolean {
        return this.compareStat.pot.level === this.stat.pot.level;
    }

    get noLib(): boolean {
        return this.stat.lib == null
    }

    get noRoom(): boolean {
        return this.stat.rarity == Rarity.N
    }

    handleCheckBoxDisabled(index: number): boolean {
        return this.type == 'TARGET' && this.compareStat.pot.slot[index] && this.isSameLevel;
    }

    checkBoxColor(slot: number): string {
        const level = this.stat.pot.level - 1;
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
    
    get calculatedHP(): string {
        return this.$util.formatNumberWithCommas(this.$util.getCalculateStat(this.unit, this.stat, "HP"))
    }

    get calculatedATK(): string {
        return this.$util.formatNumberWithCommas(this.$util.getCalculateStat(this.unit, this.stat, "ATK"))
    }

    getMinStat(): void{
        if(this.type == 'CURRENT'){
            this.stat.level = 1
            this.stat.lib = (!this.noLib)?0 :null;
            this.stat.star = this.stat.initStar
            this.stat.room = (!this.noRoom)?0 :null;
            this.stat.pot = {
                level: 1,
                slot: [false, false, false, false, false, false]
            }
        }else{
            this.stat.level = this.compareStat.level
            this.stat.lib = (!this.noLib)?this.compareStat.lib :null;
            this.stat.star = this.compareStat.star
            this.stat.room = (!this.noRoom)?this.compareStat.room :null;
            this.stat.pot = this.$util.deepClone(this.compareStat.pot)
        }
    }

    getMaxStat(): void{
        this.stat.level = this.levelOptions[this.levelOptions.length - 1]
        this.stat.lib = (!this.noLib)?this.libOptions[this.libOptions.length - 1] :null;
        this.stat.star = this.starOptions[this.starOptions.length - 1]
        this.stat.room = (!this.noRoom)?this.roomOptions[this.roomOptions.length - 1] :null;
        this.stat.pot = {
            level: this.potLevelOptions[this.potLevelOptions.length - 1],
            slot: [true, true, true, true, true, true]
        }
    }


}
</script>
<style lang="sass" scoped>
.pot-indicator
    display: inline-block
    position: relative
    top: -.6rem
    width: calc(100%/6 - 4px)
    height: 4px
    margin: 0 2px
    background-color: red
</style>