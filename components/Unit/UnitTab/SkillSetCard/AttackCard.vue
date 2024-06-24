<template>
    <v-card>
        <v-toolbar color="#c60244" height="50em">
            <v-row class="align-center">
                <v-avatar size="1.5em" tile class="ml-2">
                    <v-img :src="$util.getSkillSetIcon('ATTACK')"  />
                </v-avatar>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['ATTACK'].name}}
                </span>
            </v-row>
        </v-toolbar>
        <v-card-text>
            <div class="ml-4">
                <span class="body-1 font-weight-bold" v-html="$util.showPreLineText(showVersion['ATTACK'].description)" ></span>
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
    },
})
</script>
