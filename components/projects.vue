<template>
    <div class="relative opacity-100 w-full">
      <div class="border-b-2 border-secondary m-auto font-ethnocentric font-bold text-secondary text-5xl py-16 w-10/12">
          <h2>Projets</h2>
      </div>

      <!--Grid container-->
      <div class="bg-red-700 my-10 grid grid-cols-4 grid-rows-2 gap-10 w-10/12 justify-items-center m-auto">

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>




      </div>
    </div>
  </template>

  <script>
  export default {

  }
  </script>

<style>
.project_card .details  {
  opacity: 0;
  transition: opacity .4s ease-in-out;
}

.project_card:hover .details {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  opacity: 1;
}
</style>
