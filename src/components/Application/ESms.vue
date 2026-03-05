<template>
  <div class="font-clemente text-gray-600 py-12 px-4 md:px-16 max-w-7xl mx-auto">
    <!-- Header Badge and Intro -->
    <div class="flex flex-col md:flex-row items-center gap-6 mb-12">
      <div class="bg-[#ff925c] text-white p-8 rounded-[30px] shadow-lg">
        <h2 class="text-3xl md:text-5xl font-black uppercase whitespace-nowrap">ASSIA ESMS</h2>
      </div>
      <p class="text-[#ff925c] font-clementePdam text-xl md:text-[40px] leading-tight text-center md:text-left">
        ASSIA en cours de référencement par le <br class="hidden md:block">
        Ségur du Numérique, sur le couloir de l'AHI
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Left Column -->
      <div class="space-y-8">
        <div class="text-3xl md:text-[35px] leading-tight">
          <p class="font-clementeMini">Un logiciel métier totalement</p>
          <p class="text-[#ff925c] font-clementePdan italic">adapté à vos équipes,</p>
          <p class="font-clementeMini">et financé dans le cadre de l'appel à</p>
          <p class="font-clementeMini">projet « ESMS Numériques »</p>
        </div>

        <div class="space-y-4">
          <p class="text-2xl font-clementeMini">Vous pourrez ainsi utiliser :</p>
          <ul class="list-disc list-inside space-y-2 text-xl md:text-2xl font-clementeMini pl-4">
            <li>L'INS (Identifiant National de Santé)</li>
            <li>La MSSanté (Messagerie Sécurisée de Santé)</li>
            <li>Le DMP (Dossier Médical Partagé)</li>
          </ul>
        </div>

        <p class="text-xl md:text-2xl font-clementePdaq leading-relaxed">
          Tout en ayant un outil dédié à l'accompagnement social réalisé par vos professionnels dans les CHRS, CHU, LHSS, EMSP, AVDL, etc.
        </p>
      </div>

      <!-- Right Column -->
      <div class="flex flex-col items-center">
        <!-- Segur Numérique Image -->
        <img src="/img/assia/esms.jpeg" alt="Ségur Numérique" class="w-[280px] md:w-[400px] object-contain mb-12" />

        <!-- Reference Text -->
        <div class="max-w-lg text-center lg:text-left">
          <p class="text-2xl md:text-3xl font-clementeMini leading-snug">
            ASSIA est <span class="text-[#ff925c] font-bold">répertoriée</span> par l'<span class="text-[#ff925c] font-bold">ANS</span> et les <span class="text-[#ff925c] font-bold">ARS</span> en tant que <span class="text-[#ff925c] font-bold">logiciel de DUI dédié au suivi social</span>. L'application sera référencée sur le couloir de l'AHI (MS3) très prochainement.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific logic needed for now as per the image
</script>

<style scoped>
.font-clemente { font-family: 'Clemente', sans-serif; }
.font-clementePdam { font-family: 'Clemente-pdam', sans-serif; }
.font-clementePdai { font-family: 'Clemente-pdai', sans-serif; }
.font-clementePdaq { font-family: 'Clemente-pdaq', sans-serif; }
</style>
