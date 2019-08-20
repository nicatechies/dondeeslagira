<template>
    <div v-if="isLocationEnabled">
        <div class="title">Let's to this</div>
        <b-container fluid style="margin-top: 20px;">
            <b-row>
                <b-col md="6" v-for="item in this.$store.getters.getLocations" :key="item.id">
                    <Event :item="item"></Event>
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Event from '@/components/Event.vue'; // @ is an alias to /src

    @Component({
        components: {
            Event,
        },
    })
    export default class EventList extends Vue {
        @Prop() private msg!: string;

        public beforeCreate(): void {
            this.$store.dispatch('setLocations');
        }

        public data() {
            return {
                location: '',
                errors: '',
            };
        }

        get isLocationEnabled(): any {
            return this.$store.getters.getLocations && this.$store.getters.getLocations.length > 0;
        }
    }
</script>

<style scoped>

</style>