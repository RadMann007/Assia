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
  const content = document.querySelectorAll('.approach-content')[index];
  const icon = document.querySelectorAll('.approach-icon')[index];
  if (itemStates.value[index]) {
    gsap.to(content, { height: "auto", opacity: 1, duration: 0.6, ease: "power3.out", paddingBottom: "2rem" });
    gsap.to(icon, { rotate: 45, duration: 0.3 });
  } else {
    gsap.to(content, { height: 0, opacity: 0, duration: 0.5, ease: "power3.inOut", paddingBottom: "0rem" });
    gsap.to(icon, { rotate: 0, duration: 0.3 });
  }
};

const toggleComplex = () => {
  isComplexOpen.value = !isComplexOpen.value;
  const content = document.querySelector('.complex-content');
  const icon = document.querySelector('.complex-icon');
  if (isComplexOpen.value) {
    gsap.to(content, { height: "auto", opacity: 1, duration: 0.6, ease: "power3.out", paddingBottom: "2rem" });
    gsap.to(icon, { rotate: 45, duration: 0.3 });
  } else {
    gsap.to(content, { height: 0, opacity: 0, duration: 0.5, ease: "power3.inOut", paddingBottom: "0rem" });
    gsap.to(icon, { rotate: 0, duration: 0.3 });
  }
};

onMounted(async () => {
  await nextTick();
  
  const lenis = new Lenis({ duration: 1.2 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));

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

  const heroTl = gsap.timeline();
  // Animation image: vient de la droite vers la gauche (vers le texte)
  heroTl.from(".hero-title span", { y: 100, rotate: 5, duration: 1, stagger: 0.1, ease: "power4.out" })
        .from(".hero-image", { x: 200, opacity: 0, duration: 1.5, ease: "power4.out" }, "-=0.8");

  // ANIMATIONS DES SECTIONS (GAUCHE / DROITE)
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

<template>
  <div class="main flex flex-col font-body min-h-screen">
    
    <!-- LOADER AVEC LOGO ASSIA -->
    <div ref="loader" class="fixed inset-0 bg-primary z-[100] flex items-center justify-center">
      <div class="relative font-clemente text-center">
        <div class="loader-text opacity-0 text-[var(--white)] mb-4">
          <span class="text-6xl md:text-8xl tracking-tighter">EDOSSAH</span>
        </div>
        <div class="loader-subtitle opacity-0 text-[var(--white)] text-lg mb-6">
          Le numérique pensé pour les associations
        </div>
        <div class="loader-progress w-0 h-1 bg-white mt-4"></div>
      </div>
    </div>

    <NavBar />

    <section class="container mx-auto px-6 h-screen flex flex-col justify-center relative z-10">
      <div class=" grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        <div>
          <h1 class="hero-title">
            Le numérique pensé pour fluidifier le quotidien des associations
          </h1>
        </div>
        <div class="relative hero-image flex justify-center lg:justify-end items-center">
          <div class="rounded-3xl overflow-hidden relative z-10">
            <img src="/img/heroPC.png" class="w-full h-full object-cover" alt="Dashboard" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 overflow-hidden mb-20">
      <div class="w-full relative fade-mask">
        <div class="flex items-center gap-20 md:gap-32 w-max marquee-track">
          <div v-for="(p, index) in [...partners, ...partners, ...partners]" :key="index" class="flex-shrink-0">
            <img :src="p.logo" :alt="p.name" class="h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>

    <section ref="textRevealContainer" class="flex w-full bg-primary p-7">
      <p class="text-white font-clemente text-center text-base md:text-xl lg:text-3xl mx-[15%]">
        <span class="reveal-word">Nous</span> <span class="reveal-word">vous</span> <span class="reveal-word">accompagnons</span> <span class="reveal-word">dans</span> <span class="reveal-word">la</span> <span class="reveal-word">conception,</span> <span class="reveal-word">l'évolution</span> <span class="reveal-word">et</span> <span class="reveal-word">le</span> <span class="reveal-word">déploiement</span> <span class="reveal-word">de</span> <span class="reveal-word">vos</span> <span class="reveal-word">outils</span> <span class="reveal-word">numériques.</span> <span class="reveal-word">Et</span> <span class="reveal-word">grâce</span> <span class="reveal-word">à</span> <span class="reveal-word">notre</span> <span class="reveal-word">connaissance</span> <span class="reveal-word">de</span> <span class="reveal-word">vos</span> <span class="reveal-word">métiers,</span> <span class="reveal-word">nos</span> <span class="reveal-word">propositions</span> <span class="reveal-word">sont</span> <span class="reveal-word">adaptées,</span> <span class="reveal-word">durables</span> <span class="reveal-word">et</span> <span class="reveal-word">très</span> <span class="reveal-word">utiles.</span>
      </p>
    </section>

    <!-- Section Pourquoi Edossah -->
    <section class="w-full py-20">
      <div class="slide-right flex flex-col md:flex-row mr-4 md:mr-32 border-2 border-l-0 border-primary rounded-r-[60px] md:rounded-r-[50px] ">
        <div class="md:w-1/3 flex flex-col items-center justify-center p-12   border-primary bg-primary/5">
           <img src="/img/tree.png" class="w-48 h-48 object-contain mb-8"/>
           <h2 class="font-display text-4xl md:text-[40px] text-primary font-black uppercase text-center leading-tight">Pourquoi <br/> Edossah ?</h2>
        </div>
        <div class=" md:w-2/3 p-12 md:p-20 flex flex-col justify-center text-center md:text-left space-y-8">
          <p class="font-clementeMini text-2xl md:text-[30px] text-primary">Tout simplement pour notre expérience du terrain: <b class="italic">on comprend vos besoins !</b></p>
          <p class="font-clementeMini text-2xl md:text-[30px] text-primary">
            Les professionnels méritent un outil qui allège leur quotidien, et on y répond de manière sur mesure pour permettre à votre organisation de se concentrer sur le plus important : <b class="italic"> son activité.</b>
          </p>
        </div>
      </div>
    </section>

    <!-- Notre approche -->
    <section class="w-full py-20 overflow-hidden">
      <div class="slide-left  md:ml-32 border-2 border-r-0 border-primary p-8 bg-white rounded-l-[60px] md:rounded-l-[var(--border-radius-primary)]">
        <h2 class="font-display text-3xl md:text-6xl text-center uppercase font-black mb-8 text-primary tracking-tighter font-clemente">Notre Approche</h2>
        <div class="flex flex-col gap-5 max-w-4xl mx-auto">
            <div v-for="(item, index) in approachItems" :key="index" 
                 class="border-2 border-primary cursor-pointer transition-all duration-500 rounded-[15px] overflow-hidden"
                 :class="itemStates[index] ? 'bg-white text-primary' : 'bg-primary text-white'"
                 @click="toggleItem(index)">
                <div class="p-3 flex justify-between items-center select-none">
                    <h3 class="text-2xl md:text-[25px] font-black tracking-tighter leading-none font-clemente">{{ item.title }}</h3>
                    <div class="approach-icon text-3xl font-light transition-transform duration-300" :class="itemStates[index] ? 'text-primary' : 'text-white'">+</div>
                </div>
                <div class="approach-content h-0 opacity-0 overflow-hidden px-8">
                  <p class="text-3xl font-clementeMini leading-relaxed" :class="itemStates[index] ? 'text-slate-900' : 'text-white/90'">
                    {{ item.content }}
                  </p>
                </div>
            </div>
        </div>
      </div>
    </section>

<!-- Issus du secteur associatif et de l'AHI -->
    <section class="w-full py-20 overflow-hidden"> 
      <div class="slide-right-2 flex flex-col md:flex-row mr-4 md:mr-32 border-2 border-l-0 border-[var(--primary)] bg-white rounded-r-[60px] md:rounded-r-[var(--border-radius-primary)] ">
        <div class="md:w-1/2 flex flex-col items-center justify-center p-20 border-[var(--primary)]">
           <h3 class="font-clemente italic font-display md:text-4xl text-[var(--primary)]  tracking-tight leading-tight mb-4 max-w-[80%]">
             Issus du secteur associatif, et de l'AHI
           </h3>
           <img src="/img/adn.png" class="w-40 h-40 object-contain mb-4 rotate-12 rounded-2xl"/>
           <h2 class="font-clemente font-display text-4xl md:text-[50px] text-[var(--primary)] font-black text-center tracking-tighter leading-tight uppercase">Notre ADN</h2>
        </div>
        <div class="md:w-1/2 p-12 p-6 flex flex-col justify-center text-center md:text-left space-y-8">
          <p class="text-[var(--primary)] space-y-4 text-2xl md:text-3xl font-clementeMini">Cet ancrage se traduit par des choix concrets :</p>
          
          <ul class="text-[var(--primary)] ml-10 text-[20px] md:text-[21px] font-clementeMini">
            <li class="flex items-start gap-3">
              <span class="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></span>
              <span>Un support client humain et accessible</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></span>
              <span>Des solutions co-construites avec les professionnels de terrain</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></span>
              <span>Des tarifs adaptés aux réalités budgétaires des associations</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></span>
              <span>Une capacité à livrer rapidement des versions opérationnelles</span>
            </li>
          </ul>

          <p class="text-[var(--primary)]  text-2xl md:text-3xl font-clementeMini">
            Parce que nous connaissons les réalités du secteur, nous concevons des outils qui s'y adaptent réellement.
          </p>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-24 px-6 text-center enjeux-trigger">
        <h2 class="font-display text-4xl md:text-7xl text-primary uppercase font-black leading-tight tracking-tighter max-w-5xl mx-auto enjeux-title">
            des besoins concrets,<br/> un accompagnement sur mesure
        </h2>
    </section>

    <section class="bg-primary p-8 md:p-20">
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-2 gap-16 mb-20 items-center">
                <div class="p-2 overflow-hidden enjeux-image">
                    <img src="/img/2hand.jpg" class="w-full rounded-3xl h-full object-cover"/>
                </div>
                <div class="flex flex-col gap-8 text-center lg:text-left enjeux-content">
                    <h2 class="text-4xl md:text-[60px] font-display font-black leading-tight text-white font-clemente">
                      Nous accompagnons les structures face à des enjeux très concrets
                    </h2>
                    <!-- <p class="text-xl md:text-[30px] font-medium text-white font-clemente">Les structures que nous accompagnons rencontrent fréquemment les situations suivantes :</p> -->
                </div>
            </div>

            <div class="flex justify-center w-full">
                <div class="w-full max-w-4xl border-2 border-primary cursor-pointer transition-all duration-500 overflow-hidden rounded-[80px]"
                     :class="isComplexOpen ? 'bg-white text-primary shadow-lg' : 'bg-white text-primary shadow-2xl'"
                     @click="toggleComplex">
                    
                    <div class="p-10 flex flex-col md:flex-row justify-center items-center gap-6 select-none relative">
                        <h3 class="text-4xl md:text-5xl font-black lowercase tracking-tighter text-center">voir les situations</h3>
                        <div class="complex-icon text-5xl font-light transition-transform duration-300">+</div>
                    </div>

                    <div class="complex-content h-0 opacity-0 overflow-hidden px-8">
                        <div class="pb-12 space-y-10 text-center" :class="isComplexOpen ? 'text-primary' : 'text-white'">
                            <p class="text-2xl font-clementeMini font-bold leading-relaxed max-w-2xl mx-[15%]">
                                Vos équipes passent plus de temps sur les tableurs que sur l'accompagnement humain. Nous simplifions vos processus pour :
                            </p>
                            <ul class="flex flex-col items-start gap-6 max-w-2xl mx-auto">
                                <li class="flex flex-col md:flex-row items-center gap-6 group">
                                  <span class="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">01</span>
                                  <span class="text-2xl font-clementeMini tracking-tight text-left">Des outils multiples, peu connectés ou non-adaptables</span>
                                </li>

                                <li class="flex flex-col md:flex-row items-center gap-6 group">
                                  <span class="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">02</span>
                                  <span class="text-2xl font-clementeMini tracking-tight text-left">Des besoins métiers mal couverts par les solutions existantes</span>
                                </li>

                                <li class="flex flex-col md:flex-row items-center gap-6 group">
                                  <span class="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">03</span>
                                  <span class="text-2xl font-clementeMini tracking-tight text-left">Des indicateurs demandés par les financeurs difficiles à produire</span>
                                </li>

                                <li class="flex flex-col md:flex-row items-center gap-6 group">
                                  <span class="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">04</span>
                                  <span class="text-2xl font-clementeMini tracking-tight text-left">Des pratiques de terrain complexes, peu traduites dans les outils numériques</span>
                                </li>

                                <li class="flex flex-col md:flex-row items-center gap-6 group">
                                  <span class="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">05</span>
                                  <span class="text-2xl font-clementeMini tracking-tight text-left">Des contraintes réglementaires et RGPD insuffisamment outillées</span>
                                </li>

                                <li class="flex flex-col md:flex-row items-center gap-6 group">
                                  <span class="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">06</span>
                                  <span class="text-2xl font-clementeMini tracking-tight text-left">Un manque de temps et de ressources internes pour piloter les projets numériques</span>
                                </li>
                              </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Roles -->
            <div class="container mx-auto mt-32 text-center text-white">
              <h2 class="text-4xl md:text-6xl font-black font-display uppercase font-clemente mb-8 px-4 leading-[0.9] tracking-tighter">
               Notre Rôle ?
              </h2>
              <p class="md:text-3xl max-w-5xl mx-auto mb-12 font-clemente">
                Structurer, concevoir et faire évoluer votre système d'information. Chaque accompagnement est pensé en fonction du contexte, des 
                usages et des moyens de la structure.
              </p>

              <!-- <div>
                <button class="bg-white text-primary font-black uppercase text-lg md:text-xl py-4 px-10 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300">
                  Je découvre les cas pratiques
                </button>
              </div> -->
            </div>
    </section>

    <!-- section ASSIA -->
    <section class="bg-[#FFF5F0] py-20 mb-20">
      <div class="container mx-auto px-6">
        
        <!-- 1. Grid: Titre + Image -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div class="flex flex-col justify-end items-end gap-4">

              <h2 class="text-3xl md:text-[70px] text-[#ff925c] font-clemente text-right">
                Assia :
              </h2>
              <h2 class="text-3xl md:text-[50px]  text-right text-[#03A3B5] font-clemente">
                une réponse
              </h2>
              <h2 class="text-3xl md:text-[50px] text-right text-[#03A3B5] font-clemente">
                mutualisée à un
              </h2>
              <h2 class="text-3xl md:text-[50px] text-right text-[#03A3B5] font-clemente">
                besoin partagé
              </h2>
          </div>
          <div class="relative">
              <div class="size-3/4 rounded-[40px] overflow-hidden">
                <img src="/img/mutualise.png" class="w-full h-full object-cover" alt="Assia Team"/>
              </div>
          </div>
        </div>

        <!-- 2. Flux Vertical de Contenu -->
        <div class="flex flex-col items-center text-center gap-10 text-white max-w-4xl mx-auto font-clemente">
            
            <p class="text-2xl md:text-3xl font-clementeMini leading-relaxed text-[#03A3B5]">
              Lorsque plusieurs associations rencontrent des besoins métier similaires, nous faisons le choix de la mutualisation.
            </p>

            <!-- <button class="text-white bg-[#ff925c] font-black uppercase text-lg md:text-xl py-4 px-10 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 pointer-events-none">
              ASSIA est l'un de ces projets :
            </button> -->

            <p class="text-2xl md:text-3xl font-clementeMini leading-relaxed text-[#03A3B5]">
              <b>ASSIA est l'outil métier</b> dédié au <b>travail social, co-construit</b> avec les professionnels, <b>évolutif</b> et toujours <b>au service du quotidien.</b>
            </p>

            <p class="text-2xl md:text-3xl font-clementeMini leading-relaxed text-[#03A3B5]">
              ASSIA incarne notre capacité à <b>comprendre</b> les réalités de terrain et à les <b>traduire</b> en systèmes d'information <b>concrets</b> et <b>opérationnels.</b>
            </p>

            <div class="pt-4">
               <a href="/application" class="text-white bg-[#ff925c] text-xl md:text-2xl py-5 px-12 rounded-full cursor-pointer">
                 Je découvre ASSIA
               </a>
            </div>

        </div>

      </div>
    </section>

    <section class="py-16 overflow-hidden mb-20">
      <h2 class="text-4xl md:text-6xl text-center text-primary font-black font-display uppercase px-4 leading-[0.9] tracking-tighter mb-20">
               On les accompagne tous les jours
              </h2>
      <div class="w-full relative fade-mask ">
        <div class="flex items-center gap-20 md:gap-32 w-max marquee-track">
          <div v-for="(p, index) in [...partners, ...partners, ...partners]" :key="index" class="flex-shrink-0">
            <img :src="p.logo" :alt="p.name" class="h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
    <div class="max-w-7xl mx-auto text-center">
      <Temoignage />
    </div>

    <section class="py-24">
      <h2 class="text-4xl md:text-6xl text-center text-primary font-black font-display uppercase px-4 leading-[0.9] tracking-tighter mb-16">
        Ils nous ont soutenu
      </h2>
      <div class="bg-primary container rounded-[34px] mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
        <div class="w-96 h-64 p-8 flex items-center justify-center">
          <img src="/logo/idf.png" class="w-full h-full object-contain brightness-0 invert" alt="Ile de France"/>
        </div>
        <div class="w-96 h-64 p-8 flex items-center justify-center">
          <img src="/logo/bpi.png" class="w-full h-full object-contain brightness-0 invert" alt="BPI France"/>
        </div>
      </div>

      <h2 class="text-4xl mt-16 md:text-6xl text-center text-primary font-black font-display uppercase px-4 leading-[0.9] tracking-tighter mb-16">
        Des Questions ?
      </h2>

      <a href="/contact" class="text-primary border-2 border-primary flex justify-center w-fit mx-auto text-xl md:text-2xl py-5 px-12 rounded-xl uppercase font-clemente cursor-pointer">
        Par ici les réponses
      </a>
    </section>

    <!-- <section>
      <h2 class="text-4xl md:text-6xl text-center text-primary font-black font-display uppercase px-4 leading-[0.9] tracking-tighter mb-16">
        Ils nous font confiance
      </h2>
      <button class="text-white bg-primary border-2 border-primary flex justify-center w-fit mx-auto text-xl md:text-2xl py-5 px-12 rounded-xl uppercase font-clemente cursor-pointer">
        j'arrive
      </button>
    </section> -->

    <section class="p-28 border-2 border-primary w-fit  mx-auto rounded-[34px]">
      <h2 class="text-4xl md:text-6xl text-center text-primary font-black font-display uppercase px-4 leading-[0.9] tracking-tighter mb-16">
        Besoin de plus d'informations ?
      </h2>
      <a href="/contact" class="text-white bg-primary border-2 border-primary flex justify-center w-fit mx-auto text-xl md:text-2xl py-5 px-12 rounded-xl uppercase font-clemente cursor-pointer">
        écrivez-nous
      </a>
    </section>

    <Footer />
  </div>
</template>

<style>

* { margin: 0; padding: 0; box-sizing: border-box; }
body { background-color: var(--bg-light); overflow-x: hidden; color: var(--dark); font-family: "Clemente"; }
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
  font-size: 64px;   /* essaie entre 56px et 72px */
  font-family: 'Clemente', sans-serif; /* font-display */
  font-weight: 700;                  /* font-black */
  line-height:  1.05;            /* tracking-[-1.5px] */
  color: var(--primary);             /* text-primary */
  text-transform: uppercase;         /* uppercase */
  display: flex;                     /* flex */
  flex-direction: column; 
}
</style>