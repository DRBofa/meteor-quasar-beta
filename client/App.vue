<template>
  <div>
    <router-link to="/customer">Customer</router-link>
    <router-link to="/item">item</router-link>
    <div class="q-pa-md q-gutter-sm">
      <q-btn round size="sm" color="accent" @click="showNotif()">
        <q-icon name="fullscreen_exit"/>
      </q-btn>
      <q-btn @click="showNotif" color="white" text-color="black" label="Standard"/>
      <q-btn @click="showNotif" color="primary" label="Primary"/>
      <q-btn @click="showNotif" color="secondary" label="Secondary"/>
      <q-btn @click="showNotif" color="amber" glossy label="Amber"/>
      <q-btn @click="showNotif" color="brown-5" label="Brown 5"/>
      <q-btn @click="showNotif" color="deep-orange" glossy label="Deep Orange"/>
      <q-btn @click="showNotif" color="purple" label="Purple"/>
      <q-btn @click="showNotif" color="black" label="Black"/>

      <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 300px">
          <q-input color="purple-12" v-model="text" label="Label">
            <template v-slot:prepend>
              <q-icon name="event"/>
            </template>
          </q-input>

          <q-input color="teal" filled v-model="text" label="Label">
            <template v-slot:prepend>
              <q-icon name="event"/>
            </template>
          </q-input>

          <q-input color="lime-11" bg-color="green" filled v-model="text" label="Label">
            <template v-slot:prepend>
              <q-icon name="event"/>
            </template>
          </q-input>

          <q-input color="teal" outlined v-model="text" label="Label">
            <template v-slot:append>
              <q-avatar>
                <img src="https://cdn.quasar-framework.org/logo/svg/quasar-logo.svg">
              </q-avatar>
            </template>
          </q-input>

          <q-input
            color="orange"
            standout
            bottom-slots
            v-model="text"
            label="Label"
            counter
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="place"/>
            </template>
            <template v-slot:append>
              <q-icon name="favorite"/>
            </template>

            <template v-slot:hint>Field hint</template>
          </q-input>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import {Quasar, QInput, QBtn, QAvatar, QIcon, Notify } from "quasar";
Vue.use(Quasar,{
  plugins: {
    Notify
  }
})
export default {
  
  components: {
    QInput,
    QBtn,
    QAvatar,
    QIcon
  },
  data() {
    return {
      text: "Hello"
    };
  },
  methods: {
    showNotif(color) {
      this.$q.notify({
        position: "center",
        message: "John pinged you",
        color: color
      });
    }
  }
};
</script>
