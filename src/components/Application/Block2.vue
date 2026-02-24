<template>
  <div class="font-clemente relative mb-12 text-slate-700 w-full">
    
    <!-- BOUTON D'OUVERTURE -->
    <div @click="toggleSocial" 
         class="relative z-20 py-6 px-6 md:px-16 mx-0 md:mx-0 flex justify-between items-center select-none bg-[#ff925c] text-white rounded-[50px] shadow-none cursor-pointer hover:bg-[#ff925c] transition-all active:scale-95 w-full">
      <h3 class="text-lg md:text-4xl font-black uppercase tracking-tight text-left flex-1 pr-4 md:pr-8 leading-tight">
        ASSIA S'ADRESSE AUX STRUCTURES <br class="md:hidden"> D'ACCOMPAGNEMENT SOCIAL
      </h3>
      <div class="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center text-3xl md:text-5xl font-light transition-transform duration-500 flex-shrink-0"
           :style="{ transform: isSocialOpen ? 'rotate(45deg)' : 'rotate(0deg)' }">+
      </div>
    </div>

    <!-- CONTENU ACCORDÉON -->
    <div ref="socialContainer"
         class="relative z-10 overflow-hidden bg-white rounded-none -mt-12 h-0 opacity-0 w-full">
         
       <div class="px-4 md:px-16 py-12 md:py-20 flex flex-col items-center gap-8 md:gap-12 pt-16 md:pt-32 max-w-7xl mx-auto">
          
          <div class="anim-left flex flex-col lg:flex-row items-center gap-12 w-full">
            <div class="w-full lg:w-1/3 relative">
              <div class="w-full h-[250px] md:h-[400px] rounded-[30px] md:rounded-[40px] overflow-hidden relative z-10">
                 <img src="/img/assia/7.jpg" alt="Bénéficiaire" class="w-full h-full object-cover">
              </div>
            </div>

            <div class=" anim-right w-full lg:w-2/3">
              <ul class="space-y-3 md:space-y-4 text-[#ff925c] font-bold text-lg md:text-4xl">
                <li class="flex items-center gap-2 md:gap-3"><span class="text-xl md:text-4xl">•</span> Hébergement d'urgence</li>
                <li class="flex items-center gap-2 md:gap-3"><span class="text-xl md:text-4xl">•</span> Hébergement d'insertion</li>
                <li class="flex items-center gap-2 md:gap-3"><span class="text-xl md:text-4xl">•</span> Accompagnement Vers et Dans le Logement</li>
                <li class="flex items-center gap-2 md:gap-3"><span class="text-xl md:text-4xl">•</span> Logement accompagné</li>
                <li class="flex items-center gap-2 md:gap-3"><span class="text-xl md:text-4xl">•</span> Veille sociale (aller-vers, accueil, orientation...)</li>
                <li class="flex items-center gap-2 md:gap-3"><span class="text-xl md:text-4xl">•</span> Activités socio-judiciaires</li>
              </ul>
            </div>
          </div>

          <div class="w-full bg-white/40 p-8">
            <p class="text-[var(--primary)] text-center font-clementePdai text-[40px] md:text-4xl leading-relaxed font-thin">
              ASSIA est bien adaptée aux activités pré et post-sentencielles :
              <span class="">
                hébergement sortant de prison, placement extérieur, CJSE, CPPV, composition pénale, sursis probatoire, ESR, enquêtes de personnalité, stages de responsabilité, médiation pénale, réparation pénale des mineurs etc.
              </span>
            </p>
          </div>

          <div class="w-full space-y-10 overflow-hidden py-10 bg-[#FFF3EE] p-4 rounded-xl">
            <!-- CARTE GAUCHE (action-card-left) -->
            <div class="action-card-left relative flex items-center ">
              <div class="rounded-r-[35px] rounded-l-nonep-5 md:p-10  border-2 border-[var(--accent)] shadow-sm relative z-10 border-l-0">
                <h4 class="text-[#ff925c] text-xl md:text-[45px] font-clementePdak mb-4 md:mb-10">L'outil permet notamment :</h4>
                <ul class="space-y-2 md:space-y-3 text-[var(--accent)] font-semibold list-disc pl-5 md:pl-6 text-base md:text-3xl">
                  <li>la gestion de tous les types de mesures avec leurs spécificités</li>
                  <li>le suivi des délais d'envoi des rapports (tranches, alertes)</li>
                  <li>la génération de convocations</li>
                  <li>la gestion des renvois d'audience</li>
                  <li>l'intégration des référents par tribunal</li>
                </ul>
              </div>
            </div>

            <!-- CARTE DROITE (action-card-right) -->
            <div class="action-card-right relative flex items-center justify-end">
              <div class="rounded-l-[35px] rounded-r-nonep-5 md:p-10  border-2 border-[var(--accent)] shadow-sm relative z-10 border-r-0 text-left">
                <h4 class="text-[#ff925c] text-xl md:text-[45px] font-clementePdak mb-4 md:mb-10 leading-tight">Et surtout à des structures qui recherchent :</h4>
                <ul class="space-y-2 md:space-y-3 text-[var(--accent)] font-semibold list-disc pl-5 md:pl-6 text-base md:text-3xl">
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

  const el = socialContainer.value;

  gsap.to(el, {
    height: "auto",
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
    onComplete: () => {
      ScrollTrigger.refresh();
    }
  });

  // Animate inner content (immediate on open)
  const animLeft = el.querySelectorAll('.anim-left');
  const animRight = el.querySelectorAll('.anim-right');

  if (animLeft.length) gsap.fromTo(animLeft, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.2, stagger: 0.1 });
  if (animRight.length) gsap.fromTo(animRight, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.2, stagger: 0.1 });

  // Cards: ScrollTrigger + scrub
  const cardLeft = el.querySelectorAll('.action-card-left');
  const cardRight = el.querySelectorAll('.action-card-right');

  cardLeft.forEach(card => {
    gsap.fromTo(card, { x: -300, opacity: 0 }, {
      x: 0, opacity: 1,
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        end: 'top 40%',
        scrub: 1,
      }
    });
  });

  cardRight.forEach(card => {
    gsap.fromTo(card, { x: 300, opacity: 0 }, {
      x: 0, opacity: 1,
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        end: 'top 40%',
        scrub: 1,
      }
    });
  });
};

// Pas d'animations globales au montage pour éviter les conflits
</script>


<style scoped>
.font-clemente { font-family: 'Clemente', sans-serif; }
h3, h4, .font-black { font-weight: 900; }
</style>