import Vue from 'vue'
import lodash from 'lodash'

import App from './App.vue'
import router from './router'
import {utils} from '@/mixin/utils'

Vue.config.productionTip = false
Vue.prototype._= lodash
Vue.mixin(utils)



export const EventBus = new Vue({
  methods:{
    fromSister(m){
        this.$emit('fromSister',m)
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
