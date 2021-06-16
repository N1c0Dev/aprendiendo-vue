<template>
  <Title text="Ruta con parametros" />
  <!-- route.params.<param_name> obtener el valor del parametro -->
  <h2>Parametro: {{ $route.params.id }}</h2>
  <h3>{{ article.title }}</h3>
  <p>{{ article.body }}</p>
</template>

<script>
import Title from "../components/Title.vue";

export default {
  components: {
    Title,
  },
  data() {
    return {
      article: {}
    }
  },
  methods: {
    async consumeArticle() {
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        const dataObject = await data.json()
        this.article = dataObject


        console.log(this.article)
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.consumeArticle()
  }
};
</script>

<style>
</style>
