<template>
  <div class="sidebar">
      <a href="#"><img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg" alt="" width="50" height="30"><span id="vue"> Vuexy
              </span></a>
      
      <a href=""><i class="bi bi-house-door"></i> Dashboard</a>
      <a class ="active" href=""><i class="bi bi-circle"></i>  eCommerce</a>
      <a href=""><fa :icon="['far', 'circle']" /> Analytics</a>
      <p class="slide" style="margin-top:9px">Apps & Pages</p>
      <router-link to="/email"><i class="bi bi-envelope"></i> Email</router-link>
      <router-link to="/chat"><i class="bi bi-chat-left"></i> Chat</router-link>
      <router-link to="/email"><i class="bi bi-check2-square"></i> Todo</router-link>
      <a href=""><i class="bi bi-calendar"></i> Calender</a>
      <a href=""><fa :icon="['fas', 'file-invoice']" /> Invoice</a>
      <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> 
      eCommerce</a
      ><a href=""><i class="bi bi-person"></i> User</a>
      <a href=""><fa :icon="['far', 'file']" /> Pages</a>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
</template>

<script>
import router from '../router'
import email from "@/components/Email.vue";
export default {
    name: 'nav',
    components: {
        email
    },
    methods: {
            redirect() {
                this.$router.push({ name: '/email'})
    }
        }

}
</script>

<style>
.sidebar {
  overflow: hidden;
  padding-left: 13px;
  width: 250px;
  background-color: white;
  position: fixed;
  height: 100%;
  margin-top: 0%;
  color: #aaa;
  text-align: left;
}
@media only screen and (max-width: 620px) {
  .sidebar {
    background-color: none;
  }
}
</style>