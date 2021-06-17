<template>
  <div class="home">
    <!-- Forma correcta de acceder al state -->
    <h1 :style="ColorCounter">
      {{ title }}: {{ counter }}
    </h1>
    <!-- Ejecutamos una mutacion pero no es recomendable hacerlo directamente -->
    <!-- <button @click="increase">Aumentar</button> -->
    <BtnDecrease />
    <button @click="actionIncrease(50)">Aumentar</button>
    <hr>
    <BtnAction :state="false"/>
    <BtnAction :state="true"/>
  </div>
</template>

<script>
// Se importa mapState, mapMutations, mapActions
import {
  mapState,
  mapMutations,
  mapActions,
} from 'vuex'

import BtnDecrease from '@/components/BtnDecrease.vue'
import BtnAction from '@/components/BtnAction.vue'

export default {
  name: 'Home',
  components: {
    BtnDecrease,
    BtnAction,
  },
  data() {
    return {
      title: 'Mi contador Vuex'
    }
  },
  methods: {
     // Se mapea el mutations del store en methods
    ...mapMutations(['increase']),
     // Se mapea el action del store en methods
    ...mapActions(['actionIncrease']),
  },
  computed: {
    // Se mapea el state del store en computed, rara vez se hace esto directamente
    ...mapState(['counter']),
    ColorCounter() {
      return [this.counter > 100 ? {'color': 'green'} : {'color': 'red'}]
    },
  }
}
</script>
