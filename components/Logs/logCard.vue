<template>
    <v-row v-if="isMounted">
        <v-spacer></v-spacer>
        <base-expand-card :title="$t('Update Logs')" icon="mdi-creation" :isExpand="false">
            <div slot="content" class="pa-4">
                <div v-for="(ver, index) in logData" :key="index">
                    <span :class="titleClass">{{ ver.version }}</span>
                    <v-row class="margin-none-class align-start" v-for="(log, logIndex) in ver.logs" :key="logIndex">
                        <v-col class="py-0" :cols="4" :xl="1" :lg="2" :md="2" :sm="2" :xs="4">
                            <v-btn x-small block class="mr-2 mt-1" :color="$util.getLogTypeColor(log.type)">{{ getLogType(log.type) }}</v-btn>
                        </v-col>
                        <v-col class="py-0" :cols="8" :xl="11" :lg="10" :md="10" :sm="10" :xs="8">
                            <span :class="strClass">{{ getLogContent(log) }}</span>
                        </v-col>
                    </v-row>
                    <br />
                    <v-divider class="mb-4"></v-divider>
                </div>
            </div>
        </base-expand-card>
        <v-spacer></v-spacer>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import BaseExpandCard from "../BaseExpandCard.vue";
import { Logs, UpdateLogs } from "~/interface/updateLogs";
import { FanartOwner, Locale, LogGroup, LogType, PuzzleCode, UnitCode } from "~/plugins/utils/enums";
import { LogGroupStr } from "~/static/const";

@Component({
    components: {
        BaseExpandCard,
        LogGroupStr
    }
})
export default class LogCard extends Vue {

    isMounted: boolean = false 
    logData: UpdateLogs[] = []

    get titleClass(): string  {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-2', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1')} font-weight-bold`
    }

    get strClass(): string  {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-2', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1')}`
    }
    
    mounted(): void{
        this.logData = this.$util.getAllUpdateLogs()
        this.isMounted = true
    }

    getLogType(type: LogType): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const logTypeStr: {[lang in Locale]: string} = this.$util.getLogTypeString(type)
        return logTypeStr[locale]
    }

    getLogContent(log: Logs): string{
        const unitList = log.unitList ?? []
        const eventList = log.eventList ?? []
        const ownerList = log.ownerList ?? []
        const puzzleList = log.puzzleList ?? []
        switch (log.group) {
            case LogGroup.UNIT:
                return this.generateLogTextByUnit(log.group, unitList)
            case LogGroup.EVENT:
                return this.generateLogTextByEvent(log.group, eventList)
            case LogGroup.ART:
                return this.generateLogTextByOwner(log.group, ownerList)
            case LogGroup.SKILL:
                return this.generateLogTextByUnit(log.group, unitList)
            case LogGroup.LIBERATE:
                return this.generateLogTextByUnit(log.group, unitList)
            case LogGroup.OUTFIT:
                return this.generateLogTextByUnit(log.group, unitList)
            case LogGroup.PUZZLE:
                return this.generateLogTextByPuzzle(log.group, puzzleList)
            case LogGroup.GENERAL:
                if(!log.content)
                    return ''
                else {
                    const content = log.content
                    const locale = this.$i18n.locale as keyof typeof Locale
                    return content[locale] ?? ''
                }
            default:
                return '';
        }
        
    }

    generateLogTextByUnit(group: LogGroup, list: UnitCode[]): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const data = this.$util.getUnitsByIDs(list)
        const prefixText = LogGroupStr[group][locale] ?? ''
        let result = prefixText
        data.forEach(unit => {
            result += `${unit.prefix[locale]} ${unit.name[locale]}, `
        });
        return result.slice(0, -2); // remove last , 
    }

    generateLogTextByEvent(group: LogGroup, list: string[]): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const prefixText = LogGroupStr[group][locale] ?? ''
        let result = prefixText
        list.forEach(eventCode => {
            const data = this.$util.getEvent(eventCode)
            result += `${data?.name[locale]}, `
        })
        return result.slice(0, -2); // remove last , 
    }

    generateLogTextByOwner(group: LogGroup, list: FanartOwner[]): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const prefixText = LogGroupStr[group][locale] ?? ''
        let result = prefixText
        list.forEach(owner => {
            result += `${owner}, `
        })
        return result.slice(0, -2); // remove last , 
    }

    generateLogTextByPuzzle(group: LogGroup, list: PuzzleCode[]): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const prefixText = LogGroupStr[group][locale] ?? ''
        let result = prefixText
        list.forEach(puzzlieCode => {
            const data = this.$util.getPuzzle(puzzlieCode)
            result += `${data?.name[locale]}, `
        })
        return result.slice(0, -2); // remove last , 
    }
    
}

</script>
<style lang="sass" scoped>
.margin-none-class
    margin-top: 0px !important
    margin-bottom: 0px !important
</style>