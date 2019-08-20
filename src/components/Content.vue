<template>
  <b-container fluid>
    <b-row>
      <b-col sm="5" class="left-wrapper">
        <div class="event-banner-wrapper" style="background: url(/images/event-banner.jpg);">
          <div class="logo">
            <h1>Donde es la Gira</h1>
          </div>

          <h2>
            Music
            <br />Concert Live
            <span>10 April 2017, 8:00 PM</span>
          </h2>
          <p>
            created by
            <a href="http://www.pixpalette.com" target="_blank">pixpalette</a>
          </p>
        </div>
      </b-col>
      <b-col sm="7" class="right-wrapper">
        <div class="event-ticket-wrapper">
          <!--- Implement Category filters -->
          <!-- <div class="event-tab">
                <b-nav class="nav-tabs">
                  <b-nav-item class="active">Buy Tickets</b-nav-item>
                  <b-nav-item>Venue</b-nav-item>
                  <b-nav-item>Terms &amp; Conditions</b-nav-item>
                </b-nav>
          </div>-->
          <EventList></EventList>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EventList from '@/components/EventList.vue'; // @ is an alias to /src

@Component({
  components: {
    EventList,
  },
})
export default class Content extends Vue {

}
</script>
