<template>
  <div class="tech-back" @click="movePage('/')">&lt; Back</div>
  <div class="tech-container">
    <div class="tech-header">Tech Stack</div>
    <div class="tech-img"><img src="/portfolio-mjc/tech.png"></div>
    <div class="tech-body">
      <div>
        <p class="tech-front">Front-End</p>
          <div class="tech-stack">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Vue.js</p>
          </div>
      </div>
      <div>
        <p class="tech-backend">Back-End</p>
          <div class="tech-stack">
            <p>Node.js</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
          </div>
      </div>
      <div>
        <p class="tech-etc">Etc</p>
          <div class="tech-stack">
            <p>VSCode</p>
            <p>Git</p>
            <p>Github</p>
            <p>Git Graph</p>
            <p>Notion</p>
          </div>
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
.tech-back {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232);
  padding: 30px;
  font-size: 20px;
  font-weight: 600;
}

.tech-container {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.tech-img {
  padding-bottom: 20px;
}

.tech-header {
  border-bottom: 1px solid white;
  margin-bottom: 30px;
  font-size: 50px;
}

.tech-body {
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: 600;
}

.tech-front {
  font-size: 30px;
}

.tech-backend {
  font-size: 30px;
}

.tech-etc {
  font-size: 30px;
}

.tech-stack {
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
}

.tech-stack p {
  margin: 0 10px;
}




</style>