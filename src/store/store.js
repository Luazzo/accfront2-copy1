import Vue from "vue";
import VueX from "vuex";
import axios from 'axios';
import router from "../router";
import createPersistedState from "vuex-persistedstate";

const BASE_URL = 'http://127.0.0.1:8000/api';
Vue.use(VueX);


export const store = new VueX.Store({
    plugins: [createPersistedState()],
    state:{
        user: {},
        token : "",
        loggedIn: false
    },

    getters:{
        user : state =>{ return state.user; },
        token : state =>{ return state.token; },
        loggedIn : state =>{ return state.loggedIn; },
    },

    mutations:{
        SET_USER(state,newValue){
            return state.user = newValue;
        },
        SET_TOKEN(state,newValue){
            return state.token = newValue;
        },
        SET_LOGGEDIN(state, newValue){
            return state.loggedIn = newValue;
        },


        /**
         * @return {boolean}
         */
        CHECK_VALUE(state, value){
            return value === '';
        },
    },

    actions:{


        sendEmail({state}, payload){

            axios.post('contact', payload )
                .then(response => {

                    console.log("email", response.data);

                })
                .catch(error => {
                    console.log(error);
                });

        },

        getUser({state}){ //sans {} crée un error 400 : token undefined

            axios.get("auth/user",{
                headers: {
                    'Accept' : 'application/json',
                    'Authorization': 'Bearer '+ JSON.parse(state.token),
                }
            })
                .then(response => {

                    console.log("user", response.data);

                })
                .catch(error => {
                    console.log(error);
                });
            /* */

        },

        loginUser({commit,state}, payload){

            axios.post("auth/login", payload)
                .then(response => {

                    commit('SET_TOKEN', JSON.stringify(response.data.accessToken));

                    commit('SET_LOGGEDIN', true);

                    console.log("user", state.user);

                    router.push({name:'accueil'});

                })
                .catch(error => {
                    console.log(error);
                });

        },

        logoutUser({commit,state}) {

            axios.post( "auth/logout",{
                'token' : JSON.parse(state.token)
            })
                .then(response => {
                    if (response.data.message) {

                        console.log(response.data.message);
                        router.push({name:'login'});

                        commit('SET_TOKEN', '');

                        commit('SET_LOGGEDIN', false);


                    }
                })
                .catch(function (error) {
                    commit('SET_TOKEN', '');
                    console.error(error.response);
                });
        }
    },


});
