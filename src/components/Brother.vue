<template>
    <div>
            <h1> This is brother!! </h1>
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
            EventBus.$on('fromSister',ret=>{
                console.log("Brothor:on >>",ret)
            })
        },
        data(){
        return{
            myMsg:""
        }  
        },
        methods:{
            sendToHome(){
                //this.msg = this.msg.name + " Replay"
                //this.msg.name ="DDD"
                this.$emit('fromBrother',this.myMsg)
            }
        }
        
    }
</script>