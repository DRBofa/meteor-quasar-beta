<template>
  <div class="q-pa-md">
    <q-card class="my-card Card">
      <q-card-section>
        <div class="text-h6">List Customer</div>
        <div class="text-subtitle2">By Didi</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Age</th>
            <th class="text-left">Address</th>

            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item._id">
            <td class="text-left">{{item.name}}</td>
            <td class="text-left">{{item.age}}</td>
           <td class="text-left">{{item.age}}</td>
           <td>
               <q-btn icon="info" flat round />
           </td>
          </tr>
          
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>
<script>
import Vue from "vue";
import {
    QMarkupTable,
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
      QMarkupTable,
    QCard,
    QCardSection,
    QCardActions,
    QInput,
    QBtn,
    QAvatar,
    QIcon
  },
  data(){
      return{
          items:[]
      }
  },
  mounted(){
      this.GetData()
  },
  methods:{
      GetData(){
          Meteor.call('findStudent',(err,result)=>{
              if(result){
                  this.items=result
              }
          })
      }
  }
};
</script>
