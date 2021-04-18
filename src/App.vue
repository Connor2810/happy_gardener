<template>
<div>
<Navbar />
<ImageCarousel />
  
  </div>
  <router-view/>
</template>
<script>
import Navbar from '@/components/Navigation'
import ImageCarousel from '@/components/ImageCarousel'
export default {
  name: 'App',
  components: {
    Navbar,
    ImageCarousel,
  }
}
</script>

<style>




</style>
