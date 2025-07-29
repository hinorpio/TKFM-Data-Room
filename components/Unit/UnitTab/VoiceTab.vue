<template>
    <div v-if="isMounted" class="mt-8">
        <v-select v-if="unit.voiceSet.length > 1" @change="versionKey++" :items="versionList" item-text="label" item-value="value" v-model="currentVersion" filled dense />
        <div :key="versionKey">
            <div v-if="generalAudioList.length > 0">
                <h2>{{ $t('General') }}</h2>
                <v-row>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="4" :xs="6" v-for="(voice, index) in generalAudioList" :key="index">
                        <voice-button :src="voice.src" :type="voice.type" color="white" />
                    </v-col>
                </v-row>
                <v-divider class="my-6"></v-divider>
            </div>
            
            <div v-if="battleAudioList.length > 0">
                <h2>{{ $t('Battle') }}</h2>
                <v-row>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="4" :xs="6" v-for="(voice, index) in battleAudioList" :key="index">
                        <voice-button :src="voice.src" :type="voice.type" color="white" />
                    </v-col>
                </v-row>
                <v-divider class="my-6"></v-divider>
            </div>

            <div v-if="featureAudioList.length > 0">
                <h2>{{ $t('Feature') }}</h2>
                <v-row>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="4" :xs="6" v-for="(voice, index) in featureAudioList" :key="index">
                        <voice-button :src="voice.src" :type="voice.type" color="white" />
                    </v-col>
                </v-row>
                <v-divider class="my-6"></v-divider>
            </div>

            <div v-if="disciplineAudioList.length > 0">
                <h2>{{ $t('R18') }}</h2>
                <v-row>
                    <v-col :cols="12" :xl="3" :lg="4" :md="6" :sm="4" :xs="6" v-for="(voice, index) in disciplineAudioList" :key="index">
                        <voice-button :src="voice.src" :type="voice.type" color="pink accent-1" />
                    </v-col>
                </v-row>
                <v-divider class="my-6"></v-divider>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit, VoiceExceptionSet } from '@/interface/unit'
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

    isMounted = false;
    audio?: HTMLAudioElement;
    lang: VoiceLocale = VoiceLocale.jp
    currentVersion: number = 1;
    versionList: { label: string; value: number }[] = [];
    versionKey: number = 0

    mounted(){
        if(this.unit.ID == '10176') // bedard
            this.currentVersion = 2

        this.versionList = this.unit.voiceSet.map((set: any, index: number) => ({
            label: `${this.$t('Version')} ${set.version} - ${set.version == 1 ? this.$t('Original') :set.name}`,
            value: set.version,
        }));
        this.isMounted = true;
    }

    get exceptionList(): VoiceExceptionSet | undefined{
        return this.unit.voiceException.find(f => f.version == this.currentVersion)
    }

    get isMobile(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, false, false, false)
    }

    get langAudioArray(): {type: VoiceType, src: string}[] {
        if(!this.unit.voiceSet)
            return []
        else {
            const voiceVersion = this.unit.voiceSet.find(f => f.version == this.currentVersion)
            if(!voiceVersion)
                return []
            else{
                return Object.entries(voiceVersion.voice).map(
                    (([type, srcObj]) => ({
                        type: type as VoiceType,
                        src: srcObj[this.lang] as string
                    }))
                )
            }
        }
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
        if(!this.exceptionList)
            return false
        else{
            switch (type) {
            case VoiceType.GREET:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.CONFUSED:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.HAPPY:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.ANGRY:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.SAD:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.FURIOUS:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.AGREE:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.DISAGREE:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.PROMISE:
                    return !this.exceptionList.exception.includes(type)
                default:
                    return false
            }
        }
    }

    isBattle(type: VoiceType): boolean {
        if(!this.exceptionList)
            return false
        else{
            switch (type) {
                case VoiceType.ATTACK:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.SKILL:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.TAKE_DAMAGE:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.DEATH:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.VICTORY:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.DEFEAT:
                    return !this.exceptionList.exception.includes(type)
                default:
                    return false
            }
        }
    }

    isDiscipline(type: VoiceType): boolean {
        if(!this.exceptionList)
            return false
        else{
            switch (type) {
                case VoiceType.DISCIPLINE_1:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.DISCIPLINE_2:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.DISCIPLINE_3:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.ORGASM:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.SEX_MOANS:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.BLOWJOB:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.KISS:
                    return !this.exceptionList.exception.includes(type)
                default:
                    return false
            }
        }
    }

    isFeature(type: VoiceType): boolean {
        if(!this.exceptionList)
            return false
        else{
            switch (type) {
                case VoiceType.CHARACTER_FEATURE_1:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.CHARACTER_FEATURE_2:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.CHARACTER_FEATURE_3:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.CHARACTER_FEATURE_4:
                    return !this.exceptionList.exception.includes(type)
                case VoiceType.CHARACTER_FEATURE_5:
                    return !this.exceptionList.exception.includes(type)
                default:
                    return false
            }
        }
    }

}

</script>