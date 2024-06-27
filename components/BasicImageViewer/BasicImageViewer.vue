<template>
    <div class="mt-8" >
        <v-dialog v-model="visible" :max-width="dialogWidth" :max-height="dialogHeight" @click:outside="handleCloseDialog">
            <v-card :max-height="dialogHeight">
                <v-card-title> 
                    {{title}} 
                    <v-spacer></v-spacer>
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
        </v-dialog>

    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class BasicImageViewer extends Vue {
    @Prop({ type: Boolean, required: true, default: false })
    visible!: Boolean;

    @Prop({ type: String, required: true, default: '' })
    title!: String;

    @Prop({ type: String, required: true, default: '' })
    src!: String;

    dialogWidth: String = '85%'
    dialogHeight: String = '80%'

    handleCloseDialog(): void{
        this.$emit('update:title', "")
        this.$emit('update:src', "")
        this.$emit('update:visible', false)
    }
}
</script>
<style lang="sass" scoped>


</style>