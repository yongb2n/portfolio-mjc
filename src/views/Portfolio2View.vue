<template>
  <div class="introduce-back" @click="movePage('/')">&lt; Back</div>
  <div class="introduce-container">
    <div class="introduce-header">Introduce</div>
    <div class="introduce-img"><img src="/person2.png"></div>
    <div class="introduce-body">
      <p>다양한 분야를 경험하고 학습하는 것을 좋아하는 사람입니다.</p>
      <p>어떻게 하면 효율적으로 코드를 작성할 수 있을지 고민하고, 확장성, 유지보수성, 가독성이 좋은 코드가 좋은 코드라고 생각하고 개발하려고 노력합니다.</p>
      <p>더 나은 개발 환경을 위한 새로운 아키텍쳐, 프레임워크, 라이브러리를 사용하기 위해 노력합니다.</p>
      <p>실패를 두려워하지 않고 꾸준한 경험과 학습을 통해 성장해가는 개발자가 되겠습니다.</p>
     </div>
  </div>
</template>

<script>
export default {
  methods: {
    movePage(path) {
      this.$router.push(path);
    }
  },
}
</script>

<style>
.introduce-back {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232);
  padding: 30px;
  font-size: 20px;
  font-weight: 600;
}

.introduce-container {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.introduce-img {
  padding-bottom: 20px;
}

.introduce-header {
  border-bottom: 1px solid white;
  margin-bottom: 30px;
  font-size: 50px;
}

.introduce-body {
  font-size: 17px;
  text-align: center;
  line-height: 50px;
  font-weight: 700;
}




</style>