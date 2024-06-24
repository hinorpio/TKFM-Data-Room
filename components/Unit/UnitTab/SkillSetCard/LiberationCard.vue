<template>
    <v-card>
        <v-toolbar color="000000" height="50em" @click="toogleShowDetail">
            <v-row class="align-center">
                <v-avatar size="1.5em" tile class="ml-2">
                    <v-img :src="$util.getSkillSetIcon(section)"  />
                </v-avatar>
                <span class="ml-4 body-1 font-weight-bold">
                    {{getSectionLabel()}}
                </span>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>{{ showDetail ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-row>
        </v-toolbar>
        <v-expand-transition>
            <div v-show="showDetail">
                <v-card-text>
                    <v-row>
                        <v-col v-for="(material, index) in showVersion[section].material" :key="index" :cols="(12/itemsPerRow)">
                                <v-avatar size="2em" tile class="ml-2">
                                    <v-img :src="getIconSrc(index, material)"  />
                                </v-avatar>
                                <span class="ml-4 body-1 font-weight-bold">
                                    {{`${getItemLabel(index, material)} x ${material.quantity}`}}
                                </span>
                        </v-col>
                    </v-row>
                    <v-divider class="mt-4"></v-divider>
                    <div v-for="(skillset, index) in showVersion[section].skill[$i18n.locale]" :key="index" class="mb-2">
                        <skill-card v-if="index == 'SKILL_S'" class="mb-4" :showVersion="showVersion[section].skill[$i18n.locale]" isLiberation/>
                        <attack-card v-if="index == 'ATTACK'" class="mb-4" :showVersion="showVersion[section].skill[$i18n.locale]" />
                        <leader-card v-if="index == 'LEADER'" class="mb-4" :showVersion="showVersion[section].skill[$i18n.locale]" />
                        <passive-1-card v-if="index == 'PASSIVE_1'" class="mb-4" :showVersion="showVersion[section].skill[$i18n.locale]" />
                        <passive-2-card v-if="index == 'PASSIVE_2'" class="mb-4" :showVersion="showVersion[section].skill[$i18n.locale]" />
                        <passive-3-card v-if="index == 'PASSIVE_3'" class="mb-4" :showVersion="showVersion[section].skill[$i18n.locale]" />
                        <base-stat-card v-if="index == 'BASE_STAT'" class="mb-4" :showVersion="showVersion[section].skill[$i18n.locale]" />
                    </div>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>
<script lang="js">
import Vue from "vue";
import SkillCard from "@/components/Unit/UnitTab/SkillSetCard/SkillCard.vue";
import AttackCard from "@/components/Unit/UnitTab/SkillSetCard/AttackCard.vue";
import LeaderCard from "@/components/Unit/UnitTab/SkillSetCard/LeaderCard.vue";
import Passive1Card from "@/components/Unit/UnitTab/SkillSetCard/Passive1Card.vue";
import Passive2Card from "@/components/Unit/UnitTab/SkillSetCard/Passive2Card.vue";
import Passive3Card from "@/components/Unit/UnitTab/SkillSetCard/Passive3Card.vue";
import BaseStatCard from "@/components/Unit/UnitTab/SkillSetCard/BaseStatCard.vue";

export default Vue.extend({
    components: {
        SkillCard,
        AttackCard,
        LeaderCard,
        Passive1Card,
        Passive2Card,
        Passive3Card,
        BaseStatCard,
    },
    props: {
        section: {
            type: String,
            required: true,
            default: "LIBERATION1"
        },
        showVersion: {
            type: Object,
            required: true,
            default: {},
        },
        essenceIcon: {
            type: String,
            required: true,
            default: ""
        }
    },
    computed: {
        itemsPerRow(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 1
                case 'sm': return 2
                case 'md': return 2
                case 'lg': return 2
                case 'xl': return 2
            }
        }
    },
    methods: {
        toogleShowDetail() {
            this.showDetail = !this.showDetail;
        },
        getSectionLabel(){
            switch (this.section) {
                case "LIBERATION1":
                    return this.$t("Section 1")
                case "LIBERATION2":
                    return this.$t("Section 2")
                case "LIBERATION3":
                    return this.$t("Section 3")
                default:
                    break;
            }
        },
        getIconSrc(index, props){
            switch (index) {
                case "ESSENCE":
                    return this.essenceIcon
                case "CRYSTAL":
                    return this.$util.getItem(`EVOLVE_${props.element}_LV3`).icon
                default:
                    return this.$util.getItem(index).icon
            }
        },
        getItemLabel(index, props){
            switch (index) {
                case "ESSENCE":
                    return this.$t("Character Essence")
                case "CRYSTAL":
                    return this.$util.getItem(`EVOLVE_${props.element}_LV3`).name[this.$i18n.locale]
                default:
                    return this.$util.getItem(index).name[this.$i18n.locale]
            }
        },
    },
    data(){
        return {
            showDetail: false
        }
    }
})
</script>
<style lang="sass" scoped>

</style>
