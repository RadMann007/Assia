<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 min-h-screen font-sans overflow-x-hidden selection:bg-primary selection:text-white">
    
    <!-- 1. LOADER (Importé de l'ancien code) -->
    <div ref="loader" class="fixed inset-0 bg-slate-900 z-[200] flex items-center justify-center flex-col p-6 text-center">
      <div class="loader-text opacity-0 translate-y-4">
        <h2 class="text-primary text-5xl md:text-7xl font-display font-black uppercase tracking-tighter">Edossah</h2>
        <p class="text-slate-400 mt-4 font-light tracking-widest uppercase text-xs md:text-sm font-body">Le numérique au service de l'humain</p>
      </div>
      <div class="w-48 h-[2px] bg-slate-800 mt-8 overflow-hidden rounded-full">
        <div ref="loaderBar" class="w-0 h-full bg-primary"></div>
      </div>
    </div>

    <!-- 2. MOBILE MENU (Importé de l'ancien code) -->
    <div ref="mobileMenuRef" class="fixed inset-0 w-screen h-screen bg-slate-900 z-[90] flex flex-col items-center justify-center hidden">
      <div class="flex flex-col items-center gap-10 relative z-10">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="isMenuOpen = false" class="mobile-link text-white text-4xl font-display font-black uppercase tracking-tighter hover:text-primary transition-colors text-center">{{ link.name }}</a>
        <div class="mobile-link pt-8">
           <button @click="isMenuOpen = false" class="bg-primary text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-lg shadow-xl">Contact</button>
        </div>
      </div>
    </div>

    <!-- HEADER (Fusionné) -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors duration-300">
      <div class="container mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2 nav-anim">
          <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span class="material-icons text-white text-sm">hub</span>
          </div>
          <span class="font-display text-2xl font-bold text-primary">EDOSSAH</span>
        </div>

        <nav class="hidden md:flex items-center border border-primary/30 dark:border-primary/50 rounded-full px-2 py-1 nav-anim">
          <a class="px-6 py-2 rounded-full bg-primary text-white font-medium" href="#">Accueil</a>
          <a class="px-6 py-2 rounded-full hover:text-primary transition-colors" href="#">ASSIA</a>
          <a class="px-6 py-2 rounded-full hover:text-primary transition-colors" href="#">Études de cas</a>
          <a class="px-6 py-2 rounded-full hover:text-primary transition-colors" href="#">Actualités</a>
        </nav>

        <div class="flex items-center gap-6 nav-anim">
          <a class="hidden sm:block font-medium hover:text-primary transition-colors" href="#">Contact</a>
          <button class="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <span class="material-icons text-primary">search</span>
          </button>
          <!-- Bouton Dark Mode -->
          <button 
            @click="toggleTheme" 
            class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <span class="material-icons text-slate-500 dark:text-slate-400">dark_mode</span>
          </button>
          <!-- Bouton Burger Mobile -->
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-primary p-2 relative z-[100]">
            <span class="material-icons text-4xl transition-colors duration-300" :class="isMenuOpen ? 'text-white' : 'text-primary'">{{ isMenuOpen ? 'close' : 'menu' }}</span>
          </button>
        </div>
      </div>
    </header>

    <main>
      <!-- HERO SECTION (Avec animations de texte et nouvelle image) -->
      <section class="container mx-auto px-6 py-12 md:py-24">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <!-- Texte animé style "Split Reveal" -->
            <h1 class="font-display text-4xl lg:text-6xl leading-tight text-primary uppercase tracking-tight overflow-hidden">
              <span class="block hero-line translate-y-full">Le numérique pensé pour</span>
              <span class="block hero-line translate-y-full">fluidifier le quotidien</span>
              <span class="block hero-line translate-y-full">des associations</span>
            </h1>
            <p class="hero-sub text-xl text-slate-600 dark:text-slate-400 max-w-lg">
              Nous créons des solutions sur-mesure pour que vous puissiez vous concentrer sur l'essentiel : votre mission sociale.
            </p>
            <div class="hero-sub flex gap-4">
              <!-- Bouton Magnétique -->
              <button ref="magneticBtn" class="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Découvrir nos solutions
              </button>
            </div>
          </div>

          <div class="relative hero-sub mt-8 lg:mt-0">
            <div class="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl"></div>
            <!-- Image de l'ancien code -->
            <img 
              alt="Logiciel ASSIA sur tablette" 
              class="relative rounded-xl shadow-2xl w-full object-cover aspect-video border-4 border-white dark:border-slate-700" 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
            />
            <div class="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 reveal">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-orange-100 flex items-center justify-center rounded-lg">
                  <span class="material-icons text-orange-500">dashboard</span>
                </div>
                <div>
                  <p class="text-xs uppercase font-bold text-slate-400">Logiciel</p>
                  <p class="font-display font-bold text-primary">ASSIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PARTNERS / MARQUEE (Intégration du défilement infini et images) -->
      <section class="py-12 bg-slate-50 dark:bg-slate-900/50 overflow-hidden border-y border-primary/10">
        <div class="w-full relative fade-mask">
          <div class="flex items-center gap-16 md:gap-24 w-max marquee-track px-6">
            <!-- On boucle les images pour l'effet infini -->
            <div v-for="(p, index) in [...partners, ...partners, ...partners]" :key="index" class="flex-shrink-0">
              <img :src="p.logo" :alt="p.name" class="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      <!-- BLUE BANNER -->
      <!-- <section class="reveal bg-primary py-16">
        <div class="container mx-auto px-6 text-center">
          <p class="text-white text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Nous vous accompagnons dans la <span class="font-bold">conception</span>, l'é<span class="italic">volution</span> et le <span class="font-bold">déploiement</span> de vos outils numériques. Et grâce à notre <span class="font-bold">connaissance de vos métiers</span>, nos propositions sont <span class="font-bold">adaptées</span>, durables et <span class="italic">très utiles</span>.
          </p>
        </div>
      </section> -->

      <!-- POURQUOIE EDOSSAH (Conservation du design "dots" mais avec animation d'apparition) -->
      <section class="container mx-auto px-6 py-20 relative">
        <div class="border-2 border-primary rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 bg-white dark:bg-slate-800/30 reveal">
          <div class="w-full md:w-1/2 flex flex-col items-center">
            <!-- Graphic des points du nouveau code -->
            <div class="grid grid-cols-5 gap-2 w-48 mb-8">
              <div class="col-start-3 w-4 h-4 rounded-full bg-primary opacity-20"></div>
              <div class="col-start-2 w-4 h-4 rounded-full bg-primary opacity-40"></div>
              <div class="col-start-4 w-4 h-4 rounded-full bg-primary opacity-40"></div>
              <div class="col-start-1 w-4 h-4 rounded-full bg-primary"></div>
              <div class="col-start-3 w-6 h-6 rounded-full bg-primary"></div>
              <div class="col-start-5 w-4 h-4 rounded-full bg-primary"></div>
              <div class="col-start-3 w-1 bg-primary h-24 mx-auto rounded-full opacity-30 mt-2"></div>
              <div class="col-start-3 flex flex-col gap-1 -mt-20">
                <div class="w-1 h-1 bg-primary rounded-full mx-auto"></div>
                <div class="w-1.5 h-1.5 bg-primary rounded-full mx-auto"></div>
                <div class="w-2 h-2 bg-primary rounded-full mx-auto"></div>
                <div class="w-2.5 h-2.5 bg-primary rounded-full mx-auto"></div>
                <div class="w-3 h-3 bg-primary rounded-full mx-auto"></div>
              </div>
            </div>
            <h2 class="font-display text-4xl text-primary text-center uppercase tracking-tight">
              Pourquoi <br/> Edossah ?
            </h2>
          </div>
          <div class="w-full md:w-1/2 space-y-6">
            <p class="text-xl text-primary font-medium">
              Tout simplement pour notre expérience du terrain : <span class="italic font-bold">on comprend vos besoins !</span>
            </p>
            <p class="text-slate-600 dark:text-slate-400">
              Quant aux professionnels, ils méritent un outil qui allège leur quotidien, et on y répond de manière sur mesure pour permettre à votre organisation de se concentrer sur le plus important : <span class="font-bold text-primary italic">son activité.</span>
            </p>
          </div>
        </div>
        <button class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-16 h-16 bg-white dark:bg-slate-900 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xl z-10 hidden md:flex">
          <span class="material-icons text-4xl">east</span>
        </button>
      </section>

      <!-- NOTRE APPROCHE (Conservation du design vertical + animation reveal) -->
      <section class="container mx-auto px-6 py-20 relative">
        <h2 class="font-display text-4xl text-primary text-center uppercase mb-12 tracking-wider reveal">
          Notre Approche
        </h2>
        <div class="max-w-4xl mx-auto space-y-8 relative">
          <div class="reveal border-2 border-primary/30 dark:border-primary/50 rounded-2xl p-8 text-center bg-white/50 dark:bg-slate-800/30">
            <h3 class="text-xl font-bold text-primary mb-2">Comprendre le terrain</h3>
            <div class="text-primary mb-4">
              <span class="material-icons">keyboard_arrow_down</span>
            </div>
            <p class="text-slate-600 dark:text-slate-400">
              Analyse des pratiques métier, des flux réels et des contraintes spécifiques à chaque structure.
            </p>
          </div>
          <div class="reveal bg-primary text-white rounded-2xl p-6 text-center font-bold text-xl shadow-lg">
            Co-construire avec les équipes
          </div>
          <div class="text-center reveal">
            <span class="material-icons text-primary text-4xl">arrow_downward</span>
          </div>
          <div class="reveal border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center text-slate-400">
            Déploiement &amp; Accompagnement
          </div>
        </div>
        <button class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 bg-white dark:bg-slate-900 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xl z-10 hidden md:flex">
          <span class="material-icons text-4xl">west</span>
        </button>
      </section>

      <!-- SECTION DEMO / CTA (Ajoutée depuis l'ancien code pour complétude visuelle) -->
      <section class="reveal py-20 md:py-40 px-6 text-center">
        <h2 class="font-display font-black text-4xl md:text-8xl text-primary uppercase leading-none mb-12 italic">Qu'est-ce qu'on <br />a pour vous ?</h2>
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <button class="bg-primary text-white px-10 py-5 rounded-full font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-slate-900 transition-all flex items-center gap-4">Découvrir ASSIA <span class="material-icons">arrow_forward</span></button>
            <a href="#contact" class="px-8 py-4 border-2 border-primary text-primary rounded-full font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Demander une démo</a>
        </div>
      </section>

    </main>

    <footer class="bg-slate-900 text-white py-16">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-12">
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span class="material-icons text-white text-sm">hub</span>
              </div>
              <span class="font-display text-2xl font-bold text-white">EDOSSAH</span>
            </div>
            <p class="text-slate-400 text-sm">
              Solutions numériques sur-mesure pour le secteur associatif et l'économie sociale et solidaire.
            </p>
          </div>
          <div>
            <h4 class="font-bold mb-6 text-primary">Société</h4>
            <ul class="space-y-4 text-slate-400">
              <li><a class="hover:text-white" href="#">À propos</a></li>
              <li><a class="hover:text-white" href="#">Expertise</a></li>
              <li><a class="hover:text-white" href="#">Études de cas</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-6 text-primary">Produits</h4>
            <ul class="space-y-4 text-slate-400">
              <li><a class="hover:text-white" href="#">ASSIA Core</a></li>
              <li><a class="hover:text-white" href="#">Gestion Bénévole</a></li>
              <li><a class="hover:text-white" href="#">Reporting ESS</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-6 text-primary">Suivez-nous</h4>
            <div class="flex gap-4">
              <a class="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors" href="#">
                <span class="material-icons text-sm">link</span>
              </a>
              <a class="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors" href="#">
                <span class="material-icons text-sm">email</span>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
          © {{ new Date().getFullYear() }} Edossah. Tous droits réservés.
        </div>
      </div>
    </footer>
  </div>
</template>

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
const mobileMenuRef = ref(null);
const isMenuOpen = ref(false);
let lenis;

// Données des partenaires (Ancien code)
const navLinks = [
  { name: 'Accueil', href: '#' },
  { name: 'ASSIA', href: '/application' },
  { name: 'Études de cas', href: '#' },
  { name: 'Actualités', href: '#' },
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

// Toggle Dark Mode (Nouveau code)
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark');
};

// Mobile Menu (Ancien code)
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

onMounted(async () => {
  await nextTick();
  
  // Init Menu position
  if (mobileMenuRef.value) { gsap.set(mobileMenuRef.value, { x: '100%' }); }

  // Init Lenis Smooth Scroll
  lenis = new Lenis({ 
    duration: 1.2, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    smooth: true 
  });
  
  function raf(time) { 
    lenis.raf(time); 
    ScrollTrigger.update(); 
    requestAnimationFrame(raf); 
  }
  requestAnimationFrame(raf);

  // --- TIMELINE D'ANIMATION ---
  const tl = gsap.timeline();

  // 1. Loader
  tl.to('.loader-text', { opacity: 1, y: 0, duration: 0.8 })
    .to(loaderBar.value, { width: '100%', duration: 1.2, ease: 'power2.inOut' }, '-=0.4')
    .to(loader.value, { y: '-100%', duration: 1, ease: 'power4.inOut', delay: 0.2 })
    
    // 2. Hero Content (Texte split reveal)
    .to('.hero-line', { y: 0, stagger: 0.1, duration: 1.2, ease: 'power4.out' }, '-=0.4')
    .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8 }, '-=0.5')
    
    // 3. Header
    .from('.nav-anim', { opacity: 0, y: -20, stagger: 0.1, duration: 0.8 }, '-=1');

  // --- BOUTON MAGNÉTIQUE ---
  if (magneticBtn.value) {
    const btn = magneticBtn.value;
    const onMove = (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.3; // Facteur réduit pour élégance
      const y = (e.clientY - r.top - r.height / 2) * 0.3;
      gsap.to(btn, { x, y, duration: 0.3 });
    };
    const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
  }

  // --- SCROLL REVEAL (Sections qui apparaissent) ---
  gsap.utils.toArray('.reveal').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: { 
        trigger: el, 
        start: 'top 85%', 
        toggleActions: 'play none none reverse' 
      },
    });
  });

  // --- MARQUEE INFINI ---
  gsap.to(".marquee-track", { 
    xPercent: -50, 
    repeat: -1, 
    duration: 40, 
    ease: "linear" 
  });

});

onUnmounted(() => {
  if (lenis) lenis.destroy();
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<style scoped>
/* Styles utilitaires pour les animations */
.hero-line { 
  display: block; 
  will-change: transform; 
}

.fade-mask {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

/* Configuration Lenis */
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto; }
.lenis.lenis-stopped { overflow: hidden; }

/* Cacher la scrollbar par défaut pour le look clean */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
</style>