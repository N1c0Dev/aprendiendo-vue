<template>
<!-- @submit gatilla una funcion al presionar un boton de tipo submit -->
<!-- si se le agrega .prevent se evita el refresh -->
  <form @submit.prevent="processForm">
    <!-- v-model.trim elimina los espacios que se ingresen al principio o al final -->
    <input
      type="text"
      class="form-control my-2"
      placeholder="Ingrese Nombre"
      v-model.trim="task.name"
    >
    <div class="form-check form-check-inline">
      <input
        type="checkbox"
        id="check-1"
        class="form-check-input"
        v-model="task.category"
        value="Javascript"
      >
      <label for="check-1" class="form-check-label">Javascript</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        type="checkbox"
        id="check-2"
        class="form-check-input"
        v-model="task.category"
        value="Node.js"
      >
      <label for="check-2" class="form-check-label">Node.js</label>
    </div>
    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-1"
          class="form-check-input"
          value="urgente"
          v-model="task.status"
        >
        <label for="radio-1" class="form-check-label">Urgente</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-2"
          class="form-check-input"
          value="relax"
          v-model="task.status"
        >
        <label for="radio-2" class="form-check-label">Relax</label>
      </div>
    </div>
    <div class="mt-2">
      <!-- v-model.number setea el valor a tipo numerico -->
      <input
        type="number"
        class="form-control"
        v-model.number="task.number"
      >
    </div>

    <button
      class="btn btn-dark mt-2 btn-block"
      type="submit"
      :disabled="block"
    >
      Procesar
    </button>
  </form>
  <hr>
  <p>{{task}}</p>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      task: {
        name: '',
        category: [],
        status: '',
        number: 0,
      },
    }
  },
  methods: {
    processForm() {
      console.log(this.task)
      this.task = {
        name: '',
        category: [],
        status: '',
        number: 0,
      }
    }
  },
  computed: {
    // Se valida que a lo menos el input de texto no sea vacio
    block() {
      return this.task.name.trim() === ""
    }
  }
}
</script>
