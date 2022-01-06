<template>
  <div class="about">
    <NavHorizontal />

    <div class="content">
      <div
        class="row"
        id="top"
        style="
          background-color: white;
          width: 95%;
          margin-left: 5%;
          height: 4rem;
          margin-top: 2%;
        "
      >
        <nav class="nav" id="horizontal">
          <div class="col-6">
            <ul class="nav justify-content" style="font-size: 25px" id="up">
              <li class="nav-item"><i class="bi bi-calendar"></i></li>
              <li class="nav-item" style="padding-left: 25px">
                <i class="bi bi-receipt"></i>
              </li>
              <li class="nav-item" style="padding-left: 25px">
                <i class="bi bi-check2-square"></i>
              </li>
              <li class="nav-item" style="padding-left: 25px">
                <i class="bi bi-envelope"></i>
              </li>
              <li
                class="nav-item"
                id="down"
                style="padding-left: 25px; color: rgb(255, 187, 0)"
              >
                <i class="bi bi-star"></i>
              </li>
            </ul>
          </div>
          <div class="col-6" style="float: right">
            <ul
              class="nav justify-content-end"
              style="font-size: 19px; float: right"
              id="down"
            >
              <li class="nav-item" style="padding-left: 15px">
                <i class="bi bi-moon"></i>
              </li>
              <li class="nav-item" style="padding-left: 15px">
                <i class="bi bi-search"></i>
              </li>
              <li class="nav-item" style="padding-left: 15px">
                <i class="bi bi-cart"></i>
              </li>
              <li class="nav-item" style="padding-left: 15px">
                <i class="bi bi-bell fa-7px"></i>
              </li>
              <li class="nav-item" style="padding-left: 10px">John Doe</li>
              <router-link to="/">
                <li class="nav-item" style="padding-left: 5px">
                  <img
                    src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png"
                    width="50"
                    height="40"
                    style="border-radius: 50px"
                  />
                </li>
              </router-link>
            </ul>
            <div style="padding: 2%; float: right">
              <a class="nav-item" href="#"
                ><img
                  src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                  alt=""
                  width="30"
                  height="20"
                />
                <span
                  style="font-size: 17px; color: black; text-decoration: none"
                  >English</span
                >
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div class="row">
        <div class="col-sm-4" id="gold" style="margin-left: 55px">
          <div class="content-body">
            <div class="row">
              <div class="col-sm-8">
                <div class="card-body">
                  <br />
                  <h5>Congratulations 🎉 John!</h5>
                  <p class="card-text font-small-3">You have won gold medal</p>
                  <h3 class="mb-75 mt-2 pt-50">
                    <a href="#" target="_self" class="">$48.9k</a>
                  </h3>
                  <button type="button" class="btn btn-primary">
                    View Sales
                  </button>
                  <img
                    src="	https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/badge.0fa134b5.svg"
                    alt="Medal Pic"
                    class="congratulation-medal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-8" id="stats" style="margin-bottom: 2vw">
          <div class="row">
            <div class="col-6" style="text-align: left">Statistics</div>
            <div class="col-6" style="text-align: right">
              Updated 1 month ago
            </div>
          </div>
          <div class="row" id="sale">
            <div class="col">
              <span class="b-avatar-custom"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-trending-up"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline></svg
              ></span>
              230k <br />Sales
            </div>
            <div class="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              8.549k <br />
              Customers
            </div>
            <div class="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-box"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                ></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              1.423k <br />
              Products
            </div>
            <div class="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-dollar-sign"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path
                  d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                ></path>
              </svg>
              $9745 <br />Revenue
            </div>
          </div>
        </div>
      </div>

      <div class="row" id="order">
        <div class="col-4" style="margin-left: 4%">
          <div class="row" style="margin-left: 5px">
            <div
              class="col-sm-4"
              style="background-color: white; margin-bottom: 7px; padding: 2px"
            >
              <div class="row" style="margin-left: 25px">Orders</div>
              <div class="row" style="textalign: left"><p>2,76k</p></div>
              <div class="row" id="app">
                <img src="../assets/g1.png" />
              </div>
            </div>
            <div
              class="col-sm-6"
              style="background-color: white; margin-left: 2vw; padding: 2px"
            >
              <Line />
            </div>
          </div>
          <div style="background-color: white">
            <div class="row" style="margin-top: 1vw">
              <div class="col-sm-6"><Donut /></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6" style="width: 58%; margin-left: 1vw" id="revenue">
          <div class="row" style="background-color: white">
            <div class="col-8" style="padding: 3%">
              <h5 style="text-align: left">Revenue</h5>
              <img src="../assets/g2.png" />
            </div>
            <div class="col-sm-4" style="padding: 6%">
              <div class="budget">
                <div class="row">
                  <select name="year" id="year">
                    <option value="volvo" style="padding: 3px">2020</option>
                    <option value="saab">2019</option>
                    <option value="opel">2018</option>
                  </select>
                </div>
                <br />

                <div class="row" style="text-align: center">$25,852</div>
                <div class="row" style="text-align: center">Budget:56,800</div>
              </div>
              <div class="row">
                <svg
                  id="SvgjsSvg7759"
                  width="198"
                  height="80"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  class="apexcharts-svg"
                  xmlns:data="ApexChartsNS"
                  transform="translate(0, 0)"
                  style="background: transparent"
                >
                  <g
                    id="SvgjsG7761"
                    class="apexcharts-inner apexcharts-graphical"
                    transform="translate(0, 0)"
                  >
                    <defs id="SvgjsDefs7760">
                      <clipPath id="gridRectMasknpzjndgvl">
                        <rect
                          id="SvgjsRect7766"
                          width="204"
                          height="82"
                          x="-3"
                          y="-1"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                      <clipPath id="gridRectMarkerMasknpzjndgvl">
                        <rect
                          id="SvgjsRect7767"
                          width="202"
                          height="84"
                          x="-2"
                          y="-2"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                    </defs>
                    <line
                      id="SvgjsLine7765"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="80"
                      stroke="#b6b6b6"
                      stroke-dasharray="3"
                      class="apexcharts-xcrosshairs"
                      x="0"
                      y="0"
                      width="1"
                      height="80"
                      fill="#b1b9c4"
                      filter="none"
                      fill-opacity="0.9"
                      stroke-width="1"
                    ></line>
                    <g
                      id="SvgjsG7777"
                      class="apexcharts-xaxis"
                      transform="translate(0, 0)"
                    >
                      <g
                        id="SvgjsG7778"
                        class="apexcharts-xaxis-texts-g"
                        transform="translate(0, -4)"
                      ></g>
                    </g>
                    <g id="SvgjsG7791" class="apexcharts-grid">
                      <g
                        id="SvgjsG7792"
                        class="apexcharts-gridlines-horizontal"
                        style="display: none"
                      >
                        <line
                          id="SvgjsLine7794"
                          x1="0"
                          y1="0"
                          x2="198"
                          y2="0"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          class="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine7795"
                          x1="0"
                          y1="20"
                          x2="198"
                          y2="20"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          class="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine7796"
                          x1="0"
                          y1="40"
                          x2="198"
                          y2="40"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          class="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine7797"
                          x1="0"
                          y1="60"
                          x2="198"
                          y2="60"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          class="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine7798"
                          x1="0"
                          y1="80"
                          x2="198"
                          y2="80"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          class="apexcharts-gridline"
                        ></line>
                      </g>
                      <g
                        id="SvgjsG7793"
                        class="apexcharts-gridlines-vertical"
                        style="display: none"
                      ></g>
                      <line
                        id="SvgjsLine7800"
                        x1="0"
                        y1="80"
                        x2="198"
                        y2="80"
                        stroke="transparent"
                        stroke-dasharray="0"
                      ></line>
                      <line
                        id="SvgjsLine7799"
                        x1="0"
                        y1="1"
                        x2="0"
                        y2="80"
                        stroke="transparent"
                        stroke-dasharray="0"
                      ></line>
                    </g>
                    <g
                      id="SvgjsG7768"
                      class="apexcharts-line-series apexcharts-plot-series"
                    >
                      <g
                        id="SvgjsG7769"
                        class="apexcharts-series"
                        seriesName="seriesx1"
                        data:longestSeries="true"
                        rel="1"
                        data:realIndex="0"
                      >
                        <path
                          id="SvgjsPath7772"
                          d="M 0 19C 6.93 19 12.870000000000001 32 19.8 32C 26.73 32 32.67 11 39.6 11C 46.53 11 52.47 28 59.4 28C 66.33 28 72.27 20 79.2 20C 86.13 20 92.07000000000001 40 99 40C 105.92999999999999 40 111.87 1 118.8 1C 125.72999999999999 1 131.67 20 138.6 20C 145.53 20 151.47 21 158.4 21C 165.33 21 171.27 37 178.20000000000002 37C 185.13000000000002 37 191.07 18 198 18"
                          fill="none"
                          fill-opacity="1"
                          stroke="rgba(115,103,240,0.85)"
                          stroke-opacity="1"
                          stroke-linecap="butt"
                          stroke-width="2"
                          stroke-dasharray="0"
                          class="apexcharts-line"
                          index="0"
                          clip-path="url(#gridRectMasknpzjndgvl)"
                          pathTo="M 0 19C 6.93 19 12.870000000000001 32 19.8 32C 26.73 32 32.67 11 39.6 11C 46.53 11 52.47 28 59.4 28C 66.33 28 72.27 20 79.2 20C 86.13 20 92.07000000000001 40 99 40C 105.92999999999999 40 111.87 1 118.8 1C 125.72999999999999 1 131.67 20 138.6 20C 145.53 20 151.47 21 158.4 21C 165.33 21 171.27 37 178.20000000000002 37C 185.13000000000002 37 191.07 18 198 18"
                          pathFrom="M -1 80L -1 80L 19.8 80L 39.6 80L 59.4 80L 79.2 80L 99 80L 118.8 80L 138.6 80L 158.4 80L 178.20000000000002 80L 198 80"
                        ></path>
                        <g
                          id="SvgjsG7770"
                          class="apexcharts-series-markers-wrap"
                          data:realIndex="0"
                        ></g>
                      </g>
                      <g
                        id="SvgjsG7773"
                        class="apexcharts-series"
                        seriesName="seriesx2"
                        data:longestSeries="true"
                        rel="2"
                        data:realIndex="1"
                      >
                        <path
                          id="SvgjsPath7776"
                          d="M 0 60C 6.93 60 12.870000000000001 70 19.8 70C 26.73 70 32.67 50 39.6 50C 46.53 50 52.47 65 59.4 65C 66.33 65 72.27 57 79.2 57C 86.13 57 92.07000000000001 80 99 80C 105.92999999999999 80 111.87 55 118.8 55C 125.72999999999999 55 131.67 65 138.6 65C 145.53 65 151.47 60 158.4 60C 165.33 60 171.27 75 178.20000000000002 75C 185.13000000000002 75 191.07 53 198 53"
                          fill="none"
                          fill-opacity="1"
                          stroke="rgba(220,218,227,0.85)"
                          stroke-opacity="1"
                          stroke-linecap="butt"
                          stroke-width="1"
                          stroke-dasharray="5"
                          class="apexcharts-line"
                          index="1"
                          clip-path="url(#gridRectMasknpzjndgvl)"
                          pathTo="M 0 60C 6.93 60 12.870000000000001 70 19.8 70C 26.73 70 32.67 50 39.6 50C 46.53 50 52.47 65 59.4 65C 66.33 65 72.27 57 79.2 57C 86.13 57 92.07000000000001 80 99 80C 105.92999999999999 80 111.87 55 118.8 55C 125.72999999999999 55 131.67 65 138.6 65C 145.53 65 151.47 60 158.4 60C 165.33 60 171.27 75 178.20000000000002 75C 185.13000000000002 75 191.07 53 198 53"
                          pathFrom="M -1 80L -1 80L 19.8 80L 39.6 80L 59.4 80L 79.2 80L 99 80L 118.8 80L 138.6 80L 158.4 80L 178.20000000000002 80L 198 80"
                        ></path>
                        <g
                          id="SvgjsG7774"
                          class="apexcharts-series-markers-wrap"
                          data:realIndex="1"
                        ></g>
                      </g>
                      <g
                        id="SvgjsG7771"
                        class="apexcharts-datalabels"
                        data:realIndex="0"
                      ></g>
                      <g
                        id="SvgjsG7775"
                        class="apexcharts-datalabels"
                        data:realIndex="1"
                      ></g>
                    </g>
                    <line
                      id="SvgjsLine7801"
                      x1="0"
                      y1="0"
                      x2="198"
                      y2="0"
                      stroke="#b6b6b6"
                      stroke-dasharray="0"
                      stroke-width="1"
                      class="apexcharts-ycrosshairs"
                    ></line>
                    <line
                      id="SvgjsLine7802"
                      x1="0"
                      y1="0"
                      x2="198"
                      y2="0"
                      stroke-dasharray="0"
                      stroke-width="0"
                      class="apexcharts-ycrosshairs-hidden"
                    ></line>
                    <g id="SvgjsG7803" class="apexcharts-yaxis-annotations"></g>
                    <g id="SvgjsG7804" class="apexcharts-xaxis-annotations"></g>
                    <g id="SvgjsG7805" class="apexcharts-point-annotations"></g>
                  </g>
                  <rect
                    id="SvgjsRect7764"
                    width="0"
                    height="0"
                    x="0"
                    y="0"
                    rx="0"
                    ry="0"
                    opacity="1"
                    stroke-width="0"
                    stroke="none"
                    stroke-dasharray="0"
                    fill="#fefefe"
                  ></rect>
                  <g
                    id="SvgjsG7790"
                    class="apexcharts-yaxis"
                    rel="0"
                    transform="translate(-18, 0)"
                  ></g>
                  <g id="SvgjsG7762" class="apexcharts-annotations"></g>
                </svg>
              </div>
              <div class="row">
                <button
                  type="button"
                  class="btn btn-primary"
                  style="position: relative"
                >
                  Increase Budget
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <!--table--><!---->
        <div class="col-8"><Company /></div>

        <div class="col-sm-4">
          <div class="row">
            <div class="col-12">
              <img src="../assets/email.svg" />
            </div>
            <div id="location" style="float: right">
              <div class="row" style="padding: 20px">
                <div class="col col-lg-2">
                  THU <br />
                  24
                </div>
                <div class="col-6" style="text-align: left">
                  Developer Meetup <br />Meet world popular developers
                </div>
              </div>
              <div class="row" style="padding: 10px">
                <div
                  class="col col-lg-2"
                  style="background-color: #f8f8fc; color: #7367f0"
                >
                  <fa :icon="['fas', 'calendar-week']" />
                </div>
                Sat, May 25, 2020 <br />
                10:AM to 6:PM
              </div>
              <div class="row">
                <div
                  class="col col-lg-2"
                  style="
                    background-color: #f8f8fc;
                    margin-left: 10px;
                    color: #7367f0;
                  "
                >
                  <fa :icon="['fa', 'map-marker']" />
                </div>
                Central Park <br />
                Manhattan, New york City
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Donut from "@/components/Donut.vue";
import Line from "@/components/Line.vue";
import Nav from "@/components/Nav.vue";
import Company from "@/components/Company.vue";
import NavHorizontal from "@/components/NavHorizontal.vue";

export default {
  name: "about",
  components: {
    Donut,
    Line,
    Nav,
    NavHorizontal,
    Company,
  },
};
</script>

<style>
body {
  background-color: #f8f8fc;
  overflow: scroll;
}
.content {
  float: left;
  width: 85%;
  margin-left: 15%;
  padding: 0 20px;
  font-family: Montserrat, Helvetica, Arial, serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.45;
}
#top {
  border-radius: 5px;
  height: fit-content;
}
#location {
  background-color: white;
  text-align: left;
  padding: 10px;
  width: 80%;
  float: right;
}
.sidebar {
  overflow: hidden;
  padding-left: 10px;
  width: 250px;
  position: fixed;
  margin-top: 0%;
  color: #aaa;
  text-align: left;
}
#vue {
  font-weight: bold;
  color: #7367f0;
  font-size: 20px;
}
body {
  margin: 0;
  font-family: Montserrat, Helvetica, Arial, serif;
}
.sidebar a {
  display: block;
  color: rgb(77, 74, 74);
  padding: 13px;
  text-decoration: none;
  border-radius: 4px;
}

.sidebar a.active {
  background-color: rgba(83, 80, 241, 0.651);
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: rgba(83, 80, 241, 0.651);
  color: white;
}
#year {
  background-color: white;
  color: #7367f0;
  border: 2px solid #7367f0;
  border-radius: 5px;
  width: 50%;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  margin-top: 2%;
}

li {
  float: left;
  column-gap: 4ch;
  display: block;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: white;
}
#stats {
  padding: 30px;
  background-color: white;
  height: 200px;
  width: 60%;
  margin-top: 30px;
}
#sale {
  padding: 40px;
}
div.card-body {
  text-align: left;
  flex: 1 1 auto;
  padding: 30px;
  position: absolute;
  position: relative;
  padding-top: 0px;
  width: 370px;
  font-family: Montserrat, Helvetica, Arial, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.45;
  color: #6e6b7b;
  background-color: white;
  margin: 30px auto;
}
.card-body a {
  color: #7367f0;
  text-decoration: none;
}
.congratulation-medal {
  right: 37px;
  position: absolute;
  top: 0;
  vertical-align: middle;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  max-width: 100%;
}
.image {
  flex-basis: 40%;
}
.text {
  padding-left: 0px;
  color: #7367f0;
  direction: ltr;
  list-style: none;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1.2;
  margin-top: 0;
  font-weight: 600;
  letter-spacing: 0.01rem;
  font-size: 1.45rem;
  margin-bottom: 0;
  animation: fadein 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards;
}
@media screen and (max-width: 800px) {
  #gold {
    margin-left: 0%;
  }
  .content,
  .sidebar {
    padding: 0%;
    width: 100%;
    height: 100%;
    margin-left: 0%;
    background-color: #f8f8fc;
  }
  #horizontal {
    background-color: white;
  }
}
@media only screen and (max-width: 620px) {
  /* For mobile phones: */
  .content,
  .nav,
  .row,
  .col {
    width: 100%;
  }

  .sidebar {
    background-color: none;
  }
  .nav {
    margin-left: 20px;
  }
  #down {
    display: none;
  }
  #stats,
  #order {
    width: 100%;
  }
  #top {
    background-color: white;
  }
  #revenue {
    width: 100%;
  }
  .budget {
    margin-left: 30%;
  }
}
</style>
