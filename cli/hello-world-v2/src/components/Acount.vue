<template>
  <h2>Tipo de Cuenta: {{ type }}</h2>
  <h2>Saldo: {{ amount }}</h2>
  <h2>Cuenta: {{ status ? 'Activa' : 'Desactivada' }}</h2>
  <div v-for="(service, index) in services" :key="index">
    {{ service }}
  </div>
  <!-- Custom events: los componentes hijo pueden ejecutar funciones del padre, se deben declarar con @<nombre_metodo_hijo> -->
  <AmountAction
    text="Disminuir Saldo"
    @action="decreaseBalance"
    :disable="disableButton"
  />
  <AmountAction
    text="Aumentar Saldo"
    @action="addBalance"
  />
</template>

<script>
import AmountAction from './AmountAction.vue'

export default {
  name: 'Acount',
  components: {
    AmountAction,
  },
  data() {
    return {
      amount: 1000,
      type: 'Vista',
      status: true,
      services: ['pagos', 'giros', 'transferencias'],
      disableButton: false,
    }
  },
  methods: {
    addBalance() {
      this.amount = this.amount + 100
      this.disableButton = false
    },
    decreaseBalance() {
      if (this.amount === 0 ){
        alert("Saldo Agotado")
        this.disableButton = true

        return
      }

      this.amount = this.amount - 100
    }
  }
}
</script>

<style>

</style>
