<template>
  <button @click="action" :disabled="disable">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    // Props con valor por defecto
    disable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    action() {
      // Le indica al componente que debe ejecutar una funcion del padre
      this.$emit('action')
    }
  }
}
</script>

<style>

</style>
