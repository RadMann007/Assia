<template>
  <section class="pb-10 flex flex-col gap-6 items-stretch bg-white w-full">
    <div class="flex flex-col gap-6 w-full mx-auto">
      
      <!-- ITEM 1 : LA RÉALITÉ -->
      <div class="font-clemente relative mb-8 text-slate-700 w-full">
        <!-- Header : Marges latérales remises (mx-4...) + Coins arrondis -->
        <div @click="toggleCollapse(0)" class="relative z-20 py-8 px-10 md:py-10 md:px-20 mx-0 md:mx-0 flex justify-between items-center select-none bg-[#ff925c] text-white rounded-[50px] shadow-none cursor-pointer hover:bg-[#ff925c] transition-colors w-full">
          <h3 class="text-2xl md:text-4xl font-black uppercase tracking-tight text-left flex-1 pr-8">Une réalité partagée par de nombreuses associations</h3>
          <div class="w-16 h-16 flex items-center justify-center text-5xl font-light transition-transform duration-300 flex-shrink-0" :style="{ transform: activeCollapse === 0 ? 'rotate(45deg)' : 'rotate(0deg)' }">+</div>
        </div>

        <!-- Content : Reste en 100% width (w-full) et sans arrondis (rounded-none) -->
        <div :ref="el => contentRefs[0] = el" class="collapse-content relative z-10 overflow-hidden bg-[#FFF5F0] rounded-none -mt-10 h-0 opacity-0 w-full">
          <div class="px-6 md:px-12 lg:px-20 pb-0 pt-20 flex flex-col gap-10">

            <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div class="flex-1 text-[#03A3B5]">
                <p class="mb-8 font-bold text-xl md:text-2xl leading-relaxed">Sur le terrain, les équipes font face à :</p>
                <ul class="space-y-6">
                  <li class="flex items-start gap-4">
                    <span class="text-3xl leading-none mt-1 text-orange-400">•</span>
                    <p class="text-xl leading-tight font-medium">des outils pensés pour le reporting, pas pour l'accompagnement social</p>
                  </li>
                  <li class="flex items-start gap-4">
                    <span class="text-3xl leading-none mt-1 text-orange-400">•</span>
                    <p class="text-xl leading-tight font-medium">des interfaces complexes et chronophages</p>
                  </li>
                  <li class="flex items-start gap-4">
                    <span class="text-3xl leading-none mt-1 text-orange-400">•</span>
                    <p class="text-xl leading-tight font-medium">une multiplication de saisies et d'outils annexes</p>
                  </li>
                  <li class="flex items-start gap-4">
                    <span class="text-3xl leading-none mt-1 text-orange-400">•</span>
                    <p class="text-xl leading-tight font-medium">des difficultés à produire des indicateurs sans dénaturer la pratique</p>
                  </li>
                  <li class="flex items-start gap-4">
                    <span class="text-3xl leading-none mt-1 text-orange-400">•</span>
                    <p class="text-xl leading-tight font-medium">une faible appropriation des outils par les professionnels</p>
                  </li>
                </ul>
              </div>
              <div class="flex-1 w-full flex justify-center">
                <img src="/img/assia/3.jpg" alt="Illustration" class="w-full max-w-md h-[400px] object-cover rounded-[50px]" />
              </div>
            </div>

            <div class="text-center pt-4 mb-10">
               <h2 class="text-orange-400 text-xl md:text-2xl font-black mx-auto leading-snug uppercase">
                 Ce constat, nous l'avons fait aux côtés des équipes, au fil des projets et des échanges.
               </h2>
            </div>

            <!-- SECTION BLEUE -->
            <div class="bg-[#03A3B5] -mx-6 md:-mx-12 lg:-mx-20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white">
              <div class="flex-1 w-full">
                <img src="/img/assia/4.png" alt="Mockup ASSIA" class="w-full h-auto transform -rotate-1 rounded-3xl" />
              </div>
              <div class="flex-1 flex flex-col gap-8">
                <h2 class="text-2xl md:text-4xl font-black leading-tight uppercase">
                  Avec un système d'information pensé pour eux, les travailleurs sociaux trouvent un intérêt à le renseigner.
                </h2>
                <p class="text-lg md:text-2xl font-medium leading-relaxed opacity-90">
                  L’outil n’est plus vécu comme une contrainte administrative, mais comme un appui au suivi et au travail collectif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ITEM 2 : LA MUTUALISATION -->
      <div class="font-clemente relative mb-8 text-slate-700 w-full">
        <!-- Header avec marge -->
        <!-- Header avec marge -->
        <div @click="toggleCollapse(1)" class="relative z-20 py-8 px-10 md:py-10 md:px-20 flex justify-between items-center select-none bg-[#ff925c] text-white rounded-[50px] shadow-none cursor-pointer hover:bg-[#ff925c] transition-colors w-full">
          <h3 class="text-2xl md:text-4xl font-black uppercase tracking-tight text-left flex-1 pr-8">Quand un besoin devient collectif, la mutualisation fait sens</h3>
          <div class="w-16 h-16 flex items-center justify-center text-5xl font-light transition-transform duration-300 flex-shrink-0" :style="{ transform: activeCollapse === 1 ? 'rotate(45deg)' : 'rotate(0deg)' }">+</div>
        </div>

        <!-- Content Full Width -->
        <div :ref="el => contentRefs[1] = el" class="collapse-content relative z-10 overflow-hidden bg-[#FFF5F0] rounded-none -mt-10 h-0 opacity-0 w-full">
          <div class="px-6 md:px-12 lg:px-20 pb-16 pt-20 flex flex-col gap-10">
            <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div class="flex-1 text-[#03A3B5]">
                <p class="mb-6 font-bold text-lg md:text-xl leading-relaxed">ASSIA est née parce que plusieurs associations exprimaient les mêmes besoins métier, sans trouver de réponse satisfaisante.</p>
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <span class="text-2xl leading-none mt-1 text-orange-400">•</span>
                    <p class="text-lg leading-tight font-medium">Plutôt que de multiplier des développements isolés, nous avons fait le choix de mutualiser les efforts.</p>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-2xl leading-none mt-1 text-orange-400">•</span>
                    <p class="text-lg leading-tight font-medium">co-construire une solution commune et faire évoluer l'outil avec ses utilisateurs.</p>
                  </li>
                </ul>
              </div>
              <div class="flex-1 w-full flex justify-center">
                <img src="/img/assia/5.png" alt="Illustration" class="w-full max-w-md h-[400px] object-cover rounded-[50px] rotate-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ITEM 3 : CO-CONSTRUCTION -->
      <div class="font-clemente relative mb-8 text-slate-700 w-full">
        <div @click="toggleCollapse(2)" class="relative z-20 py-8 px-10 md:py-10 md:px-20 flex justify-between items-center select-none bg-[#ff925c] text-white rounded-[50px] shadow-none cursor-pointer hover:bg-[#ff925c] transition-colors w-full">
          <h3 class="text-2xl md:text-4xl font-black uppercase tracking-tight text-left flex-1 pr-8">
            UN PRODUIT CO-CONSTRUIT AVEC LES PROFESSIONNELS
          </h3>
          <div class="w-16 h-16 flex items-center justify-center text-5xl font-light transition-transform duration-300 flex-shrink-0" :style="{ transform: activeCollapse === 2 ? 'rotate(45deg)' : 'rotate(0deg)' }">+</div>
        </div>

        <div :ref="el => contentRefs[2] = el" class="collapse-content relative z-10 overflow-hidden bg-[#FFF5F0] rounded-none -mt-10 h-0 opacity-0 w-full">
          <div class="px-6 md:px-12 lg:px-20 pb-16 pt-20 flex flex-col gap-10">

            <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-start max-w-7xl mx-auto">
              <div class="flex-1 text-[#03A3B5] space-y-6">
                <p class="font-bold text-lg md:text-xl leading-relaxed">
                  ASSIA a été conçue sur le terrain, directement auprès des professionnels. Chaque évolution est guidée par les pratiques de terrain, pas par une logique de fonctionnalités.
                </p>
                <p class="text-lg font-medium leading-relaxed">
                  Cette approche est rendue possible par la double compétence de notre équipe, issue à la fois du travail social et de l'informatique.
                </p>
                <p class="text-lg font-medium leading-relaxed italic">
                  C'est ce qui nous permet de comprendre les réalités de terrain, les contraintes institutionnelles, et de traduire les pratiques en un système d'information réellement utile.
                </p>
              </div>
              <div class="flex-1 w-full flex justify-center md:justify-end">
                <img src="/img/assia/6.jpg" alt="Co-construction" class="w-full max-w-sm h-auto object-cover rounded-[50px]" />
              </div>
            </div>

            <div class="text-center py-6">
              <h2 class="text-orange-400 text-xl md:text-3xl font-black uppercase max-w-3xl mx-auto tracking-tight">
                LES FONCTIONNALITÉS SONT AU SERVICE DES USAGES MÉTIER.
              </h2>
            </div>

            <div class="flex flex-col gap-12 mt-4 mb-10 max-w-6xl mx-auto w-full">
              
              <div class="action-card-left relative flex items-center">
                <div class="w-full md:w-[92%] border-2 border-orange-300 rounded-[35px] p-8 md:p-10 bg-white/60 shadow-sm relative z-10">
                  <h4 class="text-orange-400 text-xl md:text-2xl font-black mb-4">Gestion locative et organisationnelle :</h4>
                  <p class="text-orange-400 font-bold mb-4">Au cœur des réalités de terrain, ASSIA intègre les fonctionnalités nécessaires à la gestion locative :</p>
                  <ul class="space-y-3 text-orange-400/90 font-medium list-disc pl-6">
                    <li>visibilité sur l'ensemble des places et bâtiments (occupation, vacance, indisponibilité)</li>
                    <li>suivi des interventions et signalements liés au patrimoine</li>
                    <li>transmission facilitée des informations</li>
                  </ul>
                  <p class="mt-6 text-orange-400 italic font-semibold">
                    La communication entre les équipes éducatives et les services support est ainsi fluidifiée.
                  </p>
                </div>
              </div>

              <div class="action-card-right relative flex items-center justify-end">
                <div class="w-full md:w-[92%] border-2 border-orange-300 rounded-[35px] p-8 md:p-10 bg-white/60 shadow-sm relative z-10 text-right">
                  <h4 class="text-orange-400 text-xl md:text-2xl font-black mb-4">Interconnexion SI-SIAO :</h4>
                  <p class="text-orange-400 font-medium text-lg mb-4">
                    ASSIA est aujourd'hui <span class="font-black italic underline">le seul outil proposant une interconnexion opérationnelle avec le SI-SIAO</span> (et sans bug !).
                  </p>
                  <p class="text-orange-400/90 font-bold">
                    Les données saisies dans le SI-SIAO sont récupérées automatiquement dans ASSIA, en un clic, sans ressaisie.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
  </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const activeCollapse = ref(null);
const contentRefs = ref([]);

const toggleCollapse = (index) => {
  
  const currentEl = contentRefs.value[index];
  if (activeCollapse.value === index) {
    gsap.to(currentEl, { height: 0, opacity: 0, duration: 0.5, ease: "power3.inOut" });
    activeCollapse.value = null;
  } else {
    if (activeCollapse.value !== null) {
      const prevEl = contentRefs.value[activeCollapse.value];
      if (prevEl) gsap.to(prevEl, { height: 0, opacity: 0, duration: 0.4, ease: "power3.inOut" });
    }
    activeCollapse.value = index;
    gsap.to(currentEl, { 
      height: "auto", 
      opacity: 1, 
      duration: 0.6, 
      ease: "power3.out",
      onComplete: () => ScrollTrigger.refresh() 
    });
  }
};

onMounted(() => {
  gsap.from(".action-card-left", {
    x: -300,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".action-card-left",
      start: "top 95%",
      scrub: 1
    }
  });

  gsap.from(".action-card-right", {
    x: 300,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".action-card-right",
      start: "top 95%",
      scrub: 1
    }
  });
});
</script>

<style scoped>
.font-clemente { font-family: 'Clemente', sans-serif; font-weight: 900; }
.collapse-content { will-change: height, opacity; }
</style>