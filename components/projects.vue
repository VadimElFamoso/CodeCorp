<template>
    <div class="relative bg-tertiary opacity-100 h-screen w-full">
      <div class="border-b-2 border-secondary m-auto font-ethnocentric font-bold text-secondary text-5xl py-16 w-10/12">
          <h2>Projets</h2>
      </div>
  
      <div class="grid grid-cols-4 grid-rows-2 gap-10 justify-self-center items-end w-10/12 justify-items-center m-auto">
        
        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
                <h3 class="bg-primary font-ethnocentric p-2 -rotate-6 text-secondary text-2xl">Boulangerie</h3>
            </div>
        </div>

        <div class="relative project_card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <div class="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center text-tertiary details">
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
      .project_card:hover .details{
          display: flex;
          flex-direction: column;
          gap: .75rem;
      }
  </style>