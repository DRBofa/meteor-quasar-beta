<template>
  <div>
    <div>
      <q-card class="Card">
        <q-card-section>
          <div class="text-h6">Form Product Import</div>
          <div class="text-subtitle2">by Bona</div>
        </q-card-section>

        <q-card-section>
          <q-input class="q-pa-sm" outlined v-model="form.name" label="Name"/>
          <q-select class="q-pa-sm" outlined v-model="form.type" :options="types" label="Comany"/>
          <q-input class="q-pa-sm" outlined v-model="form.price" label="Price"/>
          <q-input class="q-pa-sm" outlined v-model="form.cost" label="Cost"/>
          <q-input class="q-pa-sm" outlined v-model="form.memo" label="Memo"/>
        </q-card-section>

        <q-separator dark/>

        <q-card-actions align="around">
          <q-btn class="Width" color="info" icon="restore"></q-btn>
          <q-btn class="Width" color="accent" @click="showNotif('accent')" icon="add"/>
          <q-btn class="Width" color="primary" icon="forward"></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  QSeparator,
  QSelect,
  Quasar,
  QInput,
  QBtn,
  QAvatar,
  QIcon,
  Notify,
  QCard,
  QCardSection,
  QCardActions
} from "quasar";
Vue.use(Quasar, {
  plugins: {
    Notify
  }
});
export default {
  components: {
    QSeparator,
    QSelect,
    QCard,
    QCardSection,
    QCardActions,
    QInput,
    QBtn,
    QAvatar,
    QIcon
  },
  data() {
    return {
      text: "Hello",
      types: ["Google", "Facebook", "Drink", "Apple", "Oracle"],
      form: {
        name: "Coca",
        type: "Drink",
        price: 0.5,
        cost: 0.3,
        memo: "Eneger Drink"
      }
    };
  },
  methods: {
    showNotif(color) {
      this.$q.notify({
        position: "top",
        message: "John pinged you",
        color: color
      });
    }
  }
};
</script>

<style>
.Width {
  width: 10%;
}
.Card {
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
