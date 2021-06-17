<template>
  <button @click="actionDecrease">Disminuir</button>
</template>

<script>
import {
  mapActions,
} from 'vuex'

export default {
  name: 'BtnDecrease',
  methods: {
    ...mapActions(['actionDecrease']),
  }
}
</script>
