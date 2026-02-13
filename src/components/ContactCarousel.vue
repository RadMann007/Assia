<template>
  <div class="py-16 md:py-24 overflow-hidden bg-white w-full select-none">
    
    <div class="mb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <!-- <h2 class="text-3xl md:text-5xl font-black text-[#03A3B5] uppercase leading-tight">
        UN ENVIRONNEMENT <br> DE TRAVAIL <span class="text-[#ff925c]">STIMULANT</span>
      </h2> -->
    </div>

    <div class="carousel-container relative w-full flex overflow-hidden">
      <div class="carousel-track flex items-center gap-6 md:gap-10 pl-6 md:pl-12">
        <!-- Original Set -->
        <div v-for="(img, index) in images" :key="'orig-'+index" class="carousel-item relative flex-shrink-0 w-[280px] md:w-[450px] aspect-[4/3] rounded-[35px] overflow-hidden shadow-xl group cursor-pointer">
           <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
           <div class="absolute inset-0 bg-[#03A3B5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <!-- Duplicate Set for Infinite Loop -->
        <div v-for="(img, index) in images" :key="'copy-'+index" class="carousel-item relative flex-shrink-0 w-[280px] md:w-[450px] aspect-[4/3] rounded-[35px] overflow-hidden shadow-xl group cursor-pointer">
           <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
           <div class="absolute inset-0 bg-[#03A3B5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const images = [
  { src: '/img/contact/1.jpg', alt: 'Bureau Assia' },
  { src: '/img/contact/2.jpg', alt: 'L\'équipe' },
  { src: '/img/contact/3.jpg', alt: 'Espace de travail' },
  { src: '/img/contact/5.jpeg', alt: 'Collaboration' },
  { src: '/img/contact/6.jpeg', alt: 'Moment de détente' },
];

onMounted(() => {
  // Calculer la largeur totale d'un set d'images (incluant les gaps)
  // On suppose que tous les items ont la même taille et le même gap
  const items = document.querySelectorAll('.carousel-item');
  if (items.length === 0) return;

  const firstItem = items[0];
  const itemWidth = firstItem.offsetWidth;
  const style = window.getComputedStyle(document.querySelector('.carousel-track'));
  const gap = parseFloat(style.getPropertyValue('gap')) || 0;
  
  // La distance à parcourir est la largeur de (N images + N gaps)
  // N = images.length (5)
  const totalWidth = (itemWidth + gap) * images.length;

  gsap.to('.carousel-track', {
    x: -totalWidth,
    duration: 30, // Vitesse du défilement
    ease: 'none',
    repeat: -1
  });
});
</script>

<style scoped>
/* Optionnel : cacher la scrollbar si jamais */
.carousel-container {
  -webkit-overflow-scrolling: touch;
}
</style>
