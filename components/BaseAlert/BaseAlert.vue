<template>
    <v-snackbar v-model="localVisible" :timeout="timeout" color="primary">
        <b>{{ message }}</b>
    </v-snackbar>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class BasicAlert extends Vue {
    @Prop({ type: Boolean, required: true, default: false })
    visible!: boolean;

    @Prop({ type: Number, required: false, default: 2000 })
    timeout!: String;

    @Prop({ type: String, required: true, default: '' })
    message!: string;

    localVisible: boolean = false

    @Watch('visible')
    onVisibleChange(newVal: boolean): void {
        this.localVisible = newVal;
    }

    @Watch('localVisible')
    onLocalVisibleChange(newVal: boolean): void {
        this.$emit("update:visible", newVal);
    }
}
</script>
<style lang="sass" scoped>


</style>