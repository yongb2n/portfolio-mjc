<template>
  <div class="contact-back" @click="movePage('/')">&lt; Back</div>
  <div class="contact-container">
    <div class="contact-header">Contact</div>
    <div><img src="/portfolio-mjc/person.png"></div>
    <div class="contact-body">Email: <a href="mailto:kyb2475@gmail.com">kyb2475@gmail.com</a></div>    
    <div class="contact-body">Github: <a href="https://github.com/yongb2n" target="_blank">https://github.com/yongb2n</a></div>    
    <div class="contact-body">Blog: <a href="https://velog.io/@yongb2n" target="_blank">https://velog.io/@yongb2n</a></div>  
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
.contact-back {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232);
  padding: 30px;
  font-size: 20px;
  font-weight: 600;
}

.contact-container {
  background-color: rgb(25, 25, 25); 
  color: rgb(238, 232, 232); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.contact-header {
  border-bottom: 1px solid white;
  margin-bottom: 30px;
  font-size: 50px;
}

.contact-body {
  font-size: 30px;
}

a {
  color: inherit; 
  text-decoration: none; 
  font-weight: 500;
  font-size: 30px;
}


</style>