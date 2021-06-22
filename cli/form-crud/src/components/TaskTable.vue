<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categorias</th>
        <th scope="col">Estado</th>
        <th scope="col">Numero</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.id" scope="row">
        <th>{{ task.id }}</th>
        <td>{{ task.name }}</td>
        <td>{{ task.category.join(', ') }}</td>
        <td>{{ task.status }}</td>
        <td>{{ task.number }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">
            Eliminar
          </button>
          <!-- to como objeto permite agregar parametros a la url que se redirecciona-->
          <router-link
            class="btn btn-warning ml-2 btn-sm"
            :to="{
              name: 'Edit',
              params: {
                id: task.id,
              }
            }"
          >
            Editar
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {
  mapState,
  mapActions,
} from 'vuex'

export default {
  methods: {
    ...mapActions(['deleteTask']),
  },
  computed : {
    ...mapState(['tasks']),
  }
}
</script>
