<template>
    <v-layout v-if="isMounted" >
        <v-container :key="key">
            <v-row v-if="isNoUnitSelected">
                <v-spacer></v-spacer>
                <character-search />
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
                <v-dialog v-model="visible" :max-width="dialogWidth" :max-height="dialogHeight" @click:outside="visible = false" >
                    <character-search isDialog @close="visible = false"/>
                </v-dialog>
            </div>
        </v-container>
    </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { ErrorCode } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit';
import UnitContent from "@/components/Unit/UnitContent.vue";
import UnitFullBody from "@/components/Unit/UnitFullBody.vue";
import CharacterSearch from "~/components/Unit/CharacterSearch/CharacterSearch.vue";

@Component({
    components: {
        UnitContent,
        UnitFullBody,
        CharacterSearch
    },
})
export default class UnitPage extends Vue {
    isMounted: boolean = false
    isNoUnitSelected: boolean = false
    visible: boolean = false
    unit: Unit | undefined
    dialogWidth: String = '80em';
    dialogHeight: String = '80%';
    key: number = 0;

    @Watch("watchedQueryParams")
    onWatchedQueryParamsChangenew(newQueryParams: string): void {
        this.pageCustomRefresh()
    }

    async mounted() {
        this.pageCustomRefresh()
        this.isMounted = true    
    }

    get watchedQueryParams(){
        return this.$route.query;
    }

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    pageCustomRefresh(){
        const metaCode = this.watchedQueryParams.code as string
        
        if(metaCode === undefined){
            this.isNoUnitSelected = true
        }else{
            try {
                this.scrollToTop()
                this.isNoUnitSelected = false
                this.visible = false
                this.unit = this.$util.getUnitByMetacode(metaCode)
            } catch (error) {
                console.log(error);
                const customError = this.$util.getCustomError(ErrorCode.CANNOT_FIND_CHARACTER)
                this.$nuxt.error(customError)
            }
        }
        this.key++
    }
}
</script>