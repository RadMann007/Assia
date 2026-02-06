<template>
  <div class="font-clemente w-full min-h-screen bg-white text-slate-700 overflow-x-hidden">
    
    <!-- LOADER AVEC LOGO ASSIA -->
    <div ref="loader" class="fixed inset-0 bg-[#8CD898] z-[100] flex items-center justify-center">
      <div class="relative text-center">
        <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
          <span class="text-6xl md:text-8xl font-bold tracking-tighter">CONTACT</span>
        </div>
        <div class="loader-subtitle opacity-0 text-[#F3F0E7] text-lg mb-6">
          Nous contacter
        </div>
        <div class="loader-progress w-0 h-1 bg-white mt-4"></div>
      </div>
    </div>

    <!-- Navbar (Composant importé) -->
    <NavBar />
    
    <!-- 1. SECTION FORMULAIRE -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-16 mt-36">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        <!-- Colonne Gauche : Titre + Inputs -->
        <div class="flex flex-col gap-8">
          <h1 class="text-5xl md:text-7xl font-black text-[#119DA4] uppercase leading-none tracking-tight">
            NOUS ÉCRIRE
          </h1>

          <div class="space-y-6 mt-2">
            <!-- Input Nom -->
            <div class="flex flex-col gap-2">
              <label class="ml-6 font-bold text-slate-500 text-sm uppercase tracking-wide">Nom*</label>
              <input type="text" 
                     class="w-full border-2 border-[#119DA4] rounded-full py-4 px-8 text-lg focus:outline-none focus:ring-4 focus:ring-[#119DA4]/20 transition-all bg-white" />
            </div>

            <!-- Input Email -->
            <div class="flex flex-col gap-2">
              <label class="ml-6 font-bold text-slate-500 text-sm uppercase tracking-wide">Email*</label>
              <input type="email" 
                     class="w-full border-2 border-[#119DA4] rounded-full py-4 px-8 text-lg focus:outline-none focus:ring-4 focus:ring-[#119DA4]/20 transition-all bg-white" />
            </div>
          </div>

          <!-- Bloc Info Email (En bas de colonne) -->
          <div class="flex items-center gap-4 mt-6 pl-2">
            <div class="w-12 h-12 rounded-full bg-[#119DA4] flex items-center justify-center text-white shrink-0 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p class="text-sm md:text-base leading-tight text-slate-600">
              Vous préférez nous contacter directement, vous pouvez envoyer un email à <br>
              <a href="mailto:emilie@edossah.fr" class="text-[#119DA4] font-black underline decoration-2 underline-offset-2 hover:text-[#0d7a80]">emilie@edossah.fr</a>
            </p>
          </div>
        </div>

        <!-- Colonne Droite : Intro + Textarea + Bouton -->
        <div class="flex flex-col h-full pt-2">
          <p class="text-xl text-[#119DA4] font-medium mb-8 leading-relaxed">
            Si une question persiste, n'hésitez pas à solliciter notre réactivité par le moyen qui vous plaît :
          </p>
          
          <div class="flex-grow flex flex-col gap-6">
            <div class="relative w-full">
                <label class="absolute -top-3 left-8 bg-white px-2 font-bold text-slate-500 text-sm uppercase tracking-wide">Votre message</label>
                <textarea placeholder="..." 
                        class="w-full h-64 md:h-80 border-2 border-[#119DA4] rounded-[35px] p-8 text-lg focus:outline-none focus:ring-4 focus:ring-[#119DA4]/20 transition-all bg-white resize-none"></textarea>
            </div>
            
            <button class="bg-[#119DA4] text-white font-black italic text-xl py-4 px-10 rounded-full shadow-xl hover:bg-[#0e858b] hover:shadow-2xl transition-all hover:-translate-y-1 active:translate-y-0 w-full md:w-auto self-end mt-2">
              Envoyer mon message
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- 2. SECTION INFOS ANIMÉES (Réseaux / Adresse) -->
    <div class="w-full overflow-hidden py-10 mb-10" ref="infoSection">
      <div class="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row gap-8 md:gap-16">
        
        <!-- Carte Gauche : Réseaux -->
        <div class="social-card flex-1 bg-[#119DA4] rounded-[45px] p-8 md:p-12 flex items-center justify-between text-white shadow-2xl relative z-10 opacity-0">
          <h3 class="font-black text-2xl md:text-4xl leading-[1.1] uppercase tracking-wide">
            NOS<br>RÉSEAUX<br>SOCIAUX :
          </h3>
          <div class="flex gap-4">
            <!-- LinkedIn -->
            <a href="#" class="bg-white text-[#119DA4] w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 md:w-10 md:h-10"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <!-- Instagram -->
            <a href="#" class="bg-white text-[#119DA4] w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 md:w-10 md:h-10"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <!-- Carte Droite : Adresse -->
        <div class="address-card flex-1 bg-[#119DA4] rounded-[45px] p-8 md:p-12 flex items-center justify-between text-white shadow-2xl relative z-10 opacity-0">
          <div class="text-xl md:text-3xl font-bold leading-snug">
            La Turbine, 32 boulevard <br> du port, 95000 Cergy
          </div>
          <div class="bg-white text-[#119DA4] w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center shrink-0 shadow-lg">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-7 h-7 md:w-10 md:h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>

      </div>
    </div>


    <!-- 3. SECTION "ET SI ON PARLAIT DE NOUS" -->
    <div class="py-16 md:py-20">
      <h2 class="text-center text-4xl md:text-6xl font-black text-[#119DA4] uppercase mb-12 px-4 leading-tight">
        ET SI ON VOUS PARLAIT <br> UN PEU DE NOUS ?
      </h2>

      <!-- Bloc Bleu Full Width -->
      <div class="w-full bg-[#119DA4] py-16 md:py-24 px-4 shadow-inner">
        <div class="max-w-6xl mx-auto flex flex-col items-center">
          
          <!-- Photo -->
          <div class="w-full md:w-[90%] h-64 md:h-[500px] bg-gray-300 rounded-[40px] overflow-hidden shadow-2xl mb-12 border-8 border-white/20">
             <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop" 
                  alt="Équipe Edossah" 
                  class="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700">
          </div>

          <!-- Chiffre Clé & Texte -->
          <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white">
            <span class="text-[120px] md:text-[180px] font-black italic leading-[0.8] tracking-tighter drop-shadow-lg">12</span>
            <p class="max-w-lg text-center md:text-left text-xl md:text-2xl font-medium leading-relaxed">
              C'est le nombre d'<span class="font-black italic bg-white/20 px-2 rounded-lg">experts</span> chez EDOSSAH, qui unissent leur connaissance des métiers du social à une maîtrise des technologies au service de l'humain.
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- 4. FOOTER TEXT -->
    <div class="pb-24 pt-10 text-center px-4">
      <h2 class="text-4xl md:text-6xl font-black text-[#8CD898] uppercase leading-[0.9] tracking-tight">
        TOUT EN CONSIDÉRANT <br> LES ENJEUX <br> ENVIRONNEMENTAUX
      </h2>
    </div>

  </div>
  <Etude />
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from '../components/NavBar.vue';
import Etude from './Etude.vue';

gsap.registerPlugin(ScrollTrigger);

const loader = ref(null);
const infoSection = ref(null);
let ctx = null;

onMounted(async () => {
  await nextTick();
  
  // ANIMATION DU LOADER ASSIA
  const loaderTl = gsap.timeline();
  loaderTl.to('.loader-text', { opacity: 1, duration: 0.5, delay: 0.2 })
    .to('.loader-subtitle', { opacity: 1, duration: 0.5 }, "-=0.3")
    .to('.loader-progress', { width: '100%', duration: 1.5, ease: 'power2.out' }, '-=0.5')
    .to('.loader-text', { opacity: 0, duration: 0.5, delay: 0.3 })
    .to('.loader-subtitle', { opacity: 0, duration: 0.5 }, "<")
    .to(loader.value, { 
      y: '-100%', 
      duration: 1.2, 
      ease: 'power4.inOut' 
    });

  ctx = gsap.context(() => {
    
    // Animation Carte Gauche (Arrive de la GAUCHE)
    // On utilise fromTo pour éviter que ça disparaisse si on recharge
    gsap.fromTo(".social-card", 
      { x: -200, opacity: 0 }, // DÉPART
      { 
        x: 0, 
        opacity: 1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: infoSection.value,
          start: "top 90%", // Déclenche un peu plus tôt
          end: "top 40%",
          scrub: 1, // Effet fluide lié au scroll
        }
      }
    );

    // Animation Carte Droite (Arrive de la DROITE)
    gsap.fromTo(".address-card", 
      { x: 200, opacity: 0 }, // DÉPART
      { 
        x: 0, 
        opacity: 1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: infoSection.value,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        }
      }
    );

  }, infoSection.value);
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<style scoped>
.font-clemente { font-family: 'Clemente', sans-serif; }
</style>