<template>
  <div class="py-16 md:py-24 overflow-hidden bg-white w-full select-none">
    
    <div class="mb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <!-- <h2 class="text-3xl md:text-5xl font-black text-[#03A3B5] uppercase leading-tight">
        UN ENVIRONNEMENT <br> DE TRAVAIL <span class="text-[#ff925c]">STIMULANT</span>
      </h2> -->
    </div>

    <div class="carousel-container relative w-full flex overflow-hidden">
      <div class="carousel-track flex items-stretch gap-6 md:gap-10 pl-6 md:pl-12">
        <!-- Original Set -->
        <div v-for="(card, index) in cards" :key="'orig-'+index" 
             class="carousel-item relative flex-shrink-0 w-[300px] md:w-[400px] bg-primary border-2 border-[#03A3B5] rounded-[35px] p-8 md:p-10 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow cursor-default group">
            <h3 class="text-2xl md:text-3xl font-black text-white uppercase font-display ">
              {{ card.title }}
            </h3>
            <p class="text-base md:text-lg text-white font-clementeMini leading-relaxed">
              {{ card.content }}
            </p>
        </div>

        <!-- Duplicate Set for Infinite Loop -->
        <div v-for="(card, index) in cards" :key="'copy-'+index" 
             class="carousel-item relative flex-shrink-0 w-[300px] md:w-[400px] bg-primary border-2 border-[#03A3B5] rounded-[35px] p-8 md:p-10 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow cursor-default group">
            <h3 class="text-2xl md:text-3xl font-black text-white uppercase font-display ">
              {{ card.title }}
            </h3>
            <p class="text-base md:text-lg text-white font-clementeMini leading-relaxed">
              {{ card.content }}
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const cards = [
  { 
    title: 'Engagement', 
    content: 'Nous sommes issus du terrain et engagés aux côtés des acteurs du travail social. Tout ce que nous construisons vise une utilité sociale concrète, au service du quotidien des professionnels.' 
  },
  { 
    title: 'Proximité', 
    content: 'Nous avançons au même niveau que nos partenaires : à l’écoute, disponibles et accessibles. La relation compte autant que l’outil.' 
  },
  { 
    title: 'Valorisation', 
    content: 'Nous croyons profondément à la valeur du travail social. Nos solutions visent à rendre visible l’essentiel, soutenir l’expertise métier et reconnaître ce qui est souvent invisible.' 
  },
  { 
    title: 'Simplicité', 
    content: 'Nous concevons des fonctionnalités claires, intuitives et pensées pour alléger l’administratif. Moins de complexité, plus de temps pour l’accompagnement.' 
  },
  { 
    title: 'Responsabilité', 
    content: 'Nous adoptons des pratiques sobres et responsables au quotidien. Sans en faire un argument, nous avançons avec attention et cohérence pour limiter notre impact environnemental.' 
  },
  { 
    title: 'Confiance', 
    content: 'Nous faisons ce que nous disons. Sécurité, confidentialité, éthique et constance sont les bases de relations durables et sereines.' 
  },
  { 
    title: 'Agilité', 
    content: 'Nous évoluons avec les réalités du terrain. Les retours des professionnels guident nos choix et nourrissent une amélioration continue, pragmatique et utile.' 
  }
];

onMounted(() => {
  // Calculer la largeur totale d'un set de cartes (incluant les gaps)
  // On suppose que tous les items ont la même taille (ou on prend le premier pour ref)
  const items = document.querySelectorAll('.carousel-item');
  if (items.length === 0) return;

  const firstItem = items[0];
  const itemWidth = firstItem.offsetWidth;
  const style = window.getComputedStyle(document.querySelector('.carousel-track'));
  const gap = parseFloat(style.getPropertyValue('gap')) || 0;
  
  // La distance à parcourir est la largeur de (N cartes + N gaps)
  // N = cards.length (7)
  const totalWidth = (itemWidth + gap) * cards.length;

  gsap.to('.carousel-track', {
    x: -totalWidth,
    duration: 60, // Slower speed for reading text
    ease: 'none',
    repeat: -1
  });
});
</script>

<style scoped>
.carousel-container {
  -webkit-overflow-scrolling: touch;
}
/* Font Adjustments ensuring readability */
</style>
