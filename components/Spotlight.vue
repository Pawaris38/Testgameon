<template>
  <div class="mb-14 w-100vw ">
    <div class="containermedium  hidden lg:flex lg:flex-col ">
      <h1 class="uppercase font-bold text-3xl mt-14 mb-4"
      v-bind:class="{ colorSpot: active }"
      >Spotlight</h1>
      <h1>big</h1>
          <div class="grid grid-cols-4 gap-8 ">
          <div v-for='item in items' :key="item">  
          <div class="text-center z-5 relative overflow-hidden group ">
               <a :href="item.link" :key="item.link">  
                 <img :src="item.image" :key='item.image' class=" w-full h-full rounded-sm transition duration-500 ease-in  transform  hover:scale-105 "/>
                <div class="w-full absolute bottom-0 ">  
                  <div class="relative left-1 w-8 h-8 shadow-md"  >
                   <img :src="item.youtube" alt="">
                 </div>
                  <div class="relative w-full h-full top-0 p-1">
                    <div class="absolute w-full h-full rounded-b inset-0 transition-opacity duration-500 ease-out opacity-75 hover:opacity-85 "
                      :style="{'background-color':item.bgcolor}"
                    >
                    </div>
                      <h1 class="relative text-lg m-0 p-2  text-left font-black  line-clamp-4 text-white group-hover:underline" >
                       {{item.text}}
                      </h1>
                  </div>
                </div>
              </a>
          </div>
          </div>
        </div> 
        </div>
        
        <!-- tablet -->
        <div class="lg:hidden hidden containermedium md:flex md:flex-col ">
       <h1 class=" uppercase font-bold text-3xl mt-4 mb-4 ml-4"
        v-bind:class="{ colorSpot: active }"
       >Spotlight</h1>
       <h1>medium</h1>
        <div class="grid grid-cols-4 gap-4 overflow-x-scroll w-full">
          <div v-for='item in items' :key="item">  
          <div class="text-center relative ml-4 w-full overflow-hidden  ">
               <a :href="item.link" :key="item.link">  
                 <img :src="item.image" :key='item.image' class=" w-full h-full object-cover rounded-sm transition duration-500 ease-in  transform   hover:scale-105"/>
                <div class="w-full absolute bottom-0 ">  
                  <div class="relative left-1 w-8 h-8 shadow-md"  >
                   <img :src="item.youtube" alt="">
                 </div>
                  <div class="relative w-full h-full top-0 p-1">
                    <div class="absolute w-full h-full rounded-b inset-0 transition-opacity duration-500 ease-out opacity-75 hover:opacity-85 "
                      :style="{'background-color':item.bgcolor}"
                    >
                    </div>
                      <h1 class="relative text-lg m-0 p-2 overflow-hidden text-left font-black  line-clamp-4 text-white " >
                       {{item.text}}
                      </h1>
                  </div>
                </div>
              </a>
          </div>
          </div>
        </div> 
       </div>

        <!-- mobile -->
      <div class="md:hidden containersmall flex flex-col">
       <h1 class=" uppercase font-bold text-3xl mt-4 mb-2 ml-4"
        v-bind:class="{ colorSpot: active }"
       >Spotlight</h1>
       <h1>small</h1>
        <div class="grid grid-cols-2 gap-0.5">
          <div v-for='item in items' :key="item">  
          <div class="text-center relative">
               <a :href="item.link" :key="item.link">  
                 <img :src="item.image" :key='item.image' class=" w-full h-full object-cover rounded-sm"/>
                <div class="w-full absolute bottom-0 ">  
                  <div class="relative left-1 w-8 h-8 shadow-md"  >
                   <img :src="item.youtube" alt="">
                 </div>
                  <div class="relative w-full h-full top-0 p-1">
                    <div class="absolute w-full h-full rounded-b inset-0 transition-opacity duration-500 ease-out opacity-75 hover:opacity-85 "
                      :style="{'background-color':item.bgcolor}"
                    >
                    </div>
                      <h1 class="relative text-lg m-0 p-2 overflow-hidden text-left font-black  line-clamp-4 text-white " >
                       {{item.text}}
                      </h1>
                  </div>
                </div>
              </a>
          </div>
          </div>
        </div> 
       </div>
      
      
      

  </div>
</template>


<script>
export default {
  data(){
    return{
      items:[
                {
                    link:"https://www.ign.com/",
                    image:"https://picsum.photos/185/306/?image=15",
                    text:"Call of duty Vangurad multiplayer review multiplayer review",
                    bgcolor:"#297afb"
                },
                  {
                    link:"https://www.ign.com/",
                    image:"https://picsum.photos/185/306/?image=10",
                    text:"Call of duty Vangurad multiplayer review",
                    youtube:require("@/assets/images/youtube.png"),
                    bgcolor:"#009999"
                },
                  {
                    link:"https://www.ign.com/",
                    image:"https://picsum.photos/185/306/?image=20",
                    text:"New world-Final Reviews",
                    bgcolor:"#800080"
                },
                {
                   link:"https://www.ign.com/",
                    image:"https://picsum.photos/185/306/?image=21",
                    text:"สวัสดี",
                    bgcolor:"#cc6600"
                },
      ]
      ,show: false,
       active: true,
    }
  }
}

</script>
<style scoped>
.showSearch{
  visibility: hidden;
}
.is-active{
  visibility: visible;
}
.colorSpot{
  color:#03045e;

}
.containermedium{
  margin-left: 5%;
  margin-right: 5%;
}
.containersmall{
 margin-left: 0.5%;
  margin-right: 0.5%;
}
</style>