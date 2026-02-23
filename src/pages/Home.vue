<script setup>
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import Temoignage from '../components/Application/Temoignage.vue';

gsap.registerPlugin(ScrollTrigger);

const loader = ref(null);
const textRevealContainer = ref(null);

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

const approachItems = [
  { title: "Comprendre le terrain", content: "Analyse des pratiques métier, des flux réels et des contraintes spécifiques à chaque structure." },
  { title: "Co-construire avec les équipes", content: "Ateliers, tests utilisateurs et itérations continues pour concevoir des outils réellement utiles." },
  { title: "Livrer vite pour rassurer", content: "Des cycles courts permettant de proposer rapidement des versions opérationnelles, testables et ajustables." },
  { title: "Penser dans la durée", content: "Des architectures évolutives capables d’accompagner les changements de dispositifs, de réglementation et de montée en charge." }
];

const itemStates = ref(approachItems.map(() => false));
const isComplexOpen = ref(false);

const toggleItem = (index) => {
  itemStates.value[index] = !itemStates.value[index];
  // Utilisation de nextTick pour s'assurer que le DOM est mis à jour avant l'animation GSAP
  nextTick(() => {
    const contents = document.querySelectorAll('.approach-content');
    const icons = document.querySelectorAll('.approach-icon');
    if (contents[index] && icons[index]) {
        const content = contents[index];
        const icon = icons[index];
        if (itemStates.value[index]) {
          gsap.to(content, { height: "auto", opacity: 1, duration: 0.6, ease: "power3.out", paddingBottom: "1.5rem" }); // paddingBottom réduit pour mobile
          gsap.to(icon, { rotate: 45, duration: 0.3 });
        } else {
          gsap.to(content, { height: 0, opacity: 0, duration: 0.5, ease: "power3.inOut", paddingBottom: "0rem" });
          gsap.to(icon, { rotate: 0, duration: 0.3 });
        }
    }
  });
};

const toggleComplex = () => {
  isComplexOpen.value = !isComplexOpen.value;
  nextTick(() => {
      const content = document.querySelector('.complex-content');
      const icon = document.querySelector('.complex-icon');
      if (content && icon) {
        if (isComplexOpen.value) {
          gsap.to(content, { height: "auto", opacity: 1, duration: 0.6, ease: "power3.out", paddingBottom: "1.5rem" });
          gsap.to(icon, { rotate: 45, duration: 0.3 });
        } else {
          gsap.to(content, { height: 0, opacity: 0, duration: 0.5, ease: "power3.inOut", paddingBottom: "0rem" });
          gsap.to(icon, { rotate: 0, duration: 0.3 });
        }
      }
  });
};

onMounted(async () => {
  await nextTick();
  
  const lenis = new Lenis({ duration: 1.2 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));

  // ANIMATION DU LOADER
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

  const heroTl = gsap.timeline();
  heroTl.from(".hero-title span", { y: 100, rotate: 5, duration: 1, stagger: 0.1, ease: "power4.out" })
        .from(".hero-image", { x: 200, opacity: 0, duration: 1.5, ease: "power4.out" }, "-=0.8");

  // ANIMATIONS DES SECTIONS
  gsap.from(".slide-right", { 
    x: -300, opacity: 0, ease: "power2.out",
    scrollTrigger: { trigger: ".slide-right", start: "top 95%", end: "top 70%", scrub: 1 } 
  });
  gsap.from(".slide-left", { 
    x: 300, opacity: 0, ease: "power2.out",
    scrollTrigger: { trigger: ".slide-left", start: "top 95%", end: "top 70%", scrub: 1 } 
  });
  gsap.from(".slide-right-2", { 
    x: -300, opacity: 0, ease: "power2.out",
    scrollTrigger: { trigger: ".slide-right-2", start: "top 95%", end: "top 70%", scrub: 1 } 
  });

  gsap.from(".enjeux-title", { 
    y: 100, opacity: 0, duration: 1.2, ease: "power4.out",
    scrollTrigger: { trigger: ".enjeux-trigger", start: "top 80%" }
  });
  gsap.from(".enjeux-image", { 
    scale: 0.8, opacity: 0, duration: 1.5, ease: "expo.out",
    scrollTrigger: { trigger: ".enjeux-image", start: "top 80%" }
  });
  gsap.from(".enjeux-content", { 
    x: 100, opacity: 0, duration: 1.2, ease: "power4.out",
    scrollTrigger: { trigger: ".enjeux-content", start: "top 80%" }
  });

  // ANIMATION DE TEXTE RÉVÉLATION
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

<template>
  <div class="main flex flex-col font-body min-h-screen bg-[var(--bg-light)] ">
    
    <!-- LOADER -->
    <div ref="loader" class="fixed inset-0 bg-primary z-[100] flex items-center justify-center p-4">
      <div class="relative text-center">
        <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
          <!-- Texte responsive pour le loader -->
          <!-- <span class="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter">EDOSSAH</span> -->
          <img src="/img/loader/edoLoader.jpeg" class="w-64 sm:w-96 md:w-[500px] h-auto object-cover mx-auto" alt="edoLoader" />
        </div>
        <!-- <div class="loader-subtitle opacity-0 text-[#F3F0E7] text-base sm:text-lg mb-6">
          Le numérique pensé pour les associations
        </div> -->
        <div class="loader-progress w-0 h-1 bg-white mt-4"></div>
      </div>
    </div>

    <NavBar />

    <!-- HERO SECTION -->
    <section class="container mx-auto px-4 md:px-6 min-h-screen flex flex-col justify-center relative z-10">
      <div class="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center w-full">
        <div>
          <h1 class="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight">
            Le numérique pensé pour fluidifier le quotidien des associations
          </h1>
        </div>
        <div class="relative hero-image flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <div class="rounded-2xl md:rounded-[50px]  relative z-10 w-full max-w-lg lg:max-w-(50%)">
            <img src="/img/heroPC.png" class="w-full h-full object-cover rounded-2xl md:rounded-[50px] " alt="Dashboard" />
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERS MARQUEE -->
    <section class="py-12 md:py-16  mb-10 md:mb-20">
      <div class="w-full relative fade-mask">
        <div class="flex items-center gap-12 md:gap-20 lg:gap-32 w-max marquee-track">
          <div v-for="(p, index) in [...partners, ...partners, ...partners]" :key="index" class="flex-shrink-0">
            <img :src="p.logo" :alt="p.name" class="h-10 md:h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>

    <!-- TEXT REVEAL -->
    <section ref="textRevealContainer" class="flex justify-center w-full py-16 md:py-24 px-6 md:px-20 bg-primary">
      <p class="text-white font-clementeMini text-center mx-auto md:mx-[5%]
           text-2xl sm:text-3xl md:text-5xl lg:text-[44px]
           max-w-5xl">
        <span class="reveal-word">Nous</span> <span class="reveal-word">vous</span> <span class="reveal-word">accompagnons</span> <span class="reveal-word">dans</span> <span class="reveal-word">la</span> <span class="reveal-word font-clementePdap">conception,</span> <span class="reveal-word font-clementePdap">l'évolution</span> <span class="reveal-word">et</span> <span class="reveal-word">le</span> <span class="reveal-word font-clementePdap">déploiement</span> <span class="reveal-word">de</span> <span class="reveal-word">vos</span> <span class="reveal-word">outils</span> <span class="reveal-word">numériques.</span> <span class="reveal-word">Et</span> <span class="reveal-word">grâce</span> <span class="reveal-word">à</span> <span class="reveal-word">notre</span> <span class="reveal-word font-clementePdap">connaissance</span> <span class="reveal-word font-clementePdap">de</span> <span class="reveal-word font-clementePdap">vos</span> <span class="reveal-word font-clementePdap">métiers,</span> <span class="reveal-word">nos</span> <span class="reveal-word">propositions</span> <span class="reveal-word">sont</span> <span class="reveal-word font-clementePdap">adaptées,</span> <span class="reveal-word font-clementePdap">durables</span> <span class="reveal-word">et</span> <span class="reveal-word font-clementePdap">très</span> <span class="reveal-word font-clementePdap">utiles.</span>
      </p>
    </section>

    <!-- Section Pourquoi Edossah -->
    <section class="w-full py-12 md:py-20">
      <div class="slide-right flex flex-col md:flex-row mr-4 md:mr-32 border-2 border-l-0 border-primary rounded-r-[40px] md:rounded-r-[50px] ">
        <div class="md:w-1/3 flex flex-col items-center justify-center p-8 md:p-12 border-primary bg-primary/5">
           <img src="/img/tree.png" class="w-32 h-32 md:w-48 md:h-48 object-contain mb-6 md:mb-8"/>
           <h2 class="font-display font-clemente text-3xl md:text-[40px] text-primary font-black uppercase text-center leading-tight">Pourquoi <br/> Edossah ?</h2>
        </div>
        <div class=" md:w-2/3 p-6 md:p-12 lg:p-20 flex flex-col justify-center text-center md:text-left space-y-6 md:space-y-8">
          <p class="font-clementeMini text-xl md:text-[30px] text-primary">Tout simplement pour notre expérience du terrain: <b class="italic">on comprend vos besoins !</b></p>
          <p class="font-clementeMini text-xl md:text-[30px] text-primary">
            Les professionnels méritent un outil qui allège leur quotidien, et on y répond de manière sur mesure pour permettre à votre organisation de se concentrer sur le plus important : <b class="italic"> son activité.</b>
          </p>
        </div>
      </div>
    </section>

    <!-- Notre Approche -->
    <section class="w-full py-12 md:py-20 ">
      <div class="slide-left md:ml-32 border-2 border-r-0 border-primary p-4 md:p-8 bg-white rounded-l-[40px] md:rounded-l-[var(--border-radius-primary)]">
        <h2 class="font-display text-2xl md:text-3xl lg:text-6xl text-center uppercase font-black mb-6 md:mb-8 text-primary tracking-tighter font-clemente">Notre Approche</h2>
        <div class="flex flex-col gap-4 md:gap-5 max-w-4xl mx-auto">
            <div v-for="(item, index) in approachItems" :key="index" 
                 class="border-2 border-primary cursor-pointer transition-all duration-500 rounded-[15px] "
                 :class="itemStates[index] ? 'bg-white text-primary' : 'bg-primary text-white'"
                 @click="toggleItem(index)">
                <div class="p-3 md:p-4 flex justify-between items-center select-none">
                    <h3 class="text-lg md:text-2xl lg:text-4xl font-black tracking-wide leading-none font-clementeMini pr-2">{{ item.title }}</h3>
                    <div class="approach-icon text-2xl md:text-3xl font-light transition-transform duration-300 flex-shrink-0" :class="itemStates[index] ? 'text-primary' : 'text-white'">+</div>
                </div>
                <div class="approach-content h-0 opacity-0  px-4 md:px-8">
                  <p class="text-lg md:text-2xl lg:text-[30px ] font-clementeMini leading-relaxed" :class="itemStates[index] ? 'text-slate-900' : 'text-white/90'">
                    {{ item.content }}
                  </p>
                </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Notre ADN -->
    <section class="w-full py-12 md:py-20 ">

      <div class="p-8 slide-right-2 flex flex-co md:flex-row mr-4 md:mr-32 border-2 border-l-0 border-[var(--primary)] rounded-r-[40px] md:rounded-r-[var(--border-radius-primary)] ">
        
        <!-- <div class="md:w-1/2 flex flex-col items-center justify-center p-8 md:p-20 border-[var(--primary)]">
           <h3 class="font-clemente italic font-display text-2xl md:text-3xl lg:text-4xl text-[var(--primary)] text-center tracking-tight leading-tight mb-4 max-w-[90%] md:max-w-[80%]">
             Issus du secteur associatif, et de l'AHI
           </h3>
           <img src="/img/adn.png" class="w-32 h-32 md:w-40 md:h-40 object-contain mb-4 rotate-12 rounded-2xl"/>
           <h2 class="font-clemente font-display text-3xl md:text-4xl lg:text-[50px] text-[var(--primary)] font-black text-center tracking-tighter leading-tight uppercase">Notre ADN</h2>
        </div> -->
        <div class="w-1/2 flex flex-col justify-around items-center ">
          <h3 class="font-clementeMini italic text-2xl md:text-3xl lg:text-4xl text-[var(--primary)] text-center tracking-tight mb-4 max-w-[90%] md:max-w-[80%]">
             Issus du secteur associatif, et de l'AHI
           </h3>
          <img src="/img/adn.png" class="w-32 h-32 md:w-40 md:h-40 object-contain mb-4 rotate-12 rounded-2xl"/>
          <h2 class="font-clemente font-display text-3xl md:text-4xl lg:text-[50px] text-[var(--primary)] font-black text-center tracking-tighter leading-tight uppercase">Notre ADN</h2>
        </div>

        <div class="md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6 md:space-y-8">
          <p class="text-[var(--primary)] space-y-4 text-xl md:text-2xl lg:text-3xl font-clementeMini">Cet ancrage se traduit par des choix concrets :</p>
          
          <ul class="text-[var(--primary)] ml-4 md:ml-10 text-lg md:text-[20px] lg:text-[21px] font-clementeMini">
            <li class="flex items-start gap-3">
              <span class="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></span>
              <span class="text-left">Un support client humain et accessible</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></span>
              <span class="text-left">Des solutions co-construites avec les professionnels de terrain</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></span>
              <span class="text-left">Des tarifs adaptés aux réalités budgétaires des associations</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></span>
              <span class="text-left">Une capacité à livrer rapidement des versions opérationnelles</span>
            </li>
          </ul>

          <p class="text-[var(--primary)] text-xl md:text-2xl lg:text-3xl font-clementeMini">
            Parce que nous connaissons les réalités du secteur, nous concevons des outils qui s'y adaptent réellement.
          </p>
        </div>
      </div>

    </section>

    <!-- Enjeux Title -->
    <section class="container mx-auto py-16 md:py-24 px-6 text-center enjeux-trigger">
        <h2 class="font-display font-clemente text-3xl md:text-5xl lg:text-7xl text-primary uppercase font-black leading-tight tracking-tighter max-w-5xl mx-auto enjeux-title">
            des besoins concrets,<br/> un accompagnement <br /> sur mesure
        </h2>
    </section>

    <!-- Enjeux Content -->
    <section class="bg-primary p-8 md:p-20">
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-20 items-center">
                <div class="p-2  enjeux-image">
                    <img src="/img/2hand.jpg" class="w-full rounded-3xl h-full object-cover"/>
                </div>
                <div class="flex flex-col gap-6 md:gap-8 text-center lg:text-left enjeux-content">
                    <h2 class="text-3xl md:text-4xl lg:text-[46px] font-black text-white font-clemente tracking-normal">
                      Nous accompagnons les structures face à des enjeux très concrets
                    </h2>
                </div>
            </div>

            <div class="flex justify-center w-full">
                <div class="w-full max-w-4xl border-2 border-primary cursor-pointer transition-all duration-500  rounded-[40px] md:rounded-[80px]"
                     :class="isComplexOpen ? 'bg-white text-primary shadow-lg' : 'bg-white text-primary shadow-2xl'"
                     @click="toggleComplex">
                    
                    <div class="p-6 md:p-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 select-none relative">
                        <h3 class="font-clementeMini italic text-2xl md:text-4xl lg:text-5xl font-black  tracking-tighter text-center">Voir les situations</h3>
                        <div class="complex-icon text-4xl md:text-5xl font-light transition-transform duration-300">+</div>
                    </div>

                    <div class="complex-content h-0 opacity-0  px-6 md:px-8">
                        <div class="pb-8 md:pb-12 space-y-8 md:space-y-10 " :class="isComplexOpen ? 'text-primary' : 'text-white'">
                            <!-- <p class="text-lg md:text-2xl lg:text-[35px] text-primary leading-tight font-clementeMini">
                                Vos équipes passent plus de temps sur les tableurs que sur l'accompagnement humain. Nous simplifions vos processus pour :
                            </p> -->
                            <ul class="flex flex-col items-start gap-4 md:gap-6 max-w-2xl mx-auto text-[var(--dark)] list-disc list-inside">
                                <li class=" flex-col md:flex-row items-center gap-4 md:gap-6 group">
                                  <!-- <span class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">01</span> -->
                                  <span class="text-base md:text-xl lg:text-2xl font-clementeMini tracking-tight ">Des outils multiples, peu connectés ou non-adaptables</span>
                                </li>

                                <li class=" flex-col md:flex-row items-center gap-4 md:gap-6 group">
                                  <!-- <span class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">02</span> -->
                                  <span class="text-base md:text-xl lg:text-2xl font-clementeMini tracking-tight ">Des besoins métiers mal couverts par les solutions existantes</span>
                                </li>

                                <li class=" flex-col md:flex-row items-center gap-4 md:gap-6 group">
                                  <!-- <span class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">03</span> -->
                                  <span class=" md:text-xl lg:text-2xl font-clementeMini tracking-tight ">Des indicateurs demandés par les financeurs difficiles à produire</span>
                                </li>

                                <li class=" flex-col md:flex-row items-center gap-4 md:gap-6 group">
                                  <!-- <span class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">04</span> -->
                                  <span class="text-base md:text-xl lg:text-2xl font-clementeMini tracking-tight">Des pratiques de terrain complexes, peu traduites dans les outils numériques</span>
                                </li>

                                <li class=" flex-col md:flex-row items-center gap-4 md:gap-6 group">
                                  <!-- <span class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">05</span> -->
                                  <span class="text-base md:text-xl lg:text-2xl font-clementeMini tracking-tight ">Des contraintes réglementaires et RGPD insuffisamment outillées</span>
                                </li>

                                <li class=" flex-col md:flex-row items-center gap-4 md:gap-6 group">
                                  <!-- <span class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">06</span> -->
                                  <span class="text-base md:text-xl lg:text-2xl font-clementeMini tracking-tight ">Un manque de temps et de ressources internes pour piloter les projets numériques</span>
                                </li>
                              </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Roles -->
        <div class="container mx-auto mt-16 md:mt-32 text-center text-white">
          <h2 class="text-3xl md:text-4xl lg:text-6xl font-black font-display uppercase font-clemente mb-6 md:mb-8 px-4 leading-[0.9] tracking-tighter">
           Notre Rôle ?
          </h2>
          <p class="text-lg md:text-2xl lg:text-3xl max-w-5xl mx-auto mb-8 md:mb-12 font-clementeMini px-4">
            <b class="font-clemente">Structurer, concevoir</b> et <b class="font-clemente">faire évoluer</b> votre système d'information. Chaque accompagnement est pensé en fonction du contexte, des 
            usages et des moyens de la structure.
          </p>
        </div>
    </section>

    <!-- Section ASSIA -->
    <section class="bg-[#fff3ee] py-16 md:py-20 mb-10 md:mb-20">
      <div class="container mx-auto px-4 md:px-6">
        
        <!-- Grid Titre + Image -->
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center mb-12 md:mb-16">
          <div class="flex flex-col justify-center items-center md:justify-end md:items-end gap-2 md:gap-4 text-center md:text-right order-2 lg:order-1">
              <h2 class="text-3xl md:text-5xl lg:text-[70px] text-[#ff925c] font-clemente">
                Assia :
              </h2>
              <h2 class="text-2xl md:text-4xl lg:text-[50px] text-[var(--primary)] font-clemente leading-tight md:leading-snug lg:leading-[50px]" >
                une réponse mutualisée à un besoin partagé
              </h2>
          </div>
          <div class="relative order-1 lg:order-2 flex justify-center">
              <div class="w-full sm:w-3/4 rounded-[30px] md:rounded-[40px] ">
                <img src="/img/mutualise.png" class="w-full h-full object-cover" alt="Assia Team"/>
              </div>
          </div>
        </div>

        <!-- Flux Vertical -->
        <div class="flex flex-col items-center text-center gap-6 md:gap-10 text-white max-w-4xl mx-auto">
            
            <p class="text-lg md:text-2xl lg:text-3xl font-clementeMini leading-relaxed text-[var(--primary)]">
              Lorsque plusieurs associations rencontrent des besoins métier similaires, nous faisons le choix de la mutualisation.
            </p>

            <p class="text-lg md:text-2xl lg:text-3xl font-clementeMini leading-relaxed text-[var(--primary)]">
              <b>ASSIA est l'outil métier</b> dédié au <b>travail social, co-construit</b> avec les professionnels, <b>évolutif</b> et toujours <b>au service du quotidien.</b>
            </p>

            <p class="text-lg md:text-2xl lg:text-3xl font-clementeMini leading-relaxed text-[var(--primary)]">
              ASSIA incarne notre capacité à <b>comprendre</b> les réalités de terrain et à les <b>traduire</b> en systèmes d'information <b>concrets</b> et <b>opérationnels.</b>
            </p>

            <div class="pt-4">
               <a href="/application" class="font-clementeMini inline-block text-white bg-[#ff925c] text-lg md:text-xl lg:text-2xl py-4 md:py-5 px-8 md:px-12 rounded-full cursor-pointer hover:scale-105 transition-transform">
                 Je découvre ASSIA
               </a>
            </div>

        </div>

      </div>
    </section>

    <!-- PARTNERS 2 -->
    <section class="py-12 md:py-16  mb-10 md:mb-20">
      <h2 class="font-clemente text-3xl md:text-4xl lg:text-6xl text-center text-primary font-black font-display uppercase px-4 leading-[0.9] tracking-tighter mb-10 md:mb-20">
         On les accompagne tous les jours
      </h2>
      <div class="w-full relative fade-mask">
        <div class="flex items-center gap-12 md:gap-20 lg:gap-32 w-max marquee-track">
          <div v-for="(p, index) in [...partners, ...partners, ...partners]" :key="index" class="flex-shrink-0">
            <img :src="p.logo" :alt="p.name" class="h-10 md:h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
    
    <div class="max-w-7xl mx-auto text-center px-4">
      <Temoignage />
    </div>

    <!-- Soutien -->
    <section class="py-16 md:py-24 px-4">
      <h2 class="font-clemente text-3xl md:text-4xl lg:text-6xl text-center text-primary font-black font-display uppercase leading-[0.9] tracking-tighter mb-10 md:mb-16">
        Ils nous ont soutenu
      </h2>
      <div class="bg-primary container rounded-[24px] md:rounded-[34px] mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16">
        <!-- Ajustement des conteneurs d'images -->
        <div class="w-full md:w-96 h-40 md:h-64 p-4 md:p-8 flex items-center justify-center">
          <img src="/logo/idf.png" class="max-w-full max-h-full object-contain brightness-0 invert" alt="Ile de France"/>
        </div>
        <div class="w-full md:w-96 h-40 md:h-64 p-4 md:p-8 flex items-center justify-center">
          <img src="/logo/bpi.png" class="max-w-full max-h-full object-contain brightness-0 invert" alt="BPI France"/>
        </div>
      </div>

      <!-- <h2 class="text-3xl mt-12 md:mt-16 md:text-4xl lg:text-6xl text-center text-primary font-black font-display uppercase leading-[0.9] tracking-tighter mb-10 md:mb-16">
        Des Questions ?
      </h2>

      <a href="/contact" class="text-primary border-2 border-primary flex justify-center w-fit mx-auto text-lg md:text-2xl py-4 md:py-5 px-8 md:px-12 rounded-xl uppercase font-clemente cursor-pointer hover:bg-primary hover:text-white transition-colors">
        Par ici les réponses
      </a> -->
    </section>

    <!-- Contact Section -->
    <section class="p-8 md:p-16 lg:p-28 border-2 border-primary mx-4 md:mx-auto w-auto md:w-fit md:max-w-4xl rounded-[24px] md:rounded-[34px] mb-10">
      <h2 class="font-clemente text-3xl md:text-4xl lg:text-6xl text-center text-primary font-black font-display uppercase leading-[0.9] tracking-tighter mb-10 md:mb-16 tracking-wide">
        Besoin de plus d'informations ?
      </h2>
      <a href="/contact" class="text-white bg-primary border-2 border-primary flex justify-center w-fit mx-auto text-lg md:text-[35px] py-4 md:py-5 px-8 md:px-12 rounded-xl font-clementeMini italic cursor-pointer hover:scale-105 transition-transform">
        Ecrivez-nous
      </a>
    </section>

    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inter:wght@400;700;900&display=swap');
/* :root { --primary: var(--primary); --secondary: #ff925c; } */
/* * { margin: 0; padding: 0; box-sizing: border-box; } */
/* body { background-color: #F9FEFF; overflow-x: hidden; color: #1a1a1a; font-family: 'Inter', sans-serif; } */
/* .font-display { font-family: 'Montserrat', sans-serif; } */
.text-primary { color: var(--primary); }
.bg-primary { background-color: var(--primary); }
.border-primary { border-color: var(--primary); }

.marquee-track { animation: scroll 40s linear infinite; }
.marquee-track:hover { animation-play-state: paused; }
@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }

.fade-mask {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.hero-title {
  /* letter-spacing: -0.04em; */
  /* font-size: 64px; removed in favor of tailwind classes */
  font-family: 'Clemente', sans-serif; /* font-display */
  font-weight: 700;                  /* font-black */
  line-height:  1.05;            /* tracking-[-1.5px] */
  color: var(--primary);             /* text-primary */
  text-transform: uppercase;         /* uppercase */
  display: flex;                     /* flex */
  flex-direction: column; 
}
</style>