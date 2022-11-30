const {createApp} = Vue;

const app = createApp({

    data () {
        return{
            message: 'Ciaone'
        };
    },
    methods:{
        fetchData(){
            anxios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function (resp) {
                console.log(resp)
            });
        }
    },
    mouted () {
        this.fetchData()
    }
}).mount('#app');
