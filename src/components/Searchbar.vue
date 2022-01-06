<template>
  <form role="search" id="f">
      <button id="search">
        <svg viewBox="0 0 1024 1024" id="sym"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
      </button>
      <input type="search" id="query" name="q" placeholder="Search..." aria-label="Search through site content">
      
    </form>
</template>

<script>
export default {
    name: 'Searchbar'

}
</script>

<style>
#f {
        background-color: white;
        width: 100%;
        height: 44px;
        border-radius: 5px;
        display:flex;
        flex-direction:row;
        margin-top: 7%;
        margin-left: 0%;
        margin-right: 4%;
      }

      input {
        all: unset;
        font: 16px system-ui;
        color: black;
        height: 100%;
        width: 100%;
      }

      ::placeholder {
        color: black;
        opacity: 0.7; 
        text-align:justify;
      }

      #sym {
        color: black;
        fill: currentColor;
        width: 100%;
        height: 100%;
        padding: 10px;
      }

      #search {
        all: unset;
        cursor: pointer;
        width: 44px;
        height: 44px;
      }
</style>