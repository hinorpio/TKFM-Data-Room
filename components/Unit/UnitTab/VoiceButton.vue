<template>
    <div>
        <v-btn color="white"  x-large @click="playVoice" block>
            <v-row class="align-center">
                <v-col :cols="2">
                    <v-icon color="black" left large>
                        mdi-volume-high
                    </v-icon>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                    <span v-html="$util.showPreLineText(getVoiceTypeStr())"></span>
                </v-col>
            </v-row>
        </v-btn>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale, VoiceType } from "~/plugins/utils/enums";
import { VoiceTypeStr } from "~/static/const";

@Component
export default class VoiceButton extends Vue {
    @Prop({ type: String, required: true, default: '' })
    src!: string;

    @Prop({ type: String, required: true, default: '' })
    type!: VoiceType;

    audio?: HTMLAudioElement;

    getVoiceTypeStr(): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = (this.isMobile)?this.cancelBreakline(VoiceTypeStr[this.type][locale]) :VoiceTypeStr[this.type][locale];
        return result ?? ''
    }

    get isMobile(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, false, false, false, false)
    }

    cancelBreakline(text: string): string {
        return text.replace(`\n`, ` `)
    }

    playVoice() {
      if (!this.audio) {
        this.audio = new Audio(this.src)
      }
      this.audio.currentTime = 0
      this.audio.play()
    }

  
}

</script>
<style lang="sass" scoped>
::v-deep .v-btn__content
    color: black
::v-deep .v-btn
    text-transform: none
</style>