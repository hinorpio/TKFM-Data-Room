<template>
    <div class="mt-8">
        <h2>{{ $t('General') }}</h2>
        <v-row>
            <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="4" :xs="6" v-for="(voice, index) in generalAudioList" :key="index">
                <voice-button :src="voice.src" :type="voice.type" />
            </v-col>
        </v-row>

        <v-divider class="my-6"></v-divider>
        <h2>{{ $t('Battle') }}</h2>
        <v-row>
            <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="4" :xs="6" v-for="(voice, index) in battleAudioList" :key="index">
                <voice-button :src="voice.src" :type="voice.type" />
            </v-col>
        </v-row>

        <v-divider class="my-6"></v-divider>
        <h2>{{ $t('Discipline') }}</h2>
        <v-row>
            <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="4" :xs="6" v-for="(voice, index) in disciplineAudioList" :key="index">
                <voice-button :src="voice.src" :type="voice.type" />
            </v-col>
        </v-row>

        <v-divider class="my-6"></v-divider>
        <h2>{{ $t('Feature') }}</h2>
        <v-row>
            <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="4" :xs="6" v-for="(voice, index) in featureAudioList" :key="index">
                <voice-button :src="voice.src" :type="voice.type" />
            </v-col>
        </v-row>
        
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit'
import { VoiceLocale, VoiceType } from "~/plugins/utils/enums";
import VoiceButton from "./VoiceButton.vue";

@Component({
    components: {
        VoiceButton
    }
})
export default class VoiceTab extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    unit!: Unit;

    audio?: HTMLAudioElement;

    lang: VoiceLocale = VoiceLocale.jp
    
    mounted(){
        // this.generateList()
    }

    get isMobile(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, false, false, false)
    }

    get langAudioArray(): {type: VoiceType, src: string}[] {
        if(!this.unit.voiceSet)
            return []
        else
            return Object.entries(this.unit.voiceSet).map(
                (([type, srcObj]) => ({
                    type: type as VoiceType,
                    src: srcObj[this.lang] as string
                }))
            )
    }

    get generalAudioList(): {type: VoiceType, src: string}[] {
        return this.langAudioArray.filter( f => this.isGeneral(f.type))
    }

    get battleAudioList(): {type: VoiceType, src: string}[] {
        return this.langAudioArray.filter( f => this.isBattle(f.type))
    }

    get disciplineAudioList(): {type: VoiceType, src: string}[] {
        return this.langAudioArray.filter( f => this.isDiscipline(f.type))
    }

    get featureAudioList(): {type: VoiceType, src: string}[] {
        return this.langAudioArray.filter( f => this.isFeature(f.type))
    }

    isGeneral(type: VoiceType): boolean {
        switch (type) {
            case VoiceType.GREET:
                return true
            case VoiceType.CONFUSED:
                return true
            case VoiceType.HAPPY:
                return true
            case VoiceType.ANGRY:
                return true
            case VoiceType.SAD:
                return true
            case VoiceType.FURIOUS:
                return true
            case VoiceType.AGREE:
                return true
            case VoiceType.DISAGREE:
                return true
            case VoiceType.PROMISE:
                return true
            default:
                return false
        }
    }

    isBattle(type: VoiceType): boolean {
        switch (type) {
            case VoiceType.ATTACK:
                return true
            case VoiceType.SKILL:
                return true
            case VoiceType.TAKE_DAMAGE:
                return true
            case VoiceType.DEATH:
                return true
            case VoiceType.VICTORY:
                return true
            case VoiceType.DEFEAT:
                return true
            default:
                return false
        }
    }

    isDiscipline(type: VoiceType): boolean {
        switch (type) {
            case VoiceType.DISCIPLINE_1:
                return true
            case VoiceType.DISCIPLINE_2:
                return true
            case VoiceType.DISCIPLINE_3:
                return true
            case VoiceType.ORGASM:
                return true
            default:
                return false
        }
    }

    isFeature(type: VoiceType): boolean {
        switch (type) {
            case VoiceType.CHARACTER_FEATURE_1:
                return true
            case VoiceType.CHARACTER_FEATURE_2:
                return true
            case VoiceType.CHARACTER_FEATURE_3:
                return true
            case VoiceType.CHARACTER_FEATURE_4:
                return true
            case VoiceType.CHARACTER_FEATURE_5:
                return true
            default:
                return false
        }
    }

}

</script>