<template>
  <div class="hello">
    
    <div class="row">
      <div class="col-sm-8">
        <nav class="navbar navbar-light bg-light" id="nav">
  <a class="navbar-brand" href="#">
    <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg" width="50" height="70"/>
    Vuexy
  </a>
</nav>
        <img src="../assets/login.svg" class="imgright" />
      </div>
      <div class="col-sm-4" style="background-color: white">
        <h1>{{ msg }}</h1>
        <p class="info">Please sign-in to your account and start the adventure</p>
        <div class="alert-body font-small-2" id="alert">
          <p><small class="mr-50"><span class="font-weight-bold">Admin:</span> admin@demo.com | admin</small></p><p>
            <small class="mr-50"><span class="font-weight-bold">Client:</span> client@demo.com | client</small></p>
            </div>
            
      <form>
      <label >Email:</label>
      <input class="input" type="email" required v-model="email" placeholder="admin@demo.com">

      <label>Password:</label>
      <input type="password" class="input" placeholder="admin" required v-model="password">

      <div class="terms">
          <input type="checkbox" v-model="terms">
          <label>Remember Me</label>
      </div>
      <router-link to="/about">
          <button type="submit" class="btn btn-primary btn-block"> Sign in </button></router-link>
          <router-view/>
          
  </form>
  <p class="intro">New to platform? <span style="color: #7367f0">Create an account</span></p>
  <p>or</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin:0%;
}
.col-sm-8 {
  background-color: #f8f8fc;
}
.col-sm-4 {
  padding: 60px;
  margin-top: 20px;
}
#nav {
  margin-left: 5px;
}
h1 {
  text-align: left;
    direction: ltr;
    box-sizing: border-box;
    font-family: inherit;
    line-height: 1.2;
    color: #5e5873;
    font-size: 1.314rem;
    font-weight: 500!important;
    margin-top: 0;
    margin-bottom: 1rem!important;
}
.intro {
  text-align: center;
    font-family: Montserrat,Helvetica,Arial,serif;
    font-size: 1rem;
    font-weight: 400;
    color: #6e6b7b;
    direction: ltr;
    box-sizing: border-box;
    line-height: 1.5rem;
    margin-top: 14px;
}
.info {
    text-align: left;
    font-family: Montserrat,Helvetica,Arial,serif;
    font-size: 1rem;
    font-weight: 400;
    color: #6e6b7b;
    direction: ltr;
    box-sizing: border-box;
    line-height: 1.5rem;
    margin-top: 0;
    margin-bottom: 1.5rem!important;
}
form {
    max-width: 420px;
    background: white;
    text-align: left;
    border-radius: 2px;
}
#alert {
  border-radius: 3px;
    font-family: Montserrat,Helvetica,Arial,serif;
    background-color: #dbdbdd;
    width: 80%;
    height: 4.964rem;
    line-height: 1.45;
    text-align: left;
    direction: ltr;
    font-weight: 500;
    color: #7367f0!important;
    box-sizing: border-box;
    font-size: .8rem!important;
    padding: .71rem 1rem;
    margin-bottom: 0%;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
select {
  
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    color: #555;
}
.input {
    direction: ltr;
    box-sizing: border-box;
    font-family: inherit;
    overflow: visible;
    display: block;
    width: 100%;
    height: 2.714rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.45;
    color: #6e6b7b;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    margin: 0;
    padding: .438rem 1rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #d8d6de;
    border-radius: .357rem;
}
input[type='checkbox'] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0 ;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button {
  
    direction: ltr;
    box-sizing: border-box;
    font-family: inherit;
    overflow: visible;
    text-transform: none;
    user-select: none;
    font-size: 1rem;
    line-height: 1;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border 0s,-webkit-box-shadow .15s ease-in-out;
    display: block;
    width: 100%;
    font-weight: 500;
    color: #fff!important;
    margin: 0;
    text-align: center;
    border: 1px solid transparent;
    padding: .786rem 1.5rem;
    border-radius: .358rem;
    text-decoration: none;
    border-color: #7367f0!important;
    background-color: #7367f0!important;
    cursor: pointer;
    box-shadow: 0 8px 25px -8px #7367f0;
}
submit {
    text-align: center;
}
.error {
    color: tomato;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
@media screen and (max-width: 800px) {
  .imgright {
    display: none;
  }
}
</style>
