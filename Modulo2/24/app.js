const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      nome: "",
      confirmedNome: ""
    };
  },

  methods: {
    confirmInput(){
      this.confirmedNome = this.nome;
    },
    submitForm(){
      alert("Submit");
    },
    addConteur(num){
      this.counter = this.counter + num;
    },
    minusCounter(num){
      this.counter = this.counter - num;
    },
    changeName(event){
      this.nome = event.target.value;
    },
    resetInput(){
      this.nome = "";
      this.confirmedNome = "";
    }
  }
});

app.mount('#events');
