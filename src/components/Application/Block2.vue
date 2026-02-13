<template>
  <div class="font-clemente relative mb-12 text-slate-700 w-full">
    
    <!-- BOUTON D'OUVERTURE -->
    <div @click="toggleSocial" 
         class="relative z-20 py-8 px-10 md:px-16 mx-0 md:mx-0 flex justify-between items-center select-none bg-[#ff925c] text-white rounded-[50px] shadow-none cursor-pointer hover:bg-[#ff925c] transition-all active:scale-95 w-full">
      <h3 class="text-2xl md:text-4xl font-black uppercase tracking-tight text-left flex-1 pr-8 leading-tight">
        ASSIA S'ADRESSE AUX STRUCTURES <br class="md:hidden"> D'ACCOMPAGNEMENT SOCIAL
      </h3>
      <div class="w-16 h-16 flex items-center justify-center text-5xl font-light transition-transform duration-500 flex-shrink-0"
           :style="{ transform: isSocialOpen ? 'rotate(45deg)' : 'rotate(0deg)' }">+
      </div>
    </div>

    <!-- CONTENU ACCORDÉON -->
    <div ref="socialContainer"
         class="relative z-10 overflow-hidden bg-white rounded-none -mt-12 h-0 opacity-0 w-full">
         
       <div class="px-6 md:px-16 py-20 flex flex-col items-center gap-12 pt-32 max-w-7xl mx-auto">
          
          <div class="flex flex-col lg:flex-row items-center gap-12 w-full">
            <div class="w-full lg:w-1/3 relative">
              <div class="absolute -inset-2 bg-[#ff925c] rounded-[45px] rotate-2 opacity-20"></div>
              <div class="w-full h-[400px] rounded-[40px] overflow-hidden relative z-10">
                 <img src="/img/assia/7.jpg" alt="Bénéficiaire" class="w-full h-full object-cover">
              </div>
            </div>

            <div class="w-full lg:w-2/3">
              <ul class="space-y-4 text-[#ff925c] font-bold text-3xl md:text-4xl">
                <li class="flex items-center gap-3"><span class="text-4xl">•</span> Hébergement d'urgence</li>
                <li class="flex items-center gap-3"><span class="text-4xl">•</span> Hébergement d'insertion</li>
                <li class="flex items-center gap-3"><span class="text-4xl">•</span> Accompagnement Vers et Dans le Logement</li>
                <li class="flex items-center gap-3"><span class="text-4xl">•</span> Logement accompagné</li>
                <li class="flex items-center gap-3"><span class="text-4xl">•</span> Veille sociale (aller-vers, accueil, orientation...)</li>
                <li class="flex items-center gap-3"><span class="text-4xl">•</span> Activités socio-judiciaires</li>
              </ul>
            </div>
          </div>

          <div class="w-full bg-white/40 p-8">
            <p class="text-[#03A3B5] font-bold text-2xl md:text-4xl leading-relaxed">
              ASSIA est bien adaptée aux activités pré et post-sentencielles :
              <span class="">
                hébergement sortant de prison, placement extérieur, CJSE, CPPV, composition pénale, sursis probatoire, ESR, enquêtes de personnalité, stages de responsabilité, médiation pénale, réparation pénale des mineurs etc.
              </span>
            </p>
          </div>

          <div class="w-full space-y-10 overflow-hidden py-10">
            <!-- CARTE GAUCHE (anim-left) -->
            <div class="anim-left relative flex items-center">
              <div class="w-full md:w-[85%] bg-white p-8 md:p-10 rounded-[40px] border-2 border-orange-200 shadow-sm relative z-10">
                <h4 class="text-[#ff925c] text-3xl font-black mb-6 uppercase">L'outil permet notamment :</h4>
                <ul class="space-y-3 text-[#ff925c]/80 font-semibold list-disc pl-6 text-2xl md:text-3xl">
                  <li>la gestion de tous les types de mesures avec leurs spécificités</li>
                  <li>le suivi des délais d'envoi des rapports (tranches, alertes)</li>
                  <li>la génération de convocations</li>
                  <li>la gestion des renvois d'audience</li>
                  <li>l'intégration des référents par tribunal</li>
                </ul>
              </div>
            </div>

            <!-- CARTE DROITE (anim-right) -->
            <div class="anim-right relative flex items-center justify-end">
              <div class="w-full md:w-[85%] bg-white p-8 md:p-10 rounded-[40px] border-2 border-orange-200 shadow-sm relative z-10 text-right">
                <h4 class="text-[#ff925c] text-3xl font-black mb-6 uppercase">Et surtout à des structures qui recherchent :</h4>
                <ul class="space-y-3 text-[#ff925c]/80 font-semibold list-none text-2xl md:text-3xl">
                  <li>un logiciel qui plaît à leurs professionnels</li>
                  <li>un prestataire à l'écoute qui connaît le métier</li>
                  <li>une solution évolutive, construite pour durer</li>
                </ul>
              </div>
            </div>
          </div>

       </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isSocialOpen = ref(false);
const socialContainer = ref(null);
let ctx = null; // Contexte GSAP pour le nettoyage propre

const toggleSocial = async () => {
  // Si c'est déjà ouvert, on ferme
  if (isSocialOpen.value) {    
    gsap.to(socialContainer.value, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        isSocialOpen.value = false;
        ScrollTrigger.refresh();
      }
    });
    return;
  }

  // Si c'est fermé, on ouvre
  isSocialOpen.value = true;
  await nextTick(); // On attend que Vue affiche le DOM

  gsap.to(socialContainer.value, {
    height: "auto",
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
    onComplete: () => {
      ScrollTrigger.refresh();
    }
  });
};

onMounted(() => {
  ctx = gsap.context(() => {
    // Animation CARTE GAUCHE
    gsap.from(".anim-left", {
      x: -300,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".anim-left",
        start: "top 95%",
        scrub: 1
      }
    });

    // Animation CARTE DROITE
    gsap.from(".anim-right", {
      x: 300,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".anim-right",
        start: "top 95%",
        scrub: 1
      }
    });
  });
});

// Sécurité : nettoyage si on quitte la page
onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>


<style scoped>
.font-clemente { font-family: 'Clemente', sans-serif; }
h3, h4, .font-black { font-weight: 900; }
</style>