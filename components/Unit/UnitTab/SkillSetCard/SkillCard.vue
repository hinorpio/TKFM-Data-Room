<template>
    <v-card>
        <v-toolbar color="#f0b023" height="50em">
            <v-row class="align-center">
                <v-avatar size="1.5em" tile class="ml-2">
                    <v-img :src="$util.getSkillSetIcon('SKILL')"  />
                </v-avatar>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_S'].name}}
                </span>
                <v-spacer></v-spacer>
                <v-switch v-if="!isLiberation" v-model="isDetail" class="mt-5" inset ></v-switch>
            </v-row>
        </v-toolbar>
        <v-card-text>
            <div v-if="isDetail && !isLiberation">
                <h3>{{$t('Level 1')}}</h3>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_1'].description}}
                </span>
                <v-divider class="my-2"></v-divider>
                <h3>{{$t('Level 2')}}</h3>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_2'].description}}
                </span>
                <v-divider class="my-2"></v-divider>
                <h3>{{$t('Level 3')}}</h3>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_3'].description}}
                </span>
                <v-divider class="my-2"></v-divider>
                <h3>{{$t('Level 4')}}</h3>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_4'].description}}
                </span>
                <v-divider class="my-2"></v-divider>
                <h3>{{$t('Level 5')}}</h3>
                <span class="ml-4 body-1 font-weight-bold">
                    {{showVersion['SKILL_5'].description}}
                </span>
            </div>
            <div v-else>
                <div class="ml-4">
                    <span class="body-1 font-weight-bold">
                        {{showVersion['SKILL_S'].description}}
                    </span>
                </div>
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
        isLiberation: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data(){
        return{
            isDetail: false
        }
    }
})
</script>
