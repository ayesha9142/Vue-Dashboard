<template>
  <div class="dropdown">
  <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png" width="50" height="40" style="border-radius: 50px" />
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <router-link to="/">Logout</router-link>
  </div>
</div>
</template>

<script>
export default {
    name: 'John'
}
</script>

<style scoped>
#dropdownMenuButton {
    background-color: none;
    border: none;
}
</style>