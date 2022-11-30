const {createApp} = Vue;

const app = createApp({

    data () {
        return {
            listaEmail: [],
            listaTemporanea: [],
        };
    },
    methods:{
        fetchData(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                console.log(resp);
                console.log(resp.data);
                this.listaTemporanea.push(resp.data.response);
                this.ajaxCounter++;
                if (this.ajaxCounter === 10) {
                    this.listaEmail = this.listaTemporanea;
                }
            })
        }
    },
    mounted () {
        this.ajaxCounter = 0;
        for(let i = 0; i < 10; i++){
            this.fetchData();
        }
    }
}).mount('#app');
