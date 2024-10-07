<template>
    <div class="bg-secondary border-primary border-t-8 py-20 w-full">
        <!-- Footer flex container -->
        <div class="flex gap-20 justify-center items-center">

          <!-- Logo et mentions légales -->
          <div class="basis-2/12 text-tertiary">
            <img class="h-auto mb-3 w-[350px]" src="../public/codecorp_logo.png" alt="">
            <div class="flex flex-col opacity-70 font-area text-sm">
              <p>CodeCorp est une agence digitale <br/>nancéienne fondée en 2023.</p>
              <p>Copyright 2024&copy;</p>
            </div>
          </div>

          <!-- Menu de navigation -->
          <div class="basis-2/12 flex flex-col font-ethnocentric text-sm text-white">
            <h2 class="my-2 text-lg">Navigation :</h2>
            <a href="#" class="font-light hover:text-primary underline transition">A propos</a>
            <a href="#" class="font-light hover:text-primary underline transition">Services</a>
            <a href="#" class="font-light hover:text-primary underline transition">Projets</a>
            <a href="#" class="font-light hover:text-primary underline transition">Nous contacter</a>
          </div>

          <!-- Menu de navigation -->
          <div class="basis-2/12 flex flex-col font-ethnocentric text-sm text-white">
            <h2 class="my-2 text-lg">A propos :</h2>
            <a href="#" class="font-light hover:text-primary underline transition">Mentions légales</a>
            <a href="#" class="font-light hover:text-primary underline transition">FAQ</a>
            <a href="#" class="font-light hover:text-primary underline transition">Facturation et abonnements</a>
            <a href="#" class="font-light hover:text-primary underline transition">Support technique</a>
          </div>

          <div class="font-area text-tertiary">
            <h2>Inscrivez-vous à notre newsletter :</h2>
            <form action="" method="post">
              <input type="email" name="email" id="email" placeholder="Votre adresse email">
              <button class="bg-primary mx-5 text-secondary px-5 py-2" type="submit">S'inscrire</button>
            </form>
          </div>

<!--<p class="font-ethnocentric text-xs text-tertiary italic opacity-60">Made with <span class="text-red-500">&#10084;</span> in Nancy.</p>-->
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
