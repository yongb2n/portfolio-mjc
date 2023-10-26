<template>
  <div class="wrap">
    <div id="top">
      <swiper
      class="swiper"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >
        <swiper-slide style="background-image: url(/portfolio-mjc/top1.jpg);" class="slide">
          <div class="header">
            명지전문대학교 정보통신공학과 고용빈
          </div>
        </swiper-slide>
        <swiper-slide style="background-image: url(/portfolio-mjc/top2.jpg);" class="slide">
          <div class="header">
            명지전문대학교 정보통신공학과 고용빈
          </div>
        </swiper-slide>
        <swiper-slide style="background-image: url(/portfolio-mjc/top3.jpg);" class="slide">
          <div class="header">
            명지전문대학교 정보통신공학과 고용빈
          </div>
        </swiper-slide>
    </swiper>
   </div>  
   <div id="portfolio">
    <div class="header">My portfolio</div>
    <div class="list">
      <div 
        class="item" 
        @click="movePage('/portfolio1')" 
        data-aos="fade-right" 
        data-aos-delay="300" 
        style="background-image: url(/portfolio-mjc/m1.jpeg);
        color: rgb(125, 190, 82)"
      >
        Contact
      </div>
      <div 
        class="item" 
        @click="movePage('/portfolio2')" 
        data-aos="fade-down" data-aos-delay="400" 
        style="background-image: url(/portfolio-mjc/m2.png);
        color: rgb(215, 128, 195);"
      >
        Introduce
      </div>
      <div 
        class="item" 
        @click="movePage('/portfolio3')" 
        data-aos="fade-left" 
        data-aos-delay="500" 
        style="background-image: url(/portfolio-mjc/m3.jpeg);
        color: rgb(86, 216, 255);"
      >
        Project
      </div>
      <div 
        class="item" 
        @click="movePage('/portfolio4')" 
        data-aos="fade-right" 
        data-aos-delay="600" 
        style="background-image: url(/portfolio-mjc/m4.png);
        color: rgb(221, 88, 94);"
      >
        Tech Stack  
      </div>
      <div 
        class="item" 
        @click="movePage('/portfolio5')" 
        data-aos="fade-up" 
        data-aos-delay="700" 
        style="background-image: url(/portfolio-mjc/m5.png);"
      >
        자격증
      </div>
      <div 
        class="item" 
        @click="movePage('/portfolio6')" 
        data-aos="fade-left" 
        data-aos-delay="800" 
        style="background-image: url(/portfolio-mjc/m6.jpeg);
        color: rgb(138, 4, 255);"
      >
        etc.
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import aos from "aos"

export default defineComponent({
  name: 'HomeView',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
  },
  mounted() {
    aos.init();
  },
  methods: {
    movePage(path) {
      this.$router.push(path);
    }
  },
});
</script>

<style lang="less">

.wrap {
  background-color: rgb(237, 208, 168);
  padding-bottom: 100px;
}

#top {
  height: 50vh;
  .swiper {
    height: 50vh;
    .slide {
      background-position: center center;
      background-size: cover;
      text-align: center;
      .header {
        font-size: 60px;
        font-weight: 900;
        color: rgb(197, 255, 241);
        height: 100%; 
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

#portfolio {
  .header {
    text-align: center;
    font-size: 40px;
    margin: 30px;
    font-weight: bold;
    color: #dbb372;
  }
  width: 1000px;
  margin: 0 auto;
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    .item {
      height: 300px;
      background-position: center center;
      background-size: cover;
      border-radius: 20px;
      aspect-ratio: 1 / 1;
      font-weight: 700;
      font-size: 30px;
      text-align: center;
      display: flex;
      align-items: end;
      justify-content: center;
    }
  }
}

</style>
