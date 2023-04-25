<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0px;
  padding: 0px;
}
.logo { 
    width: 100px;
}
.register input, .login input, .add input {
    border: 1px solid skyblue;
    padding-left: 20px;
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
}

.register button, .login button, .add button {
    width: 325px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
    font-size: 20px;
}
</style>
