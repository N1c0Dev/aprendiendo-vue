<template>
  <Title text="Titulo de mi Blog" />
  <div v-for="(item, index) in arrayBlog" key="index">
    <!-- Rutas dinamicas -->
    <router-link :to="`/blog/${item.id}`" >
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
import Title from "../components/Title.vue";

export default {
  components: {
    Title,
  },
  data() {
    return {
      arrayBlog: [],
    };
  },
  methods: {
    async consumeApi() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const array = await data.json()
        this.arrayBlog = array

        console.log(array)
      } catch (error) {
        console.log(error)
      }
    }
  },
  // created: ciclo de vida del componente, espera que cargue la logica y se ejecuta antes de renderear la vista
  created () {
    this.consumeApi()
  }
};
</script>

<style>
</style>
