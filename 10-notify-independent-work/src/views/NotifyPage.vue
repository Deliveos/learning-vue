<template>
  <div>
    <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container con">
          <!-- wrapper -->
          <div class="notify-wrapper">
            <!-- title -->
            <div class="notify-title">
              <p>Notify App</p>

              <!-- svg -->
              <svg
                @click="
                  $store.dispatch('setIsLoading', true);
                  $store.dispatch('getNotifyLazy');
                "
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 460.801 460.801"
                style="enable-background:new 0 0 460.801 460.801;"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M231.298,17.068c-57.746-0.156-113.278,22.209-154.797,62.343V17.067C76.501,7.641,68.86,0,59.434,0
			                    S42.368,7.641,42.368,17.067v102.4c-0.002,7.349,4.701,13.874,11.674,16.196l102.4,34.133c8.954,2.979,18.628-1.866,21.606-10.82
                          c2.979-8.954-1.866-18.628-10.82-21.606l-75.605-25.156c69.841-76.055,188.114-81.093,264.169-11.252
                          s81.093,188.114,11.252,264.169s-188.114,81.093-264.169,11.252c-46.628-42.818-68.422-106.323-57.912-168.75
                          c1.653-9.28-4.529-18.142-13.808-19.796s-18.142,4.529-19.796,13.808c-0.018,0.101-0.035,0.203-0.051,0.304
                          c-2.043,12.222-3.071,24.592-3.072,36.983C8.375,361.408,107.626,460.659,230.101,460.8
                          c122.533,0.331,222.134-98.734,222.465-221.267C452.896,117,353.832,17.399,231.298,17.068z"
                  />
                </g>
              </svg>
            </div>
            <div class="notify-content">
              <Preloader v-if="isLoading" />
              <NotifyError v-show="error.text && !isLoading" :error="error" />
              <Notify v-if="!isLoading && !error.title" :messages="messages" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Notify from '@/components/Notify';
//UI
import Preloader from '@/components/UI/Preloader';
import NotifyError from '@/components/UI/NotifyError';

export default {
  components: {
    Notify,
    Preloader,
    NotifyError,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch('getNotify');
  },
  computed: {
    messages() {
      return this.$store.getters.getMessageMain;
    },
    error() {
      return this.$store.getters.getError;
    },
    isLoading() {
      return this.$store.getters.getIsLoading;
    },
  },
};
</script>

<style lang="scss">
.con {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
.notify-wrapper {
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 16px;
}
.notify-title {
  display: flex;
  justify-content: space-between;
  p {
    font-size: 24px;
    text-align: center;
  }
  svg {
    width: 20px;
    height: auto;
  }
}
.notify-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}
</style>
