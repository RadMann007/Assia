<template>
  <div class="font-clemente relative mb-20 text-slate-700 w-full">
    
    <div @click="toggleDiscovery" 
         class="relative z-20 py-6 px-6 md:px-16 mx-0 md:mx-0 flex justify-between items-center select-none bg-[#ff925c] text-white rounded-[50px] cursor-pointer hover:bg-[#ff925c] transition-all active:scale-95 w-full">
      <h3 class="text-lg md:text-3xl font-black uppercase tracking-wider text-left flex-1 pr-4 md:pr-8 leading-tight">
        DÉCOUVRIR ASSIA DANS VOTRE CONTEXTE
      </h3>
      <div class="right-6 md:right-10 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center text-3xl md:text-5xl font-light transition-transform duration-500 flex-shrink-0"
           :style="{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }">+
      </div>
    </div>

    <div ref="contentRef"
         class="relative z-10 overflow-hidden bg-white rounded-none -mt-12 h-0 opacity-0 w-full">
         
        <div class="px-4 md:px-10 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-16  max-w-7xl mx-auto">
          
          <div class="anim-left flex-1 space-y-6">
            <h1 class="font-clementeMini text-[var(--accent)] text-xl md:text-4xl font-black leading-tight">
              Chaque structure est différente et a ses propres besoins
            </h1>
            <p class="text-[var(--primary)] font-clementeMini text-base md:text-3xl leading-relaxed">
              C’est pourquoi, dès l’origine, la conception d’ASSIA a été pensée comme celle d’un outil s’adaptant au plus près des réalités de terrain. 
              Et la diversité des associations déjà outillées nous permet de vous indiquer comment ASSIA peut - ou non - répondre à vos besoins.
            </p>
          </div>

          <div class="anim-right flex-1 relative">
            <div class="absolute -inset-4 bg-[#ff925c] rounded-full blur-3xl opacity-10"></div>
            <img src="/img/assia/2.png" 
                 alt="Logiciel ASSIA sur ordinateur" 
                 class="w-full h-auto transform relative z-10 rounded-[30px] md:rounded-[50px]">
          </div>
       </div>
        <div class="pt-4 flex justify-center">
               <a href="/application" class="italic font-clementeMini inline-block text-white bg-[#ff925c] text-lg md:text-xl lg:text-2xl py-4 md:py-5 px-8 md:px-12 rounded-full cursor-pointer hover:scale-105 transition-transform">
                 Voir des cas d'usage
               </a>
            </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isOpen = ref(false);
const contentRef = ref(null);

const toggleDiscovery = () => {
  if (isOpen.value) {
    // Fermeture
    gsap.to(contentRef.value, { 
      height: 0, 
      opacity: 0, 
      duration: 0.5, 
      ease: "power3.inOut" 
    });
    isOpen.value = false;
  } else {
    // Ouverture
    isOpen.value = true;
    const el = contentRef.value;

    gsap.to(el, { 
      height: "auto", 
      opacity: 1, 
      duration: 0.6, 
      ease: "power3.out"
    });

    // Animate inner content
    const animLeft = el.querySelectorAll('.anim-left');
    const animRight = el.querySelectorAll('.anim-right');

    if (animLeft.length) gsap.fromTo(animLeft, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.2, stagger: 0.1 });
    if (animRight.length) gsap.fromTo(animRight, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.2, stagger: 0.1 });
  }
};
</script>

<style scoped>
/* Assure-toi que la police Clemente est bien importée dans ton projet */
.font-clemente { 
  font-family: 'Clemente', sans-serif; 
}
</style>