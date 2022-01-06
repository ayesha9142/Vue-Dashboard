<template>
  <div class="email">
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
        <div class="col-4"><SideContent /></div>
        <div class="col-8">
          <div class="row"><Searchbar /></div>
          <div class="row" v-for="task in tasks" :key="task.id"> 
            <input type="checkbox" id="task" name="task1" value="">
            <label for="task1" id="tasktitle"> {{ task.title }} <img :src="task.img" /> </label><br>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import NavHorizontal from "@/components/NavHorizontal.vue";
import SideContent from "@/components/SideContent.vue";
import Searchbar from "@/components/Searchbar.vue";

export default {
      name: 'Email',
      components: {
          Nav,
          NavHorizontal,
          SideContent,
          Searchbar
      },
      data() {
        return {
          tasks: [
            {title: 'For responsiveness for new structure', id: 1, img: 'assets/img1.png'},
            {title: 'Plan a party for deelopment team', id: 2, img: '../assets/img1.png'},
            {title: 'Hire 5 new Freshers', id:3, img: '../assets/img1.png'},
            {title: 'Skype Tommy for Project & Report'},
            {title: 'Send ppt with real-time reports', id: 5, img: '../assets/img1.png'},
            {title: 'Reminder to clients for holidays', id: 6, img: '../assets/img1.png'},
            {title: 'For responsiveness for new structure', id: 1, img: '../assets/img1.png'},
            {title: 'Plan a party for deelopment team', id: 2, img: '../assets/img1.png'},
            {title: 'Hire 5 new Freshers', id:3, img: '../assets/img1.png'},
            {title: 'Skype Tommy for Project & Report'},
            {title: 'Send ppt with real-time reports', id: 5, img: '../assets/img1.png'},
            {title: 'Reminder to clients for holidays', id: 6, img: '../assets/img1.png'},

          ]
        }
      }

}
</script>

<style>
#tasktitle {
  text-align: left;
  background-color: white;
  color: #aaa;
  font-size: 1rem;
  padding: 13px;
}
</style>