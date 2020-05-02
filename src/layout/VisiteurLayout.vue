<template>
    <div id="app" style="height: 100%;">
        <StarterNavbar></StarterNavbar>

        <router-view/>

        <MainFooter backgroundColor="black"></MainFooter>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex"
    import StarterNavbar from './StarterNavbar';
    import MainFooter from './MainFooter';

    export default {
        name: "VisiteurLayout",
        components: {
            StarterNavbar,
            MainFooter
        },
        computed:{
            ...mapState(["token"]),

        },
        methods:{
            ...mapActions(["getUser"]),

        },
        mounted(){
            if(this.token){
                this.getUser({
                    headers: {
                        'Accept' : 'application/json',
                        'Authorization': 'Bearer '+ JSON.parse(this.token),
                    }
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
