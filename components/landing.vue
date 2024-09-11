<template>
    <div class="relative bg-primary h-screen w-full">
      <link rel="stylesheet" href="https://use.typekit.net/ahy8usg.css">
  
      <!-- Background Video -->
      <div>
        <!-- <video autoplay muted loop id="myVideo" class="absolute right-0 bottom-0 opacity-25 min-h-full min-w-full z-0">
          <source src="../public/video.mp4" type="video/mp4">
        </video> -->
      </div>
  
      <!-- Menu de navigation desktop -->
      <div class="relative flex font-ethnocentric justify-end gap-5 text-lg text-white px-5 py-5 z-20
      sm:hidden
      ">
        <img class="absolute right-5 top-2 p-2 w-1/6
        " src="../public/logo_white_text.png" alt="">
          <a href="#" class="hover:text-primary underline p-2 transition sm:hidden">A propos</a>
          <a href="#" class="hover:text-primary underline p-2 transition sm:hidden">Services</a>
          <a href="#" class="hover:text-primary underline p-2 transition sm:hidden">Projets</a>
          <a href="#" class="text-tertiary border-2 border-tertiary border-solid p-2 sm:hidden">Nous contacter</a>
      </div>

       <!-- Menu de navigation mobile -->
       <div class="relative flex font-ethnocentric justify-end gap-5 text-lg text-white px-5 py-5 z-20
      ">
      <img class="absolute left-2 top-2 p-2 w-1/12" src="../public/burger_menu.svg" alt="">


        <img class="absolute right-5 top-2 p-2 w-1/6
        sm:w-1/3" 
        src="../public/logo_white_text.png" alt="">
          <a href="#" class="hover:text-primary underline p-2 transition sm:hidden">A propos</a>
          <a href="#" class="hover:text-primary underline p-2 transition sm:hidden">Services</a>
          <a href="#" class="hover:text-primary underline p-2 transition sm:hidden">Projets</a>
          <a href="#" class="text-tertiary border-2 border-tertiary border-solid p-2 sm:hidden">Nous contacter</a>
      </div>
      <!---------------------------------------->
  
      <!-- Main Content -->
      <div class="
      absolute -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2 font-ethnocentric font-bold text-tertiary text-6xl w-10/12 z-10 
      sm:text-4xl sm:text-center">
        <p>Nous façonnons l'architecture, le paysage et l'intérieur du web moderne.</p>
        
        <a class=" block text-xl py-8 underline after:content-eyes" href="">Contacter CodeCorp</a>
      </div>


      <a href=""><img class="absolute top-[90%] left-1/2 animate-bounce" src="../public/fleche_blanc.svg" alt="">
      </a>

    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  