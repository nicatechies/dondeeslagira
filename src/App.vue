<template>
  <div>
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <b-container fluid>
        <b-row>
          <b-col sm="5" class="left-wrapper">
            <div class="event-banner-wrapper" style="background: url(/images/event-banner.jpg);">
              <div class="logo">
                <h1>Stage</h1>
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
              <div class="event-tab">
                <b-nav class="nav-tabs">
                  <li role="presentation" class="active">
                    <a
                      href="#buyTicket"
                      aria-controls="buyTicket"
                      role="tab"
                      data-toggle="tab">
                      Buy Tickets
                    </a>
                  </li>
                  <li role="presentation">
                    <a 
                      href="#venue"
                      aria-controls="venue"
                      role="tab"
                      data-toggle="tab">
                      Venue
                    </a>
                  </li>
                  <b-nav-item active>Terms &amp; Conditions</b-nav-item>
                </b-nav>

              </div>
              <EventList></EventList>
            </div>

          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- <div class="container-fluid">
        <div class="col-sm-7 right-wrapper">
          <div class="event-ticket-wrapper">
            <div class="event-tab">
              
<ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                  <a
                    href="#buyTicket"
                    aria-controls="buyTicket"
                    role="tab"
                    data-toggle="tab"
                  ></a>
                </li>
                <li role="presentation">
                  <a href="#venue" aria-controls="venue" role="tab" data-toggle="tab">Venue</a>
                </li>

                <li role="presentation">
                  <a
                    href="#termCondition"
                    aria-controls="termCondition"
                    role="tab"
                    data-toggle="tab"
                  >Terms & Conditions</a>
                </li>
              </ul>
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active" id="buyTicket">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="ticketBox" data-ticket-price="50000">
                        <div class="inactiveStatus"></div>

                        <div class="row">
                          <div class="col-xs-6">
                            <div class="ticket-name">
                              Platinum
                              <span>
                                Standing
                                <br />1 Ticket for 1 person
                              </span>
                            </div>
                          </div>

                          <div class="col-xs-6">
                            <div class="ticket-price-count-box">
                              <div class="ticket-control">
                                <div class="input-group">
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      disabled="disabled"
                                      data-type="minus"
                                      data-field="quant[1]"
                                    >
                                      <span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                  </span>
                                  <input
                                    type="text"
                                    name="quant[1]"
                                    class="form-control input-number"
                                    value="0"
                                    min="0"
                                    max="10"
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      data-type="plus"
                                      data-field="quant[1]"
                                    >
                                      <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                              <p class="price">Rs.50000</p>
                            </div>
                          </div>
                        </div>

                        <div class="ticket-description">
                          <p>
                            <strong>Please refer Venue Plan:</strong>
                            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="ticketBox" data-ticket-price="40000">
                        <div class="inactiveStatus"></div>

                        <div class="row">
                          <div class="col-xs-6">
                            <div class="ticket-name">
                              Gold
                              <span>
                                Standing
                                <br />1 Ticket for 1 person
                              </span>
                            </div>
                          </div>

                          <div class="col-xs-6">
                            <div class="ticket-price-count-box">
                              <div class="ticket-control">
                                <div class="input-group">
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      disabled="disabled"
                                      data-type="minus"
                                      data-field="quant[2]"
                                    >
                                      <span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                  </span>
                                  <input
                                    type="text"
                                    name="quant[2]"
                                    class="form-control input-number"
                                    value="0"
                                    min="0"
                                    max="10"
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      data-type="plus"
                                      data-field="quant[2]"
                                    >
                                      <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                              <p class="price">Rs.40000</p>
                            </div>
                          </div>
                        </div>

                        <div class="ticket-description">
                          <p>
                            <strong>Please refer Venue Plan:</strong>
                            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="ticketBox" data-ticket-price="25000">
                        <div class="inactiveStatus"></div>

                        <div class="row">
                          <div class="col-xs-6">
                            <div class="ticket-name">
                              Silver
                              <span>
                                Standing
                                <br />1 Ticket for 1 person
                              </span>
                            </div>
                          </div>

                          <div class="col-xs-6">
                            <div class="ticket-price-count-box">
                              <div class="ticket-control">
                                <div class="input-group">
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      disabled="disabled"
                                      data-type="minus"
                                      data-field="quant[3]"
                                    >
                                      <span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                  </span>
                                  <input
                                    type="text"
                                    name="quant[3]"
                                    class="form-control input-number"
                                    value="0"
                                    min="0"
                                    max="10"
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      data-type="plus"
                                      data-field="quant[3]"
                                    >
                                      <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                              <p class="price">Rs.25000</p>
                            </div>
                          </div>
                        </div>

                        <div class="ticket-description">
                          <p>
                            <strong>Please refer Venue Plan:</strong>
                            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="ticketBox" data-ticket-price="20000">
                        <div class="inactiveStatus"></div>

                        <div class="row">
                          <div class="col-xs-6">
                            <div class="ticket-name">
                              Diamond
                              <span>
                                Standing
                                <br />1 Ticket for 1 person
                              </span>
                            </div>
                          </div>

                          <div class="col-xs-6">
                            <div class="ticket-price-count-box">
                              <div class="ticket-control">
                                <div class="input-group">
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      disabled="disabled"
                                      data-type="minus"
                                      data-field="quant[4]"
                                    >
                                      <span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                  </span>
                                  <input
                                    type="text"
                                    name="quant[4]"
                                    class="form-control input-number"
                                    value="0"
                                    min="0"
                                    max="10"
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      data-type="plus"
                                      data-field="quant[4]"
                                    >
                                      <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                              <p class="price">Rs.20000</p>
                            </div>
                          </div>
                        </div>

                        <div class="ticket-description">
                          <p>
                            <strong>Please refer Venue Plan:</strong>
                            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="ticketBox" data-ticket-price="18000">
                        <div class="inactiveStatus"></div>

                        <div class="row">
                          <div class="col-xs-6">
                            <div class="ticket-name">
                              Ruby
                              <span>
                                Standing
                                <br />1 Ticket for 1 person
                              </span>
                            </div>
                          </div>

                          <div class="col-xs-6">
                            <div class="ticket-price-count-box">
                              <div class="ticket-control">
                                <div class="input-group">
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      disabled="disabled"
                                      data-type="minus"
                                      data-field="quant[5]"
                                    >
                                      <span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                  </span>
                                  <input
                                    type="text"
                                    name="quant[5]"
                                    class="form-control input-number"
                                    value="0"
                                    min="0"
                                    max="10"
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      data-type="plus"
                                      data-field="quant[5]"
                                    >
                                      <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                              <p class="price">Rs.18000</p>
                            </div>
                          </div>
                        </div>

                        <div class="ticket-description">
                          <p>
                            <strong>Please refer Venue Plan:</strong>
                            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="ticketBox" data-ticket-price="15000">
                        <div class="inactiveStatus"></div>

                        <div class="row">
                          <div class="col-xs-6">
                            <div class="ticket-name">
                              Pearl
                              <span>
                                Standing
                                <br />1 Ticket for 1 person
                              </span>
                            </div>
                          </div>

                          <div class="col-xs-6">
                            <div class="ticket-price-count-box">
                              <div class="ticket-control">
                                <div class="input-group">
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      disabled="disabled"
                                      data-type="minus"
                                      data-field="quant[6]"
                                    >
                                      <span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                  </span>
                                  <input
                                    type="text"
                                    name="quant[6]"
                                    class="form-control input-number"
                                    value="0"
                                    min="0"
                                    max="10"
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      data-type="plus"
                                      data-field="quant[6]"
                                    >
                                      <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                              <p class="price">Rs.15000</p>
                            </div>
                          </div>
                        </div>

                        <div class="ticket-description">
                          <p>
                            <strong>Please refer Venue Plan:</strong>
                            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="ticketBox" data-ticket-price="10000">
                        <div class="inactiveStatus"></div>

                        <div class="row">
                          <div class="col-xs-6">
                            <div class="ticket-name">
                              Emerald
                              <span>
                                Standing
                                <br />1 Ticket for 1 person
                              </span>
                            </div>
                          </div>

                          <div class="col-xs-6">
                            <div class="ticket-price-count-box">
                              <div class="ticket-control">
                                <div class="input-group">
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      disabled="disabled"
                                      data-type="minus"
                                      data-field="quant[7]"
                                    >
                                      <span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                  </span>
                                  <input
                                    type="text"
                                    name="quant[7]"
                                    class="form-control input-number"
                                    value="0"
                                    min="0"
                                    max="10"
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      data-type="plus"
                                      data-field="quant[7]"
                                    >
                                      <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                              <p class="price">Rs.10000</p>
                            </div>
                          </div>
                        </div>

                        <div class="ticket-description">
                          <p>
                            <strong>Please refer Venue Plan:</strong>
                            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="ticketBox" data-ticket-price="5000">
                        <div class="inactiveStatus"></div>

                        <div class="row">
                          <div class="col-xs-6">
                            <div class="ticket-name">
                              Plaza
                              <span>
                                Standing
                                <br />1 Ticket for 1 person
                              </span>
                            </div>
                          </div>

                          <div class="col-xs-6">
                            <div class="ticket-price-count-box">
                              <div class="ticket-control">
                                <div class="input-group">
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      disabled="disabled"
                                      data-type="minus"
                                      data-field="quant[8]"
                                    >
                                      <span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                  </span>
                                  <input
                                    type="text"
                                    name="quant[8]"
                                    class="form-control input-number"
                                    value="0"
                                    min="0"
                                    max="10"
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default btn-number"
                                      data-type="plus"
                                      data-field="quant[8]"
                                    >
                                      <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                              <p class="price">Rs.5000</p>
                            </div>
                          </div>
                        </div>

                        <div class="ticket-description">
                          <p>
                            <strong>Please refer Venue Plan:</strong>
                            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="venue">
                  <h4>
                    Lorem ipsum dolor sit amet,
                    <br />consectetur adipiscing elit,
                    <br />sed do eiusmod
                    <br />Pune 411058
                  </h4>
                  <br />
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1UMEBYRnM0KZhrhqikVv3YigwUd0"
                    width="640"
                    height="300"
                  ></iframe>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="termCondition">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                </div>
              </div>
            </div>

            <div class="cart">
              <div class="row">
                <div class="col-xs-6">
                  <p>
                    <span class="ticket-count">0</span> Tickets
                    <span class="divider"></span> Total: Rs.
                    <span class="total-amount">0</span>
                  </p>
                </div>
                <div class="col-xs-6">
                  <div class="text-right">
                    <a class="btn disabled" data-toggle="modal" data-target="#ticket-details">PROCEED</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss">
@import "main.scss";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EventList from '@/components/EventList.vue'; // @ is an alias to /src

@Component({
  components: {
    EventList,
  },
})
export default class App extends Vue {
  private loading = true;

  public created() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
</script>

// <router-link to="/">Home</router-link> |
// <router-link to="/about">About</router-link>
