/* Richiesta:
Attraverso l’apposita API di Boolean:
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina
all’interno di una lista.
Bonus:
Far comparire gli indirizzi email solamente
quando sono stati tutti generati. */

// -------------------------------------------------------- //

new Vue ({
    el: "#appVue",

    // App data
    data: {
        emailList: [],
        emailListRendered: [],
    },

    // App methods
    methods: {
        generateEmail() {
            // Resetto gli array di email
            this.emailList.splice(0,this.emailList.length);
            this.emailListRendered.splice(0,this.emailListRendered.length);
            // Chiamo l'API per generare le mail
            for (let i = 0; i < 10; i++) {
                // Genero una mail
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((apiResponse) => {
                this.emailList.push(apiResponse.data.response);
                // Controllo se ci sono 10 email
                if (this.emailList.length === 10) {
                    this.emailListRendered = this.emailList;
                };
                });
            }

        },
    },
    
});