<template>
    <div v-if="isMounted">
        <v-col>
            <v-select v-if="versionList.length > 1" :items="versionList" item-text="label" item-value="value" v-model="version" filled dense />
            <base-stat-card class="mb-4" :showVersion="showVersion" />
            <skill-card class="mb-4" :showVersion="showVersion" />
            <attack-card class="mb-4" :showVersion="showVersion" />
            <leader-card class="mb-4" :showVersion="showVersion" />
            <passive-1-card class="mb-4" :showVersion="showVersion" />
            <passive-2-card class="mb-4" :showVersion="showVersion" />
            <passive-3-card class="mb-4" :showVersion="showVersion" />
            <general-1-card class="mb-4" :showVersion="showVersion" />
            <general-2-card class="mb-4" :showVersion="showVersion" />
        </v-col>
        <v-divider class="my-2"></v-divider>
    </div>
</template>
<script lang="js">
import Vue from "vue";
import BaseStatCard from "@/components/Unit/UnitTab/SkillSetCard/BaseStatCard.vue";
import SkillCard from "@/components/Unit/UnitTab/SkillSetCard/SkillCard.vue";
import AttackCard from "@/components/Unit/UnitTab/SkillSetCard/AttackCard.vue";
import LeaderCard from "@/components/Unit/UnitTab/SkillSetCard/LeaderCard.vue";
import Passive1Card from "@/components/Unit/UnitTab/SkillSetCard/Passive1Card.vue";
import Passive2Card from "@/components/Unit/UnitTab/SkillSetCard/Passive2Card.vue";
import Passive3Card from "@/components/Unit/UnitTab/SkillSetCard/Passive3Card.vue";
import General1Card from "@/components/Unit/UnitTab/SkillSetCard/General1Card.vue";
import General2Card from "@/components/Unit/UnitTab/SkillSetCard/General2Card.vue";

export default Vue.extend({
    components: {
        BaseStatCard,
        SkillCard,
        AttackCard,
        LeaderCard,
        Passive1Card,
        Passive2Card,
        Passive3Card,
        General1Card,
        General2Card,
    },
    props: {
        unit: {
            type: Object,
            required: true,
            default: {},
        },
    },
    computed: {
        showVersion(){
            return this.unit.skillSet[this.version].skill[this.$i18n.locale]
        }
    },
    async mounted() {
        this.versionList = this.unit.skillSet.map((set, index) => {
            return {
                label: `${this.$t('Version')} ${set.version}${this.getLastDate(set.lastDate)}`,
                value: index
            }
        })
        this.isMounted = true
    },
    methods: {
        getLastDate(date){
            return (date == null)
                ?` - ${this.$t("Current Version")}` 
                :` - ${this.$t("As of")} ${date}`
        }
    },
    data() {
        return {
            isMounted: false,
            loading: false,
            version: 0,
            versionList: [],
        }
    }
})
</script>

