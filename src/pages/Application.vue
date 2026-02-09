<template>
  <div class="main bg-white font-body min-h-screen selection:bg-[#ff925c] selection:text-white overflow-x-hidden" ref="mainContainer">
    
    <!-- LOADER AVEC LOGO ASSIA -->
    <div ref="loader" class="fixed inset-0 bg-[#ff925c] z-[100] flex items-center justify-center">
      <div class="relative text-center">
        <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
          <span class="text-6xl md:text-8xl font-bold tracking-tighter">ASSIA</span>
        </div>
        <div class="loader-subtitle opacity-0 text-[#F3F0E7] text-lg mb-6">
          L'application métier du social
        </div>
        <div class="loader-progress w-0 h-1 bg-white mt-4"></div>
      </div>
    </div>

    <NavBar />

    <!-- 1. SECTION HERO -->
    <section class="relative font-clemente min-h-screen bg-[#ff925c] pt-32 pb-20 px-0 flex flex-col items-center justify-center text-white text-center overflow-hidden">
      <!-- Container stretches to edges -->
      <div class="w-full flex flex-col md:flex-row justify-center items-stretch gap-0 mb-16 relative z-10">
        <div class="hero-card-left flex-1 bg-white text-[#ff925c] p-10 md:p-16 rounded-r-[60px] md:rounded-r-[80px] rounded-l-none shadow-none">
          <h2 class="text-4xl md:text-6xl font-black uppercase leading-none tracking-tight">À la croisée de<br>l'expertise de l'AHI</h2>
        </div>
        
        <div class="hero-ampersand-container flex items-center justify-center px-6 md:px-12 py-4 z-20">
          <span class="hero-ampersand text-6xl md:text-8xl font-display font-black text-white">&</span>
        </div>

        <div class="hero-card-right flex-1 bg-white text-[#ff925c] p-10 md:p-16 rounded-l-[60px] md:rounded-l-[80px] rounded-r-none shadow-none">
          <h2 class="text-4xl md:text-6xl font-black uppercase leading-none tracking-tight">De la<br>technologie</h2>
        </div>
      </div>
      
      <div class="max-w-5xl stagger-hero mt-8 px-6">
        <p class="text-3xl md:text-5xl font-medium leading-tight">
          Ce n'est pas seulement un outil de reporting pour les financeurs, c'est surtout <b class="font-black">un logiciel du quotidien</b> souhaité par les directions et les travailleurs sociaux.
        </p>
      </div>
    </section>

    <!-- 2. SECTION INTRO -->
    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto p-0 relative overflow-hidden group">
        <div class="flex flex-col items-center gap-16">
          <div class="relative w-full max-w-5xl flex justify-center items-end gap-4 mockup-container">
            <img src="/img/assia/1.png" alt="Logiciel ASSIA" class="w-full h-auto rounded-[54px]">
          </div>
          <h1 ref="textRevealContainer" class="text-4xl md:text-6xl font-black text-[#03A3B5] text-center leading-tight max-w-6xl font-clemente uppercase tracking-tight">
            <span class="reveal-word">ASSIA</span> <span class="reveal-word">est</span> <span class="reveal-word">un</span> <span class="reveal-word">logiciel</span> <span class="reveal-word">métier</span> <span class="reveal-word">co-construit</span> <span class="reveal-word">avec</span> <span class="reveal-word">les</span> <span class="reveal-word">professionnels,</span> <span class="reveal-word">pour</span> <span class="reveal-word">traduire</span> <span class="reveal-word">leurs</span> <span class="reveal-word">pratiques</span> <span class="reveal-word">réelles</span> <span class="reveal-word">en</span> <span class="reveal-word">un</span> <span class="reveal-word">système</span> <span class="reveal-word">d'information</span> <span class="reveal-word">simple,</span> <span class="reveal-word">utile</span> <span class="reveal-word">et</span> <span class="reveal-word">évolutif.</span>
          </h1>
        </div>
      </div>
    </section>

    <!-- 3. SECTION ACCORDION (CONTENU CORRIGÉ SELON L'IMAGE) -->
     <BlocRealite />

    <!-- 4. SECTION EXCLUSION SOCIALE (DESIGN CORRIGÉ) -->
    <section class="pb-20 w-full">
      <!-- Titre retravaillé pour plus d'impact -->
      <h1 class="w-full text-[#03A3B5] text-center font-clemente text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">
        PARCE QU'ON DOIT LUTTER CONTRE <br class="hidden md:block"> L'EXCLUSION SOCIALE !
      </h1>

       <!-- ACCOMPAGNEMENT SOCIAL -->
        <Block2 />

       <!-- TITRE QUE FAIT ASSIA -->
       <h2 class="font-clemente text-[#03A3B5] mt-24 mb-16 text-4xl md:text-7xl font-black uppercase text-center tracking-tighter">
          QUE FAIT ASSIA ?
       </h2>
    </section>

    <!-- 5. SECTION ACTIONS (MANUELLE - SANS BOUCLE) -->
    <section class="py-12 bg-gray-50/50">
        <div class="actions-container flex flex-col gap-24 pb-20 overflow-hidden">
        
        <!-- Bloc 1 : L'outil permet notamment (ORANGE) -->
        <section class="action-section-left mr-4 md:mr-32 border-4 border-l-0 border-[#ff925c] rounded-r-[60px] p-8 md:p-12 bg-white shadow-lg">
            <div class="flex flex-col md:flex-row items-center gap-12">
              <div class="action-content flex-1 flex flex-col gap-4 order-2 md:order-1 w-full">
                  <div class="font-clemente bg-[#ff925c] p-5 rounded-[25px] text-white text-center hover:scale-105 transition-transform shadow-md">
                      <p class="text-lg md:text-xl font-bold uppercase leading-tight">Gestion des mesures avec spécificités</p>
                  </div>
                  <div class="font-clemente bg-[#ff925c] p-5 rounded-[25px] text-white text-center hover:scale-105 transition-transform shadow-md">
                      <p class="text-lg md:text-xl font-bold uppercase leading-tight">Suivi des délais et alertes rapports</p>
                  </div>
                  <div class="font-clemente bg-[#ff925c] p-5 rounded-[25px] text-white text-center hover:scale-105 transition-transform shadow-md">
                      <p class="text-lg md:text-xl font-bold uppercase leading-tight">Génération de convocations</p>
                  </div>
              </div>
              <div class="action-title flex-1 order-1 md:order-2 text-center md:text-left">
                  <h1 class="uppercase text-4xl md:text-6xl font-black font-clemente text-[#ff925c] leading-none">
                      L'outil permet <br>notamment :
                  </h1>
              </div>
            </div>
        </section>

        <!-- Bloc 2 : Structures qui recherchent (BLEU) -->
        <section class="action-section-right ml-4 md:ml-32 border-4 border-r-0 border-[#03A3B5] rounded-l-[60px] p-8 md:p-12 bg-white shadow-lg">
            <div class="flex flex-col md:flex-row-reverse items-center gap-12">
              <div class="action-content flex-1 flex flex-col gap-4 w-full">
                  <div class="font-clemente bg-[#03A3B5] p-6 rounded-[25px] text-white text-center shadow-md hover:scale-105 transition-transform">
                    <p class="text-xl font-bold uppercase">Un logiciel qui plaît aux pros</p>
                  </div>
                  <div class="font-clemente bg-[#03A3B5] p-6 rounded-[25px] text-white text-center shadow-md hover:scale-105 transition-transform">
                    <p class="text-xl font-bold uppercase">Un prestataire expert du métier</p>
                  </div>
                  <div class="font-clemente bg-[#03A3B5] p-6 rounded-[25px] text-white text-center shadow-md hover:scale-105 transition-transform">
                    <p class="text-xl font-bold uppercase">Une solution évolutive et durable</p>
                  </div>
              </div>
              <div class="action-title flex-1 text-center md:text-right">
                  <h1 class="uppercase text-4xl md:text-6xl font-black font-clemente text-[#03A3B5] leading-none">
                      Et surtout à des <br> structures qui :
                  </h1>
              </div>
            </div>
        </section>

        <!-- Bloc 3 : Troisième bloc unique (ORANGE) -->
         <section class="action-section-left mr-4 md:mr-32 border-4 border-l-0 border-[#ff925c] rounded-r-[60px] p-8 md:p-12 bg-white shadow-lg">
            <div class="flex flex-col md:flex-row items-center gap-12">
              <div class="action-content flex-1 flex flex-col gap-4 order-2 md:order-1 w-full">
                  <div class="font-clemente bg-[#ff925c] p-5 rounded-[25px] text-white text-center hover:scale-105 transition-transform shadow-md">
                      <p class="text-lg md:text-xl font-bold uppercase">Centralisation des données</p>
                  </div>
                  <div class="font-clemente bg-[#ff925c] p-5 rounded-[25px] text-white text-center hover:scale-105 transition-transform shadow-md">
                      <p class="text-lg md:text-xl font-bold uppercase">Sécurité et hébergement HDS</p>
                  </div>
              </div>
              <div class="action-title flex-1 order-1 md:order-2 text-center md:text-left">
                  <h1 class="uppercase text-4xl md:text-6xl font-black font-clemente text-[#ff925c] leading-none">
                      Pour une gestion <br>sécurisée :
                  </h1>
              </div>
            </div>
        </section>

        </div>
    </section>

    <!-- 7. SECTION ENGAGEMENT -->
    <section class="pb-32 px-6 flex flex-col gap-12 items-center">
      <h2 class="font-clemente text-[#03A3B5] text-4xl md:text-5xl font-black uppercase text-center tracking-tighter">
        Nous sommes engagés pour soutenir votre impact
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        <div v-for="(item, index) in engagementItems" :key="index" class="engagement-card flex flex-col justify-center items-center p-10 rounded-[50px] bg-orange-400 border-2 border-transparent hover:border-[#ff925c] transition-all duration-500 group shadow-sm hover:shadow-xl">
          <img :src="item.image" :alt="item.title" class="w-28 h-28 object-contain mb-6 " />
          <h3 class="font-clemente text-2xl font-black uppercase mb-4 text-center text-white" >{{ item.title }}</h3>
        </div>
      </div>
    </section>

    <!-- 8. SECTION DECOUVRIR ASSIA -->
     <Block3 />

    <!-- 9. SECTION TEMOIGNAGES -->
    <section class="py-24 px-6 bg-white rounded-t-[100px] shadow-[0_-20px_60px_rgba(0,0,0,0.05)] mt-10 border-t border-orange-100">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="font-clemente text-[#ff925c] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16">
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="(testi, idx) in testimonials" :key="idx" class="testimonial-card bg-[#FFF5F0] border-2 border-orange-100 p-10 rounded-[60px] flex flex-col items-center shadow-lg hover:shadow-2xl transition-all group">
            <div class="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:scale-110 transition-transform">
              <img :src="testi.image" :alt="testi.name" class="w-full h-full object-cover">
            </div>
            <h4 class="font-clemente text-xl font-black uppercase text-gray-800 leading-tight mb-1">{{ testi.name }}</h4>
            <p class="text-sm text-[#ff925c] font-bold mb-4 italic">{{ testi.role }}</p>
            <div class="flex gap-1 mb-6 text-[#ff925c]">
              <Star v-for="s in 5" :key="s" class="w-5 h-5 fill-current" />
            </div>
            <p class="text-gray-600 text-md leading-relaxed italic font-medium">"{{ testi.text }}"</p>
          </div>
        </div>
      </div>
    </section>

  </div>
  <Footer/>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import NavBar from '../components/NavBar.vue';

import { 
  Star
} from 'lucide-vue-next';
import BlocRealite from '../components/Application/BlocRealite.vue';
import Block2 from '../components/Application/Block2.vue';
import Block3 from '../components/Application/Block3.vue';
import Footer from '../components/Footer.vue';

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
  { title: "Assistance", image: "/img/assia/icon/assistance.png", color: "bg-[#ff925c]", textColor: "text-[#ff925c]" },
  { title: "Accompagnement", image: "/img/assia/icon/accompagnement.png", color: "bg-[#03A3B5]", textColor: "text-[#03A3B5]" },
  { title: "Formation", image: "/img/assia/icon/formation.png", color: "bg-[#ff925c]", textColor: "text-[#ff925c]" },
  { title: "Sécurité", image: "/img/assia/icon/security.png", color: "bg-[#03A3B5]", textColor: "text-[#03A3B5]" },
  { title: "Adaptabilité", image: "/img/assia/icon/adaptability.png", color: "bg-[#ff925c]", textColor: "text-[#ff925c]" },
  { title: "Évolutivité", image: "/img/assia/icon/evolution.png", color: "bg-[#03A3B5]", textColor: "text-[#03A3B5]" }
];

const testimonials = [
  { name: "Kassim Said Abdou", role: "Directeur de Esperer 95", image: "https://randomuser.me/api/portraits/men/32.jpg", text: "Très satisfait(e) de mon expérience ! Le service est professionnel." },
  { name: "Sandra Aldi Bara", role: "Directrice de Esperer 95", image: "https://randomuser.me/api/portraits/women/44.jpg", text: "Un outil métier co-construit qui s'adapte réellement." },
  { name: "Christoph Daniel", role: "Directeur de Esperer 95", image: "https://randomuser.me/api/portraits/men/45.jpg", text: "Une approche innovante pour le secteur AHI." }
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

  gsap.from(".hero-card-left", { x: -300, opacity: 0, rotate: -10, duration: 1.5, ease: "power4.out", delay: 2.5 });
  gsap.from(".hero-card-right", { x: 300, opacity: 0, rotate: 10, duration: 1.5, ease: "power4.out", delay: 2.5 });
  gsap.from(".hero-ampersand", { scale: 0, opacity: 0, duration: 1, delay: 3.3, ease: "back.out(1.7)" });
  gsap.from(".stagger-hero", { y: 50, opacity: 0, duration: 1, delay: 3.5, ease: "power3.out" });

  gsap.from(".action-section-left", {
    x: -300, opacity: 0, duration: 1.2, ease: "expo.out",
    scrollTrigger: { trigger: ".action-section-left", start: "top 85%" }
  });

  gsap.from(".action-section-right", {
    x: 300, opacity: 0, duration: 1.2, ease: "expo.out",
    scrollTrigger: { trigger: ".action-section-right", start: "top 85%" }
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inter:wght@400;500;700;900&display=swap');
.font-clemente { font-family: 'Clemente', 'Inter', sans-serif; font-weight: 900; }
body { font-family: 'Inter', sans-serif; overflow-x: hidden; }
.font-display { font-family: 'Montserrat', sans-serif; }
.marquee-track { animation: marquee 40s linear infinite; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.fade-mask { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
</style>