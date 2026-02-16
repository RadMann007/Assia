<script setup>
import { onMounted, onUnmounted, ref, nextTick, watch } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

/* ---------- ÉTAT & RÉFÉRENCES ---------- */
const loader = ref(null);
const loaderBar = ref(null);
const magneticBtn = ref(null);
const magneticBtnCTA = ref(null);
const mobileMenuRef = ref(null);
const burgerBtnRef = ref(null); 
const newsletterEmail = ref('');

const isMenuOpen = ref(false);
let lenis;

const navLinks = [
  { name: 'Accueil', href: '#' },
  { name: 'ASSIA', href: '/application' },
  { name: 'Études de cas', href: '#' },
  { name: 'Actualités', href: '#' },
  { name: 'Démo', href: '#demo-section', isAction: true },
];

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

/* ---------- LOGIQUE D’ANIMATION ---------- */

watch(isMenuOpen, (val) => {
  if (val) {
    if (lenis) lenis.stop();
    document.body.style.overflow = 'hidden';
    gsap.to(mobileMenuRef.value, { x: '0%', duration: 0.6, ease: 'expo.out', display: 'flex' });
    gsap.fromTo('.mobile-link', { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
  } else {
    if (lenis) lenis.start();
    document.body.style.overflow = '';
    gsap.to(mobileMenuRef.value, { x: '100%', duration: 0.6, ease: 'expo.in' });
  }
});

const handleNewsletter = () => {
  if(newsletterEmail.value) {
    alert(`Merci ! L'email ${newsletterEmail.value} a été enregistré.`);
    newsletterEmail.value = '';
  }
};

onMounted(async () => {
  await nextTick();
  if (mobileMenuRef.value) { gsap.set(mobileMenuRef.value, { x: '100%' }); }

  lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
  function raf(time) { lenis.raf(time); ScrollTrigger.update(); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);

  const tl = gsap.timeline();
  tl.to('.loader-text', { opacity: 1, y: 0, duration: 0.8 })
    .to(loaderBar.value, { width: '100%', duration: 1.2, ease: 'power2.inOut' }, '-=0.4')
    .to(loader.value, { y: '-100%', duration: 1, ease: 'power4.inOut', delay: 0.2 })
    .to('.hero-line', { y: 0, stagger: 0.1, duration: 1.2, ease: 'power4.out' }, '-=0.4')
    .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8 }, '-=0.5')
    .from('.nav-anim', { opacity: 0, y: -20, stagger: 0.1, duration: 0.8 }, '-=1');

  [magneticBtn.value, magneticBtnCTA.value].forEach((btn) => {
    if (!btn) return;
    const onMove = (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.4;
      const y = (e.clientY - r.top - r.height / 2) * 0.4;
      gsap.to(btn, { x, y, duration: 0.3 });
    };
    const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
  });

  gsap.utils.toArray('.reveal').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
    });
  });

  gsap.to(".marquee-track", { xPercent: -50, repeat: -1, duration: 30, ease: "linear" });

  gsap.to('.split-reveal', {
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.trigger-section', start: 'top 70%' },
  });
});

onUnmounted(() => {
  if (lenis) lenis.destroy();
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
  <div class="bg-[#FFF8F0] min-h-screen font-body text-slate-800 selection:bg-primary selection:text-white overflow-x-hidden">
    
    <div ref="loader" class="fixed inset-0 bg-slate-900 z-[200] flex items-center justify-center flex-col p-6 text-center">
      <div class="loader-text opacity-0 translate-y-4">
        <h2 class="text-primary text-5xl md:text-7xl font-display font-black uppercase tracking-tighter">Edossah</h2>
        <p class="text-slate-400 mt-4 font-light tracking-widest uppercase text-xs md:text-sm">Le numérique au service de l'humain</p>
      </div>
      <div class="w-48 h-[2px] bg-slate-800 mt-8 overflow-hidden">
        <div ref="loaderBar" class="w-0 h-full bg-primary"></div>
      </div>
    </div>

    <div ref="mobileMenuRef" class="fixed inset-0 w-screen h-screen bg-slate-900 z-[90] flex flex-col items-center justify-center hidden">
      <div class="flex flex-col items-center gap-10 relative z-10">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="isMenuOpen = false" class="mobile-link text-white text-4xl font-display font-black uppercase tracking-tighter hover:text-primary transition-colors text-center" :class="{'text-[#FF925C]': link.isAction}">{{ link.name }}</a>
        <div class="mobile-link pt-8">
           <button @click="isMenuOpen = false" class="bg-primary text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-lg shadow-xl">Contact</button>
        </div>
      </div>
    </div>

    <header class="w-full py-4 md:py-6 px-6 md:px-12 flex items-center justify-between fixed top-0 z-50 bg-[#FFF8F0]/80 backdrop-blur-md">
      <div class="flex items-center gap-2 nav-anim relative z-[50]">
        <span class="material-icons text-primary text-3xl">diversity_3</span>
        <span class="text-xl md:text-2xl font-display font-black text-primary tracking-widest uppercase">Edossah</span>
      </div>
      <nav class="hidden md:flex items-center gap-8 border-2 border-[#00a9b5] rounded-lg px-8 py-3 bg-white/50 nav-anim">
        <a v-for="link in navLinks.filter(l => !l.isAction)" :key="link.name" :href="link.href" class="text-primary hover:text-primary transition-colors uppercase text-[10px] tracking-widest font-bold">{{ link.name }}</a>
      </nav>
      <div class="nav-anim hidden md:flex items-center gap-4">
        <a href="#demo-section" class="border-2 border-primary text-primary px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all">Démo</a>
        <button class="bg-primary text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-lg shadow-primary/20">Contact</button>
      </div>
      <button ref="burgerBtnRef" @click="isMenuOpen = !isMenuOpen" class="md:hidden text-primary nav-anim relative z-[100] p-2">
        <span class="material-icons text-4xl transition-colors duration-300" :class="isMenuOpen ? 'text-white' : 'text-primary'">{{ isMenuOpen ? 'close' : 'menu' }}</span>
      </button>
    </header>

    <main class="pt-24 md:pt-32">
      <section class="px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 class="font-display font-black text-4xl md:text-6xl lg:text-[3.5vw] text-primary leading-[1] md:leading-[0.9] uppercase italic">
              <div class="overflow-hidden"><span class="block hero-line translate-y-full">Le numérique</span></div>
              <div class="overflow-hidden flex flex-wrap items-center gap-2 md:gap-4"><span class="block hero-line translate-y-full">pensé pour</span></div>
              <div class="overflow-hidden"><span class="block hero-line translate-y-full">fluidifier le</span></div>
              <div class="overflow-hidden"><span class="block hero-line translate-y-full">Quotidien des associations</span></div>
            </h1>
          </div>
          <div class="relative hero-sub mt-8 lg:mt-0 order-first lg:order-last">
            <div class="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl"></div>
            <div class="relative overflow-hidden rounded-[2rem] shadow-2xl group border-4 border-white h-[300px] md:h-[500px]">
              <img alt="App" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" />
            </div>
          </div>
        </div>
      </section>

      <section class="reveal py-12 border-y border-slate-100 bg-white overflow-hidden">
        <div class="w-full relative fade-mask">
          <div class="flex items-center gap-16 md:gap-24 w-max marquee-track px-6">
            <div v-for="(p, index) in [...partners, ...partners]" :key="index" class="flex-shrink-0">
              <img :src="p.logo" :alt="p.name" class="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      <section class="reveal bg-primary py-16 md:py-24 px-6 md:px-12 my-12 md:my-20 overflow-hidden relative rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-12">
        <div class="max-w-5xl mx-auto text-center relative z-10 text-white">
          <p class="text-xl md:text-4xl font-light leading-tight">
            Nous accompagnons dans la conception, l'évolution et le déploiement de vos outils numériques.
            Et grâce à notre connaissance de vos métiers, nos propositions sont adaptées, durables et très utiles.
          </p>
        </div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </section>

      <section class="px-6 md:px-12 py-16 md:py-32 max-w-6xl mx-auto trigger-section">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div class="md:col-span-5">
            <div class="overflow-hidden">
              <h2 class="split-reveal translate-y-full font-display font-black text-4xl md:text-7xl text-primary uppercase leading-none">Pourquoi <br />Edossah ?</h2>
            </div>
          </div>
          <div class="md:col-span-7 space-y-8">
            <div class="reveal text-lg text-slate-600 leading-relaxed">
              <p>Tout simplement pour notre expérience du terrain : on comprend vos besoins ! Nous plaçons <span class="text-primary font-bold uppercase tracking-tighter">l'humain</span> au centre.</p>
              <div class="flex items-start gap-4 p-6 mt-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <p class="text-sm md:text-base text-slate-700">Quand aux professionnels, ils méritent un outil qui allège leur quotidien, permettant à votre organisation de se concentrer sur son activité.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-14 px-4 md:px-12">
        <div class="reveal max-w-5xl mx-auto bg-white border-2 border-primary/10 p-8 md:p-12 shadow-2xl shadow-primary/5">
          <h1 class="hover:cursor-pointer uppercase text-3xl md:text-6xl font-display font-black text-primary text-center mb-16 italic tracking-tighter">Notre approche</h1>
          
          <div class="grid grid-cols-1 gap-6">
            <div class="flex flex-col items-center gap-4 text-center border-[#00a9b5] border-2 border-primary/20 hover:border-primary p-10 rounded-[2.5rem] transition-all group">
              <h2 class="text-2xl md:text-3xl font-display font-black uppercase text-primary">Comprendre le terrain</h2>
              <span class="material-icons text-primary animate-bounce">expand_more</span>
              <p class="text-slate-500 font-medium max-w-2xl text-lg leading-relaxed">Analyse des pratiques métier, des flux réels et des contraintes spécifiques à chaque structure.</p>
            </div>

            <div class="flex flex-col items-center gap-4 text-center border-2 border-[#00a9b5] border-primary/20 hover:border-primary p-10 rounded-[2.5rem] transition-all group">
              <h2 class="text-2xl md:text-3xl font-display font-black uppercase text-primary">Co-construire avec les équipes</h2>
              <span class="material-icons text-primary animate-bounce">expand_more</span>
              <p class="text-slate-500 font-medium max-w-2xl text-lg leading-relaxed">Ateliers, tests utilisateurs et itérations continues pour concevoir des outils réellement utiles.</p>
            </div>

            <div class="flex flex-col items-center gap-4 text-center border-2 border-[#00a9b5] border-primary/20 hover:border-primary p-10 rounded-[2.5rem] transition-all group">
              <h2 class="text-2xl md:text-3xl font-display font-black uppercase text-primary">Livrer vite pour rassurer</h2>
              <span class="material-icons text-primary animate-bounce">expand_more</span>
              <p class="text-slate-500 font-medium max-w-2xl text-lg leading-relaxed">Des cycles courts permettant de proposer rapidement des versions opérationnelles, testables et ajustables.</p>
            </div>

            <div class="flex flex-col items-center gap-4 text-center border-2 border-[#00a9b5] border-primary/20 hover:border-primary p-10 rounded-[2.5rem] transition-all group">
              <h2 class="text-2xl md:text-3xl font-display font-black uppercase text-primary">Penser dans la durée</h2>
              <span class="material-icons text-primary animate-bounce">expand_more</span>
              <p class="text-slate-500 font-medium max-w-2xl text-lg leading-relaxed">Des architectures évolutives capables d'accompagner les changements de dispositifs et de réglementations.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="reveal py-16 px-6 text-center">
        <h2 class="text-primary font-display font-black text-xl md:text-4xl uppercase mb-12 italic">Ils reconnaissent notre professionnalisme :</h2>
        <div class="max-w-5xl mx-auto bg-primary p-8 md:p-16 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
          <img src="https://edossah.fr/wp-content/uploads/2025/07/logo-region-idf-980x224.png" class="h-12 md:h-16 brightness-0 invert object-contain" alt="IDF" />
          <img src="https://edossah.fr/wp-content/uploads/2025/07/bpi-france-1-980x262.png" class="h-8 md:h-12 brightness-0 invert object-contain" alt="BPI" />
        </div>
      </section>

      <section id="demo-section" class="reveal py-20 md:py-40 px-6 text-center">
        <h2 class="font-display font-black text-4xl md:text-8xl text-primary uppercase leading-none mb-12 italic">Qu'est-ce qu'on <br />a pour vous ?</h2>
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <div ref="magneticBtnCTA"><button class="bg-primary text-white px-10 py-5 rounded-full font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-slate-900 transition-all flex items-center gap-4">Découvrir ASSIA <span class="material-icons">arrow_forward</span></button></div>
            <a href="#contact" class="px-8 py-4 border-2 border-primary text-primary rounded-full font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Demander une démo</a>
        </div>
      </section>

      <section class="bg-primary py-16 md:py-24 px-6 md:px-12 relative overflow-hidden text-white">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div class="space-y-8">
            <h1 class="text-3xl md:text-5xl font-display font-black uppercase italic">Ensuite, des prestations:</h1>
            <ul class="space-y-4">
              <li v-for="p in ['Audit de vos besoins', 'Conception sur-mesure', 'Formation des équipes', 'Maintenance évolutive']" :key="p" class="flex items-center gap-4 text-lg md:text-xl font-medium">
                <span class="bg-white/20 p-2 rounded-full material-icons text-sm">check</span> {{ p }}
              </li>
            </ul>
            <button class="bg-white text-primary px-8 py-4 rounded-full font-black text-xl shadow-xl hover:scale-105 transition-transform uppercase">Je découvre les EDC</button>
          </div>
          <div class="relative h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl">
              <img alt="Prestations" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" />
          </div>
        </div>
      </section>

      <section class="bg-primary/5 py-24">
        <div class="bg-primary px-6 py-12 md:py-24 max-w-5xl mx-auto md:rounded-[3rem] relative text-white">
          <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div class="rounded-3xl overflow-hidden border-4 border-white shadow-xl h-[300px] md:h-[400px]">
                <img alt="Team" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" />
             </div>
             <div class="text-center md:text-left">
                <h1 class="text-8xl md:text-9xl font-display font-black leading-none mb-4">12</h1>
                <p class="text-lg leading-relaxed opacity-90">Le chiffre 12 est le nombre d'experts chez <strong class="uppercase font-bold">Edossah</strong>, unissant connaissance sociale et maîtrise technologique.</p>
             </div>
          </div>
        </div>
      </section>

      <section class="py-20 px-6 bg-slate-900 relative overflow-hidden">
          <div class="max-w-4xl mx-auto relative z-10 text-center">
              <h2 class="text-3xl md:text-5xl font-display font-black text-white mb-6 uppercase">Innovation numérique</h2>
              <form @submit.prevent="handleNewsletter" class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                  <input v-model="newsletterEmail" type="email" required placeholder="Votre adresse email" class="flex-1 px-6 py-4 rounded-full border-2 border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:border-primary outline-none transition-all text-lg" />
                  <button type="submit" class="bg-primary text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-[#008c96] transition-all">S'inscrire</button>
              </form>
          </div>
      </section>
    </main>

    <footer class="py-12 px-6 border-t border-slate-200 text-center bg-white">
      <p class="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">© {{ new Date().getFullYear() }} Edossah — Créé pour l'impact social.</p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

:root { --primary: var(--primary); --secondary: #FF925C; }
.font-display { font-family: 'Montserrat', sans-serif; }
.font-body { font-family: 'Inter', sans-serif; }
.text-primary { color: var(--primary); }
.bg-primary { background-color: var(--primary); }
.hero-line { display: block; will-change: transform; }

html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto; }
.lenis.lenis-stopped { overflow: hidden; }
::-webkit-scrollbar { width: 0; }

.fade-mask {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
</style>