<template>
  <div class="z-10 w-screen  h-16 flex ">
    <div class="z-10 bg-fade text-white w-full h-16 flex ">
      <div class="container hidden  lg:flex lg:flex-row lg:flex-wrap justify-between">
        <div class="w-40 h-full -ml-2">
          <img src="@/assets/images/gameson-logo.png" alt="gameson-logo" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-wrap gap-4 items-center font-bold text-lg">
          <div class="flex flex-wrap gap-4 items-center">
            <layout-navbar-button >news</layout-navbar-button>
            <layout-navbar-button>e-sport</layout-navbar-button>
            <layout-navbar-button>features</layout-navbar-button>
            <layout-navbar-button>reviews</layout-navbar-button>
            <layout-navbar-button>wiki</layout-navbar-button>
          </div>
          <layout-navbar-button>
            <font-awesome-icon icon="search" class=" cursor-pointer" @click="showSearch = !showSearch" :class="{ 'is-active': showSearch}"/>
          </layout-navbar-button>
           <layout-navbar-button >login</layout-navbar-button>
          <layout-navbar-button class="border-4 border-white  rounded-full py-0.1 px-4">sign up</layout-navbar-button>
        </div>
      </div>

      <!-- mobile -->
      <div class="container mx-auto  flex lg:hidden flex-row flex-wrap content-center items-center justify-between text-3xl " >
        <layout-navbar-button >
          <font-awesome-icon icon="bars" @click="show = !show" :class="{ 'is-active': show}"/>
        </layout-navbar-button>
        <div class="w-40 -ml-2">
          <img src="@/assets/images/gameson-logo.png" alt="gameson-logo" class="z-1">
        </div>
        <layout-navbar-button >
          <font-awesome-icon icon="search"  class="" @click="showSearch = !showSearch" :class="{ 'is-active': showSearch}"/>
        </layout-navbar-button>
      </div>
    </div>

    <!-- Nav-bar -->
    <div class="lg:hidden z-5 fixed inset-0 bg-gray-900 bg-opacity-80  hide" 
        :class="{ 'is-active': show }">
       <div class="fixed top-16 uppercase border-2 text-black bg-white border-solid border-blue-900 w-full mr-1">
         <ul >
           <li class="border-b-2 border-solid border-blue-500 p-4"><a href="#">news</a></li>
           <li class="border-b-2 border-solid border-blue-500 p-4"><a href="#">e-sport</a></li>
           <li class="border-b-2 border-solid border-blue-500 p-4"><a href="#">features</a></li>
           <li class="border-b-2 border-solid border-blue-500 p-4"><a href="#">reviews</a></li>
           <li class="border-b-2 border-solid border-blue-500 p-4"><a href="#">wiki</a></li>
           <li class="p-4 items-center"><div><a href="#">sign up</a></div></li>
         </ul>
       </div>
      </div>

    <!-- Search-bar -->
     <div class="md:bg-opacity-0  fixed inset-0 z-5 bg-gray-900 bg-opacity-80 hide" 
     :class="{ 'is-active': showSearch}"
     >
       <div class="fixed top-16  w-full md:w-96  h-12 flex border hide  mr-4 md:right-12 md:container bg-white" :class="{ 'is-active': showSearch}">
        <form action="" class="w-full h-10  p-1">
            <div class="relative text-gray-600 focus-within:text-gray-400 ">
              <input type="text" name="search" class="border text-sm text-white  colorinput focus:text-gray-900 w-full h-9 p-4 " placeholder="Search..." >
               <span class="absolute top-0  right-0 items-center ">
                <button type="submit" class="bgcolor w-12 p-1.5">
                  <font-awesome-icon icon="search" class=" cursor-pointer text-black  bg-opacity-25"/>
                </button>
              </span>
            </div>
        </form>
        </div>
     </div>

      
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class extends Vue {
  data(){
    return{
      show:false,
      showSearch:false
    }
  }
}

</script>

<style scoped>
.bg-fade{
   background-image: linear-gradient(to right, #2c2ea9 , #2ed1f4);
}
.hide{
  visibility: hidden;
}
.is-active{
  visibility: visible;
}
.border{
    border: 2px solid #3454FF ;
}
.colorinput{
    border:2px solid #3454FF61
}
.bgcolor{
  background-color: #3454FF;
}
.w-30rem{
    width: 30rem;
}
.container{
  margin-left: 5%;
  margin-right: 5%;
}
</style>
