<template>
    <div>
        <v-card>
            <v-img class="pa-1" :src="path" width="100%" aspect-ratio="1" contain />
            <v-card-actions>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn color="black" icon @click="handleCopyLink(path)" :small="isButtonSmall">
                        <v-icon color="white" :small="isButtonSmall">mdi-link</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="black" icon @click="handleImageDialog(path, artName)" :small="isButtonSmall">
                        <v-icon color="white" :small="isButtonSmall">mdi-magnify-plus-outline</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="black" icon @click="handleDownload(path)" :small="isButtonSmall">
                        <v-icon color="white" :small="isButtonSmall">mdi-download</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-row>
            </v-card-actions>
        </v-card>
        <basic-image-viewer :visible.sync="visible" :title.sync="currentTitle" :src.sync="currentPhoto" />
        <base-alert :visible.sync="alertVisible" :message="alertMessage" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";
import BasicIamgeViewer from "@/components/Unit/UnitTab/LiberationTab.vue";
import BasicAlert from "@/components/BaseAlert/BaseAlert.vue";

@Component({
    components: {
        BasicIamgeViewer,
        BasicAlert
    }
})
export default class ArtGridBox extends Vue {
    @Prop({ type: String, required: true, default: () => ({}) })
    path!: string;

    @Prop({ type: String, required: true, default: () => ({}) })
    artName!: string;

    visible: boolean = false;
    currentTitle: string = "";
    currentPhoto: string = "";
    alertVisible: boolean = false
    alertMessage: string = ''

    get isButtonSmall(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, false, false, false, false)
    }

    handleImageDialog(path: string, artName: string): void {
        const locale = this.$i18n.locale as keyof typeof Locale;
        this.currentTitle = artName;
        this.currentPhoto = path;
        this.visible = true;
    }
    
    handleCopyLink(path: string): void{
        this.$util.handleCopyLink(path)
        this.alertMessage = this.$t("Link Copied")
        this.alertVisible = true
    }

    handleDownload(path: string): void{
        this.$util.handleDownload(path)
    }

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
</style>