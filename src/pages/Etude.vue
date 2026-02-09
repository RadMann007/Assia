<template>
  <div class="font-clemente bg-[#F9FDF9] min-h-screen overflow-x-hidden text-slate-800">
    <!-- <NavBar /> -->
    <section class="relative py-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
      
      <div class="env-image-container w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl mb-12 border-[12px] border-white">
        <img src="/img/contact/2.jpg" 
             alt="Environnement" class="w-full h-[500px] object-cover transform scale-110">
      </div>

      <div class="text-center max-w-4xl mb-16 section-fade">
        <p class="text-[#64C27D] font-bold text-xl md:text-2xl leading-relaxed">
          Chez EDOSSAH, nous œuvrons au quotidien au service de l’impact social, et alignons toutes nos actions sur une démarche responsable de l’environnement.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
        <div class="eco-card p-10 rounded-[45px] border-2 border-[#64C27D]/20 bg-white shadow-xl text-center flex flex-col items-center justify-between min-h-[320px]">
          <p class="italic text-slate-600 text-lg">Nos prestataires sont des <br><span class="text-[#64C27D] font-black not-italic text-2xl uppercase">coopératives françaises</span> :</p>
          <div class="w-full space-y-4">
             <div class="text-xl font-bold text-slate-400 uppercase tracking-widest italic">Crédit Coopératif</div>
             <div class="text-2xl font-black text-[#64C27D] uppercase tracking-tighter">TeleCoop</div>
          </div>
        </div>

        <div class="eco-card p-10 rounded-[45px] border-2 border-[#64C27D]/20 bg-white shadow-xl text-center flex flex-col items-center justify-between min-h-[320px]">
          <p class="italic text-slate-600 text-lg">Notre serveur web et notre suite d’outils numériques sont <br><span class="text-[#64C27D] font-black not-italic text-2xl uppercase">propres et durables</span>, grâce à :</p>
          <div class="text-4xl font-black text-[#03A3B5] tracking-tighter">infomaniak</div>
        </div>

        <div class="eco-card p-10 rounded-[45px] border-2 border-[#64C27D]/20 bg-white shadow-xl text-center flex flex-col items-center justify-between min-h-[320px]">
          <p class="italic text-slate-600 text-lg">Nous accompagnons les <br><span class="text-[#64C27D] font-black not-italic text-2xl uppercase">futurs professionnels</span> sur des terrains bienveillants et formateurs.</p>
          <div class="text-6xl">
            <img src="/img/contact/etudiant.png" class="w-16 h-16 object-cover" />
          </div>
        </div>
      </div>

      <div class="server-banner w-full max-w-5xl bg-[#64C27D] p-10 rounded-[40px] shadow-2xl text-center text-white font-bold text-xl md:text-2xl leading-snug">
        Notre serveur applicatif (hébergeant Assia) est dans un centre de données en France, chez un hébergeur français.
      </div>
    </section>

    <section class="relative py-24 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="magic-text">
          <h2 class="text-[#64C27D] text-5xl md:text-8xl font-black uppercase leading-[0.9] mb-8">
            C'EST ICI <br> QUE LA <br> MAGIE <br> OPÈRE !
          </h2>
        </div>
        <div class="relative">
          <div class="magic-img-1 w-full h-[500px] rounded-[50px] overflow-hidden border-[15px] border-[#F9FDF9] shadow-2xl relative z-10">
            <img src="/img/contact/4.jfif" class="w-full h-full object-cover">
          </div>
          <div class="magic-img-2 absolute -bottom-10 -left-10 w-3/4 h-64 rounded-[40px] overflow-hidden border-[12px] border-white shadow-2xl z-20 hidden md:block">
            <img src="/img/contact/3.jpg" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 max-w-5xl mx-auto text-center">
      <div ref="textRevealContainer" class="waste-content space-y-12 opacity-0">
        <p class="text-xl md:text-3xl leading-relaxed text-slate-700">
          <span class="reveal-word">Nous</span> <span class="reveal-word">tendons</span> <span class="reveal-word">vers</span> <span class="reveal-word">le</span> <span class="reveal-word text-[#64C27D] font-black">0</span> <span class="reveal-word text-[#64C27D] font-black">déchet</span> <span class="reveal-word">et</span> <span class="reveal-word">alimentons</span> <span class="reveal-word">chaque</span> <span class="reveal-word">jour</span> <span class="reveal-word">le</span> <span class="reveal-word text-[#64C27D] font-black">compost</span> <span class="reveal-word">de</span> <span class="reveal-word">La</span> <span class="reveal-word">Turbine,</span> <span class="reveal-word">qui</span> <span class="reveal-word">est</span> <span class="reveal-word">notre</span> <span class="reveal-word">pépinière</span> <span class="reveal-word">bien</span> <span class="reveal-word">implantée</span> <span class="reveal-word">dans</span> <span class="reveal-word">son</span> <span class="reveal-word">territoire,</span> <span class="reveal-word">à</span> <span class="reveal-word">Cergy.</span>
        </p>
        <p class="text-xl md:text-3xl leading-relaxed text-slate-700">
          Où nous rapprochons l’emploi des territoires, et nos collaborateurs habitant dans d’autres régions sont en télétravail. Cette organisation permet de <span class="text-[#64C27D] font-black">limiter les déplacements professionnels</span>, majoritairement réalisés à vélo ou en transports en commun.
        </p>
      </div>
    </section>

    <section class="py-16 px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        <div class="jungle-img h-80 rounded-[40px] overflow-hidden shadow-xl -rotate-2">
          <img src="/img/contact/5.jpeg" class="w-full h-full object-cover">
        </div>
        <div class="jungle-img h-[500px] rounded-[50px] overflow-hidden shadow-2xl z-10 border-8 border-white">
          <img src="/img/contact/6.jpeg" class="w-full h-full object-cover">
        </div>
        <div class="jungle-img h-80 rounded-[40px] overflow-hidden shadow-xl rotate-2">
          <img src="/img/contact/5.jpeg" class="w-full h-full object-cover">
        </div>
      </div>
      <h3 class="jungle-title text-[#64C27D] text-3xl md:text-5xl font-black uppercase text-center mt-12 tracking-tighter">
        Nos bureaux sur le point de devenir une jungle..
      </h3>
    </section>

    <section class="mt-24 bg-[#03A3B5] py-24 px-6 text-white overflow-hidden rounded-t-[60px]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div class="map-text space-y-8">
          <h2 class="text-6xl md:text-8xl font-black uppercase leading-none">Bientôt <br> chez <br> vous ?!</h2>
          <div class="space-y-6 text-xl md:text-2xl opacity-95 font-medium leading-relaxed">
            <p>Notre équipe est basée en Ile-de-France, avec un bureau historique à Cergy (la ville de naissance d’ASSIA).</p>
            <p>Nous avons récemment ouvert une antenne à Nantes, et nous nous déployons sur de multiples territoires.</p>
          </div>
        </div>
        <div class="map-container relative flex justify-center">
          <div class="relative w-full max-w-md">
            <img src="/img/contact/carte.png" class="w-full h-auto">
            <div class="map-pin absolute top-[28%] left-[48%] w-5 h-5 bg-white rounded-full"></div> <div class="map-pin absolute top-[48%] left-[28%] w-5 h-5 bg-white rounded-full"></div>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from '../components/NavBar.vue';

gsap.registerPlugin(ScrollTrigger);

const textRevealContainer = ref(null);

onMounted(async () => {
  await nextTick();
  
  // Animation titre
  gsap.from(".title-green", { y: 60, opacity: 0, duration: 1, ease: "power3.out" });

  // Parallaxe Image Env
  gsap.to(".env-image-container img", {
    scrollTrigger: { trigger: ".env-image-container", start: "top bottom", end: "bottom top", scrub: true },
    scale: 1, y: 30
  });

  // Cartes
  gsap.from(".eco-card", {
    scrollTrigger: { trigger: ".eco-card", start: "top 85%", end: "top 30%", scrub: 1 },
    y: 100, 
    opacity: 0, 
    rotationX: 15,
    scale: 0.9,
    stagger: 0.3,
    ease: "power2.out"
  });

  // Magie Opère
  const magicTl = gsap.timeline({
    scrollTrigger: { 
      trigger: ".magic-text", 
      start: "top 80%", 
      end: "bottom 30%", 
      scrub: 1.2 
    }
  });
  
  magicTl.from(".magic-text h2", { 
    y: 100, 
    opacity: 0, 
    skewY: 10,
    duration: 1.5 
  })
  .from(".magic-img-1", { 
    scale: 0.8, 
    opacity: 0, 
    x: 100,
    duration: 1.5 
  }, "-=1")
  .from(".magic-img-2", { 
    scale: 0.5, 
    opacity: 0, 
    y: 100,
    duration: 1.5 
  }, "-=1.2");

  // Texte Déchets
  gsap.to(".waste-content", {
    scrollTrigger: { trigger: ".waste-content", start: "top 80%", scrub: 1 },
    opacity: 1, y: -30
  });

  // Galerie Jungle
  gsap.from(".jungle-img", {
    scrollTrigger: { trigger: ".jungle-img", start: "top 90%", scrub: 2 },
    y: 100, stagger: 0.3, ease: "power2.out"
  });

  // Carte Pins
  gsap.from(".map-pin", {
    scrollTrigger: { trigger: ".map-container", start: "top 70%" },
    scale: 0, stagger: 0.5, ease: "back.out(3)", duration: 1.2
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
      }, i * 0.03);
    });
  }
});
</script>

<style scoped>
.font-clemente { font-family: 'Clemente', sans-serif; }
.map-pin::after {
  content: ''; position: absolute; inset: -10px;
  border-radius: 50%; background: white; opacity: 0.4;
  animation: pulse 2s infinite;
}
@keyframes pulse { 0% { transform: scale(1); opacity: 0.4; } 100% { transform: scale(2.5); opacity: 0; } }
</style>