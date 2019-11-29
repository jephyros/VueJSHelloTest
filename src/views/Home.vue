<template>
  <div class="home">
    <div>==================Brother========</div>
    <Brother :msg="jsonData" @fromBrother="fromBrother"/>
    <div>==================Brother end ========</div>
    <input type="text" v-model="msg">
    <span >{{msg}}</span>
    <span v-html="msg"></span>
    <div>==================SSister========</div>
    <Sister :msg="jsonData" @fromSister="fromSister"/>

    <div>==================SSisterend ========</div>
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Brother from '@/components/Brother.vue'
import Sister from '@/components/Sister.vue'


//import {utils} from '@/mixin/utils'



export default {
  name: 'home',
  components: {
    HelloWorld,Brother,Sister
  },
  data() {
    return {
      jsonData:{id:'lss',name:"이순신"},
      msg:"0000",
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  },
//  mixins:[ utils],
  methods:{
    fromBrother(newMsg){
      console.log("fromBrother",newMsg)
      this.jsonData.name = this.sister2(newMsg);
    },
    fromSister(newMsg){
      console.log("fromSister:",newMsg);
    }

  }
}
</script>
