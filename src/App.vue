<template>
<Navbar />
  <div>
  </div>
  <router-view/>
</template>
<script>
import Navbar from './components/Navigation'
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>




</style>
