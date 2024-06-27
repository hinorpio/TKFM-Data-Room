<template>
    <v-layout v-if="isMounted">
        <v-container>
            <v-row v-if="isNoUnitSelected">
                <v-spacer></v-spacer>
                <no-unit-selected />
                <v-spacer></v-spacer>
            </v-row>
            <div v-else>
                <v-row>
                    <v-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12" >
                        <unit-full-body :unit="unit" />
                    </v-col>
                    <v-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12">
                        <unit-content :unit="unit" />
                    </v-col>
                </v-row>
                <v-fab-transition>
                    <v-btn @click="visible = !visible" :color="$store.state.themeColor" dark absolute fixed bottom right fab class="mb-16" large >
                        <v-icon large>mdi-magnify</v-icon>
                    </v-btn>
                </v-fab-transition>
                <character-search-dialog :visible.sync="visible" />
            </div>
        </v-container>
    </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { ErrorCode } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit';
import NoUnitSelected from "@/components/Unit/NoUnitSelected.vue";
import UnitContent from "@/components/Unit/UnitContent.vue";
import UnitFullBody from "@/components/Unit/UnitFullBody.vue";
import CharacterSearchDialog from "@/components/Unit/CharacterSearchDialog/CharacterSearchDialog.vue";

@Component({
    components: {
        NoUnitSelected,
        UnitContent,
        UnitFullBody,
        CharacterSearchDialog,
    },
})
export default class UnitPage extends Vue {
    isMounted: boolean = false
    isNoUnitSelected: boolean = false
    visible: boolean = false
    unit: Unit | undefined

    async mounted() {
        const metaCode = this.$route.params.metaCode
        if(metaCode === undefined){
            this.isNoUnitSelected = true
        }else{
            try {
                this.unit = this.$util.getUnitByMetacode(metaCode)
            } catch (error) {
                console.log(error);
                const customError = this.$util.getCustomError(ErrorCode.CANNOT_FIND_CHARACTER)
                this.$nuxt.error(customError)
            }
        }
        this.isMounted = true    
    }
}
</script>