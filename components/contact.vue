<script>

</script>

<template>
  <div class="relative bg-secondary opacity-100 h-screen w-full">

    <!--Contact_container-->
    <div class="contact_container flex">

      <!--Contact image-->
      <div class="contact_picture bg-green-700 h-screen w-[40vw]">
        <img src="../public/dev.jpg" alt="contact" class="w-full object-cover h-screen">
      </div>

      <!--Contact form-->
      <div class="contact_form h-auto w-[60vw] text-tertiary py-5">
        <div class="bg-primary border-tertiary m-auto font-ethnocentric font-bold my-10 rotate-3 text-center text-secondary text-3xl p-4 w-10/12">
        <h2>Propulsez votre vision <br>dans le futur</h2>
        </div>

        <form action="send_form.php" class="font-areaextended flex flex-col gap-10 m-auto w-10/12">

          <!--Name container-->
          <div class="flex gap-10">

            <div class="flex flex-col basis-1/2">
              <p for="" class="text-tertiary">Votre nom :</p>
              <input class="border-b-2 justify-between border-tertiary bg-secondary pt-1 pb-1" type="text">
            </div>

            <div class="flex flex-col basis-1/2">
              <p for="" class="text-tertiary">Votre email :</p>
              <input class="border-b-2 border-tertiary bg-secondary pt-1 pb-1" type="text">
            </div>

          </div>

          <!--Details container-->
          <div class="flex gap-10">

            <div class="flex flex-col basis-1/2">
              <p for="" class="text-tertiary">Votre numéro de téléphone :</p>
              <input class="border-b-2 justify-between border-tertiary bg-secondary pt-1 pb-1" type="text">
            </div>

            <div class="flex flex-col basis-1/2">
              <p for="" class="text-tertiary">Votre raison sociale (optionnel) :</p>
              <input class="border-b-2 border-tertiary bg-secondary pt-1 pb-1" type="text">
            </div>
          </div>

          <!--Select-->
          <div>
            <p for="" class="text-tertiary">Sujet :</p>
            <select class="border-b-2 border-tertiary bg-secondary pt-1 pb-1 w-full" name="" id="">
              <option value="">Solicitation d'une offre</option>
              <option value="">Prise de contact préalable pour devis</option>
              <option value="">Networking BTB</option>
              <option value="">Autre</option>
            </select>
          </div>

          <!--Message-->
          <div>
            <p>Message :</p>
            <textarea class="border-b-2 border-tertiary bg-secondary pt-1 pb-1 h-auto w-full" name="" id="" cols="25" rows="3"></textarea>
          </div>

          <!--Send message-->
          <div class="m-auto">
            <input class="bg-primary cursor-pointer font-areaextended text-secondary px-12 py-2" type="submit">
          </div>
        </form>

        <!--Div après envoi du message-->
        <div class="text-primary hidden">
          <p>Votre message a bien été envoyé.</p>
        </div>
      </div>
    </div>




    </div>
</template>

<style scoped>

</style>