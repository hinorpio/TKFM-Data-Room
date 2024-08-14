<template>
    <v-row v-if="isMounted">
        <v-spacer></v-spacer>
        <base-expand-card :title="$t('Update Logs')" icon="mdi-creation" >
            <div slot="content" class="pa-4">
                <div v-for="(ver, index) in logData" :key="index">
                    <span :class="titleClass">{{ ver.version }}</span>
                    <v-row class="margin-none-class align-start" v-for="(log, logIndex) in ver.logs" :key="logIndex">
                        <v-col class="py-0" :cols="4" :xl="1" :lg="2" :md="2" :sm="2" :xs="4">
                            <v-btn x-small block class="mr-2 mt-1" :color="$util.getLogTypeColor(log.type)">{{ getLogType(log.type) }}</v-btn>
                        </v-col>
                        <v-col class="py-0" :cols="8" :xl="11" :lg="10" :md="10" :sm="10" :xs="8">
                            <span :class="strClass">{{ getLogContent(log.content) }}</span>
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
import { UpdateLogs } from "~/interface/updateLogs";
import { Locale, LogType } from "~/plugins/utils/enums";

@Component({
    components: {
        BaseExpandCard
    }
})
export default class Logs extends Vue {

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

    getLogContent(content: {[lang in Locale]: string}): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        return content[locale] ?? ''
    }

}

</script>
<style lang="sass" scoped>
.margin-none-class
    margin-top: 0px !important
    margin-bottom: 0px !important
</style>