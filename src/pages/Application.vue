<template>
  <div class="main bg-white font-body min-h-screen selection:bg-[var(--accent)] selection:text-white overflow-x-hidden" ref="mainContainer">
    
    <!-- LOADER AVEC LOGO ASSIA -->
    <div ref="loader" class="fixed inset-0 bg-[var(--accent)] z-[100] flex items-center justify-center">
      <div class="relative text-center">
        <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
          <span class=" font-clemente text-6xl md:text-8xl font-bold tracking-tighter">ASSIA</span>
        </div>
        <div class="font-clemente loader-subtitle opacity-0 text-[#F3F0E7] text-lg mb-6">
          L'application métier du social
        </div>
        <div class="loader-progress w-0 h-1 bg-white mt-4"></div>
      </div>
    </div>

    <NavBar />

    <!-- 1. SECTION HERO -->
    <section class="relative min-h-screen bg-[var(--accent)] pt-32 pb-20 px-0 flex flex-col items-center justify-center text-white text-center overflow-hidden">
      <!-- Container stretches to edges -->
      <div class="w-full flex flex-col md:flex-row justify-center items-stretch gap-0 mb-16 relative z-10">
        <div class="hero-card-left flex-1 bg-white text-[var(--accent)] p-10 md:p-16 rounded-r-[60px] md:rounded-r-[50px] rounded-l-none shadow-none" style="align-content: center;">
          <!-- animer de gauche vers le centre -->
          <h2 class="text-3xl md:text-4xl font-black uppercase leading-none tracking-tight font-clemente text-right">À la croisée de l'expertise de l'AHI</h2>
        </div>
        
        <div class="hero-ampersand-container flex items-center justify-center px-6 md:px-6 py-4 z-20">
          <span class=" font-clemente hero-ampersand text-4xl md:text-5xl font-display font-black text-white">&</span>
        </div>

        <div class="hero-card-right flex-1 bg-white text-[var(--accent)] p-10 md:p-16 rounded-l-[60px] md:rounded-l-[50px] rounded-r-none shadow-none" style="align-content: center;">
          <!-- animer de droite vers le centre -->
          <h2 class="text-3xl md:text-4xl text-left font-black uppercase leading-none tracking-tight font-clemente">De la technologie</h2>
        </div>
      </div>
      <!-- Flèches sous les cards -->
      <div class=" absolute left-0 right-0 flex justify-around px-16 z-20">
        <button class="md:text-8xl text-white text-4xl transition-transform duration-300 hover:translate-x-2">→</button>
        <button class="md:text-8xl text-white text-4xl transition-transform duration-300 hover:-translate-x-2">←</button> 
      </div>

      <div class="max-w-4xl stagger-hero mt-8 ">
        <p class="text-[22px] md:text-[40px] font-clementeMini leading-tight">
          Ce n’est pas seulement un outil de reporting,<br /> c’est surtout <b class="italic">un logiciel du quotidien</b> utile aux professionnels de terrain
        </p>
      </div>
    </section>

    <!-- 2. SECTION INTRO -->
    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto p-0 relative overflow-hidden group">
        <div class="flex flex-col items-center gap-16">
          <div class="relative w-full max-w-4xl flex justify-center items-end gap-4 mockup-container">
            <img src="/img/assia/1.png" alt="Logiciel ASSIA" class="w-full h-auto rounded-[50px]">
          </div>
          <h1 ref="textRevealContainer" class="text-3xl md:text-[40px] font-black text-[var(--primary)] text-center leading-tight max-w-4xl font-clemente tracking-tight">
            <span class="reveal-word">ASSIA</span> <span class="reveal-word">est</span> <span class="reveal-word">un</span> <span class="reveal-word">logiciel</span> <span class="reveal-word">métier</span> <span class="reveal-word">co-construit</span> <span class="reveal-word">avec</span> <span class="reveal-word">les</span> <span class="reveal-word">professionnels,</span> <span class="reveal-word">pour</span> <span class="reveal-word">traduire</span> <span class="reveal-word">leurs</span> <span class="reveal-word">pratiques</span> <span class="reveal-word">réelles</span> <span class="reveal-word">en</span> <span class="reveal-word">un</span> <span class="reveal-word">système</span> <span class="reveal-word">d'information</span> <span class="reveal-word">simple,</span> <span class="reveal-word">utile</span> <span class="reveal-word">et</span> <span class="reveal-word">évolutif.</span>
          </h1>
        </div>
      </div>
    </section>

    <!-- 3. SECTION ACCORDION (CONTENU CORRIGÉ SELON L'IMAGE) -->
     <section class="mx-[10%]">
       <BlocRealite />
     </section>

    <!-- 4. SECTION EXCLUSION SOCIALE (DESIGN CORRIGÉ) -->
    <section class="pb-20 w-full">
      <!-- Titre retravaillé pour plus d'impact -->
      <h1 class="w-full text-[var(--primary)] tracking-wider text-center font-clementeMini text-4xl md:text-6xl font-black uppercase mb-12">
        PARCE QU'ON DOIT LUTTER CONTRE <br class="hidden md:block"> <p class="font-clemente italic">L'EXCLUSION SOCIALE ! </p> 
      </h1>

       <!-- ACCOMPAGNEMENT SOCIAL -->
        <div class="mx-[10%]">
          <Block2 />
        </div>

       <!-- TITRE QUE FAIT ASSIA -->
       <h2 class="font-clemente text-[var(--primary)] text-4xl md:text-8xl font-black uppercase text-center tracking-tighter py-24">
          QUE FAIT ASSIA ?
       </h2>
    </section>

    <!-- 5. SECTION ACTIONS (MANUELLE - SANS BOUCLE) -->
    <section class="bg-gray-50/50">
        <div class="actions-container flex flex-col gap-24 pb-20 overflow-hidden">
        
          <!-- Bloc 1 : L'outil permet notamment (ORANGE) -->
          <Role1 />

          <!-- Bloc 2 : Structures qui recherchent (BLEU) -->
          <Role2 />

          <!-- Bloc 3 : Troisième bloc unique (ORANGE) -->
          <Role3 />

        </div>
    </section>

    <!-- 7. SECTION ENGAGEMENT -->
    <section class="pb-32 px-6 flex flex-col gap-12 items-center">
      <h2 class="font-clemente text-[var(--primary)] text-4xl mx-[15%] md:text-5xl font-black uppercase text-center tracking-wider">
        Nous sommes engagés pour soutenir votre impact
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        <div v-for="(item, index) in engagementItems" :key="index" class="engagement-card flex flex-col justify-center items-center p-10 rounded-[50px] bg-orange-400 border-2 border-transparent hover:border-[var(--accent)] transition-all duration-500 group shadow-sm hover:shadow-xl">
          <img :src="item.image" :alt="item.title" class="w-28 h-28 object-contain mb-6 " />
          <h3 class="font-clemente text-2xl font-black uppercase mb-4 text-center text-white" >{{ item.title }}</h3>
        </div>
      </div>
    </section>

    <!-- 8. SECTION DECOUVRIR ASSIA -->
     <section class="mx-[10%]">
       <Block3 />
     </section>

    <!-- 9. SECTION TEMOIGNAGES -->
    <section class="py-24 px-6 bg-white ">
      <div class="max-w-7xl mx-auto text-center font-clemente">
        <h2 class="font-clemente text-[var(--accent)] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16">
          Ils témoignent de <br> notre engagement
        </h2>
        <section class="py-10 overflow-hidden mb-20">
          <div class="w-full relative fade-mask">
            <div class="flex items-center gap-20 md:gap-32 w-max marquee-track">
              <div v-for="(p, index) in [...partners, ...partners]" :key="index" class="flex-shrink-0">
                <img :src="p.logo" :alt="p.name" class="h-14 md:h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer object-contain" />
              </div>
            </div>
          </div>
        </section>
        <Temoignage />
      </div>
    </section>

  </div>
  <section class="py-24">

      <h1 class="text-6xl font-clemente mt-4 md:text-8xl text-center text-[var(--accent)] font-black font-display uppercase px-4 leading-[0.9] tracking-tighter mb-16">
        Des Questions ?
      </h1>

      <a href="/contact" class="text-[var(--accent)] border-4 border-[var(--accent)] flex justify-center w-fit mx-auto text-xl md:text-2xl py-5 px-12 rounded-xl uppercase font-clementeMini cursor-pointer">
        Par ici les réponses ...
      </a>
    </section>

    <section class="py-24 border-4 border-[var(--accent)] bg-[var(--accent)]/20 w-fit  mx-auto rounded-[34px] mt-14">
      <h2 class="text-4xl md:text-6xl text-center mx-[20%] text-[var(--accent)] font-black font-display uppercase font-clemente px-4 leading-[0.9] tracking-tighter mb-16">
        Besoin de plus d'informations ?
      </h2>
      <button class="text-white font-clementeMini tracking-wider italic font-bold bg-[var(--accent)] border-4 border-[var(--accent)] flex justify-center w-fit mx-auto text-xl md:text-2xl py-5 px-12 rounded-xl cursor-pointer">
        Ecrivez-nous
      </button>
    </section>
  <Footer/>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import NavBar from '../components/NavBar.vue';
import Temoignage from '../components/Application/Temoignage.vue'; // New import

import BlocRealite from '../components/Application/BlocRealite.vue';
import Block2 from '../components/Application/Block2.vue';
import Block3 from '../components/Application/Block3.vue';
import Footer from '../components/Footer.vue';
import Role1 from '../components/RoleApplication/Role1.vue';
import Role2 from '../components/RoleApplication/Role2.vue';
import Role3 from '../components/RoleApplication/Role3.vue';

gsap.registerPlugin(ScrollTrigger);

const loader = ref(null);
const textRevealContainer = ref(null);
const activeCollapse = ref(null);
const contentRefs = ref([]);
const isSocialOpen = ref(false); 
const socialContentRef = ref(null);

const partners = [
  { name: 'Varile', logo: 'https://edossah.fr/wp-content/uploads/2024/09/LOGO-ARILE-removebg-preview.png' },
  { name: 'Espérer 95', logo: 'https://edossah.fr/wp-content/uploads/2024/08/logo_esperer95.png' },
  { name: 'Croix-Rouge', logo: 'https://edossah.fr/wp-content/uploads/2024/11/logo_CRF-removebg-preview.png' },
  { name: 'Equal', logo: 'https://edossah.fr/wp-content/uploads/2024/08/logo-equalis2.png' },
  { name: 'ajhiralp', logo: 'https://edossah.fr/wp-content/uploads/2024/09/logo-ajhiralp-removebg-preview.png' },
  { name: 'siao', logo: 'https://edossah.fr/wp-content/uploads/2024/08/logo-siao.png' },
  { name: 'REVIVRE', logo: 'https://edossah.fr/wp-content/uploads/2025/07/Logo-REVIVRE-couleur-002.jpg.jpg' },
  { name: 'aide-penale', logo: 'https://edossah.fr/wp-content/uploads/2025/07/aide-penale.png' },
  { name: 'emaus', logo: 'https://edossah.fr/wp-content/uploads/2025/07/emaus-logo.png' },
  { name: 'ATELIER_LC_cmjn', logo: 'https://edossah.fr/wp-content/uploads/2025/07/ATELIER_LC_cmjn-68addd49.jpeg' },
];

const engagementItems = [
  { title: "Assistance", image: "/img/assia/icon/assistance.png", color: "bg-[var(--accent)]", textColor: "text-[var(--accent)]" },
  { title: "Accompagnement", image: "/img/assia/icon/accompagnement.png", color: "bg-[var(--primary)]", textColor: "text-[var(--primary)]" },
  { title: "Formation", image: "/img/assia/icon/formation.png", color: "bg-[var(--accent)]", textColor: "text-[var(--accent)]" },
  { title: "Sécurité", image: "/img/assia/icon/security.png", color: "bg-[var(--primary)]", textColor: "text-[var(--primary)]" },
  { title: "Adaptabilité", image: "/img/assia/icon/adaptability.png", color: "bg-[var(--accent)]", textColor: "text-[var(--accent)]" },
  { title: "Évolutivité", image: "/img/assia/icon/evolution.png", color: "bg-[var(--primary)]", textColor: "text-[var(--primary)]" }
];



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
    gsap.to(currentEl, { height: "auto", opacity: 1, duration: 0.6, ease: "power3.out" });
  }
};

const toggleSocial = () => {
    isSocialOpen.value = !isSocialOpen.value;
    if (isSocialOpen.value) {
        gsap.to(socialContentRef.value, { height: "auto", opacity: 1, duration: 0.6, ease: "power3.out" });
    } else {
        gsap.to(socialContentRef.value, { height: 0, opacity: 0, duration: 0.5, ease: "power3.inOut" });
    }
};

onMounted(async () => {
  await nextTick();
  
  const lenis = new Lenis({ duration: 1.2 });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);

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

  gsap.from(".hero-card-left", { x: -800, opacity: 0, rotate: -10, duration: 1.8, ease: "power4.out", delay: 2.2 });
  gsap.from(".hero-card-right", { x: 800, opacity: 0, rotate: 10, duration: 1.8, ease: "power4.out", delay: 2.2 });
  gsap.from(".hero-ampersand", { scale: 0, opacity: 0, duration: 1.2, delay: 3.0, ease: "back.out(2)" });
  gsap.from(".stagger-hero", { y: 100, opacity: 0, duration: 1.2, delay: 3.2, ease: "power3.out" });

  // ANIMATIONS DES COMPOSANTS ROLE (SLIDE COMPLET)
  gsap.utils.toArray(".action-section-left").forEach(section => {
    gsap.from(section, {
      x: -300,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 95%",
        end: "top 70%",
        scrub: 1
      }
    });
  });

  gsap.utils.toArray(".action-section-right").forEach(section => {
    gsap.from(section, {
      x: 300,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 95%",
        end: "top 70%",
        scrub: 1
      }
    });
  });


  // ANIMATION DE TEXTE RÉVÉLATION AU SCROLL
  const textWords = document.querySelectorAll('.reveal-word');
  if (textWords.length > 0) {
    gsap.set(textWords, { opacity: 0.15 });
    
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: textRevealContainer.value,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      }
    });
    
    textWords.forEach((word, i) => {
      textTl.to(word, {
        opacity: 1,
        duration: 0.1,
        ease: "power2.out"
      }, i * 0.05);
    });
  }
});
</script>

<style>
.font-clemente { font-family: 'Clemente', 'Inter', sans-serif; font-weight: 900; }
body { font-family: 'Inter', sans-serif; overflow-x: hidden; }
.font-display { font-family: 'Montserrat', sans-serif; }
.marquee-track { animation: marquee 40s linear infinite; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.fade-mask { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
</style>