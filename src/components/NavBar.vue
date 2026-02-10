<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6"
    :class="[currentPath === '/application' ? 'py-3 bg-[#ff925c] backdrop-blur-md shadow-md' : 'py-3 bg-[#03A3B5] backdrop-blur-md shadow-md']"

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
            : 'border-[#03A3B5] bg-white text-[#03A3B5]'
        ]"
      >
        
        <a v-for="(link, index) in links" :key="index" :href="link.url"
           class="px-5 py-2.5 rounded-lg cursor-pointer transition-all duration-300"
           :class="[
             currentPath === '/application'
               ? (currentPath === link.url ? 'bg-[#ff925c] text-white' : 'hover:bg-[#ff925c] hover:text-white')
               : (currentPath === link.url ? 'bg-[#03A3B5] text-white' : 'hover:bg-[#03A3B5] hover:text-white')
           ]">
           {{ link.name }}
        </a>

      </ul>

      <!-- ACTION & MOBILE -->
      <div class="flex items-center gap-4">
        <!-- BOUTON CONTACT -->
        <button @click="openDemoModal" 
           class="hidden md:block text-white px-8 py-3 font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-wider"
           :class="[
             currentPath !== '/application' 
               ? 'bg-[#008d9d] hover:bg-[#03A3B5]' 
               : 'bg-[#e07b48] hover:bg-[#ff925c]'
           ]">
          Demander une démo
        </button>

        <!-- BURGER MENU (MOBILE) -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-[#03A3B5] focus:outline-none bg-white/80 p-2 rounded-lg">
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
           :class="currentPath === link.url ? 'text-[#ff925c]' : 'text-[#03A3B5] hover:text-[#ff925c]'">
          {{ link.name }}
        </a>
        <button @click="openDemoModal" 
           class="text-white w-full py-4 font-bold rounded-xl uppercase tracking-widest mt-2"
           :class="[
             currentPath === '/' ? 'bg-[#03A3B5]' : 'bg-[#ff925c]'
           ]">
          Demander une démo
        </button>
      </div>
    </transition>

    <!-- DEMO MODAL -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="showDemoModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <!-- Background Overlay with stronger blur -->
          <div class="absolute inset-0 bg-black/60 backdrop-blur-md" @click="closeDemoModal"></div>
          
          <!-- Modal Card -->
          <div class="bg-white relative z-10 w-full max-w-md rounded-[30px] p-8 md:p-10 shadow-2xl transform transition-all">
            <button @click="closeDemoModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 class="font-display font-black text-2xl md:text-3xl text-center mb-2 uppercase text-[#03A3B5]">Demander une démo</h2>
            <p class="text-center text-gray-500 mb-8 text-sm">Remplissez ce formulaire pour être recontacté.</p>

            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold uppercase text-gray-500 mb-1 ml-3">Nom</label>
                <input type="text" v-model="demoForm.nom" placeholder="Votre nom" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#03A3B5] transition-colors">
              </div>
              <div>
                <label class="block text-xs font-bold uppercase text-gray-500 mb-1 ml-3">Email</label>
                <input type="email" v-model="demoForm.email" placeholder="votre@email.com" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#03A3B5] transition-colors">
              </div>

              <!-- Feedback Message -->
              <div v-if="feedbackMessage.text" 
                  :class="{'text-green-600': feedbackMessage.type === 'success', 'text-red-500': feedbackMessage.type === 'error'}"
                  class="px-2 text-sm font-bold text-center">
                {{ feedbackMessage.text }}
              </div>

              <button @click="submitDemo" :disabled="isLoading" class="w-full bg-[#03A3B5] text-white font-bold uppercase py-4 rounded-xl hover:bg-[#028a95] transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-300">
                <span v-if="!isLoading">Envoyer la demande</span>
                <span v-else>Envoi en cours...</span>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>

  </nav>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const currentPath = ref('/'); // Par défaut '/'
const showDemoModal = ref(false);
const isLoading = ref(false);

const demoForm = reactive({
  nom: '',
  email: ''
});

const feedbackMessage = reactive({
  text: '',
  type: ''
});

const links = [
  { name: 'Accueil', url: '/' },
  { name: 'Assia', url: '/application' },
  { name: 'Actualités', url: '/articles' },
  { name: 'Contact', url: '/contact' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const openDemoModal = () => {
  showDemoModal.value = true;
  isMobileMenuOpen.value = false;
};

const closeDemoModal = () => {
  showDemoModal.value = false;
  feedbackMessage.text = '';
  feedbackMessage.type = '';
  demoForm.nom = '';
  demoForm.email = '';
};

const submitDemo = async () => {
  feedbackMessage.text = '';
  feedbackMessage.type = '';

  if (!demoForm.nom || !demoForm.email) {
    feedbackMessage.text = 'Veuillez remplir tous les champs.';
    feedbackMessage.type = 'error';
    return;
  }

  isLoading.value = true;

  try {
    const response = await fetch('https://edossah.fr/wp-json/vue-api/v1/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nom: demoForm.nom,
        email: demoForm.email,
        message: 'demo'
      })
    });

    if (response.ok) {
        feedbackMessage.text = 'Votre demande a bien été envoyée !';
        feedbackMessage.type = 'success';
        demoForm.nom = '';
        demoForm.email = '';
        setTimeout(() => {
          closeDemoModal();
        }, 2000);
    } else {
        const errorData = await response.json().catch(() => ({}));
        feedbackMessage.text = errorData.message || "Une erreur est survenue lors de l'envoi.";
        feedbackMessage.type = 'error';
    }
  } catch (error) {
    console.error('Erreur API:', error);
    feedbackMessage.text = "Impossible de contacter le serveur. Veuillez réessayer plus tard.";
    feedbackMessage.type = 'error';
  } finally {
    isLoading.value = false;
  }
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