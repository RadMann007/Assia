<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6"
    :class="[currentPath === '/application' ? 'py-3 bg-[#ff925c] backdrop-blur-md shadow-md' : 'py-3 bg-[#00A3B5] backdrop-blur-md shadow-md']"

  >
    <div class="container mx-auto flex items-center justify-between">
      
      <!-- LOGO -->
      <a href="/" class="logo flex items-center gap-2 transition-transform hover:scale-105">
        <img v-if="currentPath === '/application'" 
             src="/logo/LogoAssia.png" 
             alt="Assia" 
             class="h-10 w-auto" />
        <img v-else 
             src="/logo/LogoEdossah.png" 
             alt="Edossah" 
             class="h-10 w-auto" />
      </a>

      <!-- MENU DESKTOP -->
      <ul 
        class="hidden md:flex items-center gap-1 font-display font-black uppercase text-[12px] tracking-widest p-1.5 rounded-xl backdrop-blur-sm shadow-sm border-2 transition-colors duration-300"
        :class="[
          currentPath === '/application' 
            ? 'border-[#ff925c] bg-white text-[#ff925c]' 
            : 'border-[#00A3B5] bg-white text-[#00A3B5]'
        ]"
      >
        
        <a v-for="(link, index) in links" :key="index" :href="link.url"
           class="px-5 py-2.5 rounded-lg cursor-pointer transition-all duration-300"
           :class="[
             currentPath === '/application'
               ? (currentPath === link.url ? 'bg-[#ff925c] text-white' : 'hover:bg-[#ff925c] hover:text-white')
               : (currentPath === link.url ? 'bg-[#00A3B5] text-white' : 'hover:bg-[#00A3B5] hover:text-white')
           ]">
           {{ link.name }}
        </a>

      </ul>

      <!-- ACTION & MOBILE -->
      <div class="flex items-center gap-4">
        <!-- BOUTON CONTACT -->
        <a href="/contact" 
           class="hidden md:block text-white px-8 py-3 font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-wider"
           :class="[
             currentPath !== '/application' 
               ? 'bg-[#008d9d] hover:bg-[#00A3B5]' 
               : 'bg-[#e07b48] hover:bg-[#ff925c]'
           ]">
          Demander une démo
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
           :class="currentPath === link.url ? 'text-[#ff925c]' : 'text-[#00A3B5] hover:text-[#ff925c]'">
          {{ link.name }}
        </a>
        <a href="/contact" 
           class="text-white w-full py-4 font-bold rounded-xl uppercase tracking-widest mt-2"
           :class="[
             currentPath === '/' ? 'bg-[#00A3B5]' : 'bg-[#ff925c]'
           ]">
          Demander une démo
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
  { name: 'Actualités', url: '/articles' },
  { name: 'Contact', url: '/contact' },
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