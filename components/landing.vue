<template>
    <div class="relative bg-secondary h-screen w-full">
      <link rel="stylesheet" href="https://use.typekit.net/ahy8usg.css">

      <!-- Background Video -->
      <div>
        <video autoplay muted loop id="myVideo" class="absolute right-0 bottom-0 opacity-25 min-h-full min-w-full z-0">
          <source src="../public/video.mp4" type="video/mp4">
        </video>
      </div>

      <!-- Menu de navigation -->
      <div class="relative flex font-ethnocentric justify-end gap-5 text-lg text-white px-5 py-5 z-20">
      <!-- <img class="absolute left-2 top-2 p-2 h-auto w-1/12" src="../public/burger_menu.svg" alt=""> -->

        <img class="absolute left-5 top-[1.25rem] p-2 h-auto w-2/12" src="../public/codecorp_logo.png" alt="">

          <a href="#" class="hover:text-primary underline p-2 transition">A propos</a>
          <a href="#" class="hover:text-primary underline p-2 transition">Services</a>
          <a href="#" class="hover:text-primary underline p-2 transition">Projets</a>
          <a href="#" class="text-primary border-2 border-primary border-solid p-2">Nous contacter</a>

      </div>
      <!---------------------------------------->

      <!--Hero section-->
      <div class="absolute -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2 font-ethnocentric font-bold text-tertiary text-5xl w-10/12 z-10">
        <p>Nous façonnons l'architecture, le paysage et l'intérieur du web moderne.</p>
      </div>.


      <a href="#services"><img class="absolute m-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10" src="../public/fleche_blanc.svg" alt=""></a>
    </div>
  </template>

  <script>
  export default {

  }
  </script>

<style scoped>

a[href="#services"] img {
  animation: bounce 3s infinite;
  cursor: pointer;
  transition: all 0.3s;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
@keyframes bounce {
  0%, 100% {
    transform: translate3d(-50%, -20%, 0); /* Combine translation horizontale et verticale */
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translate3d(-50%, 0, 0); /* Garde le centrage tout en animant sur Y */
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
