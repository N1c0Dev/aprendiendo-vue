// Inicializacion del componente y su logica
app.component('footer-bank', {
  // Se definen los props en un array
  props: ['amount', 'date'],
  // Datos a mostrar en el componente
  data() {
    return {
      text: 'Footer de mi sitio web dinamico',
    }
  },
  // funciones a utilizar en el componente (se ejecutan siempre y no tienen cache)
  methods: {},
  // funciones que realizan calculos (y se guarda en cache el resultado)
  computed: {},
  // HTML del componente
  template: `
    <div class="bg-dark py-3 mt-2 text-white">
      <h3>{{ text }} - {{ amount }}</h3>
      <p>
        {{ date }}
      </p>
    </div>
  `
})
