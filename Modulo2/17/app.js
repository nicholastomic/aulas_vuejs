const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Terminar essa bota",
            vueLink: "https://vuejs.org",
            fraseA: "Esta é a frase A",
            fraseB: "Esta é a frase B",
        };
    },

    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber<0.5){
                return `${randomNumber.toFixed(2)} menor que 0.5`;
            } else {
                return `${randomNumber.toFixed(2)} maior que 0.5`;
            }
        },
        outputFrase(){
            const randomNumber = Math.random();
            if (randomNumber<0.5){
                return this.fraseA;
            } else {
                return this.fraseB;
            }
        }
    }
});



app.mount('#user-goal');