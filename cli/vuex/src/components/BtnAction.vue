<template>
  <button
    @click="actionButton({
      state: state,
      number: 15,
    })"
  >
    {{ textButton }}
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BtnAction',
  props: {
    state: Boolean,
    number: Number,
  },
  methods: {
    ...mapActions(['actionButton']),
  },
  computed: {
    textButton() {
      return this.state ? 'Aumentar' : 'Disminuir'
    }
  }
}
</script>
