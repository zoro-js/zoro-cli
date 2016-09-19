<template lang='html'>
  <div class='doc app-edit'>
    <template v-if='loading'></template>
    <template v-else></template>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      loading: false,
      app: {}
    }
  },
  computed: {
    ...mapGetters([
      'appMap'
    ])
  },
  created () {
    const id = this.$route.params.id
    if (id) {
      this.loading = true
    }
    this.$store.dispatch('getApp', id).then(() => {
      this.app = this.appMap[id]
      this.loading = false
    })
  }
}
</script>
