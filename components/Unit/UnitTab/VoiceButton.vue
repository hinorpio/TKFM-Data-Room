<template>
    <div>
        <v-btn :color="color" x-large block @click="handleAudio()" >
            <v-row class="align-center">
                <v-col :cols="2">
                    <v-progress-circular v-if="isLoading" indeterminate color="black" left large></v-progress-circular>
                    <v-icon v-else-if="!isPlay" color="black" left large>
                        mdi-play
                    </v-icon>
                    <v-icon v-else color="black" left large>
                        mdi-stop
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

    @Prop({ type: String, required: true, default: '' })
    color!: string;

    isPlay: boolean = false;
    isLoading: boolean = false;
    audio?: HTMLAudioElement;
    count: number = 0;

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

    handleAudio(): void{
        if(this.isLoading)
            return
        else if(this.isPlay)
            this.stopVoice()
        else
            this.playVoice()
    }

    playVoice() {
        if (!this.audio) {
            this.isLoading = true;
            this.audio = new Audio(this.src);

            this.audio.addEventListener('canplaythrough', () => {
                this.isLoading = false;
                this.audio?.play();
                this.isPlay = true;
            }, { once: true });

            this.audio.addEventListener('ended', () => {
                this.isPlay = false;
            });

            this.audio.addEventListener('error', () => {
                this.isLoading = false;
                this.isPlay = false;
            });
        } else {
            this.audio.currentTime = 0;
            this.audio.play();
            this.isPlay = true;
        }
    }

    stopVoice() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.isPlay = false
        }
    }

  
}

</script>
<style lang="sass" scoped>
::v-deep .v-btn__content
    color: black
::v-deep .v-btn
    text-transform: none
</style>