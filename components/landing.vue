<template>
    <div class="relative bg-secondary h-screen w-full">
      <link rel="stylesheet" href="https://use.typekit.net/ahy8usg.css">

      <!-- Background Video -->
      <div>
        <video autoplay muted loop id="myVideo" class="absolute right-0 bottom-0 opacity-25 min-h-full min-w-full object-cover z-0">
          <source src="../public/video.mp4" type="video/mp4">
        </video>
      </div>

      <!-- Menu de navigation desktop -->
      <div id="desktop_menu" class="items-center flex relative font-ethnocentric justify-end gap-5 text-lg text-white px-5 py-5 z-20">
        <img class="absolute mt-2 left-5 top-[1.25rem] p-2 h-auto w-[20%]" src="../public/codecorp_logo.png" alt=""> <!--MT mauvais cas d'usage pour fix-->
        <a href="#" class="hover:text-primary underline p-2 transition">Services</a>
        <a href="#" class="hover:text-primary underline p-2 transition">Tarification</a>
        <a href="#" class="hover:text-primary underline p-2 transition">Projets</a>
        <a href="#" class="text-primary border-2 border-primary border-solid p-2">Nous contacter</a>
      </div>
      <!---------------------------------------->

      <!-- Menu de navigation mobile -->
      <img id="icon_mobile_menu" class="absolute hidden top-4 right-4 z-50" src="../public/xmark-solid.svg" alt="" width="50" height="50">
      <div id="mobile_menu" class="bg-primary hidden items-center relative flex flex-col -translate-x-[100vh] font-ethnocentric justify-center gap-1 text-lg text-white px-5 py-5 h-screen transition z-20">
        <img class="p-2 h-auto w-[500px]" src="../public/codecorp_logo_white_text.png" alt="">
        <a href="#" class="hover:text-primary underline p-2 transition">Services</a>
        <a href="#" class="hover:text-primary underline p-2 transition">Tarification</a>
        <a href="#" class="hover:text-primary underline p-2 transition">Projets</a>
        <a href="#" class="hover:text-primary underline p-2 transition">Nous contacter</a>
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
    mounted(){
      const icon = document.querySelector('#icon_mobile_menu');
      const mobile_menu = document.querySelector('#mobile_menu');
      const desktop_menu = document.querySelector('#desktop_menu');
      console.log(icon);

      icon.addEventListener('click', () => {
        console.log('click');
        mobile_menu.classList.toggle('hidden');
        mobile_menu.classList.toggle('-translate-x-[100vh]');
      });
    }
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
