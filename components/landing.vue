<template>
    <div class="relative bg-black h-screen w-full">
      <link rel="stylesheet" href="https://use.typekit.net/ahy8usg.css">
  
      <!-- Background Video -->
      <div>
        <video autoplay muted loop id="myVideo" class="absolute right-0 bottom-0 opacity-25 min-h-full min-w-full z-0">
          <source src="../public/video.mp4" type="video/mp4">
        </video>
      </div>
  
      <!-- Navigation Bar -->
      <div class="relative flex font-ethnocentric justify-end gap-5 text-lg text-white px-5 py-5 z-20">
        <img class="absolute h-auto left-5 top-5 p-2 w-1/6
        " src="../public/codecorp_logo.png" alt="">
        <a href="#" class="hover:text-primary underline p-2 transition">A propos</a>
        <a href="#" class="hover:text-primary underline p-2 transition">Services</a>
        <a href="#" class="hover:text-primary underline p-2 transition">Projets</a>
        <a href="#" class="text-primary border-2 border-primary border-solid p-2">Nous contacter</a>
      </div>
  
      <!-- Main Content -->
      <div class="
      absolute -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2 font-ethnocentric font-bold text-tertiary text-4xl lg:text-6xl w-10/12 z-10">
        <p>Nous façonnons l'architecture, le paysage et l'intérieur du web moderne.</p>
      </div>

      <a href=""><img class="absolute top-[90%] left-1/2 animate-bounce" src="../public/fleche_rose.svg" alt="">
      </a>

    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  