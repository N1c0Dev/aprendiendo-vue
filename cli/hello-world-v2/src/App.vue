<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Title text="Banco dinamico 2.0"/>
  <Acount />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// Importar componente
import Title from './components/Title.vue'
import Acount from './components/Acount.vue'

export default {
  name: 'App',
  // Declaracion de componentes a utilizar
  components: {
    // HelloWorld
    Title,
    Acount,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
