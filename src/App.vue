<template>
  <div>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
  </div>
  <router-view />
</template>

<script>
import Chart from "./components/Chart.component.vue";
import email from "@/components/Email.vue";
export default {
  name: "app",
  components: {
    Chart,
    email,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0%;
  margin-top: 0%;
}

#nav {
  padding: 0%;
  margin-top: 0%;
  margin: 0%;
}

#nav a {
  font-weight: bold;
  color: #7367f0;
  margin-left: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
