<template>
    <div id ="services" class="relative opacity-100 h-screen w-full">
        <div class="border-b-2 border-secondary m-auto font-ethnocentric font-bold text-secondary text-5xl py-16 w-10/12">
            <h2>Services</h2>
        </div>
        <div class="relative gap-40 m-auto w-10/12 flex flex-row-reverse">
            <div>
                <img class="w-[400px] h-[400px] right-0 top-0 object-cover" src="../public/dev.jpg" alt="">
                <p class=""></p>
            </div>
            <div class="flex flex-col gap-8 text-right text-2xl justify-end text-secondary underline font-ethnocentric font-bold">
                <a class= "hover:text-primary transition" href="">Création de sites web</a>
                <a class= "hover:text-primary transition" href="">Audit web</a>
                <a class= "hover:text-primary transition" href="">Optimisation SEO</a>
                <a class= "hover:text-primary transition" href="">Prototypage UI/UX</a>
                <a class= "hover:text-primary transition" href="">Cybersécurité</a>
             </div>
        </div>

        <div class="marquee-w bg-primary">
            <div class="marquee">
                <span class="text-secondary font-ethnocentric -rotate-45">Code - Créativité - Innovation - Design - Responsive - Performance - Technologie - JavaScript - Frontend - Backend - Sécurité - UX/UI - API - HTML - CSS - Optimisation - Accessibilité - Automatisation - Intégration - Maintenance - SEO - Adaptabilité - Collaboration - Analyse - Développement Agile</span>
            </div>

            <div class="marquee marquee2">
                <span>Code - Créativité - Innovation - Design - Responsive - Performance - Technologie - JavaScript - Frontend - Backend - Sécurité - UX/UI - API - HTML - CSS - Optimisation - Accessibilité - Automatisation - Intégration - Maintenance - SEO - Adaptabilité - Collaboration - Analyse - Développement Agile</span>
            </div>
        </div>

        
        <!-- <div class="absolute bottom-0 font-ethnocentric left-1/2 -translate-y-1/2 -translate-x-1/2 text-center text-secondary w-10/12 text-2xl">
        </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
.marquee-w {
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    overflow: hidden;
}
.marquee {
    display: block;
    margin: auto auto;
    white-space: nowrap;
    overflow: hidden;
    min-width: 100%;
    height: 100%;
}
.marquee span {
    display: inline-block;
    padding-left: 100%;
    text-align: center;
    white-space: nowrap;
    min-width: 100%;
    height: 100%;
    line-height: 150px;
    font-size: 85px;
    animation: marquee 120s linear infinite;
}
.marquee2 span {
    animation-delay: 5s;
}
@keyframes marquee {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-100%, 0);
    }
}
</style>