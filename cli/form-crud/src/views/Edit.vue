<template>
  <form @submit="updateTask(task)">
    <Input :task="task" />
  </form>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import Input from '@/components/Input.vue'
export default {
  components: {
    Input,
  },
  methods: {
    ...mapActions(['sendTask', 'updateTask']),
  },
  computed: {
    ...mapState(['task']),
  },
  created() {
    this.sendTask(this.$route.params.id)
  }
}
</script>
