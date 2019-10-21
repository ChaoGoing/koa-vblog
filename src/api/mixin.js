import {mapGetters, mapMutations, mapActions} from 'vuex'

export const tokenMixin = {
    data(){
        return {

        }
    },
    methods:{
        ...mapMutations({
            setToken:"SET_TOKEN"
        }),
        handleToken(token){
            this.setToken(token);
            localStorage.setItem('vToken', token);
        },
        removeToken(){
            localStorage.removeItem('vToken')
        }
    },
    computed:{
        ...mapGetters['token']
    }
}