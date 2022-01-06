<template>
 <div class="row" style="padding: 8px; text-align: left; margin-left: 17px; margin-top: 5%; font-size: 10px;">
            <div class="col-4">COMPANY</div>
            <div class="col">CATEGORY</div>
            <div class="col">VIEWS</div>
            <div class="col">REVENUE</div>
            <div class="col">SALES</div>
          </div> 

          <div style="padding: 3%; background-color: white; text-align: left; margin-left: 25px; margin- bottom: 23px">
            <div class="row" v-for="company in companies" :key="company.COMPANY" style="padding:1%">
              <div class="col-4"> <!--<img src="../assets/c1.svg"  />-->
              <img :src="company.img" />
                {{ company.COMPANY }} <br />
               <span id="below" style="margin-left: 9%"> {{ company.Email }} </span>
              </div>
              <div class="col" id="txt"><img :src="company.img" /> {{ company.CATEGORY}} </div>
              <div class="col">
                {{ company.REVENUE }} <br />
               <span id="below"> {{ company.REVENUE1}} </span>
              </div>
              <div class="col" id="txt"> {{ company.VIEWS }} </div>
              <div class="col"> {{ company.SALES }} </div>
            </div> 
          </div>  
</template>

<script>
import image1 from "../assets/c1.svg"
import image2 from "../assets/c2.svg"
import image3 from "../assets/c3.svg"
import image4 from "../assets/c4.svg"
import image5 from "../assets/c5.svg"
import image6 from "../assets/c6.svg"
import image7 from "../assets/c7.svg"


export default {
    name: "Company",
    data() {
        return {
            companies: [
                {COMPANY: 'Dixons', Email: 'meguc@ruj.io', CATEGORY: 'Technology', VIEWS: '23.4k',REVENUE: '$891.2' , REVENUE1: 'in 24 hours', SALES: '68%',  img: image1},
                {COMPANY: 'Motels', Email: 'vecav@hodzi.co.uk', CATEGORY: 'Grocery', VIEWS: '78k',REVENUE: '$891.2', REVENUE1: 'in 2 days', SALES: '97%',  img: image2},
                {COMPANY: 'Zipcar', Email: 'us@cuhil.gov', CATEGORY: 'Fashion', VIEWS: '162',REVENUE: '$891.2', REVENUE1: 'in 2 days', SALES: '62%',  img: image3},
                {COMPANY: 'Owning', Email: 'us@cuhil.gov', CATEGORY: 'Technology', VIEWS: '46',REVENUE: '$891.2', REVENUE1: 'in 2 days', SALES: '97%',  img: image4},
                {COMPANY: 'Cafés', Email: 'us@cuhil.gov', CATEGORY: 'Grocery', VIEWS: '32k',REVENUE: '$891.2', REVENUE1: 'in 2 days', SALES: '97%',  img: image5},
                {COMPANY: 'Kmart', Email: 'pucus@cuhil.gov', CATEGORY: 'Fashion', VIEWS: '162',REVENUE: '$891.2', REVENUE1: 'in 2 days', SALES: '97%',  img: image6},
                {COMPANY: 'Payers', Email: 'us@cuhil.gov', CATEGORY: 'Fashion', VIEWS: '432',REVENUE: '$891.2', REVENUE1: 'in 2 days', SALES: '97%',  img: image7},
            ]
        }
    }

}
</script>

<style scoped>
#below {
    font-size: 12px;
    color: #aaa;
}
#txt {
    color: #aaa;
}
</style>