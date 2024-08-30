<template>
  <div class="relative bg-secondary opacity-100 h-screen w-full">
    <div class="border-b-2 border-tertiary m-auto font-ethnocentric font-bold text-tertiary text-5xl py-16 w-10/12">
        <h2>Tarification</h2>
    </div>
        <!--Card Container-->
        <div class="flex justify-center gap-8 m-auto my-10 text-center w-10/12">

            <!--Card-->
            <div class="relative card h-[600px] w-1/4 p-8">
                <h3 class="font-ethnocentric text-2xl text-tertiary font-bold mb-2">Site web <br>one-page</h3>
                <h4 class="font-area text-base text-gray-500">Un site web optimisé pour la conversion client.</h4>
                <p class="font-light font-ethnocentric text-tertiary text-xl py-2">A partir de <span class="text-primary font-bold">900€</span></p>
                
                <div class="font-area flex flex-col gap-2 py-4 text-tertiary">
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                </div>
                
                <a class="absolute border-2 bg-primary hover:bg-secondary hover:border-tertiary font-areaextended hover:text-tertiary transition text-center text-sm text-secondary bottom-0 left-1/2 -translate-x-1/2 my-6 border-solid border-primary rounded-full py-3 w-10/12" href="">Découvrir l'offre.</a>
            </div>

            <!--Card-->
            <div class="relative card h-[600px] w-1/4 p-8">
                <h3 class="font-ethnocentric text-2xl text-tertiary font-bold mb-2">Site web <br>e-commerce</h3>
                <h4 class="font-area text-base text-gray-400">Un site web optimisé pour la conversion client.</h4>
                <p class="font-light font-ethnocentric text-tertiary text-xl py-2">A partir de <span class="text-primary font-bold">2000€</span></p>
                
                <div class="font-area flex flex-col gap-2 py-4 text-tertiary">
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                </div>
                
                <a class="absolute bg-primary font-areaextended text-center text-sm text-secondary bottom-0 left-1/2 -translate-x-1/2 my-6 border-solid border-primary rounded-full py-3 w-10/12" href="">Découvrir l'offre.</a>
            </div>

            <!--Card-->
            <div class="relative card h-[600px] w-1/4 p-8">
                <h3 class="font-ethnocentric text-2xl text-tertiary font-bold mb-2">Site web <br>personnalisé</h3>
                <h4 class="font-area text-base text-gray-400">Du sur-mesure pour les plus grandes exigences.</h4>

                <!-- <div class="font-area flex flex-col gap-2 py-4 text-tertiary">
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                    <li class="list-image-check"><a href="">lorem sin blablabla</a></li>
                </div> -->
                <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-auto w-10/12" src="../public/banner.svg" alt="">
            
                
                <!-- <a class="absolute bg-primary font-areaextended text-center text-sm text-secondary bottom-0 left-1/2 -translate-x-1/2 my-6 border-solid border-primary rounded-full py-3 w-10/12" href="">Découvrir l'offre.</a> -->
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