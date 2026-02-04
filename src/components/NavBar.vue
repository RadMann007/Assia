<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6"
    :class="[
      isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'
    ]"
  >
    <div class="container mx-auto flex items-center justify-between">
      
      <!-- LOGO -->
      <a href="/" class="logo font-display text-2xl font-black uppercase tracking-tighter flex items-center gap-2 transition-transform hover:scale-105"
         :class="isScrolled ? 'text-[#00A3B5]' : 'text-[#00A3B5] md:text-white'">
         <!-- NOTE: J'ai mis md:text-white pour que le logo soit blanc sur grand écran quand on est en haut (sur le fond orange), 
              et bleu quand on scrolle. Si vos autres pages ont un fond blanc en haut, mettez juste text-[#00A3B5] partout. -->
        edossah
      </a>

      <!-- MENU DESKTOP -->
      <ul class="hidden md:flex items-center gap-1 font-display font-black uppercase text-[12px] tracking-widest border-2 border-[#00A3B5] p-1.5 rounded-full bg-white/50 backdrop-blur-sm text-[#00A3B5] shadow-sm">
        
        <!-- On vérifie si currentPath est égal à l'url du lien pour activer la couleur -->
        <a v-for="(link, index) in links" :key="index" :href="link.url"
           class="px-5 py-2.5 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#00A3B5] hover:text-white"
           :class="{ 'bg-[#00A3B5] text-white': currentPath === link.url }">
           {{ link.name }}
        </a>

      </ul>

      <!-- ACTION & MOBILE -->
      <div class="flex items-center gap-4">
        <!-- BOUTON CONTACT -->
        <a href="/contact" class="hidden md:block bg-[#FF9F6F] text-white px-8 py-3 font-bold rounded-full hover:bg-[#ff8f5a] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-wider">
          Contact
        </a>

        <!-- BURGER MENU (MOBILE) -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-[#00A3B5] focus:outline-none bg-white/80 p-2 rounded-lg">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- MENU MOBILE OVERLAY -->
    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col p-6 gap-4 md:hidden">
        <a v-for="(link, index) in links" :key="index" :href="link.url" 
           class="font-display font-black uppercase text-sm text-center py-3 border-b border-gray-100 transition-colors"
           :class="currentPath === link.url ? 'text-[#FF9F6F]' : 'text-[#00A3B5] hover:text-[#FF9F6F]'">
          {{ link.name }}
        </a>
        <a href="/contact" class="bg-[#FF9F6F] text-white w-full py-4 font-bold rounded-xl uppercase tracking-widest mt-2">
          Contact
        </a>
      </div>
    </transition>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const currentPath = ref('/'); // Par défaut '/'

const links = [
  { name: 'Accueil', url: '/' },
  { name: 'Assia', url: '/application' },
  { name: 'Études de cas', url: '/etude' },
  { name: 'Actualités', url: '/actus' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  // 1. Détection de l'URL actuelle au chargement de la page
  currentPath.value = window.location.pathname;

  // 2. Gestion du scroll
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>