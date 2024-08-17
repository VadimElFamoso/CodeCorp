<template>
  <div class="relative bg-tertiary opacity-100 h-screen w-full">
    <div class="border-b-2 border-secondary m-auto font-ethnocentric font-bold text-secondary text-5xl py-16 w-10/12">
        <h2>Projets</h2>
    </div>

    <div class="grid grid-cols-4 grid-rows-2 gap-10 justify-self-center items-end w-10/12 justify-items-end m-auto">
        <div class="relative card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <h3>Boulangerie</h3>
            <a href="">Découvrir</a>
        </div>
        <div class="relative card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <h3>Boulangerie</h3>
            <a href="">Découvrir</a>
        </div>
        <div class="relative card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <h3>Boulangerie</h3>
            <a href="">Découvrir</a>
        </div>
        <div class="relative card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <h3>Boulangerie</h3>
            <a href="">Découvrir</a>
        </div>
        <div class="relative card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <h3>Boulangerie</h3>
            <a href="">Découvrir</a>
        </div>
        <div class="relative card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <h3>Boulangerie</h3>
            <a href="">Découvrir</a>
        </div>
        <div class="relative card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <h3>Boulangerie</h3>
            <a href="">Découvrir</a>
        </div>
        <div class="relative card">
            <img class="h-[325px] w-[325px] object-cover" src="../public/dev.jpg" alt="">
            <h3>Boulangerie</h3>
            <a href="">Découvrir</a>
        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .card{
        border: 2px solid red;
    }
    .card h3{
        display: none;
    }
    .card a{
        display: none;
    }
    /*Au hover : nous présentons le titre du projet et un bouton qui redirige vers le projet.*/
    .grid img:hover{
        
    }
    .card:hover h3{
        display: absolute;
    }
    .card:hover a{
        display: absolute;
    }
</style>