<template>
  <div class="etc-back" @click="movePage('/')">&lt; Back</div>
  <div class="etc-container">
    <div class="etc-header">추천하는 책</div>
    <div class="etc-body">
      <div class="etc-a">
        <img src="/portfolio-mjc/b1.jpeg">
        <p class="etc-a-name">이름: 역행자</p>
        <div class="etc-a-rec">추천하는 이유</div>
        <p>
          자의식과 무의식, 유전자의 영향에 대한 이해와 해체가 인상적이었다. <br>
          역행자의 길을 걷고싶은 사람에게 추천 하고싶다.   <br>
          이 책에서 말하길, 사람은 어디에 소속되어 정체성을 만들어 간다는 말이 와닿았다. <br>
          누구나 한 번쯤 읽으면 책을 읽고 난 뒤에 그 사람의 인생에 터닝포인트가 될 수 있을 것 같은 책이다.
        </p>
      </div>
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
.etc-back {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232);
  padding: 30px;
  font-size: 20px;
  font-weight: 600;
}

.etc-container {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.etc-header {
  border-bottom: 1px solid white;
  margin-bottom: 30px;
  font-size: 50px;
}

.etc-body {
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: 600;
}

.etc-a {
  margin-bottom: 30px;
  ;
}

.etc-a-name {
  font-size: 35px;
  margin-bottom: 20px;
}

.etc-a-rec {
  font-size: 28px;
  font-weight: 800;
  border-bottom: 0.5px solid white;
  margin-bottom: 20px;
}



</style>