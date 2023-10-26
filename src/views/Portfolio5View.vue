<template>
  <div class="prize-back" @click="movePage('/')">&lt; Back</div>
  <div class="prize-container">
    <div class="prize-header">자격증</div>
    <div class="prize-body">
      <div class="prize-a">
        <p>리눅스마스터 2급</p>
        <p>취득일: 2022.09.23</p>
        <p>발급기관: 한국정보통신진흥협회</p>
      </div>
      <div class="prize-a">
        <p>SQLD</p>
        <p>취득일: 2022.09.23</p>
        <p>발급기관: 한국데이터산업진흥원</p>
      </div>
      <div class="prize-a">
        <p>정보처리기사</p>
        <p>취득일: 2023.09.01</p>
        <p>발급기관: 한국산업인력공단</p>
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
.prize-back {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232);
  padding: 30px;
  font-size: 20px;
  font-weight: 600;
}

.prize-container {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.prize-header {
  border-bottom: 1px solid white;
  margin-bottom: 30px;
  font-size: 50px;
}

.prize-body {
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: 600;
}

.prize-a {
  margin-bottom: 30px;
  ;
}



</style>