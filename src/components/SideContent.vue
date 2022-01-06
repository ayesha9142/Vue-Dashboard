<template>
  <div class="sidecont">
      <button type="button" class="btn btn-primary btn-block" id="btn1"> Compose </button>
      <a href=""><i class="bi bi-house-door"></i> Dashboard</a>
      <a class ="active" href=""><i class="bi bi-circle"></i>  eCommerce</a>
      <a href=""><fa :icon="['far', 'circle']" /> Analytics</a>
      <p class="slide" style="margin-top:9px">Apps & Pages</p>
      <router-link to="/email">
      <a href=""><i class="bi bi-envelope"></i> Email</a>
      </router-link>
      <a href=""><i class="bi bi-chat-left"></i> Chat</a>
      <a href=""><i class="bi bi-check2-square"></i> Todo</a>
      <a href=""><i class="bi bi-calendar"></i> Calender</a>
      <a href=""><fa :icon="['fas', 'file-invoice']" /> Invoice</a>
      <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> 
      eCommerce</a
      ><a href=""><i class="bi bi-person"></i> User</a>
      <a href=""><fa :icon="['far', 'file']" /> Pages</a>
  </div>
</template>

<script>
export default {
    name: 'SideContent'

}
</script>

<style>
.sidecont {
  overflow: hidden;
  padding-left: 13px;
  width: 270px;
  background-color: white;
  position: fixed;
  height: 100%;
  margin-top: 4%;
  color: #aaa;
  text-align: left;
  margin-left: 6%;
}
.sidecont a {
  display: block;
  color: #aaa;
  padding: 16px;
  text-decoration: none;
  border-radius: 4px;
}
 
.sidecont a.active {
    border-left-style: solid;
  border-left-color: rgba(48, 46, 180, 0.651);
  color: rgba(46, 43, 207, 0.651);
  
}

.sidecont a:hover:not(.active) {
  background-color: #555;
  color: white;
}
#btn1 {
    position: relative; 
    background-color: rgba(18, 14, 243, 0.651); 
    color: white;
    border-radius: 4px;
}
</style>