<template>
    <div>
            <h1> This is Sister!! </h1>
            
            <h2> {{msg}} </h2>
            <input v-model="myMsg"/>
            <button @click="sendToHome()">SendtoHome</button>
    </div>

</template>
<script>
    import {EventBus} from '@/main'

    export default {
        props: ['msg'],
        created(){
            this.myMsg= this.msg.name;
            
        },
        data(){
        return{
            myMsg:""
        }  
        },
        methods:{
            sendToHome(){
                //EventBus.$emit('fromSister',this.myMsg)
                EventBus.fromSister(this.myMsg)
                //this.msg = this.msg.name + " Replay"
                //this.msg.name ="DDD"
                //this.$emit('fromSister',this.myMsg)
            }
        }
        
    }
</script>