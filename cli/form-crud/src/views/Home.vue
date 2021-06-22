<template>
<!-- @submit gatilla una funcion al presionar un boton de tipo submit -->
<!-- si se le agrega .prevent se evita el refresh -->
  <form @submit.prevent="processForm">
    <Input :task="task" />
  </form>
  <hr>
  <TaskTable />
</template>

<script>
import Input from '@/components/Input.vue'
import TaskTable from '@/components/TaskTable.vue'
import { mapActions } from 'vuex'
// Id automatico
import shortid from 'shortid'

export default {
  name: 'Home',
  components: {
    Input,
    TaskTable,
  },
  data() {
    return {
      task: {
        id: '',
        name: '',
        category: [],
        status: '',
        number: 0,
      },
    }
  },
  methods: {
    ...mapActions(['setTask']),
    processForm() {
      console.log(this.task)

      // Genera id
      this.task.id = shortid.generate()
      // Enviar datos
      this.setTask(this.task)
      // Limpiar form
      this.task = {
        id: '',
        name: '',
        category: [],
        status: '',
        number: 0,
      }
    }
  },
}
</script>
