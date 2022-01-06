<template>
<div class="chat">
      <Nav />
      <div class="content">
      <div class="row" id="top" style="background-color: white; width: 95%; margin-left: 5%; height: 4rem">
        <div class="col-6">
          <ul style="font-size: 25px">  
            <li><i class="bi bi-calendar"></i></li>
            <li style="padding-left:25px;"><i class="bi bi-receipt"></i></li>
            <li style="padding-left:25px;"><i class="bi bi-check2-square"></i></li>
            <li style="padding-left:25px;"><i class="bi bi-envelope"></i></li>
            <li style="padding-left:25px; color: rgb(255, 187, 0);"><i class="bi bi-star"></i></li>
          </ul>
        </div>
        <div class="col-6" style="float: right">  
          <ul style="font-size: 19px; float:right">
            
            <li style="padding-left:15px;"><i class="bi bi-moon"></i></li>
            <li style="padding-left:15px;"><i class="bi bi-search"></i></li>
            <li style="padding-left:15px;"><i class="bi bi-cart"></i></li>
            <li style="padding-left:15px;"><i class="bi bi-bell fa-7px"></i> </li>
            <li style="padding-left: 10px">John Doe </li>
            <router-link to="/">
              <li style="padding-left: 5px">
                <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png" width="50" height="40" style="border-radius: 50px" />
                </li>
                </router-link>
                </ul>
          <div style="padding: 2%; float: right">
            <a href="#"><img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" width="30" height="20"> 
              <span style="font-size: 17px; color: black; text-decoration: none;">English</span> 
              </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
            <div class="sidecont">
                <div class="row">
                    <div class="col-2">
                        <img src="../assets/img1.png" id="img1" width="46" height="46" />
                    </div>
                    <div class="col-8">
                        <Searchbar />
                    </div>
                </div>
                <p class="text">Chats</p>
                <a href="">
                    <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png" width="50" height="40" style="border-radius: 50px" />
                    Felecia Rower 
                </a>
                <a href="" class="active">
                    <img src="	https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.9cba4a79.png" width="50" height="40" style="border-radius: 50px" />
                    Alberto Grazin
                </a>
                <p class="text">Contacts</p>
                <a href="">
                    <img src="	https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.748e7504.png" width="50" height="40" style="border-radius: 50px" />
                   Anne Frank
                </a>
                <a href="">
                    <img src="	https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.9cba4a79.png" width="50" height="40" style="border-radius: 50px" />
                    Dove Hackthon
                </a>
                <a href="">
                    <img src="	https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.748e7504.png" width="50" height="40" style="border-radius: 50px" />
                    John Thomas 
                </a>
                <a href="">
                    <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png" width="50" height="40" style="border-radius: 50px" />
                    Rehanna Decox 
                </a>
                <a href="">
                    <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png" width="50" height="40" style="border-radius: 50px" />
                    Felecia Rower 
                </a>
                
  </div>
        </div>
        <div class="col-8" id="back" style="margin-top: 4%; height: 540px; z-index: -1">
            <img src="https://image.shutterstock.com/image-vector/internet-social-media-seamless-pattern-260nw-1584865015.jpg" />
          <li>  <i class="bi bi-chat-left"></i></li>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Chat from "@/components/Chat.vue";
import Searchbar from "@/components/Searchbar.vue";

export default {
    name: 'Chat',
    components: {
        Nav, 
        Chat,
        Searchbar
    },
    data() {
      return {
        cssProps: {
          backgroundImage: `url(${require('../assets/back.jpeg')})`
        }
      }
    }

}
</script>

<style scoped>
.sidecont {
    width: 330px;
    margin-top: 3%;
}
#img1 {
    border-radius: 50px;
    padding: 3px;
    margin-top: 15px;
    margin-left: 9px;
}
#back {
    background-image: url("https://image.shutterstock.com/image-vector/internet-social-media-seamless-pattern-260nw-1584865015.jpg");
}
</style>
