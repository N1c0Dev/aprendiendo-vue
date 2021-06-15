// HTML del componente
<template>
  <h1>{{ text }}</h1>
</template>

// Logica del componente
<script>
export default {
  // name es el nombre del componente
  name: 'Title',
  props: {
    text: String
  }
}
</script>

// estilos del componente
// si se declara scoped el estilo solo se aplica al componente
<style scoped>
  h1 {
    color: peru;
  }
</style>
