<template>
    <v-container class="r18-warning">
        <v-card>
            <v-card-title class="text-center">R-18 內容警告</v-card-title>
            <v-card-text>
                <p>本網站包含成人內容，僅適合年滿 18 歲的使用者。</p>
                <p>如果您未滿18歲或不希望查看成人內容，請立即離開此頁面。</p>
            </v-card-text>
            <v-card-actions>
                <v-btn class="ma-2" color="primary" @click="proceed">我已年滿 18 歲</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class R18Warning extends Vue {

    proceed(): void {
        this.$cookies.set('r18_warning_acknowledged', true); // Store the acknowledgment status in a cookie
        location.replace("/")
    }

    mounted(): void {
        const r18WarningAcknowledged = this.$cookies.get('r18_warning_acknowledged');
        if (r18WarningAcknowledged) {
            this.$router.push('/'); // Redirect the user to the home page or any other appropriate page
        }
    }
}
</script>

<style lang="sass" scoped>
.r18-warning
    display: flex
    justify-content: center
    align-items: center
    height: 100vh

.text-center 
    text-align: center

</style>