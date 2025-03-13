<template>
    <div>
        <v-dialog v-model="visible" :max-width="dialogWidth" :max-height="dialogHeight" @click:outside="handleCloseDialog">
            <v-card :max-height="dialogHeight">
                <v-card-title style="word-break: normal"> 
                    {{title}} 
                    <v-spacer></v-spacer>
                    <v-btn icon @click="handleCopyLink">
                        <v-icon>mdi-link</v-icon>
                    </v-btn>
                    <v-btn v-if="isDownloading" icon >
                        <v-progress-circular indeterminate color="blue" size="15" ></v-progress-circular>
                    </v-btn>
                    <v-btn v-else icon @click="handleDownload">
                        <v-icon>mdi-download</v-icon>
                    </v-btn>
                    <v-btn icon @click="handleCloseDialog">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text :max-height="dialogHeight">
                    <div class="image-container">
                        <v-img ref="dialogImage" :src="src" :lazy-src="src" height="80vh" contain></v-img>
                    </div>
                </v-card-text>
            </v-card>
            <base-alert :visible.sync="alertVisible" :message="alertMessage" />
        </v-dialog>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import BasicAlert from "../BaseAlert/BaseAlert.vue";

@Component({
    components: {
        BasicAlert,
    }
})
export default class BasicImageViewer extends Vue {
    @Prop({ type: Boolean, required: true, default: false })
    visible!: Boolean;

    @Prop({ type: String, required: true, default: '' })
    title!: String;

    @Prop({ type: String, required: true, default: '' })
    src!: string;

    dialogWidth: String = '85%'
    dialogHeight: String = '80%'

    alertVisible: boolean = false
    alertMessage: string = ''
    isDownloading: boolean = false

    handleCloseDialog(): void{
        this.$emit('update:title', "")
        this.$emit('update:src', "")
        this.$emit('update:visible', false)
    }

    async handleDownload(): Promise<void>{
        this.isDownloading = true
        await this.$util.handleDownload(this.src)
        this.isDownloading = false
    }

    handleCopyLink(): void{
        this.$util.handleCopyLink(this.src)
        this.alertMessage = this.$t("Link Copied")
        this.alertVisible = true
    }
}
</script>
<style lang="sass" scoped>


</style>