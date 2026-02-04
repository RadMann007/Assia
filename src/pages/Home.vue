<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import NavBar from '../components/NavBar.vue';

gsap.registerPlugin(ScrollTrigger);

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

onMounted(() => {
  const lenis = new Lenis({ duration: 1.2 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));

  const heroTl = gsap.timeline();
  heroTl.from(".hero-title span", { y: 100, rotate: 5, duration: 1, stagger: 0.1, ease: "power4.out" })
        .from(".hero-image", { clipPath: "inset(0% 100% 0% 0%)", duration: 1.5, ease: "expo.out" }, "-=0.5");

  gsap.from(".slide-right", { x: -400, opacity: 0, scrollTrigger: { trigger: ".slide-right", start: "top bottom", end: "top center", scrub: 1 } });
  gsap.from(".slide-left", { x: 400, opacity: 0, scrollTrigger: { trigger: ".slide-left", start: "top bottom", end: "top center", scrub: 1 } });
  gsap.from(".slide-right-2", { x: -400, opacity: 0, scrollTrigger: { trigger: ".slide-right-2", start: "top bottom", end: "top center", scrub: 1 } });
});
</script>

<template>
  <div class="main flex flex-col font-body min-h-screen bg-white overflow-x-hidden">
    
    <NavBar />

    <section class="container mx-auto px-6 py-24 md:py-32">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="space-y-10 overflow-hidden text-center lg:text-left">
          <h1 class="hero-title text-4xl md:text-7xl font-display font-primary leading-tight text-primary uppercase">
            <span class="inline-block">Le</span> <span class="inline-block">numérique</span> <br/>
            <span class="inline-block text-black italic">pensé</span> <span class="inline-block">pour</span> <br/>
            <span class="inline-block">fluidifier le quotidien</span><br/>
            <span class="inline-block">des associations</span>
          </h1>
        </div>
        <div class="relative overflow-hidden hero-image">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" class="w-full object-cover h-[450px] md:h-[550px]" alt="Dashboard" />
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

    <section class="flex w-full p-8 bg-primary">
      <p class="text-white mx-[20%] font-display text-xl">
        Nous vous accompagnons dans la conception, l'évolution et le déploiement de vos outils numériques. Et grace a notre connaissance de vos métiers,
        nos propositions sont adaptées, durables et tres utiles.
      </p>
    </section>

    <section class="w-full flex justify-start py-20"> 
      <div class="slide-right flex flex-col md:flex-row w-full md:w-[92%] border-y-4 border-r-4 border-primary bg-white shadow-[20px_20px_0px_0px_rgba(3,163,181,0.1)]">
        <div class="md:w-1/3 flex flex-col items-center justify-center p-12 border-b-4 md:border-b-0 border-primary">
           <img src="/img/tree.png" class="w-48 h-48 object-contain mb-8"/>
           <h2 class="font-display text-4xl md:text-5xl text-primary font-black uppercase text-center">Pourquoi <br/> Edossah ?</h2>
        </div>
        <div class="md:w-2/3 p-12 md:p-20 space-y-10 text-center md:text-left">
          <h3 class="text-3xl text-slate-900 font-bold italic uppercase">"On comprend vos besoins"</h3>
          <p class="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium mx-auto md:mx-0">Grâce à notre expérience du terrain, nous parlons le même langage que vos équipes. Pas de jargon technique, juste de l'efficacité brute.</p>
          <div class="h-2 w-24 bg-primary mx-auto md:mx-0"></div>
        </div>
      </div>
    </section>

    <section class="w-full flex justify-end py-20">
      <div class="slide-left w-full md:w-[92%] border-y-4 border-l-4 border-primary p-8 md:p-16 bg-white shadow-[-20px_20px_0px_0px_rgba(3,163,181,0.1)]">
        <h2 class="font-display text-4xl md:text-6xl text-center uppercase font-black mb-16">Notre <span class="text-primary italic">Approche</span></h2>
        <div class="flex flex-col gap-4 max-w-4xl mx-auto">
            <div v-for="(item, index) in approachItems" :key="index" 
                 class="border-2 border-primary cursor-pointer transition-all duration-500"
                 :class="itemStates[index] ? 'bg-primary text-white' : 'bg-white text-slate-900'"
                 @click="toggleItem(index)">
                <div class="p-6 flex justify-between items-center select-none">
                    <h3 class="text-xl md:text-2xl font-black uppercase tracking-tighter">{{ item.title }}</h3>
                    <div class="approach-icon text-4xl font-light transition-transform duration-300">+</div>
                </div>
                <div class="approach-content h-0 opacity-0 overflow-hidden px-6"><p class="text-lg font-medium leading-relaxed pb-6">{{ item.content }}</p></div>
            </div>
        </div>
      </div>
    </section>

    <section class="w-full flex justify-start py-20"> 
      <div class="slide-right-2 flex flex-col md:flex-row w-full md:w-[92%] border-y-4 border-r-4 border-orange-300 bg-white">
        <div class="md:w-1/3 flex flex-col items-center justify-center p-12 border-b-4 md:border-b-0 border-orange-300">
           <img src="/img/adn.jpeg" class="w-48 h-48 object-contain mb-8 rotate-12"/>
           <h2 class="font-display text-4xl md:text-5xl text-orange-300 font-black uppercase text-center tracking-tighter">notre <br/> ADN</h2>
        </div>
        <div class="md:w-2/3 p-12 md:p-20 space-y-10 text-center md:text-left">
          <h3 class="text-3xl text-slate-900 font-bold italic uppercase">"Expertise & Proximité"</h3>
          <p class="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium mx-auto md:mx-0">Parce que transformer le social demande plus que du code : il faut une compréhension réelle des enjeux humains et une présence constante à vos côtés.</p>
          <div class="h-2 w-24 bg-orange-300 mx-auto md:mx-0"></div>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-24 px-6 text-center">
        <h2 class="font-display text-4xl md:text-7xl text-primary uppercase font-black leading-tight tracking-tighter max-w-5xl mx-auto">
            des besoins concrets,<br/> un accompagnement sur mesure
        </h2>
    </section>

    <section class="bg-primary text-white p-8 md:p-20">
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-2 gap-16 mb-20 items-center">
                <div class="p-2">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" class="w-full"/>
                </div>
                <div class="flex flex-col gap-8 text-center lg:text-left">
                    <h2 class="text-4xl md:text-5xl font-display font-black uppercase leading-tight">Nous accompagnons les structures face à des enjeux très concrets</h2>
                    <p class="text-xl font-medium opacity-90 border-l-4 border-white pl-6">Les structures que nous accompagnons rencontrent fréquemment les situations suivantes :</p>
                </div>
            </div>

            <div class="flex justify-center w-full">
                <div class="w-full max-w-4xl border-4 border-white cursor-pointer transition-all duration-500 overflow-hidden"
                     :class="isComplexOpen ? 'bg-white text-primary' : 'bg-transparent text-white'"
                     @click="toggleComplex">
                    
                    <div class="p-10 flex flex-col md:flex-row justify-center items-center gap-6 select-none relative">
                        <h3 class="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Voir les situations</h3>
                        <div class="complex-icon text-5xl font-light transition-transform duration-300">+</div>
                    </div>

                    <div class="complex-content h-0 opacity-0 overflow-hidden px-8">
                        <div class="pb-12 space-y-10 text-center" :class="isComplexOpen ? 'text-slate-900' : 'text-white'">
                            <p class="text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                                Vos équipes passent plus de temps sur les tableurs que sur l'accompagnement humain. Nous simplifions vos processus pour :
                            </p>
                            <ul class="flex flex-col items-start gap-6 max-w-2xl mx-auto">
                                <li v-for="(point, i) in [
                                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
                                     'Provident explicabo vitae unde? Quas amet tempora nostrum',
                                        'reiciendis recusandae explicabo animi delectus debitis aut',
                                        'molestias ex architecto sed laborum totam accusantium.'
                                ]" :key="i" class="flex flex-col md:flex-row items-center gap-6 group">
                                    <span class="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center font-black bg-primary text-white italic">0{{i+1}}</span>
                                    <span class="text-lg md:text-xl font-bold uppercase tracking-tight text-left">{{ point }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-slate-900 text-white/50 py-16 text-center uppercase text-sm font-bold mt-20">
      &copy; 2026 Edossah — Agence Numérique Sociale
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inter:wght@400;700;900&display=swap');
:root { --primary: #03A3B5; }
* { border-radius: 0 !important; margin: 0; padding: 0; box-sizing: border-box; }
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