<template>
  <div>
    <div class="scene">
      <div class="carousel">
        <div class="carouselCell">1</div>
        <div class="carouselCell">2</div>
        <div class="carouselCell">3</div>
        <div class="carouselCell">4</div>
        <div class="carouselCell">5</div>
        <div class="carouselCell">6</div>
      </div>
    </div> 
  </div>
</template>
<style scoped>
.scene {
  width: 500px;
  height: 250px;
  position: relative;
  perspective: 1000px;
}
.carousel {
  width: 100%;
  height: 100px;
  position: absolute;
  transform-style: preserve-3d;
}
.carouselCell{
  position: absolute;
  width: 297px;
  height: 210px;
  left: 20px;
  top: 20px;
}
.carouselCell:nth-child(1){transform: rotateY(0deg);}
.carouselCell:nth-child(2){transform: rotateY(60deg);}
.carouselCell:nth-child(3){transform: rotateY(120deg);}
.carouselCell:nth-child(4){transform: rotateY(180deg);}
.carouselCell:nth-child(5){transform: rotateY(240deg);}
.carouselCell:nth-child(6){transform: rotateY(300deg);}
</style>
<script>
export default {
  layout: 'default',
  name: 'service',
  mounted() {
    let tz = Math.round(105 / Math.tan(Math.PI / 6));
  }
}
</script>