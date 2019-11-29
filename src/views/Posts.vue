<template>
    <div>
        <h3> this is posts page.</h3>
        <h3>{{msg}}</h3>
        <input v-model="msg">
        <h4> {{_.random(5)}}</h4>
        <h3>{{msg2}}</h3>
        
        
        
        <ul>
            <li v-for="post in posts" 
                    :key="post.id"
            >            
            <router-link :to="'/posts/post/' + post.id">{{post.title}}</router-link>
            </li>
        </ul>
        
        <router-view/>
        

    </div>
    

</template>

<script>
    export default {
        created(){
          this.$watch('msg',this._.debounce(this.aaa,1000))  
        },
        data(){
            return {
                msg : "123",   
                msg2 : "",             
                posts :[
                    {id : 1,title:"1번글입니다."},
                    {id : 2,title:"2번글입니다."}
                ]
            }
        },
        methods: {
            aaa(){
                //console.log('>>>>>>>>',this.msg);
                this.msg2 = this.msg;
            }
        }       

    }
</script>
