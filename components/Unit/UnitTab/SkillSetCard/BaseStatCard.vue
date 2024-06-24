<template>
    <v-card>
        <v-toolbar color="#925be6" height="50em">
            <v-row class="align-center">
                <v-avatar size="1.5em" tile class="ml-2">
                    <v-img :src="$util.getSkillSetIcon('BASE_STAT')"  />
                </v-avatar>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['BASE_STAT'].name}}
                </span>
            </v-row>
        </v-toolbar>
        <v-card-text>
            <div class="ml-4">
                <span class="body-1 font-weight-bold" v-html="$util.showPreLineText(showVersion['BASE_STAT'].description)"></span>
            </div>
        </v-card-text>
    </v-card>
</template>
<script lang="js">
import Vue from "vue";
export default Vue.extend({
    props: {
        showVersion: {
            type: Object,
            required: true,
            default: {},
        },
    }
})
</script>