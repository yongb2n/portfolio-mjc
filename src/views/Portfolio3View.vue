<template>
  <div class="project-back" @click="movePage('/')">&lt; Back</div>
  <div class="project-container">
    <div class="project-header">Project</div>
    <div class="project-img"><img src="/project.png"></div>
    <div class="project-body">
      <p>DevForDev (개발자를 위한 커뮤니티 사이트)</p>
      <p>2023.9.13 ~ </p>
      <p>Front-end</p>
      <p>시연 영상</p>
      <video width="800" height="600" controls style="margin-top: 20px;">
        <source src="https://www.notion.so/cc4f6731dca34cebbd753587a2c8d8c9?pvs=4#e2bc04641f76459b99023526e4574986" type="video/mp4">
        Your browser does not support the video tag.
      </video>
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
.project-back {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232);
  padding: 30px;
  font-size: 20px;
  font-weight: 600;
}

.project-container {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.project-img {
  padding-bottom: 20px;
}

.project-header {
  border-bottom: 1px solid white;
  margin-bottom: 30px;
  font-size: 50px;
}

.project-body {
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: 600;
}




</style>