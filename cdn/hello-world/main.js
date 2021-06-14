// Inicializacion de la app y su logica
const app = Vue.createApp({
  // Datos a mostrar en la app / componente
  data() {
    return {
      title: "Banco Vue :)",
      amount: 1000,
      link: "https://www.google.com/",
      status: true,
      services: ['transferencias', 'pagos', 'giros', 'cheques'],
      disableButton: false,

    }
  },
  // funciones a utilizar en la app / componente (se ejecutan siempre y no tienen cache)
  methods: {
    addBalance() {
      this.amount = this.amount + 100
    },
    decreaseBalance() {
      if (this.amount === 0 ){
        alert("Saldo en cero!")
        this.disableButton = true

        return
      }

      this.amount = this.amount - 100
    }
  },
  // funciones que realizan calculos (y se guarda en cache el resultado)
  computed: {
    colorAmount() {
      return this.amount > 500 ? 'text-success' : 'text-danger'
    }
  }
})
