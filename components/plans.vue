<template>
  <div class="relative bg-secondary opacity-100 h-screen w-full">
    <div class="border-b-2 border-tertiary m-auto font-ethnocentric font-bold text-tertiary text-5xl py-16 w-10/12">
        <h2>Tarification</h2>
    </div>
        
        <!--Card-->
        <div class="flex justify-center gap-8 m-auto my-10 w-10/12">
            <div class="relative card h-[600px] w-1/3 p-8">
                <h3 class="font-ethnocentric text-center text-3xl text-tertiary font-bold mb-2">Site web <br>one-page</h3>
                <h4 class="text-center font-area text-lg text-tertiary opacity-25">Une présentation de votre activité</h4>
                <p class="font-light font-ethnocentric text-tertiary text-center text-2xl">A partir de <span class="text-primary font-bold">900€</span></p>
                <a class="absolute text-tertiary bottom-0 left-1/2 -translate-x-1/2 my-6" href="">Découvrir l'offre</a>
            </div>

            <div class="relative card h-[600px] w-1/3 p-8">
                <h3 class="font-ethnocentric text-center text-2xl text-tertiary font-bold">Site web <br>e-commerce</h3>
                <h4>Une présentation de votre activité</h4>
                <p><span>900€</span></p>
            </div>

            <div class="relative card h-[600px] w-1/3 p-8">
                <h3 class="font-ethnocentric text-center text-2xl text-tertiary font-bold">Site web <br>personnalisé</h3>
                <h4>Une présentation de votre activité</h4>
                <p><span>900€</span></p>
            </div>
        </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
/*Effet glassomorphisme*/
.card{
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px );
    border-radius: 10px;
    border: 0.2px solid #F1F2EE ;}
</style>