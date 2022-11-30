const {createApp} = Vue;

const app = createApp({

    data () {
        return {
            listaEmail: []
        };
    },
    methods:{
        fetchData(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {

                console.log(resp);

                console.log(resp.data)

                this.listaEmail.push(resp.data.response);
            })
        }
    },
    mounted () {
        for(let i = 0; i < 10; i++){
            this.fetchData();
        }
    }
}).mount('#app');
