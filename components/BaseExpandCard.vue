<template>
    <v-card :style="{width: cardWidth}">
        <v-toolbar color="000000" height="50em" @click="toogleShowDetail" >
            <v-row class="align-center">
                <v-icon class="ml-4"> {{ icon }} </v-icon>
                <span class="ml-4 body-1 font-weight-bold">
                    {{ title }}
                </span>
                <v-spacer></v-spacer>
                <v-btn icon v-if="isExpand">
                    <v-icon>{{ showDetail ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-row>
        </v-toolbar>
        <v-expand-transition>
            <div v-show="showDetail">
                <v-card-text>
                    <slot name="content"></slot>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class LinkCard extends Vue {
    @Prop({ type: String, required: true, default: '' })
    icon!: String;

    @Prop({ type: String, required: true, default: '' })
    title!: String;

    @Prop({ type: Boolean, required: false, default: true })
    isExpand!: boolean;

    showDetail: Boolean = true
    cardWidth: String = '75em'

    toogleShowDetail(): void{
        if(this.isExpand)
            this.showDetail = !this.showDetail
    }
}
</script>
<style lang="sass" scoped>

</style>
