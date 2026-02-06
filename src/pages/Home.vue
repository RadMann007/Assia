<script setup>
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

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
  { title: "01. Diagnostic Terrain", content: "Nous nous immergeons dans votre quotidien pour comprendre les frictions réelles de vos équipes sociales." },
  { title: "02. Stratégie Digitale", content: "Conception d'une roadmap personnalisée : choix des outils et architecture de données." },
  { title: "03. Développement & Intégration", content: "Mise en place de vos solutions sur mesure avec une attention particulière à l'interopérabilité." },
  { title: "04. Accompagnement au Changement", content: "Formation de vos collaborateurs pour garantir que l'outil soit réellement adopté." }
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

  gsap.from(".slide-right", { x: -400, opacity: 0, scrollTrigger: { trigger: ".slide-right", start: "top bottom", end: "top center", scrub: 1 } });
  gsap.from(".slide-left", { x: 400, opacity: 0, scrollTrigger: { trigger: ".slide-left", start: "top bottom", end: "top center", scrub: 1 } });
  gsap.from(".slide-right-2", { x: -400, opacity: 0, scrollTrigger: { trigger: ".slide-right-2", start: "top bottom", end: "top center", scrub: 1 } });

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
  <div class="main flex flex-col font-body min-h-screen bg-[#F9FEFF] overflow-x-hidden">
    
    <!-- LOADER AVEC LOGO ASSIA -->
    <div ref="loader" class="fixed inset-0 bg-primary z-[100] flex items-center justify-center">
      <div class="relative text-center">
        <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
          <span class="text-6xl md:text-8xl font-bold tracking-tighter">EDOSSAH</span>
        </div>
        <div class="loader-subtitle opacity-0 text-[#F3F0E7] text-lg mb-6">
          Le numérique pensé pour les associations
        </div>
        <div class="loader-progress w-0 h-1 bg-white mt-4"></div>
      </div>
    </div>

    <NavBar />

    <section class="container mx-auto px-6 h-screen flex flex-col justify-center pt-32 pb-12 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        <div class="space-y-6 overflow-hidden text-center lg:text-left flex flex-col justify-center">
          <h1 class="hero-title text-xl md:text-[80px] font-display font-black leading-[0.85] text-primary uppercase tracking-tighter shrink-0 flex flex-col">
            <span class="inline-block">Le</span> 
            <span class="inline-block">numérique</span>
            <span class="inline-block">pensé pour</span>
            <span class="inline-block">fluidifier le quotidien des associations</span>
          </h1>
        </div>
        <div class="relative hero-image flex justify-center lg:justify-end items-center">
          <div class="w-90 h-90 md:w-[550px] md:h-[550px] rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative z-10">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover" alt="Dashboard" />
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

    <section ref="textRevealContainer" class="flex w-full py-24 px-6 md:px-20 bg-primary/5">
      <p class="text-primary text-center mx-auto font-display text-4xl md:text-[45px] font-black leading-tight max-w-5xl">
        <span class="reveal-word">Nous</span> <span class="reveal-word">vous</span> <span class="reveal-word">accompagnons</span> <span class="reveal-word">dans</span> <span class="reveal-word">la</span> <span class="reveal-word">conception,</span> <span class="reveal-word">l'évolution</span> <span class="reveal-word">et</span> <span class="reveal-word">le</span> <span class="reveal-word">déploiement</span> <span class="reveal-word">de</span> <span class="reveal-word">vos</span> <span class="reveal-word">outils</span> <span class="reveal-word">numériques.</span> <span class="reveal-word">Et</span> <span class="reveal-word">grâce</span> <span class="reveal-word">à</span> <span class="reveal-word">notre</span> <span class="reveal-word">connaissance</span> <span class="reveal-word">de</span> <span class="reveal-word">vos</span> <span class="reveal-word">métiers,</span> <span class="reveal-word">nos</span> <span class="reveal-word">propositions</span> <span class="reveal-word">sont</span> <span class="reveal-word">adaptées,</span> <span class="reveal-word">durables</span> <span class="reveal-word">et</span> <span class="reveal-word">très</span> <span class="reveal-word">utiles.</span>
      </p>
    </section>

    <section class="w-full flex justify-center py-20 px-6"> 
      <div class="slide-right flex flex-col md:flex-row max-w-[90%] md:max-w-7xl border-2 border-primary bg-white rounded-[60px] md:rounded-[100px] overflow-hidden">
        <div class="md:w-1/3 flex flex-col items-center justify-center p-12 border-b-2 md:border-b-0 md:border-r-2 border-primary bg-primary/5">
           <img src="/img/tree.png" class="w-48 h-48 object-contain mb-8"/>
           <h2 class="font-display text-4xl md:text-[45px] text-primary font-black uppercase text-center leading-tight">Pourquoi <br/> Edossah ?</h2>
        </div>
        <div class="md:w-2/3 p-12 md:p-20 flex flex-col justify-center text-center md:text-left space-y-8">
          <h3 class="text-4xl md:text-[45px] text-primary font-black uppercase leading-tight">"On comprend vos besoins"</h3>
          <p class="text-2xl md:text-[35px] text-primary leading-tight font-medium">Grâce à notre expérience du terrain, nous parlons le même langage que vos équipes. Pas de jargon technique, juste de l'efficacité brute.</p>
        </div>
      </div>
    </section>

    <section class="w-full flex justify-center py-20 px-6">
      <div class="slide-left max-w-[90%] md:max-w-7xl border-2 border-primary p-12 md:p-20 bg-white rounded-[60px] md:rounded-[100px]">
        <h2 class="font-display text-4xl md:text-6xl text-center uppercase font-black mb-16 text-primary tracking-tighter">Notre Approche</h2>
        <div class="flex flex-col gap-6 max-w-4xl mx-auto">
            <div v-for="(item, index) in approachItems" :key="index" 
                 class="border-2 border-primary cursor-pointer transition-all duration-500 rounded-[50px] overflow-hidden"
                 :class="itemStates[index] ? 'bg-white text-primary' : 'bg-primary text-white'"
                 @click="toggleItem(index)">
                <div class="p-8 flex justify-between items-center select-none">
                    <h3 class="text-2xl md:text-[40px] font-black uppercase tracking-tighter leading-none">{{ item.title }}</h3>
                    <div class="approach-icon text-5xl font-light transition-transform duration-300" :class="itemStates[index] ? 'text-primary' : 'text-white'">+</div>
                </div>
                <div class="approach-content h-0 opacity-0 overflow-hidden px-8">
                  <p class="text-xl font-medium leading-relaxed pb-8" :class="itemStates[index] ? 'text-slate-900' : 'text-white/90'">
                    {{ item.content }}
                  </p>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section class="w-full flex justify-center py-20 px-6"> 
      <div class="slide-right-2 flex flex-col md:flex-row max-w-[90%] md:max-w-7xl border-2 border-[#ff925c] bg-white rounded-[60px] md:rounded-[100px] overflow-hidden">
        <div class="md:w-1/3 flex flex-col items-center justify-center p-12 border-b-2 md:border-b-0 md:border-r-2 border-[#ff925c] bg-[#ff925c]/5">
           <img src="/img/adn.jpeg" class="w-48 h-48 object-contain mb-8 rotate-12 rounded-2xl"/>
           <h2 class="font-display text-4xl md:text-[45px] text-[#ff925c] font-black uppercase text-center tracking-tighter leading-tight">notre <br/> ADN</h2>
        </div>
        <div class="md:w-2/3 p-12 md:p-20 flex flex-col justify-center text-center md:text-left space-y-8">
          <h3 class="text-4xl md:text-[45px] text-[#ff925c] font-black uppercase tracking-tighter">"Expertise & Proximité"</h3>
          <p class="text-2xl md:text-[30px] text-[#ff925c] leading-tight font-black uppercase">Parce que transformer le social demande plus que du code : il faut une compréhension réelle des enjeux humains et une présence constante à vos côtés.</p>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-24 px-6 text-center enjeux-trigger">
        <h2 class="font-display text-4xl md:text-7xl text-primary uppercase font-black leading-tight tracking-tighter max-w-5xl mx-auto enjeux-title">
            des besoins concrets,<br/> un accompagnement sur mesure
        </h2>
    </section>

    <section class="bg-primary/5 p-8 md:p-20 mb-20">
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-2 gap-16 mb-20 items-center">
                <div class="p-2 overflow-hidden rounded-[50px] border-4 border-white shadow-xl enjeux-image">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover"/>
                </div>
                <div class="flex flex-col gap-8 text-center lg:text-left enjeux-content">
                    <h2 class="text-3xl md:text-[45px] font-display font-black uppercase leading-tight text-primary">Nous accompagnons les structures face à des enjeux très concrets</h2>
                    <p class="text-xl md:text-[30px] font-medium text-primary">Les structures que nous accompagnons rencontrent fréquemment les situations suivantes :</p>
                </div>
            </div>

            <div class="flex justify-center w-full">
                <div class="w-full max-w-4xl border-2 border-primary cursor-pointer transition-all duration-500 overflow-hidden rounded-[80px]"
                     :class="isComplexOpen ? 'bg-primary text-white shadow-2xl' : 'bg-white text-primary shadow-lg'"
                     @click="toggleComplex">
                    
                    <div class="p-10 flex flex-col md:flex-row justify-center items-center gap-6 select-none relative">
                        <h3 class="text-2xl md:text-3xl font-black lowercase tracking-tighter text-center">voir les situations</h3>
                        <div class="complex-icon text-5xl font-light transition-transform duration-300">+</div>
                    </div>

                    <div class="complex-content h-0 opacity-0 overflow-hidden px-8">
                        <div class="pb-12 space-y-10 text-center" :class="isComplexOpen ? 'text-white' : 'text-primary'">
                            <p class="text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                                Vos équipes passent plus de temps sur les tableurs que sur l'accompagnement humain. Nous simplifions vos processus pour :
                            </p>
                            <ul class="flex flex-col items-start gap-6 max-w-2xl mx-auto">
                                <li v-for="(point, i) in [
                                    'Simplifier la saisie des données sociales au quotidien',
                                     'Générer automatiquement vos rapports d activité financeurs',
                                        'Améliorer le suivi des parcours de vos usagers',
                                        'Sécuriser l hébergement de vos données de santé (HDS)'
                                ]" :key="i" class="flex flex-col md:flex-row items-center gap-6 group">
                                    <span class="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic rounded-full text-sm">0{{i+1}}</span>
                                    <span class="text-lg font-medium lowercase tracking-tight text-left">{{ point }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inter:wght@400;700;900&display=swap');
:root { --primary: #00A3B5; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background-color: #fff; overflow-x: hidden; color: #1a1a1a; font-family: 'Inter', sans-serif; }
.font-display { font-family: 'Montserrat', sans-serif; }
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
</style>