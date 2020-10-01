<template>
  <v-app id="inspire" class="brg-app">
    <Navbar />
    <Sidebar @changeFlagOnClick="changeMenuFlag($event)" />
    <v-content :class="{ contentgd: !isOpen, smallcontentgd: isOpen }">
      <v-container
        fluid
        class="position-relative pt-0 pb-0"
        color="#EFF1F4"
      >
        <header-app />
        <v-row
          align="center"
          justify="center"
          class="main-content-container gd-container"
        >
          <v-snackbar
            color="white"
            class="alert-center"
            v-model="success"
            :timeout="timeout"
          >
            <div class="snackbar-content text-center">
              <img src="/images/alert_success.png" alt="">
              <h3 class="black--text text-center mt-4">
                {{ getFlushSuccess }}
              </h3>
            </div>
          </v-snackbar>
          <v-snackbar
            class="alertModal"
            color="white"
            v-model="error"
            :timeout="timeout"
          >
            <div class="snackbar-content" v-if="typeof getFlushError === 'string'">
              <h3 class="black--text text-center">
                {{ getFlushError }}
              </h3>
            </div>
            <div class="snackbar-content black--text" v-else>
              <h3 class="text-center mb-3">
                {{ getFlushError.message }}
              </h3>
              <ul class="error-list">
                <li v-for="(error) in getFlushError.errors" :key="error">{{error[0]}}</li>
              </ul>
            </div>
            <div class="px-4">
              <v-divider class="py-4" />
            </div>
          </v-snackbar>
          <v-col cols="12">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar'
import HeaderApp from '@components/HeaderApp'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    isOpen: true,
    timeout: 4000
  }),
  components: {
    Sidebar,
    Navbar,
    HeaderApp
  },
  computed: {
    ...mapGetters('message', ['getFlushError', 'getFlushSuccess']),
    success: {
      get: function () {
        return !!this.getFlushSuccess
      },
      set: function (newValue) {
        this.setFlushSuccess(newValue)
      }
    },
    error: {
      get: function () {
        return !!this.getFlushError
      },
      set: function (newValue) {
        this.setFlushError(newValue)
      }
    }
  },
  methods: {
    ...mapMutations('message', ['setFlushError', 'setFlushSuccess']),
    changeMenuFlag (data) {
      this.isOpen = data
    },
    closeSideMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
.brg-app {
  .v-content {
    background-color: #fffdfdfd;
  }
}

.contentgd {
  padding: 100px 0 0 250px !important;
}

.smallcontentgd {
  padding: 100px 154px 0 154px !important;
}

.v-snack__content {
  border: 1px solid #1a93bd !important;
  border-radius: 5px;
}

.snackbar-content {
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.alert-center{
  height: 100vh;
}

.error-list {
  list-style: none;
  color: red;
}
</style>
