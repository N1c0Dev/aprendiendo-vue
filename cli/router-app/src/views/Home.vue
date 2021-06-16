<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Title text="Pagina de Inicio"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    Title,
  }
}
</script>
