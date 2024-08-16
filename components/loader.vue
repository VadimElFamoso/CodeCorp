<template>
  <div class="h-screen w-screen bg-black flex justify-center items-center">
    <img class="h-auto w-1/2 animate-logobounce" src="../public/codecorp_logo.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style>

img{
    animation: logobounce 2s infinite;
}

@keyframes logobounce{
    0%{
        transform: translateY(-10px);
        opacity: 1;
    }
    50%{
        transform: translateY(0px);
        opacity: .8;
    }
    100%{
        transform: translateY(-10px);
        opacity: 1;
    }
}
</style>