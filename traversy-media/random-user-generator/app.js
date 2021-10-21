const app = Vue.createApp({
  // Variables que se pueden bindear en la vista del componente
  data() {
    return {
      firstName: 'Jhon',
      lastName: 'Doe',
      email: 'jhon@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
  methods: {
    // Metodos que se pueden llamar desde la vista del componente
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    }
  }
})

app.mount('#app')
