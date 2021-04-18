<template>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block" :src="image" alt="First slide">
      <div class="carousel-caption d-none d-md-block  mb-4">
      <h5>Garden 1</h5>
      <p>Info on garden serviced goes here</p>
    </div>
    </div>
    <div class="carousel-item">
      <img class="d-block" :src="image" alt="Second slide">
      <div class="carousel-caption d-none d-md-block mb-4">
      <h5>Garden 2</h5>
      <p>Info on garden serviced goes here</p>
    </div>
    </div>
    <div class="carousel-item">
      <img class="d-block" :src="image" alt="Third slide">
      <div class="carousel-caption d-none d-md-block mb-4">
      <h5>Garden 3</h5>
      <p>Info on garden serviced goes here</p>
    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

  
</template>

<script>
import image from './../../images/img1.jpg'
export default {
  data: function(){
    return {
      image: image
    }
  }

}
</script>

<style>
.carousel-item > .item > img, .d-block{
  width: 100%;
  height: 50rem;

}

</style>