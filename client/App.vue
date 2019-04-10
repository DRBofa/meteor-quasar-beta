<template>
  <div>
    <router-link to="/item">item</router-link>
     <div class="q-pa-md q-gutter-sm">
    <q-btn @click="showNotif" color="white" text-color="black" label="Standard" />
    <q-btn @click="showNotif" color="primary" label="Primary" />
    <q-btn @click="showNotif" color="secondary" label="Secondary" />
    <q-btn @click="showNotif" color="amber" glossy label="Amber" />
    <q-btn @click="showNotif" color="brown-5" label="Brown 5" />
    <q-btn @click="showNotif" color="deep-orange" glossy label="Deep Orange" />
    <q-btn @click="showNotif" color="purple" label="Purple" />
    <q-btn @click="showNotif" color="black" label="Black" />


       <q-input outlined v-model="text" label="Outlined" />
  </div>
    <router-link to="/customer">Customer</router-link>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data(){
    return{
      text:'Hello'
    }
  },
  methods:{
    showNotif () {
      this.$q.notify({
        message: 'John pinged you',
        color: 'purple'
      })
    }
  }
}
</script>
