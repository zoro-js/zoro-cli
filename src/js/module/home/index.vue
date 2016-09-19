<template lang='html'>
  <div class='doc home'>
    <AppHeader></AppHeader>
    <div class='cnt'>
      <router-link to='/app/edit' class='btn btn-outline-primary'>create app</router-link>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from 'module/header'
import AppFooter from 'module/footer'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
    }
  }
}
</script>
